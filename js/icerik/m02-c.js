// MODÜL 2 — İmalat Yöntemleri ve DFM (Bölüm 2.8 – 2.10: 3D Baskı, Hammadde Standartları, Maliyet Odaklı Tasarım)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m2', '2-8', `
<p class="giris">Eklemeli imalat (3D Baskı / Additive Manufacturing), modern endüstriyel otomasyonda artık yalnızca basit görsel prototipleme aracı olmaktan çıkmış; hafifletilmiş robot uç tutucuları (EOAT - End of Arm Tooling), karmaşık pnömatik hava manifoldları, sensör braketleri ve karmaşık fikstür yuvalarının doğrudan imal edildiği bir üretim standardına dönüşmüştür. Ancak 3D baskı, geleneksel talaşlı imalatın zıttı olan kendine has bir tasarım disiplini (DFAM - Design for Additive Manufacturing) gerektirir: <strong>Katmanlar arası anizotropi (Z ekseni zaafı), termal artık gerilmeler ve destek (support) geometrisi</strong>. Bu bölümde FDM, SLS, SLA ve DMLS metal baskı teknolojilerini ve endüstriyel tasarım kurallarını inceliyoruz.</p>

<h2>Endüstriyel Eklemeli İmalat Teknolojileri Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Eklemeli Teknoloji</th>
    <th>Hammadde Formu</th>
    <th>Katman Kalınlığı ve Tolerans</th>
    <th>Mekanik Karakteristik (İzotropi)</th>
    <th>Yüzey Kalitesi (Ra)</th>
    <th>Otomasyondaki Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>FDM / FFF (Filament)</strong><br><small>Markforged / Endüstriyel FDM</small></td>
    <td>Termoplastik Tel (PLA, PETG, ABS, <strong>Onyx / Karbon Elyaf Katkılı Naylon</strong>)</td>
    <td>Katman: 0,1 – 0,3 mm<br>Tolerans: ±0,15 – 0,3 mm</td>
    <td><strong>Şiddetli Anizotropik!</strong> Z ekseninde katman ayrılması (delaminasyon) riski yüksektir. Karbon takviyesiyle alüminyum mukavemetine yaklaşır.</td>
    <td>Katman çizgileri belirgindir (Ra 6,3–12,5 µm)</td>
    <td>Robot gripper parmakları, kablo yönlendiriciler, hızlı fikstür dayamaları, prototipler.</td>
  </tr>
  <tr>
    <td><strong>SLS (Seçici Lazer Sinterleme)</strong><br><small>Toz Yataklı Polimer Füzyonu</small></td>
    <td>Poliamid Tozu (<strong>PA11, PA12</strong>, Cam/Alüminyum dolgulu)</td>
    <td>Katman: 0,08 – 0,12 mm<br>Tolerans: <strong>±0,05 – 0,1 mm</strong></td>
    <td><strong>Neredeyse İzotropik!</strong> Katman ayrılması yaşanmaz. Çok tok, darbe dayanımı ve yorulma direnci mükemmeldir.</td>
    <td>Hafif kumlu / grenli (Kumlama ile pürüzsüzleşir)</td>
    <td><strong>Fonksiyonel robotik tutucular</strong>, karmaşık vakum manifoldları, iç içe geçmiş mafsallar. <strong>DESTEK YAPISINA İHTİYAÇ DUYMAZ!</strong></td>
  </tr>
  <tr>
    <td><strong>SLA / DLP (Reçine)</strong><br><small>Fotopolimerizasyon</small></td>
    <td>Sıvı Fotopolimer Reçine (UV lazer ile kürlenir)</td>
    <td>Katman: 0,025 – 0,05 mm<br>Tolerans: <strong>±0,02 – 0,05 mm</strong></td>
    <td>İzotropik ancak gevrektir. UV ışık ve sıcaklıkla zamanla sertleşip mikro çatlak verebilir.</td>
    <td><strong>Kalıp parlaklığında kusursuz pürüzsüz</strong> (Ra &lt; 0,8 µm)</td>
    <td>Optik lens yuvaları, hassas minyatür mekanizma tırnakları, yüksek detaylı görsel modeller.</td>
  </tr>
  <tr>
    <td><strong>DMLS / SLM (Metal 3D Baskı)</strong><br><small>Lazer Metal Tozu Ergitme</small></td>
    <td>Metal Tozları (<strong>AlSi10Mg, 316L Paslanmaz, Ti6Al4V, Inconel</strong>)</td>
    <td>Katman: 0,03 – 0,06 mm<br>Tolerans: ±0,05 – 0,1 mm (Yoğunluk &gt; %99,8)</td>
    <td><strong>Dövme çelikle eşdeğer statik ve dinamik mukavemet!</strong> Yüksek tokluk ve yorulma ömrü.</td>
    <td>Kaba metalik doku (Hassas yüzeyler için talaşlı işleme payı gerekir)</td>
    <td>Kalıp içi <strong>konformal (organik eğimli) soğutma kanalları</strong>, hafifletilmiş havacılık braketleri, ekstrem hafif robot kolları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Eklemeli İmalat İçin Tasarım (DFAM) Temel Kuralları</h2>

