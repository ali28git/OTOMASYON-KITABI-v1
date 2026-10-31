/* ========================================================================
   MODÜL 12: PROJE SÜRECİ VE ENDÜSTRİ PRATİĞİ (m12-c.js)
   Bölüm 12.7: Kablo Yönetimi ve Enerji Zincirleri
   Bölüm 12.8: Maliyet Tahmini ve Tasarımda Tasarruf
   Bölüm 12.9: Devreye Alma ve Geri Bildirim (FAT / SAT)
   ======================================================================== */

// BÖLÜM 12.7: KABLO YÖNETİMİ VE ENERJİ ZİNCİRLERİ
kitap.bolumEkle({
  id: "12-7",
  baslik: "Kablo Yönetimi ve Enerji Zincirleri",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Hareketli otomasyon eksenlerinde (kartezyen robotlar, portal manipülatörler, transfer arabaları) elektrik kablolarının ve pnömatik hortumların milyonlarca çevrim boyunca kopmadan, ezilmeden ve elektromanyetik parazit (EMC) yaratmadan taşınmasını sağlayan <strong>Enerji Zincirlerinin (Drag Chain / Cable Carrier)</strong> boyutlandırılmasını, bükülme yarıçapı (R) hesabını, iç bölümlendirme kurallarını ve desteksiz boy (unsupported length) sınırlarını öğretmektir.</p>
</div>

<h2>1. Enerji Zinciri Seçim Kriterleri ve Bükülme Yarıçapı (R)</h2>
<p>Kabloların hareketli zincir içinde kopmasının 1 numaralı sebebi, kablonun izin verilen minimum dinamik bükülme yarıçapından daha küçük bir zincir seçilmesidir.</p>

<div class="muhendislik-kutu">
  <h4>Minimum Bükülme Yarıçapı Formülü:</h4>
  <p>Zincir içindeki en kalın kablo veya hortumun dış çapı <em>D<sub>max</sub></em> olmak üzere, zincirin bükülme yarıçapı <em>R</em> şu kuralı sağlamalıdır:</p>
  <ul>
    <li><strong>Sürekli Hareketli Özel Zincir Kablolarında (Chainflex):</strong> R<sub>min</sub> ≥ <strong>7,5 ila 10 × D<sub>kablo</sub></strong></li>
    <li><strong>Standart Esnek Kablolarda:</strong> R<sub>min</sub> ≥ <strong>12 ila 15 × D<sub>kablo</sub></strong></li>
    <li><strong>Poliüretan Pnömatik Hortumlarda:</strong> R<sub>min</sub> ≥ <strong>8 ila 10 × D<sub>hortum</sub></strong></li>
    <li><strong>Kural:</strong> Zincirin seçilecek yarıçapı <em>R</em>, zincir içine konulacak <strong>en kalın elemanın gerektirdiği minimum yarıçaptan DAHA BÜYÜK</strong> olmak zorundadır! (Örn: En kalın servo güç kablosu Ø16 mm ise, R<sub>min</sub> ≥ 10 × 16 = 160 mm olmalıdır; katalogdan R = 175 veya 200 mm yarıçaplı zincir seçilir).</li>
  </ul>
</div>

<h2>2. Zincir İçi Doluluk Oranı ve Dağılım Disiplini (%20 Boşluk Kuralı)</h2>
<p>Zincir gözünün içine kablolar sıkış tıkış doldurulamaz. Hareket esnasında zincir bükülürken dış koldaki kablolar gerilir, iç koldaki kablolar ise sıkışır. Kabloların birbirinin üzerinden kayabilmesi için serbest hareket payı şarttır:</p>

<div class="uyari-kutu">
  <h4>Altın Kural: %20 Emniyet Boşluğu ve Seperatör Zorunluluğu</h4>
  <ol>
    <li><strong>Maksimum Kesit Doluluğu:</strong> Kablo ve hortumların enkesit alanlarının toplamı, zincir iç net boşluk alanının (İç Genişlik × İç Yükseklik: Bi × Hi) <strong>en fazla %60 ila %70'i</strong> kadar olmalıdır. Kalan %30–40 alan serbest boşluk bırakılmalıdır.</li>
    <li><strong>EMC Ayrımı (Elektromanyetik Parazit):</strong> 400V AC servo motor güç kabloları (yüksek frekanslı PWM anahtarlama gürültüsü üretir) ile hassas enkoder ve analog sensör kabloları <strong>ASLA yan yana temas ettirilemez!</strong> Araya mutlaka dikey plastik ayırıcı (Seperatör) konulmalı veya ayrı zincirlerden geçirilmelidir.</li>
    <li><strong>Ağırlık Dengesi:</strong> Ağır kalın kablolar zincirin kenarlarına simetrik yerleştirilmeli; zincirin bir tarafının ağır basıp eksenel olarak burulması (torsiyonel eğrilme) engellenmelidir.</li>
    <li><strong>Pnömatik Hortum Ayrımı:</strong> Basınç altında şişen ve sertleşen hava hortumları elektrik kablolarıyla karıştırılmamalı, ayrı bölmelere konulmalıdır.</li>
  </ol>
</div>

<h2>3. Desteksiz Çalışma Boyu (Unsupported Length - FL<sub>G</sub> ve FL<sub>B</sub>)</h2>
<p>Zincirin alt kolu yerde sabit dururken üst kolu havada ileri geri hareket eder. Üst kolun kendi ağırlığı ve kablo ağırlığı sebebiyle yerçekimine karşı düz kalabildiği maksimum mesafeye <strong>Desteksiz Boy</strong> denir:</p>
<ul>
  <li><strong>FL<sub>G</sub> (Düz Desteksiz Boy):</strong> Zincir üst kolu tamamen düz veya hafif yukarı bombeli hareket eder; ideal çalışma rejimidir.</li>
  <li><strong>FL<sub>B</sub> (İzin Verilen Sarkmalı Boy):</strong> Strok uzadıkça zincir bir miktar aşağı sarkar ancak yere sürtünmez.</li>
  <li><strong>Kritik Kural:</strong> Eğer hareket stroku katalogdaki desteksiz boy limitini aşıyorsa (örn: strok > 3–4 metre), zincirin üst kolu alt kola çarparak parçalanır! Bu durumda zincirin içine oturacağı <strong>Sac Kılavuz Kanal (Guide Trough)</strong> yapılması ve zincir üzerine kayar patenler (gliding shoes) takılması zorunludur.</li>
</ul>

<h2>4. Kablo Gergi Giderici Kelepçeleme (Strain Relief)</h2>
<p>Zincirin her iki hareketli ucunda (tahrik ucu ve sabit ayak) kablolar <strong>özel taraklı kelepçelerle (Strain Relief Clamps)</strong> sabitlenmelidir:</p>
<ul>
  <li>Kablolar sadece dış kılıfından sıkılmalı, iç damarlar ezilmemelidir.</li>
  <li>Kelepçeleme, zincirin bükülme hattından en az 20–30 mm geride yapılmalıdır.</li>
  <li>Zincir içinde kablolar kesinlikle gergin çekilmemeli, hafif gevşek (S-kavisi alabilecek rahatlıkta) bırakılmalıdır.</li>
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
        <td><strong>Energy Chain (Drag Chain)</strong></td>
        <td>Hareketli makine eksenlerinde kablo ve hortumları dinamik bükülme yorulmasından koruyan eklemli plastik/çelik taşıyıcı.</td>
      </tr>
      <tr>
        <td><strong>Bending Radius (Bükülme Yarıçapı - R)</strong></td>
        <td>Zincirin dönemeç noktasında oluşturduğu eğrilik yarıçapı; kablo damarlarının kopmasını belirleyen en temel ölçüt.</td>
      </tr>
      <tr>
        <td><strong>Chainflex Kablo</strong></td>
        <td>Zincir içinde sürekli milyonlarca kez bükülmeye dayanıklı, ince çok damarlı özel bükümlü robotik kablo tipi.</td>
      </tr>
      <tr>
        <td><strong>Separator (Ayırıcı Lama)</strong></td>
        <td>Güç ve sinyal hatlarını birbirinden izole eden ve kabloların üst üste binmesini engelleyen zincir içi dikey bölme.</td>
      </tr>
      <tr>
        <td><strong>Strain Relief (Gergi Giderici)</strong></td>
        <td>Kablo çekme kuvvetlerinin hareketli zincir içine iletilmesini engelleyen uç sabitleme klemens sistemi.</td>
      </tr>
      <tr>
        <td><strong>Corkscrew Effect (Tirbüşon Hatası)</strong></td>
        <td>Standart sabit tesisat kablolarının zincirde çalıştırılması sonucu iç damarların burularak kılıfı delip dışarı fırlaması arızası.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Enerji zincirlerinde bükülme yarıçapı, en kalın kablo veya hortumun dış çapının en az 8–10 katı olarak seçilmelidir.</li>
    <li>Zincir kesit alanı en fazla %60–70 doldurulmalı; %30 serbest genleşme boşluğu bırakılmalıdır.</li>
    <li>EMC parazitlerini önlemek için motor güç kabloları ile enkoder/sensör sinyal kabloları seperatörle kesinlikle ayrılmalıdır.</li>
    <li>Strok boyu desteksiz sınırı aştığında sac kılavuz kanallar kullanılmalı ve kablolar her iki uçtan gergi giderici kelepçelerle sabitlenmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Kablo Arızası ve Tirbüşon Etkisi):</strong> Bir portal Kartezyen robotun X ekseninde standart pano içi esnek PVC kablo enerji zincirine çekilmiştir. Makine devreye alındıktan 3 ay sonra kablonun dış kılıfının patladığı, içindeki bakır damarların tirbüşon gibi kıvrılarak dışarı fırladığı ve damarların koptuğu görülmüştür. Bu arızanın temel sebebi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Hattan geçen elektrik akımı çok yüksektir.
      <div class="test-cevap">YANLIŞ. Akım aşırı olsaydı kablo erirdi; burada mekanik bir burulma hasarı vardır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Standart tesisat kabloları sabit ortamlar içindir; damar büküm hatveleri uzundur ve enerji zincirinin sürekli bükülme dinamiklerine dayanamaz. Enerji zincirlerinde mutlaka merkez kordonu etrafında kısa hatveli özel bükülmüş, TPE/PUR kılıflı dinamik zincir kabloları (örn: Igus Chainflex, Lapp ÖLFLEX-FD) kullanılmalıdır.
      <div class="test-cevap">DOĞRU. Standart kablolar zincirde birkaç yüz bin çevrimde iç gerilmelerle burularak kılıfı deler (corkscrew hatası). Hareketli hatta özel robotik zincir kablosu zorunludur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kablonun rengi gridir, siyah olmalıydı.
      <div class="test-cevap">YANLIŞ. Renk mekanik dayanımı etkilemez.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (EMC Paraziti ve Ayrım Kuralı):</strong> Bir servo eksen hareket ederken yakınındaki analog sıcaklık sensörünün ve enkoder pozisyonunun periyodik olarak saçmaladığı, motordan ses geldiği görülmüştür. Kablo tesisatı incelendiğinde 400V motor besleme kablosu ile enkoder kablosunun aynı enerji zincirinin içinde seperatörsüz olarak birbirine sarılı şekilde gittiği anlaşılmıştır. Doğru mühendislik çözümü nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Motor gücü yarıya düşürülmelidir.
      <div class="test-cevap">YANLIŞ. Gücü düşürmek paraziti yok etmez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Güç kablosu ile sinyal/enkoder kabloları arasına zincir boyunca kesintisiz dikey plastik seperatörler (ayırıcılar) konulmalı, kablolar ayrı bölmelere hapsedilmeli ve enkoder kablosunun örgülü ekranı (shield) pano girişinde 360° topraklanmalıdır.
      <div class="test-cevap">DOĞRU. Güç kablosundaki yüksek PWM frekansları yanındaki sinyal kablosuna elektromanyetik kuplajla gürültü basar. Fiziksel mesafe ve ekranlama şarttır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Enkoder kablosu kesilip atılmalıdır.
      <div class="test-cevap">YANLIŞ. Enkoder olmadan servo motor çalışamaz.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Bükülme Yarıçapı Hesabı):</strong> Bir enerji zinciri içine çekilecek kablo demetinde en kalın bileşen Ø18 mm dış çapa sahip hidrolik hortumdur. Üretici katalog kuralına göre (R ≥ 10 × D), seçilmesi gereken enerji zincirinin minimum bükülme yarıçapı R ne olmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) R ≥ 180 mm (Katalogdan R = 200 mm seçilir)
      <div class="test-cevap">DOĞRU. R<sub>min</sub> = 10 × 18 = 180 mm. Zincir yarıçapı bu değerin altında seçilirse hidrolik hortum iç çelik örgüleri kısa sürede kırılarak patlar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) R = 50 mm
      <div class="test-cevap">YANLIŞ. 50 mm yarıçapta hortum kırılır (kinking) ve anında tıkanır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) R = 18 mm
      <div class="test-cevap">YANLIŞ. Çapın kendisi yarıçap olamaz.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 12.8: MALİYET TAHMİNİ VE TASARIMDA TASARRUF
