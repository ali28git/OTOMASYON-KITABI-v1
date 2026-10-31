/* ========================================================================
   MODÜL 9: MÜHENDİSLİK HESAPLARI (m09-c.js)
   Bölüm 9.7: Kayış ve Dişli Hesabı (ISO 6336 ve DIN 7721)
   Bölüm 9.8: Sonlu Elemanlar Analizi (FEA) Temelleri
   ======================================================================== */

// BÖLÜM 9.7: KAYIŞ VE DİŞLİ HESABI (ISO 6336 VE DIN 7721)
kitap.bolumEkle({
  id: "9-7",
  baslik: "Kayış ve Dişli Hesabı",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Mekanik güç iletiminde tork ve devir dönüşümünü sağlayan dişli çarkların ve triger kayış sistemlerinin; ISO 6336 diş dibi kırılması ve yüzey çukurlaşması (pitting / Hertz) hesap modellerini, Lewis formülünü, triger kayış profil seçimini ve akustik frekansla ön gerilme kontrolünü derinlemesine öğretmektir.</p>
</div>

<h2>1. Alın Dişli Çark Geometrisi ve Kinematiği</h2>
<p>Dişli mekanizmalarında iki dişlinin birbirine sorunsuz temas edebilmesi için <strong>modüllerinin (m) ve kavrama açılarının (α = 20° standart) aynı olması şarttır</strong>.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Geometrik Parametre</th>
      <th>Sembol ve Birim</th>
      <th>Analitik Formül</th>
      <th>Mühendislik Açıklaması</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Modül</strong></td>
      <td>m [mm]</td>
      <td>m = p / π = d / z</td>
      <td>Diş büyüklüğünü belirleyen temel standart parametre (DIN 780 standart serisi: 1, 1,5, 2, 2,5, 3, 4, 5, 6 mm vb.).</td>
    </tr>
    <tr>
      <td><strong>Bölüm Dairesi Çapı (Pitch Dia.)</strong></td>
      <td>d [mm]</td>
      <td>d = m · z</td>
      <td>Yuvarlanma kinematik temasının gerçekleştiği teorik silindirik çap. <em>z:</em> Diş sayısı.</td>
    </tr>
    <tr>
      <td><strong>Diş Üstü Çapı (Tip Dia.)</strong></td>
      <td>d<sub>a</sub> [mm]</td>
      <td>d<sub>a</sub> = d + 2 · m = m · (z + 2)</td>
      <td>Dişlinin tornalanacağı ham kütük dış çapı (Standart addendum: h<sub>a</sub> = m).</td>
    </tr>
    <tr>
      <td><strong>Diş Dibi Çapı (Root Dia.)</strong></td>
      <td>d<sub>f</sub> [mm]</td>
      <td>d<sub>f</sub> = d − 2,5 · m = m · (z − 2,5)</td>
      <td>Diş boşluğunun taban çapı (Standart dedendum: h<sub>f</sub> = 1,25 · m; 0,25m baş boşluğudur).</td>
    </tr>
    <tr>
      <td><strong>Eksenler Arası Mesafe</strong></td>
      <td>a [mm]</td>
      <td>a = (d<sub>1</sub> + d<sub>2</sub>) / 2 = m · (z<sub>1</sub> + z<sub>2</sub>) / 2</td>
      <td>İki dişli milinin şasedeki yatak merkezleri arasındaki nominal mesafe.</td>
    </tr>
    <tr>
      <td><strong>Çevrim Oranı (Gear Ratio)</strong></td>
      <td>i [—]</td>
      <td>i = n<sub>giriş</sub> / n<sub>çıkış</sub> = z<sub>2</sub> / z<sub>1</sub> = T<sub>çıkış</sub> / (T<sub>giriş</sub> · η)</td>
      <td>Devir düşürme ve tork büyütme oranı.</td>
    </tr>
  </tbody>
</table>

<h2>2. Dişli Mukavemet Analizi (ISO 6336 Standardı)</h2>
<p>Bir dişli iki temel hasar mekanizmasına göre boyutlandırılır: <strong>1) Diş Dibi Eğilme Kırılması</strong>, <strong>2) Diş Yüzeyi Ezilmesi / Çukurlaşması (Pitting)</strong>.</p>