<h3>1. 45° Kuralı ve Desteksiz Baskı Geometrisi</h3>
<p>FDM ve DMLS metal yazıcılarda katmanlar üst üste serilirken, yatay eksene göre <strong>45° veya daha dik açılı duvarlar</strong> altlarında ek destek (support) yapısına ihtiyaç duymadan basılabilir. Destek malzemesi kullanılması baskı süresini uzatır, malzeme sarfiyatını artırır ve destek sökülen yüzeyde pürüzlü izler bırakır. Tasarımcı aşırı sarkıntıları (overhang) 45°'lik pahlarla desteklemelidir.</p>

<h3>2. Yük Yönü ve Baskı Oryantasyonu (Anizotropi Yönetimi)</h3>
<div class="kutu tehlike"><span class="kb">Z-Ekseni Zayıflığı: Katman Ayrılması</span>
FDM teknolojisinde katmanlar arasındaki termal füzyon mukavemeti, filamentin kendi çekme mukavemetinin sadece <strong>%40 ila %60'ı</strong> kadardır. Bir parçaya eğilme veya çekme kuvveti bindiğinde, bu kuvvet katmanları birbirinden ayıracak yönde (Z ekseninde) etki ederse parça ahşap gibi katman sınırından anında yarılır!<br><br>
<strong>Kural:</strong> Mekanik yük taşıyacak fonksiyonel parçalar baskı tablasına dikine değil, <strong>ana çekme gerilmesi çizgileri baskı tablasına (X-Y düzlemine) paralel olacak şekilde</strong> yatırılarak basılmalıdır.</div>

<h3>3. Plastik Parçalara Metal Diş Ekleme (Heat-Set Inserts)</h3>
<p>Plastik 3D baskı parçalara doğrudan CAD modelde vida dişi basmak veya kılavuz çekmek kabul edilemez bir amatörlüktür; cıvata 2 kez sıkıldığında plastik dişler sıyrılır. Doğru mühendislik çözümü:</p>
<ul>
  <li>Parçaya tablosuna uygun konik veya silindirik kılavuz deliği basılır.</li>
  <li>Pirinçten imal edilmiş dışı tırtıklı <strong>ısı-diş burçları (Heat-Set Threaded Inserts)</strong> sıcak bir havya ucuyla deliğe bastırılır. Isınan plastik yerel olarak erir, pirinç burcun tırtıkları arasına akar ve donarak metali kilitler. Bu bağlantı çelik gövde kadar tork taşır!</li>
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
    <td><strong>DFAM (Eklemeli Tasarım)</strong></td>
    <td>Design for Additive Manufacturing. Parçanın geometrisini katmanlı üretim dinamiklerine, oryantasyona ve topoloji optimizasyonuna göre optimize etme mühendislik metodolojisi.</td>
  </tr>
  <tr>
    <td><strong>Anizotropi</strong></td>
    <td>Malzemenin mekanik mukavemet özelliklerinin ölçülen doğrultuya göre değişmesi. FDM parçalarda X-Y düzleminde mukavemet yüksekken, Z ekseninde katman yapışması zayıftır.</td>
  </tr>
  <tr>
    <td><strong>SLS (Lazer Sinterleme)</strong></td>
    <td>Polimer toz yatağı üzerinde CO₂ lazeriyle poliamid partiküllerinin eritilerek birleştirildiği, erimemiş tozların doğal destek görevi gördüğü desteksiz endüstriyel baskı yöntemi.</td>
  </tr>
  <tr>
    <td><strong>Heat-Set Threaded Insert</strong></td>
    <td>Dış yüzeyi ters konik tırtıklı pirinç burç. Termoplastik parçalara ısıyla preslenerek mukavim ve sökülüp takılabilir ISO metrik cıvata dişleri kazandırır.</td>
  </tr>
  <tr>
    <td><strong>Konformal Soğutma Kanalı</strong></td>
    <td>DMLS metal 3D baskı ile kalıp kavitelerinin tam formunu 3 boyutlu kıvrımlarla takip eden, soğuma süresini %40 kısaltan ve geleneksel delme ile imkânsız olan eğrisel iç kanallar.</td>
  </tr>
  <tr>
    <td><strong>Delaminasyon</strong></td>
    <td>Dinamik yük veya yetersiz erime sıcaklığı sebebiyle FDM parçalarda birbirini izleyen iki plastik katmanın birbirinden pul pul ayrılarak çatlaması hasarı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Endüstriyel robot gripperlarında yüksek mukavemet ve desteksiz üretim için <strong>SLS (PA12 Toz)</strong> veya karbon takviyeli FDM kullanılır.</li>
  <li>FDM parçalarda Z eksenindeki katman yapışması zayıftır; parça tablaya çekme kuvveti çizgilerine paralel yatırılmalıdır.</li>
  <li>Desteksiz ekonomik baskı için sarkan duvar açıları 45°'den dik tasarlanmalıdır.</li>
  <li>Plastik 3D parçalara asla doğrudan kılavuz çekilmemeli; ısıyla çakılan pirinç <strong>ısı-diş burçları (threaded insert)</strong> kullanılmalıdır.</li>
  <li>Metal 3D baskı (DMLS/SLM) dövme çelikle eşdeğer mukavemet sunar; konformal kalıp çekirdeklerinde ve ekstrem hafif havacılık braketlerinde kullanılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>FDM tipi bir 3D yazıcıda dik olarak (Z ekseninde dikine kule gibi uzayan) basılmış bir robot gripper parmağı neden ilk iş parçasını sıkarken ortadan ikiye kırılmıştır?</summary>
