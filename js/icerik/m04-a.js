// MODÜL 4 — Makine Elemanları (Bölüm 4.1 – 4.6: Bağlantı Elemanları, Miller, Geçmeler)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m4', '4-1', `
<p class="giris">Bağlantı elemanları, otomasyon sistemlerinde statik ve dinamik yük transferinin kilit noktasıdır. Yanlış seçilmiş bir cıvata boyutu, kalitesi veya diş profili; sadece bağlantının kopmasına değil, makinenin rezonansa girmesine, geometrik hassasiyetinin kaybolmasına ve yorulma çatlaklarına yol açar. Bu bölümde cıvata mukavemet sınıflarının metalurjik kökenini, delik geometrisi standartlarını ve kritik tasarım kurallarını inceliyoruz.</p>

<h2>Cıvata Mukavemet Sınıfları ve Mekanik Karakteristikler (ISO 898-1)</h2>
<p>Metrik çelik cıvatalarda kullanılan nokta gösterimi (örneğin <code>8.8</code>, <code>10.9</code>, <code>12.9</code>), malzemenin gerilme-şekil değiştirme diyagramındaki iki temel eşiği belirler:</p>
<div class="formul">
R<sub>m</sub> = İlk Sayı × 100 &nbsp;[MPa]&nbsp;&nbsp;(Nominal Çekme Mukavemeti)<br>
R<sub>e</sub> (veya R<sub>p0,2</sub>) = İlk Sayı × İkinci Sayı × 10 &nbsp;[MPa]&nbsp;&nbsp;(Akma Mukavemeti)
</div>

<p>Bu değerler oda sıcaklığında (20 °C) geçerlidir. Sıcaklık arttıkça (özellikle 150 °C üzerinde) akma mukavemeti belirgin şekilde düşer.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Özellik / Parametre</th>
    <th>Sınıf 4.8</th>
    <th>Sınıf 8.8</th>
    <th>Sınıf 10.9</th>
    <th>Sınıf 12.9</th>
    <th>Paslanmaz A2-70</th>
    <th>Paslanmaz A4-80</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Çekme Mukavemeti R<sub>m</sub> [MPa]</strong></td>
    <td>400</td>
    <td>800</td>
    <td>1000</td>
    <td>1200</td>
    <td>700</td>
    <td>800</td>
  </tr>
  <tr>
    <td><strong>Akma Mukavemeti R<sub>e</sub> [MPa]</strong></td>
    <td>320</td>
    <td>640</td>
    <td>900</td>
    <td>1080</td>
    <td>450</td>
    <td>600</td>
  </tr>
  <tr>
    <td><strong>Kopma Uzaması A [%]</strong></td>
    <td>%14 (Sünek)</td>
    <td>%12 (Dengeli)</td>
    <td>%9 (Orta Tok)</td>
    <td>%8 (Düşük Tokluk)</td>
    <td>%40 (Çok Sünek)</td>
    <td>%30 (Sünek)</td>
  </tr>
  <tr>
    <td><strong>Sertlik Aralığı</strong></td>
    <td>~130–160 HB</td>
    <td>22–32 HRC</td>
    <td>32–39 HRC</td>
    <td>39–44 HRC</td>
    <td>~210 HB (Manyetik Değil)</td>
    <td>~240 HB (Manyetik Değil)</td>
  </tr>
  <tr>
    <td><strong>Darbe Enerjisi KV (-20 °C)</strong></td>
    <td>Test edilmez</td>
    <td>min. 27–30 J</td>
    <td>min. 20 J</td>
    <td>min. 15 J (Gevrek)</td>
    <td>Yüksek (Östenitik)</td>
    <td>Çok Yüksek</td>
  </tr>
  <tr>
    <td><strong>Hidrojen Kırılganlığı Riski</strong></td>
    <td>Yok</td>
    <td>Düşük</td>
    <td>Orta</td>
    <td><strong>Çok Yüksek</strong></td>
    <td>Yok</td>
    <td>Yok</td>
  </tr>
  <tr>
    <td><strong>Göreceli Maliyet Faktörü</strong></td>
    <td>0,6×</td>
    <td>1,0× (Referans)</td>
    <td>1,3×</td>
    <td>1,8×</td>
    <td>3,5×</td>
    <td>5,0×</td>
  </tr>
</tbody>
</table>
</div>

<h2>Arıza Modları Kıyaslaması: Hangi Cıvata Ne Zaman Tercih Edilir?</h2>
<div class="iki-sutun">
  <div>
    <h4>Neden 8.8? (Endüstrinin Genel Tercihi)</h4>
    <ul>
      <li>Yüksek süneklik (A ≥ %12) sayesinde aşırı yüklenmelerde ani gevrek kopma yerine önce kalıcı uzama gösterir.</li>
      <li>Galvaniz asit banyolarında hidrojen kırılganlığına maruz kalmaz.</li>
      <li>Fiyat/performans oranı rakipsizdir.</li>
      <li><strong>Tercih yeri:</strong> Şaseler, sigma profil montajları, genel koruma panelleri, orta yüklü yatak blokları.</li>
    </ul>
  </div>
  <div>
    <h4>10.9 ve 12.9 Nerelerde Zorunludur?</h4>
    <ul>
      <li><strong>10.9:</strong> Dinamik tersinir yük altındaki robot flanşları, ağır iş mili yataklamaları, dar hacimde yüksek ön gerilme gereken otomotiv fikstürleri.</li>
      <li><strong>12.9:</strong> Yüksek basınçlı hidrolik valf blokları, kesme/bükme pres kalıpları.</li>
      <li><strong>12.9 Tehlikesi:</strong> Dinamik titreşimli veya korozyona açık ortamda 12.9 kullanımı çatlak ilerlemesini hızlandırır. Asla galvaniz kaplanmamalı (dakromet veya fosfat tercih edilmeli).</li>
    </ul>
  </div>
</div>

<h2>Geçiş Delikleri Standartları (ISO 273)</h2>
<p>Cıvatanın gövdesinin rahat geçebilmesi ve montajda parçaların kasılmaması için delik çapları cıvata anma çapından daima büyük delinir. ISO 273 üç sınıf tanımlar:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Anma Çapı</th>
    <th>İnce (Fine) - H12<br><small>Hassas konumlu gövdeler</small></th>
    <th>Orta (Medium) - H13<br><small>Endüstriyel Standart</small></th>
    <th>Kaba (Coarse) - H14<br><small>Kaynaklı şaseler / Döküm</small></th>
    <th>Havşa Çapı D<sub>k</sub> (ISO 4762)<br><small>İnbus Kafa Cebi</small></th>
    <th>Havşa Derinliği t<br><small>Kafa Kalınlığı + 1 mm</small></th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>M4</strong></td>
    <td>Ø4,3 mm</td>
    <td>Ø4,5 mm</td>
    <td>Ø4,8 mm</td>
    <td>Ø8,0 mm</td>
    <td>4,5 mm</td>
  </tr>
  <tr>
    <td><strong>M5</strong></td>
    <td>Ø5,3 mm</td>
    <td>Ø5,5 mm</td>
    <td>Ø5,8 mm</td>
    <td>Ø10,0 mm</td>
    <td>5,5 mm</td>
  </tr>
  <tr>
    <td><strong>M6</strong></td>
    <td>Ø6,4 mm</td>
    <td>Ø6,6 mm</td>
    <td>Ø7,0 mm</td>
    <td>Ø11,5 mm</td>
    <td>6,5 mm</td>
  </tr>
  <tr>
    <td><strong>M8</strong></td>
    <td>Ø8,4 mm</td>
    <td>Ø9,0 mm</td>
    <td>Ø10,0 mm</td>
    <td>Ø15,0 mm</td>
    <td>8,5 mm</td>
  </tr>
  <tr>
    <td><strong>M10</strong></td>
    <td>Ø10,5 mm</td>
    <td>Ø11,0 mm</td>
    <td>Ø12,0 mm</td>
    <td>Ø18,0 mm</td>
    <td>10,5 mm</td>
  </tr>
  <tr>
    <td><strong>M12</strong></td>
    <td>Ø13,0 mm</td>
    <td>Ø13,5 mm</td>
    <td>Ø14,5 mm</td>
    <td>Ø21,0 mm</td>
    <td>12,5 mm</td>
  </tr>
  <tr>
    <td><strong>M16</strong></td>
    <td>Ø17,0 mm</td>
    <td>Ø17,5 mm</td>
    <td>Ø18,5 mm</td>
    <td>Ø27,0 mm</td>
    <td>16,5 mm</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu uyari"><span class="kb">Tasarım Kuralı: Havşa Cebi Et Kalınlığı</span>
Bir plakaya inbus cıvata kafası için havşa cebi açarken cep tabanında kalan et kalınlığı, cıvatanın anma çapından (d) küçük olmamalıdır (t<sub>taban</sub> ≥ d). Örneğin M8 cıvata için cep altındaki et kalınlığı en az 8 mm kalmalıdır; aksi takdirde sıkma anında plaka tabanı yırtılır.</div>

<h2>Diş Sıyırma Dayanımı ve Kavrama Boyu Hesabı</h2>
<p>Cıvatanın çekme gerilmesi altında gövdeden kopması ile somun/delik dişlerinin kesilerek sıyrılması arasındaki denge kritik tasarım kriteridir. İdeal tasarımda <strong>cıvata gövdeden kopmalı, ana gövdenin dişleri asla sıyrılmamalıdır</strong> (çünkü cıvatayı değiştirmek, koca makine gövdesini değiştirmekten çok daha kolaydır!).</p>
<div class="formul">
L<sub>e</sub> ≥ ( 2 · A<sub>s</sub> ) / ( π · d<sub>2</sub> · k<sub>s</sub> )
<small>L<sub>e</sub>: Minimum kavrama boyu [mm], A<sub>s</sub>: Cıvata gerilme kesit alanı [mm²], d<sub>2</sub>: Diş bölüm dairesi çapı [mm], k<sub>s</sub>: Karşı malzemenin kesme mukavemeti oranı (τ<sub>gövde</sub> / R<sub>m,cıvata</sub>)</small>
</div>

