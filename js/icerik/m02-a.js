// MODÜL 2 — İmalat Yöntemleri ve DFM (Bölüm 2.1 – 2.4: Talaşlı İmalat, CNC, Taşlama, Erozyon)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m2', '2-1', `
<p class="giris">CATIA veya SolidWorks ortamında bir arayüz ikonuna tıklayarak "Pad" veya "Pocket" komutuyla üç boyutlu katı model üretmek saniyeler sürer. Ancak o CAD geometrisini imalat atölyesindeki CNC operatörünün tezgâhına gönderdiğinizde; ekrandaki kusursuz keskin köşeler dönen silindirik freze çakılarına, mengene sıkma kuvveti elastik deformasyonlarına ve kesici takım rezonansına (chatter) toslar. Kıdemli bir mekanik tasarımcının yetkinliği; bilgisayar başında çizgi çekerken <strong>talaşın takım ağzından nasıl ayrıldığını, parçanın tezgâha hangi referans yüzeyinden bağlandığını ve takım tutucunun nerelere çarpabileceğini</strong> zihninde canlandırabilmesiyle ölçülür. Bu bölümde talaş kaldırma kinematiğini, kesme parametrelerini ve tezgâh bağlama stratejilerini inceliyoruz.</p>

<h2>Torna ve Freze: Temel Kinematik ve Geometrik Ayrım</h2>
<p>Geleneksel ve CNC talaşlı imalatın iki ana ekseni iş parçası ile kesici takım arasındaki bağıl hareket kinematiğine dayanır:</p>

<div class="iki-sutun">
  <div>
    <h4>Torna Tezgâhı (Turning / Lathe Kinematiği)</h4>
    <ul>
      <li><strong>Kinematik:</strong> İş parçası fener mili aynasında yüksek açısal hızla (n [d/dak]) döner; tek kesici ağızlı takım (kater) doğrusal Z (boyuna) ve X (radyal/çapa) eksenlerinde ilerleyerek talaş kaldırır.</li>
      <li><strong>Parça Geometrisi:</strong> <strong>Dönel simetriye (aksisimetrik)</strong> sahip tüm parçalar: Kademeli miller, akslar, hassas flanşlar, burçlar, kasnak göbekleri, silindirik pimler.</li>
      <li><strong>Tolerans Karakteri:</strong> Eş merkezlilik (konsantriklik), silindiriklik ve dairesel salgı tek bağlamada mikron mertebesinde (IT6–IT7) mükemmel çıkar.</li>
    </ul>
  </div>
  <div>
    <h4>Freze Tezgâhı (Milling Kinematiği)</h4>
    <ul>
      <li><strong>Kinematik:</strong> İş parçası tezgâh tablasına rijit şekilde sabitlenir; çok kesici ağızlı silindirik takım (parmak freze, tarama kafası) kendi ekseninde dönerek X, Y, Z kartezyen eksenlerinde talaş kaldırır.</li>
      <li><strong>Parça Geometrisi:</strong> Prizmatik, düzlemsel, derin cepli, kademeli ve serbest form yüzeyli gövdeler: Makine montaj tablaları, robot gripper gövdeleri, yataklama blokları.</li>
      <li><strong>Geometrik Sınır:</strong> Dönen silindirik takım geometrisi sebebiyle <strong>iç dikey köşeler daima takım yarıçapı kadar (R = D/2) kavisli kalmak zorundadır!</strong></li>
    </ul>
  </div>
</div>

<h2>Kesme Parametreleri ve Talaş Hacmi Analizi</h2>
<p>Mekanik tasarımcı doğrudan tezgâh işletmeyecek olsa dahi, seçtiği malzemenin imalat maliyetini ve tezgâh çevrim süresini belirleyen temel talaş fiziği formüllerine hakim olmalıdır:</p>

<div class="formul">
V<sub>c</sub> = ( π · d · n ) / 1000 &nbsp;&nbsp;[m/dak] &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
v<sub>f</sub> = n · z · f<sub>z</sub> &nbsp;&nbsp;[mm/dak] &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
Q = ( a<sub>p</sub> · a<sub>e</sub> · v<sub>f</sub> ) / 1000 &nbsp;&nbsp;[cm³/dak]
<small>V<sub>c</sub>: Çevresel kesme hızı [m/dak], d: Takım veya iş parçası çapı [mm], n: Fener mili devri [d/dak], z: Takım kesici ağız sayısı, f<sub>z</sub>: Diş başına ilerleme [mm/diş], Q: Birim zamanda kaldırılan talaş hacmi, a<sub>p</sub>: Eksenel kesme derinliği [mm], a<sub>e</sub>: Radyal kesme genişliği [mm]</small>
</div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Grubu</th>
    <th>Karbür Takımla Kesme Hızı V<sub>c</sub> [m/dak]</th>
    <th>İşlenebilirlik İndeksi (AISI 1212 = %100)</th>
    <th>Talaş Morfolojisi ve Isı Dağılımı</th>
    <th>Tasarımcıya İmalat ve Maliyet Mesajı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Alüminyum (EN AW-6082 T6)</strong></td>
    <td><strong>500 – 1500+ m/dak</strong></td>
    <td><strong>%350 – %450 (Mükemmel)</strong></td>
    <td>Talaş hızla uzaklaşır, ısının %80'i talaşla atılır.</td>
    <td>İşleme süresi çok kısadır. Masif bloktan derin havuzlar ve hafifletme cepleri boşaltmak son derece ekonomiktir.</td>
  </tr>
  <tr>
    <td><strong>Otomat Çeliği (11SMnPb30)</strong></td>
    <td>180 – 260 m/dak</td>
    <td>%130 – %140 (Çok İyi)</td>
    <td>Kurşun ve kükürt talaşı iğne gibi kırar.</td>
    <td>Talaş sarma problemi sıfırdır; seri torna burçlarında ve rakorlarda birim maliyet en düşüktür.</td>
  </tr>
  <tr>
    <td><strong>Genel Yapı Çeliği (S235JR)</strong></td>
    <td>120 – 180 m/dak</td>
    <td>%65 – %75 (Orta)</td>
    <td>Sünek akma talaşı, kesici takıma yığıntı katman (BUE) yapar.</td>
    <td>Yumuşaktır; derin finiş paso yüzeylerinde pürüzlü kalabilir (Ra ~1,6–3,2 µm).</td>
  </tr>
  <tr>
    <td><strong>Islah Çeliği (42CrMo4+QT)</strong></td>
    <td>90 – 140 m/dak</td>
    <td>%50 – %60 (Sert)</td>
    <td>Yüksek kesme kuvveti, kısa kırılan spiral talaş.</td>
    <td>Tezgâh gücü yüksek olmalıdır; ince cidarlı parçalarda kesme kuvvetinden esneme riski vardır.</td>
  </tr>
  <tr>
    <td><strong>Östenitik Paslanmaz (AISI 304)</strong></td>
    <td><strong>40 – 75 m/dak (Çok Düşük)</strong></td>
    <td><strong>%25 – %35 (Aşırı Zor)</strong></td>
    <td>Şiddetli pekleşme (work hardening), düşük ısıl iletkenlik.</td>
    <td>Kesici takımı hızla aşındırır. İşleme çevrim süresi karbon çeliğine göre <strong>en az 2,5–3 kat uzundur</strong>!</td>
  </tr>
  <tr>
    <td><strong>Titanyum Alaşımı (Ti6Al4V)</strong></td>
    <td>30 – 50 m/dak</td>
    <td>%15 – %20 (Ekstrem)</td>
    <td>Isı takım ucunda birikir (takım yanması).</td>
    <td>Yüksek basınçlı içten soğutma şarttır; yalnızca alternatifsiz havacılık/medikal parçalarda tercih edilir.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Parça Bağlama (Fixturing) Mekaniği ve Sıkma Deformasyonu</h2>
