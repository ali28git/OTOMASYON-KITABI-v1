/* ========================================================================
   MODÜL 11: CATIA VE TASARIM METODOLOJİSİ (m11-a.js)
   Bölüm 11.1: Part Design: İleri Teknikler
   Bölüm 11.2: Montaj Yapısı ve Top-Down Tasarım
   Bölüm 11.3: Parametrik Tasarım ve Knowledgeware
   Bölüm 11.4: Standart Parça Kütüphaneleri
   ======================================================================== */

// BÖLÜM 11.1: PART DESIGN: İLERİ TEKNİKLER
kitap.bolumEkle({
  id: "11-1",
  baslik: "Part Design: İleri Teknikler",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Havacılık ve otomotiv endüstrisinin en gelişmiş CAD platformu olan CATIA V5 / 3DEXPERIENCE ortamında; binlerce parçadan oluşan büyük montajlarda dahi çökmeyen, güncellemelere karşı bağışık, parametrik ve sağlam ağaç yapısına (Robust Tree Architecture) sahip parça modelleme metodolojilerini, hibrit Boolean operasyonlarını ve konumlandırılmış eskiz (Positioned Sketch) disiplinini öğretmektir.</p>
</div>

<h2>1. Sağlam Ağaç Yapısı ve Geometrical Set / Body Hiyerarşisi</h2>
<p>Amatör bir CAD kullanıcısı tüm çizimleri, yüzeyleri ve katı komutlarını tek bir "PartBody" içine rastgele yığar. Bu ağaçta 50. adımdaki bir eskiz revize edildiğinde sonraki tüm unsurlar çöker (Update Error). Profesyonel metodolojide ağaç iki ana bölüme ayrılır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Ağaç Unsuru</th>
      <th>İçerdiği Geometriler</th>
      <th>Mühendislik Fonksiyonu ve Kuralları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Geometrical Set (Tel Kafes / Yüzey Konteyneri)</strong></td>
      <td>Referans noktaları, eksen çizgileri, kılavuz eğriler, referans düzlemleri ve yüzeyler.</td>
      <td>Tarihsel sıralamaya (history-tree) bağımlı değildir. Katı gövdenin iskeletini oluşturur. Katı operasyonları doğrudan bu referanslara bağlanır.</td>
    </tr>
    <tr>
      <td><strong>PartBody ve Solid Bodies (Katı Gövdeler)</strong></td>
      <td>Pad, Pocket, Shaft, Groove, Boolean operasyonları (Assemble, Add, Remove).</td>
      <td>Tarihsel işlem sırasına tabidir. Parçanın ana kütlesi PartBody'de toplanırken, cepler ve federler ayrı "Body"ler halinde modellenip Boolean operasyonlarıyla birleştirilir.</td>
    </tr>
  </tbody>
</table>

<h2>2. Boolean Modelleme Metodolojisi (Multi-Body Design)</h2>
<p>Karmaşık bir makine parçasını (örn: döküm redüktör gövdesi veya karmaşık fikstür plakası) tek bir katı gövdede sırayla cepler delerek çizmek büyük bir hatadır. En ufak bir revizyonda kenar referansları (Edge/Face references) kaybolur.</p>

<div class="muhendislik-kutu">
  <h4>Boolean Yaklaşımının 4 Temel Adımı:</h4>
  <ol>
    <li><strong>Ana Kütle Gövdesi (Body_Main):</strong> Parçanın dış ham döküm veya kütük formu (Pad/Shaft) modellenir.</li>
    <li><strong>Boşaltma Gövdeleri (Body_Pockets / Body_Drillings):</strong> Parçadan çıkarılacak tüm delikler, cepler ve kanallar pozitif katı (Pad) olarak ayrı bir gövdede modellenir.</li>
    <li><strong>Ekleme Gövdeleri (Body_Ribs / Bosses):</strong> Destek federleri ve cıvata kuleleri ayrı bir gövdede oluşturulur.</li>
    <li><strong>Boolean Birleştirme:</strong> Ana gövdeye cepler <em>"Remove"</em> ile oyulur, kuleler <em>"Add"</em> veya <em>"Assemble"</em> ile eklenir.
      <br><strong>Muazzam Avantajı:</strong> İmalat yöntemi değiştiğinde (örn: frezelemeden döküme geçildiğinde) sadece ilgili Body revize edilir; modelin geri kalanı asla çökmez!</li>
  </ol>
</div>

<h2>3. Eskiz Disiplini: Konumlandırılmış Eskiz (Positioned Sketch)</h2>
<p>CATIA'da standart "Sketch" butonuna basılıp bir katı yüzeyi seçildiğinde yazılım rastgele bir eksen takımı atar (Sliding Sketch). Parçada bir radyus değiştiğinde eskiz 90° ters dönebilir ve tüm parça patlar!</p>

<div class="uyari-kutu">
  <h4>Altın Kural: Daima "Positioned Sketch" Kullanılmalıdır!</h4>
  <p>Eskiz açılırken <strong>"Positioned Sketch"</strong> komutu seçilmeli ve 3 parametre kullanıcı tarafından açıkça kilitlenmelidir:</p>
  <ul>
    <li><strong>Reference (Destek Düzlemi):</strong> Eskizin oturacağı düzlem veya yüzey.</li>
    <li><strong>Origin (Orijin Noktası):</strong> Parçanın rastgele bir köşesi değil, kararlı bir referans noktası, eksen kesişimi veya parça sıfırı (Projection point / Intersection).</li>
    <li><strong>Orientation (Yönlenme):</strong> H (Yatay) ve V (Düşey) eksenlerinin hangi doğrultuyu izleyeceği (örn: X ekseni doğrultusu).</li>
  </ul>
  <p><strong>Yeşil Eskiz Kuralı:</strong> Eskiz içindeki tüm çizgiler ve yaylar tam kısıtlanmış (Fully Constrained - Yeşil) olmalıdır. Beyaz (serbest) veya Mor (aşırı kısıtlı) eskizler endüstriyel standartlarca yasaktır!</p>
</div>

<h2>4. Radyus (Fillet) ve Eğim (Draft) Sıralama Kuralları</h2>
<p>Döküm veya plastik enjeksiyon parçalarında operasyonların sırası modelin başarısını belirler:</p>
<ol>
  <li>Önce ana katı formlar (Pad, Shaft).</li>
  <li>Varsa kalıptan çıkma eğimleri (Draft Angles: 1°–3°).</li>
  <li>Büyük yapısal geçiş radyusları (R = 5–15 mm).</li>
  <li>En son montaj pahları ve küçük köşe birleşim radyusları (R = 0,5–2 mm). Bu küçük radyuslar ağacın en altına konulmalıdır; aksi takdirde sonraki operasyonların kenar seçmesini engeller.</li>
</ol>

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
        <td><strong>Positioned Sketch</strong></td>
        <td>Orijin noktası ve eksen yönleri (H-V) kullanıcı tarafından matematiksel olarak kilitlenen kararlı eskiz yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Geometrical Set</strong></td>
        <td>Tarihsel sıraya bağlı olmayan, tel kafes eğrilerini, referans noktalarını ve yüzeyleri gruplayan CATIA konteyneri.</td>
      </tr>
      <tr>
        <td><strong>Boolean Operasyonları</strong></td>
        <td>Ayrı ayrı modellenmiş katı gövdeleri Add, Remove veya Intersect komutlarıyla birleştiren sağlam modelleme disiplini.</td>
      </tr>
      <tr>
        <td><strong>Fully Constrained (Tam Kısıtlı)</strong></td>
        <td>Eskiz geometrisinin tüm serbestlik derecelerinin boyutsal ve geometrik toleranslarla sıfırlanıp yeşil renge dönmesi durumu.</td>
      </tr>
      <tr>
        <td><strong>Update Error</strong></td>
        <td>CAD modelinde bir parametre veya referans değiştirildiğinde sonraki unsurların geometrik bağını kaybederek ağacın çökmesi hatası.</td>
      </tr>
      <tr>
        <td><strong>Multi-Body Modeling</strong></td>
        <td>Tek bir parça (.CATPart) içinde birden fazla bağımsız katı gövde oluşturarak karmaşık unsurları izole yönetme tekniği.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Büyük ve revizyona açık tasarımlarda tüm unsurları tek PartBody'ye yığmak yerine Geometrical Set ve Multi-Body Boolean mimarisi kullanılmalıdır.</li>
    <li>Rastgele sliding sketch açmak yasaktır; yönü ve orijini kesin tanımlanmış "Positioned Sketch" kullanılmalı ve tüm çizgiler tam kısıtlı (yeşil) olmalıdır.</li>
    <li>Kalıp parçalarında eğimler (draft) ve büyük radyuslar önce, küçük kenar kırma radyusları ağacın en sonunda uygulanmalıdır.</li>
    <li>Referanslar form yüzeylerinden değil, sabit koordinat düzlemleri veya yayınlanmış (published) iskelet geometrilerinden alınmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (CAD Ağaç Mimarisi ve Çökme Nedeni):</strong> Bir makine mühendisi 400 parçalık bir montajda yer alan karmaşık bir alüminyum fikstür plakasını tek bir PartBody içinde modellemiştir. Plakanın kalınlığı 25 mm'den 30 mm'ye çıkarıldığında ve üst köşeye 5 mm'lik bir pah kırıldığında, ağaçtaki sonraki 14 adet cep (pocket) ve 32 adet delik "Update Error" vererek kırmızıya dönmüş ve parça kullanılamaz hale gelmiştir. Bu felaketin temel teknik sebebi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Bilgisayarın ekran kartı yetersizdir.
      <div class="test-cevap">YANLIŞ. Donanımla ilgisi yoktur, metodolojik bir modelleme hatasıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Mühendis eskizleri ve delikleri referans düzlemleri yerine katı modelin değişken yüzeylerine (sliding sketch ile) oturtmuş ve Boolean yerine doğrusal feature sıralaması yapmıştır. Kalınlık ve pah değiştiğinde yüzey kimlikleri (Face ID) değişmiş ve sonraki unsurlar referansını kaybederek çökmüştür. Çözüm: Geometrical Set altında bağımsız referans düzlemleri ve Positioned Sketch kullanılmalıdır.
      <div class="test-cevap">DOĞRU. Katı yüzeyine doğrudan eskiz oturtmak topoloji değiştiğinde ağacın çökmesine yol açar. Profesyonel tasarımcı daima referans düzlemleri ve Positioned Sketch kullanır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) CATIA lisansı sonlanmıştır.
      <div class="test-cevap">YANLIŞ. Lisansla ilgisi yoktur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Eskiz Disiplini):</strong> CATIA Sketcher ortamında çizim yaparken bazı çizgilerin yeşil, bazılarının beyaz, bazılarının ise mor renkte olduğu görülmektedir. Standartlara uygun kaliteli bir tasarım tesliminde eskizlerin renk durumu ne olmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çizgilerin tümü istisnasız yeşil (Fully Constrained) olmalıdır; beyaz (eksik kısıtlı) çizgiler parça çekildiğinde bozulur, mor çizgiler ise çelişkili ölçü içerir (Over-constrained).
      <div class="test-cevap">DOĞRU. Endüstriyel standartlarda beyaz veya mor çizgi barındıran eskizler onaylanmaz. Her geometri tam tanımlı olmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Beyaz olması daha iyidir çünkü esneklik sağlar.
      <div class="test-cevap">YANLIŞ. Beyaz çizgiler beklenmedik anda boyut değiştirerek montajı bozar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Mor çizgiler toleransın mükemmel olduğunu gösterir.
      <div class="test-cevap">YANLIŞ. Mor renk çelişkili aşırı kısıtlamadır (aşırı ölçülendirme hatası).</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Radyus Sıralaması):</strong> Döküm bir robot bilek gövdesi modellenirken R = 1 mm'lik yağ keçesi yuva radyusu ağacın ilk adımlarında yapılmış, ardından gövdenin ana taşıyıcı duvarlarına 15° eğim (draft) ve R = 12 mm yapısal geçiş radyusu verilmek istenmiştir. Ancak CATIA draft ve radyus komutlarında hata vermekte ve işlemi reddetmektedir. Doğru mühendislik sıralaması ne olmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Önce büyük yapısal açılar (draft) ve ana mukavemet radyusları (R = 12 mm) yapılmalı; en son aşamada küçük kenar radyusları (R = 1 mm) uygulanmalıdır.
      <div class="test-cevap">DOĞRU. Küçük radyuslar yüzeyleri çok sayıda mikro parçaya böler ve kalıptan çıkarma eğimi (draft) verilmesini imkansız kılar. Sıralama daima büyükten küçüğe doğru gitmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Küçük radyuslar silinip gövde keskin köşeli bırakılmalıdır.
      <div class="test-cevap">YANLIŞ. Dökümde keskin köşe çatlak sebebidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Parça ikiye bölünmelidir.
      <div class="test-cevap">YANLIŞ. Gereksiz bir karmaşıklıktır.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 11.2: MONTAJ YAPISI VE TOP-DOWN TASARIM
