// MODÜL 3 — Teknik Resim ve Toleranslar (Bölüm 3.1 – 3.4: Görünüşler, Genel Toleranslar, ISO Geçmeler, Rulman/Pim Geçmeleri)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m3', '3-1', `
<p class="giris">Teknik resim; makine tasarımcısı ile talaşlı imalat operatörü, kaynakçı ve metroloji kalite kontrol mühendisi arasındaki evrensel hukuki sözleşmedir. CAD ekranında 3 boyutlu model ne kadar kusursuz görünürse görünsün; teknik resmi eksik, çelişkili veya standart dışı projeksiyonla çizilmiş bir parça atölye tezgâhında doğrudan hurdaya dönüşür. Bu bölümde projeksiyon disiplinini, ISO 128 kesit alma kurallarını, kapalı ölçü zinciri yasaklarını ve CATIA Drafting püf noktalarını inceliyoruz.</p>

<h2>Ortografik İzdüşüm Sistemleri: 1. Açı (Avrupa) vs. 3. Açı (Amerikan)</h2>
<p>Endüstriyel çizimlerde iki ana ortografik projeksiyon standardı geçerlidir. Teknik resim antetinde (sağ alt köşe) yer alan kesik koni sembolü, çizimi okuyan ustanın parçaya nereden bakıp hangi görünüşü nereye yerleştireceğini belirler:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Projeksiyon Parametresi</th>
    <th>1. Açı Projeksiyonu (First Angle - ISO / Avrupa)</th>
    <th>3. Açı Projeksiyonu (Third Angle - ANSI / ABD & Japonya)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Antet Sembolü</strong></td>
    <td>Koni solda dar, sağda geniş; daireler sağda.<br>(Gözlemci → Parça → İzdüşüm Düzlemi)</td>
    <td>Koni solda geniş, sağda dar; daireler solda.<br>(Gözlemci → İzdüşüm Düzlemi → Parça)</td>
  </tr>
  <tr>
    <td><strong>Üstten Görünüş (Top View)</strong></td>
    <td>Ön görünüşün <strong>ALTINA</strong> çizilir.</td>
    <td>Ön görünüşün <strong>ÜSTÜNE</strong> çizilir.</td>
  </tr>
  <tr>
    <td><strong>Soldan Görünüş (Left View)</strong></td>
    <td>Ön görünüşün <strong>SAĞINA</strong> çizilir.</td>
    <td>Ön görünüşün <strong>SOLUNA</strong> çizilir.</td>
  </tr>
  <tr>
    <td><strong>Geçerli Olduğu Coğrafya</strong></td>
    <td>Türkiye, Almanya (DIN), tüm Avrupa ve ISO standardı kullanan ülkeler.</td>
    <td>ABD (ASME Y14.3), Kanada, Japonya (JIS) ve bu ülkelere çalışan fason tedarikçiler.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu tehlike"><span class="kb">Sahadan Yaşanmış Facia: Ayna Görüntüsü (Mirror) Kalıp Bloğu</span>
Amerikan bir otomotiv ana sanayisine pres kalıbı tasarlayan bir Türk mühendis, antetteki projeksiyon sembolünü kontrol etmeden Türkiye varsayılanı olan 1. Açı düzeninde teknik resim basmıştır. CNC operatörü çizimi 3. Açı (Amerikan standardı) kabul ederek sol kuleyi sağ kule zannedip işlemiş; 15.000 Euro değerindeki 1.2379 takım çeliği blok tamamen simetrik ters (ayna görüntüsü) üretilerek hurdaya ayrılmıştır! <strong>Kural: Antetteki projeksiyon konisi daima iki kez kontrol edilmelidir.</strong></div>

<h2>Görünüş Seçimi ve Kesit Alma Kuralları (ISO 128)</h2>
<p>Teknik resimde amaç çok sayıda görünüş yerleştirmek değil; parçanın geometrisini, toleranslarını ve iç kanallarını <strong>en az görünüşle ve kesik (görünmeyen) çizgilere ihtiyaç duymadan</strong> tam tanımlamaktır.</p>

<h3>Montaj Kesitlerinde Boyuna ASLA Taranmayan Standart Elemanlar (ISO 128-47)</h3>
<p>Montaj teknik resimlerinde kesit düzlemi aşağıdaki elemanların ekseninden boyuna geçse dahi bu elemanlar <strong>KESİLMEMİŞ (DOLU)</strong> bırakılır ve taranmaz:</p>
<ul>
  <li><strong>Bağlantı Elemanları:</strong> Cıvatalar, somunlar, saplamalar, pullar, rondelalar ve perçinler.</li>
  <li><strong>Miller ve Şaftlar:</strong> Dolu transmisyon milleri, kamalı miller ve akslar (Sadece kama yuvası için kısmi koparma kesiti alınır).</li>
  <li><strong>Merkezleme Pimleri ve Kamalar:</strong> Silindirik pimler, konik pimler ve paralel kamalar.</li>
  <li><strong>Rulman Yuvarlanma Elemanları:</strong> Bilyalar, silindirik ve konik makaralar (Sadece iç ve dış bilezikler taranır).</li>
  <li><strong>Federler (Takviye Nervürleri / Ribs):</strong> Döküm veya kaynaklı braketlerdeki ince takviye federleri boyuna kesildiğinde <strong>taranmaz</strong>. Taranırsa parça masif dev bir kütük gibi yanlış algılanır. Feder sadece enine (dik) kesildiğinde taranır.</li>
</ul>