<div class="muhendislik-kutu">
  <h4>1. Diş Dibi Eğilme Gerilmesi (Lewis & ISO 6336-3 Modeli)</h4>
  <p>Dişe binen teğetsel kuvvet <em>F<sub>t</sub> = (2000 · T) / d</em> [N] olup, diş dibinde oluşan eğilme gerilmesi <em>σ<sub>F</sub></em>:</p>
  <div class="formul-kutu">
    σ<sub>F</sub> = [ F<sub>t</sub> / (b · m) ] · Y<sub>F</sub> · Y<sub>S</sub> · K<sub>A</sub> · K<sub>v</sub> · K<sub>Hβ</sub> ≤ σ<sub>FP</sub>
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>b:</strong> Diş genişliği [mm] (Tipik olarak b = 8 · m ila 12 · m).</li>
    <li><strong>Y<sub>F</sub>:</strong> Diş form faktörü (diş sayısı z'ye bağlıdır; z büyüdükçe diş dibi kalınlaşır, Y<sub>F</sub> küçülür).</li>
    <li><strong>Y<sub>S</sub>:</strong> Gerilme düzeltme / çentik faktörü.</li>
    <li><strong>K<sub>A</sub>:</strong> Uygulama / darbe faktörü (Düzgün elektrik motorunda 1,0–1,25; darbeli içten yanmalı veya pres yükünde 1,5–2,0).</li>
    <li><strong>K<sub>v</sub>:</strong> Dinamik hız faktörü (dişli imalat hassasiyetine ve çevresel hıza bağlı iç dinamik çarpma çarpanı).</li>
    <li><strong>K<sub>Hβ</sub>:</strong> Yüzey yük dağılım faktörü (millerin sehiminden kaynaklanan diş boyunca yük yığılması).</li>
    <li><strong>σ<sub>FP</sub>:</strong> İzin verilen diş dibi yorulma gerilimi (16MnCr5 semente çeliğinde ~430–500 MPa).</li>
  </ul>
</div>

<div class="muhendislik-kutu">
  <h4>2. Diş Yüzeyi Temas Gerilmesi (Pitting / Hertz - ISO 6336-2)</h4>
  <p>İki diş profilinin temas çizgisindeki Hertz basma gerilmesi <em>σ<sub>H</sub></em>:</p>
  <div class="formul-kutu">
    σ<sub>H</sub> = Z<sub>H</sub> · Z<sub>E</sub> · Z<sub>ε</sub> · √ [ (F<sub>t</sub> / (b · d<sub>1</sub>)) · ((u + 1) / u) · K<sub>A</sub> · K<sub>v</sub> · K<sub>Hβ</sub> ] ≤ σ<sub>HP</sub>
  </div>
  <p>Burada <em>u = z<sub>2</sub> / z<sub>1</sub></em> diş oranı, <em>Z<sub>E</sub></em> malzeme elastisite faktörüdür (Çelik-çelik çifti için Z<sub>E</sub> ≈ 189,8 √MPa). Sertleştirilmemiş ıslah çeliklerinde (C45) σ<sub>HP</sub> ≈ 550 MPa iken, sementasyonla sertleştirilmiş ve taşlanmış çeliklerde (16MnCr5, 60 HRC) <strong>σ<sub>HP</sub> ≈ 1500 MPa</strong> seviyesine çıkar!</p>
</div>

<h2>3. Triger Kayış (Timing Belt) Mekaniği ve Boyutlandırma</h2>
<p>Zaman kayışları (triger), dişli çarklar gibi pozitif form kilit ile kaymasız güç iletirken; yağlama gerektirmemesi, hafifliği ve 6–10 metreye varan eksen mesafelerinde çalışabilmesiyle otomasyonda vazgeçilmezdir.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Triger Kayış Profili</th>
      <th>Diş Formu ve Adımı (Pitch)</th>
      <th>Özellikleri ve Boşluk (Backlash)</th>
      <th>Tipik Kullanım Alanları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>T Serisi (T5, T10 - DIN 7721)</strong></td>
      <td>Trapez Diş (Adım: 5 mm, 10 mm)</td>
      <td>Klasik endüstriyel profil. Kasnak yuvasında ~0,2–0,4 mm boşluk vardır; yön değiştiren servo eksenlerinde boşluk yapar.</td>
      <td>Konveyör hatları, tek yönlü tahrikler, paketleme makineleri.</td>
    </tr>
    <tr>
      <td><strong>AT Serisi (AT5, AT10)</strong></td>
      <td>Genişletilmiş Trapez Diş ve Güçlendirilmiş Çelik Kord</td>
      <td>Yüksek diş kesme mukavemeti; özel sıfır boşluklu kasnaklarla (zero-backlash pulley) mükemmel pozisyonlama.</td>
      <td>Lineer kartezyen aktüatörler, Pick & Place üniteleri, yüksek dinamik servo tahrikler.</td>
    </tr>
    <tr>
      <td><strong>HTD Serisi (3M, 5M, 8M, 14M)</strong></td>
      <td>Yuvarlak / Parabolik Diş (Curvilinear)</td>
      <td>Diş dibi gerilme yığılmasını dağıtır; sessiz çalışma; yüksek tork aktarımı.</td>
      <td>Ağır torklu konveyörler, takım tezgahı milleri, otomotiv eksantrik hatları.</td>
    </tr>
  </tbody>
</table>

<h2>4. Akustik Frekans Metodu ile Kayış Ön Gerilme Kontrolü</h2>
<p>Triger kayışlarda aşırı ön gerilme rulmanları ezer ve kayışı koparır; yetersiz ön gerilme ise kalkışta diş atlamasına (ratcheting) ve diş sıyırmasına yol açar.</p>

<div class="muhendislik-kutu">
  <h4>Titreşim Frekansı ve Ön Gerilme Denklemi</h4>
  <p>Kayışın serbest kolu bir gitar teli gibi çekilip bırakıldığında doğal frekansta titreşir. Optik mikrofonlu akustik gerginlik ölçer (örn: Optibelt TT, Gates Sonic Tension Meter) ile ölçülen frekans <em>f</em> [Hz] ile eksenel ön gerilme kuvveti <em>F<sub>v</sub></em> [N] arasındaki bağıntı:</p>
  <div class="formul-kutu">
    F<sub>v</sub> = 4 · m' · (L<sub>serbest</sub>)² · f²
  </div>
  <p>Burada <strong>m'</strong> kayışın metre başına birim kütlesi [kg/m], <strong>L<sub>serbest</sub></strong> iki kasnak arasındaki teğetsel serbest açıklık boyudur [m].</p>
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
        <td><strong>Modül (m)</strong></td>
        <td>Bölüm dairesi çapının diş sayısına oranı (d/z); dişlerin fiziksel büyüklüğünü ve mukavemetini belirleyen temel norm.</td>
      </tr>
      <tr>
        <td><strong>Pitting (Çukurlaşma)</strong></td>
        <td>Diş profil yüzeylerinde tekrarlı yüksek Hertz temas basınçları sonucu yüzey altı yorulmasıyla açılan mikroskobik kraterler.</td>
      </tr>
      <tr>
        <td><strong>Lewis Formülü</strong></td>
        <td>Dişli dişini konsol bir kiriş gibi modelleyerek diş dibindeki maksimum eğilme kırılma gerilmesini hesaplayan analitik yöntem.</td>
      </tr>
      <tr>
        <td><strong>Tooth Jumping (Diş Atlama)</strong></td>
        <td>Yetersiz ön gerilmiş triger kayışın ani ivmelenme torkunda kasnak dişlerinin üzerinden kayarak pozisyon kaybetmesi arızası.</td>
      </tr>
      <tr>
        <td><strong>Kavrama Açısı (Pressure Angle - α)</strong></td>
        <td>Kuvvet iletim çizgisi ile yuvarlanma dairesi teğeti arasındaki açı; standart değeri 20°'dir.</td>
      </tr>
      <tr>
        <td><strong>Akustik Frekans Gerginlik Ölçümü</strong></td>
        <td>Kayışın serbest kolunun titreşim frekansını (Hz) optik sensörle ölçerek ön gerilme kuvvetini Newton hassasiyetinde belirleyen metot.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Dişli eşleşmesinde modül ve kavrama açısı (20°) mutlaka aynı olmalıdır. Eksen mesafesi <em>a = m · (z₁ + z₂) / 2</em> formülüyle belirlenir.</li>
    <li>Dişliler iki kritere göre kontrol edilir: Diş dibi eğilme kırılması (Lewis) ve diş yüzeyi Hertz temas yorulması (Pitting - ISO 6336).</li>
    <li>Sementasyonla sertleştirilmiş dişliler (60 HRC) ıslah edilmiş dişlilere kıyasla temas gerilmesine 3 kat daha dayanıklıdır.</li>
    <li>Hassas çift yönlü servo hareketlerinde boşluksuz AT serisi triger kayışlar tercih edilmelidir.</li>
    <li>Triger kayış montajında ön gerilme el yordamıyla değil, akustik frekans ölçer (F<sub>v</sub> = 4·m'·L²·f²) ile kalibre edilmelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Dişli Geometrisi ve Eksen Mesafesi Hesabı):</strong> Bir redüktör giriş kademesinde modülü m = 2,5 mm olan iki standart silindirik düz dişli çalışacaktır. Pinyon diş sayısı z<sub>1</sub> = 20, çıkış dişli sayısı z<sub>2</sub> = 60'tır. İki mil arasındaki teorik eksen mesafesi a ve pinyon dişlisinin dış çapı d<sub>a1</sub> kaç mm'dir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) a = 100 mm ; d<sub>a1</sub> = 55 mm
      <div class="test-cevap">DOĞRU. <br>
      a = m · (z<sub>1</sub> + z<sub>2</sub>) / 2 = 2,5 · (20 + 60) / 2 = 2,5 · 80 / 2 = 100 mm. <br>
      d<sub>1</sub> = m · z<sub>1</sub> = 2,5 · 20 = 50 mm. <br>
      d<sub>a1</sub> = d<sub>1</sub> + 2 · m = 50 + (2 · 2,5) = 55 mm.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) a = 200 mm ; d<sub>a1</sub> = 50 mm
      <div class="test-cevap">YANLIŞ. Eksen mesafesi 2'ye bölünmemiş, dış çapta ise 2m payı eklenmemiştir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) a = 125 mm ; d<sub>a1</sub> = 60 mm
      <div class="test-cevap">YANLIŞ. Hesaplama hatası.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Triger Kayış Arızası ve Kök Neden):</strong> Bir Kartezyen Pick & Place robotunda X eksenini tahrik eden AT10 çelik kordlu triger kayış, robot ani yön değiştirirken kasnak üzerinden "çat çat" sesleriyle atlama yapmakta ve pozisyonu 30 mm kaçırmaktadır. Cıvatalar kontrol edilmiş ve kayışın gevşek olmadığı "elle basıldığında esnemediği" belirtilmiştir. Ancak akustik frekans ölçer ile yapılan kontrolde frekansın katalog değeri olan 85 Hz yerine 42 Hz olduğu görülmüştür. Bu arızanın kök nedeni ve çözümü nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Motor gücü çok yüksektir, motor küçültülmelidir.
      <div class="test-cevap">YANLIŞ. Motoru küçültmek çevrim hızını düşürür.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Elle dokunarak yapılan gerginlik kontrolü yanıltıcıdır; 42 Hz frekans, ön gerilme kuvvetinin (F ∝ f²) hedefin neredeyse 1/4'ü kadar olduğunu gösterir. Yetersiz ön gerilme sebebiyle ani ivmelenme torkunda kayış kasnaktan tırmanarak diş atlamaktadır (tooth jumping). Çözüm: Gergi vidası sıkılarak akustik cihazla 85 Hz hedef frekansı yakalanana kadar kayış kalibre edilmelidir.
      <div class="test-cevap">DOĞRU. Çelik kordlu triger kayışlar çok rijit olduğundan elle sert hissedilebilir ancak dinamik tork altında diş atlamaması için katalogdaki tam akustik frekansa gerdirilmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Kayış kasnağına gres yağı sürülmelidir.
      <div class="test-cevap">YANLIŞ. Triger kayışa yağ sürmek kayışın anında sıyrılmasına ve kauçuğun bozulmasına yol açar.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Dişli Hasar Modu):</strong> Bir pres besleme redüktöründe ıslah edilmiş C45 çeliğinden (sertlik ~200 HB) imal edilen dişli çarkların diş profillerinde, 3 ay sonra yuvarlanma dairesi boyunca yüzeyden küçük mercimek büyüklüğünde metal parçacıklarının koptuğu ve kraterler (çukurcuklar) oluştuğu görülmüştür. Dişler kökünden kırılmamıştır. Bu hasar modu nedir ve malzeme açısından kalıcı çözüm nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Diş dibi yorulmasıdır; modül büyütülmelidir.
      <div class="test-cevap">YANLIŞ. Hasar diş dibinde değil, yuvarlanma temas yüzeyindedir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tipik bir Diş Yüzeyi Çukurlaşması (Pitting) yorulmasıdır; temas basma gerilmesi (Hertz) malzemenin yüzey yorulma sınırını (σ<sub>HP</sub>) aşmıştır. Kalıcı çözüm: Dişli malzemesi 16MnCr5 veya 8620 semente çeliğine çevrilmeli, diş yüzeyleri sementasyonla 58–62 HRC sertleştirilmeli ve diş profilleri taşlanmalıdır.
      <div class="test-cevap">DOĞRU. Pitting doğrudan temas sertliği ile ilgilidir. Sementasyonla 60 HRC sertleştirilmiş dişliler temas basıncına 3 kat daha fazla dayanır ve pitting oluşumunu tamamen engeller.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Redüktör içine asit dökülmüştür.
      <div class="test-cevap">YANLIŞ. Mekanik temas yorulması kimyasal korozyonla karıştırılmamalıdır.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 9.8: SONLU ELEMANLAR ANALİZİ (FEA) TEMELLERİ
