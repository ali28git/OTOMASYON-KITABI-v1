// MODÜL 3 — Teknik Resim ve Toleranslar (Bölüm 3.8 – 3.10: Tolerans Zinciri, Kaynak Sembolleri, Montaj Resmi ve BOM)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m3', '3-8', `
<p class="giris">Tek tek imal edilen makine parçalarının her biri kendi teknik resim tolerans sınırları içinde kusursuz üretilmiş ve kalite kontrolden geçmiş olabilir; ancak 5 parça üst üste monte edildiğinde aradaki montaj boşluğunun sıfırlanıp mekanizmanın kilitlendiği veya 2 mm kontrolsüz boşluk kalıp yatakların yalpalamaya başladığı sahada çok sık gözlenir. Bu kümülatif geometrik olguya <strong>Tolerans Yığılması (Tolerance Stack-up)</strong> denir. Bu bölümde 1 Boyutlu (1D) döngü kurma metodolojisini, Worst-Case (En Kötü Durum) deterministik analizini ve RSS istatistiksel tolerans zinciri hesaplarını inceliyoruz.</p>

<h2>1 Boyutlu (1D) Tolerans Döngüsü Kurma Metodolojisi</h2>
<ol>
  <li><strong>Kritik Boşluğun (Gap - Y) Tanımlanması:</strong> İki bağımsız parça arasında hedeflenen çalışma boşluğunu (örneğin segman ile rulman iç bileziği arasındaki eksenel emniyet mesafesi) döngünün kapanış vektörü seçin.</li>
  <li><strong>Vektör Döngüsü (Loop Diagram):</strong> Boşluğun bir referans noktasından başlayarak temas eden tüm parçaların işlenmiş fonksiyonel boyutları üzerinden bir uçtan diğer uca kapalı bir vektörel hat çizin:
    <ul>
      <li>Boşluğu <strong>ARTIRAN</strong> ölçü yönleri: <strong>Pozitif Vektör (+)</strong></li>
      <li>Boşluğu <strong>AZALTAN</strong> ölçü yönleri: <strong>Negatif Vektör (−)</strong></li>
    </ul>
  </li>
  <li><strong>Nominal Kapanış Boşluğu:</strong>
    <div class="formul">
    Y<sub>nom</sub> = Σ (Pozitif Boyutlar) − Σ (Negatif Boyutlar)
    </div>
  </li>
</ol>

<h2>İki Temel Hesaplama Yöntemi: Worst-Case vs. RSS</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mühendislik Kriteri</th>
    <th>En Kötü Durum Analizi (Worst-Case / WC)</th>
    <th>İstatistiksel Analiz (RSS - Root Sum of Squares)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Matematiksel Yaklaşım</strong></td>
    <td>Tüm parçaların aynı anda en uç tolerans sınırında üretildiği varsayılır (Aritmetik mutlak toplam).</td>
    <td>Parçaların normal Gauss (Çan eğrisi) dağılımına uyduğu kabul edilir (Kareler toplamının karekökü).</td>
  </tr>
  <tr>
    <td><strong>Tolerans Formülü</strong></td>
    <td><strong>T<sub>toplam</sub> = Σ |T<sub>i</sub>|</strong></td>
    <td><strong>T<sub>toplam</sub> = √( T₁² + T₂² + … + T<sub>n</sub>² )</strong></td>
  </tr>
  <tr>
    <td><strong>Montaj Güvenilirlik Seviyesi</strong></td>
    <td><strong>%100 (Sıfır Hata ve Sıfır Risk Garantisi)</strong></td>
    <td><strong>%99,73 (3-Sigma / Cpk ≥ 1,0)</strong> (~Binde 3 montaj riski)</td>
  </tr>
  <tr>
    <td><strong>Tolerans Sıkılığı ve Maliyet</strong></td>
    <td>Aşırı dar toleranslar gerektirir (Taşlama zorunluluğu, yüksek maliyet).</td>
    <td>Toleransları gevşetir (Daha ucuz CNC tezgâhta seri üretim imkânı).</td>
  </tr>
  <tr>
    <td><strong>Hangi Projelerde Kullanılır?</strong></td>
    <td><strong>Özel otomasyon makineleri, prototipler (1–10 adet), nükleer ve havacılık.</strong></td>
    <td><strong>Büyük seri üretim, otomotiv ana sanayi, beyaz eşya (yılda binlerce adet).</strong></td>
  </tr>
</tbody>
</table>
</div>

