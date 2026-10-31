/* ========================================================================
   MODÜL 7: OTOMASYON MEKANİZMALARI (m07-a.js)
   Bölüm 7.1: Konveyör Sistemleri
   Bölüm 7.2: Gripper ve Tutucular
   Bölüm 7.3: Robot Uç İşlemcisi (EOAT)
   ======================================================================== */

// BÖLÜM 7.1: KONVEYÖR SİSTEMLERİ
kitap.bolumEkle({
  id: "7-1",
  baslik: "Konveyör Sistemleri",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Endüstriyel otomasyon hatlarında parçaların istasyonlar arasında sürekli, kesikli veya akümülasyonlu (biriktirmeli) transferini sağlayan konveyör mekanizmalarının; bant/kayış/zincir dinamiği, sürtünme modelleri, Euler-Eytelwein sarım sürtünmesi denklemi, tahrik ve gergi tamburu boyutlandırması, mil eğilme-burulma mukavemeti ve motor gücü hesaplama metodolojilerini eksiksiz kavramaktır.</p>
</div>

<h2>1. Endüstriyel Konveyör Tipleri ve Karşılaştırmalı Mekanik Analiz</h2>
<p>Konveyörler, otomasyon mimarisinin omurgasını oluşturur. Yanlış konveyör seçimi; ürün yüzeyinde çizilmelere, hatta duruş anında motorun aşırı ısınmasına, hat sıkışmalarına (jamming) ve çevrim süresinin bozulmasına yol açar.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Konveyör Tipi</th>
      <th>Mekanik Yapı ve Tahrik Elemanı</th>
      <th>Tipik Sürtünme Katsayısı (μ)</th>
      <th>Avantajları</th>
      <th>Kritik Tasarım Kısıtları ve Riskleri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Düz Bantlı Konveyör (Flat Belt)</strong></td>
      <td>PVC, PU veya Silikon kaplı katmanlı tekstil kordlu bant; bombeli tahrik ve gergi tamburları.</td>
      <td>Bant-Tabla (Çelik): 0,25 – 0,35<br>Bant-Tabla (PE1000): 0,18 – 0,22</td>
      <td>Yüksek hız (3 m/s'ye kadar), sessiz çalışma, düşük maliyet, küçük parçalara uygun pürüzsüz yüzey.</td>
      <td>Akümülasyona (hat üzerinde ürün durdurmaya) uygun değildir; bant kayar, ısınır ve aşınır. Eksenel gezinme (tracking) hassastır.</td>
    </tr>
    <tr>
      <td><strong>Modüler Plastik Bantlı (Modular Belt)</strong></td>
      <td>Menteşeli birbirine kilitlenen POM (Asetal), PP veya PE baklalar; dişli çarklar (sprocket) ile pozitif tahrik.</td>
      <td>Modüler-POM Kızak: 0,15 – 0,20<br>Modüler-Çelik: 0,20 – 0,25</td>
      <td>Kayma ve eksenel gezinme yapmaz; pozitif dişli kavrama; kolay hasarlı bakla değişimi; yıkanabilir hijyenik hatlar.</td>
      <td>Gürültü seviyesi bantlıya göre yüksektir. Dişli kord poligon etkisi (chordal action) nedeniyle hız dalgalanması oluşur.</td>
    </tr>
    <tr>
      <td><strong>Rulolu Akümülasyonlu (Accumulation Roller)</strong></td>
      <td>Çelik/paslanmaz boru rulolar; içten sürtünmeli debriyaj (friction clutch) veya teğetsel kayış/zincir tahriki.</td>
      <td>Rulo İçi Kayma: 0,05 – 0,12<br>Rulman Yuvarlanma: 0,005</td>
      <td>Hat üzerinde stoper kapandığında ürünler dururken rulolar ürünün altında kayar; ürüne minimum hat basıncı uygular.</td>
      <td>Küçük, ince veya esnek parçaların rulolar arasına sıkışma riski; tahrik kayışının periyodik gerginlik ihtiyacı.</td>
    </tr>
    <tr>
      <td><strong>Triger Kayışlı Palet Konveyörü (Timing Belt Pallet)</strong></td>
      <td>Çelik kordlu poliüretan triger kayış (T10, AT10) üzerinde taşınan hassas işleme paletleri.</td>
      <td>Palet-Kayış (Sürtünmeli): 0,20<br>Kayış-Kızak (PA/PE): 0,15</td>
      <td>Hassas konumlama (±0,1 mm); yüksek tork aktarımı; montaj robotları ve fikstürlü transfer için ideal.</td>
      <td>Yüksek ilk yatırım maliyeti; palet merkezleme ve pnömatik indeksleme stoperleri gerektirir.</td>
    </tr>
    <tr>
      <td><strong>Plastik Baklalı Zincir (Slat Chain / Flexlink)</strong></td>
      <td>Alüminyum profil gövde üzerinde 3D uzayda kavis alabilen POM baklalı dar zincir.</td>
      <td>POM Zincir-PE Kılavuz: 0,15 – 0,20</td>
      <td>Yatay ve düşey virajları tek bir tahrikle geçebilme; kompakt fabrika yerleşimi; şişe, kutu, ilaç taşıma.</td>
      <td>Aşırı çekme yüklerinde zincir uzaması; hat boyu uzadıkça zincir gerdirme istasyonu mecburiyeti.</td>
    </tr>
  </tbody>
</table>

<h2>2. Konveyör Çekme Kuvveti ve Güç Hesaplama Metodolojisi</h2>
<p>Bir konveyör tahrik motoru ve redüktörü boyutlandırılırken iki ana çalışma rejimi analiz edilmelidir: <strong>Normal Taşıma Rejimi</strong> ve <strong>Akümülasyon (Blokaj) Rejimi</strong>.</p>

<div class="muhendislik-kutu">
  <h4>Analitik Çekme Kuvveti Formülasyonu</h4>
  <p>Toplam teğetsel çekme kuvveti <em>F<sub>t</sub></em> [N], taşınan yükün sürtünmesi, bandın kendi ağırlığının alt ve üst kızaklardaki sürtünmesi ve varsa eğim yerçekimi bileşeninin cebirsel toplamıdır:</p>
  <div class="formul-kutu">
    F<sub>t</sub> = [ (m<sub>yük</sub> + m<sub>bant_üst</sub>) · μ<sub>kızak</sub> + m<sub>bant_alt</sub> · μ<sub>dönüş</sub> ] · g · cos(α) ± (m<sub>yük</sub> + m<sub>bant_üst</sub>) · g · sin(α) + F<sub>aküm</sub>
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>m<sub>yük</sub>:</strong> Konveyör üzerindeki toplam iş parçası kütlesi [kg].</li>
    <li><strong>m<sub>bant_üst</sub>:</strong> Taşıma yapan üst hat bandının kütlesi [kg] (m<sub>bant_üst</sub> = L · m'<sub>bant</sub>).</li>
    <li><strong>m<sub>bant_alt</sub>:</strong> Boşta dönen alt hat bandının kütlesi [kg].</li>
    <li><strong>μ<sub>kızak</sub>:</strong> Taşıyıcı tabla/kızak ile bant arasındaki dinamik sürtünme katsayısı.</li>
    <li><strong>μ<sub>dönüş</sub>:</strong> Alt dönüş destek makaraları sürtünmesi (sürtünmeli tablalı ise μ<sub>kızak</sub>, avara rulolu ise ~0,05).</li>
    <li><strong>α:</strong> Konveyörün yatayla yaptığı eğim açısı [°] (tırmanmada +, inişte -).</li>
    <li><strong>F<sub>aküm</sub>:</strong> Akümülasyon (stoperde birikme) anında kayan parçaların banta uyguladığı ilave sürtünme kuvveti:
      <div class="formul-kutu">
        F<sub>aküm</sub> = m<sub>aküm_yük</sub> · g · μ<sub>ürün_bant</sub>
      </div>
    </li>
  </ul>
</div>

<h3>2.1. Euler-Eytelwein Sarım Sürtünmesi Denklemi</h3>
<p>Düz bantlı konveyörlerde tahrik tamburu ile bant arasında pozitif dişli kilidi yoktur; güç tamamen sürtünme ile aktarılır. Bandın tambur üzerinde kaymadan dönebilmesi için gerekli gergi kuvveti Euler-Eytelwein kuralı ile denetlenir:</p>
<div class="formul-kutu">
  T<sub>1</sub> / T<sub>2</sub> ≤ e<sup>(μ<sub>tambur</sub> · θ)</sup>
</div>
<p>Burada <strong>T<sub>1</sub></strong> çekme tarafındaki maksimum gerilme (T<sub>1</sub> = T<sub>2</sub> + F<sub>t</sub>), <strong>T<sub>2</sub></strong> gevşek taraf gerilmesi, <strong>θ</strong> bandın tahrik tamburuna sarılma açısı [radyan] (genellikle 180° = π radyan; saptırma rulosu ile 210°–230° seviyesine çıkarılabilir), <strong>μ<sub>tambur</sub></strong> ise tambur kaplaması (kauçuk kaplı tamburda çelik banta karşı 0,35–0,45; çıplak çelikte 0,20–0,25) ile bant arasındaki sürtünme katsayısıdır.</p>

<div class="uyari-kutu">
  <h4>Kritik Tasarım Kuralı: T<sub>2</sub> Ön Gerginliği ve Yatak Yükü</h4>
  <p>Tamburun bandı kaydırmadan çekebilmesi için minimum gevşek taraf gergi kuvveti: <strong>T<sub>2,min</sub> = F<sub>t</sub> / (e<sup>μ<sub>tambur</sub>·θ</sup> − 1)</strong> olmalıdır. Tambur miline binen toplam radyal yatak yükü yaklaşık olarak <strong>F<sub>radyal</sub> ≈ T<sub>1</sub> + T<sub>2</sub></strong> kadardır. Bu radyal yük, tambur rulmanlarının ve şase bağlantısının boyutlandırılmasında anahtar parametredir.</p>
</div>

<h3>2.2. Motor Gücü ve Şaft Mukavemeti Hesabı</h3>
<p>Konveyör hattı hızının <em>v</em> [m/s] ve tahrik mekanizması toplam mekanik veriminin <em>η</em> (redüktör + rulmanlar: tipik olarak 0,75 – 0,88) olduğu durumda gerekli elektrik motoru mekanik mil gücü:</p>
<div class="formul-kutu">
  P<sub>motor</sub> = (F<sub>t</sub> · v) / (1000 · η) [kW]
</div>
<p>Tahrik tamburu devri <em>n<sub>tambur</sub></em> = (v · 60) / (π · D<sub>tambur</sub>) [d/dak] olup, motor-redüktör çıkış torku:</p>
<div class="formul-kutu">
  M<sub>d</sub> = (9550 · P<sub>motor</sub>) / n<sub>tambur</sub> [Nm]
</div>

<h2>3. Tambur Çapı, Bombe (Crowning) ve Merkezleme Mekaniği</h2>
<p>Düz bantların çalışma esnasında şasenin sağına veya soluna kaçmasını (tracking error) önlemek amacıyla tahrik ve kuyruk tamburlarına DIN 22101 / ISO standartlarına uygun <strong>trapez veya dairesel taçlandırma (bombe / crowned pulley)</strong> uygulanır.</p>

<div class="muhendislik-kutu">
  <h4>Tambur Bombe Geometrisi ve Fiziksel Etkisi</h4>
  <ul>
    <li><strong>Bombe Yüksekliği (h):</strong> Tambur merkez çapı <em>D<sub>c</sub></em>, kenar çapı <em>D<sub>e</sub></em> olmak üzere, bombe farkı: <strong>h = (D<sub>c</sub> − D<sub>e</sub>) / 2</strong>. Tipik değer: h ≈ 0,005 · D<sub>tambur</sub> (Örn: Ø100 mm tambur için merkez çapı 101 mm, kenar çapları 100 mm yapılır; h = 0,5 mm).</li>
    <li><strong>Kendi Kendini Merkezleme İlkesi:</strong> Bant, çevresel hızı daha yüksek olan en büyük çapa doğru tırmanma eğilimindedir. Bant merkezden kaçtığında, bombeli yüzey bandın kenarında asimetrik gerilme farkı yaratarak bandı tekrar merkeze iten eksenel bir toparlama kuvveti üretir.</li>
    <li><strong>Minimum Tambur Çapı Kriteri:</strong> Bant iç kordundaki tekstil liflerinin veya çelik tellerin yorulma çatlağı oluşturmaması için bant üreticisinin katalogundaki minimum bükülme çapına (genellikle bant et kalınlığının 30 ila 50 katı) kesinlikle uyulmalıdır.</li>
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
        <td><strong>Euler-Eytelwein İlkesi</strong></td>
        <td>Esnek kayış/bantların tambur etrafındaki sürtünmeli güç aktarımında kaymayı önleyici maksimum gerilme oranını tanımlayan formülasyon.</td>
      </tr>
      <tr>
        <td><strong>Crowned Pulley (Bombeli Tambur)</strong></td>
        <td>Orta kısmı kenarlarına kıyasla hafifçe daha kalın (çapı büyük) tornalanmış, bandın eksenel kaçışını dinamik olarak düzelten tambur geometrisi.</td>
      </tr>
      <tr>
        <td><strong>Akümülasyon (Accumulation)</strong></td>
        <td>Tahrik mekanizması durmaksızın çalışırken, bir stoper vasıtasıyla ürünlerin hat üzerinde arka arkaya hasar görmeden birikmesi durumu.</td>
      </tr>
      <tr>
        <td><strong>Poligon Etkisi (Chordal Action)</strong></td>
        <td>Modüler bant veya zincir tahrikinde, dişli çarkın poligon geometrisi nedeniyle zincir hızında periyodik olarak meydana gelen mikro hız dalgalanmaları ve titreşim.</td>
      </tr>
      <tr>
        <td><strong>Bant Tracking</strong></td>
        <td>Konveyör bandının çalışma esnasında şase eksenine paralel kalması, sağa ya da sola sürtünerek kenarlarının yırtılmasını önleme ayar disiplini.</td>
      </tr>
      <tr>
        <td><strong>Friction Clutch Roller</strong></td>
        <td>İçerisinde ayarlanabilir yay baskılı sürtünme balatası barındıran ve ürün sıkıştığında boşa dönerek ürünün deforme olmasını engelleyen akümülasyon rulosu.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Konveyör seçiminde ürün cinsi, proses ortamı (yağ, toz, hijyen) ve akümülasyon ihtiyacı ana belirleyicidir. Düz bantlar yüksek hız ve küçük parça için ideal iken, akümülasyonda sürtünmeli rulo veya modüler baklalı bantlar tercih edilir.</li>
    <li>Çekme kuvveti hesabında taşınan yükün sürtünmesi, bandın tabla üzerindeki sürtünmesi ve varsa birikme sürtünmesi (F<sub>aküm</sub>) toplanır.</li>
    <li>Tambur kaymasını engellemek için Euler-Eytelwein koşulu sağlanmalı ve mil/rulman tasarımında radyal gergi kuvveti (T<sub>1</sub> + T<sub>2</sub>) esas alınmalıdır.</li>
    <li>Bant merkezleme için tahrik tamburuna h ≈ 0,005 · D mertebesinde bombe verilmeli ve minimum bükülme çapı kısıtlarına uyulmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Saha Arızası ve Kök Neden):</strong> Düz bantlı bir PVC konveyör hattında, montaj istasyonu önüne pnömatik bir stoper konulmuş ve paletler hat üzerinde durdurularak biriktirilmeye başlanmıştır. Hat devreye alındıktan 2 hafta sonra tahrik motoru termik attırmış ve PVC bandın alt yüzeyinde derin aşınma olukları ile yanık izleri görülmüştür. Bu arızanın temel kök nedeni nedir ve doğru mühendislik çözümü ne olmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Motor gücü yetersizdir; mevcut motor sökülüp 3 kat büyük bir asenkron motor takılmalıdır.
      <div class="test-cevap">YANLIŞ. Motoru büyütmek bandın yanmasını engellemez; sürtünme ısısını daha da artırarak bandı tamamen eritir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Düz PVC bant akümülasyona (hat üzeri ürün kaymasına) uygun değildir; stoperde bekleyen ürünler yüksek sürtünme ısısı üretmiştir. Çözüm; sürtünme katsayısı düşük özel akümülasyon bandına geçmek, akümülasyonlu rulolu konveyör veya modüler asetal (POM) baklalı konveyör kullanmaktır.
      <div class="test-cevap">DOĞRU. Standart PVC bantlar yüksek sürtünmelidir. Ürün altında kaydıkça muazzam sürtünme kuvveti (F<sub>aküm</sub>) ve ısı açığa çıkar; motor aşırı yüklenir ve bant erir. Bu proses için akümülasyonlu rulo veya düşük sürtünmeli POM modüler bant kullanılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Tahrik tamburuna kauçuk kaplama yapılmadığı için tambur boşa dönmüştür.
      <div class="test-cevap">YANLIŞ. Tambur boşa dönseydi motor aşırı yüklenip termik attırmazdı, tersine yük boşalırdı.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Analitik Mühendislik Hesabı):</strong> Yatay bir düz bantlı konveyörde toplam taşınan ürün kütlesi m<sub>yük</sub> = 150 kg'dır. Bandın toplam kütlesi 30 kg (üst kol 15 kg, alt kol 15 kg). Bant-tabla sürtünme katsayısı μ<sub>kızak</sub> = 0,22, alt dönüş rulo sürtünmesi μ<sub>dönüş</sub> = 0,05'tir. Hat hızı v = 0,5 m/s ve mekanik verim η = 0,80'dir. Akümülasyon yoktur (F<sub>aküm</sub> = 0). Yerçekimi ivmesi g = 9,81 m/s² alınacaktır. Konveyörün toplam çekme kuvveti F<sub>t</sub> ve gerekli motor gücü P<sub>motor</sub> nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) F<sub>t</sub> ≈ 363,5 N ; P<sub>motor</sub> ≈ 0,227 kW (0,37 kW standart motor seçilir)
      <div class="test-cevap">DOĞRU. <br>
      F<sub>üst</sub> = (m<sub>yük</sub> + m<sub>bant_üst</sub>) · g · μ<sub>kızak</sub> = (150 + 15) · 9,81 · 0,22 = 165 · 9,81 · 0,22 ≈ 356,1 N.<br>
      F<sub>alt</sub> = m<sub>bant_alt</sub> · g · μ<sub>dönüş</sub> = 15 · 9,81 · 0,05 ≈ 7,36 N.<br>
      F<sub>t</sub> = 356,1 + 7,36 = 363,46 N.<br>
      P<sub>motor</sub> = (F<sub>t</sub> · v) / (1000 · η) = (363,46 · 0,5) / (1000 · 0,80) = 181,73 / 800 ≈ 0,227 kW.<br>
      Emniyet payı ile bir üst standart güç olan 0,37 kW motor-redüktör seçilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) F<sub>t</sub> ≈ 1500 N ; P<sub>motor</sub> ≈ 1,5 kW
      <div class="test-cevap">YANLIŞ. Sürtünme katsayıları dikkate alınmadan direkt toplam kütle çekme kuvveti olarak kabul edilmiş.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) F<sub>t</sub> ≈ 180 N ; P<sub>motor</sub> ≈ 0,09 kW
      <div class="test-cevap">YANLIŞ. Bandın kendi kütlesi ve verim kayıpları ihmal edilmiş.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Konstrüksiyon ve Mekanizma):</strong> Düz bantlı bir konveyörde bant sürekli olarak sol tarafa doğru kaymakta ve şase profiline sürtünerek kenarı püsküllenmektedir. Gergi vidası ile sol taraf gerdirilmesine rağmen kaçış düzelmemiştir. Yapılan ölçümde şasenin paralel olduğu görülmüştür. Bu sorunu kökten çözmek için tambur tasarımında ne yapılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Bandın kenarlarına çelik kılavuz pimler çakılmalıdır.
      <div class="test-cevap">YANLIŞ. Bandın kenarına pim çakmak bandı anında parçalar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tahrik tamburunun ortasına h ≈ 0,005 · D yüksekliğinde konik/küresel bombe (crowning) verilmeli ve bandın iç yüzeyine boyuna merkezleme fitili (V-guide) kaynatılmış bant profili tercih edilmelidir.
      <div class="test-cevap">DOĞRU. Bombeli tambur (crowned pulley), bandın kendi kendini merkeze çekmesini sağlayan temel endüstriyel çözümdür. Ayrıca enine kuvvetlerin yüksek olduğu durumlarda bant altına lamine edilen trapez fitil (V-guide) ve tabladaki kılavuz kanal bandın eksenden kaçmasını fiziksel olarak imkansız kılar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Bant hızı 2 katına çıkarılmalıdır.
      <div class="test-cevap">YANLIŞ. Hızı artırmak eksenel kaçışı ve aşınmayı daha da hızlandırır.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 7.2: GRİPPER VE TUTUCULAR