<p>Mühendislik pratiğinde kullanılan emniyetli kavrama boyu kuralları:</p>
<ul>
  <li><strong>Çelik Gövdelerde (S235, C45):</strong> <code>L<sub>e</sub> = 1,0 – 1,25 × d</code> (Örnek M8 için en az 8–10 mm dolu diş)</li>
  <li><strong>Dökme Demirde (GG25, GGG40):</strong> <code>L<sub>e</sub> = 1,25 – 1,5 × d</code> (Örnek M8 için en az 10–12 mm dolu diş)</li>
  <li><strong>Alüminyum Alaşımlarında (6082-T6):</strong> <code>L<sub>e</sub> = 2,0 – 2,5 × d</code> (Örnek M8 için en az 16–20 mm dolu diş!)</li>
  <li><strong>Mühendislik Plastiklerinde (POM, PA):</strong> <code>L<sub>e</sub> = 3,0 × d</code> (veya doğrudan metal diş burcu/insert kullanılmalı)</li>
</ul>

<div class="kutu tehlike"><span class="kb">Kör Delik Delme ve Kılavuz Payı</span>
Kör bir deliğe kılavuz çekerken matkap derinliği (t<sub>delik</sub>) ile kılavuz çekilmiş diş derinliği (t<sub>diş</sub>) aynı olamaz! Matkap ucundaki 118°'lik koniklik ve kılavuzun konik giriş ucu hesaba katılmalıdır:<br>
<code>t<sub>delik</sub> = t<sub>diş</sub> + (3 ila 5 × Hatve)</code>.<br>
Örnek: M8 (hatve 1,25 mm) için 16 mm aktif diş lazımsa, delik en az <code>16 + 5 × 1,25 ≈ 22,25 mm</code> delinmelidir.</div>

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
    <td><strong>R<sub>m</sub> [MPa]</strong></td>
    <td>Nominal Çekme Mukavemeti (Ultimate Tensile Strength). Malzemenin tek eksenli statik çekme altında boyun verme öncesinde dayanabileceği maksimum mühendislik gerilmesidir (ISO 898-1 ilk sayısının 100 katı).</td>
  </tr>
  <tr>
    <td><strong>R<sub>e</sub> / R<sub>p0,2</sub> [MPa]</strong></td>
    <td>Akma Dayanımı (Yield Strength). Malzemede kalıcı plastik deformasyonun başladığı gerilme sınırıdır. Akma eşiği belirgin olmayan çeliklerde %0,2 kalıcı birim uzamaya karşılık gelen gerilmedir.</td>
  </tr>
  <tr>
    <td><strong>A [%]</strong></td>
    <td>Kopma Uzaması (Elongation at Break). Çekme numunesinin kopma anındaki kalıcı plastik uzama yüzdesidir; bağlantı elemanının sünekliğinin ve tokluğunun temel göstergesidir.</td>
  </tr>
  <tr>
    <td><strong>Hidrojen Kırılganlığı</strong></td>
    <td>Yüksek mukavemetli çeliklerin (özellikle Sınıf 12.9) asitle dağlama veya galvaniz banyolarında atomik hidrojen difüzyonuna uğrayarak, statik yük altında aniden ve gevrek olarak çatlaması felaketidir.</td>
  </tr>
  <tr>
    <td><strong>L<sub>e</sub> [mm]</strong></td>
    <td>Efektif Kavrama Boyu (Engagement Length). Cıvata ile diş açılmış gövde arasındaki kesme yükünü aktaran aktif diş uzunluğudur. Malzemenin kesme mukavemetine göre boyutlandırılır.</td>
  </tr>
  <tr>
    <td><strong>ISO 273</strong></td>
    <td>Cıvata ve vida geçiş delikleri uluslararası standardıdır. İnce (H12), orta (H13) ve kaba (H14) olmak üzere üç tolerans sınıfında montaj kolaylığı ve kasılma payı tanımlar.</td>
  </tr>
  <tr>
    <td><strong>A<sub>s</sub> [mm²]</strong></td>
    <td>Gerilme Kesit Alanı (Tensile Stress Area). Vida dişlerinin helisel geometrisi ve diş dibi zayıflaması hesaba katılarak tanımlanmış hayali silindirik etkin taşıma alanıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>8.8 genel endüstri standardıdır; 10.9 dinamik robotik flanşlar; 12.9 sadece kalıp ve hidrolik içindir.</li>
  <li>12.9 cıvatalar gevrektir ve asitli galvaniz banyolarında hidrojen kırılganlığına uğrayarak patlayabilir.</li>
  <li>Alüminyum gövdelere vidalarken diş kavrama derinliği en az <strong>2 katı (2d)</strong> olmalıdır.</li>
  <li>Kör deliklerde matkap boyu kılavuz diş boyundan en az <strong>3–5 hatve daha derin</strong> delinmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Alüminyum 6082 gövdeye M10 cıvata bağlanacak. Gövdeye 10 mm kılavuz çekilmiş. Cıvata torklandığında ne olur?</summary>
<div>Alüminyumun kesme mukavemeti çeliğin yarısından azdır. 1d (10 mm) boyunda cıvata tork anahtarıyla sıkılırken cıvata kopmaz; alüminyum gövdenin iç dişleri tamamen sıyrılarak helva gibi dışarı çıkar. Kavrama boyu en az 20 mm (2d) olmalıdır.</div></details>
<details><summary>12.9 sınıfı bir cıvatayı paslanmasın diye elektrolitik parlak galvaniz yaptırıp titreşimli bir robot koluna takarsan ne tehlike oluşur?</summary>
<div>Galvaniz asit havuzunda yüksek mukavemetli çeliğe hidrojen atomları nüfuz eder (hidrojen gevrekliği). Cıvata nominal yükünün çok altında aniden haber vermeden cam gibi çatlar. 12.9 cıvatalar kaplanacaksa dakromet/geomet gibi kaplamalar seçilmelidir.</div></details>
<details><summary>Bir fikstür plakasında inbus civata kafası için havşa cebi açılıyor. Plaka kalınlığı 10 mm ve kullanılan cıvata M8 (kafa yüksekliği 8 mm). Cep derinliği 8,5 mm açılırsa ne hasar oluşur?</summary>
<div>Cep tabanında kalan et kalınlığı yalnızca <code>10 - 8,5 = 1,5 mm</code> olur. Tasarım kuralına göre taban et kalınlığı anma çapından küçük olamaz (t<sub>taban</sub> ≥ d = 8 mm). 1,5 mm'lik ince kabuk, cıvata torklandığında eksenel basınca dayanamayarak pul gibi yırtılır ve cıvata kafası plakanın içine gömülür.</div></details>
</div>
`);

KITAP.bolum('m4', '4-2', `
<p class="giris">Cıvatalı bağlantılarda "gevşeme" ve "yorulma kırılması" problemlerinin %80'i yetersiz veya aşırı sıkma torkundan kaynaklanır. Cıvata ön gerilmesi, dinamik yükün cıvataya geçiş oranını belirleyen en kritik elastisite parametresidir. Bu bölümde VDI 2230 metodolojisine dayalı cıvata elastik davranışını ve detaylı tork-gerilme bağıntılarını hesaplayacağız.</p>

<h2>Cıvata ve Bağlanan Parçanın Yay Karakteristiği (Cıvata Üçgeni)</h2>
<p>Bir cıvata sıkıldığında iki zıt elastik olay gerçekleşir:</p>
<ol>
  <li><strong>Cıvata uzar:</strong> Bir çekme yayı gibi davranır (Yay rijitliği: <code>C<sub>c</sub> = (E · A) / L</code>).</li>
  <li><strong>Sıkıştırılan plakalar basılır:</strong> Bir basma yayı gibi davranır (Yay rijitliği: <code>C<sub>p</sub></code>).</li>
</ol>
<p>Montajda uygulanan tork, cıvataya <strong>F<sub>M</sub> (Montaj Ön Gerilmesi)</strong> kuvveti kazandırır.</p>

<div class="kutu ipucu"><span class="kb">Dinamik Dış Yük Altında Ne Olur?</span>
Makine çalışırken bağlantıya dışarıdan periyodik bir çekme kuvveti (F<sub>A</sub>) bindiğinde, bu kuvvetin <strong>tamamı cıvataya binmez!</strong> Kuvvetin büyük kısmı birleşen parçaların rahatlamasına (dekompresyon) harcanır. Cıvataya yansıyan dinamik gerilme payı:
<div class="formul">
ΔF<sub>c</sub> = F<sub>A</sub> · [ C<sub>c</sub> / (C<sub>c</sub> + C<sub>p</sub>) ] &nbsp;&nbsp;= &nbsp;&nbsp; Φ · F<sub>A</sub>
<small>Φ: Yük faktörü (Bağlantı rijitliğine göre tipik olarak 0,10 ila 0,25 arasındadır!).</small>
</div>
<strong>Mühendislik Sonucu:</strong> Dış yük 10.000 N olsa bile, eğer cıvata doğru torkla sıkılmışsa cıvatanın hissettiği genlik artışı sadece <strong>1000–2000 N</strong> seviyesinde kalır! Cıvata yorulma kırılmasından korunur. Ancak ön gerilme yetersizse, plakalar birbirinden ayrılır (gaping), yükün %100'ü doğrudan cıvataya biner ve cıvata hızla yorularak kopar!</div>

<h2>Kellermann-Klein Tork Denklemi ve Sürtünme Dağılımı</h2>
<div class="formul">
M<sub>A</sub> = F<sub>M</sub> · [ 0,159 · P + 0,578 · d<sub>2</sub> · μ<sub>th</sub> + 0,5 · D<sub>km</sub> · μ<sub>b</sub> ]
<small>P: Hatve [mm], d<sub>2</sub>: Diş bölüm çapı [mm], D<sub>km</sub>: Cıvata kafası sürtünme temas çapı [mm], μ<sub>th</sub>: Diş sürtünme katsayısı, μ<sub>b</sub>: Kafa altı sürtünme katsayısı</small>
</div>