<div>FDM'de erimiş termoplastik katman katman serilir; katmanlar arasındaki moleküler difüzyon ve yapışma mukavemeti, katmanın kendi eksenel çekme mukavemetinin yarısından azdır. Dik basılan parmakta iş parçasını sıkma momenti katmanları birbirinden ayıracak (Z ekseninde çekme gerilmesi) yönde etki eder ve parça delaminasyonla kırılır. Çözüm: Parmak baskı tablasına yatay olarak yatırılmalı, böylece katman çizgileri eğilme gerilmesi doğrultusuna paralel hizalanmalıdır.</div></details>
<details><summary>SLS (Seçici Lazer Sinterleme) teknolojisiyle iç içe geçmiş, birbirine montajlı ve hareketli bir kardan mafsalı tek seferde montajsız basılabilir mi?</summary>
<div>EVET! SLS toz yataklı bir sistemdir ve hiçbir fiziksel destek yapısına (support) ihtiyaç duymaz. Lazer parçayı tararken sinterlenmeyen serbest poliamid tozu parçalar arasında boşluk bırakır ve doğal destek görevi görür. Baskı bittikten sonra parça toz banyosundan çıkarılıp basınçlı havayla temizlendiğinde, mafsal montaja gerek kalmadan serbestçe döner halde hazırdır.</div></details>
<details><summary>PLA veya PETG'den basılmış bir sensör braketine doğrudan M4 kılavuz çekilirse montaj hattında ne arıza yaşanır?</summary>
<div>Plastik malzemenin kayma mukavemeti çok düşüktür ve baskı katmanları kılavuzun kesme kuvvetiyle yerel olarak mikro çatlaklar verir. Cıvata torklandığında dişler anında sıyrılarak yalama olur; titreşim altında cıvata düşer. Çözüm: Parçaya delik basılıp içine havya ile ısıyla çakılan pirinç <strong>ısı-diş burcu (heat-set insert)</strong> yerleştirmektir.</div></details>
</div>
`);

KITAP.bolum('m2', '2-9', `
<p class="giris">Tasarımcının atölyeyi ve satın almayı en çok zarara soktuğu an; piyasada standart stoku bulunmayan keyfi ölçülerde hammadde çizip CNC tezgâhına göndermesidir. Örneğin bir montaj plakasını CAD ekranında 32×84×155 mm ebatlarında çizerseniz; satın alma birimi piyasadan zorunlu olarak 40×100×200 mm kütük satın alır ve tezgâhtaki operatör malzemenin %50'sini saatlerce talaşa çevirerek çöpe atar. Bir makine tasarımcısı tasarıma başlamadan önce piyasadaki <strong>standart stok geometrilerini, haddeleme normlarını ve teslimat toleranslarını</strong> ezbere bilmelidir.</p>

