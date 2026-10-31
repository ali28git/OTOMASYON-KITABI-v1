/* ========================================================================
   MODÜL 9: MÜHENDİSLİK HESAPLARI (m09-b.js)
   Bölüm 9.4: Yorulma (Fatigue Analysis)
   Bölüm 9.5: Cıvata Hesabı (VDI 2230 ve ISO 898-1)
   Bölüm 9.6: Mil Hesabı (ASME ve Dinamik Kritik Hız)
   ======================================================================== */

// BÖLÜM 9.4: YORULMA (FATIGUE ANALYSIS)
kitap.bolumEkle({
  id: "9-4",
  baslik: "Yorulma",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makinelerde meydana gelen mekanik kırılmaların %90'ından fazlasını oluşturan dinamik yorulma hasarını; Wöhler (S-N) eğrisini, Marin yüzey/boyut/yük düzeltme faktörlerini, çentik etkisi ve gerilme yığılması katsayılarını (K<sub>t</sub>, K<sub>f</sub>) ve Goodman yorulma sınır diyagramı ile dinamik ömür hesabını öğretmektir.</p>
</div>

<h2>1. Dinamik Yük Çevrimleri ve Wöhler (S-N) Eğrisi</h2>
<p>Bir makine parçası, malzemenin statik akma sınırının (<em>R<sub>e</sub></em>) çok altındaki gerilmelerde dahi, yük binlerce veya milyonlarca kez tekrarlandığında mikroskobik çatlakların ilerlemesiyle aniden kırılabilir. Bu olaya <strong>yorulma (fatigue)</strong> denir.</p>

<div class="muhendislik-kutu">
  <h4>Değişken Gerilme Parametreleri</h4>
  <p>Zamanla değişen bir gerilme dalgasında:</p>
  <ul>
    <li><strong>Maksimum ve Minimum Gerilme:</strong> σ<sub>max</sub> ve σ<sub>min</sub></li>
    <li><strong>Ortalama Gerilme:</strong> σ<sub>m</sub> = (σ<sub>max</sub> + σ<sub>min</sub>) / 2</li>
    <li><strong>Genlik (Alternatif) Gerilmesi:</strong> σ<sub>a</sub> = (σ<sub>max</sub> − σ<sub>min</sub>) / 2</li>
    <li><strong>Gerilme Oranı (R):</strong> R = σ<sub>min</sub> / σ<sub>max</sub> (Tam değişken eğilmede R = −1; sıfırdan başlayan salınımlı yükte R = 0).</li>
  </ul>
</div>

<h3>Wöhler Eğrisi ve Sürekli Mukavemet Sınırı (Endurance Limit - S<sub>e</sub>')</h3>
<p>August Wöhler tarafından geliştirilen S-N eğrisinde döngü sayısı (<em>N</em>) ile kırılma gerilimi (<em>S</em>) logaritmik olarak eşleştirilir:</p>
<ul>
  <li><strong>Demir Esaslı Alaşımlar (Çelikler):</strong> Çevrim sayısı N ≈ 10<sup>6</sup> ila 10<sup>7</sup> döngüye ulaştığında eğri yataylaşır. Bu eşiğin altındaki gerilmelerde parça teorik olarak <strong>sonsuz ömre (Infinite Life)</strong> sahip olur. Laboratuvar şartlarında döner eğilme testindeki sürekli mukavemet sınırı:
    <div class="formul-kutu">
      S<sub>e</sub>' ≈ 0,5 · R<sub>m</sub> (R<sub>m</sub> ≤ 1400 MPa olan çelikler için)
    </div>
  </li>
  <li><strong>Demir Dışı Metaller (Alüminyum, Pirinç):</strong> Alüminyum alaşımlarında yataylaşan bir sürekli mukavemet sınırı <strong>YOKTUR!</strong> Gerilme ne kadar küçük olursa olsun yeterli çevrimde alüminyum eninde sonunda yorularak çatlar. Bu nedenle alüminyumda yorulma sınırı daima belirli bir çevrim için (örneğin N = 5 × 10<sup>7</sup> veya 10<sup>8</sup> çevrim) tanımlanır.</li>
</ul>

<h2>2. Gerçek Çalışma Şartları: Marin Düzeltme Faktörleri</h2>
<p>Laboratuvarda test edilen ayna gibi parlatılmış standart test çubuğunun mukavemeti (<em>S<sub>e</sub>'</em>), sahadaki gerçek parçanın yorulma dayanımı olamaz. Gerçek yorulma sınırı <strong>Marin Faktörleri</strong> ile hesaplanır:</p>
<div class="formul-kutu">
  S<sub>e</sub> = k<sub>a</sub> · k<sub>b</sub> · k<sub>c</sub> · k<sub>d</sub> · k<sub>e</sub> · S<sub>e</sub>'
</div>
<p>Burada:</p>
<ul>
  <li><strong>k<sub>a</sub> (Yüzey Kalitesi Faktörü):</strong> Yüzey pürüzlülüğü mikroskobik çentikler oluşturur. Taşlanmış yüzeyde k<sub>a</sub> ≈ 0,90; talaşlı işlenmiş yüzeyde k<sub>a</sub> ≈ 0,70–0,80; kaba sıcak haddelenmiş yüzeyde k<sub>a</sub> ≈ 0,40–0,50'ye kadar düşer!</li>
  <li><strong>k<sub>b</sub> (Boyut Faktörü):</strong> Parça çapı büyüdükçe malzeme içindeki hata (dislokasyon, boşluk) olasılığı artar (d > 50 mm için k<sub>b</sub> ≈ 0,80–0,85).</li>
  <li><strong>k<sub>c</sub> (Yük Tipi Faktörü):</strong> Saf eğilmede k<sub>c</sub> = 1,0; eksenel çekme/basmada k<sub>c</sub> = 0,85; burulmada k<sub>c</sub> = 0,577 alınır.</li>
  <li><strong>k<sub>d</sub> (Sıcaklık Faktörü):</strong> T ≤ 350°C için k<sub>d</sub> = 1,0.</li>
  <li><strong>k<sub>e</sub> (Güvenilirlik Faktörü):</strong> %50 güvenilirlik için 1,0; %99 güvenilirlik için k<sub>e</sub> = 0,814; %99,99 için k<sub>e</sub> = 0,620.</li>
</ul>

<h2>3. Çentik Etkisi ve Gerilme Yığılması (Stress Concentration)</h2>
<p>Millerdeki fatura geçişleri, segman kanalları, kama kanalları, cıvata dişleri ve delikler gerilme akış çizgilerini sıkıştırarak gerilmeyi bölgesel olarak katlar.</p>

<div class="muhendislik-kutu">
  <h4>Yorulma Çentik Faktörü Formülasyonu</h4>
  <p>Teorik elastik gerilme yığılma faktörü <em>K<sub>t</sub></em> (geometriye bağlıdır), malzemenin çentik hassasiyeti <em>q</em> (0 ile 1 arasında) olmak üzere yorulma çentik faktörü <em>K<sub>f</sub></em>:</p>
  <div class="formul-kutu">
    K<sub>f</sub> = 1 + q · (K<sub>t</sub> − 1)
  </div>
  <p>Uygulanan alternatif gerilme bu faktörle çarpılarak büyütülür: <strong>σ<sub>a_gerçek</sub> = K<sub>f</sub> · σ<sub>a_nominal</sub></strong>.</p>
</div>

<div class="uyari-kutu">
  <h4>Kritik Tasarım Kuralı: Fatura Radyusu (R) Hayatidir!</h4>
  <p>Bir milde çap 40 mm'den 50 mm'ye geçerken köşeye keskin (R = 0,2 mm) bir köşe bırakılırsa K<sub>t</sub> ≈ 2,8 olur; yani gerilme neredeyse 3 katına çıkar ve mil o faturadan yorulmayla kırılır! Fatura yarıçapı <strong>R ≥ 2 – 3 mm</strong> yapıldığında veya boşaltma kanalı (undercut / relief groove) açıldığında K<sub>t</sub> değeri 1,4 seviyesine iner ve yorulma ömrü 10 kat artar!</p>
</div>

<h2>4. Ortalama Gerilme ve Goodman Yorulma Kriteri</h2>
<p>Parça üzerinde hem bir statik ön yük (ortalama gerilme <em>σ<sub>m</sub></em>) hem de alternatif titreşim gerilmesi (<em>σ<sub>a</sub></em>) varsa kırılma dayanımı düşer. En yaygın kullanılan mühendislik kriteri <strong>Modifiye Goodman Denklemi</strong>dir:</p>
<div class="formul-kutu">
  (σ<sub>a</sub> / S<sub>e</sub>) + (σ<sub>m</sub> / R<sub>m</sub>) = 1 / S<sub>yorulma</sub>
</div>
<p>Burada <em>S<sub>e</sub></em> Marin düzeltmeli yorulma dayanımı, <em>R<sub>m</sub></em> malzemenin statik çekme dayanımı, <em>S<sub>yorulma</sub></em> ise dinamik emniyet katsayısıdır (Genel makine tasarımında S<sub>yorulma</sub> ≥ 1,5 – 2,0 olmalıdır).</p>

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
        <td><strong>Yorulma (Fatigue)</strong></td>
        <td>Akma dayanımının altındaki periyodik değişken yükler altında malzemenin çatlak ilerlemesi sonucu ani kırılması olayı.</td>
      </tr>
      <tr>
        <td><strong>Sürekli Mukavemet Sınırı (S<sub>e</sub>)</strong></td>
        <td>Çeliğin teorik olarak sonsuz sayıda çevrime (N > 10⁶) dayanabildiği maksimum değişken gerilme genliği.</td>
      </tr>
      <tr>
        <td><strong>Wöhler Eğrisi (S-N Curve)</strong></td>
        <td>Uygulanan gerilme genliği ile kırılmaya kadar geçen çevrim sayısı arasındaki logaritmik ilişkiyi gösteren diyagram.</td>
      </tr>
      <tr>
        <td><strong>Marin Faktörleri</strong></td>
        <td>Laboratuvar yorulma sınırını gerçek parçanın yüzey kalitesi, boyutu, yük tipi ve çalışma sıcaklığına göre küçülten düzeltme çarpanları.</td>
      </tr>
      <tr>
        <td><strong>Çentik Faktörü (K<sub>f</sub>)</strong></td>
        <td>Geometrik süreksizliklerin (kama kanalı, fatura radyusu vb.) malzemenin dinamik yorulma dayanımını ne kadar düşürdüğünü gösteren katsayı.</td>
      </tr>
      <tr>
        <td><strong>Goodman Diyagramı</strong></td>
        <td>Ortalama gerilme ile dalgalı gerilme genliğini birleştirerek dinamik emniyet sınırını belirleyen grafiksel ve analitik bağıntı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Makinelerdeki mekanik hasarların büyük kısmı statik aşırı yükten değil, dinamik yorulmadan kaynaklanır.</li>
    <li>Çeliklerde 10⁶ çevrimden sonra teorik sonsuz ömür sınırı (S<sub>e</sub> ≈ 0,5·R<sub>m</sub>) varken, alüminyumda sonsuz ömür sınırı yoktur.</li>
    <li>Gerçek parçalarda yüzey pürüzlülüğü, büyük parça çapı ve eksenel/burulma yükleri Marin faktörleriyle yorulma dayanımını %30–60 oranında budar.</li>
    <li>Mil faturalarında keskin köşelerden kesinlikle kaçınılmalı; cömert radyuslar (R ≥ 2 mm) veya bileme kanalları kullanılarak K<sub>t</sub> düşürülmelidir.</li>
    <li>Ortalama gerilme içeren dinamik sistemlerde Goodman formülü ile emniyet katsayısı S ≥ 1,5–2,0 sağlanmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Saha Arızası ve Kök Neden):</strong> Bir paketleme makinesinde dakikada 120 devir yapan transmisyon mili, devreye alındıktan 6 ay sonra (yaklaşık 1,5 × 10<sup>7</sup> devir) rulman faturasının tam dibinden jiletle kesilmiş gibi pürüzsüz ve son 1/4'lük kısmı pürüzlü koparak kırılmıştır. Yapılan statik hesapta eşdeğer gerilmenin akma dayanımının yarısı kadar olduğu görülmüştür. Bu kırılmanın mekanizması nedir ve teknik resimde ne düzeltilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Statik aşırı yüklenme kırılmasıdır; mil malzemesi 2 kat daha kalın yapılmalıdır.
      <div class="test-cevap">YANLIŞ. Kırılma yüzeyindeki pürüzsüz bölge (plaj çizgileri / beach marks) ve ani kopma bölgesi tipik yorulma hasarının parmak izidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tipik bir döner eğilme yorulması (fatigue failure) kırılmasıdır. Faturadaki keskin köşe (radyus R < 0,3 mm) gerilme yığılmasını (K<sub>f</sub> ≈ 2,5–3) tepeye çıkarmış, mikroskobik çatlak ilerleyerek mili kırmıştır. Düzeltme: Fatura köşesine en az R = 2,0 – 2,5 mm geçiş radyusu verilmeli veya DIN 509 F-tipi boşaltma kanalı açılmalı ve yüzey taşlanmalıdır.
      <div class="test-cevap">DOĞRU. Yorulma kırılmalarının %80'i keskin fatura köşelerinden başlar. Radyus büyütmek gerilme konsantrasyonunu düşürerek sonsuz ömür sağlar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Rulmanın yağı bittiği için mil sürtünmeden erimiştir.
      <div class="test-cevap">YANLIŞ. Mil erimemiş, mekanik çatlak ilerlemesiyle kırılmıştır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Malzeme ve Sonsuz Ömür):</strong> Bir test mühendisi, otomotivde 100 milyon çevrim boyunca titreşim altında çalışacak bir konsol kol için "Alüminyum 6082-T6 seçelim, çelik gibi sonsuz ömre sahip olur ve hafif kalır" demiştir. Bu mühendislik yaklaşımı neden hatalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Alüminyum titreşim altında hiç çalışamaz.
      <div class="test-cevap">YANLIŞ. Çalışabilir ancak sonlu ömür hesabı gerektirir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Alüminyum ve demir dışı alaşımların fiziksel olarak sürekli mukavemet sınırı (endurance limit) yoktur; çevrim sayısı arttıkça kırılma dayanımı sürekli düşmeye devam eder. 100 milyon çevrimde alüminyumun yorulma dayanımı statik dayanımının %20'sinin altına inebilir; sonsuz ömür sadece çeliklerde mevcuttur.
      <div class="test-cevap">DOĞRU. Alüminyum alaşımlarında Wöhler eğrisi asla yataylaşmaz. Bu nedenle yüksek çevrimli titreşimli sonsuz ömür istenen yerlerde uygun çelik alaşımları tercih edilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Alüminyum mıknatıs tutmadığı için titreşir.
      <div class="test-cevap">YANLIŞ. Manyetik özellikle mekanik yorulmanın hiçbir ilgisi yoktur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Analitik Marin Faktörü):</strong> Çekme mukavemeti R<sub>m</sub> = 600 MPa olan bir çelik milin laboratuvar yorulma sınırı S<sub>e</sub>' = 300 MPa'dır. Sahada çalışan gerçek milde; talaşlı imalat yüzey faktörü k<sub>a</sub> = 0,80, boyut faktörü k<sub>b</sub> = 0,85, yük faktörü k<sub>c</sub> = 1,0 (saf eğilme), diğer faktörler 1,0 olarak verilmiştir. Bu milin gerçek çalışma şartlarındaki düzeltilmiş sürekli mukavemet sınırı S<sub>e</sub> kaç MPa'dır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) S<sub>e</sub> = 204 MPa
      <div class="test-cevap">DOĞRU. <br>
      S<sub>e</sub> = k<sub>a</sub> · k<sub>b</sub> · k<sub>c</sub> · S<sub>e</sub>'<br>
      S<sub>e</sub> = 0,80 · 0,85 · 1,0 · 300 = 0,68 · 300 = 204 MPa.<br>
      Yani yüzey işleme ve parça boyutu nedeniyle yorulma dayanımı 300 MPa'dan 204 MPa'ya (%32 oranında) gerilemiştir!</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) S<sub>e</sub> = 300 MPa
      <div class="test-cevap">YANLIŞ. Düzeltme faktörleri ihmal edilmiş.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) S<sub>e</sub> = 150 MPa
      <div class="test-cevap">YANLIŞ. Hesaplama hatası.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 9.5: CIVATA HESABI (VDI 2230 VE ISO 898-1)
