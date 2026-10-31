// MODÜL 5 — Lineer Hareket Sistemleri (Bölüm 5.7 – 5.9: Kremayer-Pinyon, Hazır Modüller & CoreXY, Seçim Rehberi & L10 Ömrü)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m5', '5-7', `
<p class="giris">Strok 4–5 metreyi aştığında ve taşınacak kütle tonlarla ifade edildiğinde; vidalı miller kritik hız kamçılanmasından dolayı kullanılamaz, kayışlı sistemler ise esneyerek konum tutturamaz. Bu ağır hizmet sınıfında dünya sahnesi <strong>Kremayer-Pinyon (Rack & Pinion)</strong> mekanizmalarına kalır. Lazer kesim tezgahlarından dev portal robotlara kadar kullanılan bu sistemin inceliklerini inceliyoruz.</p>

<h2>Düz Kremayer vs. Helis Kremayer</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Özellik</th>
    <th>Düz Dişli Kremayer</th>
    <th>Helis Dişli Kremayer</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Diş Açısı (β)</strong></td>
    <td>0° (Düz kesim)</td>
    <td><strong>19° 31' 42" Sol Helis (Standart)</strong></td>
  </tr>
  <tr>
    <td><strong>Neden 19° 31' 42"?</strong></td>
    <td>—</td>
    <td>Bu sihirli açıda <code>cos(19°31'42") = 0,9424...</code> ve modül pi ile çarpıldığında adımı <strong>tam milimetrik tamsayı</strong> yapar (Örn: Modül 2 için hatve tam <code>p = 6,666 mm</code> değil tam <code>p = 20/3 mm</code> veya milimetrik düzgün modüldür).</td>
  </tr>
  <tr>
    <td><strong>Kavrama Oranı (Overlap Ratio)</strong></td>
    <td>Düşük (Tek diş teması)</td>
    <td><strong>Çok Yüksek (&gt; 2 diş aynı anda temas halindedir)</strong></td>
  </tr>
  <tr>
    <td><strong>Tork Kapasitesi</strong></td>
    <td>Standart (1,0×)</td>
    <td><strong>%30 – %40 Daha Fazla İtme Kuvveti</strong></td>
  </tr>
  <tr>
    <td><strong>Gürültü ve Titreşim</strong></td>
    <td>Yüksek hızda vuruntulu ve gürültülü</td>
    <td><strong>Çok Sessiz ve Pürüzsüz</strong> (Diş teması noktadan başlar)</td>
  </tr>
  <tr>
    <td><strong>Eksenel Kuvvet</strong></td>
    <td>Yok (Sadece radyal ve teğetsel)</td>
    <td>Var (Redüktör çıkış yatağı eksenel kuvveti taşımalıdır)</td>
  </tr>
</tbody>
</table>
</div>

<h2>Kalite Sınıfları ve Taşlama Standartları (DIN 3962)</h2>
<ul>
  <li><strong>Kalite 6 (Q6):</strong> Dişleri indüksiyonla sertleştirilmiş (56–60 HRC) ve <strong>tüm yüzeyleri mikron hassasiyetinde taşlanmış</strong> kremayer. Metre başına kümülatif adım hatası <code>&lt; 0,035 mm</code>'dir. Fiber lazer kesim ve CNC freze portalları için zorunludur.</li>
  <li><strong>Kalite 8 / 9 (Q8 / Q9):</strong> Sertleştirilmiş fakat frezelenmiş (taşlanmamış). Metre başına hata <code>~0,1 – 0,2 mm</code>. Ağır kaynak robotları, paletleme gantry sistemleri.</li>
  <li><strong>Kalite 10 (Q10):</strong> Isıl işlemsiz yumuşak çelikten kaba frezelenmiş. Ucuz sürgülü fabrika kapıları.</li>
</ul>

<h2>Sıfır Boşluk (Zero-Backlash) Çözümleri: Mekanik vs. Elektronik</h2>
<p>Kremayer ile pinyon arasında diş boşluğu (backlash) tipik 0,05 – 0,15 mm'dir. Yön değiştiren bir eksende bu boşluk hassasiyeti mahveder. Endüstriyel çözümler:</p>

<div class="iki-sutun">
  <div>
    <h4>1. Mekanik Çift Pinyon (Split Pinion)</h4>
    <p>Aynı şaft üzerinde yan yana duran iki pinyon arasına dahili bir mekanik ön yükleme yayı konur. Pinyonun biri dişin sağ yanağına, diğeri sol yanağına sürekli basar.</p>
    <ul>
      <li><strong>Artısı:</strong> Tek motorla mekanik sıfır boşluk.</li>
      <li><strong>Eksisi:</strong> Yüksek sürtünme ve aşınma; orta torklarla sınırlı.</li>
    </ul>
  </div>
  <div>
    <h4>2. Elektronik Ön Yükleme (Master - Slave Preload)</h4>
    <p>Aynı kremayer üzerinde iki ayrı servo motor ve planet redüktör yürür. CNC kontrol ünitesi bir motora ilerleme torku basarken, diğer motora zıt yönde <strong>mikro fren torku (%5-10)</strong> bastırır.</p>
    <ul>
      <li><strong>Muazzam Avantajı:</strong> Yön değişiminde mekanik boşluk SIFIRDIR! Devasa itme kuvvetlerinde aşınmasız çalışır (Lazer ve CNC standardı).</li>
    </ul>
  </div>
</div>

<h2>Yağlama Pinyonu (Felt Lubrication Pinion) Zorunluluğu</h2>
<div class="kutu tehlike"><span class="kb">Kuru Çalışan Kremayer 6 Ayda Un Ufak Olur!</span>
Kremayer açık bir sistemdir; yüksek hızda pinyon dişleri kremayere çarparak mikroskobik kayma sürtünmesi yaşar. Elle gres sürmek birkaç günde gresin uçmasına veya toz toplayıp zımpara çamuru oluşturmasına yol açar. Çözüm: Kremayerin üzerine sürekli basan <strong>özel gözenekli poliüretan köpük yağlama pinyonu</strong> ve arkasında otomatik mikro gres pompası takmaktır. Her turda diş yanaklarına mikron kalınlığında homojen gres filmi bırakılır.</div>

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
    <td><strong>DIN 3962 (Dişli Kalite Sınıfları)</strong></td>
    <td>Kremayer ve pinyon dişlilerin tek hatve, toplam hatve ve profil sapmalarını sınıflandıran standarttır (Q6 hassas taşlanmış, Q9 kaba frezelenmiş).</td>
  </tr>
  <tr>
    <td><strong>Helis Açısı β = 19° 31' 42"</strong></td>
    <td>Kosinüsü tam olarak 0,9424... eden ve standart modül ile çarpıldığında kremayer hatvesini milimetrik tam sayıya eşitleyen endüstriyel standart helis açısıdır.</td>
  </tr>
  <tr>
    <td><strong>Overlap Ratio (Kavrama Oranı)</strong></td>
    <td>Helis kremayerde pinyon dönerken aynı anda temas halinde olan ortalama diş sayısıdır; 2'nin üzerinde olması pürüzsüz ve sessiz tork aktarımı sağlar.</td>
  </tr>
  <tr>
    <td><strong>Split Pinion (Mekanik Çift Pinyon)</strong></td>
    <td>Aynı eksende çalışan iki yarım pinyonun aralarındaki torsiyon yayıyla zıt diş yanaklarına bastırılarak tek motorla sıfır boşluk elde edilen pinyon türüdür.</td>
  </tr>
  <tr>
    <td><strong>Elektronik Ön Yükleme (Master-Slave)</strong></td>
    <td>Kremayeri süren iki bağımsız servo motorun CNC yazılımı üzerinden birbiriyle zıt torkta (karşıt ön yükle) gerdirilerek mekanik backlash'in sıfırlandığı sistemdir.</td>
  </tr>
  <tr>
    <td><strong>Poliüretan Yağlama Pinyonu</strong></td>
    <td>Kremayer dişlerine temas ederek dönen, açık gözenekli özel köpük yapısıyla diş yanaklarına sürekli mikro miktarda taze gres filmi transfer eden dişlidir.</td>
  </tr>
  <tr>
    <td><strong>Montaj Köprüsü (Ters Pinyon Mastarı)</strong></td>
    <td>Modüler üretilen kremayer parçaları uç uca eklenirken iki parça arasındaki ek yerinde hatve adımının bozulmasını engelleyen ters dişli mastar aparatıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Strok &gt; 4–5 metre ve yüksek kuvvet gerektiren ağır portal sistemlerde <strong>Kremayer-Pinyon</strong> tek seçenektir.</li>
  <li>Standart olarak sessizlik ve yüksek tork için <strong>19° 31' 42" Helis Açılı</strong> kremayer seçilir.</li>
  <li>CNC ve lazer tezgahlarında sertleştirilmiş ve taşlanmış <strong>Kalite 6 (Q6)</strong> kremayer şarttır.</li>
  <li>Hassas yön değişimlerinde sıfır boşluk için en mükemmel yöntem çift servolu <strong>Elektronik Master-Slave Ön Yüklemedir</strong>.</li>
  <li>Kremayer ömrü için <strong>otomatik poliüretan yağlama pinyonu</strong> ihmal edilmemelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>12 metre boyunda bir fiber lazer kesim tablasında neden 12 metrelik tek parça kremayer üretilmez? 1'er metrelik kremayerler uç uca eklenirken iki kremayer arasındaki diş hatvesi nasıl sıfırlanır?</summary>
<div>12 metre boyunda tek parça çeliği işlemek, ısıl işlem fırınına sokmak ve taşlamak imkânsızdır; taşıması ve montajı yapılamaz. Bu yüzden kremayerler standart 1,0 veya 2,0 metrelik modüller halinde üretilir. İki kremayer uç uca eklenirken aradaki ek yerinde diş adımı bozulmasın diye <strong>Montaj Köprüsü (Ters Pinyon Mastarı)</strong> kullanılır. Ters çevrilmiş bir kremayer parçası iki kremayerin ek yerine üstten oturtulup mengene ile sıkılır; böylece hatve tam sıfırlandıktan sonra alt cıvatalar torklanır.</div></details>
<details><summary>Helis kremayer kullanan bir portal eksende motor redüktörünü seçerken sadece çıkış torkunu kontrol ettin. 3 ay sonra redüktörün çıkış mili rulmanları neden dağılır?</summary>
<div>Helis dişli (19,5° helis açısı) yüksek teğetsel itme kuvvetinin yanında, pinyon milini içeriye veya dışarıya doğru iten devasa bir <strong>eksenel kuvvet (Fa = Ft · tan β)</strong> üretir! Standart basit redüktörler sadece radyal yük taşır. Helis kremayeri süren planet redüktörün çıkışında ağır eksenel kuvvetleri taşımak üzere tasarlanmış <strong>çift konik makaralı veya eğik bilyalı ağır hizmet yataklamalı flanşlı redüktör (örneğin Wittenstein TP veya Apex AH serisi)</strong> seçilmelidir.</div></details>
<details><summary>Portal tipi bir CNC'de köprünün iki ayağında iki paralel kremayer var (X1 ve X2 eksenleri). Bu iki motor tek bir sürücüye paralel bağlanabilir mi?</summary>
<div>HAYIR, KESİNLİKLE BAĞLANAMAZ! Köprünün iki ayağı mekanik toleranslar yüzünden mikron seviyesinde birbirinden farklı dirençle karşılaşır. Tek sürücüye bağlanırlarsa bir motor diğerinden geride kalır; köprü eksende çarpılarak (crabbing / racking) raylara kasar ve arabaları kırar. Her iki ayağa bağımsız servo motor ve sürücü konulmalı; CNC kontrol ünitesinde <strong>Gantry Senkronizasyon Eksen Algoritması</strong> ile iki eksen milisaniyelik enkoder takibiyle eşzamanlı sürülmelidir.</div></details>
</div>
`);

KITAP.bolum('m5', '5-8', `
<p class="giris">Tasarımcının tek tek profil ray, araba, vidalı mil, yataklama bloğu ve alüminyum gövde çizip bunları monte etmeye çalışması küçük işletmelerde ciddi bir mühendislik ve montaj işçiliği maliyeti yaratır. Günümüz fabrika otomasyonunda tüm bu elemanların tek bir kompakt eloksallı gövde içine fabrikasyon olarak entegre edildiği <strong>Hazır Lineer Modüller (Lineer Aktüatörler)</strong> ve yenilikçi çok eksenli kinematik düzenler (CoreXY, Gantry) tercih edilmektedir.</p>

<h2>Hazır Lineer Modül Çeşitleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Modül Tipi</th>
    <th>Tahrik Elemanı</th>
    <th>Kılavuzlama</th>
    <th>Hız & İvme</th>
    <th>Tekrarlanabilirlik</th>
    <th>Öne Çıkan Üreticiler</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kapalı Vidalı Milli Modül</strong></td>
    <td>Bilyalı Vidalı Mil (C7 veya C5)</td>
    <td>Dahili 1 veya 2 adet Profil Ray</td>
    <td>v ≤ 1 m/s<br>a ≤ 10 m/s²</td>
    <td><strong>±0,005 … ±0,01 mm</strong></td>
    <td>THK (KR serisi), Hiwin (KK), Festo (EGC-BS), IAI, Bosch Rexroth</td>
  </tr>
  <tr>
    <td><strong>Yüksek Hızlı Kayışlı Modül</strong></td>
    <td>Çelik Kordlu PU Triger Kayış</td>
    <td>Dahili Profil Ray veya Kam Makaraları</td>
    <td><strong>v ≤ 5 m/s<br>a ≤ 50 m/s²</strong></td>
    <td>±0,05 mm</td>
    <td>Festo (EGC-TB), Rollon (Smart), Parker, Bosch Rexroth</td>
  </tr>
  <tr>
    <td><strong>Lineer Motorlu Modül (Direct Drive)</strong></td>
    <td>Manyetik Hat (Demirsiz/Demirli Lineer Motor)</td>
    <td>Optik Cetvel + Profil Ray</td>
    <td><strong>v &gt; 5–10 m/s<br>a &gt; 100 m/s² (10G!)</strong></td>
    <td><strong>±0,001 mm (1 Mikron!)</strong></td>
    <td>Hiwin (LMC), Beckhoff (XTS), Parker, Aerotech</td>
  </tr>
  <tr>
    <td><strong>Pnömatik Kılavuzlu Mini Modül</strong></td>
    <td>Pnömatik Piston (Hava basıncı)</td>
    <td>Entegre Minyatür Lineer Bilyalı Ray</td>
    <td>Hızlı fakat 2 uç konumlu</td>
    <td>±0,02 mm (Durdurucu ile)</td>
    <td>SMC (MXS / MXQ serisi), Festo (DFM)</td>
  </tr>
</tbody>
</table>
</div>

<h2>Çok Eksenli Kartezyen Mimariler: Karşılaştırma</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mimari Türü</th>
    <th>Kinematik Prensip</th>
    <th>Motor Yerleşimi</th>
    <th>Dinamik Karakteristik</th>
    <th>Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Klasik X-Y Çapraz Tabla</strong></td>
    <td>Y ekseni X ekseninin arabasına doğrudan cıvatalanır.</td>
    <td>Y ekseni motoru X ekseninin üzerinde <strong>taşınır</strong>.</td>
    <td>X ekseni ağırlaşır; ivmelenme düşer.</td>
    <td>Kompakt montaj istasyonları, vidalama aparatları, dağıtıcılar (dispenser).</td>
  </tr>
  <tr>
    <td><strong>Gantry (Portal Robot)</strong></td>
    <td>İki paralel X ekseni üzerinde köprü şeklinde taşınan Y ekseni.</td>
    <td>X1 ve X2 iki ayrı motorla sürülür.</td>
    <td>Çok yüksek rijitlik, geniş açıklık, ağır yük kapasitesi.</td>
    <td>Koli paletleme, CNC işleme, plaka taşıma.</td>
  </tr>
  <tr>
    <td><strong>CoreXY / H-Bot Kinematiği</strong></td>
    <td>İki motor da <strong>ŞASEDE SABİTTİR</strong>; tek bir sürekli kayış döngüsü vardır.</td>
    <td><strong>Hareketli arabada SIFIR MOTOR!</strong> Kafa son derece hafiftir.</td>
    <td><strong>Aşırı Yüksek İvmelenme ve Hız!</strong> (Kafa ağırlığı olmadığı için).</td>
    <td>Yüksek hızlı 3D yazıcılar, lazer markalama, hafif pick & place hücreleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>CoreXY Kinematik Mantığı (Formüller)</h2>
<p>CoreXY sisteminde iki motor (Motor A ve Motor B) şasede sabittir. Hareketli kafanın konumu motorların eşzamanlı dönme vektörlerinin bileşkesidir:</p>
<div class="formul">
ΔX = 0,5 · ( ΔA + ΔB ) &nbsp;&nbsp;|&nbsp;&nbsp; ΔY = 0,5 · ( ΔA - ΔB ) <br><br>
<strong>A ve B aynı yönde eşit dönerse → Kafa SADECE X yönünde gider!</strong><br>
<strong>A ve B zıt yönde eşit dönerse → Kafa SADECE Y yönünde gider!</strong><br>
<strong>Sadece A motoru dönerse → Kafa 45° çapraz hareket eder!</strong>
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
    <td><strong>Lineer Aktüatör (Hazır Modül)</strong></td>
    <td>Alüminyum taşıyıcı gövde, hassas profil ray ve tahrik mekanizmasını (vida, kayış veya lineer motor) tek bir kompakt fabrikasyon gövdede birleştiren hazır eksendir.</td>
  </tr>
  <tr>
    <td><strong>Lineer Motor (Direct Drive)</strong></td>
    <td>Geleneksel dönel motorun stator ve rotorunun düz bir hat boyunca açıldığı, arabayı doğrudan manyetik itme kuvvetiyle temas olmadan süren yüksek dinamik tahriktir.</td>
  </tr>
  <tr>
    <td><strong>CoreXY Kinematiği</strong></td>
    <td>İki tahrik motorunun da sabit gövdeye monte edildiği, sürekli bir kayış hattının diferansiyel hareketiyle hafif hareketli kafayı X-Y düzleminde süren kinematik düzendir.</td>
  </tr>
  <tr>
    <td><strong>Gantry (Portal Robot)</strong></td>
    <td>Geniş açıklıklı iki paralel ray üzerinde köprü gibi hareket eden, çift taraflı bağımsız servo motorlarla sürülen kartezyen robot mimarisidir.</td>
  </tr>
  <tr>
    <td><strong>SMC MXS Mini Modül</strong></td>
    <td>Entegre minyatür lineer bilyalı rayı ve çift yönlü hava pistonunu tek parça gövdede birleştiren, hassas son konum durduruculu pnömatik slayd ünitesidir.</td>
  </tr>
  <tr>
    <td><strong>Paslanmaz Koruma Bandı</strong></td>
    <td>Kapalı lineer modüllerin üst yuvasını boydan boya örten, araba hareket ederken mıknatıslarla açılıp kapanarak iç mekana talaş girmesini önleyen çelik şerittir.</td>
  </tr>
  <tr>
    <td><strong>H-Bot Mimarisi</strong></td>
    <td>Tek bir kayışın H şeklinde dolandığı, hafif kafa sağlayan fakat tek taraflı çekme kuvveti nedeniyle köprüde bükülme (tork kasıntısı) yaratan kinematik türdür.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Hazır modüller; ray, vida/kayış ve gövdeyi tek parça fabrikasyon toleransında sunarak tasarım ve montaj süresini %70 kısaltır.</li>
  <li>Mikron altı hassasiyet ve aşırı ivmeler için mekanik temas taşımayan <strong>Lineer Motorlu Eksenler</strong> seçilir.</li>
  <li>Hafif ve ultra hızlı X-Y eksenlerinde hareketli kafada motor taşımayan <strong>CoreXY mimarisi</strong> büyük dinamik avantaj sağlar.</li>
  <li>Geniş açıklıklı ağır yük transferlerinde çift motor senkronizasyonlu <strong>Gantry portal robotlar</strong> kullanılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir X-Y dağıtıcı (tutkal/sıvı conta dökme) robotu tasarlıyorsun. Klasik Kartezyen X-Y yerine neden CoreXY tercih etmelisin?</summary>
<div>Klasik Kartezyende Y ekseninin motoru ve kabloları sürekli X ekseninin üzerinde ileri-geri taşınır. Bu ölü kütle X ekseninin motorunun daha büyük seçilmesini gerektirir, ivmelenmeyi sınırlar ve köşe dönüşlerinde ataletten kaynaklı titreşim (overshoot) yapar. CoreXY'de ise iki motor da ana şasede sabittir; hareketli kafa tüy gibi hafiftir. Sıvı conta dökerken keskin köşelerde ve yaylarda mükemmel pürüzsüz hız ve ivme kontrolü sağlar.</div></details>
<details><summary>Hazır bir kapalı lineer modülün (örneğin THK KR serisi) üst kapağında paslanmaz çelik şerit (cover strip) veya körük kullanılmasının amacı nedir?</summary>
<div>Modülün içinde bilyalı vida ve profil raylar çalışır. Üstten düşebilecek talaş, vida, toz veya sıvı contanın modül içine düşerek bilyaları kilitlemesini engellemek için araba ile birlikte kayan manyetik paslanmaz çelik koruma bandı veya körük kullanılır. Aksi halde açık modül atölye ortamında birkaç ayda kirlilikten bozulur.</div></details>
<details><summary>Lineer motorlu (Direct Drive) bir modülün geleneksel vidalı milli modüle göre en büyük avantajı ve en büyük dezavantajı nedir?</summary>
<div><strong>En Büyük Avantajı:</strong> Mekanik aktarma organı (vida, kaplin, kayış) yoktur. Motor doğrudan manyetik alanla arabayı iter; bu yüzden mekanik aşınma, boşluk (backlash) ve elastik esneme SIFIRDIR. İvmelenme 10G'ye, hassasiyet 1 mikronun altına ulaşır.<br>
<strong>En Büyük Dezavantajı:</strong> Maliyeti vidalı milin 3–5 katıdır; sürekli yüksek akım çektiği için ciddi ısınır ve elektrik kesildiğinde sıfır sürtünme yüzünden eksen serbestçe savrulabilir (Dahili manyetik veya mekanik fren şarttır).</div></details>
</div>
`);

KITAP.bolum('m5', '5-9', `
<p class="giris">Mühendislik tasarımı en pahalı veya en hızlı ürünü seçmek değil; şartnamenin gerektirdiği hız, hassasiyet, yük ve ömür kriterlerini en düşük toplam sahip olma maliyetiyle (TCO) karşılayan doğru sistemi seçmektir. Bu bölümde tüm lineer aktarma sistemlerini tek bir büyük matriste karşılaştırıyor ve katalogdan L10 ömür hesabının matematiksel adımlarını inceliyoruz.</p>

<h2>Büyük Lineer Hareket Kıyaslama Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Lineer Sistem Türü</th>
    <th>Maks. Strok</th>
    <th>Maks. Hız</th>
    <th>Maks. İvme</th>
    <th>Tekrarlanabilirlik</th>
    <th>İtme Kuvveti Kapasitesi</th>
    <th>Maliyet Seviyesi</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Bilyalı Vidalı Mil</strong></td>
    <td>maks. 2 – 3 m (Kamçılanma sınırı)</td>
    <td>maks. 1,0 – 1,5 m/s</td>
    <td>maks. 10 – 15 m/s²</td>
    <td><strong>±0,005 – 0,01 mm (Mükemmel)</strong></td>
    <td><strong>Çok Yüksek (&gt; 50 kN)</strong></td>
    <td>Orta – Yüksek</td>
    <td>CNC tezgahlar, presler, yüksek hassasiyetli kartezyen Z eksenleri.</td>
  </tr>
  <tr>
    <td><strong>Trapez Vidalı Mil</strong></td>
    <td>maks. 1,5 m</td>
    <td>maks. 0,2 m/s (Çok yavaş)</td>
    <td>maks. 2 m/s²</td>
    <td>±0,05 – 0,1 mm</td>
    <td>Yüksek (Düşük devirde)</td>
    <td><strong>En Ucuz (1,0×)</strong></td>
    <td>Manuel ayar mekanizmaları, format değiştiriciler, asansör krikoları.</td>
  </tr>
  <tr>
    <td><strong>Triger Kayışlı Eksen</strong></td>
    <td><strong>6 – 10+ metre</strong></td>
    <td><strong>5 – 10 m/s (Çok Hızlı)</strong></td>
    <td><strong>30 – 50 m/s² (5G!)</strong></td>
    <td>±0,05 – 0,1 mm</td>
    <td>Orta (maks. 2 – 5 kN)</td>
    <td>Ekonomik – Orta</td>
    <td>Hızlı Pick & Place, paletleme robotları, koli paketleme, konveyör transfer.</td>
  </tr>
  <tr>
    <td><strong>Kremayer - Pinyon</strong></td>
    <td><strong>Sınırsız (10 – 50+ m)</strong></td>
    <td>3 – 5 m/s</td>
    <td>15 – 25 m/s²</td>
    <td>±0,02 – 0,05 mm (Q6)</td>
    <td><strong>EN YÜKSEK (Tonlarca İtme)</strong></td>
    <td>Pahalı</td>
    <td>Lazer/plazma kesim tablaları, dev CNC portalları, otomotiv gövde hatları.</td>
  </tr>
  <tr>
    <td><strong>Lineer Motor (Direct Drive)</strong></td>
    <td>maks. 4 – 6 m</td>
    <td><strong>&gt; 5 – 10 m/s</strong></td>
    <td><strong>&gt; 100 m/s² (10G!)</strong></td>
    <td><strong>±0,001 mm (1 Mikron!)</strong></td>
    <td>Orta – Yüksek</td>
    <td><strong>En Pahalı (5×)</strong></td>
    <td>Yarı iletken, wafer taşıma, mikron altı optik tarama, batarya dizim.</td>
  </tr>
  <tr>
    <td><strong>Pnömatik Silindir</strong></td>
    <td>maks. 1 – 2 m</td>
    <td>1 – 2 m/s</td>
    <td>Yüksek (Hava şoku)</td>
    <td>Sadece iki uçta (±0,05 mm)</td>
    <td>Orta (Hava basıncına bağlı)</td>
    <td>Çok Ucuz</td>
    <td>Noktadan noktaya (A'dan B'ye) basit it-çek işlemleri, iticiler.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Katalogdan Nominal Ömür (L10) ve Dinamik Eşdeğer Yük Hesabı</h2>
<p>Lineer bilyalı kılavuzların ve vidalı millerin ömrü saatle değil, <strong>kat edilen kilometre (km)</strong> cinsinden hesaplanır (ISO 14728 standardı):</p>
<div class="formul">
L<sub>10</sub> = ( C / ( f<sub>w</sub> · P ) )<sup>p</sup> × 50 km
<small>L10: %90 güvenilirlikle ulaşılan nominal ömür [km], C: Dinamik yük sayısı [N], P: Dinamik eşdeğer çalışma yükü [N], f<sub>w</sub>: Yük/titreşim faktörü</small>
</div>
<ul>
  <li><strong>Üs Değeri (p):</strong>
    <ul>
      <li>Bilyalı Sistemler için: <code>p = 3</code> (Noktasal temas).</li>
      <li>Makaralı Sistemler için: <code>p = 10 / 3 ≈ 3,33</code> (Çizgisel temas).</li>
    </ul>
  </li>
  <li><strong>Yük ve Darbe Faktörü (f<sub>w</sub>):</strong>
    <ul>
      <li>Düzgün, darbesiz, düşük hızlı çalışma (v &lt; 0,25 m/s): <code>f<sub>w</sub> = 1,0 … 1,2</code></li>
      <li>Normal çalışma, hafif titreşim (v = 0,25 … 1,0 m/s): <code>f<sub>w</sub> = 1,2 … 1,5</code></li>
      <li>Yüksek hız, ani yön değişimleri ve ağır darbeler (v &gt; 1,0 m/s): <code>f<sub>w</sub> = 1,5 … 3,0</code></li>
    </ul>
  </li>
</ul>

<h3>Saat Cinsinden Ömür (L<sub>h</sub>) Dönüşümü</h3>
<div class="formul">
L<sub>h</sub> = ( L<sub>10</sub> × 10⁶ ) / ( 2 · s · n<sub>dak</sub> · 60 ) &nbsp;&nbsp;[Saat]
<small>s: Strok boyu [mm], n<sub>dak</sub>: Dakikadaki çevrim (strok) sayısı [1/dak]</small>
</div>
<p><em>Endüstri standardı hedef: Günde 24 saat, 3 vardiya çalışan bir otomasyon makinesinde lineer ömür en az <strong>20.000 – 40.000 çalışma saati (yaklaşık 3–5 yıl)</strong> olarak hedeflenir.</em></p>

<h2>Mühendislik Karar Akış Şeması</h2>
<ol>
  <li><strong>Strok &gt; 4 metre mi?</strong>
    <ul>
      <li>Evet ve Yük Hafif/Hızlı → <strong>Omega Kayışlı Modül</strong>.</li>
      <li>Evet ve Yük Ağır/Yüksek Tork → <strong>Helis Kremayer-Pinyon</strong>.</li>
    </ul>
  </li>
  <li><strong>Hassasiyet ±0,01 mm ve Yüksek İtme Kuvveti mi lazım?</strong>
    <ul>
      <li>Evet (Strok &lt; 2,5 m) → <strong>Bilyalı Vidalı Mil (C5 / C7)</strong>.</li>
    </ul>
  </li>
  <li><strong>Hız &gt; 3 m/s, Çevrim Çok Seri, Pick & Place mi?</strong>
    <ul>
      <li>Evet → <strong>Triger Kayışlı Eksen</strong>.</li>
    </ul>
  </li>
  <li><strong>Mikron altı hassasiyet ve devasa dinamik (10G) mi lazım?</strong>
    <ul>
      <li>Evet → <strong>Lineer Motor (Direct Drive)</strong>.</li>
    </ul>
  </li>
  <li><strong>Dikey eksen, yavaş hareket, motor freni olmadan yük tutsun mu istiyorsun?</strong>
    <ul>
      <li>Evet → <strong>Otokontrollü Trapez Vida (Tr)</strong>.</li>
    </ul>
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
    <td><strong>ISO 14728</strong></td>
    <td>Lineer profil raylı kılavuzların ve arabaların dinamik yük sayılarını (C) ve nominal yorulma ömrü (L10) hesap metodolojisini tanımlayan uluslararası standarttır.</td>
  </tr>
  <tr>
    <td><strong>L<sub>10</sub> Nominal Ömür [km]</strong></td>
    <td>Aynı şartlarda çalışan özdeş lineer kılavuz grubunun en az %90'ının yuvarlanma yorulması hasarı (flaking) yaşamadan kat ettiği toplam kilometredir.</td>
  </tr>
  <tr>
    <td><strong>f<sub>w</sub> Yük/Darbe Faktörü</strong></td>
    <td>Titreşim, darbe ve ani ivmelenme şoklarının yatak temas yüzeyinde oluşturduğu ilave gerilmeleri ömür formülüne yansıtan dinamik katsayıdır.</td>
  </tr>
  <tr>
    <td><strong>C [N] Dinamik Yük Kapasitesi</strong></td>
    <td>Lineer arabanın 50 km nominal ömrü %90 güvenilirlikle tamamlayabilmesi için yönü ve büyüklüğü sabit referans yüktür (bazı Japon üreticilerde 100 km).</td>
  </tr>
  <tr>
    <td><strong>C₀ [N] Statik Yük Kapasitesi</strong></td>
    <td>Lineer araba dururken veya çok düşük hızdayken bilya-kanal temas noktasında 4200 MPa temas gerilmesine karşılık gelen kalıcı ezilme sınır yüküdür.</td>
  </tr>
  <tr>
    <td><strong>S₀ Statik Emniyet Katsayısı</strong></td>
    <td>Sisteme binen maksimum statik veya darbe yükünün statik yük kapasitesine oranıdır (S₀ = C₀ / P<sub>statik</sub> ≥ 2–3 olmalıdır).</td>
  </tr>
  <tr>
    <td><strong>L<sub>h</sub> [Saat]</strong></td>
    <td>Kat edilen nominal ömür kilometresinin eksen strok boyu ve dakikadaki çevrim sayısına bölünmesiyle elde edilen toplam aktif çalışma saati ömrüdür.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Lineer sistem ömrü <strong>L10 formülüyle (50 km baz alınarak)</strong> hesaplanır; bilyalıda üs 3, makaralıda 10/3'tür.</li>
  <li>Hesaplanan yüke titreşim ve ivmelenme durumuna göre mutlaka <strong>fw emniyet faktörü (1,2–2,0)</strong> uygulanmalıdır.</li>
  <li>Endüstriyel hedef ömür 3 vardiyalı fabrikada en az <strong>20.000 – 40.000 çalışma saati</strong> olmalıdır.</li>
  <li>Kısa strok + yüksek kuvvet = <strong>Vidalı Mil</strong>; Uzun strok + yüksek hız = <strong>Triger Kayış</strong>; Uzun strok + ağır tonaj = <strong>Kremayer</strong>.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Dinamik yük sayısı C = 20 kN olan bir bilyalı arabaya çalışma esnasında dinamik eşdeğer yük P = 10 kN biniyor (Darbe faktörü fw = 1,0). Bu arabanın nominal ömrü kaç km'dir? Yük iki katına çıkıp P = 20 kN olursa ömür nasıl değişir?</summary>
<div>Formülü uygulayalım (bilyalı için üs p=3):<br>
1. İlk durum: <code>L10 = (20 / 10)³ × 50 km = 2³ × 50 = 8 × 50 = <strong>400 km</strong></code>.<br>
2. Yük 2 katına çıkarsa (P = 20 kN): <code>L10 = (20 / 20)³ × 50 km = 1³ × 50 = <strong>50 km!</strong></code>.<br>
Görüldüğü gibi yük 2 katına çıktığında ömür yarıya inmez; küp oranıyla <strong>8 KAT (yani %87,5) AZALIR!</strong> Lineer bilyalı sistemlerde aşırı yük ömrü adeta yok eder.</div></details>
<details><summary>Bir konveyörden gelen kutuyu 300 mm yana itip bırakan ve günde 1000 kez çalışan basit bir mekanizmada vidalı mil veya servo modül kullanmak neden kötü bir mühendisliktir?</summary>
<div>Bu işlem ara pozisyonlama, hız kontrolü veya mikron hassasiyet gerektirmez; sadece iki uç nokta (A noktası ve B noktası) vardır. Bu iş için servo motor, sürücü ve vidalı mil kullanmak sistemi 10 kat daha pahalı, yazılımı karmaşık ve arıza ihtimalini yüksek hale getirir. Doğru mühendislik çözümü iki ucunda manyetik sensörü olan ucuz, sağlam ve bakım gerektirmeyen bir <strong>pnömatik kılavuzlu silindirdir (SMC MXS serisi)</strong>.</div></details>
<details><summary>Katalogda verilen dinamik yük sayısı (C) ile statik yük sayısı (C0) arasındaki temel fark nedir? Hangisi hangi hesapta kullanılır?</summary>
<div><strong>Dinamik Yük Sayısı (C):</strong> Sistemin hareket halindeyken 50 km (veya bazı üreticilerde 100 km) nominal ömre ulaşabileceği sabit teorik yüktür; <strong>ömür hesabında (L10)</strong> kullanılır.<br>
<strong>Statik Yük Sayısı (C0):</strong> Sistem dururken veya çok yavaş hareket ederken bilyalar ile yuvarlanma kanalı arasında kalıcı plastik deformasyon (ezilme / brinelling) yaratmayacak maksimum yük sınırıdır. Acil duruş freni ve çarpma darbelerinde <strong>statik emniyet faktörü (S0 = C0 / P_statik ≥ 2–3)</strong> kontrolünde kullanılır.</div></details>
</div>

<div class="ozet-kutu" style="border-left-color: #f59e0b; background: rgba(245,158,11,0.06);">
<h3>Modül 5 Büyük Mühendislik Kapanış Özeti</h3>
<ul>
  <li>Profil raylarda rijitlik ve moment direnci için <strong>Flanşlı (HGW)</strong>, dar alanlar için <strong>Blok (HGH)</strong> araba seç; montajda <strong>Master-Slave</strong> kuralını unutma.</li>
  <li>Tozlu, kaynak çapaklı ve açık ortamlarda bilyalı ray kilitlenir; <strong>V-kanallı makaralı (Hepco)</strong> kılavuz kullan. Yağsız gıda hatlarında <strong>DryLin polimer burç</strong> seç.</li>
  <li>Vidalı millerde kritik kamçılanma hızını (L²) ve Euler burkulmasını daima kontrol et; uzun eksenlerde <strong>High-Lead</strong> veya <strong>Döner Somun</strong> kullan.</li>
  <li>Dikey eksende yerçekimi düşmesini önleyen ucuz emniyet için tek ağızlı <strong>Otokontrollü Trapez Vida (Tr)</strong> rakipsizdir.</li>
  <li>Yüksek hız ve ivmede (5G) <strong>Triger Kayış</strong>; 4 metrenin üzerinde <strong>Omega Drive</strong>; tonlarca itme kuvveti ve uzun strokta sertleştirilmiş <strong>Helis Kremayer (Q6)</strong> seç.</li>
  <li>Hafif ve ultra dinamik X-Y eksenlerinde hareketli kafadan motorları kaldıran <strong>CoreXY mimarisini</strong> değerlendir.</li>
  <li>Lineer ömür yükün küpüyle (P³) ters orantılıdır; kataloğa göre <strong>L10 = (C/P)³ × 50 km</strong> hesabını yapmadan eksen sipariş etme!</li>
</ul></div>
`);
