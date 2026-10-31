// MODÜL 3 — Teknik Resim ve Toleranslar (Bölüm 3.5 – 3.7: GD&T Temeller, Datum ve Konum Toleransı MMC/Bonus, Yüzey Pürüzlülüğü)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m3', '3-5', `
<p class="giris">Geleneksel artı-eksi (±) koordinat toleranslandırması yalnızca parçanın iki noktası arasındaki doğrusal mesafeyi sınırlar; ancak parçanın düz mü, eğik mi, konik mi yoksa paralel mi olduğunu kontrol edemez. Kalınlığı 10 ± 0,1 mm olan bir plaka muz gibi bükük üretilse dahi kumpas ölçümünde tolerans içinde kalabilir fakat montajda diğer düzleme asla oturmaz! Bu boyutsal açmazı çözen ve parçanın gerçek montaj fonksiyonunu garanti eden uluslararası mühendislik dili <strong>Geometrik Boyutlandırma ve Toleranslandırma (GD&T - ISO 1101 / ASME Y14.5)</strong> standardıdır.</p>

<h2>GD&T Tolerans Çerçevesi (Feature Control Frame) Anatomisi</h2>
<p>Teknik resimde geometrik kontroller dikdörtgen bir çerçeve içinde hücre hücre okunur:</p>
<div class="kutu not" style="font-family: monospace; font-size: 1.1em; letter-spacing: 1px;">
[ ⟂ | Ø 0.05 Ⓜ | A | B ]
</div>
<ul>
  <li><strong>1. Bölme (Geometrik Karakter Sembolü):</strong> Kontrolün türünü tanımlar (Örn: <code>⟂</code> Diklik, <code>⌖</code> Konum, <code>⏢</code> Düzlemsellik, <code>∥</code> Paralellik).</li>
  <li><strong>2. Bölme (Tolerans Bölgesi ve Modifiyer):</strong> İzin verilen geometrik sapma alanı. Başında <code>Ø</code> varsa tolerans hacmi silindiriktir (3 boyutlu hacim). Yanındaki <code>Ⓜ</code> sembolü Maksimum Malzeme Koşulunu (MMC) belirtir.</li>
  <li><strong>3., 4., 5. Bölmeler (Datum Öncelik Sırası):</strong> Ölçümün referans alacağı yüzeyler hiyerarşisi (Birincil Datum <strong>A</strong>, İkincil Datum <strong>B</strong>, Üçüncül Datum <strong>C</strong>).</li>
</ul>