<p>Bir iş parçasının 6 serbestlik derecesinin (3 öteleme + 3 dönme) sıfırlanması için rijit şekilde referanslanıp sıkılması şarttır:</p>
<ul>
  <li><strong>3-2-1 Referanslama Prensibi:</strong> Parça önce 3 noktadan ana tabana (birincil düzlem), 2 noktadan yan düzleme (ikincil referans), 1 noktadan uç dayamaya (üçüncül referans) yaslanarak uzayda tam kilitlenir.</li>
  <li><strong>Mengene Sıkma Deformasyonu (Clamping Distortion):</strong> İnce cidarlı (örneğin 2–3 mm et kalınlığında) bir kutu gövde mengene çeneleri arasına sıkıldığında, cıvata ve hidrolik sıkma kuvveti altında 0,05–0,15 mm elastik olarak içe çöker. Tezgâh bu haldeyken yüzeyi ve delikleri kusursuz işler. Ancak mengene gevşetildiği an metal yaylanarak eski haline döner; düzlemsellik bozulur ve yuvarlak delikler ovalleşir!</li>
  <li><strong>Çözüm:</strong> Yumuşak alüminyum çenelere (soft jaws) parça konturu negatif işlenmeli, sıkma kuvveti geniş alana yayılmalı veya parçaya sonradan kesilip atılacak bağlama kulakları tasarlanmalıdır.</li>
</ul>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>V<sub>c</sub> (Kesme Hızı)</strong></td>
    <td>Kesici takım ucunun iş parçası yüzeyinde teğetsel olarak bir dakikada katettiği doğrusal bağıl mesafe [m/dak]. Takım aşınmasını belirleyen ana değişkendir.</td>
  </tr>
  <tr>
    <td><strong>v<sub>f</sub> (Tabla İlerleme Hızı)</strong></td>
    <td>Freze tablasının veya torna katerinin iş parçasına doğru bir dakikada ilerlediği eksenel hız [mm/dak]. Çevrim süresini doğrudan belirler.</td>
  </tr>
  <tr>
    <td><strong>BUE (Built-Up Edge / Yığıntı Katman)</strong></td>
    <td>Sünek metallerin (ör. yumuşak çelik veya alüminyum) işlenmesi sırasında yüksek basınç ve sürtünme ısısıyla kesici takım ucuna mikroskobik olarak kaynayan metal birikintisi. Yüzey kalitesini bozar.</td>
  </tr>
  <tr>
    <td><strong>Pekleşme (Work Hardening)</strong></td>
    <td>Östenitik paslanmazlar gibi malzemelerde kesici takımın yüzeyi ezmesiyle metalin plastik deformasyona uğrayarak yerel sertliğinin aniden 2 katına çıkması ve takımı köreltmesi olayı.</td>
  </tr>
  <tr>
    <td><strong>3-2-1 Kuralı</strong></td>
    <td>Rijit bir katı cismin 6 serbestlik derecesini (DoF) kısıtlamak için birincil düzlemde 3 nokta, ikincil düzlemde 2 nokta ve üçüncül düzlemde 1 temas noktası kullanma kinematiği.</td>
  </tr>
  <tr>
    <td><strong>Yumuşak Çene (Soft Jaw)</strong></td>
    <td>Mengene çelik çenelerinin yerine takılan ve işlenecek parçanın dış geometrisine göre özel taranarak temas alanını maksimize eden, ezilmeyi önleyen alüminyum/çelik çeneler.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Dönel simetrik parçalar (mil, flanş) torna; prizmatik ve cepli parçalar freze tezgâhında işlenir.</li>
  <li>Alüminyum 6082, çeliğe kıyasla 3–4 kat daha yüksek kesme hızlarıyla işlenir; talaş kaldırma süresi ve maliyeti en düşüktür.</li>
  <li>Östenitik paslanmaz çelik (304) pekleştiği ve ısıyı iletmediği için işleme maliyeti karbon çeliğinin yaklaşık 2,5–3 katıdır.</li>
  <li>Mengene sıkma kuvveti ince cidarlı parçaları büker; parçayı gevşettiğinizde delikler ovalleşir. Bağlama stratejisi tasarıma dahil edilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kare kesitli bir robot gövdesinin merkezindeki Ø80 H7 rulman yuvası neden torna tezgâhında değil de 3 eksen CNC frezede dairesel enterpolasyonla işlenir?</summary>