<h2>Piyasa Standart Stok Formları ve Haddeleme Toleransları</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Hammadde Standardı</th>
    <th>Piyasa Ticari İsimlendirmesi</th>
    <th>Yüzey Durumu ve Metalurji</th>
    <th>Dış Boyut / Çap Toleransı</th>
    <th>Tasarımcıya İmalat ve DFM Mesajı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sıcak Haddelenmiş Lama / Plaka (Çelik)</strong></td>
    <td>S235JR Siyah Sac / Lama</td>
    <td>Tufallı, siyah oksit tabakalı, pürüzlü</td>
    <td>Geniş tolerans (±0,5 – 1,5 mm). Düzlemsellik dalgalıdır.</td>
    <td>Kaynaklı şaseler için idealdir. Hassas montaj yüzeyleri frezelenmeli; her yüzeye en az 2–3 mm işleme payı bırakılmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Soğuk Çekilmiş Çelik Mil (Transmisyon)</strong></td>
    <td>C45E (+C) / 11SMn30 (+C)</td>
    <td>Parlak, pürüzsüz, tufalsız yüzey</td>
    <td><strong>ISO h9 veya h11 toleransı</strong> (Ör. Ø20 h9: 0 / −0,052 mm)</td>
    <td><strong>Tornalanmadan doğrudan mil olarak kullanılabilir!</strong> Rulman, kasnak ve kaplinler tornalama gerektirmeden doğrudan üzerine takılır.</td>
  </tr>
  <tr>
    <td><strong>Taşlanmış İndüksiyonlu Mil (Lineer Mil)</strong></td>
    <td>Cf53 / 100Cr6 (Lineer Şaft)</td>
    <td>Aynasal taşlanmış (Ra &lt; 0,2 µm), <strong>60–64 HRC sert</strong></td>
    <td><strong>ISO h6 veya g6 toleransı</strong> (Ör. Ø20 h6: 0 / −0,013 mm)</td>
    <td>Lineer bilyalı burçlar için hazır satın alınır; torna tezgâhında dış çapı asla işlenmez, sadece uçlarına diş açılır.</td>
  </tr>
  <tr>
    <td><strong>Haddelenmiş Alüminyum Levha</strong></td>
    <td>EN AW-6082 T6 Levha</td>
    <td>Hafif mat, hadde çizgili</td>
    <td>Kalınlık: ±0,3 – 0,8 mm. İç gerilmelidir!</td>
    <td>Derin havuz frezelenirse levha muz gibi bükülür. Asimetrik talaş kaldırılacaksa gerdirilmiş T651 teslimatı istenmelidir.</td>
  </tr>
  <tr>
    <td><strong>Hassas Döküm Alüminyum Plaka</strong></td>
    <td>G.AL C250 / ACP 5080 / Alca 5</td>
    <td><strong>İki yüzü fabrikasyon çift taraflı hassas frezeli ve koruyucu folyolu</strong></td>
    <td><strong>Kalınlık: ±0,1 mm, Düzlemsellik: &lt; 0,1 mm/m</strong></td>
    <td><strong>Fikstür ve makine taban tablalarının vazgeçilmezidir!</strong> Üst yüzeyleri tezgâhta taranmaz; doğrudan delikler ve cepler delinir. Sıfır iç gerilme.</td>
  </tr>
  <tr>
    <td><strong>Yapısal Kutu Profil / Boru</strong></td>
    <td>Kare / Dikdörtgen Profil (EN 10219)</td>
    <td>Siyah dikişli yapı profili</td>
    <td>Köşeleri radyüslüdür (R ≈ 2–2,5×t). Et kalınlığı: ±%10</td>
    <td>Şaselerin ana karkasıdır. Üzerine lineer ray bağlanacaksa profil üstüne önce lama kaynatılmalı ve gerilim giderme sonrası CNC'de işlenmelidir.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu ipucu"><span class="kb">Stok Kuralı: Standart Ölçü Kütüphanesine Sadık Kalın!</span>