<h2>Ölçülendirme İlkeleri ve Kapalı Ölçü Zinciri Hatası</h2>
<ol>
  <li><strong>Ortak Datuma Göre Ölçülendirme:</strong> Ölçüleri birbirine zincirleme bağlamayın. Parçanın montajda oturduğu işlenmiş ana yüzeyi (Datum A) referans (0 noktası) kabul ederek tüm eksenleri bu referanstan ölçülendirin.</li>
  <li><strong>Kapalı Ölçü Zinciri Yasağı:</strong> Bir parçanın toplam boyunu verdiyseniz, ara kademe ölçülerinin tamamını bağlayarak zinciri kapatmayın! Kademelerden en önemsiz olanını serbest bırakın veya parantez içinde referans ölçü <code>(50)</code> olarak belirtin. Aksi halde genel toleranslar çelişir ve parçayı işleyen usta kararsız kalır.</li>
  <li><strong>Görünmeyen Kenara Ölçü Vermeme:</strong> Kesik çizgili (gizli) kenarlara asla ölçü vermeyin. O bölgeden lokal kesit alarak kenarı net görünür çizgiye dönüştürün.</li>
  <li><strong>Dişli Delik Çift Derinlik Kuralı:</strong> Kör deliklerde daima iki derinlik belirtilmelidir: Matkap delik derinliği ve Kılavuz diş boyu (Örn: <code>M8x1.25 - 6H ↧ 16, Matkap ↧ 20</code>).</li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1. Açı Projeksiyonu (First Angle)</strong></td>
    <td>ISO standardı ortografik izdüşüm. Nesne gözlemci ile izdüşüm düzlemi arasındadır; sol görünüş sağa, üst görünüş alta çizilir.</td>
  </tr>
  <tr>
    <td><strong>3. Açı Projeksiyonu (Third Angle)</strong></td>
    <td>ASME/ANSI standardı ortografik izdüşüm. İzdüşüm düzlemi gözlemci ile nesne arasındadır; sol görünüş sola, üst görünüş üste çizilir.</td>
  </tr>
  <tr>
    <td><strong>Ortografik İzdüşüm</strong></td>
    <td>Üç boyutlu bir cismin birbirine dik izdüşüm düzlemleri üzerine paralel bakış ışınlarıyla iki boyutlu görünüşlerinin aktarılması yöntemi (ISO 5456).</td>
  </tr>
  <tr>
    <td><strong>Kapalı Ölçü Zinciri</strong></td>
    <td>Bir geometrik doğrultudaki tüm kademe ölçüleri ile toplam ölçünün tamamına tolerans verilerek imalatçının tolerans çakışması yaşamasına yol açan tasarım hatası.</td>
  </tr>
  <tr>
    <td><strong>Referans Ölçü (Parantezli Ölçü)</strong></td>
    <td>İmalat ve kalite kontrol için bağlayıcı olmayan, sadece montajcıya bilgi amaçlı verilen ve üzerinde tolerans işletilmeyen ölçü [Örn: (100)].</td>
  </tr>
  <tr>
    <td><strong>Kısmi Kesit (Lokal Koparma)</strong></td>
    <td>Parçanın tamamını kesmeden, sadece kama yuvası veya kör delik gibi bir iç detayı göstermek için serbest el çizgisiyle sınırlandırılan yerel kesit görünüşü.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Antetteki projeksiyon konisi sembolü kritiktir; Avrupa'da 1. Açı, ABD ve Japonya'da 3. Açı geçerlidir.</li>
  <li>Montaj kesitlerinde cıvatalar, miller, pimler, kamalar, rulman bilyaları ve <strong>federler boyuna taranmaz</strong>.</li>
  <li>Ölçülendirmede kapalı ölçü zinciri yapılmaz; en az bir serbest kademe bırakılmalı veya referans <code>(X)</code> ölçü verilmelidir.</li>
  <li>Ölçüler görünmeyen kesik çizgilere verilmez; lokal veya tam kesit alınarak net kenarlardan ölçülendirilir.</li>
  <li>Kör dişlerde matkap ucu derinliği ile kılavuz diş boyu teknik resimde ayrı ayrı belirtilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kaynaklı bir L-braketin gövdesinde eğilmeye karşı 10 mm kalınlığında bir üçgen feder (takviye nervürü) vardır. Montaj resminde federin tam ortasından boyuna kesit aldınız. Feder taranır mı?</summary>
<div>HAYIR, taranmaz! ISO 128-47 standardına göre federler, nervürler ve takviye sacları boyuna kesildiklerinde taranmazlar, kesilmemiş dolu parça gibi bırakılırlar. Eğer feder taranırsa, teknik resmi okuyan usta parçayı arkaya doğru komple dolu masif bir blok zanneder. Feder sadece enine (dik) kesildiğinde taranır.</div></details>
<details><summary>Boyu 100 mm olan iki kademeli bir milde; sol kademe 40 mm, sağ kademe 60 mm, toplam boy da 100 mm olarak teknik resimde ölçülendirilmiştir. Kalite kontrol bu resmi neden reddeder?</summary>
<div>Bu hata <strong>aşırı ölçülendirme (kapalı ölçü zinciri)</strong> hatasıdır. Genel tolerans ISO 2768-m olsun (±0,3 mm). İmalatçı sol kademeyi 40,2 mm, sağ kademeyi 60,2 mm işler; her iki kademe de kendi içinde tolerans dahilindedir. Ancak toplam boy 100,4 mm olur ve toplam ölçü sınırını (100 ± 0,3 mm) aşarak hurdaya çıkar! Çözüm: İki kademeden önemsiz olanını ölçülendirmemek veya toplam boyu parantez içinde <code>(100)</code> referans ölçü yapmaktır.</div></details>
<details><summary>CATIA Drafting modülünde 3D modelden teknik resim türetildiğinde M10 dişli delikler teknik resimde düz delik gibi görünmektedir. Kök neden ve çözüm nedir?</summary>
<div>CATIA Drafting modülünde görünüş özellikleri varsayılan olarak "Thread" (Vida Dişi) seçeneği kapalı gelebilir. Çözüm: Görünüş çerçevesine sağ tıklanır → <em>Properties</em> → <em>View</em> sekmesinde <strong>Thread</strong> onay kutusu işaretlenir. Böylece diş dibi çapını gösteren 3/4 daire ince çizgi görünüşe eklenir; aksi halde atölye dişi fark etmeyip deliği düz bırakır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-2', `
<p class="giris">Teknik resimde genç mühendislerin düştüğü iki zıt aşırılık vardır: Ya hiçbir ölçüye tolerans yazmayıp parçanın uyumunu ustanın tezgâh hassasiyetine bırakmak ya da her çizgiye gereksiz yere ±0,02 mm yazarak imalat maliyetini 5 katına fırlatmak. Modern endüstride özel tolerans yazılmayan tüm boyutların yasal bağlayıcılığı <strong>Genel Toleranslar (ISO 2768)</strong> standardı ile teminat altına alınır.</p>