<h2>14 Temel Geometrik Toleransın Karşılaştırmalı Matrisi (ISO 1101)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Tolerans Grubu</th>
    <th>Tolerans Karakteri ve Sembolü</th>
    <th>Datum Referansı Gerekir mi?</th>
    <th>Tolerans Bölgesi Geometrisi</th>
    <th>Fonksiyonel Kullanım ve Ölçüm Metodu</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="4"><strong>Form Toleransları<br><small>(Şekil Kontrolü)</small></strong></td>
    <td><strong>Düzlemsellik (Flatness - ⏢)</strong></td>
    <td><strong>HAYIR (Asla datum almaz!)</strong></td>
    <td>Birbirine paralel iki teorik düzlem arasındaki mesafe (t)</td>
    <td>Makine tablaları, sızdırmazlık flanşları, lineer ray oturma yüzeyleri. Granit pleyt üzerinde komparatörle taranır.</td>
  </tr>
  <tr>
    <td><strong>Doğrusallık (Straightness - ⎯)</strong></td>
    <td><strong>HAYIR</strong></td>
    <td>İki paralel doğru veya silindirik tüp</td>
    <td>Piston milleri, uzun kılavuz şaftları, lineer ray sırt çizgileri.</td>
  </tr>
  <tr>
    <td><strong>Dairesellik / Yuvarlaklık (Circularity - ○)</strong></td>
    <td><strong>HAYIR</strong></td>
    <td>Aynı kesit düzleminde eşmerkezli iki daire arasındaki radyal aralık</td>
    <td>Rulman oturma çapları, segman yuvaları (ovallik ve üçgenleşme kontrolü).</td>
  </tr>
  <tr>
    <td><strong>Silindiriklik (Cylindricity - ⌭)</strong></td>
    <td><strong>HAYIR</strong></td>
    <td>Eşmerkezli iki silindir arasındaki radyal aralık</td>
    <td>Yuvarlaklık, doğrusallık ve konikliği tek seferde kontrol eden en kapsamlı ve en pahalı form kontrolü.</td>
  </tr>
  <tr>
    <td rowspan="3"><strong>Yönelim Toleransları<br><small>(Orientation)</small></strong></td>
    <td><strong>Diklik (Perpendicularity - ⟂)</strong></td>
    <td><strong>EVET (Zorunlu)</strong></td>
    <td>Datuma 90° dik iki paralel düzlem veya silindirik tüp</td>
    <td>Mil faturası (rulman omzu), gövde montaj flanşları, kılavuz pim delikleri.</td>
  </tr>
  <tr>
    <td><strong>Paralellik (Parallelism - ∥)</strong></td>
    <td><strong>EVET (Zorunlu)</strong></td>
    <td>Datuma paralel iki teorik düzlem arasındaki mesafe</td>
    <td>Çift lineer kılavuz ray montaj kanalları (iki rayın birbirine paralelliği).</td>
  </tr>
  <tr>
    <td><strong>Açısallık (Angularity - ∠)</strong></td>
    <td><strong>EVET (Zorunlu)</strong></td>
    <td>Datuma temel açıyla duran iki paralel düzlem</td>
    <td>Kırlangıç kuyruğu kızaklar, konik merkezleme yuvaları.</td>
  </tr>
  <tr>
    <td rowspan="3"><strong>Konum Toleransları<br><small>(Location)</small></strong></td>
    <td><strong>Konum (Position - ⌖)</strong></td>
    <td><strong>EVET (Kural olarak)</strong></td>
    <td>Teorik eksen etrafında <strong>Øt çapında silindirik hacim</strong></td>
    <td>Cıvata delikleri, merkezleme pim delikleri (En yaygın GD&T kontrolü).</td>
  </tr>
  <tr>
    <td><strong>Eşmerkezlilik (Concentricity - ◎)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Datum eksenine göre kütle merkezleri simetrisi</td>
    <td>Yüksek devirli balans milleri (Yerini artık Salgı toleransına bırakmıştır).</td>
  </tr>
  <tr>
    <td><strong>Simetri (Symmetry - ⌯)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Datum merkez düzlemine göre iki paralel düzlem</td>
    <td>Millerdeki kama kanallarının mil eksenine göre tam simetrik açılması.</td>
  </tr>
  <tr>
    <td rowspan="2"><strong>Salgı Toleransları<br><small>(Runout)</small></strong></td>
    <td><strong>Dairesel Salgı (Circular Runout - ↗)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Mil 360° dönerken komparatör ibresinin tek kesitteki maksimum sapması</td>
    <td>Dönen kasnak yanakları, fren diskleri, kaplin oturma faturaları.</td>
  </tr>
  <tr>
    <td><strong>Toplam Salgı (Total Runout - ⌿↗)</strong></td>
    <td><strong>EVET</strong></td>
    <td>Mil dönerken komparatör boyuna kaydırılır; tüm silindir taranır</td>
    <td>Spindle iş milleri, yüksek hızlı balanslı baskı merdaneleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Düzlemsellik (Flatness) ile Paralellik (Parallelism) Arasındaki Hayati Ayrım</h2>
<div class="kutu uyari"><span class="kb">En Sık Karıştırılan Metroloji Hatası!</span>
Bir plakanın her iki yüzü birbirine kusursuz paralel olabilir (plaka kalınlığı her köşede mikrometre ile tam 20,00 mm ölçülebilir); ancak plaka bükülmüşse <strong>paralellik mükemmelken düzlemsellik felakettir!</strong><br><br>
Tersine, bir plakanın üst yüzeyi granit pleyt üzerinde ayna gibi kusursuz işlenmiş olabilir (Düzlemsellik 0,01 mm); fakat plakanın alt yüzeyi açılı kesilmişse <strong>düzlemsellik mükemmelken paralellik tamamen bozuktur</strong>.<br><br>
<strong>Altın Kural:</strong> Tek bir yüzeyin kendi içindeki dalgalanmasını ve eğriliğini kontrol etmek istiyorsanız <strong>Düzlemsellik (⏢)</strong>; iki farklı yüzeyin birbirine göre duruşunu kontrol edecekseniz birini Datum seçip diğerine <strong>Paralellik (∥)</strong> vermelisiniz.</div>

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
    <td><strong>Feature Control Frame (Tolerans Çerçevesi)</strong></td>
    <td>Geometrik karakter sembolünü, tolerans değerini, malzeme modifiyerini ve datum referanslarını içeren dikdörtgen mühendislik gösterim kutusu.</td>
  </tr>
  <tr>
    <td><strong>Düzlemsellik (Flatness - ⏢)</strong></td>
    <td>Bir yüzeyin tüm noktalarının, birbirinden 't' tolerans mesafesi kadar ayrılmış iki paralel teorik düzlem arasında kalması zorunluluğu (ISO 1101). Datum almaz.</td>
  </tr>
  <tr>
    <td><strong>Paralellik (Parallelism - ∥)</strong></td>
    <td>Bir yüzeyin veya eksenin, datum referans düzlemine tam paralel olan iki teorik düzlem arasında kalma şartı. Mutlaka datum referansı gerektirir.</td>
  </tr>
  <tr>
    <td><strong>Diklik (Perpendicularity - ⟂)</strong></td>
    <td>Bir yüzeyin, eksenin veya doğrunun datum referans düzlemine tam 90° dik olan tolerans sınırları içinde kalması durumu.</td>
  </tr>
  <tr>
    <td><strong>Dairesel Salgı (Circular Runout - ↗)</strong></td>
    <td>Parça datum ekseni etrafında 360° döndürülürken sabit bir radyal veya eksenel komparatörün gösterdiği maksimum ibre salınım farkı (TIR).</td>
  </tr>
  <tr>
    <td><strong>Toplam Salgı (Total Runout - ⌿↗)</strong></td>
    <td>Parça dönerken komparatörün tüm yüzey boyunca eksenel kaydırılmasıyla hem daireselliği, hem doğrusallığı hem de eksen kaçıklığını tek seferde ölçen kümülatif kontrol.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Geleneksel ± toleranslar form hatalarını (eğrilik, ovallik, koniklik) yakalayamaz; GD&T fonksiyonel montajı garanti eder.</li>
  <li><strong>Form toleransları (Düzlemsellik, Doğrusallık, Yuvarlaklık, Silindiriklik) asla datum almaz</strong>; kendi kendini kontrol eder.</li>
  <li>Yönelim ve konum toleransları (Diklik, Paralellik, Konum, Salgı) <strong>mutlaka bir datum referansına</strong> ihtiyaç duyar.</li>
  <li>Döner millerde balans ve salgıyı kontrol etmenin en pratik atölye yolu <strong>Dairesel Salgı (↗)</strong> kontrolüdür.</li>
  <li>Düzlemsellik tek bir yüzeyin eğriliğini, paralellik ise iki bağımsız yüzeyin birbirine göre duruşunu denetler.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Teknik resimde bir montaj plakasının üst yüzeyine <code>[ ⏢ 0,05 | A ]</code> yazılmıştır. Kalite kontrol metroloğu bu resmi neden reddeder?</summary>