Bir mil veya delik çapı belirlerken piyasadaki standart çubuk çaplarını seçin:
<div class="formul">
Standart Mil Çapları: Ø10, Ø12, Ø16, Ø20, Ø25, Ø30, Ø35, Ø40, Ø50, Ø60 mm
</div>
Eğer ara bir ölçü (örneğin Ø23,5 mm veya Ø37 mm) tasarlarsanız; atölye bir üst stok çapını (Ø30 veya Ø45 mm) satın alıp saatlerce tornalayarak kütüğü inceltmek zorunda kalır. Plakalarda da standart stok kalınlıkları kullanılmalıdır: <strong>6, 8, 10, 12, 15, 20, 25, 30, 40, 50 mm</strong>.</div>

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
    <td><strong>Transmisyon Mili (+C)</strong></td>
    <td>Sıcak haddelenmiş çubuğun soğuk çekme kalıbından geçirilerek pürüzsüz yüzey, hassas h9 toleransı ve yüksek akma mukavemeti kazandırıldığı parlak mil standardı.</td>
  </tr>
  <tr>
    <td><strong>Haddeleme Tufalı (Mill Scale)</strong></td>
    <td>Sıcak haddeleme sırasında çeliğin yüzeyinde oluşan, koyu gri renkli, aşırı sert ve gevrek demir oksit (FeO / Fe<sub>3</sub>O<sub>4</sub>) kabuk tabakası.</td>
  </tr>
  <tr>
    <td><strong>Bounding Box (Kütük Sınır Hacmi)</strong></td>
    <td>CAD modeldeki parçayı tamamen içine alabilecek en küçük prizmatik stok hammadde kütük hacmi. Satın alma fire maliyetini belirler.</td>
  </tr>
  <tr>
    <td><strong>ACP 5080 (Döküm Takım Tablası)</strong></td>
    <td>5083 alaşımından dökülüp gerilim giderme tavı yapılmış, iki yüzeyi de ayna gibi paralel frezelenip folyolanmış, boyutsal kararlılığı mükemmel fikstür plakası.</td>
  </tr>
  <tr>
    <td><strong>EN 10219 Kutu Profil</strong></td>
    <td>Soğuk şekillendirilmiş kaynaklı yapısal çelik kutu ve dikdörtgen profillerin boyut, et kalınlığı ve köşe radyüsü standartlarını belirleyen Avrupa normu.</td>
  </tr>
  <tr>
    <td><strong>Stok Talaş Payı</strong></td>
    <td>Hammadde kütük ölçüsünden nihai parça ölçüsüne inerken yüzey bozukluklarını ve eğrilikleri temizlemek amacıyla bırakılan 1–3 mm'lik işleme fazlalığı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Parça tasarlarken piyasadaki standart çubuk çaplarına (Ø16, Ø20, Ø25...) ve plaka kalınlıklarına sadık kalın.</li>
  <li>Soğuk çekilmiş transmisyon milleri (h9/h11) torna işçiliği gerektirmeden hazır mil olarak kullanılabilir.</li>
  <li>Hassas makine taban tablalarında yüzey işlemeyi ve çarpılmayı sıfırlamak için <strong>çift yüzü frezeli döküm alüminyum plaka</strong> (ACP 5080 vb.) seçilmelidir.</li>
  <li>Sıcak haddelenmiş siyah çelik lamalarda yüzeydeki tufal tabakasını temizlemek için her yüze en az 2–3 mm talaş payı bırakılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Boyutları 600×400×25 mm olan düzlemsel bir fikstür ana tablası için neden haddelenmiş 6082-T6 yerine döküm alüminyum plaka (ACP 5080) tercih edilmelidir?</summary>