kitap.bolumEkle({
  id: "7-2",
  baslik: "Gripper ve Tutucular",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Otomasyon manipülatörleri ve kartezyen eksenlerin iş parçasıyla fiziksel temas kurduğu arayüz olan tutucuların (gripper); sürtünme esaslı (friction grasp) ve geometrik form kilitli (form-fit) kavrama dinamiklerini, kinematik ivmelenme altında gereken sıkma kuvveti hesaplarını, çene moment kollarının kılavuz yataklama ömrüne etkisini ve amaca uygun çene geometrisi optimizasyonunu öğretmektir.</p>
</div>

<h2>1. Tutma Prensipleri: Sürtünme Esaslı ve Form Kilitli Kavrama</h2>
<p>Endüstriyel parça yakalama işlemlerinde iki temel kavrama felsefesi mevcuttur:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Kavrama Tipi</th>
      <th>Mekanik Çalışma İlkesi</th>
      <th>Gereken Tutma Kuvveti (F<sub>tut</sub>)</th>
      <th>Avantajları ve Kısıtları</th>
      <th>Tipik Kullanım Alanları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Sürtünme Esaslı (Friction Grasp)</strong></td>
      <td>Düz çene pabuçları iş parçasına dik <em>F<sub>tut</sub></em> baskısı uygular. Parçanın düşmesi, çene-parça ara yüzeyindeki statik sürtünme kuvveti (<em>F<sub>s</sub> = μ · F<sub>tut</sub></em>) ile engellenir.</td>
      <td><strong>Çok Yüksek:</strong> İvme ve yerçekimi kuvvetlerinin en az 4 ila 6 katı sıkma kuvveti gerekir.</td>
      <td>Farklı boyuttaki parçaları tek çeneyle tutabilir; esnektir. Ancak yüksek ivmelerde parça kayma riski yüksektir; hassas yüzeyleri ezebilir.</td>
      <td>Kutu, prizmatik kütükler, değişken ölçülü ham parçalar, cam ve pürüzsüz yüzeyler.</td>
    </tr>
    <tr>
      <td><strong>Form Kilitli (Form-Fit / Geometrical Grasp)</strong></td>
      <td>Çeneler iş parçasının dış veya iç geometrisinin negatif profilini taşır (V-yatak, fatura, pim deliği kilitlenmesi). Parça mekanik olarak hapsedilir.</td>
      <td><strong>Düşük:</strong> Sadece parçanın yuvadan dışarı zıplamasını engelleyecek kadar tutma kuvveti yeterlidir.</td>
      <td>Yüksek dinamik ivmelerde (30–50 m/s²) sıfır kayma riski; daha küçük ve hafif gripper kullanılmasını sağlar. Ancak çene parçaya özeldir (spesifik).</td>
      <td>Miller, burçlar, döküm gövdeler, yüksek hızlı robotik Pick & Place uygulamaları.</td>
    </tr>
  </tbody>
</table>

<h2>2. Tutma Kuvveti (Grip Force) Analitik Hesaplama Modeli</h2>
<p>Sürtünme esaslı bir kavramada, robot veya kartezyen manipülatör maksimum ivme (<em>a<sub>max</sub></em>) ile yukarı doğru hareket ederken veya acil duruş (E-stop) anında parçanın çeneler arasından kayıp fırlamaması gerekir.</p>

<div class="muhendislik-kutu">
  <h4>Maksimum Tutma Kuvveti Formülü</h4>
  <p>Çenelerin parçaya uygulaması gereken toplam teorik sıkma kuvveti <em>F<sub>tut</sub></em> [N]:</p>
  <div class="formul-kutu">
    F<sub>tut</sub> = [ m · (g + a<sub>max</sub>) · S ] / (n · μ)
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>m:</strong> Taşınan iş parçasının kütlesi [kg].</li>
    <li><strong>g:</strong> Yerçekimi ivmesi (9,81 m/s²).</li>
    <li><strong>a<sub>max</sub>:</strong> Manipülatörün eksen hareketlerinde ürettiği en yüksek bileşke ivme veya acil duruş (E-stop) anındaki frenleme ivmesi [m/s²] (ör. hızlı kartezyen hatlarda 10 – 30 m/s²).</li>
    <li><strong>S:</strong> Güvenlik katsayısı (Normal yavaş hatlarda S = 2 – 3; yüksek dinamik robotik hatlarda S = 4 – 6).</li>
    <li><strong>n:</strong> Parçayı kavrayan aktif parmak/çene sayısı (2 parmaklı paralel gripperda n = 2; 3 çeneli merkezleyicide n = 3).</li>
    <li><strong>μ:</strong> Çene malzemesi ile iş parçası arasındaki statik sürtünme katsayısı.</li>
  </ul>
</div>

<h3>Sürtünme Katsayısı (μ) Referans Tablosu</h3>
<table class="standart-tablo">
  <thead>
    <tr>
      <th>Çene Temas Malzemesi</th>
      <th>İş Parçası Malzemesi</th>
      <th>Kuru Yüzey (μ)</th>
      <th>Yağlı/Emülsiyonlu Yüzey (μ)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Sertleştirilmiş Çelik (Düz)</td>
      <td>Çelik / Döküm</td>
      <td>0,15 – 0,18</td>
      <td>0,08 – 0,10</td>
    </tr>
    <tr>
      <td>Sertleştirilmiş Çelik (Tırtıllı / Knurled)</td>
      <td>Ham Çelik / Alüminyum</td>
      <td>0,35 – 0,45</td>
      <td>0,25 – 0,30</td>
    </tr>
    <tr>
      <td>Alüminyum (6082-T6 / 7075-T6)</td>
      <td>Çelik / Plastik</td>
      <td>0,25 – 0,30</td>
      <td>0,12 – 0,15</td>
    </tr>
    <tr>
      <td>Poliüretan (PUR 85-95 Shore A)</td>
      <td>Çelik / Alüminyum / Cam</td>
      <td>0,50 – 0,70</td>
      <td>0,25 – 0,35</td>
    </tr>
    <tr>
      <td>Mühendislik Plastiği (POM / PA6G)</td>
      <td>Çelik / Pirinç</td>
      <td>0,18 – 0,22</td>
      <td>0,10 – 0,14</td>
    </tr>
  </tbody>
</table>

<h2>3. Gripper Mekanik Yapıları ve Tahrik Mekanizmaları</h2>
<div class="muhendislik-kutu">
  <h4>Pnömatik ve Elektrikli Gripper Tipleri</h4>
  <ul>
    <li><strong>Kama Tahrikli Paralel Gripper (Wedge-Hook Design):</strong> Piston milinin ucundaki açılı kama (wedge), çene kızaklarını zıt yönlerde senkronize sürer. Kamalı yapı çok yüksek rijitlik, darbe sönümleme ve yüksek sıkma kuvveti sağlar; talaşlı imalat ve ağır otomasyonun standardıdır.</li>
    <li><strong>Kramayer-Pinyon Senkronlu Paralel Gripper:</strong> Piston çeneleri kramayer dişliler vasıtasıyla merkezi bir pinyona bağlıdır. Uzun stroklu modellerde tercih edilir; ancak kama tipine göre darbe dayanımı daha düşüktür.</li>
    <li><strong>Açısal Gripper (Angular Gripper):</strong> Çeneler 30° ila 180° açı ile radyal olarak açılır. Parçanın üzerinden değil de yanından yaklaşılması gereken dar alanlarda ve flanş tipi parçalarda kullanılır.</li>
    <li><strong>Elektrikli Servo Gripper:</strong> Entegre fırçasız DC motor, vidalı mil ve enkoder barındırır. Çene pozisyonu, hızı ve en önemlisi <em>tutma torku (sıkma kuvveti)</em> PLC üzerinden dijital olarak ayarlanabilir. Hassas cam, ince cidarlı plastik veya farklı çaplardaki karmaşık parçaları ezmeden tutmak için zorunludur.</li>
  </ul>
</div>

<h2>4. Çene Tasarımı, Aşırı Moment Kolları ve Kasıntı Riski</h2>
<p>Birçok otomasyon mühendisi sadece katalogdaki tutma kuvvetine (F<sub>tut</sub>) bakar; ancak sahadaki gripper kırılmalarının ve aşınmalarının %85'i <strong>izin verilen moment limitlerinin (M<sub>x</sub>, M<sub>y</sub>, M<sub>z</sub>)</strong> aşılmasından kaynaklanır.</p>

<div class="uyari-kutu">
  <h4>Kritik Tasarım Kuralı: Parmak Boyu (L) ve Kasıntı Momenti</h4>
  <p>Çene pabuçları uzadıkça, iş parçasının ağırlık merkezi gripper kılavuz yüzeyinden uzaklaşır (<em>L</em> mesafesi). Bu durum çene arabasında muazzam bir eğilme momenti üretir:</p>
  <div class="formul-kutu">
    M<sub>bükülme</sub> = F<sub>tut</sub> · L<sub>parmak</sub> + m · (g + a) · L<sub>uzaklık</sub>
  </div>
  <p>Eğer bu moment gripper katalogundaki <em>M<sub>max</sub></em> değerini aşarsa:</p>
  <ol>
    <li>Çene içindeki hassas T-kızaklar veya bilyalı araba kasıntı yapar (binding), sıkma kuvveti aniden düşer.</li>
    <li>Çene lineer rulmanları ezilir, boşluk (backlash) oluşur ve parça bırakma tekrarlanabilirliği bozulur.</li>
    <li><strong>Kural:</strong> Parmak boyu <em>L</em>, üreticinin izin verdiği maksimum kol boyunun üzerine çıkarılmamalıdır; gerekirse gövdeden harici lineer kılavuz kızakları ile çeneler desteklenmelidir.</li>
  </ol>
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
        <td><strong>Friction Grasp (Sürtünme Kavrama)</strong></td>
        <td>İş parçasının geometrik kilit olmaksızın, tamamen çene yüzeyinin dik baskısıyla üretilen sürtünme kuvvetiyle tutulması.</td>
      </tr>
      <tr>
        <td><strong>Form-Fit (Geometrik Kilit)</strong></td>
        <td>Çene profilinin parçayı fiziksel olarak çevrelediği, ivmelenme kuvvetlerini sürtünmeye ihtiyaç duymadan mekanik temasla karşılayan kavrama.</td>
      </tr>
      <tr>
        <td><strong>Wedge-Hook (Kama Tahrik)</strong></td>
        <td>Piston hareketini çenelere açılı bir kama ile aktaran, yüksek rijitlik ve yüksek tutma kuvveti sunan gripper mekanizması.</td>
      </tr>
      <tr>
        <td><strong>Çene Momenti (Overhung Moment)</strong></td>
        <td>Uzun çene tasarımı sebebiyle tutucu kılavuz yataklarına binen statik ve dinamik devrilme momenti (Mx, My, Mz).</td>
      </tr>
      <tr>
        <td><strong>Servo Gripper</strong></td>
        <td>Pozisyon, hız ve sıkma kuvvetinin yazılımsal olarak hassas kontrol edilebildiği mekatronik tutucu ünitesi.</td>
      </tr>
      <tr>
        <td><strong>Backlash (Çene Boşluğu)</strong></td>
        <td>Aşınma veya kalitesiz kılavuzlama sonucu çenenin serbest eksenlerde yaptığı istenmeyen mikron mertebesindeki mekanik oynama.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Tutucu seçiminde parçanın kütlesi, manipülatör ivmesi ve sürtünme katsayısı hesaba katılarak en az S = 4 – 6 emniyet katsayısıyla F<sub>tut</sub> belirlenmelidir.</li>
    <li>Mümkün olan her senaryoda sürtünme esaslı tutma yerine parça geometrisine uygun form kilitli (form-fit) çeneler tasarlanmalıdır; bu sayede daha küçük gripper boyutu ve sıfır kayma riski elde edilir.</li>
    <li>Aşırı uzun çene tasarımı kılavuz yataklarda kasıntıya ve kırılmaya sebep olur. Katalog moment limitleri (Mx, My, Mz) mutlaka kontrol edilmeli, gerekirse harici yataklama eklenmelidir.</li>
    <li>Ezilme riski olan hassas parçalarda ve çoklu ürün tiplerinde kuvvet kontrollü elektrikli servo gripperlar tercih edilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Analitik Kuvvet Hesabı):</strong> Yüksek hızlı bir Scara robot, m = 1,2 kg kütlesindeki silindirik bir çelik parçayı düz çeneli 2 parmaklı pnömatik paralel gripper ile taşımaktadır. Robotun Z ekseni yukarı doğru maksimum a<sub>max</sub> = 15 m/s² ivme ile kalkış yapmaktadır. Çelik çeneler ile çelik parça arasındaki statik sürtünme katsayısı μ = 0,15'tir. Dinamik şoklar ve güvenlik için S = 4 katsayısı öngörülmüştür. Gripperın üretmesi gereken toplam nominal tutma kuvveti F<sub>tut</sub> kaç N olmalıdır? (g = 9,81 m/s² alınız)</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) F<sub>tut</sub> ≈ 397 N
      <div class="test-cevap">DOĞRU. <br>
      F<sub>tut</sub> = [ m · (g + a<sub>max</sub>) · S ] / (n · μ)<br>
      F<sub>tut</sub> = [ 1,2 · (9,81 + 15) · 4 ] / (2 · 0,15)<br>
      F<sub>tut</sub> = [ 1,2 · 24,81 · 4 ] / 0,30 = 119,088 / 0,30 ≈ 396,96 N.<br>
      Yaklaşık 400 N sıkma kuvveti üretebilen bir paralel gripper seçilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) F<sub>tut</sub> ≈ 118 N
      <div class="test-cevap">YANLIŞ. Sürtünme katsayısı μ hesaba katılmamış ya da n=2 ve μ ihmal edilmiştir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) F<sub>tut</sub> ≈ 50 N
      <div class="test-cevap">YANLIŞ. Sadece statik yerçekimi kuvveti alınmış, ivme ve güvenlik katsayısı unutulmuştur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Mekanizma ve Kök Neden):</strong> Bir robot hücresinde 2 parmaklı standart bir pnömatik gripper kullanılmaktadır. Mühendis, parça derinde olduğu için çene parmak boyunu 35 mm'den 160 mm'ye uzatmış ve alüminyumdan imal etmiştir. Sistem çalışmaya başladıktan 3 gün sonra gripper çenelerinin tam kapanmadığı, yavaşladığı ve sık sık parçayı yarı yolda bıraktığı tespit edilmiştir. Pnömatik basınç 6 bar'da sabittir. Arızanın kök nedeni nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) 160 mm boyundaki parmaklar, tutma anında gripperın iç T-kızak yataklarına katalog sınırının çok üzerinde devrilme momenti (M<sub>y</sub>/M<sub>z</sub>) bindirmiş; kızaklarda kasıntı (binding) ve sürtünme kilitlenmesi meydana gelmiştir.
      <div class="test-cevap">DOĞRU. Gripper parmakları uzatıldığında moment kolu dramatik şekilde artar. Bu durum iç yataklarda aşırı baskıya ve kasıntıya sebep olarak piston kuvvetinin yatak sürtünmesine harcanmasına ve sıkma kuvvetinin yok olmasına yol açar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Alüminyum çene manyetik alandan etkilendiği için manyetik sensörler bozulmuştur.
      <div class="test-cevap">YANLIŞ. Alüminyum paramanyetiktir ve gripper çenesinin mekanik kasıntısıyla ilgisi yoktur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Hava debisi yetersizdir, hortum çapı 4 mm'den 6 mm'ye çıkarılmalıdır.
      <div class="test-cevap">YANLIŞ. Sorun hava debisi değil, aşırı moment kolundan kaynaklanan mekanik kasıntıdır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Tasarım Stratejisi):</strong> İnce cidarlı (0,8 mm et kalınlığında) pirinç bir kovanın, dış çapından tutularak montaj istasyonuna taşınması gerekmektedir. Standart pnömatik gripper parçayı her sıktığında ovallik bozularak ürün ıskartaya çıkmaktadır. Bu problem için en profesyonel iki mühendislik çözümü hangisidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Basıncı 1 bar'a düşürmek veya parçayı çekiçle düzeltmek.
      <div class="test-cevap">YANLIŞ. 1 bar'da pnömatik piston kararsız çalışır; çekiçlemek endüstriyel değildir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) 1) Parçayı 360° saran geniş temas yüzeyli negatif formlu (form-fit) çeneler veya 3 çeneli merkezleyici gripper kullanmak; 2) Sıkma kuvveti ve pozisyonu dijital olarak hassas sınırlandırılabilen elektrikli servo gripper kullanmak.
      <div class="test-cevap">DOĞRU. İnce cidarlı parçalarda noktasal 2 çene basısı lokal plastik deformasyona yol açar. Çeneyi parçanın formuna uygun yay şeklinde işlemek yüzey basıncını dağıtır. Kuvvet kontrollü servo gripper ise ezilme eşiğini aşmadan parçayı güvenle tutar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Çenelere gres yağı sürerek parçanın kaymasını sağlamak.
      <div class="test-cevap">YANLIŞ. Gres sürmek parçanın düşmesine sebep olur.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 7.3: ROBOT UÇ İŞLEMCİSİ (EOAT - END OF ARM TOOLING)
