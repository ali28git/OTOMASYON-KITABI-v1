// MODÜL 8 — Şase ve Konstrüksiyon (Bölüm 8.1 – 8.3: Sigma Profiller, Kaynaklı Şaseler, Rijitlik ve Titreşim)
// Bilimsel, Mekanik ve İmalat Odaklı Derinlemesine Mühendislik Kılavuzu

KITAP.bolum('m8', '8-1', `
<p class="giris">Alüminyum ekstrüzyon (sigma / T-kanallı) profil sistemleri; modern otomasyon hatlarında hücre muhafazaları, operatör istasyonları, hafif kartezyen taşıyıcılar ve fikstür çerçevelerinin hızla inşa edilmesini sağlayan modüler yapı elemanlarıdır. Kaynak, gerilim giderme tavı ve kumlama/boya süreçlerine ihtiyaç duymadan doğrudan cıvatalı montaj imkânı sunar. Ancak malzemenin elastisite modülü (E), dinamik yüklerdeki birleşim mikro-kaymaları ve ısıl genleşme uyumsuzlukları derinlemesine analiz edilmezse; yüksek ivmeli eksenlerin altında rezonansa giren ve zamanla bağlantıları gevşeyen rijitlikten yoksun bir konstrüksiyon ortaya çıkar. Bu bölümde sigma profil sistemlerinin elastomekanik davranışını, bağlantı kinematiğini ve bimetal etkisini inceliyoruz.</p>

<h2>Malzeme Metalurjisi ve Ekstrüzyon Karakteristiği (EN AW-6063 T66)</h2>
<p>Endüstriyel profil sistemlerinin ezici çoğunluğu <strong>AlMg0.7Si (EN AW-6063)</strong> alüminyum alaşımından sıcak ekstrüzyon yöntemiyle üretilir. Alaşımın kimyasal kompozisyonunda magnezyum (Mg) ve silisyum (Si), çökelme sertleşmesi mekanizmasıyla Mg<sub>2</sub>Si intermetalik fazlarını oluşturur. <strong>T66 ısıl işlem durumu</strong>; ekstrüzyon presinden çıkan profilin kontrollü hızla soğutulmasının (pres su verme) ardından yapay yaşlandırma (fırında yaklaşık 175–185 °C'de bekletme) ile en yüksek akma ve çekme mukavemeti seviyesine ulaştırıldığını gösterir.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Parametresi</th>
    <th>Sembol / Standart</th>
    <th>Değer (EN AW-6063 T66)</th>
    <th>Yapı Çeliği (S235JR) ile Kıyas</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Elastisite Modülü (Young Modulus)</strong></td>
    <td>E</td>
    <td><strong>70.000 MPa (70 GPa)</strong></td>
    <td>210.000 MPa (Çelik <strong>3 kat daha rijittir</strong>)</td>
  </tr>
  <tr>
    <td><strong>Kayma Modülü (Shear Modulus)</strong></td>
    <td>G</td>
    <td><strong>27.000 MPa (27 GPa)</strong></td>
    <td>81.000 MPa (Çelik burulmaya 3 kat dayanıklıdır)</td>
  </tr>
  <tr>
    <td><strong>Yoğunluk (Kütlesel Özkütle)</strong></td>
    <td>ρ</td>
    <td><strong>2,70 g/cm³</strong></td>
    <td>7,85 g/cm³ (Alüminyum <strong>~%65 daha hafiftir</strong>)</td>
  </tr>
  <tr>
    <td><strong>Akma Mukavemeti (%0.2 Akma)</strong></td>
    <td>R<sub>p0.2</sub></td>
    <td><strong>≥ 200 MPa</strong></td>
    <td>≥ 235 MPa (Mukavemet olarak çeliğe oldukça yakındır)</td>
  </tr>
  <tr>
    <td><strong>Çekme Mukavemeti</strong></td>
    <td>R<sub>m</sub></td>
    <td><strong>≥ 245 MPa</strong></td>
    <td>360 – 510 MPa</td>
  </tr>
  <tr>
    <td><strong>Lineer Isıl Genleşme Katsayısı</strong></td>
    <td>α (20–100 °C)</td>
    <td><strong>23,4 × 10⁻⁶ K⁻¹</strong></td>
    <td>12,0 × 10⁻⁶ K⁻¹ (Alüminyum <strong>2 kat fazla genleşir!</strong>)</td>
  </tr>
  <tr>
    <td><strong>Yüzey Koruma / Sertlik</strong></td>
    <td>Eloksal (Anodizing)</td>
    <td><strong>10 – 15 µm E6/EV1 Eloksal</strong> (Yüzey ~400–500 HV)</td>
    <td>Boya / Fosfatlama gerektirir</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu not"><span class="kb">E6/EV1 Yüzey İşlemi Ne Anlama Gelir?</span>
Profillerde standart olan <strong>E6/EV1</strong> ibaresi bir DIN standardıdır: <code>E6</code> kimyasal dağlama (kimyasal matlaştırma) yapılarak ekstrüzyon çizgilerinin yok edildiğini; <code>EV1</code> ise renksiz (doğal gümüş) anodik oksidasyon (eloksal) yapıldığını belirtir. 12–15 µm kalınlığındaki Al<sub>2</sub>O<sub>3</sub> (korindon) seramik tabakası atmosferik korozyonu tamamen engeller, elektriksel yalıtım sağlar ve yüzeyi çizilmelere karşı sertleştirir.</div>

<h2>Modüler Profil Geometrileri ve Kanal (Slot) Standartları</h2>
<p>Endüstride pazar liderlerinin (Bosch Rexroth, item Industrietechnik, MayTec, MiniTec vb.) belirlediği 3 ana kanal genişliği standardı bulunur. Profil dış ölçüsü aynı olsa bile kanal geometrisi üreticiler arasında farklılık gösterir:</p>
<ul>
  <li><strong>Kanal 6 (Slot 6 - 20 mm Serisi):</strong> 20x20, 20x40 profiller. M4 ve M5 cıvatalarla kullanılır. Hafif sensör braketleri, koruma kapıları, pleksiglas çerçeveleri için.</li>
  <li><strong>Kanal 8 (Slot 8 - 30 mm ve 40 mm Serisi):</strong> 30x30, 40x40 (item tipi) profiller. M6 cıvatalarla kullanılır. Laboratuvar masaları, hafif konveyörler, otomasyon kabinleri.</li>
  <li><strong>Kanal 10 (Slot 10 - 40, 45, 50, 60 mm Serisi):</strong> 40x40 (Bosch tipi), 45x45, 90x90 profiller. M8 cıvatalarla kullanılır. Ağır makine şaseleri, robot hücreleri, kartezyen modül taşıyıcıları. Ağır hizmet sınıfıdır.</li>
</ul>

<div class="kutu uyari"><span class="kb">Kanal Açısı ve Ön Gerilmeli Yaylanma Prensibi</span>
Kaliteli profil üreticilerinde (ör. Bosch Rexroth veya item) profil kanalının dış dudakları tam düz değildir; içe doğru yaklaşık <strong>1° – 2° açılı bir eğim (taper)</strong> ile çekilmiştir. T-cıvatası veya somunu torklandığında kanal dudakları elastik olarak dışa doğru esner. Bu elastik ön gerilme (spring effect), titreşimli ortamlarda cıvatanın mikro gevşemesini engelleyen mekanik bir kilit görevi görür. Ucuz profillerde bu açı bulunmaz; kanallar paraleldir ve cıvatalar titreşim altında birkaç günde gevşer!</div>

<h2>Bağlantı Elemanlarının Mekanik Performans Analizi</h2>
<p>Bir profil konstrüksiyonunun rijitliğini profilin kendi kesitinden ziyade <strong>bağlantı noktalarının moment aktarma kapasitesi</strong> belirler. Birleşim tiplerinin mühendislik değerlendirmesi:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Bağlantı Yöntemi</th>
    <th>Mekanik Bağlantı Türü</th>
    <th>Eğilme Momenti Direnci</th>
    <th>Kayma Direnci (Eksenel Kuvvet)</th>
    <th>Montaj İşçiliği & Maliyet</th>
    <th>Titreşim Dayanımı ve Notlar</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Döküm Köşebent (Die-Cast Bracket)</strong></td>
    <td>Kanal yüzeyine sürtünmeli temas (2x T-somun)</td>
    <td>Düşük (Köşebent kanatları esner)</td>
    <td>Düşük (Sürtünme katsayısına bağlı: ~1500–2500 N)</td>
    <td>En Hızlı / İşleme Yok (1.0×)</td>
    <td>Dinamik torklarda kayar; sadece statik çitler ve destekler için uygundur.</td>
  </tr>
  <tr>
    <td><strong>Uç Bağlantı (Merkez Vida + Delik)</strong></td>
    <td>Profil merkez deliğine kılavuz çekilir (M8/M12), karşı profil delinir.</td>
    <td><strong>Yüksek (Eksenel ön gerilmeli cıvata)</strong></td>
    <td><strong>Yüksek (Çekme kuvveti cıvataya biner: ~6000–9000 N)</strong></td>
    <td>Orta (Delik delme + diş açma gerekir)</td>
    <td><strong>Ana karkas standardı.</strong> Profil uç yüzeyi karşı profile sıfırlanır, burulmaya karşı yüksek rijitlik verir.</td>
  </tr>
  <tr>
    <td><strong>İç Bağlantı (Gizli / Pabuç Bağlantı)</strong></td>
    <td>Kanal içine giren eksantrik kovan ve T-başlı çekici pim</td>
    <td>Orta</td>
    <td>Orta (~3000–4500 N)</td>
    <td>Orta (Dıştan görünmez, estetik)</td>
    <td>Profil kanallarını açık bırakır; temiz oda ve estetik kabinlerde kullanılır.</td>
  </tr>
  <tr>
    <td><strong>Dış Düğüm Plakası (Gusset Plate)</strong></td>
    <td>4–6 mm kalınlığında çelik veya Al plaka, 6–12 adet T-somunla dıştan vidalanır</td>
    <td><strong>ÇOK YÜKSEK (Geniş basma alanı)</strong></td>
    <td><strong>ÇOK YÜKSEK (&gt; 15.000 N)</strong></td>
    <td>Kolay ama malzeme maliyeti yüksek</td>
    <td>Portal ayak-kiriş birleşimlerinde ve yüksek moment alan köşelerde zorunludur.</td>
  </tr>
  <tr>
    <td><strong>Diyagonal Çapraz Takviye (Triangulation)</strong></td>
    <td>45° açılı profil ile üçgen kafes oluşturma</td>
    <td><strong>EN YÜKSEK (Eğilmeyi çekme-basmaya çevirir)</strong></td>
    <td><strong>Sonsuz Rijit (Kafes Kiriş Prensibi)</strong></td>
    <td>Orta (Açılı kesim gerekir)</td>
    <td><strong>Çerçeve düzlemindeki rijitliği 20 ila 50 kat artırır!</strong></td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu tehlike"><span class="kb">Sürtünmeye Güvenerek Moment Taşınamaz!</span>
Birçok tasarımcı köşebentleri sıkarak yüksek devrilme momentlerini taşıyabileceğini zanneder. Alüminyum eloksal tabakası ile çinko kaplı çelik T-somun arasındaki statik sürtünme katsayısı μ ≈ 0,15 mertebesindedir. Dinamik bir servo eksen ileri-geri frenleme yaptığında darbe kuvveti sürtünme sınırını aşar; birleşim mikron mertebesinde kayar (slip) ve cıvatanın ön gerilmesi çöker. Moment taşıyan tüm birleşimlerde ya <strong>uç bağlantı</strong> ya da <strong>üçgenleme plakaları</strong> kullanılmalıdır.</div>

<h2>Elastomekanik Sehim Analizi: Alüminyum vs. Çelik Kutu Profil</h2>
<p>Kiriş eğilme teorisine göre (Euler-Bernoulli), açıklığı L olan ve ortasından F tekil yüküyle zorlanan basit mesnetli bir kirişin maksimum sehimi:</p>
<div class="formul">
f<sub>maks</sub> = ( F · L³ ) / ( 48 · E · I ) &nbsp;&nbsp;[mm]
<small>F: Uygulanan düşey yük [N], L: Mesnetler arası açıklık [mm], E: Malzemenin elastisite modülü [N/mm²], I: Kesit atalet momenti [mm⁴]</small>
</div>
<p><strong>Neden Alüminyum Çelikten 3 Kat Fazla Esner?</strong><br>
Çeliğin E modülü (210.000 MPa), alüminyumun (70.000 MPa) tam 3 katıdır. Eğer dış boyutları ve et kalınlıkları aynı olan bir alüminyum profil ile çelik kutu profil kıyaslanırsa (I<sub>al</sub> ≈ I<sub>çelik</sub>), alüminyum kiriş <strong>tam 3 kat daha fazla sehim yapar</strong>.</p>
<p>Alüminyum ile çeliğin rijitliğini yakalamanın yolu <strong>kesit atalet momentini (I) 3 katına çıkarmaktır</strong>. Atalet momenti kesit yüksekliğinin küpüyle (h³) büyüdüğünden, 40×40 profil yerine 40×80 veya 80×80 profile geçmek atalet momentini 4 ila 8 kat artırarak sehim farkını fazlasıyla kapatır.</p>

<h2>Bimetal Termal Uyumsuzluk Problemi (Alüminyum Profil Üzerine Çelik Ray)</h2>
<p>Otomasyon makinelerinde en sık yapılan hatalardan biri, uzun bir alüminyum sigma profilin üzerine çelik profil rayı (Hiwin, THK) boydan boya rijit cıvatalamaktır:</p>
<ul>
  <li>Alüminyumun genleşme katsayısı: <strong>α<sub>Al</sub> = 23,4 × 10⁻⁶ K⁻¹</strong></li>
  <li>Rulman çeliğinin genleşme katsayısı: <strong>α<sub>Çelik</sub> = 11,8 × 10⁻⁶ K⁻¹</strong></li>
  <li>Termal Genleşme Farkı: <strong>Δα = 11,6 × 10⁻⁶ K⁻¹</strong></li>
</ul>
<div class="formul">
ΔL = L · ( α<sub>Al</sub> - α<sub>Çelik</sub> ) · ΔT &nbsp;&nbsp;[mm]
</div>
<p><em>Sayısal Örnek:</em> Fabrika ortamında kış ile yaz arasında ΔT = 25 °C sıcaklık farkı oluşsun. L = 3000 mm (3 metre) boyundaki bir eksende:</p>
<div class="formul">
ΔL = 3000 × ( 11,6 × 10⁻⁶ ) × 25 ≈ 0,87 mm
</div>
<p>Alüminyum profil çelik raydan <strong>yaklaşık 0,9 mm daha fazla uzamaya</strong> çalışır! İki eleman birbirine her 60 mm'de bir M6 cıvatalarla sıkıca kilitlendiği için sistem bir <strong>bimetal termometre gibi yukarı/aşağı doğru yay gibi bükülür</strong>. Rayın içindeki bilyalar aşırı ön yüke girer, servo motor sürtünmeden dolayı aşırı akım alarmı verir. <strong>Çözüm:</strong> 2 metreden uzun eksenlerde çelik rayı doğrudan alüminyuma bağlamak yerine araya çelik taşıyıcı lama koymak ya da rayı tek bir sabit referans ucundan kilitleyip diğer bağlantılarda termal kaymaya izin veren geçmeler bırakmaktır.</p>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead><tr><th>Terim / Sembol</th><th>Bilimsel & Mühendislik Tanımı</th></tr></thead>
<tbody>
  <tr>
    <td><strong>EN AW-6063 T66</strong></td>
    <td>Alüminyum-Magnezyum-Silisyum alaşımı. T66, ekstrüzyon hattından sonra kontrollü hızlı soğutma ve yapay fırın yaşlandırması ile çekme mukavemeti maksimize edilmiş ısıl işlem durumudur.</td>
  </tr>
  <tr>
    <td><strong>Elastisite Modülü (E)</strong></td>
    <td>Malzemenin elastik deformasyon bölgesindeki gerilme/birim şekil değiştirme oranıdır (E = σ / ε). Malzemenin biçim değiştirme direncidir; rijitliğin temel malzeme katsayısıdır.</td>
  </tr>
  <tr>
    <td><strong>Kesit Atalet Momenti (I)</strong></td>
    <td>Bir kesitin tarafsız eksenine göre alan dağılımının ikinci momentidir (I = ∫ y² dA). Kesitin eğilmeye karşı geometrik direncini gösterir; birimi mm⁴ veya cm⁴'tür.</td>
  </tr>
  <tr>
    <td><strong>E6 / EV1 Eloksal</strong></td>
    <td>DIN 17611 standardına göre alüminyumun yüzeyine anodik oksidasyonla uygulanan 10–15 µm kalınlığındaki seramik (Al<sub>2</sub>O<sub>3</sub>) kaplama. E6 kimyasal matlaştırmayı, EV1 renksiz doğal gümüş rengini belirtir.</td>
  </tr>
  <tr>
    <td><strong>Düğüm Plakası (Gusset Plate)</strong></td>
    <td>İki veya daha fazla profilin birleşim noktasına dıştan cıvatalanarak köşedeki açısal bozulmayı ve eğilme momentini karşılayan rijit çelik/alüminyum takviye sacı.</td>
  </tr>
  <tr>
    <td><strong>Bimetal Etkisi</strong></td>
    <td>Isıl genleşme katsayıları farklı iki metalin birbirine rijit bağlanması durumunda, sıcaklık değişimiyle yapının bükülerek eğrilmesi olayıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Sigma profiller <strong>EN AW-6063 T66</strong> alaşımından üretilir; korozyon ve çizilmeye karşı <strong>E6/EV1 eloksal</strong> ile kaplanır.</li>
  <li>Alüminyumun elastisite modülü (E = 70.000 MPa) çeliğin üçte biridir; aynı rijitliği sağlamak için kesit atalet momenti (I) 3 kat büyük seçilmelidir.</li>
  <li>Köşebent bağlantılar sadece sürtünmeyle tutar ve dinamik moment taşıyamaz; ana karkasta <strong>uç bağlantı</strong> ve <strong>düğüm plakaları</strong> kullanılmalıdır.</li>
  <li>Çerçeve düzlemindeki yanal rijitliği sağlamanın en ucuz ve en etkili yolu <strong>üçgenleme (diyagonal profil)</strong> yapmaktır.</li>
  <li>Uzun eksenlerde alüminyum ile çelik arasındaki ısıl genleşme farkı (bimetal bükülmesi) hesaba katılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>2 metre yüksekliğinde, 1 metre genişliğinde sigma profilden yapılmış bir portal çerçevenin üst kirişinde 3 m/s² ivmeyle hareket eden bir servo eksen var. Çerçeve sadece köşe döküm köşebentlerle bağlı. Eksen her yön değiştirdiğinde çerçeve neden paralelkenar gibi yanal salınım yapar?</summary>
<div>Döküm köşebentler sadece 90° açılı küçük döküm parçalardır ve kanala T-somunların yüzey sürtünmesiyle tutunur. Çerçevenin yanal rijitliği (shear stiffness) çok düşüktür; üstteki dinamik F = m · a eylemsizlik kuvveti birleşim yerlerinde dönme momenti (M) yaratır. Sürtünme sınırı aşıldığı için köşeler elastik olarak açılıp kapanır ve çerçeve paralelkenarlaşır. Çözüm: Çerçevenin arkasına <strong>çapraz diyagonal profil</strong> koymak veya köşelere geniş <strong>düğüm plakaları (gusset)</strong> cıvatalayarak üçgen kafes yapısı oluşturmaktır.</div></details>
<details><summary>40x40 alüminyum profil kiriş ortasından gelen yük altında 1.2 mm sehim yapıyor. Dış ölçüyü değiştirmeden malzemeyi 7075-T6 havacılık alüminyumuna çevirirsek sehim kaça düşer?</summary>
<div>Sehim kesinlikle DEĞİŞMEZ, yine 1.2 mm kalır! Çünkü sehim formülü f = (F·L³) / (48·E·I) incelendiğinde akma mukavemeti (R<sub>p</sub>) veya çekme mukavemeti (R<sub>m</sub>) yer almaz; yalnızca elastisite modülü (E) yer alır. 6063 alüminyumun da 7075 alüminyumun da elastisite modülü yaklaşık 70.000 MPa'dır. Mukavemetin 3 kat artması taşıma kapasitesini artırır ama esneme miktarını bir mikron bile düşürmez. Sehimi düşürmek için kesit boyutu büyütülmelidir (örneğin 40x80'e geçilmelidir).</div></details>
<details><summary>Alüminyum profile T-somun sıkarken aşırı tork uygularsan ne olur? Çelik cıvata mı kopar, alüminyum kanal mı zarar görür?</summary>
<div>Alüminyumun akma sınırı çelik cıvatadan çok daha düşüktür. T-somun aşırı sıkıldığında somunun dar basma yüzeyi profil kanalının iç dudaklarına yerel olarak plastik deformasyonla gömülür ve kanal ağzını dışa doğru yırtarak açar (groove yield). Kanal deforme olduktan sonra o bölge bir daha asla sıkılamaz ve somun kanaldan fırlar. Katalogda belirtilen sıkma torklarına (örneğin M8 için 25 Nm) kesinlikle uyulmalıdır.</div></details>
</div>
`);