<h2>Sayısal Örnek: Mil Üzerinde Rulman ve Mesafe Burcu Paketi</h2>
<p>İki segman yuvası arasına bir yatak kovanı içinde 3 adet eleman dizilmektedir. Hedef eksenel boşluk (Gap):</p>
<ul>
  <li>Gövde Segman Aralığı (L<sub>g</sub>): <code>50,0 ± 0,30 mm</code> (+)</li>
  <li>Rulman A Genişliği (B₁): <code>15,0 ± 0,10 mm</code> (−)</li>
  <li>Mesafe Burcu Boyu (L<sub>b</sub>): <code>20,0 ± 0,20 mm</code> (−)</li>
  <li>Rulman B Genişliği (B₂): <code>14,5 ± 0,10 mm</code> (−)</li>
</ul>
<p><strong>Nominal Boşluk (Y<sub>nom</sub>):</strong> <code>50,0 − (15,0 + 20,0 + 14,5) = 50,0 − 49,5 = <strong>+0,50 mm</strong></code></p>

<div class="iki-sutun">
  <div>
    <h4>Worst-Case (WC) Analiz Sonucu</h4>
    <p><code>T<sub>WC</sub> = 0,30 + 0,10 + 0,20 + 0,10 = <strong>±0,70 mm</strong></code></p>
    <ul>
      <li>Maksimum Boşluk: <code>0,50 + 0,70 = <strong>+1,20 mm</strong></code></li>
      <li>Minimum Boşluk: <code>0,50 − 0,70 = <strong>−0,20 mm (KASINTI / MONTAJ İMKÂNSIZ!)</strong></code></li>
    </ul>
    <p><em>En kötü tolerans durumunda parçalar yuvaya sığmaz; 0,20 mm negatif çakışma oluşur ve segman yuvasına oturamaz!</em></p>
  </div>
  <div>
    <h4>RSS (İstatistiksel) Analiz Sonucu</h4>
    <p><code>T<sub>RSS</sub> = √( 0,30² + 0,10² + 0,20² + 0,10² ) = √( 0,09 + 0,01 + 0,04 + 0,01 ) = √0,15 = <strong>±0,387 mm</strong></code></p>
    <ul>
      <li>Maksimum Boşluk: <code>0,50 + 0,39 = <strong>+0,89 mm</strong></code></li>
      <li>Minimum Boşluk: <code>0,50 − 0,39 = <strong>+0,11 mm (Montaj Başarılı)</strong></code></li>
    </ul>
  </div>
</div>

<h2>Tolerans Yığılmasını Sahada Çözme Mühendisliği</h2>
<ol>
  <li><strong>Ayar Şimleri (Shim Pack / Lamine Şim):</strong> Toleransları mikron seviyesine çekip maliyeti patlatmak yerine, montaj arayüzüne 0,05–0,10 mm kalınlığında soyulabilir paslanmaz şim sacı (DIN 988) koyarak boşluğu montaj anında sıfırlamak.</li>
  <li><strong>Slotlu Delikler ve Ayar Vidaları:</strong> Sabit delikler yerine oval delik (slot) açarak montaj anında komparatörle hizalama serbestliği bırakmak.</li>
  <li><strong>Eşleyerek İşleme (Match Machining / Line Boring):</strong> İki gövdeyi önce birbirine pimleyip cıvatalamak; rulman deliklerini montajlı halde tek bağlamada borwerk tezgâhında delmek.</li>
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
    <td><strong>Tolerance Stack-up (Tolerans Yığılması)</strong></td>
    <td>Bir montaj zincirinde yer alan bağımsız parçaların boyutsal ve geometrik toleranslarının ardışık toplanarak nihai montaj boşluğunu veya kasıntısını belirlemesi analizi.</td>
  </tr>
  <tr>
    <td><strong>Worst-Case Analizi (WC)</strong></td>
    <td>Montajdaki tüm parçaların istatistiksel dağılım gözetilmeksizin aynı anda en olumsuz tolerans sınırında üretildiği varsayımına dayanan deterministik tolerans hesabı.</td>
  </tr>
  <tr>
    <td><strong>RSS (Root Sum of Squares)</strong></td>
    <td>Parça boyutlarının normal çan eğrisi dağılımına uyduğu kabulüyle, bağımsız toleransların karelerinin toplamının karekökü alınarak yapılan istatistiksel tolerans hesabı.</td>
  </tr>
  <tr>
    <td><strong>Ayar Şimi (Shim Ring / DIN 988)</strong></td>
    <td>Eksenel tolerans boşluklarını sıfırlamak amacıyla rulman faturaları ve yatak kapakları arasına konulan 0,05–0,50 mm kalınlığındaki hassas taşlanmış kalibrasyon pulları.</td>
  </tr>
  <tr>
    <td><strong>Line Boring (Eşleyerek Delme)</strong></td>
    <td>Birden fazla yatak gövdesinin montajlı halde tek bir uzun baralama miliyle aynı eksende işlenerek eşmerkezlilik hatasının sıfıra indirildiği imalat tekniği.</td>
  </tr>
  <tr>
    <td><strong>Kapanış Vektörü (Closing Loop)</strong></td>
    <td>1D tolerans zincirinde montaj boşluğunun başlangıç ve bitiş noktalarını birleştiren, hesaplanması hedeflenen kritik boşluk mesafesi.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Tolerans zincirinde parçaların toleransları kümülatif toplanarak montaj boşluğunu bozar veya mekanik kasıntı yaratır.</li>
  <li><strong>Worst-Case (WC):</strong> Az adetli özel makine ve otomasyon projelerinde %100 montaj garantisi için zorunludur.</li>
  <li><strong>RSS Yöntemi:</strong> Seri üretimde parçaların normal dağılımına dayanır; toleransları gevşeterek maliyeti düşürür.</li>
  <li>Toleransları aşırı daraltıp imalatı pahalılaştırmak yerine <strong>ayar şimi (shim)</strong> veya <strong>slotlu delik</strong> tasarlamak en doğru DFM yaklaşımıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Özel bir montaj hücresi tasarlıyorsunuz ve projede toplamda sadece 1 adet makine üretilecektir. Tolerans analizinde Worst-Case mi yoksa RSS mi kullanmalısınız? Neden?</summary>