<p>Bu formülden görüleceği üzere uygulanan toplam tork (M<sub>A</sub>) üç bileşene harcanır:</p>
<ul>
  <li><strong>~%10:</strong> Cıvatayı boyuna uzatan yararlı eksenel kuvvet işi (0,159 · P).</li>
  <li><strong>~%40:</strong> Vida helisindeki diş yüzeyi sürtünmesi (μ<sub>th</sub>).</li>
  <li><strong>~%50:</strong> Cıvata başının veya somunun oturma yüzeyindeki sürtünme (μ<sub>b</sub>).</li>
</ul>

<h2>Farklı Sürtünme Katsayılarında Tork Değişimi (μ Katsayısı Analizi)</h2>
<p>Aşağıdaki tablo, aynı M10 (Sınıf 8.8, F<sub>M</sub> = 26.000 N hedef ön gerilme) cıvatanın yüzey durumuna göre nasıl farklı torklar gerektirdiğini göstermektedir:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Yüzey ve Yağlama Koşulu</th>
    <th>Sürtünme μ (Ortalama)</th>
    <th>Gereken Sıkma Torku M<sub>A</sub> [Nm]</th>
    <th>Sonuç ve Uyarı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Özel Yağlayıcı (Molykote / MoS₂)</strong></td>
    <td>0,08 – 0,10</td>
    <td><strong>31 Nm</strong></td>
    <td>Aşırı kaygan. Standart tork uygulanırsa cıvata kopar!</td>
  </tr>
  <tr>
    <td><strong>Hafif Yağlı / İmalat Hali (Siyah oksit)</strong></td>
    <td>0,12 – 0,14</td>
    <td><strong>46 Nm</strong></td>
    <td><strong>VDI 2230 endüstri standardı referans durumu.</strong></td>
  </tr>
  <tr>
    <td><strong>Elektrolitik Çinko Kaplı (Kuru)</strong></td>
    <td>0,15 – 0,18</td>
    <td><strong>58 Nm</strong></td>
    <td>Çinko yüzey sürtünmeyi artırır; tork yükselir.</td>
  </tr>
  <tr>
    <td><strong>Yağsız, Kuru, Paslanmış veya Çapaklı</strong></td>
    <td>0,20 – 0,25</td>
    <td><strong>74 Nm</strong></td>
    <td>Tork sürtünmede boşa harcanır; cıvata yeterince uzamaz ve gevşer!</td>
  </tr>
  <tr>
    <td><strong>Paslanmaz Çelik (A2-70, Kuru)</strong></td>
    <td>0,25 – 0,35+</td>
    <td>Belirsiz (Yenme riski)</td>
    <td>Soğuk kaynak (galling) başlar; tork anahtarı torku görür ama cıvata gerilmez!</td>
  </tr>
</tbody>
</table>
</div>

<h2>Detaylı Sıkma Torku ve Ön Gerilme Matrisi (VDI 2230, μ = 0,12)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th rowspan="2">Metrik Diş</th>
    <th rowspan="2">Kesit Alanı A<sub>s</sub> [mm²]</th>
    <th colspan="2">Sınıf 8.8 (R<sub>p0,2</sub> = 640 MPa)</th>
    <th colspan="2">Sınıf 10.9 (R<sub>p0,2</sub> = 900 MPa)</th>
    <th colspan="2">Sınıf 12.9 (R<sub>p0,2</sub> = 1080 MPa)</th>
  </tr>
  <tr>
    <th>Ön Gerilme F<sub>M</sub> [kN]</th>
    <th>Tork M<sub>A</sub> [Nm]</th>
    <th>Ön Gerilme F<sub>M</sub> [kN]</th>
    <th>Tork M<sub>A</sub> [Nm]</th>
    <th>Ön Gerilme F<sub>M</sub> [kN]</th>
    <th>Tork M<sub>A</sub> [Nm]</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>M4</strong></td>
    <td>8,78</td>
    <td>4,5 kN</td>
    <td><strong>3,0 Nm</strong></td>
    <td>6,5 kN</td>
    <td><strong>4,4 Nm</strong></td>
    <td>7,6 kN</td>
    <td><strong>5,1 Nm</strong></td>
  </tr>
  <tr>
    <td><strong>M5</strong></td>
    <td>14,2</td>
    <td>7,5 kN</td>
    <td><strong>5,9 Nm</strong></td>
    <td>10,8 kN</td>
    <td><strong>8,7 Nm</strong></td>
    <td>12,6 kN</td>
    <td><strong>10,2 Nm</strong></td>
  </tr>
  <tr>
    <td><strong>M6</strong></td>
    <td>20,1</td>
    <td>10,6 kN</td>
    <td><strong>10,1 Nm</strong></td>
    <td>15,3 kN</td>
    <td><strong>14,9 Nm</strong></td>
    <td>17,9 kN</td>
    <td><strong>17,4 Nm</strong></td>
  </tr>
  <tr>
    <td><strong>M8</strong></td>
    <td>36,6</td>
    <td>19,5 kN</td>
    <td><strong>24,6 Nm</strong></td>
    <td>28,2 kN</td>
    <td><strong>36,0 Nm</strong></td>
    <td>33,0 kN</td>
    <td><strong>42,5 Nm</strong></td>
  </tr>
  <tr>
    <td><strong>M10</strong></td>
    <td>58,0</td>
    <td>31,5 kN</td>
    <td><strong>48,0 Nm</strong></td>
    <td>45,5 kN</td>
    <td><strong>71,0 Nm</strong></td>
    <td>53,0 kN</td>
    <td><strong>83,0 Nm</strong></td>
  </tr>
  <tr>
    <td><strong>M12</strong></td>
    <td>84,3</td>
    <td>46,0 kN</td>
    <td><strong>84,0 Nm</strong></td>
    <td>66,0 kN</td>
    <td><strong>123,0 Nm</strong></td>
    <td>77,0 kN</td>
    <td><strong>144,0 Nm</strong></td>
  </tr>
  <tr>
    <td><strong>M16</strong></td>
    <td>157</td>
    <td>88,0 kN</td>
    <td><strong>206 Nm</strong></td>
    <td>127,0 kN</td>
    <td><strong>302 Nm</strong></td>
    <td>148,0 kN</td>
    <td><strong>355 Nm</strong></td>
  </tr>
  <tr>
    <td><strong>M20</strong></td>
    <td>245</td>
    <td>139,0 kN</td>
    <td><strong>402 Nm</strong></td>
    <td>200,0 kN</td>
    <td><strong>590 Nm</strong></td>
    <td>234,0 kN</td>
    <td><strong>690 Nm</strong></td>
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
    <td><strong>F<sub>M</sub> [kN]</strong></td>
    <td>Montaj Ön Gerilme Kuvveti (Preload). Cıvata torklandığında gövdesinde meydana gelen ve sıkıştırılan parçaları birbirine bastıran eksenel çekme kuvvetidir.</td>
  </tr>
  <tr>
    <td><strong>M<sub>A</sub> [Nm]</strong></td>
    <td>Sıkma Torku (Tightening Torque). Cıvata veya somunu hedeflenen eksenel ön gerilmeye ulaştırmak için tork anahtarıyla uygulanan teğetsel döndürme momentidir.</td>
  </tr>
  <tr>
    <td><strong>Φ (Yük Faktörü)</strong></td>
    <td>Bağlantı Rijitlik Oranı (Load Introduction Factor). Dış dinamik çekme kuvvetinin ne kadarının cıvataya ilave gerilme olarak yansıdığını belirleyen orandır (C<sub>c</sub> / (C<sub>c</sub> + C<sub>p</sub>)).</td>
  </tr>
  <tr>
    <td><strong>Kellermann-Klein Denklemi</strong></td>
    <td>Uygulanan sıkma torkunun eksenel kuvvete, vida helis sürtünmesine ve kafa altı sürtünmesine nasıl dağıldığını matematiksel olarak modelleyen temel formülasyondur.</td>
  </tr>
  <tr>
    <td><strong>VDI 2230</strong></td>
    <td>Alman Mühendisler Birliği'nin yüksek mukavemetli cıvatalı bağlantıların analizi ve boyutlandırılması için dünyaca kabul görmüş en kapsamlı mühendislik standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Galling (Soğuk Kaynak)</strong></td>
    <td>Özellikle paslanmaz çelik (A2/A4) veya titanyum bağlantılarda, yüksek yüzey basıncı ve sürtünme ısısıyla koruyucu oksit tabakasının yırtılması ve dişlerin birbirine moleküler düzeyde kaynaması arızasıdır.</td>
  </tr>
  <tr>
    <td><strong>Kafa Oturma Çapı D<sub>km</sub> [mm]</strong></td>
    <td>Cıvata kafasının veya somun tabanının plaka yüzeyine bastığı etkin dairesel sürtünme çapıdır; kafa sürtünme momentini doğrudan belirler.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Cıvatanın sıktığı torkun sadece %10'u ön gerilmeye dönüşür; %90'ı sürtünmede kaybolur.</li>
  <li>Yağlanmış dişe kuru tork tablosu uygulanırsa cıvata aşırı gerilerek kopar.</li>
  <li>Doğru ön gerilmiş bir cıvata dinamik dış yükün sadece %10–20'sini hisseder ve yorulmadan korunur.</li>
  <li>Mekanik tork anahtarları vardiya bitiminde yay çökmesini önlemek için en alt değere sıfırlanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir montaj ustası cıvatayı daha rahat sıkmak için dişlerine gres yağı sürüyor ve teknik resimdeki standart tork değerini uyguluyor. Ne olur?</summary>
