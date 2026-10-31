// MODÜL 8 — Şase ve Konstrüksiyon (Bölüm 8.4 – 8.6: Ayarlanabilir Tasarım, Ayaklar ve Taşıma, Koruyucu Muhafazalar)
// Bilimsel, Mekanik ve İmalat Odaklı Derinlemesine Mühendislik Kılavuzu

KITAP.bolum('m8', '8-4', `
<p class="giris">Talaşlı imalat, lazer kesim ve kaynak süreçlerinde hiçbir bileşen nominal ölçüsünde kusursuz üretilemez; her parçanın geometrik ve boyutsal tolerans yığılmaları (tolerance stack-up) montaj hattında toplanır. Deneyimsiz bir tasarımcının "her şeyi teknik resim toleransıyla sıfıra sıfır tuttururum" yanılgısı, montaj teknisyeninin sahada parçaları taşlayarak veya delikleri eğeleyerek sistemi kurtarmaya çalışmasıyla sonuçlanır. Profesyonel otomasyon mühendisliği; kaçınılmaz imalat sapmalarını kabul eden, kritik montaj eksenlerine deterministik ayar mekanizmaları entegre eden ve ayar tamamlandığında sistemi rijit şekilde kilitleyen <strong>"Önce Hizala, Sonra Sabitle" (Align then Clamp/Dowel)</strong> felsefesine dayanır. Bu bölümde kinematik kısıtlama prensiplerini, mikrometrik ayar elemanlarını ve hizalama metrolojisini inceliyoruz.</p>

<h2>Kinematik Bağlantı ve Aşırı Kısıtlama (Over-Constraint) Teorisi</h2>
<p>Üç boyutlu uzayda serbest duran rijit bir cismin <strong>6 Serbestlik Derecesi (Degrees of Freedom - DoF)</strong> vardır: 3 öteleme (T<sub>x</sub>, T<sub>y</sub>, T<sub>z</sub>) ve 3 dönme (R<sub>x</sub>, R<sub>y</sub>, R<sub>z</sub>). Grübler-Kutzbach kriterine göre bir mekanik bağlantıda serbestlik sayısı:</p>
<div class="formul">
DoF = 6 - C = 0 &nbsp;&nbsp;[Tam Kinematik Kısıtlama]
<small>C: Mekanik temas noktalarıyla kısıtlanan serbestlik sayısı. Eğer C = 6 ise sistem tam kısıtlıdır. Eğer C &gt; 6 ise sistem hiperstatiktir (aşırı kısıtlıdır).</small>
</div>

<h3>Aşırı Kısıtlamanın (Over-Constraint) Yarattığı Yıkım</h3>
<p>Eğer bir parçayı konumlandırmak için 6'dan fazla temas noktası kullanılırsa (C &gt; 6):</p>
<ul>
  <li>Parça geometrisindeki mikronluk boyutsal hatalar montaj esnasında parçaları birbirine karşı elastik olarak kasmaya zorlar (iç gerilme / parasitic strain).</li>
  <li>Klasik Hatalar:
    <ul>
      <li>Bir mili <strong>3 adet rulmanla</strong> yataklamak (3 rulman merkez ekseni asla kusursuz çakışmaz; mil her turda eğilerek döner ve yorulmadan kırılır).</li>
      <li>Bir plakayı <strong>4 adet silindirik pimle</strong> merkezlemeye çalışmak (Pim delikleri eksen mesafesi hatası yüzünden plaka deliklere kasar ve çekiçle vurulsa bile oturmaz - Modül 3).</li>
      <li>İki paralel profil rayın yanına rijit olarak üçüncü bir kılavuz mil bağlamak.</li>
    </ul>
  </li>
</ul>

<h3>Kusursuz Kinematik Eşleşme: Kelvin ve Maxwell Bağlantıları</h3>
<p>Takım değiştirici magazinlerinde, optik ölçüm kafalarında ve yüksek hassasiyetli fikstür paletlerinde; parçanın her sökülüp takıldığında <strong>mikron altı (&lt; 0.5 µm) tekrarlanabilirlikle</strong> aynı konuma oturmasını sağlayan temas geometrileri:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kinematik Bağlantı Tipi</th>
    <th>Temas Noktaları Mimarisi</th>
    <th>Kısıtlanan Serbestlik</th>
    <th>Avantajı ve Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kelvin Bağlantısı (Küre - Yuva Geometrisi)</strong></td>
    <td>
      1. Küre: <strong>Konik Yuvaya</strong> oturur (3 nokta temas → 3 öteleme kilitli: T<sub>x</sub>, T<sub>y</sub>, T<sub>z</sub>).<br>
      2. Küre: <strong>V-Kanalına</strong> oturur (2 nokta temas → 2 dönme kilitli: R<sub>x</sub>, R<sub>y</sub>).<br>
      3. Küre: <strong>Düz Plakaya</strong> basar (1 nokta temas → Son dönme kilitli: R<sub>z</sub>).
    </td>
    <td><strong>Tam 6 Temas Noktası (C = 6, DoF = 0)</strong></td>
    <td>Sıfır kasıntı, mükemmel termal merkezleme. Optik ölçüm cihazları (CMM) prob tablaları, lazer tarayıcı kafaları.</td>
  </tr>
  <tr>
    <td><strong>Maxwell Bağlantısı (3x V-Kanal)</strong></td>
    <td>Alt tablaya 120° açıyla yerleştirilmiş 3 adet V-kanalına, üst tabladaki 3 adet küresel bilya oturur (Her V-kanal 2 temas noktası verir: 3 × 2 = 6).</td>
    <td><strong>Tam 6 Temas Noktası (C = 6, DoF = 0)</strong></td>
    <td>İmalatı Kelvin'e göre daha simetriktir; yüksek termal simetri sağlar (merkezden dışa eşit genleşir). Fikstür paletleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Ayarlama Mekanizmaları Kataloğu ve Matematiksel Modelleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Ayar Mekanizması</th>
    <th>Kinematik Prensip</th>
    <th>Ayar Çözünürlüğü</th>
    <th>Kuvvet Kapasitesi</th>
    <th>Mühendislik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>İtme / Baskı Cıvatası (Jack Screw)</strong></td>
    <td>İnce dişli metrik vida ucuyla karşı gövdeyi eksenel itme</td>
    <td>0,02 – 0,05 mm (Komparatör ile kontrollü)</td>
    <td>Yüksek</td>
    <td>Ağır elektrik motoru-redüktör kaplin hizalaması, profil rayların referans omzuna sıfırlanması.</td>
  </tr>
  <tr>
    <td><strong>Diferansiyel Vida (Differential Screw)</strong></td>
    <td>Aynı mil üzerinde farklı iki hatve: ΔP = |P₁ - P₂|</td>
    <td><strong>0,001 – 0,005 mm (Mikrometrik!)</strong></td>
    <td>Orta</td>
    <td>Mil 1 tur döndüğünde net ilerleme: Δs = P₁ - P₂. (Örn: M8x1.25 ve M6x1.0 vida ile tur başına net <strong>0,25 mm</strong> ilerleme!). Optik ve lazer odaklama eksenleri.</td>
  </tr>
  <tr>
    <td><strong>Eksantrik Pim / Burç (Eccentric Cam)</strong></td>
    <td>Mil merkezinden e ofsetli dönme yarıçapı: Δy = e · sin(θ)</td>
    <td>0,01 mm</td>
    <td>Çok Yüksek</td>
    <td>V-yivli makara yataklarının (Hepco) raya boşluksuz ön yüklenmesi, pinyon-kremayer diş boşluğu ayarı.</td>
  </tr>
  <tr>
    <td><strong>Şimleme (Shimming - Ayar Sacı)</strong></td>
    <td>Kalibre kalınlıklı lamine/hassas paslanmaz sac paketleri</td>
    <td>0,02 – 0,05 mm adımlar</td>
    <td>En Yüksek (Metal yüzey basması)</td>
    <td>Dikey yükseklik kaçıklıkları, mil ayak yataklarının (plummer block) terazilenmesi.</td>
  </tr>
  <tr>
    <td><strong>Eğik Düzlem / Takoz (Wedge Adjustment)</strong></td>
    <td>Küçük açılı (α ≈ 3° - 5°) iki kamalı takozun birbirine sürülmesi</td>
    <td>Δh = Δx · tan(α) ≈ 0,05 · Δx</td>
    <td>Aşırı Yüksek (Ağır tonajlı presler)</td>
    <td>Ağır makine kolonlarının yükseklik ayarı, takım tezgahı kızak boşluk kamaları (gib strips).</td>
  </tr>
</tbody>
</table>
</div>

<h2>Şim Tasarımının 5 Altın Kuralı</h2>
<div class="kutu ipucu"><span class="kb">Hatasız Şimleme Metodolojisi</span>
<ol>
  <li><strong>Nominal Negatif Boşluk Bırak:</strong> Altına şim konacak plakayı CAD modelinde nominalden <strong>1.0 mm daha düşük</strong> tasarla. Sahada parçayı inceltmek (talaş kaldırmak) devasa zaman ve para kaybıdır; ancak araya 1.0 mm şim eklemek saniyeler sürer.</li>
  <li><strong>U-Kesitli (Çatal) Tasarım:</strong> Şimleri kapalı delik değil, U şeklinde yarık slotlu yap. Böylece montaj cıvatasını tamamen sökmeden, cıvatayı 2 tur gevşetip şimi araya sürebilirsin.</li>
  <li><strong>Lamine Soyulabilir Şim (Laminated Peelable Shims):</strong> Özel epoksiyle yapıştırılmış 0.05 mm'lik paslanmaz/pirinç folyo katmanlarından oluşur. Teknisyen falçata ucuyla tek tek katmanları soyarak mikron hassasiyetinde kalınlığı anında yakalar.</li>
  <li><strong>Maksimum 3 Şim Kuralı:</strong> Bir ayak altına asla 10 tane ince şim üst üste konmaz! Çok katmanlı şim paketi sünger gibi davranarak yapının elastik rijitliğini çökertebilir. En fazla 2–3 katman kullanılmalıdır.</li>
  <li><strong>Malzeme:</strong> Asla pirinç veya galvaniz sac kullanma; dinamik yükte ezilir. Yalnızca <strong>soğuk haddelenmiş 1.4301 (AISI 304) yay sertliğinde paslanmaz çelik şim</strong> kullanılmalıdır.</li>
</ol>
</div>

<h2>"Önce Hizala, Sonra Sabitle" (Match-Drilling & Pinning) Prosedürü</h2>
<p>Kritik bir robot flanşı veya transfer modülünün sahada kalıcı olarak sıfırlanma disiplini:</p>
<ol>
  <li><strong>Kaba Montaj:</strong> Parça, montaj yüzeyine cıvataların gövde boşluğu toleransı içinde (delikler cıvatadan 1 mm büyüktür) gevşekçe takılır.</li>
  <li><strong>Ölçüm & Metroloji:</strong> Komparatör (dial indicator) veya lazer tracker ile X, Y ve Z eksenlerindeki kaçıklıklar taranır. İtme cıvataları (jack screws) ve şimlerle parça nominal koordinatına 0.01 mm'den az sapmayla getirilir.</li>
  <li><strong>Torklama:</strong> Ana montaj cıvataları çapraz sıralamayla hedef tork değerine sıkılır. Torklama anında komparatör izlenir; cıvata sıkılırken parçanın kaymadığı doğrulanır.</li>
  <li><strong>Eşleyerek Delme ve Raybalama (Match Drilling & Reaming):</strong> Parça doğru konumda kilitliyken, daha önceden parça üzerinde bırakılmış kılavuz deliklerinden alt gövdeye doğru seyyar manyetik matkapla delik delinir ve <strong>H7 toleransında raybalanır</strong>.</li>
  <li><strong>Pim Çakma:</strong> İki adet sertleştirilmiş silindirik merkezleme pimi (biri silindirik, biri elmas pim - Modül 3) çakılır.</li>
  <li><strong>Kazanım:</strong> Bu makine 5 yıl sonra arıza veya bakım için tamamen sökülse bile; montaj teknisyeni parçayı yerine koyup pimleri çaktığında komparatör kullanmadan <strong>birebir aynı 0.01 mm konumuna kilitlenir!</strong></li>
</ol>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead><tr><th>Terim / Sembol</th><th>Bilimsel & Mühendislik Tanımı</th></tr></thead>
<tbody>
  <tr>
    <td><strong>Kinematik Eşleşme (Kinematic Coupling)</strong></td>
    <td>Bir rijit cismin 6 serbestlik derecesini, tam olarak 6 bağımsız noktasal temas ile aşırı kısıtlama (over-constraint) ve iç gerilme yaratmadan deterministik olarak kilitleyen bağlantı geometrisidir.</td>
  </tr>
  <tr>
    <td><strong>Aşırı Kısıtlama (Over-Constraint / Hiperstatiklik)</strong></td>
    <td>Bir gövdenin serbestlik derecesinden daha fazla sayıda mekanik sınır şartı ile kısıtlanması durumu (C &gt; 6). Parçalar imalat toleransları sebebiyle birbirini kasmaya zorlar.</td>
  </tr>
  <tr>
    <td><strong>İtme Cıvatası (Jack Screw)</strong></td>
    <td>Bir montaj flanşının veya motor kaidesinin kenarına diş açılmış delikten geçen, ucu karşı gövdeye basarak parçayı mikron mikron itip hizalamayı sağlayan yardımcı ayar vidasıdır.</td>
  </tr>
  <tr>
    <td><strong>Diferansiyel Vida</strong></td>
    <td>İki ucu farklı hatvelere (P₁ ve P₂) sahip tek bir milin döndürülmesiyle, tur başına iki hatvenin farkı kadar (ΔP = P₁ - P₂) ultra hassas doğrusal ilerleme sağlayan mekanik düzenek.</td>
  </tr>
  <tr>
    <td><strong>Eşleyerek İşleme (Match Drilling)</strong></td>
    <td>İki parçanın nihai montaj konumunda komparatörle hizalanıp kilitlenmesinin ardından, pim deliklerinin her iki parçadan aynı anda tek operasyonda delinip raybalanması işlemidir.</td>
  </tr>
  <tr>
    <td><strong>DIN 877 Hassas Su Terazisi</strong></td>
    <td>Makine yatakları ve rayların düzlemselliğini ölçen, hassasiyeti 0,02 mm/m (metre başına 20 mikron eğim) mertebesinde olan optik kabarcıklı metroloji aletidir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Mekanik sistemlerde tam kinematik kısıtlama için serbestlik sayısı <strong>tam 6 olmalıdır (DoF = 6 - C = 0)</strong>; aşırı kısıtlama iç gerilme ve kasıntı yaratır.</li>
  <li>Mikron altı tekrarlanabilirlikte sökülüp takılan fikstürlerde <strong>Kelvin veya Maxwell kinematik eşleşmeleri</strong> kullanılır.</li>
  <li>Ayarlanacak yüzeyler CAD ortamında nominalden <strong>1.0 mm daha düşük tasarlanmalı</strong> ve araya U-kesitli paslanmaz şim konulmalıdır.</li>
  <li>İnce eksenel ilerleme için <strong>Diferansiyel vidalar</strong>, dikey yükseklik için <strong>kamalı eğik takozlar</strong> tercih edilir.</li>
  <li>Hizalama tamamlandıktan sonra sistem mutlaka <strong>Match-Drilling ile delinip H7 pimlenmelidir</strong>; böylece bakım sonrası ayar kaybolmaz.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir fikstür plakasının altına 1 mm kalınlığında 20 adet 0.05 mm'lik ince şim sacını üst üste dizerek koydun. Cıvataları 50 Nm ile sıktın. Makine çalışırken komparatörle ölçtüğünde plakanın dikeyde 0.1 mm yaylandığını gördün. Sehim hesabında plaka rijit çıkmıştı. Sorun nedir?</summary>
<div>Sorun <strong>"Şim Paketi Sünger Etkisi"dir (Shim Pack Softness)</strong>. 20 adet ince sac üst üste konulduğunda, her sacın yüzeyindeki mikroskobik pürüzlülük tepeleri ve aradaki mikro hava boşlukları birleşerek devasa bir non-lineer yay katsayısı oluşturur. Cıvata sıkılsa bile dinamik yük altında bu katmanlar elastik olarak basılır ve rijitlik çöker. Doğru yöntem: 0.8 mm kalınlığında tek parça masif taşlanmış çelik plaka koyup, üzerine sadece 4 adet 0.05 mm şim ekleyerek katman sayısını en fazla 2–3 ile sınırlamaktır.</div></details>
<details><summary>Diferansiyel vida mekanizmasında sağ taraftaki vida dişi M10x1.5, sol taraftaki vida dişi M8x1.25 olsun. Vida gövdesini saat yönünde tam 1 tur çevirdiğinde aradaki mekanizma net olarak kaç mm ilerler?</summary>
<div>Diferansiyel vidada ilerleme iki hatvenin cebirsel farkıdır:
<div class="formul">
Δs = P₁ - P₂ = 1,50 mm - 1,25 mm = 0,25 mm (250 µm)
</div>
Kullanıcı standart anahtarla kaba bir şekilde 1 tur döndürdüğü halde mekanizma yalnızca 0.25 mm ilerler. 15 derecelik küçük bir çevirme açısıyla yaklaşık 0,01 mm (10 mikron) hassasiyetinde mikrometrik ayar yapılabilir.</div></details>
<details><summary>Bir lineer modülü şaseye bağlarken hem cıvata deliklerini H7 raybalayıp rayba pimi gibi sıfıra sıfır işledin, hem de arkasına 2 adet merkezleme pimi koydun. Montaj teknisyeni cıvataları takamadı ve delikleri delmeye çalıştı. Tasarım hatası nedir?</summary>
<div>Cıvatalar <strong>konumlandırma elemanı DEĞİLDİR, sadece baskı (kenetleme) elemanıdır</strong>. Cıvata delikleri daima ISO 273 standardına göre cıvata çapından büyük (clearance hole) delinmelidir (örneğin M8 cıvata için delik Ø9.0 mm açılır). Parçanın konumunu sadece ve sadece 2 adet merkezleme pimi belirlemelidir. Cıvata deliklerini dar işlemek sistemi aşırı kısıtlar (over-constraint); cıvatalar delik kenarlarına kasar ve montaj imkânsız hale gelir.</div></details>
</div>
`);

