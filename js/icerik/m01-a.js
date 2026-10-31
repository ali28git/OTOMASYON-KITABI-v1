// MODÜL 1 — Malzeme Bilgisi (Bölüm 1.1 – 1.5)
// Bilimsel, Mekanik ve İmalat Odaklı Mühendislik Kılavuzu

KITAP.bolum('m1', '1-1', `
<p class="giris">Bir malzemeyi "sağlam" ya da "dayanıklı" diye tarif etmek mühendislikte teknik bir anlam taşımaz. Mekanik tasarımda parça hangi mekanik sınır durumuna göre boyutlandırılacaktır: Kırılma (statik mukavemet), kalıcı şekil değişimi (akma kriteri), aşırı elastik sehim (rijitlik), dinamik tekrarlı yükler altında çatlak ilerlemesi (yorulma ömrü) ya da sürtünme yüzeylerinin mikro-tahribatı (aşınma)? Bu bölümde malzemelerin elastoplastik davranışını, gerilme-uzama karakteristiğini ve makine otomasyonundaki <strong>mukavemet ile rijitlik arasındaki temel ayrımı</strong> inceliyoruz.</p>

<h2>Gerilme–Şekil Değiştirme (Elastoplastik) Davranış</h2>
<p>Standart bir çekme testinde (ISO 6892-1), numuneye uygulanan eksenel çekme gerilmesi (σ = F / A<sub>0</sub>) ile meydana gelen birim boy değişimi (ε = ΔL / L<sub>0</sub>) ölçülerek gerilme-uzama diyagramı elde edilir. Bu diyagram malzemenin mekanik karakteristiğini belirleyen ana referanstır:</p>

<ul>
  <li><strong>Elastik Bölge (Hooke Yasası):</strong> σ = E · ε bağıntısının geçerli olduğu, yük kaldırıldığında kristal kafes parametrelerinin eski haline döndüğü doğrusal alandır. Doğrunun eğimi <strong>Elastisite Modülü'nü (E)</strong> verir.</li>
  <li><strong>Akma Sınırı (R<sub>e</sub> veya R<sub>p0.2</sub>):</strong> Kalıcı (plastik) deformasyonun başladığı eşik gerilmedir. Yumuşak çeliklerde üst (R<sub>eH</sub>) ve alt (R<sub>eL</sub>) akma platosu gözlenirken; belirgin akma basamağı göstermeyen malzemelerde (alüminyum alaşımları, ıslah edilmiş çelikler, paslanmazlar) <strong>%0,2 kalıcı plastik uzamaya</strong> karşılık gelen gerilme <strong>R<sub>p0.2</sub></strong> akma sınırı kabul edilir.</li>
  <li><strong>Çekme Mukavemeti (R<sub>m</sub>):</strong> Mühendislik gerilme-uzama eğrisinin tepe noktasıdır. Malzemenin homojen uzamadan yerel boyun vermeye (necking) geçtiği maksimum gerilme kapasitesidir.</li>
  <li><strong>Kopma Uzaması (A %):</strong> Kopma anındaki toplam plastik uzama yüzdesidir [A = (L<sub>u</sub> − L<sub>0</sub>) / L<sub>0</sub> × 100]. Malzemenin sünekliğinin (enerji yutma ve şekil alma kabiliyeti) temel göstergesidir.</li>
</ul>

<div class="kutu not"><span class="kb">Tasarımda Hangi Mukavemet Sınırı Esas Alınır?</span>
Otomasyon makinelerinde boyutlandırma neredeyse istisnasız <strong>akma mukavemetine (R<sub>e</sub> / R<sub>p0.2</sub>)</strong> göre yapılır. Çünkü bir makine parçasının plastik deformasyona uğraması, kırılmasa dahi geometrik eksen kaçıklığına, kılavuz rayların kilitlenmesine ve hassasiyet kaybına yol açar. Gevrek malzemelerde (örneğin gri dökme demir) akma bölgesi olmadığından doğrudan çekme mukavemeti (R<sub>m</sub>) ve daha yüksek emniyet katsayısı (S ≥ 3–5) kullanılır.</div>

<h2>Mukavemet ve Rijitlik: Mekatronik Tasarımcının En Kritik Ayrımı</h2>
<p>Mekanik tasarımda en sık yapılan kavram yanılgısı "dayanıklı malzeme seçimi ile esnemenin önlenebileceği" inancıdır:</p>

<div class="iki-sutun">
  <div><h4>💪 Mukavemet (Strength - Taşıma Eşiği)</h4>
  Parçanın plastik deformasyona uğramadan veya kırılmadan taşıyabileceği maksimum gerilme eşiğidir. Akma mukavemeti (R<sub>p0.2</sub>) ve çekme mukavemeti (R<sub>m</sub>) ile ifade edilir. <strong>Alaşım elementleri, dövme/haddeleme oranları ve ısıl işlemlerle (su verme, temperleme) 3 ila 5 kat artırılabilir.</strong></div>
  <div><h4>📏 Rijitlik (Stiffness - Deformasyon Direnci)</h4>
  Parçanın yük altında elastik formunu koruma, sehim yapmama kabiliyetidir. Malzeme boyutu <strong>Elastisite Modülü (E)</strong>, kesit geometrisi boyutu ise <strong>Kesit Atalet Momenti (I)</strong> tarafından belirlenir. <strong>Alaşım ve ısıl işlem Elastisite Modülü'nü (E) NEREDEYSE HİÇ DEĞİŞTİRMEZ!</strong></div>
</div>

<div class="kutu uyari"><span class="kb">Kritik Mühendislik Hatası</span>
"Konsol robot kolu yük altında esniyor, malzemeyi S235 yapı çeliği yerine 42CrMo4 ıslah çeliği yapalım" yaklaşımı <strong>fiziksel olarak tamamen etkisizdir</strong>. İki malzemenin de elastisite modülü E ≈ 210.000 MPa'dır. Islah çeliği 3 kat daha fazla yük taşıyabilir; ancak aynı yük altında S235 ile <strong>birebir aynı mikron mertebesinde esner</strong>. Sehim problemi malzeme mukavemetiyle değil, <strong>geometriyle (kesit yüksekliği, et kalınlığı, kutu kesit veya üçgenleme)</strong> çözülür.</div>

<p>Yüksek hızlı otomasyon sistemlerinde (pick-and-place, kartezyen robotlar, optik hizalama istasyonları) parçaların %90'ı <strong>rijitlik kriterine</strong> göre boyutlandırılır. Parça kırılma sınırının çok altında çalışsa bile, 0,05 mm'lik dinamik esneme bileşenlerin konumlandırma hatası vermesine sebep olur.</p>

<h3>Analitik Örnek: Basit Mesnetli ve Konsol Kirişte Sehim Mukayesesi</h3>
<p>L = 500 mm açıklıkta, serbest ucundan F = 100 N düşey tekil yük uygulanan, b = 20 mm genişlik ve h = 40 mm yükseklikteki dikdörtgen konsol kirişin elastik davranışı:</p>

<div class="formul">
δ = ( F · L³ ) / ( 3 · E · I ) &nbsp;&nbsp;[mm] &nbsp;&nbsp;&nbsp;&nbsp; I = ( b · h³ ) / 12 = ( 20 · 40³ ) / 12 = 106.667 mm⁴
<small>F: Uygulanan yük [N], L: Kol boyu [mm], E: Elastisite modülü [N/mm²], I: Kesit atalet momenti [mm⁴]</small>
</div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Sınıfı</th>
    <th>Elastisite Modülü E [GPa]</th>
    <th>Konsol Sehim δ [mm]</th>
    <th>Kütle [kg]</th>
    <th>Özgül Rijitlik (E / ρ) [GPa·cm³/g]</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Yapı Çeliği (S235 / C45 / 42CrMo4)</strong></td>
    <td>210</td>
    <td>0,186 mm</td>
    <td>3,14 kg</td>
    <td>26,7</td>
  </tr>
  <tr>
    <td><strong>Alüminyum Alaşımı (EN AW-6082 T6)</strong></td>
    <td>70</td>
    <td>0,558 mm</td>
    <td>1,08 kg</td>
    <td>25,9</td>
  </tr>
  <tr>
    <td><strong>Gri Dökme Demir (GJL-250)</strong></td>
    <td>110</td>
    <td>0,355 mm</td>
    <td>2,88 kg</td>
    <td>38,2 (Yüksek sönümleme)</td>
  </tr>
  <tr>
    <td><strong>Teknik Plastik (POM / Poliasetal)</strong></td>
    <td>3,0</td>
    <td>13,02 mm</td>
    <td>0,56 kg</td>
    <td>2,1</td>
  </tr>
  <tr>
    <td><strong>Karbon Fiber Takviyeli Kompozit (CFRP)</strong></td>
    <td>140–230</td>
    <td>0,170–0,279 mm</td>
    <td>0,62 kg</td>
    <td><strong>90–150 (3–5 kat üstün)</strong></td>
  </tr>
</tbody>
</table>
</div>

<p>Alüminyum aynı kesitte çelikten 3 kat fazla esner; ancak yoğunluğu çeliğin üçte biridir. Kesit yüksekliğini 40 mm'den 58 mm'ye çıkardığımızda (h³ ile orantı gereği: 1,45³ ≈ 3,05 kat atalet artışı), alüminyum kiriş <strong>çelikle tamamen aynı sehim değerine (0,186 mm)</strong> ulaşır; üstelik toplam kütlesi çeliğin <strong>yarısından daha hafif (~1,55 kg)</strong> kalır. Yüksek ivmeli hareketli eksenlerde alüminyumun tercih edilmesinin matematiksel sebebi budur.</p>

<h2>Malzeme Sertliği ve Standart Ölçüm Yöntemleri</h2>
<p>Sertlik, bir malzemenin yüzeyine daha sert bir batıcı ucun batırılmasına karşı gösterdiği plastik deformasyon direncidir. Yüzey temas basıncı mukavemeti ve <strong>abrasif/adhezif aşınma direncinin</strong> doğrudan göstergesidir.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Yöntem</th>
    <th>Standart</th>
    <th>Batıcı Uç ve Yük</th>
    <th>Uygulama Alanı ve Karakteristiği</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Brinell (HBW)</strong></td>
    <td>ISO 6506-1</td>
    <td>Sinterlenmiş tungsten karbür bilye (Ø 1, 2.5, 5, 10 mm)</td>
    <td>Dökme demirler, yumuşak çelikler, dövme parçalar, alüminyum bloklar. İz çapı geniştir; mikroyapısal heterojenlikleri ortalar.</td>
  </tr>
  <tr>
    <td><strong>Vickers (HV)</strong></td>
    <td>ISO 6507-1</td>
    <td>136° tepe açılı kare tabanlı elmas piramit</td>
    <td>Mikro-sertlikten makro yüklere kadar tüm malzemeler. İnce yüzey sertleştirme tabakaları (nitrürleme, sert krom, CVD/PVD kaplamalar) için standarttır.</td>
  </tr>
  <tr>
    <td><strong>Rockwell C (HRC)</strong></td>
    <td>ISO 6508-1</td>
    <td>120° konik elmas uç, 150 kgf (1471 N) toplam yük</td>
    <td>Islah edilmiş ve yüzey sertleştirilmiş çelikler (&gt; 20 HRC). Doğrudan kadrandan derinlik ölçer; atölyelerde ve kalite kontrolde en yaygın yöntemdir.</td>
  </tr>
  <tr>
    <td><strong>Shore (A / D)</strong></td>
    <td>ISO 868 / 7619</td>
    <td>Yay baskılı konik çelik uç</td>
    <td>Poliüretan tamponlar, vakum vantuzları, kauçuk contalar, konveyör kayışları. Elastomer sertlik standardı.</td>
  </tr>
</tbody>
</table>
</div>

<h3>Sertlik Değerlerinin Çekme Mukavemetiyle İlişkisi (ISO 18265)</h3>
<p>Alaşımsız ve düşük alaşımlı yapı çeliklerinde sertlik ile çekme mukavemeti (R<sub>m</sub>) arasında pratik doğrusal bir bağıntı bulunur:</p>
<div class="formul">
R<sub>m</sub> ≈ 3,3 × HBW &nbsp;&nbsp;[MPa] &nbsp;&nbsp;&nbsp;&nbsp; (veya R<sub>m</sub> ≈ 3,2 × HV)
</div>

<h2>Malzeme Tokluğu ve Darbe Dayanımı (Charpy V-Notch)</h2>
<p>Tokluk, bir malzemenin dinamik darbe yükleri altında kırılmadan önce plastik deformasyonla enerji yutabilme kabiliyetidir. <strong>ISO 148-1</strong> standardına göre çentikli numuneye sarkaç darbe çekici vurularak kırılma için harcanan iş [Joule] cinsinden belirlenir.</p>
<ul>
  <li><strong>Sertlik–Tokluk Takası:</strong> Bir çeliğin sertliği arttıkça (martenzitik faz oranı arttıkça) akma mukavemeti yükselir ancak darbe tokluğu dramatik şekilde düşer. Yüksek sertlikteki parçalar darbeli yükte cam gibi gevrek kırılır.</li>
  <li><strong>Darbe Geçiş Sıcaklığı (DBTT):</strong> HMK (Hacim Merkezli Kübik) kafes yapısına sahip ferritik çelikler belirli bir sıcaklığın altında sünek davranıştan gevrek kırılma davranışına geçer. Düşük sıcaklıklarda çalışan otomasyon şaselerinde Charpy test sıcaklığı (JR: +20 °C, J0: 0 °C, J2: −20 °C) hayati önem taşır.</li>
</ul>

<h2>Dinamik Yorulma ve Wöhler (S-N) Eğrisi</h2>
<p>Endüstriyel otomasyon makinelerinde mekanik kırılmaların %80 ila %90'ı <strong>yorulma (fatigue)</strong> kaynaklıdır. Parçalar akma gerilmesinin çok altındaki periyodik titreşim ve çevrimsel gerilmeler altında mikro çatlak başlatır ve ani kırılmaya uğrar.</p>
<ul>
  <li><strong>Sürekli Mukavemet Sınırı (Endurance Limit - σ<sub>D</sub>):</strong> Çeliklerde yaklaşık 10⁶–10⁷ çevrimden sonra gerilme eşiği düzleşir. Gerilme bu sınırın altındaysa parça teorik olarak sonsuz ömre sahiptir (σ<sub>D</sub> ≈ 0,4–0,5 · R<sub>m</sub>).</li>
  <li><strong>Alüminyumun Yorulma Karakteristiği:</strong> Alüminyum alaşımlarında yatay bir yorulma limiti <strong>yoktur</strong>. Yeterince yüksek çevrim sayısında (ör. 10⁸ çevrim), en küçük gerilme genliğinde bile eninde sonunda yorulma çatlağı ilerler.</li>
  <li><strong>Çentik Etkisi:</strong> Keskin iç köşeler, segman kanalları, kama yuvaları ve pürüzlü yüzeyler yerel gerilme yığılması yaratarak yorulma ömrünü 3 ila 10 kat düşürür. Millerde daima cömert radyüsler (R ≥ 1–2 mm) ve düşük yüzey pürüzlülüğü (Ra ≤ 0,8 µm) hedeflenmelidir.</li>
</ul>

<h2>Fiziksel Özellikler ve Isıl Genleşme Uyumu</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme</th>
    <th>Özkütle ρ [g/cm³]</th>
    <th>Elastisite E [GPa]</th>
    <th>Isıl Genleşme α [10⁻⁶ K⁻¹]</th>
    <th>Isıl İletkenlik λ [W/m·K]</th>
    <th>Titreşim Sönümleme</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Karbon / Alaşımlı Çelik</strong></td>
    <td>7,85</td>
    <td>210</td>
    <td>11,5 – 12,0</td>
    <td>45 – 55</td>
    <td>Düşük (Titreşimi iletir)</td>
  </tr>
  <tr>
    <td><strong>Östenitik Paslanmaz (304 / 316)</strong></td>
    <td>7,95</td>
    <td>195</td>
    <td>16,5 – 17,5</td>
    <td>15</td>
    <td>Düşük</td>
  </tr>
  <tr>
    <td><strong>Gri Dökme Demir (GJL-250)</strong></td>
    <td>7,20</td>
    <td>100 – 120</td>
    <td>10,5</td>
    <td>45 – 50</td>
    <td><strong>Çok Yüksek (Grafit lameller sönümler)</strong></td>
  </tr>
  <tr>
    <td><strong>Alüminyum (6082 / 7075)</strong></td>
    <td>2,70 – 2,80</td>
    <td>70 – 72</td>
    <td>23,4</td>
    <td>130 – 170</td>
    <td>Düşük</td>
  </tr>
  <tr>
    <td><strong>Poliasetal (POM / Delrin)</strong></td>
    <td>1,41</td>
    <td>3,0</td>
    <td>110</td>
    <td>0,31</td>
    <td>Yüksek</td>
  </tr>
  <tr>
    <td><strong>Sentetik Mineral Döküm</strong></td>
    <td>2,40</td>
    <td>35 – 45</td>
    <td>12,0</td>
    <td>1,5 – 2,0</td>
    <td><strong>Olağanüstü (Dökme demirden 6 kat iyi)</strong></td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu saha"><span class="kb">Sahadan: Bimetal Isıl Gerilme Analizi</span>
2000 mm uzunluğunda alüminyum profil üzerine çelik lineer kızak rayı cıvatalandığında ve fabrika ortamı gece 18 °C'den gündüz 38 °C'ye (ΔT = 20 °C) çıktığında:
<div class="formul">
ΔL = L · ( α<sub>Al</sub> − α<sub>Celik</sub> ) · ΔT = 2000 · ( 23,4 − 11,5 ) × 10⁻⁶ · 20 ≈ 0,476 mm
</div>
Ray ile profil birbirine rijit cıvatalarla bağlandığından, yarım milimetrelik bu bağıl uzama arayüzde devasa kayma gerilmeleri oluşturur; şaseyi muz gibi büker ve araba bilyalarının sıkışmasına sebep olur. Uzun eksenlerde ya şase ve ray malzemesi aynı termal katsayıda seçilmeli ya da sabit-serbest yataklama ilkelerine uyulmalıdır.</div>

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
    <td><strong>R<sub>e</sub> / R<sub>p0.2</sub> (Akma Mukavemeti)</strong></td>
    <td>Malzemede kalıcı plastik deformasyonun başladığı gerilme sınırı. Belirgin akma göstermeyen sünek metallerde %0,2 kalıcı uzamaya karşılık gelen gerilme değeri [MPa = N/mm²].</td>
  </tr>
  <tr>
    <td><strong>R<sub>m</sub> (Çekme Mukavemeti)</strong></td>
    <td>Malzemenin kopmadan önce taşıyabileceği, gerilme-uzama eğrisinin tepe noktasına denk gelen en yüksek nominal mühendislik gerilmesi [MPa].</td>
  </tr>
  <tr>
    <td><strong>E (Elastisite / Young Modülü)</strong></td>
    <td>Malzemenin kristal kafes bağ rijitliğini temsil eden, elastik bölgedeki gerilmenin birim boy değişimine oranı (E = σ / ε). Isıl işlem veya alaşımlamayla değiştirilemez [GPa].</td>
  </tr>
  <tr>
    <td><strong>I (Kesit Atalet Momenti)</strong></td>
    <td>Bir kesitin nötr eksene göre dönmeye ve eğilmeye karşı gösterdiği geometrik direnç ölçüsü [mm⁴]. Eğilme direncinde kesit yüksekliğinin küpü (h³) belirleyicidir.</td>
  </tr>
  <tr>
    <td><strong>HRC / HV / HBW</strong></td>
    <td>Sırasıyla Rockwell C (elmas konik uç), Vickers (elmas piramit uç) ve Brinell (karbür bilye uç) yüzey sertliği birimleri. Aşınma ve yüzey basma mukavemetinin doğrudan göstergeleridir.</td>
  </tr>
  <tr>
    <td><strong>Charpy V-Notch (Tokluk)</strong></td>
    <td>Darbe etkisi altındaki malzemenin kırılma anına kadar absorbe edebildiği mekanik enerji [Joule]. Çentik tokluğu olarak adlandırılır (ISO 148-1).</td>
  </tr>
  <tr>
    <td><strong>Wöhler (S-N) Eğrisi & Yorulma Sınırı</strong></td>
    <td>Malzemenin tekrarlı çevrimsel dinamik gerilmeler altındaki kırılma ömrünü gösteren eğri. Belirli bir gerilmenin (σ<sub>D</sub>) altında çelikler sonsuz çevrim ömrüne ulaşır.</td>
  </tr>
  <tr>
    <td><strong>Sönümleme Kapasitesi (Damping)</strong></td>
    <td>Mekanik sistemdeki titreşim enerjisini malzemenin iç sürtünme mekanizmalarıyla termal enerjiye çevirerek salınımı durdurma yeteneği. Dökme demir ve polimer betonda çok yüksektir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Otomasyon makinelerinde yapısal boyutlandırma kırılmaya (R<sub>m</sub>) göre değil, <strong>akma mukavemetine (R<sub>e</sub> / R<sub>p0.2</sub>)</strong> göre yapılır.</li>
  <li><strong>Mukavemet ≠ Rijitlik:</strong> Isıl işlem çeliğin mukavemetini 3 kat artırır ancak esneme miktarını (Elastisite Modülü E) bir mikron bile değiştirmez. Sehim sorunu geometriyle çözülür.</li>
  <li>Dinamik eksenlerde özgül rijitlik (E/ρ) avantajı nedeniyle alüminyum profil ve plakalar yüksek kesit ataleti oluşturularak hafif ve rijit yapılar kurulmasını sağlar.</li>
  <li>Mekanik hasarların %80'den fazlası yorulma çatlağından kaynaklanır; mil geçişlerinde keskin köşelerden kaçınarak uygun radyüsler (çentik azaltma) bırakılmalıdır.</li>
  <li>Isıl genleşme farkları uzun mekanik eksenlerde cıvataları zorlar ve şaseleri büker; bimetal etkisi mutlaka hesaplanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir otomasyon kolunda 6082-T6 alüminyum plaka 0,6 mm sehim yapıyor. Malzemeyi havacılık sanayinde kullanılan 7075-T6 alüminyuma (Rp0.2 = 480 MPa) çevirirsek sehim kaça düşer?</summary>
<div>Sehim kesinlikle değişmez, yine 0,6 mm kalır! Çünkü sehim formülünde (δ = F·L³ / 3·E·I) akma mukavemeti yer almaz. 6082 ve 7075 alaşımlarının elastisite modülü aynıdır (E ≈ 70 GPa). Parça daha fazla yük altında akmadan çalışabilir ancak esneme miktarı tamamen aynı kalır. Sehimi düşürmek için plaka kalınlığı artırılmalıdır.</div></details>
<details><summary>Rulman bilyaları ve lineer kızak rayları neden 58–62 HRC aralığında aşırı sert üretilir?</summary>
<div>Bilya ile ray arasındaki temas noktası mikroskobik düzeydedir ve bu temas alanında binlerce megapascal seviyesinde Hertz temas basıncı (P<sub>0</sub> &gt; 1500–2500 MPa) oluşur. Malzemenin plastik ezilmeye uğramaması ve mikron mertebesindeki bilya aşınmalarının önlenmesi için yüksek sertlik ve martenzitik mikroyapı zorunludur.</div></details>
<details><summary>Statik FEA analizinde akma gerilmesinin 3 kat altında çıkan bir mil mili flanş geçişinden neden 4 ay sonra kırılır?</summary>
<div>Tekrarlı çevrimsel moment ve tork altında çalışan miller dinamik yorulmaya (fatigue) maruz kalır. Flanş geçişindeki keskin köşe (küçük radyüs) yerel gerilme yığılması (çentik faktörü K<sub>t</sub>) oluşturur. Gerilme Wöhler sürekli mukavemet sınırını aşarak mikroskobik yorulma çatlağını başlatır ve parça gevrek şekilde aniden kırılır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-2', `
<p class="giris">Teknik resim antetlerinde "Malzeme: C45", "1.7225" veya "S355J2+N" gibi uluslararası standart kodları yer alır. Atölyede ve yerli sanayide ise hâlâ "St37", "Ck45", "4140" veya "transmisyon çeliği" gibi eski normlar ve piyasa jargonları kullanılır. Bir mekatronik ve mekanik tasarımcının bu adlandırma standartlarını çözümleyebilmesi, malzeme kimyasını, ısıl işlem geçmişini ve mekanik sınırlarını doğrudan okuyabilmesi gerekir. Bu bölümde <strong>EN 10027</strong> sistematiğini, alaşım çarpanlarını ve uluslararası norm eşleştirmelerini inceliyoruz.</p>

<h2>EN 10027 Normuna Göre Çeliklerin Adlandırılması</h2>
<p>Avrupa Birliği standardı <strong>EN 10027</strong>, çelikleri iki paralel sistemle tanımlar:</p>
<ul>
  <li><strong>EN 10027-1 (Sembolik Adlandırma):</strong> Malzemenin kullanım amacını, mukavemetini veya kimyasal alaşım oranlarını açıkça belirten harf ve rakam kombinasyonudur (Örnek: <code>S235JR</code>, <code>42CrMo4</code>, <code>X5CrNi18-10</code>).</li>
  <li><strong>EN 10027-2 (Malzeme Numarası - W.Nr.):</strong> Bilgisayarlı stok, ERP ve veri tabanı sistemleri için <code>1.xxxx</code> şeklinde 5 haneli sabit kod yapısıdır (Örnek: <code>1.0038</code>, <code>1.7225</code>, <code>1.4301</code>).</li>
</ul>

<div class="kutu not"><span class="kb">Malzeme Numarası (Werkstoffnummer) Mantığı</span>
<code>1.xxxx</code> kodunda baştaki "1", malzemenin çelik olduğunu belirtir. Noktadan sonraki ilk iki hane ana malzeme grubunu tanımlar:
<ul>
  <li><code>1.00xx – 1.07xx</code>: Alaşımsız genel yapı, imalat ve otomat çelikleri</li>
  <li><code>1.11xx – 1.12xx</code>: Yüksek kaliteli karbon çelikleri (Ck serisi)</li>
  <li><code>1.20xx – 1.28xx</code>: Takım çelikleri (soğuk iş, sıcak iş, plastik kalıp)</li>
  <li><code>1.35xx</code>: Rulman çelikleri (100Cr6 = 1.3505)</li>
  <li><code>1.40xx – 1.45xx</code>: Paslanmaz ve korozyona dayanıklı çelikler</li>
  <li><code>1.65xx – 1.77xx</code>: Alaşımlı ıslah ve sementasyon çelikleri</li>
</ul>
Son iki hane ise alaşım varyasyonunun sıra numarasıdır.</div>

<h2>1. Mekanik Özellik ve Kullanım Amacına Göre Adlandırma</h2>
<p>Çeliğin kimyasal bileşimi yerine mekanik performansı ön plandaysa baş harf kullanım alanını, ardından gelen sayı ise <strong>minimum akma mukavemetini (R<sub>e</sub> [MPa])</strong> belirtir:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Baş Harf</th>
    <th>Açılım ve Kullanım Alanı</th>
    <th>Sayısal Değer</th>
    <th>Standart Örnek</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>S</strong></td>
    <td>Structural (Genel Yapı Çeliği)</td>
    <td>Min. Akma Dayanımı (R<sub>e</sub>)</td>
    <td><code>S235JR</code>, <code>S355J2</code></td>
  </tr>
  <tr>
    <td><strong>E</strong></td>
    <td>Engineering (Makine İmalat Çeliği)</td>
    <td>Min. Akma Dayanımı (R<sub>e</sub>)</td>
    <td><code>E295</code> (St50), <code>E335</code> (St60)</td>
  </tr>
  <tr>
    <td><strong>P</strong></td>
    <td>Pressure (Basınçlı Kap Çeliği)</td>
    <td>Min. Akma Dayanımı (R<sub>e</sub>)</td>
    <td><code>P265GH</code></td>
  </tr>
  <tr>
    <td><strong>B</strong></td>
    <td>Betonarme Donatı Çeliği</td>
    <td>Karakteristik Akma</td>
    <td><code>B500B</code></td>
  </tr>
  <tr>
    <td><strong>DC / DD</strong></td>
    <td>Drawn Cold / Drawn Hot (Yassı Saclar)</td>
    <td>Şekillendirme Sınıfı</td>
    <td><code>DC01</code> (Soğuk sac - St12), <code>DD11</code> (Sıcak sac)</td>
  </tr>
</tbody>
</table>
</div>

<h3>S235JR Kodunun Dekod Edilmesi ve Çentik Darbe Sınıfları</h3>
<p><code>S 235 JR</code>: S = Yapı çeliği, 235 = t ≤ 16 mm et kalınlığı için min. 235 MPa akma mukavemeti. Sondaki darbe harfleri malzemenin gevrek kırılma emniyetini gösterir:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Darbe Sınıfı Kodu</th>
    <th>Minimum Darbe Enerjisi (Charpy-V)</th>
    <th>Test Sıcaklığı [°C]</th>
    <th>Kullanım Yeri ve Mühendislik Yorumu</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>JR</strong></td>
    <td>27 Joule</td>
    <td>+20 °C (Oda sıcaklığı)</td>
    <td>Standart fabrika içi otomasyon şaseleri, hafif braketler.</td>
  </tr>
  <tr>
    <td><strong>J0</strong></td>
    <td>27 Joule</td>
    <td>0 °C</td>
    <td>Soğuk depolar, mevsimsel donma riski olan kapalı sahalar.</td>
  </tr>
  <tr>
    <td><strong>J2</strong></td>
    <td>27 Joule</td>
    <td>−20 °C</td>
    <td>Dış ortam makineleri, yüksek dinamik darbeli robot hücreleri.</td>
  </tr>
  <tr>
    <td><strong>K2</strong></td>
    <td>40 Joule</td>
    <td>−20 °C</td>
    <td>Ağır vinçler, kritik iş makineleri, dinamik yorulma riski.</td>
  </tr>
</tbody>
</table>
</div>

<h2>2. Kimyasal Bileşime Göre Adlandırma Sistematiği</h2>

<h3>A) Alaşımsız Karbon Çelikleri (C + Karbon Oranı × 100)</h3>
<p>Örnek: <code>C45</code> → Ortalama %0,45 Karbon içeren makine imalat çeliği. <code>C15</code> → %0,15 C (sementasyon). <code>C60</code> → %0,60 C (yay/bıçak). Sonunda <strong>E</strong> harfi varsa (<code>C45E</code> - eski adı <strong>Ck45</strong>), kükürt ve fosfor kalıntılarının çok sıkı kontrol edildiğini, malzemenin temiz ve homojen olduğunu gösterir.</p>