<div>Düzlemsellik (Flatness - ⏢) bir <strong>form toleransıdır</strong>. Form toleransları parçanın kendi yüzeyinin kusursuz bir düzlemden ne kadar saptığını kontrol eder ve tanım gereği başka hiçbir yüzeye göre değerlendirilemez. Dolayısıyla düzlemsellik tolerans çerçevesine datum (A) yazılamaz! Doğru gösterim yalnızca <code>[ ⏢ 0,05 ]</code> olmalıdır. Eğer A yüzeyine göre paralellik isteniyorsa sembol Paralellik (∥) olarak değiştirilmelidir: <code>[ ∥ 0,05 | A ]</code>.</div></details>
<details><summary>CNC frezede işlenen 500x500 mm boyutundaki bir alüminyum plakanın her köşesinden mikrometreyle ölçüm yapılmıştır; kalınlık her yerde 20,00 ± 0,01 mm çıkmaktadır. Ancak plaka granit masaya konulduğunda beşik gibi sallanmaktadır. Metrolojik çelişkiyi açıklayınız.</summary>
<div>Plakanın iki yüzeyi birbirine mükemmel paraleldir (bu yüzden her noktada kalınlık aynıdır); fakat parça mengenede sıkılarak işlenirken serbest kaldığında iç gerilmelerle muz gibi yaylanmıştır. Yani parçanın <strong>paralelliği kusursuz fakat düzlemselliği (flatness) bozuktur</strong>. İmalat öncesinde döküm alüminyum plaka (ACP 5080) seçilmeli ve teknik resme <code>[ ⏢ 0,05 ]</code> düzlemsellik şartı eklenmelidir.</div></details>
<details><summary>Bir elektrik motoru miline takılacak V-kasnağın oturacağı fatura yüzeyine neden Diklik (⟂) veya Dairesel Salgı (↗) toleransı vermek zorundasınız?</summary>
<div>Eğer kasnağın dayandığı mil faturası mil eksenine tam dik değilse (örneğin 0,1 mm eğikse), kasnağı cıvatayla faturaya sıktığınız an kasnak eksene göre açı yapar. Kasnak 3000 d/dak hızla dönerken fırıldak gibi yalpalar (aksiyal salgı). Bu yalpalama V kayışının kasnaktan fırlamasına ve rulmanların dinamik vuruntudan 100 saatte dağılmasına sebep olur. Faturaya mil eksenine göre <code>[ ⟂ 0,02 | A ]</code> diklik verilmelidir.</div></details>
</div>
`);

KITAP.bolum('m3', '3-6', `
<p class="giris">Geleneksel koordinat toleranslandırmasında (X ± 0,1, Y ± 0,1 mm), delik merkezi kare şeklinde bir tolerans alanına hapsedilir. Bu mantık hem silindirik bir cıvatanın yuvarlak geometrisine aykırıdır hem de imalatçıya gereksiz bir kısıtlama getirerek hurda oranını artırır. Modern mekanik tasarımda deliklerin, merkezleme pimlerinin ve millerinin konumsal yerleşimi <strong>Datum Referans Çerçevesi (DRF)</strong> ve <strong>Konum Toleransı (True Position)</strong> ile yönetilir.</p>

