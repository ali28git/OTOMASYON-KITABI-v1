// MODÜL 6 — Tahrik: Motorlar, Pnömatik, Vakum (Bölüm 6.1 – 6.4: Kinematik, Tork/Atalet, Asenkron ve Step Motorlar)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m6', '6-1', `
<p class="giris">Mekatronik bir sistemde motor seçimi motor miline gelen statik yükten değil, yükün ne kadar sürede hangi ivmeyle hızlandırılıp durdurulacağından başlar. Doğru tanımlanmamış bir hareket profili; mekanik aktarma organlarında yıkıcı darbelere, şasede rezonansa, konum aşımına (overshoot) ve motorun aşırı ısınmasına yol açar. Bu bölümde hareket profillerinin kinematiğini, sarsıntı (Jerk) sınırlandırmasını ve çevrim süresi optimizasyonunu inceliyoruz.</p>

<h2>Hareket Profilleri Kinematiği: Trapezoid vs. S-Curve</h2>
<p>Noktadan noktaya (Point-to-Point) doğrusal veya dönel hareketlerde hedef mesafeye (L veya θ) ulaşmak için kontrol ünitesi zaman tabanlı hız eğrileri üretir:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Profil Türü</th>
    <th>İvme Davranışı</th>
    <th>Sarsıntı (Jerk = da/dt)</th>
    <th>Mekanik Şok ve Titreşim</th>
    <th>Uygulama Alanı ve Değerlendirme</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Üçgen Profil (1/2 – 1/2)</strong></td>
    <td>Sürekli ivmelenir ve tepe noktasından hemen frenlemeye geçer (Sabit hız fazı yoktur).</td>
    <td>Başlangıç, tepe ve duruşta <strong>sonsuz (teorik)</strong></td>
    <td><strong>Çok Yüksek</strong></td>
    <td>Strokun çok kısa olduğu, motorun anma hızına ulaşmaya vakit bulamadığı mikro adımlı eksenler.</td>
  </tr>
  <tr>
    <td><strong>Trapezoidal Profil (1/3 Kuralı)</strong></td>
    <td>Hızlanma, sabit hız ve yavaşlama fazları genelde eşit (t₁ = t₂ = t₃) bölünür. İvme sabit bloktur.</td>
    <td>İvmenin başladığı ve bittiği 4 köşede <strong>sonsuz şok darbesi</strong></td>
    <td><strong>Orta – Yüksek</strong></td>
    <td>Standart asenkron/step motorlu eksenler, basit transfer hatları. Yüksek hızda şaseyi sallar.</td>
  </tr>
  <tr>
    <td><strong>S-Curve (7-Segmentli Jerk Sınırlı)</strong></td>
    <td>İvme aniden sıfırdan maksimuma fırlamaz; yumuşak bir eğriyle (rampa) yükselir ve iner.</td>
    <td><strong>Kontrollü ve Sonlu (Sabit J değeri)</strong></td>
    <td><strong>EN DÜŞÜK (Fısıltı kadar pürüzsüz)</strong></td>
    <td><strong>Hassas montaj otomasyonu, robotik kollar, sıvı taşıma, optik/yarı iletken eksenleri.</strong></td>
  </tr>
</tbody>
</table>
</div>

<h2>Trapezoidal Profil Matematiksel Denklemleri</h2>
<p>Toplam stroku L [mm] olan bir eksenin t<sub>top</sub> [s] sürede tamamlanması istendiğinde, 1/3 oranlı standart trapez profile göre:</p>
<div class="formul">
v<sub>maks</sub> = 1,5 · ( L / t<sub>top</sub> ) &nbsp;&nbsp;[mm/s]&nbsp;&nbsp;|&nbsp;&nbsp;
a<sub>maks</sub> = 4,5 · ( L / t<sub>top</sub>² ) &nbsp;&nbsp;[mm/s²]
</div>
<p><em>Örnek Hesap: L = 600 mm strok t<sub>top</sub> = 1,2 saniyede alınmak isteniyorsa:</em></p>
<div class="formul">
v<sub>maks</sub> = 1,5 × ( 600 / 1,2 ) = <strong>750 mm/s = 0,75 m/s</strong><br>
a<sub>maks</sub> = 4,5 × ( 600 / 1,44 ) = <strong>1875 mm/s² = 1,875 m/s² (≈ 0,19 G)</strong>
</div>