<h3>B) Düşük Alaşımlı Çelikler (Hiçbir Element ≥ %5 Değilse)</h3>
<p>Sistem formatı: <strong>[Karbon Oranı × 100] [Element Simgeleri] [Çarpanla Çarpılmış Yüzdeler]</strong></p>
<p>Standart alaşım elementleri kimyasal hassasiyete göre 4 farklı çarpan katsayısıyla kodlanır (EN 10027-1 Tablo 1):</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Çarpan Katsayısı</th>
    <th>Alaşım Elementleri</th>
    <th>Katsayı Uygulama Mantığı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>× 4</strong></td>
    <td><strong>Cr, Co, Mn, Ni, Si, W</strong></td>
    <td>Yüzde değer 4 ile çarpılarak koda yazılır. (Gerçek % = Kod / 4)</td>
  </tr>
  <tr>
    <td><strong>× 10</strong></td>
    <td><strong>Al, Be, Cu, Mo, Nb, Pb, Ta, Ti, V, Zr</strong></td>
    <td>Yüzde değer 10 ile çarpılarak yazılır. (Gerçek % = Kod / 10)</td>
  </tr>
  <tr>
    <td><strong>× 100</strong></td>
    <td><strong>Ce, N, P, S</strong></td>
    <td>Yüzde değer 100 ile çarpılarak yazılır. (Gerçek % = Kod / 100)</td>
  </tr>
  <tr>
    <td><strong>× 1000</strong></td>
    <td><strong>B (Bor)</strong></td>
    <td>Çok düşük konsantrasyonda sertleşme sağladığı için 1000 ile çarpılır.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu ipucu"><span class="kb">Örnek Çözümleme: 42CrMo4</span>
