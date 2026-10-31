// MODÜL 6 — Tahrik: Motorlar, Pnömatik, Vakum (Bölüm 6.9 – 6.12: Valfler, Vakum, Hidrolik, Elektrikli vs. Pnömatik Seçim Rehberi)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m6', '6-9', `
<p class="giris">Pnömatik sistemlerde mantıksal kararları ve yönlendirmeleri yön kontrol valfleri icra eder. Bir silindirin ne zaman ileri çıkacağı, ne zaman geri döneceği, elektrik kesildiğinde pozisyonunu nasıl koruyacağı valfin iç mimarisine bağlıdır. Günümüz modern otomasyonunda tek tek kablolama dönemi kapanmış; endüstriyel haberleşme protokolleriyle (PROFINET, EtherCAT, IO-Link) donatılmış <strong>Valf Adaları (Valve Terminals)</strong> standart hale gelmiştir.</p>

<h2>Yön Kontrol Valflerinin Kodlanması (Port / Konum Mantığı)</h2>
<p>Pnömatik valfler <code>[Bağlantı Port Sayısı] / [Çalışma Konum Sayısı]</code> şeklinde gösterilir:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Valf Tipi</th>
    <th>Portlar ve Anlamı</th>
    <th>Konum Sayısı</th>
    <th>Çalıştırdığı Aktüatör</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>3/2 Valf</strong></td>
    <td>1: Basınç girişi, 2: Silindir çıkışı, 3: Egzoz tahliyesi</td>
    <td>2 Konum (Açık / Kapalı)</td>
    <td>Tek Etkili Silindirler (Yay geri getirmeli)</td>
    <td>Yaylı kilitleme pimleri, vakum üfleme nozulları, klape açma.</td>
  </tr>
  <tr>
    <td><strong>5/2 Valf</strong></td>
    <td>1: Basınç girişi, 2 & 4: Silindir çıkışları, 3 & 5: Egzozlar</td>
    <td>2 Konum (İleri / Geri)</td>
    <td><strong>Çift Etkili Standart Silindirler</strong></td>
    <td><strong>Endüstriyel otomasyonun %85'i:</strong> Pistonu ya tam ileri ya tam geri süren tüm silindirler.</td>
  </tr>
  <tr>
    <td><strong>5/3 Valf</strong></td>
    <td>1: Basınç girişi, 2 & 4: Çıkışlar, 3 & 5: Egzozlar</td>
    <td><strong>3 Konum (İleri / Nötr Orta / Geri)</strong></td>
    <td>Çift Etkili Silindirler (Ara duruşlu)</td>
    <td>Hareketi ortada durdurma, acil duruşta serbest bırakma, güvenlik fonksiyonları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Monostable (Tek Bobin) vs. Bistable (Çift Bobin Hafızalı)</h2>
<div class="iki-sutun">
  <div>
    <h4>Monostable (Tek Bobin - Yay Geri Dönüşlü)</h4>
    <p>Bobine 24V DC enerji verildiğinde valf konumu değişir. Enerji kesildiği an mekanik yay valfi derhal <strong>başlangıç (güvenli) konumuna</strong> geri iter.</p>
    <ul>
      <li><strong>Güvenlik Avantajı:</strong> Acil stopa basıldığında veya elektrik kesildiğinde silindir başlangıç noktasına kendiliğinden çekilir.</li>
      <li><strong>Eksisi:</strong> Silindiri ileride tutmak için bobin sürekli enerjili kalmalıdır (enerji tüketir ve ısınır).</li>
    </ul>
  </div>
  <div>
    <h4>Bistable (Çift Bobin - Hafızalı / Darbeli)</h4>
    <p>İki tarafında bağımsız solenoid bobin vardır. Bobin A'ya 50 ms'lik tek bir pals verilirse valf 1 konumuna geçer ve <strong>enerji kesilse bile orada kilitli kalır!</strong></p>
    <ul>
      <li><strong>Enerji Tasarrufu:</strong> Bobin sürekli enerjili kalmaz; sadece yön değişiminde anlık pals çeker.</li>
      <li><strong>Güvenlik Riski:</strong> Elektrik kesilse dahi silindir olduğu konumda kalır; yanlış tasarlanırsa tehlike yaratabilir.</li>
    </ul>
  </div>
</div>

<h2>5/3 Valflerin 3 Kritik Orta Konum Fonksiyonu</h2>
<p>Her iki bobinin de enerjisi kesildiğinde merkez yayların valfi getirdiği orta konumun iç geometrisi hayati önem taşır:</p>
<ol>
  <li><strong>5/3 Kapalı Merkez (Closed Center):</strong> Tüm portlar (1, 2, 4) kapatılır. Silindirin her iki odasındaki hava hapsedilir. Pistonu ara bir noktada durdurmak için kullanılır. (Hava sıkışabilir gaz olduğu için piston dış kuvvet altında yaylanır!).</li>
  <li><strong>5/3 Egzoza Açık Merkez (Exhaust Center):</strong> 2 ve 4 no'lu çıkış portları egzoza (3 ve 5) bağlanır; silindirin içindeki hava tamamen boşaltılır. Operatör acil stop bastığında silindiri <strong>eliyle rahatça itip çekebilsin</strong> diye güvenlik kapılarında kullanılır.</li>
  <li><strong>5/3 Basınca Açık Merkez (Pressure Center):</strong> Silindirin her iki odasına da aynı anda 6 bar hava basılır. Çift etkili silindirin ileri itme alanı çekme alanından büyük olduğu için piston yavaşça ve kararlı bir şekilde ileri sürülür (diferansiyel denge).</li>
</ol>

