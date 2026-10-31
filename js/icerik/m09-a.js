/* ========================================================================
   MODÜL 9: MÜHENDİSLİK HESAPLARI (m09-a.js)
   Bölüm 9.1: Statik ve Serbest Cisim Diyagramı (FBD)
   Bölüm 9.2: Gerilme Türleri ve Emniyet Katsayısı
   Bölüm 9.3: Sehim Hesabı (Deflection Analysis)
   ======================================================================== */

// BÖLÜM 9.1: STATİK VE SERBEST CİSİM DİYAGRAMI (FBD)
kitap.bolumEkle({
  id: "9-1",
  baslik: "Statik ve Serbest Cisim Diyagramı",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makine ve otomasyon mekanizmalarında iç gerilme ve mukavemet hesaplarının ilk ve en kritik adımı olan Statik Denge ve Serbest Cisim Diyagramı (Free Body Diagram - FBD) metodolojisini; mesnetleme reaksiyon kuvvetlerini, 3D uzay denge denklemlerini, Kesme Kuvveti (SFD) ve Eğilme Momenti (BMD) diyagramlarının analitik türetimini eksiksiz öğretmektir.</p>
</div>

<h2>1. Rijit Cisim Statik Dengesi ve Temel Korunum İlkeleri</h2>
<p>Durağan veya sabit hızla hareket eden bir makine parçasının dengede olabilmesi için Newton'un 1. Yasası gereğince üzerine etkiyen tüm dış kuvvetlerin ve momentlerin vektörel toplamı sıfır olmalıdır:</p>

<div class="muhendislik-kutu">
  <h4>3 Boyutlu Uzay Statik Denge Denklemleri</h4>
  <div class="formul-kutu">
    Σ F<sub>x</sub> = 0 , Σ F<sub>y</sub> = 0 , Σ F<sub>z</sub> = 0
  </div>
  <div class="formul-kutu">
    Σ M<sub>x</sub> = 0 , Σ M<sub>y</sub> = 0 , Σ M<sub>z</sub> = 0
  </div>
  <p>2 Boyutlu (düzlemsel) analizlerde bu denklemler 3 bağımsız eşitliğe indirgenir: <em>Σ F<sub>x</sub> = 0</em>, <em>Σ F<sub>y</sub> = 0</em>, <em>Σ M<sub>z</sub> = 0</em>.</p>
</div>

<h2>2. Mesnet Tipleri ve Reaksiyon Kuvvetleri</h2>
<p>Serbest cisim diyagramı çizilirken parça, temas ettiği tüm gövde, pim, yatak ve cıvatalardan zihinsel olarak izole edilir. Temas noktalarının parçaya uyguladığı kısıtlamalar <strong>Mesnet Reaksiyon Kuvvetleri</strong> ile temsil edilir:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Mesnet Tipi</th>
      <th>Fiziksel Örnek</th>
      <th>Kısıtlanan Hareketler</th>
      <th>Reaksiyon Kuvvetleri / Momentleri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Kayan Mesnet (Roller / Rocker)</strong></td>
      <td>Lineer araba, avara tekerlek, eksenel serbest rulman (NU tipi silindirik makaralı)</td>
      <td>Temas yüzeyine dik öteleme kısıtlıdır; teğetsel kayma ve dönme serbesttir.</td>
      <td><strong>1 Reaksiyon:</strong> Yüzeye dik tekil kuvvet (<em>R<sub>y</sub></em>).</td>
    </tr>
    <tr>
      <td><strong>Sabit Mafsallı Mesnet (Pin / Hinge)</strong></td>
      <td>Pimli bağlantı, sabit bilyalı radyal rulman (6200 serisi), çatal mafsal</td>
      <td>X ve Y eksenlerinde öteleme kısıtlıdır; pim etrafında dönme (rotasyon) serbesttir.</td>
      <td><strong>2 Reaksiyon:</strong> Yatay ve dikey kuvvetler (<em>R<sub>x</sub></em>, <em>R<sub>y</sub></em>). Moment sıfırdır (<em>M = 0</em>).</td>
    </tr>
    <tr>
      <td><strong>Ankastre Mesnet (Fixed / Clamped Support)</strong></td>
      <td>Gövdeye flanşla cıvatalanmış konsol kiriş, kaynaklı şase birleşimi</td>
      <td>Öteleme ve dönme tamamen engellenmiştir; sıfır serbestlik.</td>
      <td><strong>3 Reaksiyon (2D):</strong> Yatay kuvvet (<em>R<sub>x</sub></em>), dikey kuvvet (<em>R<sub>y</sub></em>) ve reaksiyon momenti (<em>M<sub>reaksiyon</sub></em>).</td>
    </tr>
  </tbody>
</table>

<h2>3. Adım Adım Serbest Cisim Diyagramı (FBD) Çizim Protokolü</h2>
<ol>
  <li><strong>İzole Et:</strong> Analiz edilecek parçayı veya alt montajı diğer tüm parçalardan ayırarak sade bir taslak olarak çiz.</li>
  <li><strong>Aktif Yükleri Yerleştir:</strong> Parçanın kendi yerçekimi ağırlığını (<em>W = m · g</em>) ağırlık merkezine yerleştir. Varsa dış aktüatör kuvvetlerini, işleme kuvvetlerini (talaş kaldırma vb.) ve kayış/zincir çekme kuvvetlerini büyüklük ve yönleriyle göster.</li>
  <li><strong>Mesnet Reaksiyonlarını Ekle:</strong> Parçanın yataklandığı veya cıvatalandığı noktalardaki fiziksel serbestlik kısıtlarına göre mesnet kuvvetlerini bilinmeyen (<em>R<sub>Ax</sub>, R<sub>Ay</sub></em> vb.) olarak yönleriyle ekle.</li>
  <li><strong>Denge Denklemlerini Uygula:</strong> Bilinmeyen sayısının en çok moment ürettiği referans noktasına göre moment alarak bilinmeyen mesnet kuvvetlerini adım adım çöz.</li>
</ol>

<h2>4. Kesme Kuvveti (SFD) ve Eğilme Momenti (BMD) Analitiği</h2>
<p>Kirişler ve miller boyunca en kritik (kırılmaya en yakın) kesiti bulmak için <strong>Kesme Kuvveti Diyagramı (Shear Force Diagram - SFD)</strong> ve <strong>Eğilme Momenti Diyagramı (Bending Moment Diagram - BMD)</strong> çizilir.</p>

<div class="muhendislik-kutu">
  <h4>Diferansiyel Denge İlişkileri:</h4>
  <p>Kiriş ekseni <em>x</em> boyunca düzgün yayılı yük <em>q(x)</em>, kesme kuvveti <em>V(x)</em> ve eğilme momenti <em>M(x)</em> arasındaki diferansiyel ilişkiler:</p>
  <div class="formul-kutu">
    dV / dx = − q(x)
  </div>
  <div class="formul-kutu">
    dM / dx = V(x)
  </div>
  <p><strong>Temel Kural:</strong> Kesme kuvvetinin işaret değiştirdiği (sıfırdan geçtiği: <em>V(x) = 0</em>) kesit, eğilme momentinin tepe noktası yaptığı (<strong>Maksimum Eğilme Momenti: M<sub>max</sub></strong>) noktadır. Kiriş veya mil boyutlandırmasında gerilme hesabı bu kesitteki <em>M<sub>max</sub></em> değeri üzerinden yapılır.</p>
</div>

<div class="sozluk-kutu">
  <h4>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h4>
  <table class="sozluk-tablo">
    <thead>
      <tr>
        <th>Kavram / Kısaltma</th>
        <th>Tanım ve Endüstriyel Önemi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Serbest Cisim Diyagramı (FBD)</strong></td>
        <td>Bir elemanın çevresinden yalıtılarak üzerine etkiyen tüm dış kuvvet, yük ve mesnet reaksiyonlarıyla gösterildiği analitik çizim.</td>
      </tr>
      <tr>
        <td><strong>Statik Denge</strong></td>
        <td>Rijit bir cismin ötelenme ve dönme ivmelerinin sıfır olması durumu (ΣF = 0, ΣM = 0).</td>
      </tr>
      <tr>
        <td><strong>Mesnet Reaksiyonu</strong></td>
        <td>Mesnet noktasının elemanın hareketini engellemesi sonucu oluşan karşı reaksiyon kuvveti ve momenti.</td>
      </tr>
      <tr>
        <td><strong>SFD (Shear Force Diagram)</strong></td>
        <td>Kiriş kesitleri boyunca kayma/kesme kuvvetinin eksenel dağılımını gösteren grafik.</td>
      </tr>
      <tr>
        <td><strong>BMD (Bending Moment Diagram)</strong></td>
        <td>Kiriş boyunca iç eğilme momentinin dağılımını veren; tepe noktası kritik kırılma kesitini belirleyen diyagram.</td>
      </tr>
      <tr>
        <td><strong>Ankastre Mesnet (Fixed Support)</strong></td>
        <td>Hem yatay, hem dikey ötelenmeyi hem de dönmeyi tamamen kilitleyen reaksiyon momentli rijit yataklama.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Mukavemet ve boyutlandırma hesaplarının hatasız yapılabilmesi için öncelikle Serbest Cisim Diyagramı (FBD) eksiksiz çıkarılmalıdır.</li>
    <li>Kayan mesnetler 1, mafsallı pim mesnetler 2, ankastre mesnetler ise 3 reaksiyon bileşeni (2 kuvvet + 1 moment) üretir.</li>
    <li>Statik dengede ΣF = 0 ve ΣM = 0 denklemleri kurularak bilinmeyen mesnet yükleri çözülür.</li>
    <li>Kiriş ve mil analizlerinde Kesme Kuvveti Diyagramının sıfırdan geçtiği (V = 0) kesit, Maksimum Eğilme Momentinin (M<sub>max</sub>) oluştuğu en kritik kesittir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Analitik Mesnet Reaksiyonu Hesabı):</strong> L = 2,0 m uzunluğundaki iki ucu basit mesnetli bir konveyör şase profilinin sol ucunda (A noktası) mafsallı sabit mesnet, sağ ucunda (B noktası) kayan mesnet bulunmaktadır. A noktasından 0,5 m mesafede dikey aşağı doğru F = 1200 N'luk noktasal bir silindir kuvveti etki etmektedir. Profilin kendi ağırlığı ihmal edildiğinde B noktasındaki dikey mesnet reaksiyon kuvveti R<sub>B</sub> kaç N'dur?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) R<sub>B</sub> = 300 N
      <div class="test-cevap">DOĞRU. <br>
      A noktasına göre statik moment dengesi alınır (Saat yönü tersi +): <br>
      Σ M<sub>A</sub> = 0 <br>
      (R<sub>B</sub> · L) − (F · 0,5) = 0 <br>
      (R<sub>B</sub> · 2,0) − (1200 · 0,5) = 0 <br>
      2,0 · R<sub>B</sub> = 600 <br>
      R<sub>B</sub> = 300 N. <br>
      Toplam dikey denge: R<sub>A</sub> + R<sub>B</sub> = F ⇒ R<sub>A</sub> = 1200 − 300 = 900 N.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) R<sub>B</sub> = 600 N
      <div class="test-cevap">YANLIŞ. Yük tam ortada olsaydı 600 N olurdu; yük A'ya daha yakındır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) R<sub>B</sub> = 900 N
      <div class="test-cevap">YANLIŞ. Bu değer A mesnedinin taşıdığı yüktür.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Kritik Moment Kesiti):</strong> Konsol (ankastre) olarak bir gövdeye cıvatalanmış L = 0,8 m boyundaki bir robot kolu profilinin ucuna dikey F = 500 N ağırlığında bir tutucu bağlanmıştır. Profil boyunca maksimum eğilme momenti nerede oluşur ve değeri nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Profilin tam orta noktasında (x = 0,4 m); M = 200 Nm.
      <div class="test-cevap">YANLIŞ. Konsol kirişlerde moment ortada tepe yapmaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Profilin gövdeye ankastre bağlandığı kök kesitinde (x = 0); M<sub>max</sub> = F · L = 500 · 0,8 = 400 Nm.
      <div class="test-cevap">DOĞRU. Konsol kirişlerde moment kolu ankastre köke doğru büyür. Maksimum eğilme momenti ve en yüksek gerilme daima cıvatalı ankastre bağlantı yüzeyinde oluşur; uç noktada ise moment sıfırdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Profilin serbest ucunda (x = 0,8 m); M = 400 Nm.
      <div class="test-cevap">YANLIŞ. Serbest uçta moment sıfırdır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (FBD Metodolojisi Hatası):</strong> Bir mühendis, silindirik lineer kılavuz milini iki ucundan gövdeye rijit vidalamış ve mil üzerinde hareket eden rulmanlı arabanın eğilme momentini hesaplarken sistemi "iki ucu basit mesnetli serbest kiriş" olarak modellemiştir. Bu kabul tasarımda nasıl bir hataya yol açar?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Hesaplanan moment gerçekte oluşacak momentten daha küçük çıkar, mil beklenmedik şekilde kırılır.
      <div class="test-cevap">YANLIŞ. Basit mesnet kabulü ankastreye göre ortada daha BÜYÜK moment hesaplar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Basit mesnet kabulü (M = F·L/4), iki ucu ankastre mesnet durumuna (M = F·L/8) göre ortada 2 kat daha büyük moment öngörür. Bu durum parçanın aşırı emniyetli (gereksiz yere çok kalın ve ağır) seçilmesine yol açar; ancak mil uçlarındaki ankastre cıvataların maruz kalacağı reaksiyon momenti hesaplanmadığı için bağlantı cıvataları kopabilir!
      <div class="test-cevap">DOĞRU. Mesnet tipini yanlış seçmek ortadaki momenti abartırken uçlardaki flanş ve cıvatalara binen reaksiyon momentini tamamen gözden kaçırır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Hesapta hiçbir fark oluşmaz.
      <div class="test-cevap">YANLIŞ. Mesnet tipi moment diyagramını baştan sona değiştirir.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 9.2: GERİLME TÜRLERİ VE EMNİYET KATSAYISI
