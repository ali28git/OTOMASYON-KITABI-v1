/* ========================================================================
   MODÜL 10: MAKİNE EMNİYETİ VE STANDARTLAR (m10-b.js)
   Bölüm 10.4: Koruyucular ve Kilitleme (ISO 14120 ve ISO 14119)
   Bölüm 10.5: Fonksiyonel Güvenlik (ISO 13849-1)
   Bölüm 10.6: Robot ve Kobot Güvenliği (ISO 10218 ve ISO/TS 15066)
   ======================================================================== */

// BÖLÜM 10.4: KORUYUCULAR VE KİLİTLEME (ISO 14120 VE ISO 14119)
kitap.bolumEkle({
  id: "10-4",
  baslik: "Koruyucular ve Kilitleme",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makinelerde fiziksel tehlikelerin çevresini kapatan mekanik koruyucuların (<strong>ISO 14120</strong>) ve bu koruyucu kapıların açılmasını denetleyen kilitleme cihazlarının (<strong>ISO 14119</strong>); sabit/hareketli muhafaza tasarım kurallarını, aletsiz sökülememe ve tutsak cıvata (captive fastener) ilkelerini, kapı kilit mekanizmalarını (Guard Locking) ve baypas edilmeyi önleme (Defeat Prevention) standartlarını öğretmektir.</p>
</div>

<h2>1. Mekanik Koruyucu Tipleri ve Tasarım Esasları (ISO 14120)</h2>
<p>Mekanik koruyucular; operatörün tehlikeli alana erişimini engellemek, fırlayan talaş/parça veya sıvı sıçramalarını hapsetmek için kullanılan fiziksel bariyerlerdir.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Koruyucu Tipi</th>
      <th>Mekanik Özellikleri</th>
      <th>Açılma / Sökülme Kuralı</th>
      <th>Kullanım Alanı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Sabit Koruyucu (Fixed Guard)</strong></td>
      <td>Şaseye cıvata veya kaynakla sabitlenmiş sac, profil veya şeffaf panel muhafazalar.</td>
      <td><strong>Yalnızca bir el aletiyle (alyan, anahtar) sökülebilir olmalıdır!</strong> Kelebek vida, tokmak veya mandal kesinlikle YASAKTIR. Söküldüğünde cıvatalar kapağın üzerinde asılı kalmalıdır (Captive Fasteners).</td>
      <td>Yılda bir kez bakım veya revizyon için erişilen arka ve yan bölgeler, transmisyon kayış-zincir muhafazaları.</td>
    </tr>
    <tr>
      <td><strong>Hareketli Koruyucu (Movable Guard)</strong></td>
      <td>Menteşeli, sürgülü veya dikey giyotin şeklinde açılabilen kapılar.</td>
      <td>Aletsiz elle açılabilir; ancak <strong>ISO 14119 uyumlu bir güvenlik şalteri (interlock) ile kilitlenmiş olmalıdır</strong>. Kapı açıldığı anda makine durmalıdır.</td>
      <td>Her vardiyada parça yükleme, kalıp ayarı, temizlik veya sık bakım yapılan ön kapılar.</td>
    </tr>
    <tr>
      <td><strong>Ayarlanabilir Koruyucu (Adjustable Guard)</strong></td>
      <td>İşlenen parçanın boyutuna göre açıklığı operatör tarafından manuel ayarlanabilen siperlikler.</td>
      <td>Kullanım sırasında aletsiz ayarlanabilir ancak tehlike bölgesini asgari açıkta bırakacak şekilde tasarlanır.</td>
      <td>Şerit testereler, sütunlu matkaplar, manuel frezeler.</td>
    </tr>
  </tbody>
</table>

<div class="uyari-kutu">
  <h4>Kritik Standart Kuralı: Tutsak Cıvata (Captive Fasteners) Zorunluluğu</h4>
  <p>ISO 14120 Madde 5.3.3.2 uyarınca, periyodik bakım için sökülen sabit koruyucu kapakların cıvataları, somunları ve pulları, <strong>kapak söküldüğünde kapağın veya şasenin üzerinde asılı (bağlı) kalmalıdır!</strong></p>
  <ul>
    <li>Operatörlerin cıvataları yere düşürüp kaybetmesi ve ardından 4 cıvatalı kapağı sadece 1 cıvatayla tutturması veya hiç takmaması küresel bir iş kazası sebebidir.</li>
    <li>Tasarımda yaylı segmanlı tutsak vidalar (captive screws) veya şaseye zincirlenmiş bağlantı elemanları kullanılmalıdır.</li>
  </ul>
</div>

<h2>2. Koruyucu Panel Malzemesi: Polikarbonat vs. Akrilik (Pleksi)</h2>
<p>Operatörün içeriyi görmesi gereken pencerelerde malzeme seçimi hayati önem taşır:</p>
<ul>
  <li><strong>Polikarbonat (PC - Lexan / Makrolon):</strong> <strong>Tek doğru seçimdir.</strong> Muazzam darbe dayanımına sahiptir (camdan 250 kat mukavim). İçeriden fırlayan 200 m/s hızındaki sert bir karbür takım ucunu veya parçayı esneyerek yutar; yırtılmaz ve dağılmaz. <em>(Not: Soğutma sıvısı ve UV etkisiyle 3–5 yılda yaşlanır, sarardığında değiştirilmelidir).</em></li>
  <li><strong>Akrilik (PMMA / Pleksiglas):</strong> <strong>Makine muhafazalarında KESİNLİKLE YASAKTIR!</strong> Darbe aldığında cam gibi keskin jilet şeklinde şarapnel parçalarına ayrılarak patlar; içeriden fırlayan parçayı tutamadığı gibi operatörü ağır yaralar!</li>
</ul>

<h2>3. Emniyet Kilitleri ve Şalter Tipleri (ISO 14119)</h2>
<p>Hareketli bir kapının durumunu algılayan kilit cihazları 4 sınıfa ayrılır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Şalter Tipi</th>
      <th>Çalışma Prensibi</th>
      <th>Baypas Edilebilirlik (Manipülasyon) Riski</th>
      <th>Mühendislik Tavsiyesi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Tip 1 (Mekanik Makara / Sınır Anahtarı)</strong></td>
      <td>Kapı kapandığında makara koluna veya pime fiziksel basar.</td>
      <td><strong>Çok Kolay:</strong> Bir tornavida veya bantla kolayca basılı tutulup aldatılabilir.</td>
      <td>Güvenlik kapılarında tek başına kullanımı önerilmez.</td>
    </tr>
    <tr>
      <td><strong>Tip 2 (Mekanik Dilli Şalter - Tongue Interlock)</strong></td>
      <td>Kapıya takılı özel formlu çelik dil gövdeye girerek çift kontak açar.</td>
      <td><strong>Kolay:</strong> Yedek bir dil anahtarlığa takılarak şaltere sokulabilir ve kapı açıkken makine çalıştırılabilir.</td>
      <td>Düşük riskli yerlerde kullanılabilir; gizlenmiş montaj gerektirir.</td>
    </tr>
    <tr>
      <td><strong>Tip 3 (Manyetik Temassız Şalter)</strong></td>
      <td>Mıknatıs gövdeye yaklaştığında Reed veya Hall sensörünü tetikler.</td>
      <td><strong>Orta:</strong> Harici güçlü bir neodimyum mıknatıs yapıştırılarak baypas edilebilir.</td>
      <td>Sadece düşük kodlama seviyesinde kabul edilir.</td>
    </tr>
    <tr>
      <td><strong>Tip 4 (RFID Kodlu Temassız Emniyet Şalteri)</strong></td>
      <td>Kapıdaki aktüatör ile gövdedeki okuyucu arasında şifreli 128-bit RFID telsiz haberleşmesi yapılır.</td>
      <td><strong>İMKANSIZ (Yüksek Düzey Kodlama - High Coding Level).</strong> Her şalter sadece kendi fabrikasyon eşleştiği tekil RFID etiketini tanır; harici hiçbir dille veya mıknatısla aldatılamaz!</td>
      <td><strong>Modern Otomasyonun Altın Standardı.</strong> ISO 14119 uyarınca baypas koruması için şiddetle tavsiye edilir.</td>
    </tr>
  </tbody>
</table>

<h2>4. Korumalı Kilitleme (Guard Locking with Solenoid): Ne Zaman Zorunludur?</h2>
<p>İki farklı kilitleme konsepti mevcuttur:</p>
<ol>
  <li><strong>Korumalı Kilit Olmayan (Interlocking without Guard Locking):</strong> Kapı istendiği an açılabilir; kapı açıldığı anda makineye "DUR" komutu gider. <em>Koşul:</em> Kapının açılıp operatörün tehlikeye ulaşma süresi (<em>t<sub>ulaşma</sub></em>), makinenin duruş süresinden (<em>t<sub>duruş</sub></em>) <strong>büyükse</strong> kullanılır.</li>
  <li><strong>Korumalı Kilitleme (Interlocking WITH Guard Locking):</strong> Kapı üzerinde yaylı/solenoidli mekanik bir kilit pimi vardır. Operatör butona bassa bile, içerideki yüksek ataletli disk, testere veya robot <strong>tamamen sıfır hıza inene kadar kilit açılmaz!</strong>
    <br><strong>Zorunluluk Kuralı:</strong> Eğer tehlikeli hareketin durması 1–2 saniyeden uzun sürüyorsa (<em>t<sub>duruş</sub> > t<sub>ulaşma</sub></em>), can güvenliği için Guard Locking kullanılması kanuni bir zorunluluktur.</li>
</ol>

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
        <td><strong>ISO 14120</strong></td>
        <td>Sabit ve hareketli koruyucuların tasarım, mukavemet ve malzeme gereksinimlerini belirleyen standart.</td>
      </tr>
      <tr>
        <td><strong>ISO 14119</strong></td>
        <td>Koruyucu kapılarla ilişkili kilitleme cihazlarının seçimi, montajı ve baypas edilmesinin önlenmesi standardı.</td>
      </tr>
      <tr>
        <td><strong>Captive Fasteners (Tutsak Cıvata)</strong></td>
        <td>Kapak şaseden söküldüğünde delikten düşmeyip kapak sacına bağlı kalan güvenlik bağlantı elemanı.</td>
      </tr>
      <tr>
        <td><strong>Guard Locking (Emniyetli Kapı Kilidi)</strong></td>
        <td>Makinedeki tehlikeli hareket tamamen sıfırlanana kadar kapının açılmasını mekanik pimle fiziksel engelleyen sistem.</td>
      </tr>
      <tr>
        <td><strong>Defeat Prevention (Baypas Önleme)</strong></td>
        <td>Operatörün emniyet şalterlerini tornavida, mıknatıs veya köprüleme kablosu ile devre dışı bırakmasını engelleyen tasarım önlemleri.</td>
      </tr>
      <tr>
        <td><strong>RFID High-Level Coding</strong></td>
        <td>Alıcı ve vericinin tekil şifreli eşleştiği, harici taklit parçalarla aldatılması imkansız olan Tip 4 şalter standardı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Sabit koruyucular asla aletsiz sökülebilir (kelebek vida vb.) yapılamaz ve cıvataları kapak üzerinde asılı kalan (captive) tipte olmalıdır.</li>
    <li>Şeffaf pencerelerde sadece yüksek darbe mukavemetli Polikarbonat kullanılabilir; gevrek parçalanan Akrilik/Pleksi kesinlikle yasaktır.</li>
    <li>Mekanik dilli veya manyetik şalterler kolayca baypas edilebilir; modern sistemlerde aldatılamaz yüksek kodlu RFID emniyet şalterleri seçilmelidir.</li>
    <li>Makinenin durması zaman alıyorsa (yüksek ataletli miller, robotlar), duruş tamamlanana kadar kapıyı açtırmayan Guard Locking kilitleri zorunludur.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Malzeme Güvenliği ve Kök Neden):</strong> Bir CNC torna ve talaşlı işleme hücresinde gözetleme camı olarak 6 mm kalınlığında şeffaf Pleksiglas (Akrilik / PMMA) kullanılmıştır. Fikstürden fırlayan 300 gramlık çelik parça pencereye çarpmış; pleksi cam jilet gibi keskin parçalara ayrılarak patlamış ve fırlayan parça ile cam şarapnelleri dışarıdaki operatörü yaralamıştır. ISO 14120 standardına göre tasarımcının yaptığı temel hata nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Pleksiglas kalınlığı 10 mm yapılmalıydı.
      <div class="test-cevap">YANLIŞ. Akrilik malzeme ne kadar kalın olursa olsun gevrek darbe dayanımı yetersizdir ve patlayarak dağılır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Talaş fırlama riski olan koruyucu pencerelerde darbe sönümleme ve plastik deformasyon kabiliyeti çok yüksek olan Polikarbonat (PC) kullanılması zorunludur. Akrilik gevrek bir plastiktir, darbede şarapnel oluşturur ve koruyucu muhafaza olarak kullanımı standartlarca yasaklanmıştır.
      <div class="test-cevap">DOĞRU. Talaşlı imalat kabin pencerelerinin standardı polikarbonattır. Polikarbonat kurşungeçirmez cam yapımında dahi kullanılan muazzam tokluğa sahip bir malzemedir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Pencerenin üzerine şeffaf film çekilseydi yeterli olurdu.
      <div class="test-cevap">YANLIŞ. Film yüksek enerjili fırlamaları durduramaz.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Baypas Önleme ve ISO 14119):</strong> Bir fabrikada montaj robotu hücresinin menteşeli kapısına standart mekanik dilli bir emniyet şalteri (Tip 2) takılmıştır. Bakımcılar ve operatörler kapıyı açıp içeri girdiklerinde robotun durmasından sıkıldıkları için çekmeceden aldıkları yedek bir çelik dili şalterin yuvasına sokmuş ve kapı açıkken robotu çalıştırmışlardır. Bu baypas (aldatma) riskini ISO 14119 standardına göre kökten engellemek için hangi şaltere geçilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Şalterin üzerine uyarı etiketi yapıştırmak.
      <div class="test-cevap">YANLIŞ. Etiket mekanik baypası engelleyemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Yüksek kodlama seviyesine (High-Level Coding) sahip RFID Temassız Emniyet Şalterine (Tip 4) geçilmelidir. Alıcı gövde yalnızca kapıya monteli tekil RFID çipini tanır; harici hiçbir dille, telle veya genel mıknatısla tetiklenemez.
      <div class="test-cevap">DOĞRU. ISO 14119'a göre RFID kodlu şalterler operatör tarafından aldatılması en zor (imkansıza yakın) altın standart güvenlik bileşenleridir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Mekanik dilli şalteri japon yapıştırıcısıyla yapıştırmak.
      <div class="test-cevap">YANLIŞ. Bu şalteri tamamen çalışmaz hale getirir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Guard Locking Kriteri):</strong> Dakikada 6000 devir yapan yüksek ataletli bir taşlama taşının muhafaza kapağında durdurma butonuna basıldığında taşın sürtünmeyle durması tam 18 saniye sürmektedir. Kapının menteşeli koluna basılıp açılması ise 1,5 saniye almaktadır. Bu kapıda standart bir emniyet şalteri mi yoksa manyetik kilitli (Guard Locking) şalter mi kullanılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Standart şalter yeterlidir, operatör taşın durmasını beklemelidir.
      <div class="test-cevap">YANLIŞ. Operatörün dalgınlıkla erken açması halinde elini taşa kaptırıp parçalanma riski vardır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Makinenin duruş süresi (18 sn), operatörün kapıyı açıp ulaşma süresinden (1,5 sn) çok daha uzun olduğu için mutlaka Emniyetli Kapı Kilidi (Guard Locking) kullanılmalıdır. Kilit pimi, emniyetli devir kontrol modülü (Safe Speed Monitor) taşın hızının sıfır olduğunu onaylayana kadar kapının açılmasına fiziksel olarak izin vermemelidir.
      <div class="test-cevap">DOĞRU. Tehlike durana kadar kapının fiziksel olarak açılmasını engelleyen Guard Locking sistemleri, yüksek ataletli makinelerin mecburi standardıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kapağa kilit yerine yay takılmalıdır.
      <div class="test-cevap">YANLIŞ. Yay açılmayı engelleyemez.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 10.5: FONKSİYONEL GÜVENLİK (ISO 13849-1)