<h2>Datum Referans Çerçevesi ve 3-2-1 Kuralı</h2>
<p>Uzayda serbest duran bir katı cismin <strong>6 serbestlik derecesi (DoF)</strong> bulunur: 3 öteleme (X, Y, Z) ve 3 dönme (Rx, Ry, Rz). Bir parçayı fikstüre veya tezgâha bağlarken bu 6 serbestlik adım adım sıfırlanır:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Datum Hiyerarşisi</th>
    <th>Temas Noktası Sayısı</th>
    <th>Sıfırlanan Serbestlik Dereceleri</th>
    <th>Parçadaki Tipik Geometrik Referans</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Birincil Datum (Primary - A)</strong></td>
    <td><strong>3 Nokta (Düzlem)</strong></td>
    <td><strong>3 Serbestlik:</strong> Z ötelemesi + X dönmesi (Rx) + Y dönmesi (Ry)</td>
    <td>Parçanın tezgaha veya montaj yüzeyine oturduğu <strong>en geniş düz taban yüzeyi</strong>.</td>
  </tr>
  <tr>
    <td><strong>İkincil Datum (Secondary - B)</strong></td>
    <td><strong>2 Nokta (Doğru / Çizgi)</strong></td>
    <td><strong>2 Serbestlik:</strong> X ötelemesi + Z dönmesi (Rz)</td>
    <td>Parçanın dayandığı <strong>en uzun işlenmiş yan kenar</strong> veya ana merkezleme deliği.</td>
  </tr>
  <tr>
    <td><strong>Üçüncül Datum (Tertiary - C)</strong></td>
    <td><strong>1 Nokta (Durdurucu)</strong></td>
    <td><strong>1 Serbestlik:</strong> Y ötelemesi (Son serbestlik kilitlenir!)</td>
    <td>Parçanın dayandığı <strong>kısa yan kenar (stop pimi)</strong>.</td>
  </tr>
</tbody>
</table>
</div>
<p><em>Sonuç: Parça tezgâha bağlandığında artık 0 serbestlik kalmıştır; parça uzayda tek ve kesin bir koordinat sistemine kilitlenmiştir.</em></p>

<h2>Konum Toleransı (True Position - ⌖) ve Dairesel Alan Avantajı</h2>
<p>Teknik resimde deliğin konumunu belirten ölçüler kutu içine alınır: <code>[50]</code> ve <code>[100]</code>. Buna <strong>Temel Boyut (Basic Dimension)</strong> denir. Temel boyutun kendi toleransı yoktur; uzaydaki kusursuz teorik koordinatı tanımlar. Deliğin gerçek ekseni ise bu teorik merkezin etrafındaki silindirik bir alan içinde gezinebilir:</p>

<div class="iki-sutun">
  <div>
    <h4>Kare Tolerans Bölgesi (±0,1 mm)</h4>
    <p>X ± 0,1 ve Y ± 0,1 verildiğinde delik merkezi 0,2 × 0,2 mm'lik bir kare içinde kalmalıdır. Köşegen mesafesi: <code>√(0,1² + 0,1²) = 0,141 mm</code> olur. Çapraz yönde 0,14 mm sapmaya izin varken, düz eksen kenarında 0,10 mm'de parça hurdaya ayrılır!</p>
  </div>
  <div>
    <h4>Dairesel Konum Toleransı (Ø 0,28 mm)</h4>
    <p>Konum toleransında <code>[ ⌖ | Ø 0.28 | A | B | C ]</code> yazılır. Cıvata dairesel olduğu için sapma yönünün bir önemi yoktur. Karenin etrafını saran dairesel bölge imalatçıya <strong>%57 DAHA GENİŞ İMALAT ALANI</strong> kazandırır! Tezgâhta parça daha hızlı ve firesiz işlenir.</p>
  </div>
</div>

<h2>Maksimum Malzeme Koşulu (MMC - Ⓜ) ve Bonus Tolerans</h2>
<p>Konum toleransı hücresine eklenen <code>Ⓜ</code> sembolü, montaj edilebilirliği tam garanti ederken imalat maliyetini düşüren en güçlü mühendislik aracıdır:</p>
<ul>
  <li><strong>MMC (Maximum Material Condition):</strong> Parçanın kütlesel olarak en dolu / en ağır olduğu sınır durumdur.
    <ul>
      <li>Bir <strong>MİL</strong> için MMC = <strong>En büyük mil çapıdır</strong> (Maksimum metal).</li>
      <li>Bir <strong>DELİK</strong> için MMC = <strong>En küçük delik çapıdır</strong> (En az talaş kalkmış, delik dar, yani malzeme maksimum!).</li>
    </ul>
  </li>
</ul>