<div>Sürtünme katsayısı yarıya iner (μ ≈ 0,08). Aynı tork uygulandığında cıvatada oluşan eksenel ön gerilme %40–50 artar. Cıvata akma sınırını aşarak plastik deformasyona uğrar ve kopabilir.</div></details>
<details><summary>Dinamik yük altındaki bir cıvata neden "az sıkıldığında" daha çabuk kopar?</summary>
<div>Ön gerilme yetersiz olduğunda bağlanan plakalar birbirinden ayrılır. Dış dinamik yükün %100'ü doğrudan cıvatanın boyuna gerilme genliği olarak yansır; cıvata milyonlarca çevrimlik yorulma döngüsüne dayanamayarak kırılır.</div></details>
<details><summary>A4-80 paslanmaz cıvata ve somun montajında kuru olarak havalı tabancayla yüksek devirde sıkma yapılırsa ne ile karşılaşılır?</summary>
<div>Paslanmaz çelikteki krom-oksit filmi yüksek sürtünme ısısıyla yırtılır. Malzemeler anında birbirine soğuk kaynak olur (galling / yenme). Cıvata hedeflenen derinliğe ulaşamadan kilitlenir; ne ileri ne geri döner, kesilerek çıkarılmak zorunda kalınır. Çözüm montaj pastası (anti-seize) kullanmaktır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-3', `
<p class="giris">Titreşim altında çalışan otomasyon makinelerinde bağlantıların çözülmesi en büyük operasyonel duruş sebebidir. Yaylı rondelaların terk edilme sürecini, Junker dinamik test metodolojisini ve modern kilitleme teknolojilerinin etkinlik seviyelerini bu bölümde bilimsel verilerle kıyaslıyoruz.</p>

<h2>Junker Titreşim Testi Metodolojisi (DIN 65151)</h2>
<p>1960'larda Gerhard Junker tarafından geliştirilen bu testte, cıvatalı bağlantıya eksenine dik yönde periyodik yanal deplasman (makaslama hareketi) uygulanır. Yük hücresiyle ön gerilme kuvvetinin zamana bağlı düşüşü ölçülür.</p>
<p>Testin ortaya koyduğu temel gerçek şudur: <strong>Sürtünmeye dayalı geleneksel önlemler (düz pul, yaylı rondela, kontra somun), yanal kayma anında sürtünme katsayısı anlık olarak sıfırlandığı için bağlantının gevşemesini KESİNLİKLE engelleyemez!</strong></p>

<h2>Kilitleme Yöntemlerinin Mühendislik Kıyaslama Tablosu</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Yöntem / Eleman</th>
    <th>Çalışma Prensibi</th>
    <th>Junker Testi Performansı (Titreşimde Kalan Ön Gerilme)</th>
    <th>Tekrar Kullanılabilirlik</th>
    <th>Sıcaklık Limiti</th>
    <th>Uygulama Alanı ve Tavsiye</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Standart Düz Pul (ISO 7089)</strong></td>
    <td>Sadece yüzey basıncını dağıtır</td>
    <td><strong>%0 (Hızla tamamen gevşer)</strong></td>
    <td>Evet</td>
    <td>Malzemeye bağlı</td>
    <td>Gevşeme önleme özelliği yoktur. Sadece yumuşak yüzeyleri ezilmekten korur.</td>
  </tr>
  <tr>
    <td><strong>Yaylı Rondela / Grover (DIN 127)</strong></td>
    <td>Yarıklı yay basma kuvveti</td>
    <td><strong>%0 (Standart cıvatadan bile daha hızlı gevşer!)</strong></td>
    <td>Hayır (Düzleşir)</td>
    <td>~150 °C</td>
    <td><strong>Modern standartlarda yasaklanmıştır (DIN 127 iptal edildi).</strong> Kırılma ve cıvatayı boşaltma riski yüksektir.</td>
  </tr>
  <tr>
    <td><strong>Fiberli Somun (DIN 985)</strong></td>
    <td>Poliamid halkanın radyal sürtünmesi</td>
    <td><strong>%20 – %35 (Kısmi tutunma sağlar)</strong></td>
    <td>En fazla 2–3 kez</td>
    <td>-40 °C … +100 °C</td>
    <td>Düşük titreşimli, kritik olmayan gövde sac bağlantıları. Cıvata gevşese bile somunun fırlayıp makineye düşmesini önler.</td>
  </tr>
  <tr>
    <td><strong>Kontra Somun (Çift Somun)</strong></td>
    <td>İki somunun birbirini ters germesi</td>
    <td><strong>%30 – %45 (Hatalı sıkılırsa %0)</strong></td>
    <td>Evet</td>
    <td>Yüksek</td>
    <td>Montajı zahmetlidir. İnce somun alta, kalın somun üste konmalı ve özel tork sırasıyla sıkılmalıdır; ustalar %90 yanlış uygular!</td>
  </tr>
  <tr>
    <td><strong>Nord-Lock (Kamlı Pul Çifti)</strong></td>
    <td>Geometrik kilitlenme (Kam eğimi α > Vida helis açısı β)</td>
    <td><strong>%90 – %95 (Mükemmel! Ön gerilmeyi korur)</strong></td>
    <td><strong>Evet (Çok defa)</strong></td>
    <td>Standart çelik: 200 °C<br>Paslanmaz: 500 °C</td>
    <td><strong>Ağır titreşimli konstrüksiyonlar, eksen motor flanşları, presler, raylı sistemler.</strong> Endüstrinin altın standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Kimyasal Sabitleyici (Loctite 243)</strong></td>
    <td>Anaerobik polimerizasyon (Mikro boşlukları doldurur)</td>
    <td><strong>%85 – %90 (Çok Yüksek Direnç)</strong></td>
    <td>Her sökümde yeniden uygulanmalı</td>
    <td>-55 °C … +180 °C</td>
    <td><strong>Otomasyonda standart tercih.</strong> Diş dibi paslanmasını da engeller. Yağlı yüzeye dayanıklıdır.</td>
  </tr>
  <tr>
    <td><strong>Tırtıllı Emniyet Pulu (Schnorr / Ripp)</strong></td>
    <td>Radyal tırtıkların yüzeye mekanik batması</td>
    <td><strong>%60 – %70 (İyi seviye)</strong></td>
    <td>Sınırlı (Yüzeyi çizer)</td>
    <td>Yüksek</td>
    <td>Şase topraklama bağlantıları ve sertliği düşük çelik/demir bağlantılar. Yüzey kaplamasını çizdiği için korozyon başlatabilir.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Nord-Lock Kam Prensibinin Matematiksel Kanıtı</h2>
<p>Nord-Lock pulunun iç yüzeyindeki kam açısı <code>α</code>, cıvatanın helis açısı olan <code>β</code> değerinden büyüktür (<code>α > β</code>):</p>
<ul>
  <li>Cıvata gevşeme yönünde dönmeye kalktığında, kam yüzeyleri birbiri üzerinde yukarı tırmanır.</li>
  <li>Kam açısı diş açısından büyük olduğu için, açılma yönündeki her dönme miktarı cıvatanın boyunu eksenel yönde daha fazla uzatmak (ΔL) zorunda kalır.</li>
  <li>Bu durum ön gerilme kuvvetini anlık olarak <strong>artırır</strong>! Sonuç olarak cıvata kendi kendine dinamik olarak kilitlenir. Sökerken duyulan "tık" sesi kamın üzerinden aşma sesidir.</li>
</ul>

<h2>Kimyasal Diş Sabitleyiciler: Loctite Seçim Rehberi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Ürün Kodu ve Rengi</th>
    <th>Mukavemet Seviyesi</th>
    <th>Kopma Torku (M10 için)</th>
    <th>Viskozite ve Boşluk Doldurma</th>
    <th>Söküm Prosedürü</th>
    <th>Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Loctite 222 (Mor)</strong></td>
    <td>Düşük Mukavemet</td>
    <td>6 Nm</td>
    <td>Düşük (0,05 mm)</td>
    <td>El aletleriyle kolayca</td>
    <td>M2–M6 küçük ayar vidaları, alüminyum ve pirinç gibi yumuşak metallere açılan dişler.</td>
  </tr>
  <tr>
    <td><strong>Loctite 243 (Mavi)</strong></td>
    <td><strong>Orta Mukavemet (Genel Tercih)</strong></td>
    <td>26 Nm</td>
    <td>Orta (0,12 mm)</td>
    <td>Standart alyan/lokma ile sökülür</td>
    <td><strong>Makine montajının her yerinde!</strong> Titreşimli her cıvataya 1 damla. Hafif yağlı yüzeylerde bile polimerleşir.</td>
  </tr>
  <tr>
    <td><strong>Loctite 270 (Yeşil)</strong></td>
    <td>Yüksek Mukavemet</td>
    <td>33 Nm</td>
    <td>Düşük (0,15 mm)</td>
    <td><strong>250 °C ısıtma şarttır!</strong> Soğukken zorlanırsa cıvata kopar.</td>
    <td>Gövde saplamaları, asla sökülmeyecek iç aktarma millerinin cıvataları.</td>
  </tr>
  <tr>
    <td><strong>Loctite 290 (Yeşil)</strong></td>
    <td>Orta-Yüksek (Kılcal)</td>
    <td>10 Nm</td>
    <td>Çok Düşük / Sıvı (0,05 mm)</td>
    <td>Isıtma veya el aleti</td>
    <td><strong>Montajı bitmiş ve sıkılmış</strong> cıvataların arkasından damlatılır; kılcal etkiyle dişlerin içine kendisi sızar.</td>
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
    <td><strong>DIN 65151 (Junker Testi)</strong></td>
    <td>Cıvatalı bağlantıların dinamik enine (transverse) titreşim ve kayma kuvvetleri altındaki gevşeme davranışını ve eksenel ön gerilme kaybını ölçen küresel referans test standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Nord-Lock Prensibi</strong></td>
    <td>Kam açısı (α) vida helis açısından (β) daha büyük olan iki pulun sırt sırta çalışmasıyla, gevşeme yönündeki dönmeyi eksenel uzamaya çevirerek kendini kilitleyen geometrik emniyet sistemidir.</td>
  </tr>
  <tr>
    <td><strong>Helis Açısı β [°]</strong></td>
    <td>Vida dişinin eksene dik düzlemle yaptığı eğim açısıdır (tan β = P / (π · d₂)). Cıvatanın kendi kendine çözülme eğilimini belirleyen geometrik açıdır.</td>
  </tr>
  <tr>
    <td><strong>Anaerobik Polimerizasyon</strong></td>
    <td>Hava (oksijen) ile teması kesildiğinde ve metal iyonları (demir, bakır) varlığında sıvı halden çapraz bağlı rijit polimer yapısına geçen kimyasal sertleşme mekanizmasıdır.</td>
  </tr>
  <tr>
    <td><strong>DIN 127 Grover Rondela</strong></td>
    <td>Yay çeliğinden yapılan kesik ve eğik puldur. Cıvata sıkıldığında tamamen ezilip elastikiyetini kaybettiği ve dinamik yanal titreşimde gevşemeyi hızlandırdığı için standarttan kaldırılmıştır.</td>
  </tr>
  <tr>
    <td><strong>Kopma Torku (Breakaway Torque)</strong></td>
    <td>Kimyasal yapıştırıcı ile sabitlenmiş bir dişli bağlantıda polimer bağını kırmak ve ilk dönme hareketini başlatmak için gereken maksimum tepe torkudur.</td>
  </tr>
  <tr>
    <td><strong>Kılcal Etki (Capillary Action)</strong></td>
    <td>Çok düşük viskoziteli sıvıların (Loctite 290 gibi), dar diş boşlukları ve mikro aralıklar boyunca yüzey gerilimi sayesinde yerçekimine karşı kendiliğinden emilmesi olgusudur.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Junker testi, DIN 127 yaylı rondelanın (grover) yanal titreşimde gevşemeyi engelleyemediğini kanıtlamıştır (standart iptal edilmiştir).</li>
  <li>Ağır titreşimli yerlerde en güvenilir mekanik çözüm geometrik kilitlenen <strong>Nord-Lock</strong> pullardır.</li>
  <li>Otomasyonda standart gevşemezlik ilacı orta mukavemetli <strong>Loctite 243 (Mavi)</strong>'tür.</li>
  <li>Loctite 270 (Yeşil) uygulanan cıvatalar ısıtılmadan sökülmeye çalışılırsa kopar.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Titreşimli bir elek gövdesindeki M12 cıvatalar sürekli gevşiyor. Montajcı yaylı rondela (grover) takmış ama yine çözülüyor. Neden ve çözüm?</summary>