kitap.bolumEkle({
  id: "10-5",
  baslik: "Fonksiyonel Güvenlik (ISO 13849)",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makinelerin kontrol sistemlerinin güvenlik ile ilgili parçalarını (SRP/CS) tasarlamak ve doğrulamak için küresel standart olan <strong>ISO 13849-1</strong> normunu; Gerekli Performans Seviyesi (PLr) risk grafiğini, Kategori mimarilerini (B, 1, 2, 3, 4), MTTF<sub>D</sub> (Tehlikeli Arızaya Kadar Ortalama Süre), DC<sub>avg</sub> (Teşhis Kapsamı), CCF (Ortak Nedenli Arıza) parametrelerini ve SISTEMA doğrulama metodolojisini öğretmektir.</p>
</div>

<h2>1. Performans Seviyesi (Performance Level - PL) Nedir?</h2>
<p>Performans Seviyesi (PL); bir güvenlik fonksiyonunun (örn: acil duruşa basıldığında motorun enerjisini kesmesi) zorlu koşullar altında bu fonksiyonu yerine getirme yeteneğini belirten <strong>a'dan e'ye kadar 5 kademeli</strong> bir güvenilirlik derecesidir.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Performans Seviyesi (PL)</th>
      <th>Saat Başına Tehlikeli Arıza Olasılığı (PFH<sub>D</sub>) [1/saat]</th>
      <th>Eşdeğer Güvenlik Bütünlük Seviyesi (IEC 62061 / SIL)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>PL a</strong></td>
      <td>10<sup>-5</sup> ≤ PFH<sub>D</sub> < 10<sup>-4</sup></td>
      <td>SIL atanmaz (Düşük)</td>
    </tr>
    <tr>
      <td><strong>PL b</strong></td>
      <td>3 × 10<sup>-6</sup> ≤ PFH<sub>D</sub> < 10<sup>-5</sup></td>
      <td>SIL 1</td>
    </tr>
    <tr>
      <td><strong>PL c</strong></td>
      <td>10<sup>-6</sup> ≤ PFH<sub>D</sub> < 3 × 10<sup>-6</sup></td>
      <td>SIL 1</td>
    </tr>
    <tr>
      <td><strong>PL d</strong></td>
      <td>10<sup>-7</sup> ≤ PFH<sub>D</sub> < 10<sup>-6</sup></td>
      <td>SIL 2 (Genel Otomasyon ve Robotik Standardı)</td>
    </tr>
    <tr>
      <td><strong>PL e</strong></td>
      <td>10<sup>-8</sup> ≤ PFH<sub>D</sub> < 10<sup>-7</sup></td>
      <td>SIL 3 (Mekanik Presler, Yüksek Riskli Makineler)</td>
    </tr>
  </tbody>
</table>

<h2>2. Gerekli Performans Seviyesinin (PLr) Belirlenmesi: Risk Grafiği</h2>
<p>Tasarımcı, her bir güvenlik fonksiyonu için ISO 13849-1 risk grafiğini kullanarak hedef <strong>PLr (Required Performance Level)</strong> değerini tespit eder:</p>

<div class="muhendislik-kutu">
  <h4>Risk Grafiği Parametreleri:</h4>
  <ul>
    <li><strong>S (Yaralanmanın Şiddeti - Severity of Injury):</strong>
      <ul>
        <li><strong>S1:</strong> Hafif, geri dönüşü olan yaralanma (morarma, yüzeysel kesik).</li>
        <li><strong>S2:</strong> Ağır, geri dönüşü olmayan yaralanma veya ölüm (uzuv kaybı, kırık, kalıcı sakatlık).</li>
      </ul>
    </li>
    <li><strong>F (Tehlikeye Maruz Kalma Sıklığı ve/veya Süresi - Frequency):</strong>
      <ul>
        <li><strong>F1:</strong> Seyrek veya kısa süreli maruz kalma (günde 1 kereden az veya toplam süre kısa).</li>
        <li><strong>F2:</strong> Sık veya sürekli maruz kalma (çevrim başına veya saatte birkaç kez kapı açma).</li>
      </ul>
    </li>
    <li><strong>P (Tehlikeden Kaçınma İhtimali - Possibility of Avoiding Hazard):</strong>
      <ul>
        <li><strong>P1:</strong> Belirli şartlarda mümkün (yavaş hareket, yeterli alan, kaçış mesafesi var).</li>
        <li><strong>P2:</strong> Neredeyse imkansız (ani ve hızlı hareket, sıkışık kapalı alan).</li>
      </ul>
    </li>
  </ul>
  <p><strong>Örnek:</strong> Bir hidrolik preste parmak ezilmesi geri dönüşsüzdür (<strong>S2</strong>), parça her çevrimde elle yüklenmektedir (<strong>F2</strong>), pres hızı yüksektir ve kaçış imkansızdır (<strong>P2</strong>). Grafik doğrudan <strong>PLr = e</strong> hedefini zorunlu kılar!</p>
</div>

<h2>3. PL Seviyesini Belirleyen 4 Temel Parametre</h2>
<div class="muhendislik-kutu">
  <h4>1. Kategori (Mimari Yapı - Architecture)</h4>
  <ul>
    <li><strong>Kategori B & 1 (Tek Kanal):</strong> Temel emniyet prensipleri. Tek bir bileşenin arızalanması (kontak yapışması vb.) emniyet fonksiyonunun tamamen kaybına yol açar.</li>
    <li><strong>Kategori 2 (Periyodik Testli Tek Kanal):</strong> Emniyet fonksiyonu çalıştırılmadan önce veya belirli aralıklarla test edilir; ancak testler arasındaki arıza tehlike yaratabilir.</li>
    <li><strong>Kategori 3 (Çift Kanal / Redundant):</strong> İki bağımsız emniyet kanalı vardır. <strong>Tek bir hata emniyet fonksiyonunun kaybına YOL AÇMAZ!</strong> (Örn: Çift emniyet kontaktörü). Ancak birikmiş hatalar sistemi devre dışı bırakabilir.</li>
    <li><strong>Kategori 4 (Çift Kanal + Sürekli Teşhis):</strong> İki bağımsız kanal ve yüksek otomatik teşhis. <strong>Tek bir hata veya birikmiş birden çok hata dahi emniyet fonksiyonunu bozamaz!</strong> (PL e için zorunlu mimaridir).</li>
  </ul>
</div>

<div class="muhendislik-kutu">
  <h4>2. MTTF<sub>D</sub> (Mean Time to Dangerous Failure - Tehlikeli Arızaya Kadar Ortalama Süre)</h4>
  <p>Bileşenlerin güvenilirlik ömrüdür (Yıl cinsinden):</p>
  <ul>
    <li>Düşük (Low): 3 yıl ≤ MTTF<sub>D</sub> < 10 yıl</li>
    <li>Orta (Medium): 10 yıl ≤ MTTF<sub>D</sub> < 30 yıl</li>
    <li>Yüksek (High): 30 yıl ≤ MTTF<sub>D</sub> ≤ 100 yıl</li>
  </ul>
</div>

<div class="muhendislik-kutu">
  <h4>3. DC<sub>avg</sub> (Average Diagnostic Coverage - Ortalama Teşhis Kapsamı)</h4>
  <p>Kontrol sisteminin kendi içindeki tehlikeli donanım arızalarını (örneğin bir kontaktörün kontağının yapışmasını) ne oranda tespit edip sistemi durdurabildiğinin yüzdesidir:</p>
  <ul>
    <li>Yok: DC<sub>avg</sub> < %60</li>
    <li>Düşük: %60 ≤ DC<sub>avg</sub> < %90</li>
    <li>Orta: %90 ≤ DC<sub>avg</sub> < %99 (Geri bildirimli - EDM kontak izlemeli sistemler)</li>
    <li>Yüksek: DC<sub>avg</sub> ≥ %99</li>
  </ul>
</div>

<div class="muhendislik-kutu">
  <h4>4. CCF (Common Cause Failure - Ortak Nedenli Arıza)</h4>
  <p>Her iki bağımsız kanalı aynı anda devre dışı bırakabilecek ortak etkenlere (yıldırım/aşırı gerilim, aşırı sıcaklık, aynı kablo kanalında ezilme) karşı alınan önlemler puanlanır. ISO 13849-1 Tablo F.1'e göre <strong>en az 65 puan</strong> alınması zorunludur.</p>
</div>

<h2>4. Fonksiyonel Güvenlik Zinciri: Girdi - Mantık - Çıktı</h2>
<p>Bir emniyet devresi üç halkanın seri bağlanması gibidir; zincir en zayıf halkası kadar güçlüdür:</p>
<div class="formul-kutu">
  Emniyet Fonksiyonu = Giriş (Sensör/Buton) + Mantık (Emniyet Rölesi / Güvenlik PLC'si) + Çıkış (Kontaktör / Emniyetli Sürücü - STO)
</div>

<div class="uyari-kutu">
  <h4>En Büyük Mühendislik Hatası: Standart PLC ile Emniyet Yönetmek!</h4>
  <p>Standart bir endüstriyel PLC (örneğin S7-1200 veya standart giriş-çıkış kartları) <strong>KESİNLİKLE EMNİYET DEVRESİNDE KULLANILAMAZ!</strong> Standart PLC transistörleri kısa devre arızası yaptığında çıkış sürekli "1" kalır; acil duruşa basılsa dahi motoru durduramaz! Emniyet devrelerinde mutlaka <strong>sarı renkli "Fail-Safe PLC" (F-CPU ve F-DI/F-DO modülleri)</strong> veya sertifikalı <strong>Emniyet Röleleri (Safety Relay)</strong> kullanılmalıdır.</p>
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
        <td><strong>ISO 13849-1</strong></td>
        <td>Makinelerin güvenlik kontrol devrelerinin güvenilirlik ve mimari tasarım standardı.</td>
      </tr>
      <tr>
        <td><strong>Performance Level (PL)</strong></td>
        <td>Bir güvenlik devresinin saatteki tehlikeli arıza olasılığını belirten a'dan e'ye güvenilirlik seviyesi.</td>
      </tr>
      <tr>
        <td><strong>MTTF<sub>D</sub></strong></td>
        <td>Bir bileşenin tehlikeli bir arıza yapana kadar geçen teorik ortalama çalışma süresi (Yıl).</td>
      </tr>
      <tr>
        <td><strong>Diagnostic Coverage (DC)</strong></td>
        <td>Sistemin kendi içinde oluşan donanım hatalarını otomatik algılama ve teşhis etme oranı (%).</td>
      </tr>
      <tr>
        <td><strong>EDM (External Device Monitoring)</strong></td>
        <td>Emniyet kontaktörlerinin yardımcı ayna kontaklarını izleyerek kontak yapışmasını anında teşhis eden geri bildirim devresi.</td>
      </tr>
      <tr>
        <td><strong>SISTEMA</strong></td>
        <td>Alman DGUV tarafından geliştirilen, ISO 13849-1 hesaplama ve PL doğrulama resmi yazılım aracı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Performans Seviyesi (PL), güvenlik devresinin arıza yapmama güvenilirliğini gösterir; genel otomasyonda hedef en az PL d, preslerde PL e'dir.</li>
    <li>Kategori 3 ve 4 mimarilerinde çift kanal (yedeklilik) şarttır; tek bir arıza sistemi emniyetsiz bırakamaz.</li>
    <li>Giriş, mantık ve çıkış elemanlarının tümü hedeflenen PL seviyesini sağlamalıdır; standart PLC'ler emniyet yönetiminde kullanılamaz.</li>
    <li>Çıkış kontaktörlerinde kontak yapışmasını algılamak için mutlaka EDM (ayna kontak) geri besleme teşhisi (DC<sub>avg</sub>) kurulmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (PLr Risk Grafiği Analizi):</strong> Yüksek hızlı bir eksantrik sac presinde operatör her parçayı elleriyle açık kalıbın içine yerleştirmekte ve basma pedalına basmaktadır (S2: Ağır uzuv kopması / ölüm; F2: Sürekli çevrim başına maruz kalma; P2: Pres iniş hızı aşırı yüksek, kaçış imkansız). ISO 13849-1 risk grafiğine göre bu presin acil duruş ve ışık perdesi devresi minimum hangi Performans Seviyesini (PLr) sağlamalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) PLr = e (Kategori 4 mimarisi zorunludur)
      <div class="test-cevap">DOĞRU. S2 + F2 + P2 kombinasyonu ISO 13849-1 risk grafiğindeki en yüksek risk yoludur ve doğrudan PLr = e seviyesini şart koşar. Sistem Kategori 4 çift kanal, yüksek MTTFD ve yüksek teşhis kapsamına sahip olmak zorundadır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) PLr = b
      <div class="test-cevap">YANLIŞ. PL b sadece hafif sıyrıklar için geçerlidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) PLr = c
      <div class="test-cevap">YANLIŞ. Pres gibi ölümcül risklerde PL c kabul edilemez.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Kontrol Sistemi Tasarım Hatası):</strong> Bir elektrik panosu tasarımcısı, acil duruş butonunu standart bir PLC'nin normal dijital girişine (DI) bağlamış ve PLC yazılımında "Acil duruş basıldıysa motor çıkışını (DO) sıfır yap" satırı yazmıştır. Motorun enerjisi de tek bir standart kontaktör üzerinden geçmektedir. Bu tasarım ISO 13849-1 standart denetiminden neden doğrudan SIFIR alarak kalır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kablo kesitleri yetersizdir.
      <div class="test-cevap">YANLIŞ. Sorun kablo kesiti değil mimari güvenliktir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) 1) Standart PLC emniyet onaylı değildir; işlemci kilitlenebilir veya çıkış transistörü kısa devre yapıp motoru durduramaz; 2) Tek kanal mimaridir (Kategori B/1); kontaktör kontakları ark sebebiyle birbirine yapışırsa acil duruşa basılsa dahi motor durmaz (sıfır arıza toleransı). Devre sarı Fail-Safe PLC/röle ve çift seri emniyet kontaktörü (Kat 3/4) ile kurulmalıdır.
      <div class="test-cevap">DOĞRU. Standart PLC ve tek kontaktörlü emniyet devresi otomasyonda affedilemez bir tasarım hatasıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Acil duruş butonu kırmızı olduğu için.
      <div class="test-cevap">YANLIŞ. Acil duruş butonu zaten kırmızı mantar başlı olmalıdır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (EDM - Teşhis Kapsamı):</strong> Bir emniyet devresinde motoru durdurmak için seri bağlı iki adet emniyet kontaktörü (K1 ve K2) kullanılmıştır. Ancak bu kontaktörlerin normalde kapalı (NC) ayna kontakları emniyet rölesinin geri bildirim döngüsüne (EDM / Feedback Loop) bağlanmamıştır. Bu eksiklik sistemin emniyet seviyesini nasıl etkiler?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Sistemin Teşhis Kapsamı (DC<sub>avg</sub>) %0'a düşer; kontaktörlerden birinin kontağı yapışsa bile sistem bunu fark edemez (gizli arıza). İkinci kontaktör de yapıştığında emniyet fonksiyonu tamamen çöker; bu nedenle sistem PL e veya PL d seviyesine ulaşamaz!
      <div class="test-cevap">DOĞRU. Çift kanal yapmak tek başına yetmez; kanallardaki arızayı anında algılayacak EDM geri beslemesi olmadan yüksek DCavg elde edilemez ve yüksek PL seviyelerine çıkılamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Motor devri yarıya düşer.
      <div class="test-cevap">YANLIŞ. EDM elektriksel motor hızını etkilemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Hiçbir etkisi yoktur, çift kontaktör zaten yeterlidir.
      <div class="test-cevap">YANLIŞ. Teşhis olmadan yedeklilik kör kalır.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 10.6: ROBOT VE KOBOT GÜVENLİĞİ (ISO 10218 VE ISO/TS 15066)