<h3>Bonus Tolerans Nasıl Hesaplanır? (Sayısal Örnek)</h3>
<p>Teknik resimde şöyle bir delik tanımlanmış olsun:</p>
<div class="formul">
Delik Ölçüsü: Ø10,0 +0,2 / 0,0 mm &nbsp;&nbsp;|&nbsp;&nbsp; Geometrik Tolerans: [ ⌖ | Ø 0.1 Ⓜ | A | B | C ]
</div>
<ol>
  <li>Deliğin <strong>MMC Boyutu:</strong> En dar hali olan <strong>Ø10,00 mm</strong>'dir.</li>
  <li>Eğer CNC operatörü deliği tam <strong>Ø10,00 mm</strong> delerse; deliğin eksenel kaçıklık toleransı tablodaki temel değerdir: <strong>Ø0,10 mm</strong>.</li>
  <li>Operatör deliği <strong>Ø10,20 mm</strong> delerse (Hâlâ izin verilen ölçü içindedir); delik büyüdüğü için içine girecek cıvata için delikte fazladan <code>10,20 − 10,00 = 0,20 mm</code> montaj boşluğu oluşur!</li>
  <li>Bu fazladan oluşan montaj boşluğuna <strong>BONUS TOLERANS</strong> denir ve temel konum toleransına doğrudan eklenir:
    <div class="formul">
    Toplam İzin Verilen Konum Toleransı = 0,10 (Temel) + 0,20 (Bonus) = <strong>Ø0,30 mm!</strong>
    </div>
  </li>
</ol>
<p><em>Normalde 0,20 mm eksen kaçıklığı yüzünden hurdaya ayrılacak olan parça, delik büyük delindiği için cıvata rahatça geçer ve parça kurtarılır!</em></p>

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
    <td><strong>Konum Toleransı (True Position - ⌖)</strong></td>
    <td>Bir unsurun (delik, pim, mil) gerçek ekseninin, temel boyutlarla tanımlanan teorik kusursuz konum etrafındaki silindirik tolerans bölgesinde kalma zorunluluğu.</td>
  </tr>
  <tr>
    <td><strong>Temel Boyut (Basic Dimension)</strong></td>
    <td>Teknik resimde kutu içine alınarak gösterilen [100], üzerinde hiçbir artı/eksi sapma bulunmayan teorik kusursuz koordinat ölçüsü.</td>
  </tr>
  <tr>
    <td><strong>MMC (Maksimum Malzeme Koşulu - Ⓜ)</strong></td>
    <td>Parçanın tolerans sınırları içinde en yüksek kütleye sahip olduğu durum: Deliklerde en küçük iç çap, millerde en büyük dış çap.</td>
  </tr>
  <tr>
    <td><strong>Bonus Tolerans</strong></td>
    <td>Bir unsur MMC boyutundan uzaklaştıkça (delik büyüdükçe veya mil küçüldükçe), aradaki farkın geometrik konum toleransına eklenerek imalatçıya tanınan ilave serbestlik.</td>
  </tr>
  <tr>
    <td><strong>DRF (Datum Referans Çerçevesi)</strong></td>
    <td>Parçanın 6 serbestlik derecesini sıfırlayan, birbirine dik 3 düzlemden (Datum A, B, C) oluşan üç boyutlu kartezyen koordinat sistemi.</td>
  </tr>
  <tr>
    <td><strong>LMC (En Az Malzeme Koşulu - Ⓛ)</strong></td>
    <td>Least Material Condition. Parçanın en hafif olduğu durum (en büyük delik, en küçük mil çapı). Genellikle et kalınlığı ve mukavemet sınırlarını korumak için kullanılır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li><strong>3-2-1 Kuralı</strong> ile parça uzaydaki 6 serbestlik derecesini sıfırlar: Birincil Datum A (3 nokta taban), İkincil Datum B (2 nokta uzun kenar), Üçüncül Datum C (1 nokta stop).</li>
  <li>Kutu içindeki ölçüler <code>[100]</code> <strong>Temel Boyut (Basic Dimension)</strong>'dur; toleransı yoktur, kusursuz teorik konumu belirtir.</li>
  <li>Dairesel konum toleransı (<code>⌖ Ø0,2</code>), geleneksel ±0,1 mm kare toleransa göre imalatçıya <strong>%57 daha geniş tolerans alanı</strong> sağlar.</li>
  <li><strong>MMC (Ⓜ):</strong> Parçanın en dolu halidir (delikte en küçük çap, milde en büyük çap).</li>
  <li>Delik MMC'den uzaklaşıp büyüdükçe aradaki fark <strong>Bonus Tolerans</strong> olarak konum toleransına eklenir; montaj garantilenirken hurda parçalar kurtarılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir montaj deliği için teknik resimde <code>Ø20,0 +0,10 / 0,00 mm</code> ve <code>[ ⌖ | Ø 0.05 Ⓜ | A | B ]</code> tanımlanmıştır. Parça üretildiğinde delik çapı Ø20,08 mm, eksen kaçıklığı ise teorik merkezden 0,11 mm çıkmıştır. Bu parça kabul edilir mi, hurda mıdır?</summary>
