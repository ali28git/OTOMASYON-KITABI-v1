// MODÜL 5 — Lineer Hareket Sistemleri (Bölüm 5.4 – 5.6: Bilyalı Vidalar, Trapez Vidalar, Kayışlı Eksenler)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m5', '5-4', `
<p class="giris">Bilyalı vidalı miller (Ball Screw); elektrik motorunun dönel hareketini %90'ın üzerinde mekanik verimle, mikron seviyesinde hassasiyetle ve tonlarca itme kuvvetiyle doğrusal harekete dönüştüren mekatronik tahrik elemanıdır. Bir bilyalı vida tasarımı sadece çap ve hatve seçmekten ibaret değildir; yüksek devirlerde milin kamçılanarak titreşime girmesi (Kritik Hız) ve baskı altında bel vermesi (Euler Burkulması) eksenin sınırlarını belirler.</p>

<h2>Üretim Yöntemleri ve Hassasiyet Sınıfları (ISO 3408)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Üretim Metodu</th>
    <th>Hassasiyet Sınıfı</th>
    <th>300 mm'deki Adım Hatası (ep)</th>
    <th>Maliyet Çarpanı</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Haddelenmiş (Rolled / Soğuk Şekillendirme)</strong></td>
    <td><strong>C7 (Standart)</strong><br>C10 (Kaba)</td>
    <td><strong>±50 µm (0,050 mm)</strong><br>±210 µm</td>
    <td>1,0× (En Ekonomik)</td>
    <td><strong>Genel otomasyonun %85'i:</strong> Kartezyen robotlar, paletleme, montaj aparatları, pres besleme.</td>
  </tr>
  <tr>
    <td><strong>Hassas Taşlanmış (Ground / Taşlama)</strong></td>
    <td><strong>C5</strong><br><strong>C3</strong><br>C1 / C0</td>
    <td>±18 µm<br><strong>±8 µm (0,008 mm)</strong><br>±3 µm</td>
    <td>3,0× – 8,0×</td>
    <td><strong>CNC takım tezgahları</strong>, koordinat ölçüm (CMM), yarı iletken ve optik montaj eksenleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Hatve (Lead - Ph) Seçimi: Kuvvet vs. Hız Dengesi</h2>
<p>Hatve, mil bir tam tur (360°) döndüğünde somunun eksenel olarak kaç milimetre ilerlediğidir. Doğrusal hız formülü:</p>
<div class="formul">
v = ( n · P<sub>h</sub> ) / ( 60 × 1000 ) &nbsp;&nbsp;[m/s]
<small>v: Doğrusal hız [m/s], n: Motor devri [d/dak], P<sub>h</sub>: Vida hatvesi [mm]</small>
</div>
<ul>
  <li><strong>Küçük Hatve (P<sub>h</sub> = 2, 4, 5 mm):</strong> Yüksek eksenel itme kuvveti, yüksek mekanik çözünürlük, motor torkundan devasa mekanik avantaj; ancak düşük doğrusal hız.</li>
  <li><strong>Yüksek Hatve (High-Lead - P<sub>h</sub> = 10, 20, 40, 50 mm):</strong> Hızlı transfer eksenleri (v &gt; 1 m/s); ancak geri sürülebilirlik (back-drivability) artar ve dikey eksenlerde motor kapandığında somun serbest düşebilir!</li>
</ul>

<h2>Somun Tipleri ve Boşluksuzluk (Preload)</h2>
<ul>
  <li><strong>Tek Somun (Oversize Ball Preload):</strong> Somun yuvasına kanal genişliğinden birkaç mikron büyük bilyalar basılarak eksenel boşluk sıfırlanır (Hafif ön yük: C'nin %1-3'ü). Genel otomasyonda standarttır.</li>
  <li><strong>Çift Somun (Double Nut Preload):</strong> İki ayrı somun arasına hassas taşlanmış bir ayar şimi (spacer) konarak somunlar birbirine zıt yönde gerdirilir. <strong>Sıfır Boşluk (Zero-Backlash)</strong> ve maksimum rijitlik sağlar (CNC tezgah standardı).</li>
  <li><strong>Döner Somunlu Sistemler (Driven Nut):</strong> Mil sabit tutulur, motor bir triger kayışla doğrudan somunun dış kovanını döndürür. Uzun stroklu eksenlerde (L &gt; 3 metre) devasa milin dönüp kamçılanmasını engeller!</li>
</ul>

<h2>İki Ölümcül Sınır: Kritik Hız ve Euler Burkulması</h2>