kitap.bolumEkle({
  id: "10-6",
  baslik: "Robot ve Kobot Güvenliği",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Endüstriyel robot hücrelerinin (<strong>ISO 10218-1 / ISO 10218-2</strong>) ve insanla yan yana çitsiz çalışan iş birlikçi robotların (Kobotlar - <strong>ISO/TS 15066</strong>); güvenli hareket denetim fonksiyonlarını (SLS, SLP, SOS), 4 kolaboratif çalışma modunu, biyomekanik kuvvet-basınç sınırlarını ve robotik hücre risk analizi metodolojilerini öğretmektir.</p>
</div>

<h2>1. Endüstriyel Robot Güvenlik Standartları (ISO 10218-1 ve ISO 10218-2)</h2>
<p>Endüstriyel robotlar yüksek hızları, yüksek ataletleri ve öngörülemeyen uzaysal hareket yörüngeleri sebebiyle ağır endüstriyel tehlike kaynağıdır:</p>
<ul>
  <li><strong>ISO 10218-1:</strong> Çıplak robot kolu ve kontrol ünitesi imalatçısının (KUKA, ABB, Fanuc vb.) uyması gereken kurallar.</li>
  <li><strong>ISO 10218-2:</strong> Robotu bir fabrikaya kuran, EOAT takan, konveyör ve çitlerle birleştiren <strong>Sistem Entegratörünün</strong> uyması gereken kurallar (Hücre Güvenliği).</li>
</ul>

<div class="muhendislik-kutu">
  <h4>Robotik Hücre Emniyet Mimarisi Gereksinimleri</h4>
  <ul>
    <li><strong>Öğretme Kumandası (Teach Pendant) Emniyeti:</strong> Robot programlanırken operatör kabin içindedir. Kumanda üzerinde <strong>3 Konumlu Onay Butonu (3-Position Enabling Device)</strong> bulunmalıdır. Operatör butonu panikle aşırı sıkarsa veya korkuyla tamamen bırakırsa robot milisaniyeler içinde güvenli duruşa (STO/SS1) geçmelidir.</li>
    <li><strong>Güvenli Hareket Denetimi (Safety-Rated Motion Monitoring):</strong> Çift enkoderli modern robotlarda fiziksel limit switch yerine yazılımsal güvenlik bölgeleri tanımlanır:
      <ul>
        <li><strong>SLS (Safely-Limited Speed):</strong> Kapı açıkken robot hızının azami 250 mm/s ile sınırlandırılması.</li>
        <li><strong>SLP (Safely-Limited Position):</strong> Robotun belirlenen sanal duvarların dışına kesinlikle çıkamaması.</li>
        <li><strong>SOS (Safe Operating Stop):</strong> Robotun motor enerjisini kesmeden tam konumda fren kilitli beklemesi.</li>
      </ul>
    </li>
  </ul>
</div>

<h2>2. Kobotlar (İş Birlikçi Robotlar) ve ISO/TS 15066 Standartları</h2>
<p>Kullanıcıların en büyük yanılgısı şudur: <em>"Kobot aldık, artık çite, kapağa veya risk analizine gerek yok!"</em> <strong>Bu ölümcül bir cehalettir.</strong> Kobotun kendisi hassas tork sensörlü olsa dahi ucuna sivri bir bıçak, sıcak bir lehim torcu veya ağır bir sac parça takıldığında insanı öldürebilir!</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Kolaboratif Çalışma Modu (ISO/TS 15066)</th>
      <th>Mekanik ve Fonksiyonel Prensibi</th>
      <th>Emniyet Donanımı</th>
      <th>Tipik Uygulama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1. Güvenlik Dereceli Monitörlü Duruş (Safety-Rated Monitored Stop - SMS)</strong></td>
      <td>İnsan çalışma alanına girdiğinde robot hareketini durdurur (SOS modunda bekler). İnsan çıktığında otomatik devam eder.</td>
      <td>Lazer alan tarayıcı (laser scanner), emniyet paspası veya ışık perdesi.</td>
      <td>Ağır yük taşıyan robot hücresine operatörün ara sıra malzeme beslemesi.</td>
    </tr>
    <tr>
      <td><strong>2. El ile Kılavuzlama (Hand Guiding)</strong></td>
      <td>Operatör robotun bileğindeki emniyetli tutamacı ve onay butonunu tutarak robotu eliyle sürükler.</td>
      <td>Bilek 6 eksenli kuvvet-tork sensörü + 3 konumlu onay butonu.</td>
      <td>Büyük araba camı montajı, ergonomik ağır parça kaldırma asistanı.</td>
    </tr>
    <tr>
      <td><strong>3. Hız ve Ayırma İzleme (Speed and Separation Monitoring - SSM)</strong></td>
      <td>İnsan ile robot arasındaki mesafe lazer tarayıcı ile sürekli ölçülür. İnsan yaklaştıkça robot kademeli yavaşlar; kritik mesafede tamamen durur.</td>
      <td>Dinamik alan değiştiren 2D/3D Emniyet Lazer Tarayıcıları.</td>
      <td>Çitsiz açık montaj hatları; insan ve robotun ortak paletleme alanları.</td>
    </tr>
    <tr>
      <td><strong>4. Güç ve Kuvvet Sınırlandırması (Power and Force Limiting - PFL)</strong></td>
      <td><strong>Gerçek Kobot Modu:</strong> Robot insana fiziksel olarak temas edebilir (çarpabilir); ancak motor akımı ve tork sensörleri çarpışma kuvvetini biyomekanik eşiklerin altında sınırlar.</td>
      <td>Eklemlerde entegre tork sensörleri, yuvarlatılmış yumuşak gövde geometrisi, çarpışma algılama.</td>
      <td>Hafif montaj, vida sıkma, test ve laboratuvar otomasyonu (UR, Fanuc CRX).</td>
    </tr>
  </tbody>
</table>

<h2>3. PFL Modunda Biyomekanik Çarpışma Limitleri</h2>
<p>ISO/TS 15066 standardı, insan vücudunu 29 farklı bölgeye ayırmış ve her bölge için acı eşiğini (ağrı ve doku hasarı sınırı) bilimsel testlerle belirlemiştir:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>İnsan Vücut Bölgesi</th>
      <th>Maksimum İzin Verilen Basınç [N/cm²]</th>
      <th>Maksimum İzin Verilen Geçici Darbe Kuvveti [N]</th>
      <th>Maksimum İzin Verilen Sıkışma (Ezilme) Kuvveti [N]</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Kafa / Boyun / Boğaz</strong></td>
      <td><strong>TEMAS KESİNLİKLE YASAKTIR!</strong></td>
      <td><strong>0 N (Sıfır Tolerans)</strong></td>
      <td><strong>0 N</strong></td>
    </tr>
    <tr>
      <td><strong>Göğüs (Toraks)</strong></td>
      <td>140 N/cm²</td>
      <td>140 N</td>
      <td>140 N</td>
    </tr>
    <tr>
      <td><strong>Ön Kol / Bilek</strong></td>
      <td>180 N/cm²</td>
      <td>160 N</td>
      <td>140 N</td>
    </tr>
    <tr>
      <td><strong>El / Parmaklar</strong></td>
      <td>180 N/cm²</td>
      <td>140 N</td>
      <td>140 N</td>
    </tr>
    <tr>
      <td><strong>Uyluk / Bacak</strong></td>
      <td>200 N/cm²</td>
      <td>250 N</td>
      <td>220 N</td>
    </tr>
  </tbody>
</table>

<div class="uyari-kutu">
  <h4>Kritik Saha Kuralı: Biyomekanik Çarpışma Doğrulaması</h4>
  <p>Bir kobotun çitsiz çalışabilmesi için üreticinin broşürü yeterli değildir! Hücre kurulduktan sonra kalibre edilmiş <strong>GTE Biyomekanik Kuvvet Ölçüm Cihazı (Force/Pressure Measurement Device)</strong> ile robotun tüm olası çarpışma noktalarına yaylı pabuçla fiziksel çarptırılması, basınç filmleriyle temas alanının ölçülmesi ve ölçülen kuvvetlerin yukarıdaki tablonun altında kaldığının resmi test raporuyla belgelenmesi yasal zorunluluktur!</p>
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
        <td><strong>ISO 10218-1 / 2</strong></td>
        <td>Endüstriyel robotların ve robotik hücrelerin tasarım ve entegrasyon güvenlik standardı (Tip C).</td>
      </tr>
      <tr>
        <td><strong>ISO/TS 15066</strong></td>
        <td>İş birlikçi robot sistemleri (kobotlar) için biyomekanik kuvvet ve basınç sınırlarını tanımlayan teknik şartname.</td>
      </tr>
      <tr>
        <td><strong>PFL (Power and Force Limiting)</strong></td>
        <td>Robotun çarpışma anında kuvvet ve gücünü acı eşiğinin altında sınırlandırarak insanla doğrudan temaslı çalışabilmesi modu.</td>
      </tr>
      <tr>
        <td><strong>SLS (Safely-Limited Speed)</strong></td>
        <td>Robot hızının emniyetli donanımla 250 mm/s veya belirlenen güvenli hızın üzerine çıkmasını engelleyen fonksiyon.</td>
      </tr>
      <tr>
        <td><strong>3-Position Enabling Switch</strong></td>
        <td>Öğretme kumandalarında sadece orta konumda robot hareketine izin veren, aşırı sıkmada veya bırakmada robotu durduran el butonu.</td>
      </tr>
      <tr>
        <td><strong>SSM (Speed & Separation Monitoring)</strong></td>
        <td>Lazer tarayıcı ile insan mesafesini ölçüp robot hızını dinamik olarak ayarlayan çitsiz çalışma modeli.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Endüstriyel robotlar standart olarak kapalı kabinlerde çalışır; kabin içi programlama 3 konumlu onay butonu ve SLS (max 250 mm/s) hız limitiyle yapılmalıdır.</li>
    <li>Kobot almak güvenlik sorumluluğunu ortadan kaldırmaz; uç işlemcisi (EOAT) ve taşınan parça kesici veya sivriyse çit yapılması zorunludur.</li>
    <li>İnsanla temaslı PFL modunda çalışabilmek için kafa ve boyuna temas kesinlikle engellenmeli, diğer bölgelerde ISO/TS 15066 biyomekanik kuvvet sınırları kalibre cihazla ölçülerek doğrulanmalıdır.</li>
    <li>Açık alan kobot uygulamalarında Hız ve Ayırma İzleme (SSM) sağlayan emniyet lazer tarayıcıları verimlilik ve güvenliği optimize eder.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Kobot Yanılgısı ve Risk Analizi):</strong> Bir fabrika, çalışanları ağır işten kurtarmak için 6 eksenli sertifikalı bir iş birlikçi robot (kobot) satın almıştır. Robotun ucuna lazer kesimden çıkmış keskin kenarlı sac parçaları taşımak için sivri çeneli mekanik bir gripper takılmıştır. Fabrika müdürü "Robotumuz kobot olduğu için güvenlik çitine gerek yok, ortaya koyup hemen çalıştıralım" demiştir. Bu karar neden kabul edilemez ve ölümcül derecede hatalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kobotlar sadece plastik parça taşıyabilir.
      <div class="test-cevap">YANLIŞ. Kobotlar metal de taşıyabilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Güvenlik değerlendirmesi sadece çıplak robota değil, tüm sisteme (Robot + Uç İşlemcisi + Taşınan Parça) yapılır. Robotun eklem tork sınırları güvenli olsa bile, ucundaki sivri çeneler ve keskin sac parçalar insana çarptığında veya boğazına saplandığında ölümcül kesme/delme tehlikesi yaratır. Bu haliyle sistem çitsiz çalıştırılamaz; ya koruyucu kafes içine alınmalı ya da uç işlemcisi yumuşak koruyucularla kaplanmalıdır.
      <div class="test-cevap">DOĞRU. ISO/TS 15066'ya göre sistem bir bütündür. Kobotun ucuna takılan kesici bir takım tüm kolaboratif güvenliği sıfırlar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kobotların elektrik faturası çok yüksek gelir.
      <div class="test-cevap">YANLIŞ. Enerji maliyeti güvenlik riski değildir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Biyomekanik Sınırlar):</strong> Çitsiz ve temaslı (PFL) çalışan bir kobot hücresinde yapılan biyomekanik ölçümde, robot kolunun insanın göğüs bölgesine sıkıştığında uyguladığı statik kuvvet 195 N olarak ölçülmüştür. ISO/TS 15066 standardı göğüs bölgesi için izin verilen maksimum kuvveti 140 N olarak belirlemiştir. Bu sistem CE denetiminden geçer mi ve ne yapılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) 195 N ile 140 N birbirine yakındır, denetimden geçer.
      <div class="test-cevap">YANLIŞ. Biyomekanik sınırlar kesin ve bağlayıcıdır, aşılması durumunda kaburga kırılması riski vardır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kesinlikle geçemez! 195 N > 140 N olduğu için sistem yasal olarak güvensizdir. Robotun güvenlik konfigürasyonundaki tork ve kuvvet eşikleri yazılımsal olarak düşürülmeli, gerekirse temas yüzey alanını artırıp basıncı düşürmek için robotun çarpan kısımlarına poliüretan darbe emici sünger pedler takılmalı ve ölçüm 140 N altına inene kadar tekrarlanmalıdır.
      <div class="test-cevap">DOĞRU. Biyomekanik limitler aşılıyorsa kuvvet düşürülmeli ve yüzey alanı büyütülerek temas basıncı dağıtılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Operatöre çelik yelek giydirilirse geçer.
      <div class="test-cevap">YANLIŞ. KKD ilk iki güvenlik adımı sağlanmadan birincil çözüm olamaz.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Robot Teach Emniyeti):</strong> 6 eksenli bir endüstriyel robotun hücresine girilerek yörünge öğretimi (teach) yapılırken operatörün elindeki el kumandasında (Teach Pendant) bulunan 3 Konumlu Onay Butonunun (3-Position Enabling Device) çalışma mantığı nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Butona her basıldığında robotun hızı 2 katına çıkar.
      <div class="test-cevap">YANLIŞ. Hızla ilgisi yoktur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Buton serbest bırakıldığında (Pozisyon 1) veya operatör panikle butonu sonuna kadar sıktığında (Pozisyon 3) robot derhal emniyetli duruşa (STO) geçer; robot hareketi YALNIZCA buton yarım basılı (Pozisyon 2 - orta konum) tutulduğu sürece mümkündür.
      <div class="test-cevap">DOĞRU. İnsan tehlike anında iki refleks gösterir: Ya şokla elindekini fırlatır/bırakır ya da panikle elini var gücüyle sıkar. 3 konumlu buton bu iki panik refleksinde de motor enerjisini anında keserek hayat kurtarır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Butona 3 kez üst üste basılınca robot kendini resetler.
      <div class="test-cevap">YANLIŞ. Bu bir emniyet donanımıdır, kısayol tuşu değildir.</div>
    </div>
  </div>
</div>
`
});
