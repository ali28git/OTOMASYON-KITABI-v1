/* ========================================================================
   MODÜL 12: PROJE SÜRECİ VE ENDÜSTRİ PRATİĞİ (m12-b.js)
   Bölüm 12.4: Katalog Okuma ve Tedarikçi Seçimi
   Bölüm 12.5: Montaj ve Bakım Dostu Tasarım (DFA / DFM)
   Bölüm 12.6: Sensör Yerleşimi ve Mekatronik Arayüz
   ======================================================================== */

// BÖLÜM 12.4: KATALOG OKUMA VE TEDARİKÇİ SEÇİMİ
kitap.bolumEkle({
  id: "12-4",
  baslik: "Katalog Okuma ve Tedarikçi Seçimi",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makine imalatında satın alınan standart mekatronik bileşenlerin (motorlar, redüktörler, lineer kızaklar, pnömatik elemanlar) üretici kataloglarındaki teknik verilerini doğru yorumlamayı; sürekli (S1) vs. tepe (peak) tork tuzaklarını, çevresel düşüm (derating) faktörlerini, tedarik süresi (lead time) risk yönetimini ve ikinci kaynak (second source) stratejisini öğretmektir.</p>
</div>

<h2>1. Katalog Okuma Disiplini: Nominal vs. Tepe Değerler Tuzağı</h2>
<p>Katalogların ilk sayfalarındaki kalın puntolu büyük sayılar genellikle <strong>en ideal laboratuvar koşullarındaki teorik sınırları</strong> temsil eder. Acemi bir mühendisin en büyük hatası bu tepe değerleri çalışma noktası sanmaktır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Satın Alma Elemanı</th>
      <th>Katalogdaki Tepe Değer (Peak / Max)</th>
      <th>Gerçek Sürekli Değer (Nominal / S1)</th>
      <th>Mühendislik Tuzağı ve Tasarım Kuralı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>AC Servo Motor</strong></td>
      <td>Tepe Torku (M<sub>max</sub> = 9 Nm)</td>
      <td>Sürekli Nominal Tork (M<sub>n</sub> = 3 Nm)</td>
      <td>Tepe tork sadece 1–2 saniyelik ivmelenme anında çekilebilir. Sürekli hareket bu değerde yapılırsa motor 5 dakikada aşırı ısınıp yanar. Boyutlandırma <strong>RMS Torkuna</strong> göre yapılmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Pnömatik Silindir</strong></td>
      <td>Maksimum İtme Kuvveti (10 bar basınçta)</td>
      <td>Gerçek Dinamik Kuvvet (5–6 bar fabrika basıncında)</td>
      <td>Katalog tablosu 10 bar için verilir. Oysa fabrikadaki regülatör 6 bar'a ayarlıdır ve dinamik basınç dalgalanmasında 5 bar'a düşer. Silindir hesabı <strong>en fazla 5 bar</strong> üzerinden yapılmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Lineer Kızak ve Vidalı Mil</strong></td>
      <td>Statik Yük Kapasitesi (C<sub>0</sub>)</td>
      <td>Dinamik Yük Kapasitesi (C)</td>
      <td>C<sub>0</sub> sadece hareketsiz dururken plastik ezilme sınırıdır. 100 km veya 10.000 saat çalışma ömrü için katalogdaki dinamik yük formülü ve servis faktörü (f<sub>w</sub> = 1,2–2,0) esas alınmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Planet Redüktör</strong></td>
      <td>Acil Duruş Torku (T<sub>2stop</sub> = 150 Nm)</td>
      <td>Nominal Çıkış Torku (T<sub>2N</sub> = 50 Nm)</td>
      <td>T<sub>2stop</sub> değeri redüktörün ömrü boyunca en fazla 1000 kez görebileceği darbe sınırıdır. Normal çevrim bu torkla çalıştırılırsa dişler sıyrılır.</td>
    </tr>
  </tbody>
</table>

<h2>2. Çevresel Şartlar ve Düşüm Faktörleri (Derating Factors)</h2>
<p>Katalog verileri 20°C ortam sıcaklığı ve deniz seviyesi rakım için geçerlidir. Gerçek fabrika ortamı bu değerleri düşürür:</p>
<div class="muhendislik-kutu">
  <h4>Kritik Derating Faktörleri:</h4>
  <ul>
    <li><strong>Sıcaklık Düşümü:</strong> Elektrik motorları ve sürücüler 40°C ortam sıcaklığının üzerindeki her 10°C artışta nominal torkunun %10 ila %20'sini kaybeder (Tork derating). Dökümhane veya enjeksiyon yanı hatlarda motor bir üst güçte seçilmelidir.</li>
    <li><strong>Rakım Faktörü:</strong> 1000 metrenin üzerindeki rakımlarda hava yoğunluğu azaldığı için motorun fan soğutma verimi düşer.</li>
    <li><strong>Görev Çevrimi (Duty Cycle - ED):</strong> S3 %25 olarak etiketlenmiş bir tork motoru, 10 dakikalık bir periyotta en fazla 2,5 dakika çalışabilir; 7,5 dakika soğumaya bırakılmalıdır.</li>
  </ul>
</div>

<h2>3. Tedarik Süresi (Lead Time) ve İkinci Kaynak (Second Source) Stratejisi</h2>
<p>Bir makinenin tasarımı mükemmel olabilir; ancak içindeki tek bir özel redüktörün veya lineer modülün teslim süresi <strong>24 hafta (6 ay)</strong> ise o proje iflas eder.</p>

<div class="uyari-kutu">
  <h4>Satın Alma ve Tasarım Senkronizasyonu Kuralları:</h4>
  <ul>
    <li><strong>Standart Raftan Teslim Bileşenler:</strong> Tasarımcı, katalog seçimi yaparken distribütörün yerel deposunda bulunan standart stoklu modelleri (Örn: Festo DSBC serisi, SMC CP96 serisi) tercih etmelidir.</li>
    <li><strong>Özel İmalat Tuzakları:</strong> Özel stroklu silindir (örn: 147 mm strok) 8 hafta sürerken, standart strok (150 mm) aynı gün raftan verilir! Tasarım 150 mm standart stroka göre yapılmalı, aradaki 3 mm şaseden veya dış dayamadan ayarlanmalıdır.</li>
    <li><strong>İkinci Kaynak (Second Source) Uyumluluğu:</strong> Kritik bileşenlerin (servo motor flanşları, lineer ray montaj delikleri) bağlantı geometrisi piyasadaki en az iki rakip markaya (Örn: THK ve Hiwin; Festo ve SMC) birebir uyumlu tasarlanmalıdır. Bir tedarikçide grev veya tedarik krizi çıktığında delik delmeden diğer marka takılabilmelidir.</li>
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
        <td><strong>Derating (Kapasite Düşümü)</strong></td>
        <td>Aşırı sıcaklık, rakım veya kirli ortam sebebiyle bir bileşenin katalog kapasitesinin altında çalıştırılması zorunluluğu.</td>
      </tr>
      <tr>
        <td><strong>Duty Cycle (% ED)</strong></td>
        <td>Bir ekipmanın aşırı ısınmadan çalışabileceği aktif süre yüzdesi (Çalışma Süresi / Toplam Çevrim Süresi).</td>
      </tr>
      <tr>
        <td><strong>Lead Time (Tedarik Süresi)</strong></td>
        <td>Siparişin verilmesinden ürünün fabrika kapısından içeri girmesine kadar geçen takvim haftası süresi.</td>
      </tr>
      <tr>
        <td><strong>Second Source (İkinci Kaynak)</strong></td>
        <td>Tedarik risklerini sıfırlamak için aynı mekanik montaj arayüzüne sahip alternatif muadil marka seçeneği.</td>
      </tr>
      <tr>
        <td><strong>RMS Tork (Kök Ortalama Kare)</strong></td>
        <td>Değişken torklu çevrimlerde motor sargılarının ısıl yükünü temsil eden eşdeğer sürekli tork değeri.</td>
      </tr>
      <tr>
        <td><strong>Servis Faktörü (f<sub>w</sub>)</strong></td>
        <td>Darbe, titreşim ve hız faktörlerine göre katalog rulman ömrünü garanti altına alan emniyet çarpanı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Kataloglardaki tepe tork ve maksimum kuvvet değerleri sürekli çalışma noktası değildir; motor seçiminde RMS torku, pnömatikte ise 5–6 bar çalışma basıncı esas alınmalıdır.</li>
    <li>Sıcak ve zorlu ortamlarda katalog kapasiteleri Derating faktörleriyle (%10–30) düşürülmelidir.</li>
    <li>Özel ölçülerden kaçınılmalı; tedarik süresini kısaltmak için üreticilerin standart raftan teslim modelleri tercih edilmelidir.</li>
    <li>Tedarik krizlerine karşı kritik montaj flanşları en az iki farklı markanın (Second Source) takılabileceği standart delik desenleriyle tasarlanmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Motor Boyutlandırma ve Tepe Tork Tuzağı):</strong> Bir kartezyen robot ekseni için motor seçen tasarımcı, ivmelenme anında gereken torku 8,5 Nm olarak hesaplamış ve katalogdan tepe torku M<sub>max</sub> = 9,0 Nm, nominal sürekli torku M<sub>n</sub> = 3,0 Nm olan bir servo motor seçmiştir. Hareket profili: 1,5 saniye hareket (ortalama tork 5,5 Nm) ve 0,5 saniye beklemedir. Bu motor sahada çalıştırıldığında ne olur?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Motor mükemmel çalışır çünkü 8,5 Nm < 9,0 Nm'dir.
      <div class="test-cevap">YANLIŞ. Tepe tork sadece milisaniyelik şoklar içindir, sürekli çalışma torku olamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Motorun RMS sürekli torku nominal torkun (3,0 Nm) çok üzerindedir; motor sargıları birkaç dakika içinde 130°C'yi aşarak termik aşırı yükleme (Motor Overheat / Inverter Overload) arızasına geçer ve durur. Sürekli nominal torku en az 5,5–6,0 Nm olan daha büyük bir gövde motor seçilmelidir.
      <div class="test-cevap">DOĞRU. Motor ısınmasını nominal tork belirler. Tepe tork sadece ivmelenme süresince (0,1–0,2 sn) çekilebilir. Çevrim boyunca ortalama tork nominal torkun altında kalmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Motor ters yöne dönmeye başlar.
      <div class="test-cevap">YANLIŞ. Aşırı yükleme motoru ters döndürmez, aşırı ısıtır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Pnömatik Boyutlandırma Hatası):</strong> Bir presleme istasyonunda parçayı çakmak için 1800 N kuvvete ihtiyaç vardır. Tasarımcı katalogdan Ø50 mm silindir seçmiş ve "Katalogda 10 bar için itme kuvveti 1963 N yazıyor, demek ki 1800 N'u rahatlıkla basar" demiştir. Fabrika hattına bağlandığında silindirin parçayı çakamadığı ve yarıda kaldığı görülmüştür. Bu mühendislik hatasının sebebi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Fabrika ana regülatörü 6 bar basınca ayarlıdır ve dinamik akışta silindire 5 bar ulaşır. Ø50 mm silindir 5 bar basınçta sadece F = P · A = 0,5 N/mm² · (π · 25²) ≈ 981 N kuvvet üretebilir; bu da gereken 1800 N'un neredeyse yarısıdır! En az Ø80 mm silindir seçilmeliydi.
      <div class="test-cevap">DOĞRU. Pnömatik hesaplar asla katalogdaki 10 bar teorik sınıra göre yapılmaz. Fabrikadaki gerçek çalışma basıncı olan 5–6 bar esas alınmalı ve %25 dinamik sürtünme emniyet payı bırakılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Silindirin çapı çok büyüktür.
      <div class="test-cevap">YANLIŞ. Tam tersine silindir çapı yetersizdir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Silindir dikey bağlanmalıdır.
      <div class="test-cevap">YANLIŞ. Yön kuvveti değiştirmez.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Tedarik Riski Yönetimi):</strong> Bir otomasyon projesinde teslim süresi 10 haftadır. Tasarımcı, lineer eksen için sadece tek bir butik İsviçre markasının ürettiği özel delik aralıklı bir ray-araba takımı seçmiştir. Satın alma sipariş geçtiğinde tedarikçinin teslim süresinin 22 hafta olduğu ortaya çıkmıştır. Tasarımcı bu krize düşmemek için tasarım aşamasında ne yapmalıydı?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Projeyi 22 hafta ertelemeliydi.
      <div class="test-cevap">YANLIŞ. Müşteri gecikme cezası keser veya siparişi iptal eder.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Piyasada raftan teslim bulunan ISO/DIN standart arayüzlü lineer rayları seçmeli ve montaj deliklerini hem Marka A (örn: THK) hem de muadili Marka B (örn: Hiwin) takılabilecek ortak Second Source standardında tasarlamalıydı.
      <div class="test-cevap">DOĞRU. Endüstriyel tasarımda ikinci kaynağı (muadili) olmayan bileşenleri kullanmak büyük bir proje yönetimi riskidir. Standart arayüzler esneklik sağlar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Lineer ray yerine tahta takoz koymalıydı.
      <div class="test-cevap">YANLIŞ. Endüstriyel otomasyonla bağdaşmaz.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 12.5: MONTAJ VE BAKIM DOSTU TASARIM (DFA / DFM)