<div class="iki-sutun">
  <div>
    <h4>1. Kritik Hız (Kamçılanma / Whirling)</h4>
    <p>Mil hızla dönerken kendi doğal rezonans frekansına ulaştığında ip atlar gibi merkezkaçla savrulur ve kamçılanır.</p>
    <div class="formul">
    n<sub>izin</sub> = 0,8 · [ f<sub>k</sub> · ( d<sub>k</sub> / L² ) · 10⁷ ] &nbsp;[d/dak]
    </div>
    <p><small>d<sub>k</sub>: Mil diş dibi çapı [mm], L: Yataklar arası serbest boy [mm], f<sub>k</sub>: Yataklama faktörü</small></p>
  </div>
  <div>
    <h4>2. Euler Burkulması (Buckling)</h4>
    <p>Mil basma kuvveti (itme) uygularken ince bir çubuk gibi ortadan bel verip bükülür.</p>
    <div class="formul">
    F<sub>izin</sub> = ( 1 / S ) · [ f<sub>b</sub> · ( d<sub>k</sub>⁴ / L² ) · 10⁴ ] &nbsp;[N]
    </div>
    <p><small>S: Emniyet katsayısı (2,5–3,0), f<sub>b</sub>: Yataklama montaj faktörü</small></p>
  </div>
</div>

<h3>Yataklama Düzenlerinin Kritik Faktörleri</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Yataklama Şekli (Tahrik Tarafı — Karşı Taraf)</th>
    <th>Kritik Hız Faktörü (f<sub>k</sub>)</th>
    <th>Burkulma Faktörü (f<sub>b</sub>)</th>
    <th>Değerlendirme</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sabit — Serbest (Fixed — Free)</strong></td>
    <td>0,43 (En Kötü)</td>
    <td>0,25 (En Zayıf)</td>
    <td>Sadece çok kısa stroklu hafif dikey eksenlerde.</td>
  </tr>
  <tr>
    <td><strong>Destekli — Destekli (Supported — Supported)</strong></td>
    <td>1,21</td>
    <td>1,00</td>
    <td>İki uçta tek sıra sabit bilyalı yataklama (Eski tip).</td>
  </tr>
  <tr>
    <td><strong>Sabit — Destekli (Fixed — Supported - BK/BF)</strong></td>
    <td><strong>1,88 (Standart)</strong></td>
    <td><strong>2,05 (Güçlü)</strong></td>
    <td><strong>Endüstri Standardı:</strong> Tahrik tarafında çift eğik bilyalı yatak (BK), karşı tarafta tek serbest yatak (BF).</td>
  </tr>
  <tr>
    <td><strong>Sabit — Sabit (Fixed — Fixed)</strong></td>
    <td><strong>2,74 (En Yüksek Hız)</strong></td>
    <td><strong>4,00 (En Yüksek İtme Kuvveti)</strong></td>
    <td>Her iki uçta da eksenel ön gerilmeli eğik bilyalı yatak (CNC tezgahlar). Isıl uzama için mil gerdirilerek bağlanır.</td>
  </tr>
</tbody>
</table>
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
    <td><strong>ISO 3408</strong></td>
    <td>Bilyalı vidalı millerin vida profillerini, somun boyutlarını, dinamik yük kapasitelerini ve C0-C10 adım hassasiyet sınıflarını belirleyen uluslararası standarttır.</td>
  </tr>
  <tr>
    <td><strong>C7 Hassasiyet Sınıfı</strong></td>
    <td>Soğuk haddelemeyle üretilen, 300 mm strok boyunca maksimum ±50 µm adım hatasına izin veren genel otomasyon vidalı mil sınıfıdır.</td>
  </tr>
  <tr>
    <td><strong>Kritik Hız n<sub>izin</sub> [d/dak]</strong></td>
    <td>Vidalı milin dönüş devir sayısının milin birinci doğal eğilme rezonans frekansıyla çakıştığı ve milin ip atlar gibi savrulup kamçılandığı sınır devirdir.</td>
  </tr>
  <tr>
    <td><strong>Euler Burkulması [N]</strong></td>
    <td>Eksenel basma (itme) kuvveti altında çalışan uzun ve ince vidalı milin elastik kararsızlığa uğrayarak aniden ortadan bel vermesi ve bükülmesidir.</td>
  </tr>
  <tr>
    <td><strong>BK Yataklama Bloğu</strong></td>
    <td>İçerisinde sırt sırta monte edilmiş çift sıra eğik bilyalı rulman takımı barındıran, milin hem çift yönlü eksenel itme kuvvetini taşıyan hem de konumunu sabitleyen ünitedir.</td>
  </tr>
  <tr>
    <td><strong>BF Yataklama Bloğu</strong></td>
    <td>İçerisinde tek bir sabit bilyalı rulman bulunan, sadece radyal destek sağlayan ve milin termal boy uzamalarında yuvada eksenel kaymasına izin veren serbest uç ünitesidir.</td>
  </tr>
  <tr>
    <td><strong>Çift Somun Ön Yükü</strong></td>
    <td>İki bağımsız somunun arasına konulan mikron hassasiyetli taşlanmış şim ile somun bilyalarının yuvarlanma kanalının zıt yanaklarına bastırılarak sıfır boşluk elde edilmesidir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Bilyalı vida mekanik verimi <strong>%90–95</strong> seviyesindedir; sürtünme çok düşüktür.</li>
  <li>Genel otomasyonda haddelenmiş <strong>C7 sınıfı</strong> vidalar standart ve ekonomiktir.</li>
  <li>Doğrusal hız hatveyle (Ph) doğru orantılıdır; yüksek hız için <strong>High-Lead</strong> vida seçilir.</li>
  <li>Uzun vidalı millerde devir arttıkça <strong>Kritik Hız (Kamçılanma)</strong>; itme kuvveti arttıkça <strong>Euler Burkulması</strong> kontrol edilmelidir.</li>
  <li>En yaygın endüstriyel yataklama kombinasyonu <strong>Sabit-Destekli (BK tahrik / BF serbest uç)</strong> düzenidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Boyu 2 metre olan Ø16 mm haddelenmiş bir vidalı mili servo motorla 3000 d/dak hızda döndürmek istiyorsun. Yataklama BK12/BF12. Bu eksen neden çalışamaz?</summary>