<div>Kesinlikle <strong>Worst-Case (WC)</strong> kullanılmalıdır! RSS yöntemi binlerce parçalık seri üretimde istatistiksel olasılıklara (parçaların çoğunluğunun nominal değere yakın çıkacağı varsayımına) dayanır. Tek adet üretilen özel bir otomasyon makinesinde istatistik çalışmaz; üretilen parçalar rastlantısal olarak toleransın en ucunda çıkarsa montaj sahada kilitlenir ve teslimat haftalarca aksar.</div></details>
<details><summary>5 adet sac parçanın üst üste cıvatalandığı bir pakette her sacın kalınlık toleransı ±0,2 mm'dir. Bu paketin toplam kalınlık toleransı Worst-case ve RSS'e göre kaç mm olur?</summary>
<div>1. Worst-Case (WC): <code>5 × 0,2 = <strong>±1,0 mm</strong></code>.<br>
2. RSS: <code>√( 5 × 0,2² ) = √( 5 × 0,04 ) = √0,20 ≈ <strong>±0,447 mm</strong></code>.<br>
Seri üretimde istatistiksel hata ±1,0 mm yerine ±0,45 mm civarında toplanır; ancak tekil montajda 1 mm sapma riski mevcuttur.</div></details>
<details><summary>Bir konveyör tamburunda rulman eksenel boşluğunu sıfırlamak için parça toleranslarını ±0,01 mm'ye çekmek mi yoksa 0,5 mm boşluk bırakıp ayar şimi (DIN 988) kullanmak mı daha doğrudur?</summary>
<div>Ayar şimi (shim) kullanmak endüstriyel açıdan katbekat daha ucuz ve güvenilirdir. Gövde ve mil faturalarına ±0,01 mm tolerans vermek silindirik taşlama gerektirir ve parça maliyetini 4 kat artırır. Oysa nominalde 0,5 mm serbest boşluk bırakıp araya standart DIN 988 şim pulu veya soyulabilir lamine şim sacı koymak, montaj teknisyeninin komparatörle tam istenen tatlı sıkılıkta boşluğu sıfırlamasını sağlar.</div></details>
</div>
`);

KITAP.bolum('m3', '3-9', `
<p class="giris">Kaynaklı imalat; ağır otomasyon şaseleri, robot kaideleri ve fikstür karkaslarının temelidir. Ancak kaynakçıya sadece "burayı boydan boya kaynat" demek mühendislik değildir; ya aşırı kaynak çekilip şase muz gibi bükülür ya da yetersiz kaynak atılıp ilk dinamik ivmede kaynak kökünden çatlar. Kaynak dikişinin geometrisi, boğaz kalınlığı, dikiş uzunluğu ve kalite seviyesi <strong>ISO 2553 ve AWS D1.1 Kaynak Sembolleri</strong> ile teknik resimde net olarak tanımlanır.</p>

<h2>ISO 2553 Kaynak Sembolü Anatomisi</h2>
<p>Standart bir kaynak sembolü 4 ana bileşenden oluşur:</p>
<ol>
  <li><strong>Ok Çizgisi (Arrow Line):</strong> Kaynak yapılacak birleşme ara yüzünü doğrudan işaret eder.</li>
  <li><strong>Referans Çizgisi (Reference Line - Sürekli Çizgi):</strong> Sembol ve ölçülerin yerleştirildiği yatay kılavuz çizgisidir.</li>
  <li><strong>Tanımlama Çizgisi (Identification Line - Kesik Çizgi):</strong> ISO 2553 normuna özgüdür. Kaynak dikişinin ok tarafında mı yoksa karşı tarafta mı olduğunu belirler.</li>
  <li><strong>Kuyruk (Tail):</strong> Kaynak prosesi kodu (Örn: <code>135</code> MAG gazaltı, <code>141</code> TIG), elektrot standardı veya kalite sınıfı (ISO 5817 Seviye B).</li>