<h2>ISO 2768 Standardı ve Yapısı (ISO 2768-mK)</h2>
<p>Teknik resim antetinde yer alan <strong>"Genel Tolerans: ISO 2768-mK"</strong> ibaresi iki bağımsız uluslararası bölümden oluşur:</p>
<ul>
  <li><strong>ISO 2768-1 (Boyutsal Toleranslar):</strong> Doğrusal boyutlar, pahlar, radyuslar ve açılar için 4 hassasiyet sınıfı tanımlar:
    <ul>
      <li><code>f</code> (fine - hassas): Takım tezgahı iş milleri, hassas kalıplar, mastarlar.</li>
      <li><code>m</code> (medium - orta): <strong>Genel makine imalatı ve endüstriyel otomasyonun evrensel standardı.</strong></li>
      <li><code>c</code> (coarse - kaba): Kaba kaynaklı şaseler, alevli/plazma kesim parçaları.</li>
      <li><code>v</code> (very coarse - çok kaba): Dökümhane kaba temizleme boyutları.</li>
    </ul>
  </li>
  <li><strong>ISO 2768-2 (Geometrik Form Toleransları):</strong> Düzlemsellik, doğrusallık, diklik ve dairesel salgı için 3 genel geometrik sınıf tanımlar: <code>H</code> (hassas), <code>K</code> (orta), <code>L</code> (kaba).</li>
</ul>

<h2>ISO 2768-1 Doğrusal Boyut Toleransları Tablosu (mm)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Hassasiyet Sınıfı</th>
    <th>0,5 – 3 mm</th>
    <th>&gt;3 – 6 mm</th>
    <th>&gt;6 – 30 mm</th>
    <th>&gt;30 – 120 mm</th>
    <th>&gt;120 – 400 mm</th>
    <th>&gt;400 – 1000 mm</th>
    <th>&gt;1000 – 2000 mm</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>f (Hassas)</strong></td>
    <td>±0,05</td>
    <td>±0,05</td>
    <td>±0,10</td>
    <td>±0,15</td>
    <td>±0,20</td>
    <td>±0,30</td>
    <td>±0,50</td>
  </tr>
  <tr>
    <td><strong>m (Orta - Standart)</strong></td>
    <td><strong>±0,10</strong></td>
    <td><strong>±0,10</strong></td>
    <td><strong>±0,20</strong></td>
    <td><strong>±0,30</strong></td>
    <td><strong>±0,50</strong></td>
    <td><strong>±0,80</strong></td>
    <td><strong>±1,20</strong></td>
  </tr>
  <tr>
    <td><strong>c (Kaba)</strong></td>
    <td>±0,20</td>
    <td>±0,30</td>
    <td>±0,50</td>
    <td>±0,80</td>
    <td>±1,20</td>
    <td>±2,00</td>
    <td>±3,00</td>
  </tr>
  <tr>
    <td><strong>v (Çok Kaba)</strong></td>
    <td>—</td>
    <td>±0,50</td>
    <td>±1,00</td>
    <td>±1,50</td>
    <td>±2,50</td>
    <td>±4,00</td>
    <td>±6,00</td>
  </tr>
</tbody>
</table>
</div>

<h2>Farklı İmalat Disiplinlerinde Genel Tolerans Standartları</h2>
<div class="kutu uyari"><span class="kb">Her Parçanın Antetine Körü Körüne ISO 2768-m Yazılamaz!</span>
ISO 2768 yalnızca talaş kaldırılarak işlenen (CNC freze/torna) metal parçalar için fiziksel olarak geçerlidir. Diğer proseslerde şu standartlar belirtilmelidir:
<ul>
  <li><strong>Kaynaklı Konstrüksiyonlar:</strong> <strong>ISO 13920</strong> (Örn: <code>ISO 13920-BF</code> veya <code>CG</code>). Kaynak büzülmesiyle 2 metrelik bir şasede ISO 2768-m (±1,2 mm) yakalamak imkânsızdır; ISO 13920 Sınıf C'de ±6 mm tolerans geçerlidir.</li>
  <li><strong>Sac Kesim ve Abkant Büküm:</strong> <strong>DIN 6930-2</strong> veya ISO 2768-c (kaba). Sac et kalınlığı dalgalanması yüzünden büküm ölçüleri ±0,5 mm oynayabilir.</li>
  <li><strong>Plastik Enjeksiyon ve 3D Baskı:</strong> <strong>DIN 16742</strong> (Kalıplama çekme toleransları).</li>
  <li><strong>Alüminyum Ekstrüzyon Profiller:</strong> <strong>EN 755-9</strong> veya <strong>EN 12020-2</strong>.</li>