<div>Haddelenmiş 6082 levhaların kalınlık toleransı kabadır (±0,5 mm) ve levha içerisinde haddeleme kaynaklı yüksek iç gerilmeler kilitlidir. Yüzeyden düzlemsellik için talaş kaldırıldığında levha muz gibi 1–2 mm eğrilir. Döküm plakalar ise fabrikasyon olarak gerilimi sıfırlanmış, iki yüzü de ±0,1 mm kalınlık ve 0,1 mm/m düzlemsellikle frezelenmiş olarak teslim edilir; tezgâhta kesinlikle çarpılmaz.</div></details>
<details><summary>Tasarımcı bir konveyör mili çapını CAD modelde Ø28 mm olarak çizmiştir. Bu mil C45 çeliğinden üretilecektir. İmalatta ne tür bir maliyet israfı oluşur?</summary>
<div>Piyasada standart soğuk çekilmiş C45 transmisyon mili stok çapları Ø25 ve Ø30 mm'dir; Ø28 mm standart bir stok çapı değildir. Atölye Ø30 mm kütük satın alıp fener mili tornasında boydan boya 2 mm talaş kaldırarak çapı küçültmek zorunda kalır; tezgâh süresi ve malzeme firesi boş yere katlanır. Oysa tasarımcı rulman ve kasnak seçimini Ø25 veya Ø30 mm standart çapa göre yapsaydı, transmisyon mili sıfır tornalama ile doğrudan kullanılabilirdi.</div></details>
<details><summary>Kutu profilden yapılan kaynaklı bir şasenin üzerine doğrudan lineer ray cıvatalanabilir mi?</summary>
<div>HAYIR! Standart EN 10219 kutu profillerin yüzeyleri sıcak/soğuk bükümden dolayı dalgalıdır (doğrusallık sapması metrede 1–2 mm'dir), yüzeyinde tufal vardır ve köşeleri geniş radyüslüdür. Lineer ray bu dalgalı yüzeye cıvatalanırsa araba bilyaları kasılır ve hareket kilitlenir. Kutu profilin üzerine önce 15–20 mm çelik lama kaynatılmalı, gerilim giderme tavı yapılmalı ve ardından ray kanalı CNC portal frezede tek bağlamada işlenmelidir.</div></details>
</div>
`);

KITAP.bolum('m2', '2-10', `
<p class="giris">Bir endüstriyel makinenin imalat maliyeti; talaşlı imalat atölyesinde veya satın alma departmanında değil, <strong>tasarımcının CAD ekranındaki parmak uçlarında</strong> kesinleşir. Tasarım aşamasında verilen malzeme, tolerans ve geometri kararları; nihai ürün maliyetinin yaklaşık <strong>%70 ila %80'ini geri dönülemez şekilde kilitler</strong>. Gereksiz konulmuş sıkı tek bir tolerans, standart dışı delik derinliği veya alyan anahtarının giremeyeceği kör bir cıvata konumu; projenin kâr marjını tamamen buharlaştırabilir. Bu bölümde İmalat İçin Tasarımın (DFM - Design for Manufacturing) altın kurallarını, maliyet çarpanlarını ve imalat öncesi kontrol listesini inceliyoruz.</p>

<h2>Maliyet Katlayıcılar: Tasarımcının Kaçınması Gereken 7 Büyük Hata</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Tasarım Hatası</th>
    <th>Maliyet Çarpanı</th>
    <th>Maliyeti Neden Katlar?</th>
    <th>Doğru DFM Çözümü</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Gereksiz Sıkı Tolerans</strong><br><small>(Ör. Statik kapağa ±0,01 mm yazmak)</small></td>
    <td><strong>3× – 5× KAT</strong></td>
    <td>Standart frezede çıkamaz; taşlama, klimalı metroloji odası ve CMM ölçümü gerekir. Hurda oranı fırlar.</td>
    <td>Genel toleranslar için <strong>ISO 2768-m</strong> normunu kullanın. Sadece rulman (H7/k5) ve pim deliklerine tolerans verin!</td>
  </tr>
  <tr>
    <td><strong>Aşırı Düşük Yüzey Pürüzlülüğü</strong><br><small>(Her yüzeye Ra 0,4 µm istemek)</small></td>
    <td><strong>2× – 3× KAT</strong></td>
    <td>Frezenin ilerleme hızı onda birine iner, ek polisaj veya taşlama operasyonu gerektirir.</td>
    <td>Fonksiyonel olmayan yüzeylerde <strong>Ra 3,2 – 6,3 µm</strong> bırakın. Statik sızdırmazlıkta Ra 1,6, rulmanda Ra 0,8 yeterlidir.</td>
  </tr>
  <tr>
    <td><strong>Keskin Dikey İç Köşeler</strong></td>
    <td><strong>2× – 4× KAT</strong></td>
    <td>Dönen freze çakısı giremez; tel erozyon, dalma erozyon veya özel takım gerekir.</td>
    <td>İç köşelere <strong>R &gt; Takım Yarıçapı</strong> verin veya <strong>köpek kemiği (dog-bone)</strong> boşaltması açın.</td>
  </tr>
  <tr>
    <td><strong>Aşırı Derin Kör Delikler</strong><br><small>(Derinlik &gt; 5× Çap)</small></td>
    <td><strong>2× KAT</strong></td>
    <td>Matkap talaşı tahliye edemez, soğutma sıvısı ulaşamaz; matkap kırılır. Gundrill derin delik delme gerekir.</td>
    <td>Delik derinliğini <code>L ≤ 3–4 × d</code> ile sınırlandırın. Mümkünse boydan boya açık delik tasarlayın.</td>
  </tr>
  <tr>
    <td><strong>Farklı Cıvata Çapı Cümbüşü</strong></td>
    <td>Montaj Süresi Artışı</td>
    <td>Montaj teknisyeni tezgâhta 8 farklı alyan anahtarı değiştirmek zorunda kalır; montaj hatası ve süresi katlanır.</td>
    <td><strong>Standartlaşın!</strong> Tüm makinede mümkünse sadece M5 ve M8 cıvata normuna sadık kalın.</td>
  </tr>
  <tr>
    <td><strong>Çok Yüzeyli Kurulum (Setup)</strong></td>
    <td><strong>1,5× – 2× KAT</strong></td>
    <td>Parça her yüzeydeki işlem için sökülüp tekrar bağlanır; ayar işçiliği ve tolerans yığılması biner.</td>
    <td>Mümkün olan tüm delikleri, cepleri ve temas yüzeylerini <strong>tek bir üst yüzeyde</strong> toplayın.</td>
  </tr>
  <tr>
    <td><strong>Kör Dişlerin Dibine Kadar Kılavuz</strong></td>
    <td>Kılavuz Kırılması</td>
    <td>Kılavuz ucu deliğin konik dibine çakılarak kırılır; parçayı kurtarmak için saatler harcanır.</td>
    <td>Diş dibinde en az <strong>3–5 hatve (adım) talaş boşluğu</strong> ve matkap ucu payı bırakın.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Mühendisin DFM Kontrol Listesi (Teknik Resmi Yayınlamadan Önce Sor!)</h2>
<ul>
  <li>[ ] <strong>Takım ve Fener Mili Erişimi:</strong> Kesici takım ve takım tutucu (mandren) bu cebe veya deliğe gövdeye çarpmadan standart boyda girebiliyor mu?</li>
  <li>[ ] <strong>İç Köşe Radyüsleri:</strong> İç dikey köşelerde dönen takım için yeterli radyüs (R ≥ Takım Yarıçapı + 0,5 mm) bırakıldı mı?</li>
  <li>[ ] <strong>Standart Takım Kütüphanesi:</strong> Delik çapları ve diş ölçüleri atölyedeki standart takım setlerine (M4, M5, M6, M8, M10) uyuyor mu?</li>
  <li>[ ] <strong>Hammadde Stok Uyumu:</strong> Parçanın dış sınır hacmi (Bounding Box) piyasadaki standart lama, mil ve plaka ebatlarından temiz talaş payıyla çıkıyor mu?</li>
  <li>[ ] <strong>Montaj ve El Aleti Erişimi:</strong> Cıvatayı sıkacak olan operatörün alyan anahtarı, tork lokması veya akülü vidalaması oraya rahatça yanaşabiliyor mu? Cıvata başı profilin kör noktasında mı kalmış?</li>
  <li>[ ] <strong>Gereksiz Talaş vs. Sac Tasarımı:</strong> 100 gram hafifletme uğruna dolu kütükten 3 saat freze boşaltması yapmak yerine lazer kesim + abkant büküm sac braket kullanılabilir mi?</li>
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
    <td><strong>DFM (İmalat İçin Tasarım)</strong></td>
    <td>Design for Manufacturing. Ürünün işlevini tam korurken parça geometri ve malzemesini en ekonomik, en hızlı ve en az fireli tezgâh yöntemlerine göre optimize etme yaklaşımı.</td>
  </tr>
  <tr>
    <td><strong>ISO 2768-mK</strong></td>
    <td>Teknik resimlerde tek tek tolerans yazılmamış tüm serbest boyutlar için orta (m) boyut ve orta (K) geometrik tolerans sınırlarını belirleyen uluslararası standart.</td>
  </tr>
  <tr>
    <td><strong>Tolerance Stack-Up</strong></td>
    <td>Birden fazla parçanın veya çoklu bağlama operasyonunun toleranslarının kümülatif olarak üst üste binerek nihai montajda eksen kaçıklığı yaratması analizi.</td>
  </tr>
  <tr>
    <td><strong>Takım Açıklığı (Tool Clearance)</strong></td>
    <td>Freze takım tutucusunun ve fener milinin iş parçası derin ceplerine inerken yan duvarlara çarpmaması için bırakılan emniyet geometrik boşluğu.</td>
  </tr>
  <tr>
    <td><strong>Kör Diş Boşluğu (Thread Relief)</strong></td>
    <td>Kör deliklere kılavuzla diş açılırken kılavuzun konik giriş ucunun ve talaşlarının sıkışmaması için delik dibinde bırakılan dişsiz emniyet payı.</td>
  </tr>
  <tr>
    <td><strong>Tek Bağlama Prensibi</strong></td>
    <td>Bir parçanın tüm kritik eşmerkezli, dik ve paralel yüzeylerinin tezgâhtan sökülmeden tek bir kurulumda (single setup) bitirilmesini hedefleyen DFM ilkesi.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Modül 2 Kapanış Özeti</h3>
<ul>
  <li>İyi bir mekanik tasarımcı yalnızca çalışan değil, <strong>en ucuz tezgâhta en hızlı ve hatasız üretilebilen</strong> konstrüksiyonu çizen kişidir.</li>
  <li>Maliyetin %70–80'i tasarım aşamasında kilitlenir; gereksiz sıkı toleranslar maliyeti 4–5 katına çıkarır.</li>
  <li>Standart serbest ölçülerde <strong>ISO 2768-m</strong> genel toleransı kullanılmalı, sadece kritik yataklara tolerans verilmelidir.</li>
  <li>Parça formları standart stok hammadde ölçülerine ve tek bağlamada (single setup) işlemeye göre kurgulanmalıdır.</li>
  <li>Cıvata kafalarının alet erişilebilirliği montaj ergonomisi açısından tasarım aşamasında 3D simüle edilmelidir.</li>
</ul></div>

<div class="test"><h3>Büyük Modül 2 Sınavı</h3>
<details><summary>Soru 1: Bir montaj plakasının dış sınır ölçülerini teknik resimde 150 ± 0,005 mm olarak verdiniz. Parça sadece koruyucu sac kapağın altına cıvatalanacak, hiçbir hassas kızakla teması yok. Bu karar imalat sürecini nasıl etkiler?</summary>
<div>Gereksiz aşırı sıkı tolerans verilmiştir! ±0,005 mm (5 mikron) toleransı standart bir CNC freze sağlayamaz. Parça frezeden sonra taşlama tezgâhına gitmek, sıcaklık kontrollü klimalı metroloji odasında saatlerce bekletilmek ve CMM ile tek tek ölçülmek zorunda kalır; parça maliyeti 4–5 katına çıkar ve hurda oranı fırlar. Bu tür fonksiyonel olmayan serbest ölçüler için <strong>ISO 2768-m (±0,3 mm)</strong> genel toleransı tamamen yeterlidir.</div></details>
<details><summary>Soru 2: 3 eksen CNC frezede işlenecek bir parçanın 5 farklı yüzeyinde 2'şer adet M5 dişli delik vardır. Parçanın maliyetini yarıya indirmek için DFM açısından ne önerirsiniz?</summary>
<div>5 farklı yüzeydeki delikler 5 ayrı bağlama (setup) ve 5 kez operatör sıfırlaması gerektirir; tezgâh ayar süresi parça işleme süresinden uzun sürer. DFM çözümü: Parçayı yeniden kurgulayarak tüm M5 delikleri <strong>tek bir üst yüzeyde (+Z düzleminde)</strong> toplamak veya parçayı iki basit plakaya bölerek üstten vidalamaktır. Tek bağlamada biten parça tezgâh süresini ve maliyeti %50 düşürür.</div></details>
<details><summary>Soru 3: M6 kör cıvata deliği için delik derinliği 12 mm delinmiş ve teknik resme "12 mm tam boy diş açılacak" yazılmıştır. İmalat ustası neden bu resmi geri gönderir?</summary>
<div>Kılavuz takımlarının ucunda 2 ila 3 diş boyu konik pah (giriş pahı) bulunur ve kılavuz deliğin en dibine kadar tam profil diş açamaz. Ayrıca deliğin dibinde talaşların birikeceği bir alan kalmazsa kılavuz tabana çakılarak anında kırılır. Kural: 12 mm diş boyu isteniyorsa, matkap derinliği en az <code>12 mm + (3 ila 5 × hatve) ≈ 16–17 mm</code> delinmelidir.</div></details>
</div>
`);