</ol>

<h2>Ok Tarafı (Arrow Side) vs. Karşı Taraf (Other Side) Kuralı</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Sembolün Çizgideki Konumu (ISO 2553)</th>
    <th>Kaynağın Uygulanacağı Taraf</th>
    <th>Atölye İmalat Kuralı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sürekli Çizginin ÜZERİNDE</strong></td>
    <td><strong>OK TARAFI (Arrow Side)</strong></td>
    <td>Okun ucunun doğrudan temas ettiği sac yüzeyine kaynak çekilir.</td>
  </tr>
  <tr>
    <td><strong>Kesik Çizginin (Tanımlama Çizgisi) ÜZERİNDE</strong></td>
    <td><strong>KARŞI TARAF (Other Side)</strong></td>
    <td>Okun gösterdiği birleşimin arkasındaki / karşı yüzeyine kaynak çekilir.</td>
  </tr>
  <tr>
    <td><strong>Hem Üstte Hem Altta Çift Sembol</strong></td>
    <td><strong>HER İKİ TARAF (Both Sides)</strong></td>
    <td>Profilin veya sacın her iki yanına karşılıklı simetrik dikiş atılır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Temel Kaynak Tipleri ve Sembolleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kaynak Türü</th>
    <th>Sembol</th>
    <th>Boyutlandırma Örneği</th>
    <th>Mühendislik Kullanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Köşe Kaynağı (Fillet Weld)</strong></td>
    <td><strong>△ (Sağ dik üçgen)</strong></td>
    <td><strong>a5</strong> veya <strong>z7</strong></td>
    <td>T-birleşimler ve bindirmeler (Otomasyon şaselerinde %85 kullanılan kaynak).</td>
  </tr>
  <tr>
    <td><strong>Küt / Alın Kaynağı (Square Butt)</strong></td>
    <td><strong>| | (İki paralel dik çizgi)</strong></td>
    <td>s3</td>
    <td>İnce sacların (t ≤ 4 mm) ağız açılmadan alın alına kaynatılması.</td>
  </tr>
  <tr>
    <td><strong>Tek V Alın Kaynağı (Single-V)</strong></td>
    <td><strong>V</strong></td>
    <td>s10</td>
    <td>Kalın levhaların (t &gt; 6 mm) tam nüfuziyetli kaynatılması için V açılması.</td>
  </tr>
  <tr>
    <td><strong>Çift V / X Kaynağı (Double-V)</strong></td>
    <td><strong>X</strong></td>
    <td>s20</td>
    <td>Ağır levhalarda distorsiyonu önlemek için her iki yandan simetrik kaynatma.</td>
  </tr>
  <tr>
    <td><strong>Punta / Direnç Kaynağı (Spot Weld)</strong></td>
    <td><strong>◯ (Daire)</strong></td>
    <td>(16)</td>
    <td>Sac kabin ve muhafaza panellerinin punta kaynağıyla birleştirilmesi.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Dikiş Kalınlığı: Boğaz Kalınlığı (a) vs. Kenar Uzunluğu (z)</h2>
<div class="iki-sutun">
  <div>
    <h4>Boğaz Kalınlığı "a" (Avrupa / ISO Standardı)</h4>
    <p>Kaynak kökünden dikiş yüzeyine inen en kısa dik mesafedir (Üçgenin hipotenüs yüksekliği).</p>
    <ul>
      <li>Teknik resimde: <code>a4</code>, <code>a6</code> şeklinde yazılır.</li>
      <li><strong>Mukavemet Hesabı:</strong> Kaynak gerilme hesaplarında taşıyıcı alan daima <strong>a kesitidir</strong>!</li>
    </ul>
  </div>
  <div>
    <h4>Kenar / Bacak Uzunluğu "z" (Amerika / AWS Standardı)</h4>
    <p>Kaynağın sac yüzeyine yapıştığı dikey ve yatay bacak uzunluğudur (Üçgenin dik kenarı).</p>
    <ul>
      <li>Teknik resimde: <code>z6</code>, <code>z8</code> şeklinde yazılır.</li>
      <li><strong>Dönüşüm Bağıntısı:</strong>
        <div class="formul">
        a = z · cos(45°) = z · 0,707 &nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp; z ≈ 1,414 · a
        </div>
        Örn: <code>a5 ≈ z7</code> (a = 5 mm boğaz kalınlığı için kaynak bacağı 7 mm doldurulmalıdır).
      </li>
    </ul>
  </div>
</div>

