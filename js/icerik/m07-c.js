/* ========================================================================
   MODÜL 7: OTOMASYON MEKANİZMALARI (m07-c.js)
   Bölüm 7.7: İndeksleme Sistemleri
   Bölüm 7.8: Parça Besleme Sistemleri
   Bölüm 7.9: Pick & Place ve Kartezyen Sistemler
   Bölüm 7.10: Çevrim Süresi Analizi (Cycle Time ve OEE Optimizasyonu)
   ======================================================================== */

// BÖLÜM 7.7: İNDEKSLEME SİSTEMLERİ
kitap.bolumEkle({
  id: "7-7",
  baslik: "İndeksleme Sistemleri",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Döner tablalı montaj, kontrol ve işleme makinelerinde iş parçalarının istasyonlar arasında yüksek hız, mikron mertebesinde tekrarlanabilirlik ve sıfır boşlukla transfer edilmesini sağlayan indeksleme mekanizmalarının; Cenevre (Maltezer) mekanizması kısıtlarını, globoidal kam indeksör dinamiğini, döner tabla kütlesel atalet momenti (J) hesabını ve dinamik tepe tork boyutlandırmasını eksiksiz öğretmektir.</p>
</div>

<h2>1. Döner Tabla İndeksleme Mekanizmaları Karşılaştırması</h2>
<p>Döner tablalı otomasyon hücrelerinde parçalar dairesel bir hat üzerinde dizilmiş istasyonları (parça besleme, vidalama, presleme, test, boşaltma) sırasıyla dolaşır. Tablanın her bir adımı dönüp durmasına <strong>indeksleme</strong> denir.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>İndeksleme Mekanizması</th>
      <th>Mekanik Çalışma İlkesi</th>
      <th>Hassasiyet ve Boşluk</th>
      <th>Duruş Anı Kilitleme (Dwell)</th>
      <th>Endüstriyel Uygulama Alanı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Cenevre Mekanizması (Geneva / Maltezer)</strong></td>
      <td>Sürekli dönen tahrik piminin yıldız çarkın radyal kanallarına girip çıkmasıyla kesikli dönüş üretir.</td>
      <td>Düşük (±0,1 – 0,2 mm). Kanallarda aşınma ve çalışma boşluğu mevcuttur.</td>
      <td>Kilitleme hilali mevcuttur ancak rijitliği düşüktür; ağır presleme kuvvetlerini karşılayamaz.</td>
      <td>Düşük hızlı, düşük bütçeli makineler. Yüksek hızlarda kinematik darbe üretir; modern otomasyonda terk edilmektedir.</td>
    </tr>
    <tr>
      <td><strong>Globoidal Kam İndeksörü (Roller Gear Indexer)</strong></td>
      <td>Ön gerilmeli iğneli rulman makaralarından oluşan taret, globoidal (kum saati formlu) kam kanalıyla sürülür.</td>
      <td><strong>Olağanüstü (±15 – 30 yay saniyesi / arcsec).</strong> Sıfır boşluk (zero backlash).</td>
      <td><strong>Kusursuz Mekanik Kilit:</strong> Kamın düz hatlı bekleme (dwell) bölgesinde tabla harici bir frene gerek kalmaksızın tonlarca kuvvete karşı kilitlidir.</td>
      <td>Yüksek hızlı montaj makineleri, ambalaj, presleme hatları, otomotiv montaj hücreleri (Weiss, Ferguson standardı).</td>
    </tr>
    <tr>
      <td><strong>Direkt Sürüşlü Tork Motoru (Direct Drive Rotary - DDR)</strong></td>
      <td>Tablayı mekanik redüktör olmaksızın doğrudan süren yüksek kutup sayılı, içi boş şaftlı fırçasız senkron tork motoru.</td>
      <td><strong>Mikron altı (±1 – 5 arcsec).</strong> Yüksek çözünürlüklü optik enkoder.</td>
      <td>Mekanik duruş kilidi yoktur; pozisyonda tutma elektrik motoru akımıyla sağlanır. Ağır pres kuvvetlerinde harici hidrolik/pnömatik fren şarttır.</td>
      <td>İstasyon sayısı sürekli değişen esnek üretim hatları, yarı iletken, optik ve ölçüm sistemleri.</td>
    </tr>
  </tbody>
</table>

<h2>2. Döner Tabla Kütlesel Atalet Momenti (J) Analitik Hesabı</h2>
<p>Döner tablayı tahrik eden kam indeksörü veya tork motorunu seçerken <strong>en kritik fiziksel parametre toplam kütlesel atalet momentidir (J<sub>toplam</sub>)</strong>. Tork ihtiyacının %90'ı bu ataleti ivmelendirmekten kaynaklanır.</p>

<div class="muhendislik-kutu">
  <h4>Toplam Atalet Momenti Formülasyonu</h4>
  <p>Döner tablanın ana dönme eksenine göre toplam kütlesel atalet momenti, tablanın kendi diski ve çevreye dizilmiş <em>N</em> adet fikstür ile iş parçasının ataletlerinin toplamıdır:</p>
  <div class="formul-kutu">
    J<sub>toplam</sub> = J<sub>disk</sub> + N · J<sub>istasyon</sub> [kg·m²]
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>J<sub>disk</sub> (Dairesel Taban Plakası Ataleti):</strong> Diskin kütlesi <em>m<sub>disk</sub></em> [kg], yarıçapı <em>R<sub>disk</sub></em> [m] olmak üzere:
      <div class="formul-kutu">
        J<sub>disk</sub> = (1/2) · m<sub>disk</sub> · R<sub>disk</sub>²
      </div>
    </li>
    <li><strong>J<sub>istasyon</sub> (Steiner / Paralel Eksen Teoremi):</strong> Her bir fikstür ve taşınan parçanın ağırlık merkezinin tabla dönme eksenine olan yarıçap mesafesi <em>R<sub>hat</sub></em> [m], fikstür ve parçanın toplam kütlesi <em>m<sub>fikstür</sub></em> [kg] olmak üzere:
      <div class="formul-kutu">
        J<sub>istasyon</sub> = J<sub>kendi_CoG</sub> + m<sub>fikstür</sub> · R<sub>hat</sub>²
      </div>
      (Fikstür kendi boyutları <em>R<sub>hat</sub></em> yanında küçükse <em>J<sub>kendi_CoG</sub></em> ihmal edilebilir: <em>J<sub>istasyon</sub> ≈ m<sub>fikstür</sub> · R<sub>hat</sub>²</em>).
    </li>
  </ul>
</div>

<div class="uyari-kutu">
  <h4>Kritik Tasarım Kuralı: Yarıçapın Dördüncü Kuvveti Tuzağı!</h4>
  <p>Diskin kütlesi <em>m<sub>disk</sub> = π · R² · t · ρ</em> olduğundan, <em>J<sub>disk</sub> = (1/2) · (π·ρ·t) · R<sup>4</sup></em> olur. <strong>Yani tabla çapını sadece 2 katına çıkarmak, tablanın ataletini tam 16 KAT artırır!</strong></p>
  <ul>
    <li>Bu nedenle döner tabla plakaları gereksiz yere büyük çaplı yapılmamalıdır.</li>
    <li>Ağır çelik plakalar yerine yüksek mukavemetli eloksallı alüminyum (Al 7075 / Al 6082) kullanılmalıdır.</li>
    <li>Plakanın alt yüzeyinde cepler açılarak (lightening pockets) rijitliği korurken kütlesi boşaltılmalıdır.</li>
  </ul>
</div>

<h2>3. İndeksleme Süresi, Kinematik Açısal İvme ve Dinamik Tork</h2>
<p>Döner tablanın <em>N</em> istasyonlu olduğu bir sistemde, her bir indeksleme adımı için dönüş açısı <em>θ = 360° / N = 2π / N</em> [radyan]'dır. Bu dönüşün <em>t<sub>indeks</sub></em> [saniye] süresinde tamamlanması hedeflenir.</p>

<div class="muhendislik-kutu">
  <h4>Tepe Açısal İvme ve Dinamik Tork Formülü</h4>
  <p>Globoidal kam indeksörlerinde en yaygın kullanılan <strong>Modifiye Sinüs (MS)</strong> veya <strong>Modifiye Trapezoid (MT)</strong> hareket profillerinde tepe açısal ivme katsayısı <em>C<sub>a</sub> ≈ 5,53</em> (Modifiye Sinüs için) alınır:</p>
  <div class="formul-kutu">
    α<sub>max</sub> = C<sub>a</sub> · [ θ / (t<sub>indeks</sub>)² ] [rad/s²]
  </div>
  <p>Kam miline veya tahrik motoruna yansıyan dinamik hızlanma torku:</p>
  <div class="formul-kutu">
    M<sub>dinamik</sub> = J<sub>toplam</sub> · α<sub>max</sub> [Nm]
  </div>
  <p>Buna sürtünmeli yataklama torku (<em>M<sub>sürtünme</sub></em>) ve güvenlik katsayısı (S = 1,5 – 2,0) eklenerek indeksör modeli katalogdan seçilir.</p>
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
        <td><strong>Globoidal Cam Indexer</strong></td>
        <td>Dönen kum saati formlu kam kanalıyla iğneli taret makaralarını sürerek sıfır boşluklu ve bekleme anında mekanik kilitli indeksleme sağlayan ünite.</td>
      </tr>
      <tr>
        <td><strong>Dwell (Bekleme Açısı)</strong></td>
        <td>Tahrik kamı dönerken çıkış tablasının tamamen durduğu ve montaj/işleme prosesinin gerçekleştiği açısal faz (ör. 120° hareket, 240° bekleme).</td>
      </tr>
      <tr>
        <td><strong>Steiner Teoremi (Paralel Eksen)</strong></td>
        <td>Bir kütlenin kendi ağırlık merkezinden uzak bir eksen etrafında dönerken oluşturduğu atalet momentini hesaplama formülü (J = J₀ + m·r²).</td>
      </tr>
      <tr>
        <td><strong>Arcsecond (Yay Saniyesi)</strong></td>
        <td>Bir derecenin 3600'de biri (1/3600°); yüksek hassasiyetli döner tablaların açısal pozisyonlama tekrarlanabilirlik birimi.</td>
      </tr>
      <tr>
        <td><strong>Direct Drive Rotary (DDR)</strong></td>
        <td>Arada mekanik redüktör, kam veya kayış olmaksızın yükü doğrudan süren fırçasız tork motoru sistemi.</td>
      </tr>
      <tr>
        <td><strong>Modifiye Sinüs Profili</strong></td>
        <td>İndeksleme mekanizmalarında ivme şokunu ve titreşimi en aza indiren yumuşatılmış harmonik kinematik eğri.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Döner tablalı otomasyonda sıfır boşluk, bekleme anında harici frensiz mekanik kilitleme ve darbe sönümleme için Globoidal Kam İndeksörleri endüstriyel standarttır.</li>
    <li>Atalet momenti çapın 4. kuvvetiyle (R⁴) orantılıdır; tabla çapı büyüdükçe atalet muazzam artar. Alüminyum malzeme ve ağırlık boşaltma cepleri kullanılmalıdır.</li>
    <li>Gerekli motor torkunun ana belirleyicisi sürtünme değil, tablanın kütlesel ataletidir (M = J · α). İndeksleme süresi yarıya indirilirse gerekli tork 4 katına çıkar!</li>
    <li>Ağır presleme veya delme kuvveti olan istasyonlarda döner tablanın altı sabit sertleştirilmiş destek pabuçlarıyla alttan desteklenmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Analitik Atalet ve Tork Hesabı):</strong> 8 istasyonlu (θ = 360° / 8 = 45° = 0,785 radyan) bir montaj tablasında toplam kütlesel atalet momenti J<sub>toplam</sub> = 2,5 kg·m² olarak hesaplanmıştır. İndeksleme süresi t<sub>indeks</sub> = 0,4 saniyedir. Modifiye sinüs kam profili kullanılmakta olup tepe ivme çarpanı C<sub>a</sub> = 5,53'tür. Mekanizmanın maruz kalacağı maksimum tepe dinamik hızlanma torku M<sub>dinamik</sub> kaç Nm'dir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) M<sub>dinamik</sub> ≈ 67,8 Nm
      <div class="test-cevap">DOĞRU. <br>
      α<sub>max</sub> = C<sub>a</sub> · [ θ / (t<sub>indeks</sub>)² ]<br>
      α<sub>max</sub> = 5,53 · [ 0,7854 / (0,4)² ] = 5,53 · [ 0,7854 / 0,16 ] = 5,53 · 4,9087 ≈ 27,145 rad/s².<br>
      M<sub>dinamik</sub> = J<sub>toplam</sub> · α<sub>max</sub> = 2,5 kg·m² · 27,145 rad/s² ≈ 67,86 Nm.<br>
      Güvenlik katsayısı ile birlikte en az 100–120 Nm dinamik kapasiteli bir kam indeksörü seçilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) M<sub>dinamik</sub> ≈ 12,3 Nm
      <div class="test-cevap">YANLIŞ. t² yerine t'ye bölünmüş veya açı radyan yerine derece alınmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) M<sub>dinamik</sub> ≈ 245 Nm
      <div class="test-cevap">YANLIŞ. Atalet karesi alınmış veya katsayı hatalı çarpılmıştır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Saha Arızası ve Mekanizma Mukavemeti):</strong> Bir döner tabla üzerinde 4. istasyonda parçaya pnömatik hidrolik takviyeli bir silindirle 15 kN (1,5 ton) presleme kuvveti uygulanmaktadır. İmalatçı, tablanın altına hiçbir destek koymamış, tüm presleme yükü doğrudan tablanın ana merkez rulmanına ve kam indeksör çıkış miline binmiştir. 3 ay sonra tabla yataklarında 0,2 mm eksenel boşluk ve kasıntı oluşmuştur. Doğru konstrüksiyon çözümü nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Presleme silindirinin kuvveti 5 kN'a düşürülmelidir.
      <div class="test-cevap">YANLIŞ. Proses 15 kN gerektiriyorsa kuvveti düşürmek eksik montaja sebep olur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Presleme istasyonunun tam altına, tabla alt yüzeyine 0,05 mm boşlukla çalışan veya presleme anında hidrolik/pnömatik kamla yukarı kalkıp tablayı alttan destekleyen sertleştirilmiş çelik destek bloğu (anvil / support block) konulmalıdır.
      <div class="test-cevap">DOĞRU. Döner tabla indeksörleri dönme torku içindir; tonlarca eksenel presleme kuvvetini taşımak üzere tasarlanmazlar. Presleme istasyonunun altına rijit bir zımba altlığı (anvil) konularak kuvvet doğrudan makine şasesine aktarılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Tabla malzemesi alüminyumdan bronza çevrilmelidir.
      <div class="test-cevap">YANLIŞ. Sorun tabla malzemesi değil, indeksör rulmanlarına binen eksenel pres kuvvetidir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Kinematik Limitler):</strong> Neden dakikada 60 adedin üzerinde indeksleme yapan modern hızlı otomasyon makinelerinde klasik Cenevre (Maltezer) mekanizması yerine Globoidal Kam İndeksörleri tercih edilir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Cenevre mekanizmasında tahrik pimi kanala girdiği anda ivmede ani süreksizlik ve sonsuz sarsıntı (jerk) darbesi oluşur; bu durum yüksek hızda makineyi şiddetle sarsar, ses yapar ve pimleri hızla aşındırır. Kam indeksörlerinde ise ivme yumuşakça yükselir ve sıfır darbe üretir.
      <div class="test-cevap">DOĞRU. Cenevre mekanizmasının kinematik ivme eğrisi başlangıçta dik bir sıçrama yapar; bu da yüksek hızlarda tahrip edici darbeler ve aşınma yaratır. Globoidal kam indeksörleri sürekli türevlenebilir hareket profilleriyle darbesiz ve sessiz çalışır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Cenevre mekanizması sadece tek yöne dönebilir.
      <div class="test-cevap">YANLIŞ. Her iki sistem de tek yöne veya çift yöne sürülebilir; fark dinamik şok ve boşluktur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Cenevre mekanizması elektrik enerjisiyle çalışmaz.
      <div class="test-cevap">YANLIŞ. İkisi de elektrik motoruyla tahrik edilir.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 7.8: PARÇA BESLEME SİSTEMLERİ