kitap.bolumEkle({
  id: "9-2",
  baslik: "Gerilme Türleri ve Emniyet Katsayısı",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makine elemanlarında dış kuvvetlerin malzeme iç yapısında yarattığı gerilme alanlarını (çekme, basma, kayma, eğilme, burulma); çok eksenli gerilme hallerinde Von Mises ve Tresca eşdeğer gerilme hipotezlerini, akma ve kopma kriterlerini ve dinamik-statik emniyet katsayısı (safety factor) seçim prensiplerini öğretmektir.</p>
</div>

<h2>1. Temel Gerilme Türleri ve Analitik Formülasyonu</h2>
<p>Dış yükler altındaki bir parçanın kesitinde birim alana düşen iç kuvvete <strong>gerilme (stress)</strong> denir. Gerilmeler yüzeye dik (normal gerilme - <em>σ</em>) ve yüzeye paralel (kayma gerilmesi - <em>τ</em>) olarak ikiye ayrılır.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Gerilme Türü</th>
      <th>Sembol ve Birim</th>
      <th>Analitik Formül</th>
      <th>Uygulama Alanı ve Kritik Geometrik Parametre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Eksenel Çekme / Basma</strong></td>
      <td>σ [MPa = N/mm²]</td>
      <td>σ = F / A</td>
      <td>Bağlantı rotları, kolonlar, askı çubukları. <em>A:</em> Net enkesit alanı.</td>
    </tr>
    <tr>
      <td><strong>Basit Kayma (Shear)</strong></td>
      <td>τ [MPa = N/mm²]</td>
      <td>τ = V / A<sub>kesme</sub></td>
      <td>Cıvata gövdesi, pimler, perçinler, kama kesitleri.</td>
    </tr>
    <tr>
      <td><strong>Eğilme Gerilmesi (Navier)</strong></td>
      <td>σ<sub>eğilme</sub> [MPa]</td>
      <td>σ<sub>eğilme</sub> = (M · y) / I = M / W<sub>e</sub></td>
      <td>Kirişler, konsol kollar, akslar. <em>W<sub>e</sub>:</em> Eğilme mukavemet momenti [mm³]. En dış lifte (y = y<sub>max</sub>) maksimumdur.</td>
    </tr>
    <tr>
      <td><strong>Burulma Gerilmesi (Torsion)</strong></td>
      <td>τ<sub>burulma</sub> [MPa]</td>
      <td>τ<sub>burulma</sub> = (T · r) / J<sub>polar</sub> = T / W<sub>p</sub></td>
      <td>Dönen tahrik milleri, redüktör şaftları. <em>W<sub>p</sub>:</em> Polar mukavemet momenti [mm³]. Dairesel dolu milde: W<sub>p</sub> = π · d³ / 16.</td>
    </tr>
  </tbody>
</table>

<h2>2. Birleşik Gerilmeler ve Eşdeğer Gerilme Hipotezleri</h2>
<p>Gerçek makinelerde bir mil veya gövde aynı anda hem eğilmeye (<em>σ<sub>eğilme</sub></em>), hem eksenel yüke hem de burulmaya (<em>τ<sub>burulma</sub></em>) maruz kalır. Bu çok eksenli gerilme halini malzemenin tek eksenli çekme testi verisiyle (Akma Dayanımı <em>R<sub>e</sub></em> veya Çekme Dayanımı <em>R<sub>m</sub></em>) kıyaslayabilmek için <strong>Eşdeğer Gerilme (Equivalent Stress)</strong> hipotezleri geliştirilmiştir.</p>

<div class="muhendislik-kutu">
  <h4>1. Von Mises Şekil Değiştirme Enerjisi Hipotezi (Distortion Energy Theory)</h4>
  <p><strong>Sünek malzemeler (çelik, alüminyum, pirinç, bakır) için dünya çapındaki altın standarttır.</strong> Parçada akmanın, malzemenin distorsiyon enerjisi kritik bir eşiğe ulaştığında başlayacağını kabul eder. Düzlemsel gerilme hali için eşdeğer gerilme <em>σ<sub>vM</sub></em>:</p>
  <div class="formul-kutu">
    σ<sub>vM</sub> = √ [ σ<sub>x</sub>² + σ<sub>y</sub>² − σ<sub>x</sub>·σ<sub>y</sub> + 3·τ<sub>xy</sub>² ]
  </div>
  <p>Eğer sadece eğilme gerilmesi (<em>σ</em>) ve burulma gerilmesi (<em>τ</em>) varsa formül son derece sadeleşir:</p>
  <div class="formul-kutu">
    σ<sub>vM</sub> = √ [ σ² + 3 · τ² ] ≤ σ<sub>emniyet</sub>
  </div>
</div>

<div class="muhendislik-kutu">
  <h4>2. Tresca Maksimum Kayma Gerilmesi Hipotezi (Maximum Shear Stress Theory)</h4>
  <p>Malzemenin plastik kaymayla akacağını savunur: <em>τ<sub>max</sub> = (σ<sub>1</sub> − σ<sub>3</sub>) / 2</em>. Tresca kriteri Von Mises'e kıyasla %15 daha muhafazakardır (daha emniyetli tarafta kalır; mili gereksiz yere bir miktar daha kalın seçtirir). Havacılık ve nükleer standartlarda sıkça zorunlu tutulur.</p>
</div>

<div class="muhendislik-kutu">
  <h4>3. Rankine Maksimum Normal Gerilme Hipotezi (Gevrek Malzemeler)</h4>
  <p><strong>Gevrek malzemeler (Dökme demir GG25, sertleştirilmiş seramikler, cam) için kullanılır.</strong> Bu malzemeler plastik akma yapmadan aniden çatlayarak koptuğu için Von Mises uygulanamaz. Asal gerilmelerin en büyüğü kopma dayanımıyla kıyaslanır: <em>σ<sub>1</sub> ≤ σ<sub>kopma</sub> / S</em>.</p>
</div>

<h2>3. Emniyet Katsayısı (Factor of Safety - S) Seçim Kriterleri</h2>
<p>Emniyet katsayısı; bilinmeyen yükleri, malzeme homojensizliklerini, imalat kusurlarını ve dinamik şokları karşılayan tolerans payıdır:</p>
<div class="formul-kutu">
  S = R<sub>e</sub> (Akma Dayanımı) / σ<sub>eşdeğer_max</sub> (Sünek malzemede)
</div>
<div class="formul-kutu">
  S = R<sub>m</sub> (Kopma Dayanımı) / σ<sub>eşdeğer_max</sub> (Gevrek malzemede)
</div>

<div class="uyari-kutu">
  <h4>Endüstriyel Emniyet Katsayısı Kılavuzu:</h4>
  <ul>
    <li><strong>S = 1,3 – 1,5:</strong> Statik yükler, mükemmel bilinen çalışma şartları, hassas FEA analizi yapılmış hafif havacılık sistemleri.</li>
    <li><strong>S = 1,8 – 2,2:</strong> Standart otomasyon makineleri, bilinen hafif dinamik yükler, yumuşak kalkışlı servo sistemler (Genel Sanayi Standardı).</li>
    <li><strong>S = 2,5 – 3,5:</strong> Darbeli ve şoklu çalışan sistemler (presler, zımbalar, kesme giyotinleri, vibrasyonlu hatlar).</li>
    <li><strong>S = 4,0 – 6,0:</strong> İnsan hayatı taşıyan vinçler, asansörler, maden makineleri veya döküm gibi iç yapısında boşluk riski olan gevrek parçalar.</li>
  </ul>
</div>

<div class="sozluk-kutu">
  <h4>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h4>
  <table class="sozluk-tablo">
    <thead>
      <tr>
        <th>Kavram / Kısaltma</th>
        <th>Tanım ve Endüstriyel Önemi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Von Mises Gerilmesi (σ<sub>vM</sub>)</strong></td>
        <td>Çok eksenli gerilme durumunu tek bir skaler eşdeğer gerilmeye dönüştüren ve sünek malzemelerin akmasını denetleyen kriter.</td>
      </tr>
      <tr>
        <td><strong>Akma Dayanımı (R<sub>e</sub> / Yield Strength)</strong></td>
        <td>Malzemenin elastik davranıştan çıkıp kalıcı plastik deformasyona başladığı kritik gerilme sınırı.</td>
      </tr>
      <tr>
        <td><strong>Kopma Dayanımı (R<sub>m</sub> / Tensile Strength)</strong></td>
        <td>Malzemenin çekme altında taşıyabileceği maksimum mühendislik gerilmesi.</td>
      </tr>
      <tr>
        <td><strong>Emniyet Katsayısı (Safety Factor - S)</strong></td>
        <td>Malzeme mukavemetinin parçada oluşan en yüksek eşdeğer gerilmeye oranı.</td>
      </tr>
      <tr>
        <td><strong>Mukavemet Momenti (W<sub>e</sub> / W<sub>p</sub>)</strong></td>
        <td>Bir kesitin eğilmeye veya burulmaya karşı geometrik direnç katsayısı (Kesit ataletinin dış lif mesafesine oranı).</td>
      </tr>
      <tr>
        <td><strong>Distorsiyon Enerjisi</strong></td>
        <td>Bir cismin hacimsel değişim olmaksızın sadece şekilsel bozulması için harcanan iç elastik enerji.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Eksenel yüklerde σ = F/A, eğilmede σ = M/W<sub>e</sub>, burulmada τ = T/W<sub>p</sub> formülleri temel gerilmeleri verir.</li>
    <li>Makinelerde birden fazla gerilme birleştiğinde sünek çelik ve alüminyumlar için mutlaka Von Mises eşdeğer gerilme formülü <em>σ<sub>vM</sub> = √(σ² + 3·τ²)</em> uygulanmalıdır.</li>
    <li>Dökme demir gibi gevrek malzemelerde Von Mises geçersizdir; Rankine maksimum asal gerilme kriteri kullanılır.</li>
    <li>Otomasyon tasarımında genel standart emniyet katsayısı S = 1,8 – 2,2 iken şoklu presleme istasyonlarında S = 3,0 – 3,5 seçilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Analitik Von Mises Gerilmesi Hesabı):</strong> Çelik bir tahrik milinin kritik yatak kesitinde yapılan hesaplamada eğilme gerilmesi σ = 80 MPa, motordan gelen burulma kayma gerilmesi ise τ = 40 MPa olarak bulunmuştur. Mil malzemesi C45 imalat çeliğidir (Akma dayanımı R<sub>e</sub> = 340 MPa). Bu mildeki Von Mises eşdeğer gerilmesi σ<sub>vM</sub> ve akmaya göre statik emniyet katsayısı S nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) σ<sub>vM</sub> ≈ 105,8 MPa ; S ≈ 3,21 (Tamamen güvenli)
      <div class="test-cevap">DOĞRU. <br>
      σ<sub>vM</sub> = √ [ σ² + 3 · τ² ]<br>
      σ<sub>vM</sub> = √ [ (80)² + 3 · (40)² ] = √ [ 6400 + 3 · 1600 ] = √ [ 6400 + 4800 ] = √11200 ≈ 105,83 MPa.<br>
      Emniyet katsayısı: S = R<sub>e</sub> / σ<sub>vM</sub> = 340 / 105,83 ≈ 3,21.<br>
      S > 2 olduğundan mil akmaya karşı son derece güvenlidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) σ<sub>vM</sub> = 120 MPa ; S = 2,83
      <div class="test-cevap">YANLIŞ. Formüldeki karekök içindeki 3 katsayısı unutulup direkt σ + τ yapılmış.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) σ<sub>vM</sub> = 89,4 MPa ; S = 3,80
      <div class="test-cevap">YANLIŞ. Formüldeki 3 çarpanı yerine 1 çarpanı alınmış (√(σ² + τ²)).</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Malzeme ve Kriter Seçimi):</strong> Gri dökme demirden (GG25) imal edilmiş bir redüktör gövdesinin mukavemet analizi yapılmaktadır. Genç bir simülasyon mühendisi FEA programında Von Mises gerilmesini okumuş ve akma sınırına göre parçanın güvenli olduğunu raporlamıştır. Bu analiz neden teorik olarak ölümcül derecede hatalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) FEA programları dökme demiri analiz edemez.
      <div class="test-cevap">YANLIŞ. Programlar analiz eder ancak doğru kriteri mühendis seçmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Dökme demir gevrek (brittle) bir malzemedir; plastik akma yapmaz, çekme dayanımına ulaştığında aniden çatlar. Von Mises distorsiyon hipotezi ise sadece sünek akma gösteren malzemeler için geçerlidir. Dökme demirde Rankine (Maksimum Normal Gerilme) veya Mohr-Coulomb kriteri uygulanmalı ve malzemenin düşük çekme kopma dayanımı esas alınmalıdır.
      <div class="test-cevap">DOĞRU. Gevrek malzemelere sünek malzeme akma hipotezi uygulamak mühendislik cinayetidir. Dökme demirin basma dayanımı çok yüksek (örn: 800 MPa), ancak çekme dayanımı çok düşüktür (örn: 250 MPa). Çekme gerilmeleri Rankine hipotezi ile denetlenmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Von Mises sadece sıvılar için geçerlidir.
      <div class="test-cevap">YANLIŞ. Von Mises katılarda katı mekaniğinin temel kuralıdır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Emniyet Katsayısı Stratejisi):</strong> Hidrolik presle sac kesme yapan bir otomasyon istasyonunun alt kalıp tutucu plakası tasarlanmaktadır. Plaka her kesme anında 0,05 saniyelik şiddetli darbe ve şok yüklerine maruz kalmaktadır. Bu istasyon için S = 1,2 emniyet katsayısı seçilirse ne gerçekleşir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Hafif ve optimum bir tasarım elde edilir.
      <div class="test-cevap">YANLIŞ. 1,2 katsayısı dinamik şokları karşılayamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Şok ve dinamik darbe faktörü (K<sub>d</sub> ≈ 1,5–2,0) statik gerilmeyi anlık olarak akma sınırının üzerine çıkarır; kalıp plakası kısa süre içinde kalıcı olarak yamulur veya yorulma çatlağıyla kırılır. Presleme gibi darbeli istasyonlarda en az S = 2,5 – 3,5 emniyet katsayısı seçilmelidir.
      <div class="test-cevap">DOĞRU. Dinamik şok yükleri statik kuvvetin kat kat fazlası anlık tepe kuvveti üretir. Düşük emniyet katsayısı anında kırılmayla sonuçlanır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Plaka hiçbir zaman kırılmaz çünkü akma sınırının altındadır.
      <div class="test-cevap">YANLIŞ. Statik sınırın altında olsa bile dinamik şok tepe değeri akmayı aşar.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 9.3: SEHİM HESABI (DEFLECTION ANALYSIS)