kitap.bolumEkle({
  id: "12-8",
  baslik: "Maliyet Tahmini",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Otomasyon makinelerinin henüz CAD aşamasındayken maliyet kırılımlarını (Hammadde, Talaşlı İmalat, Standart Satın Alma, Pano/Yazılım, İşçilik) tahmin etme metodolojilerini; aşırı tolerans ve gereksiz işleme operasyonlarını eleyerek performanstan ödün vermeden maliyeti %25–40 düşüren <strong>DFMA (Design for Manufacture and Assembly)</strong> tasarruf stratejilerini öğretmektir.</p>
</div>

<h2>1. Özel Makine İmalatında Maliyet Ağacı Kırılımı</h2>
<p>Endüstriyel bir otomasyon hücresinin toplam bütçesi tipik olarak şu dağılıma sahiptir:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Maliyet Kalemi</th>
      <th>Toplam Bütçedeki Payı (%)</th>
      <th>İçerdiği Masraflar ve Bileşenler</th>
      <th>Tasarımcının Etki Gücü</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Satın Alınan Standart Mekatronik</strong></td>
      <td>%30 – %40</td>
      <td>Servo motorlar, sürücüler, planet redüktörler, lineer kızaklar, vidalı miller, pnömatik silindir ve valfler, robot kolu.</td>
      <td><strong>Çok Yüksek:</strong> Aşırı boyutlandırmayı (over-sizing) engelleyerek doğrudan tasarruf sağlar.</td>
    </tr>
    <tr>
      <td><strong>Talaşlı İmalat ve Mekanik İmalat</strong></td>
      <td>%20 – %25</td>
      <td>CNC freze ve torna tezgah saat ücretleri, hammadde (çelik, alüminyum kütük), lazer kesim, abkant büküm, kaynak, taşlama, boya/eloksal kaplama.</td>
      <td><strong>AŞIRI YÜKSEK (%80 etki):</strong> Çizilen her gereksiz cep, radyus ve dar tolerans CNC saat ücretini katlar!</td>
    </tr>
    <tr>
      <td><strong>Elektrik Panosu, Saha Kablajı ve Donanım</strong></td>
      <td>%15 – %20</td>
      <td>PLC, güvenlik röleleri, şalterler, klemensler, kablo kanalları, pano montaj işçiliği ve saha kablo çekimi.</td>
      <td>Orta: Dağıtılmış I/O (IO-Link) kullanımıyla kablolama işçiliğini azaltabilir.</td>
    </tr>
    <tr>
      <td><strong>Mühendislik, Yazılım ve Devreye Alma</strong></td>
      <td>%15 – %20</td>
      <td>Mekanik CAD tasarımı, elektrik Eplan projesi, PLC/HMI/Robot yazılımı, FAT ve SAT saha devreye alma süreleri.</td>
      <td>Yüksek: Standart kütüphaneler ve modüler kodlama ile adam/saat maliyetini düşürür.</td>
    </tr>
    <tr>
      <td><strong>Beklenmeyen Risk Payı (Contingency)</strong></td>
      <td>%5 – %10</td>
      <td>Tasarım revizyonları, montajda uymayan parçalar, sahada çıkan ekstra müşteri talepleri.</td>
      <td>DFMEA ve DMU çakışma analizi ile bu masraf sıfırlanabilir.</td>
    </tr>
  </tbody>
</table>

<h2>2. Tasarım Aşamasında İmalat Maliyetini Düşürme (DFMA) Taktikleri</h2>
<p>Bir makinenin maliyetinin <strong>%70 ila %80'i henüz CAD ekranındayken kilitlenir!</strong> İmalat mühendisi veya satın almacı tasarımı bitmiş bir parçayı ancak %5–10 ucuzlatabilir; asıl tasarrufu tasarımcı yapar:</p>

<div class="muhendislik-kutu">
  <h4>1. Tolerans Maliyeti Tuzağı:</h4>
  <p>Gereksiz yere konulan her dar tolerans maliyeti geometrik olarak katlar:</p>
  <ul>
    <li>Standart Kaba İşleme (±0,2 mm): <strong>1× Maliyet (Referans)</strong></li>
    <li>Standart Freze Toleransı (±0,05 mm): <strong>1,8× Maliyet</strong></li>
    <li>Taşlama ve Raybalama Toleransı (±0,01 mm): <strong>4× Maliyet</strong></li>
    <li>Hassas Honlama / Taşlama (±0,002 mm): <strong>10× – 15× Maliyet!</strong></li>
    <li><strong>Kural:</strong> Sadece rulman ve pim yerlerine mikron toleransı verilmeli; boşta duran serbest yüzeyler <em>ISO 2768-mK</em> genel toleransına bırakılmalıdır.</li>
  </ul>
</div>

<div class="muhendislik-kutu">
  <h4>2. CNC Frezeleme Süresini Kısaltan Geometri Kuralları:</h4>
  <ul>
    <li><strong>Derin Ceplerden Kaçınma:</strong> Bir cebin derinliği parmak freze çapının 3 katından fazla olmamalıdır (<em>H ≤ 3 × D</em>). H > 5D olduğunda takım zırdama yapar, talaş ilerleme hızı 1/5'e düşer ve takım kırılma riski doğar.</li>
    <li><strong>İç Köşe Radyusları:</strong> Cep iç köşelerine daima standart freze takımı yarıçapından <strong>bir miktar büyük radyus</strong> verilmelidir (Örn: R = 5 mm parmak freze kullanılacaksa köşeye R = 5,5 veya 6 mm radyus verilir). Böylece takım köşede duraksamadan sürekli yumuşak kavisle dönerek işleme süresini %40 kısaltır.</li>
    <li><strong>Sac Büküm İkamesi:</strong> Dolu alüminyum kütükten talaş kaldırarak üretilen L-braket (120 dolar) yerine, 3 mm sacdan lazer kesim ve abkant bükümle üretilen parça (15 dolar) <strong>tam 8 kat daha ucuzdur!</strong></li>
  </ul>
</div>

<h2>3. Hedef Maliyetleme (Target Costing) Yaklaşımı</h2>
<p>Geleneksel yöntem: <em>Maliyet = Üretim Giderleri + İstenen Kar</em>. Bu yaklaşım serbest piyasada çalışmaz çünkü fiyatı müşteri belirler.</p>
<div class="formul-kutu">
  İzin Verilen Maksimum Maliyet = Müşterinin Ödemeye Razı Olduğu Fiyat − Hedef Kar Payı
</div>
<p>Tasarımcı projeye başlarken her alt modüle (besleme grubu 5.000 EUR, transfer grubu 12.000 EUR vb.) bir bütçe tavanı koyar ve tasarımı bu bütçenin içinde kalacak şekilde malzeme ve parça seçimiyle optimize eder.</p>

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
        <td><strong>DFMA (Design for Manufacture & Assembly)</strong></td>
        <td>İmalat ve montaj maliyetlerini tasarım aşamasında geometriyi akıllandırarak düşüren mühendislik yaklaşımı.</td>
      </tr>
      <tr>
        <td><strong>Target Costing (Hedef Maliyetleme)</strong></td>
        <td>Müşteri bütçesinden ve piyasa satış fiyatından geriye doğru giderek alt bileşenlere bütçe tahsis etme yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Tezgah Saat Ücreti</strong></td>
        <td>CNC işleme tezgahının amortisman, operatör, elektrik ve takım giderlerini içeren saatlik çalışma maliyeti.</td>
      </tr>
      <tr>
        <td><strong>Tolerans Maliyet Eğrisi</strong></td>
        <td>Tolerans mikron mertebesine yaklaştıkça imalat maliyetinin katlanarak fırladığını gösteren asimptotik eğri.</td>
      </tr>
      <tr>
        <td><strong>Contingency (Risk Payı)</strong></td>
        <td>Özel makine projelerinde öngörülemeyen teknik aksilikleri karşılamak için bütçeye eklenen %5–10'luk emniyet fonu.</td>
      </tr>
      <tr>
        <td><strong>L/D Oranı (Takım Boy/Çap Oranı)</strong></td>
        <td>Frezelemede takım serbest boyunun çapa oranı; 3'ün üzerine çıktığında titreşim ve maliyet fırlar.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Bir makinenin maliyetinin %80'i tasarımcının CAD masasındaki kararlarıyla belirlenir.</li>
    <li>Gereksiz dar toleranslar ve keskin iç köşeler CNC işleme saatlerini ve maliyeti katlar; sadece fonksiyonel yüzeylere hassas tolerans verilmelidir.</li>
    <li>Dolu kütükten talaş kaldırmak yerine lazer kesim sac büküm parçalar tercih edilerek parça maliyetleri 5-8 kat düşürülebilir.</li>
    <li>Proje başında Hedef Maliyetleme (Target Costing) yapılmalı ve alt modüller bütçe tavanlarına göre boyutlandırılmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Talaşlı İmalat Maliyet Tuzağı):</strong> Bir genç mühendis, alüminyum bir montaj braketinin teknik resmini çizerken kütüphanedeki tüm ölçülere (delik aralıkları, kaba dış kenarlar, boşluk havşaları) otomatik olarak "±0,01 mm" tolerans basmıştır. Fason talaşlı imalatçı parçanın birim fiyatı için 450 TL yerine 2400 TL teklif vermiştir. Fiyatın 5 katından fazla fırlamasının sebebi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Alüminyumun borsa fiyatı artmıştır.
      <div class="test-cevap">YANLIŞ. Hammadde fiyatı maliyetin küçük bir kısmıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Dış serbest kenarlara dahi ±0,01 mm tolerans verilmesi, imalatçıyı standart hızlı frezeleme yerine çok yavaş paso vermeye, özel hassas takımlar kullanmaya ve her parçayı CMM 3D ölçüm cihazında saatlerce denetlemeye zorlamıştır. Toleranslar gereksiz tüm yüzeylerde ISO 2768-m (±0,2 mm) genel toleransına bırakılmalı, sadece rulman yuvalarına hassas tolerans yazılmalıydı.
      <div class="test-cevap">DOĞRU. Bilinçsizce basılan dar toleranslar imalat süresini ve maliyetini uçurur. Tolerans gerektiği kadar dar, mümkün olduğu kadar geniş verilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) İmalatçı kasten fahiş fiyat vermiştir.
      <div class="test-cevap">YANLIŞ. Talep edilen teknolojik proses bu maliyeti gerektirmektedir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (DFMA İkame Stratejisi):</strong> Bir makinede kablo kanalını ve iki adet pnömatik valfi taşıyan L-şekilli bir braket vardır. Tasarımcı bu parçayı 50x50x120 mm dolu alüminyum kütükten freze ile cepler boşaltarak tasarlamış ve parça başına 85 Euro imalat maliyeti çıkmıştır. Bu parçanın işlevini ve rijitliğini zerre kaybetmeden maliyetini 10 Euro'nun altına düşürmek için hangi üretim yöntemine geçilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Parça titanyumdan işlenmelidir.
      <div class="test-cevap">YANLIŞ. Titanyum çok daha pahalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) 2,5 mm galvanizli çelik sacdan lazer kesim ve tek vuruş abkant büküm (Sheet Metal Design) ile imalata geçilmelidir. Sıfır talaş kaldırma, 15 saniyelik üretim süresiyle parça maliyeti 8 Euro'ya iner.
      <div class="test-cevap">DOĞRU. Ağır yük taşımayan taşıyıcı braketlerde dolu kütük işlemek yerine sac büküm kullanmak en temel DFMA tasarruf taktiğidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Braket tahtadan yapılmalıdır.
      <div class="test-cevap">YANLIŞ. Endüstriyel otomasyonda tahta kullanılamaz.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (İç Köşe Radyusu ve Takım Ömrü):</strong> 40 mm derinliğinde bir cep frezelenirken, tasarımcı cebin iç dik köşelerine R = 4 mm radyus vermiştir. CNC operatörü bu köşeyi işlemek için Ø8 mm (R=4 mm) parmak freze kullanmak zorunda kalmıştır. Takım köşeye girdiğinde kesme açısı 90°'den 180°'ye fırladığı için zırdama yapmış ve kırılmıştır. Tasarımcı köşeyi nasıl revize etmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) İç köşe radyusu en az R = 5 mm veya 6 mm yapılmalıdır; böylece Ø8 mm takım köşede sıkışmadan kavis çizerek dönebilir veya köşelere matkap boşaltması (undercut / dog-bone) açılmalıdır.
      <div class="test-cevap">DOĞRU. Köşe radyusu takım yarıçapından en az %15–20 büyük olmalıdır; aksi halde takım köşede aşırı yüklenir, kırılır ve takım izi bırakır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) İç köşeler jilet gibi keskin sıfır radyus yapılmalıdır.
      <div class="test-cevap">YANLIŞ. Dairesel dönen freze takımıyla keskin iç köşe açmak fiziksel olarak imkansızdır (tel erozyon gerekir, maliyet 10 kat artar).</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cep derinliği 100 mm yapılmalıdır.
      <div class="test-cevap">YANLIŞ. Takım boyu uzadıkça zırdama daha da artar.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 12.9: DEVREYE ALMA VE GERİ BİLDİRİM (FAT / SAT)
