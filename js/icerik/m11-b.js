/* ========================================================================
   MODÜL 11: CATIA VE TASARIM METODOLOJİSİ (m11-b.js)
   Bölüm 11.5: DMU Kinematics ve Çakışma Analizi
   Bölüm 11.6: Teknik Resim (Drafting) Verimliliği
   Bölüm 11.7: BOM, Revizyon ve PDM/PLM
   ======================================================================== */

// BÖLÜM 11.5: DMU KINEMATICS VE ÇAKIŞMA ANALİZİ
kitap.bolumEkle({
  id: "11-5",
  baslik: "DMU Kinematics ve Çakışma Analizi",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Tasarlanan otomasyon mekanizmalarının ve robotik hücrelerin imalata gitmeden önce sanal ortamda (Digital Mock-Up - DMU) tüm hareket döngülerini, kinematik serbestliklerini ve dinamik strok boylarını doğrulamayı; DMU Kinematics mafsal tanımlamalarını (Revolute, Prismatic, Screw), dinamik çakışma (Clash) ve boşluk (Clearance) analizlerini ve süpürme hacmi (Swept Volume) çıkarımını öğretmektir.</p>
</div>

<h2>1. Dijital Sahte Model (DMU) ve Sanal Devreye Alma Önemi</h2>
<p>Klasik imalatta mekanizmalar monte edilir, ilk hareket verildiğinde silindirin şaseye çarptığı veya robotun kablo kanalını kopardığı görülür. Parçalar sökülür, spiralle kesilir, frezede traşlanır; hem haftalarca zaman kaybedilir hem de makine estetiği ve rijitliği bozulur. <strong>DMU (Digital Mock-Up)</strong>, bu montaj ve hareket hatalarını sıfır fiziksel maliyetle CAD ortamında çözmeyi sağlar.</p>

<h2>2. DMU Kinematics Mafsal (Joint) Türleri ve Tahrik Komutları</h2>
<p>Bir mekanizmayı simüle etmek için montaj kısıtları (Constraints) kinematik mafsallara dönüştürülür:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Mafsal Tipi (Joint)</th>
      <th>Kısıtlanan Serbestlik Derecesi</th>
      <th>Kalan Hareket (DoF)</th>
      <th>Tahrik Komutu (Command) ve Uygulama</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Revolute Joint (Döner Mafsal)</strong></td>
      <td>5 DoF kilitli</td>
      <td><strong>1 Dönme (R<sub>z</sub>)</strong></td>
      <td><em>Angle-Driven:</em> Döner tablalar, menteşeli kapılar, robot mafsalları, kollar (Örn: 0° ila 180° dönüş).</td>
    </tr>
    <tr>
      <td><strong>Prismatic Joint (Prizmatik / Kayar)</strong></td>
      <td>5 DoF kilitli</td>
      <td><strong>1 Öteleme (T<sub>x</sub>)</strong></td>
      <td><em>Length-Driven:</em> Pnömatik silindir milleri, lineer kızaklar, Pick & Place Z eksenleri (Örn: Strok: 0 ila 250 mm).</td>
    </tr>
    <tr>
      <td><strong>Cylindrical Joint (Silindirik)</strong></td>
      <td>4 DoF kilitli</td>
      <td><strong>1 Dönme + 1 Öteleme</strong></td>
      <td>Akslar, serbest kayan pimler, kılavuz milleri.</td>
    </tr>
    <tr>
      <td><strong>Screw Joint (Vidalı Mil / Helisel)</strong></td>
      <td>5 DoF kilitli (Dönme ve öteleme birbirine hatve ile bağlıdır)</td>
      <td><strong>1 Birleşik DoF</strong></td>
      <td><em>Pitch-Driven:</em> Vidalı mil somun sistemleri (Örn: Hatve = 10 mm; mil 360° döndüğünde somun 10 mm ilerler).</td>
    </tr>
    <tr>
      <td><strong>Point-Curve / Roll-Curve</strong></td>
      <td>Eğri üzerinde temas</td>
      <td>Kam ve takipçi mekanizmaları</td>
      <td>Kam kanalları, profil izleyen silindirik takipçiler.</td>
    </tr>
  </tbody>
</table>

<div class="muhendislik-kutu">
  <h4>Mekanizma Serbestlik Derecesi Kuralı (Degree of Freedom)</h4>
  <p>Bir mekanizmanın CATIA'da simüle edilebilmesi için <strong>"The mechanism can be simulated"</strong> onay penceresinin gelmesi şarttır. Bunun matematiksel koşulu:</p>
  <div class="formul-kutu">
    DoF (Serbestlik Derecesi) with Commands = 0
  </div>
  <p>Eğer 2 serbestliği olan bir mekanizmaya (örn: 2 eksenli bir kartezyen manipülatör) sadece 1 adet komut atanmışsa, <em>DoF with commands = 1</em> kalır ve yazılım mekanizmayı çalıştıramaz; 2. eksene de bağımsız bir "Length-Driven" komutu verilmelidir.</p>
</div>

<h2>3. Çakışma ve Güvenlik Boşluğu Analizi (DMU Clash & Clearance)</h2>
<p>DMU Space Analysis modülü, parçalar arasında üç boyutlu temas denetimi yapar:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Temas Durumu</th>
      <th>Fiziksel Tanımı</th>
      <th>Kabul Edilebilirlik ve Mühendislik Kararı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Clash (Girişim / Çakışma)</strong></td>
      <td>İki katı parçanın hacimleri uzayda birbiri içine geçmiştir (Negatif mesafe).</td>
      <td><strong>KESİNLİKLE KABUL EDİLEMEZ!</strong> Fiziksel montaj yapılamaz; cıvata şaseye çarpar, parçalar birbirini ezer. Derhal revize edilmelidir.</td>
    </tr>
    <tr>
      <td><strong>Contact (Yüzey Teması)</strong></td>
      <td>İki yüzey birbirine sıfır boşlukla (mesafe = 0,00 mm) teğet basmaktadır.</td>
      <td><strong>Normal Durum:</strong> Cıvata pulunun flanşa basması, yatak oturma faturası gibi tasarım gereği temas eden yüzeylerdir.</td>
    </tr>
    <tr>
      <td><strong>Clearance Violation (Boşluk İhlali)</strong></td>
      <td>Parçalar birbirine çarpmamıştır ancak aralarındaki mesafe belirlenen güvenlik sınırından (örn: d < 10 mm) daha azdır.</td>
      <td><strong>Kritik Dinamik Risk:</strong> Statik olarak çarpmayan bir kol, yüksek hızda esnediğinde veya titreşimde şaseye sürter. Emniyet mesafesi korunmalıdır.</td>
    </tr>
  </tbody>
</table>

<div class="uyari-kutu">
  <h4>Dinamik Çakışma (Clash During Simulation)</h4>
  <p>Statik konumda hiçbir parçanın çakışmaması makinenin güvenli olduğunu kanıtlamaz! Mekanizma DMU Kinematics ile <strong>tüm çalışma stroku boyunca simüle edilirken</strong> arka planda eşzamanlı çakışma analizi çalıştırılmalıdır (<em>Clash during simulation</em>). Robot kolu geri dönerken arkasındaki güvenlik çitine veya pnömatik şartlandırıcıya sadece strokun belirli bir açısında çarpabilir!</p>
</div>

<h2>4. Süpürme Hacmi (Swept Volume) Çıkarımı</h2>
<p>Hareketli bir mekanizmanın (Pick & Place kolu, açılır kapak veya 6 eksenli robot) çalışma döngüsü boyunca uzayda taradığı toplam 3D hacme <strong>Süpürme Hacmi (Swept Volume)</strong> denir.</p>
<ul>
  <li>DMU Optimizer aracıyla robotun tüm yörüngesi boyunca süpürdüğü hacim tek bir katı kütle (.CATPart) olarak kaydedilir.</li>
  <li>Bu hacim ana fabrika yerleşim montajına çağrılır. Koruyucu tel çitler ve elektrik panoları bu süpürme hacminin en az <strong>100–150 mm dışına</strong> yerleştirilir. Böylece robotun asla hiçbir engele çarpmayacağı garanti altına alınır.</li>
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
        <td><strong>DMU (Digital Mock-Up)</strong></td>
        <td>Fiziksel prototipe gerek kalmadan montaj, hareket, ergonomi ve çakışmaları sanal ortamda doğrulama teknolojisi.</td>
      </tr>
      <tr>
        <td><strong>Clash Detection (Çakışma Analizi)</strong></td>
        <td>Montajdaki katı modellerin birbiri içine geometrik olarak girip girmediğini mikron mertebesinde denetleyen araç.</td>
      </tr>
      <tr>
        <td><strong>Swept Volume (Süpürme Hacmi)</strong></td>
        <td>Hareketli bir parçanın tüm yörüngesi boyunca uzayda işgal ettiği toplam dinamik hacim zarfı.</td>
      </tr>
      <tr>
        <td><strong>Prismatic Joint</strong></td>
        <td>Sadece tek bir eksende doğrusal kayma hareketine izin veren 1 serbestlik dereceli kinematik mafsal.</td>
      </tr>
      <tr>
        <td><strong>Revolute Joint</strong></td>
        <td>Sadece tek bir eksen etrafında dönme hareketine izin veren 1 serbestlik dereceli mafsal.</td>
      </tr>
      <tr>
        <td><strong>Clearance (Güvenlik Boşluğu)</strong></td>
        <td>Titreşim, ısıl genleşme ve esnemeleri karşılamak için hareketli parçalar arasında bırakılması zorunlu minimum mesafe.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>İmalat öncesi sanal montaj ve hareket simülasyonu (DMU) sahadaki pahalı revizyon ve parça kesme facialarını sıfırlar.</li>
    <li>Kinematik simülasyon için kısıtlar doğru mafsallara dönüştürülmeli ve komutlar atanarak <em>DoF with command = 0</em> sağlanmalıdır.</li>
    <li>Sadece duruş anında değil, tüm hareket döngüsü boyunca Dinamik Çakışma (Clash during simulation) analizi yapılmalıdır.</li>
    <li>Hareketli mekanizmaların süpürme hacmi (Swept Volume) çıkarılarak emniyet çitleri ve panolar bu hacmin güvenli mesafesinde konumlandırılmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Kinematik Çözümleme Hatası):</strong> Bir tasarımcı iki eksenli bir Pick & Place kartezyen manipülatörünün Z ekseni silindiri için Prismatic Joint tanımlamış ve "Length-driven" komutu vermiştir. X ekseni triger modülü için de Prismatic Joint tanımlamış ancak komut atamayı unutmuştur. Simülasyon penceresini açtığında CATIA "The mechanism cannot be simulated" uyarısı vermektedir. Mekanizmanın çalıştırılabilmesi için ne eksiktir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Mekanizma 2 serbestlik derecesine sahiptir ancak sadece 1 komut girilmiştir (DoF with commands = 1 kalmıştır). X ekseni mafsalına da "Length-driven" komutu atanarak DoF with commands = 0 yapılmalıdır.
      <div class="test-cevap">DOĞRU. Kinematik çözücünün sistemi tekil bir konuma oturtabilmesi için tüm bağımsız serbestlik derecelerinin bir komutla sürülmesi şarttır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Bilgisayarın RAM'i yetersizdir.
      <div class="test-cevap">YANLIŞ. Yazılımsal serbestlik derecesi kuralıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Prismatic Joint yerine Revolute Joint seçilmelidir.
      <div class="test-cevap">YANLIŞ. Kartezyen eksenler dönmez, ötelenir (prizmatiktir).</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Saha Arızası ve Dinamik Çakışma):</strong> Bir fikstür tasarımında statik konumda yapılan çakışma analizinde hiçbir parçada girişim (clash) görülmemiştir. Makine imal edilip hatta bağlandığında pnömatik mengene açılırken arkasındaki sensör soketini çarparak kırmıştır. Tasarım aşamasında bu arızayı %100 yakalayacak olan simülasyon adımı hangisidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Teknik resimde sensörün boyunu cetvelle ölçmek.
      <div class="test-cevap">YANLIŞ. 2D teknik resim hareketli çakışmayı yakalayamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Mekanizmayı DMU Kinematics ile 0°'den 90° açılma açısına kadar simüle ederken "Check Clash During Simulation" modunu aktif etmek.
      <div class="test-cevap">DOĞRU. Mengene kolu sadece hareket anında (örneğin 65° açıda) sensör soketinin koordinatından geçmiştir. Dinamik çakışma analizi bu geçiş anındaki girişimi anında kırmızı renkle dondurur ve mühendisi uyarır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Parçaları plastik malzemeden üretmek.
      <div class="test-cevap">YANLIŞ. Plastik de olsa çarpar ve kırılır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Fabrika Yerleşimi ve Süpürme Hacmi):</strong> 6 eksenli bir paletleme robotunun etrafına güvenlik çiti yerleştirilecektir. Robotun erişim yarıçapı 2000 mm'dir. Çitlerin robotun en uç hareketiyle dahi çarpışmayacağını en kesin ve profesyonel yöntemle garanti etmek için DMU'da ne yapılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çitleri göz kararı yerleştirmek.
      <div class="test-cevap">YANLIŞ. Güvenlik standartlarına aykırıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Robotun en uç palet alma ve bırakma yörüngesi boyunca kapladığı 3D dinamik hacim "Swept Volume" aracıyla çıkarılmalı ve koruyucu çitler bu süpürme hacminin en dış sınırından ISO 13857 güvenlik mesafesi kadar uzağa kurulmalıdır.
      <div class="test-cevap">DOĞRU. Swept Volume, robotun çalışma uzayını tek bir katı kütle olarak dondurur. Bu hacme göre çit çekmek sıfır çarpışma riskini garanti eder.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Robotun motor torklarını kısmak.
      <div class="test-cevap">YANLIŞ. Torku kısmak robotun çarpışmasını engellemez.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 11.6: TEKNİK RESİM (DRAFTING) VERİMLİLİĞİ