<h2>Özel Ek Semboller ve Kesintili Kaynak</h2>
<ul>
  <li><strong>Çevre Kaynağı (Daire Sembolü - ◯):</strong> Ok ile referans çizgisinin kırılma noktasına konan bir daire, birleşimin kapalı tüm konturu boyunca (örneğin borunun etrafı komple) kaynak yapılacağını emreder.</li>
  <li><strong>Saha / Şantiye Kaynağı (Bayrak Sembolü - ⚑):</strong> Parçanın imalat atölyesinde değil, müşteri tesisinde montaj sahasında kaynatılacağını belirtir.</li>
  <li><strong>Kesintili Kaynak (Intermittent Weld):</strong> Sürekli dikiş yerine aralıklı dikiş. Örn: <code>a4 10 × 50 (100)</code> → 4 mm boğaz kalınlığında, 50 mm boyunda 10 adet dikiş; dikiş merkezleri arası hatve 100 mm.</li>
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
    <td><strong>ISO 2553</strong></td>
    <td>Teknik çizimlerde kaynaklı, lehimli ve sert lehimli birleştirmelerin sembolik gösterim kurallarını belirleyen uluslararası standart norm.</td>
  </tr>
  <tr>
    <td><strong>Boğaz Kalınlığı (a-Ölçüsü)</strong></td>
    <td>Köşe kaynak dikişinin kök noktası ile dış hipotenüs yüzeyi arasındaki en kısa dik mesafe. Statik ve dinamik mukavemet hesaplarında esas alınan efektif kesit.</td>
  </tr>
  <tr>
    <td><strong>Bacak Boyu (z-Ölçüsü)</strong></td>
    <td>Köşe kaynağının birleşen sac yüzeyleri üzerindeki temas kenar uzunluğu (AWS normu). a = 0,707 · z bağıntısıyla boğaz kalınlığına bağlanır.</td>
  </tr>
  <tr>
    <td><strong>Çevre Kaynağı (All-Around)</strong></td>
    <td>Kaynak sembolünün kırılma noktasındaki daire (◯) sembolü; dikişin boru, flanş veya profilin tüm kapalı çevresi boyunca kesintisiz dönüleceğini emreder.</td>
  </tr>
  <tr>
    <td><strong>Saha Kaynağı (Field Weld)</strong></td>
    <td>Kaynak sembolünün kırılma noktasındaki bayrak (⚑) sembolü; birleştirmenin imalat atölyesinde değil, kurulum şantiyesinde yapılacağını tanımlar.</td>
  </tr>
  <tr>
    <td><strong>Kesintili Kaynak (Intermittent)</strong></td>
    <td>Isı girdisini ve distorsiyonu azaltmak amacıyla belirli uzunluktaki kaynak dikişlerinin belirli adımlarla (hatve) aralıklı olarak çekilmesi.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>ISO 2553'te referans çizgisi üzerinde sürekli ve kesik çift çizgi vardır: Sürekli çizgideki sembol <strong>ok tarafını</strong>, kesik çizgideki <strong>karşı tarafı</strong> gösterir.</li>
  <li>Avrupa'da kaynak kalınlığı <strong>boğaz kalınlığı (a)</strong> ile ölçülür; Amerika'da kenar uzunluğu (z) kullanılır (a = 0,707 × z).</li>
  <li>Kesişim noktasındaki <strong>daire (◯)</strong> profilin tüm çevresi boyunca kaynak yapılacağını; <strong>bayrak (⚑)</strong> montaj sahasında kaynaklanacağını gösterir.</li>
  <li>Aşırı kaynak dikişinden ve distorsiyondan kaçınmak için <code>a ≤ 0,7 × t<sub>min</sub></code> kuralı uygulanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Teknik resimde bir T-birleşim üzerinde <code>a5</code> köşe kaynağı sembolü vardır. Atölyedeki kaynakçı kumpasla kaynak bacağını ölçtüğünde 5 mm görüp "kaynak tamam" demiştir. Bu kaynak uygun mudur?</summary>