<h2>Jerk (Sarsıntı) Kontrolünün Fiziksel Önemi</h2>
<p>Jerk, ivmenin zamana göre türevidir (<code>J = da / dt &nbsp;[m/s³]</code>). Newton'un ikinci yasasına göre kuvvet <code>F = m · a</code> olduğuna göre, kuvvetteki ani değişim hızı da Jerk ile orantılıdır (<code>dF / dt = m · J</code>):</p>
<ul>
  <li>Trapezoidal profilde ivme milisaniyeden daha kısa sürede 0'dan 20 m/s²'ye fırlar. Bu durum cisme ve aktarma organlarına (kayış kordları, vidalı mil bilyaları, redüktör dişleri) <strong>çekiç darbesi (Dirac delta darbesi)</strong> şeklinde kuvvet uygular.</li>
  <li>S-Curve profilinde Jerk sabit bir değerle sınırlandırıldığında kuvvet yumuşak bir eğriyle aktarılır. Triger kayışın elastik yaylanması (hunting) %80 oranında engellenir ve servo motor hedef pozisyonda hiç salınım yapmadan durur.</li>
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
    <td><strong>Jerk (Sarsıntı - J) [m/s³]</strong></td>
    <td>İvmenin zamana göre değişim hızıdır (da/dt); mekanik sistemlerde oluşan ani dinamik kuvvet şoklarını ve titreşim enerjisini temsil eder.</td>
  </tr>
  <tr>
    <td><strong>S-Curve (7 Segmentli Profil)</strong></td>
    <td>Hızlanma ve yavaşlama geçişlerinde Jerk değerini sınırlandırarak ivmeyi yumuşak bir sinüsoidal veya lineer rampayla artıran rezonans önleyici hız profilidir.</td>
  </tr>
  <tr>
    <td><strong>Trapezoidal Hareket Profili</strong></td>
    <td>Sabit ivmeyle hızlanma, sabit çizgisel hızda ilerleme ve sabit ivmeyle frenleme olmak üzere 3 belirgin fazdan oluşan klasik hareket profilidir.</td>
  </tr>
  <tr>
    <td><strong>Çevrim Süresi (Cycle Time - t<sub>top</sub>) [s]</strong></td>
    <td>Mekanizmanın başlangıç konumundan hedef konuma ulaşıp durmasına kadar geçen toplam aktif hareket süresidir.</td>
  </tr>
  <tr>
    <td><strong>Overshoot (Konum Aşımı)</strong></td>
    <td>Hedef koordinata frenleme anında mekanik esneme veya yüksek kontrol kazançları sebebiyle arabanın hedef noktayı geçip geri toparlanması hatasıdır.</td>
  </tr>
  <tr>
    <td><strong>Yerleşim Süresi (Settling Time) [ms]</strong></td>
    <td>Arabanın hedef pozisyona ilk ulaştığı andan itibaren kabul edilebilir hata bandı (± tolerans) içinde tamamen kararlı duruşa geçmesi için gereken ek süredir.</td>
  </tr>
  <tr>
    <td><strong>Tepe İvmesi a<sub>maks</sub> [m/s²]</strong></td>
    <td>Hareket profili boyunca motorun ve mekanik aksamın maruz kaldığı en yüksek ivme değeridir; pik dinamik torku doğrudan belirler.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Kısa mesafelerde sabit hız fazı oluşmaz; sistem <strong>Üçgen Profil</strong> ile sürülür.</li>
  <li>Klasik <strong>Trapezoidal Profil</strong> ivmelenme köşelerinde sonsuz Jerk üreterek şaseyi ve aktarma organlarını vuruntuyla sarsar.</li>
  <li>Hassas servo eksenlerde titreşimi ve duruş salınımını sıfırlamak için mutlaka <strong>S-Curve (Jerk Sınırlı)</strong> profil seçilmelidir.</li>
  <li>1/3 kuralına göre tasarlanan trapez profilde tepe hızı ortalama hızın 1,5 katı, tepe ivmesi ise ortalama ivmenin 4,5 katıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Açık ağızlı bir şişede kimyasal sıvı taşıyan yüksek hızlı bir Kartezyen eksen tasarlıyorsun. Hızlanma anında sıvının şişeden dışarı çalkalanıp dökülmesini engellemek için hangi hareket profilini seçmelisin? Neden?</summary>
<div>Kesinlikle <strong>S-Curve (Jerk sınırlı) hareket profili</strong> seçilmelidir. Trapezoidal profilde ivme aniden sıfırdan tepe değerine fırladığında sıvı yüzeyinde ani dalga cephesi (şok darbesi) oluşur ve sıvı dışarı sıçrar. S-Curve profilinde ivme sıfırdan yumuşak bir rampayla yükseldiği için sıvı yüzeyi sakin bir eğimle yükselir, dalgalanma oluşmaz ve çalkantısız transfer sağlanır.</div></details>
<details><summary>Bir alma-bırakma (Pick & Place) ekseninde strok L = 400 mm ve hedef süre 0,8 saniyedir. Trapezoidal profil (1/3 kuralı) uygulandığında motorun çıkması gereken maksimum çizgisel hız kaç m/s'dir?</summary>
<div>Formül: <code>v<sub>maks</sub> = 1,5 · ( L / t<sub>top</sub> )</code>. Değerleri yerine koyarsak: <code>v<sub>maks</sub> = 1,5 × ( 400 / 0,8 ) = 1,5 × 500 = 750 mm/s = 0,75 m/s</code>. Motor ve aktarma organı bu 0,75 m/s hızı güvenle sağlayacak şekilde boyutlandırılmalıdır.</div></details>
<details><summary>Bir teknisyen motorun hedef pozisyonda daha çabuk durması için servo sürücüdeki S-Curve filtresini kapatıp sert trapez profile geçiyor. Çevrim süresi 0,05 saniye kısalıyor fakat makine gövdesinde şiddetli gıcırtı ve duruşta hedefi kaçırma başlıyor. Neden?</summary>
<div>S-Curve kapatıldığında sonsuz Jerk ortaya çıkar. Bu ani ivme darbesi triger kayış kordlarını ve kaplini bir yay gibi büker. Motor hedef enkoder palsine ulaştığında durur fakat araba kayışın elastik enerjisiyle hedef noktanın ötesine fırlar (overshoot). Eksen durana kadar mekanik titreşim sönümlenemediğinden gerçek "yerleşim süresi (settling time)" kısalmak yerine uzamış olur.</div></details>
</div>
`);

KITAP.bolum('m6', '6-2', `
<p class="giris">Motor seçiminde yapılan en ölümcül hata; sadece arabanın kütlesini yerçekimi ivmesiyle çarpıp (F = m·g) statik sürtünmeyi ekleyerek tork hesaplamaktır. Dinamik bir otomasyon makinesinde motor torkunun %70 ila %90'ı sadece <strong>eylemsizlik momentini (ataleti) hızlandırmaya ve yavaşlatmaya</strong> harcanır. Bu bölümde dönel ve doğrusal kütlelerin atalet analizini, redüktör yansımasını ve RMS efektif tork hesabını inceliyoruz.</p>

