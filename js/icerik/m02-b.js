// MODÜL 2 — İmalat Yöntemleri ve DFM (Bölüm 2.5 – 2.7: Sac Metal, Kaynaklı İmalat, Döküm ve Dövme)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m2', '2-5', `
<p class="giris">Endüstriyel otomasyon makinelerinin gövde muhafazaları, şase takviye braketleri, kablo taşıyıcı kanalları ve sensör montaj konsollarının %70'inden fazlası sac metal parçalardan üretilir. Sac metal tasarımı, CAD ekranında 2 mm kalınlığında düzlemsel bir sacı 90° açıyla sanal olarak bükmekten ibaret değildir. Sac bükülürken dış lifler plastik çekme uzamasına uğrar, iç lifler ise basma gerilmesi altında ezilir; malzemenin toplam açınım uzunluğu değişir. Eğer <strong>K-Faktörünü, Büküm Payını (Bend Allowance) ve Büküm Düşmesini (Bend Deduction)</strong> doğru metalurjik parametrelerle hesaplamazsanız, abkant presten çıkan sac parçanın montaj delikleri makine şasesini asla karşılamaz. Bu bölümde sac büküm mekaniğini, K-faktörü fiziğini ve DFM kurallarını inceliyoruz.</p>

<h2>Plastik Büküm Mekaniği ve Nötr Eksen Kayması</h2>
<p>Düz bir sac levha abkant pres zımbası (punch) ile alt kalıp (V-die) arasına basıldığında elastoplastik bükülme gerçekleşir:</p>
<ul>
  <li><strong>İç Yarıçap Lifleri:</strong> Şiddetli basma gerilmesine (compression) maruz kalarak plastik olarak kısalır ve kalınlaşır.</li>
  <li><strong>Dış Yarıçap Lifleri:</strong> Şiddetli çekme gerilmesine (tension) maruz kalarak uzar ve incelir.</li>
  <li><strong>Nötr Eksen (Neutral Axis):</strong> Sac kesiti içinde gerilmenin ve birim boy değişiminin sıfır (σ = 0, ε = 0) olduğu teorik lif düzlemidir. Düz sacda tam ortada (T/2 derinliğinde) yer alan bu eksen, büküm anındaki plastik basma deformasyonunun baskınlığı sebebiyle <strong>sacın iç yüzeyine doğru kayar</strong>.</li>
</ul>

<div class="formul">
K = t' / T &nbsp;&nbsp;&nbsp;&nbsp; (K-Faktörü Tanımı)
<small>t': Nötr eksenin sacın iç yüzeyine olan mesafesi [mm], T: Sac et kalınlığı [mm]. Düz sacda K = 0,50'dir; hava bükümünde K tipik olarak <strong>0,33 ila 0,45</strong> arasına geriler.</small>
</div>

<h2>Büküm Açınımının Matematiksel Hesabı (BA ve BD)</h2>
<p>Sacın açınımındaki kavisli büküm yay uzunluğu <strong>Bend Allowance (BA)</strong> bağıntısıyla hesaplanır:</p>

<div class="formul">
BA = ( π / 180 ) · θ · ( R<sub>i</sub> + K · T ) &nbsp;&nbsp;[mm]
<small>θ: Büküm açısı [Derece], R<sub>i</sub>: Büküm iç radyüsü [mm], T: Sac kalınlığı [mm], K: Malzeme K-faktörü</small>
</div>

