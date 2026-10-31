/* ========================================================================
   MODÜL 7: OTOMASYON MEKANİZMALARI (m07-b.js)
   Bölüm 7.4: Fikstür Tasarımı ve 3-2-1 Prensibi
   Bölüm 7.5: Poka-Yoke (Mekanik Hata Önleme)
   Bölüm 7.6: Kam Mekanizmaları
   ======================================================================== */

// BÖLÜM 7.4: FİKSTÜR TASARIMI VE 3-2-1 PRENSİBİ
kitap.bolumEkle({
  id: "7-4",
  baslik: "Fikstür Tasarımı ve 3-2-1 Prensibi",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Otomasyon istasyonlarında iş parçalarının montaj, kaynak, işleme veya ölçüm esnasında uzayda tek ve kararlı bir konumda tutulmasını sağlayan fikstür mekanizmalarının; 6 serbestlik derecesi (DoF) kısıtlama matematiğini, 3-2-1 kinematik lokasyon kuralını, elmas pim (diamond pin) tolerans telafi geometrisini ve manivelalı kıskaçların (toggle clamp) aşırı ölü nokta (over-center) kilitleme mekaniğini öğretmektir.</p>
</div>

<h2>1. Serbestlik Derecesi (DoF) ve Kinematik Konumlama Analizi</h2>
<p>Serbest uzayda rijit bir cismin <strong>6 Serbestlik Derecesi (Degree of Freedom - DoF)</strong> ve 12 serbest hareket yönü (+/- yönler) vardır:</p>
<ul>
  <li><strong>3 Öteleme Hareketi:</strong> X ekseninde ileri-geri (±T<sub>x</sub>), Y ekseninde sağa-sola (±T<sub>y</sub>), Z ekseninde yukarı-aşağı (±T<sub>z</sub>).</li>
  <li><strong>3 Dönme Hareketi:</strong> X ekseni etrafında devrilme (±R<sub>x</sub> / Pitch), Y ekseni etrafında yalpalama (±R<sub>y</sub> / Roll), Z ekseni etrafında dönme (±R<sub>z</sub> / Yaw).</li>
</ul>

<div class="muhendislik-kutu">
  <h4>Aşırı Kısıtlama (Over-Constraint) ve Yetersiz Kısıtlama Riski</h4>
  <p>Bir fikstür tasarımında iki ölümcül hata yapılabilir:</p>
  <ul>
    <li><strong>Yetersiz Kısıtlama (Under-Constraint):</strong> 6 serbestlik derecesinden biri açıkta bırakılmıştır. İş parçası titreşim veya sıkma kuvveti altında ekseninde kayar veya döner; hatalı ürün çıkar.</li>
    <li><strong>Aşırı Kısıtlama (Over-Constraint):</strong> Aynı serbestlik derecesi birden fazla rijit yüzeyle kısıtlanmıştır (Örn: 4 ayaklı bir masanın zeminde sallanması). Bu durum parçada iç gerilmelere, montajda kasıntıya, fikstür aşınmasına ve ölçü kaçıklıklarına yol açar. İdeal bir tasarım <strong>tam kinematik (isostatic)</strong> olmalıdır.</li>
  </ul>
</div>

<h2>2. 3-2-1 Konumlama Kuralı (Kinematic Datum Locating)</h2>
<p>3-2-1 kuralı, prizmatik bir iş parçasının 6 serbestlik derecesini asgari temas noktasıyla ve aşırı kısıtlama yaratmaksızın sıfırlamanın temel evrensel metodolojisidir.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Referans Düzlemi (Datum)</th>
      <th>Destek Elemanı ve Nokta Adedi</th>
      <th>Kısıtlanan Serbestlik Dereceleri</th>
      <th>Mekanik Tasarım Kuralları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Birincil Düzlem (Primary Datum - A)</strong></td>
      <td><strong>3 Temas Noktası (Destek Pabuçları - Rest Pads)</strong></td>
      <td><strong>3 DoF Kilitlenir:</strong><br>• ±T<sub>z</sub> (Z yönünde öteleme)<br>• ±R<sub>x</sub> (X ekseninde dönme)<br>• ±R<sub>y</sub> (Y ekseninde dönme)</td>
      <td>Parçanın en geniş ve en rijit yüzeyine yerleştirilir. 3 destek noktası asla doğrusal (kollinear) olmamalı, olabildiğince geniş bir üçgen oluşturmalıdır. Parçanın ağırlık merkezi bu üçgenin içinde kalmalıdır.</td>
    </tr>
    <tr>
      <td><strong>İkincil Düzlem (Secondary Datum - B)</strong></td>
      <td><strong>2 Temas Noktası (Yan Destek Pimleri)</strong></td>
      <td><strong>2 DoF Kilitlenir:</strong><br>• ±T<sub>y</sub> (Y yönünde öteleme)<br>• ±R<sub>z</sub> (Z ekseninde dönme)</td>
      <td>Birincil düzleme 90° dik olan en uzun kenara yerleştirilir. İki temas pimi arasındaki mesafe, açısal yönlenme hatasını minimize etmek için azami açık tutulmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Üçüncül Düzlem (Tertiary Datum - C)</strong></td>
      <td><strong>1 Temas Noktası (Uç Dayama Pimi - Stop Pin)</strong></td>
      <td><strong>1 DoF Kilitlenir:</strong><br>• ±T<sub>x</sub> (X yönünde öteleme)</td>
      <td>Hem A hem B düzlemlerine dik olan üçüncü yüzeye basar. Parçanın boyuna konumunu sıfırlar.</td>
    </tr>
  </tbody>
</table>

<p>Bu 6 temas noktası tamamlandığında parçanın uzaydaki tüm pozisyonu kesin olarak sıfırlanmış olur. Geriye kalan tek şey, parçayı bu 6 referans noktasına doğru bastıracak <strong>sıkma elemanlarını (clamps)</strong> eklemektir.</p>

<h2>3. İki Pim ile Konumlama ve Elmas Pim (Diamond Pin) Matematiği</h2>
<p>Endüstriyel parçaların çoğunda işlenmiş delikler referans olarak kullanılır. Parçanın alt yüzeyindeki iki delik vasıtasıyla fikstüre oturtulması en yaygın yöntemdir. Ancak burada büyük bir mühendislik tuzağı vardır:</p>

<div class="muhendislik-kutu">
  <h4>Neden İki Silindirik Pim Kullanılamaz?</h4>
  <p>İki deliğe de tam toleranslı silindirik pimler takılırsa:</p>
  <ol>
    <li>1. pim deliğe girdiğinde X ve Y ötelemelerini (T<sub>x</sub>, T<sub>y</sub>) kilitler.</li>
    <li>2. pim deliğe girdiğinde parçanın dönmesini (R<sub>z</sub>) kilitlemesi hedeflenir. Ancak 2. silindirik pim aynı zamanda T<sub>x</sub> ve T<sub>y</sub>'yi de kilitlemeye çalışır!</li>
    <li>İki delik arasındaki merkez mesafesi (center distance) imalat toleransı (örn: ±0,05 mm) veya ısıl genleşme nedeniyle değiştiğinde, iki silindirik pim deliklere girmez; parça sıkışır (jamming) veya pimler deforme olur. Bu bir <strong>aşırı kısıtlama (over-constraint)</strong> hatasıdır.</li>
  </ol>
</div>

<h3>Elmas Pim (Diamond Pin / Relieved Pin) Çözümü</h3>
<p>Bu problemi çözmek için <strong>1 Adet Silindirik Pim (Round Pin) + 1 Adet Elmas Pim (Diamond Pin)</strong> çifti kullanılır:</p>
<ul>
  <li><strong>Birincil Pim (Silindirik):</strong> Ana referans deliğine takılır; <em>T<sub>x</sub></em> ve <em>T<sub>y</sub></em> hareketlerini sıfırlar.</li>
  <li><strong>İkincil Pim (Elmas Pim):</strong> İki tarafı frezelenerek boşaltılmıştır. Temas yüzeyleri sadece delikler arası eksene 90° dik olan yönü kilitler; yani yalnızca <em>R<sub>z</sub> (dönme)</em> serbestliğini engeller. Delikler arası eksen doğrultusunda ise geniş bir boşluk (clearance) bırakılmıştır.</li>
  <li>Böylece iki delik arasındaki eksen mesafesi tolerans dahilinde uzasa veya kısalsa dahi parça fikstüre sıfır boşlukla, kasmadan ve mükemmel tekrarlanabilirlikle oturur.</li>
</ul>

<h2>4. Sıkma Mekanizmaları ve Aşırı Ölü Nokta (Over-Center Toggle) İlkesi</h2>
<p>Sıkma kuvveti uygulayan pabuçlar (clamps), kesinlikle parçayı bükmemeli veya konumunu bozmamalıdır.</p>

<div class="uyari-kutu">
  <h4>Fikstür Sıkma Kuralları:</h4>
  <ul>
    <li><strong>Kuvvet-Destek Karşılaması:</strong> Sıkma pabuçları daima alttaki sabit destek pabuçlarının (rest pad) tam karşısına basmalıdır. Arada boşluk olan asma bölgelerden basılırsa parça elastik olarak eğilir; işlendikten veya kaynak yapıldıktan sonra serbest kalınca yamulur (spring-back deformasyonu).</li>
    <li><strong>Aşırı Ölü Nokta Prensibi (Over-Center Toggle Clamping):</strong> DIN 6370 standartlı manivelalı kıskaçlarda 3 mafsallı bir dört çubuk mekanizması bulunur. Kol kapatıldığında mafsal pimi düz çizgiyi (ölü noktayı) 1°–2° geçer ve mekanik kilitlenme sağlar. 
      <br><strong>Sonuç:</strong> Pnömatik silindir havası tamamen boşalsa veya operatör kolu bıraksa bile kıskaç asla açılmaz; muazzam bir mekanik avantaj (Mechanical Advantage > 10:1) ile parçayı kilitli tutar.</li>
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
        <td><strong>3-2-1 Prensibi</strong></td>
        <td>Rijit bir cismin 6 serbestlik derecesini birbirine dik üç düzlemde 3, 2 ve 1 temas noktasıyla kararlı şekilde sıfırlayan kinematik kural.</td>
      </tr>
      <tr>
        <td><strong>Elmas Pim (Diamond Pin)</strong></td>
        <td>İki delikli konumlama sistemlerinde eksenler arası mesafe toleransını tolere ederken sadece açısal dönmeyi kilitleyen boşaltılmış pim.</td>
      </tr>
      <tr>
        <td><strong>Aşırı Kısıtlama (Over-Constraint)</strong></td>
        <td>Bir cismin aynı serbestlik derecesinin birden çok noktadan kilitlenmesi sonucu parçada oluşan kasıntı, gerilme ve montaj zorluğu durumu.</td>
      </tr>
      <tr>
        <td><strong>Over-Center (Ölü Nokta Aşımı)</strong></td>
        <td>Manivela mafsalının merkez hattını hafifçe geçerek dış kuvvetlere karşı geri açılamaz mekanik kilit oluşturması prensibi.</td>
      </tr>
      <tr>
        <td><strong>Rest Pad (Destek Pabucu)</strong></td>
        <td>Fikstür gövdesine vidalanan, sertleştirilmiş (58–62 HRC) ve taşlanmış değiştirilebilir hassas temas yüzeyi elemanı.</td>
      </tr>
      <tr>
        <td><strong>Spring-Back (Geri Esneme)</strong></td>
        <td>Kötü desteklenmiş bir parçanın sıkma kuvveti kaldırıldığında elastik deformasyonunu geri vererek geometrisinin bozulması olayı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Fikstürlemede amaç, iş parçasının 6 serbestlik derecesini (DoF) aşırı kısıtlama yaratmaksızın sıfırlamaktır.</li>
    <li>3-2-1 kuralında; 3 nokta birincil geniş tabana (Z, Rx, Ry), 2 nokta uzun yan kenara (Y, Rz), 1 nokta üçüncü kenara (X) basar.</li>
    <li>İki delikten konumlama yapılırken kasıntıyı önlemek için mutlaka bir silindirik pim ve bir elmas (diamond) pim çifti kullanılmalıdır.</li>
    <li>Sıkma kuvveti daima doğrudan sabit destek pabuçlarının karşısına uygulanmalı ve pnömatik arızalarda parçanın fırlamaması için over-center toggle kilitli kıskaçlar seçilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Mühendislik Hatası ve Kök Neden):</strong> Bir CNC işleme fikstüründe, döküm gövdenin altındaki iki adet Ø12H7 işlenmiş delik kullanılarak parça konumlanmaktadır. İmalat mühendisi fikstür tablasına iki adet sertleştirilmiş silindirik Ø11,98 mm pim çakmıştır. Parçaların ilk partisi fikstüre kolayca otururken, döküm tedarikçisinin toleransı hafifçe değiştiğinde yeni gelen parçaların pimlere oturmadığı, operatörün parçayı oturtmak için tokmakla vurmak zorunda kaldığı ve pimlerin eğildiği görülmüştür. Bu hatanın temel kök nedeni ve doğru revizyon nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Delikler matkapla delindiği için pürüzlüdür; delikler raybalanmalıdır.
      <div class="test-cevap">YANLIŞ. Delik zaten H7 toleransındadır, sorun yüzey kalitesi değildir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) İki adet silindirik pim kullanılması aşırı kısıtlama (over-constraint) yaratmıştır; iki delik arasındaki merkez mesafesi toleransı tolere edilememektedir. Çözüm: Pimlerden biri silindirik bırakılmalı, diğeri ise eksenler arası mesafeyi serbest bırakan elmas pim (diamond pin) ile değiştirilmelidir.
      <div class="test-cevap">DOĞRU. İki silindirik pim aynı eksende iki kez X-Y kısıtı uygular. Delik merkezleri arasındaki mikro boyutsal değişimler parçanın pime takılmasına yol açar. Elmas pim sadece dönmeyi (Rz) kilitlerken eksenel kaçıklığa izin verir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Pimler çelik yerine bronzdan yapılmalıdır.
      <div class="test-cevap">YANLIŞ. Bronz pim hemen aşınır ve konum hassasiyeti yok olur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Kinematik ve 3-2-1 Analizi):</strong> Prizmatik bir alüminyum blok fikstüre yerleştirilirken, taban düzlemine (Primary Datum) 4 adet sertleştirilmiş destek pabucu (rest pad) yerleştirilmiştir. Parça yüzeyi taşlanmış olmasına rağmen kıskaçlar sıkılmadan önce parça hafifçe dokunulduğunda çaprazlama tıkırdamakta (sallanmakta) ve kıskaçlar sıkıldığında parçada 0,08 mm kavislenme ölçülmektedir. 3-2-1 kinematik kuralına göre bu tasarım nasıl düzeltilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Birincil düzlemde asla 4 rijit temas noktası olamaz (aşırı kısıtlama); sabit destek pabucu sayısı 3'e düşürülmeli, 4. nokta mutlaka gerekiyorsa yaylı veya pnömatik kilitlenen ayarlı bir destek (floating/hydraulic support pin) kullanılmalıdır.
      <div class="test-cevap">DOĞRU. Uzayda bir düzlemi 3 nokta tanımlar. 4. rijit nokta aşırı kısıtlamadır ve parçanın 3 nokta üzerinde sallanmasına sebep olur. Kıskaç sıkıldığında 4. noktaya basmak için parça elastik olarak bükülür. Doğru çözüm 3 sabit nokta + gerekirse 1 yüzer destektir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kıskaç sıkma kuvveti 2 katına çıkarılarak parça zorla 4 noktaya oturtulmalıdır.
      <div class="test-cevap">YANLIŞ. Sıkma kuvvetini artırmak parçayı daha da büker ve kalıcı plastik deformasyona yol açar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) 4 pabuç sökülüp yerine komple düz çelik plaka konulmalıdır.
      <div class="test-cevap">YANLIŞ. Komple plaka talaş birikmesine ve çok daha büyük temas kararsızlığına yol açar.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Sıkma Güvenliği):</strong> Otomatik bir robotik punta kaynak hücresinde parçayı tutan pnömatik kıskaçlarda neden sıradan bir çift etkili silindir yerine over-center manivelalı (power clamp) kıskaçlar tercih edilir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Over-center kıskaçlar daha ucuzdur.
      <div class="test-cevap">YANLIŞ. Mekanizmaları daha karmaşık ve pahalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Over-center mekanizması ölü noktayı geçerek mekanik olarak kilitlendiğinden, hat basıncı tamamen düşse veya hava hortumu kopsa bile kıskaç açılmaz; kaynak sırasında parçanın fırlamasını ve robotla çarpışmasını önler.
      <div class="test-cevap">DOĞRU. Manivelalı power clamp üniteleri ölü nokta geometrisi sayesinde mekanik kilitlenme sağlar. Bu hem emniyet hem de silindir kuvvetinin 5–10 katı sıkma kuvveti (mekanik avantaj) elde etmek için standarttır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Manivelalı kıskaçlar daha yüksek hızda açılıp kapanır.
      <div class="test-cevap">YANLIŞ. Standart silindirlere göre strok süresi benzerdir, temel fark mekanik kilit ve kuvvettir.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 7.5: POKA-YOKE (MEKANİK HATA ÖNLEME)