<h2>Temel Atalet Formülleri (Kütlesel Eylemsizlik Momenti)</h2>

<div class="iki-sutun">
  <div>
    <h4>1. Dönen Silindirik Elemanlar (Mil, Kasnak, Pinyon)</h4>
    <p>Kendi merkezi etrafında dönen dolu silindirin ataleti:</p>
    <div class="formul">
    J = ( 1 / 2 ) · m · r² = ( 1 / 8 ) · m · D² &nbsp;&nbsp;[kg·m²]
    </div>
    <small>m: Kütle [kg], r: Yarıçap [m], D: Dış çap [m]</small>
    <p><strong>Önemli Çıkarım:</strong> Çap iki katına çıkarsa atalet <strong>16 kat (D⁴)</strong> artar! Kasnak veya mil çapını büyütürken aşırı dikkatli olunmalıdır.</p>
  </div>
  <div>
    <h4>2. Doğrusal Hareket Eden Kütle (Araba + Yük)</h4>
    <p>Vidalı mil veya pinyonla doğrusal ötelenen kütlenin motora yansıyan ataleti:</p>
    <div class="formul">
    J<sub>doğrusal</sub> = m · [ P<sub>h</sub> / ( 2 · π ) ]² &nbsp;&nbsp;[kg·m²]
    </div>
    <small>m: Doğrusal kütle [kg], P<sub>h</sub>: Vida hatvesi veya kasnak çevre adımı [m/tur]</small>
  </div>
</div>

<h2>Redüktör Çevrim Oranının (i) Atalet Üzerindeki Sihirli Etkisi</h2>
<p>Mekanik çıkıştaki tüm yük ataletleri (J<sub>yük</sub>), redüktör girişindeki motor miline <strong>çevrim oranının karesiyle (i²) bölünerek</strong> yansır:</p>
<div class="formul">
J<sub>yansıyan</sub> = J<sub>yük</sub> / ( i² · η )
<small>i: Redüktör çevrim oranı (n_giriş / n_çıkış), η: Redüktör mekanik verimi (0,90–0,98)</small>
</div>
<p><em>Örnek: J<sub>yük</sub> = 0,025 kg·m² olan bir döner tablanın önüne i = 10 planet redüktör konulursa, motora yansıyan atalet <code>0,025 / 100 = 0,00025 kg·m²</code> olur! Atalet tam 100 kat küçülür.</em></p>

<h2>Dinamik Tork Bileşenleri Dengesi</h2>
<p>Motor milindeki toplam tork üç farklı çalışma rejimine göre hesaplanır:</p>
<ol>
  <li><strong>Hızlanma Torku (T<sub>acc</sub>):</strong>
    <div class="formul">T<sub>acc</sub> = T<sub>statik</sub> + ( J<sub>toplam</sub> · α ) &nbsp;&nbsp;[Nm]</div>
    <small>J<sub>toplam</sub> = J<sub>motor</sub> + J<sub>redüktör</sub> + J<sub>yansıyan</sub> &nbsp;|&nbsp; α: Açısal ivme [rad/s²] (α = Δω / Δt)</small>
  </li>
  <li><strong>Sabit Hız Torku (T<sub>const</sub>):</strong>
    <div class="formul">T<sub>const</sub> = T<sub>statik</sub> = T<sub>sürtünme</sub> + T<sub>yerçekimi</sub> &nbsp;&nbsp;[Nm]</div>
  </li>
  <li><strong>Yavaşlama (Frenleme) Torku (T<sub>dec</sub>):</strong>
    <div class="formul">T<sub>dec</sub> = T<sub>statik</sub> - ( J<sub>toplam</sub> · α ) &nbsp;&nbsp;[Nm]</div>
  </li>
</ol>