<p>Abkant operatörünün ve CAM yazılımlarının kullandığı <strong>Büküm Düşmesi (Bend Deduction - BD)</strong> ve Toplam Açınım Boyu (L<sub>açınım</sub>):</p>
<div class="formul">
OSSB = tan( θ / 2 ) · ( R<sub>i</sub> + T ) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
BD = 2 · OSSB − BA &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
L<sub>açınım</sub> = Flanş₁ + Flanş₂ − BD
<small>OSSB: Dış Geri Çekilme (Outside Set Back), BD: Büküm Düşmesi (Bend Deduction)</small>
</div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Standart Sınıfı</th>
    <th>Sac Kalınlığı (T)</th>
    <th>Hava Bükümü İç Radyüsü (R<sub>i</sub>)</th>
    <th>Önerilen K-Faktörü</th>
    <th>Alt Kalıp V Açıklığı (V-Die)</th>
    <th>Geri Esneme (Springback) Açısı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Soğuk Haddelenmiş Sac (DC01 / St12)</strong></td>
    <td>1,0 – 2,0 mm</td>
    <td>R<sub>i</sub> ≈ 1,0 · T</td>
    <td><strong>0,38 – 0,42</strong></td>
    <td>V = 6 ila 8 × T</td>
    <td>1° – 2° (Düşük)</td>
  </tr>
  <tr>
    <td><strong>Genel Yapı Çeliği Sacı (S235JR)</strong></td>
    <td>3,0 – 6,0 mm</td>
    <td>R<sub>i</sub> ≈ 1,2 · T</td>
    <td><strong>0,40 – 0,44</strong></td>
    <td>V = 8 ila 10 × T</td>
    <td>2° – 3°</td>
  </tr>
  <tr>
    <td><strong>Östenitik Paslanmaz (AISI 304)</strong></td>
    <td>1,5 – 3,0 mm</td>
    <td>R<sub>i</sub> ≈ 1,5 · T</td>
    <td><strong>0,42 – 0,45</strong></td>
    <td>V = 8 ila 10 × T</td>
    <td><strong>3° – 5° (Yüksek pekleşme!)</strong></td>
  </tr>
  <tr>
    <td><strong>Alüminyum Sac (EN AW-5754 H111)</strong></td>
    <td>2,0 – 4,0 mm</td>
    <td>R<sub>i</sub> ≈ 1,5 · T</td>
    <td><strong>0,35 – 0,39</strong></td>
    <td>V = 6 ila 8 × T</td>
    <td>2° – 4°</td>
  </tr>
</tbody>
</table>
</div>

<h2>Abkant Pres İçin Geometrik Tasarım Kuralları (DFM)</h2>

<h3>1. Minimum Büküm Flanş Boyu (b<sub>min</sub>)</h3>
<p>Sac bükülürken alt kalıp V kanalının iki omzuna sağlam oturmalı ve kanal içine düşmemelidir:</p>
<div class="formul">
b<sub>min</sub> ≥ ( V / 2 ) + R<sub>i</sub> + 2 mm &nbsp;&nbsp;&nbsp;&nbsp; (Pratik Atölye Kuralı: <strong>b<sub>min</sub> ≥ 4 · T</strong>)
</div>
<p><em>Örnek: 3 mm kalınlığında çelik sac için büküm flanşı en az 4 × 3 = 12 mm olmalıdır. 6 mm flanş çizilirse sac V kanalının içine kayar ve açı tutturulamaz.</em></p>

<h3>2. Büküm Çizgisine Yakın Delikler ve Ovalleşme Riski</h3>
<p>Büküm bölgesindeki yerel plastik akma hattına çok yakın konumlandırılan montaj delikleri eksenel çekme gerilmesiyle daireselliğini kaybederek yumurta gibi ovalleşir:</p>
<div class="formul">
L<sub>min-mesafe</sub> ≥ 2,5 · T + R<sub>i</sub> &nbsp;&nbsp;[mm]
<small>Büküm tanjant çizgisinden deliğin en yakın dış kenarına olan minimum emniyet mesafesi</small>
</div>
<div class="kutu ipucu"><span class="kb">Delik Mecburen Büküme Yakın Olmak Zorundaysa?</span>
Delik kenarı ile büküm çizgisi arasına lazer kesim aşamasında ince bir <strong>yırtma yarığı (relief slot)</strong> açılır. Büküm gerilimi bu boşlukta son bulur ve deliğe ulaşamaz; delik tam dairesel kalır.</div>

