// MODÜL 6 — Tahrik: Motorlar, Pnömatik, Vakum (Bölüm 6.5 – 6.8: Servo Motorlar, Boyutlandırma, Şartlandırıcılar ve Pnömatik Silindirler)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m6', '6-5', `
<p class="giris">Fırçasız AC Servo Motorlar (PMSM); mikron seviyesinde pozisyonlama doğruluğu, milisaniyeler mertebesinde tepki süresi ve anma hızının sonuna kadar sabit tork sağlama yetenekleriyle modern CNC makinelerinin ve çok eksenli endüstriyel robotların kalbidir. Bir servo sistemi sıradan motordan ayıran şey; yüksek enerjili Neodimyum mıknatıslarla donatılmış hafif rotoru, milyonlarca darbeli mutlak enkoderi ve kaskat kontrol döngüleridir.</p>

<h2>Fırçasız AC Servo Motor Mimarisi (Kalıcı Mıknatıslı Senkron Motor - PMSM)</h2>
<p>Modern endüstriyel servolarda rotor, yüksek manyetik akı yoğunluğuna sahip <strong>Neodimyum-Demir-Bor (NdFeB)</strong> kalıcı mıknatıslarla kaplıdır. Stator sargılarına sürücü tarafından uygulanan 3 fazlı sinüsoidal akım, rotor mıknatıslarıyla senkron bir çekim alanı oluşturur:</p>
<ul>
  <li>Rotor manyetik alanını kendi mıknatısından aldığı için rotorda indüksiyon akımı ve rotor bakır kaybı (I²R ısısı) oluşmaz. Motor son derece serin ve yüksek verimlidir.</li>
  <li>Rotor çapı çok küçüktür; bu sayede <strong>eylemsizlik momenti (J<sub>motor</sub>)</strong> standart asenkron motorun 5'te biri seviyesindedir. Motor 0'dan 3000 d/dak hıza <strong>10–20 milisaniyede</strong> çıkabilir!</li>
</ul>

<h2>Enkoder Teknolojileri: Artımlı (İnkremental) vs. Mutlak (Absolute)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Enkoder Türü</th>
    <th>Pozisyon Bilgisi Prensibi</th>
    <th>Elektrik Kesildiğinde</th>
    <th>Homing (Sıfırlama) İhtiyacı</th>
    <th>Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Artımlı (Incremental - A, B, Z)</strong></td>
    <td>Dönen cam diskteki çizgilerin optik sayılması (Pals sayımı).</td>
    <td><strong>Tüm pozisyon hafızası silinir!</strong></td>
    <td><strong>ZORUNLU:</strong> Makine her açıldığında referans sensörüne (Home switch) gidip sıfırlanmalıdır.</td>
    <td>Düşük bütçeli bağımsız eksenler, konveyörler, hız izleme.</td>
  </tr>
  <tr>
    <td><strong>Single-Turn Mutlak (Absolute)</strong></td>
    <td>Her açısal konum için tekil bir dijital kod (Gray code).</td>
    <td>360° içindeki açısal konum korunur; tur sayısı unutulur.</td>
    <td>Tur aşımı olan uzun vidalı millerde homing gerekir.</td>
    <td>Döner tablalar, 360° sınırlı mekanik kollar.</td>
  </tr>
  <tr>
    <td><strong>Multi-Turn Mutlak (Pilli veya Manyetik Mekanik)</strong></td>
    <td>Hem 360° içindeki açıyı hem de <strong>kaç tur döndüğünü (±4096 tur)</strong> sürekli kaydeder.</td>
    <td><strong>Pozisyon ASLA KAYBOLMAZ!</strong> Makine kapalıyken elle eksen itilse bile açılışta güncel konumu bilir.</td>
    <td><strong>SIFIR HOMING!</strong> Makine açıldığı an kaldığı yerden mikro saniyede çalışmaya başlar.</td>
    <td><strong>Endüstriyel Robotlar, Çok Eksenli CNC'ler, Otomotiv Hatları.</strong> Günümüzün mutlak standardıdır (23-bit = tur başına 8.388.608 pals!).</td>
  </tr>
</tbody>
</table>
</div>

<h2>3 Kademeli Kaskat Kontrol Döngüsü (Cascade Loop)</h2>
<p>Servo sürücü, iç içe geçmiş 3 bağımsız kapalı çevrim geri besleme döngüsüyle motoru milisaniyelik hassasiyetle kontrol eder:</p>
<ol>
  <li><strong>Akım / Tork Döngüsü (En Hızlı - ~10–20 kHz):</strong> Stator sargı akımlarını motor torkuna göre FOC (Field Oriented Control) ile yönetir. Güncelleme süresi: ~50–100 µs.</li>
  <li><strong>Hız Döngüsü (Orta - ~2–4 kHz):</strong> Enkoderden gelen hız bilgisiyle hedef hız profilini kıyaslar; hız sapmasını düzeltmek için tork döngüsüne referans akım gönderir (PI kontrol).</li>
  <li><strong>Konum Döngüsü (En Dış - ~1 kHz):</strong> Hedef pals koordinatı ile anlık enkoder pozisyonunu kıyaslar; aradaki hatayı kapatmak için hız döngüsüne hız komutu basar (P kontrol + Feed-Forward).</li>
</ol>