kitap.bolumEkle({
  id: "9-3",
  baslik: "Sehim Hesabı",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Otomasyon makinelerinde bir parçanın sadece mukavemet (kırılmama) açısından değil, rijitlik ve elastik deformasyon (sehim / deflection) açısından boyutlandırılmasını; Euler-Bernoulli kiriş eğilme diferansiyel denklemini, temel yükleme senaryoları analitik formüllerini, süperpozisyon ilkesini ve rulman/dişli çalışma boşluklarını korumaya yönelik rijitlik kriterlerini öğretmektir.</p>
</div>

<h2>1. Mukavemet ve Rijitlik Ayrımı: Neden Sadece Gerilme Yetmez?</h2>
<p>Birçok acemi makine tasarımcısı sadece gerilmeye bakar: <em>"Eşdeğer gerilme 80 MPa çıktı, çeliğin akması 300 MPa, demek ki mil çok sağlam!"</em></p>

<div class="uyari-kutu">
  <h4>Mühendislik Tuzağı: Mil Kırılmadı Ama Makine Dağıldı!</h4>
  <p>Parça gerilme açısından kırılma sınırının çok altında kalsa dahi, elastik olarak <strong>0,3 mm eğilirse (sehim yaparsa)</strong>:</p>
  <ul>
    <li>Mili taşıyan bilyalı rulmanların iç ve dış bilezikleri açılı kilitlenir; rulman bilyaları tek noktadan ezilir ve 50 saatte dağılır.</li>
    <li>Mil ucundaki silindirik düz dişliler paralel temas edemez; dişler ucundan basarak kırılır.</li>
    <li>Lineer kızak arabaları ray üzerinde kasıntı yapar ve servo motor aşırı akım (overload) alarmı verir.</li>
    <li><strong>Kural:</strong> Otomasyonda boyutlandırmayı %70 oranında <strong>Gerilme (Mukavemet)</strong> değil, <strong>Sehim (Rijitlik)</strong> belirler!</li>
  </ul>
</div>

<h2>2. Euler-Bernoulli Kiriş Eğilme Teorisi ve Sehim Formülleri</h2>
<p>Doğrusal elastik davranış sergileyen bir kirişte eğilme momenti <em>M(x)</em> ile kirişin elastik çökme eğrisi <em>w(x)</em> arasındaki ilişki Euler-Bernoulli diferansiyel denklemi ile tanımlanır:</p>
<div class="formul-kutu">
  E · I · (d²w / dx²) = − M(x)
</div>
<p>Burada <strong>E</strong> malzemenin elastisite modülü [MPa = N/mm²], <strong>I</strong> kesitin alan atalet momentidir [mm<sup>4</sup>]. Çarpımları olan <strong>E · I</strong> terimine <strong>Kirişin Eğilme Rijitliği (Flexural Rigidity)</strong> denir.</p>

<h3>Temel Yükleme Durumları İçin Maksimum Sehim Formülleri</h3>
<table class="standart-tablo">
  <thead>
    <tr>
      <th>Kiriş ve Mesnet Tipi</th>
      <th>Yükleme Durumu</th>
      <th>Maksimum Sehim (δ<sub>max</sub>) Formülü</th>
      <th>Maksimum Sehimin Oluştuğu Konum</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>İki Ucu Basit Mesnetli</strong></td>
      <td>Tam ortada tekil yük (<em>F</em>)</td>
      <td><strong>δ<sub>max</sub> = (F · L³) / (48 · E · I)</strong></td>
      <td>Tam orta kesit (x = L / 2)</td>
    </tr>
    <tr>
      <td><strong>İki Ucu Basit Mesnetli</strong></td>
      <td>Tüm açıklıkta düzgün yayılı yük (<em>q</em>)</td>
      <td><strong>δ<sub>max</sub> = (5 · q · L<sup>4</sup>) / (384 · E · I)</strong></td>
      <td>Tam orta kesit (x = L / 2)</td>
    </tr>
    <tr>
      <td><strong>Konsol (Ankastre) Kiriş</strong></td>
      <td>Serbest uçta tekil yük (<em>F</em>)</td>
      <td><strong>δ<sub>max</sub> = (F · L³) / (3 · E · I)</strong></td>
      <td>Serbest uç (x = L)</td>
    </tr>
    <tr>
      <td><strong>Konsol (Ankastre) Kiriş</strong></td>
      <td>Tüm boyda düzgün yayılı yük (<em>q</em>)</td>
      <td><strong>δ<sub>max</sub> = (q · L<sup>4</sup>) / (8 · E · I)</strong></td>
      <td>Serbest uç (x = L)</td>
    </tr>
    <tr>
      <td><strong>İki Ucu Ankastre Kiriş</strong></td>
      <td>Tam ortada tekil yük (<em>F</em>)</td>
      <td><strong>δ<sub>max</sub> = (F · L³) / (192 · E · I)</strong></td>
      <td>Tam orta kesit (x = L / 2) (Basit mesnetlinin 1/4'ü kadar sehim yapar!)</td>
    </tr>
  </tbody>
</table>

<h2>3. Süperpozisyon Yöntemi ile Karmaşık Yükleme Analizi</h2>
<p>Bir kiriş üzerinde hem kendi ağırlığından kaynaklanan yayılı yük (<em>q</em>), hem bir silindirin tekil basısı (<em>F<sub>1</sub></em>), hem de bir motorun ağırlığı (<em>F<sub>2</sub></em>) varsa; sistem doğrusal elastik bölgede kaldığı sürece toplam sehim, her bir yükün tek başına oluşturduğu sehimlerin cebirsel toplamına eşittir:</p>
<div class="formul-kutu">
  δ<sub>toplam</sub> = δ<sub>yayılı_yük</sub> + δ<sub>tekil_yük_1</sub> + δ<sub>tekil_yük_2</sub>
</div>

<h2>4. Endüstriyel Kabul Edilebilir Sehim Sınırları (Deflection Limits)</h2>
<p>Mühendislik standartlarında (DIN, ISO, AGMA) mekanik elemanların ömrünü garanti eden sınır sehim değerleri şunlardır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Makine Elemanı / Uygulama</th>
      <th>İzin Verilen Maksimum Sehim (δ<sub>izin</sub>)</th>
      <th>İzin Verilen Eğim Açısı (θ<sub>izin</sub>)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Genel Makine Şasesi ve Kirişleri</strong></td>
      <td>δ ≤ L / 1000 ila L / 1500</td>
      <td>—</td>
    </tr>
    <tr>
      <td><strong>Hassas Kartezyen ve CNC Kılavuz Yatakları</strong></td>
      <td>δ ≤ L / 2000 ila L / 3000</td>
      <td>θ ≤ 2 ila 4 yay dakikası (arcmin)</td>
    </tr>
    <tr>
      <td><strong>Rulmanlı Transmisyon Milleri</strong></td>
      <td>δ ≤ 0,001 · L (veya yatakta ≤ 0,05 mm)</td>
      <td>Bilyalı rulmanda: θ ≤ 5 – 10 arcmin<br>Silindirik makaralıda: θ ≤ 2 – 4 arcmin</td>
    </tr>
    <tr>
      <td><strong>Alın Dişli Çark Şaftları (AGMA)</strong></td>
      <td>Dişli konumunda sehim: δ ≤ 0,01 ila 0,03 mm</td>
      <td>Diş temas çizgisinde eğrilik: θ ≤ 1 arcmin</td>
    </tr>
  </tbody>
</table>

<div class="sozluk-kutu">
  <h4>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h4>
  <table class="sozluk-tablo">
    <thead>
      <tr>
        <th>Kavram / Kısaltma</th>
        <th>Tanım ve Endüstriyel Önemi</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><strong>Sehim (Deflection - δ)</strong></td>
        <td>Bir kiriş, mil veya profilin eksenine dik yükler altında yaptığı elastik yer değiştirme miktarı.</td>
      </tr>
      <tr>
        <td><strong>Eğilme Rijitliği (Flexural Rigidity - E·I)</strong></td>
        <td>Malzemenin elastisite modülü ile kesit atalet momentinin çarpımı; eğilmeye karşı direnç ölçütü.</td>
      </tr>
      <tr>
        <td><strong>Süperpozisyon İlkesi</strong></td>
        <td>Lineer elastik sistemlerde birden fazla yükün toplam etkisinin, yüklerin tekil etkilerinin toplamına eşit olması kuralı.</td>
      </tr>
      <tr>
        <td><strong>Alan Atalet Momenti (I)</strong></td>
        <td>Bir kesitin geometrik formunun eğilmeye karşı direncini belirleyen dördüncü dereceden alan integrali (mm⁴).</td>
      </tr>
      <tr>
        <td><strong>Elastisite Modülü (E)</strong></td>
        <td>Malzemenin elastik bölgedeki gerilme/birim şekil değiştirme oranı; çelikte 210 GPa, alüminyumda 70 GPa.</td>
      </tr>
      <tr>
        <td><strong>Eğim Açısı (Slope - θ)</strong></td>
        <td>Sehim eğrisinin teğetinin yatayla yaptığı açı (dw/dx); rulmanların ve dişlilerin kasıntı yapmasını belirler.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Otomasyonda parçalar gerilmeden kırılmasa bile aşırı sehim nedeniyle rulmanları kilitleyebilir, dişlileri bozabilir ve lineer kızakları kasabilir.</li>
    <li>İki ucu basit mesnetli ortadan tekil yüklü kirişte sehim <em>δ = (F·L³) / (48·E·I)</em> formülüyle hesaplanır.</li>
    <li>Sehim formüllerinde uzunluğun 3. kuvveti (L³) yer alır; yani kiriş boyunu 2 katına çıkarmak sehimi tam 8 KAT artırır! Boyu kısaltmak en etkili rijitlik artırma yoludur.</li>
    <li>Hassas kılavuz ve millerde sehim limiti genel olarak <em>δ ≤ L / 2000</em> veya rulman bölgesinde azami 5–10 yay dakikası eğim açısı ile sınırlandırılmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Analitik Sehim Hesabı):</strong> İki ucu basit mesnetli L = 1000 mm açıklığındaki çelik bir transmisyon milinin tam ortasına F = 2000 N radyal dişli kuvveti basmaktadır. Çeliğin elastisite modülü E = 210.000 MPa (210 × 10<sup>3</sup> N/mm²)'dir. Mil çapı d = 40 mm olup dairesel kesit atalet momenti I = (π · d<sup>4</sup>) / 64 ≈ 125.664 mm<sup>4</sup> olarak hesaplanmıştır. Milin kendi ağırlığı ihmal edildiğinde ortadaki maksimum sehim δ kaç mm'dir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) δ ≈ 1,57 mm
      <div class="test-cevap">DOĞRU. <br>
      δ = (F · L³) / (48 · E · I)<br>
      δ = [ 2000 · (1000)³ ] / [ 48 · 210.000 · 125.664 ]<br>
      δ = [ 2.000.000.000 ] / [ 1.266.693.120 ] ≈ 1,578 mm.<br>
      1,58 mm'lik sehim dişli ve rulmanlar için kabul edilemez derecede büyüktür (L/1000 = 1 mm sınırını da aşar). Mil çapı mutlaka büyütülmelidir (örneğin d = 50 mm yapılırsa I neredeyse 2,5 kat artar ve sehim 0,6 mm'ye düşer).</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) δ ≈ 0,25 mm
      <div class="test-cevap">YANLIŞ. 48 katsayısı yerine 192 (iki ucu ankastre) kullanılmış veya L³ yerine L² alınmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) δ ≈ 5,8 mm
      <div class="test-cevap">YANLIŞ. Hesaplama hatası.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Malzeme Değişimi ve Sehim Yanılgısı):</strong> Bir makine tasarımcısı, çelik bir konsol kirişin uçtaki yük altında 1,2 mm sehim yaptığını görmüştür. Kirişi hafifletmek için aynı geometride ve aynı et kalınlığında Alüminyum 7075-T6 malzemeden üretmiştir. Al 7075-T6 çelik kadar yüksek akma dayanımına (500 MPa) sahiptir. Kiriş alüminyum yapıldığında sehim ne olur?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Alüminyum 7075 çok mukavim olduğu için sehim aynı kalır veya azalır.
      <div class="test-cevap">YANLIŞ. Akma dayanımı sehimi ETKİLEMEZ! Sehimi belirleyen malzeme özelliği Elastisite Modülüdür (E).</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Çeliğin elastisite modülü E = 210 GPa iken Alüminyumun elastisite modülü alaşımı ne olursa olsun yaklaşık E = 70 GPa'dır (3 kat daha düşüktür). Geometri değişmediği için alüminyum kirişin sehimi tam 3 katına çıkarak 3,6 mm olur!
      <div class="test-cevap">DOĞRU. Mühendislikte en sık düşülen tuzaklardan biri yüksek mukavemetli alaşımların daha rijit sanılmasıdır. Isıl işlem veya alaşımlama elastisite modülünü (E) değiştirmez. Alüminyum çeliğe göre 3 kat daha fazla esner.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Sehim 0,4 mm'ye düşer.
      <div class="test-cevap">YANLIŞ. Fizik kurallarına aykırıdır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Rijitlik İyileştirme Stratejisi):</strong> Bir portal köprüsünde L açıklığı 2 metredir ve orta noktadaki sehim izin verilen sınırın 2 katı çıkmıştır. Ağırlığı ve malzeme maliyetini minimum artırarak sehimi yarıya indirmek için en akılcı mühendislik çözümü nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kirişin yüksekliğini (h) artırarak kesit atalet momentini (I = b·h³/12) büyütmek.
      <div class="test-cevap">DOĞRU. Dikdörtgen kesitte atalet momenti profil yüksekliğinin küpüyle (h³) büyür. Genişliği artırmak I'yı sadece 1. dereceden artırırken yüksekliği %26 artırmak atalet momentini 2 katına çıkarır ve sehimi yarıya indirir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Çeliği sertleştirmek (menevişlemek).
      <div class="test-cevap">YANLIŞ. Isıl işlem elastisite modülünü (E) değiştirmez, sehim aynı kalır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kirişin genişliğini (b) 5 katına çıkarmak.
      <div class="test-cevap">YANLIŞ. Kirişi aşırı ağırlaştırır ve maliyeti patlatır.</div>
    </div>
  </div>
</div>
`
});