<ul>
  <li><code>42</code>: Karbon oranı = 42 / 100 = <strong>%0,42 C</strong> (Orta karbonlu ıslah çeliği).</li>
  <li><code>CrMo</code>: Krom ve Molibden alaşımı içerir.</li>
  <li><code>4</code>: İlk element olan Kromun yüzdesidir. Çarpanı 4 olduğuna göre gerçek Cr oranı = 4 / 4 = <strong>~%1,0 Krom (Cr)</strong>. Molibden için rakam belirtilmemiştir; nominal olarak ~%0,2–0,3 Mo içerir.</li>
</ul>
</div>

<h3>C) Yüksek Alaşımlı Çelikler (En Az Bir Element ≥ %5 İse)</h3>
<p>Kodun başına <strong>X</strong> harfi gelir. X harfi çarpan sisteminin devreden çıktığını, <strong>alaşım oranlarının doğrudan gerçek yüzde (%) olarak yazıldığını</strong> belirtir:</p>
<p>Format: <strong>X [Karbon × 100] [Elementler] [Doğrudan Yüzdeler]</strong></p>
<ul>
  <li><code>X5CrNi18-10</code>: %0,05 Karbon, %18 Krom, %10 Nikel → Standart <strong>AISI 304 (1.4301)</strong> paslanmaz çelik.</li>
  <li><code>X2CrNiMo17-12-2</code>: %0,02 C, %17 Cr, %12 Ni, %2 Mo → Asit ve klorür dayanımlı <strong>AISI 316L (1.4404)</strong> paslanmaz çelik.</li>
  <li><code>X153CrMoV12</code>: %1,53 C, %12 Cr, Mo ve V → Aşınmaya dayanıklı <strong>1.2379 (AISI D2)</strong> soğuk iş takım çeliği.</li>
</ul>

<h2>Durum (Teslimat) Sembolleri (EN 10027-2)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Ek Sembol</th>
    <th>Açılım ve Metalurjik Durum</th>
    <th>Mühendislik Önemi</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>+AR</strong></td>
    <td>As Rolled (Haddelendiği gibi)</td>
    <td>Ek ısıl işlem yok. İç gerilmesi ve boyutsal toleransı geniştir; en ucuz teslimat.</td>
  </tr>
  <tr>
    <td><strong>+N</strong></td>
    <td>Normalized (Normalizasyon tavlı)</td>
    <td>Tane yapısı inceltilmiş, homojen mekanik özellikler. Kaynak ve işleme için kararlıdır.</td>
  </tr>
  <tr>
    <td><strong>+A</strong></td>
    <td>Soft Annealed (Yumuşak tavlı)</td>
    <td>Karbürler küreselleştirilmiştir. Sert takım çelikleri bu halde rahatça frezelenir.</td>
  </tr>
  <tr>
    <td><strong>+QT</strong></td>
    <td>Quenched and Tempered (Islah edilmiş)</td>
    <td>Su verilmiş ve yüksek sıcaklıkta menevişlenmiş (~28–34 HRC). Doğrudan nihai ölçüde işlenir.</td>
  </tr>
  <tr>
    <td><strong>+C</strong></td>
    <td>Cold Drawn (Soğuk çekilmiş)</td>
    <td>Hassas h9 toleransı, pürüzsüz yüzey ve soğuk pekleşme ile artırılmış akma mukavemeti.</td>
  </tr>
  <tr>
    <td><strong>+SL</strong></td>
    <td>Peeled and Ground (Soyulmuş ve Taşlanmış)</td>
    <td>Hassas h6/h7 toleranslı taşlanmış mil teslimatı (lineer kızak milleri vb.).</td>
  </tr>