<div>Kare bir gövde tornanın fener mili aynasına bağlandığında yüksek devirde asimetrik kütle dağılımından dolayı devasa bir merkezkaç balanssızlık ve savrulma oluşturur; tezgâh yataklarına zarar verir. Ayrıca kare gövdenin köşeleri torna kızağına çarpabilir. Parçanın sabit kalıp silindirik takımın döndüğü frezeleme bu parçalar için kinematik ve emniyet açısından tek doğru yöntemdir.</div></details>
<details><summary>AISI 304 paslanmaz çelikten 8 adet derin havuz cebi olan bir robot kolu tasarladınız. İmalat atölyesi neden parçayı teslim etmekte çok gecikir ve yüksek fatura keser?</summary>
<div>304 paslanmaz çeliğin kesme hızı düşüktür (40–70 m/dak). Takım talaş kaldırırken metal hızla pekleşir ve kesici ağızları yakar. Takımlar sık sık aşınır veya kırılır; derin ceplerde talaş tahliyesi çok zordur. İşleme süresi alüminyuma göre en az 5 kat, standart çeliğe göre 2,5 kat daha uzundur. Mümkünse talaş kırıcılı 303 (1.4305) paslanmaz seçilmeli veya cepler hafifletme pencerelerine dönüştürülmelidir.</div></details>
<details><summary>Et kalınlığı 1,5 mm olan alüminyum bir sensör kutusunu mengenede standart torkla sıkarak işlerseniz ne problem yaşarsınız?</summary>
<div>Mengene çeneleri 1,5 mm'lik ince et kalınlığını elastik olarak içe doğru büzer. Tezgâhta delinen delik ve yüzeyler tezgâh koordinatında doğru görünür; fakat parça mengeneden söküldüğünde metal elastik olarak geri yaylanır (springback). Kutu dışa doğru genişler, işlenen delikler tolerans dışı ovalleşir ve kapak montaj vidaları delikleri karşılamaz.</div></details>
</div>
`);

KITAP.bolum('m2', '2-2', `
<p class="giris">CNC (Computer Numerical Control) işleme için tasarım (DFM - Design for Machining) yapmak, "ekranda çizdiğim her katı model tezgâhta bir şekilde çıkar" rehavetine kapılmak değildir. Yanlış yerleştirilmiş tek bir iç köşe radyüsü veya gereksiz derin çizilmiş dar bir cep; parçanın işleme süresini 15 dakikadan 3 saate çıkarabilir, takım kırılmalarını tetikleyebilir ve imalat maliyetini 5 katına fırlatabilir. Bu bölümde CNC işlemede maliyeti patlatan 6 kritik geometrik tuzağı, takım sehim mekaniğini ve köpek kemiği (dog-bone) boşaltma stratejilerini inceliyoruz.</p>

<h2>1. İç Köşe Radyüsü Kuralı: İç Köşe Asla Keskin Olamaz!</h2>
<p>Freze çakısı kendi ekseni etrafında dönen silindirik bir kesicidir. Dolayısıyla iki dikey duvarın birleştiği iç köşede <strong>en az takımın yarıçapı kadar (R = D/2) bir kavis kalmak zorundadır</strong>.</p>

<div class="kutu tehlike"><span class="kb">Kritik DFM Hatası: R = Takım Yarıçapı Çizmek</span>
Eğer bir iç köşeye tam <code>R5,0 mm</code> radyüs verirseniz, CNC operatörü orayı işlemek için zorunlu olarak <strong>Ø10 mm freze</strong> kullanır. Takım tam köşeye ulaştığında takım çevresinin 90°'lik çeyrek dilimi aynı anda malzemeye gömülür (Kavrama açısı 15°'den bir anda 90°'ye fırlar!). Kesme kuvvetleri tavan yapar, takım tırlar (chatter), yüzey kalitesi bozulur veya takım aşırı yükten kırılır.<br><br>
<strong>Altın DFM Kuralı:</strong> İç köşe radyüsünü daima standart takım yarıçapından <strong>en az 0,5 – 1,0 mm DAHA BÜYÜK</strong> tanımlayın!
<ul>
  <li>Köşeye <code>R5,0</code> yerine <code>R6,0</code> veya <code>R6,5 mm</code> verin.</li>
  <li>CNC tezgâhı köşeyi dönerken duraksamaz; takım yumuşak bir yay (circular interpolation) çizerek teğetsel akar. İşleme süresi %40 kısalır, takım ömrü 3 katına çıkar ve yüzey ayna gibi pürüzsüz çıkar!</li>
</ul></div>

<h2>Cebe Kare/Dikdörtgen Parça Girecekse Ne Yapılır? (Dog-Bone Boşaltması)</h2>
<p>Bir montaj cebine kare prizmatik bir sensör, rulman yatağı veya lineer araba sıfıra sıfır oturacaksa ve iç köşeler radyüslü kalırsa; parçanın köşeleri radyüse çarpar ve parça tabana oturamaz:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Köşe Boşaltma Yöntemi</th>
    <th>Geometrik Form ve Mantık</th>
    <th>Tezgâh ve İmalat Yöntemi</th>
    <th>Maliyet ve Tasarım Etkisi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Köpek Kemiği (Dog-Bone)</strong></td>
    <td>Freze çakısı köşe noktasını 45° açıyla çapı kadar dışarıya deler ve geri döner.</td>
    <td><strong>3 eksen standart CNC freze</strong> ile aynı bağlamada ve sıfır ek sürede yapılır.</td>
    <td><strong>En ucuz, en hızlı ve endüstri standardı çözümdür!</strong> Sıfır ek maliyet.</td>
  </tr>
  <tr>
    <td><strong>T-Bone Boşaltma</strong></td>
    <td>Takım köşede sadece tek bir duvara paralel olarak dışarı taşar.</td>
    <td>3 eksen freze ile yapılır.</td>
    <td>Dış yüzeylerden biri görünür veya sızdırmazlık yüzeyi olduğunda tercih edilir.</td>
  </tr>
  <tr>
    <td><strong>Tel Erozyonla Köşe Boşaltma</strong></td>
    <td>İç köşeler Ø0,25 mm tel ile R0,15 mm hassasiyetinde dik kesilir.</td>
    <td>Tel Erozyon (WEDM) tezgâhı.</td>
    <td><strong>Çok Pahalı!</strong> İkinci bir tezgâha bağlama ve uzun çevrim süresi gerektirir. Kalıplar hariç otomasyonda kaçınılmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Erkek Parçanın Köşelerine Pah Kırmak</strong></td>
    <td>Cebe giren parçanın dış 4 köşesine 45°'lik cömert pahlar (C3–C5) kırılır.</td>
    <td>Standart pah frezesi veya testere.</td>
    <td>Eğer erkek parçayı modifiye etme imkânınız varsa en temiz ve estetik çözümdür.</td>
  </tr>
</tbody>
</table>
</div>

<h2>2. Cep Derinliği ve Takım Boy/Çap Oranı (L/D Limiti)</h2>
<p>Bir parmak freze uzadıkça, elastomekanik kiriş teorisi gereği rijitliği boyunun küpüyle (L³) ters orantılı olarak çöker:</p>

<div class="formul">
δ = ( F · L³ ) / ( 3 · E · I ) &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
I = ( π · d⁴ ) / 64
<small>L: Takımın serbest boyu [mm], d: Takım şaft çapı [mm], E: Takım malzemesi elastisite modülü (Karbür için ~600 GPa)</small>
</div>