kitap.bolumEkle({
  id: "7-3",
  baslik: "Robot Uç İşlemcisi (EOAT)",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Endüstriyel 6 eksenli mafsallı ve SCARA robotların bilek flanşına monte edilen uç işlemcilerinin (EOAT); kütle, ağırlık merkezi (CoG) ve kütlesel atalet momenti sınırlarını (ISO 9283 / ISO 9409-1), malzeme optimizasyonuyla hafifletme stratejilerini, otomatik takım değiştirici (Tool Changer) entegrasyonunu ve kablo/hortum paketi (dress pack) tasarım kriterlerini derinlemesine öğretmektir.</p>
</div>

<h2>1. Robot Taşıma Kapasitesi (Payload) ve Ağırlık Merkezi (CoG) Analizi</h2>
<p>Robot üreticilerinin kataloglarında belirttikleri nominal taşıma kapasitesi (örn: "Payload: 10 kg"), yükün robot bilek flanşının tam merkezinde ve sıfır mesafede olduğu ideal durumu temsil etmez. Her robotun bilek eksenleri (J4, J5, J6) için izin verilen bir <strong>Maksimum Statik/Dinamik Tork</strong> ve <strong>Kütlesel Atalet Momenti</strong> sınırı vardır.</p>

<div class="muhendislik-kutu">
  <h4>Bilek Yük Diyagramı (Load Diagram) ve Atalet Kısıtları</h4>
  <p>Bir EOAT ve taşınan parçanın oluşturduğu toplam kütle <em>m<sub>toplam</sub> = m<sub>EOAT</sub> + m<sub>parça</sub></em> olup, ağırlık merkezinin flanş yüzeyinden olan eksenel ve radyal uzaklığı (<em>L<sub>x</sub>, L<sub>y</sub>, L<sub>z</sub></em>) şu iki temel kriteri aşmamalıdır:</p>
  <div class="formul-kutu">
    M<sub>bilek_statik</sub> = m<sub>toplam</sub> · g · r<sub>CoG</sub> ≤ M<sub>katalog_izin</sub> [Nm]
  </div>
  <div class="formul-kutu">
    M<sub>bilek_dinamik</sub> = m<sub>toplam</sub> · (g + a<sub>max</sub>) · r<sub>CoG</sub> + J<sub>bilek_eksen</sub> · α<sub>açısal</sub> ≤ M<sub>tepe_limit</sub> [Nm]
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>r<sub>CoG</sub>:</strong> Ağırlık merkezinin ilgili bilek dönme eksenine dik mesafesi: √(x<sub>CoG</sub>² + y<sub>CoG</sub>²).</li>
    <li><strong>J<sub>bilek_eksen</sub>:</strong> EOAT ve parçanın bilek ekseni etrafındaki kütlesel atalet momenti [kg·m²]:
      <div class="formul-kutu">
        J<sub>toplam</sub> = J<sub>kendi</sub> + m<sub>toplam</sub> · r<sub>CoG</sub>² (Steiner / Paralel Eksen Teoremi)
      </div>
    </li>
    <li><strong>α<sub>açısal</sub>:</strong> Robot bilek ekseninin açısal ivmesi [rad/s²].</li>
  </ul>
</div>

<div class="uyari-kutu">
  <h4>Kritik Saha Hatası: "Kapasite 10 kg, Bizim EOAT 6 kg, Sorun Yok" Yanılgısı!</h4>
  <p>Eğer 6 kg'lık EOAT'ın ağırlık merkezi flanştan 350 mm uzaktaysa, robot bileğindeki redüktör dişlilerine (RV redüktör veya Harmonic Drive) binen dinamik moment, flanşa sıfır mesafedeki 15 kg'lık bir yükten kat kat daha büyüktür! Bu durum:</p>
  <ul>
    <li>Robotun eksen aşırı yükleme (Wrist Overload) alarmı vermesine,</li>
    <li>Acil duruşlarda robotun yörüngeden sapıp çarpışmasına,</li>
    <li>Bilek redüktör rulmanlarının ve dişlilerinin birkaç ay içinde boşluk yapıp dağılmasına sebep olur.</li>
  </ul>
</div>

<h2>2. EOAT Tasarımında Malzeme ve Topoloji Optimizasyonu</h2>
<p>EOAT'ın hafifletilmesi; robotun daha yüksek ivmelerle çalışmasını sağlar, çevrim süresini (cycle time) %20–40 kısaltır ve daha küçük/ekonomik robot seçilmesine imkan tanır.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Malzeme / Teknoloji</th>
      <th>Yoğunluk (g/cm³)</th>
      <th>Akma Dayanımı (MPa)</th>
      <th>Özgül Mukavemet (Dayanım / Yoğunluk)</th>
      <th>EOAT Uygulama Yeri ve Özellikleri</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Çelik (1.0037 / St37)</strong></td>
      <td>7,85</td>
      <td>235</td>
      <td>30</td>
      <td><strong>Kesinlikle kaçınılmalıdır!</strong> Aşırı ağır; robot bileğini hızla yorar. Sadece aşınmaya maruz lokal kilit pimlerinde kullanılır.</td>
    </tr>
    <tr>
      <td><strong>Havacılık Alüminyumu (Al 7075-T6)</strong></td>
      <td>2,81</td>
      <td>505</td>
      <td>180</td>
      <td>Ana bağlantı gövdeleri, flanş adaptörleri. Çelik mukavemetinde fakat 3 kat daha hafif.</td>
    </tr>
    <tr>
      <td><strong>Mühendislik Alüminyumu (Al 6082-T6)</strong></td>
      <td>2,70</td>
      <td>260</td>
      <td>96</td>
      <td>Standart montaj plakaları, braketler. Kolay işlenebilir, eloksal kaplamaya uygun.</td>
    </tr>
    <tr>
      <td><strong>Karbon Fiber Kompozit (CFRP Boru/Plaka)</strong></td>
      <td>1,55</td>
      <td>600 – 1200</td>
      <td>400 – 770</td>
      <td>Geniş kanatlı pres besleme veya paletleme EOAT iskeletleri. Titreşimi muazzam sönümler, ultra hafif.</td>
    </tr>
    <tr>
      <td><strong>Endüstriyel 3D Baskı (PA12-CF / Karbon Katkılı Naylon)</strong></td>
      <td>1,15</td>
      <td>80 – 110</td>
      <td>70 – 95</td>
      <td>Entegre vakum kanallı manifold gövdeler, parça formlu karmaşık çeneler. Montaj cıvatalarını ve fittingsleri elimine eder.</td>
    </tr>
  </tbody>
</table>

<h2>3. Robot Bağlantı Standartları ve Takım Değiştiriciler (Tool Changer)</h2>
<h3>3.1. ISO 9409-1 Robot Mekanik Arayüz Standardı</h3>
<p>Robot bilek flanşları dünya genelinde <strong>ISO 9409-1</strong> standardına tabidir. Bu standart flanş çapını, merkezleme fatura çapını, cıvata dairesi çapını (PCD), diş adedini ve yönlendirme pimi (dowel pin) konumunu belirler (Örnek: <em>ISO 9409-1-50-4-M6</em>: 50 mm referans çapı, 4 adet M6 cıvata deliği).</p>

<h3>3.2. Otomatik Takım Değiştiriciler (Automatic Tool Changers)</h3>
<p>Aynı robotun hem kaynak torcu, hem mekanik gripper, hem de vakum tutucu kullanabilmesi için hatta otomatik takım değiştirici entegre edilir. Bir takım değiştirici iki parçadan oluşur:</p>
<ol>
  <li><strong>Robot Tarafı (Master Plate):</strong> Robot bileğine sabitlenir; pnömatik bilyalı kilit mekanizmasını, hava, sinyal ve güç modüllerini taşır.</li>
  <li><strong>Takım Tarafı (Tool Plate):</strong> Her bir EOAT'a monte edilir; takım sehpasında (docking station) bekler.</li>
</ol>
<div class="muhendislik-kutu">
  <h4>Kilit Güvenliği (Fail-Safe Locking):</h4>
  <p>Endüstriyel takım değiştiricilerde kilit mekanizması yay baskılı veya mekanik kam kilitlidir. <strong>Hatta hava basıncı tamamen sıfırlansa dahi</strong> kilit açılmaz; 100 kg'lık takım robotun ucundan kesinlikle düşemez. Kilidi açmak için karşı yönden özel pnömatik sinyal verilmesi zorunludur.</p>
</div>

<h2>4. Kablo ve Hortum Yönetimi (Dress Pack) Tasarım Kuralları</h2>
<p>Robotik hücrelerdeki beklenmedik duruşların en büyük sebeplerinden biri, bilek döndükçe burulan, şaseye sürtünen ve kopan kablo/hava hortumlarıdır.</p>
<ul>
  <li><strong>Bükülme ve Burulma Ayrımı:</strong> Standart enerji zinciri kabloları sadece 2D düzlemde bükülmeye (flexing) dayanıklıdır; robotun 6. eksenindeki burulmaya (torsion) maruz kaldıklarında iç damarları kopar. Robot bileğinde mutlaka <strong>±360°/m burulma dayanımlı özel robotik kablolar</strong> kullanılmalıdır.</li>
  <li><strong>Hortum Dinamik Bükülme Yarıçapı:</strong> Poliüretan hava hortumlarında dinamik bükülme yarıçapı: <em>R<sub>min</sub> ≥ 8 ila 10 × D<sub>dış</sub></em> olmalıdır. Aksi halde hortum kırılır (kinking) ve hava debisi aniden kesilir.</li>
  <li><strong>Geri Çekme Sistemleri (Retraction System):</strong> Robot 2. ve 3. eksen hareketlerinde hortum demetinin sarkmasını önlemek için yaylı veya pnömatik lineer geri çekme körükleri kullanılmalıdır.</li>
</ul>

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
        <td><strong>EOAT (End of Arm Tooling)</strong></td>
        <td>Endüstriyel robotun bilek flanşına takılan gripper, kaynak torcu, vakum ataşmanı gibi tüm uç işleme aparatlarının genel adı.</td>
      </tr>
      <tr>
        <td><strong>Payload (Taşıma Kapasitesi)</strong></td>
        <td>Robotun nominal hız ve ivmelerde taşıyabileceği maksimum kütle ve moment bileşkesi.</td>
      </tr>
      <tr>
        <td><strong>CoG (Center of Gravity)</strong></td>
        <td>EOAT ve taşınan parçanın ağırlık merkezi koordinatları; bilek tork yükünün temel çarpanı.</td>
      </tr>
      <tr>
        <td><strong>ISO 9409-1</strong></td>
        <td>Endüstriyel robot bilek flanşlarının mekanik arayüz (cıvata, fatura, pim) boyutlarını standartlaştıran uluslararası norm.</td>
      </tr>
      <tr>
        <td><strong>Tool Changer (Takım Değiştirici)</strong></td>
        <td>Robotun farklı proses takımlarını harici müdahaleye gerek kalmadan otomatik olarak alıp bırakmasını sağlayan pnömatik-mekanik kilitli sistem.</td>
      </tr>
      <tr>
        <td><strong>Dress Pack</strong></td>
        <td>Robot gövdesi boyunca uzanan ve bileğe kadar enerji, hava, veri taşıyan özel burulma dayanımlı hortum ve kablo demeti koruma sistemi.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Robot kapasitesi sadece kütle ile değil, yükün ağırlık merkezinin (CoG) flanştan uzaklığı ve kütlesel atalet momenti (J) ile sınırlandırılmıştır.</li>
    <li>EOAT tasarımında çelikten kesinlikle kaçınılmalı; Al 7075-T6, Al 6082-T6, karbon fiber ve 3D PA12-CF baskı teknolojileri ile kütle minimize edilmelidir.</li>
    <li>Robot mekanik bağlantılarında ISO 9409-1 flanş standartlarına uyulmalı, hassas merkezleme için toleranslı fatura ve yönlendirme pimi (dowel) kullanılmalıdır.</li>
    <li>Çoklu takım operasyonlarında basınç düşüşünde takımı bırakmayan (fail-safe) pnömatik takım değiştiriciler entegre edilmelidir.</li>
    <li>Kablo ve hortum paketlerinde burulma dayanımlı robotik kablolar seçilmeli ve dinamik geri çekme sistemleri ile sarkma önlenmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Bilek Torku ve Yük Analizi):</strong> Nominal taşıma kapasitesi 10 kg olan 6 eksenli bir mafsallı robotun bilek ekseninin izin verdiği maksimum dinamik tork M<sub>limit</sub> = 40 Nm'dir. Tasarlanan EOAT'ın kütlesi m<sub>EOAT</sub> = 5 kg, taşınan iş parçasının kütlesi m<sub>parça</sub> = 3 kg'dır (Toplam kütle = 8 kg < 10 kg). EOAT + parça ağırlık merkezinin bilek eksenine olan dik mesafesi r<sub>CoG</sub> = 350 mm (0,35 m) olarak ölçülmüştür. Robot Z yönünde ani kalkış yaparken a<sub>max</sub> = 8 m/s² ivme üretmektedir. Bu sistemde bilek torku limit dahilinde midir? (g = 9,81 m/s² alınız)</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) M<sub>dinamik</sub> ≈ 49,87 Nm; Limit (40 Nm) aşılmıştır, robot aşırı yükleme arızası verir ve redüktörü hasar görür!
      <div class="test-cevap">DOĞRU. <br>
      M<sub>dinamik</sub> = m<sub>toplam</sub> · (g + a<sub>max</sub>) · r<sub>CoG</sub><br>
      M<sub>dinamik</sub> = 8 kg · (9,81 + 8) m/s² · 0,35 m = 8 · 17,81 · 0,35 = 49,868 Nm.<br>
      Toplam kütle (8 kg) 10 kg sınırının altında olmasına rağmen, ağırlık merkezinin flanştan 350 mm uzakta olması nedeniyle dinamik tork 49,9 Nm'ye fırlamış ve 40 Nm sınırını aşmıştır. Ağırlık merkezi flanşa yaklaştırılmalı veya EOAT hafifletilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) M<sub>dinamik</sub> ≈ 27,5 Nm; Limit dahilindedir, güvenle çalışır.
      <div class="test-cevap">YANLIŞ. İvmelenme ivmesi (a=8 m/s²) hesaba katılmamış ya da mesafe yanlış çarpılmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kütle 8 kg < 10 kg olduğu için torka bakmaya gerek yoktur.
      <div class="test-cevap">YANLIŞ. Robotikte en sık yapılan ölümcül hata budur; moment ve atalet kısıtı kütleden çok daha kritiktir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Malzeme ve Üretim Stratejisi):</strong> Otomotiv sac presleme hattında çalışan bir transfer robotunun EOAT şasesi St37 çelik profillerden kaynaklı olarak yapılmış ve toplam 22 kg gelmektedir. Robot bilek redüktörleri aşırı yük uyarısı vermektedir. Şase rijitliğinden ve mukavemetinden ödün vermeden EOAT ağırlığını %60'ın üzerinde düşürmek için hangi mühendislik revizyonu yapılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çelik profiller yerine Al 7075-T6 veya Al 6082-T6 ekstrüzyon profiller ve karbon fiber (CFRP) destek boruları kullanılmalı, gövde ağırlığı 7–8 kg seviyesine indirilmelidir.
      <div class="test-cevap">DOĞRU. Çeliğin yoğunluğu 7,85 g/cm³ iken alüminyum 2,7 g/cm³, karbon fiber ise 1,55 g/cm³'tür. Uygun alaşımlı alüminyum ve karbon fiber kullanımı rijitliği korurken ağırlığı 3 katın üzerinde azaltır ve robotu rahatlatır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Çelik profiller üzerine rastgele matkapla delikler delinmelidir.
      <div class="test-cevap">YANLIŞ. Bu işlem çeliğin mukavemetini ve rijitliğini bozar, ağırlığı ise ancak %5–10 azaltabilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Robotun hız ve ivmesi %90 oranında düşürülmelidir.
      <div class="test-cevap">YANLIŞ. Robot hızını %90 düşürmek fabrikanın üretim çevrim süresini mahveder. Çözüm EOAT'ı hafifletmektir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Takım Değiştirici Güvenliği):</strong> Bir robot hücresinde otomatik pnömatik takım değiştirici kullanılmaktadır. Fabrika ana kompresöründe meydana gelen bir arıza sebebiyle hatta hava basıncı aniden 6 bar'dan 0 bar'a düşmüştür. Bu sırada robot 15 kg'lık ağır bir parça taşımaktadır. Standartlara uygun kaliteli bir takım değiştiricide ne gerçekleşmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Takım derhal yere düşer ve robot acil duruşa geçer.
      <div class="test-cevap">YANLIŞ. Bu son derece tehlikeli ve güvensiz bir tasarımdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Takım değiştirici mekanik yay baskılı veya kam kilitli fail-safe yapıya sahip olduğu için basınç sıfırlansa dahi takımı asla bırakmaz; kilitli tutmaya devam eder ve emniyet sensörüyle robotu kontrollü durdurur.
      <div class="test-cevap">DOĞRU. Endüstriyel takım değiştiricilerde mekanik kilitleme geometrisi yay desteklidir. Hava kesilse bile kilidin açılması fiziksel olarak engellenmiştir. Bu can ve makine emniyeti standardıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Takım değiştirici elektrik motoruyla ters yöne döner.
      <div class="test-cevap">YANLIŞ. Pnömatik takım değiştiricide elektrikli tahrik bulunmaz.</div>
    </div>
  </div>
</div>
`
});