KITAP.bolum('m8', '8-5', `
<p class="giris">Bir makinenin mühendislik başarısı sadece çalışma anındaki kinematik performansıyla değil; imalat atölyesinden çıkıp müşterinin fabrikasına ulaşana kadarki lojistik serüveniyle de ölçülür. CATIA'da mükemmel tasarlanmış 5 tonluk bir montaj hücresi; ağırlık merkezi yanlış hesaplandığı için vinçle kaldırılırken ters dönebilir, tır kapısından geçmeyebilir, forklift çatalları şaseyi alttan ezebilir veya fabrikadaki bozuk beton zemin yüzünden şase burularak rayları kilitleyebilir. Bu bölümde makine ayaklarının elastodinamik yük dağılımını, rezonans izolasyonunu, vinç mapa açılarının trigonometrik kapasite kaybını ve uluslararası lojistik sınırlarını inceliyoruz.</p>

<h2>Makine Ayakları Mekaniği ve Hiperstatik Zemin Reaksiyonları</h2>
<p>Dört ayaklı dikdörtgen bir şase zemine oturtulduğunda, sistem statik açıdan <strong>hiperstatiktir (derece 1 belirsiz)</strong>. Fabrika zeminindeki beton mastar hataları sebebiyle 4 ayaktan biri daima daha az yük alır veya havada kalır; çaprazdaki iki ayak ise tüm ağırlığı taşımaya zorlanır.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Ayak Türü</th>
    <th>Mekanik Yapı</th>
    <th>Sönümleme Yeteneği</th>
    <th>Yanal Rijitlik</th>
    <th>Mühendislik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Mafsallı Ayar Ayağı (Articulated Leveling Foot)</strong></td>
    <td>M16–M36 dişli mil + tabanda bilyalı küresel mafsal (±15° açı toleransı)</td>
    <td>Çok Düşük (Sert çelik/naylon taban)</td>
    <td>Düşük (Yatay kaymaya karşı zayıf)</td>
    <td>Eğik fabrika zeminlerinde konveyörler, montaj hatları, hafif otomasyon masaları.</td>
  </tr>
  <tr>
    <td><strong>Elastomer Titreşim İzolasyon Ayağı (AirLoc / Bilz)</strong></td>
    <td>Yüksek yoğunluklu NBR veya poliüretan sönümleme pedi tabanlı çelik gövde</td>
    <td><strong>ÇOK YÜKSEK (ζ ≈ 0.10–0.15)</strong></td>
    <td>Orta</td>
    <td>Darbeli presler, eksantrik makineler, hassas koordinat ölçüm (CMM) tablaları.</td>
  </tr>
  <tr>
    <td><strong>Zemine Ankrajlı Ayak (Flanged Anchor Foot)</strong></td>
    <td>Tabanında 2 veya 4 adet kimyasal çelik dübel deliği bulunan döküm gövde</td>
    <td>Düşük</td>
    <td><strong>ÇOK YÜKSEK (Zemine rijit kilitli)</strong></td>
    <td><strong>Endüstriyel robot kaideleri, yüksek ivmeli (a &gt; 10 m/s²) gantry portalları.</strong> Devrilme momentini karşılar.</td>
  </tr>
  <tr>
    <td><strong>Kombine Tekerlekli Ayak (Lift-Up Caster / Foot Caster)</strong></td>
    <td>İç içe geçmiş poliüretan tekerlek ve indirilebilir kauçuk pabuçlu ayar ayağı</td>
    <td>Orta</td>
    <td>Düşük</td>
    <td>Mobil test istasyonları, prototip hücreleri, sık yer değiştiren hatlar.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Ayak Boyutlandırmada Güvenlik Katsayısı Kuralı</span>
Toplam ağırlığı G = 3000 kg olan 4 ayaklı bir makinede ayak başına 3000 / 4 = 750 kg yük düşeceği varsayımı ölümcül bir mühendislik hatasıdır!
1. Ağırlık merkezi (CoG) hiçbir zaman geometrik merkezde değildir (motorlar, elektrik panosu, robot tek bir köşede toplanır).
2. Zemin çarpıklığı yüzünden yükün %80'i iki çapraz ayağa binebilir.
3. Eksen ivmelenmeleri devrilme momenti (M = m · a · h) yaratarak ön ayaklara dinamik yük bindirir.
<strong>Kural:</strong> Tek bir ayağın statik yük kapasitesi (F<sub>ayak</sub>), <strong>toplam makine ağırlığının en az %40 ila %50'sini tek başına taşıyacak şekilde</strong> seçilmelidir:
<div class="formul">
F<sub>ayak,katalog</sub> ≥ 0,50 · G<sub>toplam</sub> + F<sub>dinamik</sub>
</div>
</div>

<h2>Titreşim İzolasyonunun Fiziği: Transmisibilite (Geçirgenlik)</h2>
<p>Bir makinenin altına kauçuk titreşim ayağı koyduğunuzda, sistem kütle-yay modeline dönüşür. İzolasyonun başarılı olabilmesi için çalışma frekansının (ω), ayakların doğal frekansına (ω<sub>n</sub>) oranı:</p>
<div class="formul">
ω / ω<sub>n</sub> &gt; √2 ≈ 1,414 &nbsp;&nbsp;[İzolasyon Şartı!]
</div>
<ul>
  <li>Eğer ω / ω<sub>n</sub> &lt; √2 ise (yani ayak gereğinden fazla sert seçilmişse veya çalışma devri düşükse); <strong>Titreşim sönümlenmez, tam aksine ZEMİNE KATLANARAK İLETİLİR!</strong> Sistem rezonans bölgesindedir.</li>
  <li>Etkili bir izolasyon için oran ω / ω<sub>n</sub> ≥ 2,5 … 3,0 olmalıdır; böylece zemine iletilen titreşim %80–90 oranında yok edilir.</li>
</ul>

<h2>Kaldırma Mekaniği: DIN 580 Mapa Cıvata Tuzağı</h2>
<p>Bir makineyi vinçle kaldırırken şaseye vidalanan kaldırma halkaları (mapa cıvatalar - DIN 580) kullanılır. Birçok mühendis bu mapaların üzerindeki taşıma kapasitesinin (WLL) sadece <strong>tam eksenel dikey çekme</strong> için geçerli olduğunu bilmez!</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Sapan Açısı (Düşeyle Yapılan Açı β)</th>
    <th>DIN 580 Sabit Mapa Taşıma Kapasitesi</th>
    <th>Mekanik Açıklama ve Tehlike</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>0° (Tam Düşey Çekme)</strong></td>
    <td><strong>%100 Kapasite (Nominal WLL)</strong></td>
    <td>Sadece eksenel çekme gerilmesi vardır.</td>
  </tr>
  <tr>
    <td><strong>45° Açılı Sapan</strong></td>
    <td><strong>Kapasite %30'a DÜŞER! (%70 Kayıp!)</strong></td>
    <td>Cıvatanın boğazına devasa bir <strong>eğilme momenti (M<sub>b</sub>)</strong> biner; cıvata diş dibinden kesilerek kırılabilir!</td>
  </tr>
  <tr>
    <td><strong>90° (Yatay Çekme)</strong></td>
    <td><strong>Kapasite %25'e DÜŞER! KESİNLİKLE YASAKTIR!</strong></td>
    <td>Cıvata eğilmeden dolayı plastik olarak bükülür ve kopar.</td>
  </tr>
  <tr>
    <td><strong>Çözüm: Döner Mafsallı Kaldırma Halkası (Swivel Hoist Ring)</strong></td>
    <td><strong>Her Açıda (0°–90°) %100 TAM KAPASİTE!</strong></td>
    <td>Gövdesi bilyalı yataklıdır ve 360° dönebilir, halkası 180° yatar. Sapanın yönünü kendisi alarak cıvataya eğilme momenti binmesini fiziksel olarak engeller.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu tehlike"><span class="kb">Uzun Şaselerde Sapanla Kaldırma = Kalıcı Deformasyon</span>
6 metre uzunluğundaki bir işleme şasesini iki ucundan sapanla V şeklinde bağlayıp tek bir vinç kancasıyla kaldırırsanız; sapanlar şaseyi içeriye doğru tonlarca yatay basma kuvvetiyle sıkar, şase ortadan sarkar. Kaldırma anında oluşan gerilme akma sınırını geçer ve işlenmiş ray yüzeyleri kalıcı olarak bükülür! <strong>Kural: Uzun makinelerde sapanların şaseye tam 90° dik inmesini sağlayan Traversli Kaldırma Kirişi (Spreader Beam) kullanılmalıdır.</strong></div>

<h2>Lojistik Gabarileri ve Fabrika İçi Taşınabilirlik Standartları</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Taşıma Aracı / Sınır</th>
    <th>Maksimum Genişlik</th>
    <th>Maksimum Yükseklik</th>
    <th>Maksimum Uzunluk</th>
    <th>Tasarımcı İçin Kritik Not</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Standart Tır / Tenteli Dorse</strong></td>
    <td><strong>2.450 mm</strong> (İç net)</td>
    <td><strong>2.600 – 2.700 mm</strong></td>
    <td>13.600 mm</td>
    <td>Makinenin ayakları, panosu ve sarkan sensörleri dahil genişliği <strong>maksimum 2.350 mm</strong> tutulmalıdır (Yükleme toleransı için 100 mm pay bırak).</td>
  </tr>
  <tr>
    <td><strong>Mega Dorse (Lowbed)</strong></td>
    <td>2.450 mm</td>
    <td><strong>2.950 – 3.000 mm</strong></td>
    <td>13.600 mm</td>
    <td>Yüksek tavanlı makineler için özel tır gerekir; nakliye maliyeti %30–50 daha yüksektir.</td>
  </tr>
  <tr>
    <td><strong>40' High Cube (HC) Deniz Konteyneri</strong></td>
    <td><strong>2.340 mm (Kapı Girişi!)</strong></td>
    <td><strong>2.585 mm (Kapı Girişi!)</strong></td>
    <td>12.030 mm</td>
    <td>İhracat makinelerinde konteyner kapısından geçmeyen 10 mm'lik bir çıkıntı yüzünden makine limanda kalır!</td>
  </tr>
  <tr>
    <td><strong>Fabrika Standart Yangın/Servis Kapısı</strong></td>
    <td>2.000 – 2.200 mm</td>
    <td>2.100 – 2.400 mm</td>
    <td>—</td>
    <td>Müşterinin fabrikatörüne ilk sorulacak soru: "Montaj sahasına giden en dar kapının net ölçüsü nedir?" olmalıdır.</td>
  </tr>
</tbody>
</table>
</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead><tr><th>Terim / Sembol</th><th>Bilimsel & Mühendislik Tanımı</th></tr></thead>
<tbody>
  <tr>
    <td><strong>WLL (Working Load Limit)</strong></td>
    <td>Kaldırma ve bağlama elemanlarının normal çalışma şartları altında güvenle taşıyabileceği, üretici tarafından garanti edilen maksimum çalışma yükü sınırıdır (Emniyet katsayısı genelde 4:1 veya 5:1'dir).</td>
  </tr>
  <tr>
    <td><strong>Döner Mafsallı Kaldırma Halkası (Swivel Hoist Ring)</strong></td>
    <td>İçindeki bilyalı/kaymalı yatak sayesinde 360° eksenel dönebilen ve 180° yatabilen, açılı çekmelerde bağlantı cıvatasına eğilme momenti bindirmeyen ağır hizmet kaldırma elemanı.</td>
  </tr>
  <tr>
    <td><strong>Traversli Kaldırma Kirişi (Spreader Beam)</strong></td>
    <td>Vinç kancasından gelen açılı çekme kuvvetlerini kendi üzerinde basma gerilmesine dönüştürerek, sapanların yükün üzerine tam dikey (90°) inmesini sağlayan yapısal kaldırma kirişi.</td>
  </tr>
  <tr>
    <td><strong>Rötresiz Harç (Non-Shrink Grout)</strong></td>
    <td>Ağır makine taban plakaları ile beton zemin arasına dökülen, sertleşirken büzülme (rötre) yapmayan, tam tersine hafif genleşerek boşlukları %100 dolduran yüksek mukavemetli çimento/epoksi harç.</td>
  </tr>
  <tr>
    <td><strong>Kimyasal Ankraj</strong></td>
    <td>Beton zemine açılan deliğe epoksi veya vinilester reçine kartuşu sıkılarak yüksek mukavemetli dişli rotun betona yapıştırılması; genleşmeli mekanik dübellere göre çok daha yüksek dinamik çekme mukavemeti sağlar.</td>
  </tr>
  <tr>
    <td><strong>Gabarit (Loading Gauge)</strong></td>
    <td>Karayolu, demiryolu veya denizyolu taşımacılığında araçların tünellerden, köprü altlarından ve kapılardan güvenle geçebilmesi için belirlenen yasal maksimum dış boyut sınırlarıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>4 ayaklı makineler zeminde hiperstatiktir; tek bir ayak kapasitesi <strong>toplam kütlenin en az %40–50'sini</strong> taşıyacak şekilde seçilmelidir.</li>
  <li>Kauçuk titreşim izolatörünün çalışması için sistemin çalışma frekansı ayak rezonans frekansının <strong>en az √2 (tercihen 2.5–3) katı</strong> olmalıdır.</li>
  <li>Sabit mapa cıvatalar (DIN 580) 45° açılı çekmede kapasitesinin <strong>%70'ini kaybeder</strong>; açılı kaldırmalarda mutlaka <strong>döner mafsallı kaldırma halkaları</strong> kullanılmalıdır.</li>
  <li>Uzun şaseleri kaldırırken bükülmeyi önlemek için mutlaka <strong>traversli kaldırma kirişi (spreader beam)</strong> tasarlanmalıdır.</li>
  <li>Uluslararası taşımada 40' HC konteyner kapı ölçüsü (2.340 × 2.585 mm) aşılmamalı; büyük makineler modüler parçalara bölünmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>4 tonluk bir kaynaklı gövdenin 4 köşesine M20 DIN 580 standart mapa cıvata taktın (Her birinin dikey WLL kapasitesi 1200 kg'dır). Vinç operatörü 2 kollu sapanı kancaya takıp kaldırdı ve sapanlar düşeyle 60° açı yaptı. Bu kaldırma neden ölümcül bir tehlike taşır?</summary>
<div>İki devasa hata vardır:
1. Sapan açısı 60° olduğunda sapan kollarındaki çekme kuvveti trigonometrik olarak ikiye katlanır:
<div class="formul">
F = G / [ 2 · cos(60°) ] = 4000 / ( 2 × 0.5 ) = 4000 kg! (Kol başına)
</div>
2. DIN 580 sabit mapa 45°'nin üzerindeki açılarda yatay eğilme momentine maruz kalır ve güvenli taşıma kapasitesi nominalin <strong>%25'ine (yani 1200 kg'dan 300 kg'a!) düşer</strong>.
300 kg kapasiteli mapaya 4000 kg kuvvet biner; mapalar anında kopar ve 4 tonluk makine yere çakılır! Çözüm: Açıya göre kapasite kaybetmeyen <strong>döner mafsallı kaldırma halkaları</strong> ve açıyı küçülten <strong>traversli kaldırma kirişi</strong> kullanmaktır.</div></details>
<details><summary>Fabrikaya yeni kurulan bir optik kalite kontrol makinesinin yanından forklift her geçtiğinde, makinenin kamerası titreşimden dolayı hatalı ölçüm yapıyor. Ayakların altına rastgele yumuşak bir lastik takoz koydun ama titreşim daha da delirdi. Neden?</summary>
<div>Seçilen rastgele lastik takozun yay sabiti (k) ile makinenin kütlesi (m) birleşerek öyle bir doğal frekans (f<sub>n</sub>) oluşturmuştur ki, forkliftin motor devri veya tekerlek darbe frekansı bu frekansla çakışmış ve <strong>sistemi rezonansa sokmuştur (ω / ω<sub>n</sub> ≈ 1)</strong>. İzolasyon sağlamak için makinenin doğal frekansı, forkliftin yarattığı frekansın çok altında kalmalıdır (f<sub>n</sub> &lt; f<sub>uyarı</sub> / √2). Mühendislik hesabı yapılmadan rastgele takoz konulamaz; katalogdan rezonans frekansı 3–5 Hz olan hava yastıklı veya kalibre edilmiş özel elastomer pedler (AirLoc) seçilmelidir.</div></details>
<details><summary>Tasarımını yaptığın bir montaj hattı modülünün dıştan dışa genişliği 2.400 mm'dir. Makine tır dorsesine yüklenecektir. Nakliye firması bu makineyi görünce neden ekstra ücret veya eskort talep edebilir?</summary>
<div>Standart tır dorsesinin iç net genişliği 2.450 mm'dir. 2.400 mm'lik bir makinede yanlarda sadece 25'er mm (2.5 cm) boşluk kalır! Forkliftle dorsenin içine girip yanaşırken en ufak bir salınımda makine dorse direklerine çarpar. Eğer dışarıda bir elektrik panosu kolu veya cıvata başı 55 mm taşarsa makine dorseye hiç sığmaz; <strong>"Gabari Dışı (Geniş Yük)"</strong> sınıfına girer. Bu durum özel izinler, eskort araç ve 2 kat nakliye maliyeti demektir. Standart bir kural olarak makine genişliği <strong>en fazla 2.300–2.350 mm</strong> seviyesinde tutulmalıdır.</div></details>
</div>
`);