</ul>
</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>ISO 2768-mK</strong></td>
    <td>Talaşlı imalatta özel tolerans belirtilmemiş doğrusal boyutlar için 'orta' (m) ve geometrik formlar için 'orta' (K) genel tolerans standart normu.</td>
  </tr>
  <tr>
    <td><strong>ISO 13920</strong></td>
    <td>Kaynaklı çelik ve alüminyum konstrüksiyonların boyutsal (A-D) ve açısal/geometrik (E-H) genel toleranslarını belirleyen uluslararası kaynak normu.</td>
  </tr>
  <tr>
    <td><strong>DIN 6930-2</strong></td>
    <td>Soğuk şekillendirilmiş sac parçaların (zımbalama, lazer kesim, abkant büküm) genel toleranslarını düzenleyen standart norm.</td>
  </tr>
  <tr>
    <td><strong>DIN 16742</strong></td>
    <td>Plastik enjeksiyonla kalıplanmış parçalarda soğuma çekmesi (shrinkage) ve anizotropik büzülmeyi yöneten plastik genel tolerans normu.</td>
  </tr>
  <tr>
    <td><strong>Nominal Boyut</strong></td>
    <td>Tasarımcının CAD modelde tanımladığı, üzerinde hiçbir artı/eksi sapma bulunmayan teorik temel ölçü değeri.</td>
  </tr>
  <tr>
    <td><strong>Tolerans Alanı</strong></td>
    <td>Üst sınır ölçüsü ile alt sınır ölçüsü arasındaki kabul edilebilir boyutsal değişim aralığı (T = E<sub>s</sub> − E<sub>i</sub>).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Teknik resimde özel tolerans yazılmayan tüm serbest ölçüler antetteki <strong>Genel Tolerans standardına</strong> tabidir.</li>
  <li>CNC talaşlı imalat parçalarında antete <strong>ISO 2768-mK</strong> yazılır.</li>
  <li>ISO 2768-m sınıfında tolerans ölçü büyüdükçe genişler: 25 mm için ±0,2 mm iken, 300 mm için ±0,5 mm, 1500 mm için ±1,2 mm'dir.</li>
  <li>Kaynaklı karkaslarda asla ISO 2768 kullanılmaz; <strong>ISO 13920</strong> standardı seçilir.</li>
  <li>Fonksiyonel olmayan serbest ölçülere keyfi dar tolerans yazmak parça maliyetini %40–60 artırır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>CNC frezede işlenecek bir çelik gövdenin antetinde "ISO 2768-m" yazmaktadır. Resimde bir kanal genişliği "40" olarak verilmiş (özel tolerans yazılmamış). Bu ölçünün kabul edilebilir alt ve üst sınırları nedir?</summary>
<div>ISO 2768-1 tablosuna bakılır: 40 mm ölçüsü <strong>"&gt;30 – 120 mm"</strong> aralığındadır. Bu aralık için "m" sınıfı tolerans <strong>±0,30 mm</strong>'dir. Dolayısıyla üretilen kanal genişliği <strong>39,70 mm ile 40,30 mm</strong> arasında ise kalite kontrolden tam geçer.</div></details>
<details><summary>3000 mm boyundaki kaynaklı profil robot hücresi şasesinin antetine genç mühendis ISO 2768-m yazmıştır. İmalat ustası neden bu resmi geri gönderir?</summary>
<div>3000 mm boyundaki bir kaynaklı şasede kaynak çekmesi ve distorsiyonlar kaçınılmazdır. ISO 2768-m talaşlı imalat normudur ve 3 metre boyutta ±1,5 mm gibi kaynakla tutturulması imkânsız bir tolerans talep eder. Bu hassasiyeti yakalamak için dev bir portal CNC frezede tüm şasenin taranması gerekir ki bu da maliyeti 4 kat artırır. Doğru norm <strong>ISO 13920-C</strong> olmalıdır (kaynaklı şase için ±6 mm tolerans yeterlidir).</div></details>
<details><summary>Tasarımcı bir milin serbest havada duran kademe boyuna "50 ± 0,01 mm" yazmıştır. Bu toleransın atölyeye ve projeye maliyet zararı nedir?</summary>
<div>Fonksiyonel olmayan serbest bir boyuta ±0,01 mm (10 mikron) tolerans vermek, CNC operatörünün parçayı hızlıca tornalamak yerine her parçada tezgâhı durdurup mikrometreyle ölçüm yapmasına, finiş hızını düşürmesine ve hurda oranının fırlamasına yol açar. Parça birim maliyeti %50 artar. Serbest ölçüler toleranssız bırakılmalı ve ISO 2768-m'e terk edilmelidir.</div></details>
</div>
`);

KITAP.bolum('m3', '3-3', `
<p class="giris">Makine mühendisliğinde iki silindirik parça birbiriyle eşleştiğinde üç mekanik senaryodan biri gerçekleşir: Ya parçalar birbiri içinde serbestçe dönecektir (boşluklu geçme), ya sıfır boşlukla merkezlenip elle sökülebilecektir (ara geçme), ya da devasa sürtünme kuvvetiyle birbirine preslenerek tek bir parça gibi kilitlenecektir (sıkı geçme). Bu mekanik ilişkiyi yöneten uluslararası mühendislik dili <strong>ISO 286 Tolerans ve Geçme Sistemidir</strong>.</p>