<div>Formüle göre kritik hız serbest boyun karesiyle (L²) ters orantılıdır. Ø16 mm bir mil için 2 metre (2000 mm) serbest boyda kritik kamçılanma devri yaklaşık <strong>600–700 d/dak</strong> seviyesindedir! Siz motoru 3000 d/dak hıza çıkarmaya kalktığınızda mil 700 devir civarında şiddetli bir rezonansla savrulup kamçılanacak, gövdeyi parçalayacak ve somunu dağıtacaktır. Çözüm: Mil çapını en az Ø25–Ø32 mm'ye büyütmek, hatveyi büyüterek motor devrini düşürmek veya kayışlı/kremayerli sisteme geçmektir.</div></details>
<details><summary>Dikey Z ekseninde bilyalı vida kullandın. Elektrik kesildiğinde motorun üzerindeki mekanik fren devreye girene kadar geçen 50 milisaniyede araba neden hemen aşağı kaymaya başlar?</summary>
<div>Bilyalı vidanın verimi %90'ın üzerinde olduğu için sürtünmesi sıfıra yakındır ve <strong>geri sürülebilirdir (back-drivable)</strong>. Somuna binen eksenel yerçekimi yükü mili anında bir fırıldak gibi döndürür. Bu yüzden dikey eksenlerde bilyalı vidaya güvenilmez; motorda anında tutan <strong>fail-safe yay baskılı elektromanyetik fren</strong> ve gerekirse ağırlık dengeleme (karşı ağırlık veya pnömatik dengeleyici) zorunludur.</div></details>
<details><summary>Vidalı mil yataklama bloğu seçerken BK (Fixed) ile BF (Simple/Floating) arasındaki yapısal fark nedir?</summary>
<div><strong>BK Ünitesi:</strong> İçinde sırt sırta (DB) monte edilmiş <strong>çift sıra eğik bilyalı rulman</strong> (7xxx serisi) ve mil somunu barındırır; hem devasa eksenel itme kuvvetlerini hem de radyal yükü karşılar. Milin eksenel hareketini sıfırlar.<br>
<strong>BF Ünitesi:</strong> İçinde sadece tek bir <strong>sabit bilyalı rulman</strong> ve segman vardır; sadece radyal yük taşır. Mil ısıl genleşmeyle boyuna uzadığında rulman yuva içinde eksenel olarak serbestçe kayar; mili kasmaktan korur.</div></details>
</div>
`);

KITAP.bolum('m5', '5-5', `
<p class="giris">Trapez vidalı miller (Lead Screw / ACME); bilya devirdaimi yerine somunun vida dişleri üzerinde doğrudan kayarak temas ettiği, asırlık ve son derece güvenilir mekanik tahrik elemanıdır. Düşük verimi nedeniyle yüksek hızlı eksenlerde tercih edilmese de; <strong>Otokontrol (Geri dönmezlik / Self-locking)</strong> özelliği, sessizliği, yağsız çalışma kabiliyeti ve bilyalı vidanın 4'te biri fiyatıyla otomasyonda kritik niş görevleri üstlenir.</p>