<h2>RMS (Root Mean Square - Efektif) Tork Kontrolü</h2>
<p>Bir motorun yanmaması için çevrim boyunca çektiği termal eşdeğer akımın motorun nominal torkunu (T<sub>nom</sub>) aşmaması şarttır:</p>
<div class="formul">
T<sub>RMS</sub> = √ [ ( T<sub>acc</sub>² · t<sub>acc</sub> + T<sub>const</sub>² · t<sub>const</sub> + T<sub>dec</sub>² · t<sub>dec</sub> ) / t<sub>toplam</sub> ] ≤ T<sub>nom,motor</sub>
</div>
<div class="kutu tehlike"><span class="kb">Motor Boyutlandırmada 2 Temel Kriter</span>
1. <strong>T<sub>acc</sub> &lt; T<sub>maks,motor</sub>:</strong> Hızlanma torku motorun anlık pik tork sınırını kesinlikle geçemez (aşarsa motor anında aşırı akım alarmı verir).<br>
2. <strong>T<sub>RMS</sub> &lt; T<sub>nom,motor</sub>:</strong> Efektif çevrim torku motorun sürekli çalışma nominal torkundan küçük olmalıdır (aşarsa motor 20 dakika sonra aşırı ısınmadan yanar).</div>

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
    <td><strong>Eylemsizlik Momenti J [kg·m²]</strong></td>
    <td>Dönen bir cismin açısal hızındaki değişime (açısal ivmelenmeye) karşı gösterdiği kütlesel dönel direnç ölçüsüdür.</td>
  </tr>
  <tr>
    <td><strong>Açısal İvme α [rad/s²]</strong></td>
    <td>Dönme hızının birim zamandaki değişim oranıdır (α = 2 · π · n / (60 · t)); hızlanma torkunun ana çarpanıdır.</td>
  </tr>
  <tr>
    <td><strong>T<sub>RMS</sub> (Karekök Ortalama Tork)</strong></td>
    <td>Değişken yüklemeli bir çevrim boyunca sargılarda oluşan elektriksel ısı kaybını temsil eden termal eşdeğer sürekli çalışma torkudur.</td>
  </tr>
  <tr>
    <td><strong>Yansıyan Atalet (Reflected Inertia)</strong></td>
    <td>Mekanik aktarma organlarının ve yükün, çevrim oranı karesi (i²) üzerinden motor miline indirgenmiş toplam dinamik atalet değeridir.</td>
  </tr>
  <tr>
    <td><strong>T<sub>pik</sub> / T<sub>maks</sub> [Nm]</strong></td>
    <td>Motorun manyetik doyum ve sargı izolasyonunu tahrip etmeden birkaç saniye boyunca sağlayabileceği maksimum anlık tepe torkudur.</td>
  </tr>
  <tr>
    <td><strong>Mekanik Verim η</strong></td>
    <td>Sürtünme ve elastik kayıplar nedeniyle giriş mekanik gücünün çıkışa faydalı iş olarak aktarılma yüzdesidir (vida, redüktör, kayış).</td>
  </tr>
  <tr>
    <td><strong>Karasal Denge (Inertia Ratio)</strong></td>
    <td>Yansıyan yük ataletinin motorun kendi rotor ataletine oranıdır (J<sub>yük,yansıyan</sub> / J<sub>motor</sub>); kontrol stabilitesini yönetir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Dönen silindirin ataleti çapın dördüncü kuvvetiyle (D⁴) büyür; kasnak ve mil çaplarını gereksiz büyütmek motoru kilitler.</li>
  <li>Redüktör yük ataletini <strong>oranın karesiyle (i²) böler</strong>; atalet eşlemesinde en etkili silahtır.</li>
  <li>Hızlanma anında motor hem sürtünmeyi yenmek hem de <code>J · α</code> atalet torkunu üretmek zorundadır.</li>
  <li>Motor seçiminde <strong>T<sub>acc</sub> &lt; T<sub>pik</sub></strong> ve <strong>T<sub>RMS</sub> &lt; T<sub>nom</sub></strong> kriterlerinin ikisi birden sağlanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Çapı D = 50 mm olan çelik bir transmisyon milinin boyu sabit kalmak şartıyla çapı D = 100 mm'ye çıkarılıyor. Bu milin dönel ataleti (J) kaç kat artar?</summary>
<div>Silindirik cismin ataleti <code>J = (1/8) · m · D²</code> formülüne dayanır. Çap iki katına çıktığında kesit alanı ve dolayısıyla kütle (m) 4 katına çıkar. Formüldeki D² çarpanı da 4 katına çıkacağından toplam atalet: <code>4 × 4 = 16 kat (yani 2⁴ kat) artar!</code> Bu yüzden mil çapını sadece 2 kat büyütmek motorun mili hızlandırmak için 16 kat daha fazla tork basmasını gerektirir.</div></details>
<details><summary>Bir vidalı milli eksende motor hızlanırken hiçbir problem yok, rahatça hızlanıyor. Ancak 1 saat kesintisiz çalıştıktan sonra motor gövdesi 90°C'ye ulaşıp termal aşırı yük alarmıyla duruyor. Hata nerededir?</summary>
<div>Hızlanma torku (T<sub>acc</sub>) motorun tepe torkunun (T<sub>maks</sub>) altındadır; bu yüzden motor anlık hızlanabilmektedir. Ancak çevrimin <strong>T<sub>RMS</sub> (efektif ortalama torku)</strong> motorun sürekli nominal torkundan (T<sub>nom</sub>) daha büyüktür. Motor soğumaya fırsat bulamadan termal sınıra ulaşmış ve yanmamak için kendini korumaya almıştır. Çevrim süresi uzatılmalı, ivme düşürülmeli veya bir boy büyük motor seçilmelidir.</div></details>
<details><summary>Dikey eksende çalışan bir yükü yukarı kaldırırken motorun hissettiği tork ile aşağı indirirken hissettiği tork neden birbirinden çok farklıdır?</summary>
<div>Yukarı kaldırırken yerçekimi torku (T<sub>g</sub>) motora karşı direnç oluşturur: <code>T<sub>kaldirma</sub> = T<sub>acc</sub> + T<sub>surtunme</sub> + T<sub>g</sub></code>. Aşağı inerken ise yerçekimi yükü motoru çevirmeye çalışır: <code>T<sub>indirme</sub> = T<sub>acc</sub> + T<sub>surtunme</sub> - T<sub>g</sub></code>. Yerçekimi kuvveti motor torkundan büyükse motor jeneratör moduna geçer (rejenerasyon) ve sürücüde frenleme direnci gerektirir.</div></details>
</div>
`);

KITAP.bolum('m6', '6-3', `
<p class="giris">Fabrika ortamındaki elektrik enerjisinin %65'inden fazlasını 3 fazlı sincap kafesli AC asenkron (indüksiyon) motorlar tüketir. Sağlamlıkları, ucuzlukları, kömürsüz ve fırçasız yapılarıyla konveyörlerin, pompaların, fanların ve mikserlerin tartışmasız lideridir. Ancak asenkron motorları doğrudan şebekeye (DOL) bağlamak yüksek demeraj akımlarına yol açar; hız ve tork kontrolü için <strong>Frekans İnvertörleri (VFD)</strong> kullanılır.</p>