<h2>Temel Prensipler: Büyük Harf, Küçük Harf ve Sıfır Çizgisi</h2>
<div class="iki-sutun">
  <div>
    <h4>DELİK / Dişi Eleman (Büyük Harf: A … ZC)</h4>
    <p>Delik, kama kanalı, rulman yuvası gibi dişi geometrileri temsil eder.</p>
    <ul>
      <li><strong>"H" Delik (Esas Delik):</strong> Alt sapması tam sıfırdır (EI = 0). Yani delik nominal ölçünün altına asla inemez! Daima nominal ölçü ile artı tolerans arasındadır (Örn: Ø20 H7 = <code>+0,021 / 0,000 mm</code>).</li>
    </ul>
  </div>
  <div>
    <h4>MİL / Erkek Eleman (Küçük Harf: a … zc)</h4>
    <p>Mil dış çapı, kama genişliği, merkezleme pimi gibi erkek geometrileri temsil eder.</p>
    <ul>
      <li><strong>"h" Mil (Esas Mil):</strong> Üst sapması tam sıfırdır (es = 0). Yani mil nominal ölçünün üstüne asla çıkamaz! Daima nominal ölçü ile eksi tolerans arasındadır (Örn: Ø20 h6 = <code>0,000 / −0,013 mm</code>).</li>
    </ul>
  </div>
</div>

<h2>Neden Makine İmalatının %95'inde "Esas Delik Sistemi" Kullanılır?</h2>
<div class="kutu not"><span class="kb">Takımhane Ekonomisi ve Rayba Maliyeti</span>
Bir deliği mikron hassasiyetinde işlemek için pahalı standart takımlar (matkap, rayba, bara) kullanılır. Piyasada <strong>Ø20 H7 rayba</strong> standart ve ucuzdur. Eğer "Esas Mil" sistemi seçip deliğe F7, P7, S7 gibi ölçüler vermeye kalkarsanız, her çap için yüzlerce Euro'ya özel rayba yaptırmak zorunda kalırsınız!<br><br>
Oysa mil tornada işlenir; CNC tornacı tek bir standart karbür uçla mili <code>g6</code> da işler, <code>k6</code> da işler, <code>p6</code> da işler. Bu sebeple endüstride <strong>Daima Delik H7 sabit tutulur; geçme karakteri milin tolerans harfiyle (g, h, j, k, m, p, s) değiştirilir</strong>.</div>

<h2>3 Temel Geçme Grubu ve Sayısal Örnekler (Ø20 mm Referansında)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Geçme Sınıfı</th>
    <th>ISO Kodu</th>
    <th>Delik Toleransı (H7) [mm]</th>
    <th>Mil Toleransı [mm]</th>
    <th>Min. Boşluk / Sıkılık</th>
    <th>Maks. Boşluk / Sıkılık</th>
    <th>Mekanik Karakter ve Kullanım Yeri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2"><strong>Boşluklu Geçme<br>(Clearance Fit)</strong></td>
    <td><strong>H7 / g6</strong></td>
    <td>+0,021 / 0,000</td>
    <td>−0,007 / −0,020 (g6)</td>
    <td><strong>+0,007 mm Boşluk</strong></td>
    <td><strong>+0,041 mm Boşluk</strong></td>
    <td><strong>Hassas Kayan Geçme:</strong> Yağ filmiyle rahatça kayar ve döner. Takım tezgahı milleri, hassas kızaklar.</td>
  </tr>
  <tr>
    <td><strong>H8 / f7</strong></td>
    <td>+0,033 / 0,000</td>
    <td>−0,020 / −0,041 (f7)</td>
    <td><strong>+0,020 mm Boşluk</strong></td>
    <td><strong>+0,074 mm Boşluk</strong></td>
    <td><strong>Serbest Dönen Geçme:</strong> Bronz burç - mil yataklamaları, konveyör avaraları. Isınsa bile kilitlenmez.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Ara Geçme<br>(Transition Fit)</strong></td>
    <td><strong>H7 / h6</strong></td>
    <td>+0,021 / 0,000</td>
    <td>0,000 / −0,013 (h6)</td>
    <td><strong>0,000 mm (Sıfır Temas)</strong></td>
    <td><strong>+0,034 mm Boşluk</strong></td>
    <td><strong>Kayar / İtme Geçme:</strong> Elle veya plastik tokmakla monte edilir. Sökülebilir dişli kasnak göbekleri.</td>
  </tr>
  <tr>
    <td><strong>H7 / k6</strong></td>
    <td>+0,021 / 0,000</td>
    <td>+0,015 / +0,002 (k6)</td>
    <td><strong>−0,002 mm Sıkılık</strong></td>
    <td><strong>+0,019 mm Boşluk</strong></td>
    <td><strong>Tokmak Geçme:</strong> Bakır çekiçle vurarak geçer. <strong>Rulman iç bileziğinin mile montaj standardı!</strong> Boşluksuz merkezler.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Sıkı Geçme<br>(Interference Fit)</strong></td>
    <td><strong>H7 / p6</strong></td>
    <td>+0,021 / 0,000</td>
    <td>+0,035 / +0,022 (p6)</td>
    <td><strong>−0,001 mm Sıkılık</strong></td>
    <td><strong>−0,035 mm Sıkılık</strong></td>
    <td><strong>Hafif Pres Geçme:</strong> Hidrolik presle basılır. Kamasız tork iletimi, sabit merkezleme pimleri, burç dış çapı.</td>
  </tr>
  <tr>
    <td><strong>H7 / s6</strong></td>
    <td>+0,021 / 0,000</td>
    <td>+0,048 / +0,035 (s6)</td>
    <td><strong>−0,014 mm Sıkılık</strong></td>
    <td><strong>−0,048 mm Sıkılık</strong></td>
    <td><strong>Ağır Büzme Geçme (Shrink Fit):</strong> Mil sıvı azotta soğutulur (−196 °C) veya gövde ısıtılır (200 °C). Sökülemez!</td>
  </tr>