<h3>3. Büküm Rahatlatma Çentiği (Bend Relief)</h3>
<p>Bir sac parçanın sadece belirli bir flanşı bükülüp komşu bölgesi düz kalacaksa, iki yüzeyin kesiştiği köşe noktasında yırtılma gerilmeleri oluşur:</p>
<ul>
  <li>Büküm kenarına genişliği <code>b ≥ T</code> ve derinliği <code>h ≥ R<sub>i</sub> + T</code> olan dikdörtgen veya dairesel bir <strong>yırtılma rahatlatma çentiği (Bend Relief)</strong> eklenmelidir.</li>
  <li>Rahatlatma çentiği konulmazsa sac bükülürken malzeme köşeden kontrolsüzce yırtılır ve çapak oluşur.</li>
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
    <td><strong>K-Faktörü</strong></td>
    <td>Büküm sırasında sac kesiti içindeki gerilmesiz nötr eksenin iç yüzeye olan mesafesinin toplam sac et kalınlığına oranı (K = t' / T). Malzemenin açınım boyunu belirler.</td>
  </tr>
  <tr>
    <td><strong>Bend Allowance (BA)</strong></td>
    <td>Büküm yay bölgesi boyunca nötr eksen üzerinde ölçülen teorik kavis yay uzunluğu [mm].</td>
  </tr>
  <tr>
    <td><strong>Bend Deduction (BD)</strong></td>
    <td>Büküm düşmesi. İki flanşın dış tepe ölçüleri toplamından gerçek açınım boyunun çıkarılmasıyla elde edilen düzeltme değeri (BD = 2·OSSB − BA).</td>
  </tr>
  <tr>
    <td><strong>Bend Relief (Rahatlatma Çentiği)</strong></td>
    <td>Lokal bükümlerde sacın bükülen kısmı ile sabit kalan kısmı arasındaki gerilme yığılmasını ve malzeme yırtılmasını engellemek için açılan dikdörtgen/yuvarlak köşe yarığı.</td>
  </tr>
  <tr>
    <td><strong>Hava Bükümü (Air Bending)</strong></td>
    <td>Zımbanın sacı alt V kalıbının dibine oturtmadan, sadece derinlik kontrolüyle serbest havada bükme yöntemi. Düşük pres tonajı ve farklı açılara esneklik sağlar.</td>
  </tr>
  <tr>
    <td><strong>Geri Esneme (Springback)</strong></td>
    <td>Büküm zımbası kalktığında sacın elastik liflerinin gerilimi boşaltarak büküm açısını 1° ila 5° arasında dışarı doğru geri açması olayı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Sac bükümünde nötr eksen içeri kayar; açınım boyu K-faktörü ve büküm payı (BD) ile doğru hesaplanmalıdır.</li>
  <li>Minimum büküm flanş boyu alt kalıptan kaymayı önlemek için en az 4 kat sac kalınlığı olmalıdır (b<sub>min</sub> ≥ 4·T).</li>
  <li>Deliklerin ovalleşmesini önlemek için büküm çizgisine en az <code>2,5 · T + R<sub>i</sub></code> mesafe bırakılmalıdır.</li>
  <li>Lokal bükümlerde sac yırtılmasını engellemek amacıyla köşelere mutlaka <strong>bend relief</strong> çentikleri eklenmelidir.</li>
  <li>Geri esneme miktarı paslanmaz çeliklerde karbon çeliğinden 2 kat daha fazladır; abkantta kompanze edilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>2 mm kalınlığında DKP sacdan bükülecek bir U profilde montaj deliği büküm çizgisine 3 mm mesafede çizilmiştir. Parça abkanttan çıktığında ne hata gözlenir?</summary>
<div>Delik deforme olarak ovalleşir (bükümün plastik akma bölgesi deliği çekerek uzatır). Cıvata delikten geçmez ve montaj kilitlenir. Kurala göre deliğin büküm tanjantına mesafesi en az <code>2,5 · T + R<sub>i</sub> = 2,5 · 2 + 2 = 7 mm</code> olmalıydı. Çözüm: Delik bükümden uzaklaştırılmalı ya da büküm ile delik arasına lazerle ince bir yırtma yarığı (relief slot) açılmalıdır.</div></details>
<details><summary>CAD programında sac büküm açınımı hesaplanırken K-faktörü varsayılan 0,50 (tam ortada) bırakılırsa lazer kesim sacı sahada nasıl bir hata verir?</summary>
<div>Gerçekte nötr eksen içe kaydığı için (K ≈ 0,38–0,42), K=0,50 seçilirse yazılım büküm yayını olduğundan daha uzun hesaplar ve açınım sacı büyük çıkar. Parça abkantta büküldüğünde dış flanş boyları hedeflenen ölçüden 0,5–1,5 mm daha büyük olur; şasedeki montaj cıvata delik merkezleri eksenden kaçar.</div></details>
<details><summary>Paslanmaz çelik sac bükülürken abkant operatörü neden yumuşak çeliğe göre zımbayı daha fazla aşağı daldırarak aşırı büküm (overbending) yapar?</summary>
<div>Östenitik paslanmaz çelikler (AISI 304) büküm sırasında şiddetli pekleşme gösterir ve akma/çekme oranı hızla yükselir. Bu durum elastik geri esneme (springback) açısını 3°–5° mertebesine çıkarır. Operatör 90° büküm elde etmek için sacı 86°–87° açısına kadar bükmek zorundadır.</div></details>
</div>
`);

KITAP.bolum('m2', '2-6', `
<p class="giris">Kaynak, iki veya daha fazla metal elemanı yerel ergime sıcaklığına ulaştırarak tek bir monolitik taşıyıcı gövdeye dönüştürme işlemidir. Ancak kaynak dikişi atılırken ark bölgesine giren binlerce joule konsantre ısı, katılaşma ve soğuma aşamasında malzemenin termal büzülmesine (çekmesine) ve yapının <strong>muz gibi çarpılmasına (distorsiyon)</strong> yol açar. "Nasılsa kaynakçı kaynatır" zihniyetiyle çizilen şaseler, kaynak bittikten sonra tezgâha bağlandığında ray yüzeylerinin 5–10 mm çarpıldığı görülür. Bu bölümde kaynak yöntemlerini, termomekanik çarpılma dinamiklerini ve gerilim giderme disiplinini inceliyoruz.</p>

<h2>Endüstriyel Kaynak Yöntemleri Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kaynak Prosesi</th>
    <th>Isı Girdisi (Heat Input)</th>
    <th>İlerleme Hızı ve Verim</th>
    <th>Distorsiyon Seviyesi</th>
    <th>Cüruf Temizliği</th>
    <th>Otomasyondaki Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>MIG / MAG (GMAW - Gazaltı)</strong><br><small>Sürekli tel sürmeli, Ar/CO₂ koruyucu gaz</small></td>
    <td>Orta</td>
    <td><strong>Çok Yüksek</strong></td>
    <td>Orta</td>
    <td>Minimum (Sıçrantı temizliği)</td>
    <td><strong>Otomasyon şaselerinin %90'ı!</strong> Çelik profiller, kalın montaj plakaları, robot hücre karkasları.</td>
  </tr>
  <tr>
    <td><strong>TIG (GTAW - Argon Kaynağı)</strong><br><small>Erimeyen tungsten elektrotlu</small></td>
    <td>Yüksek (Düşük ilerleme hızı)</td>
    <td>Düşük</td>
    <td>Yüksek (Isı geniş alana yayılır)</td>
    <td><strong>SIFIR (Mükemmel metalurjik temizlik)</strong></td>
    <td><strong>Paslanmaz çelik gıda ve ilaç tankları</strong>, ince cidarlı alüminyum borular, estetik görünür dikişler.</td>
  </tr>
  <tr>
    <td><strong>MMA / Elektrot (SMAW)</strong><br><small>Örtülü elektrot ark kaynağı</small></td>
    <td>Değişken</td>
    <td>Düşük</td>
    <td>Orta – Yüksek</td>
    <td>Yoğun cüruf (Çekiçle kırılır)</td>
    <td>Açık hava şantiyeleri, rüzgarlı saha montajları. Fabrika içi hassas makine imalatında kullanılmaz.</td>
  </tr>
  <tr>
    <td><strong>Lazer Kaynağı (Laser Beam)</strong><br><small>Konsantre foton demeti</small></td>
    <td><strong>Çok Düşük (Noktasal)</strong></td>
    <td><strong>Aşırı Hızlı</strong></td>
    <td><strong>MİNİMUM (Neredeyse sıfır çarpılma!)</strong></td>
    <td>Sıfır</td>
    <td>Otomotiv gövde sacları, hassas batarya paketleri, hermetik sensör gövdeleri. Tezgâh yatırım maliyeti çok yüksektir.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Kaynak Çarpılması (Distorsiyon) Mekanizması ve Önleme Taktikleri</h2>
<p>Ergimiş kaynak havuzu katılaşırken yaklaşık <strong>%3 ila %5 oranında hacimsel büzülme (çekme)</strong> yaşar. Çevresindeki soğuk ana metal bu büzülmeye direnç gösterdiğinde dikiş ekseninde akma sınırını aşan devasa çekme gerilmeleri oluşur:</p>

<div class="iki-sutun">
  <div>
    <h4>1. Açısal Deformasyon (Angular Distortion)</h4>
    <p>Tek taraflı V dikişinde üstteki kaynak hacmi alttan çok fazladır; dikiş soğurken kanatları yukarı doğru büzer (V açısı kapanmaya çalışır).</p>
    <ul>
      <li><strong>Tasarım Önlemi:</strong> Tek taraflı kalın V dikişi yerine <strong>çift taraflı simetrik X dikişi</strong> kullanın; çekme kuvvetleri birbirini dengelesin.</li>
      <li>Kaynaktan önce parçaya ters açı verin (Pre-setting).</li>
    </ul>
  </div>
  <div>
    <h4>2. Boyuna Büzülme ve Kiriş Yaylanması</h4>
    <p>Uzun bir kutu profilin sadece üst yüzeyine sürekli dikiş atılırsa profil yukarı doğru muz gibi yaylanır.</p>
    <ul>
      <li><strong>Tasarım Önlemi:</strong> Kesit nötr eksenine göre simetrik dikiş atın.</li>
      <li>Sürekli boydan boya kaynak yerine <strong>kesikli (adım adım / zincir) dikiş</strong> uygulayın.</li>
      <li>Aşırı kaynak dikiş kalınlığından (over-welding) kaçının! Köşe kaynakta boğaz yüksekliği <code>a ≈ 0,7 · t</code> yeterlidir.</li>
    </ul>
  </div>
</div>

<h2>Hassas Makine Şaselerinde Kaynak Sonrası İmalat Sıralaması</h2>
<p>Lineer rayların ve rulman yataklarının cıvatalanacağı yüzeylere sahip bir kaynaklı otomasyon karkasında uygulanması <strong>zorunlu mühendislik proses zinciri</strong>:</p>

<div class="formul">
1. Profil Kesim ve Çatma (Punto Kaynakları) &nbsp;→&nbsp; 
2. Asıl Kaynak (Simetrik ve Kademeli Pasolarla) &nbsp;→&nbsp; 
3. <strong>GERİLİM GİDERME TAVI (580–620 °C)</strong> &nbsp;→&nbsp; 
4. Kumlama ve Epoksi Astar Boya &nbsp;→&nbsp; 
5. <strong>CNC PORTAL FREZEDE TEK BAĞLAMADA HASSAS İŞLEME</strong>
</div>

<div class="kutu tehlike"><span class="kb">Gerilim Giderme Yapılmazsa Ne Olur?</span>
Kaynaklı şase tav fırınına sokulmadan doğrudan CNC'de işlenirse; işleme sırasında yüzeydeki gerilmeler gevşer, parça tezgâhtan söküldüğü an yaylanır. Aylar sonra sahada titreşim ve sıcaklık farklarıyla iç gerilmeler tamamen boşaldığında şase 0,2–0,5 mm çarpılır; lineer raylar sıkışır ve servo sürücüler aşırı akım (overcurrent) arızası verir!</div>

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
    <td><strong>Isı Girdisi (Heat Input - Q)</strong></td>
    <td>Kaynak arkı tarafından birim dikiş uzunluğuna aktarılan termal enerji [kJ/mm]. Q = η · (U · I · 60) / (v · 1000). Çarpılmanın ana kaynağıdır.</td>
  </tr>
  <tr>
    <td><strong>ITAB / HAZ</strong></td>
    <td>Isı Tesiri Altındaki Bölge. Ergime sınırının hemen yanında mikroyapısı aşırı ısıyla değişen, kaba taneli ve çatlamaya en duyarlı geçiş katmanı.</td>
  </tr>
  <tr>
    <td><strong>Boğaz Kalınlığı (a-Ölçüsü)</strong></td>
    <td>Köşe kaynak dikişinde dikiş kökü ile dikiş yüzeyi arasındaki en kısa dik mesafe. Mekanik mukavemet hesaplarında esas alınan kesit alanı.</td>
  </tr>
  <tr>
    <td><strong>PWHT (Gerilim Giderme Tavı)</strong></td>
    <td>Post Weld Heat Treatment. Kaynaklı yapıyı 580–620 °C'ye ısıtıp fırında yavaş soğutarak artık çekme gerilmelerini mikroyapıyı bozmadan sıfırlama işlemi.</td>
  </tr>
  <tr>
    <td><strong>Simetrik X Dikişi</strong></td>
    <td>Kalın plakaların birleşiminde dikişin her iki tarafa eşit dağıtıldığı, açısal çarpılma momentlerini birbirine sıfırlatan kaynak ağzı formu.</td>
  </tr>
  <tr>
    <td><strong>Distorsiyon (Kaynak Çarpılması)</strong></td>
    <td>Ergiyen kaynak havuzunun katılaşırken hacimce büzülmesi ve heterojen sıcaklık dağılımı sonucu yapının geometrik formunun bozulması.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Otomasyon şaselerinde standart yöntem <strong>MIG/MAG (Gazaltı)</strong> kaynağıdır; paslanmaz ve alüminyumda <strong>TIG</strong> kullanılır.</li>
  <li>Kaynak metali katılaşırken %3–5 büzülür; simetrik dikiş dağılımı ve kesikli kaynak distorsiyonu minimize eder.</li>
  <li>Gereğinden kalın dikiş atmak mukavemeti artırmaz; sadece ısı girdisini ve çarpılmayı katlar.</li>
  <li>Hassas ray montaj yüzeyine sahip şaseler CNC işlemeden önce mutlaka <strong>gerilim giderme tavı (580–620 °C)</strong> görmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kaynaklı bir robot şasesinde lineer ray oturma yüzeylerini kaynaktan önce CNC'de hassasça işleyip sonra parçaları kaynatsak ne olur?</summary>
<div>Kaynak sırasında açığa çıkan binlerce joule ısı tüm şaseyi asimetrik olarak çarpıtır. Önceden mikron toleransında işlenen ray kanalları bükülür; düzlemsellik ve paralellik tamamen kaybolur. İşleme operasyonu istisnasız kaynak ve gerilim giderme tavından SONRA yapılmalıdır.</div></details>
<details><summary>İki kalın çelik plakayı alın alına birleştirirken neden tek taraflı V dikişi yerine çift taraflı X dikişi tercih edilir?</summary>
<div>Tek taraflı V dikişinde üstteki kaynak hacmi alttan çok fazladır; dikiş soğurken plakaları yukarı doğru V yönünde büker. Çift taraflı X dikişinde ise nötr eksenin her iki tarafında eşit miktarda kaynak metali büzüldüğü için açısal bükülme momentleri birbirini dengeler ve çarpılma önlenir.</div></details>
<details><summary>Köşe kaynakta dikiş boğaz yüksekliğini (a) plaka kalınlığından büyük yapmak neden tehlikelidir?</summary>
<div>Aşırı kalın kaynak dikişi parçaya lüzumsuz devasa bir ısı girdisi (heat input) sokar; ITAB bölgesini aşırı genişletir, artık çekme gerilmelerini tavan yaptırır ve şaseyi kontrolsüz biçimde büker. Standart köşe dikişlerinde <code>a ≈ 0,7 · t</code> kuralı statik ve dinamik mukavemet için tamamen yeterlidir.</div></details>
</div>
`);

KITAP.bolum('m2', '2-7', `
<p class="giris">Talaşlı imalatla devasa bir dolu çelik kütüğün %80'ini talaşa çevirerek çöpe atmak veya karmaşık geometrileri onlarca parçaya bölüp kaynakla birleştirmeye çalışmak yüksek adetli üretimde ekonomik bir intihardır. İç boşluklara, karmaşık akış kanallarına ve yüksek titreşim sönümüne ihtiyaç duyulduğunda <strong>Döküm Teknolojileri</strong>; aşırı dinamik şoklara, yorulmaya ve kırılma tokluğuna maruz kalan parçalarda ise <strong>Dövme (Forging)</strong> prosesi devreye girer. Bu bölümde döküm yöntemlerini, et kalınlığı homojenliğini ve dövme çeliğin mikroyapısal elyaf üstünlüğünü inceliyoruz.</p>

<h2>Döküm Yöntemleri Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Döküm Teknolojisi</th>
    <th>Kalıp Tipi ve Malzemesi</th>
    <th>Boyut Toleransı ve Yüzey (Ra)</th>
    <th>Ekonomik Seri Üretim Adedi</th>
    <th>Uygun Malzeme Grupları</th>
    <th>Tipik Endüstriyel Parçalar</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kum Döküm (Sand Casting)</strong></td>
    <td>Tek kullanımlık reçineli kum kalıp</td>
    <td>Kaba (Ra 6,3 – 12,5 µm)<br>Tolerans: ±1,0 – 3,0 mm</td>
    <td><strong>1 – 500 adet (Düşük adetler için ideal)</strong></td>
    <td>Gri Dökme Demir (GJL), Sfero (GJS), Alüminyum, Döküm Çelik</td>
    <td>Büyük takım tezgahı kolonları, ağır redüktör gövdeleri, pompa salyangozları.</td>
  </tr>
  <tr>
    <td><strong>Kokil Döküm (Permanent Mold)</strong></td>
    <td>Yeniden kullanılabilir çelik kalıp (Yerçekimiyle dolum)</td>
    <td>İyi (Ra 3,2 – 6,3 µm)<br>Tolerans: ±0,3 – 0,8 mm</td>
    <td>1.000 – 10.000 adet</td>
    <td>Alüminyum, Bronz, Pirinç alaşımları</td>
    <td>Otomotiv fren kaliperleri, hidrolik manifold blokları, hava kompresörü gövdeleri.</td>
  </tr>
  <tr>
    <td><strong>Basınçlı Döküm (HPDC)</strong></td>
    <td>Yüksek basınçlı (300–1000 bar) çelik kalıp enjeksiyonu</td>
    <td><strong>Çok İyi (Ra 0,8 – 1,6 µm)<br>Tolerans: ±0,05 – 0,1 mm</strong></td>
    <td><strong>&gt; 10.000+ adet (Kalıp maliyeti çok yüksektir)</strong></td>
    <td>Alüminyum (AlSi9Cu3), Çinko (Zamak), Magnezyum</td>
    <td>Servo motor gövdeleri, dişli kutusu kapakları, pnömatik valf gövdeleri.</td>
  </tr>
  <tr>
    <td><strong>Hassas Döküm (Investment Casting)</strong></td>
    <td>Mum model üzeri seramik kabuk kaplama</td>
    <td><strong>Mükemmel (Ra 1,6 – 3,2 µm)<br>Tolerans: ±0,1 – 0,2 mm</strong></td>
    <td>50 – 5.000 adet</td>
    <td>Paslanmaz Çelik, Titanyum, Kobalt-Krom alaşımları</td>
    <td>Türbin kanatları, medikal cerrahi tutucular, karmaşık paslanmaz vana gövdeleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Döküm Parça Tasarımının 4 Temel Metalurjik Kuralı</h2>
<ol>
  <li><strong>Eşit Et Kalınlığı Kuralı (Uniform Wall Thickness):</strong> Sıvı metal kalıp içinde soğurken ince et kalınlıkları hızla donar; kalın et kalınlıkları ise geç katılaşır. Sıvı beslemesi kesildiğinde kalın kısımların merkezinde hacimsel çekme boşlukları (<strong>Lunker / Çekme Boşluğu / Porozite</strong>) oluşur. Et kalınlığı geçişleri ani olmamalı, 1:2 oranını aşmayan konik federlerle yumuşatılmalıdır.</li>
  <li><strong>Kalıptan Çıkma Eğimleri (Draft Angle):</strong> Dikey duvarlar kalıptan çıkarılırken sürtünmeyle kalıp yüzeyini parçalamasın diye duvarlara <strong>en az 1° ila 2° çıkma açısı</strong> verilmelidir.</li>
  <li><strong>Keskin Köşelerden Kaçınma:</strong> Bütün iç ve dış köşelere geniş radyüsler (R ≥ T/2) verilmelidir. Keskin köşeler sıvı metal akışında türbülans yaratır ve katılaşırken şiddetli sıcak çatlaklara (hot tearing) yol açar.</li>
  <li><strong>Maça (Core) Azaltımı:</strong> Parçanın içindeki oyukları oluşturmak için kum maçalar gerekir; maça sayısı arttıkça kalıp işçiliği ve temizlik maliyeti katlanır.</li>
</ol>

<h2>Dövme (Forging) Neden Döküm ve Talaşlı İmalattan Üstündür?</h2>
<p>Dökümde malzeme sıvı fazdan kristalleşir ve gözenek riski taşır. Talaşlı imalatta ise haddelenmiş çubuğun metalurjik lifleri kesici takımla kesintiye uğrar. Oysa <strong>Sıcak Dövme</strong> prosesinde:</p>
<ul>
  <li>Isıtılmış kütük yüksek tonajlı pres veya çekiç altında plastik deformasyonla ezilir.</li>
  <li>Metalin içindeki mikroskobik gözenekler ve gaz boşlukları devasa basınçla tamamen kaynaklanır (kapanır).</li>
  <li>En önemlisi: <strong>Kristal elyaf akış çizgileri (grain / fiber flow lines) parçanın dış konturuna paralel olarak kesintisiz akar!</strong></li>
  <li><strong>Mekanik Sonuç:</strong> Dövme parçaların dinamik yorulma mukavemeti ve Charpy darbe tokluğu, dolu çubuktan talaş kaldırılarak üretilmiş parçalara göre <strong>%30 ila %50 daha yüksektir</strong>.</li>
  <li><strong>Tipik Kullanım Alanı:</strong> Krank milleri, biyel kolları, ağır redüktör pinyon milleri, güvenlik mapaları (DIN 580) ve yüksek tonajlı kaldırma kancaları.</li>
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
    <td><strong>Lunker (Çekme Boşluğu)</strong></td>
    <td>Döküm sırasında kalın et kalınlığına sahip bölgelerin sıvı metal beslemesi kesildikten sonra katılaşırken hacimce büzülmesi sonucu merkezde oluşan gözenekli boşluk hasarı.</td>
  </tr>
  <tr>
    <td><strong>Basınçlı Döküm (HPDC)</strong></td>
    <td>High Pressure Die Casting. Erimiş hafif alaşımların (Alüminyum/Zamak) yüksek hidrolik basınçla çelik kalıp kavitelerine saliseler içinde enjekte edildiği seri imalat prosesi.</td>
  </tr>
  <tr>
    <td><strong>Hassas Döküm (Investment)</strong></td>
    <td>Mum modellerin seramik çamurla kaplanıp fırında eritilmesiyle elde edilen dikişsiz kalıplara döküm yapılan, mikron hassasiyetli döküm yöntemi (Kayıp Mum Tekniği).</td>
  </tr>
  <tr>
    <td><strong>Çıkma Açısı (Draft Angle)</strong></td>
    <td>Döküm veya plastik enjeksiyon parçalarının kalıp yüzeyine sürtünüp sıkışmadan serbestçe ayrılabilmesi için dikey duvarlara verilen 1°–2°'lik konik eğim.</td>
  </tr>
  <tr>
    <td><strong>Elyaf Akış Çizgileri (Fiber Flow)</strong></td>
    <td>Dövme işlemi sırasında metalin plastik akışıyla tanelerin parçanın yük taşıma konturuna paralel hizalanması. Dinamik yorulma ve darbe direncini maksimize eder.</td>
  </tr>
  <tr>
    <td><strong>Sıcak Çatlama (Hot Tearing)</strong></td>
    <td>Döküm katılaşmasının son aşamasında metalin büzülmesinin kalıp geometrisi tarafından engellenmesiyle keskin köşelerde oluşan mikroyapısal çatlaklar.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Düşük adetli büyük gövdeler için <strong>kum döküm</strong>; yüksek adetli hassas alüminyum kutular için <strong>basınçlı döküm (HPDC)</strong> seçilir.</li>
  <li>Dökümde lunker (çekme boşluğu) oluşumunu önlemek için et kalınlığı homojen tutulmalı, ani kesit geçişlerinden kaçınılmalıdır.</li>
  <li>Dikey döküm duvarlarına en az 1°–2° kalıptan çıkma açısı (draft angle) verilmelidir.</li>
  <li>Dövme çelikler, kristal elyaf akış çizgilerinin kesilmemesi sayesinde darbeli ve dinamik yorulma yüklerine en dayanıklı malzemedir.</li>
  <li>Güvenlik kancaları, kaldırma mapaları ve yüksek torklu krank milleri dövme prosesiyle üretilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Döküm bir redüktör gövdesinde et kalınlığı aniden 8 mm'den 35 mm'ye çıkan bir flanş birleşimi tasarlanmıştır. Parça ilk darbe yükünde neden bu kavşaktan çatlar?</summary>
<div>35 mm'lik kalın kısım 8 mm'lik ince duvara göre çok daha geç katılaşır. Dış kabuk donarken içteki sıvı metal çekilir ve kalın bölgenin merkezinde gözenekli <strong>lunker (çekme boşluğu)</strong> oluşur. Parça dinamik yük aldığında bu iç boşluk dev bir çatlak başlatıcı (çentik) görevi görerek flanşın aniden kopmasına yol açar. Et kalınlığı geçişi konik federlerle kademeli yumuşatılmalıdır.</div></details>
<details><summary>Ağır bir yük kaldırma kancası neden dökme demirden dökülmez de dövme çelikten üretilir?</summary>
<div>Dökme demir gevrektir; aşırı yük veya ani şok darbesi geldiğinde haber vermeden cam gibi ortadan ikiye kırılır. Dövme çelikte ise kristal elyaf akış çizgileri kanca konturunu kesintisiz takip eder; tokluk tavan yapar ve aşırı yük altında kırılmadan önce plastik olarak bükülerek operatöre görsel uyarı verir.</div></details>
<details><summary>100 adetlik özel bir otomasyon projesinde alüminyum redüktör gövdesi için basınçlı döküm (HPDC) yöntemi neden önerilmez?</summary>
<div>Basınçlı döküm çelik kalıplarının imalatı (sıcak iş takım çeliği, CNC işleme, parlatma, soğutma kanalları) on binlerce euro kalıp yatırımı gerektirir. 100 adetlik bir üretimde bu devasa kalıp maliyeti parça başına bölünürse birim maliyet astronomik olur. 100 adet için kum/kokil döküm veya doğrudan dolu alüminyum kütükten CNC frezeleme yapılmalıdır.</div></details>
</div>
`);