KITAP.bolum('m8', '8-2', `
<p class="giris">Endüstriyel robot kaideleri, ağır kartezyen gantry eksenleri, pres besleme sistemleri ve talaşlı imalat fikstürleri söz konusu olduğunda; alüminyum profillerin modülerliği yerini kaynaklı çelik konstrüksiyonların devasa rijitliğine, yüksek kütlesine ve burulma direncine bırakır. Ancak çelik şase üretimi "profilleri rastgele kaynatıp boyamak" demek değildir. Kaynak termomekaniği, artık gerilmeler (residual stress), gerilim giderme tavı ve tek bağlamada işleme metodolojisi doğru kurgulanmazsa; şase kaynak çekmesiyle çarpılır, montaj yüzeyleri birbirini karşılamaz ve üzerine takılan lineer raylar birkaç ayda kilitlenir. Bu bölümde kaynaklı şase üretiminin eksiksiz mühendislik adımlarını inceliyoruz.</p>

<h2>Malzeme ve Profil Kesit Mekaniği: Açık vs. Kapalı Kesitler</h2>
<p>Kaynaklı otomasyon şaselerinde kullanılan temel çelik sınıfları ve yapısal formlar:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kesit ve Standart</th>
    <th>Malzeme Normu</th>
    <th>Eğilme Direnci</th>
    <th>Burulma Sabiti (J<sub>t</sub>) ve Direnci</th>
    <th>Mühendislik Değerlendirmesi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Soğuk Şekillendirilmiş Kutu Profil (SHS/RHS)</strong><br><small>EN 10219</small></td>
    <td>S235JRH<br>S355J2H</td>
    <td>Yüksek</td>
    <td><strong>ÇOK YÜKSEK (Kapalı tüp geometrisi)</strong></td>
    <td><strong>Otomasyon şaselerinin %85 standardıdır.</strong> Köşeleri hafif radyusludur, iç gerilmesi sıcak profile göre biraz daha yüksektir ancak tedariği hızlı ve ekonomiktir.</td>
  </tr>
  <tr>
    <td><strong>Sıcak Bitirilmiş Kutu Profil</strong><br><small>EN 10210</small></td>
    <td>S355J2H</td>
    <td>Çok Yüksek</td>
    <td><strong>ÇOK YÜKSEK</strong></td>
    <td>Sıcak haddelendiği için köşeleri keskindir, et kalınlığı homojendir ve imalat artık gerilmeleri düşüktür. Ağır takım tezgahı kolonlarında tercih edilir.</td>
  </tr>
  <tr>
    <td><strong>Açık Kesitler (HEA, IPE, NPU)</strong><br><small>EN 10365</small></td>
    <td>S235JR<br>S355J2</td>
    <td>Tek eksende aşırı yüksek</td>
    <td><strong>AŞIRI DÜŞÜK (Burulmaya karşı sıfır direnç!)</strong></td>
    <td>İnşaat kirişlerinde mükemmeldir ancak <strong>otomasyon şaselerinde tek başına KULLANILAMAZ</strong>. Eksantrik bir yük bindiğinde kolayca burulur (torsional buckling).</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu not"><span class="kb">Bredt Formülü ve Kutu Kesitin Burulma Üstünlüğü</span>
İnce cidarlı kapalı bir kutu kesitin burulma direnci (St. Venant burulma atalet momenti J<sub>t</sub>), 1. Bredt formülü ile hesaplanır:
<div class="formul">
J<sub>t</sub> = ( 4 · A<sub>m</sub>² ) / ∮ ( ds / t )
<small>Am: Profil et kalınlığının orta çizgisi tarafından çevrelenen alan, ds: Çevre elemanı, t: Et kalınlığı</small>
</div>
Açık bir U profil (NPU 100) ile aynı ağırlık ve et kalınlığına sahip 100×100×4 kapalı kutu profil kıyaslandığında; kutu profilin burulma atalet momenti açık profilden <strong>yaklaşık 80 ila 150 kat daha büyüktür!</strong> Robot şaselerinde kutu profil kullanılmasının sebebi budur.</div>

<h2>Kaynak Çarpılma Mekanizması ve Isı Girdisi (Heat Input)</h2>
<p>Kaynak dikişi atılırken ark bölgesinde metal ergime sıcaklığına (&gt; 1500 °C) ulaşır. Sıcak metal genleşmek ister ancak etrafındaki soğuk ana kütle bu genleşmeyi sınırlar; sıcak bölgede basma plastik deformasyonu oluşur. Soğuma aşamasında ise dikiş büzülmeye çalışır ve bu kez çok yüksek çekme artık gerilmeleri (R<sub>e</sub> akma sınırına yakın: 200–350 MPa) meydana gelir. Bu çekme gerilmeleri şaseyi dikiş yönüne doğru muz gibi büker.</p>
<div class="formul">
Q = η · [ ( U · I · 60 ) / ( v · 1000 ) ] &nbsp;&nbsp;[kJ/mm]
<small>Q: Isı girdisi [kJ/mm], η: Termal verim (MAG gazaltı için ≈ 0.8), U: Kaynak gerilimi [V], I: Akım [A], v: Kaynak ilerleme hızı [mm/dak]</small>
</div>
<p>Isı girdisi ne kadar büyük olursa çarpılma o kadar kontrolsüz olur. Distorsiyonu minimuma indirmek için:
1. Aşırı kalın dikişten kaçınılmalı (a ≈ 0,7 · t<sub>min</sub> kuralı - Modül 3).
2. Simetrik kaynak yapılmalı (tarafsız eksenin bir sağına bir soluna dönüşümlü pasolar).
3. Parçalar rijit kaynak fikstüründe ön gerilmeli olarak sıkılıp kaynaklanmalıdır.</p>

<h2>Eksiksiz İmalat Akışı: "Kaynakla – Gerilim Gider – Tek Bağlamada İşle"</h2>
<ol>
  <li><strong>Lazer Kesim & Hazırlık:</strong> Kutu profiller ve montaj pedleri işleme payları verilerek CNC lazer/testere ile kesilir. Kutu profil uçları kaynak ağızlarıyla hazırlanır.</li>
  <li><strong>Puntalama & Kaynak:</strong> Parçalar kaynak pleytinde kumpas ve mastarlarla hizalanır, puntalanır ve gazaltı (MAG / 135) ile simetrik sıralamayla kaynatılır.</li>
  <li><strong>İşleme Pedleri (Machining Pads):</strong> Kutu profilin boydan boya işlenmesi profil etini inceltir ve deler. Bu yüzden lineer rayların, kremayerlerin ve ayakların oturacağı yerlere <strong>15–25 mm kalınlığında S355 lama plakalar (pedler)</strong> kaynatılır. Bu pedlerin üzerine <strong>3 ila 5 mm talaş kaldırma işleme payı</strong> bırakılır.</li>
  <li><strong>Gerilim Giderme Isıl İşlemi (Stress Relief Annealing):</strong>
    <ul>
      <li>Fırın sıcaklığı kontrollü hızla (&lt; 100 °C/saat) <strong>550 °C – 600 °C</strong>'ye çıkarılır.</li>
      <li>Her 25 mm et kalınlığı için en az 1 saat bu sıcaklıkta bekletilir (soaking). Bu sıcaklıkta çeliğin akma sınırı çöker; dislokasyonlar hareket ederek artık gerilmeleri mikro-plastik sünmeyle sıfırlar.</li>
      <li>Fırın kapağı açılmadan kontrollü yavaş soğutma (&lt; 50 °C/saat) yapılarak 200 °C'nin altına indirilir. <strong>Hızlı soğutulursa yeni artık gerilmeler oluşur!</strong></li>
    </ul>
  </li>
  <li><strong>Kumlama (Shot Blasting):</strong> Fırından çıkan şase SA 2.5 kalitesinde kumlanarak tufal ve kaynak cürufları temizlenir.</li>
  <li><strong>Tek Bağlamada CNC Portal Frezede İşleme:</strong>
    <ul>
      <li>Şase dev bir 5-eksen köprü tipi portal freze tablasına bağlanır.</li>
      <li>Tüm lineer ray dayama faturaları, kremayer oturma yüzeyleri, pim delikleri ve cıvata delikleri <strong>TEK BAĞLAMADA</strong> işlenir.</li>
      <li>Böylece X1 ve X2 eksen raylarının birbirine paralelliği, eş düzlemliliği ve yükseklik farkı <strong>0.02 mm tolerans içinde</strong> garanti edilir.</li>
    </ul>
  </li>
  <li><strong>Epoksi Astar & Boya:</strong> İşlenmiş hassas parlak yüzeyler koruyucu bantlarla maskelenir; şase endüstriyel epoksi astar ve poliüretan son kat boya ile boyanır. İşlenmiş yüzeyler korozyon önleyici yağla kaplanır.</li>
</ol>

<div class="kutu tehlike"><span class="kb">Tavlanmadan İşlenen Şasenin Acı Sonu</span>
Eğer kaynaklı bir şase gerilim giderme tavına sokulmadan doğrudan frezeye sokulursa; freze montaj pedinden 3 mm talaş kaldırdığında yüzeydeki gerilme dengesi bozulur. Şase tezgâhtan söküldüğü an yay gibi 0.3–0.8 mm atar. Daha da kötüsü, artık gerilmeler ortam sıcaklığı ve dinamik yükler altında 6 ay boyunca serbest kalmaya devam eder; makine müşterinin fabrikasındayken raylar kasıntı yapar ve kilitlenir!</div>

<h2>Şase Dinamiğini İyileştirme: Kompozit Dolgular</h2>
<p>Kaynaklı çelik profiller yüksek rijitlik sunar ancak malzeme sönümlemesi çok zayıftır (çelik çan gibi çınlar). Dinamik servo hareketlerinde şasenin çınlamasını ve rezonansını engellemek için uygulanan ileri teknikler:</p>
<ul>
  <li><strong>Kuvvars Kumu Dolgusu:</strong> Kutu profillerin içi fırınlanmış kuru silis kumu ile doldurulur ve uçları kapatılır. Kum taneciklerinin birbiriyle sürtünmesi (Coulomb sönümlemesi), şasedeki titreşim enerjisini anında ısıya dönüştürerek sönümlemeyi <strong>5 ila 10 kat artırır</strong>. Çok ucuz ve etkili bir çözümdür.</li>
  <li><strong>Polimer Beton (Mineral Döküm) Dolgu:</strong> Profil boşluklarına epoksi reçine bağlı bazalt/granit agrega karışımı dökülür. Hem şasenin kütlesini artırarak ağırlık merkezini yere çeker hem de devasa bir dinamik sönümleme sağlar.</li>
</ul>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead><tr><th>Terim / Sembol</th><th>Bilimsel & Mühendislik Tanımı</th></tr></thead>
<tbody>
  <tr>
    <td><strong>St. Venant Burulma Sabiti (J<sub>t</sub>)</strong></td>
    <td>Bir kesitin burulma momentine karşı koyma direncini belirleyen geometrik büyüklüktür: θ = (T · L) / (G · J<sub>t</sub>). Kapalı kutu kesitlerde devasa, açık kesitlerde mikroskopiktir.</td>
  </tr>
  <tr>
    <td><strong>Artık Gerilme (Residual Stress)</strong></td>
    <td>Dışarıdan herhangi bir mekanik yük uygulanmadığı halde, kaynak sırasındaki homojen olmayan ısınma-soğuma veya plastik deformasyon sebebiyle malzemenin içinde hapsolan iç gerilmelerdir.</td>
  </tr>
  <tr>
    <td><strong>Gerilim Giderme Tavı (Stress Relief)</strong></td>
    <td>Çeliğin faz dönüşüm sıcaklığının altında (550–650 °C) gerçekleştirilen, atomik difüzyon ve mikroskobik sürünme (creep) yoluyla artık gerilmeleri %80–90 oranında yok eden ısıl işlem.</td>
  </tr>
  <tr>
    <td><strong>VSR (Vibratory Stress Relief)</strong></td>
    <td>Fırına sığmayan büyük kaynaklı şaselerin rezonans frekansında mekanik vibratörle titreştirilerek gerilme tepe noktalarının mikro-plastik deformasyonla düşürülmesi işlemidir.</td>
  </tr>
  <tr>
    <td><strong>Tek Bağlamada İşleme (Single Setup Machining)</strong></td>
    <td>İş parçasının tezgâh tablasına tek bir sefer bağlanarak sökülmeden tüm kritik referans yüzeylerinin, faturalarının ve deliklerinin işlenmesi; bağlama ve eksen kaçıklığı hatalarını sıfırlar.</td>
  </tr>
  <tr>
    <td><strong>Coulomb Sönümlemesi (Granüler Sönümleme)</strong></td>
    <td>Kutu profil içine doldurulan kum tanelerinin bağıl hareketi esnasında oluşan kuru sürtünme ile titreşim kinetik enerjisinin termal enerjiye dönüştürülerek yok edilmesi mekanizması.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Ağır yük, robot ve dinamik eksen taşımada <strong>kapalı kutu profilli (EN 10219 / EN 10210) kaynaklı çelik şaseler</strong> kullanılır.</li>
  <li>Kutu profilin burulma direnci (J<sub>t</sub>), açık kesitli I/U profillerden <strong>100 kat daha fazladır</strong>.</li>
  <li>Ray montaj hatlarına mutlaka kalın çelik <strong>montaj pedleri (lama)</strong> kaynatılmalı ve <strong>3–5 mm işleme payı</strong> bırakılmalıdır.</li>
  <li>Talaşlı işlemeden önce mutlaka <strong>550–600 °C'de gerilim giderme tavı</strong> yapılmalıdır; aksi halde işlenen şase günler içinde çarpılır.</li>
  <li>Tüm ray oturma faturaları ve pim delikleri portal frezede <strong>tek bağlamada</strong> işlenmelidir.</li>
  <li>Titreşimi yutmak için kutu profillerin içi kuru <strong>kuvars kumu veya polimer betonla</strong> doldurulabilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kaynaklı bir şasede iki paralel profil rayın oturacağı yüzeyleri frezelemek için şaseyi tezgaha bağladın. Freze operatörü önce 1. ray yüzeyini işledi, sonra şaseyi söküp çevirdi ve 2. ray yüzeyini bağlayıp işledi. Kalite kontrol bu işlemi neden kabul etmez?</summary>
<div>İki ray yüzeyi tek bağlamada işlenmemiştir (Single-setup ihlali). Parça sökülüp tekrar bağlandığında operatörün pleyt bağlama hatası, mengene sıkma kuvveti farkları ve sıfırlama kaçıklıkları devreye girer. Sonuçta iki ray yüzeyi arasında 0.05–0.15 mm düzlemsellik ve paralellik kaçıklığı oluşur. Çift araba bağlandığında raylar arabaları sıkar ve eksen kasar. İki paralel ray hattı şase tezgaha tek bir kez bağlandığında, aynı eksen koordinat sisteminde işlenmelidir.</div></details>
<details><summary>Kaynaklı şasenin altına 4 adet kutu profil ayak kaynattın. Boyama öncesinde daldırma sıcak galvaniz banyosuna (450 °C ergimiş çinko) göndereceksin. Kutu profillerin köşelerine havalandırma deliği delmeyi unutursan ne olur?</summary>
<div>Ölümcül bir patlama gerçekleşir! Kutu profilin içi tamamen kapalıysa, 450 °C sıcak çinko banyosuna daldırıldığında profilin içindeki hava ve hapsolmuş nem anında yüzlerce barlık buhar basıncına ulaşır. Kutu profil bir bomba gibi patlayarak kazan dairesine tonlarca 450 derecelik sıvı çinko saçar. Sıcak daldırma galvaniz yapılacak her kapalı profilde mutlaka <strong>çapraz hava tahliye ve drenaj delikleri</strong> açılmalıdır.</div></details>
<details><summary>Bir robot kaidesi için 200x200x5 mm kutu profil kullandın. Robot 20 m/s² ivmeyle ani duruş yaptığında şasenin çan gibi 1 saniye boyunca çınladığını gözlemledin. Kutu profili kesip sökmeden bu titreşimi sahada nasıl sönümlersin?</summary>
<div>Kutu profilin üstünden bir delik açıp içine kuru, fırınlanmış <strong>silis kumu (veya kurşun saçma karışımı)</strong> doldurup tıpasını kaynaklayarak kapatırsın. Şase titreşirken içerideki kum tanecikleri birbirine çarparak sürtünme üretir (partikül/granüler sönümleme). Titreşim enerjisi 0.05 saniye içinde ısıya dönüşerek yok olur ve çınlama kesilir.</div></details>
</div>
`);