kitap.bolumEkle({
  id: "9-8",
  baslik: "Sonlu Elemanlar Analizi (FEA) Temelleri",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Karmaşık makine parçaları, kaynaklı şaseler ve robot bağlantı aparatlarının sayısal gerilme ve deformasyon simülasyonunu sağlayan Sonlu Elemanlar Analizi (FEA) disiplinini; [K]·{u}={F} temel matris matematiğini, eleman tiplerini (1D, 2D Shell, 3D Solid Tetra/Hex), ağ yakınsaması (mesh convergence) yöntemini, gerilme tekilliklerini (singularities) ve sonuç doğrulama (V&V) kurallarını öğretmektir.</p>
</div>

<h2>1. FEA Matematiksel Temeli: Doğrusal Statik Analiz</h2>
<p>Sonlu Elemanlar Analizi (Finite Element Analysis - FEA), analitik formüllerle çözülmesi imkansız olan karmaşık 3D geometrileri binlerce küçük ve basit geometrik alt elemana (element) böler. Her elemanın köşelerinde <strong>düğüm noktaları (nodes)</strong> bulunur.</p>

<div class="muhendislik-kutu">
  <h4>Temel Matris Denge Denklemi</h4>
  <p>Tüm parçanın davranışı küresel rijitlik matrisi ile çözülür:</p>
  <div class="formul-kutu">
    [K] · {u} = {F}
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>[K] (Global Rijitlik Matrisi):</strong> Parçanın geometrisi ve malzemenin elastisite modülü (E) ile Poisson oranından (ν) türetilen sistem rijitliği.</li>
    <li><strong>{u} (Bilinmeyen Yer Değiştirme Vektörü):</strong> Her bir düğüm noktasının X, Y, Z eksenlerindeki ötelenme ve dönme miktarları. Program önce bu vektörü çözer.</li>
    <li><strong>{F} (Dış Kuvvet Vektörü):</strong> Sisteme uygulanan aktif yükler ve mesnet tepkileri.</li>
  </ul>
  <p><strong>Çözüm Sıralaması:</strong> <em>Önce Yer Değiştirmeler {u} bulunur → Buradan Şekil Değiştirmeler (Strain - ε) hesaplanır → Hooke Yasası (σ = E·ε) ile Gerilmeler (Stress - σ) türetilir.</em></p>
</div>

<h2>2. Eleman Tipleri ve Doğru Modelleme Stratejisi</h2>
<p>Yanlış eleman tipi seçimi, en güçlü simülasyon yazılımında bile %200–500 oranında hatalı sonuç üretir!</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Eleman Sınıfı</th>
      <th>Eleman Geometrisi</th>
      <th>Hangi Geometride Kullanılmalı?</th>
      <th>Kritik Hata ve Tuzaklar</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1D Kiriş / Çubuk (Beam / Truss)</strong></td>
      <td>Tek çizgisel hat; kesit özellikleri (A, I, J) matematiksel tanımlı.</td>
      <td>Büyük boru kuleler, kafes vinçler, bina çatı çelik konstrüksiyonları.</td>
      <td>Lokal kaynak gerilmelerini veya plaka temaslarını çözemez; sadece genel sehim ve çubuk eksenel/eğilme yükünü verir.</td>
    </tr>
    <tr>
      <td><strong>2D Kabuk (Shell)</strong></td>
      <td>Orta yüzey (mid-surface) düzlemsel üçgen veya dörtgen elemanlar; et kalınlığı t yazılımla girilir.</td>
      <td><strong>Sac büküm parçalar, ince cidarlı profiller (et kalınlığı L'nin 1/10'undan az olan saclar).</strong></td>
      <td>İnce saclara katı (solid) eleman atmak computational felakettir. Saclar daima orta yüzeyden 2D Shell ile çözülmelidir.</td>
    </tr>
    <tr>
      <td><strong>3D Katı Tetrahedral (Tet4 - 1. Derece)</strong></td>
      <td>4 düğümlü piramit/üçgen tabanlı katı eleman.</td>
      <td><strong>KESİNLİKLE KULLANILMAMALIDIR!</strong></td>
      <td><strong>Shear Locking (Kayma Kilitlenmesi):</strong> 1. derece tetra elemanlar aşırı rijit davranır; gerilmeleri ve sehimi gerçekte olduğundan 2–3 kat daha düşük (tehlikeli şekilde aşırı güvenli) gösterir!</td>
    </tr>
    <tr>
      <td><strong>3D Katı Tetrahedral (Tet10 - 2. Derece Parabolik)</strong></td>
      <td>10 düğümlü (kenar ortalarında ilave düğümler barındıran) katı eleman.</td>
      <td>Döküm gövdeler, karmaşık işlenmiş bloklar, dövme kollar.</td>
      <td>Eğrilikleri ve eğilme gerilmelerini mükemmel yakalar. Standart otomatik ağ oluşturmanın temelidir.</td>
    </tr>
    <tr>
      <td><strong>3D Katı Hekzahedral (Hex8 / Hex20 - Tuğla / Brick)</strong></td>
      <td>6 yüzeyli kübik tuğla eleman.</td>
      <td>Miller, düzenli prizmatik bloklar, rulman yatakları.</td>
      <td>En yüksek doğruluk ve en düşük işlemci süresi (Altın Standart). Ancak karmaşık geometrilerde ağ bölmesi zordur.</td>
    </tr>
  </tbody>
</table>

<h2>3. Ağ Yakınsaması (Mesh Convergence Study)</h2>
<p>Bir FEA analizinde çıkan maksimum Von Mises gerilmesine doğrudan güvenilemez. Ağın (mesh) yeterince sık olup olmadığını kanıtlamak için <strong>Ağ Yakınsaması Testi</strong> zorunludur:</p>

<div class="muhendislik-kutu">
  <h4>Ağ Yakınsama Prosedürü:</h4>
  <ol>
    <li>Modeli kaba bir ağ ile çöz (Örn: Eleman boyutu e = 10 mm) → Gerilme: σ<sub>1</sub> = 140 MPa.</li>
    <li>Kritik bölgelerdeki eleman boyutunu yarıya indir (e = 5 mm) → Gerilme: σ<sub>2</sub> = 185 MPa.</li>
    <li>Eleman boyutunu tekrar küçült (e = 2,5 mm) → Gerilme: σ<sub>3</sub> = 198 MPa.</li>
    <li>Eleman boyutunu tekrar küçült (e = 1,25 mm) → Gerilme: σ<sub>4</sub> = 201 MPa.</li>
    <li><strong>Yakınsama Kriteri:</strong> Son iki analiz arasındaki gerilme farkı <strong>%2 ila %5'in altına indiğinde</strong> ağ yakınsamış kabul edilir ve 201 MPa değeri gerçek gerilme olarak raporlanır.</li>
  </ol>
</div>

<h2>4. Gerilme Tekilliği (Stress Singularity) Tuzağı</h2>
<p>Acemi analizcilerin en sık düştüğü hata tekilliklerdir:</p>

<div class="uyari-kutu">
  <h4>Tekillik (Singularity) Nedir ve Nasıl Ayırt Edilir?</h4>
  <p>CAD modelinde iç köşelere radyus verilmeyip <strong>keskin 90° iç köşe</strong> bırakıldığında veya bir yüzeye <strong>noktasal bir kuvvet (Point Load)</strong> uygulandığında elastisite teorisine göre temas alanı sıfır olduğundan teorik gerilme sonsuza gider (<em>σ = F / 0 → ∞</em>)!</p>
  <ul>
    <li>Bu keskin köşede ağ boyutunu küçülttükçe gerilme 250 MPa → 450 MPa → 800 MPa → 1800 MPa şeklinde <strong>hiçbir zaman yakınsamadan sonsuza doğru fırlar!</strong></li>
    <li><strong>Mühendislik Teşhisi:</strong> Eleman küçüldükçe gerilme bir değere oturmuyor ve tek bir düğüm noktasında aşırı kızarma yapıyorsa bu bir <strong>Tekilliktir (Yapay Sayısal Hata)</strong>.</li>
    <li><strong>Çözüm:</strong> Keskin iç köşeye gerçek imalat radyusu (örn: R = 2 mm parmak freze yarıçapı) modellenmeli veya yük tek bir noktaya değil, gerçek cıvata temas pulu alanına yayılı basınç olarak uygulanmalıdır.</li>
  </ul>
</div>

<h2>5. Sonuçların Doğrulanması (Verification & Validation - V&V)</h2>
<p>Endüstride bir atasözü vardır: <em>"Garbage In, Garbage Out (Çöp Girerse Çöp Çıkar)."</em> Renkli gerilme grafikleri çok çekici görünse de sınır şartları (mesnetler) yanlış tanımlanmışsa sonuç tamamen hayal ürünüdür.</p>
<ul>
  <li><strong>Kuvvet Dengesi Kontrolü:</strong> Uygulanan toplam dış yük (örn: Z yönünde 10.000 N), mesnetlerdeki reaksiyon kuvvetlerinin toplamına (ΣR<sub>z</sub> = 10.000 N) tamı tamına eşit olmalıdır. Eşit değilse sınır şartları hatalıdır.</li>
  <li><strong>Basit El Hesabı ile Kıyaslama (Sanity Check):</strong> Model ne kadar karmaşık olursa olsun, ana gövde basit bir konsol kirişe (<em>σ = M/W</em>) veya basit çekme çubuğuna (<em>σ = F/A</em>) benzetilerek mertebe kontrolü yapılmalıdır. FEA sonucu el hesabından 10 kat farklı çıkıyorsa analizde mutlaka birim hatası (mm yerine metre, MPa yerine Pa) veya mesnet hatası vardır!</li>
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
        <td><strong>FEA (Finite Element Analysis)</strong></td>
        <td>Karmaşık geometrilerin diferansiyel denklemlerini sayısal matris yöntemleriyle çözen Sonlu Elemanlar Analizi yöntemi.</td>
      </tr>
      <tr>
        <td><strong>Düğüm Noktası (Node)</strong></td>
        <td>Sonlu elemanların köşelerinde ve kenar ortalarında bulunan, yer değiştirme denklemlerinin çözüldüğü ayrık noktalar.</td>
      </tr>
      <tr>
        <td><strong>Shear Locking (Kayma Kilitlenmesi)</strong></td>
        <td>1. derece doğrusal tetra elemanların eğilme altında aşırı yapay rijitlik göstererek gerilmeleri hatalı derecede düşük hesaplaması kusuru.</td>
      </tr>
      <tr>
        <td><strong>Mesh Convergence (Ağ Yakınsaması)</strong></td>
        <td>Eleman boyutları sistematik küçültüldüğünde sonuçların kararlı bir asimptotik değere ulaştığını kanıtlama süreci.</td>
      </tr>
      <tr>
        <td><strong>Stress Singularity (Gerilme Tekilliği)</strong></td>
        <td>Keskin iç köşe veya noktasal yük gibi sıfır alanlı geometrilerde gerilmenin sayısal olarak sonsuza gitmesi hatası.</td>
      </tr>
      <tr>
        <td><strong>Shell Eleman (Kabuk)</strong></td>
        <td>Sac ve ince cidarlı profilleri orta yüzeyinden modelleyerek muazzam çözüm hızı ve doğruluğu sağlayan 2D eleman tipi.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>FEA doğrusal statik analizinde [K]·{u}={F} denklemi çözülerek önce yer değiştirmeler, ardından gerilmeler bulunur.</li>
    <li>Sac parçalar katı (solid) elemanla değil, 2D Shell (kabuk) elemanlarla modellenmelidir. Katı modellerde ise asla 1. derece tetra (Tet4) kullanılmamalı, 2. derece Tet10 veya Hex elemanlar tercih edilmelidir.</li>
    <li>Sonuçların geçerli sayılabilmesi için mutlaka ağ yakınsaması (mesh convergence) çalışması yapılmalıdır.</li>
    <li>Keskin iç köşelerdeki sonsuza giden gerilme tekillikleri gerçek gerilme sanılmamalı; model gerçek imalat radyuslarıyla düzeltilmelidir.</li>
    <li>Her FEA analizi basit bir el hesabı (sanity check) ve reaksiyon kuvveti dengesiyle doğrulanmadan üretime onay verilmemelidir.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Eleman Tipi Seçimi ve Tuzak):</strong> Bir mühendis, 2 mm et kalınlığındaki sacdan lazer kesim ve abkant bükümle yapılmış bir robot montaj braketini analiz etmektedir. CAD modeline otomatik ağ atarak 1. derece 4 düğümlü katı tetra (Tet4) eleman kullanmış ve sac kalınlığı boyunca sadece 1 adet eleman düşmüştür. Analiz sonucunda maksimum gerilme 85 MPa çıkmış ve parça "güvenli" bulunmuştur. Ancak prototip testinde braket ilk zorlamada kalıcı olarak bükülmüştür. Analizdeki ölümcül hata nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Sac kalınlığı boyunca tek sıra Tet4 eleman atılması "Shear Locking (Kayma Kilitlenmesi)" yaratmış; elemanlar yapay olarak aşırı rijit davranarak gerçekte 250 MPa olan eğilme gerilmesini ve sehimi 3 kat düşük (85 MPa) hesaplamıştır. İnce saclar katı elemanla değil, orta yüzeyinden 2D Shell (kabuk) elemanlarla çözülmelidir.
      <div class="test-cevap">DOĞRU. 1. derece tetra elemanlar eğilme deformasyonunu yakalayamaz ve kayma kilitlenmesiyle parçayı aşırı rijit gösterir. Sac parçaların altın standardı 2D Shell modellemedir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Malzeme elastisite modülü 10 kat büyük girilmiştir.
      <div class="test-cevap">YANLIŞ. E modülü doğru girilse bile Tet4 elemanın kinematiği gereği sonuç hatalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Sac parçalar FEA ile analiz edilemez.
      <div class="test-cevap">YANLIŞ. Doğru elemanla (Shell) son derece hassas analiz edilir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Tekillik ve Ağ Yakınsaması):</strong> Bir L-braket analizinde iç köşede radyus bulunmamakta (keskin 90° köşe) ve analizci ağ boyutunu sırasıyla 5 mm, 2 mm, 1 mm ve 0,4 mm yaparak çözdürmüştür. Köşedeki gerilme sırasıyla 180 MPa, 290 MPa, 480 MPa ve 850 MPa çıkmıştır. Tasarımcı "Malzeme akma sınırını fersah fersah aştı, bu köşe derhal kırılır" diyerek parçayı 3 kat kalınlaştırmayı önermiştir. Kıdemli simülasyon mühendisi bu duruma neden itiraz etmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) 850 MPa aslında gerilme değil sıcaklıktır.
      <div class="test-cevap">YANLIŞ. Birim gerilmedir ancak matematiksel bir tekilliktir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Keskin 90° iç köşe bir gerilme tekilliğidir (stress singularity); ağ küçüldükçe teorik gerilme sonsuza gider. Parçayı kalınlaştırmak çözümsüzdür; CAD modelindeki o köşeye imalatta kullanılacak takım radyusu (örn: R = 2,5 mm) verilmeli ve ağ yakınsaması bu radyuslu yüzeyde yeniden test edilmelidir.
      <div class="test-cevap">DOĞRU. Sıfır radyuslu keskin iç köşelerde gerilme asla yakınsamaz. Gerçek hayatta hiçbir parça sıfır radyuslu keskin olamaz. Gerçek radyusu çizip analiz etmek tekilliği çözer.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Ağ boyutunu 0,01 mm'ye kadar küçültmeye devam etmek gerekir.
      <div class="test-cevap">YANLIŞ. Daha da küçültülürse gerilme 5000 MPa'ya çıkar; tekillik ağ küçülterek çözülemez.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (FEA Doğrulama Kuralı - Sanity Check):</strong> Bir simülasyon mühendisi, iki ucu sabit mesnetlenmiş ve ortasına 50 kN yük basan devasa bir çelik pres traversini FEA'da analiz etmiş ve taban plakalarındaki dikey reaksiyon kuvvetlerinin toplamını kontrol etmiştir. Yazılım dikey reaksiyon kuvveti toplamını (ΣR<sub>z</sub>) 22 kN olarak raporlamıştır. Bu durum neyi gösterir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Çelik yükün yarısını yutmuştur.
      <div class="test-cevap">YANLIŞ. Enerji ve kuvvet korunumu gereği statik dengede uygulanan yük mesnet reaksiyonlarına eşit olmak zorundadır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Modelde sınır şartları (boundary conditions) veya temaslar (contacts) ölümcül derecede hatalıdır; kuvvetin 28 kN'lık kısmı boşluğa kaçmakta veya kaybolmaktadır. Analiz sonuçları tamamen geçersizdir ve kuvvet dengesi (ΣF = ΣR = 50 kN) sağlanana kadar analiz güvenilmezdir.
      <div class="test-cevap">DOĞRU. Statik dengede dış yükler ile mesnet tepkileri %100 örtüşmelidir. Kuvvet dengesi tutmuyorsa serbestlik dereceleri veya temas tanımları yanlıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Analiz mükemmeldir, rapora eklenebilir.
      <div class="test-cevap">YANLIŞ. Bu raporla imalata gidilirse felaketle sonuçlanır.</div>
    </div>
  </div>
</div>
`
});