</tbody>
</table>
</div>

<h2>Uluslararası Standart Çapraz Karşılaştırma Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>EN Standart Adı</th>
    <th>W.Nr. (No)</th>
    <th>Eski Alman (DIN)</th>
    <th>Amerikan (AISI/SAE)</th>
    <th>Japon (JIS)</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>S235JR</strong></td>
    <td>1.0038</td>
    <td>St37-2</td>
    <td>ASTM A36</td>
    <td>SS400</td>
    <td>Şaseler, montaj plakaları, kaynaklı braketler</td>
  </tr>
  <tr>
    <td><strong>S355J2</strong></td>
    <td>1.0577</td>
    <td>St52-3</td>
    <td>ASTM A572 Gr.50</td>
    <td>SM490</td>
    <td>Ağır yük taşıyıcı kirişler, robot kaideleri</td>
  </tr>
  <tr>
    <td><strong>C45E</strong></td>
    <td>1.0503</td>
    <td>Ck45</td>
    <td>AISI 1045</td>
    <td>S45C</td>
    <td>Miller, akslar, dişliler, flanşlar</td>
  </tr>
  <tr>
    <td><strong>11SMnPb30</strong></td>
    <td>1.0718</td>
    <td>9SMnPb28</td>
    <td>AISI 12L14</td>
    <td>SUM24L</td>
    <td>CNC otomat torna parçaları, burçlar, rakorlar</td>
  </tr>
  <tr>
    <td><strong>42CrMo4+QT</strong></td>
    <td>1.7225</td>
    <td>42CrMo4V</td>
    <td>AISI 4140</td>
    <td>SCM440</td>
    <td>Ağır hizmet milleri, yüksek torklu aktarma aksları</td>
  </tr>
  <tr>
    <td><strong>16MnCr5</strong></td>
    <td>1.7131</td>
    <td>16MnCr5</td>
    <td>AISI 5115</td>
    <td>SCr415</td>
    <td>Sementasyonlu dişliler, kam milleri, zincir dişlileri</td>
  </tr>
  <tr>
    <td><strong>100Cr6</strong></td>
    <td>1.3505</td>
    <td>100Cr6</td>
    <td>AISI 52100</td>
    <td>SUJ2</td>
    <td>Rulman bilyaları, taşlanmış indüksiyonlu lineer miller</td>
  </tr>
  <tr>
    <td><strong>X5CrNi18-10</strong></td>
    <td>1.4301</td>
    <td>V2A</td>
    <td>AISI 304</td>
    <td>SUS304</td>
    <td>Gıda, ambalaj, standart paslanmaz karkaslar</td>
  </tr>
  <tr>
    <td><strong>X2CrNiMo17-12-2</strong></td>
    <td>1.4404</td>
    <td>V4A</td>
    <td>AISI 316L</td>
    <td>SUS316L</td>
    <td>İlaç, kimya, tuzlu su ve agresif CIP yıkanan hatlar</td>
  </tr>
  <tr>
    <td><strong>X153CrMoV12</strong></td>
    <td>1.2379</td>
    <td>—</td>
    <td>AISI D2</td>
    <td>SKD11</td>
    <td>Sac kesme zımbaları, folyo bıçakları, aşınma plakaları</td>
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
    <td><strong>EN 10027</strong></td>
    <td>Avrupa standardizasyon komitesi (CEN) tarafından belirlenen, çeliklerin sembolik kısa adlarını (Bölüm 1) ve sayısal malzeme numaralarını (Bölüm 2) düzenleyen uluslararası norm.</td>
  </tr>
  <tr>
    <td><strong>Werkstoffnummer (W.Nr.)</strong></td>
    <td>Alman DIN normundan türeyen ve EN 10027-2 standardına entegre edilen, 1.xxxx formatındaki 5 basamaklı benzersiz sayısal çelik tanımlama sistemi.</td>
  </tr>
  <tr>
    <td><strong>Alaşım Çarpanı</strong></td>
    <td>Düşük alaşımlı çeliklerin adlandırılmasında (EN 10027-1), Cr, Mn, Ni gibi elementlerin yüzde oranlarını tam sayıya yuvarlayıp sembole dönüştürmek için kullanılan 4, 10, 100 ve 1000 katsayıları.</td>
  </tr>
  <tr>
    <td><strong>X Ön Eki</strong></td>
    <td>Çeliğin en az bir alaşım elementinin ağırlıkça %5 veya daha fazla olduğunu gösteren yüksek alaşım sembolü. Bu ön ekte alaşım çarpanı kullanılmaz, yüzdeler doğrudan yazılır.</td>
  </tr>
  <tr>
    <td><strong>+QT (Quenched & Tempered)</strong></td>
    <td>Malzemenin su verilerek martenzitik yapıya dönüştürüldüğünü ve ardından yüksek sıcaklıkta (550–650 °C) temperlenerek ıslah edilmiş halde teslim edildiğini belirten durum kodu.</td>
  </tr>
  <tr>
    <td><strong>SUS / SCM / SUJ (JIS Normu)</strong></td>
    <td>Japon Endüstriyel Standartları'nda (JIS) sırasıyla paslanmaz çelikleri (Steel Use Stainless), krom-molibden çeliklerini ve rulman çeliklerini ifade eden kısaltmalar.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>S ile başlayan kodlarda sayı minimum akma dayanımını (MPa) belirtir; S235 = 235 MPa, S355 = 355 MPa.</li>
  <li>Darbe tokluğu kodlarında JR (+20 °C) iç ortam otomasyonu için yeterliyken; dinamik şok ve soğuk ortamlarda J2 (−20 °C) seçilmelidir.</li>
  <li>Kimyasal kodlamada C45 = %0,45 C; 42CrMo4 = %0,42 C ve %1 Cr; X5CrNi18-10 = %0,05 C, %18 Cr, %10 Ni anlamına gelir.</li>
  <li>Satın alma ve teknik resimlerde durum ekleri (+QT, +N, +C) mutlaka belirtilmelidir; aksi halde kontrolsüz iç gerilmeli ham malzeme gelebilir.</li>
  <li>Misumi, THK gibi yabancı kataloglarda Japon JIS normları (S45C = C45, SUJ2 = 100Cr6, SUS304 = 304) kullanılır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>"34CrNiMo6" çelik adını EN 10027-1 standardına göre tam olarak kimyasal bileşimine çözümle.</summary>
<div>34 / 100 = %0,34 Karbon (C). Alaşım elementleri Krom (Cr), Nikel (Ni) ve Molibden (Mo)'dir. Sonda yer alan 6 sayısı ilk element olan Kroma aittir. Kromun çarpanı 4 olduğuna göre gerçek Krom miktarı 6 / 4 = %1,5 Cr'dir. Nikel ve Molibden için rakam yazılmadığından nominal seviyede (yaklaşık %1,5 Ni ve %0,2–0,3 Mo) alaşım içerir. Yüksek tokluklu ağır hizmet ıslah çeliğidir.</div></details>
<details><summary>Teknik resimde "1.4404" malzemesi yazıyor. Bu malzeme hangi AISI koduna denk gelir ve adlandırmadaki "L" neyi ifade eder?</summary>
<div>1.4404 malzemesi AISI 316L (EN adı: X2CrNiMo17-12-2)'ye denk gelir. Sondaki "L" harfi "Low Carbon" (Düşük Karbon: C ≤ %0,03) anlamına gelir. Düşük karbon, kaynak sırasında krom karbür çökelmesini önleyerek kaynak dikişinin taneler arası korozyona (intergranular corrosion) karşı direncini korur.</div></details>
<details><summary>Makine şasesinde S235JR yerine yanlışlıkla otomat çeliği 11SMnPb30 lama kaynatılırsa ne tür bir tehlike oluşur?</summary>
<div>Otomat çelikleri talaş kırıcılığı sağlamak için yüksek oranda Kükürt (%0,30 S) ve Kurşun (%0,20–0,35 Pb) içerir. Kaynak arkı altında bu elementler düşük ergimeli metal arası filmler oluşturarak kaynak dikişinde şiddetli <strong>sıcak çatlamaya (hot cracking)</strong> ve dikişin anında ayrılmasına sebep olur. Otomat çelikleri kesinlikle kaynak edilemez!</div></details>
</div>
`);

KITAP.bolum('m1', '1-3', `
<p class="giris">Endüstriyel otomasyonda kullanılan çelik parçaların %80'den fazlası yaklaşık 8 temel çelik kalitesinden imal edilir. Yanlış malzeme seçimi ya parçanın ilk dinamik yükte çatlamasına ya da gereksiz yere imalat maliyetlerinin 4 katına çıkmasına yol açar. Bu bölümde genel yapı çeliklerinin, talaşlı imalat çeliklerinin, ıslah çeliklerinin ve sementasyon alaşımlarının metalurjik sınırlarını, kaynak kabiliyetlerini (CEV) ve seçim kriterlerini inceliyoruz.</p>

<h2>Karbon Oranının Mekanik ve Teknolojik Özelliklere Etkisi</h2>
<p>Demir-karbon alaşımlarında karbon (C) miktarı, malzemenin mukavemetini, sertleşebilirliğini ve kaynaklanabilirliğini belirleyen en temel kimyasal parametredir:</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Karbon Sınıfı</th>
    <th>Karbon Aralığı [% C]</th>
    <th>Akma & Mukavemet</th>
    <th>Kaynak Kabiliyeti</th>
    <th>Isıl İşlem Tepkisi</th>
    <th>Tipik Çelik Kaliteleri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Düşük Karbonlu</strong></td>
    <td>&lt; %0,25 C</td>
    <td>Düşük – Orta</td>
    <td><strong>Mükemmel (Ön ısıtmasız)</strong></td>
    <td>Hacimsel su verilmez (Sementasyon gerekir)</td>
    <td>S235JR, S355J2, 16MnCr5, DC01</td>
  </tr>
  <tr>
    <td><strong>Orta Karbonlu</strong></td>
    <td>%0,25 – %0,55 C</td>
    <td>Orta – Yüksek</td>
    <td><strong>Zor (Ön ısıtma şart: 150–300 °C)</strong></td>
    <td>Islah edilir (+QT), İndüksiyonla sertleşir</td>
    <td>C45E, 42CrMo4, 34CrNiMo6</td>
  </tr>
  <tr>
    <td><strong>Yüksek Karbonlu</strong></td>
    <td>&gt; %0,55 C</td>
    <td>Çok Yüksek</td>
    <td><strong>Kaynak Edilemez</strong></td>
    <td>Yüksek sertlik ve aşınma direnci</td>
    <td>C60, 100Cr6, Takım ve Yay Çelikleri</td>
  </tr>
</tbody>
</table>
</div>

<h2>Karbon Eşdeğeri (CEV) ve Kaynak Edilebilirlik Sınırı</h2>
<p>Çeliğin kaynaklanabilirliği yalnızca karbon miktarına değil, martenzit oluşumunu tetikleyen alaşım elementlerine de bağlıdır. <strong>IIW (International Institute of Welding)</strong> formülü ile hesaplanan Karbon Eşdeğeri (CEV):</p>

<div class="formul">
CEV = C + ( Mn / 6 ) + [ ( Cr + Mo + V ) / 5 ] + [ ( Ni + Cu ) / 15 ]
</div>