<p>Takım boyu 2 katına çıktığında esneme miktarı tam <strong>8 KAT ARTAR</strong>; takım çapı yarıya indiğinde ise esneme <strong>16 KAT ARTAR!</strong></p>
<ul>
  <li><strong>L/D ≤ 3 (Optimum DFM):</strong> Takım aşırı rijittir; yüksek kesme derinliği ve yüksek ilerleme ile titreşimsiz talaş kaldırılır.</li>
  <li><strong>L/D = 4 – 5 (Standart Sınır):</strong> Takım hafif esneme eğilimindedir; kesme derinliği (a<sub>p</sub>) ve ilerleme %40 düşürülmelidir.</li>
  <li><strong>L/D &gt; 6 (Maliyet Patlaması):</strong> Takım şiddetle tırlar (chatter). Kaba talaş alınamaz; operatör onda bir milimetrelik mikro pasolarla ilerlemek zorunda kalır. İşleme süresi 4 ila 8 kat uzar!</li>
  <li><strong>Derinlik ve Radyüs Altın Kuralı:</strong> Bir cep tasarlarken cep derinliği (H), iç köşe radyüsünün en fazla 6 katı (<code>H ≤ 6 · R<sub>köşe</sub></code>) olmalıdır. Eğer cep derinliği 60 mm ise, köşedeki radyüs en az R10 mm (Ø20 mm takım) seçilmelidir! 60 mm derinliğe R2 mm köşe çizmek imalatı felç eder.</li>
</ul>

<h2>3. İnce Cidarlar ve Duvar Kalınlığı Sınırları</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>İşlenen Malzeme</th>
    <th>Önerilen Minimum Duvar Kalınlığı (t<sub>min</sub>)</th>
    <th>Yüksek Duvarlar İçin Kriter (H &gt; 50 mm)</th>
    <th>İnce Duvar Deformasyon Mekanizması</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Alüminyum (6082-T6)</strong></td>
    <td><strong>1,0 – 1,5 mm</strong> (İdeal: ≥ 2,0 mm)</td>
    <td><strong>t ≥ H / 20</strong> (Ör. 60 mm duvar için min. 3,0 mm)</td>
    <td>Radyal kesme kuvveti duvarı esnetir; duvar geri yaylandığında dalgalı tırlama izleri ve kalınlık sapması oluşur.</td>
  </tr>
  <tr>
    <td><strong>Çelikler (S235, C45, 42CrMo4)</strong></td>
    <td><strong>1,5 – 2,0 mm</strong> (İdeal: ≥ 2,5 mm)</td>
    <td><strong>t ≥ H / 15</strong> (Ör. 60 mm duvar için min. 4,0 mm)</td>
    <td>Yüksek kesme kuvveti ince cidarı kalıcı olarak plastifiye edip eğebilir.</td>
  </tr>
  <tr>
    <td><strong>Mühendislik Plastiği (POM, PA)</strong></td>
    <td><strong>2,0 – 3,0 mm</strong></td>
    <td><strong>t ≥ H / 10</strong></td>
    <td>Düşük elastisite modülü (E ≈ 3 GPa) ve kesme ısısı duvarın formunu bozar.</td>
  </tr>
</tbody>
</table>
</div>

<h2>4. Kurulum ve Bağlama Sayısı (Setup Optimizasyonu)</h2>
<p>Standart 3 eksenli bir CNC frezede kesici takım parçaya yalnızca tek bir yönden (+Z ekseninden) yaklaşabilir. Eğer tasarladığınız parçanın 6 farklı yüzeyinde de cıvata delikleri, federler ve cepler varsa:</p>
<ol>
  <li>Operatör parçayı mengeneden 6 kez sökmek, çevirmek, çapaklarını temizlemek ve her seferinde 3D prob veya komparatörle sıfırlamak zorundadır (6 Ayrı Kurulum / Setup).</li>
  <li>Her yeni bağlama ek işçilik süresi demektir ve <strong>bağlama toleransı zinciri (tolerance stack-up) yüzeyler arası diklik ve eşmerkezlilik hassasiyetlerini bozar</strong>.</li>
  <li><strong>DFM İlkesi:</strong> Parçanın tüm kritik toleranslı deliklerini, rulman yuvalarını ve referans yüzeylerini <strong>TEK BİR BAĞLAMADA (Single Setup)</strong> işlenebilecek şekilde tasarlayın. Yan yüzeylerdeki önemsiz delikleri üst düzleme taşıyın veya parçayı iki basit gövdeye bölerek cıvatalayın!</li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Köpek Kemiği (Dog-Bone)</strong></td>
    <td>İç köşe radyüsünün kare erkek parçanın köşesine çarpmasını engellemek için freze çakısının köşe apeksini 45° açıyla delip geri çekilmesiyle oluşturulan boşaltma formu.</td>
  </tr>
  <tr>
    <td><strong>L/D Oranı (En-Boy Oranı)</strong></td>
    <td>Kesici takımın serbest konsol boyunun (L) şaft çapına (D) oranı. Takımın eğilme rijitliğini ve tırlama (chatter) eğilimini belirleyen temel sınır parametre.</td>
  </tr>
  <tr>
    <td><strong>Tırlama (Chatter)</strong></td>
    <td>Kesici takım ile iş parçası arasındaki dinamik kesme kuvvetlerinin rezonansa girmesiyle oluşan, yüzeyde dalgalı izler bırakan ve takımı kıran şiddetli mekanik titreşim.</td>
  </tr>
  <tr>
    <td><strong>Kavrama Açısı (Engagement Angle)</strong></td>
    <td>Freze takımının çevresinde aynı anda talaş kaldıran kesici ağız yay uzunluğunun açısal karşılığı. İç köşelerde aniden 90°'ye fırlayarak aşırı yükleme yaratır.</td>
  </tr>
  <tr>
    <td><strong>Setup (Kurulum / Bağlama)</strong></td>
    <td>İş parçasının tezgâh tablasına veya mengenesine belirli bir referans düzleminde tek seferde bağlanması ve sıfırlanması operasyonu.</td>
  </tr>
  <tr>
    <td><strong>Geri Yaylanma (Springback)</strong></td>
    <td>İnce cidarlı metal ve plastiklerin kesici takım kuvveti veya mengene sıkması kalktığında elastik olarak eski formuna dönmesi sonucu oluşan boyutsal sapma.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>İç köşe radyüsünü daima standart takım yarıçapından en az 0,5–1,0 mm daha büyük çizin (R &gt; D/2 + 0,5 mm).</li>
  <li>Kare parça oturacak ceplerde en hızlı ve ekonomik çözüm <strong>köpek kemiği (dog-bone)</strong> boşaltmadır.</li>
  <li>Takım sehimini ve tırlamayı önlemek için cep derinliği iç köşe radyüsünün en fazla 6 katı olmalıdır (H ≤ 6·R).</li>
  <li>Alüminyum parçalarda duvar kalınlığı 1,5 mm'nin altına düşürülmemelidir.</li>
  <li>Parçayı mümkünse tek bağlamada (single setup) bitecek şekilde kurgulayın; çoklu kurulumlar maliyeti katlar.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir cep tabanına kare bir rulman flanşı oturacaktır. İç köşeleri CAD modelde keskin köşe (R0) olarak bırakırsanız atölyede ne yaşanır?</summary>