kitap.bolumEkle({
  id: "7-8",
  baslik: "Parça Besleme Sistemleri",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Montaj ve işleme hatlarına dökme (bulk) halde gelen ham parçaların otomatik olarak tek tek ayrılmasını, doğru oryantasyona getirilmesini ve hatta kesintisiz beslenmesini sağlayan besleme mekanizmalarının; vibrasyonlu çanak rezonans dinamiğini, mekanik oryantasyon tuzaklarını, adımlı besleyicileri (step feeder) ve esnek vizyonlu besleme (flexible feeder) teknolojilerini öğretmektir.</p>
</div>

<h2>1. Vibrasyonlu Çanak Besleyiciler (Vibratory Bowl Feeder) Dinamiği</h2>
<p>Vibrasyonlu çanaklar, küçük ve orta boyuttaki parçaların (cıvata, somun, plastik kapak, pim, terminal) oryantasyonunda endüstrinin en yaygın mekanizmasıdır.</p>

<div class="muhendislik-kutu">
  <h4>Çalışma Mekaniği: Mikro Sıçrama ve Mikro Kayma</h4>
  <p>Sistem; tabandaki dairesel bir elektromanyetik bobin çekirdeği ve açılı dizilmiş yaprak yaylar (leaf springs) üzerine kuruludur:</p>
  <ul>
    <li>Bobine 50 Hz veya özel frekanslı alternatif gerilim uygulandığında, çanak aşağı doğru çekilirken açılı yayların geometrisi sebebiyle aynı anda burulma açısıyla döner.</li>
    <li>Bobin enerjisi kesildiğinde yaylar çanağı yukarı ve ters yönde fırlatır.</li>
    <li><strong>Mikro Sıçrama İlkesi:</strong> Parça, çanağın helisel rampası üzerinde her saniyede 50 ila 100 kez milimetrenin yüzde biri kadar yukarı ve ileri doğru "zıplar" (micro-hopping). Bu mikro sıçramalar parçaların rampa boyunca yukarı doğru kesintisiz akmasını sağlar.</li>
    <li><strong>Rezonans Şartı:</strong> Çanağın mekanik doğal frekansı (<em>f<sub>n</sub></em>), tahrik bobininin elektriksel frekansına çok yakın olmalıdır. Çanağın içine aşırı parça doldurulursa toplam kütle artar, doğal frekans düşer, sistem rezonanstan uzaklaşır ve parça yürüyüşü aniden yavaşlar veya durur!</li>
  </ul>
</div>

<h2>2. Mekanik Oryantasyon Tuzakları (Tooling Mechanics)</h2>
<p>Çanağın rampasında yukarı tırmanan parçalar dökme halde ve rastgele açılardadır. Parçaların montaj istasyonuna sadece istenen tek bir pozisyonda (örneğin başı önde, flanşı altta) ulaşması için çanak çıkışına <strong>Mekanik Oryantasyon Tuzakları (Tooling)</strong> işlenir:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Tuzak / Elek Mekanizması</th>
      <th>Çalışma İlkesi ve Fiziksel Temeli</th>
      <th>Elenen / Düzeltilen Parça Durumu</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Silecek Bıçağı (Wiper Blade)</strong></td>
      <td>Rampa tavanına parçanın nominal yüksekliğinden 0,5 mm yüksek bir çelik bıçak konulur.</td>
      <td>Üst üste binmiş (çift) gelen parçaları sıyırarak alt parçayı geçirir, üsttekini çanağın içine geri düşürür.</td>
    </tr>
    <tr>
      <td><strong>Rampa Daraltma (Narrow Track)</strong></td>
      <td>Rampanın genişliği sadece tek bir parçanın genişliğine izin verecek şekilde kademeli olarak daraltılır.</td>
      <td>Yan yana çift gelen parçalardan dışarıda kalanı çanak haznesine düşürür; tek sıra (single-file) akış sağlar.</td>
    </tr>
    <tr>
      <td><strong>Ağırlık Merkezi Boşluğu (Center of Gravity Fall-out)</strong></td>
      <td>Rampanın dış kenarında parçanın ağırlık merkezine göre hesaplanmış bir boşluk açılır.</td>
      <td>Doğru yönde gelen parçanın ağırlık merkezi rayın üzerinde kalır ve geçer. Ters yönde gelen parçanın ağırlık merkezi boşluğa denk gelir ve parça yerçekimiyle çanağa geri yuvarlanır.</td>
    </tr>
    <tr>
      <td><strong>Bükümlü Ray / Helis Döndürücü (Twist Track)</strong></td>
      <td>Rampa dışarı çıkarken sac veya tel kılavuz kendi ekseni etrafında 90° veya 180° burulur.</td>
      <td>Yatay gelen parçayı mekanik olarak dik konuma veya ters konuma yumuşakça çevirir; parçayı düşürmeden yönlendirir.</td>
    </tr>
    <tr>
      <td><strong>Hava Jeti Nozulu (Air Jet Rejector)</strong></td>
      <td>Optik sensör veya mekanik pim ters parçayı algıladığında 2–4 bar hava üfleyerek parçayı hattan dışarı atar.</td>
      <td>Mekanik olarak elenmesi zor olan, tolerans farkı 0,2 mm'den az olan ters parçaları ayıklar.</td>
    </tr>
  </tbody>
</table>

<h2>3. Adımlı Besleyiciler (Step Feeder) ve Elevatörler</h2>
<p>Hassas yüzeyli, kaplamalı, gürültüye duyarlı veya vibrasyonla birbirine dolanan (tarak, yay gibi) parçalarda vibrasyonlu çanak kullanılamaz. Bu durumlarda <strong>Step Feeder (Kademeli Besleyici)</strong> tercih edilir:</p>
<ul>
  <li>Dökme parça haznesinin içinden dikey olarak yukarı-aşağı hareket eden basamaklı lamalar (adımlar) geçer.</li>
  <li>Her basamak sadece bir veya iki parçayı sırtına alarak yukarı taşır; basamağa sığmayanlar hazneye geri kayar.</li>
  <li><strong>Avantajları:</strong> Son derece sessizdir (<65 dB); parçalar birbirine çarpıp çizilmez; yaylar birbirine dolanmaz; lineer aktarım hızı çok hassas kontrol edilebilir.</li>
</ul>

<h2>4. Esnek Besleme (Flexible Feeder) ve 2D/3D Vizyon Robot Entegrasyonu</h2>
<p>Endüstri 4.0 ve sık model değiştiren esnek montaj hatlarında, her yeni parça için aylar süren mekanik çanak işleme ve ayar maliyetini yok eden <strong>Anyfeeder / Flex Feeder</strong> sistemleri yaygınlaşmıştır:</p>
<div class="muhendislik-kutu">
  <h4>Sistem Mimarisi ve Akış Mantığı:</h4>
  <ol>
    <li>Parçalar dökme bunkerden düz bir titreşim tablasının üzerine serbestçe dökülür.</li>
    <li>Tabla servo lineer veya ses bobini (voice coil) aktüatörlerle X, Y ve Z yönlerinde parametrik olarak titreştirilerek parçalar homojen olarak yayılır ve takla attırılır.</li>
    <li>Üstteki endüstriyel kamera (Vision System) doğru yüzeyi yukarı bakan parçaları milisaniyeler içinde tespit eder ve X-Y-θ koordinatlarını robota gönderir.</li>
    <li>Scara veya Delta robot doğru parçaları Pick & Place ile alır; ters parçalar tablaya tekrar titreşim verilerek ters yüz edilir. Mekanik kalıp veya parça ayar ihtiyacı tamamen sıfırdır.</li>
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
        <td><strong>Micro-Hopping (Mikro Sıçrama)</strong></td>
        <td>Vibrasyonlu çanakta parçaların açısal ivmelenmeyle havaya sıçrayarak ileri doğru yönlendirilmesi prensibi.</td>
      </tr>
      <tr>
        <td><strong>Rezonans Frekansı (f<sub>n</sub>)</strong></td>
        <td>Yay-çanak kütle sisteminin doğal salınım frekansı; bobin tahriki ile rezonansa girdiğinde maksimum transfer verimi elde edilir.</td>
      </tr>
      <tr>
        <td><strong>Step Feeder (Adımlı Besleyici)</strong></td>
        <td>Dikey basamak plakaları vasıtasıyla parçaları titreşimsiz, sessiz ve çizmeden kademeli yükselten besleme sistemi.</td>
      </tr>
      <tr>
        <td><strong>Wiper Blade (Sıyırıcı Bıçak)</strong></td>
        <td>Çanak rampasında üst üste binmiş çift parçaları fiziksel yükseklik farkıyla ayıklayıp çanağa geri düşüren ayar sacı.</td>
      </tr>
      <tr>
        <td><strong>Flex Feeder (Esnek Besleyici)</strong></td>
        <td>Titreşimli düz tabla, yapay görme sistemi (vision) ve robot kombinasyonuyla mekanik kalıp değiştirmeden çalışan çoklu parça besleme ünitesi.</td>
      </tr>
      <tr>
        <td><strong>Linear Track (Doğrusal Titreşimli Ray)</strong></td>
        <td>Çanaktan çıkan dizilmiş parçaları montaj istasyonuna tamponlayarak ileten doğrusal yaylı besleme rayı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Vibrasyonlu çanaklar rezonans prensibiyle çalışır. Çanağın içine gereğinden fazla parça doldurulması kütleyi artırarak sistemi rezonanstan çıkarır ve parça akışını kilitler; bu nedenle otomatik seviye kontrollü ön bunker (hopper) kullanılmalıdır.</li>
    <li>Parça oryantasyonu; sıyırıcı bıçaklar, rampa daraltma, ağırlık merkezi tuzakları ve hava jetleri gibi mekanik araçlarla sağlanır.</li>
    <li>Çizilmeye hassas veya birbirine dolanabilen parçalarda çanak yerine sessiz ve darbesiz çalışan Step Feeder tercih edilmelidir.</li>
    <li>Sık ürün değişimi olan karmaşık montaj hücrelerinde mekanik tuzaklar yerine kamera ve robot destekli Esnek Besleyiciler (Flex Feeder) seçilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Saha Arızası ve Rezonans Analizi):</strong> Bir otomotiv montaj hattında M8 flanşlı somunları besleyen vibrasyonlu çanak besleyici normalde dakikada 80 adet parça beslemektedir. Operatör sürekli parça doldurmakla uğraşmamak için sabah vardiyasında çanağın içine ağzına kadar 30 kg somun boşaltmıştır. Çanak çalıştırıldığında uğultulu bir ses çıkarmasına rağmen somunların rampada hiç ilerlemediği ve yerinde saydığı görülmüştür. Bu durumun bilimsel açıklaması ve doğru mühendislik çözümü nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çanağın içine 30 kg parça doldurulması toplam kütleyi aşırı artırmış, mekanik sistemin doğal rezonans frekansını (f<sub>n</sub> = √(k/m)) şebeke bobin frekansının çok altına düşürmüş ve sistem rezonanstan çıkmıştır. Çözüm: Çanak içindeki parça kütlesi daima 3–5 kg bandında tutulmalı ve seviye sensörlü otomatik bir ön bunker (bulk hopper) ile çanağa azar azar parça takviye edilmelidir.
      <div class="test-cevap">DOĞRU. Titreşimli besleyiciler hassas yay-kütle rezonans sistemleridir. Aşırı kütle doğal frekansı bozar ve titreşim genliğini yok eder. Çanağa asla aşırı yükleme yapılmamalı, seviye sensörlü bir besleme elevatörü/bunkeri kullanılmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Bobin voltajı 2 katına çıkarılmalıdır.
      <div class="test-cevap">YANLIŞ. Voltajı artırmak bobini yakar, rezonans kaymasını düzeltmez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Rampanın üzerine yağ sürülmelidir.
      <div class="test-cevap">YANLIŞ. Yağ sürmek sürtünmeyi yok eder, parçalar geriye doğru kayar.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Mekanizma Seçimi):</strong> İnce cilalı, parlak kaplamalı ve çizilmeye son derece hassas alüminyum parfüm kapağı bileşenleri montaj hattına beslenecektir. Vibrasyonlu çanakta parçalar birbirine çarptığında yüzeyde mikro çizikler oluşmakta ve kalite kontrol tarafından reddedilmektedir. Bu parçaları çizmeden, sessiz ve düzenli şekilde hatta beslemek için hangi besleyici sistemi seçilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çanağın içine zımpara kağıdı kaplamak.
      <div class="test-cevap">YANLIŞ. Zımpara parçaları tamamen çizer.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Yumuşak POM/poliüretan basamaklı lamalara sahip, parçaları titreştirmeden dikey olarak kaldıran Adımlı Besleyici (Step Feeder) veya kamera yönlendirmeli Esnek Besleyici (Flex Feeder).
      <div class="test-cevap">DOĞRU. Step feeder titreşim üretmez; basamaklar parçayı nazikçe hazne içinden yukarı kaldırır. Parçalar birbirine sürtünmez ve çarpmaz; hassas kaplamalı ürünler için standarttır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Parçaları eldivenli bir operatörün eliyle tek tek dizmesi.
      <div class="test-cevap">YANLIŞ. Seri otomasyonda sürdürülebilir ve ekonomik değildir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Oryantasyon Mekaniği):</strong> Bir yüzeyi düz, diğer yüzeyinde 3 mm'lik konik çıkıntı olan asimetrik plastik pullar beslenmektedir. Pulların düz yüzeyi tablaya basacak şekilde dizilmesi istenmektedir. Konik çıkıntısı aşağı bakan ters pulları ayıklamak için çanak çıkış rayında en basit ve güvenilir mekanik çözüm nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Rayın ortasına konik çıkıntının genişliğinde bir boyuna kanal açılır; konik çıkıntısı aşağı bakanlar kanala düşüp takılır veya dengesini kaybederek alt hazneye düşer; düz yüzeyi altta olanlar ise kanalın üzerinden kayarak geçer.
      <div class="test-cevap">DOĞRU. Geometrik kanal ve boşluk tuzakları, sensör gerektirmeyen en kusursuz Seviye 1 Poka-Yoke ve çanak oryantasyon metodudur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Rayın üzerine ısıtıcı rezistans koyup ters parçaları eritmek.
      <div class="test-cevap">YANLIŞ. Plastik parçayı eritmek yangın ve zehirli gaz çıkarır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Çanağın dönüş hızını 10 katına çıkarmak.
      <div class="test-cevap">YANLIŞ. Hızı artırmak parçaların etrafa saçılmasına yol açar.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 7.9: PICK & PLACE VE KARTEZYEN SİSTEMLER