<div>HAYIR, kaynak yetersizdir! Resimde "a5" yazmaktadır, yani boğaz kalınlığı (efektif taşıyıcı yükseklik) 5 mm olmalıdır. Kaynak bacağı (z) 5 mm ise, boğaz kalınlığı <code>a = 5 × 0,707 = 3,53 mm</code> olur! Bu kaynak hedeflenen mukavemetin %30 altındadır. Boğaz kalınlığının 5 mm olması için kaynakçının bacak boyunu en az <code>z = 5 / 0,707 ≈ 7,1 mm</code> doldurması gerekir.</div></details>
<details><summary>Kaynak sembolünün kırılma noktasındaki küçük bayrak (⚑) ne anlama gelir? Bu parçanın atölyedeki kaynak sırası nasıl planlanmalıdır?</summary>
<div>Bayrak sembolü <strong>Saha Kaynağı (Field Weld)</strong> demektir. Parçanın imalat atölyesinde kaynatılmayacağını; makinenin müşteri fabrikasında kurulurken şantiyede yerinde kaynatılacağını belirtir. Dolayısıyla atölyede bu kaynak yapılamaz ve o bölgede talaşlı imalat planlanıyorsa montaj sırası ona göre kurgulanmalıdır.</div></details>
<details><summary>4 mm et kalınlığındaki kutu profil şasenin birleşimine genç bir tasarımcı <code>a8</code> köşe kaynağı yazmıştır. İmalat ustası bu resmi görünce neden itiraz eder?</summary>
<div>4 mm sacın birleşimine 8 mm boğaz kalınlığı (yaklaşık 11,5 mm bacak boyu) kaynak çekmeye çalışmak, sacın kendi kalınlığının iki katından fazla devasa bir dikiş demektir. Kaynakçı bu dikişi doldurmak için defalarca paso atmak zorunda kalır; profili aşırı ısıtarak sacı deler veya şaseyi tamamen çarpıtarak çarpık (distorsiyonlu) bir hurdaya çevirir. 4 mm profil için doğru kaynak <code>a ≈ 0,7 × 4 = 2,5 … 3 mm</code> olmalıdır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-10', `
<p class="giris">Yüzlerce parçadan ve alt sistemden oluşan endüstriyel bir otomasyon hücresinde tasarımın başarısı sadece tekil parçaların toleranslarıyla değil; bu parçaların hangi hiyerarşiyle bir araya geleceğini anlatan <strong>Montaj Resmi (Assembly Drawing)</strong> ve her bir cıvatanın, sensörün, rulmanın sipariş kodunu eksiksiz listeleyen <strong>Malzeme Listesi (BOM - Bill of Materials)</strong> ile ölçülür. Eksik veya hatalı hazırlanmış bir BOM tablosu, montaj hattını haftalarca durdurabilir ve binlerce Euro'luk yanlış satın alma siparişlerine yol açabilir. Bu bölümde montaj hiyerarşisini, balonlama kurallarını, BOM mimarisini ve Mühendislik Değişiklik Yönetimini (ECN/ECO) inceliyoruz.</p>

<h2>Montaj Resmi Türleri ve Hiyerarşik Yapı</h2>
<ol>
  <li><strong>Genel Yerleşim Montajı (General Layout Assembly):</strong> Makinenin toplam dış boyutlarını (U × G × Y), operatör erişim alanlarını, bakım kapağı açılma yarıçaplarını, elektrik/pnömatik besleme giriş noktalarını ve zemin ankraj deliklerini tanımlayan üst düzey paftadır. Detaylı üretim toleransı içermez; tesis yerleşimini hedefler.</li>
  <li><strong>Alt Montaj Resimleri (Sub-Assemblies):</strong> Makinenin modüler istasyonlarıdır (Örn: Besleme Konveyörü Montajı, 3 Eksen Kartezyen Robot Montajı, Döner İndeks Tablası Montajı). Atölyede o modülü toplayacak teknisyenin kullandığı ana çalışma resmidir.</li>
  <li><strong>Patlatılmış Montaj Görünüşü (Exploded View):</strong> Parçaların birbirine hangi sırayla, hangi yönden ve hangi aletlerle takılacağını gösteren 3D izometrik montaj kılavuzudur (Kullanım ve bakım el kitapları için vazgeçilmezdir).</li>
</ol>

<h2>Balonlama (Balloons) ve Poz Numaralandırma Kuralları</h2>
<p>Montaj resminde her bileşen bir kılavuz çizgi ve ucundaki daire (balon) içindeki <strong>Poz Numarası (Item Number)</strong> ile tanımlanır (ISO 6433):</p>
<ul>
  <li><strong>Hizalama Disiplini:</strong> Balonlar resmin etrafına rastgele saçılmaz. Saat yönünde (veya tersinde) ya da yatay/dikey düzgün grid hatları üzerinde hizalanarak dizilir.</li>
  <li><strong>Kesişen Çizgi Yasağı:</strong> Balon kılavuz çizgileri birbirini kesinlikle kesmemelidir! Çizgilerin kesişmesi montaj teknisyeninin göz yanılmasıyla yanlış parçayı takmasına yol açar.</li>
  <li><strong>Standart Bağlantı Elemanı Gruplama:</strong> Bir cıvata, yaylı rondela, düz pul ve somun dizilimi varsa; 4 ayrı balon yerine tek bir kılavuz çizgisi üzerine dikey sıralanmış ortak balon grubu asılabilir.</li>
</ul>