<div>3 eksenli standart bir CNC freze keskin dikey iç köşe çıkaramaz. Operatör ya parçayı pahalı tel erozyona göndermek zorunda kalır ya da cebe giren flanşın köşeleri radyüse çarpıp dibe oturmaz. Tasarımcı köşelere dog-bone boşaltma eklemeli veya cebe giren flanşın köşelerine pah kırmalıdır.</div></details>
<details><summary>Derinliği 50 mm olan dar bir cebe iç köşe radyüsü olarak R2 mm verilirse takım ömrü ve işleme süresi nasıl etkilenir?</summary>
<div>R2 mm radyüs için en fazla Ø4 mm takım kullanılabilir. Takımın boy/çap oranı L/D = 50 / 4 = 12,5 olur! Takım rijitliği boyun küpüyle azaldığından, takım bir kıl gibi esner ve en küçük ilerlemede tırlayarak kırılır. Operatör mikro pasolarla ilerlemek zorunda kalır; işleme süresi 10 dakikadan 2 saate çıkar. Bu derinlik için radyüs en az R8–R10 mm yapılmalıdır.</div></details>
<details><summary>6 yüzeyinde de işleme olan bir parçayı iki ayrı parçaya bölüp cıvatayla birleştirmek neden tek parça işlemekten daha ucuz olabilir?</summary>
<div>6 yüzeyli tek parçayı işlemek 6 farklı bağlama (setup), 6 kez sıfırlama ve özel açılı mengene aparatları gerektirir; tezgâhın ayar süresi parça işleme süresinden uzun sürer. Parça ikiye bölündüğünde her iki parça da 3 eksen frezede üstten tek bağlamada hızla işlenir; tezgâh süresi ve hata riski yarıya iner.</div></details>
</div>
`);

KITAP.bolum('m2', '2-3', `
<p class="giris">Standart CNC freze ve torna tezgâhları genel makine parçalarında IT8–IT7 boyutsal toleransları ve Ra 1,6–3,2 µm yüzey pürüzlülüğünü kolaylıkla sağlar. Ancak yüksek hassasiyetli rulman yatakları (m5, k5 toleransları), lineer kılavuz ray yaslanma faturaları, hidrolik valf sürgüleri ve mikron-altı mastar blokları söz konusu olduğunda; kesici takımların geometrik sınırları aşılır. Bu kritik yüzeylerde mikron mertebesinde form doğruluğu (IT5–IT1) ve ayna pürüzsüzlüğü (Ra 0,05–0,4 µm) elde etmek için <strong>Taşlama, Honlama ve Lepleme</strong> aşındırıcı prosesleri kullanılır. Bu bölümde hassas yüzey işleme teknolojilerini ve DIN 509 taşlama kanalı standartlarını inceliyoruz.</p>

<h2>Aşındırıcı Finiş İşlem Yöntemleri Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Hassas İşlem Teknolojisi</th>
    <th>Boyut Toleransı Standardı</th>
    <th>Yüzey Pürüzlülüğü Ra [µm]</th>
    <th>Kaldırılan Finiş Talaş Payı</th>
    <th>Sertleştirilmiş Çeliğe (&gt; 60 HRC) Uygulanabilir mi?</th>
    <th>Endüstriyel Parça Örnekleri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Hassas CNC Freze / Torna</strong></td>
    <td>±0,010 – 0,020 mm (IT7)</td>
    <td>Ra 0,8 – 1,6 µm</td>
    <td>0,5 – 5,0 mm</td>
    <td>Zor (Sert tornalama max 55 HRC)</td>
    <td>Standart gövdeler, montaj tablaları, flanşlar.</td>
  </tr>
  <tr>
    <td><strong>Düzlem Yüzey Taşlama (Surface Grinding)</strong></td>
    <td><strong>±0,002 – 0,005 mm (IT5)</strong></td>
    <td><strong>Ra 0,2 – 0,4 µm</strong></td>
    <td>0,05 – 0,3 mm (Çok hassas)</td>
    <td><strong>EVET (60+ HRC için endüstri standardı)</strong></td>
    <td>Kalıp plakaları, makine kılavuz kızakları, kesme bıçakları, lineer ray montaj yüzeyleri.</td>
  </tr>
  <tr>
    <td><strong>Silindirik Taşlama (Dış / İç Çap)</strong></td>
    <td><strong>±0,001 – 0,003 mm (IT4–IT5)</strong></td>
    <td><strong>Ra 0,1 – 0,4 µm</strong></td>
    <td>0,05 – 0,2 mm</td>
    <td><strong>EVET (Sertleşmiş şaftlar)</strong></td>
    <td>Hassas iş milleri, rulman oturma çapları, lineer miller, hidrolik distribütör pistonları.</td>
  </tr>
  <tr>
    <td><strong>Puntasız Taşlama (Centerless)</strong></td>
    <td>±0,002 mm (Çapta)</td>
    <td>Ra 0,1 – 0,2 µm</td>
    <td>0,05 – 0,2 mm</td>
    <td>EVET</td>
    <td>Punta deliği olmayan uzun silindirik miller, hassas pimler (ISO 8734), iğneli rulman makaraları. Seri üretimdir.</td>
  </tr>
  <tr>
    <td><strong>Honlama (Honing)</strong></td>
    <td><strong>±0,001 mm (Kusursuz Silindiriklik)</strong></td>
    <td><strong>Ra 0,05 – 0,2 µm (Çapraz honlama deseni)</strong></td>
    <td>0,01 – 0,05 mm</td>
    <td>EVET</td>
    <td><strong>Pnömatik ve hidrolik silindir borularının iç çapı</strong>. Yağ filmini tutan 45°–60° çapraz mikro çizgiler üretir.</td>
  </tr>
  <tr>
    <td><strong>Lepleme (Lapping)</strong></td>
    <td><strong>±0,0005 mm (Sub-Mikron / IT1)</strong></td>
    <td><strong>Ra 0,01 – 0,05 µm (Ayna parlaklığı)</strong></td>
    <td>&lt; 0,01 mm</td>
    <td>EVET</td>
    <td>Granit mastarlar, mekanik salmastra yüzeyleri, optik aynalar, seramik valf diskleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Taşlama Tasarımında Hayati Kural: DIN 509 Boşaltma Kanalı</h2>