<h2>Trapez Diş Standartları: DIN 103 vs. ACME</h2>
<ul>
  <li><strong>Metrik Trapez (DIN 103):</strong> Diş açısı <strong>30°</strong>'dir. Avrupa ve Türkiye standardıdır (Örn: <code>Tr 20x4</code> → Dış çap 20 mm, hatve 4 mm tek ağızlı vida).</li>
  <li><strong>ACME Standardı (ANSI B1.5):</strong> Diş açısı <strong>29°</strong>'dir. Amerikan menşeli makinelerde kullanılır.</li>
</ul>

<h2>Bilyalı Vida vs. Trapez Vida Kapsamlı Karşılaştırması</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mühendislik Kriteri</th>
    <th>Trapez Vidalı Mil (Tr)</th>
    <th>Bilyalı Vidalı Mil (Ball Screw)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Mekanik Verim (η)</strong></td>
    <td><strong>%25 – %50 (Çok Düşük!)</strong> Enerjinin çoğu ısıya dönüşür.</td>
    <td><strong>%90 – %95 (Çok Yüksek)</strong> Neredeyse kayıpsız.</td>
  </tr>
  <tr>
    <td><strong>Geri Dönmezlik (Otokontrol)</strong></td>
    <td><strong>EVET (Büyük Avantaj!)</strong> Tek ağızlı küçük hatvelerde yük vidayı geri döndüremez.</td>
    <td><strong>HAYIR (Asla dönemezlik yapmaz!)</strong> Yük bindiği an motoru geriye döndürür.</td>
  </tr>
  <tr>
    <td><strong>Maksimum Hız</strong></td>
    <td>Düşük (Kayma hızı pv sınırı vardır: maks. 0,1–0,3 m/s)</td>
    <td>Yüksek (maks. 1,0–2,0 m/s)</td>
  </tr>
  <tr>
    <td><strong>Gürültü Seviyesi</strong></td>
    <td><strong>Fısıltı kadar sessiz</strong> (Bilya şakırtısı yok)</td>
    <td>Orta (Bilya sirkülasyon sesi duyulur)</td>
  </tr>
  <tr>
    <td><strong>Yağlama İhtiyacı</strong></td>
    <td>Bronz somunda gres şart; Polimer somunda <strong>SIFIR YAĞ</strong>.</td>
    <td>Düzenli gres veya sıvı yağlama şarttır.</td>
  </tr>
  <tr>
    <td><strong>Aşınma ve Boşluk</strong></td>
    <td>Sürtünmeyle aşınır; zamanla eksenel boşluk (backlash) büyür.</td>
    <td>Ön yüklü bilyalar sayesinde yüzbinlerce km sıfır boşluk kalır.</td>
  </tr>
  <tr>
    <td><strong>İlk Yatırım Maliyeti</strong></td>
    <td><strong>Çok Ucuz (1,0×)</strong></td>
    <td>Pahalı (3,5× – 5,0×)</td>
  </tr>
</tbody>
</table>
</div>

<h2>Otokontrol (Self-Locking) Mühendislik Prensibi</h2>
<p>Bir trapez vidanın geri dönmez (otokontrol) olabilmesi için vida helis açısının (kurşun açısı - α), sürtünme açısından (ρ) küçük olması gerekir:</p>
<div class="formul">
tan( α ) = P<sub>h</sub> / ( π · d<sub>2</sub> ) &nbsp;&nbsp;|&nbsp;&nbsp; tan( ρ ) = µ / cos( 15° ) <br><br>
<strong>Otokontrol Şartı: &nbsp; α &lt; ρ &nbsp; (veya Verim η &lt; %50)</strong>
</div>
<ul>
  <li>Eğer <code>Tr 20x4</code> (tek ağızlı, hatve 4 mm) seçersen: Helis açısı küçüktür (α ≈ 4,0°); sürtünme açısı daha büyüktür (ρ ≈ 6–8°). <strong>Vida geri dönmez!</strong> Dikey tablaya 500 kg koysanız bile elektrik kesildiğinde mil kilitli kalır, tabla asla düşmez.</li>
  <li>Eğer <code>Tr 20x20</code> (çok ağızlı yüksek hatve) seçersen: Helis açısı fırlar (α &gt; 18°); vida geriye döner ve düşer!</li>
</ul>

