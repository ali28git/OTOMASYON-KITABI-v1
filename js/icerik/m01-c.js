// MODÜL 1 — Malzeme Bilgisi (Bölüm 1.10 – 1.13)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m1', '1-10', `
<p class="giris">Bir çeliğin kimyasal bileşimi onun yalnızca teorik potansiyelini belirler; bu potansiyeli mekanik bir başarıya dönüştüren veya parçayı fırından hurda olarak çıkaran unsur <strong>ısıl işlemdir (heat treatment)</strong>. Mekanik otomasyon tasarımcısının bir metalurji mühendisi kadar derin faz dengesi bilmesine gerek yoktur; ancak fırından çıkan parçanın neden çarpıldığını, neden çatladığını ve teknik resim antetine fırıncının anlayacağı dilde hangi parametrelerin yazılması gerektiğini eksiksiz bilmesi gerekir. Bu bölümde östenit-martenzit dönüşümünü, ıslahı, sementasyonu, indüksiyonu ve nitrürlemeyi inceliyoruz.</p>

<h2>Demir-Karbon Faz Dönüşümleri ve Su Verme Metalurjisi</h2>
<p>Oda sıcaklığında alaşımsız çeliğin temel mikroyapısı ferrit (α-Fe, sünek ve yumuşak) ve sementit (Fe<sub>3</sub>C, sert ve kırılgan karbür) fazlarının lamel karışımı olan perlittir:</p>

<ul>
  <li><strong>Östenitleme (Tavlama Sıcaklığı):</strong> Çelik kritik A<sub>3</sub> / A<sub>1</sub> sıcaklıklarının üzerine (~750–920 °C) ısıtıldığında kafes yapısı HMK'dan (Hacim Merkezli Kübik) <strong>YMK (Yüzey Merkezli Kübik) Östenit fazına (γ-Fe)</strong> dönüşür. YMK kafesinin atomik boşlukları geniştir ve karbon atomları bu kafes içine homojen şekilde çözünür.</li>
  <li><strong>Hızlı Soğutma (Su Verme / Quenching):</strong> Östenit sıcaklığındaki çelik suya, yağa veya yüksek basınçlı inert gaz (azot) ortamına hızla daldırıldığında; difüzyon hızı sıfırlanır ve karbon atomları kafesten dışarı kaçamaz. Karbon kafes içine hapsolarak kafesi eksenel olarak uzatır ve aşırı gergin <strong>HMKT (Hacim Merkezli Tetragonal) kristal yapısındaki Martenzite</strong> dönüştürür.</li>
  <li><strong>Martenzit Fazı:</strong> Çeliğin ulaşabileceği en yüksek sertlik seviyesidir (60–66 HRC). Ancak yapıda devasa termal ve faz dönüşüm iç gerilmeleri vardır; cam gibi kırılgandır ve en küçük dinamik darbede parçalanır. Bu haliyle mekanik parçalarda <strong>asla doğrudan kullanılamaz</strong>.</li>
  <li><strong>Temperleme (Menevişleme / Tempering):</strong> Su verilmiş martenzitik çelik oda sıcaklığına inmesinin hemen ardından 150–650 °C arasında kontrollü bir fırında yeniden ısıtılır. Karbon atomları tetragonalliği terk ederek mikro karbürler halinde çökelir; iç gerilmeler yatışır, gevreklik kırılır ve çelik <strong>olağanüstü darbe tokluğu</strong> kazanır. Temperleme sıcaklığı arttıkça sertlik düşer, tokluk ve süneklik artar.</li>
</ul>

<div class="kutu tehlike"><span class="kb">Fırıncıya Asla Sadece "Sertleştir" Yazılmaz!</span>
Teknik resme sadece "Sertleştirilecek" yazmak kabul edilemez bir tasarımcı hatasıdır. Su verilip temperlenmemiş bir parça tezgâhtan yere düştüğünde dahi ortadan ikiye kırılabilir. Antette daima nihai hedeflenen sertlik aralığı ve yöntemi açıkça tanımlanmalıdır: Örneğin <code>Islah: 280–320 HBW</code> veya <code>Sertleştirilmiş ve Temperlenmiş: 58–62 HRC</code>.</div>

<h2>Temel Endüstriyel Isıl İşlem Yöntemleri</h2>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Isıl İşlem Yöntemi</th>
    <th>Uygulanan Sıcaklık</th>
    <th>Tipik Çelik Kaliteleri</th>
    <th>Elde Edilen Sertlik ve Mikroyapı</th>
    <th>Mühendislik Parça Tipi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Islah (Quench & Temper - QT)</strong></td>
    <td>850 °C Su verme + 550–650 °C Temperleme</td>
    <td>42CrMo4, C45E, 34CrNiMo6</td>
    <td>Tüm kesitte homojen <strong>28–36 HRC (850–1100 MPa)</strong>; yüksek tokluk ve yorulma direnci.</td>
    <td>Miller, aktarma aksları, 10.9 cıvatalar, hidrolik silindir rotları.</td>
  </tr>
  <tr>
    <td><strong>Sementasyon (Case Hardening)</strong></td>
    <td>900–950 °C Karbonlama + 820 °C Su verme + 180 °C Düşük Temper</td>
    <td>16MnCr5, 20MnCr5, 18CrNiMo7-6</td>
    <td>Dış yüzeyde <strong>58–62 HRC (0,5–1,5 mm CHD derinlik)</strong>; çekirdek 30–40 HRC tok.</td>
    <td>Ağır hizmet dişlileri, zincir dişlileri, pinyonlar, kam makaraları.</td>
  </tr>
  <tr>
    <td><strong>İndüksiyonla Yüzey Sertleştirme</strong></td>
    <td>Yüksek frekanslı lokal ısıtma (880 °C) + Jet su verme</td>
    <td>C45E, 42CrMo4, Cf53 (100Cr6)</td>
    <td>Lokal yüzeyde <strong>54–58 HRC (1,5–3,0 mm SHD derinlik)</strong>; gövde orijinal sünek.</td>
    <td>Kremayer dişlileri, lineer kızak milleri, mil rulman oturma çapları.</td>
  </tr>
  <tr>
    <td><strong>Nitrürleme / Gaz Nitrokarbürleme</strong></td>
    <td>500–550 °C (Ferritik bölge, su verme YOK!)</td>
    <td>31CrMoV9, 42CrMo4, Takım Çelikleri</td>
    <td>Ultra sert difüzyon tabakası <strong>65–70 HRC (900–1100 HV)</strong>; sıfır çarpılma.</td>
    <td>Hassas kalıp iticileri, aşınma kızakları, hidrolik distribütör milleri.</td>
  </tr>
  <tr>
    <td><strong>Gerilim Giderme Tavı (Stress Relief)</strong></td>
    <td>550–650 °C (Yavaş fırın soğutması)</td>
    <td>Kaynaklı S235/S355 Şaseler, Dökümler</td>
    <td>Faz değişimi ve sertlik artışı YOKTUR. Sadece imalat artık gerilmeleri sıfırlanır.</td>
    <td>CNC'de işlenecek kaynaklı hassas gövdeler ve kalın montaj tablaları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Nitrürleme Neden Boyutsal Kararlılık Şampiyonudur?</h2>