kitap.bolumEkle({
  id: "7-9",
  baslik: "Pick & Place ve Kartezyen Sistemler",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Parçaların bir istasyondan alınıp diğerine hassas ve yüksek hızla aktarılmasını sağlayan Pick & Place (P&P) ve Kartezyen portal manipülatörlerin; pnömatik, mekanik kamlı ve servo motorlu tahrik yapılarının karşılaştırılmasını, köprü eğilme-sehim (deflection) kriterlerini ve rijitlik optimizasyonunu öğretmektir.</p>
</div>

<h2>1. Pick & Place Mekanizma Mimarileri</h2>
<p>Pick & Place, otomasyonun en temel hareket döngüsüdür: <em>Aşağı İn → Parçayı Yakala → Yukarı Kalk → Yatay İlerle → Aşağı İn → Parçayı Bırak → Yukarı Kalk → Başlangıca Dön</em> (U-Tipi Hareket Profili).</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>P&P Sistemi</th>
      <th>Tahrik Elemanları</th>
      <th>Maksimum Çevrim Hızı</th>
      <th>Tekrarlanabilirlik</th>
      <th>Mühendislik Değerlendirmesi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Pnömatik Kılavuzlu Modüler P&P</strong></td>
      <td>Çift milli pnömatik kılavuz silindirler, hidrolik amortisörler ve mekanik dayamalar.</td>
      <td>Orta (30–60 çevrim/dak).</td>
      <td>±0,02 mm (Sert mekanik dayama ile).</td>
      <td>Düşük maliyetli, basit devreye alma. Ancak ara pozisyon alamaz; strok sonu amortisör ayarları zamanla bozulabilir.</td>
    </tr>
    <tr>
      <td><strong>Kam Tahrikli Mekanik P&P (Cam-Driven Pick & Place)</strong></td>
      <td>Tek bir asenkron motor; çift çıkışlı silindirik/konjugat kam kutusu X ve Z kollarını mekanik senkron sürer.</td>
      <td><strong>Aşırı Yüksek (150–350 çevrim/dak).</strong></td>
      <td><strong>±0,01 mm.</strong> Sıfır yazılım riski.</td>
      <td>Yüksek hızlı montaj makinelerinin kalbidir. X ve Z eksenleri mekanik olarak kilitli olduğundan çarpışma ihtimali imkansızdır. Strok boyu sabittir, değiştirilemez.</td>
    </tr>
    <tr>
      <td><strong>Servo Kartezyen / Portal Manipülatör</strong></td>
      <td>AC Servo motorlar, vidalı mil, triger kayış veya lineer motorlu X-Y-Z kızakları.</td>
      <td>Yüksek (60–120 çevrim/dak).</td>
      <td>±0,01 – 0,05 mm.</td>
      <td>Tam esneklik; PLC üzerinden istenen koordinata gidebilir, hız ve ivme yazılımla değiştirilebilir. Ağır yükler ve uzun mesafeler için idealdir.</td>
    </tr>
  </tbody>
</table>

<h2>2. Kartezyen Portal Köprülerinde Sehim (Deflection) ve Mukavemet Analizi</h2>
<p>Kartezyen robotlarda Y ekseni arabası, iki ayak arasında uzanan yatay X ekseni kirişi (köprü) üzerinde hareket eder. Kirişin kendi ağırlığı ve üzerindeki Z ekseni + EOAT kütlesi, kirişte elastik eğilmeye (sehim / sag) yol açar.</p>

<div class="muhendislik-kutu">
  <h4>Kiriş Sehim Formülasyonu ve Kabul Kriteri</h4>
  <p>İki ucundan yataklanmış <em>L</em> açıklığındaki bir köprü profilinin tam ortasında <em>F</em> kütlesi (Z ekseni + tutulan parça) dururken oluşacak maksimum elastik sehim <em>δ<sub>max</sub></em> [m]:</p>
  <div class="formul-kutu">
    δ<sub>max</sub> = [ (F · L³) / (48 · E · I) ] + [ (5 · q · L<sup>4</sup>) / (384 · E · I) ]
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>F:</strong> Ortada asılı noktasal yük [N] (F = m<sub>araba+Z+parça</sub> · g).</li>
    <li><strong>q:</strong> Kiriş profilinin birim boydaki kendi ağırlığı [N/m] (q = m'<sub>profil</sub> · g).</li>
    <li><strong>L:</strong> İki ayak arasındaki köprü açıklığı [m].</li>
    <li><strong>E:</strong> Malzemenin elastisite modülü (Çelik için 210.000 MPa, Alüminyum için 70.000 MPa).</li>
    <li><strong>I:</strong> Kiriş kesitinin eğilme eksenindeki atalet momenti [m<sup>4</sup> veya cm<sup>4</sup>].</li>
  </ul>
</div>

<div class="uyari-kutu">
  <h4>Kritik Hassasiyet Kriteri: Endüstriyel Sehim Limiti</h4>
  <p>Hassas montaj ve Pick & Place robotlarında izin verilen maksimum köprü sehimi:</p>
  <div class="formul-kutu">
    δ<sub>max</sub> ≤ L / 2000 (Ağır montajda L / 1000)
  </div>
  <p>Örneğin L = 2000 mm açıklığındaki bir portal köprüsünde orta noktadaki sehim <strong>1,0 mm'yi kesinlikle geçmemelidir</strong>. Aksi takdirde araba ortaya geldiğinde Z ekseni aşağı çöker; parça alma noktasında fikstüre çarpar ve lineer araba bilyaları aşırı yükten dağılır!</p>
</div>

<h2>3. Çift Vidalı / Çift Kayışlı Gantrilerde Eksenel Çarpılma (Racking)</h2>
<p>Geniş açıklıklı X eksenlerinde (L > 1200 mm), köprünün her iki ayağı da bağımsız tahrik edilmelidir. Tek taraftan itilen geniş köprüler çaprazlama dönerek kılavuz raylarda kilitlenir (racking effect):</p>
<ul>
  <li><strong>Mekanik Senkronizasyon:</strong> Tek bir servo motorun çıkışına çift taraflı ara şaft (line shaft) bağlanarak her iki kramayer veya triger kayış aynı anda sürülür. En güvenli mekanik çözümdür.</li>
  <li><strong>Elektronik Senkronizasyon (Gantry Axis / Master-Slave):</strong> Her iki ayakta ayrı servo motor ve mutlak enkoder (absolute encoder) bulunur. PLC hareket kontrolörü mikro saniyelik çevrimle iki ekseni elektronik dişli (electronic gearing) ile senkronize eder. Eksenler arasında 0,05 mm kaçıklık oluştuğunda sistem anında acil duruşa geçer.</li>
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
        <td><strong>Pick & Place (P&P)</strong></td>
        <td>İş parçasını belirlenen bir koordinattan alıp yönlendirerek hedef istasyona bırakan transfer mekanizması.</td>
      </tr>
      <tr>
        <td><strong>Gantry (Portal Robot)</strong></td>
        <td>Kartezyen koordinat eksenlerinde (X, Y, Z) köprü konstrüksiyonu üzerinde yüksek yük ve geniş alanda çalışan manipülatör.</td>
      </tr>
      <tr>
        <td><strong>Deflection (Sehim - δ)</strong></td>
        <td>Kiriş veya profilin taşınan yük altında yerçekimi yönünde yaptığı elastik çökme miktarı.</td>
      </tr>
      <tr>
        <td><strong>Racking (Köprü Çarpılması)</strong></td>
        <td>Geniş portal sistemlerinde bir ayağın diğerinden geri kalması sonucu köprünün eksenel olarak dönmesi ve kızakların kasıntı yapması arızası.</td>
      </tr>
      <tr>
        <td><strong>Mekanik Kamlı P&P</strong></td>
        <td>Tek bir döner kam mili vasıtasıyla yatay ve düşey strokları sıfır yazılım riskiyle senkronize üreten ultra hızlı mekanizma.</td>
      </tr>
      <tr>
        <td><strong>Master-Slave Senkronizasyonu</strong></td>
        <td>Çift motorlu gantry sistemlerinde sürücülerin birbirini milisaniyelik enkoder takibiyle izleyerek kasıntıyı önlemesi.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Pick & Place seçiminde çevrim süresi belirleyicidir: Orta hızlarda pnömatik kılavuzlar, yüksek hız ve esneklikte servolar, aşırı yüksek hızlarda (150–300 çevrim/dak) mekanik kamlı P&P üniteleri kullanılır.</li>
    <li>Kartezyen kiriş tasarımlarında açıklık uzadıkça sehim L³ ile artar. İzin verilen maksimum çökme δ ≤ L / 2000 sınırında tutulacak kesit ataleti (I) seçilmelidir.</li>
    <li>Geniş açıklıklı portallarda kasıntıyı (racking) önlemek için ya rijit mekanik ara şaft ya da yüksek hızlı master-slave elektronik senkronizasyon kullanılmalıdır.</li>
    <li>Hareketli Z ekseninde alüminyum alaşımları kullanılarak hareketli kütle azaltılmalı, motor dinamik torku rahatlatılmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Mukavemet ve Sehim Analizi):</strong> İki ucu serbest mesnetli bir kartezyen portal kirişinin açıklığı L = 1500 mm (1,5 m)'dir. Kirişin tam ortasında hareket eden Z ekseni ve parça ağırlığı F = 600 N'dur. Kiriş olarak seçilen alüminyum sigma profilin elastisite modülü E = 70.000 MPa (70 × 10<sup>9</sup> N/m²), kesit atalet momenti I = 180 cm<sup>4</sup> (1,8 × 10<sup>-6</sup> m<sup>4</sup>)'tür. Profilin kendi ağırlığı ihmal edildiğinde ortadaki noktasal yükün oluşturacağı sehim δ kaç mm'dir ve L/2000 hassasiyet kriterini sağlar mı?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) δ ≈ 0,335 mm ; L/2000 kriteri (0,75 mm) sağlandığı için tasarım mükemmeldir.
      <div class="test-cevap">DOĞRU. <br>
      δ = (F · L³) / (48 · E · I)<br>
      δ = [ 600 · (1,5)³ ] / [ 48 · (70 × 10<sup>9</sup>) · (1,8 × 10<sup>-6</sup>) ]<br>
      δ = [ 600 · 3,375 ] / [ 48 · 126.000 ] = 2025 / 6.048.000 ≈ 0,0003348 m = 0,335 mm.<br>
      İzin verilen sınır: L / 2000 = 1500 / 2000 = 0,75 mm'dir. 0,335 mm < 0,75 mm olduğundan rijitlik kriteri tam olarak sağlanmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) δ ≈ 2,85 mm ; Kriter sağlanamaz.
      <div class="test-cevap">YANLIŞ. Birim dönüşümlerinde (cm⁴'ten m⁴'e geçerken 10⁻⁸ yerine 10⁻⁶ alınması gibi) hata yapılmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) δ ≈ 0,05 mm
      <div class="test-cevap">YANLIŞ. Formüldeki L³ çarpanı unutulmuştur.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Saha Arızası ve Senkronizasyon):</strong> 1600 mm genişliğindeki bir Kartezyen portal köprüsü, sadece sol ayağından tek bir triger kayış ile tahrik edilmektedir. Sağ ayak ise avara lineer kızak üzerinde serbestçe kaymaktadır. Sistem yüksek ivmeyle (a = 5 m/s²) hızlandığında sağ ayağın geride kaldığı, köprünün çapraz dönerek raylarda kilitlendiği (racking) ve araba bilyalarının parçalandığı görülmüştür. Bu problemi kökten çözmek için ne yapılmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Sağ ayağın lineer arabalarını söküp yerine teflon kayar burç takmak.
      <div class="test-cevap">YANLIŞ. Sürtünmeyi daha da artırarak kilitlenmeyi şiddetlendirir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Köprünün her iki tarafına da senkron triger kayış konulmalı, iki taraf ya tek bir motor ve rijit ara şaft ile mekanik olarak ya da çift servo motor ile elektronik master-slave gantry olarak senkron sürülmelidir.
      <div class="test-cevap">DOĞRU. Geniş köprülerde tek taraftan itme kuvvet uygulandığında dönme momenti oluşur ve raylarda kasıntıya yol açar. Çift taraflı pozitif tahrik gantry tasarımının temel kuralıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Motor gücünü 3 katına çıkarmak.
      <div class="test-cevap">YANLIŞ. Motoru büyütmek köprüyü daha şiddetli büker ve mekanizmayı kırar.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Hız ve Çarpışma Güvenliği):</strong> Dakikada 200 adet parça taşıyan bir montaj makinesinde pnömatik silindirli Pick & Place ünitesi kullanılmaktadır. Ancak pnömatik valf gecikmeleri ve hava basıncı dalgalanması nedeniyle yatay silindir bazen dikey silindir tam kalkmadan hareket etmekte ve tutucu çeneler fikstüre çarparak kırılmaktadır. Bu aşırı yüksek hızda sıfır çarpışma riski ve mutlak senkronizasyon için hangi P&P tipine geçilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Basınç regülatörünün ayarını artırmak.
      <div class="test-cevap">YANLIŞ. Pnömatik tepki süresi dalgalanmasını çözmez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tek bir motor ve kam mili üzerinden hem X hem Z eksenini mekanik form kilitle yöneten Mekanik Kam Tahrikli Pick & Place (Cam-Driven P&P) ünitesine geçilmelidir.
      <div class="test-cevap">DOĞRU. Mekanik kamlı P&P sistemlerinde X ve Z hareketleri aynı kam milinin profiliyle üretilir. Z ekseni kalkmadan X ekseninin ilerlemesi fiziksel ve geometrik olarak imkansızdır; sensör arızası veya PLC çökmesi olsa dahi asla çarpışamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) PLC'deki gecikme süresini (timer) 2 saniye artırmak.
      <div class="test-cevap">YANLIŞ. Timer artırmak dakikada 200 parça hızını dakikada 20 parçaya düşürür.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 7.10: ÇEVRİM SÜRESİ ANALİZİ (CYCLE TIME VE OEE OPTİMİZASYONU)