<h2>Somun Malzemeleri: Bronz vs. Mühendislik Polimerleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Somun Malzemesi</th>
    <th>Mekanik Özellik</th>
    <th>Yağlama</th>
    <th>Sıcaklık Sınırı</th>
    <th>Kullanım Yeri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kırmızı Bronz (RG7 / CuSn7ZnPb)</strong></td>
    <td>Çok yüksek yüzey basıncı dayanımı, darbe direnci.</td>
    <td><strong>Sürekli Gresleme Şart</strong> (Kuru kalırsa sarar/kilitlenir).</td>
    <td>-40°C … +150°C</td>
    <td>Ağır yük kaldırma krikoları, mengene milleri, pres ayar tablaları.</td>
  </tr>
  <tr>
    <td><strong>POM-C / Delrin (Polioksimetilen)</strong></td>
    <td>Düşük sürtünme, mükemmel sessizlik, sıfır gres.</td>
    <td><strong>Kuru Çalışır (Gressiz)</strong></td>
    <td>-20°C … +80°C</td>
    <td>Laboratuvar cihazları, medikal otomasyon, 3D yazıcı Z eksenleri.</td>
  </tr>
  <tr>
    <td><strong>Igus iglidur (Tribo-Polimer)</strong></td>
    <td>Katı yağlayıcı katkılı kompozit plastik (Aşınma direnci POM'un 5 katı).</td>
    <td><strong>%100 Bakımsız & Yağsız</strong></td>
    <td>-30°C … +90°C</td>
    <td>Tozlu, çamurlu açık hava, gıda hatları, kimyasal ortamlar.</td>
  </tr>
</tbody>
</table>
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
    <td><strong>DIN 103</strong></td>
    <td>30° yanak profilli metrik trapez vida ve somunların anma boyutlarını, hatvelerini ve toleranslarını belirleyen Avrupa standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Otokontrol (Self-Locking)</strong></td>
    <td>Helis açısının (α) sürtünme açısından (ρ) küçük olması sebebiyle eksenel kuvvetin mili döndürememesi ve sistemin statik olarak kilitli kalması halidir.</td>
  </tr>
  <tr>
    <td><strong>Kırmızı Bronz (RG7)</strong></td>
    <td>Bakır-kalay-çinko alaşımı yatak bronzudur; yüksek basınç ve sürtünme altında mükemmel kayma performansı sunar (periyodik gresleme şarttır).</td>
  </tr>
  <tr>
    <td><strong>POM-C (Delrin)</strong></td>
    <td>Yüksek boyutsal kararlılık, düşük sürtünme katsayısı ve aşınma direncine sahip, kuru ve sessiz çalışan teknik termoplastik somun malzemesidir.</td>
  </tr>
  <tr>
    <td><strong>Anti-Backlash Somun</strong></td>
    <td>İki somun yarısının dahili bir yay ile zıt yönlere itilerek diş boşluğunun sürekli sıfırlandığı, hassas yön değişimine izin veren trapez somundur.</td>
  </tr>
  <tr>
    <td><strong>p · v Basınç-Hız Limiti</strong></td>
    <td>Somun diş yüzeyine binen temas basıncı ile kayma hızının çarpımıdır; izin verilen değer aşılırsa sürtünme ısısı somunu eritir veya sarar.</td>
  </tr>
  <tr>
    <td><strong>Vida Helis Açısı α [°]</strong></td>
    <td>Vida dişinin bölüm dairesi silindiri üzerinde eksene dik düzlemle yaptığı eğim açısıdır (tan α = P<sub>h</sub> / (π · d₂)).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Trapez vidalar kayma sürtünmesiyle çalıştığı için verimi düşüktür (<strong>%30–50</strong>) ve hızlı çevrimlerde ısınır.</li>
  <li>Tek ağızlı küçük hatveli trapez vidalar <strong>Otokontrol (Self-locking)</strong> sağlar; dikey eksende motor kapansa bile yük düşmez.</li>
  <li>Ağır yükte <strong>Bronz (RG7)</strong> somun; temiz, kuru ve sessiz sistemlerde <strong>Polimer (POM / Igus)</strong> somun seçilir.</li>
  <li>Yüksek hız ve sürekli dinamik çalışan CNC eksenlerinde trapez vida erir; sadece bilyalı vida kullanılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Dikey eksende çalışan bir kapı kaldırma mekanizmasında neden bilyalı vida yerine Tr 16x4 tek ağızlı trapez vida tercih edilir?</summary>
<div>İki büyük avantajı vardır:<br>
1. <strong>Doğal Mekanik Emniyet:</strong> Tr 16x4 vidanın helis açısı küçüktür ve otokontrollüdür (self-locking). Elektrikler kesildiğinde kapı kendi ağırlığıyla vidayı döndüremez ve havada kilitli kalır; pahalı motor frenine gerek kalmaz.<br>
2. <strong>Maliyet:</strong> Bilyalı vidanın 4'te biri fiyatınadır ve kapı gibi yavaş açılıp kapanan bir sistemde trapez vidanın düşük verimi önemsizdir.</div></details>
<details><summary>Bronz somunlu bir trapez mili 1500 d/dak devirle sürekli çevirmeye kalkarsan ne olur?</summary>
<div>Trapez vidada yüzey teması kaymalıdır. <code>p · v</code> (Yüzey basıncı × Çizgisel kayma hızı) limiti hızla aşılır. Sürtünmeden dolayı somun ve mil birkaç dakika içinde 100°C'nin üzerine ısınır, gres yağı yanar veya akar. Ardından bronz somun milin üzerine sıvanır (scuffing/seizure) ve mil kilitlenerek motoru yakar! Trapez vidalar genelde <strong>maks. 300–400 d/dak</strong> devirlerde çalıştırılmalıdır.</div></details>
<details><summary>3D yazıcıların Z ekseninde kullanılan yaylı "Anti-Backlash" trapez somunların çalışma prensibi nedir?</summary>
<div>Trapez somunlar imalat toleransı ve aşınma gereği diş boşluğuna (0,1–0,2 mm) sahiptir. Anti-backlash somunlar iki parçadan oluşur; ortasındaki çelik yay iki somun yarısını zıt yönlere iterek birini dişin üst yanağına, diğerini alt yanağına sürekli bastırır. Böylece yön değişiminde boşluk (backlash) sıfırlanır ve baskıda katman kayması önlenir.</div></details>
</div>
`);

KITAP.bolum('m5', '5-6', `
<p class="giris">Fabrika otomasyonunda hız, çevrim süresi (cycle time) ve uzun strok gerektiğinde bilyalı vidalı miller sınırlarına çarpar. 3 metrelik bir vidalı mil 1 m/s hızda kamçılanıp parçalanırken; <strong>Triger Kayışlı Lineer Eksenler</strong> 5 ila 10 m/s hızlara, 50 m/s² (5G) ivmelenmelere ve 10 metreye varan stroklara fısıltı sessizliğinde ulaşır. Bu bölümde kayışlı eksen mimarilerini, yaylanma rijitliğini ve Omega Drive teknolojisini inceliyoruz.</p>

<h2>Kayışlı Eksen Mimarisi ve Bileşenleri</h2>
<p>Endüstriyel bir kayışlı lineer modül şu ana parçalardan oluşur:</p>
<ul>
  <li><strong>Gövde Profili:</strong> Ağır hizmet eloksallı alüminyum ekstrüzyon gövde (İçine profil ray veya dışına tekerlek kanalları entegredir).</li>
  <li><strong>Triger Kayış:</strong> <strong>Poliüretan (PU) gövde + Yüksek mukavemetli çelik kordlar</strong> (Örn: <code>AT5, AT10, 5M veya 8M</code> diş profili). Çelik kordlar uzamayı engeller.</li>
  <li><strong>Tahrik Kasnağı:</strong> Boşluksuz (Zero-Backlash) taşlanmış dişli kasnak; doğrudan planet redüktör miline veya konik sıkma bileziğiyle bağlanır.</li>
  <li><strong>Gerdirme Mekanizması:</strong> Avare kasnak tarafında kayışın frekansını ayarlayan ayar cıvataları.</li>
</ul>

<h2>İki Temel Tahrik Konfigürasyonu</h2>

<div class="iki-sutun">
  <div>
    <h4>1. Klasik Uçtan Tahrikli (End-Driven)</h4>
    <p>Motor modülün bir ucundaki tahrik kafasına sabittir. Sonsuz kayış iki uçtaki kasnaklar arasında döner; araba kayışın üzerine kilitlenir.</p>
    <ul>
      <li><strong>Artısı:</strong> Hareketli araba hafiftir; motor sabit gövdede durur.</li>
      <li><strong>Eksisi:</strong> Strok uzadıkça (L &gt; 3 metre) kayışın iki kolu da uzar; kayış sarkması ve elastik yaylanma (esneme) artar.</li>
    </ul>
  </div>
  <div>
    <h4>2. Omega Tahrik (Omega Drive / Stationary Belt)</h4>
    <p>Kayış iki ucundan modül gövdesine gergin olarak <strong>SABİTLENİR (dönmez!)</strong>. Motor ve planet redüktör doğrudan hareketli arabanın üzerine monte edilir. Kayış arabanın altındaki 3 kasnak üzerinden "Ω (Omega)" harfi şeklinde kıvrılarak geçer.</p>
    <ul>
      <li><strong>Muazzam Avantajı:</strong> Kayış boyu 10 metre bile olsa gergin durur; kayış sarkması SIFIRDIR! Sınırsız stroklarda mükemmel rijitlik sağlar.</li>
    </ul>
  </div>
</div>

<h2>Dinamik Rijitlik ve Kayış Esnemesi (Kord Yaylanması)</h2>
<p>Kayışlı eksenlerin tek kusuru sonlu rijitlikleridir. Çelik kordlu poliüretan kayış devasa bir yay gibi davranır:</p>
<div class="formul">
k<sub>kayış</sub> = ( 2 · E · A ) / L<sub>aktif</sub> &nbsp;&nbsp;[N/mm]
<small>E: Çelik kord elastisite modülü, A: Kayış çelik kord kesit alanı, L<sub>aktif</sub>: Kasnak ile araba arasındaki kayış mesafesi</small>
</div>
<ul>
  <li>Araba kasnağa yakınken (kısa kol) sistem çok rijittir; konumsal tekrarlanabilirlik <strong>±0,05 mm</strong> seviyesindedir.</li>
  <li>Araba strokun ortasına veya diğer uca gittiğinde (L uzadıkça) kayışın yay katsayısı düşer; ani frenlemede araba hedef pozisyon etrafında mikro salınım (titreşim) yapabilir.</li>
  <li><strong>Mühendislik Kuralı:</strong> Kayışlı eksenlerde servo sürücünün konum kazançları (PID Position Loop Gain), strokun en zayıf noktası olan ortadaki en düşük rezonans frekansına göre ayarlanmalıdır!</li>
</ul>

<h2>Kayışlı Eksen Ne Zaman Seçilir? Ne Zaman Seçilmez?</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Uygulama Şartı</th>
    <th>Kayışlı Eksen Uygun mu?</th>
    <th>Açıklama ve Alternatif</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Hız &gt; 1,5 m/s ve İvme &gt; 15 m/s²</strong></td>
    <td><strong>MÜKEMMEL (1. Tercih)</strong></td>
    <td>Vidalı miller bu ivmelerde patlar. Kayış hafifliği sayesinde yıldırım gibi hızlanır.</td>
  </tr>
  <tr>
    <td><strong>Strok: 2 metre … 6+ metre</strong></td>
    <td><strong>MÜKEMMEL</strong></td>
    <td>Vidalı mil kamçılanır, kremayer ise pahalıdır. Kayış en ekonomik çözümdür.</td>
  </tr>
  <tr>
    <td><strong>Hassasiyet: ±0,01 mm (10 mikron)</strong></td>
    <td><strong>UYGUN DEĞİL!</strong></td>
    <td>Kayış esnemesi yüzünden tekrarlanabilirlik tipik ±0,05 – 0,1 mm'dir. <strong>Bilyalı vida şarttır.</strong></td>
  </tr>
  <tr>
    <td><strong>Ağır Eksenel İtme Kuvveti (F &gt; 5000 N)</strong></td>
    <td><strong>UYGUN DEĞİL!</strong></td>
    <td>Ağır itmede kayış dişleri sıyrılır (shearing). <strong>Vidalı mil veya kremayer seçilmelidir.</strong></td>
  </tr>
  <tr>
    <td><strong>Sessiz ve Temiz Çalışma</strong></td>
    <td><strong>MÜKEMMEL</strong></td>
    <td>Sıfır gres, sıfır bilya şakırtısı; fısıltı gibi çalışır.</td>
  </tr>
</tbody>
</table>
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
    <td><strong>Omega Tahrik (Omega Drive)</strong></td>
    <td>Triger kayışın iki ucundan gövdeye sabitlendiği, motorun hareketli araba üzerine monte edilerek 3 kasnak üzerinden Ω şeklinde kayışı tırmandığı uzun strok tahrik sistemidir.</td>
  </tr>
  <tr>
    <td><strong>Poliüretan (PU) Çelik Kord Kayış</strong></td>
    <td>Yüksek elastisite modüllü çelik kordların aşınmaya dayanıklı PU matris içine gömülmesiyle üretilen, sıfıra yakın uzama gösteren rijit lineer eksen kayışıdır.</td>
  </tr>
  <tr>
    <td><strong>Kayış Yay Sabiti k<sub>kayış</sub> [N/mm]</strong></td>
    <td>Kasnak ile hareketli araba arasındaki aktif kayış kolunun elastik rijitliğidir; mesafe uzadıkça ters orantılı olarak düşer.</td>
  </tr>
  <tr>
    <td><strong>Tekrarlanabilirlik [±mm]</strong></td>
    <td>Aynı hedef koordinata aynı yönden yaklaşıldığında elde edilen duruş pozisyonlarının dağılım bandıdır; kayışlı modüllerde tipik olarak ±0,05 mm mertebesindedir.</td>
  </tr>
  <tr>
    <td><strong>Diş Sıyırma (Tooth Shearing)</strong></td>
    <td>İzin verilen tepe eksenel çekme kuvveti aşıldığında poliüretan dişlerin çelik kordlardan yırtılarak kopması hasarıdır.</td>
  </tr>
  <tr>
    <td><strong>Jerk (Sarsıntı Sınırlaması)</strong></td>
    <td>İvmenin zamana göre türevidir (da/dt); S-Curve hız profilleriyle sınırlanarak kayışlı eksenlerdeki mekanik yaylanma ve duruş titreşimleri bastırılır.</td>
  </tr>
  <tr>
    <td><strong>L<sub>aktif</sub> [mm]</strong></td>
    <td>Tahrik kasnağı ile hareketli taşıyıcı araba arasındaki anlık serbest kayış uzunluğudur; eksenin konumsal rijitliğini doğrudan belirler.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Triger kayışlı eksenler yüksek hız (<strong>5–10 m/s</strong>), yüksek ivme (<strong>30–50 m/s²</strong>) ve uzun stroklar için rakipsizdir.</li>
  <li>Kayış malzemesi daima <strong>Poliüretan (PU) + Çelik Kord</strong> olmalıdır; kauçuk kayışlar esneyerek konum kaçırır.</li>
  <li>3 metreden uzun stroklarda kayış sarkmasını ve elastik uzamayı önlemek için <strong>Omega Drive (Sabit Kayış)</strong> mimarisi kullanılır.</li>
  <li>Hassasiyet beklentisi ±0,05 mm'den daha darsa kayış esnemesi nedeniyle bilyalı vidaya geçilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>4 metre stroklu bir kartezyen paletleme robotunun X ekseninde vidalı mil mi kayışlı eksen mi kremayer mi seçersin? Neden?</summary>
<div>4 metre boyda vidalı mil kritik hız kamçılanması nedeniyle imkansızdır. Eğer yük çok ağır değilse (örneğin koli/kutu paletleme, itme kuvveti &lt; 2000 N ise) ve hız yüksekse (v = 2–3 m/s) en ekonomik, en hafif ve sessiz çözüm <strong>AT10 çelik kordlu Omega kayışlı modüldür</strong>. Eğer palet 1 tonluk ağır çelik parça taşıyorsa ve devasa itme torku gerekiyorsa o zaman <strong>helis kremayer-pinyon</strong> seçilmelidir.</div></details>
<details><summary>Bir kayışlı modülde araba tam durduğu anda 3-4 kez hafifçe ileri-geri titreşip (yaylanıp) öyle duruyor. Servo sürücünün pozisyon kazancını artırdığında titreşim daha da delirdi. Neden?</summary>
<div>Kayış çelik kordlu olsa da uzun boyda mekanik bir yaydır (k = E·A/L). Yükün kütlesiyle (m) birleştiğinde bir mekanik rezonans frekansı (f = √(k/m)) oluşturur. Siz servo sürücünün kazançlarını (proportional gain) artırdığınızda sürücünün tepki frekansı kayışın doğal rezonans frekansıyla çakışır ve sistem rezonansa girer. Çözüm: Kazancı kısmak, sürücüde <strong>Low-Pass veya Notch Filtre</strong> açarak kayış rezonans frekansını baskılamak ve ivmelenme profilini "S-Curve (Jerk sınırlı)" yapmaktır.</div></details>
<details><summary>Kayışlı bir lineer eksende kayış gerginliğini ayarlayan teknisyen "ne kadar sıkı olursa o kadar iyi, sıfır esner" diyerek cıvatayı sonuna kadar sıktı. Sistemde ne bozulur?</summary>
<div>Aşırı ön gerilme (over-tension) iki büyük felakete yol açar:<br>
1. Tahrik kasnağını ve avare kasnağı taşıyan <strong>rulmanlara devasa radyal statik yük</strong> biner; rulmanlar 1 ay içinde uğuldayarak dağılır.<br>
2. Kayışın içindeki çelik kordlar aşırı çekme gerilmesi altında akma sınırına yaklaşır ve motor ilk ani ivmelenmeye geçtiğinde kordlar kopar veya kasnak dişleri kayış poliüretanını sıyırır. Kayış daima katalog frekans değerine (Hz) göre ayarlanmalıdır.</div></details>
</div>
`);
