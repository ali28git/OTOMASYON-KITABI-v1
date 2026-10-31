/* ========================================================================
   MODÜL 12: PROJE SÜRECİ VE ENDÜSTRİ PRATİĞİ (m12-a.js)
   Bölüm 12.1: Şartnameden Konsepte (URS ve Morfolojik Kutu)
   Bölüm 12.2: Konsept Değerlendirme (Pugh Matrisi ve PoC)
   Bölüm 12.3: DFMEA (Tasarım Hata Türü ve Etkileri Analizi)
   ======================================================================== */

// BÖLÜM 12.1: ŞARTNAMEDEN KONSEPETE
kitap.bolumEkle({
  id: "12-1",
  baslik: "Şartnameden Konsepte",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Endüstriyel bir otomasyon projesinin başlangıcında müşterinin belirsiz taleplerini net mühendislik sınırlarına dönüştüren <strong>Kullanıcı İhtiyaç Şartnamesi (URS)</strong> analizini, makineyi yönetilebilir alt modüllere ayıran <strong>Fonksiyonel Ayrıştırma (Functional Decomposition)</strong> yöntemini ve çoklu uygulanabilir alternatifler üreten <strong>Morfolojik Kutu (Morphological Matrix)</strong> disiplinini öğretmektir.</p>
</div>

<h2>1. Müşteri Şartnamesi (URS) ve Teknik Sınır Parametreleri</h2>
<p>Başarısız otomasyon projelerinin %80'i tasarım hatasından değil, <strong>müşterinin ne istediğinin tam anlaşılmamasından</strong> veya şartnamenin eksik yazılmasından kaynaklanır. Tasarım başlamadan önce aşağıdaki parametreler sözleşmeyle netleştirilmelidir:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Kritik Şartname Parametresi</th>
      <th>Sorulması ve Belirlenmesi Zorunlu Sorular</th>
      <th>Mühendislik Etkisi ve Kararları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Çevrim Süresi (Takt Time)</strong></td>
      <td>"Saatte net kaç adet sağlam parça hedefleniyor? Vardiya süresi ve OEE hedefi nedir?"</td>
      <td>Hattın tek istasyonlu mu, döner tablalı mı yoksa çoklu paralel robotlu mu olacağını doğrudan belirler.</td>
    </tr>
    <tr>
      <td><strong>İş Parçası Varyasyonları</strong></td>
      <td>"Hatta sadece 1 model mi çalışacak, yoksa 5 farklı boyutta ürün mü? Minimum ve maksimum toleranslar nelerdir?"</td>
      <td>Fikstürlerin ayarlı mı, otomatik takım değiştirmeli mi yoksa modüler mi tasarlanacağını belirler.</td>
    </tr>
    <tr>
      <td><strong>Fabrika Yerleşimi (Footprint)</strong></td>
      <td>"Makine için fabrikada ayrılan maksimum X, Y, Z boyutları nedir? Tavan vinci yüksekliği ve kapı geçiş ölçüleri nedir?"</td>
      <td>Şase dış boyutlarını, pano yerleşimini ve makinenin tırla taşınabilmesi için bölünebilirliğini belirler.</td>
    </tr>
    <tr>
      <td><strong>Tesis Altyapısı (Utilities)</strong></td>
      <td>"Hava basıncı (bar) ve debisi (Nl/dak) nedir? Elektrik gerilimi (400V 50Hz mi?), emiş vakum hattı var mı?"</td>
      <td>Pnömatik aktüatör çaplarını, kompresör takviye ihtiyacını ve trafo boyutlandırmasını belirler.</td>
    </tr>
    <tr>
      <td><strong>Çevre Şartları</strong></td>
      <td>"Ortamda toz, bor yağı buharı, asidik kimyasal var mı? Sıcaklık aralığı nedir? Temiz oda (Cleanroom) sınıfı nedir?"</td>
      <td>Rulman sızdırmazlık tipini, IP koruma sınıfını (IP54, IP65, IP67), malzeme kaplamasını (eloksal, nikelaj, paslanmaz) belirler.</td>
    </tr>
  </tbody>
</table>

<h2>2. Fonksiyonel Ayrıştırma (Functional Decomposition)</h2>
<p>Karmaşık bir makineyi bir bütün olarak çözmeye çalışmak zihinsel kilitlenmeye yol açar. Makine temel alt fonksiyonlara bölünür:</p>
<div class="muhendislik-kutu">
  <h4>Temel Otomasyon Alt Fonksiyonları:</h4>
  <ol>
    <li><strong>Depolama ve Besleme:</strong> Ham parçaların toplu kabul edilmesi (Bunker, palet).</li>
    <li><strong>Ayrıştırma ve Oryantasyon:</strong> Parçaların tek tek dizilmesi ve doğru yöne çevrilmesi (Çanak, step feeder).</li>
    <li><strong>Transfer:</strong> Parçanın istasyonlar arasında taşınması (Konveyör, döner tabla, kartezyen).</li>
    <li><strong>Konumlama ve Fikstürleme:</strong> İşlem noktasında parçanın 3-2-1 referanslanması ve kilitlenmesi.</li>
    <li><strong>Birleştirme / İşleme:</strong> Vidalama, presleme, lehimleme, yapıştırma veya lazer markalama.</li>
    <li><strong>Kalite Kontrol / Ölçüm:</strong> Kamera, yük hücresi veya lazer sensörle doğrulama.</li>
    <li><strong>Ayıklama ve Boşaltma:</strong> Sağlam ürünlerin kasaya, hatalıların (NOK) kilitli ıskarta kutusuna atılması.</li>
  </ol>
</div>

<h2>3. Morfolojik Kutu (Morphological Matrix) ile Konsept Üretimi</h2>
<p>Morfolojik kutu; her bir alt fonksiyon için bilinen tüm fiziksel prensipleri matris satırlarına yazarak, farklı satırları birleştirmek suretiyle zengin alternatif konseptler türetme aracıdır.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Alt Fonksiyon</th>
      <th>Çözüm Alternatifi 1</th>
      <th>Çözüm Alternatifi 2</th>
      <th>Çözüm Alternatifi 3</th>
      <th>Çözüm Alternatifi 4</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>F1: Parça Besleme</strong></td>
      <td>Vibrasyonlu Çanak</td>
      <td>Adımlı (Step) Feeder</td>
      <td>Esnek Titreşimli (Flex Feeder)</td>
      <td>Manuel Operatör Dizimi</td>
    </tr>
    <tr>
      <td><strong>F2: Ana Transfer</strong></td>
      <td>Globoidal Kamlı Döner Tabla</td>
      <td>Paletli Triger Konveyör</td>
      <td>Doğrusal Lineer Transfer Çubuğu</td>
      <td>6 Eksenli Robot Kolu</td>
    </tr>
    <tr>
      <td><strong>F3: Presleme / Çakma</strong></td>
      <td>Pnömatik Silindir</td>
      <td>Pnömo-Hidrolik Takviyeli</td>
      <td>Elektrikli Servo Pres</td>
      <td>Eksantrik Mekanik Pres</td>
    </tr>
    <tr>
      <td><strong>F4: Kalite Kontrol</strong></td>
      <td>2D Endüstriyel Kamera</td>
      <td>Lazer Mesafe Sensörü</td>
      <td>Pnömatik Geri Basınç</td>
      <td>Mekanik Go/No-Go Mastarı</td>
    </tr>
  </tbody>
</table>

<div class="muhendislik-kutu">
  <h4>Konseptlerin Türetilmesi:</h4>
  <ul>
    <li><strong>Konsept A (Yüksek Hızlı Seri Hat):</strong> Vibrasyonlu Çanak + Kamlı Döner Tabla + Pnömo-Hidrolik Pres + 2D Kamera (Çevrim süresi: 2,0 saniye).</li>
    <li><strong>Konsept B (Esnek ve Hassas Hat):</strong> Flex Feeder + Paletli Konveyör + Elektrikli Servo Pres (Kuvvet-Yol İzlemeli) + 2D Kamera (Çevrim süresi: 5,5 saniye, çoklu ürün esnekliği).</li>
    <li><strong>Konsept C (Düşük Maliyetli Yarı Otomatik):</strong> Manuel Besleme + Pnömatik Silindir + Mekanik Mastar (Çevrim süresi: 12 saniye).</li>
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
        <td><strong>URS (User Requirement Specification)</strong></td>
        <td>Müşterinin kapasite, tolerans, parça çeşitliliği ve fabrika altyapısını tanımladığı resmi teknik ihtiyaç dokümanı.</td>
      </tr>
      <tr>
        <td><strong>Functional Decomposition</strong></td>
        <td>Büyük ve karmaşık bir sistemi bağımsız çözülebilir alt fonksiyonel bloklara ayırma mühendislik yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Morfolojik Kutu</strong></td>
        <td>Alt fonksiyonların alternatif çözüm yöntemlerini bir matriste toplayarak yenilikçi konseptler sentezleme tekniği.</td>
      </tr>
      <tr>
        <td><strong>Footprint (Taban Alanı)</strong></td>
        <td>Makinenin fabrika zemininde işgal ettiği en-boy alanı; fabrika yerleşiminde en kritik kısıttır.</td>
      </tr>
      <tr>
        <td><strong>Takt Time</strong></td>
        <td>Müşteri talebini karşılamak için makineden parça çıkması gereken hedef zaman aralığı.</td>
      </tr>
      <tr>
        <td><strong>NOK (Not OK) Kutusu</strong></td>
        <td>Kalite kontrol testinden geçemeyen hatalı parçaların sadece yetkili anahtarla açılabilen kilitli ıskarta haznesine yönlendirilmesi.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Tasarım öncesinde URS şartnamesi analiz edilmeli; çevrim süresi, ortam koşulları, fabrika taban alanı ve altyapı limitleri kilitlenmelidir.</li>
    <li>Makine; besleme, transfer, fikstürleme, işleme ve kalite kontrol gibi temel alt fonksiyonel bloklara ayrılmalıdır.</li>
    <li>Morfolojik kutu kullanılarak her fonksiyon için alternatifler listelenmeli ve farklı ihtiyaçlara hitap eden 2-3 güçlü konsept türetilmelidir.</li>
    <li>Kritik kalite noktalarında hatalı parçaların hatta karışmasını önleyen kilitli NOK ayıklama mekanizmaları baştan tasarlanmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Şartname ve Altyapı Hatası):</strong> Bir otomasyon firması, otomotiv yan sanayisi için dakikada 40 adet parça basan 12 adet pnömatik silindirli bir montaj makinesi tasarlayıp üretmiştir. Makine müşteri fabrikasına kurulduğunda, silindirlerin yavaş hareket ettiği, aynı anda iki silindir devreye girdiğinde basıncın 6 bar'dan 3,2 bar'a düştüğü ve makinenin hedeflenen çevrim süresini yakalayamadığı görülmüştür. Tasarımcının URS aşamasında atladığı temel parametre nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Fabrikanın elektrik kablo rengi.
      <div class="test-cevap">YANLIŞ. Pnömatik basınçla ilgisi yoktur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Fabrikanın kompresör altyapısının sağladığı anlık hava debisi (Nl/dak) ve boru çapı kontrol edilmemiştir. Makine 12 silindirle dakikada 800 Nl hava tüketirken fabrikanın hat kapasitesi sadece 350 Nl/dak'dır. Tasarımcı makine girişine büyük hacimli bir yerel hava tankı (akumülatör tüpü) koymalı veya fabrikanın altyapı takviyesini şartnameye bağlamalıydı.
      <div class="test-cevap">DOĞRU. Sadece basınca (6 bar) bakmak yetmez; dinamik debi (Nl/dak) karşılanamazsa basınç çöker ve silindirler yerinde sayar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Silindirlerin yağı eksiktir.
      <div class="test-cevap">YANLIŞ. Yeni silindirler kendinden yağlamalıdır; sorun ana besleme debisidir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Morfolojik Kutu Uygulaması):</strong> Yüksek hassasiyetli bir medikal şırınga montaj makinesinde hedef çevrim süresi 1,2 saniyedir (saatte 3000 adet). Parçalar son derece küçük ve hafiftir. Morfolojik kutudan ana transfer mekanizması seçilirken hangi alternatif doğrudan elenmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Globoidal Kamlı Döner Tabla.
      <div class="test-cevap">YANLIŞ. 1,2 saniyelik çevrim için en ideal sistemdir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Büyük 6 Eksenli Endüstriyel Mafsallı Robot.
      <div class="test-cevap">DOĞRU. 6 eksenli bir robotun bir parçayı alıp, dönüp, bırakıp geri gelmesi en az 2,5–3,5 saniye sürer. 1,2 saniyelik çevrim süresi için 6 eksenli robot kinematik olarak imkansızdır; kamlı döner tabla veya lineer indeksör seçilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Mekanik Kamlı Pick & Place.
      <div class="test-cevap">YANLIŞ. Kamlı sistemler bu hızlara rahatlıkla ulaşır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Fonksiyonel Ayrıştırma):</strong> Bir montaj makinesinde vidalama istasyonundan hemen sonra tork testini geçemeyen (NOK) parçaların akıbeti ne olmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Hatalı parçalar hat üzerinde sağlam parçalarla birlikte ilerlemeye devam etmeli, en sonda operatör gözle ayıklamalıdır.
      <div class="test-cevap">YANLIŞ. İnsan dalgınlığıyla hatalı parçaların müşteriye gitmesine yol açar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Hatalı parça tespit edildiği anda sonraki istasyonlarda (örn: lehimleme, etiketleme) o parçaya hiçbir işlem yapılmamalı (enerji ve malzeme israfını önleme) ve parça çıkışta otomatik bir pnömatik kapakla sadece yetkili anahtarla açılabilen kilitli bir NOK kutusuna yönlendirilmelidir.
      <div class="test-cevap">DOĞRU. Otomasyonda temel kural: Hatalı parçaya daha fazla katma değer ekleme ve sağlam parçaların arasına karışmasını fiziksel kilitli kutuyla engelle.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Makine anında acil duruşa geçmeli ve tüm fabrika durmalıdır.
      <div class="test-cevap">YANLIŞ. Her tekil hatalı parçada fabrikayı durdurmak OEE verimliliğini sıfırlar.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 12.2: KONSEPT DEĞERLENDİRME (PUGH MATRİSİ VE POC)