<h2>Tork-Hız Eğrisi: Sürekli vs. Aralıklı Çalışma Bölgesi</h2>
<p>Servo motorların karakteristik eğrisinde iki kritik alan bulunur:</p>
<ul>
  <li><strong>Sürekli Çalışma Bölgesi (Continuous Duty Zone):</strong> Motorun aşırı ısınmadan 7/24 kesintisiz çalışabileceği nominal tork (T<sub>nom</sub>) sınırıdır (Genelde 0'dan 3000 d/dak hıza kadar tork dümdüz sabittir!).</li>
  <li><strong>Aralıklı Çalışma Bölgesi (Intermittent / Peak Zone):</strong> Hızlanma ve yavaşlama anlarında motorun birkaç saniye boyunca nominal torkunun <strong>%300 ila %350'sine (3–3,5 katı T<sub>pik</sub>)</strong> kadar çıkabildiği dinamik ivmelenme bölgesidir.</li>
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
    <td><strong>PMSM Servo Motor</strong></td>
    <td>Rotorunda Neodimyum kalıcı mıknatıslar barındıran, statoru 3 fazlı sinüsoidal akımla beslenen yüksek dinamizmli senkron servo motordur.</td>
  </tr>
  <tr>
    <td><strong>Multi-Turn Mutlak Enkoder</strong></td>
    <td>Enerji kesilse dahi hem 360° içindeki hassas açıyı (23-bit) hem de toplam tur sayısını dahili batarya veya mekanik dişli takımıyla hafızasında tutan optik/manyetik konum sensörüdür.</td>
  </tr>
  <tr>
    <td><strong>Kaskat Kontrol (Cascade Loop)</strong></td>
    <td>Tork (akım), hız ve konum kontrol döngülerinin farklı örnekleme frekanslarında iç içe hiyerarşik çalıştığı kapalı çevrim kontrol mimarisidir.</td>
  </tr>
  <tr>
    <td><strong>Feed-Forward (İleri Besleme)</strong></td>
    <td>Hata oluşmasını beklemeden, hedef hız ve ivme komutuna orantılı bir tork/hız bileşenini önceden sürücü çıkışına ekleyerek takip hatasını sıfıra indiren kontrol parametresidir.</td>
  </tr>
  <tr>
    <td><strong>T<sub>pik</sub> / T<sub>maks</sub> (Tepe Torku) [Nm]</strong></td>
    <td>Servo motorun ivmelenme ve ani frenleme esnasında birkaç saniyeyi geçmemek kaydıyla üretebildiği anma torkunun 3 ila 3,5 katı büyüklüğündeki tepe torkudur.</td>
  </tr>
  <tr>
    <td><strong>Homing (Referans Alma)</strong></td>
    <td>Artımlı enkoderli sistemlerde makinenin açılışta mekanik bir sınır sensörüne (limit switch) dokunarak yazılımsal sıfır noktasını bulması işlemidir.</td>
  </tr>
  <tr>
    <td><strong>DC Bara (DC Bus) [V]</strong></td>
    <td>Servo sürücünün şebeke AC gerilimini doğrultup kondansatörlerde depoladığı ve frenleme enerjisini absorbe eden yüksek voltajlı iç doğru akım hattıdır (tek fazda ~320V, 3 fazda ~560V).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Fırçasız AC servo motorlar düşük rotor ataletleri sayesinde <strong>10–20 ms içinde 3000 d/dak</strong> hıza ulaşabilir.</li>
  <li>Endüstriyel robot ve CNC tezgahlarında referans arama (homing) mecburiyetini ortadan kaldıran <strong>Multi-Turn Mutlak Enkoder</strong> standarttır.</li>
  <li>Servo sürücüler Akım (10 kHz), Hız (3 kHz) ve Konum (1 kHz) olmak üzere <strong>3 kademeli kaskat döngüyle</strong> sürülür.</li>
  <li>Servo motorlar hızlanma anında nominal torkunun <strong>3 katından fazla pik tork</strong> üretebilir; ancak ortalama yük (T<sub>RMS</sub>) nominal sınırın altında kalmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Çok eksenli karmaşık bir montaj hücresinde artımlı (incremental) enkoderli servo motorlar yerine neden multi-turn mutlak (absolute) enkoderli servo motorlar tercih edilir?</summary>
<div>Artımlı enkoderli sistemlerde fabrikanın ana şalteri kapatılıp açıldığında veya acil duruş yapıldığında tüm eksenler konumunu unutur. Makinenin yeniden başlayabilmesi için her eksenin sırayla mekanik sensörlere gidip "Homing" yapması gerekir; bu süreçte eksenler birbirine çarpabilir ve yarım saat üretim kaybı yaşanır. Multi-turn mutlak enkoder elektrik kesikken elle araba itilse bile yeni konumu bilir; makine açıldığı an 1 milisaniyede kaldığı yerden üretime devam eder.</div></details>
<details><summary>Bir servo eksende motor hedef pozisyona çok yavaş ve tembel yaklaşıyor; PID kazançlarını açtığında ise motor sertleşip tiz bir sesle ötmeye başlıyor. Bu duruş gecikmesini titreşime sokmadan çözmenin yolu nedir?</summary>
<div>Oransal konum kazancını (Kp) aşırı artırmak sistemi rezonansa sokar. Doğru çözüm sürücüdeki <strong>İleri Besleme (Velocity / Acceleration Feed-Forward)</strong> parametrelerini aktif etmektir. Feed-Forward, hata oluştuktan sonra geribeslemeyle düzeltmek yerine, hareket profilinin gerektirdiği hız ve torku henüz hareket başlamadan motor sargılarına basar. Böylece takip hatası ve gecikme titreşimsiz olarak sıfıra indirilir.</div></details>
<details><summary>Servo motor dikey bir Z ekseninde ağır bir kafayı hızla aşağı indirip aniden durdurduğunda sürücü ekranında "Overvoltage (Aşırı Gerilim / DC Bus Overvoltage)" alarmı çıkıyor. Fiziksel sebebi nedir ve pano içine ne eklenmelidir?</summary>
<div>Aşağı inişte yerçekimi kütleyi çeker; ani frenlemede yükün devasa kinetik enerjisi motor milini döndürerek servo motoru bir jeneratöre çevirir. Üretilen bu elektrik akımı sürücünün DC barasına geri basılır (rejenerasyon). Bara kondansatörleri aşırı dolarak gerilim kritik sınırı (örneğin 400V şebekede 750V DC) aşar. Sürücüyü patlamaktan korumak için sürücünün DC bara klemenslerine bu fazla kinetik enerjiyi ısıya dönüştüren harici bir <strong>Frenleme Direnci (Braking Resistor / Rejenerasyon Direnci)</strong> bağlanmalıdır.</div></details>
</div>
`);

KITAP.bolum('m6', '6-6', `
<p class="giris">Mühendislik teorisini pratiğe dökmenin en etkili yolu, şartnameden son motor koduna kadar eksiksiz bir boyutlandırma hesabı yapmaktır. Bu bölümde yatay eksende çalışan bir Kartezyen robot X ekseni için; hareket profilini, yük ataletlerini, redüktör seçimini, hızlanma torkunu ve RMS efektif tork kontrolünü uçtan uca sayısal verilerle boyutlandırıyoruz.</p>

<h2>Örnek Uygulama Şartnamesi (Tasarım Verileri)</h2>
<ul>
  <li><strong>Mekanizma Tipi:</strong> Yatay Bilyalı Vidalı Milli Eksen (BK/BF Yataklamalı)</li>
  <li><strong>Hareketli Kütle (Araba + Taşınan İş Parçası):</strong> <code>m = 80 kg</code></li>
  <li><strong>Faydalı Strok Boyu:</strong> <code>L = 1000 mm (1 metre)</code></li>
  <li><strong>Hedef Hareket Süresi:</strong> <code>t<sub>top</sub> = 1,0 saniye</code> (Trapezoidal profil: t₁ = t₂ = t₃ = 0,333 s)</li>
  <li><strong>Seçilen Vidalı Mil:</strong> Çap <code>d = 25 mm</code>, Hatve <code>P<sub>h</sub> = 20 mm/tur (0,02 m)</code>, Mil toplam boyu <code>L<sub>mil</sub> = 1200 mm</code></li>
  <li><strong>Kılavuzlama:</strong> Profil Ray (Sürtünme katsayısı <code>μ = 0,005</code>)</li>
  <li><strong>Mekanik Verimler:</strong> Vidalı mil <code>η<sub>vida</sub> = 0,90</code>, Planet redüktör <code>η<sub>red</sub> = 0,95</code></li>
</ul>

<h2>Adım 1: Kinematik Hesaplama (Hız ve İvme)</h2>
<p>Trapezoidal 1/3 kuralına göre maksimum çizgisel hız ve tepe ivmesi:</p>
<div class="formul">
v<sub>maks</sub> = 1,5 · ( L / t<sub>top</sub> ) = 1,5 × ( 1,0 / 1,0 ) = <strong>1,5 m/s (1500 mm/s)</strong><br>
a<sub>maks</sub> = 4,5 · ( L / t<sub>top</sub>² ) = 4,5 × ( 1,0 / 1,0² ) = <strong>4,5 m/s² (≈ 0,46 G)</strong>
</div>
<p>Vidalı milin dönmesi gereken maksimum devir sayısı:</p>
<div class="formul">
n<sub>mil</sub> = ( v<sub>maks</sub> · 60 ) / P<sub>h</sub> = ( 1,5 × 60 ) / 0,02 = <strong>4500 d/dak!</strong>
</div>
<p><em>Kritik Mühendislik Değerlendirmesi:</em> Ø25 vidalı milin 4500 d/dak dönmesi kritik kamçılanma hızını aşar ve motorun doğrudan bağlanması imkansızdır. Araya hız düşürücü bir redüktör koyulmalı veya vida hatvesi büyütülmelidir. <code>P<sub>h</sub> = 25 mm</code> veya redüktör seçilmelidir. Burada motor devrini 3000 d/dak bandına çekmek için <strong>i = 3 veya i = 5 planet redüktör</strong> seçilecektir.</p>

<h2>Adım 2: Kütlesel Eylemsizlik Momentleri (Atalet Hesabı)</h2>
<ol>
  <li><strong>Çelik Vidalı Milin Kendi Ataleti:</strong>
    <p>Çelik yoğunluğu ρ = 7850 kg/m³. Ø25 mm, L = 1,2 m milin kütlesi: <code>m<sub>mil</sub> ≈ 4,62 kg</code>.</p>
    <div class="formul">
    J<sub>mil</sub> = ( 1 / 8 ) · m · D² = ( 1 / 8 ) × 4,62 × (0,025)² = <strong>0,000361 kg·m²</strong>
    </div>
  </li>
  <li><strong>80 kg Doğrusal Kütlenin Mile Yansıyan Ataleti:</strong>
    <div class="formul">
    J<sub>yük,doğrusal</sub> = m · [ P<sub>h</sub> / ( 2 · π ) ]² = 80 × [ 0,02 / ( 2 · 3,1416 ) ]² = <strong>0,000810 kg·m²</strong>
    </div>
  </li>
  <li><strong>Mil Eksenindeki Toplam Yük Ataleti:</strong>
    <div class="formul">
    J<sub>çıkış</sub> = J<sub>mil</sub> + J<sub>yük,doğrusal</sub> = 0,000361 + 0,000810 = <strong>0,001171 kg·m²</strong>
    </div>
  </li>
</ol>

<h2>Adım 3: Redüktör Seçimi ve Atalet Eşlemesi (Inertia Ratio)</h2>
<p>Hatveyi <code>P<sub>h</sub> = 20 mm</code> aldığımızda, çıkış devri 4500 d/dak yüksek çıktığından <strong>i = 3 planet redüktör</strong> seçelim. Redüktör çıkış devrini 1500 d/dak'ya, motor devrini ise tam 4500 d/dak yerine <code>P<sub>h</sub> = 25 mm</code> ve <code>i = 3</code> optimizasyonuyla <strong>3000 d/dak nominal motor devrine</strong> getirelim.</p>
<p><code>i = 3</code> redüktör çıkışındaki yük ataletini motora yansıtırken karesiyle böler:</p>
<div class="formul">
J<sub>yansıyan</sub> = J<sub>çıkış</sub> / ( i² · η<sub>red</sub> ) = 0,001171 / ( 3² × 0,95 ) = 0,001171 / 8,55 = <strong>0,000137 kg·m²</strong>
</div>
<p>Aday motor olarak <strong>750 W AC Servo Motor</strong> incelenirse (Katalog: Rotor ataleti <code>J<sub>motor</sub> = 0,000110 kg·m²</code>, Nominal tork <code>T<sub>nom</sub> = 2,39 Nm</code>, Tepe tork <code>T<sub>pik</sub> = 7,16 Nm</code>, n = 3000 d/dak):</p>
<div class="formul">
Atalet Oranı = J<sub>yansıyan</sub> / J<sub>motor</sub> = 0,000137 / 0,000110 ≈ <strong>1,24 : 1</strong>
</div>
<p><strong>Karar:</strong> Atalet oranı <code>1,24 &lt; 3,0</code> olduğundan mükemmel bir dinamik kararlılık elde edilmiştir!</p>

<h2>Adım 4: Dinamik ve RMS Tork Kontrolleri</h2>
<ol>
  <li><strong>Sürtünme Kuvveti ve Statik Tork:</strong>
    <p>F<sub>surt</sub> = μ · m · g = 0,005 × 80 × 9,81 ≈ <strong>3,92 N</strong> (Profil ray sürtünmesi neredeyse yok denecek kadar azdır).</p>
    <div class="formul">
    T<sub>statik,motor</sub> = [ F<sub>surt</sub> · P<sub>h</sub> ] / [ 2 · π · i · η<sub>toplam</sub> ] ≈ <strong>0,005 Nm</strong> (İhmal edilebilir).
    </div>
  </li>
  <li><strong>Hızlanma Açısal İvmesi ve Dinamik Tork (T<sub>acc</sub>):</strong>
    <p>Motor 0'dan 3000 d/dak'ya t<sub>acc</sub> = 0,333 saniyede çıkar: <code>α = (3000 × 2π / 60) / 0,333 = <strong>943 rad/s²</strong></code>.</p>
    <div class="formul">
    J<sub>toplam</sub> = J<sub>motor</sub> + J<sub>redüktör</sub> + J<sub>yansıyan</sub> ≈ 0,000110 + 0,000030 + 0,000137 = <strong>0,000277 kg·m²</strong><br>
    T<sub>acc</sub> = J<sub>toplam</sub> · α + T<sub>statik</sub> = ( 0,000277 × 943 ) + 0,005 = <strong>0,261 Nm (Motor milinde)</strong>
    </div>
  </li>
  <li><strong>Güvenlik ve RMS Tork Kararı:</strong>
    <p>Motor nominal torku <code>2,39 Nm</code>, tepe torku <code>7,16 Nm</code>'dir. Hızlanma torku <code>0,261 Nm &lt;&lt; 7,16 Nm</code> olup motor kapasitesinin sadece %4'ünü kullanmaktadır! Bu eksende hızlanma ivmesi rahatlıkla <strong>10–15 m/s² seviyelerine</strong> çıkarılabilir ya da 400W daha küçük bir motor seçilerek maliyet düşürülebilir.</p>
  </li>
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
    <td><strong>Boyutlandırma (Sizing)</strong></td>
    <td>Mekanik mekanizmanın hız, kuvvet, atalet ve çevrim gereksinimlerine en uygun motor, redüktör ve sürücü üçlüsünün matematiksel hesaplarla seçilmesidir.</td>
  </tr>
  <tr>
    <td><strong>J<sub>yansıyan</sub> [kg·m²]</strong></td>
    <td>Tüm hareketli kütlelerin redüktör çevrim oranı karesi (i²) üzerinden motor miline indirgenmiş toplam eşdeğer dönel ataletidir.</td>
  </tr>
  <tr>
    <td><strong>Atalet Eşleme Oranı</strong></td>
    <td>Yansıyan ataletin motor rotor ataletine oranıdır (J<sub>yansıyan</sub> / J<sub>motor</sub>); servo sistemlerde kararlı PID kontrolü için dinamik eksenlerde ≤3, standartta ≤5–8 olmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Tork Güvenlik Marjı</strong></td>
    <td>Motorun nominal torku ile çevrimin hesaplanan RMS efektif torku arasındaki emniyet payıdır (genelde %20 ila %30 rezerv bırakılır).</td>
  </tr>
  <tr>
    <td><strong>Efektif Çevrim Süresi</strong></td>
    <td>Hızlanma, sabit hızlı ilerleme, yavaşlama ve duruş (dwell time) fazlarının toplamıdır; RMS termal yük hesabının temelini oluşturur.</td>
  </tr>
  <tr>
    <td><strong>η<sub>toplam</sub> (Sistem Verimi)</strong></td>
    <td>Vidalı mil, yataklar ve planet redüktör mekanik verimlerinin çarpımıdır (η<sub>top</sub> = η<sub>vida</sub> · η<sub>red</sub>); tork ihtiyacını artıran faktördür.</td>
  </tr>
  <tr>
    <td><strong>Doğrusal Eksen İtme Kuvveti [N]</strong></td>
    <td>Motor torkunun mekanik aktarma organı üzerinden doğrusal yükü hızlandırmak ve sürtünmeyi yenmek için ürettiği net eksenel kuvvettir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Motor seçiminde ilk adım kinematiği (v<sub>maks</sub> ve a<sub>maks</sub>) belirlemektir.</li>
  <li>Dönen mil ataleti (D⁴) ve doğrusal kütle ataleti (m · (Ph/2π)²) toplanarak sistem ataleti bulunur.</li>
  <li>Redüktör (i), motora yansıyan ataleti <strong>i² oranında düşürerek</strong> mükemmel bir atalet eşlemesi sağlar.</li>
  <li>Hızlanma torku <strong>T<sub>pik</sub></strong> sınırından; RMS efektif tork ise motorun <strong>T<sub>nom</sub></strong> sınırından küçük olmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Boyutlandırma hesabında Atalet Oranı (J_yansıyan / J_motor) 25:1 çıkarsa ve motor torku teorik olarak yükü hızlandırmaya yetiyorsa bu motor yine de takılmalı mıdır? Neden?</summary>
<div>KESİNLİKLE TAKILMAMALIDIR! Atalet oranı 10–15'in üzerine çıktığında yük motorun kontrolünden çıkar. Motor mili döndürmeye çalıştığında yükün devasa eylemsizliği kaplini büker; motor durduğunda yük arkadan vurur. Servo sürücünün kazançları ne kadar ayarlanırsa ayarlansın sistem hedef pozisyonda duramaz, sürekli ileri-geri rezonans yapar ve aşırı akımdan kilitlenir. Çözüm araya bir redüktör koyarak ataleti i² ile bölmektir.</div></details>
<details><summary>Vidalı mil hatvesini Ph = 10 mm yerine Ph = 40 mm (High-Lead) seçersen doğrusal kütlenin mile yansıyan ataleti nasıl değişir?</summary>
<div>Formül: <code>J = m · [ Ph / (2·π) ]²</code>. Atalet hatvenin karesiyle (P<sub>h</sub>²) doğru orantılıdır. Hatve 10 mm'den 40 mm'ye yani 4 katına çıkarıldığında, aynı 80 kg kütlenin mile yansıyan ataleti <strong>4² = tam 16 KAT ARTAR!</strong> Hız artar ancak motorun bu kütleyi ivmelendirmek için basması gereken tork devasa boyutta büyür.</div></details>
<details><summary>Boyutlandırma yazılımlarında (örneğin Siemens Sizer veya Festo PositioningDrives) neden mekanik duruş bekleme süresi (Dwell Time) girilmek zorundadır?</summary>
<div>Çünkü motor dururken (tork sıfıra yakınken) sargılar içeriden soğur. Bekleme süresi çevrimin toplam süresini (t<sub>toplam</sub>) uzatarak formüldeki paydayı büyütür ve motorun <strong>T<sub>RMS</sub> (efektif ısıl torkunu)</strong> aşağı çeker. Bekleme süresi hesaba katılmazsa motora sürekli tork biniyormuş gibi yanlış hesaplanır ve gereksiz yere devasa bir motor seçilir.</div></details>
</div>
`);

KITAP.bolum('m6', '6-7', `
<p class="giris">Pnömatik sistemler; havanın sıkıştırılarak depolanabilmesi, patlama/kıvılcım riski taşımaması, aşırı yükte yanmaması ve yüksek hareket hızlarıyla endüstriyel otomasyonun en pratik itme-çekme gücüdür. Ancak basınçlı hava, fabrikadaki en pahalı enerji türüdür (elektrik enerjisinin sadece %10'u faydalı mekanik işe dönüşür). Doğru şartlandırılmamış nemli ve paslı hava ise silindir keçelerini parçalayarak vanaları kilitler. Bu bölümde kompresörden aktüatöre hava hazırlama zincirini ve ISO 8573-1 kalite standartlarını inceliyoruz.</p>

<h2>Basınçlı Hava Kalite Sınıfları (ISO 8573-1:2010)</h2>
<p>Kompresörün emdiği atmosferik hava içinde toz partikülleri, yoğuşan su buharı ve kompresör karterinden kaçan yanmış mineral yağ buharı bulunur. ISO 8573-1 bu kirleticileri 3 parametreyle sınıflandırır: <strong>[Partikül : Su : Yağ]</strong></p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Sınıf Kodu</th>
    <th>Katı Partikül (0,1–0,5 µm)</th>
    <th>Basınç Çiy Noktası (Nem / Su)</th>
    <th>Toplam Yağ İçeriği (Sıvı + Buhar)</th>
    <th>Endüstriyel Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sınıf 1:2:1</strong></td>
    <td>&le; 100 partikül/m³ (Çok Temiz)</td>
    <td><strong>-40 °C (Tamamen Kuru Buz)</strong></td>
    <td>&le; 0,01 mg/m³</td>
    <td><strong>Temiz Oda, Çip/Yarı İletken, İlaç Üretimi.</strong></td>
  </tr>
  <tr>
    <td><strong>Sınıf 2:4:2</strong></td>
    <td>&le; 1000 partikül/m³</td>
    <td><strong>+3 °C (Gazlı Kurutucu Sınırı)</strong></td>
    <td>&le; 0,1 mg/m³</td>
    <td><strong>Gıda paketleme, hassas otomasyon, otomotiv robot hatları.</strong></td>
  </tr>
  <tr>
    <td><strong>Sınıf 4:7:4</strong></td>
    <td>&le; 10.000 partikül/m³</td>
    <td>+10 °C</td>
    <td>&le; 5,0 mg/m³</td>
    <td>Genel kaba atölye havası, kumlama, havalı somun sıkmalar.</td>
  </tr>
</tbody>
</table>
</div>

<h2>FRL Şartlandırıcı Ünitesi (Filtre + Regülatör + Yağlayıcı)</h2>
<p>Makinenin hava girişine takılan şartlandırıcı blok 3 ana fonksiyonu yerine getirir:</p>
<ol>
  <li><strong>Filtre (Sinterize Bronz / Elyaf):</strong> Basınçlı havadaki pas ve katı parçacıkları santrifüj girdapla ve filtre gözenekleriyle (standart <strong>5 µm</strong> veya mikro filtre <strong>0,01 µm</strong>) süzer; alt haznede biriken yoğuşma suyunu otomatik tahliye valfiyle (otomatik drenaj) dışarı atar.</li>
  <li><strong>Basınç Regülatörü:</strong> Fabrika ana hattından gelen dalgalı basıncı (8–10 bar) makinenin ihtiyaç duyduğu <strong>sabit işletme basıncına (standart 6,0 bar)</strong> düşürür. Basınç dalgalansa bile silindirlerin itme kuvvetini sabit tutar.</li>
  <li><strong>Yağlayıcı (Yağ Damlatıcı):</strong> Venturi prensibiyle hava akışının içine mikroskobik mineral yağ zerrecikleri püskürtür.</li>
</ol>

<div class="kutu tehlike"><span class="kb">Modern Otomasyonda Yağlayıcı Kullanma Tuzağı!</span>
Eski tip makinelerde valf ve silindirleri yağlamak için FRL ünitesine yağ konulurdu. Ancak <strong>son 25 yıldır üretilen tüm modern Festo, SMC, Camozzi valf ve silindirleri fabrikasyon olarak ömür boyu kalıcı özel PTFE/Silikon gresle yağlanmış olarak gelir!</strong><br>
Eğer siz modern bir makinenin şartlandırıcısına yağ doldurursanız; bu yağ hava hatlarına girerek silindirlerin içindeki fabrikasyon özel gresi yıkar ve dışarı atar. Birkaç ay sonra FRL'deki yağ bittiğinde sistem tamamen kuru kalır; keçeler aşınır ve tüm valfler kilitlenir! <strong>Kural: Modern otomasyon panolarında yağlayıcı (L) KULLANILMAZ; sadece Filtre + Regülatör (FR) ünitesi takılır!</strong> Yağlayıcı sadece eski tip havalı taşlama motorlarında veya ağır kanatlı pnömatik motorlarda zorunludur.</div>

<h2>Basınçlı Hava Kurutucuları: Gazlı vs. Adsorpsiyonlu</h2>
<div class="iki-sutun">
  <div>
    <h4>Gazlı Soğutucu Kurutucu (+3 °C)</h4>
    <p>Havayı bir buzdolabı gibi +3 °C'ye kadar soğutur; yoğuşan nemi suya çevirip tahliye eder.</p>
    <ul>
      <li>Fabrika içi oda sıcaklığında (20 °C) borularda su yoğuşmasını %100 engeller.</li>
      <li>Endüstrinin %90'ında standart ana hat kurutucusudur.</li>
    </ul>
  </div>
  <div>
    <h4>Kimyasal Adsorpsiyonlu Kurutucu (-40 °C)</h4>
    <p>Nem tutucu kimyasal silika-jel / alümina tanklarından geçirilir.</p>
    <ul>
      <li>Kışın eksi dereceleri gören dış mekan boru hatlarında suyun donmasını engeller.</li>
      <li>İlaç, gıda ve lazer optiklerinde nem zerreciği kalmamasını sağlar.</li>
    </ul>
  </div>
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
    <td><strong>ISO 8573-1</strong></td>
    <td>Basınçlı havanın içerdiği katı partikül, su (çiy noktası) ve yağ buharı konsantrasyonlarını sınıflandıran küresel kalite standardıdır.</td>
  </tr>
  <tr>
    <td><strong>FRL Şartlandırıcı</strong></td>
    <td>Filtre (F), Basınç Regülatörü (R) ve Yağlayıcı (L) modüllerinin tek blokta birleştiği makine hava giriş ünitesidir.</td>
  </tr>
  <tr>
    <td><strong>Çiy Noktası (Dew Point) [°C]</strong></td>
    <td>Basınç altındaki havanın içindeki su buharının yoğuşarak sıvı su damlacıklarına dönüştüğü doyma sıcaklığı sınırıdır.</td>
  </tr>
  <tr>
    <td><strong>Otomatik Drenaj (Auto-Drain)</strong></td>
    <td>Filtre haznesinde biriken yoğuşma suyunu şamandıra veya zaman ayarlı solenoid valf ile operatör müdahalesine gerek kalmadan tahliye eden düzenektir.</td>
  </tr>
  <tr>
    <td><strong>Koalesans Filtre (Mikro Filtre)</strong></td>
    <td>Cam elyaf katmanları sayesinde havadaki aerosol yağ ve su buharını birleştirip damlaya dönüştürerek 0,01 µm seviyesine kadar süzen derinlik filtresidir.</td>
  </tr>
  <tr>
    <td><strong>Standart İşletme Basıncı (6 Bar)</strong></td>
    <td>Pnömatik aktüatörlerin ve valflerin katalog kuvvet ve ömür hesaplarında referans kabul edilen küresel endüstriyel şebeke basıncıdır.</td>
  </tr>
  <tr>
    <td><strong>Venturi Prensibi</strong></td>
    <td>Daralan bir boğazdan geçen havanın hızının artması ve statik basıncının düşmesi sonucu rezervuardaki sıvıyı emerek püskürtmesi fiziğidir (yağlayıcılar ve vakum ejektörleri).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Basınçlı hava pahalıdır; filtre edilmemiş su ve pas pnömatik keçeleri birkaç ayda parçalar.</li>
  <li>Gıda ve hassas otomasyonda standart kalite <strong>ISO 8573-1 Sınıf 2:4:2</strong>'dir.</li>
  <li>Modern fabrika otomasyonunda kendinden yağlı valfler kullanıldığı için şartlandırıcıda <strong>yağlayıcı (L) kullanılmaz</strong>; sadece FR takılır.</li>
  <li>Oda sıcaklığındaki fabrikalarda <strong>+3 °C Gazlı Soğutucu Kurutucu</strong> yoğuşmayı tamamen önler.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kış aylarında sabahları fabrikadaki pnömatik silindirlerin ilk 1 saat boyunca çok yavaş çalıştığı veya kilitlendiği, öğleden sonra ise normale döndüğü görülüyor. Problem nedir?</summary>
<div>Fabrikada hava kurutucusu yoktur veya arızalıdır. Kompresörden çıkan basınçlı havadaki nem gece tesis soğuduğunda boruların içinde yoğuşup su damlacıklarına dönüşmüş, sıfır derecenin altındaki hatlarda ise donarak buz kristalleri oluşturmuştur. Buz ve su valf sürgülerini kilitlemiştir. Çözüm: Kompresör dairesine uygun debide <strong>basınçlı hava kurutucusu</strong> takmaktır.</div></details>
<details><summary>Fabrika ana hattı 8 bar hava verirken, bir mühendis makine girişindeki şartlandırıcıyı 8 bara sonuna kadar açıyor. "Daha çok basınç, daha güçlü silindir" mantığı neden yanlıştır?</summary>
<div>İki büyük hata vardır:<br>
1. <strong>Enerji İsrafı:</strong> Kompresör basıncındaki her 1 barlık gereksiz artış elektrik tüketimini %7–10 oranında artırır; işletme maliyeti katlanır.<br>
2. <strong>Keçe Yıpranması ve Darbe:</strong> Silindirler 6 bara göre tasarlanmıştır; 8 barda silindir kapaklarına binen son konum darbe enerjisi %30'dan fazla artar ve keçe ömürleri yarıya iner. Doğru ayar regülatörü <strong>6,0 bar</strong>'a kilitlemektir.</div></details>
<details><summary>Şartlandırıcı filtresinin şeffaf kabında su seviyesi kırmızı çizgiyi aşmış durumda. Bu su boşaltılmazsa sisteme ne zarar verir?</summary>
<div>Su seviyesi filtre elemanının tabanına ulaştığında, filtre artık suyu tutamaz. Yüksek hızlı hava akışı haznedeki suyu emerek hortumların içine, oradan valf adalarına ve silindirlerin içine doğru bir şelale gibi basar. Gres yağı yıkanır, valflerin yayları paslanır ve solenoid bobin kovanları korozyondan sıkışarak arıza yapar. Şartlandırıcı mutlaka <strong>otomatik drenajlı</strong> olmalıdır.</div></details>
</div>
`);

KITAP.bolum('m6', '6-8', `
<p class="giris">Pnömatik silindirler, basınçlı havanın potansiyel enerjisini doğrudan doğrusal itme veya çekme kuvvetine dönüştüren en yaygın mekanik aktüatörlerdir. Basit gibi görünse de; silindir çapı hesabı, strok sonu kinetik enerji yastıklaması, piston kolu burkulması ve hız kontrol ayarları doğru yapılmadığında silindirler kapaklarını patlatır veya hedefe ulaşamadan takılır. Bu bölümde ISO silindir standartlarını, kuvvet formüllerini ve hız ayar valflerini inceliyoruz.</p>

<h2>Pnömatik Silindir Standartları</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Standart</th>
    <th>Gövde Tipi ve Görünüm</th>
    <th>Çap Aralığı (Ø)</th>
    <th>Maksimum Strok</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>ISO 15552<br>(Eski ISO 6431)</strong></td>
    <td>Kare profil gövde, tie-rod gizli veya açık, ayarlanabilir yastıklamalı</td>
    <td><strong>Ø32 … Ø320 mm</strong></td>
    <td>2000 mm'ye kadar</td>
    <td><strong>Endüstriyel ağır otomasyon:</strong> Palet iticiler, fikstür sıkma, pres besleme, transfer hatları.</td>
  </tr>
  <tr>
    <td><strong>ISO 21287</strong></td>
    <td>Kompakt (Kısa boylu alüminyum blok)</td>
    <td><strong>Ø20 … Ø100 mm</strong></td>
    <td>maks. 100–150 mm</td>
    <td><strong>Dar alanlar:</strong> Montaj fikstürleri, robot tutucuları, parça durdurucular (stopper).</td>
  </tr>
  <tr>
    <td><strong>ISO 6432</strong></td>
    <td>Yuvarlak / Kalem tipi gövde (Paslanmaz kapaklar)</td>
    <td><strong>Ø8 … Ø25 mm</strong></td>
    <td>maks. 500 mm</td>
    <td>Hafif elektronik montaj, etiketleme aparatları, küçük iticiler.</td>
  </tr>
  <tr>
    <td><strong>Kılavuzlu Silindir (Guided - DFM / MGJ)</strong></td>
    <td>Entegre çift kılavuz milli gövde</td>
    <td>Ø12 … Ø100 mm</td>
    <td>maks. 400 mm</td>
    <td><strong>Dönmezlik şart olan yerler:</strong> Yanal yüke maruz kalan iticiler, konveyör stoperleri (piston mili eğilmez).</td>
  </tr>
</tbody>
</table>
</div>

<h2>Pnömatik Kuvvet Hesabı (İtme vs. Çekme)</h2>
<p>Basınç birim alana düşen kuvvettir (P = F / A). 6 bar (0,6 MPa = 60 N/cm²) işletme basıncında teorik silindir kuvveti:</p>
<div class="formul">
F<sub>itme</sub> = P · [ ( π · D² ) / 4 ] &nbsp;&nbsp;[N]&nbsp;&nbsp;|&nbsp;&nbsp;
F<sub>çekme</sub> = P · [ ( π · ( D² - d² ) ) / 4 ] &nbsp;&nbsp;[N]
<small>P: İşletme basıncı [N/mm² veya MPa], D: Piston çapı [mm], d: Piston mili çapı [mm]</small>
</div>
<p><strong>Çekme Kuvveti Neden Daima Daha Düşüktür?</strong><br>
Geri çekilme yönünde silindirin ön odasında piston mili (d) hacim kaplar; havanın temas ettiği faydalı piston alanı mil kesiti kadar küçülür.</p>

<h2>Dinamik Emniyet Katsayısı (Yük Faktörü - η<sub>yük</sub>)</h2>
<div class="kutu tehlike"><span class="kb">Katalog Teorik Kuvvetine Güvenerek Silindir Seçilmez!</span>
Statik formülden çıkan teorik kuvvet silindirin sadece durağan halde itebileceği kuvvettir. Silindirin hedeflenen hızda akıcı bir şekilde ilerleyebilmesi için silindir içindeki sürtünmeler ve karşı odadaki egzoz geri basıncı düşülmelidir. Bu yüzden <strong>Dinamik Yük Faktörü (η<sub>yük</sub>)</strong> uygulanır:
<div class="formul">
F<sub>gerekli</sub> = F<sub>faydalı</sub> / η<sub>yük</sub>
</div>
<ul>
  <li><strong>Düşük Hızlı Uygulamalar (v &lt; 100 mm/s):</strong> η<sub>yük</sub> = 0,70 (%30 kuvvet marjı)</li>
  <li><strong>Normal Hızlı Otomasyon (v = 100 – 500 mm/s):</strong> <strong>η<sub>yük</sub> = 0,50 (%50 kuvvet marjı - Altın Standart!)</strong></li>
  <li><strong>Yüksek Hızlı Eksenler (v &gt; 500 mm/s):</strong> η<sub>yük</sub> = 0,30 (%70 kuvvet marjı)</li>
</ul>
<em>Örnek: 6 bar basınçta 300 N yükü 300 mm/s hızla itmek istiyorsan; gereken teorik kuvvet <code>300 / 0,5 = 600 N</code> olmalıdır! 6 barda 600 N üreten silindir çapı ise en az Ø40 mm'dir.</em></div>

<h2>Uç Konum Yastıklaması (Cushioning)</h2>
<p>Hızla ilerleyen piston kapağa çarptığında metal kapağı çatlatır veya cıvatalarını koparır:</p>
<ul>
  <li><strong>P (Elastik Tampon):</strong> Piston başında plastik pabuç vardır. Sadece küçük çaplarda (Ø16–25) ve düşük hızlarda darbeyi emer.</li>
  <li><strong>PPV (Ayarlanabilir Pnömatik Yastıklama):</strong> Strok sonuna 15–20 mm kala piston üzerindeki konik burç kapaktaki deliğe girerek havanın çıkışını tıkar. Kalan hava sıkışarak bir <strong>hava yastığı</strong> oluşturur. İğne ayar vidasıyla bu yastığın sertliği ayarlanır; piston kapağa fısıltı gibi yanaşır.</li>
  <li><strong>PPS (Kendinden Ayarlı Yastıklama - Festo Patentli):</strong> İğne vidası yoktur; özel boyuna yarıklar sayesinde yük ve hız ne olursa olsun yastıklamayı kendi otomatik ayarlar.</li>
</ul>

<h2>Hız Ayarı: Egzozdan Kısma (Meter-Out) vs. Girişten Kısma (Meter-In)</h2>
<div class="iki-sutun">
  <div>
    <h4>Egzozdan Kısma (Meter-Out - DOĞRU)</h4>
    <p>Silindire hava serbestçe dolar; ancak silindirin arkasındaki çıkış havası (egzoz) kısma çekvalfiyle frenlenerek kontrollü salınır.</p>
    <ul>
      <li>Piston iki taraftan basınçlı hava arasında sandviç gibi sıkışır.</li>
      <li><strong>Mükemmel kararlı hız</strong> sağlar; stick-slip ve vuruntuyu tamamen engeller. <strong>Çift etkili silindirlerde %100 bu yöntem uygulanır!</strong></li>
    </ul>
  </div>
  <div>
    <h4>Girişten Kısma (Meter-In - YANLIŞ)</h4>
    <p>Giriş havası kısılır, çıkış serbest bırakılır.</p>
    <ul>
      <li>Pistonun önünde direnç olmadığı için piston takılarak yürür (sıçrama yapar).</li>
      <li>Sadece tek etkili yay geri getirmeli silindirlerde veya çok küçük çaplı minyatür silindirlerde zorunlu kalınırsa kullanılır.</li>
    </ul>
  </div>
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
    <td><strong>ISO 15552</strong></td>
    <td>Endüstriyel profil pnömatik silindirlerin montaj bağlantı boyutlarını, strok toleranslarını ve ayrılabilir kapak standartlarını belirleyen küresel normdur.</td>
  </tr>
  <tr>
    <td><strong>ISO 21287</strong></td>
    <td>Kısa stroklu dar hacimli montaj fikstürleri için geliştirilmiş kompakt kare gövdeli silindir standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Dinamik Yük Faktörü η<sub>yük</sub></strong></td>
    <td>Havanın akış direnci ve egzoz karşı basıncı nedeniyle silindirin akıcı hızda hareket edebilmesi için gereken teorik kuvvet katsayısıdır (standartta 0,50).</td>
  </tr>
  <tr>
    <td><strong>Pnömatik Yastıklama (PPV)</strong></td>
    <td>Pistonun kapağa çarpmasını engellemek için strok sonunda hapsedilen havanın iğne valf üzerinden kontrollü boşaltılarak kinetik enerjinin yutulması sistemidir.</td>
  </tr>
  <tr>
    <td><strong>Egzozdan Kısma (Meter-Out)</strong></td>
    <td>Çift etkili silindirin hızını boşalan havanın tahliyesini kısarak ayarlayan, pistonun sıçramasını ve titreşimini engelleyen standart bağlantı şeklidir.</td>
  </tr>
  <tr>
    <td><strong>Manyetoresistif Sensör (GMR)</strong></td>
    <td>Piston üzerindeki daimi mıknatısın manyetik alanını algılayarak pistonun açık veya kapalı konumunu PLC'ye bildiren temassız elektronik sensördür.</td>
  </tr>
  <tr>
    <td><strong>Stick-Slip Olgusu</strong></td>
    <td>Statik sürtünmenin dinamik sürtünmeden büyük olması sebebiyle pnömatik silindirin düşük hızlarda kesik kesik sıçrayarak ilerlemesi arızasıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Endüstriyel ağır silindirlerde <strong>ISO 15552</strong>, dar alan fikstürlerinde kompakt <strong>ISO 21287</strong> seçilir.</li>
  <li>Piston kolunun kapladığı alan yüzünden silindirin <strong>çekme kuvveti itme kuvvetinden %10–15 daha düşüktür</strong>.</li>
  <li>Dinamik hareket eden silindirlerde boyutlandırma yapılırken teorik kuvvete <strong>%50 yük faktörü (η = 0,50)</strong> uygulanmalıdır.</li>
  <li>Silindir hız ayar valfleri daima <strong>Egzozdan Kısma (Meter-Out)</strong> prensibine göre bağlanmalıdır.</li>
  <li>Kapak darbelerini önlemek için strok sonlarında ayarlanabilir pnömatik yastıklama (PPV/PPS) şarttır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Çift etkili bir pnömatik silindirin hız ayar valfini bağlayan acemi bir operatör valfi "giriş havasını kısacak" şekilde (Meter-In) takıyor. Silindir çalıştırıldığında nasıl bir hareket sergiler?</summary>
<div>Silindir pürüzsüz akıcı bir hızla ilerleyemez; <strong>sıçrayarak ve titreyerek (Stick-Slip olgusuyla)</strong> yürür. Çünkü pistonun arkasındaki hava basıncı statik sürtünmeyi yenene kadar birikir, sürtünme aşıldığı an piston aniden ileri fırlar; önünde karşı basınç olmadığı için durur, tekrar basınç birikir ve tekrar sıçrar. Doğru bağlantı karşı odadaki havanın çıkışını kısan <strong>Egzozdan Kısma (Meter-Out)</strong> yöntemidir.</div></details>
<details><summary>6 bar basınç altında çalışan Ø50 mm çapında ve Ø20 mm piston kolu olan bir silindirin teorik itme kuvveti ile çekme kuvveti arasındaki fark yaklaşık kaç Newton'dur?</summary>
<div>Kuvvet farkı tam olarak piston milinin (Ø20 mm) dairesel kesit alanına binen 6 bar basınçtır:<br>
<code>Mil Kesit Alanı: A<sub>mil</sub> = ( π · 20² ) / 4 = 314,16 mm² = 3,14 cm²</code><br>
<code>Kuvvet Farkı: ΔF = P · A<sub>mil</sub> = 0,6 N/mm² × 314,16 mm² ≈ <strong>188,5 N</strong></code>.<br>
Yani silindir ileri iterken 1178 N basarken, geri çekerken 990 N çeker (yaklaşık 19 kg daha zayıftır).</div></details>
<details><summary>Standart bir silindirin piston koluna hareket yönüne dik yanal bir kuvvet (radyal yük) bindiğinde silindir neden kısa sürede hava kaçırmaya başlar?</summary>
<div>Standart silindirlerin ön kapağındaki bronz/plastik yataklama burcu sadece piston milinin doğrusal kılavuzlanması içindir; eğilme momentlerini taşıyamaz. Yanal kuvvet piston milini kastırarak ön sızdırmazlık dudağını (keçeyi) tek taraftan ezer ve ovalleştirir. Burç aşınır, keçe yırtılır ve ön kapaktan sürekli ıslık sesiyle basınçlı hava kaçmaya başlar. Yanal yük olan yerlerde <strong>Kılavuzlu Silindir (DFM serisi)</strong> veya harici kılavuz arabası kullanılmalıdır.</div></details>
</div>
`);