<ul>
  <li><strong>CEV ≤ %0,40:</strong> Mükemmel kaynak kabiliyeti. Özel ön ısıtma gerektirmez (S235JR için CEV ≈ 0,35).</li>
  <li><strong>%0,40 &lt; CEV ≤ %0,55:</strong> Koşullu kaynak kabiliyeti. Kalın kesitlerde çatlama riskine karşı 150–250 °C ön ısıtma ve düşük hidrojenli elektrot zorunludur (C45E için CEV ≈ 0,55–0,58).</li>
  <li><strong>CEV &gt; %0,55:</strong> Kaynak edilmesi çok zordur. ITAB (Isı Tesiri Altındaki Bölge) aşırı sert ve kırılgan martenzite dönüşür; soğuk çatlama oluşur. 42CrMo4 (CEV ≈ 0,85–0,90) gibi çeliklerde kaynaktan kesinlikle kaçınılmalıdır.</li>
</ul>

<h2>Yapı Çelikleri (Structural Steels)</h2>

<h3>1. S235JR (1.0038 / Eski St37-2): "Varsayılan Makine İskeleti"</h3>
<ul>
  <li><strong>Mekanik Değerler:</strong> R<sub>e</sub> ≥ 235 MPa, R<sub>m</sub> = 360–510 MPa, Kopma uzaması A ≥ %24.</li>
  <li><strong>Üstünlükleri:</strong> Piyasada en ucuz, en bol bulunan çeliktir. Lazerle mükemmel kesilir, bükülür, talaş kaldırılır ve ön ısıtmasız kolayca kaynak edilir.</li>
  <li><strong>Kullanım Alanı:</strong> Robot hücresi şaseleri, montaj tablaları, flanş plakaları, koruyucu muhafaza sacları, rijitlik sınırlı tüm statik konstrüksiyonlar.</li>
  <li><strong>Kullanılmaması Gereken Yerler:</strong> Aşınan temas yüzeyleri, yüksek tork ileten dinamik miller, yorulma riski yüksek pimler.</li>
</ul>

<h3>2. S355J2 (1.0577 / Eski St52-3): "Yüksek Mukavemetli Şase Çeliği"</h3>
<ul>
  <li><strong>Mekanik Değerler:</strong> R<sub>e</sub> ≥ 355 MPa, R<sub>m</sub> = 470–630 MPa, −20 °C'de 27 J darbe garantisi.</li>
  <li><strong>Üstünlükleri:</strong> S235'e göre <strong>%50 daha yüksek akma mukavemeti</strong> sunar. Fiyat farkı azdır (%15–25). Kaynak kabiliyeti kontrollü parametrelerle oldukça iyidir.</li>
  <li><strong>Kullanım Alanı:</strong> Ağır kartezyen gantry kirişleri, pres gövdeleri, vinç kolları, dinamik yük altındaki kaynaklı taşıyıcılar.</li>
</ul>

<h2>Islah Çelikleri (Quenched and Tempered Steels)</h2>
<p>Islah işlemi (Sertleştirme su vermesi + yüksek sıcaklıkta temperleme/menevişleme); çeliğe yüksek akma mukavemetiyle birlikte mükemmel darbe tokluğu kazandırır.</p>

<h3>1. C45E (1.0503 / AISI 1045): "Standart Mil ve Aks Çeliği"</h3>
<ul>
  <li><strong>Mekanik Özellikler:</strong> Normalize halde R<sub>e</sub> ≈ 340 MPa, R<sub>m</sub> ≈ 600 MPa. Islahlı (+QT) halde R<sub>e</sub> ≈ 430–500 MPa, R<sub>m</sub> ≈ 700–850 MPa.</li>
  <li><strong>Yüzey Sertleştirme Avantajı:</strong> %0,45 C içeriği sayesinde alevle veya <strong>indüksiyonla yüzey sertleştirmeye</strong> mükemmel yanıt verir; yüzey <strong>55–58 HRC</strong> sertliğe ulaştırılırken çekirdek tok kalır.</li>
  <li><strong>Kullanım Alanı:</strong> Konveyör tahrik milleri, zincir dişlileri, pinyonlar, kam makaraları, cıvatalı montaj burçları ve kılavuz pimler.</li>
  <li><strong>Sertleşebilirlik Derinliği Sınırı:</strong> C45 alaşımsız olduğu için su verme sertleşmesi ancak Ø15–20 mm derinliğe kadar işler. Kalın miller merkezde yumuşak kalır.</li>
</ul>

<h3>2. 42CrMo4 (1.7225 / AISI 4140): "Ağır Hizmet ve Yorulma Mukavemeti Çeliği"</h3>
<ul>
  <li><strong>Mekanik Özellikler:</strong> Islahlı (+QT) teslimatta R<sub>e</sub> ≥ 650–900 MPa, R<sub>m</sub> = 900–1200 MPa, Sertlik 28–35 HRC (300 HB).</li>
  <li><strong>Derin Sertleşebilirlik:</strong> Krom (Cr) ve Molibden (Mo) alaşımı sayesinde Ø100 mm kesitlerde bile çekirdeğe kadar homojen martenzit dönüşümü sağlar.</li>
  <li><strong>Kullanım Alanı:</strong> Yüksek torklu redüktör çıkış milleri, eksantrik pres krankları, hidrolik silindir rotları, 10.9/12.9 kalite bağlantı cıvataları, ağır gripper kollar.</li>
  <li><strong>İmalat Kolaylığı:</strong> Genellikle <strong>+QT (önceden ıslah edilmiş)</strong> halde satın alınır ve ~30 HRC sertlikte karbür takımlarla doğrudan nihai ölçüye işlenir.</li>
</ul>

<h2>Sementasyon Çelikleri (Case Hardening Steels)</h2>
<p>Düşük karbonlu (&lt; %0,20 C) çeliklerdir. Parça kaba işlendikten sonra karbon atmosferli fırında (900–950 °C) yüzeyine difüzyonla karbon emdirilir. Ardından su verilerek <strong>yüzeyde 58–62 HRC sert bir tabaka (0,5–2,0 mm derinlik)</strong> elde edilirken, çekirdek düşük karbonlu sünek yapısını korur.</p>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme Kalitesi</th>
    <th>W.Nr.</th>
    <th>Yüzey Sertliği</th>
    <th>Çekirdek Çekme (R<sub>m</sub>)</th>
    <th>Mühendislik Kullanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>16MnCr5</strong></td>
    <td>1.7131</td>
    <td>58 – 62 HRC</td>
    <td>800 – 1100 MPa</td>
    <td><strong>Avrupa'nın 1 numaralı dişli çeliği.</strong> Redüktör pinyonları, kremayerler, kam makaraları.</td>
  </tr>
  <tr>
    <td><strong>20MnCr5</strong></td>
    <td>1.7147</td>
    <td>58 – 62 HRC</td>
    <td>1000 – 1300 MPa</td>
    <td>Ağır modüllü endüstriyel dişliler, darbeli aktarma organları.</td>
  </tr>
  <tr>
    <td><strong>18CrNiMo7-6</strong></td>
    <td>1.6587</td>
    <td>60 – 62 HRC</td>
    <td>1200 – 1400 MPa</td>
    <td>Rüzgar türbinleri, ağır planet redüktörler, maden makineleri.</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu ipucu"><span class="kb">C45 İndüksiyon mu, 16MnCr5 Sementasyon mu?</span>
<ul>
  <li><strong>C45 + İndüksiyon:</strong> Hızlı, yerel (sadece mil oturma çapı veya kremayer diş yüzeyi sertleşir), fırın gerektirmez, ucuzdur. Ancak diş tabanında sertlik homojen değildir.</li>
  <li><strong>16MnCr5 + Sementasyon:</strong> Bütün parça homojen sertleşir. Dişin kökü ve yanakları eşit aşınma direnci ve yorulma tokluğu kazanır. Hassas redüktör dişlilerinde daima sementasyon seçilir.</li>
</ul>
</div>

<h2>Mekanik Otomasyon Parçası Malzeme Seçim Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Mekanik Bileşen</th>
    <th>Standart Malzeme Seçimi</th>
    <th>Alternatif (Ağır Hizmet)</th>
    <th>Kritik Tasarım Kriteri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Kaynaklı Ana Şase Karkası</td>
    <td><strong>S235JR (Kutu Profil / Sac)</strong></td>
    <td>S355J2 (Yüksek dinamik yük)</td>
    <td>Kaynak kolaylığı, artık gerilme kontrolü</td>
  </tr>
  <tr>
    <td>Hassas İşlenmiş Montaj Plakası</td>
    <td><strong>S235JR (Gerilim Gidermeli)</strong></td>
    <td>Alüminyum 5083 Döküm Plaka</td>
    <td>Düzlemsellik, işleme sonrası çarpılmama</td>
  </tr>
  <tr>
    <td>Genel Konveyör Tahrik Mili</td>
    <td><strong>C45E (+C Soğuk Çekilmiş)</strong></td>
    <td>42CrMo4+QT</td>
    <td>h9 tolerans, yatak yerleri taşlama</td>
  </tr>
  <tr>
    <td>Yüksek Torklu Servo Motor Mili</td>
    <td><strong>42CrMo4+QT</strong></td>
    <td>34CrNiMo6</td>
    <td>Burulma mukavemeti, dinamik yorulma</td>
  </tr>
  <tr>
    <td>Hassas Planet / Düz Dişli</td>
    <td><strong>16MnCr5 (Sementasyonlu)</strong></td>
    <td>42CrMo4 (Nitrürlenmiş)</td>
    <td>58–62 HRC diş yanağı sertliği</td>
  </tr>
  <tr>
    <td>Düz / Helis Kremayer Çubuğu</td>
    <td><strong>C45 (İndüksiyon Sertleştirilmiş)</strong></td>
    <td>16MnCr5 Taşlanmış</td>
    <td>Diş adımı hassasiyeti, aşınma ömrü</td>
  </tr>
  <tr>
    <td>Kılavuz Pim / Burç / Spacer</td>
    <td><strong>11SMnPb30 (CNC Otomat)</strong></td>
    <td>1.2842 Taşlanmış Sert Pim</td>
    <td>Talaş kaldırma hızı, ölçü kararlılığı</td>
  </tr>
  <tr>
    <td>Aşınma Plakası / Sürtünme Kızağı</td>
    <td><strong>Hardox 450 (Aşınma Sacı)</strong></td>
    <td>1.2379 Sertleştirilmiş Çelik</td>
    <td>Abrasif sürtünme direnci</td>
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
    <td><strong>CEV (Karbon Eşdeğeri)</strong></td>
    <td>Çeliğin kimyasal bileşimindeki elementlerin kaynak bölgesinde soğuk çatlama ve sertleşme eğilimini gösteren IIW standart katsayısı. CEV &gt; 0,45 ise ön ısıtma şarttır.</td>
  </tr>
  <tr>
    <td><strong>Islah (Quench & Temper)</strong></td>
    <td>Çeliğin östenitleme sıcaklığından su/yağda hızla soğutularak sert martenzite dönüştürülmesi ve ardından tokluk kazandırmak için 500–650 °C aralığında menevişlenmesi işlemi.</td>
  </tr>
  <tr>
    <td><strong>Sementasyon (Case Hardening)</strong></td>
    <td>Düşük karbonlu çeliklerin yüzeyine yüksek sıcaklıkta karbon difüzyonu yapılarak dış tabakanın 58–62 HRC sertleştirilmesi, iç çekirdeğin ise darbe emici sünek bırakılması süreci.</td>
  </tr>
  <tr>
    <td><strong>İndüksiyonla Yüzey Sertleştirme</strong></td>
    <td>Yüksek frekanslı alternatif akım bobini ile parça yüzeyinde girdap akımları (Eddy) oluşturup yerel ısıtma yaparak yüzeyi hızla sertleştirme yöntemi.</td>
  </tr>
  <tr>
    <td><strong>ITAB (HAZ)</strong></td>
    <td>Kaynak Isı Tesiri Altındaki Bölge (Heat Affected Zone). Kaynak erime sınırının hemen yanında aşırı ısıyla mikroyapısı değişen ve çatlamaya en duyarlı olan geçiş bölgesi.</td>
  </tr>
  <tr>
    <td><strong>Soğuk Pekleşme (Work Hardening)</strong></td>
    <td>Metallerin plastik deformasyon (soğuk çekme, haddeleme) sırasında dislokasyon yoğunluğunun artması sonucu akma mukavemetinin yükselmesi ve sünekliğin azalması olayı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Şase ve statik plakalarda <strong>S235JR</strong> varsayılan seçimdir; rijitliği artırmak için mukavemetli çeliğe geçmek anlamsızdır.</li>
  <li>Karbon eşdeğeri CEV &gt; 0,45 olan çeliklerde kaynaktan kaçınılmalı veya 200–300 °C ön ısıtma prosedürü uygulanmalıdır.</li>
  <li>Millerde ve akslarda <strong>C45E</strong> standarttır; yatak oturma bölgeleri indüksiyonla 55–58 HRC sertleştirilebilir.</li>
  <li>Yüksek torklu ve yorulmalı ağır hizmet millerinde <strong>42CrMo4+QT</strong> ıslahlı çelik doğrudan işlenerek kullanılır.</li>
  <li>Aşınma ve darbenin bir arada olduğu dişlilerde <strong>16MnCr5 sementasyon çeliği</strong> tercih edilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Çapı 60 mm olan 42CrMo4 ıslahlı bir milin ucuna flanş kaynatmak isteyen imalatçıya tasarımcı olarak ne cevap vermelisiniz?</summary>