KITAP.bolum('m8', '8-3', `
<p class="giris">Mekanik otomasyon tasarımında sistemlerin hurdaya çıkmasının sebebi çoğu zaman mukavemet yetersizliği (kırılma) değil, <strong>rijitlik eksikliği ve rezonans titreşimleridir</strong>. Hızlı bir kartezyen alma-bırakma (Pick & Place) modülü hedef pozisyona ulaştığında kolun ucu 0,4 saniye boyunca 0.5 mm genlikle titreşiyorsa; servo motor hedef pozisyona yerleşemez (in-position alarmı), çevrim süresi çöker ve kamera görüntüsü bulanık çıkar. Bu bölümde statik ve dinamik rijitliğin farkını, doğal frekans modal analizini, titreşim büyütme faktörünü ve servo kazançları ile mekanik rezonansın bağını inceliyoruz.</p>

<h2>Statik Rijitlik vs. Dinamik Rijitlik</h2>
<div class="iki-sutun">
  <div>
    <h4>Statik Rijitlik (k)</h4>
    <p>Sabit (zamandan bağımsız) bir kuvvet uygulandığında yapının elastik yer değiştirmeye karşı gösterdiği dirençtir.</p>
    <div class="formul">k = F / δ &nbsp;&nbsp;[N/mm veya N/µm]</div>
    <p>Sadece yapının geometrisine (kesit atalet momenti I, alan A, açıklık L) ve malzemenin elastisite modülüne (E) bağlıdır.</p>
  </div>
  <div>
    <h4>Dinamik Rijitlik (k<sub>din</sub>)</h4>
    <p>Zamana bağlı değişken veya harmonik bir kuvvet [ F(t) = F₀ · sin(ω·t) ] altındaki esneme direncidir.</p>
    <div class="formul">k<sub>din</sub> = k<sub>statik</sub> · ( 2 · ζ ) &nbsp;&nbsp;[Rezonans anında]</div>
    <p>Rezonans frekansında dinamik rijitlik tamamen <strong>sönümleme oranına (ζ)</strong> teslim olur! Sönümleme sıfırsa dinamik rijitlik sıfıra iner, genlik sonsuza gider.</p>
  </div>
</div>

<h2>Tek Serbestlik Dereceli Titreşim Modeli ve Doğal Frekans</h2>
<p>Mekanik bir yapının en temel dinamik davranışı kütle (m), yay (k) ve sönümleyici (c) elemanlarından oluşan diferansiyel denklemle ifade edilir:</p>
<div class="formul">
m · ẍ + c · ẋ + k · x = F(t)
</div>
<p>Dış kuvvet sıfırken sistemin kendi kendine salındığı açısal doğal frekans (ω<sub>n</sub>) ve frekans (f<sub>n</sub>):</p>
<div class="formul">
ω<sub>n</sub> = √( k / m ) &nbsp;&nbsp;[rad/s] &nbsp;&nbsp;|&nbsp;&nbsp; f<sub>n</sub> = ( 1 / 2π ) · √( k / m ) &nbsp;&nbsp;[Hz]
</div>
<ul>
  <li>Doğal frekansı artırmak için iki yol vardır: <strong>Rijitliği (k) artırmak</strong> veya <strong>Titreşen kütleyi (m) azaltmak</strong>.</li>
  <li>Rijitliği 4 katına çıkarırsanız doğal frekans 2 katına çıkar. Kütleyi yarıya indirirseniz doğal frekans √2 ≈ 1,41 katına çıkar.</li>
</ul>

<h3>Statik Sehimden (δ<sub>st</sub>) Doğal Frekans Kestirimi (Pratik Saha Formülü)</h3>
<p>Bir yapının kendi ağırlığı altında (F<sub>g</sub> = m · g) yaptığı statik elastik çökme miktarını (δ<sub>st</sub>) CATIA FEA analizinden veya el hesabından biliyorsanız; yerçekimi ivmesi g = 9810 mm/s² yerine konularak şu pratik formül elde edilir:</p>
<div class="formul">
f<sub>n</sub> = ( 1 / 2π ) · √( g / δ<sub>st</sub> ) = √9810 / ( 2π · √δ<sub>st</sub> ) ≈ 15,76 / √δ<sub>st</sub> &nbsp;&nbsp;[Hz]
<small>δst: Yapının kendi ağırlığı altındaki statik sehim miktarı [mm]</small>
</div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Statik Sehim (δ<sub>st</sub>)</th>
    <th>Temel Doğal Frekans (f<sub>n</sub>)</th>
    <th>Otomasyon ve Mekatronik Açısından Uygunluk</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1,00 mm</strong></td>
    <td><strong>≈ 15,8 Hz</strong></td>
    <td><strong>KABUL EDİLEMEZ!</strong> Çok yumuşak konstrüksiyon. Hızlı servo eksen kesinlikle sürülemez, rezonanstan öter.</td>
  </tr>
  <tr>
    <td><strong>0,25 mm</strong></td>
    <td><strong>≈ 31,5 Hz</strong></td>
    <td>Kritik sınır. Düşük dinamikli konveyör hatları ve hafif aktarmalar için sınırda.</td>
  </tr>
  <tr>
    <td><strong>0,10 mm</strong></td>
    <td><strong>≈ 50,0 Hz</strong></td>
    <td><strong>Standart Otomasyon Hedefi.</strong> Kartezyen robotlar ve pick & place üniteleri için iyi temel seviye.</td>
  </tr>
  <tr>
    <td><strong>0,02 mm</strong></td>
    <td><strong>≈ 111,0 Hz</strong></td>
    <td><strong>Yüksek Dinamik Eksen.</strong> Yüksek hızlı alma-bırakma, lazer kafaları, hızlı montaj hücreleri.</td>
  </tr>
  <tr>
    <td><strong>0,005 mm (5 µm)</strong></td>
    <td><strong>≈ 223,0 Hz</strong></td>
    <td><strong>Hassas Takım Tezgahı.</strong> CNC işleme merkezleri, koordinat ölçüm (CMM) tablaları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Rezonans ve Dinamik Büyütme Faktörü (Q Faktörü)</h2>
<p>Dışarıdan gelen uyarı frekansı (ω) yapının doğal frekansına (ω<sub>n</sub>) yaklaştığında (ω / ω<sub>n</sub> → 1), sistem rezonansa girer. Genliğin statik sehime oranına <strong>Dinamik Büyütme Faktörü (Q)</strong> denir:</p>
<div class="formul">
Q = 1 / ( 2 · ζ ) &nbsp;&nbsp;[Rezonans anında]
<small>ζ (Zeta): Boyutsuz sönümleme oranı (Damping ratio)</small>
</div>
<ul>
  <li><strong>Kaynaklı Çelik Şasede:</strong> ζ ≈ 0,005 – 0,01 → Q = 1 / ( 2 × 0,01 ) = <strong>50!</strong> (Uygulanan periyodik kuvvet rezonansta <strong>50 kat büyür!</strong> 100 N'luk motor balanssızlığı 5000 N gibi etki eder ve şaseyi parçalar!).</li>
  <li><strong>Dökme Demirde (GG25):</strong> ζ ≈ 0,03 – 0,05 → Q ≈ 10 – 16.</li>
  <li><strong>Mineral Dökümde (Polimer Beton):</strong> ζ ≈ 0,08 – 0,12 → Q ≈ 4 – 6 (Titreşimi rezonansta bile anında emer).</li>
</ul>

<h2>Servo Bant Genişliği (Bandwidth) ve Mekanik Rezonans Bağı</h2>
<div class="kutu tehlike"><span class="kb">Yazılımcının Çözemediği Mekanik Hata: Rezonans</span>
Birçok tasarımcı "mekanik esnek olsa da yazılımcı PID kazançlarını açar, servoyu hedefte zımba gibi durdurur" yanılgısına düşer. Oysa kontrol teorisine göre bir servo sürücünün hız çevrimi bant genişliği (f<sub>BW</sub>), tahrik ettiği mekanik yapının en düşük doğal frekansının üçte birini geçemez:
<div class="formul">
f<sub>BW</sub> ≤ f<sub>n,mekanik</sub> / ( 3 … 4 )
</div>
Eğer mekanik şase f<sub>n</sub> = 20 Hz'de titriyorsa, servo sürücünün bant genişliği en fazla 5–6 Hz yapılabilir. Bu durumda servo motor yumuşak bir sünger gibi davranır; hedefe yavaş oturur. Yazılımcı kazancı (K<sub>p</sub>, K<sub>v</sub>) açtığı anda sistem kulak tırmalayıcı bir sesle öterek rezonansa girer ve aşırı akımdan kendini kapatır! <strong>Hızlı servo istiyorsan mekaniği rijit yapacaksın.</strong></div>

<h2>Rijitlik Artırma Stratejileri Hiyerarşisi</h2>
<ol>
  <li><strong>Konsol Boyunu (L) Kısaltmak (En Yüksek Etki: L³):</strong> Konsol bir kolun ucundaki sehim L³ ile orantılıdır. Kol boyunu 600 mm'den 300 mm'ye düşürmek sehimi <strong>8 KAT AZALTIR</strong>, doğal frekansı √8 ≈ 2,83 kat artırır!</li>
  <li><strong>Kesit Yüksekliğini Artırmak (h³):</strong> Kirişin et kalınlığını artırmak yerine profil yüksekliğini 2 katına çıkarmak atalet momentini ~8 kat artırır.</li>
  <li><strong>Diyagonal Üçgenleme:</strong> Dikdörtgen karkasları eğilme yükünden çıkarıp eksenel çekme-basma kafesine dönüştürür.</li>
  <li><strong>Kütle Optimizasyonu:</strong> Hareketli parçalarda (Z ekseni kolu, gripper pleyti) gereksiz etleri boşaltmak (m azalır → f<sub>n</sub> artar).</li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead><tr><th>Terim / Sembol</th><th>Bilimsel & Mühendislik Tanımı</th></tr></thead>
<tbody>
  <tr>
    <td><strong>Statik Rijitlik (k)</strong></td>
    <td>Birim elastik deformasyon başına gereken statik kuvvettir (k = F / δ). Birimi N/mm veya N/µm'dir.</td>
  </tr>
  <tr>
    <td><strong>Doğal Frekans (f<sub>n</sub>)</strong></td>
    <td>Bir sistemin herhangi bir dış periyodik kuvvet olmaksızın, bir başlangıç darbesi sonrasında kendi iç elastik ve kütlesel özellikleriyle salındığı öz frekanstır (Birim: Hertz [Hz]).</td>
  </tr>
  <tr>
    <td><strong>Sönümleme Oranı (ζ - Zeta)</strong></td>
    <td>Sistemdeki gerçek sönüm katsayısının (c), sistemi salınımsız durduran kritik sönüm katsayısına [ c<sub>c</sub> = 2·√(k·m) ] oranıdır (ζ = c / c<sub>c</sub>). Boyutsuzdur.</td>
  </tr>
  <tr>
    <td><strong>Rezonans</strong></td>
    <td>Dış uyarı kuvvetinin frekansının (ω), sistemin doğal frekansına (ω<sub>n</sub>) eşit veya çok yakın olması durumunda titreşim genliğinin teorik olarak ekstrem değerlere fırlaması durumu.</td>
  </tr>
  <tr>
    <td><strong>Dinamik Büyütme Faktörü (Q)</strong></td>
    <td>Rezonans anında oluşan dinamik yer değiştirme genliğinin, aynı kuvvetin statik uygulanması durumunda oluşacak sehim miktarına oranıdır [ Q = 1 / (2·ζ) ].</td>
  </tr>
  <tr>
    <td><strong>Servo Bant Genişliği (Bandwidth)</strong></td>
    <td>Servo sürücünün pozisyon veya hız komutlarındaki değişimleri faz gecikmesi yaşamadan dinamik olarak takip edebildiği maksimum frekans sınırıdır (Birim: Hz).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Otomasyonda başarısızlığın ana sebebi kırılma değil, <strong>esneme, rezonans ve geç oturma titreşimleridir</strong>.</li>
  <li>Doğal frekans f<sub>n</sub> = ( 1 / 2π ) · √( k / m ) formülüyle yönetilir; frekansı artırmak için rijitlik artırılmalı veya kütle azaltılmalıdır.</li>
  <li>Statik sehimden doğal frekans pratik olarak <strong>f<sub>n</sub> ≈ 15,8 / √δ<sub>st</sub> [mm]</strong> bağıntısıyla saniyeler içinde hesaplanabilir.</li>
  <li>Çelik şaselerde sönümleme çok düşüktür (ζ ≈ 0,01); rezonansta kuvvetler <strong>50 kat büyür</strong>.</li>
  <li>Servo sürücü bant genişliği mekanik doğal frekansın 1/3'ü ile sınırlıdır; yumuşak mekanik sistemde servo PID kazançları açılamaz.</li>
  <li>Rijitliği artırmanın en etkili yolu <strong>açıklığı ve konsol boyunu kısaltmaktır (L³ etkisi)</strong>.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>CATIA Generative Structural Analysis (FEA) modülünde bir robot kolu tasarladın. Kolun ucundaki gripper ve taşınan parça kendi ağırlığıyla 0.16 mm sehim yapıyor. Bu kolun temel rezonans frekansı yaklaşık kaçtır? Bu frekans yüksek hızlı bir montaj servosu için yeterli midir?</summary>
<div>Pratik formülü uygulayalım:
<div class="formul">
f<sub>n</sub> ≈ 15,76 / √0,16 = 15,76 / 0,40 ≈ 39,4 Hz
</div>
Yaklaşık 40 Hz genel otomasyon için fena değildir ancak yüksek dinamikli bir montaj hücresinde servo motor hız çevrimi bant genişliğini en fazla 40 / 3 ≈ 13 Hz seviyesine kadar açabilirsin. Eğer hedef çevrim süresi çok agresifse kolun ucunda duruş anında mikro-titreşimler yaşanır. Kol kesitini büyüterek sehimi 0.04 mm'ye düşürürsen frekans 15,8 / √0,04 = 79 Hz'e çıkar ve servo zımba gibi kilitlenir.</div></details>
<details><summary>Bir şasede çelik profillerin et kalınlığını 4 mm'den 8 mm'ye çıkararak iki katına çıkardın. Doğal frekans neden iki katına çıkmaz, hatta bazen düşebilir?</summary>
<div>Çünkü et kalınlığını iki katına çıkarmak rijitliği (k) artırırken aynı zamanda şasenin kütlesini (m) de yaklaşık iki katına çıkarır! Doğal frekans formülü f<sub>n</sub> ∝ √(k/m)'dir. Hem k hem m aynı oranda artarsa oran sabit kalır ve doğal frekans neredeyse hiç değişmez! Doğal frekansı artırmanın bilimsel yolu; kütleyi artırmadan kesit yüksekliğini (h) artırmak veya açıklığı (L) kısaltmaktır.</div></details>
<details><summary>Dinamik bir kartezyen eksende servo motor tam durduğu anda mekanik kola elinle dokunduğunda yüksek frekanslı bir uğultu ve titreme hissediyorsun. Sürücü üzerinden kazançları kısmak geçici bir çözümdür; mekanik tasarımcı olarak ne yapmalısın?</summary>
<div>Bu durum servo hız/akım çevrimi ile mekanik yapının ilk bükülme modunun rezonansa girdiğini gösterir. Mekanik tasarımcı olarak:
1. Kolun konsol uzunluğunu minimuma indirmeli,
2. Koldaki ölü ağırlıkları (kalın vidalar, gereksiz ağır sensör braketleri) cep frezeleme ile hafifletmeli,
3. Kol ile araba arasındaki adaptör plakasının et kalınlığını artırarak en zayıf elastik halkayı sertleştirmelisin. Yazılım tarafında ise servo sürücüye o rezonans frekansını baskılayan bir <strong>Notch Filtre (Çentik Filtresi)</strong> tanımlanmalıdır.</div></details>
</div>
`);