kitap.bolumEkle({
  id: "7-10",
  baslik: "Çevrim Süresi Analizi",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Otomasyon hatlarında birim zamanda üretilen parça sayısını (kapasite) belirleyen Çevrim Süresi (Cycle Time - T<sub>c</sub>) ve Toplam Ekipman Etkinliği (OEE) metriklerinin; analitik zaman etüdü, Gantt şeması ile paralel istasyon optimizasyonu, darboğaz (bottleneck) tespiti, pnömatik valf-silindir yanıt gecikmelerinin eliminasyonu ve mikro duruş kök neden analizlerini öğretmektir.</p>
</div>

<h2>1. Çevrim Süresi (Cycle Time) ve Takt Time Matematiği</h2>
<p>Endüstriyel bir otomasyon hücresinde iki temel zaman kavramı birbiriyle karıştırılmamalıdır:</p>
<ul>
  <li><strong>Takt Time (Müşteri Talep Süresi):</strong> Müşterinin sipariş hızına göre bir parçanın hattan çıkması gereken hedef süredir:
    <div class="formul-kutu">
      Takt Time = Net Kullanılabilir Çalışma Süresi [sn] / Müşteri Talep Adedi [adet]
    </div>
  </li>
  <li><strong>Cycle Time (Mekanik Çevrim Süresi - T<sub>c</sub>):</strong> Makinenin bir parçayı tamamlayıp bir sonraki parçayı vermesi için geçen fiili süredir. <strong>Kural:</strong> <em>T<sub>c</sub> ≤ Takt Time</em> olmalıdır; aksi halde fabrika siparişi yetiştiremez.</li>
</ul>

<div class="muhendislik-kutu">
  <h4>Toplam Çevrim Süresi Analitik Ayrışımı</h4>
  <p>Bir istasyonun tekil çevrim süresi <em>T<sub>c</sub></em> şu fazların toplamından oluşur:</p>
  <div class="formul-kutu">
    T<sub>c</sub> = T<sub>besleme</sub> + T<sub>yakalama</sub> + T<sub>proses</sub> + T<sub>indeks/transfer</sub> + T<sub>boşaltma</sub> + T<sub>gecikme</sub>
  </div>
  <p>Burada <strong>T<sub>gecikme</sub></strong>; sensör filtre süreleri, PLC tarama süresi (scan time), pnömatik valf dolum gecikmeleri ve güvenlik ışık perdesi açılma süreleridir. Yalın otomasyonda mühendisin görevi <em>T<sub>gecikme</sub></em>'yi sıfıra yaklaştırmaktır.</p>
</div>

<h2>2. Gantt Şeması ve Paralel İstasyon Optimizasyonu</h2>
<p>Amatör bir tasarımcı tüm işlemleri <strong>seri (ardışık)</strong> bağlar: <em>Robot parçayı alır → Tablaya koyar → Tabla döner → Pres basar → Pres kalkar → Kamera bakar → Robot boşaltır</em>. Bu hat 12 saniyede bir parça üretir.</p>

<div class="muhendislik-kutu">
  <h4>Darboğaz (Bottleneck) ve Paralel Çalışma İlkesi</h4>
  <p>Profesyonel döner tablalı veya transfer hatlı otomasyonda tüm istasyonlar <strong>aynı anda (paralel)</strong> çalışır:</p>
  <ul>
    <li>Tabla durduğu anda; 1. istasyonda robot yükleme yaparken, 2. istasyonda pres çakma yapar, 3. istasyonda kamera denetler, 4. istasyonda boşaltma robotu ürünü kasaya bırakır.</li>
    <li>Tüm işlemler eşzamanlı bittiğinde döner tabla tek bir adım indeksler (<em>T<sub>indeks</sub></em>).</li>
    <li><strong>Sistem Çevrim Süresi:</strong> En uzun süren istasyonun süresi (Darboğaz İstasyon - Bottleneck) ile transfer süresinin toplamına eşittir:
      <div class="formul-kutu">
        T<sub>hat_çevrim</sub> = max(T<sub>istasyon_1</sub>, T<sub>istasyon_2</sub>, ..., T<sub>istasyon_n</sub>) + T<sub>indeks</sub>
      </div>
    </li>
  </ul>
</div>

<h2>3. Çevrim Süresini Yiyen Gizli Pnömatik ve Elektriksel Kayıplar</h2>
<p>Birçok otomasyon mühendisi motorları son hızına ayarlamasına rağmen hedeflenen çevrim süresini yakalayamaz. Bunun sebebi mekanik hız değil, <strong>gizli sistem gecikmeleridir</strong>:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Gizli Gecikme Kaynağı</th>
      <th>Tipik Süre Kaybı</th>
      <th>Mühendislik Çözümü ve Süre Kazancı</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Valf Adası - Silindir Arası Uzun Hortumlar</strong></td>
      <td>Her strokta 100 – 250 ms gecikme.</td>
      <td>Valf adası panodan çıkarılıp silindirin hemen yanına (şaseye) monte edilir; hortum boyu 3 m'den 30 cm'ye düşürülür. Çevrim başına 0,5–1,0 sn kazanılır.</td>
    </tr>
    <tr>
      <td><strong>Çabuk Egzoz (Quick Exhaust) Eksikliği</strong></td>
      <td>Geri dönüşte 150 – 300 ms gecikme.</td>
      <td>Silindir egzoz havasının uzun hortumdan geri dönmesini beklemeden doğrudan silindir kapağından tahliye eden çabuk egzoz valfi takılır.</td>
    </tr>
    <tr>
      <td><strong>Gereksiz PLC Zamanlayıcıları (Timers)</strong></td>
      <td>Her adımda 200 – 500 ms bekleme.</td>
      <td>Yazılımdaki "Silindir ileri gitsin, 0,5 sn bekle, sonra pres insin" timerları silinmeli; doğrudan silindir üzerindeki manyetik reed/solid-state sensör sinyali (end of stroke) ile tetikleme yapılmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Robot Yolu Örtüşmesi (Continuous Path / Blending)</strong></td>
      <td>Her köşe noktasında 100 – 200 ms durma.</td>
      <td>Robot komutlarında "FINE" (tam duruş) yerine "CNT / ZONE" (yuvarlatılmış sürekli yol) parametresi kullanılarak robotun durmaksızın kavis çizmesi sağlanır.</td>
    </tr>
  </tbody>
</table>

<h2>4. OEE (Overall Equipment Effectiveness) Analizi</h2>
<p>Bir makinenin hızlı çalışması tek başına yetersizdir; ne kadar süre arızasız çalıştığı ve ne kadar sağlam ürün çıkardığı OEE metriği ile ölçülür:</p>
<div class="formul-kutu">
  OEE = Kullanılabilirlik (A) × Performans (P) × Kalite (Q)
</div>
<p>Burada:</p>
<ul>
  <li><strong>Kullanılabilirlik (Availability):</strong> (Çalışma Süresi / Planlanan Üretim Süresi). Plansız duruşlar, arızalar ve kalıp ayarları düşürür.</li>
  <li><strong>Performans (Performance):</strong> (Gerçekleşen Üretim / (Çalışma Süresi × İdeal Hız)). Mikro duruşlar (parça takılması, çanak boşalması) ve düşük hızda çalışma düşürür.</li>
  <li><strong>Kalite (Quality):</strong> (Sağlam Parça Sayısı / Toplam Üretilen Parça). Hatalı, ıskarta ve yeniden işleme parçalar düşürür.</li>
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
        <td><strong>Cycle Time (Çevrim Süresi - T<sub>c</sub>)</strong></td>
        <td>Bir makine veya istasyonun bir parçayı baştan sona işleyip teslim etmesi için geçen toplam süre.</td>
      </tr>
      <tr>
        <td><strong>Takt Time</strong></td>
        <td>Müşteri talep hızına ayak uydurmak için hattan parça çıkması gereken teorik azami zaman aralığı.</td>
      </tr>
      <tr>
        <td><strong>Bottleneck (Darboğaz İstasyon)</strong></td>
        <td>Bir üretim hattında çevrim süresi en uzun olan ve hattın toplam üretim hızını tek başına sınırlayan istasyon.</td>
      </tr>
      <tr>
        <td><strong>OEE (Overall Equipment Effectiveness)</strong></td>
        <td>Bir ekipmanın Kullanılabilirlik, Performans ve Kalite oranlarının çarpımıyla hesaplanan dünya standardı verimlilik metriği.</td>
      </tr>
      <tr>
        <td><strong>Chokotei (Mikro Duruş)</strong></td>
        <td>1–2 saniyelik parça sıkışması, sensör gecikmesi gibi operatör müdahalesiyle hemen çözülen ancak gün sonunda saatlerce kayba yol açan ufak duruşlar.</td>
      </tr>
      <tr>
        <td><strong>Blending / Continuous Path</strong></td>
        <td>Robotik yörüngelerde ara noktalarda sıfır hızda durmak yerine hızı koruyarak kavisli geçiş yapma algoritması.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Makinenin çevrim süresi (T<sub>c</sub>) daima müşterinin Takt Time'ından küçük veya ona eşit olmalıdır.</li>
    <li>Döner tablalı ve transfer hatlarında tüm istasyonlar paralel çalışmalı; hat hızı en yavaş çalışan darboğaz istasyonun süresi + indeks süresi ile belirlenmelidir.</li>
    <li>Çevrim süresi optimizasyonunda pnömatik hortumlar kısaltılmalı, çabuk egzoz valfleri takılmalı ve yazılımdaki gereksiz PLC zamanlayıcıları (timer) kaldırılarak sensör tabanlı geçişe dönülmelidir.</li>
    <li>OEE verimliliği Kullanılabilirlik, Performans ve Kalitenin çarpımıdır; mikro duruşların yok edilmesi hat kapasitesini dramatik şekilde artırır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Darboğaz ve Kapasite Hesabı):</strong> 6 istasyonlu bir döner tablalı montaj makinesinde istasyonların tekil işlem süreleri şöyledir: <br>
    İstasyon 1 (Yükleme robotu): 1,8 saniye <br>
    İstasyon 2 (Vidalama): 2,4 saniye <br>
    İstasyon 3 (Presleme): 3,5 saniye <br>
    İstasyon 4 (Lazer markalama): 1,5 saniye <br>
    İstasyon 5 (Kamera kontrol): 0,8 saniye <br>
    İstasyon 6 (Boşaltma robotu): 1,6 saniye <br>
    Döner tablanın her bir indeksleme süresi t<sub>indeks</sub> = 0,5 saniyedir. İstasyonlar paralel çalıştığına göre, bu makinenin toplam çevrim süresi T<sub>c</sub> ve saatlik teorik üretim kapasitesi nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) T<sub>c</sub> = 4,0 saniye ; Kapasite = 900 parça/saat
      <div class="test-cevap">DOĞRU. <br>
      Paralel çalışan sistemde en uzun süren istasyon darboğazdır. <br>
      T<sub>darboğaz</sub> = max(1,8; 2,4; 3,5; 1,5; 0,8; 1,6) = 3,5 saniye (İstasyon 3: Presleme). <br>
      T<sub>toplam</sub> = T<sub>darboğaz</sub> + t<sub>indeks</sub> = 3,5 + 0,5 = 4,0 saniye. <br>
      Saatlik Kapasite = 3600 sn / 4,0 sn = 900 parça/saat.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) T<sub>c</sub> = 13,1 saniye ; Kapasite = 274 parça/saat
      <div class="test-cevap">YANLIŞ. Tüm istasyon süreleri seri (ardışık) toplanmış; oysa döner tablada tüm istasyonlar eşzamanlı çalışır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) T<sub>c</sub> = 3,5 saniye ; Kapasite = 1028 parça/saat
      <div class="test-cevap">YANLIŞ. Tablanın indeksleme süresi (0,5 saniye) hesaba katılmamıştır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Süre Kısaltma ve PLC Optimizasyonu):</strong> Bir montaj makinesinde hedef çevrim süresi 3,0 saniyedir ancak makine şu anda 3,8 saniyede çalışmaktadır. PLC programı incelendiğinde; pnömatik silindir ileri gittiğinde sensör görmesine rağmen yazılımcının emniyet amacıyla "TON T#300MS" (300 ms bekleme zamanlayıcısı) koyduğu ve bu yapının ardışık 3 farklı silindir adımında tekrarlandığı görülmüştür. Bu bekleme süreleri kaldırılıp doğrudan sensör doğrulamalı geçişe dönülürse ne elde edilir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) 3 × 300 ms = 900 ms (0,9 saniye) saf zaman tasarrufu sağlanır; çevrim süresi 3,8 - 0,9 = 2,9 saniyeye düşer ve 3,0 saniye hedefi hiçbir mekanik masraf yapılmadan yakalanır!
      <div class="test-cevap">DOĞRU. Gereksiz PLC timerları otomasyon hatlarının en büyük gizli zaman hırsızlarıdır. Manyetik konum sensörleri zaten silindirin hedefe ulaştığını %100 doğrular; ilave bekleme koymak israftır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Silindirler parçalanır.
      <div class="test-cevap">YANLIŞ. Silindir strok sonuna ulaştığında sensör görür ve hidrolik amortisör darbeyi sönümler; timerın mekanik korumayla ilgisi yoktur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Çevrim süresi değişmez.
      <div class="test-cevap">YANLIŞ. 0,9 saniyelik doğrudan süre kazancı sağlanır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (OEE Hesaplama):</strong> Bir fabrikanın 8 saatlik (480 dakika) çalışma vardiyasında planlanan bakım ve çay molaları çıktıktan sonra net çalışma süresi 420 dakikadır. Bu vardiyada makine parça takılmaları ve arızalar sebebiyle 42 dakika duruş yapmıştır (Kullanılabilirlik = (420-42)/420 = %90). Makine toplam 3400 parça üretmiştir; oysa ideal hızda çalışsaydı 3780 parça üretmeliydi (Performans = 3400/3780 = %90). Üretilen 3400 parçanın 170 tanesi ıskartaya ayrılmıştır (Kalite = (3400-170)/3400 = %95). Bu hattın OEE değeri nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) OEE = 0,90 × 0,90 × 0,95 ≈ 0,7695 (%76,95)
      <div class="test-cevap">DOĞRU. <br>
      OEE = Kullanılabilirlik × Performans × Kalite <br>
      OEE = 0,90 × 0,90 × 0,95 = 0,7695 = %76,95. <br>
      Bu değer dünya standardı seviyelerine (%85 hedefine) yakın olmakla birlikte performans ve duruş kayıplarının iyileştirilmesi gerektiğini gösterir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) OEE = %91,6
      <div class="test-cevap">YANLIŞ. Üç oranın ortalaması alınmış; oysa OEE çarpımsal bir metriktir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) OEE = %65,0
      <div class="test-cevap">YANLIŞ. Hesaplama hatası.</div>
    </div>
  </div>
</div>
`
});