<p>Dönen bir taşlama diski silindirik bir milin kademe omzuna (faturasına) yanaşırken; taşın keskin dış köşesi aşırı sürtünme ve aşınma sebebiyle hızla mikro radyüs alır:</p>

<div class="kutu tehlike"><span class="kb">DIN 509 Kanalı Açılmazsa Ne Olur?</span>
Eğer mil kademe köşesine taşlama kanalı açılmazsa, taşlama diski faturanın dibini dik açıyla temizleyemez. Köşede minik konik bir tepecik veya kontrolsüz bir radyüs kalır. Rulman iç bileziği mile takıldığında faturaya sıfır dayanamaz; bu radyüsün üzerine biner. Sonuç: <strong>Eksen kaçıklığı, salgı ve rulmanın aşırı ısınarak birkaç haftada dağılması!</strong></div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>DIN 509 Formu</th>
    <th>Geometrik Yapı</th>
    <th>Kullanım Amacı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Form E</strong></td>
    <td>Sadece silindirik yüzeye doğru dalar, fatura yüzeyine dokunmaz.</td>
    <td>Yalnızca silindirik çapın taşlanacağı, faturanın taşlanmayacağı kademelerde.</td>
  </tr>
  <tr>
    <td><strong>Form F</strong></td>
    <td>Hem silindirik çapa hem de dikey fatura yüzeyine doğru açılı boşaltma yapar.</td>
    <td><strong>Rulman oturma yerleri için zorunludur!</strong> Hem mil çapı hem de dayama faturası taşlanacaksa kullanılır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Taşlama Operasyonunun İmalat Kısıtları</h2>
<ol>
  <li><strong>Manyetik Tabla Bağımlılığı:</strong> Düzlem taşlama tezgâhları parçayı mekanik mengene ile değil, yüksek güçlü elektromanyetik tablayla tutar. Bu nedenle <strong>ferromanyetik olmayan metaller (Östenitik 304 paslanmaz, alüminyum, pirinç, plastikler) manyetik tablaya yapışmaz!</strong> Bu malzemeleri taşlamak için vakumlu tablalar veya özel mekanik pabuç fikstürleri gerekir; imalat işçiliği ve maliyeti 3 katına çıkar.</li>
  <li><strong>İşleme Payı Disiplini:</strong> Taşlama tezgâhı kaba talaş kaldıramaz (taş dolar veya yanar). Kaba tornalama ve frezelemede parçaya <code>0,2 – 0,4 mm</code> taşlama payı bırakılmalıdır.</li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>DIN 509 Taşlama Kanalı</strong></td>
    <td>Silindirik taşlama sırasında taşın köşe aşınmasından doğan kalıntı radyüsü sıfırlamak ve rulmanın faturaya tam yaslanmasını sağlamak için mil kademelerine açılan standart kanal formu.</td>
  </tr>
  <tr>
    <td><strong>Honlama Çapraz Deseni (Cross-Hatch)</strong></td>
    <td>Honlama taşlarının dönme ve doğrusal strok hareketlerinin bileşkesiyle silindir iç cidarında oluşturulan 45°–60° açılı mikro yağ tutma kanalcıkları ağı.</td>
  </tr>
  <tr>
    <td><strong>Lepleme (Lapping)</strong></td>
    <td>İki yüzey arasına serbest aşındırıcı sıvı macun (elmas veya silisyum karbür tozu) sürülerek mikron-altı düzlemsellik ve ayna parlaklığı elde edilen en hassas finiş prosesi.</td>
  </tr>
  <tr>
    <td><strong>Puntasız Taşlama (Centerless)</strong></td>
    <td>Parçayı punta deliklerinden bağlamadan, bir kesme taşı ile bir sevk diski arasında serbest yuvarlayarak silindirik dış çapı mikron hassasiyetinde işleyen yüksek hızlı finiş tezgâhı.</td>
  </tr>
  <tr>
    <td><strong>Manyetik Tabla Tutuşu</strong></td>
    <td>Düzlem taşlama tezgâhlarında parçayı mekanik deformasyon olmadan tüm yüzeyinden homojen çeken elektromanyetik bağlama sistemi (ferritik/martenzitik çelikler gerektirir).</td>
  </tr>
  <tr>
    <td><strong>Taş Dolması (Wheel Loading)</strong></td>
    <td>Yumuşak veya sünek metallerin (alüminyum, bakır) taşlama taşının aşındırıcı gözeneklerini tıkayarak kesme yeteneğini yok etmesi ve sürtünmeyle parçayı yakması hasarı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Taşlama, 60 HRC sertleştirilmiş çeliklerde IT5 toleransı ve Ra 0,2–0,4 µm yüzey elde etmenin standart yöntemidir.</li>
  <li>Rulman dayama faturalarında rulmanın eksenel tam oturması için mutlaka <strong>DIN 509 F taşlama kanalı</strong> açılmalıdır.</li>
  <li>Honlama, pnömatik ve hidrolik silindir iç çaplarında yağ filmini tutan çapraz çizgiler ve mükemmel dairesellik sağlar.</li>
  <li>Alüminyum ve 304 paslanmaz manyetik tablaya yapışmadığı için düzlem taşlaması zordur ve maliyeti yüksektir.</li>
  <li>Kaba işlemede taşlama için yüzey başına 0,2–0,4 mm finiş talaş payı bırakılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Taşlanmış bir mil kademesine rulman takıldığında rulmanın salgılı döndüğü ve faturaya tam yaslanmadığı görülmüştür. Kumpasla yapılan ölçümde mil çapı doğrudur. Kök neden nedir?</summary>