<h2>Modern Valf Adaları ve Endüstriyel Haberleşme (Fieldbus / IO-Link)</h2>
<div class="kutu ipucu"><span class="kb">Kablolama Kaosuna Son: Valf Adaları</span>
Geleneksel panolarda 16 adet valf için her bobine 2 tel çekilerek toplam 32 damarlı kalın bir kablo demeti makineye taşınırdı. Kopan bir teli aramak saatler sürerdi.<br>
Modern sistemlerde <strong>Valf Adası (Valve Island - Festo CPX/MPA, SMC SY)</strong> kullanılır. Tüm valfler tek bir alüminyum manifold üzerine dizilir; basınçlı hava tek bir ana borudan girer ve elektrik panosuna <strong>tek bir endüstriyel Ethernet kablosu (PROFINET, EtherCAT veya IO-Link)</strong> gider. PLC tek bir haberleşme paketinde tüm valfleri milisaniyede açıp kapatır, bobin kopukluklarını ve hava basınç alarmlarını dijital olarak teşhis eder.</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>5/2 Yön Kontrol Valfi</strong></td>
    <td>5 bağlantı portuna ve 2 anahtarlama konumuna sahip olan, çift etkili pnömatik silindirleri ileri ve geri sürmek için kullanılan standart valftir.</td>
  </tr>
  <tr>
    <td><strong>Monostable Valf</strong></td>
    <td>Solenoid bobin enerjisi kesildiği anda dahili mekanik yay kuvvetiyle tek bir kararlı referans konumuna kendiliğinden geri dönen valftir.</td>
  </tr>
  <tr>
    <td><strong>Bistable Valf (Hafızalı)</strong></td>
    <td>İki zıt solenoid bobinle sürülen, bobin enerjisi kesilse dahi son aldığı mekanik konumu kalıcı olarak koruyan çift bobinli valftir.</td>
  </tr>
  <tr>
    <td><strong>5/3 Kapalı Merkez</strong></td>
    <td>Orta konumda tüm silindir portlarını kilitleyerek pistonu basınçlı hava yastığı arasında ara duruşta tutmaya yarayan 3 konumlu valf mimarisidir.</td>
  </tr>
  <tr>
    <td><strong>5/3 Egzoza Açık Merkez</strong></td>
    <td>Orta konumda silindirin her iki odasını atmosfere tahliye ederek mekanizmanın harici kuvvetle serbestçe hareket ettirilmesini sağlayan emniyet valfidir.</td>
  </tr>
  <tr>
    <td><strong>Valf Adası (Valve Terminal)</strong></td>
    <td>Çok sayıda pnömatik valfin ortak basınç ve egzoz kanallarıyla tek bir blokta toplandığı ve PLC ile fieldbus üzerinden haberleştiği modüler ünitedir.</td>
  </tr>
  <tr>
    <td><strong>Debi Katsayısı Q<sub>n</sub> [l/dak]</strong></td>
    <td>Giriş basıncı 6 bar, çıkış basıncı 5 bar iken valften geçen dakikalık standart litre hava akış kapasitesidir; silindirin maksimum hızını sınırlar.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Çift etkili standart silindirlerde <strong>5/2 valfler</strong>; ara duruş ve güvenlik gerektiren yerlerde <strong>5/3 valfler</strong> kullanılır.</li>
  <li>Elektrik kesildiğinde mekanizmanın güvenli başlangıç konumuna dönmesi için <strong>Monostable (Tek Bobin)</strong> valf seçilmelidir.</li>
  <li>Acil duruşta operatörün sıkışan parçayı kurtarabilmesi için <strong>5/3 Egzoza Açık Merkez</strong> valf tercih edilir.</li>
  <li>Modern otomasyonda kablolama karmaşasını bitiren ve arıza teşhisi sunan <strong>Fieldbus / IO-Link Valf Adaları</strong> standarttır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir fikstürde parçayı sıkan pnömatik silindir için 5/2 tek bobin (monostable) valf seçtin. Fabrikada elektrikler aniden kesildiğinde işlenen parçaya ve operatöre ne olur?</summary>
<div>Monostable valfte elektrik kesildiği an dahili yay valfi başlangıç konumuna geri iter; yani silindir anında geri çekilerek parçayı serbest bırakır. Eğer parça yüksek devirli bir frezede işleniyorsa veya dikeyde tutuluyorsa parça fırlayarak makineyi parçalar ve operatörü yaralar! Sıkma fikstürlerinde elektrik kesilse bile parçayı bırakmayan <strong>Bistable (Çift Bobin Hafızalı)</strong> valf veya mekanik mafsallı kilitli klemp silindirleri kullanılmalıdır.</div></details>
<details><summary>Dikey eksende çalışan ağır bir silindiri havada istediğin bir noktada durdurmak için 5/3 kapalı merkez valf kullandın. Valf kapalı konuma geçtiğinde piston neden tam rijit durmaz ve 10–20 mm aşağı yaylanır?</summary>
<div>Çünkü hava <strong>sıkıştırılabilir (kompresibl) bir gazdır</strong>, hidrolik sıvı gibi rijit değildir. Kapalı merkez valf portları kilitlediğinde silindirin alt odasındaki hava kütlesi yerçekimi yükü altında sıkışarak bir yay gibi davranır. Yük arttıkça hava daha çok sıkışır ve piston aşağı çöker. Pnömatikte kesin mikron duruşu yapılamaz; kesin konum için ya mekanik durdurucu pabuç ya da servo vidalı mil ekseni kullanılmalıdır.</div></details>
<details><summary>Bir valfin üzerinde "Qn = 800 l/dak" yazıyor. Sen bu valfe devasa bir Ø100 mm silindir bağladın. Silindirin hız ayar valfini sonuna kadar açmana rağmen silindir neden hızlı gidemez?</summary>
<div>Hızı sınırlayan şey silindir değil, valfin <strong>anma debi kapasitesidir (Qn)</strong>. Ø100 mm silindirin iç hacmi çok büyüktür; yüksek hızda ilerleyebilmesi için saniyede litrelerce havaya ihtiyaç duyar. 800 l/dak debili bir valf bu hacmi yeterince hızlı dolduramaz ve boşaltamaz (şişe boğazı etkisi oluşur). Büyük çaplı silindirlerde yüksek debili (Qn &gt; 2000 l/dak) valfler ve kalın hortumlar (Ø10–12 mm) seçilmelidir.</div></details>
</div>
`);

KITAP.bolum('m6', '6-10', `
<p class="giris">Vakum teknolojisi; yüzeyi düzgün veya hafif pürüzlü parçaların (sac levhalar, camlar, karton koliler, elektronik çipler, plastik ambalajlar) mekanik çenelerle sıkılmadan, yüzeyine zarar vermeden atmosferik basınç farkıyla saniyeler içinde yakalanmasını sağlar. Vakum bir "çekme kuvveti" değildir; vantuzun içindeki havanın boşaltılması sonucu dışarıdaki atmosferik hava basıncının (1 bar) parçayı vantuza doğru bastırmasıdır. Bu bölümde venturi ejektörlerini, vantuz seçimini ve dinamik tutma kuvveti hesabını inceliyoruz.</p>