kitap.bolumEkle({
  id: "11-6",
  baslik: "Teknik Resim (Drafting) Verimliliği",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>3D CAD modellerinin atölyede hatasız, hızlı ve ekonomik üretilmesini sağlayan 2D Teknik Resim (Drafting) disiplinini; görünüş ve kesit çıkarma kurallarını, datum temelli işleme ölçülendirmesini, kapalı ölçü zinciri (Over-dimensioning) hatalarını önlemeyi, standart antet yönetimini ve Model Tabanlı Tanımlama (MBD / 3D FT&A) ilkelerini öğretmektir.</p>
</div>

<h2>1. 3D Modelden 2D Çizime: Görünüş ve Kesit Seçim Kuralları</h2>
<p>Teknik resim bir sanat eseri değil, imalatçı ile tasarımcı arasındaki hukuki ve teknik sözleşmedir. Gereksiz onlarca görünüş çizmek zaman israfıdır; eksik görünüş ise parçanın hatalı işlenmesine yol açar.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Görünüş / Kesit Tipi</th>
      <th>Doğru Kullanım Senaryosu</th>
      <th>Kritik Çizim Kuralları ve Standartlar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Ön Görünüş (Front View - Ana Görünüş)</strong></td>
      <td>Parçanın en karakteristik formunu, en fazla detayını ve işleme/montaj konumunu gösteren temel görünüş.</td>
      <td>Parça imalatta tezgaha nasıl bağlanacaksa ön görünüş o pozisyonda seçilmelidir.</td>
    </tr>
    <tr>
      <td><strong>Projeksiyon Görünüşleri (Üst, Yan)</strong></td>
      <td>Sadece ön görünüşte gösterilemeyen derinlik ve genişlik detayları için eklenir.</td>
      <td><strong>Avrupa Projeksiyon Metodu (1. Açı / First Angle):</strong> ISO standardıdır (Sol görünüş sağa, üst görünüş alta çizilir). Antette mutlaka koni sembolü bulunmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Tam ve Kademeli Kesit (Section Cut / View)</strong></td>
      <td>Parçanın içindeki kör delikler, rulman yuvaları, o-ring kanalları ve cıvata havşaları.</td>
      <td>Dolu kısımlar malzeme standardına uygun taranır (çelikte 45° ince çizgi). <strong>Miller, cıvatalar, pimler ve federler boyuna kesitte ASLA taranmaz ve kesilmez!</strong></td>
    </tr>
    <tr>
      <td><strong>Lokal / Kısmi Kesit (Broken-Out Section)</strong></td>
      <td>Sadece tek bir kör deliğin veya kama kanalının derinliğini göstermek için parçanın küçük bir köşesini koparma kesiti.</td>
      <td>Tüm parçayı kesit almaktan kurtarır; çizim alanından tasarruf sağlar.</td>
    </tr>
    <tr>
      <td><strong>İzometrik Görünüş (Isometric View)</strong></td>
      <td>Resmin sağ üst köşesine ölçekli konulan 3D perspektif katı görünüm.</td>
      <td><strong>Üzerine asla ölçü konulmaz!</strong> Sadece CNC operatörünün ve kaynakçının parçanın nihai formunu zihninde canlandırması içindir.</td>
    </tr>
  </tbody>
</table>

<h2>2. İmalat Odaklı Ölçülendirme ve Datum Referanslama</h2>
<p>Ölçüler parçanın üzerine rastgele dağıtılamaz; CNC freze operatörünün parçayı sıfırlayacağı <strong>Referans Yüzeylere (Datum A, B, C)</strong> göre dizilmelidir.</p>

<div class="muhendislik-kutu">
  <h4>Doğru Ölçülendirme İlkeleri:</h4>
  <ul>
    <li><strong>Taban Referanslı (Baseline / Datum) Ölçülendirme:</strong> Tüm delik eksenleri parçanın taşlanmış sol ve alt referans kenarlarından (sıfır noktasından) ölçülendirilir. Böylece imalat toleransları birbirinin üzerine eklenerek birikmez (tolerans yığılması sıfırlanır).</li>
    <li><strong>Zincirleme (Chain) Ölçülendirme Tehlikesi:</strong> Delikler ardışık olarak birbirinden ölçülendirilirse (A'dan B'ye, B'den C'ye), her adımdaki ±0,1 mm'lik hata birikir ve son delik 1 mm kaçık çıkar!</li>
    <li><strong>Kapalı Ölçü Zinciri Hatası (Over-Dimensioning):</strong> Bir parçanın toplam boyu verilmişse ve aradaki tüm kademelerin ölçüleri tek tek yazılmışsa sistem aşırı tanımlıdır. İmalatçı hangi ölçüyü tutturacağını bilemez. Kademelerden biri serbest bırakılmalı veya toplam ölçü parantez içine alınarak <strong>referans ölçü (Ref.)</strong> yapılmalıdır.</li>
  </ul>
</div>

<h2>3. Standart Antet (Title Block) ve Genel Tolerans Yönetimi</h2>
<p>Her bir çizgiye tek tek tolerans yazmak resmi okunmaz hale getirir. Bu nedenle antette genel standartlar deklare edilir:</p>
<ul>
  <li><strong>Genel Talaşlı İmalat Toleransı:</strong> <em>ISO 2768-mK</em> (m: orta boyutsal tolerans sınıfı; K: geometrik doğrusallık ve diklik sınıfı). Parçada özel tolerans belirtilmeyen tüm serbest ölçüler otomatik olarak bu tabloya tabidir.</li>
  <li><strong>Genel Kaynaklı İmalat Toleransı:</strong> <em>ISO 13920-BF</em>.</li>
  <li><strong>Genel Yüzey Pürüzlülüğü:</strong> Antetin üst köşesinde genel sembol: <em>√ Ra 3,2 ( √ Ra 0,8 )</em>. Anlamı: "Parçanın genel tüm yüzeyleri Ra 3,2 μm olacaktır; parantez içindeki özel işaretli rulman ve keçe yuvaları ise taşlanarak Ra 0,8 μm yapılacaktır."</li>
</ul>

<h2>4. Model Tabanlı Tanımlama (MBD / 3D FT&A) Geleceği</h2>
<p>Modern havacılık ve otomotivde 2D kağıt teknik resimler terk edilmektedir. <strong>CATIA 3D Functional Tolerancing & Annotation (FT&A)</strong> modülü ile tüm toleranslar, yüzey kaliteleri, datumlar ve kaynak sembolleri doğrudan 3D modelin üzerine 3D metin olarak işlenir.</p>
<ul>
  <li>CNC 5 eksen işleme tezgahları ve CMM 3D koordinat ölçüm cihazları doğrudan bu 3D modeli okur; operatörün kağıttan ölçü okuma ve klavyeden girme hatası tamamen ortadan kalkar.</li>
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
        <td><strong>Baseline Dimensioning</strong></td>
        <td>Tüm boyutsal ölçülerin ortak birincil referans kenarından başlatıldığı, tolerans yığılmasını önleyen ölçülendirme metodu.</td>
      </tr>
      <tr>
        <td><strong>ISO 2768-mK</strong></td>
        <td>Talaşlı imalatta resimde özel tolerans verilmeyen ölçülerin ve geometrilerin uymak zorunda olduğu genel norm.</td>
      </tr>
      <tr>
        <td><strong>Over-Dimensioning (Aşırı Ölçülendirme)</strong></td>
        <td>Kapalı bir ölçü zinciri oluşturarak imalatçıda tolerans çelişkisi yaratan hatalı çizim alışkanlığı.</td>
      </tr>
      <tr>
        <td><strong>MBD (Model-Based Definition)</strong></td>
        <td>2D teknik resim olmaksızın tüm imalat ve kalite kontrol toleranslarının doğrudan 3D CAD modeline işlenmesi disiplini.</td>
      </tr>
      <tr>
        <td><strong>1. Açı Projeksiyon (First Angle)</strong></td>
        <td>Avrupa ve Türkiye standardı olan, parçanın sol görüntüsünü sağa düşüren geometrik izdüşüm yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Broken-Out Section</strong></td>
        <td>Parçanın genel formunu bozmadan sadece lokal bir iç detayı (kör delik vb.) göstermek için yapılan yerel koparma kesiti.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Teknik resim imalatçının dilidir; ön görünüş parçanın tezgaha bağlanma pozisyonuna göre seçilmelidir.</li>
    <li>Boyuna kesitlerde miller, cıvatalar, pimler ve federler asla taranmaz ve kesilmez.</li>
    <li>Tolerans yığılmasını önlemek için zincirleme ölçü yerine ortak sıfır noktalı (Baseline) ölçülendirme yapılmalıdır.</li>
    <li>Kapalı ölçü zincirlerinden kaçınılmalı; gereksiz ölçüler referans (Ref.) olarak paranteze alınmalıdır.</li>
    <li>Genel toleranslar için antette ISO 2768-mK ve genel yüzey pürüzlülüğü sembolü mutlaka yer almalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Teknik Resim Kural Hatası):</strong> Bir montaj kesit resmi çizen genç mühendis, dişli kutusunun tam ortasından geçen kesit düzleminde transmisyon milini, üzerindeki silindirik düz dişliyi, montaj cıvatalarını ve gövde dökümünü aynı 45° çizgilerle baştan sona taramıştır. Baştekniker bu resmi imalata göndermeyi neden reddetmiştir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çizgilerin rengi siyah olduğu için.
      <div class="test-cevap">YANLIŞ. Teknik resim çizgileri zaten siyahtır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) ISO standartları teknik resim kurallarına göre: 1) Boyuna kesilen miller, cıvatalar, somunlar ve pimler dolu gövdeli oldukları için ASLA taranmaz ve kesilmez; 2) Birbirine temas eden farklı parçaların tarama yönleri (45° ve 135°) ve çizgi sıklıkları birbirinden ayırt edilebilmesi için farklı yapılmalıdır.
      <div class="test-cevap">DOĞRU. Miller ve cıvatalar boyuna kesitte taranmaz. Ayrıca tüm montaj aynı yönde taranırsa parçalar birbirine karışır ve tek bir blok gibi algılanır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kesit resmi çizmek yasaktır.
      <div class="test-cevap">YANLIŞ. Kesit resmi iç detaylar için zorunludur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Ölçülendirme ve Tolerans Yığılması):</strong> Bir lineer modül şasesi üzerinde 50 mm aralıklarla 10 adet M6 montaj deliği delinecektir. Mühendis delikleri zincirleme olarak (her deliği bir önceki delikten 50±0,1 mm) ölçülendirmiştir. İmalat genel tezgah toleransında yapıldığında 10. deliğin şase başındaki referansa göre konumu ne kadar sapabilir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Sapma her delikte ±0,1 mm birikerek (10 × 0,1) toplamda ±1,0 mm'ye kadar fırlayabilir ve lineer ray deliklerine asla oturmaz! Ölçülendirme sol baştaki tek bir sıfır referansından Baseline (0, 50, 100, 150... mm) olarak yapılmalıydı.
      <div class="test-cevap">DOĞRU. Zincirleme ölçülendirme tolerans yığılmasına (tolerance stack-up) sebep olur. Ortak referanstan ölçü vermek sapmayı tek bir delik toleransıyla (±0,1 mm) sınırlar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Sapma sıfır olur çünkü tüm ölçüler 50 mm'dir.
      <div class="test-cevap">YANLIŞ. İmalatta her ölçünün bir toleransı vardır ve zincirleme ölçüde bu toleranslar toplanır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Sapma sadece 0,01 mm olur.
      <div class="test-cevap">YANLIŞ. İmalat gerçeğiyle bağdaşmaz.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Kapalı Ölçü Zinciri):</strong> Bir kademeli milin teknik resminde: 1. kademe boyu 30 mm, 2. kademe boyu 50 mm, 3. kademe boyu 40 mm ve milin toplam boyu 120 mm olarak verilmiş ve tüm ölçülere ±0,2 mm tolerans atanmıştır. Torna operatörü bu resmi aldığında neden itiraz eder?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Bu bir Kapalı Ölçü Zinciri (Over-dimensioning) hatasıdır. 30 + 50 + 40 = 120 mm matematiksel olarak kilitlidir. Eğer operatör ilk üç kademeyi üst toleransta işlerse (30,2 + 50,2 + 40,2 = 120,6 mm), toplam boy 120±0,2 sınırını aşar ve parça ıskarta olur. Toplam ölçü ya parantez içine (120 Ref.) alınmalı ya da kademelerden birinin boyu serbest bırakılmalıdır.
      <div class="test-cevap">DOĞRU. Kapalı ölçü zinciri imalatçıyı imkansız bir tolerans ikilemine sokar. Bir ölçü daima tolerans çıkış kapısı olarak serbest bırakılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Torna tezgahı 120 mm mili işleyemez.
      <div class="test-cevap">YANLIŞ. 120 mm standart küçük bir mildir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kademe çapları verilmediği için.
      <div class="test-cevap">YANLIŞ. İtiraz boyutsal zincir çelişkisinedir.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 11.7: BOM, REVİZYON VE PDM/PLM