<div>Kabul edilir! Hesaplayalım:<br>
1. Delik MMC boyutu (en dar hali) = 20,00 mm'dir.<br>
2. Gerçek üretilen çap = 20,08 mm. MMC'den sapma (Bonus Tolerans) = <code>20,08 − 20,00 = 0,08 mm</code>.<br>
3. Toplam izin verilen konum toleransı = <code>0,05 (Temel) + 0,08 (Bonus) = Ø0,13 mm</code>.<br>
4. Gerçek ölçülen eksen kaçıklığı 0,11 mm, izin verilen 0,13 mm sınırının altında kaldığı için parça <strong>SAĞLAMDIR (OK)</strong>. Bonus tolerans olmasaydı parça 0,05 sınırını aştığı için hurdaya gidecekti.</div></details>
<details><summary>Teknik resimde bir merkezleme pimi için konum toleransının yanına Ⓜ koydunuz. Mil için MMC nedir ve bonus tolerans nasıl çalışır?</summary>
<div>Mil için MMC (Maksimum Malzeme Durumu) <strong>en büyük mil çapıdır</strong>. Örneğin pim Ø8,0 (−0,05 / −0,10) ise MMC boyutu Ø7,95 mm'dir. Pim tornada daha ince işlenirse (örneğin Ø7,90 mm), karşı deliğe girmesi kolaylaşır; dolayısıyla aradaki 0,05 mm fark pimin konum toleransına bonus olarak eklenir.</div></details>
<details><summary>Bir montaj plakasında 4 adet cıvata deliği vardır. Ölçüleri kenardan kenara zincirleme X1, X2, X3 vermek yerine neden Datum A|B|C'ye göre temel boyut [X] ve Konum toleransı (⌖) ile tanımlamalısınız?</summary>
<div>Zincirleme ölçü verdiğinizde her deliğin tezgâh toleransı bir sonrakine eklenir (tolerans yığılması - tolerance stack-up). 4. deliğe geldiğinizde toplam hata 0,8–1,2 mm'yi bulabilir ve montaj kapağı cıvataları delikleri karşılamaz. Datum referanslı konum toleransında ise her delik birbirinden bağımsız olarak doğrudan ana referans düzlemlerine göre konumlandırılır; hata birikmesi (yığılma) sıfırdır.</div></details>
</div>
`);

KITAP.bolum('m3', '3-7', `
<p class="giris">Talaşlı imalat tezgâhından çıkan hiçbir metalik yüzey atomik düzeyde kusursuz pürüzsüz değildir; elektron mikroskobu altında incelendiğinde yüzey kraterler, tepeler ve vadilerden oluşan bir dağ silsilesini andırır. Bir yüzeyin ne kadar pürüzsüz işleneceği estetik bir tercih değil; sürtünme katsayısını, hidrolik/pnömatik sızdırmazlığı, yorulma çatlağı direncini ve imalat maliyetini doğrudan yöneten <strong>Yüzey Pürüzlülüğü (Surface Roughness - ISO 21920 / ISO 4287)</strong> standardıdır.</p>

<h2>Temel Pürüzlülük Parametreleri: Ra vs. Rz</h2>
<div class="iki-sutun">
  <div>
    <h4>Ra (Aritmetik Ortalama Pürüzlülük)</h4>
    <p>Profil sapmalarının mutlak değerlerinin örnekleme uzunluğu (cut-off) boyunca alınan aritmetik ortalamasıdır. Dünya genelinde en yaygın kullanılan parametredir.</p>
    <ul>
      <li><strong>Üstünlüğü:</strong> Genel işleme kalitesini ve tezgâh kararlılığını gösterir.</li>
      <li><strong>Kritik Kusuru:</strong> Yüzeydeki tekil derin bir çatlağı veya keskin tepeyi gizler! Aritmetik ortalama alındığı için tekil derin kusurlar genel formülde erir.</li>
    </ul>
  </div>
  <div>
    <h4>Rz (Maksimum Tepe-Çukur Yüksekliği)</h4>
    <p>Ölçüm uzunluğundaki en yüksek 5 tepe ile en derin 5 vadinin mutlak farklarının ortalamasıdır.</p>
    <ul>
      <li><strong>Hayati Önemi:</strong> <strong>Hidrolik ve pnömatik sızdırmazlık yüzeylerinde (O-ring, keçe) mutlaka Rz kontrol edilmelidir!</strong> Yüzeyin Ra değeri çok iyi olsa dahi tek bir derin vadi O-ring altından akışkanın sızmasına sebep olur.</li>
      <li><strong>Pratik Çelik Dönüşümü:</strong> Çelik parçalarda kaba bir kural olarak <code>Rz ≈ 4 ila 6 × Ra</code> kabul edilir.</li>
    </ul>
  </div>
</div>