<div>Kök neden faturanın dibinde <strong>DIN 509 taşlama boşaltma kanalının</strong> bulunmamasıdır. Taşlama diskinin köşesindeki mikro aşınma sebebiyle faturanın dip köşesinde görünmeyen minik bir radyüs kalmıştır. Rulmanın iç bileziği bu radyüsün üzerine bindiği için faturaya tam dik basamamış ve mil ekseninde açısal salgı oluşmuştur.</div></details>
<details><summary>Hidrolik silindir borusunun iç çapı tornada çok hassas (H7 toleransında) işlenmesine rağmen keçe neden 1 ayda aşınıp yağ kaçırır?</summary>
<div>Torna tezgâhı ne kadar hassas olursa olsun kesici takım uç geometrisinden dolayı yüzeyde tek yönlü helisel mikro kanallar bırakır. Yüksek hidrolik basınç altında yağ bu mikro helis boyunca sızar ve kuru sürtünmeyle poliüretan piston keçesini aşındırır. Honlama işlemi ise 45° çapraz açılı mikro çizgilerle yağı hapsettiği için sızdırmazlığı korur ve keçeyi yağlar.</div></details>
<details><summary>304 paslanmaz çelikten 500x300x20 mm bir montaj plakasının yüzeyini düzlem taşlama tezgâhında taşlatmak isteyen tasarımcıya imalat sorumlusu neden itiraz eder?</summary>
<div>304 paslanmaz çelik östenitiktir ve ferromanyetik değildir; düzlem taşlama tezgâhının elektromanyetik tablası parçayı çekip tutamaz. Parçayı taşlamak için mekanik pabuçlar bağlamak gerekir; pabuçlar taşlama taşının hareket alanını kısıtlar, kurulum çok zahmetlidir ve maliyet çeliğe göre 3 katına çıkar.</div></details>
</div>
`);

KITAP.bolum('m2', '2-4', `
<p class="giris">Talaşlı imalat mekaniğinde kesici takımın sertliği iş parçasından daima daha yüksek olmak zorundadır. Peki iş parçası zaten 64 HRC sertliğinde bir takım çeliğiyse, sert metal karbür bir zımbaysa ya da freze çakısının asla giremeyeceği derinlikte sıfır radyüslü (R = 0,05 mm) keskin bir iç kama kanalı açmanız gerekiyorsa? Kesici takımların mekanik olarak çaresiz kaldığı bu alanda, elektrik arklarıyla metali atomik düzeyde buharlaştıran <strong>EDM (Electrical Discharge Machining / Erozyon)</strong> teknolojisi devreye girer. Bu bölümde tel erozyon, dalma erozyon, dielektrik dinamikleri ve beyaz tabaka (recast layer) tehlikesini inceliyoruz.</p>

<h2>EDM Çalışma Prensibi ve Malzemenin Tek Şartı</h2>
<p>Elektrot (takım) ile iş parçası arasında mikron mertebesinde bir boşluk (spark gap / kıvılcım aralığı: 10–50 µm) bulunur ve ortam deiyonize su veya dielektrik hidrokarbon yağ ile doldurulur. Elektrot ile parça arasına yüksek frekanslı darbeli doğru akım uygulandığında dielektrik sıvı iyonlaşır ve kontrolsüz bir plazma arkı (kıvılcım) çakar:</p>

<ul>
  <li>Ark temas noktasında yerel sıcaklık anlık olarak <strong>8.000 – 12.000 °C</strong> seviyesine fırlar.</li>
  <li>Metal parçacığı mikro ölçekte erir ve buharlaşır; dielektrik sıvının basınçlı sirkülasyonu bu eriyik kürecikleri bölgeden süpürür.</li>
  <li><strong>Erozyonun Altın Metalurji Kuralı:</strong> Erozyon mekanik talaş kaldırma kuvveti uygulamaz; termal buharlaştırma yapar. Bu nedenle malzemenin sertliğinin (ister 20 HRC yumuşak yapı çeliği olsun ister 68 HRC sert karbür) <strong>KESME HIZINA VE KABİLİYETİNE KESİNLİKLE HİÇBİR ETKİSİ YOKTUR!</strong></li>
  <li><strong>Tek Zorunlu Kriter:</strong> Malzeme <strong>elektrik akımını iletmelidir</strong>. Çelikler, alüminyum, titanyum, bakır, pirinç ve grafit kesilebilir; ancak seramikler, cam ve plastikler erozyonla İŞLENEMEZ!</li>
</ul>

<h2>Tel Erozyon (Wire EDM) vs. Dalma Erozyon (Sinker EDM)</h2>
<div class="iki-sutun">
  <div>
    <h4>Tel Erozyon (Wire EDM / WEDM)</h4>
    <ul>
      <li><strong>Takım:</strong> Makaradan sürekli beslenen Ø0,10 – Ø0,30 mm çapında pirinç veya çinko kaplı tel.</li>
      <li><strong>Çalışma Prensibi:</strong> 2 eksenli veya üst-alt kafa bağımsız hareketli 4 eksenli (konik kesim) bir dekupaj testeresi gibi davranır. Parçayı boydan boya kesip kontur çıkarır.</li>
      <li><strong>Yetenekleri:</strong>
        <ul>
          <li>Köşe radyüsü neredeyse sıfırdır (R ≈ 0,15 mm tel yarıçapı kadar).</li>
          <li>Hassas kama kanalları, pinyon dişliler, sac kesme zımbaları ve matrisleri.</li>
          <li>400 mm kalınlığa kadar dev çelik blokları mikron hassasiyetinde kesebilir.</li>
        </ul>
      </li>
    </ul>
  </div>
  <div>
    <h4>Dalma Erozyon (Sinker / Die-Sinking EDM)</h4>
    <ul>
      <li><strong>Takım:</strong> CNC frezede negatif formu işlenmiş <strong>Bakır veya Yüksek Yoğunluklu Grafit elektrot</strong>.</li>
      <li><strong>Çalışma Prensibi:</strong> Elektrot Z ekseninde parçaya doğru mikro adımlarla dalar; kendi şeklinin negatifini iş parçasında kör bir oyuk olarak çıkarır.</li>
      <li><strong>Yetenekleri:</strong>
        <ul>
          <li><strong>Kör cepler</strong>, iç altıgen yuvalar, plastik enjeksiyon kalıp kaviteleri, kabartma gravürler.</li>
          <li>Dönen takımların giremediği keskin iç taban köşelerini ve kör delikleri kusursuz boşaltır.</li>
        </ul>
      </li>
    </ul>
  </div>
</div>