<div>Kesinlikle onaylanmamalıdır! 42CrMo4 çeliğinin karbon eşdeğeri CEV ≈ 0,85–0,90 mertebesindedir. Kaynak dikişi kenarındaki ITAB bölgesinde aşırı gevrek martenzit oluşur ve kaynak sonrası soğurken veya ilk yüklemede çatlayarak kopar. Çözüm: Flanşı yekpare işlemek, cıvatalı montaj flanşı yapmak veya konik kilitleme elemanı (tollok / bicon) kullanmaktır.</div></details>
<details><summary>Bir konveyör tahrik milinde rulman oturma yeri aşınmış. C45 milden yapılmış yeni milde aynı aşınmayı önlemek için teknik resme ne not yazılmalıdır?</summary>
<div>Rulman oturma çapı bölgesine yerel olarak "Rulman oturma yüzeyi indüksiyonla sertleştirilecek: 56 ± 2 HRC, sertleşme derinliği 1,5–2 mm, taşlanacak (Ra ≤ 0,4 µm, tolerans k6/m5)" notu yazılmalıdır.</div></details>
<details><summary>S235JR profil şasede yüksek titreşimli bir servo eksen bağlıyken esneme hissediliyor. Malzemeyi S355J2 yaparsak esneme ne kadar azalır?</summary>
<div>Esneme bir mikron bile azalmaz! Her iki çeliğin de Elastisite Modülü E ≈ 210 GPa'dır. S355J2 sadece malzemenin plastik akma dayanımını artırır. Esnemeyi azaltmak için profil kesit boyutu büyütülmeli (örneğin 80x80 yerine 120x120 profil) veya köşelere üçgenleme sacları kaynatılmalıdır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-4', `
<p class="giris">Takım çelikleri; otomasyon sistemlerinde doğrudan aşınmaya, sürtünmeye, darbeli kesmeye veya hassas konumlamaya maruz kalan kritik temas elemanlarının vazgeçilmez malzemeleridir. Fikstür merkezleme pimleri, parça kesme ve presleme bıçakları, vakum tutucu aşınma plakaları ve sıcak yapıştırma çeneleri standart imalat çeliklerinden yapılırsa birkaç bin çevrimde aşınarak tolerans dışına çıkar. Bu bölümde <strong>soğuk iş, sıcak iş ve plastik kalıp çeliklerinin</strong> metalurjik davranışını, sertleştirme mekanizmalarını ve tel erozyon risklerini inceliyoruz.</p>

<h2>Takım Çeliği Sınıfları ve Çalışma Rejimleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Takım Çeliği Grubu</th>
    <th>Çalışma Sıcaklığı</th>
    <th>Temel Metalurjik Karakteristiği</th>
    <th>Tipik Çelik Kaliteleri</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Soğuk İş Takım Çelikleri</strong></td>
    <td>&lt; 200 °C</td>
    <td>Maksimum aşınma direnci, yüksek tokluk, yüksek sertlik (56–64 HRC)</td>
    <td>1.2379 (D2), 1.2842 (O2), 1.2510 (O1), 1.2767</td>
  </tr>
  <tr>
    <td><strong>Sıcak İş Takım Çelikleri</strong></td>
    <td>200 – 600 °C</td>
    <td>Yüksek sıcaklıkta sertlik ve tokluğu koruma, termal şok direnci</td>
    <td>1.2344 (H13), 1.2343 (H11)</td>
  </tr>
  <tr>
    <td><strong>Plastik Kalıp Çelikleri</strong></td>
    <td>Oda sıcaklığı – 150 °C</td>
    <td>Ön sertleştirilmiş teslimat (~30 HRC), homojen işlenebilirlik, parlatılabilirlik</td>
    <td>1.2311 / 1.2738 (P20), 1.2083 (Paslanmaz)</td>
  </tr>
  <tr>
    <td><strong>Yüksek Hız Çelikleri (HSS)</strong></td>
    <td>&lt; 600 °C</td>
    <td>Kırmızı akkor sıcaklıkta dahi kesme sertliğini koruma (Kızıl sertlik)</td>
    <td>1.3343 (M2), HS6-5-2</td>
  </tr>
</tbody>
</table>
</div>

<h2>Otomasyonda En Çok Kullanılan Takım Çelikleri</h2>

<h3>1. 1.2379 (X153CrMoV12 / AISI D2 / JIS SKD11): "Aşınma Şampiyonu"</h3>
<ul>
  <li><strong>Kimyasal Kompozisyon:</strong> %1,53 C, <strong>%12 Krom (Cr)</strong>, %0,8 Mo, %0,9 V.</li>
  <li><strong>Mikroyapı ve Sertlik:</strong> Yüksek krom ve karbon oranı yapıda aşırı sert primer krom karbürler (M<sub>7</sub>C<sub>3</sub>) oluşturur. Sertleştirme sonrası <strong>58–62 HRC</strong> sertliğe ulaşır.</li>
  <li><strong>Hava ile Sertleşme:</strong> Yüksek alaşımı sayesinde havada soğutularak (veya vakum fırınında yüksek basınçlı azot gazıyla) sertleşebilir. Su verme distorsiyonu (çarpılma) yağda su verilen çeliklere göre çok düşüktür.</li>
  <li><strong>Kullanım Alanı:</strong> Ambalaj folyo kesme bıçakları, sac şekillendirme ve bükme kalıpları, zımbalar, aşınmaya maruz konveyör kızak cetvelleri, hassas montaj fikstür yüzeyleri.</li>
  <li><strong>Sınırlamaları:</strong> Yüksek karbür içeriği tokluğu düşürür; şiddetli dinamik darbelerde kesici ağızlarda mikro-kırılmalar (chipping) olabilir. Sertleştikten sonra sadece tel erozyon ve taşlama ile işlenebilir.</li>
</ul>

<h3>2. 1.2842 (90MnCrV8 / AISI O2): "Ekonomik ve Kolay İşlenen Çelik"</h3>
<ul>
  <li><strong>Özellikler:</strong> Yağda sertleşen, %0,90 C, %2 Mn içeren soğuk iş çeliğidir. <strong>56–62 HRC</strong> sertlik alır.</li>
  <li><strong>Avantajı:</strong> 1.2379'a göre yumuşak tavlı halde talaşlı işlemesi çok daha hızlı ve kolaydır. İç gerilmesi ve maliyeti düşüktür. Piyasada <strong>hassas taşlanmış lama (gauge plate)</strong> olarak hazır kalınlıklarda satılır.</li>
  <li><strong>Kullanım Alanı:</strong> Fikstür dayama blokları, merkezleme pimleri, mastarlar, orta ömürlü kesme bıçakları.</li>
</ul>

<h3>3. 1.2767 (X45NiCrMo4): "Yüksek Darbe Tokluğu Çeliği"</h3>
<ul>
  <li><strong>Özellikler:</strong> %4 Nikel (Ni) alaşımı sayesinde <strong>olağanüstü darbe tokluğuna</strong> sahiptir. 52–56 HRC sertlikte çalışır.</li>
  <li><strong>Kullanım Alanı:</strong> Kalın sac kesme zımbaları, darbeli pres aparatları, kırılma riski yüksek ince kesitli tutucu tırnaklar.</li>
</ul>

<h3>4. 1.2311 ve 1.2738 (AISI P20): "Ön Sertleştirilmiş Fikstür Çeliği"</h3>
<ul>
  <li><strong>Fabrika Teslim Sertliği:</strong> Isıl işlem gerektirmeden <strong>~280–325 HB (28–34 HRC)</strong> sertlikte teslim edilir.</li>
  <li><strong>Mühendislik Avantajı:</strong> İmalattan sonra fırına gönderilmez! Bu sayede <strong>hiçbir ısıl işlem çarpılması, ölçü değişimi veya oksit tabakası riski olmadan</strong> doğrudan CNC frezede nihai ölçüsüne işlenir.</li>
  <li><strong>Kullanım Alanı:</strong> Fikstür gövdeleri, robot gripper tutucu blokları, orta sertlikte aşınma plakaları.</li>
</ul>

<h3>5. 1.2344 (X40CrMoV5-1 / AISI H13): "Sıcak Çene Çeliği"</h3>
<ul>
  <li><strong>Özellikler:</strong> Sıcak iş takım çeliğidir. 500–600 °C sıcaklıklarda dahi sertliğini ve mekanik dayanımını korur.</li>
  <li><strong>Otomasyondaki Yeri:</strong> Plastik kaynak çeneleri, ultrasonik yapıştırma karşıt blokları, sıcak ambalaj yapıştırma rezistans tutucuları.</li>
</ul>

<h2>Takım Çeliklerinde İmalat ve Isıl İşlem Stratejisi</h2>
<div class="kutu uyari"><span class="kb">Takım Çeliğinde Adım Adım İmalat Zinciri</span>
<ol>
  <li><strong>Yumuşak Tavlı (+A) Kaba İşleme:</strong> Parça yumuşakken talaş kaldırılır. Isıl işlem sonrası taşlanacak yüzeylere <strong>0,3 – 0,5 mm taşlama payı</strong> bırakılır.</li>
  <li><strong>Gerilim Giderme Tavı:</strong> Yoğun talaş kaldırma sonrası fırında 600–650 °C'de iç gerilmeler alınır (ısıl işlem çarpılmasını önler).</li>
  <li><strong>Vakumda Sertleştirme ve Kademeli Temperleme:</strong> Vakum fırınında oksijensiz ortamda su verilir ve en az 2–3 kademe temperleme yapılarak artık östenit dönüştürülür.</li>
  <li><strong>Nihai Taşlama / Tel Erozyon:</strong> Parça sert haldeyken hassas toleranslara taşlanır veya tel erozyonla kesilir.</li>
</ol>
</div>

<h3>Tel Erozyon (WEDM) ve Beyaz Tabaka (White Layer / Recast Layer) Tehlikesi</h3>
<p>1.2379 gibi yüksek alaşımlı takım çelikleri sertleştirildikten sonra tel erozyonla kesildiğinde; elektrik arkının ergittiği yüzeyde mikroskobik kalınlıkta (5–20 µm) <strong>aşırı sert, kırılgan ve mikro-çatlak dolu bir beyaz tabaka</strong> oluşur. Bıçak bu halde çalıştırılırsa ilk darbede kenardan kırılır. <strong>Önlem:</strong> Tel erozyondan sonra en az 3–4 paso finiş kesimi yapılmalı veya parça gerilim giderme sıcaklığında (~200 °C) yeniden hafifçe temperlenmelidir.</p>

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
    <td><strong>Primer Karbürler</strong></td>
    <td>Sıvı çeliğin katılaşması sırasında oluşan ve mikroyapıda çözünmeden kalarak malzemeye aşırı aşınma direnci kazandıran sert krom/vanadyum karbür partikülleri (M<sub>7</sub>C<sub>3</sub>, MC).</td>
  </tr>
  <tr>
    <td><strong>İkincil Sertleşme (Secondary Hardening)</strong></td>
    <td>Yüksek alaşımlı takım çeliklerinde 500–550 °C temperleme sıcaklığında mikroyapıdan ince alaşım karbürlerinin çökerek sertliği yeniden artırması olayı.</td>
  </tr>
  <tr>
    <td><strong>Artık Östenit (Retained Austenite)</strong></td>
    <td>Su verme sonrasında martenzite dönüşemeyip oda sıcaklığında metastabil kalan sünek östenit fazı. Zamanla veya yük altında kontrolsüz martenzite dönüştüğünde hacim artışı ve boyutsal sapma yaratır.</td>
  </tr>
  <tr>
    <td><strong>Beyaz Tabaka (Recast Layer)</strong></td>
    <td>Tel erozyon (WEDM) veya dalma erozyon işlemi sırasında ergiyip dielektrik sıvısıyla hızla soğuyarak parça yüzeyinde oluşan mikro-çatlaklı, aşırı sert ve kırılgan tabaka.</td>
  </tr>
  <tr>
    <td><strong>Ön Sertleştirilmiş Çelik (Pre-hardened)</strong></td>
    <td>Çelik üreticisi tarafından metalurjik olarak ~30 HRC seviyesine kadar ıslah edilmiş ve müşteriye doğrudan işlenmeye hazır halde sunulan kalıp çeliği (P20/1.2311).</td>
  </tr>
  <tr>
    <td><strong>Chipping (Kenar Pullanması)</strong></td>
    <td>Aşırı sert ve düşük tokluklu kesme bıçaklarının darbe veya titreşim etkisiyle kesici ağızlarından mikroskobik parçaların kopup ufalanması hasarı.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Yüksek abrasif aşınma ve sac/folyo kesme uygulamalarında standart tercih <strong>1.2379 (58–62 HRC)</strong> çeliğidir.</li>
  <li>Darbe ve şok yüklerinin baskın olduğu kesme zımbalarında kırılmayı önlemek için nikel alaşımlı tok <strong>1.2767</strong> seçilmelidir.</li>
  <li>Isıl işlem fırınına göndermeden, çarpılma riski olmadan orta sertlikte (~30 HRC) fikstür ve tutucu üretmek için <strong>P20 (1.2311 / 1.2738)</strong> en rasyonel tercihtir.</li>
  <li>Sıcak yapıştırma ve kaynak çenelerinde termal yorulmaya karşı <strong>1.2344 sıcak iş çeliği</strong> kullanılır.</li>
  <li>Tel erozyonla kesilen takım çeliği bıçaklarında beyaz tabaka temizlenmeli veya gevrek kırılmayı önlemek için ek temperleme uygulanmalıdır.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Ambalaj makinesinde plastik tüp kesen bıçak 1.2379 malzemeden yapılmış ve 62 HRC sertleştirilmiştir. Bıçak kesme kenarlarından mikro kırılmalar (chipping) veriyor. Çözüm ne olmalıdır?</summary>
<div>62 HRC sertlikte 1.2379 çeliği tokluğunu büyük oranda kaybeder ve darbeli kesmede kenar ufalanması yapar. Çözüm: (1) Temperleme sıcaklığı biraz artırılarak sertlik 58–60 HRC seviyesine çekilmeli (tokluk kazanılır), (2) Bıçak kesme ağzına mikron mertebesinde pah/radyüs kırılmalı, ya da (3) Darbe şiddetliyse yüksek tokluklu 1.2767 veya toz metalurjisi (PM) çeliğine (ör. Vanadis 4 Extra) geçilmelidir.</div></details>
<details><summary>Neden fikstür gövdesi yaparken C45 parçayı işleyip fırında sertleştirmek yerine doğrudan 1.2311 (P20) tercih edilir?</summary>
<div>C45 parçası işlendikten sonra sertleştirme fırınına girdiğinde su verme termal şoku ve faz dönüşümü yüzünden çarpılır, delik eksenleri kayar ve düzlemselliği bozulur; sertleştikten sonra tüm yüzeylerin yeniden taşlanması gerekir. 1.2311 ise zaten 30 HRC sertliktedir; tek bağlamada CNC'de işlenir, fırına gitmez ve boyutsal toleranslarını sıfır hata ile korur.</div></details>
<details><summary>Tel erozyondan çıkan 1.2379 zımba hiçbir işlem görmeden kalıba takılırsa ne riski oluşur?</summary>
<div>Tel erozyon yüzeyinde oluşan mikroskobik beyaz tabaka (recast layer) çok yüksek çekme gerilmeleri ve mikroskobik kılcal çatlaklar barındırır. Zımba ilk darbeyi vurduğunda bu mikro-çatlaklar hızla gövdeye ilerler ve zımbanın ilk baskıda kırılmasına yol açar. Yüzey polisajla parlatılmalı veya gerilim giderme tavı uygulanmalıdır.</div></details>
</div>
`);