</tbody>
</table>
</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Esas Delik Sistemi (H7)</strong></td>
    <td>Alt sapması sıfır olan (EI = 0) ve standart raybalarla işlenen sabit delik referans sistemi. Farklı geçmeler mil toleransı değiştirilerek elde edilir.</td>
  </tr>
  <tr>
    <td><strong>Esas Mil Sistemi (h6)</strong></td>
    <td>Üst sapması sıfır olan (es = 0) ve soğuk çekilmiş parlak çubuklarla uygulanan sabit mil referans sistemi.</td>
  </tr>
  <tr>
    <td><strong>Boşluklu Geçme (Clearance Fit)</strong></td>
    <td>Deliğin alt sınır ölçüsünün milin üst sınır ölçüsünden daima büyük olduğu ve parçaların serbestçe dönebildiği/kayabildiği geçme grubu.</td>
  </tr>
  <tr>
    <td><strong>Ara Geçme (Transition Fit)</strong></td>
    <td>İmalat toleranslarına bağlı olarak montajda ya çok küçük bir boşluk ya da çok küçük bir sıkılık oluşabilen hassas merkezleme geçmesi.</td>
  </tr>
  <tr>
    <td><strong>Sıkı Geçme (Interference Fit)</strong></td>
    <td>Milin en küçük çapının dahi deliğin en büyük çapından büyük olduğu ve montajın sadece pres kuvveti veya ısıyla yapılabildiği geçme grubu.</td>
  </tr>
  <tr>
    <td><strong>IT Kalitesi (ISO 286)</strong></td>
    <td>International Tolerance. Tolerans aralığının genişliğini belirten IT01 ila IT18 arası kalite derecesi. Sayı büyüdükçe tolerans genişler.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Büyük harf <strong>DELİK</strong> (H), küçük harf <strong>MİL</strong> (h) toleransını gösterir. Sayı küçüldükçe hassasiyet artar.</li>
  <li>Ekonomik nedenlerle daima <strong>Esas Delik Sistemi (H7)</strong> seçilir; delik standart takımla açılır, mil tornada ayarlanır.</li>
  <li><strong>H7/g6:</strong> Yağlı ortamda çalışan hassas kayar geçmedir.</li>
  <li><strong>H7/k6:</strong> Rulman iç bilezikleri için standart tokmak geçmesidir (sıfır boşluk).</li>
  <li><strong>H7/p6:</strong> Presle çakılan, sökülmeyen sıkı geçmedir.</li>
  <li>Ağır sıkı geçmelerde (s6) presleme yerine gövdeyi ısıtma veya mili sıvı azotta dondurma (büzme geçme) uygulanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Ø30 mm çapında bir bronz kaymalı yatak burcunu çelik gövdeye presleyip, içine de dönen bir çelik mil geçireceksiniz. Gövde-burç ve burç-mil için hangi ISO geçmelerini seçersiniz?</summary>