kitap.bolumEkle({
  id: "12-5",
  baslik: "Montaj ve Bakım Dostu Tasarım",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Tasarlanan makinelerin fabrikada hızlı, hatasız ve ergonomik monte edilmesini (<strong>Design for Assembly - DFA</strong>) ve sahada arıza anında dakikalar içinde servis görebilmesini (<strong>Design for Maintenance - DFM / Serviceability</strong>); alet erişim açılarını, standart cıvata çeşitliliğini azaltmayı, kendi kendini hizalayan montaj geometrilerini ve aşınan parçaların hızlı değişim kurallarını öğretmektir.</p>
</div>

<h2>1. Montaj İçin Tasarım (DFA - Design for Assembly) İlkeleri</h2>
<p>DFA'nın temel felsefesi: <em>"Bir montaj hattındaki işçilik süresini ve insan hatasını parça geometrisini akıllandırarak en aza indirmektir."</em></p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>DFA Tasarım Kuralı</th>
      <th>Kötü Uygulama (Hatalı Tasarım)</th>
      <th>Doğru Mühendislik Uygulaması</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Parça Sayısının Azaltılması</strong></td>
      <td>5 farklı sac braket, 10 cıvata ve 10 somunla birleştirilmiş karmaşık taşıyıcı.</td>
      <td>Lazer kesim ve tek bir abkant bükümle monolitik tek parça haline getirilmiş gövde. Sıfır cıvata, sıfır kaynak, 1 dakikada montaj.</td>
    </tr>
    <tr>
      <td><strong>Kendi Kendini Hizalama (Self-Locating)</strong></td>
      <td>İki plaka düz yüzeyden cıvatalanır; montaj ustası gönye ve kumpasla 20 dakika ayar yapmak zorunda kalır.</td>
      <td>Plakalara birbirine geçen basamaklı faturalar (stepped shoulders), yuva-tırnak (tab-and-slot) veya 2 adet pahlı kılavuz pim eklenir. Parça yuvaya "klik" diye oturur; sıfır ayar süresi!</td>
    </tr>
    <tr>
      <td><strong>Bağlantı Elemanı Standardizasyonu</strong></td>
      <td>Aynı makinede M4x16, M4x20, M5x18, M6x20, M6x25 olmak üzere 15 farklı boy cıvata kullanımı.</td>
      <td>Tüm makine genelinde sadece <strong>M6x20 ve M8x25</strong> olmak üzere azami 2–3 boy cıvataya kilitlenir. Montajcı takım değiştirmez, yanlış cıvata takma riski sıfırlanır.</td>
    </tr>
    <tr>
      <td><strong>Tek Yönden Montaj (Z-Ekseni Yaklaşımı)</strong></td>
      <td>Cıvataların bir kısmı üstten, bir kısmı alttan, bir kısmı arkadan dar aralıktan sıkılır.</td>
      <td>Tüm cıvatalar ve parçalar <strong>yukarıdan aşağıya (Z ekseni yönünde)</strong> monte edilecek şekilde tasarlanır. Parçayı ters çevirme ihtiyacı yok edilir.</td>
    </tr>
  </tbody>
</table>

<h2>2. Takım ve Alet Erişim Açısı (Tool Clearance)</h2>
<p>3D CAD ortamında cıvata çizmek çok kolaydır; ancak o cıvatanın gerçek hayatta hangi anahtarla sıkılacağını düşünmemek en sık yapılan tasarımcı hatasıdır!</p>

<div class="muhendislik-kutu">
  <h4>Alyan ve Tork Anahtarı Çalışma Zarfı Kriterleri:</h4>
  <ul>
    <li>Bir M8 İmbus (DIN 912) cıvatanın kafası bir cebe gömüldüğünde, cıvata kafasının çevresinde en az <strong>d<sub>kafa</sub> + 6 mm</strong> alyan lokma anahtarı giriş boşluğu bırakılmalıdır.</li>
    <li>Duvar dibine konulan cıvatalarda cıvata merkezinin duvara olan mesafesi en az <strong>1,5 × d<sub>cıvata</sub></strong> olmalıdır; aksi halde T-alyan veya cırcır kolu duvara çarpar ve cıvata sıkılamaz!</li>
    <li>Kritik güvenlik cıvatalarında tork anahtarının (torque wrench) dönebileceği en az <strong>60° ila 90° açısal salınım boşluğu</strong> bırakılmalıdır.</li>
  </ul>
</div>

<h2>3. Bakım İçin Tasarım (DFM - Design for Maintenance / Serviceability)</h2>
<p>Fabrikalarda bakımcıların en çok lanet ettiği makineler; 50 liralık bir triger kayışı veya aşınan bir keçeyi değiştirmek için 3 gün boyunca şaseyi, motoru ve tüm milleri komple dağıtmak zorunda bırakan makinelerdir!</p>

<div class="uyari-kutu">
  <h4>Bakım Dostu Tasarımın 4 Altın Kuralı:</h4>
  <ol>
    <li><strong>Hızlı Değiştirilebilir Aşınma Elemanları:</strong> Triger kayışlar, vakum vantuzları, pnömatik silindir keçeleri ve amortisörler; ana şaseyi sökmeden, rulman yataklarını dağıtmadan <strong>en fazla 15 dakikada</strong> çıkarılıp takılabilmelidir.
      <br><em>Örnek:</em> Milin iki ucu sabit rulmanla kilitlenmek yerine, kayışın geçtiği taraf sökülebilir konsol flanşlı yapılmalıdır.</li>
    <li><strong>Merkezi Yağlama Blokları:</strong> Makinenin derinliklerindeki 12 farklı rulman ve lineer arabaya gres basmak için operatörün makine altına sürünmesi yasaklanmalıdır. İnce poliamid hortumlarla tüm gres noktaları operatörün kolayca erişebileceği dış şase paneline <strong>tek bir dağıtıcı blok (Manifold)</strong> üzerine toplanmalıdır.</li>
    <li><strong>Aletsiz Hızlı Ayar Mekanizmaları:</strong> Genişlik ayarı yapılan konveyör yan bariyerlerinde alyan cıvata yerine mandallı sıkma kolları (clamping lever / toggle clamp) kullanılmalıdır.</li>
    <li><strong>Ağır Parçalarda Kaldırma Mapaları (Eyebolts):</strong> 20 kg'ın üzerindeki tüm motor, fikstür ve şase bloklarına DIN 580 taşıma mapa delikleri (M10, M12, M16) açılmalıdır; böylece bakımcı tavan vinciyle güvenle parçayı kaldırabilir.</li>
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
        <td><strong>DFA (Design for Assembly)</strong></td>
        <td>Montaj süresini, parça sayısını ve montaj işçilik maliyetlerini en aza indiren tasarım metodolojisi.</td>
      </tr>
      <tr>
        <td><strong>Serviceability (Servis Edilebilirlik)</strong></td>
        <td>Bir makinenin arızalanan bileşenlerinin kolayca teşhis edilip hızlıca sökülüp takılabilme kabiliyeti.</td>
      </tr>
      <tr>
        <td><strong>Tool Clearance (Alet Boşluğu)</strong></td>
        <td>Cıvataların tork anahtarı, lokma veya alyan ile sıkılabilmesi için çevresinde bırakılan fiziksel erişim hacmi.</td>
      </tr>
      <tr>
        <td><strong>Self-Locating (Kendinden Merkezleme)</strong></td>
        <td>Parçaların dış ölçü aletine ihtiyaç duymadan fatura ve pimlerle yerine kendiliğinden oturması.</td>
      </tr>
      <tr>
        <td><strong>MTTR (Mean Time to Repair)</strong></td>
        <td>Arıza anından makinenin tamir edilip yeniden çalışır hale gelmesine kadar geçen ortalama tamir süresi (Hedef: Minimum MTTR).</td>
      </tr>
      <tr>
        <td><strong>Lifting Eyebolt (Kaldırma Mapası)</strong></td>
        <td>Ağır gövde parçalarını vinçle kaldırmak için açılan DIN 580 halkalı cıvata montaj deliği.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>DFA yaklaşımıyla parça sayıları azaltılmalı; lazer büküm ve entegre tırnak-yuva tasarımlarıyla ayar ihtiyacı sıfırlanmalıdır.</li>
    <li>Cıvata çeşitliliği makine genelinde 2-3 boy ile sınırlandırılmalı ve montaj daima yukarıdan (Z ekseninde) yapılmalıdır.</li>
    <li>Cıvata başlarının etrafında lokma ve tork anahtarlarının rahatça dönebileceği takım çalışma boşluğu (Tool clearance) bırakılmalıdır.</li>
    <li>Aşınan kayış ve contalar şaseyi dağıtmadan 15 dakikada değiştirilebilir olmalı; tüm gres noktaları dış merkezi manifolda taşınmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Bakım Tasarım Hatası ve MTTR):</strong> Bir montaj makinesinde ana tahrik triger kayışı aşınmıştır. Bakım teknisyeni kayışı değiştirmek için geldiğinde; kayışın iki ucu kapalı çelik plakalardan geçen bir milin ortasında kaldığını, kayışı çıkarmak için önce 4 adet rulman yatağını, ardından ana tahrik motorunu ve en sonunda ana şase yan plakasını sökmek zorunda olduğunu görmüştür. Kayış değişimi 26 saat sürmüş ve fabrika bir gün boyunca üretim yapamamıştır. Tasarımcının yapması gereken doğru mühendislik revizyonu nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Kayış yerine paslanmaz zincir takmak.
      <div class="test-cevap">YANLIŞ. Zincir de aşınır ve yağlama gerektirir, montaj hatasını çözmez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Şase yan plakasında milin ve kayışın yandan sökülmeden serbestçe dışarı alınabilmesini sağlayan "U-Tipi Sökülebilir Konsol Yatak Kapağı (Removable Bearing Bracket)" tasarlanmalıydı. Bu sayede sadece 2 cıvata gevşetilerek yeni kayış 10 dakikada takılabilirdi.
      <div class="test-cevap">DOĞRU. Aşınan sarf malzemelerinin çevresi sökülebilir modüler pencerelerle donatılmalıdır. Şaseyi dağıttıran tasarımlar endüstriyel olarak kabul edilemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kayış hiç değiştirilmemeli, kopana kadar çalıştırılmalıdır.
      <div class="test-cevap">YANLIŞ. Plansız duruşa ve diğer parçaların kırılmasına sebep olur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Takım Erişim Açısı Hatası):</strong> Bir montaj fikstüründe, mengene gövdesini taban plakasına bağlayan M8 imbus cıvata, dikey bir alüminyum duvarın dibine 8 mm mesafede açılmıştır. İmalattan gelen parçaları toplayan montaj ustası cıvatayı deliğe bırakabilmekte ancak alyan anahtarını sokup döndürememektedir; alyan kolu duvara çarpmaktadır. Bu hatayı önleyen standart kural nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Cıvatanın penseyle dışından tutulup sıkılması.
      <div class="test-cevap">YANLIŞ. İmbus cıvata kafa çapı yuvarlaktır, penseyle tork verilemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Duvar ile cıvata ekseni arasında standart takım çalışma boşluğu (Tool Clearance) bırakılmalı; mesafe en az alyan anahtarının veya lokmanın et kalınlığını kurtaracak şekilde 1,5 × d (en az 14–16 mm) olmalı veya cıvata başı erişilebilir açık bir tarafa taşınmalıdır.
      <div class="test-cevap">DOĞRU. CAD ortamında parçalar görünmez yapılabilir ancak gerçek hayatta aletin ve teknisyenin elinin dönebileceği fiziksel hacim şarttır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cıvatayı hiç sıkmadan boş bırakmak.
      <div class="test-cevap">YANLIŞ. Fikstür yük altında yerinden çıkar.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (DFA Standardizasyonu):</strong> 30 parçalık küçük bir robotik tutucu (gripper) montajında tasarımcı; 4 adet M3x10, 4 adet M3x12, 6 adet M4x14, 2 adet M4x16, 4 adet M5x15 ve 2 adet M5x20 cıvata kullanmıştır. Montaj ustası sürekli alyan değiştirmekte ve benzer boydaki cıvataları yanlış deliklere takarak diş sıyırmaktadır. DFA prensiplerine göre bu tasarım nasıl iyileştirilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Cıvata boyları ve çapları konsolide edilmeli; tüm tutucu sadece <strong>tek boy M4x16 (veya tek boy M4 ve tek boy M5)</strong> standart cıvatalarla sıkılacak şekilde delik derinlikleri ve et kalınlıkları revize edilmelidir.
      <div class="test-cevap">DOĞRU. DFA standardizasyonu parça çeşitliliğini budar. Tüm cıvataların aynı boy ve çapta olması montaj hızını 3 kat artırır ve hatalı montajı imkansız kılar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Montaj ustasına büyüteç verilmelidir.
      <div class="test-cevap">YANLIŞ. İnsan dikkatine dayalı çözümler zayıftır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cıvatalar yerine japon yapıştırıcısı kullanılmalıdır.
      <div class="test-cevap">YANLIŞ. Dinamik yük altında anında kopar.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 12.6: SENSÖR YERLEŞİMİ VE MEKATRONİK ARAYÜZ