kitap.bolumEkle({
  id: "11-2",
  baslik: "Montaj Yapısı ve Top-Down Tasarım",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Yüzlerce veya binlerce bileşenden oluşan otomasyon hatlarında parçaların birbirine hatasız uymasını sağlayan <strong>Top-Down (Yukarıdan Aşağıya) İskelet (Skeleton) Metodolojisini</strong>, yayınlama (Publication) disiplinini, döngüsel referans (Cyclic Dependency / Update Loop) tuzaklarını engellemeyi ve büyük montaj performans optimizasyonunu öğretmektir.</p>
</div>

<h2>1. Bottom-Up vs. Top-Down Tasarım Felsefesi</h2>
<table class="standart-tablo">
  <thead>
    <tr>
      <th>Yaklaşım</th>
      <th>Metodoloji ve Akış</th>
      <th>Riskler ve Zayıflıklar</th>
      <th>Kullanım Alanı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Bottom-Up (Aşağıdan Yukarıya)</strong></td>
      <td>Parçalar tek tek bağımsız çizilir (.CATPart). Sonra montaj ortamında (.CATProduct) cıvata, pim ve yüzey temas kısıtlarıyla (Coincidence, Contact) birleştirilir.</td>
      <td><strong>Devasa Revizyon Riski:</strong> Şase boyu 200 mm uzatıldığında, üzerindeki 40 parçanın delikleri eşleşmez; her parçayı tek tek açıp elle düzeltmek gerekir. İnsan hatasına çok açıktır.</td>
      <td>Küçük alt montajlar, standart mengene veya katalog ürünleri.</td>
    </tr>
    <tr>
      <td><strong>Top-Down (Yukarıdan Aşağıya) - ALTIN STANDART</strong></td>
      <td>Montajın en tepesinde bir <strong>Master Skeleton (İskelet Parça)</strong> oluşturulur. İstasyon eksenleri, konveyör hatları ve ana bağlantı koordinatları burada tel kafes olarak tanımlanır. Tüm alt parçalar bu iskeletten referans alır.</td>
      <td><strong>Sıfır Hata ve Otomatik Adaptasyon:</strong> İskelette hat boyu 200 mm uzatıldığında, montajdaki tüm şaseler, miller, muhafaza sacları ve sensör braketleri saniyeler içinde <strong>otomatik olarak uzar ve delikler %100 eşleşir!</strong></td>
      <td>Tüm komple otomasyon makineleri, fikstürler, transfer hatları.</td>
    </tr>
  </tbody>
</table>

<h2>2. Master Skeleton (İskelet Parça) Mimarisi ve Yayınlama (Publication)</h2>
<p>Top-Down tasarımın omurgası <strong>"Skeleton Part"</strong>tır. Bir iskelet parçanın içinde hiçbir katı kütle (katı gövde) bulunmaz; sadece geometrik referanslar yer alır:</p>
<ul>
  <li>Konveyör merkez hattı (Centerline),</li>
  <li>İndeksleme tablası merkez ekseni ve istasyon açıları (45°, 90° vb.),</li>
  <li>Pnömatik silindir strok başlangıç ve bitiş limit düzlemleri,</li>
  <li>Şase ana montaj kulelerinin X, Y, Z referans düzlemleri.</li>
</ul>

<div class="muhendislik-kutu">
  <h4>Yayınlama (Publication) İlkesi: Neden Zorunludur?</h4>
  <p>Eğer bir alt parça, iskeletin içindeki yayınlanmamış rasgele bir çizgiye bağlanırsa; iskelette o çizgi silinip yeniden çizildiğinde alt parça referansını kaybeder ve montaj çöker.</p>
  <ul>
    <li><strong>Çözüm:</strong> İskeletteki tüm kritik referanslar <em>"Tools → Publication"</em> menüsünden yayınlanır (Örn: "PUB_CONVEYOR_CENTERLINE", "PUB_TOP_SURFACE").</li>
    <li>Alt parçalar sadece bu yayınlanmış isimlere <strong>"Paste Special → As Result with Link"</strong> ile kopyalanır. İskelette çizgi silinip yenisi çizilse dahi aynı isimle yayınlandığı sürece tüm alt montajlar kesintisiz güncellenir!</li>
  </ul>
</div>

<h2>3. Ölümcül Hata: Döngüsel Referans (Cyclic Dependency / Update Loop)</h2>
<p>Top-Down tasarımda en tehlikeli tuzak güncelleme döngüsüdür (Update Loop):</p>

<div class="uyari-kutu">
  <h4>Döngüsel Kilitlenme Nasıl Oluşur?</h4>
  <p><em>Parça A'nın boyu Parça B'den referans alır → Tasarımcı dikkatsizlikle Parça B'nin bir deliğini Parça A'nın kenarına bağlar!</em></p>
  <ul>
    <li>Bu durumda Parça A güncellenmek için B'yi bekler, Parça B ise A'yı bekler!</li>
    <li>CATIA <strong>"Cycle detected during update"</strong> uyarısı verir ve montaj kilitlenir; hiçbir parça güncellenemez hale gelir.</li>
    <li><strong>Demir Kural:</strong> Veri akışı daima <strong>TEK YÖNLÜ</strong> olmalıdır: <em>Skeleton → Alt Parça A ve Alt Parça B</em>. İki alt parça asla birbirinden doğrudan bağ almamalıdır!</li>
  </ul>
</div>

<h2>4. Montaj Kısıtları (Assembly Constraints) ve DMU Performansı</h2>
<p>Büyük bir montajda 10.000 adet yüzey kontağı (Contact) ve çakışma (Coincidence) kısıtı tanımlanırsa montajın açılması 20 dakika sürer ve bilgisayar kilitlenir.</p>
<ul>
  <li><strong>Skeleton Tabanlı Sabitleme (Fix in Space):</strong> Top-Down tasarlanmış parçalar zaten iskeletin küresel koordinatlarında doğar. Bu parçaları montaja çağırıp kısıt kasmak yerine doğrudan <em>"Fix in Space"</em> ile sabitlemek montaj güncelleme süresini <strong>%80 oranında kısaltır</strong>.</li>
  <li><strong>Esnek Alt Montajlar (Flexible Sub-Assembly):</strong> Bir pnömatik silindirin veya robot kolunun montaj içinde hareket edebilmesi için alt montaj sağ tıklanıp <em>"Flexible/Rigid Sub-Assembly"</em> seçilmelidir; aksi halde alt montaj kaskatı davranır ve mekanizma hareket ettirilemez.</li>
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
        <td><strong>Top-Down Design</strong></td>
        <td>Tüm sistemin tepedeki bir iskelet (skeleton) üzerinden parametrik olarak yönetildiği, delik ve boyların otomatik eşleştiği ileri tasarım metodu.</td>
      </tr>
      <tr>
        <td><strong>Skeleton Part (İskelet Parça)</strong></td>
        <td>Montajın uzaysal sınırlarını, eksenlerini ve çalışma koordinatlarını tel kafes olarak barındıran katısız referans parça.</td>
      </tr>
      <tr>
        <td><strong>Publication (Yayınlama)</strong></td>
        <td>Geometrileri tekil bir genel arayüz ismiyle dışarıya açarak referans kopmalarını engelleyen veri yayınlama disiplini.</td>
      </tr>
      <tr>
        <td><strong>Cyclic Dependency (Döngüsel Referans)</strong></td>
        <td>İki parçanın karşılıklı birbirinden referans alması sonucu oluşan ve CAD ağacını kilitleyen çözümsüz döngü hatası.</td>
      </tr>
      <tr>
        <td><strong>As Result with Link</strong></td>
        <td>Bir geometrinin orijinal kaynağına parametrik olarak bağlı kalmasını sağlayan dış referans kopyalama yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Flexible Sub-Assembly</strong></td>
        <td>Alt montajın iç kısıtlarını serbest bırakarak ana montajda hareket etmesine imkan tanıyan kinematik montaj modu.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Otomasyon makinelerinde revizyon facialarını önlemek için mutlaka Skeleton tabanlı Top-Down mimarisi uygulanmalıdır.</li>
    <li>İskelet referansları "Publication" ile yayınlanmalı ve alt parçalara "As Result with Link" ile aktarılmalıdır.</li>
    <li>Veri akışı daima yukarıdan aşağıya tek yönlü olmalı; parçaların birbirinden karşılıklı referans alarak döngüsel kilitlenme (cycle loop) yaratması engellenmelidir.</li>
    <li>Büyük montajlarda sistem performansını korumak için gereksiz temas kısıtları yerine Skeleton tabanlı Fix kısıtları tercih edilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Revizyon Yönetimi ve Metodoloji):</strong> 8 istasyonlu bir montaj hücresinde müşteri son anda ürün çapını 40 mm'den 55 mm'ye çıkardığını bildirmiştir. Bu revizyon döner tablanın çapını, 8 istasyondaki fikstür yuvalarını ve robot alma pozisyonlarını değiştirmektedir. Bottom-Up tasarlanmış bir makinede bu değişiklik 4 gün sürerken, Top-Down Skeleton ile tasarlanmış makinede neden sadece 10 dakikada tamamlanır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Top-Down tasarımda parçalar daha az detaylı çizildiği için.
      <div class="test-cevap">YANLIŞ. Detay seviyesi aynıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Top-Down modelde tüm tabla, fikstür ve robot eksenleri tek bir "Master Skeleton" içindeki ana ürün çapı parametresine bağlıdır. Mühendis sadece iskeletteki parametreyi 55 mm yaptığında, montajdaki tüm alt parçalar (fikstür plakaları, dayamalar, cıvata desenleri) tek bir "Update" komutuyla kendiliğinden genişler ve delikler %100 kusursuz hizalanır.
      <div class="test-cevap">DOĞRU. Top-Down mimarisinin muazzam gücü merkezi parametre kontrolünden kaynaklanır. Tek bir sayı değiştiğinde tüm makine kendini revize eder.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) CATIA yapay zeka ile parçaları kendisi baştan çizer.
      <div class="test-cevap">YANLIŞ. Yapay zeka değil, mühendisin kurduğu iskelet parametrik matematiksel ilişkileridir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Hata Teşhisi - Update Loop):</strong> Bir tasarımcı montaj üzerinde çalışırken parça üzerinde yaptığı bir değişikliği onaylamak için "Update" butonuna bastığında CATIA işlem yapmayı reddetmekte ve ekranda "Cycle detected during update: Part1 -> Part2 -> Part1" hata penceresi çıkmaktadır. Bu kilitlenmenin sebebi ve çözümü nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Bilgisayara virüs bulaşmıştır, format atılmalıdır.
      <div class="test-cevap">YANLIŞ. Klasik bir parametrik döngü hatasıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Döngüsel referans (Cyclic Dependency) oluşmuştur; Parça 1'in geometrisi Parça 2'ye, Parça 2'nin geometrisi ise tekrar Parça 1'e bağlanmıştır. Yazılım hangi parçayı önce hesaplayacağını bilemediğinden kilitlenmiştir. Çözüm: Parçalar arasındaki karşılıklı dış referanslar koparılmalı; her iki parça da ortak bir Master Skeleton'dan tek yönlü beslenecek şekilde yeniden yapılandırılmalıdır.
      <div class="test-cevap">DOĞRU. Parçaların birbirinden çapraz referans alması döngüsel kilitlenmeye sebep olur. Referans akışı daima iskeletten parçaya doğru tek yönlü olmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Update butonuna basmadan önce ekran kartı sıfırlanmalıdır.
      <div class="test-cevap">YANLIŞ. Donanımla hiçbir ilgisi yoktur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Kinematik Montaj Hilesi):</strong> Ana montaj içine çağrılan bir pnömatik silindir alt montajının mili, ana montaj ortamında fareyle çekildiğinde hareket etmemekte, gövdeyle birlikte kaskatı bir blok gibi davranmaktadır. Alt montajın içinde piston kısıtları serbest olmasına rağmen ana montajda hareket edebilmesi için hangi ayar açılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Alt montaja sağ tıklanıp "Flexible Sub-Assembly" (Esnek Alt Montaj) modu aktif edilmelidir.
      <div class="test-cevap">DOĞRU. Standart olarak tüm alt montajlar "Rigid (Rijit)" gelir. Esnek mod açıldığında alt montajın iç serbestlikleri ana montaja aktarılır ve piston hareket edebilir hale gelir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Silindir cıvataları silinmelidir.
      <div class="test-cevap">YANLIŞ. Cıvataları silmek parçayı boşlukta bırakır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Silindir malzemesi alüminyumdan kauçuğa çevrilmelidir.
      <div class="test-cevap">YANLIŞ. Malzeme elastisitesi kinematik montaj modunu etkilemez.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 11.3: PARAMETRİK TASARIM VE KNOWLEDGEWARE