KITAP.bolum('m1', '1-5', `
<p class="giris">Gıda ambalaj hatları, medikal montaj hücreleri, kimyasal dozaj sistemleri ve yoğun deterjan/su ile yıkanan (washdown) endüstriyel otomasyon ortamlarında standart karbon çelikleri korozyona yenik düşer. Ancak piyasada "paslanmaz çelik" tek bir malzeme olarak bilinse de, aslında manyetikliğinden mukavemetine, korozyon direncinden işlenebilirliğine kadar tamamen zıt karakterlere sahip geniş bir alaşım ailesidir. 304 ile 316 arasındaki kimyasal fark, paslanmaz cıvataların neden kilitlenip kaynadığı (galling) ve hijyenik tasarım ilkeleri bu bölümün ana konusudur.</p>

<h2>Korozyon Direnci Mekanizması: Kendini Onaran Pasif Tabaka</h2>
<p>Bir çeliğin "paslanmaz" sınıfına girebilmesi için kimyasal kompozisyonunda <strong>en az ağırlıkça %10,5 Krom (Cr)</strong> ve en fazla %1,2 Karbon bulunması gerekir (EN 10088-1). Krom, atmosferik oksijenle reaksiyona girerek metal yüzeyinde 1 ila 5 nanometre kalınlığında yoğun bir <strong>Krom-III-Oksit (Cr<sub>2</sub>O<sub>3</sub>) pasif tabakası</strong> oluşturur:</p>

<ul>
  <li>Bu tabaka gözeneksizdir, metali dış ortamdaki nem ve agresif kimyasallardan tamamen izole eder.</li>
  <li>Yüzey çizilse veya mekanik olarak hasar görse dahi, ortamda oksijen bulunduğu sürece pasif film saniyeler içinde <strong>kendini onarır (self-healing)</strong>.</li>
  <li><strong>Oksijensiz Ortam Tehlikesi:</strong> Conta altları, cıvata diş boşlukları ve birikinti yapan kör deliklerde oksijen tükendiğinde pasif film yenilenemez ve lokal <strong>aralık korozyonu (crevice corrosion)</strong> başlar.</li>
</ul>

<h2>Paslanmaz Çelik Metalurjik Aileleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Metalurjik Sınıf</th>
    <th>Kristal Kafes Yapısı</th>
    <th>Manyetik Özellik</th>
    <th>Isıl İşlemle Sertleşme</th>
    <th>Genel Özellikler ve Temsilciler</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Östenitik</strong></td>
    <td>YMK (Yüzey Merkezli Kübik)</td>
    <td><strong>Manyetik Değildir</strong> (Soğuk şekillendirmeyle hafifleşir)</td>
    <td>Su verilerek sertleşmez (Sadece pekleşir)</td>
    <td>En yaygın gruptur. Mükemmel korozyon direnci, yüksek süneklik. <strong>AISI 304 (1.4301), AISI 316L (1.4404), AISI 303 (1.4305)</strong>.</td>
  </tr>
  <tr>
    <td><strong>Ferritik</strong></td>
    <td>HMK (Hacim Merkezli Kübik)</td>
    <td><strong>Manyetiktir (Mıknatıs tutar)</strong></td>
    <td>Sertleşmez</td>
    <td>Nikel içermez (%12–18 Cr). Ekonomiktir, gerilmeli korozyon direnci iyidir. <strong>AISI 430 (1.4016)</strong>. Beyaz eşya, kapak panelleri.</td>
  </tr>
  <tr>
    <td><strong>Martenzitik</strong></td>
    <td>Bozulmuş HMK / Tetragonal</td>
    <td><strong>Manyetiktir (Mıknatıs tutar)</strong></td>
    <td><strong>Su verilerek sertleşir (50–60 HRC)</strong></td>
    <td>Krom + Yüksek Karbon (%0,2–1,2 C). Aşınmaya dayanıklı sert paslanmazlar. <strong>AISI 420 (1.4021), AISI 440C (1.4125)</strong>. Miller, bıçaklar, rulmanlar.</td>
  </tr>
  <tr>
    <td><strong>Dubleks (Östenitik-Ferritik)</strong></td>
    <td>YMK + HMK Karışımı (%50/50)</td>
    <td><strong>Manyetiktir</strong></td>
    <td>Sertleşmez</td>
    <td>Çok yüksek akma mukavemeti (R<sub>p0.2</sub> &gt; 450 MPa) ve klorürlü ortamlarda olağanüstü çukurcuk direnci. <strong>1.4462 (AISI 2205)</strong>.</td>
  </tr>
  <tr>
    <td><strong>Çökelmeyle Sertleşen (PH)</strong></td>
    <td>Martenzitik Matris</td>
    <td><strong>Manyetiktir</strong></td>
    <td><strong>Yaşlandırma ısıl işlemiyle (480 °C) sertleşir</strong></td>
    <td>Çok yüksek mukavemet (R<sub>p0.2</sub> ≈ 1000 MPa) ve boyutsal kararlılık. <strong>17-4 PH (1.4542)</strong>. Havacılık, yüksek yüklü paslanmaz şaftlar.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Endüstriyel Otomasyonun Temel Paslanmaz Kaliteleri</h2>

<h3>1. AISI 304 (EN 1.4301 / X5CrNi18-10): "Standart Paslanmaz"</h3>
<ul>
  <li>%18 Krom, %8–10 Nikel içerir. Dünyadaki paslanmaz üretiminin yarısından fazlasını oluşturur.</li>
  <li><strong>Kullanım Alanı:</strong> Genel gıda hatları, ambalaj makineleri, koruyucu muhafaza kapakları, konveyör yan kılavuzları, kuru ortam montaj plakaları.</li>
  <li><strong>Limitleri:</strong> Tuzlu ortamlar, deniz kıyısı ve klorlu dezenfektanlara karşı yetersizdir; çukurcuk korozyonuna uğrar.</li>
</ul>

<h3>2. AISI 316L (EN 1.4404 / X2CrNiMo17-12-2): "Asit ve Klorür Uzmanı"</h3>
<ul>
  <li>304 formülüne ek olarak <strong>%2 – 2,5 Molibden (Mo)</strong> ilavesine sahiptir ve karbonu düşüktür (L = Low Carbon, C ≤ %0,03).</li>
  <li><strong>Molibdenin Etkisi:</strong> Pasif Cr<sub>2</sub>O<sub>3</sub> tabakasını klorür (Cl⁻) iyonlarının delmesine karşı korur.</li>
  <li><strong>Kullanım Alanı:</strong> İlaç (GMP) üretim hatları, süt ve et işleme tesisleri, tuzlu su/denizcilik ekipmanları, kostik ve asitli CIP (Clean-in-Place) yıkanan otomasyon istasyonları.</li>
</ul>

<h3>3. AISI 303 (EN 1.4305 / X8CrNiS18-9): "Talaşlı İmalat Otomat Paslanmazı"</h3>
<ul>
  <li>Talaş kırıcılığı sağlamak için kükürt (%0,15–0,35 S) ilave edilmiştir.</li>
  <li><strong>Üstünlüğü:</strong> CNC tornada çok rahat işlenir, takımı sarmaz, yüzey pürüzsüz çıkar.</li>
  <li><strong>Zayıflığı:</strong> Kükürt inklüzyonları pasif tabakayı zayıflatır; korozyon direnci 304'ten belirgin derecede düşüktür. <strong>Kaynak edilemez!</strong> Gıda ile doğrudan temas eden parçalarda kükürt migrasyonu nedeniyle tercih edilmez.</li>
</ul>

<h3>4. AISI 420 (1.4021) ve AISI 440C (1.4125): "Sertleşebilir Paslanmazlar"</h3>
<ul>
  <li><strong>AISI 420 (X20Cr13):</strong> Islah edilerek <strong>48–52 HRC</strong> sertliğe ulaşır. Pompa milleri, paslanmaz lineer kılavuz şaftları ve gıda kesme bıçaklarında kullanılır.</li>
  <li><strong>AISI 440C (X105CrMo17):</strong> %1 Karbon içerir, <strong>58–60 HRC</strong> sertliğe ulaşır. Paslanmaz rulmanlar, lineer raylar ve yüksek hassasiyetli tıbbi aletler bu malzemeden üretilir.</li>
</ul>

<h2>Çukurcuk Korozyonu Direnç Eşdeğeri (PREN)</h2>
<p>Paslanmaz çeliklerin klorürlü ortamlardaki çukurcuk korozyonuna (pitting) karşı direnci <strong>PREN (Pitting Resistance Equivalent Number)</strong> formülü ile hesaplanır:</p>

<div class="formul">
PREN = % Cr + ( 3,3 · % Mo ) + ( 16 · % N )
</div>

<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Malzeme</th>
    <th>Kısa Ad</th>
    <th>PREN Değeri</th>
    <th>Klorürlü Ortam Dayanımı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>AISI 304</strong></td>
    <td>1.4301</td>
    <td>~18 – 19</td>
    <td>Düşük (Tuz ve klorürde noktasal delinir)</td>
  </tr>
  <tr>
    <td><strong>AISI 316L</strong></td>
    <td>1.4404</td>
    <td><strong>~23 – 25</strong></td>
    <td>İyi (CIP kimyasallarına ve orta tuzluluğa dayanıklı)</td>
  </tr>
  <tr>
    <td><strong>Dubleks 2205</strong></td>
    <td>1.4462</td>
    <td><strong>~34 – 36</strong></td>
    <td>Üstün (Deniz suyu ve yüksek konsantrasyonlu asitler)</td>
  </tr>
</tbody>
</table>
</div>

<h2>Paslanmaz Çelik Tasarımında Hayati Mühendislik Kuralları</h2>

<h3>1. Soğuk Kaynak ve Diş Yenmesi (Galling): Paslanmaz Cıvatanın Kilitlenmesi</h3>
<p>Paslanmaz cıvata paslanmaz somuna sıkılırken yüksek yüzey sürtünmesi ve temas basıncı altındaki mikroskobik pürüzler pasif tabakayı sıyırır. Saf metal-metal teması gerçekleşir ve oda sıcaklığında parçalar birbirine mikroskobik olarak sürtünmeyle kaynar (cold welding / galling). Cıvata yarı yolda kilitlenir; ne sıkılabilir ne sökülebilir, zorlandığında kırılır.</p>
<div class="kutu tehlike"><span class="kb">Galling Olayını Önleme Kuralları</span>
<ul>
  <li>Cıvata dişlerine mutlaka <strong>anti-seize (yapışma önleyici nikel/seramik bazlı) montaj pastası</strong> veya PTFE sprey sürülmelidir.</li>
  <li>Montajda akülü vidalama darbeli yüksek devirde <strong>asla kullanılmamalıdır</strong>; yavaş tork anahtarıyla sıkılmalıdır.</li>
  <li>Mümkünse cıvata ile somun farklı paslanmaz kalitelerinden seçilmelidir (örneğin A4-80 cıvata + özel bronz/kaplamalı somun).</li>
</ul>
</div>

<h3>2. Paslanmaz Cıvata Mukavemet Sınıfları (ISO 3506)</h3>
<p>Teknik resimlerde ve siparişlerde <code>A2-70</code> veya <code>A4-80</code> şeklinde belirtilir:</p>
<ul>
  <li><code>A2</code> = AISI 304 sınıfı östenitik çelik; <code>A4</code> = AISI 316 sınıfı östenitik çelik.</li>
  <li><code>70</code> = R<sub>m</sub> = 700 MPa çekme mukavemeti; <code>80</code> = R<sub>m</sub> = 800 MPa çekme mukavemeti.</li>
  <li><strong>Önemli Uyarı:</strong> Standart A2-70 paslanmaz cıvatanın akma mukavemeti (~450 MPa), endüstride yaygın olan <strong>8.8 çelik cıvatanın (640 MPa) %30 altındadır!</strong> Çelik yapıdan paslanmaza geçerken cıvatalar aynı torkla sıkılamaz ve daha büyük çap seçilmesi gerekebilir.</li>
</ul>

<h3>3. Hijyenik Tasarım ve Yüzey Pürüzlülüğü (EHEDG / 3-A İlkeleri)</h3>
<ul>
  <li>Gıda ve medikal temas yüzeylerinde pürüzlülük standardı <strong>Ra ≤ 0,8 µm</strong> (tercihen Ra ≤ 0,4 µm elektropolisajlı) olmalıdır.</li>
  <li>Sıvı birikmesine izin verecek yatay düz yüzeylerden kaçınılmalı, en az <strong>3° eğim</strong> verilmelidir.</li>
  <li>Kör delikler, yarıklar ve açık cıvata dişleri yasaktır; hijyenik sızdırmaz başlıklı paslanmaz cıvatalar ve mavi EPDM contalar kullanılmalıdır.</li>
  <li>Kaynak sonrası ısı renkleri (temperleme renkleri) korozyona açık bölgelerdir; kimyasal <strong>dekapaj (asitle yıkama / pickling)</strong> ve <strong>pasivasyon</strong> işlemiyle yüzey tamamen temizlenmelidir.</li>
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
    <td><strong>Pasif Tabaka (Cr<sub>2</sub>O<sub>3</sub>)</strong></td>
    <td>Krom içeriği ≥ %10,5 olan çeliklerin yüzeyinde atmosferik oksijenle kendiliğinden oluşan, 1–5 nm kalınlığında, korozyonu bloke eden ve kendini onarabilen koruyucu oksit filmi.</td>
  </tr>
  <tr>
    <td><strong>Galling (Soğuk Kaynak / Yenme)</strong></td>
    <td>Paslanmaz çelik gibi sünek metallerin yüksek basınçlı sürtünme altında koruyucu oksit tabakalarının yırtılarak atomik düzeyde birbirine yapışması ve kilitlenmesi mekanik hasarı.</td>
  </tr>
  <tr>
    <td><strong>PREN (Çukurcuk Direnç Eşdeğeri)</strong></td>
    <td>Krom, molibden ve azot yüzdeleriyle hesaplanan, paslanmaz çeliğin klorür kaynaklı noktasal delinme (pitting) korozyonuna karşı direnç katsayısı.</td>
  </tr>
  <tr>
    <td><strong>Östenitik Yapı (YMK)</strong></td>
    <td>Nikel ilavesiyle oda sıcaklığında kararlı kılınan Yüzey Merkezli Kübik kristal kafes fazı. Manyetik değildir, darbe tokluğu çok yüksektir ve su verilerek sertleştirilemez.</td>
  </tr>
  <tr>
    <td><strong>Dekapaj ve Pasivasyon (Pickling)</strong></td>
    <td>Kaynak ve ısıl işlem sonrası paslanmaz yüzeyindeki kirlilik, serbest demir ve oksit tabakalarını nitrik/hidroflorik asitle temizleyip zengin krom-oksit pasif filmini yeniden oluşturma kimyasal prosesi.</td>
  </tr>
  <tr>
    <td><strong>ISO 3506 (A2-70 / A4-80)</strong></td>
    <td>Korozyona dayanıklı paslanmaz çelik bağlantı elemanlarının mekanik özelliklerini tanımlayan standart. A2/A4 alaşım grubunu, 70/80 ise nominal çekme mukavemetini (×10 MPa) ifade eder.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Paslanmazlık en az %10,5 Kromun oksijenle oluşturduğu mikroskobik Cr<sub>2</sub>O<sub>3</sub> pasif oksit tabakasına dayanır.</li>
  <li>Standart otomasyonda <strong>AISI 304</strong> kullanılır; ancak tuz, klor veya asitli CIP yıkama varsa %2–2,5 Molibden içeren <strong>AISI 316L</strong> zorunludur.</li>
  <li>Östenitik paslanmazlar mıknatıs tutmaz ve ısıl işlemle sertleşmez; sert paslanmaz şaft gerekiyorsa martenzitik <strong>AISI 420</strong> veya <strong>440C</strong> seçilmelidir.</li>
  <li>Paslanmaz cıvatalar galling (soğuk kaynak) riski taşır; anti-seize montaj pastası kullanılmalı ve düşük devirde sıkılmalıdır.</li>
  <li>A2-70 paslanmaz cıvataların mukavemeti 8.8 çelik cıvatanın altındadır; sıkma torkları düşürülmeli veya kesit büyütülmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Gıda paketleme makinesinde kullanılan AISI 304 şase üzerinde manyetik tutucu (manyetik sensör braketi) neden çalışmaz?</summary>
<div>AISI 304 paslanmaz çeliği östenitik kristal kafes yapısına (Yüzey Merkezli Kübik - YMK) sahiptir. Östenit fazı ferromanyetik değildir (manyetik geçirgenliği µ<sub>r</sub> ≈ 1'dir). Dolayısıyla mıknatıslar tutunamaz. Manyetik tutunma gerekiyorsa ferritik paslanmaz (AISI 430) veya martenzitik paslanmaz plakalar kullanılmalıdır.</div></details>
<details><summary>Yeni monte edilen bir paslanmaz montaj hücresinde teknisyen M8 A2-70 cıvataları akülü vidalama ile sıkarken 3 adet cıvata yarı yolda kilitlenip kırılmıştır. Kök neden ve çözüm nedir?</summary>
<div>Kök neden "galling" (soğuk kaynak) olayıdır. Akülü vidalamanın yüksek devri ve sürtünme ısısı pasif filmi sıyırmış, saf paslanmaz yüzeyler yüksek temas basıncında birbirine anında kaynamıştır. Çözüm: Cıvata dişlerine nikel/seramik bazlı anti-seize montaj pastası sürülmeli ve montaj kontrollü el tork anahtarıyla düşük hızda yapılmalıdır.</div></details>
<details><summary>CNC tornada seri imal edilecek gıda sınıfı paslanmaz burçlar için tasarımcı AISI 303 önermiştir. Kalite mühendisi neden bu malzemeye itiraz edebilir?</summary>
<div>AISI 303 serbest talaş işleme için yüksek kükürt (%0,15–0,35 S) içerir. Bu kükürt inklüzyonları korozyon direncini zayıflatır ve doğrudan gıda/ilaç temasında kimyasal çözünme (migrasyon) riski yaratır. Gıda regülasyonlarına (FDA / EHEDG) uygunluk için 304L veya 316L kullanılmalı; talaş işleme zorluğu uygun kesici takımlarla aşılmalıdır.</div></details>
</div>
`);