KITAP.bolum('m8', '8-6', `
<p class="giris">Mekanik konstrüksiyon tasarımında emniyet koruyucuları (guarding) ve hücre muhafazaları, projenin sonunda alelacele eklenen sac veya pleksiglas paneller değildir. Bir otomasyon makinesinin yasal olarak CE işareti alabilmesi, işletmeye alınabilmesi ve insan hayatını koruyabilmesi; <strong>EN ISO 14120 (Muhafazalar), EN ISO 13857 (Güvenlik Mesafeleri) ve EN ISO 14119 (Kilitleme Cihazları)</strong> uluslararası standartlarına tam uyumuna bağlıdır. Yanlış tasarlanmış, görüşü engelleyen, ergonomiyi bozan veya bakımı zorlaştıran bir muhafaza; operatör tarafından 1 ay içinde devre dışı bırakılır (köprülenir) ve ölümcül iş kazalarına davetiye çıkarır. Bu bölümde muhafaza tiplerinin standart sınıflandırmasını, darbe dayanım mekaniğini, güvenlik mesafesi formülasyonunu ve manipülasyonu önleme prensiplerini inceliyoruz.</p>

<h2>EN ISO 14120 Standardına Göre Muhafaza Türleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Muhafaza Sınıfı</th>
    <th>Mekanik Tanım</th>
    <th>Bağlantı & Donanım Şartı</th>
    <th>Hangi Durumlarda Zorunludur?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sabit Muhafaza (Fixed Guard)</strong></td>
    <td>Alet (anahtar, alyan vb.) kullanılmadan açılamayan veya sökülemeyen rijit panel.</td>
    <td><strong>Kaybolmaz Bağlantı Elemanı (Captive Fasteners):</strong> Muhafaza söküldüğünde cıvata, pul ve somunlar panelin veya şasenin üzerinde asılı kalmalıdır; yere düşüp kaybolmamalıdır!</td>
    <td>Tehlike bölgesine yılda veya ayda bir (periyodik revizyon hariç) nadiren girilen arka ve yan bölgeler.</td>
  </tr>
  <tr>
    <td><strong>Hareketli Muhafaza (Movable Guard - Kapı)</strong></td>
    <td>Alet kullanmadan elle (menteşeli veya raylı) açılabilen emniyet kapısı.</td>
    <td><strong>Emniyet Kilitleme Cihazı (Interlock Switch):</strong> Kapı açıldığı an tehlikeli makine hareketine giden güç donanımsal olarak kesilmelidir (EN ISO 14119).</td>
    <td>Vardiyada bir veya günde birkaç kez erişim gereken istasyonlar (parça besleme, takım değiştirme, ayar).</td>
  </tr>
  <tr>
    <td><strong>Kilit Tutmalı Hareketli Muhafaza (Guard Locking)</strong></td>
    <td>Tehlikeli hareket mekanik olarak %100 durana kadar kapıyı kilitli tutan solenoid mekanizmalı kapı.</td>
    <td>Kapı açma butona basıldığında PLC frenleme yapar; tehlikeli hareketin sıfır hıza indiği sensörle doğrulanınca kilit bobini açılır.</td>
    <td><strong>Duruş süresi uzun olan sistemler:</strong> Yüksek ataletli volanlar, testereler, santrifüjler ve hızlı endüstriyel robot hücreleri.</td>
  </tr>
  <tr>
    <td><strong>Ayarlanabilir Muhafaza (Adjustable Guard)</strong></td>
    <td>İş parçasının boyutuna göre açıklığı manuel veya otomatik ayarlanabilen koruyucu.</td>
    <td>Ayarlandıktan sonra aletsiz hareket etmemeli, kilitlenebilmelidir.</td>
    <td>Şerit testereler, matkap fener milleri, profil kesme tezgahları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Duruş Süresi ve Güvenlik Mesafesi Hesabı (EN ISO 13855)</h2>
<p>Operatör kapıyı açtığı andan itibaren elini veya vücudunu tehlike noktasına uzatana kadar geçen sürede makine tamamen durmuş olmalıdır. İzin verilen minimum güvenlik mesafesi (S):</p>
<div class="formul">
S = ( K · T ) + C &nbsp;&nbsp;[mm]
<small>S: Minimum güvenlik mesafesi [mm], K: İnsan elinin/vücudunun yaklaşma hızı parametresi [standart: K = 1600 mm/s veya 2000 mm/s], T: Sistemin toplam duruş süresi [saniye] (t1: sensör/röle tepki süresi + t2: mekanik frenleme süresi), C: İlave güvenlik mesafesi (kapı aralığına bağlı uzanma payı) [mm]</small>
</div>

<div class="kutu tehlike"><span class="kb">Sayısal Emniyet Hesabı: Ne Zaman Kilit Tutma Şarttır?</span>
Robot hücresinin kapısı ile robotun çalışma alanı arasındaki mesafe d = 800 mm olsun. Robotun acil durdurma (E-Stop) sinyali aldıktan sonra tamamen durması T = 0,8 saniye sürsün. Standart el yaklaşma hızı K = 1600 mm/s ve C = 200 mm alınırsa:
<div class="formul">
S = ( 1600 × 0,8 ) + 200 = 1280 + 200 = 1480 mm
</div>
Minimum güvenlik mesafesi 1480 mm çıkmıştır; ancak bizim kapımız 800 mm mesafededir! Yani operatör kapıyı açıp içeri adım attığında robot hâlâ savrulmaktadır ve insanı ezebilir!
<br><br>
<strong>Hüküm:</strong> Kapı mesafesi (800 mm) hesaplanan S mesafesinden (1480 mm) küçük olduğu için bu kapıda standart manyetik interlock KULLANILAMAZ; <strong>Solenoid Kilit Tutmalı Kapı Anahtarı (Guard Locking Switch - ISO 14119) KULLANILMASI YASAL ZORUNLULUKTUR!</strong></div>

<h2>Malzeme Seçim Mekaniği: Polikarbonat (PC) vs. Akrilik (PMMA)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mühendislik Özelliği</th>
    <th>Polikarbonat (PC - Lexan / Makrolon)</th>
    <th>Akrilik (PMMA - Pleksiglas)</th>
    <th>Mühendislik Değerlendirmesi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Çentik Darbe Dayanımı (Charpy)</strong></td>
    <td><strong>600 – 850 J/m (AŞIRI YÜKSEK)</strong><br>Çekiçle veya kurşunla vurulsa bile kırılmaz, sadece esner.</td>
    <td><strong>15 – 25 J/m (GEVREK)</strong><br>Küçük bir darbede cam gibi parçalanır ve jilet gibi keskin şarapneller saçar!</td>
    <td><strong>KORUYUCU KAPILARDA AKRİLİK KULLANILMASI KESİNLİKLE YASAKTIR!</strong> Fırlayan bir cıvata veya kırılan freze ucu akriliği delip operatörü yaralar. Yalnızca Polikarbonat (minimum 4–6 mm) kullanılmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Çizilme ve Kimyasal Direnç</strong></td>
    <td>Düşük (Yumuşaktır, kolay çizilir; özel sert kaplamalı / hard-coated tipleri seçilmelidir).</td>
    <td>Yüksek (Daha serttir, çizilmeye dirençlidir).</td>
    <td>PC pencereler temizlenirken alkol veya tiner kullanılmaz; mikro çatlak oluşturur.</td>
  </tr>
  <tr>
    <td><strong>Çevresel Gerilme Çatlaması (ESC)</strong></td>
    <td><strong>Hassas!</strong> Bazı sentetik CNC soğutma sıvıları ve ester yağlar PC'nin tokluğunu 6 ayda yok eder.</td>
    <td>Düşük</td>
    <td>CNC kabin pencerelerinde içeride laminasyonlu emniyet camı, dışarıda PC olan <strong>kompozit çok katmanlı pencereler</strong> kullanılır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>EN ISO 13857 Standart Güvenlik Mesafeleri (Üst Uzuvlar)</h2>
<p>Koruma çitlerindeki tel örgü veya perfore sac deliklerinden parmak veya kol uzatıldığında tehlike noktasına olan minimum mesafe:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Açıklık Geometrisi ve Boyutu (e)</th>
    <th>Anatomik Sınır</th>
    <th>Tehlike Bölgesine Minimum Emniyet Mesafesi (s<sub>r</sub>)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kare Açıklık: e ≤ 4 mm</strong></td>
    <td>Parmak ucu tırnak boğumu</td>
    <td><strong>≥ 2 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Kare Açıklık: 4 &lt; e ≤ 8 mm</strong></td>
    <td>Parmak ilk eklem boğumu</td>
    <td><strong>≥ 15 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Kare Açıklık: 8 &lt; e ≤ 12 mm</strong></td>
    <td>Parmak kökü (tüm parmak)</td>
    <td><strong>≥ 80 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Kare Açıklık: 12 &lt; e ≤ 20 mm</strong></td>
    <td>El ayası (bileğe kadar)</td>
    <td><strong>≥ 120 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Kare Açıklık: 20 &lt; e ≤ 30 mm</strong></td>
    <td>Kol (dirseğe kadar)</td>
    <td><strong>≥ 120 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Standart Çit Teli: 30 &lt; e ≤ 40 mm</strong></td>
    <td>Kol (omuza kadar tam uzanma)</td>
    <td><strong>≥ 200 mm</strong></td>
  </tr>
  <tr>
    <td><strong>Büyük Açıklık: 40 &lt; e ≤ 120 mm</strong></td>
    <td>Tüm kol ve omuz girişi</td>
    <td><strong>≥ 850 mm</strong> (Neredeyse 1 metre mesafe şarttır!)</td>
  </tr>
</tbody>
</table>
</div>

<h2>EN ISO 14119 Standardına Göre Manipülasyonun (Bypass) Önlenmesi</h2>
<div class="kutu uyari"><span class="kb">Operatörün Kapı Switch'ini Köprülemesi Nasıl Engellenir?</span>
Saha kazalarının %40'ı operatörlerin parçayı görmek için kapı switch'ine sahte bir metal dil sokarak güvenlik rölesini aldatması sonucu meydana gelir. EN ISO 14119 standardı bu sabotajı engellemek için kurallar koyar:
1. Basit mekanik dilli anahtarlar (Tip 2) yerine, yüksek kodlama seviyesine sahip <strong>RFID Eşleşmeli Emniyet Sensörleri (Tip 4)</strong> kullanılmalıdır. Sensör yalnızca kapıdaki eşleşmiş kendi RFID aktüatörünü tanıdığında kontak verir; tornavida veya mıknatısla asla köprülenemez.
2. Anahtar montajı kapı açıldığında elle ulaşılamayacak gizli profillerin arkasına gömülmelidir.</div>

<div class="sozluk-kutu">
<h3>📖 Terimler ve Mühendislik Kavramları Sözlüğü</h3>
<div class="tablo-kap">
<table>
<thead><tr><th>Terim / Sembol</th><th>Bilimsel & Mühendislik Tanımı</th></tr></thead>
<tbody>
  <tr>
    <td><strong>EN ISO 14120</strong></td>
    <td>Makinelerde kullanılan sabit ve hareketli fiziksel muhafazaların tasarımı, mekanik darbe mukavemeti ve konstrüksiyon gereksinimlerini belirleyen C-tipi Avrupa emniyet standardı.</td>
  </tr>
  <tr>
    <td><strong>EN ISO 13857</strong></td>
    <td>İnsanların üst ve alt uzuvlarının (parmak, el, kol, bacak) koruyucu açıklıklar arasından veya üzerinden tehlike noktasına erişmesini önleyen asgari güvenlik mesafesi tablosudur.</td>
  </tr>
  <tr>
    <td><strong>Kilit Tutmalı Kapı (Guard Locking - EN ISO 14119)</strong></td>
    <td>Solenoid bobinli mekanik bir pimle kapıyı fiziksel olarak kilitleyen, tehlikeli eylemsizlik hareketi (ör. volan dönüşü) sıfıra inene kadar kapının açılmasına fiziksel izin vermeyen güvenlik sistemi.</td>
  </tr>
  <tr>
    <td><strong>Kaybolmaz Bağlantı Elemanı (Captive Fasteners)</strong></td>
    <td>Makine Emniyeti Yönetmeliği 1.4.2.1 maddesi gereği; sabit muhafazalar aletle söküldüğünde cıvata ve somunların panel deliklerine segmanla veya rondelayla asılı kalıp düşmesini engelleyen vida sistemi.</td>
  </tr>
  <tr>
    <td><strong>Çevresel Gerilme Çatlaması (ESC - Environmental Stress Cracking)</strong></td>
    <td>Polikarbonat gibi polimerlerin iç gerilmeler altındayken belirli kimyasallarla (tiner, sentetik soğutma sıvıları) teması sonucu moleküler bağların koparak camsı kırılgan çatlaklar oluşturması olayıdır.</td>
  </tr>
  <tr>
    <td><strong>RFID Kodlu Emniyet Sensörü (Tip 4)</strong></td>
    <td>Kapı aktüatörü ile sensör gövdesi arasında 128-bit şifrelenmiş radyo frekansı haberleşmesi yapan, harici mıknatıs veya sahte dillerle manipüle edilmesi (köprülenmesi) imkânsız olan güvenlik anahtarı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Sabit muhafazalar yalnızca aletle sökülebilir olmalı ve cıvataları panelde asılı kalan <strong>kaybolmaz vida (captive fastener)</strong> yapısına sahip olmalıdır.</li>
  <li>Duruş süresi uzun olan sistemlerde <strong>S = ( K · T ) + C</strong> hesabı yapılmalı; mesafe yetmiyorsa <strong>Solenoid Kilit Tutmalı Kapı Anahtarı (Guard Locking)</strong> kullanılmalıdır.</li>
  <li>Muhafaza pencerelerinde kırılgan ve şarapnel saçan akrilik (pleksiglas) kesinlikle yasaktır; darbe dayanımlı <strong>Polikarbonat (PC)</strong> zorunludur.</li>
  <li>Tel örgü açıklığı arttıkça tehlike mesafesi katlanarak artar (ISO 13857); 40 mm tel örgü için en az <strong>200 mm emniyet mesafesi</strong> şarttır.</li>
  <li>Kapı anahtarlarının operatörler tarafından köprülenmesini engellemek için <strong>Tip 4 RFID şifreli emniyet kilitleri</strong> kullanılmalıdır.</li>
  <li>Kapının kapanması makineyi asla kendiliğinden başlatmamalıdır (Ayrı bir Emniyet Reset / Başlat butonu şarttır).</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir CNC freze muhafaza kabininde operatörün iş parçasını net görmesi için ucuz ve parlak olan 5 mm şeffaf pleksiglas (akrilik) kullandın. İmalat müdürü bu parçayı gördüğünde neden hemen söktürür?</summary>
<div>Akrilik (PMMA) aşırı gevrektir; Charpy çentik darbe dayanımı (15–25 J/m) polikarbonatın 30'da biridir! Yüksek devirde dönen bir freze çakısı kırıldığında veya ayna pabuçlarından bir parça fırladığında, akrilik pencereye kurşun gibi çarpar. Akrilik bu darbeyi sönümleyemez; patlayarak hem metal parçasını hem de jilet gibi keskin onlarca akrilik şarapnelini operatörün yüzüne fırlatır! Darbe dayanımı için tek standart <strong>Polikarbonattır (PC)</strong>.</div></details>
<details><summary>Makine Direktifi 2006/42/EC (ve yeni EU 2023/1230) denetiminde denetçi, makinenin arkasındaki cıvatalı sac kapağı söktü ve cıvatanın yere düştüğünü gördü. Bu durum neden resmi bir CE uygunsuzluğudur?</summary>
<div>Makine Emniyeti Direktifi Ek I Madde 1.4.2.1 uyarınca: "Sabit muhafazaların bağlantı elemanları, muhafazalar söküldüğünde muhafazalara veya makineye bağlı kalmalıdır." Bu kuralın sebebi şudur: Bakımcı kapağı söktüğünde cıvatalar yere düşüp kaybolursa, kapağı geri takarken 4 cıvata yerine 1 cıvata sıkar veya kapağı hiç takmadan açık bırakır. Cıvataların düşmesini engelleyen <strong>kaybolmaz vida (captive screw)</strong> veya tutucu plastik rondelalar kullanılmalıdır.</div></details>
<details><summary>Robot hücresinin çitinde 30x30 mm kare tel örgü kullandın. Robot kolunun en uç noktası çite 80 mm mesafeye kadar yaklaşıyor. Bu tasarım ISO 13857'ye uygun mudur?</summary>
<div>HAYIR, KESİNLİKLE UYGUN DEĞİLDİR! ISO 13857 Tablo 4'e göre 30 mm kare açıklıktan bir insanın kolu dirseğe ve omuza kadar rahatça girebilir. Bu açıklık boyutu için tehlike noktası ile çit arasındaki asgari güvenlik mesafesi <strong>en az 200 mm olmalıdır</strong>. 80 mm mesafede duran bir robota dışarıdan kolunu uzatan bir insan temas edebilir ve ezilebilir. Ya çit robottan 200 mm uzağa çekilmeli ya da tel örgü açıklığı parmak girişini engelleyen 10 mm'nin altına düşürülmelidir.</div></details>
</div>

<div class="ozet-kutu" style="border-left-color: #059669; background: rgba(5,150,105,0.06);">
<h3>Modül 8 Büyük Mühendislik Kapanış Özeti</h3>
<ul>
  <li><strong>Sigma Profiller:</strong> 6063-T66 alüminyumdur (E = 70.000 MPa). Çelik rijitliğini yakalamak için kesit atalet momenti (I) 3 kat büyük seçilmelidir; ana karkasta köşebent değil <strong>uç bağlantı</strong> ve <strong>diyagonal üçgenleme</strong> kullanılmalıdır.</li>
  <li><strong>Kaynaklı Şaseler:</strong> Burulma rijitliği için açık profil değil <strong>kapalı kutu profil (EN 10219/10210)</strong> kullanılır (J<sub>t</sub> 100 kat büyüktür). Kaynak sonrası mutlaka <strong>550–600 °C'de gerilim giderme tavı</strong> yapılmalı ve ray montaj pedleri tek bağlamada işlenmelidir.</li>
  <li><strong>Dinamik ve Titreşim:</strong> Otomasyonda sorun kırılma değil esnemedir. Statik sehimden doğal frekans <strong>f<sub>n</sub> ≈ 15,8 / √δ<sub>st</sub> [mm]</strong> formülüyle bulunur. Çelikte rezonansta kuvvetler <strong>50 kat büyür [Q = 1 / (2·ζ)]</strong>. Konsol boyunu kısaltmak (L³) en etkili çözümdür.</li>
  <li><strong>Ayarlanabilir Tasarım:</strong> Tam kinematik kısıtlama (DoF = 6 - C = 0) hedeflenmeli, aşırı kısıtlamadan kaçınılmalıdır. Şim yüzeyleri nominalden 1 mm düşük tasarlanmalı; ayar tamamlandıktan sonra sistem mutlaka <strong>Match-Drilling ile delinip H7 pimlenmelidir</strong>.</li>
  <li><strong>Lojistik ve Ayaklar:</strong> 4 ayak hiperstatiktir; tek ayak kapasitesi toplam kütlenin %50'si kadar seçilmelidir. Sabit mapa cıvatalar (DIN 580) açılı kaldırmada kapasitesinin %70'ini kaybeder; <strong>döner mafsallı halkalar</strong> kullanılmalıdır. 40' HC konteyner kapı gabarisi (2.340 × 2.585 mm) aşılmamalıdır.</li>
  <li><strong>Makine Güvenliği:</strong> Sabit muhafazalarda <strong>kaybolmaz vida (captive fastener)</strong>; pencerelerde kırılmaz <strong>Polikarbonat (PC)</strong> şarttır. Duruş süresi mesafeyi aşıyorsa (S &gt; d) <strong>Solenoid Kilit Tutmalı (Guard Locking) RFID anahtar</strong> yasal zorunluluktur.</li>
</ul>
</div>
`);