kitap.bolumEkle({
  id: "11-3",
  baslik: "Parametrik Tasarım ve Knowledgeware",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Mühendislik kurallarını, formüllerini ve şirket imalat standartlarını doğrudan 3D CAD modelinin içine gömen CATIA Knowledgeware altyapısını; Parametreler ve Formül ilişkilerini, Excel entegrasyonlu Tasarım Tablolarını (Design Tables), kural ve denetim (Rules & Checks) mekanizmalarını ve PowerCopy / UDF şablonları ile tasarım hızını 10 kat artırma yöntemlerini öğretmektir.</p>
</div>

<h2>1. Parametreler ve Formül İlişkileri (Formulas & Relations)</h2>
<p>Parametrik tasarım; parçaların statik sayılarla değil, birbirine matematiksel formüllerle bağlı değişkenlerle çizilmesidir.</p>

<div class="muhendislik-kutu">
  <h4>Temel Formül Örnekleri ve Fonksiyonlar</h4>
  <ul>
    <li><strong>Geometrik Bağıntı:</strong> <em>Genislik = Uzunluk / 2</em></li>
    <li><strong>Koşullu Cıvata Sayısı Hesabı:</strong> Konveyör şasesi uzadıkça cıvata deliklerinin otomatik çoğalması:
      <div class="formul-kutu">
        Cıvata_Adedi = ceil( Sase_Uzunlugu / 150mm ) + 1
      </div>
    </li>
    <li><strong>Mühendislik Gerilme Formülü:</strong> Silindir itme kuvvetine göre rot çapının model içinde otomatik hesaplanması:
      <div class="formul-kutu">
        d_mil = sqrt( (4 · F_itme) / (π · Gerilme_Emniyet) )
      </div>
    </li>
  </ul>
</div>

<h2>2. Tasarım Tabloları (Design Tables - Excel Entegrasyonu)</h2>
<p>Bir makinede aynı geometrik formun 20 farklı boyutu kullanılıyorsa (Örn: Farklı stroklarda pnömatik silindirler, farklı çaplarda flanşlar, konveyör ayakları), 20 ayrı CAD dosyası çizmek büyük bir israftır.</p>

<div class="muhendislik-kutu">
  <h4>Design Table Çalışma Prensibi:</h4>
  <ol>
    <li>Modelin tüm kritik ölçüleri parametre olarak tanımlanır (<em>Boy, Cap, Et_Kalinligi, Delik_Sayisi</em>).</li>
    <li><em>"Design Table"</em> ikonu ile bu parametreler harici bir Microsoft Excel (.xlsx) tablosuna bağlanır.</li>
    <li>Excel'in satırlarına varyasyonlar girilir (Örn: Model_A, Model_B, Model_C...).</li>
    <li><strong>Sonuç:</strong> Tasarımcı montajda tek bir açılır kutudan (dropdown menu) "Model_B"yi seçtiğinde tüm parça saniyeler içinde o satırdaki ölçülere bürünür!</li>
  </ol>
</div>

<h2>3. Knowledgeware Kuralları (Rules) ve Denetimleri (Checks)</h2>
<p>CATIA Knowledgeware Advisor modülü, şirketin kıdemli başmühendisinin tecrübesini ve imalat kısıtlarını yazılımsal bir "bekçi köpeği" gibi modelin içine kilitler.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Knowledgeware Aracı</th>
      <th>Mekanizması</th>
      <th>Kod / Senaryo Örneği</th>
      <th>Endüstriyel Faydası</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Check (Denetim / Uyarı)</strong></td>
      <td>Bir mühendislik kuralı ihlal edildiğinde ekranda kırmızı ışık yakar ve uyarı verir.</td>
      <td><code>Delik_Kenar_Mesafesi >= 1.5 * Cıvata_Capi</code><br>Eğer genç mühendis deliği sacın kenarına çok yakın çizerse sistem: <em>"UYARI: Kenar yırtılma riski! Mesafe en az 1,5d olmalıdır!"</em> mesajı basar.</td>
      <td>Tasarım hatalarının üretime gitmeden ekranda %100 yakalanmasını sağlar.</td>
    </tr>
    <tr>
      <td><strong>Rule (Kural / Karar Ağacı)</strong></td>
      <td>Değişkenlere göre modelin geometrisini veya parça seçimini dinamik olarak değiştirir.</td>
      <td><code>if Tork > 200N_m { Mil_Tipi = "Konik_Bikon" } else { Mil_Tipi = "Standart_Kama" }</code></td>
      <td>Tasarım standartlarını otomatikleştirir, insan inisiyatifinden kaynaklanan eksiklikleri sıfırlar.</td>
    </tr>
  </tbody>
</table>

<h2>4. PowerCopy ve User Defined Feature (UDF) ile Şablon Tasarım</h2>
<p>Bir otomasyon şirketinde her gün onlarca kez çizilen standart detaylar vardır: <em>Sensör montaj yuvası, O-ring kanalı, DIN 6885 kama kanalı, rulman segman kanalı</em>.</p>
<ul>
  <li>Bu unsurları her seferinde baştan çizmek yerine tüm eskizleri, parametreleri ve Boolean gövdeleriyle birlikte bir <strong>"PowerCopy / UDF"</strong> olarak kütüphaneye kaydedilir.</li>
  <li>Yeni bir parçaya kama kanalı açılacağı zaman kütüphaneden şablon çağrılır; kullanıcı sadece "Mil Yüzeyi" ve "Eksen" tıklar. Kanal, standart DIN toleranslarıyla saniyeler içinde açılır!</li>
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
        <td><strong>Knowledgeware</strong></td>
        <td>Mühendislik formüllerini, kurallarını ve şirket standartlarını CAD modelinin içine gömen CATIA uzmanlık modülü.</td>
      </tr>
      <tr>
        <td><strong>Design Table</strong></td>
        <td>Excel tablosundaki verilerle bir CAD parçasının onlarca farklı katalog varyasyonunu yöneten parametrik tablo.</td>
      </tr>
      <tr>
        <td><strong>Check (Denetim Kuralı)</strong></td>
        <td>İmalat sınırları aşıldığında (örn: sac yırtılma mesafesi) ekranda görsel uyarı ve kırmızı bayrak üreten koruma kodu.</td>
      </tr>
      <tr>
        <td><strong>Rule (Otomasyon Kuralı)</strong></td>
        <td>Girdi parametrelerine göre modelin özelliklerini ve geometrik seçimlerini if-else mantığıyla güncelleyen kod bloğu.</td>
      </tr>
      <tr>
        <td><strong>PowerCopy</strong></td>
        <td>Parametrik eskiz ve operasyon gruplarını başka parçalara giydirilebilir hazır akıllı şablon haline getirme aracı.</td>
      </tr>
      <tr>
        <td><strong>UDF (User Defined Feature)</strong></td>
        <td>Kullanıcı tanımlı özel geometrik unsurları tek bir monolitik CAD komutu gibi paketleyen ileri şablon yapısı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Parametrik tasarımda ölçüler bağımsız sayılar yerine matematiksel formüller ve mühendislik mantığıyla birbirine bağlanmalıdır.</li>
    <li>Çok varyasyonlu katalog parçaları (flanşlar, miller, profiller) Excel bağlantılı Design Table ile yönetilmelidir.</li>
    <li>Şirket imalat kuralları Knowledgeware Checks ile denetlenmeli; tasarımcı hatalı ölçü girdiğinde sistem anında uyarı vermelidir.</li>
    <li>Sık tekrarlanan O-ring kanalı veya sensör yuvası gibi detaylar PowerCopy/UDF şablonlarıyla standartlaştırılmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Otomasyon Formülü ve Parametre):</strong> Bir konveyör şasesinde yan kılavuz sacını tutan M6 montaj cıvatalarının aralığı en fazla 120 mm olmalıdır. Şase boyu (L) 1000 mm ile 3000 mm arasında değişken bir parametredir. Şase boyu ne seçilirse seçilsin eşit aralıklı cıvata deliği desenini (Rectangular Pattern) kusursuz oluşturacak CATIA formülü hangisidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Delik_Sayisi = ceil( L / 120mm ) + 1 ; Delik_Adimi = L / (Delik_Sayisi − 1)
      <div class="test-cevap">DOĞRU. ceil() fonksiyonu yukarı yuvarlar; böylece adım daima 120 mm'den küçük veya eşit kalır. Adım formülü ise deliklerin baş ve son noktalara tam eşit aralıkla dağılmasını garanti eder.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Delik_Sayisi = 10 (Sabit)
      <div class="test-cevap">YANLIŞ. Sabit sayı parametrik değildir; şase 3 metre olduğunda aralık 300 mm'ye çıkar ve sac sarkar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Delik_Sayisi = L * 120
      <div class="test-cevap">YANLIŞ. Boyut olarak anlamsızdır ve binlerce delik delmeye çalışır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Hata Önleme - Knowledgeware Check):</strong> Bir makine imalat şirketinde stajyer mühendisler hidrolik blok üzerindeki cıvata deliklerini blok kenarına çok yakın çizmekte ve döküm esnasında kenar patlamaları yaşanmaktadır. Başmühendisin bu hatayı tasarımcının ekranında anında kırmızı bayrakla durdurması için Knowledgeware Advisor'da yazması gereken "Check" mantığı nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Check ifadesi: <code>Kenar_Mesafesi >= 1.8 * Delik_Capi</code> ; İhlal anında: "HATA: Kenar et kalınlığı döküm sınırının altında! Blok patlayabilir." uyarısı verdirmek.
      <div class="test-cevap">DOĞRU. Knowledgeware Check mekanizması tasarım kurallarını otomatik denetler. Kural ihlal edildiğinde ağaçta kırmızı ışık yanar ve açıklayıcı uyarı penceresi çıkar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tüm tasarımcılara her sabah kenar mesafesini hatırlatan e-posta atmak.
      <div class="test-cevap">YANLIŞ. İnsan hafızasına güvenmek mühendislik değildir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Delikleri tamamen kaldırmak.
      <div class="test-cevap">YANLIŞ. Parçanın montajını imkansız kılar.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Verimlilik ve Şablonlar):</strong> Bir otomasyon tasarım ofisinde her gün farklı alüminyum parçalara DIN 6885 standart paralel kama kanalları açılmaktadır. Tasarımcılar her seferinde kumpas kataloğuna bakmakta, derinlik ve genişlik ölçülerini elle girmekte ve ayda onlarca saat kaybetmektedir. Bu süreci 5 saniyeye indiren en profesyonel CAD aracı nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Şirket ortak kütüphanesine standart mil çaplarına göre parametrik bir "PowerCopy / UDF" kama kanalı şablonu hazırlamak.
      <div class="test-cevap">DOĞRU. PowerCopy şablonu çağrıldığında sadece mil çapı girilir; kanal genişliği, derinliği ve radyusları otomatik olarak oluşturulur. Tasarım süresi dakikalardan saniyelere iner.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kama kanalı çizmekten vazgeçip teknik resme elle "Buraya kama açılacak" notu yazmak.
      <div class="test-cevap">YANLIŞ. 3D modelde kama kanalı olmazsa kamalı montaj ve ağırlık hesapları yanlış çıkar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Her mil çapı için ayrı bir CATIA lisansı satın almak.
      <div class="test-cevap">YANLIŞ. Lisansla hiçbir ilgisi yoktur.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 11.4: STANDART PARÇA KÜTÜPHANELERİ
