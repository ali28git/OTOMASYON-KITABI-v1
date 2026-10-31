// Uygulama mantığı: yönlendirme (hash), kenar menü, sayfa render, arama, ilerleme takibi.
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const icerikEl = $('#icerik');
  const sayfaIciEl = $('#sayfaIci');
  const kirintiEl = $('#kirinti');
  const modulListeEl = $('#modulListe');
  const DEPO = 'otomasyonKitabi';

  // ---------- Kalıcı ayarlar ----------
  const ayar = Object.assign({ okunan: {}, tema: 'acik', font: 17, acikModuller: {} },
    JSON.parse(localStorage.getItem(DEPO) || '{}'));
  const kaydet = () => localStorage.setItem(DEPO, JSON.stringify(ayar));

  function temaUygula() {
    document.documentElement.dataset.tema = ayar.tema;
    document.documentElement.style.setProperty('--font-boyut', ayar.font + 'px');
  }
  temaUygula();
  $('#temaBtn').onclick = () => { ayar.tema = ayar.tema === 'koyu' ? 'acik' : 'koyu'; kaydet(); temaUygula(); };
  $('#fontBuyuk').onclick = () => { ayar.font = Math.min(22, ayar.font + 1); kaydet(); temaUygula(); };
  $('#fontKucuk').onclick = () => { ayar.font = Math.max(14, ayar.font - 1); kaydet(); temaUygula(); };
  $('#menuBtn').onclick = () => $('#kenar').classList.toggle('acik');

  // ---------- Yardımcılar ----------
  const M = KITAP.moduller;
  const modulBul = id => M.find(m => m.id === id);
  const icerikVar = (m, b) => !!KITAP.icerik[m.id + '/' + b.id];
  const okunduMu = (m, b) => !!ayar.okunan[m.id + '/' + b.id];
  const hazirSayisi = m => m.bolumler.filter(b => icerikVar(m, b)).length;
  const okunanSayisi = m => m.bolumler.filter(b => okunduMu(m, b)).length;
  const yuzde = (a, b) => b ? Math.round(100 * a / b) : 0;

  // Tüm bölümlerin düz listesi (önceki/sonraki gezinmesi için)
  const duzListe = [];
  M.forEach(m => m.bolumler.forEach(b => duzListe.push({ m, b })));

  // ---------- Kenar menü ----------
  function menuCiz(aktifM, aktifB) {
    modulListeEl.innerHTML = M.map(m => {
      const acik = ayar.acikModuller[m.id] || (aktifM && aktifM.id === m.id);
      return `
      <div class="m-grup ${acik ? 'acik' : ''}" data-id="${m.id}">
        <button class="m-baslik ${aktifM && aktifM.id === m.id ? 'aktif' : ''}">
          <span class="m-no">${m.no}</span>
          <span class="m-ad">${m.baslik}</span>
          <span class="m-ilerleme">${okunanSayisi(m)}/${m.bolumler.length}</span>
          <span class="ok">▶</span>
        </button>
        <div class="b-liste">
          <a class="b-link" href="#/${m.id}">📖 Modüle genel bakış</a>
          ${m.bolumler.map(b => `
            <a class="b-link ${icerikVar(m, b) ? '' : 'bos'} ${aktifB && aktifB.id === b.id ? 'aktif' : ''}"
               href="#/${m.id}/${b.id}">
              <span>${b.id.replace('-', '.')}</span><span>${b.baslik}</span>
              ${okunduMu(m, b) ? '<span class="tik">✓</span>' : ''}
            </a>`).join('')}
        </div>
      </div>`;
    }).join('');

    modulListeEl.querySelectorAll('.m-baslik').forEach(btn => {
      btn.onclick = () => {
        const grup = btn.parentElement;
        grup.classList.toggle('acik');
        ayar.acikModuller[grup.dataset.id] = grup.classList.contains('acik');
        kaydet();
      };
    });
    const aktifLink = modulListeEl.querySelector('.b-link.aktif');
    if (aktifLink) aktifLink.scrollIntoView({ block: 'nearest' });
  }

  function kirinti(parcalar) {
    kirintiEl.innerHTML = [`<a href="#/">Ana Sayfa</a>`, ...parcalar]
      .join('<span class="ayrac">/</span>');
  }

  // ---------- Ana sayfa ----------
  function anaSayfa() {
    const top = duzListe.length;
    const okunan = duzListe.filter(x => okunduMu(x.m, x.b)).length;
    const hazir = duzListe.filter(x => icerikVar(x.m, x.b)).length;
    icerikEl.innerHTML = `
      <section class="kapak">
        <h1>Otomasyon Makine Tasarımı El Kitabı</h1>
        <p>Mekatronik geçmişli bir tasarımcı için endüstride gerçekten işe yarayan mekanik tasarım
        bilgisi: malzemeden makine elemanlarına, tahrikten makine emniyetine kadar.
        Bir modül seçip oku, bölüm sonundaki soruları cevapla, okuduklarını işaretle.</p>
        <div class="genel-ilerleme">
          <div style="display:flex;justify-content:space-between;font-size:13px;margin-bottom:6px">
            <span>Okuma ilerlemesi: ${okunan}/${top} bölüm</span><span>Yazılan: ${hazir}/${top}</span>
          </div>
          <div class="cubuk"><span style="width:${yuzde(okunan, top)}%"></span></div>
        </div>
      </section>
      <div class="kart-izgara">
        ${M.map(m => {
          const h = hazirSayisi(m), o = okunanSayisi(m), n = m.bolumler.length;
          return `
          <a class="m-kart" href="#/${m.id}">
            <span class="etiket">MODÜL ${m.no}</span>
            <h3>${m.baslik}</h3>
            <p>${m.ozet}</p>
            <div class="alt">
              <span>${o}/${n} okundu</span>
              <span class="durum ${h ? 'hazir' : 'yakinda'}">${h === n ? 'Hazır' : h ? `${h}/${n} yazıldı` : 'Yakında'}</span>
            </div>
            <div class="cubuk"><span style="width:${yuzde(o, n)}%"></span></div>
          </a>`;
        }).join('')}
      </div>`;
    sayfaIciEl.innerHTML = '';
    kirinti([]);
    menuCiz(null, null);
  }

  // ---------- Modül sayfası ----------
  function modulSayfasi(m) {
    icerikEl.innerHTML = `
      <div class="modul-ust">
        <span class="etiket">MODÜL ${m.no}</span>
        <h1>${m.baslik}</h1>
        <p>${m.ozet}</p>
      </div>
      <div class="hedef-kutu">
        <h3>🎯 Bu modülü bitirdiğinde</h3>
        <ul>${m.hedefler.map(h => `<li>${h}</li>`).join('')}</ul>
      </div>
      <div class="bolum-liste">
        ${m.bolumler.map(b => `
          <a class="bolum-satir ${icerikVar(m, b) ? '' : 'bos'}" href="#/${m.id}/${b.id}">
            <span class="no">${b.id.replace('-', '.')}</span>
            <span class="ad">${b.baslik}</span>
            ${okunduMu(m, b) ? '<span class="tik">✓</span>' : icerikVar(m, b) ? '' : '<span class="durum yakinda">Yakında</span>'}
          </a>`).join('')}
      </div>`;
    sayfaIciEl.innerHTML = '';
    kirinti([`<a href="#/${m.id}">Modül ${m.no}: ${m.baslik}</a>`]);
    menuCiz(m, null);
  }

  // ---------- Bölüm sayfası ----------
  function bolumSayfasi(m, b, vurgu) {
    const html = KITAP.icerik[m.id + '/' + b.id];
    const idx = duzListe.findIndex(x => x.m === m && x.b === b);
    const onceki = duzListe[idx - 1], sonraki = duzListe[idx + 1];

    const govde = html || `
      <div class="yakinda-kutu">
        <div class="ikon">✍️</div>
        <h2 style="border:0">Bu bölüm henüz yazılmadı</h2>
        <p>Modül sırası geldiğinde içerik eklenecek.</p>
      </div>`;

    icerikEl.innerHTML = `
      <article class="sayfa">
        <span class="bolum-etiket">MODÜL ${m.no} · BÖLÜM ${b.id.replace('-', '.')}</span>
        <h1>${b.baslik}</h1>
        ${govde}
      </article>
      ${html ? `<div class="okundu-satir">
        <button class="okundu-btn ${okunduMu(m, b) ? 'evet' : ''}" id="okunduBtn">
          ${okunduMu(m, b) ? '✓ Okundu olarak işaretlendi' : 'Okudum, işaretle'}
        </button></div>` : ''}
      <nav class="alt-gezinme">
        ${onceki ? `<a href="#/${onceki.m.id}/${onceki.b.id}"><small>← Önceki</small>${onceki.b.id.replace('-', '.')} ${onceki.b.baslik}</a>` : '<span style="flex:1"></span>'}
        ${sonraki ? `<a class="sonraki" href="#/${sonraki.m.id}/${sonraki.b.id}"><small>Sonraki →</small>${sonraki.b.id.replace('-', '.')} ${sonraki.b.baslik}</a>` : '<span style="flex:1"></span>'}
      </nav>`;

    // Tabloları kaydırılabilir kaba sar
    icerikEl.querySelectorAll('.sayfa table').forEach(t => {
      if (!t.parentElement.classList.contains('tablo-kap')) {
        const k = document.createElement('div'); k.className = 'tablo-kap';
        t.replaceWith(k); k.appendChild(t);
      }
    });

    const btn = $('#okunduBtn');
    if (btn) btn.onclick = () => {
      const k = m.id + '/' + b.id;
      if (ayar.okunan[k]) delete ayar.okunan[k]; else ayar.okunan[k] = true;
      kaydet(); bolumSayfasi(m, b);
    };

    sayfaIciOlustur();
    if (vurgu) vurgula(vurgu);
    kirinti([`<a href="#/${m.id}">Modül ${m.no}: ${m.baslik}</a>`, `<span>${b.baslik}</span>`]);
    menuCiz(m, b);
  }

  // Sayfa içi içindekiler (h2/h3'ten)
  function sayfaIciOlustur() {
    const basliklar = icerikEl.querySelectorAll('.sayfa h2, .sayfa h3');
    if (basliklar.length < 2) { sayfaIciEl.innerHTML = ''; return; }
    basliklar.forEach((h, i) => { h.id = 'b' + i; });
    sayfaIciEl.innerHTML = '<h4>Bu sayfada</h4>' + [...basliklar].map(h =>
      `<a href="javascript:void 0" data-hedef="${h.id}" class="${h.tagName.toLowerCase()}">${h.textContent}</a>`).join('');
    sayfaIciEl.querySelectorAll('a').forEach(a => {
      a.onclick = () => document.getElementById(a.dataset.hedef).scrollIntoView({ behavior: 'smooth' });
    });
    const gozlemci = new IntersectionObserver(girdiler => {
      girdiler.forEach(g => {
        if (g.isIntersecting) {
          sayfaIciEl.querySelectorAll('a').forEach(a => a.classList.toggle('aktif', a.dataset.hedef === g.target.id));
        }
      });
    }, { rootMargin: '-70px 0px -70% 0px' });
    basliklar.forEach(h => gozlemci.observe(h));
  }

  // ---------- Arama ----------
  const duzMetin = html => { const d = document.createElement('div'); d.innerHTML = html; return d.textContent.replace(/\s+/g, ' '); };
  const kucuk = s => s.toLocaleLowerCase('tr');
  let indeks = null;
  function indeksHazirla() {
    if (indeks) return indeks;
    indeks = duzListe.filter(x => icerikVar(x.m, x.b)).map(x => ({
      ...x, metin: duzMetin(KITAP.icerik[x.m.id + '/' + x.b.id])
    }));
    return indeks;
  }
  function aramaSayfasi(sorgu) {
    const q = kucuk(sorgu.trim());
    if (q.length < 2) return yonlendir();
    const kac = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const sonuc = [];
    indeksHazirla().forEach(x => {
      const metinK = kucuk(x.metin);
      const baslikEs = kucuk(x.b.baslik).includes(q);
      const i = metinK.indexOf(q);
      if (i < 0 && !baslikEs) return;
      const sayi = metinK.split(q).length - 1;
      const bas = Math.max(0, i - 80);
      let parca = i >= 0 ? (bas ? '…' : '') + x.metin.substr(bas, 220) + '…' : x.metin.substr(0, 200) + '…';
      parca = parca.replace(new RegExp(kac(sorgu.trim()), 'gi'), s => `<mark>${s}</mark>`);
      sonuc.push({ ...x, parca, puan: sayi + (baslikEs ? 20 : 0) });
    });
    sonuc.sort((a, b) => b.puan - a.puan);
    icerikEl.innerHTML = `
      <div class="modul-ust"><span class="etiket">ARAMA</span>
        <h1>"${sorgu}"</h1><p>${sonuc.length} bölümde bulundu.</p></div>
      ${sonuc.map(s => `
        <a class="arama-sonuc" href="#/${s.m.id}/${s.b.id}?v=${encodeURIComponent(sorgu.trim())}">
          <small>Modül ${s.m.no} · ${s.b.id.replace('-', '.')}</small>
          <strong style="display:block">${s.b.baslik}</strong>
          <p>${s.parca}</p>
        </a>`).join('') || '<p>Sonuç bulunamadı.</p>'}`;
    sayfaIciEl.innerHTML = '';
    kirinti(['<span>Arama</span>']);
  }
  function vurgula(sorgu) {
    const q = kucuk(sorgu);
    const yurut = document.createTreeWalker($('.sayfa'), NodeFilter.SHOW_TEXT);
    const dugumler = [];
    while (yurut.nextNode()) dugumler.push(yurut.currentNode);
    let ilk = null;
    dugumler.forEach(n => {
      const t = n.nodeValue, i = kucuk(t).indexOf(q);
      if (i < 0) return;
      const mk = document.createElement('mark');
      const sag = n.splitText(i); sag.splitText(sorgu.length);
      mk.textContent = sag.nodeValue; sag.replaceWith(mk);
      if (!ilk) ilk = mk;
    });
    if (ilk) setTimeout(() => ilk.scrollIntoView({ block: 'center' }), 50);
  }
  let zamanlayici;
  $('#aramaKutusu').addEventListener('input', e => {
    clearTimeout(zamanlayici);
    zamanlayici = setTimeout(() => {
      const v = e.target.value;
      if (v.trim().length >= 2) aramaSayfasi(v); else yonlendir();
    }, 250);
  });

  // ---------- Yönlendirme ----------
  function yonlendir() {
    const [yol, sorgu] = location.hash.replace(/^#\/?/, '').split('?');
    const [mId, bId] = yol.split('/');
    const v = sorgu && new URLSearchParams(sorgu).get('v');
    const m = modulBul(mId);
    if (!m) anaSayfa();
    else if (!bId) modulSayfasi(m);
    else {
      const b = m.bolumler.find(x => x.id === bId);
      b ? bolumSayfasi(m, b, v) : modulSayfasi(m);
    }
    $('#kenar').classList.remove('acik');
    if (!v) window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', yonlendir);
  yonlendir();
})();
