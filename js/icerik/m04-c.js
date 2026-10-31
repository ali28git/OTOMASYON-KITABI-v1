// MODÜL 4 — Makine Elemanları (Bölüm 4.11 – 4.18: Güç Aktarımı, Dişliler, Kayışlar, Kaplinler ve Redüktörler)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m4', '4-11', `
<p class="giris">Dişli çarklar, yüksek torkların kompakt hacimlerde kaymasız iletilmesini sağlayan en rijit makine elemanlarıdır. Dişli tasarımı sadece modül ve diş sayısından ibaret değildir; temas oranı (overlap ratio), eksenel kuvvet bileşenleri, kavrama açısı ve diş dibi gerilme yığılmaları dişlinin ömrünü ve ses seviyesini belirler. Bu bölümde tüm dişli geometrilerini derinlemesine inceliyoruz.</p>

<h2>Evolvent Diş Geometrisi Standartları (DIN 867)</h2>
<p>Modern dişlilerde kullanılan eğri <strong>Evolvent (Involute)</strong> eğrisidir. Evolvent profilin en büyük özelliği, iki dişli arasındaki eksen mesafesi imalat/montaj hatasıyla biraz değişse bile <strong>çevrim oranının (i = z₂ / z₁) kesinlikle sabit kalmasıdır</strong>.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Geometrik Parametre</th>
    <th>Sembol</th>
    <th>Formül (Standart Kavrama Açısı α = 20°)</th>
    <th>Sayısal Örnek (Modül m=3, Diş Sayısı z=24)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Bölüm Dairesi Çapı (Yuvarlanma Çapı)</strong></td>
    <td>d</td>
    <td>d = m · z</td>
    <td>3 × 24 = <strong>Ø72,0 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Diş Adımı (Hatve)</strong></td>
    <td>p</td>
    <td>p = π · m</td>
    <td>π × 3 = <strong>9,42 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Diş Başı Yüksekliği (Addendum)</strong></td>
    <td>h<sub>a</sub></td>
    <td>h<sub>a</sub> = 1,0 · m</td>
    <td>1,0 × 3 = <strong>3,0 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Diş Dibi Yüksekliği (Dedendum)</strong></td>
    <td>h<sub>f</sub></td>
    <td>h<sub>f</sub> = 1,25 · m (0,25m tepe boşluğudur)</td>
    <td>1,25 × 3 = <strong>3,75 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Toplam Diş Yüksekliği</strong></td>
    <td>h</td>
    <td>h = h<sub>a</sub> + h<sub>f</sub> = 2,25 · m</td>
    <td>2,25 × 3 = <strong>6,75 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Diş Üstü Çapı (Dış Çap)</strong></td>
    <td>d<sub>a</sub></td>
    <td>d<sub>a</sub> = d + 2 · h<sub>a</sub> = m · (z + 2)</td>
    <td>3 × (24 + 2) = <strong>Ø78,0 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Diş Dibi Çapı</strong></td>
    <td>d<sub>f</sub></td>
    <td>d<sub>f</sub> = d - 2 · h<sub>f</sub> = m · (z - 2,5)</td>
    <td>3 × (24 - 2,5) = <strong>Ø64,5 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Temel Daire Çapı (Evolvent Başlangıcı)</strong></td>
    <td>d<sub>b</sub></td>
    <td>d<sub>b</sub> = d · cos(α) = d · cos(20°)</td>
    <td>72 × 0,9396 = <strong>Ø67,65 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Eksenler Arası Mesafe (İki Dişli İçin)</strong></td>
    <td>a</td>
    <td>a = m · (z₁ + z₂) / 2</td>
    <td>z1=20, z2=40 için: 3 × 60 / 2 = <strong>90,0 mm</strong></td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Minimum Diş Sayısı ve Alttan Kesme (Undercutting)</span>
Kavrama açısı α = 20° olan standart bir düz pinyon dişlide diş sayısı <strong>z &lt; 17</strong> olursa, imalat anında azdırma bıçağı dişin tabanındaki aktif evolvent eğrisini oyarak inceltir (alttan kesme). Bu durum dişin eğilme mukavemetini %40 düşürür! Çözüm: Minimum 17 diş seçmek veya <strong>profil kaydırma (koreksiyon / x faktörü)</strong> uygulamaktır.</div>

<h2>Dişli Çeşitlerinin Karşılaştırmalı Mühendislik Analizi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Dişli Türü</th>
    <th>Kuvvet Bileşenleri</th>
    <th>Gürültü ve Titreşim</th>
    <th>Verim (η)</th>
    <th>Üretim Zorluğu ve Maliyet</th>
    <th>Neden Tercih Edilir? / Neden Edilmez?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Düz Dişli (Spur)</strong></td>
    <td><strong>Sadece Radyal (Fr) ve Teğetsel (Ft).</strong><br>Eksenel Kuvvet: <strong>SIFIR!</strong></td>
    <td>Yüksek (Dişler çizgi boyunca çarpar)</td>
    <td><strong>%98 – %99 (Çok Yüksek)</strong></td>
    <td>En Kolay / En Ucuz (1,0×)</td>
    <td><strong>Artısı:</strong> Rulmanlara eksenel yük bindirmez, basit sabit bilyalı rulman yeterlidir.<br><strong>Eksisi:</strong> Devir yükseldikçe (v &gt; 5 m/s) gürültü patlaması yapar.</td>
  </tr>
  <tr>
    <td><strong>Helis Dişli (Helical)</strong></td>
    <td>Teğetsel (Ft), Radyal (Fr) ve <strong>YÜKSEK EKSENEL KUVVET (Fa)!</strong></td>
    <td><strong>Çok Düşük (Sessiz ve pürüzsüz)</strong></td>
    <td>%97 – %98,5</td>
    <td>Orta (1,4×)</td>
    <td><strong>Artısı:</strong> Diş teması noktadan başlar ve yayılır. Çok yüksek tork taşır ve sessizdir.<br><strong>Eksisi:</strong> Mili iten eksenel kuvvet üretir; konik makaralı veya eğik bilyalı yataklama şarttır.</td>
  </tr>
  <tr>
    <td><strong>Çavuş Dişli (Herringbone)</strong></td>
    <td>Ters açılı çift helis; <strong>Eksenel kuvvet birbirini sıfırlar!</strong></td>
    <td>Çok Düşük</td>
    <td>%97 – %98</td>
    <td>Çok Zor / Çok Pahalı (3,5×)</td>
    <td>Ağır çelik haddehaneleri ve dev deniz şanzımanları. Hassas imalat gerektirir.</td>
  </tr>
  <tr>
    <td><strong>Spiral Konik Dişli (Gleason Bevel)</strong></td>
    <td>90° açılı tork aktarımı; 3 boyutlu karmaşık kuvvetler</td>
    <td>Düşük (Düz koniğe göre sessiz)</td>
    <td>%95 – %97</td>
    <td>Yüksek (Özel 5 eksen tezgâh)</td>
    <td>Eksenleri 90° dik kesişen yön değiştirici redüktörler, otomotiv diferansiyelleri.</td>
  </tr>
  <tr>
    <td><strong>Sonsuz Vida ve Çark (Worm)</strong></td>
    <td>Aşırı yüksek eksenel ve kayma kuvvetleri</td>
    <td><strong>Sıfır Ses (Tamamen sessiz)</strong></td>
    <td><strong>%50 – %85 (Çok Düşük!)</strong></td>
    <td>Orta (Çark bronz dökümdür)</td>
    <td><strong>Artısı:</strong> Tek kademede 1:100 redüksiyon ve <strong>Otokontrol (Self-locking / Geri dönmezlik)</strong>.<br><strong>Eksisi:</strong> Sürtünme ısıya dönüşür; devasa enerji kaybı yaşanır ve yağ soğutucu gerekebilir.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Helis Dişlide Eksenel Kuvvet Hesabı (Fa)</h2>