<div>Yaylı rondela cıvata tam torkuna geldiğinde tamamen düzleşir ve sürtünme yüzeyi gibi kalır. Yanal titreşim başladığında anlık mikro kaymalarla sürtünme sıfırlanır ve cıvata hızla açılır. Çözüm: Yaylı pulu söküp yerine kam açılı Nord-Lock pul çifti veya Loctite 243 uygulamaktır.</div></details>
<details><summary>Loctite 270 ile yapıştırılmış bir cıvatayı sökmek isteyen bakımcı alyan anahtarla asıldığında cıvata kırılıyor. Doğru prosedür nedir?</summary>
<div>Loctite 270 yüksek mukavemetlidir. Sökülmeden önce bağlantı pürmüz veya sıcak hava tabancasıyla yaklaşık 250 °C'ye ısıtılmalıdır. Isı polimer zincirini bozar ve cıvata normal kuvvetle sökülür.</div></details>
<details><summary>Hassas bir optik kameranın ayar mekanizmasında M3 ayar vidası bulunuyor. Titreşimden dönmemesi isteniyor fakat periyodik kalibrasyon için elle kolayca ayarlanabilmeli. Hangi sabitleyici seçilmelidir?</summary>
<div>Loctite 222 (Mor - Düşük Mukavemet) seçilmelidir. 6 Nm kopma torkuna sahip olduğundan hassas küçük alyan anahtarlarla dişleri yalama yapmadan ve cıvata kafasını kırmadan kolayca ayarlanabilir.</div></details>
</div>
`);

KITAP.bolum('m4', '4-4', `
<p class="giris">Makine montajında parçaları birbirine cıvatayla bağlamak sadece sıkıştırma sağlar; parçanın X-Y eksenindeki hassas referansını belirleyemez. Cıvata delikleri boşluklu olduğu için (ISO 273), parçalar yük altında mikron mertebesinde kayar. Bu kaymayı önleyen ve montajı tekrarlanabilir kılan elemanlar <strong>pimler, kamalar ve segmanlardır</strong>.</p>

<h2>Pimleme Mühendisliği: 2-Pim Kuralı ve Aşırı Kısıtlama (Over-Constraint)</h2>
<p>Düzlemde (2 boyutta) hareket eden bir rijit cismin 3 serbestlik derecesi vardır: X yönünde öteleme, Y yönünde öteleme ve Z ekseni etrafında dönme (θ).</p>
<div class="iki-sutun">
  <div>
    <h4>Doğru Referanslama (İki Pim Kuralı)</h4>
    <ul>
      <li><strong>1. Pim (Silindirik Pim - ISO 8734):</strong> Hem X hem Y eksenini kilitler (2 serbestlik derecesi yok edilir). Parçanın sıfır noktası (orijini) bu pimdir.</li>
      <li><strong>2. Pim (Elmas / Yassıltılmış Pim - DIN 6321 Form C):</strong> Parçanın dönmesini (θ) kilitler. Yassı yüzeyleri eksen hattına dik yerleştirilir; böylece iki delik arasındaki eksen mesafesi toleransından kaynaklanan kasılmaları serbest bırakır!</li>
    </ul>
  </div>
  <div>
    <h4>Hatalı Referanslama (Aşırı Kısıtlama)</h4>
    <ul>
      <li>Üçüncü bir merkezleme pimi koymak mekanik bir cinayettir!</li>
      <li>İki parçadaki 3 deliğin eksenleri asla mikron mertebesinde birebir çakışamaz. Parçalar birbirine kilitlenir, montajda çekiçle vurmak gerekir, pimin etrafındaki malzeme çatlar ve iç gerilme oluşur.</li>
    </ul>
  </div>
</div>

<h2>Pim Tipleri ve Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Pim Türü ve Standardı</th>
    <th>Tolerans / Malzeme</th>
    <th>Sökülebilirlik</th>
    <th>Tekrarlanabilirlik Hassasiyeti</th>
    <th>Maliyet</th>
    <th>Kullanım Amacı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Silindirik Taşlanmış Pim (ISO 8734 / DIN 6325)</strong></td>
    <td><strong>m6</strong> (Sertleştirilmiş 60 HRC Takım Çeliği)</td>
    <td>Boydan boya delik yoksa sökülemez!</td>
    <td><strong>±0,002 mm (Olağanüstü)</strong></td>
    <td>Düşük</td>
    <td>Fikstürler, robot takımları, iki plakayı sıfır toleransla eşleme.</td>
  </tr>
  <tr>
    <td><strong>İçten Dişli Çektirmeli Pim (ISO 8735 / DIN 7979D)</strong></td>
    <td><strong>m6</strong> sertleştirilmiş, üzerinde hava tahliye düzlüğü var</td>
    <td><strong>Çok Kolay:</strong> İçe çekme vidası takılarak çektirmeyle sökülür.</td>
    <td><strong>±0,002 mm</strong></td>
    <td>Orta</td>
    <td><strong>Kör deliklerde ZORUNLUDUR!</strong> Hem hava sıkışmasını önler hem de demonte edilebilir.</td>
  </tr>
  <tr>
    <td><strong>Elmas (Yassı) Konum Pimi (DIN 6321 Form C)</strong></td>
    <td>Taşlanmış, iki yanı frezelenmiş</td>
    <td>Kör delik tipine bağlı</td>
    <td>Açısal olarak mükemmel</td>
    <td>Orta</td>
    <td>2-pim sisteminde ikinci referans deliğinde kullanılır. Eksen kaçıklıklarını tolere eder.</td>
  </tr>
  <tr>
    <td><strong>Yaylı Yarık Pim (Roll Pin / ISO 8752 / DIN 1481)</strong></td>
    <td>Yay çeliği (esnek boru şeklinde yarık)</td>
    <td>Zımbayla itilerek sökülür</td>
    <td>Düşük (~0,1 mm)</td>
    <td>Çok Ucuz</td>
    <td>Hassasiyet gerekmeyen kollar, mafsallar, emniyet pimleri. Delik toleransı H12 yeterlidir.</td>
  </tr>
  <tr>
    <td><strong>Konik Pim (ISO 2269 / DIN 1)</strong></td>
    <td>1:50 Koniklik oranı</td>
    <td>Ters taraftan vurarak çok kolay</td>
    <td>Mükemmel (Aşınsa bile boşluk yapmaz)</td>
    <td>Yüksek (Konik rayba şart)</td>
    <td>Eski takım tezgahları, sık sökülüp takılan ve sıfır boşluk isteyen ağır aparatlar.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Kamalar ve Kama Yuvası Mukavemet Hesabı (DIN 6885-1 Form A)</h2>
<p>Kama boyu (L) belirlenirken iki kritik hasar kriteri kontrol edilir:</p>

<h3>1. Yüzey Ezilmesi Kontrolü (Hertz Basıncı):</h3>
<div class="formul">
p = ( 2 · T ) / ( d · h' · l<sub>k</sub> ) ≤ p<sub>em</sub>
<small>T: Tork [N·mm], d: Mil çapı [mm], h': Göbek ile temas eden kama yüksekliği (h' ≈ 0,45 · h) [mm], l<sub>k</sub>: Efektif temas boyu (L - b) [mm], p<sub>em</sub>: Emniyetli yüzey basıncı [MPa]</small>
</div>
<p>Emniyetli Basınç Değerleri (p<sub>em</sub>):</p>
<ul>
  <li>Çelik göbekte (sertleştirilmemiş, C45): <code>p<sub>em</sub> = 100 – 150 MPa</code></li>
  <li>Dökme demir göbekte (GG25): <code>p<sub>em</sub> = 50 – 80 MPa</code> (Dökme demir ezilmeye hassastır!)</li>
  <li>Darbeli ve tersinir çalışan sistemlerde bu değerler <strong>%40–50 düşürülmelidir</strong>.</li>