<h2>Vakum Fiziği ve Basınç Seviyeleri</h2>
<p>Deniz seviyesinde mutlak atmosfer basıncı <code>P<sub>atm</sub> ≈ 1013 mbar (1 bar)</code>'dır. Vakum derecesi negatif bağıl basınç olarak ifade edilir:</p>
<ul>
  <li><strong>Düşük Vakum (%20 – %40 / -0,2 … -0,4 bar):</strong> Gözenekli karton, kumaş veya yumuşak torbaların taşınması (Yüksek debi, düşük vakum).</li>
  <li><strong>Orta – Yüksek Endüstriyel Vakum (%60 – %85 / -0,6 … -0,85 bar):</strong> Standart sac, cam, plastik taşıma uygulamaları.</li>
  <li><strong>Teorik Sınır:</strong> Yeryüzünde ulaşılabilecek maksimum vakum kuvveti <strong>-1,0 bar (0 mbar mutlak)</strong> ile sınırlıdır! Bu yüzden vakum sistemlerinde kuvveti artırmanın yolu basıncı düşürmek değil, <strong>vantuz alanını (çapını) büyütmektir</strong>.</li>
</ul>

<h2>Vakum Üreticileri: Venturi Ejektör vs. Mekanik Vakum Pompası</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Parametre</th>
    <th>Venturi Vakum Ejektörü (Hava Tahrikli)</th>
    <th>Elektrikli Mekanik Vakum Pompası (Paletli/Kuru)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Çalışma Prensibi</strong></td>
    <td>Basınçlı havanın Venturi lülesinden süpersonik hızla geçirilmesiyle vakum üretir.</td>
    <td>Elektrik motoruyla dönen grafit/çelik paletler havayı mekanik olarak tahliye eder.</td>
  </tr>
  <tr>
    <td><strong>Boyut ve Montaj Yeri</strong></td>
    <td><strong>Tüy kadar hafif (50–200 gram)</strong>; doğrudan robot kolunun veya vantuzun arkasına takılır.</td>
    <td>Ağır ve hacimli (10–50 kg); makine şasesine veya zemin panosuna konur.</td>
  </tr>
  <tr>
    <td><strong>Tepki Süresi</strong></td>
    <td><strong>Yıldırım Hızında (10 – 30 milisaniye)</strong>; hortum hacmi olmadığı için anında tutar.</td>
    <td>Yavaş (Metrelerce uzun hortumun içindeki havayı boşaltmak 200–500 ms sürer).</td>
  </tr>
  <tr>
    <td><strong>Hava ve Enerji Tüketimi</strong></td>
    <td>Vakum tuttuğu sürece basınçlı hava tüketir (Hava tüketimi yüksektir).</td>
    <td><strong>Çok Ekonomik:</strong> Sadece elektrik tüketir; yüksek debilerde enerji faturası düşüktür.</td>
  </tr>
  <tr>
    <td><strong>Hızlı Bırakma (Blow-Off)</strong></td>
    <td><strong>Dahili Üfleme Darbesi:</strong> Parçayı bırakırken anlık pozitif hava basarak parçayı fırlatır.</td>
    <td>Harici valf gerektirir; parça vantuzda yapışıp kalabilir.</td>
  </tr>
  <tr>
    <td><strong>Kullanım Alanı</strong></td>
    <td>Hızlı Pick & Place robotları, paketleme, sac besleme.</td>
    <td>Ahşap CNC tablaları, sürekli vakumlu tutma fikstürleri, gözenekli kolileme.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Vantuz (Vakum Pedi) Tipleri ve Malzemeleri</h2>
<div class="iki-sutun">
  <div>
    <h4>Vantuz Geometrisi Tipleri</h4>
    <ul>
      <li><strong>Düz Vantuz (Flat):</strong> İnce dudaklı, düz gövde. Düzgün cam, sac, pürüzsüz plastik levhalar için maksimum tutma rijitliği ve yüksek ivmelenme direnci sağlar.</li>
      <li><strong>Körüklü Vantuz (1,5 veya 2,5 Körüklü - Bellows):</strong> Akordeon gibi katlanan gövde. Yükseklik farkı olan eğri yüzeyleri (örneğin eğik duran karton kutular veya bombed camlar) esneyerek kompanze eder; parçaya yumuşakça dokunur.</li>
    </ul>
  </div>
  <div>
    <h4>Vantuz Malzemesi Seçimi</h4>
    <ul>
      <li><strong>NBR (Nitril Kauçuk - Siyah):</strong> Genel endüstriyel kullanım, aşınma ve yağ direnci yüksek, en ekonomik.</li>
      <li><strong>Silikon (VMQ - Şeffaf / Kırmızı):</strong> FDA gıda ve ilaç uyumlu, yüksek sıcaklık dayanımı (-50°C … +200°C), iz bırakmaz.</li>
      <li><strong>Poliüretan (PU - Mavi/Turuncu):</strong> Yağlı otomotiv saclarını kavramada kaymaz, yırtılmaya karşı kauçuktan 5 kat daha dayanıklı.</li>
    </ul>
  </div>
</div>

<h2>Vakum Tutma Kuvveti Hesabı (F<sub>tutma</sub>)</h2>
<p>Vantuzun teorik çekme kuvveti, negatif basınç farkı ile vantuzun etkin alanının çarpımıdır:</p>
<div class="formul">
F<sub>teorik</sub> = ΔP · A = ΔP · [ ( π · d² ) / 4 ] &nbsp;&nbsp;[N]
<small>ΔP: Vakum basınç farkı [N/cm²] (%80 vakum için ≈ 8 N/cm²), d: Vantuz anma çapı [cm]</small>
</div>

<p><strong>Dinamik Emniyet Katsayısı (S):</strong></p>
<div class="formul">
F<sub>gerekli</sub> = ( m · ( g + a ) ) · ( S / μ )
</div>
<ul>
  <li><strong>Yatay Taşıma (Yük vantuzun altında asılı):</strong> Emniyet katsayısı <code>S = 1,5 … 2,0</code></li>
  <li><strong>Düşey Taşıma (Yük yana doğru kayma eğiliminde):</strong> Sürtünme katsayısı devreye girer (kuru sacda μ ≈ 0,5; yağlı sacda μ ≈ 0,1!). Emniyet katsayısı <strong>S = 2,5 … 4,0</strong> alınmalıdır! Aksi halde robot viraja girdiği an merkezkaçla parça vantuzdan kayıp fırlar.</li>
