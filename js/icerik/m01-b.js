// MODÜL 1 — Malzeme Bilgisi (Bölüm 1.6 – 1.9)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m1', '1-6', `
<p class="giris">Takım tezgahı yatakları, hassas taşlama gövdeleri, endüstriyel redüktör kovanları ve ağır rulman yataklarında neden çelik yerine dökme demir tercih edilir? "Dökme demir titreşime karşı dayanıklıdır" ifadesi eksiktir; dökme demir titreşime sadece dayanmaz, serbest grafit morfolojisi sayesinde mekanik titreşim enerjisini <strong>iç sürtünmeyle doğrudan ısıya dönüştürerek sönümler</strong>. Bu bölümde lamel grafitli gri dökme demir (GJL), küresel grafitli sfero döküm (GJS), mineral döküm (polimer beton) ve bunların otomasyondaki elastomekanik davranışlarını inceliyoruz.</p>

<h2>Dökme Demirin Metalurjisi ve Çelikten Ayrımı</h2>
<p>Dökme demir, karbon içeriği <strong>ağırlıkça %2,14'ün üzerinde</strong> (tipik olarak %2,5–%4,0 C) ve %1–%3 Silisyum (Si) içeren demir-karbon alaşımıdır. Çelikte karbon katı çözelti içinde çözünürken, dökme demirde ötektik sınır aşıldığı için fazla karbon katılaşma sırasında <strong>serbest grafit (saf karbon fazı)</strong> olarak matristen ayrışır.</p>

<ul>
  <li><strong>Düşük Erime Sıcaklığı ve Yüksek Akışkanlık:</strong> Dökme demir yaklaşık 1150–1250 °C aralığında erir (çelikte 1450–1520 °C). Sıvı fazdaki yüksek akışkanlığı sayesinde karmaşık iç kanallara, ince federlere ve değişken et kalınlıklarına sahip yekpare gövdeler sıfır gözenekle dökülebilir.</li>
  <li><strong>Plastik Şekil Değiştirememe:</strong> Haddelenemez, dövülemez veya bükülemez; son geometrisine yalnızca kalıba döküm ve ardından talaşlı imalatla kavuşur.</li>
  <li><strong>Dökme Demir ile Döküm Çeliği (Cast Steel) Farkı:</strong> Döküm çeliği (EN normunda <code>G20Mn5</code>, eski <code>GS-45</code>), karbon oranı &lt; %2 olan gerçek çeliktir ve serbest grafit barındırmaz. Sünektir, kaynak edilebilir ancak sönümleme kapasitesi düşüktür.</li>
</ul>

<h2>Grafit Morfolojisi ve Dökme Demir Sınıfları</h2>
<p>Dökme demirin mekanik karakterini (gevrek mi sünek mi olacağını) doğrudan <strong>grafitin geometrik formu</strong> belirler (EN 1560):</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Grubu</th>
    <th>Grafit Şekli</th>
    <th>EN Standardı</th>
    <th>Eski DIN Normu</th>
    <th>Temel Mekanik Karakter</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Lamel Grafitli (Gri)</strong></td>
    <td>İnce pul / yapraklar</td>
    <td>EN-GJL-200 / 250 / 300</td>
    <td>GG-20 / GG-25 / GG-30</td>
    <td>Üstün titreşim sönümleme, yüksek basma mukavemeti, gevrek kırılma.</td>
  </tr>
  <tr>
    <td><strong>Küresel Grafitli (Sfero)</strong></td>
    <td>Küre / nodüller</td>
    <td>EN-GJS-400-15 / 500-7</td>
    <td>GGG-40 / GGG-50</td>
    <td>Yüksek çekme mukavemeti, tokluk, %15'e varan sünek uzama.</td>
  </tr>
  <tr>
    <td><strong>Vermiküler (Kompakt)</strong></td>
    <td>Kıvrımlı solucan tipi</td>
    <td>EN-GJV-400 / 450</td>
    <td>GGV-40</td>
    <td>Gri ile sfero arası termal iletkenlik ve mukavemet dengesi.</td>
  </tr>
  <tr>
    <td><strong>Östemperlenmiş Sfero (ADI)</strong></td>
    <td>Küre + Beynitik matris</td>
    <td>EN-GJS-800-10 / 1200-2</td>
    <td>—</td>
    <td>Olağanüstü aşınma direnci, 1200 MPa çekme mukavemeti.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Lamel Grafitli (Gri) Dökme Demir: GJL (GG)</h2>

<h3>Titreşim Sönümleme Mekanizması ve Logaritmik Dekrement</h3>
<p>Lamel grafitli dökme demirin içindeki keskin grafit yaprakları, metalik ferrit/perlit matris içinde doğal mikro-sürtünme düzlemleri oluşturur. Dinamik bir kuvvet veya titreşim dalgası malzeme boyunca ilerlerken, grafit pullarının matrisle temas ettiği yüzeylerde mikro-kaymalar (anelastik iç sürtünme) meydana gelir ve kinetik enerji anında <strong>ısı enerjisine dönüşerek sönümlenir</strong>.</p>

<div class="formul">
Λ = ln( x₁ / x₂ ) = ( 2 · π · ζ ) / √( 1 − ζ² )
<small>Λ: Logaritmik dekrement, x₁ ve x₂: Birbirini izleyen iki titreşim genliği, ζ: Bağıl sönüm oranı</small>
</div>

<p>Gri dökme demirin sönümleme kapasitesi (logaritmik dekrement Λ), yapı çeliğinin yaklaşık <strong>5 ila 15 katıdır</strong>. Bir çelik levhaya çekiçle vurulduğunda saniyelerce çınlarken; dökme demir plaka tok bir "pat" sesi çıkarır ve titreşimi milisaniyeler içinde sıfırlar. Bu nedenle yüksek hassasiyetli CNC işleme merkezleri, koordinat ölçüm tablaları ve yüksek devirli balans sehpaları GJL-250 veya GJL-300 gövdeler üzerinde çalışır.</p>

<h3>Asimetrik Mukavemet Davranışı: Basma vs. Çekme</h3>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Standardı</th>
    <th>Çekme Mukavemeti (R<sub>m</sub>)</th>
    <th>Basma Mukavemeti (σ<sub>b</sub>)</th>
    <th>Elastisite Modülü (E)</th>
    <th>Kopma Uzaması (A)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>EN-GJL-200 (GG-20)</strong></td>
    <td>200 MPa</td>
    <td><strong>~800 MPa (4 katı!)</strong></td>
    <td>90 – 110 GPa</td>
    <td>&lt; %0,5 (Gevrek)</td>
  </tr>
  <tr>
    <td><strong>EN-GJL-250 (GG-25)</strong></td>
    <td>250 MPa</td>
    <td><strong>~950 MPa</strong></td>
    <td>105 – 125 GPa</td>
    <td>&lt; %0,5</td>
  </tr>
  <tr>
    <td><strong>EN-GJL-300 (GG-30)</strong></td>
    <td>300 MPa</td>
    <td><strong>~1100 MPa</strong></td>
    <td>115 – 135 GPa</td>
    <td>&lt; %0,5</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Neden Basmada 4 Kat Daha Mukavim?</span>
Lamel grafit pullarının uçları jilet gibi keskindir. Malzemeye çekme gerilmesi uygulandığında bu keskin grafit uçlarında şiddetli gerilme yığılması (çentik etkisi) oluşur ve mikroyapı sıfır plastik uzama ile yarılır. Ancak <strong>basma gerilmesi</strong> uygulandığında grafit pulları kapanır ve yük doğrudan sağlam metalik matris tarafından taşınır. Bu yüzden dökme demir gövdeler daima basma yükü alacak şekilde tasarlanmalı; çekme ve eğilme gerilmelerinden kaçınılmalıdır.</div>