</ul>

<h3>2. Kamanın Kesilme Kontrolü:</h3>
<div class="formul">
τ = ( 2 · T ) / ( d · b · l<sub>k</sub> ) ≤ τ<sub>em</sub> &nbsp;&nbsp; (τ<sub>em</sub> ≈ 0,6 · R<sub>e</sub> / S)
<small>b: Kama genişliği [mm], S: Emniyet katsayısı (genelde 2,0–2,5)</small>
</div>

<h2>Segmanlar (DIN 471 / DIN 472) ve Eksenel Kuvvet Limitleri</h2>
<p>Segmanlar kesinlikle ağır eksenel kuvvet taşıyıcıları değildir! Segman kanalı derinliği (t) çok sığdır (örneğin Ø30 mil için kanal derinliği sadece <code>0,8 mm</code>'dir). Kanal tabanındaki keskin köşe radyüsü nedeniyle oluşan gerilme yığılması katsayısı <strong>K<sub>t</sub> ≈ 2,5–3,5</strong> mertebesindedir!</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mil Çapı</th>
    <th>Segman Standardı</th>
    <th>Kanal Genişliği m</th>
    <th>Kanal Derinliği t</th>
    <th>Maks. İzin Verilen Eksenel Kuvvet F<sub>N</sub> (Kanal Ezilme Sınırı)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Ø15 mm</strong></td>
    <td>DIN 471 - 15×1</td>
    <td>1,10 mm</td>
    <td>0,50 mm</td>
    <td><strong>3,8 kN</strong></td>
  </tr>
  <tr>
    <td><strong>Ø20 mm</strong></td>
    <td>DIN 471 - 20×1,2</td>
    <td>1,30 mm</td>
    <td>0,60 mm</td>
    <td><strong>6,2 kN</strong></td>
  </tr>
  <tr>
    <td><strong>Ø25 mm</strong></td>
    <td>DIN 471 - 25×1,2</td>
    <td>1,30 mm</td>
    <td>0,65 mm</td>
    <td><strong>8,5 kN</strong></td>
  </tr>
  <tr>
    <td><strong>Ø30 mm</strong></td>
    <td>DIN 471 - 30×1,5</td>
    <td>1,60 mm</td>
    <td>0,80 mm</td>
    <td><strong>13,3 kN</strong></td>
  </tr>
  <tr>
    <td><strong>Ø40 mm</strong></td>
    <td>DIN 471 - 40×1,75</td>
    <td>1,85 mm</td>
    <td>1,00 mm</td>
    <td><strong>22,0 kN</strong></td>
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
    <td><strong>Aşırı Kısıtlama (Over-Constraint)</strong></td>
    <td>Bir mekanizmanın veya rijit gövdenin serbestlik derecesinden daha fazla geometrik sınır şartıyla kilitlenmesi durumudur; tolerans çatışmalarına, kasıntıya ve montaj gerilmelerine yol açar.</td>
  </tr>
  <tr>
    <td><strong>DIN 6321 Form C (Elmas Pim)</strong></td>
    <td>Yan yüzeyleri taşlanarak inceltilmiş silindirik pimdir; sadece dönme serbestliğini kilitlerken, iki pim arasındaki eksenel merkez mesafesi sapmalarını tolere eder.</td>
  </tr>
  <tr>
    <td><strong>ISO 8735 (DIN 7979D)</strong></td>
    <td>Kör delik montajları için içten vida dişi açılmış ve gövdesinde hava sıkışmasını önleyen boyuna tahliye kanalı (flat) bulunan taşlanmış sert pim standardıdır.</td>
  </tr>
  <tr>
    <td><strong>p<sub>em</sub> [MPa]</strong></td>
    <td>Emniyetli Yüzey Basıncı (Allowable Surface Pressure). Kama ve yuva yanakları arasında kalıcı plastik ezilme olmadan aktarılabilecek maksimum temas basıncıdır.</td>
  </tr>
  <tr>
    <td><strong>DIN 6885-1 Form A</strong></td>
    <td>Her iki ucu yuvarlak (radyüslü) paralel düz kama ve yuvası standardıdır; parmak frezeyle açılan kanallarda endüstri standardı tork aktarma elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>DIN 471 / DIN 472</strong></td>
    <td>Miller (DIN 471) ve delikler (DIN 472) için elastik yay çeliğinden üretilen eksenel tespit segmanları standardıdır; hafif eksenel sabitleme sağlar.</td>
  </tr>
  <tr>
    <td><strong>l<sub>k</sub> [mm]</strong></td>
    <td>Kamanın Efektif Taşıma Boyu (Effective Key Length). Form A kamalarda uç radyüslerin (b genişliği kadar) yük taşımadığı kabulüyle hesaplanan aktif düz temas boyudur (l<sub>k</sub> = L - b).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>İki plakayı konumlamak için sadece 2 pim kullanılır (1 silindirik + 1 elmas pim); 3. pim sistemi kilitler.</li>
  <li>Kör deliklerde söküm için mutlaka <strong>içten dişli ve hava tahliyeli pim (ISO 8735)</strong> seçilmelidir.</li>
  <li>Kama hesabında belirleyici kriter genelde kesilme değil, <strong>yan yüzey ezilmesidir</strong>.</li>
  <li>Segmanlar hafif eksenel sabitleme içindir; helis dişli ve vidalı mil eksenel yüklerini taşıyamaz.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Kör bir deliğe standart ISO 8734 düz silindirik pim çakılırsa söküm anında ne problem yaşanır?</summary>
<div>Pimin arkasında itecek bir delik olmadığı ve üzerinde çektirme dişi bulunmadığı için pimi dışarı çekmek imkansızdır. Pimi çıkartmak için parçayı çürütmek veya erozyonda delmek gerekir. Kör deliklerde daima ISO 8735 içten dişli pim kullanılmalıdır.</div></details>
<details><summary>Bir fikstür plakasına 3 adet taşlanmış m6 pim deliği açarsan montajda ne yaşarsın?</summary>
<div>Aşırı kısıtlama (over-constraint) oluşur. Üç deliğin eksen mesafeleri mikron mertebesinde çakışamaz; iki plaka birbirine oturmaz veya çekiçle vurulduğunda delik çevreleri çatlar. Çözüm 1 silindirik pim + 1 elmas pimdir.</div></details>
<details><summary>Bir redüktör çıkış milindeki Form A kamanın toplam boyu L = 50 mm ve genişliği b = 10 mm'dir. Kama mukavemet hesabında aktif taşıma boyu (l<sub>k</sub>) kaç mm alınmalıdır?</summary>
<div>Form A kamaların iki ucu yarım daire şeklindedir (radyüs = b/2 = 5 mm). Bu dairesel uçlar yuvanın yuvarlak kısımlarına tam temas etmediği için tork aktarımında yük taşımaz. Efektif temas boyu <code>l<sub>k</sub> = L - b = 50 - 10 = 40 mm</code> olarak hesaba katılmalıdır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-5', `
<p class="giris">Geleneksel kamalı bağlantılar yerini modern servo sürücülü otomasyon makinelerinde sürtünmeyle kenetlenen konik sıkma bileziklerine bırakmıştır. Bir mil ile göbeği (kasnak, pinyon dişli, flanş) sıfır boşlukla (backlash-free) birleştirmenin alternatif yöntemlerini mekanik mukavemet, balans ve montaj esnekliği açısından detaylandırıyoruz.</p>

<h2>Mil-Göbek Bağlantı Teknolojilerinin Derinlemesine Kıyaslaması</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Bağlantı Yöntemi</th>
    <th>Tork İletim Prensibi</th>
    <th>Boşluk (Backlash)</th>
    <th>Mil Yorulma Çentiği Etkisi</th>
    <th>Balans Kalitesi (Yüksek Hızda)</th>
    <th>Radyal / Açısal Ayarlanabilirlik</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Standart Kama (DIN 6885)</strong></td>
    <td>Biçimsel Bağlantı (Form-fit)</td>
    <td>Var (Zamanla artar, tipik 0,1°–0,5°)</td>
    <td><strong>Çok Kötü (Kanalda K<sub>t</sub> ≈ 2,5)</strong></td>
    <td>Kötü (Asimetrik ağırlık dağılımı)</td>
    <td>Yok (Sadece kama kanalının açıldığı açı)</td>
    <td>Sabit yönlü asenkron motorlar, konveyörler, fanlar.</td>
  </tr>
  <tr>
    <td><strong>Konik Sıkma Bileziği (Bikon / Tollok)</strong></td>
    <td><strong>Kuvvet Bağlantısı (%100 Sürtünme)</strong></td>
    <td><strong>SIFIR (Zero Backlash)</strong></td>
    <td><strong>Mükemmel (Milde sıfır kanal, tam dolu kesit)</strong></td>
    <td>Çok İyi (Simetrik dairesel yapı)</td>
    <td><strong>360° Sonsuz Açısal Ayar!</strong></td>
    <td><strong>Servo tahrikli triger kasnaklar, pinyon dişliler, eksenel kamlar.</strong></td>
  </tr>
  <tr>
    <td><strong>Taper-Lock Konik Burç</strong></td>
    <td>Konik sürtünme + iç kama emniyeti</td>
    <td>Çok Az / Sıfır</td>
    <td>Kötü (Milde kama kanalı gerekir)</td>
    <td>Orta</td>
    <td>Sınırlı (Kamaya bağımlı)</td>
    <td>Standart V-kayış kasnakları, zincir dişlileri (Hızlı parça değişimi).</td>
  </tr>
  <tr>
    <td><strong>Yarıklı Kelepçeli Göbek (Clamping Hub)</strong></td>
    <td>Radyal cıvatalı tek taraflı sıkma</td>
    <td>Sıfır</td>
    <td>Mükemmel</td>
    <td>İyi</td>
    <td>360° Açısal Ayar</td>
    <td>Hassas enkoderler, hafif torklu servo kaplinler.</td>
  </tr>
  <tr>
    <td><strong>Hidrolik Sıkma Burcu (ETP vb.)</strong></td>
    <td>Kapalı hidrolik hazne basıncı</td>
    <td>Sıfır</td>
    <td>Mükemmel</td>
    <td><strong>Olağanüstü (G 1,0 balans)</strong></td>
    <td>360° Açısal Ayar (Tek vidayla saniyeler içinde)</td>
    <td>Yüksek hızlı iş milleri, dinamik paketleme makineleri, hassas baskı valsleri.</td>
  </tr>
  <tr>
    <td><strong>Evolvent Şaft / Frezeli Mil (Spline DIN 5480)</strong></td>
    <td>Çoklu diş biçimsel temas</td>
    <td>Mikron boşluklu</td>
    <td>İyi (Yük çok dişe dağılır)</td>
    <td>Çok İyi</td>
    <td>Diş adımı kadar kademeli</td>
    <td>Ağır hizmet vites kutuları, eksenel kayan miller, iş makineleri.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Konik Sıkma Bileziği Seçiminde Kritik Mühendislik Hesapları</h2>

<h3>1. İletilebilir Tork (T<sub>akt</sub>) Güvenlik Faktörü</h3>
<p>Katalogda verilen nominal sürtünme torku (T<sub>katalog</sub>), sistemin pik dinamik torkundan daima büyük olmalıdır:</p>
<div class="formul">
T<sub>katalog</sub> ≥ T<sub>pik</sub> · K &nbsp;&nbsp; (K: Dinamik çalışma faktörü)
<small>Elektrik motorlarında: K = 1,5 &nbsp;|&nbsp; Ani dur-kalk yapan servolarda: K = 2,0 – 2,5 &nbsp;|&nbsp; Darbeli mekanizmalarda: K = 3,0</small>
</div>

<h3>2. Göbek Çatlama Riski ve Minimum Göbek Dış Çapı Hesabı (D<sub>min</sub>)</h3>
<p>Bileziğin cıvataları sıkıldığında dış bilezik göbeğin deliğine devasa bir radyal temas basıncı uygular (<code>P<sub>N</sub> ≈ 80 – 150 MPa</code>). Bu basınç, kasnak veya dişli göbeğinde yüksek <strong>teğetsel çekme gerilmeleri (Lame Gerilmeleri)</strong> oluşturur. Göbek et kalınlığı yetersizse göbek çatlar!</p>
<div class="formul">
D<sub>min</sub> ≥ D · √ [ ( σ<sub>0,2</sub> + P<sub>N</sub> · C ) / ( σ<sub>0,2</sub> - P<sub>N</sub> · C ) ]
<small>D: Bilezik dış çapı [mm], P<sub>N</sub>: Göbek yüzey basıncı [MPa], σ<sub>0,2</sub>: Göbek malzemesinin akma mukavemeti [MPa], C: Şekil faktörü (genelde 0,8–1,0)</small>
</div>

<p><strong>Pratik Tasarım Kuralı:</strong></p>
<ul>
  <li>Çelik göbeklerde (C45, S355): Minimum göbek dış çapı <code>D<sub>göbek</sub> ≥ 1,4 – 1,6 × D</code> olmalıdır.</li>
  <li>Alüminyum göbeklerde (6082-T6): Akma mukavemeti daha düşük olduğundan <code>D<sub>göbek</sub> ≥ 2,0 – 2,2 × D</code> olmalıdır!</li>
  <li>Dökme demir göbeklerde (GG25): Çekme gerilmesine çok zayıf olduğu için <code>D<sub>göbek</sub> ≥ 2,5 × D</code> yapılmalı veya sfero döküme geçilmelidir.</li>
</ul>

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
    <td><strong>Konik Sıkma Bileziği (Bikon)</strong></td>
    <td>Açılı konik iç ve dış bileziklerin eksenel cıvatalarla birbirine çekilmesi sonucu mil ve göbek arasında yüksek radyal temas basıncı üreten sürtünmeli rijit bağlantı elemanıdır.</td>
  </tr>
  <tr>
    <td><strong>Backlash (Açısal Boşluk)</strong></td>
    <td>Tersinir hareketlerde milin dönüş yönü değiştiğinde göbeğe tork aktarılmadan önce katedilen ölü açısal serbestliktir. Konik bileziklerde sıfırdır.</td>
  </tr>
  <tr>
    <td><strong>Lamé Gerilmeleri</strong></td>
    <td>İçten veya dıştan yüksek radyal basınca maruz kalan kalın cidarlı silindirik kovanlarda (kasnak göbeği) oluşan radyal ve teğetsel (çevresel) gerilme dağılımıdır.</td>
  </tr>
  <tr>
    <td><strong>D<sub>min</sub> [mm]</strong></td>
    <td>Kritik Göbek Dış Çapı. Konik bileziğin ürettiği radyal temas basıncının göbeğin iç çeperinde oluşturduğu teğetsel çekme gerilmesinin malzemenin akma dayanımını aşmaması için gereken minimum göbek çapıdır.</td>
  </tr>
  <tr>
    <td><strong>Taper-Lock Burç</strong></td>
    <td>Kasnak ve dişlilerin standart konik yuvalarına oturan, hem kama kanalı hem de konik sürtünme yüzeyi barındıran yarıklı sökülebilir göbek burcudur.</td>
  </tr>
  <tr>
    <td><strong>DIN 5480 Frezeli Mil (Spline)</strong></td>
    <td>Mil ve delik boyunca evolvent diş profiline sahip çok sayıda dişin aynı anda kavraşmasıyla yüksek dinamik ve darbeli torkları boşluksuz ileten dişli mil standardıdır.</td>
  </tr>
  <tr>
    <td><strong>ETP Hidrolik Burç</strong></td>
    <td>Çift cidarlı çelik kovan içerisindeki kapalı hidrolik sıvının tek bir ayar vidasıyla sıkıştırılmasıyla mil ve göbeğe mükemmel eşmerkezli radyal basınç uygulayan yüksek hassasiyetli bağlantı burcudur.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Tersinir servo eksenlerde kamalı bağlantı zamanla boşluk yapar; mutlaka <strong>konik sıkma bileziği (Bikon)</strong> kullanılmalıdır.</li>
  <li>Konik bilezik milde çentik açmaz, mil mukavemetini %100 korur ve 360° sonsuz açısal ayar sağlar.</li>
  <li>Alüminyum kasnaklarda konik bilezik kullanılırken göbek dış çapı bilezik çapının en az <strong>2 katı</strong> olmalıdır (çatlama riski).</li>
  <li>Bikon cıvataları çapraz olarak 3 kademede torklanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir triger kasnağını mile bağlamak için konik sıkma bileziği seçtin. Kasnak göbeğini alüminyumdan çok ince etli yaptın. Cıvataları torkladığında ne olur?</summary>
<div>Dış bileziğin ürettiği 100+ MPa radyal basınç, ince etli alüminyum göbekte akma mukavemetini aşar; kasnak göbeği boyuna çatlar veya kalıcı genişleyerek mili sıkamaz. Minimum göbek çapı kuralına (D<sub>min</sub> ≥ 2 · D) uyulmalıdır.</div></details>
<details><summary>Yüksek ivmelenmeli (50 m/s²) bir kartezyen robot kolunda triger kasnak mile neden standart kamayla bağlanmamalıdır?</summary>
<div>Kama bağlantısında mikron mertebesinde de olsa boşluk vardır. Yön değişimlerindeki yüksek dinamik tork darbeleri (şok yükler), kamanın yan yüzeylerini döverek ezer (hammering etkisi). Boşluk hızla büyür, sistemde pozisyonlama hatası ve kontrolcüde kararsız rezonans başlar. Konik sıkma bileziği sıfır boşluklu olduğu için tercih edilmelidir.</div></details>
<details><summary>Bikon (konik sıkma bileziği) montajı yapılırken cıvatalar tek seferde tam torkla ve sırayla dairesel sıkılırsa ne mekanik arıza oluşur?</summary>
<div>Bilezik eksene göre çarpık (açılı) oturur; kasnakta yüksek radyal ve eksenel salgı (runout) oluşur. Ayrıca tek bir cıvata aşırı zorlanırken diğerleri gevşek kalır. Doğru prosedür: Cıvataları çaprazlama sırayla önce %30, sonra %60, en son %100 torkla en az 2 tur dolaşarak sıkmaktır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-6', `
<p class="giris">Mekanik arıza analizlerinde miller, üzerinde en çok yorulma kırılması gözlemlenen elemanlardır. Bir mil saf tork nadiren taşır; kasnaklardan, dişlilerden ve dış kütlelerden gelen radyal kuvvetler nedeniyle aynı anda yüksek bir <strong>bileşik eğilme ve burulma gerilmesine</strong> maruz kalır. Bu bölümde DIN 743 mil hesap standardını, ASME mil tasarım kodunu ve geometrik çentik faktörlerini inceliyoruz.</p>

<h2>Millerde Yorulma Arıza Mekanizması ve Kırılma Yüzeyi Analizi</h2>
<p>Dönen bir milde eğilme gerilmesi sürekli yön değiştirir (üst lif basma, alt lif çekme yaşar; mil yarım tur döndüğünde durum tersine döner). Bu tam değişken gerilme döngüsü (R = -1), en tehlikeli yorulma tipidir.</p>
<ul>
  <li><strong>Başlangıç Bölgesi (Çentik):</strong> Çatlak daima keskin bir köşeden, segman kanalından, kama ucundan veya taşlama yanığından başlar.</li>
  <li><strong>İlerleme Bölgesi (İstiridye Çizgileri / Beach Marks):</strong> Çatlak her yük çevriminde mikron mikron ilerler; pürüzsüz, cilalı gibi görünen karakteristik dalga izleri bırakır.</li>
  <li><strong>Nihai Kopma Bölgesi:</strong> Kesit yükü taşıyamayacak kadar küçüldüğünde son kalan alan aniden gevrek olarak kırılır (pürüzlü, taneli gri yüzey).</li>
</ul>

<h2>Geometrik Çentik Etkisi Faktörleri (K<sub>t</sub>) Kıyaslaması</h2>
<p>Nominal gerilme (σ<sub>nom</sub>), kesitin geometrik süreksizliğinde çentik faktörüyle (K<sub>t</sub>) çarpılarak tepe gerilmeye ulaşır (σ<sub>maks</sub> = K<sub>t</sub> · σ<sub>nom</sub>):</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mildeki Geometrik Detay</th>
    <th>Teorik Gerilme Yığılması Faktörü K<sub>t</sub></th>
    <th>Yorulma Dayanımına Etkisi</th>
    <th>Doğru Tasarım İyileştirmesi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Keskin Kademeli Omuz (r / d &lt; 0,02)</strong></td>
    <td><strong>2,5 – 3,2 (Aşırı Tehlikeli)</strong></td>
    <td>Yorulma ömrünü %70 oranında düşürür.</td>
    <td>Radyüsü büyüt (r / d ≥ 0,1) veya bileşik radyüs uygula.</td>
  </tr>
  <tr>
    <td><strong>DIN 509 F Tipi Taşlama Kanalı</strong></td>
    <td>1,6 – 1,8 (Kontrollü)</td>
    <td>Kabul edilebilir seviyede.</td>
    <td>Rulman oturma yüzeylerinde sıfır faturaya yaslanma sağlar.</td>
  </tr>
  <tr>
    <td><strong>Parmak Frezeyle Açılmış Kama Kanalı</strong></td>
    <td>2,2 – 2,8</td>
    <td>Kanal taban köşelerinde çatlak başlatır.</td>
    <td>Kanal tabanına radyüslü freze kullan; konik sıkma bileziğine geç.</td>
  </tr>
  <tr>
    <td><strong>DIN 471 Segman Kanalı</strong></td>
    <td><strong>2,8 – 3,5 (Çok Yüksek)</strong></td>
    <td>Yüksek eğilme anında en zayıf halkadır.</td>
    <td>Segmanı milin düşük gerilmeli uç kısımlarına yerleştir.</td>
  </tr>
  <tr>
    <td><strong>Enine Radyal Pim / Yağ Deliği</strong></td>
    <td>2,4 – 3,0</td>
    <td>Deliğin kenarındaki gerilme 3 katına çıkar.</td>
    <td>Delik ağızlarına mutlaka 45° kırma pahı ver ve çapakları temizle.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Millerde Eşdeğer Gerilme ve ASME Mil Boyutlandırma Formülü</h2>
<p>Bileşik eğilme momenti (M<sub>b</sub>) ve burulma momenti (T) altındaki bir mil için ASME (American Society of Mechanical Engineers) tasarım kodu dinamik şok katsayılarını da içerir:</p>
<div class="formul">
d = ³√ [ ( 16 / (π · τ<sub>em</sub>) ) · √ ( ( k<sub>b</sub> · M<sub>b</sub> )² + ( k<sub>t</sub> · T )² ) ]
<small>k<sub>b</sub>: Eğilme şok/dinamik faktörü (1,5–2,0), k<sub>t</sub>: Burulma şok faktörü (1,0–1,5), M<sub>b</sub>: Maksimum bileşik eğilme momenti [N·mm], T: Burulma torku [N·mm], τ<sub>em</sub>: Emniyetli kayma gerilmesi [MPa]</small>
</div>

<h2>Eğilme Sehimi ve Eğim Sınırları (Rulman ve Dişli Sağlığı İçin)</h2>
<p>Mil mukavemet açısından kopmasa bile aşırı esnerse (sehim yaparsa) üzerindeki dişliler ve rulmanlar kasıntıya girerek imha olur. Tasarım kriteri limitleri:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Eleman / Bölge</th>
    <th>Maksimum İzin Verilen Sehim (y<sub>maks</sub>)</th>
    <th>Maksimum İzin Verilen Eğim Açısı (θ<sub>maks</sub>)</th>
    <th>Aşıldığında Ne Olur?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sabit Bilyalı Rulman Yuvası</strong></td>
    <td>—</td>
    <td><strong>maks. 10 – 15 ark-dakika (0,16° – 0,25°)</strong></td>
    <td>Bilyalar yuvarlanma kanalının kenarına basar, aşırı ısınma ve kilitlenme.</td>
  </tr>
  <tr>
    <td><strong>Silindirik / Konik Makaralı Rulman</strong></td>
    <td>—</td>
    <td><strong>maks. 2 – 4 ark-dakika (0,03° – 0,06°)</strong></td>
    <td>Makaraların uç kısımlarında aşırı kenar gerilmesi oluşur, pul pul dökülme.</td>
  </tr>
  <tr>
    <td><strong>Düz ve Helis Dişli Temas Bölgesi</strong></td>
    <td><strong>y ≤ 0,001 · Modül (ör. m=3 için 3 µm!)</strong></td>
    <td><strong>maks. 0,001 radyan</strong></td>
    <td>Diş teması diş genişliği boyunca eşit dağılmaz; diş ucu kırılması (tooth chipping).</td>
  </tr>
  <tr>
    <td><strong>Genel Hat Transmisyon Mili</strong></td>
    <td><strong>L / 1000 ila L / 2000</strong> (L: Yatak açıklığı)</td>
    <td>—</td>
    <td>Titreşim, rezonans ve sızdırmazlık keçesi aşınması.</td>
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
    <td><strong>DIN 743</strong></td>
    <td>Millerin ve aksların statik mukavemet ve dinamik yorulma dayanımı hesap standardıdır; geometrik çentik faktörleri, yüzey pürüzlülüğü ve boyut etkisini kapsar.</td>
  </tr>
  <tr>
    <td><strong>K<sub>t</sub> (Gerilme Yığılması Faktörü)</strong></td>
    <td>Teorik Çentik Faktörü (Stress Concentration Factor). Kesit değişimlerinde, delik ve kanallarda elastik tepe gerilmesinin nominal anma gerilmesine oranıdır (K<sub>t</sub> = σ<sub>maks</sub> / σ<sub>nom</sub>).</td>
  </tr>
  <tr>
    <td><strong>İstiridye Çizgileri (Beach Marks)</strong></td>
    <td>Dinamik yorulma çatlağının her periyodik yükleme çevriminde ilerlerken kırılma yüzeyinde bıraktığı mikroskobik eşmerkezli dalga morfolojisidir.</td>
  </tr>
  <tr>
    <td><strong>DIN 509 Form F</strong></td>
    <td>Hem silindirik yüzeyin hem de radyal faturanın taşlanmasına imkan veren ve rulman iç bileziğinin köşeye tam oturmasını sağlayan standart taşlama kanal geometrisidir.</td>
  </tr>
  <tr>
    <td><strong>ASME Mil Kodu</strong></td>
    <td>Millerin değişken eğilme ve burulma momentleri altındaki çap hesabında dinamik darbe ve yorulma katsayılarını (k<sub>b</sub>, k<sub>t</sub>) entegre eden boyutlandırma standardıdır.</td>
  </tr>
  <tr>
    <td><strong>Kritik Hız n<sub>kr</sub> [d/dak]</strong></td>
    <td>Milin doğal titreşim frekansının dönüş devir sayısıyla çakıştığı ve sistemin rezonansa girerek yıkıcı genliklere ulaştığı dönme hızı eşiğidir.</td>
  </tr>
  <tr>
    <td><strong>Açısal Eğim θ [ark-dakika]</strong></td>
    <td>Milin eğilme sehimi eğrisinin yataklama noktalarındaki teğet açısıdır; rulmanların iç ve dış bilezikleri arasındaki izin verilen maksimum eksenel kaçıklığı belirler.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Miller yorulmadan kopar; kırılmaların başlangıç noktası keskin omuz radyüsleri ve segman kanallarıdır.</li>
  <li>Miller sadece mukavemete göre değil, üzerindeki rulman ve dişlileri kasmayacak <strong>sehim sınırlarına</strong> göre boyutlandırılır.</li>
  <li>Dönüş hızı, milin birinci kritik rezonans hızından en az <strong>%20 uzakta</strong> olmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir konveyör tahrik milinde rulman oturma faturasına tornacı R0,2 mm keskin radyüs bırakmış. Mil 3 ay sonra bu köşeden dümdüz kırılıyor. Neden?</summary>
<div>Keskin omuzda gerilme yığılması katsayısı K<sub>t</sub> > 3,0'a çıkar. Dönen mildeki tam tersinir eğilme gerilmesi bu çentikte mikro yorulma çatlağı başlatır. Çatlak her turda ilerleyerek milin yorulma kırılmasıyla kopmasına yol açar. Faturaya uygun radyüs veya DIN 509 kanalı verilmeliydi.</div></details>
<details><summary>Statik mukavemet hesabı güvenli çıkan bir helis dişli mili, çalışma anında diş kenarlarından hızla kırılıyor ve aşırı ses yapıyor. Neden?</summary>
<div>Mil mukavemet açısından yeterli olsa bile eğilme rijitliği düşüktür; yük altında sehim yapar. Mil ekseni eğildiğinde (θ > 0,001 radyan), helis dişlilerin temas çizgisi bozulur; yük dişin tüm genişliği yerine sadece tek bir uç köşesine biner (kenar yükü). Diş ucu aşırı gerilmeden kırılır. Mil çapı sehim kriterine göre büyütülmelidir.</div></details>
<details><summary>Yüksek devirli bir iş milinde mil çapı büyütülmeden kritik hız (n<sub>kr</sub>) nasıl artırılabilir?</summary>
<div>Kritik hız, sistemin rijitliği ile doğru, kütlesi ile ters orantılıdır (ω<sub>n</sub> = √(k/m)). Rulmanlar arasındaki yatak açıklığı mesafesi (L) kısaltılırsa, eğilme rijitliği mesafenin küpüyle (L³) ters orantılı olduğundan mil rijitliği muazzam artar ve kritik hız rezonans tehlikesinin çok üstüne taşınır.</div></details>
</div>
`);