kitap.bolumEkle({
  id: "12-6",
  baslik: "Sensör Yerleşimi ve Mekatronik Arayüz",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makine tasarımında mekanik ile elektrik/yazılım disiplinlerinin kesişim noktası olan sensör entegrasyonunu; indüktif, optik, manyetik ve ultrasonik sensörlerin mekanik montaj kurallarını, algılama mesafesi (Sn) toleranslarını, sensörleri fiziksel çarpışmalardan koruyan emniyetli aşırı hareket (over-travel) braketlerini ve titreşimle kaymayı önleyen pimli kilit sistemlerini öğretmektir.</p>
</div>

<h2>1. Mekatronik Uçurum: Sensör Neden Sonradan Eklenemez?</h2>
<p>Geleneksel kötü makine tasarımında mekanikçi makineyi baştan sona çizer, şaseleri boyatır ve elektrikçiye teslim eder: <em>"Al bunu kablola ve sensörleri bağla!"</em></p>
<ul>
  <li>Elektrikçi bakar ki silindirin ucundaki parçayı görecek sensör için hiçbir montaj kulağı veya vida deliği bırakılmamış!</li>
  <li>Boyalı şaseye elde matkapla delik delinir, eğri büğrü saçlar kaynatılır, kablolar hareketli zincirin kenarına sürtünür ve sensör 2 gün sonra parçalanır.</li>
  <li><strong>Doğru Yol:</strong> Tüm sensörler, kablo yolları ve soket dönüş mesafeleri <strong>3D CAD modelleme aşamasında</strong> mekanik tasarımcı tarafından milimetrik olarak yerleştirilmelidir!</li>
</ul>

<h2>2. İndüktif Yaklaşım Sensörleri (Inductive Proximity Sensors)</h2>
<p>Metal parçaların varlığını temassız algılayan en güvenilir endüstriyel sensörlerdir (M8, M12, M18 silindirik gövdeler).</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Sensör Gövdesi</th>
      <th>Düz Kafa (Flush / Shielded)</th>
      <th>Çıkık Kafa (Non-Flush / Unshielded)</th>
      <th>Kritik Montaj Kuralları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Görsel Yapı</strong></td>
      <td>Metal gövde algılama yüzeyinin tam hizasına kadar uzanır.</td>
      <td>Plastik algılama kafası metal gövdenin dışına doğru 5–8 mm çıkıntılıdır.</td>
      <td>Çıkık kafa etrafındaki metal gövdeden etkilenir; montaj yuvası çevresinde en az 3 × d boşluk bırakılmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Algılama Mesafesi (S<sub>n</sub>)</strong></td>
      <td>Kısa (Örn: M12 için S<sub>n</sub> = 2 ila 4 mm).</td>
      <td>Geniş (Örn: M12 için S<sub>n</sub> = 4 ila 8 mm).</td>
      <td>Düz kafa doğrudan metal bir bloğun içine sıfıra sıfır gömülebilir (Gömülebilir Montaj).</td>
    </tr>
    <tr>
      <td><strong>Malzeme Düzeltme Faktörü</strong></td>
      <td colspan="2">Katalogdaki nominal mesafe (S<sub>n</sub>) <strong>Çelik (St37)</strong> için geçerlidir! 
        <br>• Paslanmaz Çelik: 0,7 × S<sub>n</sub> &nbsp;|&nbsp; • Alüminyum: <strong>0,4 × S<sub>n</sub></strong> &nbsp;|&nbsp; • Bakır: 0,3 × S<sub>n</sub>.</td>
      <td>Alüminyum parça algılanırken mesafe yarıdan fazla düşer (4 mm'lik sensör alüminyumu ancak 1,6 mm'den görür!).</td>
    </tr>
  </tbody>
</table>

<h2>3. Sensör Mekanik Koruma İlkeleri (Over-Travel Protection)</h2>
<p>İndüktif sensörlerin en büyük ölüm sebebi, hareketli mekanik dayamanın veya silindir milinin ayar kaçıklığı sebebiyle <strong>sensörün plastik kafasına fiziksel olarak çarpması ve sensörü ezmesidir</strong>.</p>

<div class="muhendislik-kutu">
  <h4>Mekanik Koruma Tasarım Kuralları:</h4>
  <ul>
    <li><strong>Asla Alın Alına Çarpışma Pozisyonu Yapma:</strong> Algılanacak metal bayrak (flag), sensörün tam kafasına dik gelmemeli; sensör kafasının <strong>önünden paralel teğet geçmelidir (Slide-by Sensing)</strong>. Mekanizma fren arızası yapsa dahi metal bayrak sensörün önünden kayıp geçer, sensörü ezemez!</li>
    <li><strong>Mekanik Aşırı Hareket Stoperi (Hard Stop):</strong> Eğer doğrudan dik algılama zorunluysa, sensörün önüne sertleştirilmiş bir mekanik dayama pimi konulmalıdır. Mekanizma bu çelik pime çarparak durmalı; sensör ile parça arasında daima <strong>en az 1,0–1,5 mm emniyet hava boşluğu</strong> kalmalıdır.</li>
  </ul>
</div>

<h2>4. Titreşime Karşı Ayar ve Kilit Sistemi</h2>
<p>Slotlu (oval delikli) sensör braketleri ilk devreye alma sırasında sensör mesafesini ayarlamak için gereklidir. Ancak makine çalışırken oluşan titreşim, cıvatayı gevşeterek sensörün kaymasına ve hattın durmasına yol açar.</p>

<div class="uyari-kutu">
  <h4>Doğru Mühendislik Çözümü:</h4>
  <p>Brakete önce oval ayar slotu açılır. Devreye alma mühendisi sensörü ideal algılama noktasına getirir ve cıvatayı sıkar. Ardından braket üzerinden şaseye <strong>Ø4 veya Ø5 mm tek bir silindirik pim (dowel pin)</strong> çakılır. Böylece makine 10 yıl boyunca 24 saat titresede sensör pozisyonu tek bir mikron dahi kayamaz!</p>
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
        <td><strong>S<sub>n</sub> (Nominal Algılama Mesafesi)</strong></td>
        <td>İndüktif sensörün standart çelik plakayı algılayabildiği katalog teorik eksenel mesafesi.</td>
      </tr>
      <tr>
        <td><strong>Slide-by Sensing</strong></td>
        <td>Parçanın sensör kafasına dik çarpmak yerine önünden teğetsel kayarak geçtiği güvenli koruma montajı.</td>
      </tr>
      <tr>
        <td><strong>Flush (Gömülebilir Sensör)</strong></td>
        <td>Yanlarındaki metalden etkilenmeyen, metal plaka içine sıfıra sıfır gömülebilen düz kafalı indüktif sensör.</td>
      </tr>
      <tr>
        <td><strong>Malzeme Çarpanı (Correction Factor)</strong></td>
        <td>Demir dışı metallerde (Alüminyum, Pirinç) indüktif algılama mesafesini düşüren katsayı.</td>
      </tr>
      <tr>
        <td><strong>Over-Travel Protection</strong></td>
        <td>Mekanik duruş arızalarında sensörün ezilmesini engelleyen mekanik emniyet payı ve dayama yapısı.</td>
      </tr>
      <tr>
        <td><strong>Mekatronik Entegrasyon</strong></td>
        <td>Mekanik, elektrik ve yazılım bileşenlerinin tasarımın ilk adımından itibaren eşzamanlı ve uyumlu yürütülmesi.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Sensörler ve kablo kanalları mekanik tasarımın sonradan eklenen bir detayı değil, 3D CAD modelin asli parçasıdır.</li>
    <li>İndüktif sensörlerde alüminyum ve paslanmaz parçalar için algılama mesafesinin %30–60 düştüğü hesaba katılmalıdır.</li>
    <li>Sensörlerin kafasına mekanik çarpışmayı önlemek için daima teğetsel geçiş (Slide-by) veya mekanik durdurucu pim kullanılmalıdır.</li>
    <li>Ayar slotlu sensör braketleri, devreye alma bittikten sonra titreşimle kaymayı önlemek için mutlaka pimlenerek kilitlenmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Malzeme Faktörü ve Algılama Arızası):</strong> Bir pnömatik araba üzerindeki çelik bayrağı algılamak için katalog algılama mesafesi S<sub>n</sub> = 4 mm olan M12 indüktif sensör kullanılmış ve 2,5 mm mesafeye ayarlanarak sorunsuz çalıştırılmıştır. Projenin 2. fazında hareketli kütleyi hafifletmek için çelik bayrak aynı ölçülerde Alüminyum 6082 malzemeden üretilmiştir. Yeni parça takıldığında sensörün parçayı hiç görmediği tespit edilmiştir. Sensör arızalı mıdır, sorun nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Sensör yanmıştır, değiştirilmelidir.
      <div class="test-cevap">YANLIŞ. Sensör sağlamdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Alüminyumun malzeme düzeltme faktörü yaklaşık 0,4'tür. 4 mm'lik sensör alüminyum parçayı ancak 4 × 0,4 = 1,6 mm mesafeden görebilir! Parça 2,5 mm uzakta olduğu için sensörün algılama alanının dışında kalmıştır. Çözüm: Sensör mesafesi 1,0–1,2 mm'ye yaklaştırılmalı veya tüm metalleri 1:1 aynı mesafeden gören özel "Factor 1" indüktif sensör kullanılmalıdır.
      <div class="test-cevap">DOĞRU. Standart indüktif sensörler demir dışı metallerde ciddi mesafe kaybı yaşar. Bu gibi durumlarda ya Factor-1 sensör seçilmeli ya da mesafe daraltılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Alüminyum parça boyanırsa sensör görecektir.
      <div class="test-cevap">YANLIŞ. İndüktif sensör manyetik alanla çalışır, boya manyetik alanı etkilemez.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Mekanik Çarpışma ve Kök Neden):</strong> Bir fikstürde pnömatik silindirin ileri konumunu algılayan M8 indüktif sensör, silindirin ucundaki çelik dayamaya tam karşıdan (alın alına) bakacak şekilde bağlanmıştır. Devreye almadan 1 hafta sonra silindir yastıklaması hafifçe bozulmuş ve çelik dayama sensörün plastik kafasına 2 mm çarparak sensörü kırmıştır. Tasarımcı bu sensör kırılmasını kalıcı olarak nasıl engellemelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Sensörün kafasını çelik macunla kaplamak.
      <div class="test-cevap">YANLIŞ. Macun algılamayı bozar ve darbeyi engelleyemez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Sensör konumu alın alına dik basma yerine, çelik bayrağın sensör kafasının önünden teğetsel kayarak geçtiği "Slide-by" geometrisine çevrilmeli veya silindirin önüne mekanik bir çelik stoper konarak sensör geride emniyet boşluğunda bırakılmalıdır.
      <div class="test-cevap">DOĞRU. Slide-by montajında mekanik stoper arızalansa bile parça sensörün üzerinden kayıp geçer; sensöre fiziksel darbe gelmesi imkansız hale gelir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Sensör yerine kamera takılmalıdır.
      <div class="test-cevap">YANLIŞ. Basit bir konum algılama için kamera aşırı pahalı ve gereksizdir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Gömülebilir Montaj Kuralı):</strong> Bir tasarımcı, çıkık kafalı (Non-flush / unshielded) M18 bir indüktif sensörü, dışarıdan çarpmalardan korumak için kalın bir çelik plakanın içine delik delerek kafa hizasına kadar tamamen gömmüştür. Sensör bağlandığında önünde hiçbir parça olmamasına rağmen çıkış ışığının sürekli yandığı (sürekli algılama verdiği) görülmüştür. Sebep nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Sensör kablosu kısa devre yapmıştır.
      <div class="test-cevap">YANLIŞ. Kablo sağlamdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Çıkık kafalı (Non-flush) sensörlerin manyetik alanı radyal olarak yanlara doğru yayılır. Sensör çelik plakanın içine gömüldüğünde etrafındaki çelik gövdeyi iş parçası sanarak kendini kilitler. Gömme montaj yapılacaksa mutlaka yanlardan etkilenmeyen Düz Kafalı (Flush / Shielded) sensör seçilmelidir.
      <div class="test-cevap">DOĞRU. Non-flush sensörler metale gömülemez; çevrelerinde en az 3d çapında serbest boşluk bırakılmalıdır. Metale gömülecekse daima Flush tipi seçilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Çelik plaka mıknatıslanmıştır.
      <div class="test-cevap">YANLIŞ. Sensör kendi ürettiği yüksek frekanslı elektromanyetik alanla çeliği algılar.</div>
    </div>
  </div>
</div>
`
});