<p>Standart su verme sertleştirmesinde çelik 850 °C'nin üzerine çıkarılır ve YMK östenit kafesinden HMKT martenzit kafesine geçerken <strong>yaklaşık %1 ila %1,5 hacimsel genleşme</strong> yaşar. Bu faz genleşmesi ve ani su verme termal şoku parçayı kaçınılmaz olarak büker ve eğrilir. Oysa <strong>gaz nitrürleme</strong> işleminde:</p>
<ul>
  <li>İşlem 520 °C civarında (östenite geçiş sıcaklığı olan 723 °C'nin çok altında) gerçekleşir; <strong>hiçbir faz dönüşümü olmaz</strong>.</li>
  <li>Parçaya su verilmez; fırında yavaşça soğutulur. Dolayısıyla <strong>termal şok ve çarpılma neredeyse sıfırdır</strong>.</li>
  <li>Azot atomları kristal aralıklarına girerek yüzeyde Fe<sub>4</sub>N ve Fe<sub>2–3</sub>N nitrürleri oluşturur; yüzey sertliği <strong>1000 HV (~68 HRC)</strong> mertebesine ulaşır.</li>
  <li><strong>Kritik Kural (Yumurta Kabuğu Etkisi):</strong> Nitrür tabakası çok incedir (0,1–0,3 mm). Eğer altındaki ana malzeme yumuşak olursa (örneğin S235), ağır noktasal bir darbede alttaki metal çöker ve üstteki sert nitrür kabuğu yumurta kabuğu gibi çatlar. Bu nedenle nitrürleme daima <strong>önceden ıslah edilmiş (+QT 30 HRC) 42CrMo4</strong> gibi mukavim malzemelere uygulanmalıdır.</li>
</ul>

<div class="kutu uyari"><span class="kb">Kaynaklı Hassas Şaselerde İmalat Sırası</span>
Hassas lineer ray montaj yüzeylerine sahip kaynaklı bir makine şasesinde imalat sıralaması hayati önem taşır:
<ol>
  <li>Karkasın kaynaklanması (kaynak çekmesiyle iç gerilmeler tavan yapar).</li>
  <li>Gerekirse kaba talaş kaldırma (büyük kaynak fazlalıkları temizlenir).</li>
  <li><strong>Gerilim Giderme Fırını (580–620 °C'de tavlama ve saatte 30 °C yavaş soğutma):</strong> Kaynak gerilmeleri tamamen gevşetilir.</li>
  <li><strong>Hassas CNC Finiş İşleme:</strong> Ray oturma kanalları ve pim delikleri tek bağlamada mikron toleransında işlenir. Bu şase ömür boyu çarpılmaz. Fırına sokulmadan işlenen şase ise tezgâhtan söküldüğü an muz gibi eğrilir!</li>
</ol>
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
    <td><strong>Martenzit</strong></td>
    <td>Östenitin kritik soğuma hızının üzerinde ani soğutulmasıyla karbon atomlarının kafeste sıkışması sonucu oluşan, aşırı gergin, aşırı sert ve gevrek tetragonal kafes fazı.</td>
  </tr>
  <tr>
    <td><strong>Temperleme (Menevişleme)</strong></td>
    <td>Su verilmiş martenzitik çeliği alt kritik sıcaklıklarda (150–650 °C) yeniden ısıtarak iç gerilmeleri düşürme, tokluk ve süneklik kazandırma ısıl işlemi.</td>
  </tr>
  <tr>
    <td><strong>Sementasyon Derinliği (CHD)</strong></td>
    <td>Case Hardening Depth (ISO 2639). Yüzeyden içeriye doğru sertliğin sınır değere (genellikle 550 HV ≈ 52 HRC) düştüğü mesafeyi belirten kalınlık ölçüsü [mm].</td>
  </tr>
  <tr>
    <td><strong>İndüksiyon Sertlik Derinliği (SHD)</strong></td>
    <td>Surface Hardening Depth (ISO 3754). Yüksek frekanslı indüksiyon akımıyla sertleştirilen tabakanın etkili derinlik mesafesi [mm].</td>
  </tr>
  <tr>
    <td><strong>Beyaz Tabaka (Bileşik Tabaka)</strong></td>
    <td>Nitrürleme işlemi sırasında en dış yüzeyde oluşan, 5–25 µm kalınlığında, aşırı korozyon ve sürtünme direncine sahip demir nitrür (ε-Fe<sub>2–3</sub>N) katmanı.</td>
  </tr>
  <tr>
    <td><strong>Gerilim Giderme Tavı</strong></td>
    <td>Kaynak, döküm veya yoğun talaş kaldırma sonrasında malzemede biriken artık çekme ve basma gerilmelerini mikroyapıyı bozmadan gidermek için uygulanan 550–650 °C yavaş fırınlama işlemi.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Su verilmiş çelik temperlenmeden asla kullanılmaz; tokluk temperleme işlemiyle kazanılır.</li>
  <li>Darbe ve aşınmanın bir arada olduğu dişlilerde <strong>16MnCr5 sementasyon çeliği</strong> yüzey sert çekirdek tok yapısıyla standarttır.</li>
  <li>Sadece mil oturma yerleri gibi yerel bölgelerin sertleşmesi gerekiyorsa en ucuz ve en hızlı yöntem <strong>C45 + İndüksiyonla sertleştirmedir</strong>.</li>
  <li>Çarpılmanın sıfır olması ve aşırı yüksek yüzey sertliği (1000 HV) için <strong>ıslahlı çeliğe gaz nitrürleme</strong> uygulanır.</li>
  <li>Kaynaklı hassas makine şaseleri CNC tezgâhta işlenmeden önce mutlaka <strong>gerilim giderme tavına</strong> sokulmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Çapı 25 mm, boyu 1000 mm olan boydan boya kama kanallı bir transmisyon milini komple fırında 850 °C'de su vererek sertleştirmeye kalkarsak ne olur?</summary>
<div>İnce ve uzun parçalarda asimetrik kesit (kama kanalı) nedeniyle soğuma hızı milin her tarafında eşit olmaz. Faz dönüşümü ve termal şok mili muz gibi birkaç milimetre büker (şiddetli distorsiyon). Doğrultma presiyle düzeltilmeye çalışılırsa mikroskobik çatlaklar oluşur ve mil ilk dinamik torkta kırılır. Doğru yöntem: Mil ıslahlı (42CrMo4+QT) işlenmeli veya yüzeyi indüksiyonla/nitrürleme ile sertleştirilmelidir.</div></details>
<details><summary>Teknik resimde sementasyon yapılacak bir parça için fırıncıya sadece "60 HRC sementasyon" yazmak neden eksiktir?</summary>
<div>Sementasyon derinliği (CHD) belirtilmemiştir. Fırıncı parçayı 0,2 mm mi yoksa 1,5 mm mi karbonlayacağını bilemez. Yetersiz derinlikte dişler basma yükü altında ezilir; aşırı derinlikte ise ince federler ve diş kökleri çekirdeğe kadar sertleşip gevrek kırılmaya uğrar. Doğru gösterim: "Sementasyon: 60 ± 2 HRC, CHD = 0,8 +0,2 mm".</div></details>
<details><summary>Neden S235JR yapı çeliğinden yapılmış bir plakaya doğrudan gaz nitrürleme yapılması tavsiye edilmez?</summary>
<div>S235JR alaşımsız yumuşak çeliktir (akma mukavemeti ~235 MPa). Nitrürleme ile yüzeyde oluşan 0,1 mm'lik aşırı sert tabaka, altındaki yumuşak matris yüzünden "yumurta kabuğu etkisi" yaşar. En küçük noktasal darbede alttaki yumuşak çelik çöker ve üstteki ince sert tabaka kırılarak dökülür. Nitrürleme için çekirdeğin sertliği taşıyabilecek güçte (ör. 42CrMo4 ıslahlı ~30 HRC) olması gerekir.</div></details>
</div>
`);

KITAP.bolum('m1', '1-11', `
<p class="giris">Mekanik parçayı doğru malzemeden seçtiniz, optimum geometride işlediniz ve toleranslarına getirdiniz. Peki bu parçayı endüstriyel tesisin nemli atmosferine, aşındırıcı talaşlara, operatörün asidik terine veya deterjanlı yıkama sıvılarına karşı nasıl koruyacaksınız? Yüzey işlemleri ve kaplama teknolojileri parçaya korozyon direnci, sürtünme kayganlığı, aşınma kalkanı ve elektriksel yalıtım kazandırır. Ancak kaplama kalınlıkları hesaba katılmadan çizilen teknik resimler, montaj hattında rulmanların yuvasına girmemesine ve cıvataların kilitlenmesine yol açan en yaygın mühendislik tuzaklarıdır. Bu bölümde kaplama türlerini, katman dinamiklerini ve tolerans uyumunu inceliyoruz.</p>

<h2>Kaplama Kalınlığı ve Geometrik Tolerans İlişkisi</h2>
<p>Yüzey işlemleri parça geometrisine etkileri bakımından iki temel metalurjik gruba ayrılır:</p>

<div class="iki-sutun">
  <div><h4>1. Dönüşüm Tabakaları (Kimyasal İç Katman)</h4>
  Malzemenin kendi atomlarıyla kimyasal reaksiyona girerek içeri doğru oluşur. Yüzeyde neredeyse hiçbir boyutsal büyüme yapmaz (0–2 µm). <strong>Hassas toleransları bozmaz.</strong><br>
  <strong>Örnekler:</strong> Siyah oksit (karartma), mangan fosfatlama, kromatlama (SurTec 650), gaz nitrürleme difüzyon tabakası.</div>
  <div><h4>2. Katman Ekleyen Kaplamalar (Boyutsal Büyüme)</h4>
  Metal yüzeyinin üzerine dışarı doğru mikron veya mikrometre mertebesinde et kalınlığı ekler. <strong>Silindirik millerde çap artışı, deliklerde çap daralması kaplama kalınlığının tam 2 katıdır (ΔØ = 2 · t<sub>kaplama</sub>)!</strong><br>
  <strong>Örnekler:</strong> Elektrolitik galvaniz (5–15 µm), kimyasal nikel (10–25 µm), sert eloksal (30–50 µm), toz boya (60–120 µm).</div>
</div>

<div class="kutu tehlike"><span class="kb">Tolerans Felaketi: Çapta Çifte Kalınlık</span>
Bir rulman yuvası Ø35 H7 (+0,025 / 0 mm) toleransında işlendikten sonra parçaya koruma amacıyla 15 µm kimyasal nikel veya sert eloksal kaplanırsa; kaplama deliğin her iki cidarında 15'er mikron kalınlık yapar ve delik çapı <strong>tam 30 µm daralır</strong>. Nominal ölçü Ø34,970 mm'ye düşer; rulman yuvasına asla oturmaz! Teknik resimde ölçülerin <strong>"KAPLAMA ÖNCESİ"</strong> mi yoksa <strong>"KAPLAMA SONRASI"</strong> mı geçerli olduğu antette veya ölçü yanında açıkça belirtilmelidir.</div>

<h2>Çelik Parçalar İçin Yüzey Koruma Teknolojileri</h2>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Yüzey İşlemi</th>
    <th>Proses Standardı</th>
    <th>Katman Kalınlığı</th>
    <th>Korozyon Direnci (Tuz Testi)</th>
    <th>Mühendislik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Siyah Oksit (Karartma)</strong></td>
    <td>DIN 50938</td>
    <td>0,5 – 1,5 µm (Sıfır boyutsal değişim)</td>
    <td>Çok Düşük (&lt; 24 saat, yağsızken sıfır!)</td>
    <td>Hassas fikstür pimleri, cıvatalar, ölçüsü bozulmaması gereken kapalı ortam parçaları.</td>
  </tr>
  <tr>
    <td><strong>Elektrolitik Çinko (Galvaniz)</strong></td>
    <td>ISO 2081 (Fe//Zn8//A)</td>
    <td>8 – 15 µm (Mavi/Sarı pasivasyonlu)</td>
    <td>Orta (72 – 240 saat)</td>
    <td>Standart 8.8 bağlantı elemanları, sac konsollar, şase montaj braketleri. Kurban anot koruması.</td>
  </tr>
  <tr>
    <td><strong>Kimyasal Nikel (ENP)</strong></td>
    <td>ISO 4527 (Ni-P Alaşımı)</td>
    <td><strong>10 – 25 µm (Homojen dağılım)</strong></td>
    <td><strong>Çok Yüksek (200 – 1000 saat)</strong></td>
    <td><strong>Hassas otomasyonun 1 numaralı kaplamasıdır.</strong> Kör deliklerde bile eşit kalınlık verir. Pnömatik bloklar, fikstürler.</td>
  </tr>
  <tr>
    <td><strong>Sert Krom (Hard Chrome)</strong></td>
    <td>ISO 6158</td>
    <td>20 – 100 µm (65–70 HRC)</td>
    <td>Yüksek (Taşlanmış yüzeyde)</td>
    <td>Hidrolik piston milleri, aşınan lineer kılavuz milleri, vals merdaneleri. Çok düşük sürtünme.</td>
  </tr>
  <tr>
    <td><strong>Elektrostatik Toz Boya</strong></td>
    <td>Epoksi / Polyester</td>
    <td>60 – 120 µm</td>
    <td>Mükemmel (İç/Dış ortam)</td>
    <td>Kaynaklı ana şaseler, sac hücre kapakları. İşlenmiş ray yüzeyleri mutlaka maskelenmelidir!</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu ipucu"><span class="kb">Kimyasal Nikel (Electroless Nickel) Neden Bu Kadar Üstündür?</span>
Elektrolitik kaplamalarda (çinko, dekoratif krom vb.) elektrik akımı parçanın sivri köşelerine ve kenarlarına yoğunlaşır; buralarda kaplama çok kalın olurken, kör deliklerin ve derin yuvaların içine akım ulaşamaz ve kaplama kalınlığı sıfıra düşer (Faraday kafesi etkisi). Oysa <strong>kimyasal nikel (ENP)</strong> elektrik akımı kullanmaz; otokatalitik kimyasal indirgeme ile çalışır. Parçanın temas ettiği her noktaya, vida diş diplerine ve derin kör deliklerin dibine dahi <strong>milimetrenin binde biri (±1 µm) homojenlikte</strong> kusursuz kalınlık serer.</div>

<h2>Alüminyum İçin Anodik Oksidasyon (Eloksal) Standartları</h2>
<p>Alüminyumun yüzeyindeki mikroskobik Al<sub>2</sub>O<sub>3</sub> oksit filminin sülfürik asit banyosunda elektrokimyasal olarak büyütülmesidir (ISO 7599 / ISO 10074). Tabaka %50 alüminyumun içine doğru penetre olurken, %50 dışarı doğru kalınlık ekler:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Eloksal Türü</th>
    <th>Standardı</th>
    <th>Tabaka Kalınlığı</th>
    <th>Yüzey Sertliği</th>
    <th>Karakteristik ve Otomasyondaki Amacı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Dekoratif Eloksal (Tip II)</strong></td>
    <td>ISO 7599</td>
    <td>10 – 20 µm</td>
    <td>~250 – 350 HV</td>
    <td>Şeffaf (naturel gümüş), siyah veya renkli. Korozyon ve parmak izi koruması. Sigma profiller, paneller.</td>
  </tr>
  <tr>
    <td><strong>Sert Eloksal (Hardcoat - Tip III)</strong></td>
    <td>ISO 10074</td>
    <td><strong>40 – 60 µm</strong></td>
    <td><strong>450 – 600 HV (~50–55 HRC)</strong></td>
    <td>Düşük banyo sıcaklığında (0 °C) üretilir. Koyu gri/zeytin yeşili. <strong>Aşınma zırhıdır.</strong> Gripper çeneleri, pnömatik silindir boruları, kızaklar.</td>
  </tr>
  <tr>
    <td><strong>Kimyasal Dönüşüm (SurTec 650)</strong></td>
    <td>MIL-DTL-5541</td>
    <td>&lt; 0,5 µm (Sıfır kalınlık)</td>
    <td>Yumuşak</td>
    <td><strong>Elektriksel iletkenliği korur.</strong> Pano topraklama plakaları, EMC ekranlama, boya altı korozyon astarı.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Eloksal Elektriği Kesinlikle İletmez!</span>
Alüminyum oksit (Al<sub>2</sub>O<sub>3</sub>) seramiktir ve mükemmel bir dielektrik yalıtkandır. Komple eloksal kaplanmış bir şase parçasına topraklama kablosu pabucu cıvatalanırsa elektrik devresi tamamlanmaz ve makine topraklamasız kalarak CE testinden geçemez! Topraklama noktalarının yüzeyi montajda kazınmalı, eloksal öncesi maskelenmeli veya iletken kaplama olan <strong>SurTec 650</strong> seçilmelidir.</div>

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
    <td><strong>Kimyasal Nikel (ENP)</strong></td>
    <td>Dış akım kaynağı olmadan hipofosfit indirgeyici ile nikel-fosfor alaşımının parçanın tüm geometrisine homojen kalınlıkta çöktürüldüğü yüksek korozyon ve aşınma kaplaması (ISO 4527).</td>
  </tr>
  <tr>
    <td><strong>Sert Eloksal (Tip III Hardcoat)</strong></td>
    <td>Düşük sıcaklıklı asit elektrolitinde yüksek akım yoğunluğuyla oluşturulan, 50–55 HRC eşdeğeri seramik sertliğe sahip kalın (40–60 µm) anodik koruma tabakası (ISO 10074).</td>
  </tr>
  <tr>
    <td><strong>Siyah Oksit (Fe<sub>3</sub>O<sub>4</sub>)</strong></td>
    <td>Çelik yüzeyinin sıcak alkali banyoda kontrollü olarak manyetit fazına dönüştürüldüğü, boyutsal büyüme yapmayan ancak tek başına korozyon koruması çok zayıf olan karartma işlemi.</td>
  </tr>
  <tr>
    <td><strong>SurTec 650 / Alodine</strong></td>
    <td>Alüminyum yüzeyinde elektriksel iletkenliği bozmadan korozyon direnci ve boya tutunumu sağlayan krom-III bazlı ince kimyasal pasivasyon tabakası.</td>
  </tr>
  <tr>
    <td><strong>Kurban Anot Prensibi</strong></td>
    <td>Galvanik çinko kaplamada, çinkonun çeliğe göre daha aktif olması sebebiyle kaplama çizilse dahi çinkonun kendini feda ederek altındaki çeliğin paslanmasını önlemesi mekanizması.</td>
  </tr>
  <tr>
    <td><strong>Tuz Püskürtme Testi (NSS)</strong></td>
    <td>ISO 9227 standardına göre kaplanmış numunelerin %5 NaCl çözeltili sis odasında korozyon başlangıç saatlerinin (kırmızı pas / beyaz pas) ölçüldüğü hızlandırılmış dayanım deneyi.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Kaplama kalınlıkları silindirik toleranslarda çift taraflı etki yapar; delikler 2 kat daralır, miller 2 kat kalınlaşır.</li>
  <li>Hassas ölçülü çelik parçalarda boyutları değiştirmeyen en ideal yüzey işlemi <strong>Kimyasal Nikel (15–20 µm)</strong>'dir.</li>
  <li>Siyah oksit karartma boyutu bozmaz ancak neme karşı tek başına korumaz; parça mutlaka yağlı kalmalıdır.</li>
  <li>Alüminyumu sürtünme ve aşınmaya karşı korumak için <strong>40–50 µm Sert Eloksal (Tip III)</strong> uygulanmalıdır.</li>
  <li>Eloksal elektrik yalıtkanıdır; elektriksel topraklama ve EMC gereken alüminyum parçalarda <strong>SurTec 650</strong> kullanılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Çelik bir montaj plakasında derin M4 dişli kör delikler ve Ø12 H7 ray dayama pim delikleri vardır. Plaka paslanmaya karşı korunacaktır. Neden galvaniz yerine kimyasal nikel tercih edilmelidir?</summary>
<div>Elektrolitik çinko galvaniz işleminde elektrik akımı deliklerin içine nüfuz edemez (Faraday kafesi); M4 kör deliklerin dipleri kaplanmaz ve paslanır; dış kenarlarda ise çinko yığılması olarak pim toleransı bozulur. Kimyasal nikel elektrik akımı kullanmadığı için kör deliklerin diş dipleri dahil her yüzeye mikron mertebesinde tamamen homojen (ör. 15 ± 1 µm) kalınlık verir.</div></details>
<details><summary>Pnömatik silindirle tahrik edilen bir alüminyum gripper çenesinin temas yüzeyine dekoratif naturel eloksal (10 µm) yaptırılmıştır. Çene 2 ay sonra aşınarak boşluk yapmıştır. Hata nedir?</summary>
<div>Dekoratif eloksal sadece korozyon ve görsel amaçlıdır; katman incedir (10 µm) ve gözeneklidir. Sürekli sürtünme ve darbe alan temas yüzeylerinde aşınmayı önlemek için en az 450–550 HV sertlik veren <strong>40–50 µm Sert Eloksal (Tip III Hardcoat)</strong> uygulanmalı veya temas noktasına sertleştirilmiş çelik aşınma pabucu vidalanmalıdır.</div></details>
<details><summary>Teknik resimde toleranslı bir mile "Sert Krom Kaplama" notu düşülmüştür. İmalatçı mili nasıl işler?</summary>
<div>Sert krom elektrolitik banyoda kontrolsüz ve pürüzlü büyür (ör. 50–80 µm biner). İmalatçı mili önce taşlama payıyla nominal çapın altına işler, sert krom kaplatır ve ardından silindirik taşlama tezgâhında taşlayarak hedef h6/h7 toleransına ve aynasal Ra ≤ 0,2 µm yüzey pürüzlülüğüne ulaştırır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-12', `
<p class="giris">Mekanik tasarımı kusursuz yaptınız, makinenin montajı tamamlandı ve müşteri sahasına sevk edildi. 6 ay sonra fabrikadan acil çağrı geliyor: "Paslanmaz cıvataların etrafındaki alüminyum gövde kireç gibi beyaz bir toza dönüşerek dökülüyor ve cıvatalar gevşeyip düşüyor!" Karşılaştığınız fenomen bir tasarım hatası klasiğidir: <strong>Galvanik (Bimetalik) Korozyon</strong>. Yan yana gelen farklı metallerin oluşturduğu elektrokimyasal pil etkisi, aralık korozyonu ve gerilmeli korozyon çatlağı bu bölümün ana konusudur.</p>

<h2>Galvanik (Bimetalik) Korozyonun Elektrokimyasal Mekanizması</h2>
<p>Elektrokimyasal potansiyelleri birbirinden farklı iki metal elektriksel olarak temas ettiğinde ve bu temas bölgesi bir <strong>elektrolit</strong> (hava nemi, yoğuşma suyu, yıkama sıvısı, tuzlu ortam) ile ıslandığında kendiliğinden bir kısa devre pili (galvanik hücre) kurulur:</p>

<ul>
  <li><strong>Anot (Aktif / Az Soy Metal):</strong> Elektrokimyasal potansiyeli daha negatiftir. Elektron vererek hızla iyonlaşır ve <strong>kendi kendini yok ederek erir</strong>.</li>
  <li><strong>Katot (Soy / Asil Metal):</strong> Elektrokimyasal potansiyeli daha pozitiftir. Elektronları alarak yüzeyinde indirgenme tepkimesi yürütür ve <strong>asla korozyona uğramaz</strong>; komşusunu kurban eder.</li>
</ul>

<div class="formul">
ΔE = E°<sub>katot</sub> − E°<sub>anot</sub> &nbsp;&nbsp;[V]
<small>Standart fabrika içi kuru ortamlarda ΔE &gt; 0,25 V; nemli ve dış sahalarda ΔE &gt; 0,15 V ise şiddetli galvanik erime başlar!</small>
</div>

<h2>Pratik Galvanik Seri (Deniz Suyu ve Nem Ortamında Metaller)</h2>
<p>Soy metaller (üstte) kendilerini korur, aktif metalleri (altta) eritir:</p>
<ol>
  <li><strong>Platin, Altın (En Soy)</strong></li>
  <li><strong>Paslanmaz Çelikler (Pasif Halde - AISI 316, 304)</strong> [E ≈ +0,10 V]</li>
  <li>Nikel ve Kimyasal Nikel Kaplama</li>
  <li>Bakır, Kalay Bronzu, Pirinç [E ≈ −0,20 V]</li>
  <li><strong>Karbon Çeliği ve Dökme Demir (S235, C45)</strong> [E ≈ −0,60 V]</li>
  <li><strong>Alüminyum Alaşımları (6082, 7075, 5083)</strong> [E ≈ −0,80 V]</li>
  <li><strong>Çinko (Galvaniz Kaplama)</strong> [E ≈ −1,05 V]</li>
  <li>Magnezyum Alaşımları (En Aktif / Kurban) [E ≈ −1,60 V]</li>
</ol>

<h2>En Büyük Tasarım Felaketi: Küçük Anot / Büyük Katot Alan Oranı</h2>
<div class="kutu tehlike"><span class="kb">Alan Oranı Katastrofisi</span>
Korozyon akımı katot yüzeyinden toplanır ve anot yüzeyine boşalır. Bu nedenle <strong>Anot Alanı / Katot Alanı oranı küçüldükçe korozyon hızı katlanarak fırlar</strong>:
<ul>
  <li><strong>Ölümcül Eşleşme (Küçük Anot / Devasa Katot):</strong> Geniş bir paslanmaz çelik (304) gövde üzerine alüminyum perçin çakmak veya galvaniz kaplı çelik cıvata sıkmak! Katot (paslanmaz sac) devasadır, anot (cıvata/perçin) miniciktir. Toplanan devasa akım minik cıvataya odaklanır; cıvata birkaç haftada un gibi eriyip kopar!</li>
  <li><strong>Göreceli Güvenli Eşleşme (Devasa Anot / Küçük Katot):</strong> Devasa bir alüminyum profil şaseye tek bir paslanmaz M5 cıvata takmak. Katot (cıvata başı) küçük, anot (koca şase) devasadır. Akım yoğunluğu seyreldiği için alüminyumdaki erime çok yavaş ilerler (yine de nemli ortamda izole edilmelidir).</li>
</ul>
</div>

<h2>Endüstriyel Eşleşmelerin Risk Değerlendirme Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Metal Çifti</th>
    <th>Potansiyel Farkı (ΔE)</th>
    <th>Korozyon Riski</th>
    <th>Mühendislik Önlemi ve Çözüm</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Alüminyum + Paslanmaz Çelik (304/316)</strong></td>
    <td>~0,70 V (Çok Yüksek)</td>
    <td><strong>Şiddetli Korozyon!</strong></td>
    <td>Alüminyum çukurlaşır ve beyaz toz (Al(OH)₃) bırakır. Araya <strong>poliamid izolasyon pulu</strong> konulmalı veya Duralac montaj macunu sürülmelidir.</td>
  </tr>
  <tr>
    <td><strong>Alüminyum + Bakır / Bronz</strong></td>
    <td>~0,60 V (Çok Yüksek)</td>
    <td><strong>Yıkıcı Korozyon!</strong></td>
    <td>Asla doğrudan temas ettirilmemelidir! Elektrik panolarında bakır bara ile alüminyum arasına sürtünme kaynaklı <strong>Al-Cu bimetal geçiş pulu (Cupal)</strong> konulur.</td>
  </tr>
  <tr>
    <td><strong>Alüminyum + Çinko (Galvanizli Cıvata)</strong></td>
    <td>~0,25 V (Düşük)</td>
    <td><strong>GÜVENLİ (Endüstri Standardı)</strong></td>
    <td>Çinko ile alüminyum galvanik seride komşudur. Kuru ve normal fabrika ortamında alüminyum profillere galvanizli 8.8 çelik cıvata takılması standarttır.</td>
  </tr>
  <tr>
    <td><strong>Karbon Çeliği + Paslanmaz Çelik</strong></td>
    <td>~0,50 V (Orta-Yüksek)</td>
    <td>Riskli</td>
    <td>Karbon çeliği hızla paslanır. Paslanmaz borular çelik konsollara plastik takozlarla izole edilerek bağlanmalıdır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Diğer Tehlikeli Korozyon Tipleri</h2>

<h3>1. Aralık Korozyonu (Crevice Corrosion)</h3>
<p>Üst üste binen sacların arasında, cıvata başı pullarının altında veya conta kanallarında durgun sıvı tabakası biriktiğinde; dar aralıktaki çözünmüş oksijen hızla tükenir. Oksijensiz kalan paslanmaz çelik pasif Cr<sub>2</sub>O<sub>3</sub> tabakasını onaramaz. Aralık içi anot, dışarısı katot olur ve gözle görünmeyen yarığın içinde metal delinir. <strong>Önlem:</strong> Sıvı birikebilecek kör cepler bırakılmamalı; tahliye delikleri açılmalı ve hijyenik contalama yapılmalıdır.</p>

<h3>2. Gerilmeli Korozyon Çatlağı (Stress Corrosion Cracking - SCC)</h3>
<p>Malzemede sürekli bir <strong>çekme gerilmesi</strong> (sıkı geçme toleransı, büküm gerilmesi veya cıvata ön gerilmesi) varken korozif bir ortamla (özellikle klorür iyonları, sıcak su buharı) temas ettiğinde; hiçbir genel korozyon belirtisi olmadan metalde aniden çatlak ilerler ve parça cam gibi kırılır. Östenitik paslanmazlar (304) ve yüksek mukavemetli alüminyumlar (7075-T6) buna çok hassastır.</p>

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
    <td><strong>Galvanik Korozyon</strong></td>
    <td>Farklı elektrot potansiyeline sahip iki iletken metalin bir elektrolit varlığında elektriksel temas kurmasıyla daha aktif metalin hızla anodik çözünmeye uğraması hasarı.</td>
  </tr>
  <tr>
    <td><strong>Elektrolit</strong></td>
    <td>İyonik iletkenliğe sahip sıvı veya nem filmi (yoğuşma suyu, fabrika yıkama sıvısı, tuzlu deniz spreyi). Galvanik korozyonun devresini tamamlayan taşıyıcı ortam.</td>
  </tr>
  <tr>
    <td><strong>Aralık Korozyonu (Crevice)</strong></td>
    <td>Conta altı, vida başı veya sac bindirme yarıklarında oksijen difüzyonunun durması sebebiyle pasif filmin çökmesi ve dar aralıkta asidik yerel erimenin başlaması.</td>
  </tr>
  <tr>
    <td><strong>SCC (Gerilmeli Korozyon Çatlağı)</strong></td>
    <td>Mekanik statik çekme gerilmesi ile korozif kimyasal ortamın eşzamanlı etkisi altında çatlakların mikroskobik hızla ilerleyerek ani gevrek kırılma yaratması.</td>
  </tr>
  <tr>
    <td><strong>Bimetal Geçiş Pulu (Cupal)</strong></td>
    <td>Bir yüzü saf bakır diğer yüzü saf alüminyumdan moleküler düzeyde haddelenerek birleştirilmiş, bakır-alüminyum temasında galvanik erimeyi engelleyen elektriksel pul.</td>
  </tr>
  <tr>
    <td><strong>Kurban Anot</strong></td>
    <td>Ana yapıyı korumak amacıyla bilerek sisteme bağlanan, galvanik seride en aktif olan ve kendini feda ederek eriyen metal blok (çinko veya magnezyum).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Potansiyel farkı ΔE &gt; 0,15 V olan metaller nemli ortamda temas ettirilmemelidir.</li>
  <li>En tehlikeli geometri <strong>küçük anot / devasa katot</strong> alanıdır; paslanmaz sac üzerine alüminyum perçin veya çinko cıvata sıkılmamalıdır.</li>
  <li>Alüminyum gövde ile paslanmaz cıvata arasında su varsa araya mutlaka <strong>poliamid/teflon izolasyon pulu</strong> konulmalıdır.</li>
  <li>Alüminyum profillerde iç ortamda galvaniz kaplı 8.8 çelik cıvata kullanımı galvanik açıdan güvenlidir.</li>
  <li>Sıvı birikebilecek kör aralıklar bırakılmamalı; tahliye delikleri ve eğimli yüzeylerle aralık korozyonu önlenmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Açık sahada çalışan bir güneş paneli konstrüksiyonunda dev 316 paslanmaz çelik taşıyıcı kirişler standart galvaniz kaplı M10 çelik cıvatalarla birbirine bağlanmıştır. 8 ay sonra cıvataların başları kopmuştur. Neden?</summary>
<div>Devasa paslanmaz çelik kirişler dev bir katot oluşturur. Cıvatalar ise anot görevi görür. Yağmur suyu elektrolit vazifesi görerek korozyon pilini çalıştırmıştır. Katot/anot alan oranı binlerce kat büyük olduğu için tüm galvanik akım minik cıvataların üzerine boşalmış; çinko kaplama haftalar içinde yok olmuş ve cıvata gövdesi anodik olarak çözünerek kopmuştur. Bağlantı cıvataları da A4-80 paslanmaz çelik olmalıdır.</div></details>
<details><summary>Bir elektrik dağıtım panosunda kalın bakır bara doğrudan alüminyum şaseye cıvatalanabilir mi?</summary>
<div>Kesinlikle hayır! Bakır ile alüminyum arasındaki standart potansiyel farkı ~0,60 V'tur. Havadaki nemle birlikte alüminyum temas yüzeyinde şiddetli galvanik korozyon başlar; alüminyum oksit yalıtkan olduğundan temas direnci fırlar, bara aşırı ısınır ve yangın tehlikesi doğurur. Arada özel moleküler birleşimli <strong>Al-Cu bimetal rondela (Cupal)</strong> kullanılmalıdır.</div></details>
<details><summary>Alüminyum bir robot gövdesine A2 paslanmaz cıvata sıkılırken cıvata altına poliamid (naylon) pul koymak galvanik korozyonu nasıl engeller?</summary>
<div>Galvanik korozyonun oluşması için hem elektriksel metal-metal teması hem de sıvı elektrolit teması şarttır. Yalıtkan poliamid pul paslanmaz cıvata başı ile alüminyum gövde arasındaki doğrudan elektriksel teması keser; böylece elektron akışı engellenir ve galvanik hücre devresi çalışamaz.</div></details>
</div>
`);

KITAP.bolum('m1', '1-13', `
<p class="giris">Tasarım masasındasınız; CATIA veya SolidWorks başında yeni bir otomasyon hücresinin mekanik bileşenlerini modelliyorsunuz. Hangi parça hangi malzemeden üretilmeli, hangi ısıl işleme tabi tutulmalı ve hangi toleransla kaplanmalıdır? Malzeme seçimi rastgele bir tercih değil; <strong>fonksiyonel gereksinim + imalat yöntemi + maliyet optimizasyonu</strong> optimizasyonudur. Bu bölümde önceki 12 bölümün mühendislik sentezini, karar algoritmasını ve genç mekatronikçilerin sahada en sık yaptığı 10 kritik hatayı inceliyoruz.</p>

<h2>Malzeme Seçim Algoritması: Tasarımcının Karar Ağacı</h2>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Tasarım Adımı</th>
    <th>Analiz Edilecek Mühendislik Sorusu</th>
    <th>Doğru Malzeme Kararı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1. Dinamik Rol</strong></td>
    <td>Parça hareketli mi, duran şase mi?</td>
    <td>Duran şase (kütle serbest, rijitlik şart) → <strong>S235JR / GJL-250</strong>.<br>Hareketli eksen (ivme yüksek, atalet kritik) → <strong>6082-T651 / 7075-T651</strong>.</td>
  </tr>
  <tr>
    <td><strong>2. Yükleme Rejimi</strong></td>
    <td>Statik mi, yorulmalı tork mu, darbe mi?</td>
    <td>Statik basma/eğilme → <strong>S235JR / C45</strong>.<br>Yüksek dinamik tork/mil → <strong>42CrMo4+QT</strong>.<br>Şok darbe + yüzey ezilme → <strong>16MnCr5 Sementasyon</strong>.</td>
  </tr>
  <tr>
    <td><strong>3. Sürtünme ve Aşınma</strong></td>
    <td>Metal-metal temas var mı? Yağlama mümkün mü?</td>
    <td>Kuru kaymalı kılavuz → <strong>POM-C / PE-UHMW / Grafitli Bronz</strong>.<br>Abrasif sac/folyo kesme → <strong>1.2379 (60 HRC)</strong>.<br>Sonsuz vida çarkı → <strong>CuSn12 Kalay Bronzu</strong>.</td>
  </tr>
  <tr>
    <td><strong>4. Çalışma Ortamı</strong></td>
    <td>Nem, tuz, asit veya kimyasal temizlik var mı?</td>
    <td>Standart kuru fabrika → Karbon çeliği boyalı / Alüminyum eloksallı.<br>Yıkanan gıda/tuzlu hat → <strong>AISI 316L (1.4404)</strong>.<br>Yüksek sıcaklık (&gt; 200 °C) → <strong>1.2344 / PEEK / PTFE</strong>.</td>
  </tr>
  <tr>
    <td><strong>5. İmalat Yöntemi</strong></td>
    <td>1 adet prototip mi, 500 adet seri üretim mi?</td>
    <td>1–5 adet → Standart lama/plakadan CNC işleme veya lazer-büküm.<br>Seri üretim → Ekstrüzyon profil, döküm veya enjeksiyon kalıplama.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Endüstriyel Otomasyon Bileşenleri Standart Malzeme Başvuru Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mekanik Parça</th>
    <th>Standart Malzeme</th>
    <th>Isıl İşlem / Durum</th>
    <th>Yüzey Kaplama</th>
    <th>Seçim Gerekçesi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kaynaklı Ana Şase</strong></td>
    <td>S235JRH (Kutu Profil)</td>
    <td>Kaynak + Gerilim Giderme</td>
    <td>Elektrostatik Toz Boya</td>
    <td>Ucuz, kaynaklanabilir, yüksek rijitlik.</td>
  </tr>
  <tr>
    <td><strong>Hassas Taban Tablası</strong></td>
    <td>Döküm Al Plaka (ACP 5080)</td>
    <td>Gerilimi Giderilmiş Döküm</td>
    <td>İşlem yok / Naturel Eloksal</td>
    <td>Talaş kaldırırken kesinlikle çarpılmaz, düzlemsel.</td>
  </tr>
  <tr>
    <td><strong>Genel Konveyör Mili</strong></td>
    <td>C45E (+C Soğuk Çekilmiş)</td>
    <td>Normalize / Soğuk Çekme</td>
    <td>Rulman yerleri taşlama (h6/k5)</td>
    <td>İşlenebilir, ucuz, hazır h9 toleransında çubuk.</td>
  </tr>
  <tr>
    <td><strong>Ağır Hizmet Servo Mili</strong></td>
    <td>42CrMo4 (1.7225)</td>
    <td>+QT Islahlı (30 HRC)</td>
    <td>Kimyasal Nikel (opsiyonel)</td>
    <td>Yüksek burulma mukavemeti ve dinamik yorulma sınırı.</td>
  </tr>
  <tr>
    <td><strong>Hassas Düz/Helis Dişli</strong></td>
    <td>16MnCr5 (1.7131)</td>
    <td>Sementasyon (58–62 HRC)</td>
    <td>Diş yanakları taşlama</td>
    <td>Yüzey aşınmaz, çekirdek darbeyi çatlamadan emer.</td>
  </tr>
  <tr>
    <td><strong>Hafif Robotik Taşıyıcı</strong></td>
    <td>EN AW-6082 T651</td>
    <td>Yapay Yaşlandırılmış + Gerdirilmiş</td>
    <td>Dekoratif Eloksal (15 µm)</td>
    <td>Düşük atalet momenti, mükemmel rijitlik/kütle oranı.</td>
  </tr>
  <tr>
    <td><strong>Yüksek Yüklü Gripper Parmak</strong></td>
    <td>EN AW-7075 T651</td>
    <td>T651 Havacılık Durumu</td>
    <td>Sert Eloksal (Tip III 40 µm)</td>
    <td>S235 çeliğinden yüksek akma mukavemeti (480 MPa).</td>
  </tr>
  <tr>
    <td><strong>Hassas Fikstür Konum Pimi</strong></td>
    <td>1.2842 (O2 Soğuk İş Çeliği)</td>
    <td>Sertleştirilmiş 58–60 HRC</td>
    <td>Silindirik Taşlama (m6/h6)</td>
    <td>Aşınmaz, referans merkezleme hassasiyetini korur.</td>
  </tr>
  <tr>
    <td><strong>Folyo / Kağıt Kesme Bıçağı</strong></td>
    <td>1.2379 (D2 Soğuk İş Çeliği)</td>
    <td>Vakum Sertleştirme (60 HRC)</td>
    <td>Bileme ve Taşlama</td>
    <td>Krom karbürleri sayesinde körelmez, aşınmaz.</td>
  </tr>
  <tr>
    <td><strong>Konveyör Aşınma Kızağı</strong></td>
    <td>PE-UHMW (PE 1000)</td>
    <td>Doğal Polimer Halde</td>
    <td>İşlem yok</td>
    <td>Sürtünme katsayısı çok düşük, paslanmaz çelikten dayanıklı.</td>
  </tr>
  <tr>
    <td><strong>Kaymalı Yatak Burcu</strong></td>
    <td>POM-C (Delrin)</td>
    <td>Talaşlı İmalat</td>
    <td>İşlem yok</td>
    <td>Nemden şişmez, boyutsal kararlı, yağlamasız kayar.</td>
  </tr>
  <tr>
    <td><strong>Mekanik Darbe Tamponu</strong></td>
    <td>Poliüretan (PU 90 Shore A)</td>
    <td>Döküm Elastomer</td>
    <td>İşlem yok</td>
    <td>Dinamik darbe enerjisini yutar, kalıcı ezilmez.</td>
  </tr>
  <tr>
    <td><strong>Hücre Koruma Camı</strong></td>
    <td>Polikarbonat (PC 5–6 mm)</td>
    <td>Ekstrüzyon Levha</td>
    <td>Çizilmez kaplamalı</td>
    <td>Kırılmaz (Camdan 250 kat tok), operatörü korur.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Genç Mekatronik ve Makine Tasarımcılarının Yaptığı 10 Kritik Hata</h2>
<ol>
  <li><strong>Rijitlik İçin Pahalı Alaşımlı Çelik Seçmek:</strong> Esneyen bir konsol için "S235 yerine 42CrMo4 yapalım" demek. İki çeliğin de Elastisite Modülü E = 210 GPa'dır; aynı yükte birebir aynı miktarda esner! Sehim sorununu malzeme değil <strong>kesit ataleti (h³)</strong> çözer.</li>
  <li><strong>Haddelenmiş Alüminyum Levhayı Boşaltıp Çarpıtmak:</strong> 6082-T6 levhadan tek taraflı derin havuz boşaltıp parçanın muz gibi bükülmesine şaşırmak. Düzlemsel plakalarda iç gerilmesi sıfır olan <strong>döküm alüminyum plaka (ACP 5080)</strong> kullanılmalıdır.</li>
  <li><strong>Paslanmaz Bağlantı Elemanlarını Kuru Sıkmak:</strong> A2/A4 cıvataları tork tabancasıyla hızla sıkıp soğuk kaynakla (galling) kilitlemek ve cıvatayı kırmak. Dişlere mutlaka <strong>anti-seize montaj pastası</strong> sürülmelidir.</li>
  <li><strong>Makine Güvenlik Kabininde Pleksiglas (PMMA) Kullanmak:</strong> Darbede şangırdayıp jilet gibi etrafa saçılan akrilik cam takmak. İş güvenliği (EN ISO 14120) gereği daima kırılmaz <strong>Polikarbonat (PC)</strong> kullanılmalıdır.</li>
  <li><strong>Alüminyum Gövdeye Kısa Diş Açmak:</strong> M6 cıvatayı 6 mm alüminyum dişe bağlayıp ilk torkta dişleri sıyırmak. Alüminyumda kavrama boyu en az <strong>2×d (M6 için 12 mm)</strong> olmalı veya <strong>Helicoil çelik burç</strong> kullanılmalıdır.</li>
  <li><strong>Siyah Oksiti Korozyon Kalkanı Zannetmek:</strong> Karartılmış çeliği ıslak veya nemli ortama koyup 3 günde pas içinde bırakmak. Siyah oksit tek başına pas koruması sağlamaz, parça yağlı kalmalıdır.</li>
  <li><strong>Kaplama Kalınlığını Toleranstan Düşmemek:</strong> Rulman yuvasına H7 toleransı verip üzerine 25 µm sert eloksal attırmak; montajda rulman yuvasının 50 µm daraldığını görüp parçayı hurdaya ayırmak.</li>
  <li><strong>Nemli Ortamda Paslanmaz ile Alüminyumu Çıplak Birleştirmek:</strong> Galvanik pil etkisiyle alüminyumun aylar içinde beyaz toza dönüşerek erimesine sebep olmak. Araya <strong>poliamid izolasyon pulu</strong> konulmalıdır.</li>
  <li><strong>Kaynaklı Şaseyi Gerilim Gidermeden CNC'de İşlemek:</strong> Tezgâhtan inen şasede kaynak artık gerilmeleri gevşeyince ray montaj yüzeylerinin çarpıldığını görmek.</li>
  <li><strong>Hassas Yatak Burcunu Poliamidden (PA6) İmal Etmek:</strong> Yazın nemli fabrikada su emip %1 şişen ve mili kilitleyen naylon burçlar kullanmak. Hassas kayıcılarda daima su emmeyen <strong>POM-C (Delrin)</strong> seçilmelidir.</li>
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
    <td><strong>Direnç Optimizasyonu</strong></td>
    <td>Mekanik parçanın hem statik akma, hem dinamik yorulma, hem de elastik rijitlik kriterlerini minimum ağırlık ve maliyetle karşılayacak malzeme-geometri dengesi.</td>
  </tr>
  <tr>
    <td><strong>Özgül Mukavemet / Rijitlik</strong></td>
    <td>Malzemenin mukavemetinin veya elastisite modülünün özkütlesine oranı (E / ρ). Dinamik eksenlerde hareketli kütlenin ataletini minimize etmede ana performans indeksi.</td>
  </tr>
  <tr>
    <td><strong>Kavrama Boyu (Engagement Length)</strong></td>
    <td>Cıvatanın gövdedeki dişe girdiği eksenel derinlik. Çelikte 1×d, dökme demirde 1,5×d, alüminyum ve yumuşak metallerde en az 2×d olmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Maskeleme</strong></td>
    <td>Kaplama veya boya prosesi öncesinde toleranslı deliklerin, dişlerin ve taşlanmış temas yüzeylerinin koruyucu silikon tapalar veya bantlarla izole edilmesi işlemi.</td>
  </tr>
  <tr>
    <td><strong>Bimetal Etkisi</strong></td>
    <td>Farklı ısıl genleşme katsayılarına sahip iki malzemenin (ör. çelik ray ile alüminyum kiriş) sıcaklık değişiminde birbirini zorlayarak yapıyı eğrilmesi mekanizması.</td>
  </tr>
  <tr>
    <td><strong>DFM (İmalat İçin Tasarım)</strong></td>
    <td>Design for Manufacturing. Parçanın geometrisini ve malzemesini seçerken mevcut tezgâh kabiliyetlerini, standart stok hammadde ölçülerini ve montaj kolaylığını gözetme disiplini.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Modül 1 Kapanış Özeti</h3>
<ul>
  <li>Mekanik tasarımda malzeme seçimi fonksiyon, imalat kolaylığı ve maliyet dengesidir.</li>
  <li>Endüstriyel otomasyonda standart parçaların %80'i <strong>S235JR çelik, 6082 alüminyum, C45 mil ve POM plastik</strong> ile çözülür.</li>
  <li>Kritik görevler için <strong>1.2379 bıçak, 42CrMo4 ağır mil, 16MnCr5 dişli ve 316L hijyen paslanmazı</strong> doğru ısıl işlem parametreleriyle kullanılmalıdır.</li>
  <li>Malzeme rijitliği değiştirmez; sehim sorunları daima kesit geometrisi ve takviyelerle çözülür.</li>
  <li>Kaplama kalınlığı, korozyon pil etkisi ve montaj toleransları tasarım aşamasında teknik resme doğru yansıtılmalıdır.</li>
</ul></div>

<div class="test"><h3>Büyük Modül 1 Sınavı</h3>
<details><summary>Soru 1: 3 eksenli bir kartezyen robotun X köprüsü 2500 mm açıklıktadır ve ortasında 4 m/s² ivmeyle hareket eden 40 kg'lık bir Y ekseni taşımaktadır. Tasarımcı alüminyum sigma profil kullanmış ve profil dinamik ivmelenmede 1,5 mm sehim yapmıştır. Tasarımcı profil malzemesini 7075-T651'e çevirmek istiyor. Bu kararı onaylar mısınız? Neden ve doğru çözüm nedir?</summary>
<div>Kesinlikle reddedilmelidir! 6063 profil ile 7075-T651 malzemenin Elastisite Modülü tamamen aynıdır (E ≈ 70 GPa). Dolayısıyla sehim bir mikron bile değişmez, yine 1,5 mm kalır; üstelik maliyet 3 katına çıkar. Doğru çözüm: Kesit atalet momentini (I) artırmaktır. Profil kesitini büyütmek (örneğin 80x80 yerine 80x160 dik koymak), çelik kutu profile geçmek (E çelikte 3 kat büyüktür: 210 GPa) veya köprü altına üçgen kafes kiriş takviyesi eklemektir.</div></details>
<details><summary>Soru 2: Medikal bir dolum istasyonunda günde iki kez sıcak kostik soda ve asidik temizleyicilerle CIP yıkaması yapılmaktadır. Tasarımcı maliyeti düşürmek için gövde plakalarını AISI 304, cıvataları ise elektrolitik galvanizli 8.8 çelik cıvata seçmiştir. Bu montaj sahada ne tür arızalar yaratır?</summary>
<div>İki ölümcül hata vardır: (1) Asidik ve agresif kimyasal CIP yıkaması altında AISI 304 paslanmaz çeliği klorür kaynaklı çukurcuk (pitting) korozyonuna uğrar ve delinir; Molibdenli AISI 316L (1.4404) seçilmelidir. (2) Devasa paslanmaz gövdeye bağlanan küçük galvanizli cıvatalar "küçük anot / devasa katot" pil etkisi oluşturur; kostik sıvı elektrolit görevi görerek cıvataların çinko kaplamasını ve çelik gövdesini birkaç hafta içinde eritip cıvataların kopmasına yol açar. Cıvatalar da A4-80 paslanmaz çelik olmalıdır.</div></details>
<details><summary>Soru 3: 42CrMo4 malzemeden işlenmiş bir servo motor milinin rulman oturma çapı Ø30 k5 (+0,011 / +0,002 mm) toleransındadır. Teknik resme "Tüm yüzeyler 20 µm Kimyasal Nikel Kaplama Yapılacak" yazılmıştır. Parça fırından çıktığında rulman takılamamıştır. Tolerans analiziyle hatayı açıklayınız.</summary>
<div>Kimyasal nikel silindirik mil yüzeyine radyal yönde her iki taraftan 20'şer mikron biner; bu da mil çapında tam <strong>ΔØ = 2 · 20 µm = 40 µm (+0,040 mm) büyüme</strong> yaratır. k5 toleransındaki milin çapı [30,002 – 30,011] aralığından [30,042 – 30,051] mm aralığına fırlar. Rulman iç bileziği bu aşırı sıkılıkta mile çakılamaz, zorlanırsa rulman bileziği çatlar. Teknik resme "Ölçüler kaplama sonrası nihai ölçüdür, kaplama öncesi çap 40 µm küçük işlenecektir" notu yazılmalı ya da rulman oturma çapı kaplama öncesinde maskelenmelidir.</div></details>
</div>
`);