<h2>Küresel Grafitli (Sfero) Dökme Demir: GJS (GGG)</h2>
<p>Sıvı dökme demire dökümden hemen önce potada <strong>Magnezyum (Mg) veya Seryum (Ce)</strong> aşılaması yapılır. Magnezyum yüzey gerilimini değiştirerek grafitin keskin lameller yerine <strong>mükemmel kürecikler (nodüller)</strong> halinde katılaşmasını sağlar:</p>

<ul>
  <li>Küre geometrisi gerilme yığılması yaratmaz (çentik faktörü K<sub>t</sub> ≈ 1'dir).</li>
  <li>Malzeme süneklik kazanır: <strong>EN-GJS-400-15</strong> kalitesinde kopma uzaması <strong>%15–18'e</strong> ulaşır; malzeme bükülebilir ve darbe enerjisini kırılmadan yutabilir.</li>
  <li><strong>Mekanik Performans:</strong> Çekme mukavemeti R<sub>m</sub> = 400–700 MPa seviyesindedir (yapı çeliklerini geçer). Aşınma direnci ve işlenebilirliği korunurken tokluk kazanılır.</li>
  <li><strong>Otomasyondaki Kullanımı:</strong> Ağır hizmet redüktör gövdeleri, robot eksen döküm mafsalları, eksantrik pres biyel kolları, krank milleri, hidrolik bloklar ve darbeli yük taşıyan SNL/UCP rulman yatakları.</li>
</ul>

<h2>Modern Alternatif: Mineral Döküm (Polimer Beton)</h2>
<p>Son 15 yılda yüksek dinamik ivmeli kartezyen otomasyon sistemlerinde ve lazer mikromekanik tezgahlarında gri dökme demirin yerini <strong>mineral döküm (polimer beton / epoksi granit)</strong> almıştır:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mühendislik Özelliği</th>
    <th>Gri Dökme Demir (GJL-250)</th>
    <th>Mineral Döküm (Epoksi Granit)</th>
    <th>Kaynaklı Çelik Şase</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Titreşim Sönümleme Oranı</strong></td>
    <td>Referans (1×)</td>
    <td><strong>Gri Dökümden 6–10 Kat Üstün!</strong></td>
    <td>0,1× (Çok zayıf)</td>
  </tr>
  <tr>
    <td><strong>Termal Atalet (Isıl Kararlılık)</strong></td>
    <td>Hızlı ısınıp genleşir</td>
    <td><strong>Olağanüstü yüksek ısı kapasitesi</strong></td>
    <td>Düşük termal kütle</td>
  </tr>
  <tr>
    <td><strong>Lineer Isıl Genleşme (α)</strong></td>
    <td>10,5 × 10⁻⁶ K⁻¹</td>
    <td><strong>12,0 × 10⁻⁶ K⁻¹ (Çelik rayla tam uyumlu!)</strong></td>
    <td>12,0 × 10⁻⁶ K⁻¹</td>
  </tr>
  <tr>
    <td><strong>Kalıptan Entegrasyon</strong></td>
    <td>Sonradan delinir/işlenir</td>
    <td><strong>Hassas çelik ray yuvaları ve borular kalıpta dökülür</strong></td>
    <td>Talaşlı işleme gerekir</td>
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
    <th>Terim / Sembol</th>
    <th>Bilimsel & Mühendislik Tanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>EN-GJL (Lamel Grafitli Dökme Demir)</strong></td>
    <td>G: Guss (Döküm), J: Iron (Demir), L: Lamellar (Lamel). Karbonun pul halinde ayrıştığı, basma ve titreşim sönümü olağanüstü yüksek gri dökme demir normu.</td>
  </tr>
  <tr>
    <td><strong>EN-GJS (Küresel Grafitli Sfero Döküm)</strong></td>
    <td>S: Spheroidal (Küre). Sıvı metale magnezyum ilavesiyle grafitin nodül formunda katılaştırıldığı, çeliğe eşdeğer mukavemet ve tokluk sunan dökme demir normu.</td>
  </tr>
  <tr>
    <td><strong>Logaritmik Dekrement (Λ)</strong></td>
    <td>Serbest sönümlü bir titreşim hareketinde birbirini takip eden iki genlik tepe noktasının doğal logaritması. Malzemenin titreşim enerjisini yutma hızının doğrudan ölçüsüdür.</td>
  </tr>
  <tr>
    <td><strong>Mineral Döküm (Reçine Beton)</strong></td>
    <td>Farklı tane boyutlarındaki kuvars ve granit agregalarının özel epoksi reçine bağlayıcı ile soğuk dökülmesiyle üretilen, aşırı yüksek sönümlü kompozit gövde malzemesi.</td>
  </tr>
  <tr>
    <td><strong>ADI (Austempered Ductile Iron)</strong></td>
    <td>Küresel grafitli dökme demire östemperleme ısıl işlemi uygulanarak elde edilen, östenit ve beynitik matrise sahip, 1000–1400 MPa mukavemetli ileri mühendislik malzemesi.</td>
  </tr>
  <tr>
    <td><strong>İç Gerilim Giderme Yaşlandırması</strong></td>
    <td>Döküm parçaların oda sıcaklığında aylarca bekletilmesi (doğal yaşlandırma) veya 550 °C fırında tavlanmasıyla mikroyapısal artık gerilmelerin sıfırlanması süreci.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Dökme demir %2+'dan fazla karbon içerir; fazla karbon mikroyapıda serbest grafit olarak ayrışır.</li>
  <li><strong>Gri döküm (GJL / GG):</strong> Lamel grafitlidir. Titreşimi çelikten 10 kat iyi sönümler, basma mukavemeti çekmenin 4 katıdır ancak gevrektir.</li>
  <li><strong>Sfero döküm (GJS / GGG):</strong> Grafit küre formundadır. Sünektir (%15 uzama), darbe tokluğu ve çekme mukavemeti çelik seviyesindedir.</li>
  <li>Otomasyonda özel tekil şaseler kaynaklı çelikten yapılırken; redüktör kovanları, rulman yatakları ve kasnaklar hazır dökme demir olarak satın alınır.</li>
  <li>Yüksek hassasiyetli mikron altı eksenlerde dökme demirden bile 6–10 kat daha iyi titreşim sönümleyen <strong>mineral döküm (epoksi granit)</strong> tercih edilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir takım tezgahı kızak yatağında neden çelik yerine GJL-250 dökme demir tercih edilir?</summary>
<div>(1) Serbest grafit lamelleri mükemmel katı yağlayıcı görevi görür ve kuru sürtünme aşınmasını önler, (2) Titreşimi hızla sönümleyerek kesici takımın tırlamasını (chatter) engeller, (3) Talaşlı işlemede grafit talaşı kırarak pürüzsüz yüzey verir, (4) Yaşlandırılmış dökme demirin boyutsal kararlılığı yıllarca bozulmaz.</div></details>
<details><summary>Darbeli çalışan bir kırıcı mekanizmasının yatak gövdesinde GG-25 (GJL-250) yerine neden GGG-40 (GJS-400-15) kullanılmalıdır?</summary>
<div>GG-25 lamel grafitli olduğu için gevrektir (kopma uzaması &lt; %0,5) ve darbe altında çatlayarak ayaklarından anında kopar. GGG-40 ise küresel grafitlidir, %15 plastik uzama tokluğuna sahiptir; dinamik şok darbelerini çatlamadan elastoplastik olarak sönümler.</div></details>
<details><summary>Çelik gövdeli bir robot hücresi şasesinde motor titreşimleri yüzünden rezonans oluşuyor. Şaseyi yeniden üretmeden titreşimi sönümlemek için ne yapılabilir?</summary>
<div>Kutu profillerin içine kuru kuvars kumu veya döküm polimer harcı (epoksi granit) doldurulabilir. Kum tanelerinin birbirine sürtünmesi mekanik titreşim enerjisini anında ısıya çevirerek rezonans genliğini %70–80 oranında düşürür. Ayrıca motor altına viskoelastik elastomer takozlar konulmalıdır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-7', `
<p class="giris">Hafiflik, yüksek dinamik ivmelenme, korozyon direnci ve talaşlı işleme kolaylığı... Alüminyum alaşımları endüstriyel otomasyon makinelerinde çelikten sonra en yaygın kullanılan malzemedir. Ancak "alüminyum" genel bir isimdir; 5083 döküm plaka, 6082-T651 yapı alaşımı ve 7075-T651 havacılık serisi birbirinden tamamen farklı mukavemet, kaynaklanabilirlik ve boyutsal kararlılık özellikleri gösterir. Bu bölümde alüminyum alaşım serilerini, T temper durumlarını, helikoil diş standartlarını ve talaş kaldırma sonrası plaka çarpılmalarının önlenmesini inceliyoruz.</p>

<h2>Alüminyumun Temel Fizikomekanik Parametreleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Fiziksel Parametre</th>
    <th>Alüminyum Değeri</th>
    <th>Yapı Çeliği ile Kıyaslama</th>
    <th>Tasarımcının Dikkat Etmesi Gereken Nokta</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Özkütle (ρ)</strong></td>
    <td><strong>2,70 – 2,80 g/cm³</strong></td>
    <td>7,85 g/cm³ (<strong>Çeliğin ~%35'i</strong>)</td>
    <td>Hareketli kartezyen eksenlerin eylemsizlik momentini (J) dramatik düşürür.</td>
  </tr>
  <tr>
    <td><strong>Elastisite Modülü (E)</strong></td>
    <td><strong>70.000 MPa (70 GPa)</strong></td>
    <td>210.000 MPa (<strong>Çeliğin üçte biri!</strong>)</td>
    <td>Aynı kesitte çelikten 3 kat fazla esner; kesit yüksekliği büyütülmelidir.</td>
  </tr>
  <tr>
    <td><strong>Isıl Genleşme (α)</strong></td>
    <td><strong>23,4 × 10⁻⁶ K⁻¹</strong></td>
    <td>11,5 × 10⁻⁶ K⁻¹ (<strong>Çeliğin 2 katı!</strong>)</td>
    <td>Çelik lineer raylarla uzun mesafeli montajlarda bimetal bükülmesi oluşur.</td>
  </tr>
  <tr>
    <td><strong>Isıl İletkenlik (λ)</strong></td>
    <td><strong>130 – 200 W/m·K</strong></td>
    <td>45 – 50 W/m·K (<strong>Çelikten 3–4 kat iyi</strong>)</td>
    <td>Motor bağlantı flanşları ve sürücü soğutucu bloklarında ısıyı hızla dağıtır.</td>
  </tr>
  <tr>
    <td><strong>Talaşlı İşleme Hızı</strong></td>
    <td>Çok yüksek (v<sub>c</sub> &gt; 500–1500 m/dak)</td>
    <td>Çelikten 3–5 kat hızlı kesilir</td>
    <td>CNC işleme sürelerini ve parça birim imalat maliyetlerini çok düşürür.</td>
  </tr>
</tbody>
</table>
</div>

<h2>4 Haneli Alaşım Kodlama Sistemi (EN 573-1 / AA)</h2>
<p>Dövme ve haddelenmiş alüminyum alaşımlarında ilk hane ana alaşım elementini belirler:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Seri</th>
    <th>Ana Alaşım Elementi</th>
    <th>Çökelme Sertleşmesi (Isıl İşlem)</th>
    <th>Temel Karakteristik ve Otomasyondaki Yeri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1xxx</strong></td>
    <td>Saf Alüminyum (≥ %99,0 Al)</td>
    <td>Uygulanamaz</td>
    <td>Çok yumuşak, elektriksel ve termal iletkenlik maksimum. Elektrik baraları.</td>
  </tr>
  <tr>
    <td><strong>2xxx</strong></td>
    <td>Bakır (Cu)</td>
    <td>Evet (T3 / T4)</td>
    <td>Yüksek mukavemet, mükemmel talaş kırıcılığı (2007/2011 otomat alüminyumu). Korozyon ve eloksal kalitesi zayıftır.</td>
  </tr>
  <tr>
    <td><strong>5xxx</strong></td>
    <td>Magnezyum (Mg)</td>
    <td><strong>Hayır (Sadece soğuk deformasyonla pekleşir)</strong></td>
    <td><strong>Kaynaklanabilir, deniz suyuna tam dirençli.</strong> 5083 döküm ve haddelenmiş montaj tablaları, gemi yapıları.</td>
  </tr>
  <tr>
    <td><strong>6xxx</strong></td>
    <td>Magnezyum + Silisyum (Mg₂Si)</td>
    <td><strong>Evet (T5 / T6 / T651)</strong></td>
    <td><strong>Otomasyonun ana standardı!</strong> Mükemmel ekstrüzyon kabiliyeti (sigma profiller), iyi mukavemet, mükemmel eloksal. <strong>6082, 6061, 6063</strong>.</td>
  </tr>
  <tr>
    <td><strong>7xxx</strong></td>
    <td>Çinko + Magnezyum (Zn-Mg)</td>
    <td><strong>Evet (T6 / T651)</strong></td>
    <td><strong>En yüksek mukavemet (Havacılık serisi).</strong> Akma dayanımı yapı çeliğini ikiye katlar. <strong>7075-T651</strong>. Kaynak edilemez.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Temper (Isıl İşlem ve Şekillendirme) Kodları (EN 515)</h2>
<p>Alüminyumun mekanik özelliklerini alaşımı kadar temper durumu belirler. 6082 yumuşak tavlı halde 130 MPa çekme mukavemetine sahipken, T6 durumunda 310 MPa'ya fırlar:</p>

<ul>
  <li><code>O</code>: Tam tavlanmış, en yumuşak ve en yüksek süneklikteki durum.</li>
  <li><code>H111 / H32</code>: Isıl işlem görmeyen 5xxx alaşımlarında soğuk haddeleme ile kontrollü pekleştirilmiş durum.</li>
  <li><code>T4</code>: Çözeltiye alma (530 °C) + suda hızlı soğutma + oda sıcaklığında doğal yaşlandırma.</li>
  <li><code>T6</code>: Çözeltiye alma + suda soğutma + fırında yapay yaşlandırma (160–180 °C'de Mg<sub>2</sub>Si fazlarının çöktürülmesi). Maksimum akma ve çekme mukavemeti.</li>
  <li><strong><code>T651</code> (Mekanik Tasarımcının Tercihi):</strong> T6 işlemine ek olarak levhanın gerdirilerek <strong>(%1–3 kontrollü kalıcı uzatma) iç gerilmelerinin tamamen sıfırlanmasıdır</strong>. CNC frezede yoğun talaş kaldırılsa bile levha kesinlikle çarpılmaz!</li>
</ul>

<h2>Otomasyonda En Çok Kullanılan 3 Ana Alüminyum Kalitesi</h2>

<h3>1. EN AW-6082 T6 / T651 (Anticorodal): "Otomasyonun Varsayılanı"</h3>
<ul>
  <li><strong>Mekanik Değerler:</strong> R<sub>p0.2</sub> ≥ 250–260 MPa, R<sub>m</sub> ≥ 295–310 MPa, Sertlik ~95 HBW.</li>
  <li><strong>Özellikleri:</strong> Avrupa'da en yaygın talaşlı işleme alüminyumudur. Plaka, lama, dolu mil ve boru formlarında her ölçüde bulunur. Koruyucu ve sert eloksala mükemmel yanıt verir.</li>
  <li><strong>Kullanım Alanı:</strong> Robot gripper gövdeleri, pnömatik silindir bağlantı braketleri, hareketli kartezyen araba plakaları, motor adaptör flanşları.</li>
</ul>

<h3>2. Döküm Alüminyum Plaka (Cast Tooling Plate - 5083 Bazlı): "Düzlemsellik Standardı"</h3>
<p>Haddelenmiş levhalar yüzeyden talaş kaldırıldığında iç gerilme dengesizliğiyle eğrilir. Döküm plakalar ise büyük blok halinde dökülüp homojenize edilir, gerilim giderme tavına sokulur ve her iki yüzü <strong>çift taraflı hassas frezelenip folyolanarak</strong> satışa sunulur (Ticari markalar: <code>ACP 5080</code>, <code>G.AL C250</code>, <code>Alca 5</code>):</p>
<ul>
  <li><strong>Düzlemsellik ve Kalınlık Hassasiyeti:</strong> Kalınlık toleransı ±0,1 mm, düzlemsellik &lt; 0,2 mm/m'dir.</li>
  <li><strong>Sıfır Çarpılma:</strong> İç gerilme sıfıra yakın olduğu için üzerinde asimetrik derin cepler, kanallar ve delikler açılsa dahi plaka milimetrenin yüzde biri kadar bile bükülmez!</li>
  <li><strong>Kullanım Alanı:</strong> Makine taban tablaları, fikstür ana plakaları, vakum tablaları, optik ölçüm tablaları.</li>
</ul>

<h3>3. EN AW-7075 T651 (Ergal / Fortal / Alumec): "Havacılık Alüminyumu"</h3>
<ul>
  <li><strong>Mekanik Değerler:</strong> R<sub>p0.2</sub> ≥ 460–500 MPa, R<sub>m</sub> ≥ 540–580 MPa, Sertlik ~150 HBW.</li>
  <li><strong>Üstünlüğü:</strong> Akma mukavemeti S235 yapı çeliğinin iki katından fazladır. Yüksek dinamik yorulma dayanımına sahiptir.</li>
  <li><strong>Kullanım Alanı:</strong> Yüksek ivmeli hafif robot kolları, ağır yüklü gripper parmakları, yüksek basınçlı prototip kalıpları.</li>
  <li><strong>Kritik Uyarı:</strong> Kaynak edilemez (şiddetli sıcak çatlama yapar). Elastisite modülü E ≈ 71 GPa'dır; mukavemeti çok yüksek olsa da 6082 ile tamamen aynı miktarda esner!</li>
</ul>

<h2>Alüminyum ile Mekanik Tasarımda Hayati Kurallar</h2>

<h3>1. Cıvata Diş Derinliği ve Helicoil / Ensat Zorunluluğu</h3>
<p>Alüminyumun kayma mukavemeti çeliğin yarısından düşüktür. Çelik cıvata alüminyum gövdeye doğrudan sıkıldığında diş sıyırma riski çok yüksektir:</p>
<div class="kutu uyari"><span class="kb">Diş Kavrama Boyu Kuralı</span>
<ul>
  <li>Çelikte diş kavrama derinliği: <strong>1,0 × d</strong> (Ör. M8 için 8 mm diş boyu).</li>
  <li>Alüminyumda doğrudan diş kavrama derinliği: <strong>en az 2,0 × d</strong> (Ör. M8 için en az 16 mm diş boyu).</li>
  <li><strong>Sık Sökülen Bağlantılarda:</strong> Alüminyuma doğrudan kılavuz çekilmemeli; paslanmaz çelik <strong>Helicoil (tel diş yay burcu)</strong> veya <strong>Ensat (kendinden kesen çelik burç)</strong> çakılmalıdır. Aksi halde dişler birkaç demontajda sıyrılır.</li>
</ul>
</div>

<h3>2. Kaynak Isısının Mukavemeti Çökertmesi</h3>
<p>6082 ve 7075 gibi ısıl işlemle mukavemet kazanan alaşımlar kaynak edildiğinde, kaynak dikişi ve çevresindeki ITAB bölgesinde sıcaklık yapay yaşlandırma sınırını aşar. Çökelmiş Mg<sub>2</sub>Si partikülleri çözünerek matrise karışır. Kaynak sonrasında bu bölgede akma mukavemeti <strong>%40 ila %50 oranında çöker</strong> (260 MPa'dan 130 MPa'ya iner). Kaynaklı alüminyum yapılar tasarlanırken hesaplar bu zayıflamış değere göre yapılmalıdır.</p>

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
    <td><strong>Çökelme Sertleşmesi (Yaşlandırma)</strong></td>
    <td>6xxx ve 7xxx serisi alüminyum alaşımlarında katı çözeltiden intermetalik fazların (Mg<sub>2</sub>Si, MgZn<sub>2</sub>) kontrollü fırın sıcaklığında mikroskobik boyutta çöktürülerek mukavemetin artırılması süreci.</td>
  </tr>
  <tr>
    <td><strong>T651 Temper Durumu</strong></td>
    <td>Çözeltiye alınıp su verilen ve yapay yaşlandırılan malzemenin, iç gerilmelerini gidermek amacıyla %1–3 oranında kalıcı olarak çekilerek gerdirilmesi (stretching). Talaş kaldırmada sıfır çarpılma sağlar.</td>
  </tr>
  <tr>
    <td><strong>Döküm Alüminyum Plaka (Cast Plate)</strong></td>
    <td>Homojen döküm bloğundan gerilim giderme tavı yapılarak kesilen ve her iki yüzeyi çift taraflı hassas frezelenip folyolanan, sıfır iç gerilmeli montaj tabakası (ACP 5080 vb.).</td>
  </tr>
  <tr>
    <td><strong>Helicoil (Tel Diş Burcu)</strong></td>
    <td>Alüminyum gibi yumuşak malzemelere açılan dişlerin aşınmasını ve sıyrılmasını engellemek amacıyla yuvaya vidalanan elmas kesitli paslanmaz çelik yay burç elemanı.</td>
  </tr>
  <tr>
    <td><strong>Özgül Mukavemet (R<sub>m</sub> / ρ)</strong></td>
    <td>Malzemenin çekme mukavemetinin kütlesel özkütlesine oranı. Dinamik hareketli parçaların enerji tüketimi ve ivmelenme performansını belirleyen temel mühendislik kriteri.</td>
  </tr>
  <tr>
    <td><strong>Anodik Oksidasyon (Eloksal)</strong></td>
    <td>Alüminyumun sülfürik asit banyosunda elektrolitik olarak yüzeyinde kontrollü Al<sub>2</sub>O<sub>3</sub> seramik koruma tabakası (10–25 µm dekoratif, 40–60 µm sert eloksal) oluşturulması işlemi.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Alüminyum çeliğin yaklaşık 1/3 kütlesine ve 1/3 elastisite modülüne (E = 70 GPa) sahiptir.</li>
  <li>Hassas düzlem tablalarında ve fikstürlerde iç gerilmesi sıfır olan <strong>çift taraflı frezeli döküm plaka (5083 bazlı)</strong> kullanılmalıdır.</li>
  <li>Genel işleme parçalarında, braketlerde ve taşıyıcılarda standart tercih <strong>6082-T651</strong> alaşımıdır.</li>
  <li>Yüksek mukavemet gerektiren hafif parçalarda <strong>7075-T651</strong> seçilir; ancak rijitliğin değişmediği ve kaynak edilemediği unutulmamalıdır.</li>
  <li>Alüminyum gövdelere diş açılırken diş kavrama boyu en az <strong>2×d</strong> olmalı ve sık sökülen yerlerde <strong>Helicoil çelik burç</strong> kullanılmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>800×500×25 mm boyutlarında haddelenmiş 6082-T6 bir alüminyum levhaya bir yüzünden 15 mm derinliğinde hafifletme cepleri frezelenmiştir. Tezgâhtan söküldüğünde plaka muz gibi 1,2 mm sehim yapmıştır. Kök neden ve kesin çözüm nedir?</summary>
<div>Kök neden haddelenmiş levhanın içinde dengelenmiş halde bulunan imalat artık gerilmeleridir. Tek taraftan yoğun talaş kaldırıldığında gerilme dengesi bozulur ve plaka eğrilir. Kesin çözüm: (1) Sıfır iç gerilmeye sahip <strong>döküm alüminyum plaka (ACP 5080 vb.)</strong> kullanmak, ya da (2) En azından gerdirilmiş <strong>6082-T651</strong> kullanıp cebi iki taraftan simetrik paylarla kaba-finiş olarak çift bağlamada işlemektir.</div></details>
<details><summary>Bir robot tutucu parmağında 6082-T6 alüminyum parça eğilme yükü altında 0,5 mm esniyor. Parçayı aynı ölçülerde 7075-T651 (Rp0.2 = 480 MPa) yaparsak esneme ne kadar azalır?</summary>
<div>Esneme bir mikron bile azalmaz! Her iki alaşımın da Elastisite Modülü E ≈ 70 GPa'dır. 7075 parça daha yüksek yükte kırılmadan taşıyabilir ancak aynı yük altındaki sehim değeri 6082 ile tamamen aynı kalır. Esnemeyi azaltmak için parça et kalınlığı artırılmalı veya yük yönündeki kesit yüksekliği büyütülmelidir.</div></details>
<details><summary>Alüminyum bir montaj bloğuna M6 cıvata için 8 mm kılavuz çekilirse montajda ne problem yaşanır?</summary>
<div>M6 cıvata için 8 mm diş boyu sadece 1,33×d kavrama sağlar. Alüminyumun kayma mukavemeti düşük olduğundan cıvata katalog torkuna (yaklaşık 9–10 Nm) sıkılırken alüminyum dişler sıyrılarak kopar. Alüminyumda kavrama boyu en az 2×d (M6 için min. 12 mm) olmalı veya paslanmaz Helicoil burç kullanılmalıdır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-8', `
<p class="giris">Çelik ve alüminyum otomasyonun ana taşıyıcı iskeletini kursa da; bazı özel mekanik fonksiyonlar bu iki metalin limitlerini aşar: Sıfır boşluklu ve yağlamasız kaymalı sürtünme yüzeyleri, sonsuz vida mekanizmaları, patlama korumalı (ATEX) kıvılcımsız operasyonlar, yüksek akım iletimi ve mikron-altı metroloji referansları. Bu kritik görevler bakır alaşımları (kalay bronzu, alüminyum bronzu, otomat pirinci), berilyum bakırı ve doğal granit tarafından üstlenilir. Bu bölümde demir dışı özel metallerin tribolojik ve elastomekanik davranışlarını inceliyoruz.</p>

<h2>Bakır ve Bakır Alaşımlarının Sınıflandırılması</h2>

<h3>1. Saf Bakır (Cu-ETP / CW004A, Cu-OF): "Elektrik ve Termal İletim Şampiyonu"</h3>
<ul>
  <li>Gümüşten sonra bilinen en yüksek elektriksel iletkenliğe (%100 IACS) ve termal iletkenliğe (λ ≈ 390 W/m·K) sahiptir.</li>
  <li>Mekanik olarak yumuşaktır (R<sub>m</sub> ≈ 200–250 MPa) ve talaş kaldırırken kesici takıma aşırı yapışır ("sakız gibi" talaş verir).</li>
  <li><strong>Otomasyondaki Kullanımı:</strong> Pano ana bara dağıtıcıları, yüksek akım topraklama pabuçları, direnç kaynağı elektrotları, indüksiyonla sertleştirme bobinleri.</li>
</ul>

<h3>2. Otomat Pirinci (CuZn39Pb3 / CW614N / Eski "Ms58"): "Talaşlı İmalat Referansı"</h3>
<ul>
  <li>%58 Bakır, %39 Çinko ve %3 Kurşun (Pb) içerir. Kurşun partikülleri talaşı toz gibi kırarak <strong>dünyadaki en rahat işlenen metal</strong> standardını oluşturur (İşlenebilirlik indeksi = %100 kabul edilir).</li>
  <li>Korozyona dayanıklıdır, lehimlenmesi çok kolaydır ve kıvılcım çıkarmaz.</li>
  <li><strong>Otomasyondaki Kullanımı:</strong> Pnömatik rakorlar, hava dağıtım manifoldları, nipel ve valf gövdeleri, sensör mesafe kovanları, ayar vidaları.</li>
  <li><strong>RoHS/REACH Uyarısı:</strong> Kurşun kısıtlaması olan medikal ve gıda ürünlerinde kurşunsuz pirinç kaliteleri (ör. CW724R CuZn21Si3P) seçilmelidir.</li>
</ul>

<h2>Tribolojik Bronzlar: Kaymalı Yatak ve Dişli Malzemeleri</h2>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Bronz Sınıfı</th>
    <th>Standart ve Kimya</th>
    <th>Mekanik Özellikler</th>
    <th>Tribolojik Özellik ve Otomasyon Kullanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Kalay Bronzu (Phosphor Bronze)</strong></td>
    <td>CuSn12 (CC483K)<br>CuSn8 (CW453K)</td>
    <td>R<sub>m</sub> ≈ 300–350 MPa<br>Sertlik 90–100 HBW</td>
    <td><strong>Sonsuz vida çarklarının 1 numaralı malzemesidir.</strong> Çelik mille eşleştiğinde aşınma direnci ve adhezif korozyon direnci mükemmeldir. Sıvı yağlı kaymalı yataklar.</td>
  </tr>
  <tr>
    <td><strong>Alüminyum Bronzu</strong></td>
    <td>CuAl10Fe5Ni5<br>(CW307G)</td>
    <td><strong>R<sub>m</sub> ≈ 650–750 MPa</strong><br>Sertlik 160–200 HBW</td>
    <td>Çelik seviyesinde devasa mukavemete ve darbe tokluğuna sahiptir. Ağır hizmet pres kızakları, yüksek tonajlı mafsal burçları, kavitasyon dirençli pompa çarkları.</td>
  </tr>
  <tr>
    <td><strong>Sinter Bronz (Kendinden Yağlamalı)</strong></td>
    <td>Sinterlenmiş Toz Bronz<br>(ISO 5755)</td>
    <td>Gözenekli yapı (%20–25 yağ emdirilmiş)</td>
    <td><strong>Bakımsız çalışan hafif yataklar.</strong> Çalışma anında sürtünme ısısıyla gözeneklerdeki yağı yüzeye bırakır; durunca kapiler etkiyle geri çeker (Ör. Oilite burçlar).</td>
  </tr>
  <tr>
    <td><strong>Grafit Tıkaçlı Masif Bronz</strong></td>
    <td>CuZn25Al5 + Masif Grafit<br>(Oiles #500 standardı)</td>
    <td>Yüksek basma mukavemeti (&gt; 100 MPa)</td>
    <td><strong>Yağsız, kuru, yüksek yük ve salınım (oscillating) hareketleri.</strong> Kalıp kılavuz kolonları, robot gripper mafsal pimleri, fırın içi konveyör yatakları.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu ipucu"><span class="kb">Sonsuz Vida Eşleşmesi Neden Daima Çelik Vida + Bronz Çarktır?</span>
Sonsuz vida mekanizmasında vida ekseni ile çark ekseni birbirine 90° diktir ve temas çizgisi boyunca saf kayma sürtünmesi (yüksek kayma hızı v<sub>s</sub>) meydana gelir. Eğer her iki eleman da çelik yapılırsa, yüksek yerel basınç altında oksit tabakası yırtılır ve dişler birkaç dakikada soğuk kaynakla (galling) kilitlenir. Çelik vida (ör. 16MnCr5 sementasyonlu ve taşlanmış) ile kalay bronzu çark (CuSn12) eşleştiğinde; bronzun düşük sürtünme katsayısı ve gömülebilme yeteneği sayesinde sürtünme minimuma iner ve aşınma kontrollü olarak değiştirilebilir bronz çarkta toplanır.</div>

<h2>Özel Fonksiyonel Malzemeler</h2>

<h3>1. Berilyum Bakırı (CuBe2 / CW101C): "Kıvılcımsız Yüksek Mukavemet"</h3>
<ul>
  <li>%2 Berilyum içeren bakır alaşımı, çökelme sertleşmesi ile <strong>38–42 HRC</strong> sertliğe ve <strong>R<sub>m</sub> ≈ 1100–1300 MPa</strong> mukavemete ulaşır (ıslah çeliği seviyesi!).</li>
  <li><strong>ATEX ve Patlama Koruması:</strong> Sürtünme ve çarpmada kesinlikle kıvılcım çıkarmaz. Yanıcı gaz, solvent ve toz bulunan ortamlarda çalışan fikstür tırnakları ve aletler bu malzemeden yapılır.</li>
  <li>Elektrik kontak yaylarında mükemmel yorulma ömrü sunar. Berilyum tozu toksik olduğu için işlenirken ıslak kesme ve emiş sistemi zorunludur.</li>
</ul>

<h3>2. Doğal Granit (Siyah Gabon Graniti): "Metrolojik Rijitlik Standardı"</h3>
<ul>
  <li>Doğada milyonlarca yılda soğuyup kristalleştiği için <strong>iç gerilmesi kesinlikle sıfırdır</strong>. Metal gibi paslanmaz, manyetik alanlardan etkilenmez.</li>
  <li><strong>Termal Genleşme ve Sönümleme:</strong> Isıl genleşme katsayısı çok düşüktür (α ≈ 6–8 × 10⁻⁶ K⁻¹). Titreşim sönümleme kapasitesi çeliğin 10 katıdır.</li>
  <li>Hassas lepleme (lapping) ile <strong>mikron-altı (0,001 mm) düzlemsellik derecelerine (DIN 876 Sınıf 00)</strong> ulaştırılır.</li>
  <li><strong>Kullanım Alanı:</strong> CMM koordinat ölçüm tezgahları, yarı iletken wafer taşıyıcı robotların zemin şaseleri, hava yataklı (air bearing) ultra-hassas lineer eksenler.</li>
  <li>Granite diş açılamaz; bağlantılar için granit gövdeye epoksi reçine ile <strong>paslanmaz çelik dişli burçlar (insert)</strong> yapıştırılır.</li>
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
    <td><strong>CuSn12 (Kalay Bronzu)</strong></td>
    <td>%12 Kalay içeren, çeliğe karşı olağanüstü düşük sürtünme ve aşınma direnci sergileyen, sonsuz vida çarklarında ve kaymalı yataklarda kullanılan döküm bronz alaşımı.</td>
  </tr>
  <tr>
    <td><strong>CW614N (Ms58 Pirinç)</strong></td>
    <td>CuZn39Pb3 formülüne sahip, kurşun içeriği sayesinde talaşı ufalanarak dökülen, mükemmel işlenebilirlik ve korozyon direncine sahip standart otomat pirinci.</td>
  </tr>
  <tr>
    <td><strong>Kendinden Yağlamalı Sinter Burç</strong></td>
    <td>Metal tozu preslenip fırınlanarak oluşturulan mikro gözeneklerine vakum altında madeni yağ emdirilen ve çalışma sırasında yağı yüzeye salan gözenekli yatak elemanı.</td>
  </tr>
  <tr>
    <td><strong>Grafit Tıkaçlı Burç (Oiles)</strong></td>
    <td>Yüksek mukavemetli bronz gövdeye açılmış geometrik ceplere masif katı grafit silindirlerin preslendiği, yüksek yük ve düşük hızda yağsız çalışan kuru yatak burcu.</td>
  </tr>
  <tr>
    <td><strong>CuBe2 (Berilyum Bakırı)</strong></td>
    <td>Çökelme sertleşmesiyle 40 HRC sertliğe ve 1300 MPa mukavemete ulaşabilen, elektriksel iletkenliği yüksek ve çarpmada mekanik kıvılcım çıkarmayan özel bakır alaşımı.</td>
  </tr>
  <tr>
    <td><strong>IACS (% İletkenlik Standardı)</strong></td>
    <td>International Annealed Copper Standard. Standart tavlı saf bakırın elektriksel iletkenliğini %100 kabul eden uluslararası iletkenlik kıyaslama birimi.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Elektrik ve ısı iletiminde saf bakır (Cu-ETP); pnömatik bağlantı rakorlarında ve kolay işlenen fittingslerde otomat pirinci (CW614N / Ms58) kullanılır.</li>
  <li>Sonsuz vida çarklarında çelik vidanın karşısına adhezif yenmeyi önlemek için mutlaka <strong>CuSn12 kalay bronzu</strong> seçilmelidir.</li>
  <li>Bakımsız, yağlanamayan ve düşük-orta hızlı kaymalı hareketlerde <strong>sinter bronz</strong> veya <strong>grafit tıkaçlı bronz burçlar</strong> tercih edilir.</li>
  <li>Patlayıcı ATEX ortamlarında kıvılcım çıkarmayan ve çelik kadar mukavim parçalar için <strong>berilyum bakırı (CuBe2)</strong> kullanılır.</li>
  <li>Hassas ölçüm makinelerinde (CMM) ve mikron altı eksenlerde sıfır iç gerilme ve yüksek termal kararlılık için <strong>doğal granit</strong> şaseler esastır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir konveyörde salınım hareketi yapan ve günde sadece 50 kez açılıp kapanan yüksek yüklü bir menteşe mafsalında neden bilyalı rulman yerine grafit tıkaçlı bronz burç seçilmelidir?</summary>
<div>Bilyalı rulmanlar tam dairesel dönme hareketi için tasarlanmıştır. Dar açılı salınım (ör. 30° ileri-geri) hareketinde bilyalar daima aynı temas noktalarına basar; yağlama filmi oluşamaz ve bilyalar bileziğe gömülerek "sahte brinell" (false brinelling) hasarı oluşturur. Grafit tıkaçlı bronz burç ise masif temas alanına sahiptir, yağlama filmi gerektirmez ve yüksek temas basınçlarını sıfır aşınma ile karşılar.</div></details>
<details><summary>Çelik bir mil üzerine preslenen sinter bronz burç montaj sonrasında sıkışıp mili kilitlemiştir. Kök neden nedir?</summary>
<div>Sinter bronz burçlar gözenekli yapıları nedeniyle ince cidarlıdır. Yuvaya sıkı geçme (interference fit) ile çakıldıklarında dış çap sıkışması iç çapa birebir yansır ve iç çap toleransı daralır. Montaj sonrası iç çap büzülmesi hesaba katılmalı ve üreticinin tavsiye ettiği pimli montaj malafaları kullanılmalıdır.</div></details>
<details><summary>Sonsuz vida tahrikinde hem vidayı hem de çarkı 42CrMo4 çeliğinden imal edip çalıştırırsak ne olur?</summary>
<div>Sonsuz vida mekanizmasında saf kayma sürtünmesi çok yüksektir. İki aynı sertlikteki çelik birbirine bastığında koruyucu film yırtılır, yüzey pürüzleri mikroskobik olarak birbirine kaynar (galling) ve mekanizma birkaç yüz devir içinde dişleri sararak tamamen kilitlenir. Çark mutlaka bronz (CuSn12) olmalıdır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-9', `
<p class="giris">Hafiflik, elektriksel yalıtım, düşük sürtünme katsayısı, kimyasal direnç ve yağlamasız kuru çalışma... Mühendislik plastikleri modern otomasyon hatlarında kayıcı pabuçlardan konveyör yıldızlarına, robot gripper parmaklarından koruyucu kabin camlarına kadar her yerdedir. Ancak plastikleri metallerden ayıran en kritik gerçek <strong>viskoelastik davranışlarıdır</strong>: Zamanla yük altında şekil değiştirirler (sürünme), ortamdaki nemi emerek şişerler ve ısıl genleşme katsayıları metallerden 10 kat daha büyüktür. Bu bölümde POM, PA, PE-UHMW, PTFE, PEEK, PC ve poliüretanın elastomekanik sınırlarını ve tasarım kurallarını inceliyoruz.</p>

<h2>Plastiklerin Metallerden Temel Farkları</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mühendislik Özelliği</th>
    <th>Mühendislik Plastiği</th>
    <th>Metaller (Çelik / Alüminyum)</th>
    <th>Tasarımcının Alması Gereken Önlem</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Elastisite Modülü (E)</strong></td>
    <td><strong>1,0 – 4,0 GPa</strong></td>
    <td>70 – 210 GPa (<strong>50–200 kat daha rijit</strong>)</td>
    <td>Yapısal ana taşıyıcı olarak kullanılmaz; esneme toleransları geniş tutulmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Isıl Genleşme (α)</strong></td>
    <td><strong>60 – 200 × 10⁻⁶ K⁻¹</strong></td>
    <td>11 – 23 × 10⁻⁶ K⁻¹ (<strong>Metallerin 5–15 katı!</strong>)</td>
    <td>Uzun plastik kılavuzlarda cıvatalar oval deliklere bağlanmalı, genleşme payı bırakılmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Sürünme (Viskoelastik Creep)</strong></td>
    <td>Sabit yük altında zamanla sürekli akar</td>
    <td>Oda sıcaklığında akma sınırı altında sürünmez</td>
    <td>Plastiğe basan cıvatalar zamanla gevşer; metal mesafe burçları (collar) kullanılmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Nem Absorpsiyonu</strong></td>
    <td>Bazı polimerlerde %0,2 – %3,5 su emme</td>
    <td>Sıfır</td>
    <td>Poliamid gibi nem çeken plastiklerde parçanın şişmesi hesaba katılmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Tribolojik Kuru Sürtünme</strong></td>
    <td>µ ≈ 0,05 – 0,25 (Kendinden yağlayıcı)</td>
    <td>µ ≈ 0,6 – 0,8 (Yağlama şart)</td>
    <td>Yağsız temiz oda, gıda ve tozlu ortamlarda kayıcı pabuç ve burç olarak mükemmeldir.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Endüstriyel Otomasyonun Temel Mühendislik Plastikleri</h2>

<h3>1. POM (Polioksimetilen / Poliasetal / "Delrin"): "Hassas Makine Plastiği"</h3>
<ul>
  <li><strong>Mekanik Değerler:</strong> E ≈ 2,8–3,2 GPa, R<sub>m</sub> ≈ 65–70 MPa, Sertlik ~80 Shore D.</li>
  <li><strong>Üstünlükleri:</strong> Nemi neredeyse hiç emmez (&lt; %0,2); <strong>ölçü kararlılığı mükemmeldir</strong>. CNC frezede talaşı pirinç gibi pürüzsüz kırılır. Elastik geri yaylanma (snap-fit tırnak) kabiliyeti çok iyidir.</li>
  <li><strong>Kullanım Alanı:</strong> Hassas burçlar, plastik düz/helis dişliler, kam makaraları, gripper parmak uçları, fikstür merkezleme blokları. "Plastikten hassas parça" deniyorsa ilk tercih <strong>POM-C (kopolimer)</strong>'dir.</li>
</ul>

<h3>2. PA (Poliamid / "Naylon" - PA6, PA66, PA6-G Döküm): "Darbe ve Aşınma Ustası"</h3>
<ul>
  <li><strong>Özellikleri:</strong> Son derece <strong>toktur</strong>, dinamik darbelere dayanıklıdır, aşınma direnci yüksektir ve ekonomiktir. Yağ katkılı döküm poliamid (PA6-G+Oil) ve MoS₂ katkılı siyah versiyonları sürtünmeyi daha da düşürür.</li>
  <li><strong>Büyük Kusuru (Higroskopik Davranış):</strong> Havadaki bağıl nemi sünger gibi çeker (doygunlukta %2,5–3 su emer). Su emdikçe <strong>boyutları %0,5–1 oranında büyür (şişer)</strong>. Darbe tokluğu artarken sertliği ve mukavemeti düşer.</li>
  <li><strong>Kullanım Alanı:</strong> Büyük modüllü konveyör zincir dişlileri, vinç halat makaraları, darbe takozları. <strong>Hassas toleranslı burçlarda PA KULLANILMAZ</strong> (yazın şişip mili kilitler!).</li>
</ul>

<h3>3. PE-UHMW (Ultra Yüksek Molekül Ağırlıklı Polietilen / "PE 1000"): "Aşınma Canavarı"</h3>
<ul>
  <li><strong>Moleküler Yapı:</strong> Milyonlarca karbon atomundan oluşan ultra uzun polimer zincirleri içerir. <strong>Abrasif aşınma direnci paslanmaz çelikten bile daha yüksektir!</strong></li>
  <li>Sürtünme katsayısı çok düşüktür (µ ≈ 0,10–0,15), su emmesi sıfırdır, gıdaya tam uyumludur (FDA onaylı).</li>
  <li><strong>Zayıflıkları:</strong> Rijitliği çok düşüktür (E ≈ 0,7 GPa), sıcaklık dayanımı sınırlıdır (maks. 80 °C), ısıl genleşmesi devasadır (α ≈ 150–200 × 10⁻⁶ K⁻¹). Yapıştırılamaz ve kaynak edilemez.</li>
  <li><strong>Kullanım Alanı:</strong> Şişeleme ve ambalaj konveyörlerinin aşınma kızakları, zincir kılavuz profilleri, dolum makinesi yıldız tekerlekleri, kayar oluk astarları.</li>
</ul>

<h3>4. PTFE (Politetrafloroetilen / "Teflon"): "Sürtünmesiz Kimyasal Zırh"</h3>
<ul>
  <li>Bilinen en düşük katı sürtünme katsayısına (µ ≈ 0,04–0,08) sahiptir ve −200 °C ile +260 °C arasında çalışır. Kral suyu dahil hiçbir asitten etkilenmez.</li>
  <li><strong>Mekanik Zaafı (Aşırı Sürünme):</strong> Sürekli basma yükü altında bal mumu gibi akar (cold flow). Katkısız PTFE yatak olarak kullanılırsa yük altında ezilir; bu yüzden yataklarda cam elyaf, karbon veya bronz dolgulu PTFE kullanılır.</li>
  <li><strong>Kullanım:</strong> Kimyasal valf contaları, yüksek sıcaklık ısıl yapıştırma çenelerinin teflon şeritleri, kayar pabuç kaplamaları.</li>
</ul>

<h3>5. PEEK (Polietereterketon): "Ultra Performanslı Termoplastik"</h3>
<ul>
  <li><strong>Olağanüstü Özellikler:</strong> Sürekli 250 °C çalışma sıcaklığı, E ≈ 4,0 GPa, R<sub>m</sub> ≈ 100 MPa, mükemmel kimyasal ve gamma ışını direnci, defalarca otoklavda steril edilebilme.</li>
  <li><strong>Kullanım Alanı:</strong> Yarı iletken çip üretim fikstürleri, havacılık konnektörleri, yüksek sıcaklıklı kimyasal valf yuvaları, metal yerine geçen hafif dinamik parçalar.</li>
  <li><strong>Maliyeti:</strong> POM'un yaklaşık <strong>20 ila 30 katı</strong> fiyata sahiptir; sadece alternatifsiz ekstrem durumlarda kullanılır.</li>
</ul>

<h3>6. Şeffaf Paneller: PC (Polikarbonat) vs. PMMA (Pleksiglas) Emniyet Kriteri</h3>
<div class="kutu tehlike"><span class="kb">İş Güvenliği Uyarısı (EN ISO 14120)</span>
Makine koruyucu kapaklarında ve operatör gözetleme pencerelerinde <strong>ASLA pleksiglas (PMMA / Akrilik) KULLANILMAMALIDIR!</strong>
<ul>
  <li><strong>PMMA (Akrilik / Pleksiglas):</strong> Gevrektir. Bir parça fırladığında veya robot çarptığında bomba gibi patlayarak keskin kılıç benzeri parçalara ayrılır; operatörü yaralar.</li>
  <li><strong>PC (Polikarbonat / "Lexan / Makrolon"):</strong> Darbe tokluğu camın 250 katıdır. Çekiçle vurulduğunda dahi kırılmaz, sadece esner veya çatlar; kurşun geçirmez camların hammaddesidir. Makine emniyet kabinlerinin şeffaf panelleri istisnasız <strong>Polikarbonat (PC)</strong> olmalıdır.</li>
</ul>
</div>

<h3>7. Poliüretan (PU): Endüstriyel Elastomer</h3>
<p>Sertliği <strong>Shore A</strong> veya <strong>Shore D</strong> sklasıyla belirtilir:</p>
<ul>
  <li><code>70–80 Shore A</code>: Yumuşak vakum vantuzları, sızdırmazlık contaları.</li>
  <li><code>90–95 Shore A</code>: Endüstriyel darbe tamponları, silindir sonu stoperleri, çeneli kaplin yıldızları (elastomer spider).</li>
  <li>Mükemmel yırtılma direnci, yağ direnci ve darbe sönümleme kapasitesi sunar. Kauçuktan 5–10 kat daha uzun aşınma ömrüne sahiptir.</li>
</ul>

<h2>Plastik Parçalarda Boyutlandırma ve PV Değeri</h2>
<p>Kuru çalışan kaymalı plastik burç ve pabuçlarda tasarım sınırı <strong>PV Faktörü</strong> ile belirlenir:</p>
<div class="formul">
PV = P · V &nbsp;&nbsp;[MPa · m/s]
<small>P: Yatak yüzey basıncı (F / A) [MPa], V: Kayma hızı [m/s]</small>
</div>
<p>PV değeri üretici kataloğundaki kritik PV sınırını aşarsa; sürtünmeden doğan ısı plastiğin termal iletimi düşük olduğu için gövdeden atılamaz, yüzey erir ve yatak anında kilitlenir.</p>

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
    <td><strong>Viskoelastisite ve Sürünme (Creep)</strong></td>
    <td>Polimerlerin sabit bir mekanik gerilme altında zamanla sürekli kalıcı plastik şekil değiştirmesi olayı. Yük altında cıvata ön gerilmesinin düşmesine yol açar.</td>
  </tr>
  <tr>
    <td><strong>Higroskopik Davranış (Su Emme)</strong></td>
    <td>Plastik malzemenin (özellikle PA6) ortamdaki su buharını moleküler zincir aralarına alarak şişmesi, boyutlarının büyümesi ve sertliğinin düşmesi karakteristiği.</td>
  </tr>
  <tr>
    <td><strong>POM (Polioksimetilen / Delrin)</strong></td>
    <td>Yüksek elastik modülü, sıfıra yakın nem emmesi ve mükemmel işlenebilirliği ile hassas makine parçalarında standart kabul edilen termoplastik.</td>
  </tr>
  <tr>
    <td><strong>PE-UHMW (PE 1000)</strong></td>
    <td>Molekül ağırlığı 3–6 milyon g/mol olan, sürtünme katsayısı ve abrasif aşınma direnci çeliği geride bırakan konveyör kılavuz plastiği.</td>
  </tr>
  <tr>
    <td><strong>PV Değeri Limiti</strong></td>
    <td>Kaymalı yataklarda uygulanan temas basıncı (P [MPa]) ile kayma hızının (V [m/s]) çarpımı. Sürtünme ısı üretim hızını ve termal erime eşiğini belirler.</td>
  </tr>
  <tr>
    <td><strong>Shore Sertliği (A / D)</strong></td>
    <td>Elastomer ve plastiklerin batma direncini ölçen standart skala (ISO 868). Yumuşak kauçuklar Shore A ile, sert plastikler Shore D ile derecelendirilir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Plastikler metallerden 10 kat fazla genleşir, yük altında zamanla sürünür (akar) ve rijitlikleri çok düşüktür.</li>
  <li>Hassas boyutlu burç, dişli ve tutucu parçalarda nem emmeyen <strong>POM (Delrin)</strong> standarttır.</li>
  <li>Konveyör kılavuzlarında ve aşınma hatlarında rakipsiz malzeme <strong>PE-UHMW (PE 1000)</strong>'dir.</li>
  <li>Poliamid (PA6) yüksek tokluğa sahiptir ancak nem çekerek şişer; hassas delik çaplarında kullanılmamalıdır.</li>
  <li>Makine koruyucu pencerelerinde iş güvenliği gereği darbe dirençli <strong>Polikarbonat (PC)</strong> kullanılmalı, gevrek PMMA'dan kaçınılmalıdır.</li>
  <li>Plastik kaymalı yatak tasarımında basınç × hız çarpımı olan <strong>PV değeri limiti</strong> mutlaka kontrol edilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Yaz aylarında nemli bir fabrikada çalışan konveyörün PA6'dan (naylon) işlenmiş mil burçları 2 ay sonra milleri sıkıştırıp motoru aşırı akımdan durdurmuştur. Kök neden ve malzeme çözümü nedir?</summary>
<div>Kök neden poliamidin (PA6) yüksek higroskopik karakteridir. Ortamdaki nemi emen PA6 hacimsel olarak genleşmiş (iç çap daralmış), buna yaz sıcağının ısıl genleşmesi de eklenince milden gelen çalışma boşluğunu sıfırlayarak mili kilitlemiştir. Kesin çözüm: Nemi neredeyse hiç emmeyen (&lt; %0,2) <strong>POM-C (Delrin)</strong> veya kendinden yağlamalı <strong>PET-TX</strong> malzemesine geçmek ve başlangıç çalışma boşluğunu artırmaktır.</div></details>
<details><summary>Bir konveyörde 3 metre uzunluğundaki PE-UHMW aşınma şeridi çelik şaseye 200 mm aralıklarla havşa başlı cıvatalarla sıkıca vidalanmıştır. Sıcaklık 20 °C arttığında şerit dalga dalga kabarmıştır. Neden?</summary>
<div>PE-UHMW'nin ısıl genleşme katsayısı (α ≈ 180 × 10⁻⁶ K⁻¹) çeliğin yaklaşık 15 katıdır. 3 metrelik şerit 20 °C sıcaklık farkıyla yaklaşık ΔL = 3000 × (180 − 12) × 10⁻⁶ × 20 ≈ 10,1 mm uzamak ister. Cıvatalarla iki ucundan rijit kilitlendiği için bu 10 milimetrelik uzama eksenel basma gerilmesine ve profilin yukarı doğru dalgalanmasına (buckling) yol açar. Çözüm: Şerit bir uçtan sabitlenmeli, diğer tüm delikler eksenel yönde oval (slot) açılmalı ve cıvatalar pulla hafif boşluklu sıkılmalıdır.</div></details>
<details><summary>Yüksek hızlı bir kartezyen montaj robotunun kabin camı için tedarikçi ucuz olduğu için 5 mm Pleksiglas (PMMA) önermiştir. Bir mekanik tasarımcı olarak neden bu teklifi derhal reddetmelisiniz?</summary>
<div>PMMA (Akrilik / Pleksiglas) aşırı gevrektir ve darbe tokluğu çok düşüktür. Kartezyen robotun ucundaki metal bir gripper veya iş parçası yüksek hızda koptuğunda cama çarparsa, PMMA bir cam gibi tuzla buz olarak keskin parçalara ayrılır ve operatörün hayatını tehlikeye atar (EN ISO 14120 standardına aykırıdır). Koruma panellerinde darbe dayanımı camdan 250 kat yüksek olan ve kırılmayan <strong>Polikarbonat (PC)</strong> kullanılmalıdır.</div></details>
</div>
`);