kitap.bolumEkle({
  id: "11-4",
  baslik: "Standart Parça Kütüphaneleri",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Endüstriyel otomasyon makinelerinde yer alan binlerce cıvata, somun, rulman, lineer kılavuz ve pnömatik silindirin şirket içi merkezi standart kütüphanelerle (Catalog Editor) yönetilmesini, kontrolsüz STEP/IGES ithalatının yarattığı veri şişkinliğini önlemeyi ve model sadeleştirme (Defeaturing / Level of Detail) teknikleriyle montaj açılış hızlarını optimize etmeyi öğretmektir.</p>
</div>

<h2>1. Kontrolsüz CAD İthalatı Felaketi: STEP Dosyası Tuzağı</h2>
<p>Amatör tasarımcılar internetteki üretici sitelerinden (Festo, SMC, Misumi, SKF) indirdikleri STEP modellerini doğrudan ana montajın içine atarlar. Bir süre sonra şirkette şu felaketler yaşanır:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Kötü Uygulama (Kaotik STEP İthalatı)</th>
      <th>Mühendislik ve Şirket Sonuçları</th>
      <th>Profesyonel Standart Çözüm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Her mühendis aynı M8x30 cıvatayı internetten indirip kendi klasörüne kaydeder.</td>
      <td>BOM (Malzeme Listesi) çıktığında aynı cıvata 15 farklı parça numarası ve isimle listelenir; satın alma toplu sipariş veremez ve maliyet patlar!</td>
      <td>Merkezi Şirket Standart Parça Kataloğu (CATIA Catalog Editor) kurulmalı; montaja parça sadece bu katalogdan çağrılmalıdır.</td>
    </tr>
    <tr>
      <td>İndirilen STEP dosyasında cıvatanın <strong>tüm vida diş helisleri</strong> 3D taranmış olarak gelir.</td>
      <td>Bir montajda 1000 adet cıvata varsa, ekran kartı <strong>milyonlarca gereksiz helis yüzeyini</strong> render etmek zorunda kalır; montaj açılışı 30 dakikaya çıkar, bilgisayar çöker!</td>
      <td><strong>Model Sadeleştirme (Defeaturing):</strong> Cıvata diş helisleri silinmeli, sadece silindirik gövde bırakılmalıdır.</td>
    </tr>
    <tr>
      <td>İthal parçanın yoğunluk (density) verisi sıfır veya boştur.</td>
      <td>Robotik atalet ve ağırlık merkezi hesabı yapıldığında 500 kg'lık makine 12 kg çıkar; tüm motor ve şase hesapları yanlış olur!</td>
      <td>Katalog parçalarına doğru malzeme (Çelik, Alüminyum, POM) ve kütle özellikleri tanımlanmalıdır.</td>
    </tr>
  </tbody>
</table>

<h2>2. Model Sadeleştirme (Defeaturing / Level of Detail - LoD)</h2>
<p>Büyük montajların akıcı çalışabilmesi için satın alma parçalarının içi boşaltılmalı ve gereksiz detaylar budanmalıdır:</p>

<div class="muhendislik-kutu">
  <h4>Silinmesi Zorunlu Detaylar (Defeaturing Listesi):</h4>
  <ul>
    <li><strong>Vida Diş Helisleri:</strong> Cıvata ve vidalı millerdeki tüm diş sarmalları silinmeli, düz silindire çevrilmelidir (Diş boyutu teknik resimde sembolik gösterilir).</li>
    <li><strong>İç Mekanizma Parçaları:</strong> Satın alınan bir redüktörün veya elektrik motorunun içindeki dişliler, rotor sargıları, mıknatıslar ve bilyalar silinmeli; sadece dış gövde ve mil bırakılmalıdır.</li>
    <li><strong>Marka Kabartma Logoları ve Minik Yazılar:</strong> Döküm gövde üzerindeki kabartma yazılar binlerce küçük üçgen yüzey üretir; tamamen temizlenmelidir.</li>
    <li><strong>R = 0,2 mm Pah ve Radyuslar:</strong> Montaj temasını etkilemeyen mikroskobik kenar kırmaları yok edilmelidir.</li>
    <li><strong>Dosya Boyutu Kazancı:</strong> Doğru sadeleştirilmiş bir 6 eksenli robot kolu STEP dosyası <strong>120 MB'tan 2,5 MB'a</strong> iner; grafik performansı 50 kat artar!</li>
  </ul>
</div>

<h2>3. CATIA Catalog Editor Mimarisi</h2>
<p>Şirket sunucusunda merkezi bir <em>"Standard_Parts.catalog"</em> dosyası oluşturulur:</p>
<ol>
  <li><strong>Bağlantı Elemanları Bölümü:</strong> ISO 4762 (İmbus Cıvata), ISO 4017 (Altıköşe Civata), DIN 7991 (Havşa Başlı), DIN 985 (Fiberli Somun), DIN 125 (Düz Pul), DIN 6325 (Taşlanmış Pim).</li>
  <li><strong>Pnömatik Bölümü:</strong> ISO 15552 standart silindirler (Design Table ile tüm stroklar tek modelde).</li>
  <li><strong>Lineer Hareket Bölümü:</strong> Raylar ve arabalar (Hiwin, THK standart serileri).</li>
  <li><strong>Profil ve Şase Bölümü:</strong> 40x40, 45x45, 90x90 alüminyum sigma profiller.</li>
</ol>
<p>Tasarımcı montaj yaparken katalog ikonuna tıklar, listeden "M10x45 İmbus" seçer ve tıklar. Parça numarası, ERP stok kodu, malzemesi ve ağırlığı anında ve hatasız olarak montaja yerleşir.</p>

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
        <td><strong>Defeaturing (Sadeleştirme)</strong></td>
        <td>CAD modelindeki vida dişi, logo ve iç detay gibi montajı ilgilendirmeyen unsurların silinerek dosyanın hafifletilmesi.</td>
      </tr>
      <tr>
        <td><strong>Catalog Editor</strong></td>
        <td>Şirketin tüm standart satın alma ve bağlantı elemanlarını hiyerarşik sınıflandıran merkezi CATIA kütüphane aracı.</td>
      </tr>
      <tr>
        <td><strong>Level of Detail (LoD)</strong></td>
        <td>Bir montajın grafik performansını artırmak için parçaların farklı basitleştirilmiş çözünürlük seviyelerinde görüntülenmesi.</td>
      </tr>
      <tr>
        <td><strong>BOM Disiplini</strong></td>
        <td>Standart kütüphane kullanımı sayesinde malzeme listesinde mükerrer ve hatalı parça kodlarının oluşmasının engellenmesi.</td>
      </tr>
      <tr>
        <td><strong>STEP (ISO 10303-21)</strong></td>
        <td>Farklı CAD yazılımları arasında 3D katı modellerin transferinde kullanılan nötr dosya formatı.</td>
      </tr>
      <tr>
        <td><strong>Kütle Özelliği (Inertia Properties)</strong></td>
        <td>Katalog parçalarına doğru malzeme yoğunluğu tanımlanarak montaj ağırlık merkezinin hatasız hesaplanması.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>İnternetten kontrolsüz STEP indirilip montaja atılması CAD modellerini şişirir ve BOM listesini kaosa sürükler.</li>
    <li>Tüm bağlantı elemanları ve satın alma parçaları merkezi Şirket Standart Kataloğundan (Catalog Editor) çağrılmalıdır.</li>
    <li>Tedarikçi modellerindeki vida diş helisleri, logolar ve iç parçalar Defeaturing yöntemiyle mutlaka silinmelidir.</li>
    <li>Tüm standart parçaların malzeme yoğunluğu ve ERP stok kodları kütüphanede önceden eksiksiz tanımlanmış olmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Büyük Montaj Performansı ve Kök Neden):</strong> 1200 parçadan oluşan bir otomatik montaj hattı CAD modeli açılırken bilgisayar 25 dakika boyunca donmakta, montaj açıldıktan sonra fareyi hareket ettirmek dahi imkansız hale gelmektedir (0,5 FPS). İncelemede montajda 600 adet M8 imbus cıvata olduğu ve bu cıvataların internetten indirilmiş gerçek vida diş helisli modeller olduğu görülmüştür. Bu performans krizini dakikalar içinde çözmek için ne yapılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Şirketteki tüm bilgisayarlara 10.000 dolarlık yeni iş istasyonları satın almak.
      <div class="test-cevap">YANLIŞ. Kötü modellenmiş milyonlarca üçgen yüzeyi hiçbir ekran kartı akıcı oynatamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Cıvatalar kütüphanedeki sadeleştirilmiş (diş sarmalları silinmiş, pürüzsüz silindirik gövdeli) standart cıvata modeli ile değiştirilmelidir (Defeaturing). Sadece bu işlem bile yüzey sayısını %95 azaltarak montajın 10 saniyede açılmasını ve 60 FPS akıcı dönmesini sağlar.
      <div class="test-cevap">DOĞRU. Vida diş helisleri CAD grafik motorlarının bir numaralı katilidir. Standart parçalar daima sadeleştirilmiş silindirik formda kullanılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cıvataların tümü montajdan silinmeli ve hiç takılmamalıdır.
      <div class="test-cevap">YANLIŞ. Cıvatalar silinirse montaj eksik kalır ve BOM listesi çıkmaz.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (BOM ve Satın Alma Hatası):</strong> Bir makine montajı bittiğinde ERP sistemine aktarılan Malzeme Listesinde (BOM) 35 farklı çeşit "M6x20 Civata" olduğu, bazılarının "M6X20", bazılarının "DIN912-M6", bazılarının "bolt_m6" olarak yazıldığı görülmüştür. Satın alma departmanı tek tek aramak zorunda kalmış ve haftalarca gecikme yaşanmıştır. Bu kurumsal hatanın kesin çözümü nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Tasarımcıların internetten veya kendi bilgisayarlarından montaja parça atması yasaklanmalı; tüm tasarımcıların parçaları yalnızca ERP kodları önceden kilitlenmiş merkezi "CATIA Standard Catalog" üzerinden çağırması zorunlu kılınmalıdır.
      <div class="test-cevap">DOĞRU. Merkezi kütüphane disiplini, her tasarımcının aynı parçayı aynı kod ve isimle çağırmasını garanti ederek BOM karmaşasını kökten yok eder.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Satın alma personeli sayısı 3 katına çıkarılmalıdır.
      <div class="test-cevap">YANLIŞ. Mühendislik hatasını personel artırarak çözmeye çalışmak israftır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cıvatalar kaynakla tutturulmalıdır.
      <div class="test-cevap">YANLIŞ. Konuyla ilgisizdir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Malzeme Özelliği ve Ağırlık Merkezi):</strong> Bir robot montaj hücresinde EOAT'ın ağırlık merkezi ve kütlesi hesaplanmış ve 4,2 kg bulunmuştur. Ancak imal edilen gerçek EOAT tartıldığında tam 11,8 kg gelmiştir! Robot aşırı yük alarmı vermiştir. Yapılan kontrolde CAD modelindeki pnömatik valf adasının ve gripper gövdesinin internetten indirilen STEP dosyasında malzeme yoğunluğu girilmediği (kütlesi 0 kg sayıldığı) anlaşılmıştır. Bu hatayı önlemek için standart kütüphaneye parça eklenirken ne yapılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) İthal edilen tüm satın alma parçalarına üretici kataloğundaki gerçek ağırlık manuel olarak atanmalı veya parçaya doğru malzeme yoğunluğu (Density) tanımlanarak kütle doğrulaması yapılmalıdır.
      <div class="test-cevap">DOĞRU. Boş STEP dosyaları kütlesizdir. Gerçek ağırlık özellikleri girilmeden yapılan ağırlık ve atalet analizleri tamamen hayal ürünüdür.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Robotun tork sınırları devre dışı bırakılmalıdır.
      <div class="test-cevap">YANLIŞ. Robot redüktörlerini parçalar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Ağırlık hesaplaması gereksizdir.
      <div class="test-cevap">YANLIŞ. Robotik ve dinamik tasarımda ağırlık merkezi (CoG) en kritik veridir.</div>
    </div>
  </div>
</div>
`
});