kitap.bolumEkle({
  id: "7-5",
  baslik: "Poka-Yoke",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Yalın üretim felsefesinin temel taşlarından biri olan Poka-Yoke (hata önleme) yaklaşımının otomasyon ve fikstür mekanizmalarındaki fiziksel uygulamalarını; parçanın hatalı, ters, eksik veya yanlış model olarak yüklenmesini sensöre dahi ihtiyaç duymadan imkansız kılan mekanik kilit, asimetri, profil engeli ve boyut eleme tasarımlarını incelemektir.</p>
</div>

<h2>1. Poka-Yoke Felsefesi: Hata Önleme vs. Hata Tespit Etme</h2>
<p>Shigeo Shingo tarafından Toyota Üretim Sistemi'nde geliştirilen Poka-Yoke (Japonca: <em>poka</em> = dikkatsizlik, <em>yoke</em> = önleme), operatörün dalgınlığına, yorgunluğuna veya tecrübesizliğine bağlı insan hatalarını sıfırlamayı amaçlar.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Poka-Yoke Seviyesi</th>
      <th>Mekanizma Tipi</th>
      <th>Çalışma Prensibi</th>
      <th>Mühendislik Güvenilirlik Derecesi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Seviye 1: Kontrol / Önleme (Control - Prevention)</strong></td>
      <td><strong>Saf Mekanik Engel ve Asimetri</strong></td>
      <td>Parça ters veya yanlış yönde konulmak istendiğinde fiziksel olarak yuvaya girmez. Prosesin başlaması imkansızdır; elektrik/yazılım hatası riski yoktur.</td>
      <td><strong>%100 Güvenli (Altın Standart).</strong> Asla delinemez.</td>
    </tr>
    <tr>
      <td><strong>Seviye 2: Kilitleme / Durdurma (Shutdown - Interlocking)</strong></td>
      <td><strong>Sensör ve PLC Mantık Kilidi</strong></td>
      <td>Parça ters konulabilir; ancak optik, endüktif veya mekanik sensör tersliği algılar ve makinenin çevrim başlatmasını (start) elektriksel olarak engeller.</td>
      <td><strong>%95–99 Güvenli.</strong> Sensör körlenmesi, arızası veya PLC bypass riski mevcuttur.</td>
    </tr>
    <tr>
      <td><strong>Seviye 3: Uyarı (Warning)</strong></td>
      <td><strong>Işıklı / Sesli Alarm (Andon, Buzzer)</strong></td>
      <td>Parça yanlış takıldığında sistem operatöre ışık yakar veya ses çalar; ancak makineyi fiziksel olarak durdurmaz.</td>
      <td><strong>Düşük Güvenilirlik.</strong> Operatörün dalgınlıkla uyarıyı görmezden gelme riski vardır; otomasyonda tek başına yetersizdir.</td>
    </tr>
  </tbody>
</table>

<h2>2. Mekanik Poka-Yoke Tasarım Stratejileri ve Örnekleri</h2>
<div class="muhendislik-kutu">
  <h4>1. Asimetri Ekleme (Asymmetry by Design - DFM)</h4>
  <p>İlk aşama ürün tasarımında başlar (Design for Manufacturing):</p>
  <ul>
    <li>Kare veya dairesel bir flanşın 4 cıvatasından birinin eksenini 3 mm kaydırmak (offset bolt pattern), parçanın yalnızca <strong>tek bir açısal pozisyonda</strong> monte edilebilmesini sağlar. 180° ters montaj fiziksel olarak imkansız hale gelir.</li>
    <li>Simetrik görünen sac parçaların tek bir köşesine açılı bir pah (chamfer) veya çentik (notch) açmak; fikstüre de bu çentiğe denk gelen sabit bir çelik blok koymak ters yüklemeyi engeller.</li>
  </ul>
</div>

<div class="muhendislik-kutu">
  <h4>2. Fikstür İçi Mekanik Engeller ve Basamaklar (Go / No-Go Bosses)</h4>
  <p>Eğer ürün tasarımı değiştirilemiyorsa, fikstür mekanizması parçanın iç veya dış girintilerini kullanmalıdır:</p>
  <ul>
    <li><strong>Kör Delik / Boy Pimi:</strong> Parçanın üzerinde sadece doğru yönde mevcut olan bir delik varsa, fikstür tabanına o deliğe denk gelen bir pim yerleştirilir. Parça ters konulduğunda pim parçanın düz yüzeyine çarpar; parça havada kalır ve kıskaçlar kapanamaz.</li>
    <li><strong>Yükseklik Bariyeri (Step Block):</strong> İki farklı model ürün aynı hatta işleniyorsa (Model A kısa, Model B uzun), uzun modelin yanlış istasyona girmesini engellemek için konveyör üzerine mekanik bir tünel/bariyer sacı yerleştirilir. Hatalı yüksek parça bariyere çarparak durur.</li>
  </ul>
</div>

<h2>3. Pnömatik Temas Algılama (Pneumatic Back-Pressure / Air Catch Sensor)</h2>
<p>Özellikle talaşlı imalat, polisaj ve pres fikstürlerinde talaş ve soğutma sıvısı optik sensörleri hızla körletir. Bu zorlu ortamlarda mekanik ve pnömatik hibrit poka-yoke olan <strong>Geri Basınç Nozulu (Air Catch Sensor)</strong> kullanılır:</p>

<div class="muhendislik-kutu">
  <h4>Çalışma İlkesi ve Akışkan Dinamiği</h4>
  <p>Fikstürün referans temas yüzeyine (rest pad ortasına) Ø1 – Ø1,5 mm çapında küçük bir hava deliği delinir ve arkasından 1 – 2 bar regüle hava üflenir:</p>
  <ul>
    <li><strong>Parça Yok veya Havada (Aralık > 0,02 mm):</strong> Hava delikten serbestçe atmosfere kaçar; hat içindeki basınç düşük kalır.</li>
    <li><strong>Parça Tam Oturdu (Aralık ≤ 0,01 mm):</strong> İş parçası nozulun ağzını kusursuz kapatır. Havanın kaçışı engellenir ve hat içi dinamik basınç derhal regülatör besleme basıncına yükselir.</li>
    <li>Hatta bağlı mikro fark basınç şalteri (örn: SMC PSE540 veya Festo SPAN) 10 mikronluk oturma hassasiyetini dijital sinyale dönüştürür. Altında talaş kalmışsa parça 0,03 mm havada kalır, basınç yükselmez ve makine asla start almaz!</li>
  </ul>
</div>

<h2>4. Yaygın Otomasyon Proseslerinde Poka-Yoke Matrisi</h2>
<table class="standart-tablo">
  <thead>
    <tr>
      <th>Proses Adımı</th>
      <th>Olası Operatör / Besleme Hatası</th>
      <th>Mekanik Poka-Yoke Çözümü</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>O-Ring / Conta Montajı</strong></td>
      <td>Contanın yuvaya hiç takılmaması veya çift conta takılması.</td>
      <td>Pnömatik kaçak/sızdırmazlık testi (hava basıp basınç düşümünü ölçme) veya contayı yuvaya geçiren mandrele derinlik kontrol mekanik limit switchi.</td>
    </tr>
    <tr>
      <td><strong>Otomatik Vidalama İstasyonu</strong></td>
      <td>Vidanın eksik sıkılması, çapraz diş kapması (cross-threading) veya gevşek kalması.</td>
      <td>Akıllı tork-açı kontrollü elektrikli tornavida (Torque & Angle Control). Hedef tork ve dönme açısı penceresi aynı anda sağlanmadan parça fikstürden serbest bırakılmaz.</td>
    </tr>
    <tr>
      <td><strong>Pres / Çakma İstasyonu</strong></td>
      <td>Burcun yuvaya eksik çakılması veya hiç konulmaması.</td>
      <td>Kuvvet-Yol İzleme (Force-Displacement Monitoring). Pres stroku boyunca lineer cetvel ve yük hücresi (load cell) grafiği referans eğrinin içinde kalmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Vibrasyonlu Çanak Besleme</strong></td>
      <td>Ters yönlü cıvataların hatta girmesi.</td>
      <td>Çanak çıkış kanalına yerleştirilen mekanik bıçak ve asimetrik profil eleği; ters gelen cıvatalar ağırlık merkezinden dolayı bariyere takılıp çanağın içine geri düşer.</td>
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
        <td><strong>Poka-Yoke</strong></td>
        <td>İnsan hatasını fiziksel veya mantıksal olarak imkansız kılan veya anında tespit edip süreci durduran hata önleme metodolojisi.</td>
      </tr>
      <tr>
        <td><strong>Asymmetric Design</strong></td>
        <td>Parçaya sadece tek bir pozisyonda montaj imkanı tanımak için bilinçli olarak eklenen geometrik asimetri (çentik, kayık delik vb.).</td>
      </tr>
      <tr>
        <td><strong>Air Catch Sensor (Hava Yastığı Algılama)</strong></td>
        <td>Fikstür referans yüzeyinden hava üfleyerek parçanın 10–20 mikron hassasiyetle tam oturup oturmadığını ölçen pnömatik geri basınç sistemi.</td>
      </tr>
      <tr>
        <td><strong>Torque-Angle Monitoring</strong></td>
        <td>Vidalamada hem uygulanan torku hem de vidanın dönme açısını denetleyerek hatalı diş kapmalarını %100 yakalayan kontrol yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Force-Displacement Window</strong></td>
        <td>Presleme işlemlerinde strok boyunca kuvvet ve yolun bir kalite penceresi (zarfı) içinde kalmasını denetleyen izleme sistemi.</td>
      </tr>
      <tr>
        <td><strong>Go / No-Go Profil Bariyeri</strong></td>
        <td>Boyutu veya formu tolerans dışı olan parçaların geçişine mekanik olarak fiziksel izin vermeyen rijit engel kanalı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>En üst düzey Poka-Yoke, operatörün istese bile hata yapmasını fiziksel olarak engelleyen mekanik çözümlerdir (Seviye 1).</li>
    <li>Ürün tasarımında yapılacak ufak asimetriler (ofset pim, köşe pahı) montaj hatalarını kökten yok eder.</li>
    <li>Fikstürlerde pim, basamak ve profilli engeller kullanılarak ters parça yüklemeleri mekanik olarak engellenmelidir.</li>
    <li>Talaşlı ve kirli ortamlarda optik sensör yerine 10 mikron hassasiyetli pnömatik geri basınç (air catch) sistemleri tercih edilmelidir.</li>
    <li>Kritik montajlarda tork-açı ve kuvvet-strok eğrileri gibi çift parametreli mekatronik kilitler kullanılmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Kavramsal Tasarım ve DFM):</strong> Dikdörtgen bir sac kapağın üzerinde 4 köşede montaj cıvata delikleri vardır. Kapağın iç yüzeyinde kritik bir conta kanalı bulunmaktadır. Operatörler montaj sırasında kapağı zaman zaman 180° ters takmakta ve conta hattı kaçırdığı için motor yağı sızdırmaktadır. Ürün tasarımcısının bu hatayı montaj hattında ilave hiçbir sensör veya fikstür maliyeti olmaksızın %100 mekanik olarak önlemesi için yapması gereken en şık tasarım değişikliği nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kapağın üzerine kalıcı kırmızı ok işareti basmak.
      <div class="test-cevap">YANLIŞ. Görsel işaretler Seviye 3 uyarıdır; operatör dalgınlıkla ters takmaya devam edebilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) 4 cıvata deliğinden birinin eksenini (ve gövdedeki karşılığını) 4 mm yana kaydırarak asimetrik delik deseni (offset bolt pattern) oluşturmak.
      <div class="test-cevap">DOĞRU. Deliklerden biri asimetrik yapıldığında kapak 180° ters çevrilirse o delik gövdedeki dişli deliğe asla denk gelmez ve cıvata takılamaz. Sıfır maliyetle %100 mekanik Seviye 1 Poka-Yoke sağlanır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Montaj operatörünün yanına bir kontrol mühendisi koymak.
      <div class="test-cevap">YANLIŞ. İnsan denetimi yalın üretimde kabul edilemez bir israftır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Sensörsüz Mekanik Eleme):</strong> Bir vibrasyonlu çanak besleyicide (bowl feeder) M6x20 mm cıvatalar beslenmektedir. Cıvataların kafa kısmı geniş, gövde kısmı incedir. Çanak kanalı boyunca cıvataların kafası üstte, gövdesi aşağıda asılı şekilde tek sıra gitmesi istenmektedir. Ters gelen (kafası altta, dişi havada olan) cıvataları hiçbir optik sensör ve hava üflemesi kullanmadan ayıklamak için çanak çıkışına nasıl bir mekanik düzenek kurulmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Ray genişliği tam cıvata gövde çapına (Ø6,2 mm) eşit iki paralel kılavuz ray açılır; kafası üstte olanlar rayda asılı kalarak kayar, kafası altta olan ters cıvataların ağırlık merkezi rayın üzerinde kalamayarak dengesini kaybeder ve çanağın haznesine geri düşer.
      <div class="test-cevap">DOĞRU. Bu klasik bir mekanik çanak poka-yokesidir. Parçanın geometrisi ve ağırlık merkezi farkı kullanılarak ters yönlü parçalar yerçekimiyle kendiliğinden elenir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Rayın üzerine güçlü bir mıknatıs konulmalıdır.
      <div class="test-cevap">YANLIŞ. Mıknatıs tüm cıvataları çeker, yön ayrımı yapamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Çanak çıkışına yüksek çözünürlüklü yapay zeka kamera sistemi konulmalıdır.
      <div class="test-cevap">YANLIŞ. Bu basit mekanik ayıklama için aşırı pahalı, gereksiz ve yavaş bir çözümdür.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Saha Arızası ve Algılama Güvenilirliği):</strong> Bir robotlu CNC yükleme istasyonunda, alüminyum parçaların fikstüre tam oturup oturmadığı lazer optik mesafe sensörüyle kontrol edilmektedir. Ancak yoğun bor yağı buharı ve etrafa sıçrayan alüminyum talaşları nedeniyle optik sensör haftada birkaç kez yanıltıcı sinyal vermekte ve talaşın üzerine oturan parça yamuk işlenmektedir. Bu zorlu talaşlı imalat ortamında 15 mikronluk oturma doğruluğunu %100 güvenle denetlemek için hangi teknolojiye geçilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Lazer sensörün önüne silecek motoru takmak.
      <div class="test-cevap">YANLIŞ. Silecek talaşlı ve yağlı ortamda hızla bozulur, endüstriyel değildir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Fikstür destek pabuçlarının merkezine Ø1 mm hava delikleri delinerek pnömatik geri basınç (air catch / pneumatic back-pressure) sensörü sistemine geçilmelidir.
      <div class="test-cevap">DOĞRU. Pnömatik hava nozulu sürekli dışarı hava üflediği için talaşın deliğe girmesini engeller (kendini temizler). Parça tam oturduğunda hava hattı tıkanır ve basınç artar. Talaş kalırsa hava kaçar, basınç yükselmez. Soğutma sıvısından ve ışıktan kesinlikle etkilenmez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Operatörün her parçayı kumpasla elle kontrol etmesi.
      <div class="test-cevap">YANLIŞ. Çevrim süresini uzatır ve insan hatasına açıktır.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 7.6: KAM MEKANİZMALARI