<div>1. <strong>Gövde - Burç Dış Çapı:</strong> Burç gövde içinde kesinlikle dönmemeli ve kaymamalıdır; presle çakılmalıdır → <strong>H7 / p6</strong> (veya r6).<br>
2. <strong>Burç İç Çapı - Dönen Mil:</strong> Bronz burç içinde mil sürekli dönecek ve ısınacaktır. Yağ filminin oluşabilmesi ve ısıl genleşmede sıkışmaması için boşluklu olmalıdır → <strong>H8 / f7</strong> (veya H7 / e7).</div></details>
<details><summary>Ø25 H7 deliğin alt sapması neden daima sıfırdır? Üretilen bir delik 24,98 mm çıkarsa ne işlem yapılır?</summary>
<div>H harfi "Esas Delik" sembolüdür ve tanım gereği alt tolerans sınırı sıfır çizgisi üzerindedir (EI = 0). Dolayısıyla nominal ölçünün altına inemez. Eğer Ø25 H7 delik 24,98 mm işlenmişse, delik nominalden 0,02 mm küçüktür; parça tolerans dışıdır ve standart H7 rulman veya pim bu deliğe kesinlikle girmez. Delik rayba ile yeniden işlenerek büyütülmelidir.</div></details>
<details><summary>Sıkı geçme yapılacak bir milde H7/s6 yerine H7/p6 seçilirse ne fark eder?</summary>
<div><code>p6</code> hafif sıkı pres geçmedir (örneğin Ø20'de 1 ila 35 mikron sıkılık); atölye tipi hidrolik el presiyle monte edilebilir. <code>s6</code> ise ağır sıkı geçmedir (14 ila 48 mikron sıkılık); mekanik presle basmaya kalkarsanız delik çeperi yırtılır veya talaş kaldırır. <code>s6</code> montajı için gövdenin indüksiyonla ısıtılması veya milin sıvı azotla dondurulması (büzme geçme) şarttır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-4', `
<p class="giris">Mekatronik tasarımların sahada en sık kilitlendiği veya arızalandığı bölgeler rulman oturma faturaları, merkezleme pimleri ve kaymalı yatak burçlarıdır. Bir rulman yuvasını 0,02 mm dar işlerseniz rulman iç boşluğu sıfırlanıp 10 dakikada yanar; 0,02 mm geniş işlerseniz mil rulmanın içinde döner ve fretting korozyonuyla mili aşındırır. Bu bölümde rulman üreticilerinin (SKF, Schaeffler) küresel tolerans normlarını, DIN 7979 çekme dişli pimlerini ve 2 pimli fikstürlerde elmas pim mekaniğini inceliyoruz.</p>

<h2>Rulman Yataklama Toleransları (ISO 492 / SKF & Schaeffler Normu)</h2>
<p>Rulman toleransı seçerken birinci altın kural şudur: <strong>"Hangi bilezik dönüyor ve radyal yükün yönü ne?"</strong></p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mekanik Çalışma Durumu</th>
    <th>Rulman Bileziği</th>
    <th>Radyal Yük Karakteri</th>
    <th>Önerilen ISO Toleransı</th>
    <th>Mühendislik Gerekçesi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2"><strong>Dönen Mil / Sabit Gövde</strong><br><small>(En yaygın durum: Motor mili, redüktör, konveyör tahrik tamburu)</small></td>
    <td><strong>İç Bilezik (Mil)</strong></td>
    <td>Çevresel Yük (Dönen)</td>
    <td><strong>k5 / k6 / m5</strong> (Hassasta <strong>j6</strong>)</td>
    <td><strong>SIKI / ARA GEÇME:</strong> İç bilezik dönme torkuyla mil üzerinde kayıp mili sıvamasın diye sıkı geçmelidir!</td>
  </tr>
  <tr>
    <td><strong>Dış Bilezik (Gövde)</strong></td>
    <td>Noktasal Yük (Sabit)</td>
    <td><strong>H7 / H8</strong> (Dökümde <strong>J7</strong>)</td>
    <td><strong>BOŞLUKLU GEÇME:</strong> Dış bilezik yuvada eksenel kaysın (serbest yatak termal uzamayı karşılasın).</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Sabit Mil / Dönen Gövde</strong><br><small>(Avare gergi kasnağı, konveyör avare rulosu, tekerlek poryası)</small></td>
    <td><strong>İç Bilezik (Mil)</strong></td>
    <td>Noktasal Yük (Sabit)</td>
    <td><strong>h6 / g6</strong></td>
    <td><strong>BOŞLUKLU GEÇME:</strong> Sabit kalan iç bilezik mile rahatça takılır.</td>
  </tr>
  <tr>
    <td><strong>Dış Bilezik (Gövde)</strong></td>
    <td>Çevresel Yük (Dönen)</td>
    <td><strong>M7 / N7 / P7</strong></td>
    <td><strong>SIKI GEÇME:</strong> Gövde döndükçe rulman dış bileziği yuvada dönüp gövdeyi oymaması için preslenir.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu tehlike"><span class="kb">Rulman Yuvasını Aşırı Sıkı İşleme Tuzağı (C3 Boşluğu)</span>
Standart bir sabit bilyalı rulmanın içinde bilyaların serbestçe yuvarlanabilmesi için mikron mertebesinde (5–20 µm) <strong>radyal iç boşluk (radial clearance)</strong> bulunur. Eğer mili <code>m6</code> veya <code>p6</code> gibi aşırı sıkı işlerseniz, iç bilezik radyal olarak genleşir ve rulmanın içindeki tüm çalışma boşluğunu yutar! Bilyalar iki bilezik arasına sıkışır; rulman dönerken uğultu yapar, aşırı ısınır ve birkaç saat içinde kilitlenir. Çözüm: Yüksek sıkılık veya yüksek sıcaklık farkı olan yerlerde mutlaka <strong>C3 iç boşluklu rulman</strong> seçilmelidir!</div>

<h2>Merkezleme Pimleri (Dowels) ve Fikstür Tasarımı (DIN 7979 / DIN 6325)</h2>
<p>İki plakayı cıvatayla sıktığınızda cıvatalar sadece eksenel baskı kuvveti uygular; cıvata deliği boşluklu olduğu için (M8 için delik Ø9 mm'dir) parçalar 1 mm kayabilir. Hassas konum tekrarlanabilirliğini sağlayan eleman <strong>Merkezleme Pimi (Dowel Pin)</strong>'dir.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Montaj Bölgesi</th>
    <th>Pim Standardı</th>
    <th>Delik Toleransı</th>
    <th>Mühendislik Fonksiyonu</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Alt Taban Plakası (Sabit)</strong></td>
    <td>DIN 6325 Sertleştirilmiş Silindirik Pim (m6)</td>
    <td><strong>H7 (veya M6)</strong></td>
    <td>Pim tabana <strong>sıkı preslenir</strong> ve kalıcı olarak orada çakılı kalır.</td>
  </tr>
  <tr>
    <td><strong>Üst Sökülen Plaka (Hassas Parça)</strong></td>
    <td>Karşılayan delik</td>
    <td><strong>H7 (veya F7)</strong></td>
    <td>Plaka pimin üzerinden elle veya hafif itmeyle rahatça sökülüp takılır (Boşluksuz merkezleme).</td>
  </tr>
  <tr>
    <td><strong>Kör Delikli Gövdeler</strong></td>
    <td><strong>DIN 7979-D (Çekme Dişli Pim)</strong></td>
    <td><strong>H7</strong></td>
    <td>Pimin arkasında M4/M5/M6 iç vida dişi ve gövdesinde boyuna düz <strong>hava tahliye kanalı (flat vent)</strong> bulunur.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Hava Sıkışması (Piston Etkisi) ve Sökülemeyen Pim</span>
Kör bir deliğe hava tahliye kanalı olmayan düz bir DIN 6325 pimi çakmaya kalkarsanız, dipte sıkışan hava kompresyon yapar ve pimi dışarı fırlatır ya da çakamazsınız. Çaksanız bile arkadan vurma deliği olmadığı için pimi asla geri sökemezsiniz! <strong>Altın Kural: Kör deliklerde DAİMA içten dişli ve hava kanallı DIN 7979-D pimi kullanın.</strong> Sökerken ters çekiç (slide hammer) vidalanıp 5 saniyede çıkarılır.</div>

<h2>Fikstürlerde 2 Pim Kuralı ve Elmas Pim (Diamond Pin) Kinematiği</h2>
<p>İki parçayı düzlemde hizalamak için <strong>tam 2 adet pim</strong> kullanılır (3. pim aşırı kısıtlama / over-constraint yaratır ve montajı kilitler). İki delik arasındaki eksenler arası mesafe toleransı (örneğin ±0,05 mm) yüzünden iki silindirik pim deliklere kasar ve montajı kilitler:</p>
<ul>
  <li><strong>1. Pim (Silindirik Pim):</strong> X ve Y eksenindeki tüm öteleme serbestliğini sıfırlar (Ana merkez / Datum referansıdır).</li>
  <li><strong>2. Pim (Elmas / Rombik Pim):</strong> Sadece açısal dönmeyi (Theta) kilitler; iki pim arasındaki eksen mesafesi kaçıklıklarını yanlardaki boşlukla tolere eder. Parça asla kasıntı yapmadan kayar.</li>
</ul>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Radyal İç Boşluk (C3 Clearance)</strong></td>
    <td>Rulman montajından önce iç ve dış bilezikler arasındaki serbest radyal hareket mesafesi. C3, standart boşluktan (CN) daha geniş olan sınıfı belirtir.</td>
  </tr>
  <tr>
    <td><strong>Fretting Korozyonu</strong></td>
    <td>Birbiri üzerine gevşek geçen mil ve rulman bileziği arasında mikroskobik titreşim sürtünmesiyle oluşan, metalik aşınma ve pas tozu üreten mekanik hasar.</td>
  </tr>
  <tr>
    <td><strong>DIN 7979-D</strong></td>
    <td>Kör deliklerden ters çekiçle kolayca geri sökülebilmesi için başında iç vida dişi ve gövdesinde hava tahliye düzlüğü bulunan taşlanmış sertleştirilmiş pim normu.</td>
  </tr>
  <tr>
    <td><strong>Elmas Pim (Diamond Pin)</strong></td>
    <td>İki pimli merkezleme fikstürlerinde eksenler arası mesafe toleransını absorbe etmek için iki yanı boşaltılmış rombik geometrili kılavuz pimi.</td>
  </tr>
  <tr>
    <td><strong>Aşırı Kısıtlama (Over-Constraint)</strong></td>
    <td>Mekanik bir sistemde bir serbestlik derecesinin birden fazla rijit temas elemanıyla kısıtlanması sonucu oluşan montaj kasıntısı ve sıkışma durumu.</td>
  </tr>
  <tr>
    <td><strong>Çevresel vs. Noktasal Yük</strong></td>
    <td>Rulmanda dönen bileziğin tüm çevresi boyunca yük görmesi (çevresel yük - sıkı geçme gerektirir); duran bileziğin ise sabit tek bir noktadan yük alması durumu.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Dönen mil üzerinde rulman iç bileziği dönme torkuyla sıvanmasın diye <strong>k5, k6 veya m5</strong> sıkı geçme ile bağlanır.</li>
  <li>Rulman dış bileziği ise gövdede serbest yatağın ısıl uzayabilmesi için <strong>H7 veya J7</strong> boşluklu geçme ile yataklanır.</li>
  <li>Aşırı sıkı yataklamalarda ve sıcak ortamlarda rulmanın kilitlenmemesi için <strong>C3 iç boşluklu</strong> rulman seçilmelidir.</li>
  <li>Merkezleme pimlerinde sabit taban deliği <strong>H7/m6 (sıkı)</strong>, sökülebilir üst plaka deliği <strong>H7/h6 veya F7 (kayar)</strong> yapılır.</li>
  <li>Kör deliklerde hava sıkışmasını önlemek ve geri sökebilmek için mutlaka <strong>DIN 7979-D (çekme dişli ve hava kanallı)</strong> pim kullanılmalıdır.</li>
  <li>İki pimli fikstürlerde eksenler arası mesafe toleransı kasıntısını önlemek için ikinci pim <strong>Elmas (Diamond) Pim</strong> olmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir konveyör rulosunda mil sabit duruyor, dış boru gövde rulmanlarla milin etrafında serbestçe dönüyor (avare rulo). Rulman iç ve dış bilezik toleransları klasik bir motor miline göre nasıl değişir?</summary>
<div>Klasik motor milinde iç bilezik döner (mil sıkı k6, gövde boşluklu H7). Ancak avare ruloda dış boru gövde döndüğü için dış bilezik çevresel dinamik yüke maruz kalır; dolayısıyla <strong>dış bilezik gövdeye SIKI (M7 veya P7)</strong> preslenmelidir. Sabit duran iç bilezik ise noktasal statik yük altındadır ve mile <strong>BOŞLUKLU (h6 veya g6)</strong> geçmelidir. Kural: Dönen bilezik daima sıkı geçer!</div></details>
<details><summary>Kör bir deliğe DIN 6325 standart düz silindirik pimi presle çaktınız. Üst plaka hatalı işlendiği için pimi geri çıkarıp revize etmeniz gerekiyor. Parçanın arkasında delik yok. Ne yapacaksınız?</summary>
<div>Geçmiş olsun! Parçayı hurdaya ayırmak ya da pimi delik delme erozyonunda (EDM Super Drill) çürüterek çıkarmak zorunda kalırsınız; çünkü arkasında çıkış deliği yoktur ve düz pimin tutulacak hiçbir yeri yoktur. Bu facianın önüne geçmek için kör deliklere daima kafasında M4/M5 vida dişi olan <strong>DIN 7979-D çekme dişli pim</strong> tasarlanmalıdır.</div></details>
<details><summary>Bir fikstür plakasını merkezlemek için neden 3 veya 4 adet silindirik merkezleme pimi kullanmak büyük bir tasarım hatasıdır?</summary>
<div>Düzlemde bir rijit cismin 3 serbestlik derecesi vardır: X ötelemesi, Y ötelemesi ve Z ekseni etrafında dönme (θ). 1. pim X ve Y'yi kilitler (2 serbestlik gider). 2. pim dönmeyi kilitler (son serbestlik de biter). 3. veya 4. pimi koyduğunuzda sistem <strong>aşırı kısıtlanmış (over-constrained)</strong> olur. Tezgâh toleransları yüzünden 3. pimin deliği mikron seviyesinde kaçık olacağından parça pimlere kasar ve asla yerine oturmaz veya çekiçle çakıldıktan sonra sökülemez!</div></details>
</div>
`);