</ul>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Venturi Ejektörü</strong></td>
    <td>Basınçlı havanın nozul geometrisinden geçerken hızlanıp kinetik enerjiye dönüşmesiyle vakum oluşturan hafif vakum jeneratörüdür.</td>
  </tr>
  <tr>
    <td><strong>Hızlı Bırakma (Blow-Off)</strong></td>
    <td>Vantuz içindeki vakumu anında kırmak ve parçayı milisaniyede serbest bırakmak için vantuzun içine uygulanan kısa süreli pozitif basınç darbesidir.</td>
  </tr>
  <tr>
    <td><strong>Körüklü Vantuz (Bellows Pad)</strong></td>
    <td>Gövdesindeki akordeon boğumları sayesinde eğri, dalgalı veya farklı yüksekliklerdeki parçaları esneyerek kavrayabilen vantuz türüdür.</td>
  </tr>
  <tr>
    <td><strong>Vakum Şalteri (Vacuum Switch)</strong></td>
    <td>Vantuzun parçayı gerçekten tutup tutmadığını vakum seviyesini ölçerek algılayan ve robot koluna "parça alındı" sinyali veren dijital sensördür.</td>
  </tr>
  <tr>
    <td><strong>Emiş Debisi [l/dak]</strong></td>
    <td>Vakum jeneratörünün birim zamanda sistemden tahliye edebildiği hava hacmidir; gözenekli karton taşımada tutma güvenliğini belirler.</td>
  </tr>
  <tr>
    <td><strong>Hava Tasarruf Fonksiyonu (Air-Saving)</strong></td>
    <td>Akıllı ejektörlerde hedeflenen vakum seviyesine (-0,7 bar) ulaşıldığında basınçlı hava beslemesini kesen, kaçak olursa tekrar açan enerji tasarruf valfidir.</td>
  </tr>
  <tr>
    <td><strong>İz Bırakmama (Non-Marking)</strong></td>
    <td>Cam, parlak sac ve optik yüzeylerde vantuz kauçuğunun kimyasal leke veya silikon partikülü bırakmaması özelliğidir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Vakum çekmez; atmosfer basıncı parçayı dışarıdan vantuza doğru bastırır (teorik limit maksimum 1 bar'dır).</li>
  <li>Hızlı ve hafif robot kollarında <strong>Venturi Ejektörleri</strong>; gözenekli ağır ahşap tablalarında <strong>Elektrikli Vakum Pompaları</strong> seçilir.</li>
  <li>Parçayı anında bırakabilmek için ejektör üzerinde <strong>Blow-Off (Üfleme Darbesi)</strong> fonksiyonu bulunmalıdır.</li>
  <li>Dikey taşımada sürtünme katsayısı düştüğü için vantuz emniyet katsayısı <strong>en az S = 2,5 – 4,0</strong> alınmalıdır.</li>
  <li>Robotun parçayı düşürmemesi için mutlaka bir <strong>elektronik vakum şalteri</strong> ile basınç teyit edilmeden robot hareket ettirilmemelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir robot yağlı bir otomotiv gövde sacını (20 kg) yataydan tutup 90° dikey konuma getirerek 15 m/s² ivmeyle hızlanıyor. Standart 4 adet NBR düz vantuz takılmış. Neden sac robotun elinden kayıp fırlar?</summary>
<div>Dikey konuma geçildiğinde sacın ağırlığı ve 1,5G'lik dinamik atalet kuvveti vantuz yüzeyine paralel (kesme/kayma yönünde) biner. Yağlı sac yüzeyinde NBR kauçuğun sürtünme katsayısı <code>μ ≈ 0,1</code>'e kadar çöker! Vantuz vakumu kaybetmese bile sürtünme kuvveti yetersiz kaldığı için sac vantuzların üzerinden kayarak uçar. Çözüm: İçinde özel sürtünme tırtıkları olan ve yağı kanallardan tahliye eden <strong>Otomotiv Tipi Poliüretan Vantuzlar (Bell Cup / Friction Cup)</strong> kullanmak ve vantuz sayısını/çapını artırmaktır.</div></details>
<details><summary>Oluklu mukavva koli taşıyan bir paletleme robotunda küçük bir venturi ejektör taktın. Koliye vantuz bastığında koli düşüyor ve vakum seviyesi -0,2 bar'ı geçemiyor. Vantuzda delik yok. Sorun nedir?</summary>
<div>Oluklu mukavva gözenekli (porous / hava geçiren) bir malzemedir. Kartonun gözeneklerinden sürekli hava sızar. Küçük venturi ejektörlerinin emiş debisi çok düşüktür; kartondan kaçan hava debisi ejektörün emebildiği debiden fazla olduğu için vakum oluşamaz. Gözenekli malzemelerde yüksek emiş debisine sahip <strong>Çok Kademeli Ejektör (Multi-Stage Ejector - Piab tipi)</strong> veya <strong>Yüksek Debili Mekanik Vakum Pompası</strong> kullanılmalıdır.</div></details>
<details><summary>Bir robot vantuzu parçayı bıraktığında parçanın vantuzdan hemen ayrılmadığı, 1-2 saniye yapışık kaldığı ve çevrim süresini uzattığı görülüyor. Hangi özellik eksiktir?</summary>
<div>Vakum kesildiğinde vantuzun içindeki hava basıncının atmosfer basıncına eşitlenmesi vakum kanalının dar olması sebebiyle zaman alır; ayrıca kauçuğun elastik yapışması parçayı bırakmaz. Çözüm: Ejektör üzerindeki <strong>Hızlı Bırakma (Blow-Off / Basınçlı Üfleme Darbesi)</strong> valfini açmaktır. Bu valf vakum kesildiği anda vantuzun içine 50 milisaniye boyunca 2 bar pozitif hava üfler ve parçayı mekanik olarak vantuza yapışmaktan anında kurtarır.</div></details>
</div>
`);

KITAP.bolum('m6', '6-11', `
<p class="giris">Pnömatik sistemlerin 6 barda üretebildiği kuvvetlerin yetersiz kaldığı, binlerce kilonun (onlarca tonun) preslendiği, büküldüğü veya devasa platformların kaldırıldığı ağır sanayi uygulamalarında sahneye <strong>Endüstriyel Hidrolik</strong> çıkar. Sıvıların sıkıştırılamaz olması prensibine (Pascal Kanunu) dayanan hidrolik sistemler; pnömatiğin 50 katı çalışma basınçlarında (150 – 350 bar) muazzam bir güç yoğunluğunu mikron seviyesinde rijitlikle sunar.</p>

<h2>Pascal Kanunu ve Kuvvet Çoğaltma Fiziği</h2>
<p>Kapalı bir kaptaki durgun sıvıya uygulanan basınç, sıvının her noktasına ve temas ettiği tüm yüzeylere şiddetini kaybetmeden aynen iletilir:</p>
<div class="formul">
P = F<sub>1</sub> / A<sub>1</sub> = F<sub>2</sub> / A<sub>2</sub> &nbsp;&nbsp;→&nbsp;&nbsp; F<sub>2</sub> = F<sub>1</sub> · ( A<sub>2</sub> / A<sub>1</sub> )
</div>
<p><em>Örnek: Küçük pistona (A₁ = 10 cm²) uygulanan 1000 N'luk bir kuvvet; büyük pistonda (A₂ = 200 cm²) tam <strong>20.000 N (2 Ton)</strong> kaldırma kuvvetine dönüşür.</em></p>

<h2>Hidrolik Güç Ünitesi (HPU) Mimarisi</h2>
<p>Hidrolik devre, enerjisini elektrik motoruyla tahrik edilen bir akışkan deposundan (HPU) alır:</p>
<ul>
  <li><strong>Yağ Deposu (Tank):</strong> Hidrolik yağı depolar, yağın dinlenmesini, içindeki hava kabarcıklarının yüzeye çıkmasını ve soğumasını sağlar.</li>
  <li><strong>Hidrolik Pompa:</strong> Mekanik enerjiyi hidrolik akışa (debiye) çevirir:
    <ul>
      <li><em>Dişli Pompa:</em> En ucuz, kaba toleranslı, orta basınç (maks. 200–250 bar).</li>
      <li><em>Paletli Pompa:</em> Sessiz, düşük titreşimli, takım tezgahlarında popüler (maks. 150–200 bar).</li>
      <li><em>Eksenel Pistonlu Pompa:</em> Değişken debili, aşırı yüksek basınç (350–420 bar) ve ağır presler.</li>
    </ul>
  </li>
  <li><strong>Emniyet Basınç Tahliye Valfi (Pressure Relief Valve):</strong> Sistemin kalbidir. Sistem basıncı ayar değerini (örn. 210 bar) aştığında açılarak fazla yağı tanka boşaltır; boruların patlamasını engeller.</li>
  <li><strong>Dönüş Filtresi ve Yağ Soğutucu:</strong> Aşınma talaşlarını süzer ve sürekli sürtünmeden ısınan yağı 50–60°C'de tutar.</li>
</ul>

<h2>Pnömatik vs. Hidrolik Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Parametre</th>
    <th>Pnömatik Sistem</th>
    <th>Hidrolik Sistem</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Çalışma Akışkanı</strong></td>
    <td>Hava (Sıkıştırılabilir Gaz)</td>
    <td><strong>Mineral Yağ (Sıkıştırılamaz Sıvı)</strong></td>
  </tr>
  <tr>
    <td><strong>İşletme Basıncı</strong></td>
    <td>Standart <strong>6 Bar</strong> (maks. 10 bar)</td>
    <td><strong>150 – 350+ Bar</strong></td>
  </tr>
  <tr>
    <td><strong>Kuvvet ve Güç Yoğunluğu</strong></td>
    <td>Düşük – Orta (maks. 20–30 kN)</td>
    <td><strong>AŞIRI YÜKSEK (Tonlarca, 5000+ kN)</strong></td>
  </tr>
  <tr>
    <td><strong>Rijitlik ve Konum Hassasiyeti</strong></td>
    <td><strong>Kötü:</strong> Yük altında hava yaylanır; ara duruş yapılamaz.</td>
    <td><strong>KUSURSUZ:</strong> Sıvı sıkışmadığı için mikron hassasiyetinde ara duruş ve hız kontrolü yapılır.</td>
  </tr>
  <tr>
    <td><strong>Maksimum Hız</strong></td>
    <td><strong>Çok Hızlı (1–3 m/s)</strong></td>
    <td>Orta – Yavaş (maks. 0,2–0,5 m/s)</td>
  </tr>
  <tr>
    <td><strong>Temizlik ve Çevre</strong></td>
    <td>Temiz, sızıntı yaparsa sadece hava kaçar.</td>
    <td><strong>Kirli:</strong> Yağ sızıntısı yangın, çevre kirliliği ve kayma tehlikesi yaratır.</td>
  </tr>
  <tr>
    <td><strong>Tesisat Maliyeti</strong></td>
    <td>Hafif poliüretan hortumlar, ucuz alüminyum bağlantılar.</td>
    <td>Pahalı çelik dikişsiz borular, yüksek basınçlı çelik örgülü hortumlar.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Hidrolik Yağ Bakımı ve Kirlilik Kontrolü (ISO 4406)</h2>
<div class="kutu tehlike"><span class="kb">Hidrolik Arızaların %80'i Kirli Yağdan Kaynaklanır!</span>
Hidrolik valf sürgülerinin gövdeyle arasındaki çalışma boşluğu <strong>2 ila 5 mikrondur (0,002 mm!)</strong>. İnsan saç telinin (70 µm) 20'de biri kadar olan bu aralığa çıplak gözle görülmeyen mikroskobik bir çapak girdiği an valf sürgüsü kilitlenir; yüksek basınçlı pompa pürüzlenerek debi kaçırır. Hidrolik sistemlerde yağ periyodik olarak laboratuvarda partikül sayımına (ISO 4406 standardına) tabi tutulmalı ve 10 mikronluk yüksek basınç filtreleri düzenli değiştirilmelidir.</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Pascal Kanunu</strong></td>
    <td>Kapalı bir akışkan hacmine uygulanan basıncın akışkanın her doğrultudaki tüm noktalarına eşit büyüklükte iletildiğini belirten temel hidrostatik yasadır.</td>
  </tr>
  <tr>
    <td><strong>Hidrolik Güç Ünitesi (HPU)</strong></td>
    <td>Yağ deposu, elektrik motoru, hidrolik pompa, filtre ve emniyet valflerini tek şasede toplayan merkezi basınçlı yağ üretim merkezidir.</td>
  </tr>
  <tr>
    <td><strong>Basınç Tahliye Valfi (Relief Valve)</strong></td>
    <td>Sistem basıncı kritik ayar eşiğini aştığında açılarak hidrolik sıvıyı tanka yönlendiren en kritik aşırı basınç koruma elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>Eksenel Pistonlu Pompa</strong></td>
    <td>Dönen bir silindir bloğu içindeki açılı pistonların strok yapmasıyla 350+ bar basınç üretebilen ve debisi açı plakasıyla (swashplate) değiştirilebilen pompadır.</td>
  </tr>
  <tr>
    <td><strong>Oransal Valf (Proportional Valve)</strong></td>
    <td>Solenoid bobine verilen analog akım miktarıyla sürgüsünün açıklığını orantılı ayarlayarak hidrolik debi ve hızı hassas yöneten valftir.</td>
  </tr>
  <tr>
    <td><strong>ISO VG 46 Yağı</strong></td>
    <td>40°C sıcaklıkta 46 mm²/s kinematik viskoziteye sahip olan, endüstriyel hidrolik sistemlerin en popüler aşınma önleyici (anti-wear) mineral yağıdır.</td>
  </tr>
  <tr>
    <td><strong>ISO 4406 Kirlilik Kodu</strong></td>
    <td>1 ml hidrolik yağ içindeki 4 µm, 6 µm ve 14 µm boyutundaki partikül sayısını kodlayan uluslararası temizlik standardıdır (örn. 18/16/13).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Hidrolik sistemler sıvıların sıkıştırılamazlığı ve <strong>150–350 bar yüksek basınç</strong> sayesinde devasa kuvvetleri kompakt silindirlerle üretir.</li>
  <li>Havanın aksine yağ sıkışmadığı için hidrolik silindirler yük altında milimetrik olarak kilitlenebilir ve çok hassas hız kontrolü yapılabilir.</li>
  <li>Devre güvenliğinin bir numaralı sigortası <strong>Basınç Tahliye Valfidir (Relief Valve)</strong>.</li>
  <li>Hidrolik arızaların %80'i kirlilikten kaynaklanır; <strong>ISO 4406 temizlik standartlarına</strong> titizlikle uyulmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir sac bükme presinde 50 ton (yaklaşık 500.000 N) kuvvet uygulanması gerekiyor. Neden bu sistemde 6 bar pnömatik silindir yerine 250 bar hidrolik silindir tercih edilir?</summary>
<div>Boyut farkından dolayı! 6 bar basınçta 500.000 N kuvvet üretebilmek için silindir çapının <strong>Ø1030 mm (1 metreden geniş!)</strong> olması gerekirdi; böyle devasa bir pnömatik silindir üretilemez, şaseye sığmaz ve saniyede tonlarca hava tüketirdi. Aynı 500.000 N kuvveti 250 bar hidrolikle üretmek için sadece <strong>Ø160 mm çapında</strong> kompakt bir hidrolik silindir yeterlidir!</div></details>
<details><summary>Hidrolik sistem çalıştırıldıktan 2 saat sonra borulardan şiddetli bir vuruntu (çekiç sesi) geliyor ve pompa uğulduyor. Yağ deposunun göstergesine bakıldığında yağın üzerinde köpükler görülüyor. Problem nedir?</summary>
<div>Bu olaya <strong>Kavitasyon (Cavitation) ve Hava Emişi</strong> denir. Pompanın emiş hattındaki filtre tıkanmış veya emiş borusunun rekorundan sisteme hava sızmaktadır. Pompa içine giren hava kabarcıkları yüksek basınç odasına geçtiğinde binlerce bar yerel basınçla patlayarak mikro şok dalgaları üretir. Bu durum pompayı içeriden oyar ve boruları döver. Emiş hattı sızdırmazlığı kontrol edilmeli ve emiş filtresi temizlenmelidir.</div></details>
<details><summary>Gıda veya ilaç üretim hattındaki bir paletleme mekanizmasında hidrolik silindir kullanmak neden kesinlikle yasaktır?</summary>
<div>Hidrolik sistemlerde ne kadar kaliteli keçe kullanılırsa kullanılsın zamanla piston keçelerinden veya boru rekorlarından mikro yağ sızıntıları yaşanır. Hidrolik yağın gıda ürününe veya ambalajına damlaması halk sağlığı felaketine yol açar ve partinin toplatılmasını gerektirir. Temiz ortamlarda ya basınçlı hava (pnömatik) ya da tamamen temiz kapalı <strong>Elektromekanik Servo Aktüatörler (EMA)</strong> kullanılmalıdır.</div></details>
</div>
`);

KITAP.bolum('m6', '6-12', `
<p class="giris">Makine konsept tasarım aşamasında tasarımcının masasında en sık tekrarlanan ikilem şudur: "Bu ekseni pnömatik silindirle mi yapmalıyım, yoksa servo motorlu vidalı mille mi?" Pnömatik ucuz ilk yatırım maliyetiyle cezbederken; servo motor yüksek enerji verimliliği ve esnekliğiyle öne çıkar. Yanlış karar, ya fabrikanın elektrik faturasını şişirir ya da makine bütçesini patlatır. Bu bölümde 10 kriterli mühendislik karar matrisini ve Toplam Sahip Olma Maliyeti (TCO) analizini inceliyoruz.</p>

<h2>Büyük Tahrik Karşılaştırma Matrisi: Elektrikli vs. Pnömatik</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mühendislik Kriteri</th>
    <th>Pnömatik Silindir Eksen</th>
    <th>Elektromekanik Servo Eksen</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1. İlk Satın Alma Maliyeti (CAPEX)</strong></td>
    <td><strong>Çok Düşük (1,0×)</strong> (Silindir + valf + rekor çok ucuzdur).</td>
    <td>Pahalı (3,0× – 5,0×) (Servo motor, sürücü, kablo, redüktör, vida).</td>
  </tr>
  <tr>
    <td><strong>2. Enerji Verimliliği ve Tüketim</strong></td>
    <td><strong>Çok Kötü (%5 – %10 verim).</strong> Elektrik enerjisinin %90'ı kompresörde ısıya dönüşür.</td>
    <td><strong>Mükemmel (%80 – %90 verim).</strong> Sadece hareket anında şebekeden doğrudan güç çeker.</td>
  </tr>
  <tr>
    <td><strong>3. Ara Duruş ve Pozisyonlama</strong></td>
    <td><strong>İmkânsız (Sadece A ve B uç noktaları).</strong> Ara noktalarda hava yaylanır.</td>
    <td><strong>Sonsuz Sayıda Ara Pozisyon.</strong> Mikron hassasiyetinde istenen her koordinatta durur.</td>
  </tr>
  <tr>
    <td><strong>4. Hız ve İvme Esnekliği</strong></td>
    <td>Zor: Hız ayar valfiyle mekanik elle tornavidayla ayarlanır; dinamik değiştirilemez.</td>
    <td><strong>Kusursuz:</strong> PLC/HMI ekranından her parça için bağımsız hız ve S-Curve ivme atanır.</td>
  </tr>
  <tr>
    <td><strong>5. Kuvvet Kontrolü ve Basınç Ayarı</strong></td>
    <td>Kaba: Basınç regülatörüyle ayarlanır; hassas presleme yapılamaz.</td>
    <td><strong>Hassas Tork Kontrolü:</strong> Milisaniyelik tork sınırlandırmasıyla ezmeden hassas presleme yapar.</td>
  </tr>
  <tr>
    <td><strong>6. Çevrim Ömrü ve Güvenilirlik</strong></td>
    <td>Keçeler sürtünmeyle aşınır; tipik 5.000 – 10.000 km sonra hava kaçırmaya başlar.</td>
    <td><strong>Yüzbinlerce km ömür.</strong> Fırçasız motor ve taşlanmış bilyalı vida onlarca yıl çalışır.</td>
  </tr>
  <tr>
    <td><strong>7. Bakım ve Arıza Tespiti</strong></td>
    <td>Basit: Bozulursa usta silindiri 15 dakikada söker yenisini takar.</td>
    <td>Uzmanlık ister: Parametre ayarı, enkoder arızası, sürücü konfigürasyonu gerekir.</td>
  </tr>
  <tr>
    <td><strong>8. Çevre Şartları ve Temizlik</strong></td>
    <td>Egzoz havası atölyeye üflenir; yağ buharı ve ıslık sesi yayabilir.</td>
    <td><strong>Sessiz, Temiz Oda Uyumlu, Sıfır Emisyon.</strong></td>
  </tr>
  <tr>
    <td><strong>9. Aşırı Yük ve Sıkışma Dayanımı</strong></td>
    <td><strong>Mükemmel:</strong> Mekanizma sıkışırsa silindir havada durur; hiçbir şey yanmaz/kırılmaz.</td>
    <td>Hassas: Aşırı torkta motor tork alarmı verir, mekanik sigorta yoksa kaplin/vida kırılabilir.</td>
  </tr>
  <tr>
    <td><strong>10. Boyut ve Taşınan Ağırlık</strong></td>
    <td><strong>Çok Hafif ve Kompakt:</strong> Hareketli araba üzerinde sadece silindir gövdesi vardır.</td>
    <td>Ağır: Hareketli parçanın üzerinde motor ve kablolar taşınmak zorundadır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Toplam Sahip Olma Maliyeti (TCO) Analizi: 3 Yıllık Gerçek Fatura</h2>
<p>Birçok satınalma departmanı ilk alım fiyatına (CAPEX) aldanarak pnömatiği tercih eder. Ancak 3 vardiya çalışan yüksek çevrimli bir fabrikada gerçek tablo şudur:</p>

<div class="iki-sutun">
  <div>
    <h4>Pnömatik Silindir TCO Senaryosu</h4>
    <ul>
      <li><strong>Satın Alma (FRL, valf, silindir):</strong> 300 €</li>
      <li><strong>Yıllık Elektrik Tüketimi (Kompresör Havası):</strong> 1200 € / yıl</li>
      <li><strong>Hava Kaçak Kayıpları (Ortalama %20 kaçak):</strong> 250 € / yıl</li>
      <li><strong>3 Yıllık Toplam Maliyet:</strong> 300 + (3 × 1450) = <strong>4650 €!</strong></li>
    </ul>
  </div>
  <div>
    <h4>Elektrikli Lineer Aktüatör TCO Senaryosu</h4>
    <ul>
      <li><strong>Satın Alma (Servo motor, sürücü, modül):</strong> 1500 €</li>
      <li><strong>Yıllık Elektrik Tüketimi (Doğrudan Şebeke):</strong> 150 € / yıl</li>
      <li><strong>Hava Kaçağı:</strong> SIFIR €</li>
      <li><strong>3 Yıllık Toplam Maliyet:</strong> 1500 + (3 × 150) = <strong>1950 €!</strong></li>
    </ul>
  </div>
</div>
<p><strong>Mühendislik Sonucu:</strong> Yüksek çevrimli (dakikada &gt; 15-20 çevrim yapan) eksenlerde elektrikli servo sistem <strong>1,5 yıl içinde kendini amorti eder</strong> ve sonraki her yıl fabrikanın kasasına binlerce Euro enerji tasarrufu bırakır!</p>

<h2>Mühendislik Karar Algoritması</h2>
<ol>
  <li><strong>Sadece A ve B noktası arasında kaba itme/çekme mi yapılıyor?</strong><br>
  Evet ve çevrim seyrek (&lt; 10 çevrim/dakika) → <strong>Pnömatik Silindir (ISO 15552 / 21287)</strong>.</li>
  <li><strong>2'den fazla ara noktada durulması veya esnek format değişimi gerekiyor mu?</strong><br>
  Evet → <strong>Elektrikli Servo Eksen</strong> (Pnömatikle ara duruş yapılamaz!).</li>
  <li><strong>Hız ve ivmelenmenin parça tipine göre reçeteden (HMI) değişmesi şart mı?</strong><br>
  Evet → <strong>Elektrikli Servo Eksen</strong>.</li>
  <li><strong>Kuvvet sınırlamasıyla hassas geçme/presleme kontrolü mü var?</strong><br>
  Evet → <strong>Tork kontrollü Servo Motor</strong>.</li>
  <li><strong>Patlayıcı, yanıcı (ATEX) veya su altı ortamı mı?</strong><br>
  Evet → <strong>Pnömatik Silindir</strong> (Kıvılcım riski sıfırdır).</li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th style="width: 25%;">Terim / Sembol</th>
    <th style="width: 75%;">Bilimsel ve Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>TCO (Total Cost of Ownership)</strong></td>
    <td>Bir makine elemanının ilk satın alma maliyeti (CAPEX) ile kullanım ömrü boyunca tükettiği enerji, bakım ve duruş maliyetlerinin (OPEX) toplamıdır.</td>
  </tr>
  <tr>
    <td><strong>Elektromekanik Aktüatör (EMA)</strong></td>
    <td>Geleneksel hidrolik veya pnömatik silindirlerin yerine geçen, servo motorla tahrik edilen entegre bilyalı vidalı elektrikli itici ünitesidir.</td>
  </tr>
  <tr>
    <td><strong>Hava Kaçak Oranı</strong></td>
    <td>Fabrika boru hattında, rekorlarda ve yıpranmış valf keçelerinde oluşan, iş yapmadan boşa giden basınçlı hava kaybı yüzdesidir (endüstri ortalaması %20–30'dur!).</td>
  </tr>
  <tr>
    <td><strong>Çoklu Pozisyonlama (Multi-Positioning)</strong></td>
    <td>Aktüatörün mekanik durdurucu değiştirmeden, yazılım parametreleriyle strok boyunca yüzlerce farklı koordinatta durabilme yeteneğidir.</td>
  </tr>
  <tr>
    <td><strong>Reçete Yönetimi (Recipe Management)</strong></td>
    <td>Üretilen ürün tipi değiştiğinde (örneğin 200 ml şişeden 500 ml şişeye geçişte) servo eksenlerin strok ve hız değerlerini tek tuşla otomatik güncellemesidir.</td>
  </tr>
  <tr>
    <td><strong>ATEX Direktifi</strong></td>
    <td>Patlayıcı toz veya gaz içeren tehlikeli fabrika ortamlarında kullanılan ekipmanların kıvılcım çıkarmama güvenliğini düzenleyen Avrupa Birliği standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Basınçlı Hava Maliyeti</strong></td>
    <td>1 standart metreküp (Nm³) basınçlı havanın kompresörde üretilmesi için harcanan elektrik enerjisi bedelidir (tipik olarak 0,02 – 0,04 € / Nm³).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Pnömatik sistemler düşük ilk yatırım maliyeti (CAPEX) sunar; ancak basınçlı hava verimsizliği nedeniyle işletme maliyeti (OPEX) çok yüksektir.</li>
  <li>Elektrikli servo aktüatörler ilk alımda pahalıdır; ancak <strong>%85 enerji verimliliği</strong> sayesinde yüksek çevrimli hatlarda 1–2 yılda kendini amorti eder.</li>
  <li>İkiden fazla noktada duruş, reçeteli format değişimi ve hassas kuvvet kontrolü gerekiyorsa <strong>Elektrikli Eksen</strong> zorunludur.</li>
  <li>Basit it-çek, sıkma ve kaba ayırma işlemlerinde <strong>Pnömatik Silindir</strong> en sağlam ve ucuz alternatiftir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Günde 24 saat, dakikada 40 kutu basan bir paketleme makinesinde kutu itici eksen için pnömatik silindir mi elektrikli servo aktüatör mü seçilmelidir? Neden?</summary>
<div>Kesinlikle <strong>Elektrikli Servo Aktüatör</strong> seçilmelidir. Dakikada 40 çevrim, yılda yaklaşık 20 milyon strok demektir! Pnömatik silindir bu çevrimde devasa miktarda basınçlı hava tüketerek yılda binlerce Euro elektrik faturası üretir ve keçeleri yılda 2 kez değiştirilmek zorunda kalınır. Elektrikli servo ise %85 enerji tasarrufu sağlar ve 1 yıldan kısa sürede ilk yatırım farkını amorti eder.</div></details>
<details><summary>Aynı montaj hattında 5 farklı boyutta ürün üretiliyor. Ürün değişiminde eksenin duruş pozisyonunun 100 mm, 150 mm, 220 mm gibi farklı mesafelere ayarlanması isteniyor. Pnömatik silindirle bu nasıl yapılabilir, elektrikli servo ile nasıl yapılır?</summary>
<div>Pnömatik silindirle bunu yapmak için ya araya mekanik ayar vidaları koyup her ürün değişiminde teknisyenin tornavidayla durdurucuları manuel ayarlaması gerekir (üretim kaybı) ya da ardışık 3 farklı silindir birbirine bağlanmalıdır (karmaşık ve hantal). Elektrikli servo eksende ise HMI dokunmatik ekrandan ürün reçetesi seçildiği an motor milisaniyeler içinde yeni koordinata kendiliğinden gider; mekanik müdahaleye sıfır ihtiyaç duyulur.</div></details>
<details><summary>Boya püskürtme kabini içinde (ortamda uçucu tiner ve solvent buharı var - ATEX Zone 1 bölgesi) bir kapak açma mekanizması tasarlıyorsun. Neden standart bir servo motor yerine pnömatik silindir tercih edilir?</summary>
<div>Standart servo motorlar ve elektrik kabloları en ufak bir ark veya kısa devrede solvent buharını patlatabilir; ATEX korumalı özel patlamaz ex-proof servolar ise astronomik fiyatlardadır. Pnömatik silindirler ise sadece basınçlı hava ile çalışır; elektrik akımı taşımaz, kıvılcım ve ısınma riski sıfırdır. Bu tip patlayıcı ortamlarda pnömatik doğal bir güvenlik avantajı sağlar.</div></details>
</div>

<div class="ozet-kutu" style="border-left-color: #059669; background: rgba(5,150,105,0.06);">
<h3>Modül 6 Büyük Mühendislik Kapanış Özeti</h3>
<ul>
  <li>Mekanik ömrü ve şase rijitliğini korumak için hareket profilinde sonsuz Jerk üreten sert profillerden kaçın; daima <strong>S-Curve</strong> kullan.</li>
  <li>Motor seçiminde sadece sürtünme torkuna aldanma; hızlanma torkunun %80'ini oluşturan <strong>J · α atalet torkunu</strong> ve redüktörün <strong>i² bölme etkisini</strong> hesapla.</li>
  <li>Sürekli 25 Hz altında çalışan asenkron motorlara mutlaka <strong>harici cebri soğutma fanı</strong> tak; motoru yakmaktan kurtar.</li>
  <li>Step motorlarda adım kaçırma kabusunu bitirmek için enkoder geribeslemeli <strong>Kapalı Çevrim Step (Closed-Loop)</strong> tercih et.</li>
  <li>Milyonlarca pals hassasiyeti ve sıfır homing mecburiyeti için robotik eksenlerde <strong>Multi-Turn Mutlak Enkoderli AC Servo</strong> kullan.</li>
  <li>Modern pnömatikte şartlandırıcıya yağ koyma tuzağına düşme; sadece <strong>Filtre + Regülatör (FR)</strong> kullan.</li>
  <li>Silindir hız kontrolünü daima <strong>Egzozdan Kısma (Meter-Out)</strong> ile yap; strok sonu darbesi için <strong>PPV yastıklama</strong> ayarla.</li>
  <li>Yüksek çevrimli eksenlerde kompresör elektrik faturasını şişirmemek için TCO hesabını yap ve <strong>Elektromekanik Servo Aktüatöre</strong> geç.</li>
</ul></div>
`);