<h2>Malzeme Listesi (BOM) Tablo Mimarisi ve Standart Sütunlar</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Poz No</th>
    <th>Bileşen Tanımı</th>
    <th>Parça / Çizim Numarası</th>
    <th>Adet</th>
    <th>Malzeme</th>
    <th>Tedarik Türü</th>
    <th>Standart / Sipariş Kodu / Tedarikçi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1</strong></td>
    <td>Ana Şase Karkası</td>
    <td>OTM-100-01-001</td>
    <td>1</td>
    <td>S235JR</td>
    <td><strong>İmalat (Make)</strong></td>
    <td>Kaynaklı ve CNC İşlenmiş Gövde</td>
  </tr>
  <tr>
    <td><strong>2</strong></td>
    <td>Lineer Kılavuz Ray</td>
    <td>OTM-100-01-002</td>
    <td>2</td>
    <td>100Cr6</td>
    <td><strong>Satın Alma (Buy)</strong></td>
    <td>THK SHS25V1SS+640L</td>
  </tr>
  <tr>
    <td><strong>3</strong></td>
    <td>Merkezleme Pimi</td>
    <td>OTM-100-01-003</td>
    <td>4</td>
    <td>100Cr6 Sert</td>
    <td><strong>Standart (Norm)</strong></td>
    <td>DIN 7979-D Ø8x30 - m6 (Çekme Dişli)</td>
  </tr>
  <tr>
    <td><strong>4</strong></td>
    <td>Endüktif Yaklaşım Sensörü</td>
    <td>OTM-100-01-004</td>
    <td>2</td>
    <td>Pirinç / PBT</td>
    <td><strong>Satın Alma (Buy)</strong></td>
    <td>Sick IME12-04BPSZW2S (M12 PNP NO)</td>
  </tr>
  <tr>
    <td><strong>5</strong></td>
    <td>Silindirik Başlı İnbus Cıvata</td>
    <td>OTM-100-01-005</td>
    <td>16</td>
    <td>Çelik 8.8 Galvaniz</td>
    <td><strong>Standart (Norm)</strong></td>
    <td>ISO 4762 (DIN 912) M6x25</td>
  </tr>
</tbody>
</table>
</div>

<h2>Mühendislik Değişiklik Yönetimi ve Revizyon Bloğu (ECN / ECO)</h2>
<div class="kutu tehlike"><span class="kb">Revizyonsuz Teknik Resim Sahaya İnmez!</span>
Bir makine parçası tasarlandıktan sonra prototip montajında veya testte bir hata çıkar ve delik çapı M6'dan M8'e büyütülür. Eğer bu değişiklik sadece 3D modelde yapılıp teknik resme <strong>Revizyon Kaydı (ECN / ECO)</strong> işlenmezse:
<ol>
  <li>Satın alma eski resimden sipariş geçer; atölye eski parçayı işler.</li>
  <li>Sahada yeni cıvata eski deliğe girmez; montaj durur ve binlerce liralık hurda oluşur!</li>
</ol>
<strong>Kural:</strong> Teknik resmin sağ üst köşesindeki Revizyon Tablosuna mutlaka şu formatta kayıt düşülmelidir:
<code>Rev: B | Değişiklik: Motor flanş delikleri M6'dan M8'e büyütüldü (ECO-1042) | Tarih: 28.10.2026 | Çizen: A.K. | Onay: M.Y.</code></div>

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
    <td><strong>BOM (Bill of Materials)</strong></td>
    <td>Bir montajı oluşturan tüm mekanik bileşenlerin, standart parçaların, satın alma kodlarının, malzemelerin ve miktarlarının listelendiği ürün ağacı tablosu.</td>
  </tr>
  <tr>
    <td><strong>Patlatılmış Montaj (Exploded View)</strong></td>
    <td>Montajdaki tüm parçaların eksenel montaj yörüngeleri boyunca birbirinden ayrılmış olarak gösterildiği izometrik kılavuz görünüşü.</td>
  </tr>
  <tr>
    <td><strong>Balonlama (Item Balloons)</strong></td>
    <td>Montaj teknik resminde parçaları BOM tablosundaki poz numaralarıyla eşleştiren numaralandırılmış daire ve kılavuz çizgi sistemi (ISO 6433).</td>
  </tr>
  <tr>
    <td><strong>ECO / ECN</strong></td>
    <td>Engineering Change Order / Notice. Tasarımda yapılan geometrik veya boyutsal bir değişikliğin resmi olarak belgelendiği ve onaylandığı kurumsal mühendislik emri.</td>
  </tr>
  <tr>
    <td><strong>Make vs. Buy (İmalat vs. Satın Alma)</strong></td>
    <td>BOM tablosunda bir parçanın fabrika içinde talaşlı/kaynaklı imal mi edileceğini yoksa katalogdan ticari hazır ürün olarak mı satın alınacağını belirten kod.</td>
  </tr>
  <tr>
    <td><strong>Alt Montaj (Sub-Assembly)</strong></td>
    <td>Ana makine şasesinden bağımsız olarak toplanabilen, test edilebilen ve ana montaja tek bir modül olarak bağlanan bileşen grubu.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Montaj resimleri Genel Yerleşim, Alt Montaj ve Patlatılmış (Exploded) Montaj hiyerarşisinde hazırlanır.</li>
  <li>Balon numaraları resmin etrafında saat yönünde hizalı dizilmeli ve kılavuz çizgileri birbirini asla kesmemelidir.</li>
  <li>Malzeme Listesinde (BOM) her parçanın <strong>İmalat mı Satın Alma mı</strong> olduğu, net tedarikçi sipariş kodu veya DIN/ISO standardı mutlaka yazılmalıdır.</li>
  <li>Teknik resimdeki her güncelleme antetteki <strong>Revizyon Bloğuna (Rev A, B, C...)</strong> gerekçesiyle işlenmelidir; revizyonsuz çizim atölyeyi kaosa sürükler.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir BOM tablosunda standart bir cıvata için Parça Kodu sütununa sadece "M8 Cıvata" yazılmıştır. Bu gösterim montaj ve satın alma açısından neden kabul edilemez?</summary>