<h2>İmalat Yöntemleri ve Ulaşılan Ra Değerleri Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>İmalat Yöntemi</th>
    <th>Ekonomik Ra Aralığı [µm]</th>
    <th>ISO Pürüzlülük Sınıfı</th>
    <th>Mekanik Fonksiyon ve Tipik Parça Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Oksi-Gaz / Plazma Kesim</strong></td>
    <td>12,5 – 25 µm</td>
    <td>N11 – N10</td>
    <td>Kaynaklı şaselerin ham sac kenarları, montajda havada kalan serbest yüzeyler.</td>
  </tr>
  <tr>
    <td><strong>Lazer Kesim</strong></td>
    <td>3,2 – 6,3 µm</td>
    <td>N9 – N8</td>
    <td>Sac parçaların dış konturları. 10 mm altı saclarda temiz yüzey verir.</td>
  </tr>
  <tr>
    <td><strong>Kaba Frezeleme / Tornalama</strong></td>
    <td>6,3 – 12,5 µm</td>
    <td>N10 – N9</td>
    <td>Döküm tufalı temizleme, sonraki finiş operasyonlara hazırlık pasonu.</td>
  </tr>
  <tr>
    <td><strong>Standart CNC Freze / Torna</strong></td>
    <td><strong>Ra 3,2 µm</strong></td>
    <td><strong>N8 (Genel Standart)</strong></td>
    <td><strong>Otomasyon parçalarının varsayılan yüzeyidir.</strong> Cıvata basma yüzeyleri, braketler.</td>
  </tr>
  <tr>
    <td><strong>İnce CNC Freze / Torna (Finiş)</strong></td>
    <td><strong>Ra 1,6 µm</strong></td>
    <td><strong>N7 (Hassas Montaj)</strong></td>
    <td>İki metalin birbirine boşluksuz oturduğu montaj yüzeyleri, pim delikleri, statik O-ring basma kanalları.</td>
  </tr>
  <tr>
    <td><strong>Silindirik / Düzlem Taşlama</strong></td>
    <td><strong>Ra 0,8 – 0,4 µm</strong></td>
    <td><strong>N6 – N5 (Çok Hassas)</strong></td>
    <td><strong>Rulman oturma milleri ve yuvaları, lineer ray kızak altı faturaları, keçe temas milleri.</strong></td>
  </tr>
  <tr>
    <td><strong>Honlama / Süperfinish / Lepleme</strong></td>
    <td><strong>Ra 0,2 – 0,05 µm</strong></td>
    <td><strong>N4 – N2 (Ayna Parlaklığı)</strong></td>
    <td>Hidrolik silindir iç boruları, pnömatik piston milleri, hava yatakları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Teknik Resimde Yüzey Sembolleri ve Antet Gösterimi</h2>
<div class="kutu ipucu"><span class="kb">Yüzey Pürüzlülüğü Gösterim Kuralları (ISO 1302 / ISO 21920)</span>
<ul>
  <li><strong>Açık Kök Sembolü (√):</strong> Pürüzlülük kontrolü vardır ancak talaş kaldırma yöntemi serbesttir.</li>
  <li><strong>Üstü Kapalı Çatılı Sembol (▽):</strong> <strong>Talaş kaldırma ZORUNLUDUR!</strong> (Tornalanacak, frezelenecek veya taşlanacak). İçine <code>Ra 3.2</code> yazılır.</li>
  <li><strong>İçi Daireli Sembol (◎):</strong> <strong>Talaş kaldırmak KESİNLİKLE YASAKTIR!</strong> Parça ham kalacaktır (döküm, dövme veya soğuk haddelenmiş sac yüzeyi korunacaktır).</li>
  <li><strong>Genel Antet Notu:</strong> Parçanın üzerindeki 50 yüzeyden 45 tanesi standart işleme ise, resmin sağ üst köşesine toplu gösterim konulur: 
  <br><code>Ra 3.2 (✓ Ra 0.8, Ra 1.6)</code> → Anlamı: "Resimde üzerinde özel sembol olmayan tüm yüzeyler <strong>Ra 3,2</strong> işlenecektir; parantez içindekiler ise resim üzerinde ayrıca işaretlenen kritik yüzeylerdir."</li>