kitap.bolumEkle({
  id: "12-9",
  baslik: "Devreye Alma ve Geri Bildirim",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Tasarlanan ve üretilen otomasyon makinelerinin sahada sorunsuz kabul edilmesini sağlayan <strong>Fabrika Kabul Testi (FAT)</strong> ve <strong>Saha Kabul Testi (SAT)</strong> prosedürlerini, güvenli ve sistematik devreye alma (commissioning) kontrol sıralamasını, Cpk/Ppk proses yeterlilik analizini ve projeden edinilen tecrübelerin kurumsal hafızaya işlenmesini (Lessons Learned) öğretmektir.</p>
</div>

<h2>1. Kabul Testleri Protokolü: FAT vs. SAT</h2>
<p>Özel makine projelerinde teslimat iki aşamalı resmi kabul testiyle tamamlanır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Kabul Testi Aşaması</th>
      <th>Nerede ve Kiminle Yapılır?</th>
      <th>Temel Test Kriterleri</th>
      <th>Hukuki ve Mali Önemi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>FAT (Factory Acceptance Test)</strong></td>
      <td><strong>Makine İmalatçısının Atölyesinde.</strong> Müşteri heyeti imalatçı fabrikasına gelir.</td>
      <td>• Güvenlik fonksiyonlarının testi (acil duruş, ışık perdesi, kilitler).<br>• Mekanik ve elektrik şema kontrolleri.<br>• Müşteri numuneleriyle 4–8 saat kesintisiz kuru ve yüklü çevrim testi.<br>• Çevrim süresi ve parça toleranslarının ölçümü.</td>
      <td><strong>Sevk Onayı:</strong> FAT protokolü imzalanmadan makine ambalajlanıp tıra yüklenemez! Genellikle proje bedelinin %20–30'luk ara hakediş ödemesi bu imzayla serbest kalır.</td>
    </tr>
    <tr>
      <td><strong>SAT (Site Acceptance Test)</strong></td>
      <td><strong>Müşterinin Nihai Üretim Tesisinde.</strong> Gerçek fabrika hattına bağlandıktan sonra.</td>
      <td>• Fabrika altyapısı (hava, elektrik, network) entegrasyonu.<br>• Gerçek seri üretim şartlarında 24 ila 48 saatlik sürekli çalışma testi.<br>• <strong>Cpk ≥ 1,67 Proses Yeterlilik Analizi:</strong> Çıkan parçaların istatistiksel kalite dağılımı.<br>• OEE ve arıza duruş sıklığı denetimi.</td>
      <td><strong>Nihai Kabul (Final Acceptance):</strong> Makinenin mülkiyeti ve yasal sorumluluğu müşteriye geçer; garanti süresi başlar ve son bakiye (%10–20) tahsil edilir.</td>
    </tr>
  </tbody>
</table>

<h2>2. Adım Adım Güvenli Devreye Alma (Commissioning) Sıralaması</h2>
<p>Yeni üretilmiş bir makinenin ana şalterini kaldırıp doğrudan otomatik start butonuna basmak ölümcül bir cehalettir. Devreye alma <strong>7 katı disiplin adımıyla</strong> icra edilir:</p>

<div class="muhendislik-kutu">
  <h4>Sistematik Devreye Alma Protokolü:</h4>
  <ol>
    <li><strong>Statik Mekanik Doğrulama:</strong> Tüm şase cıvatalarının tork anahtarıyla sıkıldığı kontrol edilir. Kızaklar yağlanır. Miller elle çevrilerek kasıntı (binding) olup olmadığı yoklanır.</li>
    <li><strong>Soğuk Elektrik ve İzolasyon Testi:</strong> Enerji verilmeden önce toprak hattı direnci ölçülür, fazlar arası kısa devre kontrolü yapılır.</li>
    <li><strong>Emniyet Devresi Testi (Safety First!):</strong> Güç verilmeden önce sadece 24V emniyet devresi açılır. Acil duruş butonları, ışık perdeleri ve kapı kilitleri tek tek test edilir; acil duruşun kontaktörleri kestiği teyit edilmeden ASLA ana motor gücü açılamaz!</li>
    <li><strong>Giriş / Çıkış (I/O) Testi:</strong> PLC üzerinden tüm sensörlerin bayrakları elle tetiklenerek doğru adrese sinyal geldiği, valf adasındaki bobinlerin doğru silindiri sürdüğü manuel modda tek tek doğrulanır.</li>
    <li><strong>Motor Yönü ve Homing (Sıfırlama):</strong> Motorlar yüksüzken tek tek düşük hızda (jog modunda) döndürülür; dönme yönünün doğruluğu ve sıfırlama (homing) sensörleri onaylanır.</li>
    <li><strong>Kuru Çevrim (Dry Run):</strong> Parça beslemeden, düşük hızda (%20 hız) makine manuel adımlarla (step-by-step) çalıştırılır; mekanik çarpışma olmadığı gözlenir.</li>
    <li><strong>Tam Yüklü Otomatik Test:</strong> Hız %100'e çıkarılır; parçalı seri üretim başlatılarak ısınma, titreşim ve çevrim süreleri kaydedilir.</li>
  </ol>
</div>

<h2>3. Öğrenilmiş Dersler (Lessons Learned) ve Döngünün Kapanışı</h2>
<p>Mühendislik şirketlerini büyüten şey makineler değil, <strong>yapılan hatalardan çıkarılan kurumsal tecrübedir</strong>. Proje teslim edildikten sonra <em>"Post-Mortem / Lessons Learned"</em> toplantısı yapılır:</p>
<ul>
  <li>Montajda hangi delikler uymadı ve neden matkapla büyütülmek zorunda kalındı?</li>
  <li>Hangi sensör bor yağından körlendi ve tipi değiştirildi?</li>
  <li>Tedarik süresi uzayan hangi marka bizi 1 ay bekletti?</li>
  <li><strong>Kurumsal Çözüm:</strong> Bu hataların tümü şirketin tasarım rehberine ve CATIA kontrol listelerine (Checklists) kural olarak eklenir; böylece <strong>aynı hata bir sonraki projede asla tekrarlanmaz!</strong></li>
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
        <td><strong>FAT (Factory Acceptance Test)</strong></td>
        <td>İmalatçı tesisinde müşterinin hazır bulunduğu sevk öncesi resmi teknik fonksiyon kabul testi.</td>
      </tr>
      <tr>
        <td><strong>SAT (Site Acceptance Test)</strong></td>
        <td>Müşteri fabrikasında gerçek hat beslemesi altında yapılan nihai kabul ve garanti başlatma testi.</td>
      </tr>
      <tr>
        <td><strong>Commissioning (Devreye Alma)</strong></td>
        <td>Montajı biten mekanik, elektrik ve yazılım bileşenlerinin ilk enerjilendirmeden seri üretime kadar adım adım test edilmesi süreci.</td>
      </tr>
      <tr>
        <td><strong>Cpk (Proses Yeterlilik İndeksi)</strong></td>
        <td>Üretilen parçaların tolerans sınırları içindeki istatistiksel dağılım kalitesi (Cpk ≥ 1,67 sıfır hata standardıdır).</td>
      </tr>
      <tr>
        <td><strong>I/O Check</strong></td>
        <td>PLC girişlerindeki tüm sensörlerin ve çıkışlardaki tüm valf/rölelerin fiziksel olarak doğru adrese bağlı olduğunu kanıtlama adımı.</td>
      </tr>
      <tr>
        <td><strong>Lessons Learned</strong></td>
        <td>Projeden çıkarılan teknik derslerin ve yapılan hataların sonraki tasarımlara rehber olması için kurumsal hafızaya işlenmesi.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>FAT testi imalatçıda sevk onayını ve ara ödemeyi sağlarken, SAT testi müşteri sahasında nihai kabulü ve garantiyi başlatır.</li>
    <li>Devreye alma kesin bir sıralamayla yapılmalıdır: Önce mekanik tork kontrolü → Emniyet devresi testi → I/O testi → Jog motor testi → Kademeli otomatik test.</li>
    <li>Emniyet devrelerinin çalıştığı doğrulanmadan motorlara kesinlikle ana güç verilmemelidir.</li>
    <li>Proje tesliminden sonra Lessons Learned toplantısı yapılmalı, sahada karşılaşılan zorluklar tasarım kurallarına dönüştürülmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Kabul Testi Protokolü):</strong> Bir otomasyon imalatçısı, makinenin montajı atölyesinde biter bitmez müşteriye haber vermeden makineyi ambalajlayıp müşterinin fabrikasına sevk etmiştir. Müşteri makine fabrikaya geldiğinde teslim almayı reddetmiş ve kamyonu geri göndermiştir. Müşterinin bu yasal hakkını dayandırdığı temel sözleşme kuralı nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Makinenin boya rengini beğenmemiştir.
      <div class="test-cevap">YANLIŞ. Renk gerekçe olamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) İmalatçı atölyesinde müşteri heyetinin katılımıyla yapılması zorunlu olan resmi "Fabrika Kabul Testi (FAT)" icra edilmemiş ve karşılıklı imzalı FAT protokolü düzenlenmemiştir. İmzalı FAT olmadan sevk edilen makine hukuken geçersizdir ve müşteri sahaya kabul etmek zorunda değildir.
      <div class="test-cevap">DOĞRU. FAT testi sevk vizesidir. Müşteri makinenin çalıştığını imalatçı tesisinde görüp imzalamadan sevk yapılamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kamyon şoförünün ehliyeti yoktur.
      <div class="test-cevap">YANLIŞ. Mühendislik sözleşmesiyle ilgisi yoktur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Devreye Alma Güvenliği):</strong> Yeni toplanmış bir montaj hücresine ilk kez elektrik verilecektir. Pano kapağı açılmış ve şalter kaldırılmıştır. Genç bir otomasyon teknisyeni doğrudan servo sürücülerin gücünü açıp PLC'yi "RUN" moduna almak istemiştir. Kıdemli devreye alma mühendisi teknisyeni derhal durdurmuştur. Güç açılmadan önce yapılması ZORUNLU olan birincil güvenlik adımı nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Makinenin fotoğrafını çekip sosyal medyada paylaşmak.
      <div class="test-cevap">YANLIŞ. Ciddiyetten uzaktır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Motor gücü kesinlikle kapalıyken; acil duruş butonlarının, kapı emniyet kilitlerinin ve ışık perdelerinin emniyet kontaktörlerini kestiği tek tek fiziksel olarak test edilmeli; emniyet devresinin %100 çalıştığı kanıtlanmadan motorlara enerji verilmemelidir.
      <div class="test-cevap">DOĞRU. Devreye almada birinci kural "Safety First"tür. Yazılım hatası veya ters motor fazı sebebiyle eksenler kontrolsüz fırlayabilir; acil duruşun kestiği kesinleşmeden yüksek gerilim açılamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Fabrika sirenini çalmak.
      <div class="test-cevap">YANLIŞ. Gereksiz bir panik yaratır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Kurumsal Süreç ve Lessons Learned):</strong> Bir makinenin devreye alınması sırasında, konveyör tahrik milinin şase sacına sürttüğü ve teknisyenin spiralle şase sacını kesmek zorunda kaldığı görülmüştür. Tasarımcı "Nasılsa sahada hallettiler" diyerek CAD modelini güncellememiştir. 1 yıl sonra aynı makineden bir adet daha sipariş edildiğinde ne yaşanır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Yeni makine kendiliğinden düzelir.
      <div class="test-cevap">YANLIŞ. İmalat eski hatalı teknik resme göre yapılacaktır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) CAD modeli güncellenmediği ve Lessons Learned döngüsü işletilmediği için aynı parça 1 yıl sonra yine hatalı üretilir; montaj ustası şaseyi sahada yine spiralle kesmek zorunda kalır; aynı para ve zaman israfı tıpatıp tekrarlanır! Sahadaki her revizyon derhal ana CAD modeline ve teknik resme (ECO ile) işlenmelidir.
      <div class="test-cevap">DOĞRU. Sahada yapılan düzeltmeler CAD modeline geri yansıtılmazsa aynı hatalar sonsuza kadar tekrarlanır. Kurumsal mühendislik döngüsü kapatılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) İmalatçı fabrika kapanır.
      <div class="test-cevap">YANLIŞ. Ancak büyük maliyet ve prestij kaybı yaşanır.</div>
    </div>
  </div>
</div>
`
});