<h2>3 Fazlı Asenkron Motor Çalışma Prensibi ve Kayma (Slip)</h2>
<p>Stator sargılarına 3 fazlı alternatif akım (50 Hz) uygulandığında statorda döner bir manyetik alan (n<sub>s</sub>) oluşur. Döner alanın hızı:</p>
<div class="formul">
n<sub>s</sub> = ( 120 · f ) / p &nbsp;&nbsp;[d/dak]
<small>f: Şebeke frekansı [Hz] (Türkiye'de 50 Hz), p: Kutup sayısı (2, 4, 6, 8)</small>
</div>
<ul>
  <li><strong>2 Kutuplu Motor (p=2):</strong> n<sub>s</sub> = 3000 d/dak (Rotor hızı ≈ 2850 d/dak)</li>
  <li><strong>4 Kutuplu Motor (p=4 - En Yaygın):</strong> n<sub>s</sub> = 1500 d/dak (Rotor hızı ≈ 1420–1450 d/dak)</li>
  <li><strong>6 Kutuplu Motor (p=6):</strong> n<sub>s</sub> = 1000 d/dak (Rotor hızı ≈ 940–960 d/dak)</li>
</ul>

<p><strong>Kayma (Slip - s):</strong> Rotor döner manyetik alanın tam hızına asla ulaşamaz. Eğer ulaşsaydı rotor çubukları manyetik alanı kesemez, indüklenen akım ve tork sıfıra inerdi. Gerçek rotor hızı (n) ile senkron hız arasındaki bu bağıl farka <strong>kayma</strong> denir:</p>
<div class="formul">
s = ( n<sub>s</sub> - n ) / n<sub>s</sub> &nbsp;&nbsp; (Tipik endüstriyel motorlarda s = %2 … %6)
</div>

<h2>Enerji Verimlilik Sınıfları (IEC 60034-30-1)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Verim Sınıfı</th>
    <th>Açıklama</th>
    <th>Kayıp Oranı</th>
    <th>Yasal Zorunluluk (AB ve Türkiye)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>IE1</strong></td>
    <td>Standart Verim</td>
    <td>Yüksek Kayıp</td>
    <td>Üretimi ve satışı yasaklanmıştır (Eski motorlar).</td>
  </tr>
  <tr>
    <td><strong>IE2</strong></td>
    <td>Yüksek Verim</td>
    <td>Orta</td>
    <td>Yalnızca frekans konvertörüyle (VFD) kullanımda izin verilir.</td>
  </tr>
  <tr>
    <td><strong>IE3</strong></td>
    <td><strong>Premium Verim (Endüstri Standardı)</strong></td>
    <td>Düşük (%15–20 enerji tasarrufu)</td>
    <td><strong>0,75 kW – 1000 kW arası tüm şebekeye bağlı motorlarda zorunludur!</strong></td>
  </tr>
  <tr>
    <td><strong>IE4</strong></td>
    <td>Süper Premium Verim</td>
    <td>Çok Düşük</td>
    <td>Yüksek çalışma saatli büyük tesislerde amortismanı çok hızlıdır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Frekans İnvertörü (VFD) Kontrol Modları: Skaler vs. Vektör</h2>
<div class="iki-sutun">
  <div>
    <h4>Skaler Kontrol (V / f = Sabit)</h4>
    <p>Frekans düştükçe gerilim de aynı oranda düşürülür; manyetik akı sabit tutulmaya çalışılır.</p>
    <ul>
      <li><strong>Artısı:</strong> Çok basit, motor parametresi tanıtımı gerektirmez, tek sürücüye paralel birden fazla motor bağlanabilir.</li>
      <li><strong>Eksisi:</strong> Düşük frekanslarda (&lt; 10–15 Hz) motorun torku tamamen çöker; motor mili elle bile durdurulabilir.</li>
      <li><strong>Kullanım:</strong> Fanlar, su pompaları, basit konveyörler.</li>
    </ul>
  </div>
  <div>
    <h4>Vektör Kontrol (FOC - Field Oriented Control)</h4>
    <p>Stator akımını matematiksel olarak iki bileşene ayırır: Manyetik Akı Akımı (I<sub>d</sub>) ve Tork Akımı (I<sub>q</sub>).</p>
    <ul>
      <li><strong>Artısı:</strong> <strong>0,5 Hz gibi sıfıra yakın hızlarda bile nominal torkun %150–200'ünü sağlar!</strong> Yük değişse bile devir sapması yaşanmaz.</li>
      <li><strong>Eksisi:</strong> İlk devreye almada motorun plaka değerleri girilip sürücüye motor tanıtımı (Auto-Tuning) yapılmalıdır.</li>
      <li><strong>Kullanım:</strong> Ağır konveyörler, vinçler, ekstruderler, mikserler.</li>
    </ul>
  </div>
</div>

<h2>Düşük Devirde Motor Yanması ve Cebri Fan (Forced Cooling)</h2>
<div class="kutu tehlike"><span class="kb">20 Hz Altında Çalışan Standart Asenkron Motor Neden Yanar?</span>
Standart bir asenkron motorun arkasındaki soğutma pervanesi doğrudan rotor miline bağlıdır. Motor 50 Hz'de (1450 d/dak) dönerken pervane gövdeye devasa hava üfler. Ancak frekans invertörü ile motor devrini 15 Hz'e (435 d/dak) düşürdüğünüzde, fanın üflediği hava debisi hızın karesiyle düşerek <strong>neredeyse sıfıra iner</strong>! Motor tork basmaya devam ettiği için sargılar içeriden hızla ısınır ve 15 dakika içinde sargı izolasyonu eriyerek motor yanar!<br>
<strong>Altın Kural:</strong> Eğer bir asenkron motor sürekli olarak <strong>25–30 Hz'in altında</strong> çalıştırılacaksa, arkasındaki mekanik plastik pervane sökülmeli ve yerine 220V/380V ile bağımsız sabit devirde dönen <strong>Cebri Soğutma Fanı (Forced Cooling Unit)</strong> takılmalıdır!</div>

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
    <td><strong>Asenkron (İndüksiyon) Motor</strong></td>
    <td>Rotorunda sargı yerine kısa devre edilmiş alüminyum/bakır çubuklar (sincap kafes) bulunan, torkunu stator döner alanı ile rotor arasındaki hız farkıyla (kayma) üreten AC motordur.</td>
  </tr>
  <tr>
    <td><strong>Senkron Hız n<sub>s</sub> [d/dak]</strong></td>
    <td>Şebeke frekansı ve kutup sayısı tarafından belirlenen stator döner manyetik alanının teorik dönüş hızıdır (120·f / p).</td>
  </tr>
  <tr>
    <td><strong>Kayma (Slip - s)</strong></td>
    <td>Rotorun mekanik dönme hızı ile stator döner alan hızı arasındaki bağıl farkın senkron hıza oranıdır; asenkron motorun tork üretmesi için zorunludur.</td>
  </tr>
  <tr>
    <td><strong>IE3 Verim Sınıfı</strong></td>
    <td>IEC 60034-30-1 standardında tanımlanan, yüksek kaliteli silisli saç ve kalın bakır sargılarla kayıpları minimize edilmiş Premium verimlilik standardıdır.</td>
  </tr>
  <tr>
    <td><strong>VFD (Değişken Frekanslı Sürücü)</strong></td>
    <td>Şebekedeki 50 Hz AC akımı önce DC baraya doğrultan, ardından PWM modülasyonuyla frekansı ve gerilimi değiştirilebilir AC üreten elektronik hız kontrol cihazıdır.</td>
  </tr>
  <tr>
    <td><strong>Vektör Kontrol (FOC)</strong></td>
    <td>Motor akımını akı ve tork vektörlerine ayrıştırarak asenkron motoru bir DC motor dinamizminde ve sıfır devirde yüksek torkla sürebilen kontrol algoritmasıdır.</td>
  </tr>
  <tr>
    <td><strong>Cebri Soğutma Fanı</strong></td>
    <td>Motor mil devrinden bağımsız çalışan, harici elektrik beslemeli sabit debili soğutma fanıdır; düşük frekanslarda motorun aşırı ısınmasını engeller.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>4 kutuplu standart asenkron motor 50 Hz şebekede yaklaşık <strong>1420–1450 d/dak</strong> döner; aradaki fark kaymadır (slip).</li>
  <li>Yasal standart gereği endüstriyel tesislerde en az <strong>IE3 Premium Verim</strong> sınıfı motorlar kullanılmalıdır.</li>
  <li>Basit fan ve pompalarda <strong>Skaler (V/f)</strong> kontrol yeterlidir; düşük hızda yüksek tork gerektiren konveyörlerde <strong>Vektör (FOC)</strong> kontrol şarttır.</li>
  <li>İnvertörle sürülen ve 25 Hz altında çalışan motorlara mutlaka <strong>harici cebri soğutma fanı</strong> takılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Ağır bir palet konveyöründe 2,2 kW 4 kutuplu asenkron motor VFD ile sürülüyor. Hız 5 Hz'e (150 d/dak) düşürüldüğünde palet konveyör üzerinde duruyor ve motor inleyerek dönemiyor. Sürücü skaler (V/f) modda. Çözüm nedir?</summary>
<div>Skaler kontrolde frekans 5 Hz'e indiğinde gerilim de aynı oranda düşer ve sargı direnci tork üretimini neredeyse sıfırlar. Çözüm: Sürücü parametrelerinden kontrol modunu <strong>Vektör Kontrole (Sensörsüz Vektör - SVC / FOC)</strong> almak ve sürücüye motorun etiket değerlerini girip "Auto-Tuning" yaptırmaktır. Vektör kontrol 5 Hz'de nominal torkun %150'sini basarak konveyörü rahatça kaldırır.</div></details>
<details><summary>Etiketinde "230V Δ / 400V Y" yazan bir asenkron motoru Türkiye'deki standart 400V 3 fazlı şebekeye bağlarken klemens kutusunu üçgen (Δ) bağlarsan ne olur?</summary>
<div>Etiketteki 230V değeri motor bobinlerinin sargı başına dayanabileceği maksimum gerilimdir. 400V şebekede motor <strong>Yıldız (Y)</strong> bağlanmalıdır (bu durumda her sargı üzerine 230V düşer). Eğer üçgen bağlarsan sargıların üzerine 400V biner; motor saniyeler içinde aşırı akım çeker, sargı vernikleri kavrulur ve motor dumanlar çıkararak yanar!</div></details>
<details><summary>Bir asenkron motorun dönme yönünü değiştirmek için elektrik panosunda ne yapılmalıdır?</summary>
<div>3 fazlı besleme hattındaki herhangi iki fazın (örneğin L1 ile L2 veya R ile S) yeri birbiriyle değiştirilmelidir. İki fazın yer değiştirmesi statordaki döner manyetik alanın yönünü tersine çevirir ve rotor derhal diğer yönde dönmeye başlar. Sürücülü sistemlerde bu işlem sürücünün dijital girişinden tek bir kontakla yapılır.</div></details>
</div>
`);

KITAP.bolum('m6', '6-4', `
<p class="giris">Step (adım) motorlar; harici bir enkoder geribeslemesine ihtiyaç duymadan, kontrolcüden gelen her bir elektriksel pals sinyaliyle tam olarak belirli bir açısal adım atan dijital tahrik elemanlarıdır. Düşük hızlarda devasa tork üretmeleri, durdukları noktada frenleme yapmaları ve servo sistemlerin yarı maliyetinde olmaları sebebiyle 3D yazıcılar, etiketleme kafaları, analiz cihazları ve medikal dispensing ünitelerinin vazgeçilmezidir.</p>

<h2>Step Motor Çalışma Prensibi ve Adım Açısı</h2>
<p>Endüstride en yaygın kullanılan hibrit step motorlar <strong>2 Fazlı ve 1,8° adım açısına</strong> sahiptir:</p>
<div class="formul">
Adım Sayısı / Tur = 360° / 1,8° = <strong>200 Adım / Tur</strong>
</div>
<p>Sürücü motora 200 adet dijital darbe (pals) gönderdiğinde motor mili tam 360° (1 tur) döner. Çıkış hızı pals frekansıyla (Hz) doğrudan orantılıdır:</p>
<div class="formul">
n = ( f<sub>pals</sub> · 60 ) / ( Adım Sayısı × Mikro Adım ) &nbsp;&nbsp;[d/dak]
</div>

<h2>Mikro Adımlama (Microstepping) Teknolojisi</h2>
<p>Tam adım modunda çalışan bir step motor her 1,8°'lik adımda dur-kalk yaptığı için düşük devirlerde ciddi bir mekanik titreşim, rezonans ve ses üretir. Modern step sürücüler faz akımlarını dijital sinüs/kosinüs dalgaları şeklinde oransal bölerek <strong>Mikro Adımlama (1/2, 1/4, 1/8, 1/16, 1/32…)</strong> uygular:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mikro Adım Oranı</th>
    <th>Adım Başına Açı</th>
    <th>Tur Başına Pals</th>
    <th>Titreşim ve Rezonans</th>
    <th>Pozisyonel Çözünürlük</th>
    <th>Tutma Torku Oranı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Tam Adım (1/1)</strong></td>
    <td>1,8°</td>
    <td>200 pals</td>
    <td>Aşırı Yüksek (Vuruntulu)</td>
    <td>Kaba</td>
    <td>%100 (Referans)</td>
  </tr>
  <tr>
    <td><strong>Yarım Adım (1/2)</strong></td>
    <td>0,9°</td>
    <td>400 pals</td>
    <td>Yüksek</td>
    <td>Orta</td>
    <td>%100</td>
  </tr>
  <tr>
    <td><strong>1/8 Mikro Adım</strong></td>
    <td>0,225°</td>
    <td>1600 pals</td>
    <td>Düşük (Sessizleşir)</td>
    <td>İyi</td>
    <td>~%90</td>
  </tr>
  <tr>
    <td><strong>1/16 Mikro Adım (Standart)</strong></td>
    <td><strong>0,1125°</strong></td>
    <td><strong>3200 pals</strong></td>
    <td><strong>Çok Düşük (Pürüzsüz)</strong></td>
    <td><strong>Mükemmel</strong></td>
    <td><strong>~%80 (Optimum Denge)</strong></td>
  </tr>
  <tr>
    <td><strong>1/64+ Mikro Adım</strong></td>
    <td>0,028°</td>
    <td>12.800 pals</td>
    <td>Fısıltı seviyesi</td>
    <td>Aşırı Yüksek</td>
    <td>Düşük (Artık tork kayıpları başlar)</td>
  </tr>
</tbody>
</table>
</div>

<h2>Tork-Hız Eğrisi ve Yüksek Devirde Tork Çöküşü</h2>
<p>Step motorların torku hız arttıkça sabit kalmaz; dramatik bir şekilde düşer:</p>
<div class="formul">
I = V / √ ( R² + ( 2 · π · f · L )² )
</div>
<ul>
  <li>Motor hızlandıkça faz frekansı (f) artar. Sargıların endüktif reaktansı (<code>X<sub>L</sub> = 2·π·f·L</code>) yükselir ve sargılara akım basmak zorlaşır.</li>
  <li>Aynı zamanda dönen rotor sargılarda ters bir gerilim (<strong>Back-EMF</strong>) üretir. Besleme voltajı ile ters EMF arasındaki fark daraldığı için motor sargılarına nominal akım akamaz.</li>
  <li><strong>Mühendislik Sonucu:</strong> Bir step motor 100 d/dak hızda 4 Nm tork üretirken, 1000 d/dak hıza çıktığında torku <strong>0,5 Nm'ye kadar çökebilir!</strong> Step motorlar tipik olarak <strong>0 – 600 d/dak</strong> arasında kullanılmalıdır.</li>
</ul>

<h2>Açık Çevrim vs. Kapalı Çevrim (Closed-Loop Step / Easy Servo)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Özellik</th>
    <th>Klasik Açık Çevrim Step</th>
    <th>Kapalı Çevrim Step (StepSERVO / Easy Servo)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Geri Besleme</strong></td>
    <td>Yok (Enkodersiz, kör çalışma)</td>
    <td><strong>Var (Motor arkasında 1000–4000 pals optik/manyetik enkoder)</strong></td>
  </tr>
  <tr>
    <td><strong>Adım Kaçırma (Stall)</strong></td>
    <td><strong>Kaçırabilir!</strong> Yük anlık zorlanırsa motor kaçırır, sürücü bunu fark edemez ve parça çöpe gider.</td>
    <td><strong>KESİNLİKLE ADIM KAÇIRMAZ!</strong> Faz akımı anında artırılır; hedefe ulaşılamazsa sürücü PLC'ye anında ALARM verir.</td>
  </tr>
  <tr>
    <td><strong>Isınma ve Enerji Tüketimi</strong></td>
    <td>Motor dursa bile sargılardan sürekli tam akım geçer; <strong>motor el yakacak kadar çok ısınır (70–80°C)</strong>.</td>
    <td>Yük yokken akım kısılır; motor tork ihtiyacına göre akım çeker. <strong>Motor daima ılık/soğuk kalır.</strong></td>
  </tr>
  <tr>
    <td><strong>Gürültü ve Rezonans</strong></td>
    <td>Kritik rezonans hızlarında titrer.</td>
    <td>Vektörel akım kontrolüyle servo kadar pürüzsüz ve sessizdir.</td>
  </tr>
  <tr>
    <td><strong>Maliyet Seviyesi</strong></td>
    <td>En Ucuz (1,0×)</td>
    <td>Ekonomik (1,5×) — Gerçek servonun yarı fiyatına!</td>
  </tr>
</tbody>
</table>
</div>

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
    <td><strong>Adım Açısı (Step Angle)</strong></td>
    <td>Motorun tek bir tam elektriksel pals aldığında rotor milinin döndüğü sabit mekanik açıdır (standart hibrit motorlarda 1,8°).</td>
  </tr>
  <tr>
    <td><strong>Mikro Adımlama (Microstepping)</strong></td>
    <td>Sürücünün motor faz sargılarına uyguladığı akımı sinüsoidal basamaklarla bölerek adım açısını küçülten ve titreşimi yok eden elektronik sürme tekniğidir.</td>
  </tr>
  <tr>
    <td><strong>Tutma Torku (Holding Torque) [Nm]</strong></td>
    <td>Motor enerjili halde dururken ve sıfır devirdeyken milin dışarıdan çevrilmeye karşı koyabildiği maksimum statik torktur.</td>
  </tr>
  <tr>
    <td><strong>Pull-Out Torku [Nm]</strong></td>
    <td>Motor belirli bir dönme devrinde çalışırken adım kaçırmadan sağlayabileceği maksimum dinamik çalışma torkudur.</td>
  </tr>
  <tr>
    <td><strong>Adım Kaçırma (Stall)</strong></td>
    <td>Mekanik direnç torkunun motorun pull-out torkunu aşması sonucu rotorun döner manyetik alanın gerisinde kalarak senkronizasyonu kaybetmesi hatasıdır.</td>
  </tr>
  <tr>
    <td><strong>Kapalı Çevrim Step (Closed-Loop)</strong></td>
    <td>Arkasındaki enkoder sayesinde rotor konumunu mikro saniyede takip eden, yük arttığında akımı artıran ve asla konum kaçırmayan hibrit step sistemidir.</td>
  </tr>
  <tr>
    <td><strong>Arka EMF (Back-EMF) [V]</strong></td>
    <td>Rotor mıknatıslarının yüksek hızda dönmesiyle stator sargılarında besleme gerilimine zıt yönde indüklenen ve yüksek devirde torku çökerten ters voltajdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Standart step motorlar tur başına <strong>200 tam adım (1,8°)</strong> atar.</li>
  <li>Titreşimi ve rezonansı yok etmek için sürücüler <strong>1/16 mikro adım (3200 pals/tur)</strong> modunda çalıştırılmalıdır.</li>
  <li>Step motorlar düşük devirlerde (0–300 d/dak) çok güçlüdür; ancak yüksek devirlerde endüktans ve ters EMF yüzünden torkları hızla çöker.</li>
  <li>Kritik otomasyon makinelerinde adım kaçırma riskini ve aşırı motor ısınmasını sıfırlamak için <strong>Kapalı Çevrim Step Motor (Closed-Loop)</strong> seçilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir 3D yazıcıda baskı hızı 40 mm/s iken mükemmel baskı alınıyor; ancak hız 120 mm/s'ye çıkarıldığında baskının ortasında tüm model X ekseninde 5 mm yana kayıyor. Hatanın fiziksel kökeni nedir?</summary>
<div>Step motorun tork-hız eğrisindeki çöküştür. Hız 120 mm/s'ye çıktığında motor devri 800–1000 d/dak seviyesine fırlar. Bu devirde step motorun torku nominalin %20'sine düşer. Kafa yön değiştirirken oluşan ani atalet kuvveti motorun kalan zayıf torkunu aşar; motor birkaç pals kaçırır (stall). Açık çevrim sistem bunu fark edemediği için sonraki tüm katmanları 5 mm kayık basar. Çözüm: İvmeyi düşürmek, besleme voltajını 24V'tan 48V'a çıkarmak veya <strong>kapalı çevrim step motora</strong> geçmektir.</div></details>
<details><summary>Neden bir step motor sürücüsünün besleme voltajı 12V yerine 36V veya 48V DC seçildiğinde motorun yüksek hız torku belirgin şekilde artar?</summary>
<div>Akımın sargı endüktansını aşarak yükselme hızı gerilimle doğrudan orantılıdır (<code>di/dt = V / L</code>). Besleme voltajı 48V olduğunda, sargılara nominal akım 12V'a göre 4 kat daha hızlı dolar ve yüksek devirde üretilen ters EMF voltajı rahatça yenilir. Bu sayede motor yüksek hızlarda torkunu çok daha uzun süre korur.</div></details>
<details><summary>Bir kapalı çevrim step (Closed-Loop) motor ile gerçek bir fırçasız AC servo motor arasındaki temel kullanım farkı nedir?</summary>
<div>Kapalı çevrim step motorlar <strong>düşük devirlerde (&lt; 800 d/dak)</strong> aynı boyuttaki bir servoya göre 2-3 kat daha yüksek tork üretir ve duruş anında sıfır salınımla taş gibi kilitlenir; redüktör gerektirmez ve çok ekonomiktir. Ancak devir 1500–3000 d/dak'ya çıktığında tork üretemez. Yüksek devir, dinamik hızlanma ve 1000 d/dak üzeri sürekli güç gerekiyorsa <strong>AC servo motor</strong> şarttır.</div></details>
</div>
`);