kitap.bolumEkle({
  id: "12-2",
  baslik: "Konsept Değerlendirme",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Türetilen alternatif makine konseptleri arasından şirket hedeflerine ve teknik risk kriterlerine en uygun olanını objektif kriterlerle seçmeyi sağlayan <strong>Pugh Karar Matrisini</strong>, Ağırlıklandırılmış Puanlama Metodolojisini ve bilinmeyen teknolojilerde milyonlarca liralık hataları önleyen <strong>Kavram Kanıtlama (Proof of Concept - PoC)</strong> test protokollerini öğretmektir.</p>
</div>

<h2>1. Pugh Karar Matrisi ile Konsept Seçimi</h2>
<p>Stuart Pugh tarafından geliştirilen bu yöntem; tasarımcıların kendi çizdikleri konsepte duygusal olarak bağlanmasını engeller ve kararları matematiksel bir temele oturtur.</p>

<div class="muhendislik-kutu">
  <h4>Pugh Matrisi Adımları:</h4>
  <ol>
    <li>Değerlendirme kriterleri listelenir ve müşterinin önceliklerine göre <strong>Ağırlık Puanı (Weight: 1 – 5)</strong> atanır.</li>
    <li>Konseptlerden biri (genellikle mevcut kullanılan makine veya en basit çözüm) <strong>Referans (Datum / Baseline)</strong> kabul edilir ve tüm kriterlerde puanı sıfır (S - Same) sayılır.</li>
    <li>Diğer alternatif konseptler bu referansa göre kıyaslanır:
      <ul>
        <li>Referanstan daha iyi ise: <strong>+1 (veya +2)</strong></li>
        <li>Referans ile aynı ise: <strong>0 (S)</strong></li>
        <li>Referanstan daha kötü ise: <strong>−1 (veya −2)</strong></li>
      </ul>
    </li>
    <li>Puanlar kriter ağırlıklarıyla çarpılarak toplanır: <em>Toplam Skor = Σ (Ağırlık × Puan)</em>.</li>
  </ol>
</div>

<h3>Örnek Konsept Seçim Matrisi (Montaj Hücresi)</h3>
<table class="standart-tablo">
  <thead>
    <tr>
      <th>Değerlendirme Kriteri</th>
      <th>Kriter Ağırlığı (W)</th>
      <th>Konsept 1: Paletli Konveyör (Referans - DATUM)</th>
      <th>Konsept 2: Globoidal Kamlı Döner Tabla</th>
      <th>Konsept 3: Scara Robotlu Hücre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Çevrim Süresi (Hız)</strong></td>
      <td>5 (Çok Kritik)</td>
      <td>0 (Datum)</td>
      <td><strong>+2</strong> (+10)</td>
      <td>−1 (−5)</td>
    </tr>
    <tr>
      <td><strong>İlk Yatırım Maliyeti</strong></td>
      <td>4</td>
      <td>0 (Datum)</td>
      <td>−1 (−4)</td>
      <td>−2 (−8)</td>
    </tr>
    <tr>
      <td><strong>Ürün Değişim Esnekliği</strong></td>
      <td>4</td>
      <td>0 (Datum)</td>
      <td>−1 (−4)</td>
      <td><strong>+2</strong> (+8)</td>
    </tr>
    <tr>
      <td><strong>Kapladığı Taban Alanı</strong></td>
      <td>3</td>
      <td>0 (Datum)</td>
      <td><strong>+2</strong> (+6)</td>
      <td>+1 (+3)</td>
    </tr>
    <tr>
      <td><strong>Bakım Kolaylığı ve Güvenilirlik</strong></td>
      <td>3</td>
      <td>0 (Datum)</td>
      <td><strong>+1</strong> (+3)</td>
      <td>0 (0)</td>
    </tr>
    <tr>
      <td><strong>Teknik Risk Düzeyi</strong></td>
      <td>4</td>
      <td>0 (Datum)</td>
      <td>+1 (+4)</td>
      <td>−1 (−4)</td>
    </tr>
    <tr>
      <td><strong>AĞIRLIKLI TOPLAM SKOR</strong></td>
      <td>—</td>
      <td><strong>0</strong></td>
      <td><strong>+15 (KAZANAN KONSEPT)</strong></td>
      <td><strong>−6</strong></td>
    </tr>
  </tbody>
</table>

<p>Tablodan görüleceği üzere; çevrim süresinin hayati olduğu bu projede Konsept 2 (Döner Tabla), ilk maliyeti biraz daha yüksek olmasına rağmen toplamda en yüksek puanı alarak seçilmiştir.</p>

<h2>2. Ne Zaman "Proof of Concept (PoC)" Yapılmalıdır?</h2>
<p>Her makinede standart vidalama veya silindir basma gibi bilinen operasyonlar vardır; bunlar için prototipe gerek yoktur. Ancak projede <strong>teknik riski yüksek, teorik olarak hesaplanamayan yenilikçi bir istasyon</strong> varsa tüm makineyi üretmeye kalkışmak intihardır!</p>

<div class="muhendislik-kutu">
  <h4>PoC Gerektiren Kritik Durumlar:</h4>
  <ul>
    <li>Parçanın yapışkan, yağlı veya statik elektrik yüklü olup çanak besleyicide tırmanıp tırmanamayacağının bilinmemesi.</li>
    <li>Yeni bir ultrasonik kaynak veya lazer plastik yapıştırma prosesinin mukavemet doğrulaması.</li>
    <li>Kamera vizyon sisteminin parlak metal parça üzerindeki mikro çatlağı bor yağı altındayken yakalayıp yakalayamayacağı.</li>
  </ul>
</div>

<div class="uyari-kutu">
  <h4>Mühendislik Kuralı: Erken Başarısız Ol (Fail Early, Fail Cheap)!</h4>
  <p>Riskli operasyon için 1 haftada sigma profillerden basit bir <strong>test düzeneği (PoC sehpası)</strong> kurulur ve gerçek numunelerle test edilir:</p>
  <ul>
    <li>Eğer proses çalışmazsa, proje başında sadece 1000 dolar harcanarak yöntem değiştirilir.</li>
    <li>Eğer PoC yapılmazsa, 200.000 dolarlık komple makine bittiğinde sahada çalışmadığı görülür; firma batma noktasına gelir ve dava açılır!</li>
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
        <td><strong>Pugh Karar Matrisi</strong></td>
        <td>Tasarım alternatiflerini ağırlıklandırılmış kriterlere ve bir referansa göre sayısal puanlayan matris yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Datum / Baseline</strong></td>
        <td>Karar matrisinde diğer tüm alternatiflerin kıyaslandığı baz alınan referans tasarım.</td>
      </tr>
      <tr>
        <td><strong>PoC (Proof of Concept)</strong></td>
        <td>Yüksek riskli veya bilinmeyen bir mühendislik yönteminin çalışabilirliğini kanıtlamak için yapılan hızlı fiziksel ön test.</td>
      </tr>
      <tr>
        <td><strong>Teknik Risk Düzeyi</strong></td>
        <td>Bir konseptin hedeflenen çevrim süresi, hassasiyet ve dayanımı sağlayamama belirsizlik derecesi.</td>
      </tr>
      <tr>
        <td><strong>Fail Early Prensibi</strong></td>
        <td>Tasarım hatalarının maliyet henüz çok düşükken projenin en başında yakalanmasını savunan yalın kural.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Konsept seçiminde kişisel beğeniler değil, kriter ağırlıklı Pugh Karar Matrisi matematiksel olarak esas alınmalıdır.</li>
    <li>Kriterler belirlenirken hız, maliyet, taban alanı, esneklik ve teknik risk seviyesi birlikte tartılmalıdır.</li>
    <li>Bilinmeyen, hesaplanamayan veya daha önce denenmemiş proseslerde tüm makine çizilmeden önce mutlaka küçük bir PoC (Kavram Kanıtlama) test düzeneği kurulmalıdır.</li>
    <li>Hatanın tasarımın başında yakalanması maliyeti 1 birim iken, müşteri sahasında yakalanması 1000 birimdir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Karar Matrisi Metodolojisi):</strong> 3 farklı makine konseptini değerlendiren bir tasarım ekibinde kıdemli mühendis Konsept A'yı, genç mühendis ise Konsept B'yi savunmakta ve toplantı tartışmayla kilitlenmektedir. Bu çatışmayı profesyonel ve objektif bir sonuca bağlamak için hangi mühendislik yöntemi izlenmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Şirket sahibinin en beğendiği rengi seçmek.
      <div class="test-cevap">YANLIŞ. Mühendislik subjektif tercihlerle yönetilemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Müşterinin URS şartnamesindeki hedefleri baz alarak kriterlerin (çevrim süresi, maliyet, esneklik vb.) ağırlıklandırıldığı bir Pugh Karar Matrisi oluşturulmalı; puanlama yapılarak en yüksek ağırlıklı toplam skoru alan konsept üzerinde uzlaşılmalıdır.
      <div class="test-cevap">DOĞRU. Pugh matrisi duygusal tartışmaları sayısal mühendislik kriterlerine dönüştürür.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Yazı tura atmak.
      <div class="test-cevap">YANLIŞ. Ciddi mühendislik projelerinde şansa yer yoktur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (PoC İhtiyacı ve Risk Yönetimi):</strong> Bir projede daha önce hiç çalışılmamış, yüzeyi çok ince silikon yağıyla kaplı şeffaf plastik lenslerin vakum vantuzuyla çizilmeden ve yağ lekesi bırakılmadan taşınması istenmektedir. Proje yöneticisinin atması gereken en doğru adım nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Hemen 500.000 dolarlık komple montaj makinesinin imalatına başlamak.
      <div class="test-cevap">YANLIŞ. Yağlı lensler vantuzdan kayarsa veya iz kalırsa tüm makine çöpe gider.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tüm makineyi tasarlamadan önce; farklı vantuz malzemeleriyle (silikonsuz NBR, poliüretan, PEEK) küçük bir masaüstü test düzeneği (PoC) kurmak, 3 gün içinde lenslerin güvenle tutulup tutulmadığını ve optik mikroskop altında leke kalıp kalmadığını test ederek yöntemi doğrulamak.
      <div class="test-cevap">DOĞRU. PoC riski sıfırlar. Yöntemin çalıştığı kanıtlandıktan sonra ana makine tasarımına geçilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Müşteriye bu parçanın taşınamayacağını söyleyip projeyi reddetmek.
      <div class="test-cevap">YANLIŞ. Test etmeden kestirip atmak mühendislik değildir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Pugh Matrisinde Ağırlıklandırma):</strong> Bir fabrikanın montaj alanında yer sıkıntısı vardır ve tavan yüksekliği düşüktür. Pugh matrisinde hangi kriterin ağırlık puanı (Weight) en yüksek (5 puan) tutulmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Makinenin rengi.
      <div class="test-cevap">YANLIŞ. Renk teknik bir kısıt değildir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kapladığı Taban Alanı (Footprint) ve Makine Yüksekliği.
      <div class="test-cevap">DOĞRU. Fabrika fiziksel sınırları aşıldığında makine binaya sığmaz ve kapıdan dahi sokulamaz; bu nedenle en yüksek ağırlık verilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Yedek cıvata adedi.
      <div class="test-cevap">YANLIŞ. İkincil bir detaydır.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 12.3: DFMEA (TASARIM HATA TÜRÜ VE ETKİLERİ ANALİZİ)