kitap.bolumEkle({
  id: "9-5",
  baslik: "Cıvata Hesabı",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makinelerde en yaygın sökülebilir bağlantı elemanı olan metrik cıvataların; ISO 898-1 mukavemet sınıflarını (8.8, 10.9, 12.9), ön gerilme kuvveti ve sıkma torku analitiğini (VDI 2230), cıvata-parça yay üçgeni (joint diagram) mekaniğini ve cıvataların neden asla kesmeye çalıştırılmaması gerektiğini derinlemesine öğretmektir.</p>
</div>

<h2>1. Cıvata Mukavemet Sınıfları (ISO 898-1 Standardı)</h2>
<p>Metrik cıvata kafalarında kabartma olarak basılan <strong>"8.8", "10.9", "12.9"</strong> gibi numaralar, cıvatanın mekanik sınırlarını tanımlayan iki kritik katsayıdır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Cıvata Kalite Sınıfı</th>
      <th>Kopma Dayanımı (R<sub>m</sub>) Hesabı</th>
      <th>Akma Dayanımı (R<sub>e</sub> / R<sub>p0.2</sub>) Hesabı</th>
      <th>Kullanım Alanı ve Mekanik Özelliği</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>4.6 / 5.6</strong></td>
      <td>R<sub>m</sub> = 4 × 100 = <strong>400 MPa</strong></td>
      <td>R<sub>e</sub> = 400 × 0,6 = <strong>240 MPa</strong></td>
      <td>Yumuşak inşaat demiri kalitesinde. <strong>Makinelerin taşıyıcı yapılarında asla kullanılmaz!</strong> Sadece hafif sac kapaklarda.</td>
    </tr>
    <tr>
      <td><strong>8.8 (Standart)</strong></td>
      <td>R<sub>m</sub> = 8 × 100 = <strong>800 MPa</strong></td>
      <td>R<sub>e</sub> = 800 × 0,8 = <strong>640 MPa</strong></td>
      <td><strong>Genel Makine İmalatının Altın Standardı.</strong> Şaseler, motor montaj ayakları, flanşlar, konveyörler. Yüksek süneklik ve darbe direnci.</td>
    </tr>
    <tr>
      <td><strong>10.9 (Yüksek Mukavemet)</strong></td>
      <td>R<sub>m</sub> = 10 × 100 = <strong>1000 MPa</strong></td>
      <td>R<sub>e</sub> = 1000 × 0,9 = <strong>900 MPa</strong></td>
      <td>Yüksek dinamik yükler, robot flanş bağlantıları, otomotiv süspansiyon ve aktarma organları, hidrolik silindir cıvataları.</td>
    </tr>
    <tr>
      <td><strong>12.9 (Ekstra Yüksek)</strong></td>
      <td>R<sub>m</sub> = 12 × 100 = <strong>1200 MPa</strong></td>
      <td>R<sub>e</sub> = 1200 × 0,9 = <strong>1080 MPa</strong></td>
      <td>Ağır pres kalıpları, kompakt alanlarda maksimum ön gerilme gerektiren yerler. Çentik ve hidrojen kırılganlığına daha duyarlıdır.</td>
    </tr>
  </tbody>
</table>

<h2>2. Ön Gerilme Kuvveti (Preload) ve Sıkma Torku (Tightening Torque)</h2>
<p>Bir cıvata sadece iki parçayı birbirine tutturan pasif bir çubuk değildir; sıkıldığında uzayan ve iki flanşı birbirine devasa bir kuvvetle bastıran <strong>ön gerilmeli sert bir yaydır</strong>.</p>

<div class="muhendislik-kutu">
  <h4>Sıkma Torku Formülasyonu (VDI 2230 / Kellermann-Klein)</h4>
  <p>Tork anahtarıyla uygulanan sıkma torku <em>M<sub>A</sub></em> [Nm], diş helisindeki sürtünmeyi ve cıvata kafası/pul altındaki sürtünmeyi yenerek cıvatanın gövdesinde eksenel ön gerilme kuvveti <em>F<sub>M</sub></em> [N] üretir:</p>
  <div class="formul-kutu">
    M<sub>A</sub> = F<sub>M</sub> · [ 0,16 · P + 0,58 · d<sub>2</sub> · μ<sub>diş</sub> + (D<sub>baş</sub> / 2) · μ<sub>baş</sub> ]
  </div>
  <p>Yaklaşık pratik mühendislik formülü:</p>
  <div class="formul-kutu">
    M<sub>A</sub> ≈ k · F<sub>M</sub> · d
  </div>
  <p>Burada <em>d</em> anma çapı [m], <em>k</em> tork katsayısıdır (yağlanmış standart cıvatada k ≈ 0,15–0,18; kuru/paslı cıvatada k ≈ 0,20–0,25).</p>
</div>

<div class="uyari-kutu">
  <h4>Sürtünme Tuzağı: Neden Tork Değil Ön Gerilme Önemlidir?</h4>
  <p>Uygulanan sıkma torkunun <strong>yaklaşık %90'ı sürtünmede kaybolur</strong> (%50 cıvata kafası altında, %40 diş helisinde). Torkun <strong>sadece %10'u</strong> cıvatayı geren faydalı eksenel kuvvete dönüşür!</p>
  <ul>
    <li>Eğer cıvata yağsız, kuru veya paslıysa, aynı torkla sıkıldığında cıvata <strong>yarı kuvvetle (%50 eksik)</strong> sıkılmış olur; cıvata gevşer veya yorulmayla kopar!</li>
    <li>Kritik cıvatalar daima katalogda belirtilen sürtünme katsayısına (örn: μ = 0,12 hafif yağlı) uygun kalibre tork anahtarıyla sıkılmalıdır.</li>
  </ul>
</div>

<h2>3. Cıvata-Parça Yay Üçgeni (Joint Diagram) ve Dinamik Koruma</h2>
<p>Cıvatalı bir bağlantıya dışarıdan değişken bir çekme yükü (<em>F<sub>A</sub></em>) etki ettiğinde, bu yükün ne kadarı cıvataya biner?</p>

<div class="muhendislik-kutu">
  <h4>Cıvatanın Dinamik Yük Hissiyatı (Rötscher Yay Modeli)</h4>
  <p>Cıvata elastik bir yay gibi uzarken (yay sabiti <em>k<sub>b</sub></em>), sıkılan gövde parçaları ise elastik bir yay gibi basılmıştır (yay sabiti <em>k<sub>m</sub></em>). Dışarıdan <em>F<sub>A</sub></em> dinamik çekme kuvveti uygulandığında cıvataya binen ilave kuvvet <em>ΔF<sub>b</sub></em>:</p>
  <div class="formul-kutu">
    ΔF<sub>b</sub> = F<sub>A</sub> · [ k<sub>b</sub> / (k<sub>b</sub> + k<sub>m</sub>) ] = F<sub>A</sub> · Φ
  </div>
  <p>Burada <strong>Φ (Kuvvet Giriş Faktörü)</strong> tipik olarak <strong>0,10 ila 0,20</strong> arasındadır.</p>
  <p><strong>Mucizevi Mühendislik Sonucu:</strong> Dış yükün %80–90'ı sıkılmış gövde parçalarının rahatlamasıyla (basıncın azalmasıyla) karşılanır! Cıvataya bu dinamik yükün <strong>sadece %10–20'si</strong> yansır. Bu sayede doğru ön gerilmeyle sıkılmış bir cıvata milyonlarca dinamik döngüye rağmen yorulmadan sapasağlam çalışır!</p>
</div>

<h2>4. Cıvataların Kesmeye Çalıştırılması Hatası ve Doğru Çözüm</h2>
<div class="uyari-kutu">
  <h4>Kesinlikle Kaçınılması Gereken Tasarım Hatası:</h4>
  <p>Standart metrik cıvatalar (DIN 912, DIN 933) ile delik arasında daima 0,5 ila 1,0 mm montaj boşluğu (clearance hole - ISO 273) vardır. İki plaka birbirine cıvatalandığında yanal kayma yükü geliyorsa:</p>
  <ul>
    <li><strong>Yük cıvata gövdesine kesme (shear) olarak binmemelidir!</strong> Çünkü parçalar 0,5 mm kayar, konum hassasiyeti kaybolur ve cıvata dişleri sacın keskin kenarına çarparak kesilir.</li>
    <li><strong>Doğru Yol 1 (Sürtünmeli Tutma):</strong> Cıvataların yüksek ön gerilmesiyle iki plaka arasında üretilen sürtünme kuvveti (<em>F<sub>s</sub> = μ · F<sub>ön_gerilme</sub></em>) kayma yükünden büyük olmalıdır.</li>
    <li><strong>Doğru Yol 2 (Pimleme):</strong> Kesme kuvvetini karşılamak için bağlantıya <strong>2 adet taşlanmış sertleştirilmiş silindirik/elmas pim (dowel pin - DIN 6325)</strong> çakılmalıdır. Cıvatalar sadece plakaları bastırmalı, pimler ise kesme yükünü sıfır boşlukla taşımalıdır.</li>
    <li><strong>Doğru Yol 3 (Raybalı / Alıştırma Cıvataları):</strong> Özel taşlanmış gövdeye sahip DIN 609 / ISO 7379 toleranslı alıştırma cıvataları kullanılmalıdır.</li>
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
        <td><strong>ISO 898-1</strong></td>
        <td>Karbon çeliği ve alaşımlı çelik cıvataların mekanik özelliklerini ve mukavemet sınıflarını (8.8, 10.9 vb.) belirleyen standart.</td>
      </tr>
      <tr>
        <td><strong>Ön Gerilme Kuvveti (Preload - F<sub>M</sub>)</strong></td>
        <td>Cıvatanın torkla sıkılması sonucu gövdesinde oluşan ve parçaları birbirine bastıran kalıcı elastik eksenel çekme kuvveti.</td>
      </tr>
      <tr>
        <td><strong>VDI 2230</strong></td>
        <td>Yüksek mukavemetli cıvatalı bağlantıların analitik hesaplanması ve boyutlandırılmasında dünya çapında kabul gören Alman mühendislik yönergesi.</td>
      </tr>
      <tr>
        <td><strong>Yay Üçgeni (Joint Diagram)</strong></td>
        <td>Cıvata uzaması ile sıkılan gövdenin elastik basılmasını gösteren ve dış dinamik yük paylaşımını açıklayan grafiksel model.</td>
      </tr>
      <tr>
        <td><strong>Dowel Pin (Merkezleme Pimi)</strong></td>
        <td>Cıvataları kesme kuvvetinden kurtaran ve montajda parçaların sıfır boşlukla konumlanmasını sağlayan taşlanmış pim (DIN 6325).</td>
      </tr>
      <tr>
        <td><strong>Sıkma Torku (Tightening Torque - M<sub>A</sub>)</strong></td>
        <td>Hedef ön gerilme kuvvetini oluşturmak için tork anahtarıyla cıvata kafasına uygulanan dönme momenti.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Genel endüstriyel makinelerde standart cıvata kalitesi 8.8, yüksek dinamik ve robotik yüklerde 10.9 veya 12.9 olmalıdır. 4.6 ve 5.6 kaliteler asla kullanılmamalıdır.</li>
    <li>Uygulanan sıkma torkunun %90'ı sürtünmeye harcanır. Torkun ön gerilmeye doğru dönüşebilmesi için dişlerin temiz ve doğru yağlanmış olması şarttır.</li>
    <li>Doğru sıkılmış cıvatalarda dış dinamik yükün yalnızca %10–20'si cıvataya yansır; bu durum cıvatayı yorulma kırılmasından korur.</li>
    <li>Cıvatalar asla kesmeye (shear) maruz bırakılmamalıdır; enine kuvvetler ya ön gerilme sürtünmesiyle ya da taşlanmış merkezleme pimleriyle (dowel pin) taşınmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Mukavemet Sınıfı Çözümleme):</strong> Ağır bir pres fikstüründe kullanılan M16 ebadındaki bir cıvatanın kafasında "10.9" ibaresi okunmaktadır. ISO 898-1 standardına göre bu cıvatanın nominal çekme kopma dayanımı R<sub>m</sub> ve akma dayanımı R<sub>e</sub> kaç MPa'dır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) R<sub>m</sub> = 1000 MPa ; R<sub>e</sub> = 900 MPa
      <div class="test-cevap">DOĞRU. <br>
      İlk rakam × 100 = R<sub>m</sub> ⇒ 10 × 100 = 1000 MPa. <br>
      İkinci rakam / 10 = Akma oranı ⇒ 0,9. <br>
      R<sub>e</sub> = 1000 × 0,9 = 900 MPa.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) R<sub>m</sub> = 109 MPa ; R<sub>e</sub> = 100 MPa
      <div class="test-cevap">YANLIŞ. Rakamlar doğrudan okunmaz, kurala göre hesaplanır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) R<sub>m</sub> = 1000 MPa ; R<sub>e</sub> = 640 MPa
      <div class="test-cevap">YANLIŞ. 640 MPa akma 8.8 kalitenin değeridir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Saha Arızası ve Gevşeme Nedeni):</strong> Bir robot taban flanşı şaseye 8 adet M12-8.8 cıvata ile bağlanmıştır. Montaj ustası tork anahtarı kullanmamış, standart cırcır kol ile cıvataları "el kararıyla tatlı sert" sıkmıştır. Robot çalışmaya başladıktan 3 gün sonra tüm cıvataların gevşediği ve robotun sallandığı görülmüştür. Bu cıvataların gevşemesinin temel mekanik sebebi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Robotun titreşimi her türlü cıvatayı gevşetir, cıvatalar şaseye kaynaklanmalıdır.
      <div class="test-cevap">YANLIŞ. Cıvatalar doğru sıkıldığında asla gevşemez; kaynaklamak sökülebilirliği yok eder.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Cıvatalar yeterli torkla sıkılmadığı için gerekli yüksek ön gerilme kuvveti (F<sub>M</sub>) oluşturulamamıştır. Dinamik devrilme momentleri flanş temas yüzeyinde mikro açılmalara ve mikro kaymalara yol açmış, bu da dişlerin spiral yüzeyinde sürtünme kilidini yok ederek cıvataların kendi kendine dönüp gevşemesine sebep olmuştur. Çözüm: Cıvatalar kalibre tork anahtarıyla katalog torkunda (örn: M12-8.8 için ~85 Nm) sıkılmalıdır.
      <div class="test-cevap">DOĞRU. Cıvataların gevşemesinin 1 numaralı sebebi eksik ön gerilmedir. Yeterli ön gerilme olduğunda flanşlar birbirine öyle bir kuvvetle basar ki mikro kayma oluşamaz ve cıvata asla gevşeyemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cıvatalara yapıştırıcı sürülmediği için gevşemiştir.
      <div class="test-cevap">YANLIŞ. Doğru ön gerilmeyle sıkılmış cıvata kimyasal yapıştırıcı olmadan da gevşemez.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Konstrüksiyon ve Kesme Yükü):</strong> Yatay eksende 20 kN kesme kuvveti taşıyan bir lineer modül braketi, gövdeye 4 adet standart M10 cıvata ile bağlanmak istenmektedir. Montaj delikleri sacda Ø11 mm (standart boşluklu) delinmiştir. Bu tasarım neden güvenilmezdir ve standartlara uygun doğru çözüm nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) M10 cıvatalar çok incedir, M30 yapılmalıdır.
      <div class="test-cevap">YANLIŞ. Sorun cıvatanın çapı değil, boşluklu delikte kesmeye maruz kalmasıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Standart cıvatalar ile delik arasındaki 1 mm boşluk sebebiyle yük altında plaka kayar; cıvata dişleri keskin kenarlara basarak çentiklenir ve kesilir. Doğru çözüm: Bağlantıya 2 adet taşlanmış sertleştirilmiş merkezleme pimi (dowel pin) eklenmeli, kesme yükü tamamen pimlere aktarılmalı, cıvatalar ise sadece yüzey basısını sağlamalıdır.
      <div class="test-cevap">DOĞRU. Hassas otomasyonda cıvatalar asla kesmeye çalıştırılmaz. Kesme ve konum sıfırlama görevi daima taşlanmış pimlere verilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cıvataların altına yaylı rondela konulması yeterlidir.
      <div class="test-cevap">YANLIŞ. Yaylı rondelalar DIN standartlarınca yüksek mukavemetli bağlantılardan çıkarılmıştır; kesme yükünü karşılayamaz.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 9.6: MİL HESABI (ASME VE DİNAMİK KRİTİK HIZ)