kitap.bolumEkle({
  id: "7-6",
  baslik: "Kam Mekanizmaları",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Yüksek hızlı seri üretim makinelerinde (ambalaj, dolum, ilaç, pres besleme) karmaşık, senkron ve tekrarlanabilir hareketlerin mekanik olarak üretilmesini sağlayan kam (cam) mekanizmalarının; kinematik hareket eğrilerini (sabit hız, basit harmonik, sikloidal, modifiye sinüs), basınç açısı (pressure angle) kısıtlamalarını ve Hertz temas gerilmesi hesaplama esaslarını öğretmektir.</p>
</div>

<h2>1. Kam ve Takipçi (Follower) Sistemlerinin Temel Mekaniği</h2>
<p>Bir kam mekanizması; dönme hareketini doğrudan doğrusal veya açısal salınım hareketine dönüştüren yüksek kinematik eşleşmeli bir mekanizmadır. Elektronik servo sistemlerin aksine kamlar; <strong>yazılımsal çökme riski olmayan, mikrosaniyelik kusursuz mekanik senkronizasyon</strong> ve dakikada 500–2000 çevrime varan aşırı yüksek hızlar sunar.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Kam / Takipçi Tipi</th>
      <th>Kinematik Özellikleri</th>
      <th>Avantajları</th>
      <th>Mühendislik Kısıtları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Radyal Disk Kam + Makaralı Takipçi (Roller Follower)</strong></td>
      <td>Takipçi ucunda iğneli rulmanlı bir makara bulunur; kam profilinin dış çevresinde yuvarlanır.</td>
      <td>Yuvarlanma sürtünmesi (μ ≈ 0,005); minimum aşınma; yüksek yük taşıma kapasitesi; en yaygın tip.</td>
      <td>Makara yarıçapı kamın iç konkav profil yarıçapından küçük olmalıdır; aksi halde profil kesişmesi (undercutting) oluşur.</td>
    </tr>
    <tr>
      <td><strong>Silindirik / Varil Kam (Cylindrical / Barrel Cam)</strong></td>
      <td>Dönen bir silindirin dış yüzeyine CNC ile açılmış helisel kanal; makara kanalın içinde hareket eder.</td>
      <td>Doğrusal hareketi doğrudan üretir; iki yönlü pozitif sürüş (pozitif form kilit); kompakt eksenel yapı.</td>
      <td>Kanal işleme maliyeti yüksektir; kanal genişliği makara toleransına çok hassastır.</td>
    </tr>
    <tr>
      <td><strong>Konjugat (Çift) Kamlar (Conjugate Cams)</strong></td>
      <td>Aynı mil üzerine monte edilmiş iki paralel kam; iki makaralı çatal takipçi ile boşluksuz sürüş.</td>
      <td>Geri dönüş yayı gerektirmez (desmodromik sürüş); aşırı yüksek hızlarda yay rezonansı/kopması riskini sıfırlar.</td>
      <td>Çift profil imalatı ve hassas montaj ayarı gerektirir; maliyeti yüksektir.</td>
    </tr>
    <tr>
      <td><strong>Düz Yüzeyli Takipçi (Flat-Faced Follower)</strong></td>
      <td>Kam, takipçinin düz taşlanmış sertleştirilmiş yüzeyine basar (Örn: İçten yanmalı motor supapları).</td>
      <td>Basınç açısı kaynaklı yan kasıntı kuvveti oluşmaz; kompakt yapı.</td>
      <td>Kayma sürtünmesi yüksektir; hidrodinamik yağlama ve yüksek sertlik (≥60 HRC) zorunludur.</td>
    </tr>
  </tbody>
</table>

<h2>2. Kinematik Hareket Eğrileri ve Sarsıntı (Jerk) Analizi</h2>
<p>Kam profilinin geometrisi, takipçinin yer değiştirme (<em>s</em>), hız (<em>v</em>), ivme (<em>a</em>) ve sarsıntı (<em>jerk - j = da/dt</em>) profillerini doğrudan belirler. Yüksek hızlı otomasyonda kam profili seçimi hayati önem taşır:</p>

<div class="muhendislik-kutu">
  <h4>1. Sabit Hız Eğrisi (Linear Profile) - KESİNLİKLE YASAK!</h4>
  <p>Hareket başlangıcında ve sonunda hız aniden sıfırdan <em>v</em> değerine sıçrar. Matematiksel olarak ivme sonsuza gider (<em>a → ∞</em>). Bu durum takipçide balyoz etkisi yaratan sonsuz dinamik şok kuvvetine (<em>F = m · a</em>), aşırı gürültüye ve mekanizmanın saatler içinde parçalanmasına yol açar. Otomasyonda asla kullanılmaz.</p>
</div>

<div class="muhendislik-kutu">
  <h4>2. Basit Harmonik Hareket (Simple Harmonic Motion - SHM)</h4>
  <p>Kosinüs fonksiyonuna dayalıdır. Hız eğrisi yumuşaktır; ancak hareketin başlangıç ve bitiş noktalarında ivmede ani süreksizlik (sıçrama) vardır. Sonsuz sarsıntı (jerk) üretir. Orta hızlar için uygundur; yüksek hızlarda makinede titreşim rezonansı yaratır.</p>
</div>

<div class="muhendislik-kutu">
  <h4>3. Sikloidal Hareket Eğrisi (Cycloidal Motion) - YÜKSEK HIZIN ALTIN STANDARDI</h4>
  <p>Sikloid eğrisine dayanan hareket fonksiyonunda; <strong>yer değiştirme, hız, ivme ve sarsıntı (jerk) profillerinin tümü süreklidir</strong>. Başlangıçta ve bitişte ivme sıfırdan başlar ve sıfıra iner; hiçbir darbe veya sonsuz şok kuvveti üretmez:</p>
  <div class="formul-kutu">
    s(θ) = h · [ (θ / β) − (1 / (2π)) · sin(2π · θ / β) ]
  </div>
  <div class="formul-kutu">
    v(θ) = (h · ω / β) · [ 1 − cos(2π · θ / β) ]
  </div>
  <div class="formul-kutu">
    a(θ) = (2π · h · ω² / β²) · sin(2π · θ / β)
  </div>
  <p>Burada <em>h</em> toplam strok, <em>β</em> kamın yükseliş açısı [rad], <em>ω</em> kam mili açısal hızı [rad/s] ve <em>θ</em> anlık kam açısıdır. Yüksek hızlı ambalaj ve montaj makinelerinde sikloidal veya modifiye sinüs eğrileri zorunludur.</p>
</div>

<h2>3. Basınç Açısı (Pressure Angle - α) ve Kasıntı (Jamming) Kriteri</h2>
<p>Basınç açısı <em>α</em>; kam profiline temas noktasındaki normal kuvvet vektörü ile takipçinin doğrusal hareket ekseni arasındaki açıdır.</p>

<div class="uyari-kutu">
  <h4>Kritik Basınç Açısı Limiti: α<sub>max</sub> ≤ 30°</h4>
  <p>Normal temas kuvveti <em>F<sub>n</sub></em> iki bileşene ayrılır:</p>
  <ul>
    <li><strong>Yararlı İtme Kuvveti:</strong> F<sub>itme</sub> = F<sub>n</sub> · cos(α) (Takipçiyi yukarı süren kuvvet).</li>
    <li><strong>Zararlı Yan Kuvvet (Side Thrust):</strong> F<sub>yan</sub> = F<sub>n</sub> · sin(α) (Takipçi kılavuz burcuna dik basan kuvvet).</li>
  </ul>
  <p>Eğer basınç açısı <strong>30°'yi aşarsa</strong>, yan kuvvet kılavuz burçta muazzam sürtünme oluşturur. <em>tan(α) > 1 / (2·μ<sub>burç</sub>)</em> olduğunda sistem kendi kendini kilitler (self-locking/jamming); takipçi kılavuz içinde sıkışır, kam mili eğilir veya motor kilitlenir!</p>
  <p><strong>Çözüm:</strong> Basınç açısını düşürmek için kamın taban dairesi yarıçapı (<em>R<sub>b</sub> - Base Circle Radius</em>) büyütülmelidir:</p>
  <div class="formul-kutu">
    tan(α) = (v / ω) / (R<sub>b</sub> + s) = (ds/dθ) / (R<sub>b</sub> + s)
  </div>
  <p>Buradan görüldüğü üzere <em>R<sub>b</sub></em> büyüdükçe basınç açısı <em>α</em> küçülür.</p>
</div>

<h2>4. Temas Gerilmesi (Hertzian Contact Stress) ve Malzeme Seçimi</h2>
<p>Kam profili ile takipçi makarası arasında teorik olarak bir çizgi teması (line contact) vardır. Yüksek hız ve kuvvet altında bu temas yüzeyinde muazzam Hertz basıncı oluşur:</p>
<div class="formul-kutu">
  σ<sub>Hertz</sub> = √ [ (F<sub>n</sub> / L) · (1 / (π · (k<sub>kam</sub> + k<sub>makara</sub>))) · (1/R<sub>kam</sub> + 1/R<sub>makara</sub>) ] ≤ σ<sub>em</sub>
</div>
<p>Bu basınç yüzey altında kayma gerilmelerine ve yorulma dökülmelerine (pitting / spalling) yol açar. Bu nedenle:</p>
<ul>
  <li><strong>Kam Malzemesi:</strong> 16MnCr5 veya 8620 semente çeliği seçilmeli; sementasyonla yüzey sertliği <strong>58 – 62 HRC</strong> (derinlik 0,8 – 1,2 mm) yapılmalı ve profil CNC kam taşlama tezgahında Ra ≤ 0,4 μm kalitesinde taşlanmalıdır.</li>
  <li><strong>Yağlama:</strong> Kam mekanizmaları asla kuru çalıştırılmamalıdır; yüksek viskoziteli EP katkılı dişli yağı banyosunda veya sürekli otomatik gresleme altında çalışmalıdır.</li>
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
        <td><strong>Sikloidal Hareket</strong></td>
        <td>İvme ve sarsıntının (jerk) başlangıç ve bitişte sıfır olduğu, yüksek hızlı makinelerde darbesiz çalışan ideal kam profili.</td>
      </tr>
      <tr>
        <td><strong>Basınç Açısı (Pressure Angle - α)</strong></td>
        <td>Kam temas normali ile takipçi hareket ekseni arasındaki açı; 30° üzerine çıkarsa takipçide mekanik kasıntı ve kilitlenme yaratır.</td>
      </tr>
      <tr>
        <td><strong>Base Circle (Taban Dairesi - R<sub>b</sub>)</strong></td>
        <td>Kam profilinin merkezine en yakın olan teorik referans dairesi; çapı büyütüldükçe basınç açısı düşer ve hareket yumuşar.</td>
      </tr>
      <tr>
        <td><strong>Jerk (Sarsıntı)</strong></td>
        <td>İvmenin zamana göre türevi (da/dt); ivmedeki ani değişimlerin oluşturduğu mekanik şok ve titreşim şiddeti.</td>
      </tr>
      <tr>
        <td><strong>Konjugat Kam (Desmodromik)</strong></td>
        <td>Biri açma diğeri kapama yapan çift kamlı yapı; geri dönüş yayı kullanmaksızın boşluksuz ve yay kopma risksiz yüksek hız sağlar.</td>
      </tr>
      <tr>
        <td><strong>Undercutting (Profil Kesişmesi)</strong></td>
        <td>Takipçi makara yarıçapının kamın iç bükey eğrilik yarıçapından büyük olması durumunda profilin bozulması ve hareket kaybı hatası.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Kamlar, yüksek hızlı seri üretimde elektronik servolara kıyasla mikrosaniyelik kusursuz senkronizasyon ve muazzam güvenilirlik sunar.</li>
    <li>Kinematik tasarımda sabit hız profili sonsuz şok ürettiği için asla kullanılmaz; yüksek hızlarda sarsıntısız (sıfır jerk) sikloidal hareket eğrileri tercih edilir.</li>
    <li>Takipçi kılavuz burcunda kasıntı ve kilitlenmeyi önlemek için maksimum basınç açısı daima α ≤ 30° sınırında tutulmalıdır. Gerekirse taban dairesi yarıçapı büyütülmelidir.</li>
    <li>Kam profillerinde pitting aşınmasını önlemek için 58–62 HRC semente çelikleri kullanılmalı, profil taşlanmalı ve yağ banyosu sağlanmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Kinematik ve Şok Analizi):</strong> Yüksek hızlı bir blister ambalaj makinesinde dakikada 300 paket kapatılmaktadır. Tasarımcı, itici mekanizma için doğrusal (sabit hızlı) bir kam profili tasarlamıştır. Makine çalıştırıldıktan 2 saat sonra kam takipçi rulmanları kırılmış, kam profilinde derin ezikler oluşmuş ve aşırı gürültü çıkmıştır. Bu hasarın fiziksel sebebi nedir ve profil hangi eğriyle revize edilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Yağlama yetersizdir; daha kalın gres basılmalıdır.
      <div class="test-cevap">YANLIŞ. Arıza yağlama kaynaklı değil, kinematik kaynaklıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Sabit hız profilinde strok başlangıcı ve sonunda ivme teorik olarak sonsuza (a → ∞) fırlamakta, sonsuz sarsıntı (jerk) ve devasa dinamik çarpma şok kuvveti (F = m · a) üretmektedir. Profil, ivmesi sıfırdan yumuşakça yükselip sıfıra inen sikloidal hareket (cycloidal motion) eğrisi ile yeniden işlenmelidir.
      <div class="test-cevap">DOĞRU. Sabit hız eğrisinde hız aniden değiştiği için ivme tepe noktaları sonsuz darbe üretir ve mekanizmayı çekiç gibi döverek dağıtır. Yüksek hızlarda sadece türevi sürekli olan sikloidal veya modifiye sinüs eğrileri kullanılabilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kam mili devri dakikada 10 devre düşürülmelidir.
      <div class="test-cevap">YANLIŞ. Bu ambalaj makinesinin kapasitesini yok eder; sorun kam eğrisinin matematiğindedir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Basınç Açısı ve Kasıntı):</strong> Bir doğrusal makaralı kam mekanizmasında kamın taban dairesi yarıçapı R<sub>b</sub> = 30 mm olarak tasarlanmıştır. Sistem çalışırken kamın dikleştiği bölgede makaralı takipçi kolu kılavuz burcun içinde kilitlenmekte (jamming) ve tahrik motoru aşırı akım çekerek durmaktadır. Yapılan kinematik hesapta maksimum basınç açısının α<sub>max</sub> = 44° olduğu görülmüştür. Bu kasıntıyı çözmek için makine gövdesinde yer varsa yapılması gereken en doğru mühendislik müdahalesi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kamın taban dairesi yarıçapı R<sub>b</sub> büyütülerek (örn: R<sub>b</sub> = 65–75 mm yapılarak) maksimum basınç açısı α<sub>max</sub> ≤ 30° seviyesine düşürülmelidir.
      <div class="test-cevap">DOĞRU. tan(α) = (ds/dθ) / (R<sub>b</sub> + s) formülüne göre taban dairesi yarıçapı büyüdükçe basınç açısı küçülür. α ≤ 30° olduğunda yan kuvvet azalır ve kılavuz burçta sürtünme kilitlenmesi tamamen ortadan kalkar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kılavuz burcun boşluğu 0,5 mm'ye çıkarılmalıdır.
      <div class="test-cevap">YANLIŞ. Boşluğu artırmak kılavuz kolun daha da fazla çaprazlamasına dönmesine ve daha şiddetli kasıntıya sebep olur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Takipçi kolu yay kuvveti 5 katına çıkarılmalıdır.
      <div class="test-cevap">YANLIŞ. Yay kuvvetini artırmak normal kuvveti ve yan sürtünmeyi daha da büyüterek kilitlenmeyi şiddetlendirir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Mekanizma Seçimi):</strong> Dakikada 1200 devir yapan ultra yüksek hızlı bir ilaç kapsül dolum makinesinde kam takipçisini kam profiline basılı tutan klasik mekanik helisel geri dönüş yayları sürekli yorulma kırılmasına uğramakta ve makineyi durdurmaktadır. Yay kırılması riskini sonsuza dek ortadan kaldırmak için hangi kam sistemi mimarisine geçilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Yaylar paslanmaz çelikten sarılmalıdır.
      <div class="test-cevap">YANLIŞ. 1200 d/dak hızda yüksek frekanslı yay dalgalanması (spring surge/resonance) paslanmaz yayı da çok hızlı kırar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Geri dönüş yayına ihtiyaç duymayan, çift kam ve çift makaralı çatal takipçiyle hem itme hem çekme hareketini pozitif form kilitle sağlayan Konjugat Kam (Desmodromik kam) mekanizmasına geçilmelidir.
      <div class="test-cevap">DOĞRU. Konjugat kamlarda hareket tamamen mekanik çift kamla yönetilir; yay bulunmaz. Bu sayede yay rezonansı, yay yorulması veya yüksek hızda makaranın kamdan sıçrayıp havada kalması (follower float) riski tamamen yok edilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kam mekanizması sökülüp yerine standart pnömatik silindir takılmalıdır.
      <div class="test-cevap">YANLIŞ. Pnömatik sistemler dakikada 1200 çevrim hızına asla ulaşamaz.</div>
    </div>
  </div>
</div>
`
});