kitap.bolumEkle({
  id: "11-7",
  baslik: "BOM, Revizyon ve PDM/PLM",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Endüstriyel ürün geliştirme sürecinde tasarlanan makinelerin üretim, satın alma ve montaj aşamalarına hatasız aktarılmasını sağlayan Malzeme Listesi (BOM) hiyerarşilerini (EBOM, MBOM), Mühendislik Değişiklik Yönetimi (ECM / ECO) protokollerini, parça numaralandırma kurallarını ve PDM/PLM veri tabanı (Check-In/Out, LifeCycle) disiplinini öğretmektir.</p>
</div>

<h2>1. Malzeme Listesi Hiyerarşisi: EBOM vs. MBOM</h2>
<p>Bir makinenin Malzeme Listesi (Bill of Materials - BOM) tek bir liste değildir; tasarımcının bakış açısı ile fabrikanın montaj sırası birbirinden farklıdır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>BOM Tipi</th>
      <th>Açılımı ve Tanımı</th>
      <th>Kullanıcı ve Fonksiyonu</th>
      <th>İçerik Farkı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>EBOM</strong></td>
      <td><strong>Engineering Bill of Materials</strong> (Mühendislik BOM)</td>
      <td>Ar-Ge ve Tasarım Ekibi. Parçaları fonksiyonel gruplara göre listeler (Örn: Modül 1 - Tahrik Grubu, Modül 2 - Tutucu Grubu).</td>
      <td>Sadece CAD modelindeki tasarlanmış katı parçaları ve satın alma bileşenlerini içerir.</td>
    </tr>
    <tr>
      <td><strong>MBOM</strong></td>
      <td><strong>Manufacturing Bill of Materials</strong> (İmalat/Montaj BOM)</td>
      <td>Üretim Planlama, Satın Alma, Montaj Atölyesi. Parçaları <strong>fiziksel montaj kronolojisine</strong> göre listeler.</td>
      <td><strong>CAD modelinde çizilmeyen sarf malzemeleri de içerir:</strong> Kaynak telleri, gres yağı, Loctite cıvata yapıştırıcıları, kablo bağları, etiketler, ambalaj sandığı vb.</td>
    </tr>
    <tr>
      <td><strong>SBOM</strong></td>
      <td><strong>Service Bill of Materials</strong> (Yedek Parça BOM)</td>
      <td>Müşteri Hizmetleri ve Teknik Servis.</td>
      <td>Makinenin ömrü boyunca aşınacak ve periyodik değişecek yedek parçaları (kayışlar, contalar, filtreler, rulmanlar) listeler.</td>
    </tr>
  </tbody>
</table>

<h2>2. Mühendislik Değişiklik Yönetimi (ECM: ECR, ECO ve ECN)</h2>
<p>Seri imalatta veya proje tesliminde bir parçada yapılan kontrolsüz değişiklikler devasa mali kayıplara yol açar. Değişiklikler resmi 3 adımlı protokolle yönetilir:</p>
<ol>
  <li><strong>ECR (Engineering Change Request - Değişiklik Talebi):</strong> Üretimden, montajdan veya müşteriden gelen talep (Örn: <em>"Fikstür kolu parçayı yüklerken operatörün eline çarpıyor, 40 mm kısaltılsın"</em>).</li>
  <li><strong>Etki ve Maliyet Analizi:</strong> Ar-Ge, satın alma ve kalite ekibi toplanır: Stokta kaç adet eski parça var? Hurdaya mı çıkacak, revize mi edilecek? Kalıp değişecek mi?</li>
  <li><strong>ECO (Engineering Change Order - Değişiklik Emri):</strong> Onaylanan değişiklik mühendise atanır; CAD modeli ve teknik resim revize edilir.</li>
  <li><strong>ECN (Engineering Change Notice - Değişiklik Bildirimi):</strong> Tüm fabrikaya, satın almaya ve tedarikçilere yeni teknik resmin yürürlüğe girdiği ve eski resmin imha edildiği resmi olarak duyurulur.</li>
</ol>

<div class="uyari-kutu">
  <h4>Altın Kural: Form, Fit veya Function (FFF) Değişirse Parça Numarası DEĞİŞMELİDİR!</h4>
  <p>Tasarımcıların yaptığı en büyük hata, geometrisi tamamen değişen bir parçaya sadece revizyon harfi atlatmaktır (Örn: Parça A rev.01 → rev.02). <strong>Eğer bir parçanın:</strong></p>
  <ul>
    <li><strong>Formu</strong> (Dış geometrisi, malzemesi),</li>
    <li><strong>Fit'i</strong> (Montaj delik aralıkları, oturma toleransı),</li>
    <li><strong>Function'ı</strong> (Taşıma kapasitesi, işlevi)</li>
  </ul>
  <p>değişmişse ve <strong>eski parça ile yeni parça birbirinin yerine doğrudan takılamıyorsa (geriye dönük uyumsuzsa)</strong>, o parçaya ASLA sadece revizyon verilemez; <strong>YENİ BİR PARÇA NUMARASI (Stok Kodu) VERİLMESİ ZORUNLUDUR!</strong> Aksi halde depodaki eski parçalar yeni montajlara takılır ve hat çöker.</p>
</div>

<h2>3. PDM / PLM Sistemleri (ENOVIA, Teamcenter, Windchill)</h2>
<p>Modern fabrikalarda CAD dosyaları Windows klasörlerinde (C:\Masaüstü\Son_Hali_v2.CATPart) tutulamaz! Bu durum dosyaların üzerine yazılmasına ve kaybolmasına yol açar. Veriler merkezi <strong>PDM (Product Data Management)</strong> kasasında (Vault) saklanır.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>PDM / PLM Mekanizması</th>
      <th>Çalışma Mantığı</th>
      <th>Mühendislik Faydası</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Check-Out (Dosya Kilitleme)</strong></td>
      <td>Tasarımcı bir parçayı düzenlemek için kasadan çeker. Dosya sunucuda diğer kullanıcılara <em>salt-okunur (read-only)</em> olarak kilitlenir.</td>
      <td>İki mühendisin aynı anda aynı parçayı değiştirip birbirinin emeğini ezmesini (overwrite) %100 engeller.</td>
    </tr>
    <tr>
      <td><strong>Check-In (Kasaya Teslim)</strong></td>
      <td>Tasarımcı değişikliği bitirdiğinde dosyayı açıklama notuyla kasaya geri yükler.</td>
      <td>Tarihsel versiyon kopyası (v1, v2, v3) arşivlenir; 6 ay önceki eski versiyona tek tıkla geri dönülebilir.</td>
    </tr>
    <tr>
      <td><strong>LifeCycle (Yaşam Döngüsü Durumları)</strong></td>
      <td>Parça aşamaları kilitlidir: <em>In Work (Çalışılıyor) → Frozen (İncelemede) → Released (Onaylandı/Üretime Açık) → Obsolete (Kullanımdan Kalktı)</em>.</td>
      <td>İmalat ve Satın Alma sadece "Released" durumundaki onaylı resimleri görebilir; henüz tasarımı bitmemiş parçaların yanlışlıkla üretilmesi imkansızdır.</td>
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
        <td><strong>EBOM</strong></td>
        <td>Mühendislik ve tasarım disiplinine göre modellenen fonksiyonel parça listesi.</td>
      </tr>
      <tr>
        <td><strong>MBOM</strong></td>
        <td>İmalat ve montaj sırasına göre yapılandırılmış, sarf malzemeleri (yağ, yapıştırıcı) içeren üretim malzeme listesi.</td>
      </tr>
      <tr>
        <td><strong>ECO (Engineering Change Order)</strong></td>
        <td>Tasarım değişikliklerinin teknik ve maliyet onayından sonra resmi olarak yürürlüğe sokulduğu mühendislik emri.</td>
      </tr>
      <tr>
        <td><strong>FFF Kuralı (Form, Fit, Function)</strong></td>
        <td>Geriye dönük montaj uyumu bozulan parçalara revizyon yerine yeni parça numarası verilmesini zorunlu kılan evrensel kural.</td>
      </tr>
      <tr>
        <td><strong>Check-In / Check-Out</strong></td>
        <td>PDM veritabanında dosyaların aynı anda düzenlenmesini önleyen kullanıcı yetkilendirme ve kilitleme protokolü.</td>
      </tr>
      <tr>
        <td><strong>Released (Onaylı Durum)</strong></td>
        <td>Tasarımı tamamlanmış, tüm kontrollerden geçmiş ve imalat/satın alma için dondurulmuş nihai parça statüsü.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Mühendislik BOM'u (EBOM) CAD modelini yansıtırken, İmalat BOM'u (MBOM) montaj sırasını ve yağ/yapıştırıcı gibi sarf malzemeleri de içerir.</li>
    <li>Mühendislik değişiklikleri gayriresmi değil; ECR → ECO → ECN protokolü ile etki analizleri yapılarak yürütülmelidir.</li>
    <li>Form, Fit veya Function (FFF) değiştiğinde eski ve yeni parça birbirinin yerine takılamıyorsa kesinlikle yeni bir parça numarası verilmelidir.</li>
    <li>Veri kayıplarını ve yetkisiz değişiklikleri önlemek için CAD verileri PDM/PLM kasasında Check-In/Out ve LifeCycle disipliniyle yönetilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (FFF Kuralı ve Parça Numaralandırma):</strong> Bir montaj fikstüründe kullanılan "P-1040" kodlu alüminyum dayama bloğunun montaj cıvata delik eksenleri 50 mm'den 65 mm'ye çıkarılmıştır. Yeni blok eski bloğun yerine fiziksel olarak takılamamaktadır. Tasarımcı parça numarasını değiştirmemiş, sadece teknik resme "Revizyon B" yazıp sisteme yüklemiştir. 2 ay sonra fabrikada ne felaket yaşanır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Depodaki 50 adet eski blok (50 mm delikli) ile yeni üretilen bloklar aynı P-1040 kutusuna karışır; montaj operatörü eski bloğu yeni şaseye takmaya çalıştığında delikler tutmaz, montaj durur ve binlerce liralık parça hurdaya çıkar! FFF (Fit) bozulduğu için parçaya "P-1040 Rev.B" değil, tamamen yeni bir numara (örn: "P-1085") verilmeliydi.
      <div class="test-cevap">DOĞRU. Geriye dönük değiştirilebilirlik (interchangeability) yoksa aynı numara kullanılamaz. Bu kural otomotiv ve havacılık kalite yönetiminin temelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Hiçbir sorun olmaz, operatör delikleri matkapla genişletir.
      <div class="test-cevap">YANLIŞ. Toleranslı montaj parçalarında yerinde delik delmek kalite standartlarına aykırıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Revizyon harfi değiştiği için ERP sistemi eski parçaları otomatik olarak çöpe atar.
      <div class="test-cevap">YANLIŞ. ERP sistemleri parça numarasına bakar; numara aynıysa eski stok tükenene kadar montaja sevk edilir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (BOM Tipleri ve Satın Alma Eksikliği):</strong> Bir otomasyon makinesinin mekanik montajı için tüm parçalar atölyeye gelmiştir. Ancak montaj ustası cıvataları sıkmak için Loctite 243 vida sabitleyici kimyasal, rulmanlar için gres yağı ve kabloları toplamak için spiral kılıf bulamamış ve montaj 3 gün beklemiştir. Satın almacı "Bana verilen malzeme listesinde (BOM) bunların hiçbiri yazmıyordu" demiştir. Bu kurumsal aksaklığın sebebi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Satın almacı işini savsaklamıştır.
      <div class="test-cevap">YANLIŞ. Satın almacı kendisine verilen resmi listeye göre sipariş açmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Satın almaya sadece 3D CAD modelini yansıtan EBOM (Mühendislik BOM) verilmiştir; oysa üretim ve satın alma için sarf malzemeleri (yağ, yapıştırıcı, etiket, spiral) de içeren eksiksiz bir MBOM (Manufacturing BOM) hazırlanmalı ve satın alma süreci bu MBOM üzerinden yürütülmeliydi.
      <div class="test-cevap">DOĞRU. CAD modelinde sıvı yapıştırıcı veya gres çizilmez; bu nedenle EBOM'da görünmezler. Üretim planlama bu sarf malzemelerini MBOM'a eklemekle yükümlüdür.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cıvatalara yapıştırıcı sürmek gereksizdir.
      <div class="test-cevap">YANLIŞ. Titreşimli ortamlarda kimyasal kilit standarttır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (PLM Yaşam Döngüsü Güvenliği):</strong> Tasarımcı henüz hesapları bitmemiş, üzerinde çalıştığı bir robot flanş plakasını PDM kasasında "In Work (Çalışılıyor)" statüsünde kaydetmiştir. Satın alma birimi sistemden resmi çekip fason imalatçıya göndermiş ve 100 adet hatalı plaka üretilmiştir. Bu hatayı engelleyen PLM kuralı nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Satın alma ve İmalat departmanlarının sistem yetkileri kısıtlanmalı; ERP ve satın alma birimleri sadece teknik ve kalite onayından geçmiş "Released (Onaylandı)" statüsündeki teknik resimleri görebilmeli ve indirebilmelidir.
      <div class="test-cevap">DOĞRU. PDM/PLM yaşam döngüsü kuralları gereği "In Work" veya "Frozen" durumundaki taslak dosyalar üretime sızamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tasarımcılar çizim yaparken bilgisayarlarının fişini çekmelidir.
      <div class="test-cevap">YANLIŞ. Anlamsız bir uygulamadır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Fason imalatçı aranıp çizimi üretmemesi söylenmelidir.
      <div class="test-cevap">YANLIŞ. Süreç sistemsel olarak engellenmelidir, telefonla süreç yönetilemez.</div>
    </div>
  </div>
</div>
`
});