kitap.bolumEkle({
  id: "12-3",
  baslik: "DFMEA",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Tasarım aşamasında ortaya çıkabilecek mekanik, elektriksel ve operasyonel arızaları henüz parçalar imal edilmeden önce öngörüp ortadan kaldırmayı sağlayan <strong>DFMEA (Design Failure Mode and Effects Analysis)</strong> metodolojisini; AIAG & VDA 7 adımlı standart yaklaşımını, Şiddet (S), Olasılık (O), Tespit (D) puanlama kriterlerini ve Aksiyon Önceliği (AP / RPN) yönetimini öğretmektir.</p>
</div>

<h2>1. DFMEA Nedir ve Neden Hayatidir?</h2>
<p>DFMEA; bir makinenin her bir parçasının ve alt sisteminin <em>"Nasıl arızalanabilir? Bu arıza kullanıcıya veya makineye ne zarar verir? Tasarımda bunu nasıl engelleyebiliriz?"</em> sorularının disiplinli bir mühendislik ekibi tarafından sistematik olarak yanıtlanmasıdır.</p>

<div class="muhendislik-kutu">
  <h4>Maliyetin 10 Kat Kuralı (Rule of Ten):</h4>
  <p>Bir tasarım hatasını düzeltmenin maliyeti her aşamada 10 katına çıkar:</p>
  <ul>
    <li><strong>CAD / Tasarım Aşamasında Düzeltme (DFMEA ile):</strong> 1 Birim Maliyet (Eskizde bir ölçü düzeltilir).</li>
    <li><strong>Prototip İmalatında Düzeltme:</strong> 10 Birim Maliyet (Parça yeniden işlenir).</li>
    <li><strong>Montaj ve Test Aşamasında Düzeltme:</strong> 100 Birim Maliyet (Haftalarca gecikme, şase modifikasyonu).</li>
    <li><strong>Müşteri Fabrikasında Düzeltme (Seri İmalatta):</strong> 1.000 – 10.000 Birim Maliyet (Hat duruş cezaları, parça değişimleri, itibar kaybı ve davalar!).</li>
  </ul>
</div>

<h2>2. DFMEA Puanlama Skalası (1 ila 10 Arası)</h2>
<p>Her bir potansiyel arıza modu için 3 bağımsız parametre puanlanır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Puan</th>
      <th>Şiddet (Severity - S)</th>
      <th>Olasılık (Occurrence - O)</th>
      <th>Tespit Edilebilirlik (Detection - D)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>9 – 10</strong></td>
      <td><strong>Felaket / Can Güvenliği:</strong> Uyarı vermeksizin operatörün ölümüne veya uzuv kaybına yol açan emniyet arızası ya da yasal düzenleme ihlali.</td>
      <td><strong>Kaçınılmaz / Çok Yüksek:</strong> Neredeyse her gün tekrarlanan kronik arıza (Hata olasılığı > %10).</td>
      <td><strong>Tespit Edilemez:</strong> Tasarım veya test aşamasında yakalama şansı yoktur; sadece müşteri sahada fark eder.</td>
    </tr>
    <tr>
      <td><strong>7 – 8</strong></td>
      <td><strong>Ağır Hasar / Hat Duruşu:</strong> Makinenin ana fonksiyonunu tamamen kaybetmesi; fabrika üretiminin saatlerce durması.</td>
      <td><strong>Yüksek:</strong> Sık sık tekrarlayan arıza (Hata oranı ~%1 ila %2).</td>
      <td><strong>Çok Düşük Tespit:</strong> Görsel kontrol veya standart testlerle yakalanması çok zor olan arıza.</td>
    </tr>
    <tr>
      <td><strong>4 – 6</strong></td>
      <td><strong>Orta Derece:</strong> Makine çalışır ancak performansı düşer, çevrim süresi uzar veya ürün kalitesi bozulur.</td>
      <td><strong>Orta:</strong> Ara sıra meydana gelen yorulma veya aşınma arızaları.</td>
      <td><strong>Orta Tespit:</strong> Fonksiyonel devreye alma testlerinde yakalanabilen arıza.</td>
    </tr>
    <tr>
      <td><strong>1 – 3</strong></td>
      <td><strong>Hafif / Önemsiz:</strong> Operatörün zar zor fark ettiği hafif ses, estetik boya çiziği.</td>
      <td><strong>Çok Düşük:</strong> Neredeyse imkansız; kanıtlanmış standart tasarımlar.</td>
      <td><strong>Kesin Tespit:</strong> CAD simülasyonu (FEA) veya otomatik sensörlerle %100 yakalanan arıza.</td>
    </tr>
  </tbody>
</table>

<h2>3. Risk Öncelik Göstergesi: RPN vs. Yeni VDA-AIAG AP Yaklaşımı</h2>
<div class="muhendislik-kutu">
  <h4>Klasik RPN (Risk Priority Number)</h4>
  <div class="formul-kutu">
    RPN = S (Şiddet) × O (Olasılık) × D (Tespit)
  </div>
  <p>RPN değeri 1 ile 1000 arasında çıkar. Geleneksel olarak RPN > 100 veya 120 olduğunda zorunlu tasarım aksiyonu alınırdı.</p>
</div>

<div class="uyari-kutu">
  <h4>Yeni Standart: Action Priority (AP - Aksiyon Önceliği)</h4>
  <p>Klasik RPN'in büyük bir kusuru vardı: Örneğin <em>S = 10 (Ölümcül tehlike), O = 2, D = 2</em> olduğunda RPN = 10 × 2 × 2 = 40 çıkıyor ve "Sorun yok" sanılıyordu! Oysa can güvenliği riski varsa olasılık düşük olsa dahi kabul edilemez!</p>
  <p>Yeni AIAG & VDA standardında <strong>Aksiyon Önceliği (AP: High, Medium, Low)</strong> matrisi getirildi. <strong>Şiddet (S) 9 veya 10 ise, O ve D ne olursa olsun sistem daima "HIGH PRIORITY (YÜKSEK ÖNCELİK)" verir</strong> ve tasarım değişikliğini mecburi kılar!</p>
</div>

<h2>4. Örnek DFMEA Satırı ve Önleyici Tasarım Aksiyonu</h2>
<table class="standart-tablo">
  <thead>
    <tr>
      <th>Sistem Elemanı</th>
      <th>Potansiyel Hata Türü</th>
      <th>Hatanın Etkisi</th>
      <th>S</th>
      <th>Potansiyel Sebep</th>
      <th>O</th>
      <th>Mevcut Tasarım Kontrolü</th>
      <th>D</th>
      <th>AP</th>
      <th>Tasarım Aksiyonu (Düzeltme)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pnömatik Gripper Çenesi</strong></td>
      <td>Dinamik ivmede çenenin açılması ve parçanın fırlaması.</td>
      <td>Fırlayan çelik parça güvenlik camını kırıp operatöre çarpabilir (Ağır yaralanma).</td>
      <td><strong>9</strong></td>
      <td>Fabrika ana hava basıncının aniden kesilmesi.</td>
      <td><strong>4</strong></td>
      <td>Basınç sensörü ile PLC alarmı.</td>
      <td><strong>5</strong></td>
      <td><strong>HIGH (Yüksek)</strong></td>
      <td><strong>Tasarım Revizyonu:</strong> Gripper çenesi form kilitli (form-fit) yay mekanizmalı hava kesilse dahi açılmayan modelle değiştirildi. Yeni skor: S=9, O=1, D=2 (Risk bertaraf edildi).</td>
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
        <td><strong>DFMEA</strong></td>
        <td>Tasarım kaynaklı olası tüm hata türlerini ve etkilerini üretim öncesinde yok eden sistematik analiz disiplini.</td>
      </tr>
      <tr>
        <td><strong>Severity (Şiddet - S)</strong></td>
        <td>Bir arızanın güvenlik, yasal uygunluk veya işlevsellik üzerinde yarattığı en kötü nihai zarar puanı (1–10).</td>
      </tr>
      <tr>
        <td><strong>Occurrence (Olasılık - O)</strong></td>
        <td>Tasarım eksikliği sebebiyle arızanın çalışma ömrü boyunca meydana gelme sıklık puanı (1–10).</td>
      </tr>
      <tr>
        <td><strong>Detection (Tespit - D)</strong></td>
        <td>Arızanın tasarım ve test aşamasında müşteri fabrikasına gitmeden yakalanabilme kabiliyeti (1–10).</td>
      </tr>
      <tr>
        <td><strong>Action Priority (AP)</strong></td>
        <td>S, O ve D değerlerinin kombinasyonuna göre tasarım değişikliğinin aciliyetini (High, Medium, Low) belirleyen yeni norm.</td>
      </tr>
      <tr>
        <td><strong>Rule of Ten (10 Kat Kuralı)</strong></td>
        <td>Bir hatanın tasarım aşamasından müşteri sahasına kadar her adımda 10 kat daha pahalıya mal olduğunu belirten kural.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>DFMEA evrak doldurmak için değil, hataları henüz CAD aşamasındayken 100 kat daha ucuza yok etmek için yapılır.</li>
    <li>Şiddet (S), Olasılık (O) ve Tespit (D) parametreleri 1'den 10'a kadar standart tablolardan puanlanır.</li>
    <li>Şiddeti 9 veya 10 olan can güvenliği risklerinde olasılık ne kadar düşük olursa olsun mutlaka önleyici tasarım revizyonu zorunludur.</li>
    <li>Etkili bir DFMEA, tespit (D) önlemlerine değil; hatanın oluşmasını fiziksel olarak imkansız kılan önleyici (O) tasarım değişikliklerine odaklanır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (DFMEA Mantığı ve Öncelik):</strong> Bir DFMEA çalışmasında iki farklı potansiyel arıza modu puanlanmıştır: <br>
    Arıza 1 (Boya çiziği): S = 2, O = 8, D = 8 ⇒ RPN = 128 <br>
    Arıza 2 (Kabin kapısı menteşesi kopması sonucu robotun dışarı fırlaması): S = 10, O = 2, D = 3 ⇒ RPN = 60 <br>
    Klasik RPN eşiği 100 kabul edilirse Arıza 1 öncelikli görünmektedir. Modern AIAG & VDA DFMEA yaklaşımına göre mühendislik ekibinin derhal müdahale etmesi gereken asıl arıza hangisidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Arıza 2; çünkü Şiddet puanı S = 10 (ölümcül kaza riski) olan durumlar RPN puanına bakılmaksızın doğrudan "HIGH (Yüksek Aksiyon Önceliği)" alır ve tasarımın revize edilmesi kanunen zorunludur.
      <div class="test-cevap">DOĞRU. Modern DFMEA'da hiçbir can güvenliği riski (S=9, 10) düşük RPN arkasına gizlenemez. Öncelik daima şiddettedir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Arıza 1; çünkü 128 > 60'tır ve matematik yanılmaz.
      <div class="test-cevap">YANLIŞ. Klasik RPN çarpımının en büyük yanılgısı budur; hafif bir kusur sık tekrarladığı için ölümcül bir tehlikenin önüne geçemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) İki arıza da önemsizdir.
      <div class="test-cevap">YANLIŞ. Ağır emniyet riskleri asla göz ardı edilemez.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Tasarım Önlemi vs. Tespit Önlemi):</strong> Bir kartezyen robotun Z ekseni dikey frenli motorunun kaplini gevşediğinde Z ekseni yerçekimiyle serbest düşmekte ve alttaki kalıbı parçalamaktadır (S = 8, O = 6, D = 7). Mühendislik ekibi bu riski düşürmek için "Z ekseninin altına bir kamera koyup düşmeyi algılatalım ve alarm çaldıralım" önerisinde bulunmuştur. Bu öneri DFMEA felsefesine göre neden ZAYIF bir çözümdür?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kamera pahalıdır.
      <div class="test-cevap">YANLIŞ. Maliyetten öte fonksiyonel bir zaaf vardır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kamera sadece "Tespit (D)" parametresini iyileştirir; ancak kütle yerçekimiyle 0,2 saniyede düşeceği için kamera görse bile parçalanmayı engelleyemez. Kaliteli bir DFMEA aksiyonu "Olasılık (O)" parametresini sıfırlamalıdır: Motor miline kamalı gevşeyen kaplin yerine konik sıkma bileziği takılmalı ve Z eksenine bağımsız mekanik yaylı pnömatik düşme emniyet kilit pimi (rod lock) eklenmelidir.
      <div class="test-cevap">DOĞRU. En üst düzey mühendislik aksiyonu hatayı oluştuktan sonra tespit eden değil, hatanın fiziksel olarak oluşmasını imkansız kılan önleyici tasarımdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Z ekseni ağırlıksız yapılmalıdır.
      <div class="test-cevap">YANLIŞ. Fizik kurallarına aykırıdır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (10 Kat Kuralı):</strong> Bir tasarımcının CAD çiziminde yaptığı 15 mm'lik bir montaj deliği kaçıklığı hatası, imalat yapılmadan önce DFMEA ve DMU çakışma kontrolü sırasında fark edilmiş ve 5 dakikada düzeltilmiştir. Bu hata fark edilmeyip makine montajı tamamlanıp müşteri sahasında devreye alma sırasında fark edilseydi maliyeti ortalama kaç kat daha yüksek olurdu?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Yaklaşık 100 ila 1000 kat daha yüksek (Parçanın sökülmesi, sahada modifikasyon, boya bozulması, teknisyen konaklama ve hat duruş cezaları).
      <div class="test-cevap">DOĞRU. Tasarım aşamasında düzeltilmeyen her hata montaj ve sahada geometrik olarak katlanarak şirket bütçesini tüketir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Aynı maliyette olurdu.
      <div class="test-cevap">YANLIŞ. Sahada parça sökmek ve değiştirmek muazzam masraflıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Sahada düzeltmek daha ucuzdur.
      <div class="test-cevap">YANLIŞ. Tamamen gerçek dışıdır.</div>
    </div>
  </div>
</div>
`
});