kitap.bolumEkle({
  id: "9-6",
  baslik: "Mil Hesabı",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Güç ve hareket iletiminin en temel elemanı olan dönen millerinin; dinamik eğilme ve burulma momentleri altında ASME B106.1M ve DIN 743 standartlarına göre boyutlandırılmasını, kama kanalı gerilme yığılmalarını, kritik dönme hızı (whirling / critical speed) rezonans analizini ve burulma rijitliği kriterlerini öğretmektir.</p>
</div>

<h2>1. Dönen Millerde Gerilme Karakteristiği ve ASME Tasarım Modeli</h2>
<p>Dönen bir transmisyon milinde fiziksel şartlar statik parçalardan çok farklıdır:</p>
<ul>
  <li><strong>Eğilme Momenti (M):</strong> Dış kuvvetlerin (dişli, kasnak, kayış yükü) oluşturduğu eğilme momenti mil dönerken her noktada yön değiştirir. Milin bir noktası üstteyken basma, yarım tur sonra alttayken çekme gerilmesine maruz kalır. Yani <strong>eğilme gerilmesi tam değişken (Fully Reversed: R = −1)</strong> dinamik bir yüktür!</li>
  <li><strong>Burulma Momenti (T):</strong> Motordan iletilen tork genellikle sabit veya hafif dalgalıdır (R ≈ 0 ila +1).</li>
</ul>

<div class="muhendislik-kutu">
  <h4>ASME B106.1M Şaft Boyutlandırma Formülü</h4>
  <p>Darbe, titreşim ve yorulma faktörlerini birleştiren ASME standardına göre, dolu dairesel bir mil için gerekli minimum emniyetli mil çapı <em>d</em> [mm]:</p>
  <div class="formul-kutu">
    d = [ (16 / (π · τ<sub>em</sub>)) · √ ( (C<sub>m</sub> · M)² + (C<sub>t</sub> · T)² ) ]<sup>1/3</sup>
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>M:</strong> Kesitteki maksimum eğilme momenti [N·mm].</li>
    <li><strong>T:</strong> Kesitteki burulma momenti [N·mm] (T = 9550 · P / n · 1000).</li>
    <li><strong>τ<sub>em</sub>:</strong> İzin verilen kayma gerilmesi:
      <ul>
        <li>Kama kanalsız milde: <em>τ<sub>em</sub> = min(0,30 · R<sub>e</sub> , 0,18 · R<sub>m</sub>)</em></li>
        <li>Kama kanallı milde (çentik etkisi nedeniyle %25 düşürülür): <em>τ<sub>em</sub> = min(0,225 · R<sub>e</sub> , 0,135 · R<sub>m</sub>)</em></li>
      </ul>
    </li>
    <li><strong>C<sub>m</sub> ve C<sub>t</sub> (Sayısal Şok ve Dinamik Faktörler):</strong>
      <table class="standart-tablo">
        <thead>
          <tr>
            <th>Yükleme Karakteristiği</th>
            <th>Eğilme Faktörü (C<sub>m</sub>)</th>
            <th>Burulma Faktörü (C<sub>t</sub>)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Durgun, darbesiz yük (fan, hafif konveyör)</td>
            <td>1,5</td>
            <td>1,0</td>
          </tr>
          <tr>
            <td>Hafif darbeli yük (takım tezgahı, mikser)</td>
            <td>1,5 – 2,0</td>
            <td>1,0 – 1,5</td>
          </tr>
          <tr>
            <td>Ağır şoklu ve darbeli yük (pres, kırıcı, zımba)</td>
            <td>2,0 – 3,0</td>
            <td>1,5 – 3,0</td>
          </tr>
        </tbody>
      </table>
    </li>
  </ul>
</div>

<h2>2. Burulma Rijitliği (Torsional Rigidity) Kriteri</h2>
<p>Özellikle enkoderli servo eksenlerde, vidalı mil ara şaftlarında ve baskı makinelerinde milin mukavemeti yetse bile burulma esnemesi pozisyon hatasına ve eksen kararsızlığına yol açar.</p>

<div class="muhendislik-kutu">
  <h4>Birim Boydaki Burulma Açısı Formülü</h4>
  <div class="formul-kutu">
    θ = (T · L) / (G · J<sub>p</sub>) [radyan]
  </div>
  <p>Burada <em>G</em> kayma modülü (çelikte G ≈ 80.000 MPa), <em>J<sub>p</sub></em> polar atalet momentidir (J<sub>p</sub> = π · d<sup>4</sup> / 32). Derece cinsinden birim boydaki burulma açısı:</p>
  <div class="formul-kutu">
    θ' = (584 · T) / (G · d<sup>4</sup>) [derece / metre]
  </div>
  <p><strong>Kabul Kriteri:</strong> Hassas transmisyon ve servo millerinde izin verilen burulma açısı: <strong>θ' ≤ 0,25° ila 0,5° / metre</strong> olmalıdır. Genel makine millerinde azami 1°/m kabul edilir.</p>
</div>

<h2>3. Kritik Dönme Hızı (Whirling / Critical Speed) ve Rezonans</h2>
<p>Dönen her mil, üzerinde taşıdığı kütlelerle (dişli, kasnak, kaplin) birlikte bir kütle-yay titreşim sistemidir. Milin geometrik merkezi ile ağırlık merkezi arasında mikron mertebesinde dahi bir eksantriklik (balanssızlık) varsa, merkezkaç kuvveti mili dışarı doğru bükmeye çalışır.</p>

<div class="muhendislik-kutu">
  <h4>Kritik Devir ve Rayleigh-Ritz Yaklaşımı</h4>
  <p>Milin statik sehiminden (<em>δ<sub>statik</sub></em>) hareketle 1. doğal kritik dönme hızı <em>ω<sub>cr</sub></em> [rad/s] ve kritik devir <em>n<sub>cr</sub></em> [d/dak]:</p>
  <div class="formul-kutu">
    ω<sub>cr</sub> = √ ( g / δ<sub>statik</sub> ) [rad/s]
  </div>
  <div class="formul-kutu">
    n<sub>cr</sub> ≈ 300 / √ ( δ<sub>statik</sub> [cm] ) = 946 / √ ( δ<sub>statik</sub> [mm] ) [d/dak]
  </div>
</div>

<div class="uyari-kutu">
  <h4>Kritik Rezonans Bölgesi Kuralı:</h4>
  <p>Bir mil asla kritik devrine yakın çalıştırılmamalıdır! Mil kritik devre ulaştığında genlik teorik olarak sonsuza gider; mil şiddetle çırpmaya başlar, rulmanları parçalar ve şaseyi dağıtır.</p>
  <ul>
    <li><strong>Rijit Şaft Tasarımı (Alt Kritik Rejim - Subcritical):</strong> Milin maksimum çalışma devri <em>n<sub>çalışma</sub> ≤ 0,80 · n<sub>cr</sub></em> olmalıdır (Genel otomasyon standardı).</li>
    <li><strong>Esnek Şaft Tasarımı (Üst Kritik Rejim - Supercritical):</strong> Yüksek hızlı türbin ve santrifüjlerde çalışma devri <em>n<sub>çalışma</sub> ≥ 1,25 · n<sub>cr</sub></em> seçilir; kalkış esnasında rezonans bölgesi çok yüksek ivmeyle hızla geçilir.</li>
  </ul>
</div>

<h2>4. Mil Üzeri Eleman Bağlantıları</h2>
<table class="standart-tablo">
  <thead>
    <tr>
      <th>Bağlantı Yöntemi</th>
      <th>Tork İletim Mekanizması</th>
      <th>Gerilme Yığılması (K<sub>t</sub>)</th>
      <th>Avantaj ve Dezavantajları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Paralel Kama (DIN 6885-A)</strong></td>
      <td>Kama yan yüzeylerinin mil ve göbek kanalına basmasıyla form kilit.</td>
      <td><strong>Çok Yüksek (K<sub>t</sub> ≈ 2,2 – 3,0).</strong> Kanal dipleri çatlak başlangıcıdır.</td>
      <td>Düşük maliyet, kolay montaj. Ancak dinamik yön değiştiren (ileri-geri) yüklerde boşluk yapar ve yorulma dayanımını %25–30 düşürür.</td>
    </tr>
    <tr>
      <td><strong>Konik Sıkma Bileziği (Tollok / Bikon / Shrink Disc)</strong></td>
      <td>İç içe geçen çift koniğin cıvatalarla sıkılarak mil üzerine radyal basınç uygulaması (sürtünme kilidi).</td>
      <td><strong>Çok Düşük (K<sub>t</sub> ≈ 1,0 – 1,1).</strong> Milde kama kanalı açılmaz.</td>
      <td><strong>Sıfır boşluk (zero backlash).</strong> Mil mukavemetini zayıflatmaz; yön değiştiren dinamik torklar ve servo motorlar için idealdir.</td>
    </tr>
    <tr>
      <td><strong>Evolvent Evolvent Şaft (DIN 5480 Spline)</strong></td>
      <td>Mil ve göbek çevresine açılmış çoklu dişli profili.</td>
      <td>Orta (K<sub>t</sub> ≈ 1,6 – 1,8). Yük tüm çevreye dağılır.</td>
      <td>Çok yüksek tork taşıma kapasitesi; eksenel kaymaya izin verir. İmalat maliyeti yüksektir.</td>
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
        <td><strong>ASME B106.1M</strong></td>
        <td>Dönen millerin eğilme ve burulma dinamik momentleri altında boyutlandırılmasını düzenleyen uluslararası standart.</td>
      </tr>
      <tr>
        <td><strong>Kritik Hız (Whirling / n<sub>cr</sub>)</strong></td>
        <td>Milin dönme frekansının doğal eğilme rezonans frekansıyla çakıştığı ve yıkıcı çırpma titreşimlerinin oluştuğu devir.</td>
      </tr>
      <tr>
        <td><strong>Burulma Rijitliği (Torsional Rigidity)</strong></td>
        <td>Milin uygulanan tork altında eksenel açısal bükülmeye karşı gösterdiği geometrik ve malzeme direnci (G·Jp).</td>
      </tr>
      <tr>
        <td><strong>Konik Sıkma Bileziği (Shrink Disc)</strong></td>
        <td>Mil üzerinde kama kanalı açmaksızın sürtünmeyle sıfır boşluklu yüksek tork aktaran mekatronik bağlantı elemanı.</td>
      </tr>
      <tr>
        <td><strong>Evolvent Şaft (DIN 5480 Spline)</strong></td>
        <td>Ağır torkları taşımak için mil çevresine diş profilleri açarak yükü çevreye yayan çoklu kamalı mil.</td>
      </tr>
      <tr>
        <td><strong>Tam Değişken Eğilme (Fully Reversed)</strong></td>
        <td>Mil dönerken her devirde liflerin sırayla basma ve çekmeye maruz kalmasıyla oluşan R = -1 yorulma döngüsü.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Dönen millerde eğilme gerilmesi daima tam değişken (R = -1) dinamik yorulma üretir; bu sebeple hesap statik akmaya göre değil dinamik yorulmaya göre yapılmalıdır.</li>
    <li>ASME standardı mil çapı formülü eğilme ve burulma momentlerini şok faktörleriyle birleştirir; kama kanalı varsa izin verilen gerilme %25 düşürülür.</li>
    <li>Hassas servo şaftlarında burulma esnemesi θ' ≤ 0,25° – 0,5° / m kriteriyle sınırlandırılmalıdır.</li>
    <li>Milin çalışma devri doğal kritik hızın (n<sub>cr</sub>) en fazla %80'i kadar olmalıdır (n<sub>çalışma</sub> ≤ 0,8·n<sub>cr</sub>); rezonans bölgesine asla girilmemelidir.</li>
    <li>Dinamik yön değiştiren servo tahriklerinde kama kanalı yerine konik sıkma bilezikleri (shrink disc) tercih edilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Kritik Devir ve Rezonans Analizi):</strong> İki ucu rulmanla yataklanmış bir vidalı milin kendi ağırlığı ve somun ağırlığı sebebiyle yatay montajda oluşturduğu statik sehim δ<sub>statik</sub> = 0,25 mm olarak ölçülmüştür. Rayleigh yaklaşımına göre (n<sub>cr</sub> ≈ 946 / √δ [mm]), bu milin 1. doğal kritik dönme hızı n<sub>cr</sub> yaklaşık kaç d/dak'dır ve güvenli maksimum çalışma devri ne olmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) n<sub>cr</sub> ≈ 1892 d/dak ; Maksimum güvenli çalışma devri: n<sub>çalışma</sub> ≤ 1513 d/dak
      <div class="test-cevap">DOĞRU. <br>
      n<sub>cr</sub> ≈ 946 / √(0,25) = 946 / 0,5 = 1892 d/dak. <br>
      Rezonanstan uzak kalmak için subcritical güvenlik kuralı uygulanır: <br>
      n<sub>çalışma</sub> ≤ 0,80 · n<sub>cr</sub> = 0,80 · 1892 ≈ 1513 d/dak. <br>
      Servo motor devri 1500 d/dak üzerinde sınırlandırılmalıdır; aksi halde mil rezonansta çırpmaya başlar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) n<sub>cr</sub> ≈ 3784 d/dak ; n<sub>çalışma</sub> = 3000 d/dak
      <div class="test-cevap">YANLIŞ. 0,25'in karekökü 0,5'tir, 0,25'e doğrudan bölünmemelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) n<sub>cr</sub> ≈ 473 d/dak
      <div class="test-cevap">YANLIŞ. Formüldeki karekök çarpılmış veya hatalı bölünmüştür.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Bağlantı Seçimi ve Yön Değiştirme):</strong> Yüksek dinamik kalkış-duruş yapan (dakikada 60 kez ileri ve geri yön değiştiren) bir servo redüktör çıkış miline standart DIN 6885 kama ile bir triger dişlisi bağlanmıştır. 2 ay sonra sistemde eksenel boşluk (backlash) oluştuğu, pozisyonlama hassasiyetinin bozulduğu ve kama kanalının kenarlarının ezildiği tespit edilmiştir. Bu mekanik problemi kalıcı olarak ortadan kaldırmak için hangi bağlantı yöntemine geçilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kamayı yuvaya çekiçle daha sıkı çakmak ve üzerine punta kaynağı atmak.
      <div class="test-cevap">YANLIŞ. Kaynak mili bozar, balans yaratır ve sökülemez hale getirir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kama bağlantısı sökülmeli; yerine milde gerilme yığılması yaratmayan ve çift yönlü dinamik torkları sürtünmeyle sıfır boşluklu (zero backlash) aktaran Konik Sıkma Bileziği (Shrink Disc / Bikon) kullanılmalıdır.
      <div class="test-cevap">DOĞRU. Paralel kamalar tek yönlü sürekli torklar için uygundur. Hızlı yön değiştiren servo uygulamalarında kama kanalı çekiçlenerek ezilir ve boşluk yapar. Konik sıkma bilezikleri sıfır boşluklu yapısıyla tersinir dinamik torkların kesin çözümüdür.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kamanın malzemesini pirinç yapmak.
      <div class="test-cevap">YANLIŞ. Pirinç çelikten çok daha yumuşaktır, anında sıyrılır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Dinamik Gerilme Kuralı):</strong> Neden dönen bir transmisyon milinin statik eşdeğer gerilme formülü yerine ASME veya DIN 743 yorulma modelleriyle hesaplanması zorunludur?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çünkü mil dönerken dış kuvvetler sabit kalsa dahi milin her bir yüzey lifi her devirde periyodik olarak maksimum çekme ve maksimum basma gerilmelerine maruz kalır (tam değişken döner eğilme yorulması). Statik analiz bu dinamik yorulma hasarını öngöremez.
      <div class="test-cevap">DOĞRU. Dönen millerin eğilme gerilmesi doğası gereği dinamik alternatif bir yüktür. Parça statik akma sınırının üçte birinde dahi yorulmayla kırılabilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Statik formüller sadece kare kesitli parçalar için geçerlidir.
      <div class="test-cevap">YANLIŞ. Statik mukavemet dairesel kesitlerde de geçerlidir ancak dönen millerin dinamik doğasını kapsamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Çünkü miller sadece burulmaya maruz kalır, eğilme hiç oluşmaz.
      <div class="test-cevap">YANLIŞ. Kasnak ve dişli radyal kuvvetleri millerde daima çok büyük eğilme momentleri üretir.</div>
    </div>
  </div>
</div>
`
});