<h2>Erozyonda Tasarım Kuralları ve Beyaz Tabaka (White / Recast Layer) Tehlikesi</h2>
<ol>
  <li><strong>Başlangıç Deliği (Start Hole / Super Drill):</strong> Tel erozyon parçayı dış kenardan kesmeye başlayabilir. Ancak parçanın içindeki kapalı bir havuzu veya iç kama kanalını kesecekse, telin parçanın içinden geçebilmesi için önceden <strong>hızlı delme erozyonuyla (Ø1,0–2,0 mm) bir başlangıç deliği</strong> delinmelidir. Tasarımcı kapalı iç konturlarda bu delik payını hesaba katmalıdır.</li>
  <li><strong>Beyaz Tabaka (Recast Layer) Metalurjisi:</strong> Kıvılcımla ergiyen metalin dielektrik sıvı tarafından aniden söndürülmesiyle parça yüzeyinde 5–25 µm kalınlığında <strong>aşırı sert, aşırı gevrek ve mikro çatlaklarla dolu bir beyaz tabaka</strong> oluşur. Bu tabaka temizlenmezse, dinamik titreşim ve yorulma altındaki parçalarda mikroskobik çatlaklar hızla ilerleyerek erken kırılmaya yol açar. <strong>Önlem:</strong> Tel erozyonda en az 3–4 kademe finiş pasosu (trim cut) atılmalı veya yüzey parlatılmalıdır.</li>
  <li><strong>Zaman ve Maliyet Gerçeği:</strong> Erozyon metali atom atom erittiği için <strong>frezeden 15 ila 30 kat daha yavaş çalışır!</strong> Hacimsel boşaltmalar asla erozyonla yapılmaz. Parça önce frezede kaba olarak boşaltılır, gerilim giderme tavı yapılır, sertleştirilir; son mikron hassasiyetli konturlar erozyonla kesilir.</li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Tel Erozyon (WEDM)</strong></td>
    <td>Wire Electrical Discharge Machining. Sürekli yenilenen iletken tel elektrot ile iş parçası arasında oluşturulan elektrik arklarıyla iletken malzemeleri kesen CNC tezgâhı.</td>
  </tr>
  <tr>
    <td><strong>Dalma Erozyon (Sinker EDM)</strong></td>
    <td>Bakır veya grafitten özel işlenmiş form elektrodunu dielektrik sıvı içinde iş parçasına daldırarak kör kalıp cepleri ve karmaşık kaviteler oluşturan erozyon yöntemi.</td>
  </tr>
  <tr>
    <td><strong>Dielektrik Sıvı</strong></td>
    <td>Erozyon bölgesinde yalıtkanlık sağlayan, ark gerilimi aşıldığında plazma kanalına dönüşen ve eriyen mikro metal küreciklerini soğutup uzaklaştıran sıvı (deiyonize su/gazyağı).</td>
  </tr>
  <tr>
    <td><strong>Beyaz Tabaka (Recast / White Layer)</strong></td>
    <td>Erozyon arkı sırasında eriyip dielektrik sıvısıyla ani soğuyan metalin yüzeyde oluşturduğu aşırı sert, mikroskobik çekme gerilmeli ve mikro çatlaklı artık katman.</td>
  </tr>
  <tr>
    <td><strong>Kıvılcım Aralığı (Spark Gap)</strong></td>
    <td>Elektrot ile iş parçası arasında deşarj arkının oluşabilmesi için CNC eksen kontrolüyle korunan mikroskobik çalışma mesafesi (genellikle 10–50 µm).</td>
  </tr>
  <tr>
    <td><strong>Hızlı Delik Delme (Super Drill)</strong></td>
    <td>Tel erozyon teline başlangıç geçiş deliği açmak amacıyla içinden basınçlı su geçen döner pirinç/bakır boru elektrot kullanan yüksek hızlı mikro erozyon delme tezgâhı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Erozyon için tek şart malzemenin elektriksel iletkenliğidir; parçanın 62 HRC sertlikte olması kesme hızını etkilemez.</li>
  <li>Plastikler, cam ve seramikler elektrik iletmedikleri için erozyonla kesinlikle işlenemez.</li>
  <li>Tel erozyon 2D ve konik açık/kapalı konturlar (kama kanalları, zımbalar); dalma erozyon ise kör cepler ve kalıp oyukları içindir.</li>
  <li>Kapalı ceplerde tel erozyon için önceden <strong>hızlı delme (Super Drill) deliği</strong> planlanmalıdır.</li>
  <li>Erozyon yüzeyinde oluşan gevrek <strong>beyaz tabaka</strong> dinamik yorulmalı parçalarda çok pasolu finiş kesimlerle temizlenmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>60 HRC sertleştirilmiş bir redüktör pinyon dişlisinin göbeğine kör (arkası kapalı) bir iç altıgen vida başı yuvası açılacaktır. Hangi tezgâh seçilmelidir?</summary>
<div>Dalma Erozyon (Sinker EDM). Parça 60 HRC sertleştirildiği için freze kesicileri çalışamaz; delik kör (arkası kapalı) olduğu için tel erozyon teli geçiremez. CNC frezede bakır veya grafitten erkek altıgen bir elektrot işlenir ve dalma erozyon tezgâhında parçanın içine daldırılarak altıgen yuva mikron hassasiyetinde boşaltılır.</div></details>
<details><summary>Plastik enjeksiyon kalıbı yapan bir atölye, POM (Delrin) malzemeden prototip bir dişliyi tel erozyonda kestirmek istemiştir. Erozyon operatörü neden parçayı tezgâha bağlamaz?</summary>
<div>POM plastik bir polimerdir ve dielektrik bir elektrik yalıtkanıdır. Erozyon tezgâhında kesme arkının (plazma deşarjının) oluşabilmesi için iş parçasının elektrik akımını iletmesi zorunludur. Yalıtkan malzemelerde ark oluşamaz ve erozyon gerçekleşemez. POM parçalar CNC frezede kesici takımlarla işlenmelidir.</div></details>
<details><summary>Tel erozyondan çıkan 1.2379 sac kesme zımbası tek pasoda kesilip doğrudan pres kalıbına takılmıştır. Zımba ilk 500 vuruşta kesme kenarından çatlayarak kırılmıştır. Kök neden nedir?</summary>
<div>Tek pasoda (kaba erozyon) kesilen parçanın yüzeyinde 20–30 µm kalınlığında aşırı gevrek ve mikro çatlaklı bir <strong>beyaz tabaka (recast layer)</strong> kalır. Presin dinamik darbe kuvvetleri altında bu mikro çatlaklar hızla gövdeye doğru ilerleyerek zımbanın aniden kırılmasına yol açar. Çözüm: Tel erozyonda en az 3–4 kademe finiş kesimi (trim cut) atılarak beyaz tabaka mikron seviyesine indirilmeli ve ardından hafif gerilim giderme temperlemesi yapılmalıdır.</div></details>
</div>
`);