<p>Helis açısı (β = 15°–25°) arttıkça temas oranı ve sessizlik artar ancak mili iten eksenel kuvvet büyür:</p>
<div class="formul">
F<sub>t</sub> = ( 2 · T ) / d &nbsp;&nbsp;[Teğetsel Kuvvet]&nbsp;&nbsp;|&nbsp;&nbsp;
F<sub>a</sub> = F<sub>t</sub> · tan(β) &nbsp;&nbsp;[Eksenel Kuvvet]&nbsp;&nbsp;|&nbsp;&nbsp;
F<sub>r</sub> = F<sub>t</sub> · [ tan(α) / cos(β) ] &nbsp;&nbsp;[Radyal Kuvvet]
</div>
<p><em>Örnek: 200 Nm tork taşıyan Ø80 mm helis dişlide (β = 20°):<br>
F<sub>t</sub> = (2 × 200.000) / 80 = <strong>5000 N</strong><br>
F<sub>a</sub> = 5000 × tan(20°) = 5000 × 0,364 = <strong>1820 N (Yaklaşık 185 kg'lık eksenel itme kuvveti!)</strong>.<br>
Bu 1820 N kuvveti taşıyacak yataklama tasarlanmazsa mil gövdeyi deler geçer!</em></p>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>DIN 867</strong></td>
    <td>Genel makine imalatında kullanılan standart evolvent alın dişli takımlarının temel profilini (kavrama açısı 20°, baş ve dip boşluğu oranları) belirleyen referans standarttır.</td>
  </tr>
  <tr>
    <td><strong>Modül m [mm]</strong></td>
    <td>Diş boyutunu ve mukavemetini belirleyen temel geometrik parametredir; bölüm dairesi çapının diş sayısına oranıdır (m = d / z = p / π).</td>
  </tr>
  <tr>
    <td><strong>Alttan Kesme (Undercutting)</strong></td>
    <td>Küçük diş sayılı pinyonlarda (z &lt; 17) azdırma bıçağının diş dibindeki aktif evolvent eğrisini oyup incelterek dişin eğilme mukavemetini dramatik biçimde düşürmesi olgusudur.</td>
  </tr>
  <tr>
    <td><strong>Profil Kaydırma (x Katsayısı)</strong></td>
    <td>Azdırma çakısının referans eksenine göre radyal olarak dışarı (+x) veya içeri (-x) ötelenmesiyle diş dibi kalınlığının artırılması ve alttan kesmenin engellenmesi yöntemidir.</td>
  </tr>
  <tr>
    <td><strong>Temas Oranı (Contact Ratio)</strong></td>
    <td>Kavrama hattı boyunca aynı anda temas halinde olan ortalama diş çifti sayısıdır; 1,0'ın altında dişliler çalışamaz, helis dişlilerde 2,0'nin üzerine çıkarak sessizlik sağlar.</td>
  </tr>
  <tr>
    <td><strong>Otokontrol (Self-Locking)</strong></td>
    <td>Sonsuz vida-çark mekanizmalarında vida helis açısının sürtünme açısından küçük olması sonucu çıkış milinden tork uygulandığında sistemin geriye dönmeyerek kilitlenmesidir.</td>
  </tr>
  <tr>
    <td><strong>Çavuş Dişli (Herringbone)</strong></td>
    <td>Aynı dişli gövdesinde birbirine ters açılı iki helis diş profilinin birleştiği, helis avantajlarını sağlarken eksenel kuvvetleri tamamen sıfırlayan çift helis dişli türüdür.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Evolvent profil sayesinde montaj eksen mesafesi oynasa bile çevrim oranı (i) kesinlikle değişmez.</li>
  <li>Kavrama açısı 20° olan standart pinyonda z &lt; 17 olursa <strong>alttan kesme (undercutting)</strong> oluşur, mukavemet çöker.</li>
  <li>Düz dişli eksenel kuvvet üretmez (Fa = 0), ucuzdur ama hızlı dönerse gürültülüdür.</li>
  <li>Helis dişli çok sessiz ve yüksek torkludur ancak mili eksenel olarak iter (Fa = Ft · tan β); sabit bilyalı rulman yetmez, eğik bilyalı veya konik makaralı yataklama şarttır.</li>
  <li>Sonsuz vida-çark mekanizmaları tek kademede 1:100 oran ve geri dönmezlik sağlar; ancak sürtünme yüzünden verimi düşüktür (%50–85) ve ısınır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Standart bir düz pinyon dişlide neden en az 17 diş olması istenir? 12 dişli bir pinyon kullanmak zorunda kalırsan ne yapmalısın?</summary>
<div>Standart 20° kavrama açısında azdırma çakısı 17 dişin altında diş dibini oyar (undercut). Diş dibi inceldiği için eğilme gerilmesinde kırılma riski çok yükselir. Eğer 12 diş kullanmak zorundaysan, <strong>pozitif profil kaydırma (koreksiyon / profile shift, x &gt; 0)</strong> uygulayarak takım tezgahını dışa kaydırmalı ve evolvent kökünü kalınlaştırmalısın.</div></details>
<details><summary>Bir makinede düz dişliyi söküp yerine aynı boyutta helis dişli taktın. Makine sessizleşti ama 2 gün sonra rulmanlar kilitlendi. Neyi atladın?</summary>
<div>Düz dişli sadece teğetsel ve radyal kuvvet üretir, bu yüzden standart sabit bilyalı (62xx) rulmanlar yeterliydi. Helis dişli taktığında oluşan yüksek eksenel kuvvet (Fa), sabit bilyalı rulmanın eksenel yük limitini aşarak bilyaları faturalara ezdirdi ve yatağı kilitledi. Yataklamayı <strong>eğik bilyalı (7xxx serisi)</strong> veya <strong>konik makaralı (30xxx serisi)</strong> çift yataklama ile revize etmeliydin.</div></details>
<details><summary>Dikey eksende asansör benzeri bir tabla taşıyorsun. Motor durduğunda tablanın düşmemesi için sonsuz vidalı redüktör seçtin. Bu tek başına güvenlik için yeterli midir?</summary>
<div>Hayır, endüstriyel güvenlik standardına (CE / ISO 13849) göre dinamik titreşim ve aşınma altında sonsuz vida geri kaçırabilir (mikro kayma). Sürtünmeye dayalı otokontrol tek başına emniyet elemanı kabul edilmez; motorda veya eksende mutlaka <strong>fail-safe yay baskılı mekanik emniyet freni</strong> de bulunmalıdır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-12', `
<p class="giris">Kayış-kasnak mekanizmaları, miller arasındaki mesafenin dişli koyulamayacak kadar uzak olduğu durumlarda tork ve hız aktarımının en esnek çözümüdür. Otomasyon sektöründe iki dünya çatışır: Sürtünmeyle çalışan ve aşırı yükte kayarak motoru koruyan <strong>V-Kayışlar</strong> ile sıfır kaymayla mikron hassasiyetinde pozisyonlama yapan <strong>Triger (Timing) Kayışları</strong>. Bu bölümde kayış profillerini, kord yapılarını ve dinamik frekans gerdirme hesabını inceliyoruz.</p>

<h2>V-Kayış vs. Triger Kayış Kapsamlı Karşılaştırması</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Özellik / Parametre</th>
    <th>Klasik ve Dar V-Kayışlar (SPZ, SPA, SPB)</th>
    <th>Triger / Zamanlama Kayışları (HTD, GT3, AT)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Güç Aktarım İlkesi</strong></td>
    <td>Kuvvet Bağlantısı (Kasnak V kanalına sıkışarak sürtünmeyle)</td>
    <td><strong>Biçimsel Bağlantı (Pozitif kavrama - Diş diş içine girer)</strong></td>
  </tr>
  <tr>
    <td><strong>Kayma Oranı (Slip)</strong></td>
    <td><strong>Var (%1 – %3 kaçınılmaz elastik mikro kayma)</strong></td>
    <td><strong>KESİNLİKLE SIFIR KAYMA (%100 Senkronize)</strong></td>
  </tr>
  <tr>
    <td><strong>Pozisyonlama Yeteneği</strong></td>
    <td><strong>İmkânsız</strong> (Açısal konum sürekli kayar)</td>
    <td><strong>Mükemmel (Servo ve step motorlar için standart)</strong></td>
  </tr>
  <tr>
    <td><strong>Aşırı Yük Emniyeti (Mekanik Sigorta)</strong></td>
    <td><strong>Mükemmel!</strong> Aşırı tork bindiğinde kayış kasnakta kayar; motor yanmaz, mekanizma kırılmaz.</td>
    <td>Yok. Aşırı yük binerse kayış dişleri sıyrılır (tooth shearing) veya çelik kordlar kopar.</td>
  </tr>
  <tr>
    <td><strong>Verim (η)</strong></td>
    <td>%92 – %95 (Sürekli bükülme ve kayma kayıpları)</td>
    <td><strong>%98 – %99 (Çok Yüksek)</strong></td>
  </tr>
  <tr>
    <td><strong>Mil ve Rulman Ön Yükü</strong></td>
    <td><strong>Çok Yüksek</strong> (Sürtünme için kayış çok gergin olmalı; rulmanları radyal zorlar).</td>
    <td>Düşük – Orta (Sadece diş atlamasını önleyecek kadar gergi yeterlidir).</td>
  </tr>
  <tr>
    <td><strong>Maksimum Doğrusal Hız</strong></td>
    <td>maks. 30 – 35 m/s</td>
    <td><strong>maks. 50 – 80 m/s (Çok dinamik ve hızlı)</strong></td>
  </tr>
  <tr>
    <td><strong>Yağlama İhtiyacı</strong></td>
    <td>Sıfır Yağ (Yağ değerse kayış kayar ve yanar)</td>
    <td>Sıfır Yağ (Kuru, temiz oda ve gıdaya tam uyumlu)</td>
  </tr>
</tbody>
</table>
</div>

<h2>Triger Kayış Diş Profilleri: Ayrıntılı Kıyaslama</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Profil Ailesi</th>
    <th>Diş Geometrisi</th>
    <th>Kord ve Malzeme</th>
    <th>Boşluksuzluk (Backlash)</th>
    <th>Tork Kapasitesi</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>T Serisi (T5, T10, T20)</strong><br><small>DIN 7721</small></td>
    <td>Trapez (Düz kenarlı 40°)</td>
    <td>Poliüretan (PU) + Çelik Kord</td>
    <td>Belirgin boşluk var (~0,3°–0,6°)</td>
    <td>Düşük – Orta</td>
    <td>Gıda taşıma hatları, standart konveyörler, kimyasal ortamlar. Çift yönlü dinamik servolarda boşluk yapar!</td>
  </tr>
  <tr>
    <td><strong>AT Serisi (AT5, AT10, AT20)</strong><br><small>Gelişmiş Trapez</small></td>
    <td>Genişletilmiş kavisli trapez diş</td>
    <td>Poliüretan (PU) + Yüksek Mukavemetli Çelik Kord</td>
    <td><strong>Düşük Boşluk (Zero-Backlash kasnaklarla sıfır)</strong></td>
    <td><strong>Çok Yüksek (%50 daha fazla tork)</strong></td>
    <td><strong>Hassas Kartezyen robotlar, doğrusal modüller, servo pick & place eksenleri.</strong></td>
  </tr>
  <tr>
    <td><strong>HTD Serisi (3M, 5M, 8M, 14M)</strong><br><small>High Torque Drive</small></td>
    <td>Yarım daire (Kavisli yuvarlak diş)</td>
    <td>Neopren Kauçuk + Cam Elyaf (Fiberglass)</td>
    <td>Orta</td>
    <td>Yüksek</td>
    <td>Genel endüstriyel aktarmalar, takım tezgahları, yüksek devirli miller. Çok sessizdir.</td>
  </tr>
  <tr>
    <td><strong>GT / GT3 Serisi (Gates PowerGrip)</strong></td>
    <td>Modifiye edilmiş derin parabolik diş</td>
    <td>Gelişmiş Elastomer + Karbon / Cam Kord</td>
    <td><strong>SIFIR BOŞLUK (En hassas kilitlenme)</strong></td>
    <td><strong>Aşırı Yüksek (Triger kayışların zirvesi)</strong></td>
    <td><strong>Yüksek hassasiyetli CNC eksenleri, robotik eklemler, baskı makineleri.</strong></td>
  </tr>
</tbody>
</table>
</div>

<h2>Triger Kayışın Optik Frekansla Doğru Gerdirilmesi</h2>
<p>Triger kayışın başparmakla bastırılarak gerginliğinin kontrol edilmesi çağ dışı bir yöntemdir. Aşırı gergin kayış rulmanları ezer; gevşek kayış ani frenlemede diş atlar. Doğru gerginlik, serbest açıklığa (kol boyu t) parmakla hafifçe vurularak oluşturulan titreşim frekansının (f) <strong>optik tansiyonmetre (akustik gerginlik ölçer)</strong> ile ölçülmesiyle ayarlanır:</p>
<div class="formul">
T<sub>ön</sub> = 4 · m · L<sub>k</sub>² · f²
<small>T<sub>ön</sub>: Statik kol ön gerilme kuvveti [N], m: Kayışın birim metre kütlesi [kg/m], L<sub>k</sub>: İki kasnak arasındaki serbest kayış kol boyu [m], f: Ölçülen rezonans frekansı [Hz]</small>
</div>
<p>Katalog üreticileri (Gates, Continental, Megadyne) her kayış genişliği ve tork için hedef frekans aralığını (örneğin <code>75 ± 5 Hz</code>) teknik bültende verir.</p>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Triger (Timing) Kayış</strong></td>
    <td>İç yüzeyinde adımlı dişler bulunan, kasnak dişleriyle pozitif form teması kurarak sıfır kayma ile %100 açısal senkronizasyon sağlayan güç aktarım elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>V-Kayış</strong></td>
    <td>Trapez enkesitli, kasnak kanalının eğik yanaklarına sürtünmeyle sıkışarak kuvvet aktaran, aşırı torkta kayarak mekanik sigorta işlevi gören kayış türüdür.</td>
  </tr>
  <tr>
    <td><strong>AT Diş Profili</strong></td>
    <td>Trapez diş tabanını genişleterek diş sıyırma mukavemetini %50 artıran ve özel boşluksuz kasnaklarla çift yönlü servo hareketlerde sıfır backlash sağlayan PU kayış profilidir.</td>
  </tr>
  <tr>
    <td><strong>Akustik / Optik Tansiyonmetre</strong></td>
    <td>Gerilmiş bir kayışın serbest açıklığının titreştirilmesiyle üretilen doğal rezonans frekansını (Hz) optik sensörle ölçerek ön gerilme kuvvetini hesaplayan hassas cihazdır.</td>
  </tr>
  <tr>
    <td><strong>Çelik / Karbon Kord</strong></td>
    <td>Kayışın boyuna uzamasını ve esnemesini önleyen, elastomer gövdenin içerisine helisel olarak yerleştirilmiş yüksek çekme mukavemetli iç takviye telleridir.</td>
  </tr>
  <tr>
    <td><strong>Diş Atlama (Tooth Jumping)</strong></td>
    <td>Yetersiz ön gerilme kuvveti veya aşırı ani ivmelenme torku durumunda kayış dişlerinin kasnak yuvalarından dışarı tırmanarak faz kaçırması arızasıdır.</td>
  </tr>
  <tr>
    <td><strong>T<sub>ön</sub> [N]</strong></td>
    <td>Kayışın diş atlamasını önlemek ve doğru kavraşmayı sağlamak için montajda her iki kola uygulanan statik ön gerilme kuvvetidir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>V-kayışlar sürtünmeyle aktarır, %1–3 mikro kayma yapar; pozisyonlama yapılamaz ama aşırı torkta motoru korur.</li>
  <li>Triger kayışlar pozitif form bağlantısıyla (dişli) çalışır; %100 senkron ve kaymasızdır, servo sistemlerin vazgeçilmezidir.</li>
  <li>Hassas çift yönlü pozisyonlamada klasik <strong>T serisi yerine AT veya Gates GT3 serisi</strong> kullanılmalıdır (T serisi diş dibi boşluğu nedeniyle ters yönde boşluk yapar).</li>
  <li>Triger kayışlarda gerginlik "parmak hissiyle" değil, <strong>optik frekans tansiyonmetresiyle (Hz)</strong> ayarlanmalıdır.</li>
  <li>Poliüretan (PU) + Çelik kordlu kayışlar uzamaya karşı aşırı dirençlidir; kauçuk + cam elyaf kayışlar ise daha esnek ve sessizdir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir servo motorla vidalı mili triger kayışla 1:2 oranında tahrik ettin. Eski bir T5 kayış taktın. Motor ileri giderken sorun yok ama geri dönerken pozisyonda 0,3 mm kaçıklık görüyorsun. Neden?</summary>
<div>T serisi (DIN 7721) kayışların diş profili düz trapezdir ve kasnak boşluğu toleransı büyüktür. Yön değiştiğinde (reversal) diş diğer yanağa çarpana kadar açısal boşluk (backlash) oluşur. Vidalı mil adımıyla çarpıldığında bu boşluk 0,3 mm doğrusal hataya dönüşür. Kasnak ve kayışı <strong>AT5 (veya AT5 Zero-Backlash kasnak) ya da GT3</strong> ile değiştirmelisin.</div></details>
<details><summary>Triger kayış montajında kayışı kasnağa tornavidayla kastırarak zorla geçiren bir teknisyen gördün. Neden derhal durdurmalısın?</summary>
<div>Triger kayışın çekme yükünü içindeki mikro çelik veya cam elyaf (fiberglass) kordlar taşır. Tornavida ile kastırıldığında bu ince teller yerel olarak ezilir, çatlar veya kopar. Kayış dışarıdan sağlam görünse de makine ilk ani ivmelenmeye geçtiğinde o noktadan zımba gibi patlar! Kasnak eksen mesafesi gevşetilmeli, kayış elle rahatça oturtulup sonra gerdirilmelidir.</div></details>
<details><summary>Akustik/optik tansiyonmetre ile kayış gerginliğini ölçerken serbest kol boyunu iki katına çıkarırsan aynı ön gerilme kuvveti (T<sub>ön</sub>) için ölçülen frekans (Hz) nasıl değişir?</summary>
<div>Formül <code>T = 4 · m · L² · f²</code> olduğuna göre, frekans <code>f ∝ 1 / L</code> ile ters orantılıdır. Kol boyu 2 katına çıkarsa titreşim frekansı yarıya (%50) düşer. Bu yüzden frekans hedefi girilirken kasnaklar arası serbest açıklığın (L<sub>k</sub>) kumpasla net ölçülmesi şarttır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-13', `
<p class="giris">Makaralı zincir mekanizmaları; ağır kir, toz, talaş, yüksek sıcaklık ve darbeli torkların bulunduğu ortamlarda büyük eksen mesafelerini en ekonomik şekilde birbirine bağlayan güç aktarım elemanlarıdır. Bu bölümde ISO 606 standartlarını, poligon etkisini ve sarkma gerdirme tasarımını inceliyoruz.</p>

<h2>Zincir Standartları ve Hatve Boyutları (ISO 606)</h2>
<p>Avrupa'da B serisi (İngiliz menşeli BS standardı), Amerika ve Uzak Doğu'da ise A serisi (ANSI standardı) kullanılır:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>ISO / DIN Kodu</th>
    <th>ANSI Kodu</th>
    <th>Hatve p [mm]</th>
    <th>Hatve p [İnç]</th>
    <th>İç Genişlik b<sub>1</sub> [mm]</th>
    <th>Minimum Kopma Yükü Q [kN] (Tek Sıra)</th>
    <th>Maksimum Önerilen Güç [kW] (1500 d/dak'da)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>06B-1</strong></td>
    <td>ANSI 35</td>
    <td>9,525 mm</td>
    <td>3/8"</td>
    <td>5,72 mm</td>
    <td><strong>9,0 kN</strong></td>
    <td>~2,5 kW</td>
  </tr>
  <tr>
    <td><strong>08B-1</strong></td>
    <td>ANSI 40</td>
    <td>12,700 mm</td>
    <td>1/2"</td>
    <td>7,75 mm</td>
    <td><strong>18,0 kN</strong></td>
    <td>~7,5 kW</td>
  </tr>
  <tr>
    <td><strong>10B-1</strong></td>
    <td>ANSI 50</td>
    <td>15,875 mm</td>
    <td>5/8"</td>
    <td>9,65 mm</td>
    <td><strong>22,4 kN</strong></td>
    <td>~15,0 kW</td>
  </tr>
  <tr>
    <td><strong>12B-1</strong></td>
    <td>ANSI 60</td>
    <td>19,050 mm</td>
    <td>3/4"</td>
    <td>11,68 mm</td>
    <td><strong>29,0 kN</strong></td>
    <td>~25,0 kW</td>
  </tr>
  <tr>
    <td><strong>16B-1</strong></td>
    <td>ANSI 80</td>
    <td>25,400 mm</td>
    <td>1"</td>
    <td>17,02 mm</td>
    <td><strong>60,0 kN</strong></td>
    <td>~60,0 kW</td>
  </tr>
</tbody>
</table>
</div>
<p><em>Not: Kodun sonundaki "-1" tek sıra (simplex), "-2" çift sıra (duplex), "-3" üç sıra (triplex) zincir demektir. Çift sıra zincir genişliği ikiye katlarken taşıma gücünü ~1,7 kat artırır.</em></p>

<h2>Poligon Etkisi (Polygon Effect) ve Titreşim Dinamiği</h2>
<p>Zincir baklaları rijit çubuklardır; dişli üzerinde dairesel yay değil bir <strong>çokgen (poligon)</strong> oluştururlar. Pinyon sabit açısal hızla (ω) dönse bile, zincirin çizgisel hızı sürekli bir dalgalanma (ivmelenme-yavaşlama) yaşar:</p>
<div class="formul">
Δv = v<sub>maks</sub> - v<sub>min</sub> = ω · R · [ 1 - cos( 180° / z ) ]
<small>z: Dişlinin diş sayısı, R: Dişli bölüm dairesi yarıçapı</small>
</div>
<ul>
  <li>Eğer diş sayısı <strong>z = 12</strong> ise hız dalgalanması <strong>%3,4</strong> seviyesindedir (Aşırı sarsıntı ve gürültü!).</li>
  <li>Eğer diş sayısı <strong>z ≥ 19</strong> seçilirse hız dalgalanması <strong>&lt; %1,0</strong> seviyesine iner ve sistem son derece sakin çalışır.</li>
  <li><strong>Altın Kural:</strong> Dinamik çalışan tahrik pinyonlarında diş sayısı <strong>asla z &lt; 17 seçilmemelidir</strong> (Tercihen z = 19–23).</li>
</ul>

<h2>Zincir Tasarım ve Yerleşim Kuralları</h2>
<ol>
  <li><strong>Hat Boyu Ayarı:</strong> Mümkünse zincir bakla sayısı <strong>çift sayı</strong> seçilmelidir. Tek sayı seçilirse yarım bakla (offset link / deveboynu) kullanmak gerekir; yarım baklalar zincirin kopma mukavemetini <strong>%20 düşürür</strong>!</li>
  <li><strong>Sarkma Miktarı:</strong> İki dişli arasındaki alt kolda eksen mesafesinin <strong>%1 ila %2'si kadar serbest sarkma</strong> bırakılmalıdır. Aşırı gergin zincir pimleri yakar; aşırı gevşek zincir diş üzerinden atlar veya şaseye çarpar.</li>
  <li><strong>Tahrik Düzeni:</strong> Gevşek kol daima <strong>altta</strong>, gergin tahrik kolu <strong>üstte</strong> olmalıdır.</li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>ISO 606</strong></td>
    <td>Kısa adımlı hassas makaralı zincirler ve zincir dişlilerinin boyutlarını, toleranslarını ve mekanik kopma yükü limitlerini belirleyen küresel endüstriyel standarttır.</td>
  </tr>
  <tr>
    <td><strong>Poligon Etkisi (Chordal Action)</strong></td>
    <td>Zincir baklalarının dişli üzerinde dairesel yay yerine çokgen kenarları oluşturması nedeniyle, sabit dönme devrinde zincir çizgisel hızının periyodik hızlanıp yavaşlaması ve titreşim üretmesidir.</td>
  </tr>
  <tr>
    <td><strong>Zincir Hatvesi p [mm]</strong></td>
    <td>Ardışık iki zincir bakla pimi arasındaki eksenel merkez mesafesidir (örneğin 08B için 12,7 mm / 1/2 inç).</td>
  </tr>
  <tr>
    <td><strong>Yarım Bakla (Offset Link)</strong></td>
    <td>Tek sayıda bakla gerektiren zincir boylarında kullanılan kavisli özel bakladır; çekme anında eğilme momenti altında kaldığından kopma dayanımını %20-30 oranında düşürür.</td>
  </tr>
  <tr>
    <td><strong>Sarkma Toleransı (%1-2)</strong></td>
    <td>Eksen mesafesi boyunca gevşek kolda bırakılan ve pimler ile burçlar arasındaki yağ filminin korunmasını, aşırı radyal gergi yükünün önlenmesini sağlayan düşey esneme payıdır.</td>
  </tr>
  <tr>
    <td><strong>Kopma Yükü Q [kN]</strong></td>
    <td>Zincirin tek eksenli statik çekme kopma testinde tahrip olmadan taşıyabileceği minimum mekanik sınır kuvvetidir.</td>
  </tr>
  <tr>
    <td><strong>Dubleks Zincir (-2)</strong></td>
    <td>Aynı pimler üzerinde iki paralel zincir sırasının bulunduğu, montaj hacmini eksenel büyütmeden aktarılabilir dinamik gücü 1,7 katına çıkaran çok sıralı zincir tipidir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Zincir mekanizmaları ağır yük, kir, yağ ve yüksek sıcaklıkta kaymasız aktarım için en ekonomik çözümdür.</li>
  <li>Avrupa standardında <strong>08B-1 (1/2")</strong> ve <strong>10B-1 (5/8")</strong> en sık kullanılan endüstriyel boyutlardır.</li>
  <li><strong>Poligon etkisi</strong> nedeniyle zincir hızı dalgalanır; titreşimi engellemek için tahrik dişlisinde diş sayısı en az <strong>z ≥ 17–19</strong> seçilmelidir.</li>
  <li>Zincir bakla sayısı tek çıkarsa yarım bakla (deveboynu) gerekir ve bu mukavemeti %20 azaltır; eksen mesafesini ayarlayıp çift sayı baklaya kilitlenilmelidir.</li>
  <li>Tahrik gergin kolu üstte, gevşek kol altta olmalı; gevşek kolda %1–2 sarkma toleransı bırakılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Neden tahrik zinciri dişlilerinde z = 11 veya z = 13 diş yerine en az z = 19 diş tercih edilir?</summary>
<div>Zincir baklaları dişlinin etrafına sarılırken dairesel değil çokgen (poligon) geometrisi çizer. Diş sayısı 13'ün altına indikçe çizgisel hızdaki periyodik dalgalanma %3–5'in üzerine çıkar. Bu hız dalgalanması zincirde sürekli darbe (şok) gerilmesi, kulak tırmalayıcı şakırtı ve erken pim aşınması yaratır. z ≥ 19 diş poligon hız dalgalanmasını %1'in altına düşürür.</div></details>
<details><summary>Montaj hattında bir zincir konveyörün boyunu ayarlarken bakla sayısı tek sayı çıktı. Teknisyen "yarım bakla (offset link) atalım bağlarız" dedi. Bu tasarım açısından ne anlama gelir?</summary>
<div>Yarım bakla (deveboynu) eğik formda basılmış özel bir bakladır. Düz bakla plakalarına göre çekme anında eğilmeye maruz kalır ve zincirin nominal kopma mukavemetini <strong>%20–30 düşürür</strong>. Dinamik darbeli sistemlerde zincir ilk bu yarım bakladan kopar. Doğru mühendislik yaklaşımı, eksen mesafesini birkaç milimetre kaydırarak veya gergi dişlisi kullanarak bakla sayısını <strong>çift sayıya</strong> çekmektir.</div></details>
<details><summary>Tahrik motorunu üst kola mı alt kola mı çekme yaptıracak şekilde konumlandırmalısın? Neden?</summary>
<div>Gergin tahrik kolu daima <strong>üstte</strong> olmalıdır. Eğer gergin kol altta olursa, üstteki gevşek kol aşağı doğru sarkar ve iki dişlinin tepesine temas ederek veya dişliden sıyrılarak diş atlamasına ve kilitlenmeye yol açar. Gevşek kol altta olduğunda yerçekimiyle serbestçe aşağı sarkar ve güvenle çalışır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-14', `
<p class="giris">Tasarım konsepti aşamasında "Bu aktarmada dişli mi, kayış mı yoksa zincir mi kullanmalıyım?" sorusu maliyet, hacim, hassasiyet ve bakım gereksinimlerini doğrudan belirler. Yanlış seçim; ya sistemin sürekli diş sıyırmasına ya da bütçenin katlanmasına yol açar. Bu bölümde tüm aktarma organlarını 12 farklı mühendislik kriterine göre puanlayarak karşılaştırıyoruz.</p>

<h2>Büyük Güç Aktarım Kıyaslama Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Karşılaştırma Kriteri</th>
    <th>Helis / Düz Dişli Kutusu</th>
    <th>Triger (Zamanlama) Kayış</th>
    <th>Standart V-Kayış</th>
    <th>Makaralı Zincir Mekanizması</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1. Açısal Senkronizasyon</strong></td>
    <td>%100 Sıfır Kayma</td>
    <td>%100 Sıfır Kayma</td>
    <td><strong>Kayar (%1–3 slip)</strong></td>
    <td>%100 Sıfır Kayma</td>
  </tr>
  <tr>
    <td><strong>2. Boşluksuzluk (Backlash)</strong></td>
    <td>Çok Düşük (Taşlanmış)</td>
    <td><strong>SIFIR (Preload ile)</strong></td>
    <td>Pozisyonlama yapılamaz</td>
    <td>Orta (Pim boşlukları)</td>
  </tr>
  <tr>
    <td><strong>3. Eksenler Arası Mesafe</strong></td>
    <td>Çok Kısa (Bitişik dişliler)</td>
    <td>Orta (0,2 – 3 metre)</td>
    <td>Orta (0,3 – 3 metre)</td>
    <td><strong>Çok Uzun (0,5 – 6+ metre)</strong></td>
  </tr>
  <tr>
    <td><strong>4. Maksimum Doğrusal Hız</strong></td>
    <td>Çok Yüksek (&gt; 40 m/s)</td>
    <td><strong>En Yüksek (60–80 m/s)</strong></td>
    <td>Orta (maks. 30 m/s)</td>
    <td>Düşük (maks. 10–15 m/s)</td>
  </tr>
  <tr>
    <td><strong>5. Tork Taşıma Kapasitesi</strong></td>
    <td><strong>En Yüksek (Devasa tork)</strong></td>
    <td>Orta – Yüksek</td>
    <td>Orta</td>
    <td>Çok Yüksek (Darbeli tork)</td>
  </tr>
  <tr>
    <td><strong>6. Şok ve Darbe Dayanımı</strong></td>
    <td>Kırılabilir (Gevrek temas)</td>
    <td>Orta (Kordlar esner)</td>
    <td><strong>Mükemmel (Kayarak emer)</strong></td>
    <td><strong>Çok Yüksek (Tok çelik)</strong></td>
  </tr>
  <tr>
    <td><strong>7. Ses ve Titreşim</strong></td>
    <td>Helis: Sessiz / Düz: Gürültülü</td>
    <td><strong>Çok Sessiz (Fısıltı gibi)</strong></td>
    <td>Sessiz</td>
    <td><strong>Çok Gürültülü (Şakırdar)</strong></td>
  </tr>
  <tr>
    <td><strong>8. Yağlama İhtiyacı</strong></td>
    <td><strong>Şart (Kapalı yağ banyosu)</strong></td>
    <td><strong>SIFIR YAĞ (Kuru & Temiz)</strong></td>
    <td>Sıfır Yağ</td>
    <td><strong>Şart (Periyodik yağlama)</strong></td>
  </tr>
  <tr>
    <td><strong>9. Kir, Toz, Sıcaklık Direnci</strong></td>
    <td>Kapalı kutu olduğu için iyi</td>
    <td>Hassas (Talaş girerse diş kopar)</td>
    <td>Orta</td>
    <td><strong>Aşırı Dirençli (Zorlu saha)</strong></td>
  </tr>
  <tr>
    <td><strong>10. Rulmanlara Binen Radyal Yük</strong></td>
    <td>Düşük – Orta</td>
    <td>Düşük – Orta</td>
    <td><strong>Aşırı Yüksek (Gergi yükü)</strong></td>
    <td>Düşük (Gevşek kol rahat)</td>
  </tr>
  <tr>
    <td><strong>11. Bakım Kolaylığı</strong></td>
    <td>Zor (Kutu açılmalı)</td>
    <td>Çok Kolay (Hızlı sök-tak)</td>
    <td>Çok Kolay</td>
    <td>Kolay (Bakla ekle/çıkar)</td>
  </tr>
  <tr>
    <td><strong>12. İlk Yatırım Maliyeti</strong></td>
    <td>Pahalı (İşlenmiş kutu/dişli)</td>
    <td>Orta</td>
    <td><strong>En Ucuz</strong></td>
    <td>Ucuz – Orta</td>
  </tr>
</tbody>
</table>
</div>

<h2>Mühendislik Karar Algoritması: Hangisini Seçmelisin?</h2>
<ul>
  <li><strong>Hassas Kartezyen Robot veya Pick & Place:</strong> Eksenler servo motorla sürülüyor, ivmelenme yüksek, ses istenmiyor, sıfır boşluk şart → <strong>Tek Seçenek: AT veya GT3 Triger Kayış!</strong></li>
  <li><strong>Ağır Palet Konveyörü:</strong> Ağır çelik paletler taşınıyor, ortamda kaynak çapakları ve toz var, hız düşük (0,2–0,5 m/s) → <strong>Tek Seçenek: Çift Sıra Makaralı Zincir (08B-2 veya 10B-2)!</strong></li>
  <li><strong>Kompakt Yüksek Güçlü Redüktör:</strong> Motor 3000 d/dak dönüyor, çıkışta 1500 Nm tork lazım, hacim dar → <strong>Tek Seçenek: Helis / Planet Dişli Mekanizması!</strong></li>
  <li><strong>Kırıcı, Fan, Pompa veya Kompresör:</strong> Torkta ani tıkanma ve motoru durdurma riski var; sistem mekanik olarak esnesin isteniyor → <strong>Tek Seçenek: V-Kayış Grubu!</strong></li>
</ul>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Mekanik Sigorta (Mechanical Fuse)</strong></td>
    <td>Aşırı tork bindiğinde kontrollü şekilde kayarak veya kırılarak pahalı motor ve redüktör bileşenlerini tahribattan koruyan mekanik aktarma elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>Açısal Senkronizasyon</strong></td>
    <td>Giriş ve çıkış milleri arasında zamanla veya değişken tork altında kayma olmadan birebir açısal faz eşleşmesinin korunması yeteneğidir.</td>
  </tr>
  <tr>
    <td><strong>Eksen Açıklığı (Center Distance)</strong></td>
    <td>Tahrik eden ve edilen iki mil merkezi arasındaki fiziksel geometrik mesafedir; aktarma organı tipini doğrudan sınırlar.</td>
  </tr>
  <tr>
    <td><strong>Hertz Temas Hasarı</strong></td>
    <td>Dişli çarkların ve makaralı zincir pimlerinin yüksek dinamik darbe altında yüzey ezilmesine ve yorulma kraterlerine maruz kalması durumudur.</td>
  </tr>
  <tr>
    <td><strong>Tork Yoğunluğu [Nm/kg]</strong></td>
    <td>Aktarma organının kendi toplam kütlesi veya kapladığı hacim başına iletebildiği nominal tork kapasitesidir; dişli kutularında en yüksektir.</td>
  </tr>
  <tr>
    <td><strong>Darbe Sönümleme Kapasitesi</strong></td>
    <td>Sistemdeki ani frenleme veya sıkışma şok dalgalarının mekanizma bileşenleri tarafından elastik deformasyon veya kontrollü sürtünmeyle yutulabilme kabiliyetidir.</td>
  </tr>
  <tr>
    <td><strong>Çizgisel Hız Limiti [m/s]</strong></td>
    <td>Aktarma organının merkezkaç kuvvetleri, sürtünme ısısı ve dinamik gürültü patlaması yaşamadan emniyetle çalışabileceği maksimum teğetsel hızdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Kısa eksen mesafesi ve aşırı yüksek tork için: <strong>Dişli mekanizmaları</strong> rakipsizdir.</li>
  <li>Hızlı ivmelenen (&gt;5 m/s), sessiz, yağsız ve hassas servo konumlandırma için: <strong>Triger kayış</strong> tek tercihtir.</li>
  <li>Geniş eksen mesafesi, kirli, tozlu, yüksek sıcaklıklı ve darbeli ağır yükler için: <strong>Makaralı zincir</strong> en dayanıklı çözümdür.</li>
  <li>Sıkışma anında motorun yanmasını önleyen ucuz mekanik sigorta ve darbe sönümleme için: <strong>V-kayış</strong> idealdir.</li>
  <li>Seçim yaparken sadece tork değil; hız, çevre kirliliği, yağlama imkanı ve bakım periyotları birlikte değerlendirilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Gıda paketleme fabrikasında bir bisküvi kutulama robotu tasarlıyorsun. Ortam temiz oda standardında, yıkanabilir olmalı ve dakikada 120 kutu indekslenmeli. Neden zincir mekanizması kesinlikle KULLANILAMAZ?</summary>
<div>Zincir mekanizmaları metal-metale sürtündüğü için sürekli sıvı/gres yağlamaya ihtiyaç duyar. Yağ sıçraması gıda ürününü kirletir. Ayrıca gıda hatlarında yapılan periyodik kimyasal ve tazyikli su yıkamaları zinciri hızla paslandırır. Çözüm: Yağlama gerektirmeyen, FDA onaylı beyaz poliüretan ve paslanmaz çelik kordlu <strong>AT10 triger kayış</strong> kullanmaktır.</div></details>
<details><summary>Taş kırma eleme tesisinde çeneli kırıcıyı süren 55 kW'lık elektrik motorunda neden dişli veya triger kayış yerine V-kayış tercih edilir?</summary>
<div>Kırıcı haznesine büyük bir kaya parçası düştüğünde mil milisaniyeler içinde kilitlenebilir (bloke olabilir). Eğer arada triger kayış veya rijit dişli olsaydı, motorun devasa rotor ataleti kayışı parça pinçik eder, dişlileri kırar veya motor milini bükerdi. V-kayış sürtünmeyle çalıştığı için bu tıkanma anında kasnak üzerinde kayarak <strong>doğal bir mekanik sigorta</strong> gibi davranır ve sistemi korur.</div></details>
<details><summary>3 metrelik bir eksende iki mil arasında 1:1 senkronizasyon isteniyor. Alan dar değil, bütçe kısıtlı. Dişli mi triger mi zincir mi?</summary>
<div>3 metre mesafeyi dişlilerle bağlamak araya onlarca ara dişli koymayı veya devasa çaplı dişliler üretmeyi gerektirir; maliyet ve ağırlık uçuk seviyeye çıkar. Triger kayış 3 metre boyda esneme yapabilir veya özel geniş profil gerektirir. Düşük-orta devirde 3 metrelik eksen mesafesini en ucuz, en rijit ve en pratik şekilde bağlayan yöntem <strong>makaralı zincirdir</strong>.</div></details>
</div>
`);

KITAP.bolum('m4', '4-15', `
<p class="giris">Motor mili ile sürülen mekanizmanın milini birbirine körü körüne rijit bir manşonla bağlamak, mekanik montajda yapılabilecek en pahalı hatadır. İki mil arasındaki eksen kaçıklığı mikron seviyesinde bile olsa, rijit bağlantı millerde her turda tersinir devasa eğilme momentleri üretir; rulmanlar yanar ve mil yorulmadan kopar. Bu kaçıklıkları karşılayan elemana <strong>Kaplin (Coupling)</strong> denir.</p>

<h2>Miller Arasındaki 3 Temel Kaçıklık Türü</h2>
<ul>
  <li><strong>Radyal Kaçıklık (Paralel Ofset - ΔK<sub>r</sub>):</strong> Millerin eksen çizgileri birbirine paraleldir ancak merkezleri kaçıktır (Tipik izin verilen: 0,1 – 0,5 mm). Karşılanması rulmanlar için en zararlı kaçıklıktır.</li>
  <li><strong>Açısal Kaçıklık (Açısal Sapma - ΔK<sub>w</sub>):</strong> Millerin merkezleri aynı noktadadır ancak eksenleri birbiriyle açı yapar (Tipik: 0,5° – 2,0°).</li>
  <li><strong>Eksenel Kaçıklık (Eksenel Gezinme - ΔK<sub>a</sub>):</strong> Millerin ısıl genleşmeyle boyuna uzayıp birbirini itmesi veya çekmesi (Tipik: ±1 – 3 mm).</li>
</ul>

<h2>Kaplin Tiplerinin Ayrıntılı Kıyaslama Tablosu</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kaplin Ailesi</th>
    <th>Burulma Rijitliği (Torsional Stiffness)</th>
    <th>Boşluksuzluk (Backlash)</th>
    <th>Titreşim Sönümleme Yeteneği</th>
    <th>Maksimum Kaçıklık Toleransı</th>
    <th>Maksimum Tork Sınırı</th>
    <th>Nerede Kullanılır? / Nerede Kullanılmaz?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Elastik Çeneli Kaplin (Rotex / Yıldız)</strong></td>
    <td>Orta (Elastomer basılır)</td>
    <td>Hafif esneme payı var</td>
    <td><strong>Mükemmel (PU yıldız darbeyi yutar)</strong></td>
    <td>Radyal: 0,2 mm<br>Açısal: 1,0°</td>
    <td>Çok Yüksek</td>
    <td><strong>Kullanım:</strong> Asenkron motorlar, pompalar, konveyörler, hidrolik üniteler.<br><strong>Kullanılmaz:</strong> Hassas CNC ve servo eksenleri (Geri dönüşte elastomer yaylanır!).</td>
  </tr>
  <tr>
    <td><strong>Metal Körüklü Kaplin (Bellows Coupling)</strong></td>
    <td><strong>AŞIRI YÜKSEK (Torsiyonel Yay Sabiti Devasa)</strong></td>
    <td><strong>SIFIR (Kesinlikle Zero-Backlash)</strong></td>
    <td>Düşük</td>
    <td>Radyal: 0,15 mm<br>Açısal: 1,5°</td>
    <td>Orta (Körük ince paslanmaz sacdır)</td>
    <td><strong>Kullanım:</strong> <strong>Vidalı mil - servo motor bağlantısı, enkoderler, yüksek dinamik robotlar.</strong><br><strong>Tehlike:</strong> Radyal kaçıklık aşılırsa körük metal yorulmasından yırtılır.</td>
  </tr>
  <tr>
    <td><strong>Diskli / Lamelli Kaplin (Disc Pack)</strong></td>
    <td><strong>Çok Yüksek</strong></td>
    <td><strong>SIFIR (Zero-Backlash)</strong></td>
    <td>Düşük</td>
    <td>Çift diskli pakette radyal tolerans mükemmeldir.</td>
    <td><strong>Çok Yüksek (Ağır Hizmet Servo)</strong></td>
    <td><strong>Ağır servo eksenler, yüksek hızlı CNC freze iş milleri, rüzgar türbinleri.</strong> Körüklüye göre çok daha yüksek torklara dayanır.</td>
  </tr>
  <tr>
    <td><strong>Oldham Kaplini (Kayan Göbekli)</strong></td>
    <td>Düşük – Orta</td>
    <td>Sıfır (Aşınana kadar)</td>
    <td>İyi</td>
    <td><strong>AŞIRI YÜKSEK RADYAL KAÇIKLIK (1,0–2,0 mm!)</strong></td>
    <td>Düşük</td>
    <td>Paralel eksen kaçıklığı çok yüksek olan hafif mekanizmalar. Ortadaki plastik pabuç kayarak aşınır, periyodik değişir.</td>
  </tr>
  <tr>
    <td><strong>Dişli Kaplin (Gear Coupling)</strong></td>
    <td>Çok Yüksek</td>
    <td>Boşlukludur</td>
    <td>Yok</td>
    <td>Yüksek Açısal</td>
    <td><strong>EN YÜKSEK (Tonlarca Tork)</strong></td>
    <td>Haddehane tahrik milleri, vinç tamburları. Yağ banyosu içinde çalışır.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu ipucu"><span class="kb">Servo Bağlantısında Neden Körüklü veya Diskli Kaplin?</span>
Servo motor kapalı çevrim pozisyonlama yapar. Motor mili 0,01° döndüğünde vidalı mil de aynı anda 0,01° dönmelidir. Eğer arada Rotex gibi elastik bir kaplin varsa, motor hızlanırken elastomer takoz burulur; motor durduğunda ise bir yay gibi geri boşalarak hedef pozisyonun etrafında salınım (hunting/overshoot) yapar. Servo sürücü bu salınımı düzeltmek için sürekli akım basar ve sistem rezonansa girerek öter! Bu yüzden servolarda daima <strong>burulma rijitliği sonsuz kabul edilen metal körüklü veya diskli kaplin</strong> kullanılır.</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kaplin (Shaft Coupling)</strong></td>
    <td>İki bağımsız mili uç uca bağlayarak tork iletimi sağlarken, montaj kaçıklıklarını (radyal, açısal, eksenel) elastik olarak kompanze eden makine elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>Radyal Kaçıklık ΔK<sub>r</sub> [mm]</strong></td>
    <td>İki milin dönme merkez eksenlerinin birbirine paralel olmasına rağmen aralarında oluşan dik mesafe farkıdır; yataklar için en yıkıcı kaçıklık türüdür.</td>
  </tr>
  <tr>
    <td><strong>Metal Körüklü Kaplin</strong></td>
    <td>İnce etli hidroformlanmış paslanmaz çelik körüğün eksenel ve açısal esnekliği sayesinde kaçıklıkları karşılarken, burulma yönünde (torsiyonel) sıfır boşluk ve sonsuz rijitlik sunan servo kaplinidir.</td>
  </tr>
  <tr>
    <td><strong>Çift Diskli (Disc Pack) Kaplin</strong></td>
    <td>İki ucu esnek paslanmaz çelik lamel paketleriyle donatılmış ara borulu kaplindir; yüksek torklu ağır servo tahriklerde hem açısal hem de radyal kaçıklıkları sıfır backlash ile karşılar.</td>
  </tr>
  <tr>
    <td><strong>Hunting (Pozisyonel Salınım)</strong></td>
    <td>Elastik bir kaplinin torsiyonel yaylanması sebebiyle, kapalı çevrim servo motorun hedef duruş koordinatında duramayıp ileri-geri rezonans titreşimi yapması kararsızlığıdır.</td>
  </tr>
  <tr>
    <td><strong>Burulma Yay Sabiti C<sub>T</sub> [Nm/rad]</strong></td>
    <td>Kaplinin birim radyanlık açısal burulma deformasyonuna karşı gösterdiği mekanik direnç torkudur; servo eksenlerin dinamik tepki hızını belirler.</td>
  </tr>
  <tr>
    <td><strong>Oldham Kaplini</strong></td>
    <td>İki flanş arasına yerleştirilmiş ve birbirine dik kanallarda kayan bir plastik/metal merkez takoz sayesinde çok büyük radyal paralel kaçıklıkları tolere edebilen kaplin türüdür.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>İki mili rijit bağlamak eksen kaçıklığı durumunda milleri ve yatakları yorulmadan kırar; kaplin şarttır.</li>
  <li>Üç kaçıklık türü vardır: Radyal (paralel), açısal ve eksenel. En tehlikelisi radyal kaçıklıktır.</li>
  <li><strong>Elastik (Rotex/Yıldız) kaplinler</strong> asenkron motor, pompa ve konveyörde darbe yutar; ancak servo sistemlerde açısal yaylanma (hunting) yaptığı için kullanılmaz.</li>
  <li><strong>Metal körüklü ve diskli (lamelli) kaplinler</strong> burulmada sonsuz rijit ve sıfır boşlukludur (Zero-Backlash); servo motor-vidalı mil bağlantısının endüstri standardıdır.</li>
  <li><strong>Oldham kaplinleri</strong> aşırı radyal kaçıklıkları telafi eder fakat ortadaki plastik takoz aşındıkça boşluk yapar.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir vidalı mili servo motora Rotex tipi poliüretan yıldız kaplinle bağladın. Servo motor hedef pozisyona geldiğinde durup sabit kalmak yerine tiz bir sesle vızıldıyor ve hafifçe ileri-geri titriyor. Hata nedir?</summary>
<div>Bu olaya <strong>hunting (salınım)</strong> denir. Elastik yıldız kaplin burulma esnekliğine sahiptir. Servo hedef pozisyona frenlediğinde yükün ataleti kaplini yay gibi büker; durduğunda kaplin geri yaylanır. Servo enkoderi pozisyonun aşıldığını görüp motoru ters döndürür, bu sefer kaplin ters tarafa yaylanır. Sürücünün PID kazançları kaplinin yay katsayısıyla rezonansa girer. Çözüm: Kaplini <strong>metal körüklü (bellows) veya çift diskli (disc pack) sıfır boşluklu kaplinle</strong> değiştirmektir.</div></details>
<details><summary>Metal körüklü kaplin taktığın bir servo eksende 3 ay sonra körüğün boğumlarından yırtılarak koptuğunu gördün. Aşırı tork yoktu. Sebep ne olabilir?</summary>
<div>Metal körükler açısal kaçıklığı iyi karşılarken <strong>radyal kaçıklığa (paralel ofset)</strong> karşı son derece hassastır. Motor flanşı ile vidalı mil yatak gövdesi eş eksenli işlenmediyse (radyal kaçıklık &gt; 0,15 mm ise), milin her bir turunda ince paslanmaz körük sacı ters yönlü eğilip bükülür. Milyonlarca çevrim sonunda körük metal yorulmasından yırtılır. Komparatörle merkezleme kontrol edilmeli veya çift diskli kapline geçilmelidir.</div></details>
<details><summary>Tek diskli (single disc pack) kaplin ile çift diskli (double disc pack) kaplin arasındaki hayati fark nedir?</summary>
<div>Tek diskli kaplin sadece <strong>açısal ve eksenel</strong> kaçıklığı karşılayabilir; radyal kaçıklığı kesinlikle karşılayamaz ve millere eğilme momenti bindirir. İki disk paketi arasına bir ara boru (spacer) konulan <strong>çift diskli kaplinler</strong> ise iki açısal sapmanın bileşkesiyle ciddi miktarda radyal paralel kaçıklığı da sıfır boşlukla tolere edebilir.</div></details>
</div>
`);

KITAP.bolum('m4', '4-16', `
<p class="giris">Redüktörler (hız düşürücü dişli kutuları); elektrik motorunun ürettiği yüksek hız-düşük tork karakteristiğini, makinenin ihtiyaç duyduğu düşük hız-yüksek tork formuna dönüştürür. Mekatronik tasarımda redüktör seçimi sadece çevrim oranı (i) demek değildir. Bir servonun hedef pozisyonda durabilmesi <strong>Dişli Boşluğuna (Backlash)</strong>; sistemin kararlı ivmelenmesi ise <strong>Atalet Oranı Eşlemesine (Inertia Matching)</strong> bağlıdır.</p>

<h2>Dişli Boşluğu (Backlash) Mühendislik Analizi</h2>
<p>Backlash, redüktörün giriş mili kilitlendiğinde çıkış milinin boşta yapabildiği mikro dönme açısıdır. Birimi <strong>Ark-dakika (Arcmin, sembol: arcmin veya ')</strong>'dır:</p>
<div class="formul">
1 Derece (1°) = 60 Ark-Dakika (arcmin) &nbsp;|&nbsp; 1 Ark-Dakika = 1 / 60 Derece ≈ 0,0166° ≈ 0,00029 Radyan
</div>

<p><strong>Doğrusal Eksenlerdeki Hataya Etkisi:</strong></p>
<p>Çıkış miline bağlı bir pinyon dişli (veya kasnak) düşünelim (Bölüm çapı D = 100 mm):</p>
<div class="formul">
Δs = ( D / 2 ) · [ Backlash (arcmin) · ( π / ( 180 × 60 ) ) ]
</div>
<ul>
  <li>Eğer standart bir konveyör redüktörü seçersen (Backlash = <strong>40 arcmin</strong>):<br>
  Lineer eksendeki konumsal boşluk: <code>Δs = 50 × (40 × 0,00029) = <strong>0,58 mm!</strong></code> (Makine asla 0,1 mm hassasiyete ulaşamaz!).</li>
  <li>Eğer hassas bir servo planet redüktör seçersen (Backlash = <strong>1 arcmin</strong>):<br>
  Lineer eksendeki konumsal boşluk: <code>Δs = 50 × (1 × 0,00029) = <strong>0,014 mm (14 mikron!)</strong></code>.</li>
</ul>

<h2>Redüktör Tiplerinin Kapsamlı Karşılaştırması</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Redüktör Türü</th>
    <th>Dişli Boşluğu (Backlash)</th>
    <th>Mekanik Verim (η)</th>
    <th>Tek Kademe Oran Sınırı</th>
    <th>Eksenel Yönelim</th>
    <th>Tork / Hacim Yoğunluğu</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Hassas Planet Redüktör</strong><br><small>(Apex, Neugart, Wittenstein)</small></td>
    <td><strong>Standart: &lt; 3–5 arcmin<br>Özel: &lt; 1 arcmin</strong></td>
    <td><strong>%95 – %98</strong></td>
    <td>i = 3:1 … 10:1 (2 Kademede 100:1)</td>
    <td>Düz Hat (Koaksiyel) veya 90° Konik-Planet</td>
    <td><strong>En Yüksek</strong> (3–4 planet yükü paylaşır)</td>
    <td><strong>Servo tahrikli kartezyen robotlar, vidalı mil, pinyon-kremayer, takım değiştiriciler.</strong></td>
  </tr>
  <tr>
    <td><strong>Helisel Dişli Redüktör</strong><br><small>(SEW, Yılmaz, Flender)</small></td>
    <td>15 – 30 arcmin</td>
    <td><strong>%95 – %97</strong></td>
    <td>i = 2:1 … 8:1 (Kademelerle 500:1)</td>
    <td>Paralel Mil veya Düz Hat</td>
    <td>Yüksek</td>
    <td>Sürekli çalışan endüstriyel konveyör hatları, karıştırıcılar, ağır tahrikler.</td>
  </tr>
  <tr>
    <td><strong>Sonsuz Vidalı Redüktör</strong><br><small>(Worm Gearbox)</small></td>
    <td>30 – 60 arcmin (Çok Yüksek)</td>
    <td><strong>%60 – %85 (Düşük)</strong></td>
    <td><strong>Tek kademede i = 7:1 … 100:1</strong></td>
    <td><strong>90° Dik Açılı</strong></td>
    <td>Düşük – Orta</td>
    <td>Düşük bütçeli konveyörler, döner aparatlar, otomatik kilitlenme istenen asansör mekanizmaları.</td>
  </tr>
  <tr>
    <td><strong>Harmonik Redüktör (Strain Wave)</strong><br><small>(Harmonic Drive)</small></td>
    <td><strong>GERÇEK SIFIR BOŞLUK (Zero-Backlash)</strong></td>
    <td>%75 – %85</td>
    <td>i = 30:1 … 160:1</td>
    <td>Düz Hat (Çok Kompakt)</td>
    <td>Aşırı Yüksek (İnce etli esnek dişli)</td>
    <td><strong>6 Eksenli Endüstriyel Robot Eklemleri, Kobotlar, Medikal Cihazlar, Uydu Antenleri.</strong> Darbelere karşı kırılgandır.</td>
  </tr>
  <tr>
    <td><strong>Sikloit Redüktör (Cycloidal)</strong><br><small>(Nabtesco, Sumitomo)</small></td>
    <td><strong>&lt; 1 arcmin</strong></td>
    <td>%90 – %94</td>
    <td>i = 30:1 … 100:1</td>
    <td>Düz Hat / Dik</td>
    <td><strong>En Yüksek Darbe Dayanımı</strong></td>
    <td>Ağır yük endüstriyel robotların (ana gövde J1, J2 eksenleri) eklem tahrikleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Mekatronik İçin Hayati Kural: Atalet Oranı Eşleme (Inertia Ratio)</h2>
<p>Bir servo sistemde motorun rotoru (J<sub>m</sub>) ile redüktör çıkışına bağlı yükün ataleti (J<sub>L</sub>) arasındaki oran kontrol kararlılığını belirler. Redüktör, yükün ataletini <strong>çevrim oranının karesiyle (i²) böler</strong>:</p>
<div class="formul">
J<sub>yansıyan</sub> = J<sub>yük</sub> / ( i² · η ) <br><br>
Atalet Oranı = J<sub>yansıyan</sub> / J<sub>motor</sub> &nbsp;≤ &nbsp; Limit
</div>
<p><strong>Mühendislik Limitleri:</strong></p>
<ul>
  <li><strong>Yüksek Dinamik Eksenler (Pick & Place, Delta Robot):</strong> <code>J<sub>yansıyan</sub> / J<sub>motor</sub> ≤ 1 ila 3</code></li>
  <li><strong>Genel Hassas Eksenler (CNC, Kartezyen Eksen):</strong> <code>J<sub>yansıyan</sub> / J<sub>motor</sub> ≤ 5 ila 8</code></li>
  <li><strong>Konveyör ve Ağır Transfer Hatları:</strong> <code>J<sub>yansıyan</sub> / J<sub>motor</sub> ≤ 10 ila 15</code></li>
</ul>
<div class="kutu tehlike"><span class="kb">Atalet Oranı 20'yi Aşarsa Ne Olur?</span>
Motor tork olarak yükü çevirmeye yetse bile, sistem "kuyruğu gövdesinden ağır bir köpek" gibi davranır. Yük motoru savurur; servo sürücünün PID kazançlarını ne kadar açarsan aç sistem titreşime (osilosyona) girer veya hedef pozisyonda duramaz! Çözüm: Redüktör oranını (i) artırmak (kareyle böler!) veya bir boy büyük motor seçmektir.</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Backlash (Dişli Boşluğu)</strong></td>
    <td>Redüktörün giriş mili kilitliyken, çıkış milinde yön değişimlerinde hareket aktarılmadan önce katedilen serbest dönme açısıdır (ark-dakika cinsinden).</td>
  </tr>
  <tr>
    <td><strong>Ark-Dakika (Arcmin)</strong></td>
    <td>Açısal dakikadır; 1 derecenin altmışta birine (1/60° ≈ 0,0166° ≈ 0,29 mrad) eşittir. Hassas redüktörlerde backlash sınıfı göstergesidir.</td>
  </tr>
  <tr>
    <td><strong>Atalet Eşleme (Inertia Matching)</strong></td>
    <td>Yükün motora yansıyan kütlesel eylemsizlik momentinin (J<sub>yansıyan</sub>), motorun kendi rotor ataletine (J<sub>m</sub>) olan oranıdır; servo kontrol stabilitesini yönetir.</td>
  </tr>
  <tr>
    <td><strong>Harmonik Redüktör (Strain Wave)</strong></td>
    <td>Dalga üreteci, esnek dişli bilezik (flexspline) ve dairesel rijit halkadan oluşan; sıfır backlash, devasa oran ve olağanüstü kompaktlık sunan robotik redüktörüdür.</td>
  </tr>
  <tr>
    <td><strong>Sikloit Redüktör (Cycloid)</strong></td>
    <td>Evolvent diş yerine sikloidal kam diskleri ve iğneli makaralarla çalışan, 5 kat aşırı şok yüklere dağılmadan dayanabilen ağır hizmet robot redüktörüdür.</td>
  </tr>
  <tr>
    <td><strong>Planet Redüktör</strong></td>
    <td>Güneş dişli, etrafında dönen çoklu planet dişliler ve dış çember dişliden oluşan, torku çoklu temas noktasına dağıtarak yüksek tork yoğunluğu sunan koaksiyel redüktördür.</td>
  </tr>
  <tr>
    <td><strong>Yansıyan Atalet Kanunu</strong></td>
    <td>Çıkıştaki yük eylemsizlik momentinin motor miline çevrim oranının karesiyle (i²) bölünerek yansıdığını tanımlayan temel fizik kanunudur.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Redüktörler hızı düşürür, torku çevrim oranı (i) kadar artırır; yansıyan yük ataletini ise <strong>oranın karesiyle (i²)</strong> düşürür.</li>
  <li>Dişli boşluğu (Backlash) <strong>arcmin (1/60 derece)</strong> ile ölçülür. Hassas servo planetlerde &lt;1–3 arcmin, standart redüktörlerde 20–40 arcmin'dir.</li>
  <li>Robot kollarının bileklerinde gerçek sıfır boşluk için <strong>Harmonik (Strain Wave)</strong>; ağır ana gövdelerinde ise yüksek darbe direnci için <strong>Sikloit (Cycloidal)</strong> redüktör kullanılır.</li>
  <li>Mekatronik servolarda <strong>Atalet Oranı (Jyansıyan / Jmotor)</strong> dinamik eksenlerde ≤3–5 arasında tutulmalıdır; 15–20'yi aşarsa servo rezonanstan kontrol edilemez.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir pinyon-kremayer ekseninde pinyon çapı D = 80 mm'dir. Redüktör olarak backlash değeri 15 arcmin olan standart bir helisel redüktör seçtin. Bu eksenin mekanik tekrarlanabilirlik sınırındaki teorik boşluğu kaç mm'dir?</summary>
<div>Formül: <code>Δs = R · Δθ(rad) = (80 / 2) · [ 15 · (π / (180 × 60)) ] = 40 · [ 15 × 0,0002908 ] ≈ 0,174 mm (174 mikron)</code>. Bu eksen yazılımla ne kadar hassas kontrol edilirse edilsin, yön değiştirdiğinde mekanik boşluktan dolayı en az 0,17 mm hata yapacaktır! Eğer hedef hassasiyet ±0,03 mm ise redüktör backlash değeri <strong>&lt; 3 arcmin</strong> olan hassas servo planet olmalıdır (boşluk ~0,035 mm'ye düşer).</div></details>
<details><summary>Bir mekanizmada yük ataleti JL = 0,05 kg·m², servo motor rotor ataleti Jm = 0,0005 kg·m²'dir. Redüktörsüz direkt bağlarsan atalet oranı kaçtır? i = 5 olan bir redüktör takarsan oran kaça düşer?</summary>
<div>Direkt bağlantıda Atalet Oranı: <code>0,05 / 0,0005 = 100:1!</code> Bu oranla servo motor asla kontrol edilemez, duramaz ve aşırı akımdan trip atar. Araya i = 5 redüktör konulduğunda yansıyan atalet: <code>0,05 / (5²) = 0,05 / 25 = 0,002 kg·m²</code> olur. Yeni atalet oranı: <code>0,002 / 0,0005 = 4:1</code> seviyesine iner. Bu oran hassas dinamik kontrol için mükemmel sınırdır.</div></details>
<details><summary>6 eksenli bir robot kolunun ekleminde neden planet redüktör yerine harmonik redüktör (Harmonic Drive) tercih edilir?</summary>
<div>Planet redüktörler ne kadar hassas taşlansa da dişler arasında en az 1–3 arcmin mikro boşluk kalır. 6 eksenli bir kolda her eklemdeki 2 arcmin boşluk üst üste toplandığında robotun uç noktasında (TCP) milimetrelik boşluklara yol açar. Harmonik redüktörler esnek bir dişli bileziğini eliptik dalga üreteciyle dişliye bastırarak çalışır; dişler iki zıt noktada aynı anda sürekli temas halindedir ve <strong>gerçek fiziksel sıfır boşluk (Zero-Backlash)</strong> sağlar.</div></details>
</div>
`);

KITAP.bolum('m4', '4-17', `
<p class="giris">Mekanik yaylar; enerji depolama, geri getirme, tolerans dengeleme ve şok sönümleme fonksiyonlarıyla otomasyon fikstürlerinin ve kalıpların vazgeçilmez parçalarıdır. Bu bölümde Hooke kanununun ötesine geçerek ISO 10243 kalıp yaylarının yorulma ömürlerini, çanak yay dizilim kombinasyonlarını ve gazlı amortisör seçimini inceliyoruz.</p>

<h2>ISO 10243 Kalıp Yayları: Renk Kodları ve Dinamik Ömür Analizi</h2>
<p>Kalıp yayları, yuvarlak tel yerine dikdörtgen kesitli (trapez kenarlı) yay çeliğinden sarılır. Bu geometri aynı hacimde %40 daha fazla enerji depolar.</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Renk Kodu</th>
    <th>Yük Sınıfı</th>
    <th>Yay Rijitliği (k)</th>
    <th>Maks. Çökme (s<sub>maks</sub> - Kırılma Sınırı)</th>
    <th>Uzun Ömürlü Çalışma Çökmesi (10⁶ Çevrim)</th>
    <th>Optimum Çalışma Çökmesi (3×10⁶ Çevrim)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Yeşil (Green)</strong></td>
    <td>Hafif Yük (1L)</td>
    <td>Düşük</td>
    <td>Serbest Boyun <strong>%40'ı</strong></td>
    <td>Serbest Boyun <strong>%30'u</strong></td>
    <td>Serbest Boyun <strong>%25'i</strong></td>
  </tr>
  <tr>
    <td><strong>Mavi (Blue)</strong></td>
    <td><strong>Orta Yük (2M) - En Popüler</strong></td>
    <td>Orta</td>
    <td>Serbest Boyun <strong>%37,5'i</strong></td>
    <td>Serbest Boyun <strong>%28'i</strong></td>
    <td>Serbest Boyun <strong>%22'si</strong></td>
  </tr>
  <tr>
    <td><strong>Kırmızı (Red)</strong></td>
    <td>Ağır Yük (3H)</td>
    <td>Yüksek</td>
    <td>Serbest Boyun <strong>%30'u</strong></td>
    <td>Serbest Boyun <strong>%22'si</strong></td>
    <td>Serbest Boyun <strong>%18'i</strong></td>
  </tr>
  <tr>
    <td><strong>Sarı (Yellow)</strong></td>
    <td>Çok Ağır Yük (4X)</td>
    <td>Çok Yüksek</td>
    <td>Serbest Boyun <strong>%25'i</strong></td>
    <td>Serbest Boyun <strong>%19'u</strong></td>
    <td>Serbest Boyun <strong>%15'i</strong></td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Kalıp Yaylarında Ön Gerilme (Preload) Zorunluluğu!</span>
Bir kalıp yayını serbest boyunda (ön gerilmesiz) yuvasına bırakırsan, her çevrimde yay teli gevşer ve yuva tabanına çarparak "şok darbe yorulmasına" uğrar; yay birkaç yüz bin çevrimde ortadan ikiye kırılır! Kural: <strong>Kalıp yayları yuvasına monte edilirken mutlaka serbest boyunun en az %5'i (veya 2–5 mm) kadar bir cıvata faturasıyla ÖN GERİLMEYE alınmalıdır!</strong></div>

<h2>Çanak Yaylar (Belleville Washers - DIN 2093) Dizilim Kombinasyonları</h2>
<p>Çanak yaylar, milimetrenin onda biri stroklarda binlerce Newton kuvvet üretebilen konik disklerdir. Kombinasyon mimarisi:</p>
<div class="iki-sutun">
  <div>
    <h4>Paralel Dizilim (Aynı Yöne Bakanlar)</h4>
    <p>Yaylar iç içe fincan gibi dizilir.</p>
    <ul>
      <li><strong>Kuvvet:</strong> Disk sayısı kadar katlanır (<code>F<sub>top</sub> = n · F<sub>tek</sub></code>).</li>
      <li><strong>Strok (Çökme):</strong> Değişmez, tek bir yayın strokuna eşittir (<code>s<sub>top</sub> = s<sub>tek</sub></code>).</li>
      <li><strong>Kullanım:</strong> Aşırı dar alanda devasa cıvata ön gerilme kuvveti gereken yerler.</li>
    </ul>
  </div>
  <div>
    <h4>Seri Dizilim (Zıt Yöne Bakanlar)</h4>
    <p>Yaylar sırt sırta ve taban tabana dizilir (&lt; &gt; &lt; &gt;).</p>
    <ul>
      <li><strong>Kuvvet:</strong> Değişmez, tek bir yayın kuvvetine eşittir (<code>F<sub>top</sub> = F<sub>tek</sub></code>).</li>
      <li><strong>Strok (Çökme):</strong> Disk sayısı kadar katlanır (<code>s<sub>top</sub> = n · s<sub>tek</sub></code>).</li>
      <li><strong>Kullanım:</strong> Kısa mesafeli esnek geri getirme mekanizmaları, fren paketleri.</li>
    </ul>
  </div>
</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>ISO 10243</strong></td>
    <td>Dikdörtgen tel kesitli kalıp yaylarının boyutlarını, renk kodlu yük sınıflarını (Yeşil, Mavi, Kırmızı, Sarı) ve strok limitlerini tanımlayan uluslararası standarttır.</td>
  </tr>
  <tr>
    <td><strong>DIN 2093 (Çanak Yay)</strong></td>
    <td>Konik disk formunda şekillendirilmiş, çok küçük eksenel yer değiştirmelerde son derece yüksek kuvvet üretebilen yay çeliği disk standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Paralel Dizilim</strong></td>
    <td>Çanak yayların aynı yöne bakacak şekilde üst üste istiflenmesidir; toplam strok değişmezken kuvvet disk sayısı katında artar.</td>
  </tr>
  <tr>
    <td><strong>Seri Dizilim</strong></td>
    <td>Çanak yayların sırt sırta (&lt; &gt;) yerleştirilmesidir; toplam kuvvet tek bir diske eşit kalırken çökme stroku disk sayısı kadar katlanır.</td>
  </tr>
  <tr>
    <td><strong>Ön Gerilme (Preload %5)</strong></td>
    <td>Yayın serbest konumdaki titreşim ve boşluk darbeleriyle erken yorulmasını önlemek için montaj yuvasında kalıcı olarak sıkıştırıldığı başlangıç strokudur.</td>
  </tr>
  <tr>
    <td><strong>Burkulma (Buckling)</strong></td>
    <td>Serbest boyu dış çapının 4 katını aşan basma yaylarının eksenel yük altında yana doğru bükülüp dengesini kaybetmesidir; iç kılavuz pimiyle engellenir.</td>
  </tr>
  <tr>
    <td><strong>Yay Rijitliği k [N/mm]</strong></td>
    <td>Yayı 1 mm sıkıştırmak için uygulanması gereken kuvvettir; Hooke kanunundaki elastik eğim katsayısıdır (F = k · s).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>ISO 10243 kalıp yayları dikdörtgen kesitli yay çeliğidir; renk kodları yükü belirler: <strong>Yeşil (Hafif) &lt; Mavi (Orta) &lt; Kırmızı (Ağır) &lt; Sarı (Çok Ağır)</strong>.</li>
  <li>Milyonlarca çevrimlik yorulma ömrü için mavi kalıp yaylarında çalışma çökmesi serbest boyun <strong>%25–28'ini</strong> aşmamalıdır.</li>
  <li>Kalıp yayları yuvasına asla boşta takılmamalı, mutlaka <strong>en az %5 ön gerilme (preload)</strong> ile sıkıştırılmalıdır; aksi halde serbest salınım darbesiyle kırılır.</li>
  <li>DIN 2093 çanak yaylar: <strong>Paralel dizilimde kuvvet katlanır, strok aynı kalır; seri dizilimde strok katlanır, kuvvet aynı kalır.</strong></li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Serbest boyu L0 = 100 mm olan mavi renkli bir ISO 10243 kalıp yayı seçtin. Otomasyon fikstüründe bu yay her dakikada 30 kez 35 mm sıkışıyor. Bu tasarım hakkında ne söylersin?</summary>
<div>Mavi yay için izin verilen maksimum çökme %37,5 (37,5 mm) olsa da, bu sınır kırılma öncesi statik sınırdır. 3×10⁶ çevrim ömür için önerilen çalışma stroku serbest boyun <strong>%22–28'i (maksimum 25–28 mm)</strong> olmalıdır. 35 mm (%35) strokta çalışan bir yay yüksek çevrimli otomasyonda birkaç hafta içinde metal yorulmasından kırılır. Çözüm: Yay serbest boyunu L0 = 150 mm'ye çıkarmak veya yayı kırmızı sınıftan seçip stroku sınırlamaktır.</div></details>
<details><summary>4 adet özdeş çanak yayın var (Her birinin kuvveti F = 1000 N, çökme stroku s = 1,0 mm). Bu yayları 2'şerli paralel paket yapıp, bu iki paketi birbirine ters (seri) dizersen toplam sistemin kuvveti ve stroku ne olur?</summary>
<div>İkişerli paralel dizilim kuvveti ikiye katlar: <code>F = 2 × 1000 = 2000 N</code> (strok = 1,0 mm kalır). Bu iki paketi seri bağladığında kuvvet değişmez (<code>Ftop = 2000 N</code>), fakat iki paketin strokları toplanır: <code>stop = 1,0 + 1,0 = 2,0 mm</code>. Sonuç: <strong>2000 N kuvvet ve 2,0 mm toplam strok</strong> elde edilir.</div></details>
<details><summary>Kalıp yaylarının içine kılavuz pim (guide pin) veya dışına kovan koymak neden mekanik bir zorunluluktur?</summary>
<div>Kalıp yayları sıkışırken eksenel burkulmaya (buckling / bel verme) uğrar. Kılavuz pim olmazsa yay ortadan bükülerek yuva duvarlarına sürter, sürtünmeyle aşınır ve kuvvet eğrisi bozulur. Kılavuz pim çapı yayın iç çapından ~1 mm küçük olmalı; yay pime takılmadan doğrusal rehberlenmelidir.</div></details>
</div>
`);

KITAP.bolum('m4', '4-18', `
<p class="giris">Makine güvenliğinin temel kuralı şudur: "Yazılıma güvenilmez, mekanik emniyet daima son savunma hattıdır." PLC çökebilir, enkoder kablosu kopabilir veya operatör acil stop butonuna bastığında dikey eksen yerçekimiyle aşağı çakılabilir. Bu ölümcül senaryoları engelleyen elemanlar <strong>Frenler, Kavramalar ve Mekanik Tork Limitörleridir</strong>.</p>

<h2>Mekanik Tork Limitörleri (Emniyet Kavramaları)</h2>
<p>Sisteme bir parça sıkıştığında servonun tork alarmı verip gücü kesmesi 100–300 ms sürer. Bu sürede milimetrik bir vidalı mil veya redüktör çoktan parçalanır. Tork limitörü mekanik olarak <strong>1–3 milisaniye içinde</strong> hattı ayırır.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Tork Limitörü Tipi</th>
    <th>Çalışma Mekanizması</th>
    <th>Hassasiyet</th>
    <th>Ayrılma Anında Ne Olur?</th>
    <th>Tekrar Kurulma</th>
    <th>Uygulama Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sürtünmeli Balatalı (Friction Clutch)</strong></td>
    <td>Yay baskılı sürtünme diskleri</td>
    <td>Düşük (±%20 tork dalgalanması)</td>
    <td>Aşırı torkta kaymaya başlar. Isınır!</td>
    <td>Tork düşünce kendisi devam eder</td>
    <td>Ağır bant konveyörleri, mikserler, tarım şaftları.</td>
  </tr>
  <tr>
    <td><strong>Bilyalı Emniyet Kavraması (Ball Detent)</strong></td>
    <td>Çanak yay baskısıyla yuvasında duran bilyalar</td>
    <td><strong>Çok Yüksek (±%5 hassas)</strong></td>
    <td><strong>Bilyalar yuvadan fırlar ve sıfır sürtünmeyle tamamen boşa çıkar!</strong> Üzerindeki halka yana kayarak mekanik bir şalteri (limit switch) tetikler ve PLC'yi durdurur.</td>
    <td>Tekrar dönerek yuvasına oturur (Senkron tek konumlu modeller 360° sonra aynı fazda kilitlenir).</td>
    <td><strong>Hassas montaj otomasyonu, kartezyen robotlar, paketleme makineleri, indeksleme tablaları.</strong></td>
  </tr>
  <tr>
    <td><strong>Pimli Emniyet Kavraması (Shear Pin)</strong></td>
    <td>Mekanik kalibreli kesme pimi</td>
    <td>Orta</td>
    <td>Pim ortadan ikiye kesilir; hat tamamen ayrılır.</td>
    <td>Pim fiziksel olarak değiştirilmelidir!</td>
    <td>Kırıcılar, helezon boşaltıcılar, tünel açma makineleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Emniyet Frenleri (Fail-Safe Brakes) ve Dikey Z Ekseni Güvenliği</h2>
<div class="kutu tehlike"><span class="kb">Dikey Eksenlerde Yerçekimi Tuzağı</span>
Dikey çalışan bir Z ekseninde (örneğin bir robot kafa veya ağır bir kaynak pensesi), makinenin ana şalteri kapatıldığında veya acil stopa basıldığında motorun enerjisi kesilir. Eğer hatta bir mekanik fren yoksa, kafa yerçekimi ivmesiyle hızla aşağı düşer ve altındaki fikstürü, parçayı veya daha kötüsü operatörün elini ezer!</div>

<p><strong>Emniyet Freni Türleri:</strong></p>
<ul>
  <li><strong>Yay Baskılı Elektromanyetik Fren (Spring-Applied Brake - Fail-Safe):</strong>
    <ul>
      <li>Çalışma Mantığı: <strong>Enerji Yokken FREN TUTAR!</strong> Frenin içinde güçlü çelik yaylar balatayı sürekli sıkar. Bobine 24V DC enerji verildiğinde manyetik alan yayları geri çeker ve şaft serbest döner. Elektrik kesildiği an mikrosaniyede yaylar balatayı kilitler.</li>
      <li>Servo motorların arkasındaki entegre frenler bu tiptir.</li>
    </ul>
  </li>
  <li><strong>Lineer Ray Fren Pabuçları (Clamping Elements - Zimmer / Mayr):</strong>
    <ul>
      <li>Doğrudan lineer profil rayın gövdesini sıkar.</li>
      <li><strong>Muazzam Avantajı:</strong> Vidalı mil kopsa, triger kayış yırtılsa veya kaplin patlasa bile yük düşmez; çünkü fren doğrudan yükün bağlı olduğu rayın üzerindedir! Emniyet kategorisi PL d / PL e gerektiren sistemlerde zorunludur. Pnömatik yaylı (hava kesilince kilitlenen) modelleri yaygındır.</li>
    </ul>
  </li>
</ul>

<h2>Tek Yönlü Kavramalar (Freewheel / Backstop)</h2>
<p>Milin tek bir yönde dönmesine izin verirken, ters yönde bilyaların veya kamların (sprag) konik yuvalara sıkışmasıyla mili kilitleyen elemanlardır.</p>
<ul>
  <li><strong>Eğimli Konveyörler (Backstop):</strong> Yukarı doğru malzeme taşıyan bir konveyörün motoru durduğunda, banttaki yükün ağırlığıyla sistemin geriye doğru kontrolsüz kayıp makinayı patlatmasını engeller.</li>
  <li><strong>İndeksleme Mekanizmaları:</strong> Pnömatik bir silindirin ileri-geri hareketiyle bir mili her strokta 45° veya 90° adım adım döndürmek için kullanılır.</li>
</ul>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Fail-Safe Fren</strong></td>
    <td>Enerji kesintisi, acil duruş veya hat kopması durumunda harici kontrole gerek kalmadan dahili yay kuvvetiyle milisaniyeler içinde kilitlenen emniyet frenidir.</td>
  </tr>
  <tr>
    <td><strong>Bilyalı Tork Limitörü (Ball-Detent)</strong></td>
    <td>Ön gerilmeli yaylarla yuvalarında tutulan bilyaların kritik sınır tork aşıldığında dışarı fırlamasıyla aktarma hattını 1-3 ms içinde ayıran hassas mekanik sigortadır.</td>
  </tr>
  <tr>
    <td><strong>Ray Fren Pabucu (Clamping Element)</strong></td>
    <td>Mekanik aktarma organlarından (kayış, mil) bağımsız olarak doğrudan lineer profil ray gövdesini sıkan, yükün yerçekimiyle düşmesini %100 önleyen PL d/e onaylı emniyet elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>Safe Torque Off (STO)</strong></td>
    <td>Sürücünün motora güç üreten PWM darbelerini donanımsal olarak keserek motorun kontrolsüz tork üretmesini engelleyen temel fonksiyonel güvenlik girişidir.</td>
  </tr>
  <tr>
    <td><strong>Tek Yönlü Kavrama (Backstop / Sprag)</strong></td>
    <td>Özel kam profilleri sayesinde bir yönde sürtünmesiz serbest dönmeye izin verirken, ters yönde anında mekanik kenetlenme sağlayan geri kaçırma önleme elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>ISO 13849-1 (PL Seviyeleri)</strong></td>
    <td>Makinelerin emniyetle ilgili kontrol sistemlerinin risk seviyelerini ve güvenilirlik performansını (Performans Seviyesi: PL a'dan PL e'ye kadar) sınıflandıran uluslararası standarttır.</td>
  </tr>
  <tr>
    <td><strong>Mekanik Tepki Süresi [ms]</strong></td>
    <td>Bir sıkışma veya aşırı yük oluştuğu an ile mekanizmanın fiziksel olarak ayrıldığı an arasında geçen süredir; elektronik sistemlerden ~100 kat daha hızlıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Sıkışmalarda servonun elektriksel tork alarmı vermesi gecikir; mekanik hasarı önlemek için <strong>bilyalı mekanik tork limitörleri (1–3 ms)</strong> şarttır.</li>
  <li>Bilyalı emniyet kavraması aşırı torkta bilyaları yuvadan fırlatarak hattı tamamen ayırır ve limit switch üzerinden PLC'ye anında acil duruş sinyali gönderir.</li>
  <li>Dikey (Z) eksenlerde yerçekimi düşmesini önlemek için daima <strong>Fail-Safe (enerji kesilince tutan yay baskılı) fren</strong> kullanılmalıdır.</li>
  <li>En üst düzey güvenlik (PL d / PL e) için mekanik aktarma kopmalarına karşı doğrudan profil rayı kilitleyen <strong>lineer ray emniyet fren pabuçları (Zimmer/Mayr)</strong> tercih edilir.</li>
  <li>Eğimli konveyörlerde motor durduğunda yükün geri kaçmasını engellemek için <strong>tek yönlü kavrama (backstop / sprag freewheel)</strong> kullanılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Dikey Z ekseninde servo motora entegre yay baskılı fren taktın. Bu sistem operatörün kafanın altına girdiği bir bakım istasyonunda tek başına yeterli güvenlik (PL e) sağlar mı?</summary>
<div>Hayır, sağlamaz. Motor arkasındaki fren sadece motor milini kilitler. Motor ile dikey araba arasındaki kaplin yırtılırsa, triger kayış koparsa veya vidalı mil somunu dağılırsa motor kilitli kalsa bile araba yerçekimiyle serbest düşer! İnsan güvenliği (ISO 13849 PL d/e) gereken yerlerde doğrudan yükün bağlı olduğu lineer rayı sıkan <strong>pnömatik yay baskılı bağımsız ray fren pabucu (clamping element)</strong> veya mekanik emniyet kilitleme pimi zorunludur.</div></details>
<details><summary>Neden hassas servo montaj makinelerinde sürtünmeli balatalı tork limitörü yerine bilyalı (ball-detent) emniyet kavraması seçilir?</summary>
<div>Sürtünmeli kavramalar aşırı torkta kaymaya başlar ama torku sıfırlamaz; sürtünmeye devam ederek yüksek ısı üretir ve tork ayarı sürtünme katsayısına (toz, yağ, sıcaklık) göre ±%20 sapma gösterir. Bilyalı emniyet kavraması ise tork aşıldığı an bilyalar yuvadan dışarı atlayarak aktarmayı <strong>%100 serbest bırakır (tork sıfırlanır)</strong>, ±%5 hassasiyetle çalışır ve üzerindeki kayıcı bilezikle mikro şaltere basarak PLC'yi milisaniyede uyarır.</div></details>
<details><summary>Bir vidalı milli eksende motor 3000 d/dak hızla giderken mekanik tork limitörü atarsa motor kontrolsüzce aşırı devire kalkabilir mi?</summary>
<div>Evet! Normalde motor yüke karşı tork basar. Tork limitörü yükü 2 milisaniyede hattan ayırdığında, motorun önündeki karşı direnç sıfıra iner. Servo sürücü tork kontrol modundaysa veya hız kontrolünde integral kazancı yüksekse motor anında hız sınırına (overspeed alarmına) fırlar. Bu yüzden tork limitörünün üzerine takılan acil durdurma limit switch'i doğrudan donanımsal olarak sürücünün <strong>Safe Torque Off (STO)</strong> girişine bağlanmalıdır.</div></details>
</div>

<div class="ozet-kutu" style="border-left-color: #2563eb; background: rgba(37,99,235,0.06);">
<h3>Modül 4 Büyük Mühendislik Kapanış Özeti</h3>
<ul>
  <li>Cıvatayı sıkmak sanattır; torku sürtünme katsayısı yönetir. Kritik yerde <strong>Nord-Lock</strong> veya <strong>Loctite 243</strong> kullan.</li>
  <li>Yataklamada ısıl genleşmeyi unutma: <strong>Bir ucu Sabit Yatak, diğer ucu Serbest Yatak yap!</strong></li>
  <li>Dinamik servolarda kamayı unut: <strong>Konik sıkma bileziği (Bikon)</strong> ve <strong>Metal Körüklü Kaplin</strong> kullan.</li>
  <li>Redüktörde sadece tork değil; <strong>Backlash (arcmin)</strong> ve <strong>Atalet Oranı (J<sub>yük</sub> / J<sub>motor</sub>)</strong> kontrolü yap.</li>
  <li>Dikey eksenlerde yerçekimine güvenme: <strong>Fail-safe yay baskılı fren</strong> şarttır.</li>
</ul></div>
`);