<div>M8 cıvatanın yüzlerce çeşidi vardır: İnbus başlı mı (DIN 912), altıköşe başlı mı (DIN 933), havşa başlı mı (DIN 7991)? Boyu kaç mm'dir (20 mm mi, 60 mm mi)? Mukavemet sınıfı nedir (8.8 mi, 10.9 mu, A2 paslanmaz mı)? Kaplaması var mıdır (siyah oksit mi, galvaniz mi)? Satın alma bu bilgiyle sipariş açamaz veya yanlış cıvata alır. BOM'da tam standart kodu yazılmalıdır: <code>ISO 4762 M8x35 - 8.8 Galvaniz</code>.</div></details>
<details><summary>Büyük bir makine montaj resminde balon çizgilerinin birbirini kesmesi neden teknik resim standartlarına göre kesinlikle yasaktır?</summary>
<div>Atölye ortamında basılı teknik resimleri okuyan montaj teknisyeni, kesişen çizgileri takip ederken göz yanılması yaşar. Örneğin bir sensör braketinin balonunu takip ederken çizgiler kesiştiği için ucu cıvataya gidebilir; yanlış parçaya yanlış numara eşleşir, montaj sırası ve parça yerleşimi hatalı yapılır. Çizgiler birbirine paralel veya kırılmadan doğrudan kendi parçasına gitmelidir.</div></details>
<details><summary>CATIA'da montaj yaparken standart satın alma parçalarını (rulman, cıvata, pnömatik silindir) Part Number olarak nasıl isimlendirmelisiniz?</summary>
<div>CATIA'da varsayılan isim "Part1", "Part2" gibi anlamsızdır. Satın alma parçalarında Part Number doğrudan <strong>üretici sipariş kodu</strong> yapılmalıdır (Örn: <code>SKF_6204_2RSH</code> veya <code>FESTO_DSNU_25_50_PPV_A</code>). Böylece CATIA'dan otomatik BOM tablosu oluşturulduğunda hiçbir manuel düzeltme gerekmeden satın alma listesi saniyeler içinde eksiksiz ve hatasız üretilir.</div></details>
</div>

<div class="ozet-kutu" style="border-left-color: #059669; background: rgba(5,150,105,0.06);">
<h3>Modül 3 Büyük Mühendislik Kapanış Özeti</h3>
<ul>
  <li>Antetteki <strong>1. Açı / 3. Açı projeksiyon konisini</strong> daima kontrol et; ters kalıp facialarını önle.</li>
  <li>Özel tolerans yazmadığın her ölçü <strong>ISO 2768-mK</strong> genel toleransına tabidir; kaynaklı şaselerde <strong>ISO 13920</strong> kullan.</li>
  <li>Talaşlı imalatta kural: <strong>Esas Delik (H7)</strong> sabittir; kayan geçme <code>H7/g6</code>, montaj geçmesi <code>H7/h6</code>, rulman mili <code>H7/k6</code>, pres sıkı geçme <code>H7/p6</code>'dır.</li>
  <li>Düzlemsellik ve silindiriklik asla datum almaz; cıvata deliklerinde konum toleransı (<code>⌖</code>) ve <strong>MMC (Ⓜ) bonus toleransı</strong> ile maliyeti düşür.</li>
  <li>Dinamik sızdırmazlıkta Ra yetmez, <strong>Rz</strong> kontrol et. Yataklarda aşırı dar tolerans yerine <strong>ayar şimi (shim)</strong> tasarla.</li>
  <li>Kaynakta kalınlık mukavemet demek değildir; <code>a ≤ 0,7 × t</code> kuralıyla distorsiyonu önle. BOM'da satın alma kodlarını eksiksiz belirt.</li>
</ul></div>
`);