</ul>
</div>

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
    <td><strong>Ra (Aritmetik Ortalama Pürüzlülük)</strong></td>
    <td>Örnekleme uzunluğu boyunca ölçülen profil sapmalarının (y(x)) mutlak değerlerinin integraliyle hesaplanan aritmetik ortalama yükseklik [µm].</td>
  </tr>
  <tr>
    <td><strong>Rz (Maksimum Tepe-Çukur Yüksekliği)</strong></td>
    <td>Örnekleme uzunluğundaki en yüksek 5 tepe noktası ile en derin 5 çukur noktası arasındaki mesafelerin ortalaması. Sızdırmazlıkta kaçak riskini yönetir.</td>
  </tr>
  <tr>
    <td><strong>Cut-off Dalgaboyu (λc)</strong></td>
    <td>Yüzey pürüzlülüğü ölçümünde yüzey dalgalılığı (waviness) ile mikro pürüzlülüğü birbirinden ayıran filtreleme dalgaboyu uzunluğu (standart 0,8 mm).</td>
  </tr>
  <tr>
    <td><strong>Dinamik Keçe Yüzeyi</strong></td>
    <td>Dönen veya eksenel kayan mil üzerinde NBR/FKM yağ keçelerinin çalıştığı, keçenin erken aşınmaması için taşlanmış ve parlatılmış (Ra 0,2–0,4 µm) yüzey.</td>
  </tr>
  <tr>
    <td><strong>Talaş Kaldırma Yasak Sembolü</strong></td>
    <td>Teknik resimde üzerinde daire bulunan yüzey sembolü; parçanın o yüzeyinin haddelenmiş veya dökülmüş ham formunda bırakılmasını emreder.</td>
  </tr>
  <tr>
    <td><strong>Toplu Antet Gösterimi</strong></td>
    <td>Teknik resim paftasının sağ üst köşesinde genel pürüzlülüğü ve parantez içinde istisnai yüzeyleri belirten kompakt sembol kuralı [Örn: Ra 3.2 (✓ Ra 0.8)].</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li><strong>Ra</strong> genel pürüzlülük ortalamasıdır; dinamik sızdırmazlıkta mikro kaçakları yakalamak için <strong>Rz</strong> kontrolü zorunludur.</li>
  <li>Otomasyonda standart CNC frezelenmiş/tornalanmış yüzeyler için varsayılan değer <strong>Ra 3,2 µm</strong>'dir.</li>
  <li>Hassas montaj yüzeyleri ve pim delikleri için <strong>Ra 1,6 µm</strong>; rulman oturma milleri ve taşlama için <strong>Ra 0,8 µm</strong> istenir.</li>
  <li>Hidrolik/pnömatik silindir ve keçe yüzeylerinde sürtünmeyi ve sızıntıyı önlemek için <strong>Ra 0,4 – 0,2 µm (honlanmış)</strong> yüzey şarttır.</li>
  <li>Gereksiz yere tüm yüzeylere Ra 0,4 istemek parçanın taşlamaya girmesine yol açar ve parça maliyetini 3 katına çıkarır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir hidrolik silindir mili tasarlıyorsunuz. Mil üzerinde döner NBR yağ keçesi çalışacaktır. Teknik resme Ra 1,6 yazdınız. İmalattan gelen mil montajdan 1 hafta sonra keçeyi parçalayarak yağ kaçırmaya başlamıştır. Kök neden nedir?</summary>
<div>Dinamik yağ keçesi (rotary/linear seal) çalışan millerde yüzey zımpara gibi davranmamalıdır. Ra 1,6 talaşlı finiş yüzeyidir ve mikroskop altında keskin mikro talaş tepeleri barındırır; mil hareket ettikçe bu keskin tepeler elastomer keçeyi rendeleyerek yırtar. Keçe çalışan millerde yüzey silindirik taşlanmış veya sert krom kaplanıp parlatılmış olmalı ve pürüzlülük <strong>Ra 0,2 – 0,4 µm (Rz ≤ 1,6 µm)</strong> olarak sınırlandırılmalıdır.</div></details>
<details><summary>Bir fikstür plakasının tüm yüzeylerine genel olarak "Ra 0,4" yazarsanız talaşlı imalat atölyesinde ne olur?</summary>
<div>Standart bir CNC freze ekonomik olarak Ra 1,6 – 3,2 µm çıkarır. Ra 0,4 elde etmek frezeyle imkânsıza yakındır; parçanın tüm yüzeylerinin (yanlar, cepler, delikler dahil) düzlem taşlama tezgahına girmesi veya özel elmas takımlarla mikro ilerlemeyle işlenmesi gerekir. Parçanın imalat süresi 1 saatten 5 saate çıkar, maliyeti 4 katına fırlar. Plakanın sadece kritik montaj yüzeyine Ra 0,8 veya 1,6 verilmeli, geri kalanı Ra 3,2 serbest bırakılmalıdır.</div></details>
<details><summary>Çelik parçalarda Ra ile Rz arasında neden yaklaşık 1:4 ile 1:6 oranı vardır? Biri diğerinin yerine birebir geçer mi?</summary>
<div>Ra ortalama sapmayı temsil ederken, Rz en uçtaki tepe ve vadilerin mesafesini ölçer. Standart talaşlı imalat profilinde tepeler ve çukurlar ortalama değerin yaklaşık 4–6 katı derinliğe ulaşır. Birebir birbirinin yerine geçemezler; çünkü profilde tek bir derin çizik varsa Ra bunu aritmetik ortalamada neredeyse hiç hissettirmezken Rz tavan yapar. Sızdırmazlıkta mutlaka Rz belirtilmelidir.</div></details>
</div>
`);
