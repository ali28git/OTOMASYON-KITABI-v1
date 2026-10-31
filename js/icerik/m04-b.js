// MODÜL 4 — Makine Elemanları (Bölüm 4.7 – 4.10: Rulmanlar, Yataklama ve Ömür Analizi)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m4', '4-7', `
<p class="giris">Mekanik tasarımda en sık yapılan hata, rulmanın sadece mil çapına (d) göre rastgele seçilmesidir. Gerçekte rulman seçimi; radyal/eksenel yük oranı (Fa/Fr), devir sayısı, dinamik hizasızlık açısı, çalışma sıcaklığı, yağlama filmi kalınlığı ve montaj hacminin çok değişkenli bir optimizasyonudur. Bu bölümde tüm rulman ailelerini matematiksel ve fonksiyonel sınırlarıyla kıyaslıyoruz.</p>

<h2>Bilyalı vs. Makaralı Temas Mekaniği (Hertz Gerilmeleri)</h2>
<div class="iki-sutun">
  <div>
    <h4>Bilyalı Rulmanlar (Noktasal Temas)</h4>
    <ul>
      <li>Bilya ile bilezik arasında teorik temas bir elipstir. Temas alanı çok küçüktür.</li>
      <li><strong>Sonuç:</strong> Sürtünme momenti çok düşüktür; <strong>çok yüksek devir hızlarına (n &gt; 10.000 d/dak)</strong> ulaşabilir. Ancak aşırı yük altında temas elipsi kenarlardan taşarak plastik ezilmeye (brinelling) uğrar.</li>
    </ul>
  </div>
  <div>
    <h4>Makaralı Rulmanlar (Çizgisel Temas)</h4>
    <ul>
      <li>Makara ile bilezik arasında dikdörtgensel temas çizgisi vardır.</li>
      <li><strong>Sonuç:</strong> Yük çok daha geniş bir alana yayılır. <strong>Ağır şok ve darbe yüklerine</strong> karşı bilyalı rulmandan 3–5 kat daha dayanıklıdır. Ancak temas yüzeyinde kayma sürtünmesi daha fazla olduğundan sınır hızları düşüktür ve ısınma eğilimi yüksektir.</li>
    </ul>
  </div>
</div>

<h2>Büyük Rulman Kıyaslama ve Seçim Matrisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Rulman Tipi ve Kodu</th>
    <th>Radyal Yük Kapasitesi</th>
    <th>Eksenel Yük Kapasitesi</th>
    <th>Devir Hızı Limiti</th>
    <th>Açısal Kaçıklık Toleransı</th>
    <th>Rijitlik / Boşluksuzluk</th>
    <th>Kritik Zayıflık / Arıza Modu</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Sabit Bilyalı (60xx, 62xx, 63xx)</strong></td>
    <td>Orta</td>
    <td>Düşük – Orta (Her iki yönde)</td>
    <td><strong>Çok Yüksek</strong></td>
    <td>maks. 10 – 15 ark-dakika</td>
    <td>Düşük (Radyal boşluk C3 vb.)</td>
    <td>Aşırı eksenel yükte bilyaların yuvarlanma omzuna tırmanıp pul pul dökülmesi (flaking).</td>
  </tr>
  <tr>
    <td><strong>Eğik Bilyalı Tek Sıra (72xx, 73xx)</strong></td>
    <td>Yüksek</td>
    <td><strong>Çok Yüksek (Tek yönde)</strong></td>
    <td><strong>Çok Yüksek</strong></td>
    <td>maks. 2 – 4 ark-dakika</td>
    <td><strong>Çok Yüksek (Ön gerilimli çift montaj)</strong></td>
    <td>Yanlış yönde monte edilirse dış bilezik fırlar ve bilyalar dağılır. Daima çift çalışmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Konik Makaralı (30xxx, 32xxx)</strong></td>
    <td><strong>Çok Yüksek</strong></td>
    <td><strong>Aşırı Yüksek (Tek yönde)</strong></td>
    <td>Orta</td>
    <td>maks. 2 – 3 ark-dakika</td>
    <td><strong>En Yüksek</strong></td>
    <td>Montaj boşluğu şimle veya somunla elle hassas ayarlanmalıdır. Hatalı sıkılırsa aşırı ısınır ve kilitlenir.</td>
  </tr>
  <tr>
    <td><strong>Silindirik Makaralı (NU, N Serisi)</strong></td>
    <td><strong>Olağanüstü Yüksek</strong></td>
    <td><strong>SIFIR (NU) / Düşük (NJ/NUP)</strong></td>
    <td>Yüksek</td>
    <td>maks. 3 – 5 ark-dakika</td>
    <td>Yüksek (Radyal)</td>
    <td>Eksenel yük altında makara alınları ve kılavuz flanşlar kuru sürtünmeyle anında yanar (scuffing).</td>
  </tr>
  <tr>
    <td><strong>Oynak Makaralı (222xx, 223xx)</strong></td>
    <td><strong>Aşırı Yüksek</strong></td>
    <td>Orta – Yüksek (Çift yönde)</td>
    <td>Düşük – Orta</td>
    <td><strong>1,5° – 2,5° (Muazzam Tolerans!)</strong></td>
    <td>Düşük</td>
    <td>Hafif yükte makaralar yuvarlanmak yerine kayar (skidding) ve yuvarlanma yolunu çizer. Minimum yük (%2 C0) şarttır!</td>
  </tr>
  <tr>
    <td><strong>Eksenel Baskı Bilyalı (511xx, 512xx)</strong></td>
    <td><strong>KESİNLİKLE SIFIR</strong></td>
    <td><strong>Çok Yüksek (Sadece tek yön)</strong></td>
    <td><strong>Çok Düşük</strong></td>
    <td>Sıfır (Eksen dikliği şart)</td>
    <td>Yüksek</td>
    <td>Merkezkaç kuvveti bilyaları dışarı fırlatır; yüksek hızda kafes parçalanır. En ufak radyal yükte dağılır.</td>
  </tr>
  <tr>
    <td><strong>İğneli Rulman (HK, RNA, NK)</strong></td>
    <td>Çok Yüksek (Dar Hacimde)</td>
    <td>Sıfır</td>
    <td>Orta</td>
    <td>maks. 1 – 2 ark-dakika</td>
    <td>Çok Yüksek</td>
    <td>Mil yüzeyi doğrudan yuvarlanma yolu olarak kullanılacaksa mil <strong>min. 58–62 HRC</strong> sertlikte ve taşlanmış (Ra &lt; 0,2 µm) olmalıdır.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Rulman Kapak ve Keçe Tipleri (Sürtünme vs. Koruma)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kapak Kodu</th>
    <th>Yapı</th>
    <th>Sürtünme Momenti</th>
    <th>Sınır Hız Katsayısı</th>
    <th>Toz / Sıvı Koruması</th>
    <th>Tipik Kullanım</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Açık (Open)</strong></td>
    <td>Kapaksız, çıplak</td>
    <td>En Düşük</td>
    <td>%100 (Referans)</td>
    <td>Sıfır koruma</td>
    <td>Yağ banyolu kapalı redüktörler ve hidrolik motor içleri.</td>
  </tr>
  <tr>
    <td><strong>2Z (ZZ)</strong></td>
    <td>Temassız Saç Toz Kapağı</td>
    <td>Çok Düşük (Sürtünmesiz)</td>
    <td>%100</td>
    <td>Toza iyi, suya ve sıvıya <strong>ZAYIF</strong></td>
    <td>Elektrik motorları, yüksek hızlı iş milleri, temiz fabrika ortamı.</td>
  </tr>
  <tr>
    <td><strong>2RS (2RSH / 2RSR)</strong></td>
    <td>Temaslı NBR Kauçuk Keçe</td>
    <td>Yüksek (Dudak sürter)</td>
    <td>%60 – %70</td>
    <td><strong>Mükemmel (Su sıçramasına ve toza tam koruma)</strong></td>
    <td><strong>Genel otomasyon, konveyörler, paketleme, dış ortam.</strong> İçindeki fabrikasyon gres ömür boyu yeterlidir.</td>
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
    <td><strong>Hertz Basıncı (Hertzian Stress)</strong></td>
    <td>İki eğrisel yüzeyin (bilya-kanal veya makara-bilezik) elastik temas bölgesinde oluşan ve malzeme yüzeyinin hemen altında maksimum kayma gerilmesi üreten temas basıncıdır.</td>
  </tr>
  <tr>
    <td><strong>C [kN] (Dinamik Yük Sayısı)</strong></td>
    <td>Rulman grubunun 1 milyon devirlik nominal anma ömrünü (L₁₀) %90 güvenilirlikle tamamlayabileceği sabit büyüklük ve yöndeki referans dinamik yük kapasitesidir.</td>
  </tr>
  <tr>
    <td><strong>C₀ [kN] (Statik Yük Sayısı)</strong></td>
    <td>Durgun veya çok yavaş dönen rulmanda, yuvarlanma elemanı ve bilezik temas merkezinde 4000 ila 4600 MPa mertebesinde kalıcı plastik deformasyona yol açan kritik sınır yüküdür.</td>
  </tr>
  <tr>
    <td><strong>Flaking / Spalling (Pul Pul Dökülme)</strong></td>
    <td>Yuvarlanma yatağı malzemesinde yüzey altındaki maksimum kayma gerilmesinden başlayan mikro çatlakların yüzeye ulaşarak metal parçacıklarının kabuk gibi kopmasıdır.</td>
  </tr>
  <tr>
    <td><strong>Brinelling (Ezilme Hasarı)</strong></td>
    <td>Aşırı statik yük veya montajda uygulanan çekiç darbeleri sonucu bilyaların yuvarlanma yolunda kalıcı çukurlar ve ezikler oluşturması arızasıdır.</td>
  </tr>
  <tr>
    <td><strong>2RS / 2RSH Keçe</strong></td>
    <td>Sentetik NBR kauçuktan üretilen, iç bileziğe temas eden esnek dudaklı sızdırmazlık elemanıdır; sıvı ve toza karşı mükemmel koruma sağlarken sürtünme momenti üretir.</td>
  </tr>
  <tr>
    <td><strong>Skidding (Makaraların Kayması)</strong></td>
    <td>Oynak veya silindirik makaralı rulmanlarda radyal yükün yetersiz olması durumunda makaraların yuvarlanmak yerine yağ filmi üzerinde kayarak yuvarlanma kanalını çizmesi olgusudur.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Varsayılan genel amaçlı seçim <strong>Sabit Bilyalı Rulman (62xx-2RS)</strong>'dır.</li>
  <li>Eksenel yük baskınsa: <strong>Eğik Bilyalı</strong> veya <strong>Konik Makaralı</strong> rulmanlar çift olarak kullanılır.</li>
  <li>Ağır darbe ve sehimli şaselerde: <strong>Oynak Makaralı (22xxx)</strong> hayat kurtarır.</li>
  <li>Eksenel baskı rulmanlarına (511xx) kesinlikle radyal yük bindirilmez.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Yüksek devirli bir iş milinde (12.000 d/dak) 2RS kauçuk keçeli rulman kullanırsan ne olur?</summary>
<div>Kauçuk keçe dudağı iç bileziğe sürtünerek çalışır. 12.000 d/dak gibi yüksek çizgisel hızlarda sürtünme aşırı ısı üretir; keçe erir, gres yanarak dışarı akar ve rulman kilitlenir. Yüksek hızlarda temassız metal kapaklı (2Z) veya açık rulmanlar seçilmelidir.</div></details>
<details><summary>Eksenel baskı rulmanı (511xx) kullanılan dikey bir tablaya radyal bir kuvvet gelirse ne yaşanır?</summary>
<div>Eksenel baskı rulmanlarının bileziklerinde bilyaları radyal tutacak bir kanal omzu yoktur. Radyal kuvvet bilyaları dışarı doğru iter, rulman kafesi parçalanır ve bilyalar makinenin içine saçılır. Radyal yük mutlaka ikinci bir radyal rulmanla karşılanmalıdır.</div></details>
<details><summary>Bir kırma-eleme tesisinde uzun bir tambur milinde neden sabit bilyalı rulman yerine oynak makaralı rulman (222xx serisi) tercih edilir?</summary>
<div>Uzun tambur milleri ağır malzeme yükü altında belirgin eğilme sehimi yapar ve şasede açısal esnemeler oluşur. Sabit bilyalı rulmanlar en fazla 10-15 ark-dakikalık kaçıklığı tolere edebilirken, oynak makaralı rulmanlar dış bilezik küresel kanalı sayesinde 1,5°–2,5° gibi devasa açısal sapmalarda bile yükü homojen taşıyarak kasılmadan çalışır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-8', `
<p class="giris">Bir milin iki ucundaki rulmanların gövdeye ve mile nasıl bağlandığı, sistemin termal kararlılığını belirler. Makine çalıştıkça rulman sürtünmesinden ve ortam sıcaklığından dolayı mil uzar. Eğer iki rulman da şaseye eksenel olarak kilitlenirse oluşan ısıl kuvvetler rulmanları içeriden patlatır. Bu bölümde yataklama mimarilerini ve ISO geçme toleranslarını inceliyoruz.</p>

<h2>Yataklama Mimarileri: Karşılaştırmalı Analiz</h2>

<h3>1. Sabit – Serbest Yataklama (Locating – Non-Locating)</h3>
<ul>
  <li><strong>Sabit Yatak:</strong> Milin eksenel konumunu belirler. Çift yönlü eksenel kuvvetleri şaseye iletir. Hem iç bilezik (mil faturası ve somunla) hem dış bilezik (gövde faturası ve kapakla) sıfır boşlukla kilitlenir.</li>
  <li><strong>Serbest Yatak:</strong> Sadece radyal yük taşır. Mil uzadığında eksenel olarak yüzer.
    <ul>
      <li><em>Silindirik Makaralı (NU) ile Serbest Yataklama:</em> En profesyonel çözümdür. Makaralar iç bilezik üzerinde eksenel olarak kayar; dış bilezik gövdeye sıkı geçebilir.</li>
      <li><em>Sabit Bilyalı Rulman ile Serbest Yataklama:</em> Dış bilezik ile kapak arasında <code>s = 2 – 4 mm</code> eksenel boşluk bırakılır. Gövde deliği toleransı <strong>H7 veya J7</strong> seçilerek dış bileziğin yuvada kaymasına izin verilir.</li>
    </ul>
  </li>
  <li><strong>Nerede Zorunludur?</strong> Yatak açıklığı L &gt; 300 mm olan tüm millerde, sıcaklık farkı ΔT &gt; 15 °C olan sistemlerde, konveyör tamburlarında.</li>
</ul>

<h3>2. Karşılıklı Eğik / Konik Yataklama (O Düzeni vs. X Düzeni)</h3>
<div class="iki-sutun">
  <div>
    <h4>O Düzeni (Sırt Sırta / Back-to-Back)</h4>
    <p>Rulman temas çizgileri dönme ekseninden dışa doğru yayılır. Etkili yataklama mesafesi (H) rulmanlar arası mesafeden daha büyüktür (H &gt; L).</p>
    <ul>
      <li><strong>Devrilme Momentlerine (Eğilme) Karşı:</strong> Olağanüstü rijit!</li>
      <li><strong>Isıl Genleşme Davranışı:</strong> Mil gövdeden daha fazla ısınırsa radyal genleşme eksenel genleşmeyi dengeler; ön gerilme genelde sabit kalır veya hafif azalır.</li>
      <li><strong>Kullanım:</strong> CNC freze iş milleri, vidalı mil sabit yatak blokları (BK serisi), robot bilekleri.</li>
    </ul>
  </div>
  <div>
    <h4>X Düzeni (Yüz Yüze / Face-to-Face)</h4>
    <p>Rulman temas çizgileri dönme eksenine doğru içe daralır. Etkili yataklama mesafesi rulmanlar arası mesafeden daha küçüktür (H &lt; L).</p>
    <ul>
      <li><strong>Devrilme Momenti Rijitliği:</strong> O düzenine göre düşüktür.</li>
      <li><strong>Açısal Kaçıklık:</strong> Küçük gövde çarpıklıklarını daha rahat tolere eder.</li>
      <li><strong>Isıl Genleşme Tehlikesi:</strong> Mil ısındığında rulmanların ön gerilmesi katlanarak artar; rulman yanabilir!</li>
      <li><strong>Kullanım:</strong> Kısa mesafeli (L &lt; 150 mm) düşük hızlı redüktör ara milleri.</li>
    </ul>
  </div>
</div>

<h2>Rulman Geçme Toleransları (ISO Tolerans Sistemi)</h2>
<p>Temel kural: <strong>Yüke göre dönen bilezik SIKI geçmeli; yüke göre duran bilezik KAYAR geçmelidir.</strong></p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Çalışma Koşulu</th>
    <th>Mil Toleransı (İç Bilezik)</th>
    <th>Gövde Toleransı (Dış Bilezik)</th>
    <th>Neden Bu Tolerans?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Dönen Mil / Sabit Radyal Yük (Standart Durum)</strong><br><small>Ör. Elektrik motoru, konveyör mili</small></td>
    <td><strong>k5 / m5 (Sıkı Geçme)</strong><br><small>Ağır yükte: <strong>m6 / n6</strong></small></td>
    <td><strong>H7 / J7 (Kayar Geçme)</strong></td>
    <td>İç bilezik mil üzerinde kayarsa fretting korozyonuyla mili oyup inceltir. Dış bilezik ise serbest yatakta eksenel kayabilmeli ve montajda rahat takılmalıdır.</td>
  </tr>
  <tr>
    <td><strong>Sabit Mil / Dönen Gövde</strong><br><small>Ör. Bant gergi rulosu, tekerlek poryası, avara kasnak</small></td>
    <td><strong>h6 / g6 (Kayar Geçme)</strong></td>
    <td><strong>M7 / N7 / P7 (Sıkı Geçme)</strong></td>
    <td>Bu kez yük dış bileziğe göre döner; dış bilezik göbeğe sıkı geçmezse yuva aşınır ve ovalleşir!</td>
  </tr>
  <tr>
    <td><strong>Yüksek Hassasiyetli CNC İş Mili (Spindle)</strong></td>
    <td><strong>js4 / h4 (Çok Hassas)</strong></td>
    <td><strong>K5 / J6 (Kontrollü Boşluk)</strong></td>
    <td>Radyal salgıyı sıfıra indirmek ve aşırı sıkılıkla bilyaları kasmamak için mikron hassasiyeti gerekir.</td>
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
    <td><strong>Sabit Yatak (Locating Bearing)</strong></td>
    <td>Milin eksenel konumunu her iki yönde sıfır boşlukla sabitleyen, eksenel kuvvetleri gövdeye aktaran ve hem iç hem dış bileziği kilitli olan rulman düzeneğidir.</td>
  </tr>
  <tr>
    <td><strong>Serbest Yatak (Floating Bearing)</strong></td>
    <td>Milin termal genleşme veya montaj toleransları nedeniyle oluşan eksenel boy değişimlerini engellemeden serbestçe kayarak kompanze eden yatak düzeneğidir.</td>
  </tr>
  <tr>
    <td><strong>O Düzeni (Back-to-Back)</strong></td>
    <td>İki eğik bilyalı veya konik makaralı rulmanın temas açılarının dönme ekseninden dışarıya doğru yönlendirildiği, devrilme momentlerine karşı en yüksek rijitliği sağlayan yerleşimdir.</td>
  </tr>
  <tr>
    <td><strong>X Düzeni (Face-to-Face)</strong></td>
    <td>Temas açılarının içe doğru yönlendirildiği, açısal hizasızlıkları tolere edebilen fakat ısıl genleşmede rulman ön gerilmesini tehlikeli biçimde artıran yerleşimdir.</td>
  </tr>
  <tr>
    <td><strong>Fretting Korozyonu</strong></td>
    <td>Boşluklu geçen rulman bileziği ile mil arasında mikron seviyesindeki periyodik kayma ve titreşim sonucu yüzeyin aşınması, paslanması ve mil çapının oyulması arızasıdır.</td>
  </tr>
  <tr>
    <td><strong>k5 / m5 Mil Geçmesi</strong></td>
    <td>Dönen iç bileziğin mil üzerinde kaymasını (creep) engellemek için tanımlanmış ISO geçme tolerans sınıfıdır; hafif pres veya indüksiyonla ısıtarak montaj gerektirir.</td>
  </tr>
  <tr>
    <td><strong>H7 / J7 Gövde Geçmesi</strong></td>
    <td>Duran dış bileziğin gövde deliğinde aşırı sıkışmadan oturmasını ve serbest yatakta eksenel termal kaymaya izin vermesini sağlayan kayar/geçiş tolerans sınıfıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Her milde kural: Bir ucu eksenel kilitle (Sabit Yatak), diğer ucu serbest bırak (Serbest Yatak).</li>
  <li>Yüksek devrilme momenti rijitliği gereken yerlerde eğik bilyalı/konik rulmanlar <strong>O düzeninde</strong> bağlanır.</li>
  <li>Dönen iç bilezik mile sıkı (k5/m5), duran dış bilezik gövdeye kayar (H7) geçer.</li>
  <li>Rulmanı mile çakarken asla dış bilezikten vurulmaz; bilyalar ezilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>1,5 metre boyunda bir tambur milinin her iki ucundaki sabit bilyalı rulmanların dış bileziklerini kapaklarla gövdeye sıfır boşlukla kilitlersen ne olur?</summary>
<div>Mil çalıştıkça ısınır ve uzar. İki ucundan da kilitli olan mil uzayamadığı için iki rulmana tonlarca yapay eksenel ön yük biner. Bilyalar yuvarlanma kanalını ezer, rulman aşırı ısınır ve kilitlenir. Bir uç serbest yatak yapılmalıdır.</div></details>
<details><summary>Dönen bir milde iç bileziğe neden h6 (boşluklu/kayar) tolerans verilmez?</summary>
<div>İç bilezik ile mil arasında boşluk olursa, radyal yük altında iç bilezik milin üzerinde kayarak döner (fretting korozyonu). Kısa sürede mil aşınarak çapı küçülür ve boşluk büyür. Dönen iç bilezik sıkı (k5/m5) geçmelidir.</div></details>
<details><summary>Rulmanı mile monte ederken acemi bir montajcı çekiçle dış bileziğin kenarına vurarak rulmanı mile çakmaya çalışıyor. Rulman çalıştırıldığında neden derhal uğultu ve titreşim yapar?</summary>
<div>Kuvvet dış bilezikten uygulandığında montaj darbe kuvveti dış bilezikten bilyalara, bilyalardan iç bileziğe aktarılır. Bilyaların noktasal temas alanı çok küçük olduğundan yuvarlanma kanalında mikron ölçeğinde kalıcı Brinell çukurları açılır. Rulman döndükçe bilyalar bu çukurlara çarparak şiddetli ses, titreşim ve erken yorulma başlatır. Montaj kuvveti daima iç bileziğe basan bir bilezik borusuyla uygulanmalıdır.</div></details>
</div>
`);

KITAP.bolum('m4', '4-9', `
<p class="giris">Rulman seçiminde katalogdaki Dinamik Yük Sayısı (C) tek başına yeterli bir kriter değildir. Rulmanın L10h çalışma ömrü; uygulanan eksenel ve radyal kuvvetlerin oranına, eşdeğer dinamik yüke (P), yağlama viskozitesine ve kirlilik faktörüne göre hesaplanır. Bu bölümde ISO 281 standardının tüm matematiksel aşamalarını sayısal örnekle çözüyoruz.</p>

<h2>Dinamik Eşdeğer Yük Hesabı: X ve Y Faktörleri</h2>
<p>Sabit bilyalı bir rulmana hem radyal (F<sub>r</sub>) hem eksenel (F<sub>a</sub>) yük geldiğinde, bilyaların hissettiği bileşke yük:</p>
<div class="formul">P = X · F<sub>r</sub> + Y · F<sub>a</sub></div>
<p>Burada belirleyici parametre <code>e</code> sınır değeridir. Katalogdan <code>F<sub>a</sub> / C<sub>0</sub></code> oranına bakılarak <code>e</code> faktörü bulunur:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>F<sub>a</sub> / C<sub>0</sub> Oranı</th>
    <th>e Faktörü</th>
    <th>F<sub>a</sub> / F<sub>r</sub> ≤ e İse (Eksenel Yük Önemsiz)</th>
    <th>F<sub>a</sub> / F<sub>r</sub> > e İse (Eksenel Yük Baskın)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>0,025</td>
    <td>0,22</td>
    <td>X = 1 , Y = 0 &nbsp; (P = F<sub>r</sub>)</td>
    <td>X = 0,56 , Y = 2,0</td>
  </tr>
  <tr>
    <td>0,070</td>
    <td>0,27</td>
    <td>X = 1 , Y = 0 &nbsp; (P = F<sub>r</sub>)</td>
    <td>X = 0,56 , Y = 1,6</td>
  </tr>
  <tr>
    <td>0,130</td>
    <td>0,31</td>
    <td>X = 1 , Y = 0 &nbsp; (P = F<sub>r</sub>)</td>
    <td>X = 0,56 , Y = 1,4</td>
  </tr>
  <tr>
    <td>0,250</td>
    <td>0,37</td>
    <td>X = 1 , Y = 0 &nbsp; (P = F<sub>r</sub>)</td>
    <td>X = 0,56 , Y = 1,2</td>
  </tr>
  <tr>
    <td>0,500</td>
    <td>0,44</td>
    <td>X = 1 , Y = 0 &nbsp; (P = F<sub>r</sub>)</td>
    <td>X = 0,56 , Y = 1,0</td>
  </tr>
</tbody>
</table>
</div>

<h2>Gelişmiş Ömür Formülü: ISO 281 ve a<sub>ISO</sub> Faktörü</h2>
<div class="formul">
L<sub>nm</sub> = a<sub>1</sub> · a<sub>ISO</sub> · ( C / P )<sup>p</sup> &nbsp;&nbsp; [Milyon Devir] <br><br>
L<sub>nmh</sub> = ( 10⁶ / ( 60 · n ) ) · a<sub>1</sub> · a<sub>ISO</sub> · ( C / P )<sup>p</sup> &nbsp;&nbsp; [Çalışma Saati]
<small>a<sub>1</sub>: Güvenilirlik faktörü (%90 için a<sub>1</sub> = 1, %95 için a<sub>1</sub> = 0,64, %99 için a<sub>1</sub> = 0,25).<br>
a<sub>ISO</sub>: Yağlama kalitesi (κ viskozite oranı) ve kirlilik seviyesini (e<sub>C</sub>) içeren düzeltme faktörü (0,1 ila 5,0 arasında değişebilir!).<br>
p: Bilyalılar için <strong>p = 3</strong> &nbsp;|&nbsp; Makaralılar için <strong>p = 10/3 ≈ 3,33</strong></small>
</div>

<h2>Detaylı Sayısal Hesap Örneği: Konveyör Tahrik Rulmanı</h2>
<p><strong>Uygulama Şartları:</strong></p>
<ul>
  <li>Mil Dönme Hızı: <code>n = 750 d/dak</code></li>
  <li>Radyal Yük: <code>F<sub>r</sub> = 4200 N</code> (Kasnak kayış çekme kuvvetinden)</li>
  <li>Eksenel Yük: <code>F<sub>a</sub> = 1500 N</code> (Helis redüktör ve tambur kılavuzundan)</li>
  <li>Aday Rulman: <strong>SKF 6208 Sabit Bilyalı Rulman</strong> (Katalog verileri: <code>C = 32,5 kN = 32.500 N</code>, <code>C<sub>0</sub> = 19,0 kN = 19.000 N</code>)</li>
  <li>Hedef: 2 vardiya (16 saat/gün, 300 gün/yıl) çalışan tesiste 5 yıl kesintisiz ömür (<code>Hedef L<sub>h</sub> ≥ 24.000 Saat</code>).</li>
</ul>

<h3>Adım 1: Eksenel Yük Oranını ve e Faktörünü Bulma</h3>
<div class="formul">
F<sub>a</sub> / C<sub>0</sub> = 1500 / 19000 ≈ <strong>0,079</strong> &nbsp;→&nbsp; Tablodan interpolasyonla: <strong>e ≈ 0,28</strong><br>
Yük Oranı: F<sub>a</sub> / F<sub>r</sub> = 1500 / 4200 = <strong>0,357</strong>
</div>
<p>Karar: <code>F<sub>a</sub> / F<sub>r</sub> (0,357) > e (0,28)</code> olduğu için eksenel yük göz ardı edilemez! Tablodan: <code>X = 0,56</code> ve <code>Y = 1,55</code> alınır.</p>

<h3>Adım 2: Eşdeğer Dinamik Yükü (P) Hesaplama</h3>
<div class="formul">
P = X · F<sub>r</sub> + Y · F<sub>a</sub> = ( 0,56 × 4200 ) + ( 1,55 × 1500 ) = 2352 + 2325 = <strong>4677 N</strong>
</div>

<h3>Adım 3: L10 ve L10h Çalışma Ömrünü Hesaplama</h3>
<div class="formul">
L<sub>10</sub> = ( C / P )³ = ( 32500 / 4677 )³ = ( 6,949 )³ ≈ <strong>335,5 Milyon Devir</strong> <br><br>
L<sub>10h</sub> = ( 10⁶ / ( 60 × 750 ) ) × 335,5 = 22,22 × 335,5 ≈ <strong>7455 Saat</strong>
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
    <td><strong>L<sub>10h</sub> [Saat]</strong></td>
    <td>Nominal Rulman Ömrü. Aynı koşullarda çalışan özdeş bir rulman grubunun en az %90'ının yorulma dökülmesi (flaking) yaşamadan ulaştığı toplam çalışma saatidir.</td>
  </tr>
  <tr>
    <td><strong>P [N] (Eşdeğer Yük)</strong></td>
    <td>Radyal ve eksenel değişken kuvvet bileşenlerinin, rulman ömrü üzerinde aynı yorulma hasarını oluşturan teorik eşdeğer radyal sabit yüktür (P = X·F<sub>r</sub> + Y·F<sub>a</sub>).</td>
  </tr>
  <tr>
    <td><strong>e Sınır Faktörü</strong></td>
    <td>Eksenel yükün rulman yuvarlanma geometrisine ve ömrüne anlamlı bir ilave gerilme katmaya başladığı eşik orandır (F<sub>a</sub> / F<sub>r</sub> > e).</td>
  </tr>
  <tr>
    <td><strong>ISO 281</strong></td>
    <td>Yuvarlanmalı rulmanların dinamik yük kapasitesi ve anma ömrü hesaplama yöntemini tanımlayan uluslararası standarttır.</td>
  </tr>
  <tr>
    <td><strong>a<sub>ISO</sub> Katsayısı</strong></td>
    <td>Rulman çalışma sıcaklığındaki yağ filmi kalınlığı (κ viskozite oranı), yağlayıcı temizliği ve katkı maddelerini dikkate alan gelişmiş ömür düzeltme faktörüdür.</td>
  </tr>
  <tr>
    <td><strong>Ömür Üssü p</strong></td>
    <td>Yorulma gerilme-ömür (Wöhler) eğrisi eğimini temsil eden teorik katsayıdır; bilyalı temas için p = 3, makaralı hat teması için p = 10/3 (3,33) alınır.</td>
  </tr>
  <tr>
    <td><strong>κ (Viskozite Oranı)</strong></td>
    <td>Çalışma sıcaklığındaki gerçek kinematik yağ viskozitesinin (ν), yeterli hidrodinamik yağ filmi oluşturmak için gereken minimum anma viskozitesine (ν₁) oranıdır (κ = ν / ν₁).</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Eksenel yükün etkisi F<sub>a</sub> / F<sub>r</sub> > e olduğunda devreye girer ve eşdeğer dinamik yükü (P) artırır.</li>
  <li>Bilyalı rulmanlarda ömür (C / P)³ bağıntısıyla yüke kübik bağlıdır; yük 2 katına çıkarsa ömür 8 kat düşer.</li>
  <li>Hesaplanan ömür hedefin altındaysa, bir boy büyük rulmana veya <strong>konik makaralı</strong> seriye geçilmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Bir bilyalı rulmanın üzerine binen eşdeğer yükü (P) %20 oranında azaltırsan, rulmanın L10 ömrü yaklaşık yüzde kaç artar?</summary>
<div>Ömür formülü L = (C/P)³'tür. P yeni durumda 0,8P olur. Yeni ömür: 1 / (0,8)³ = 1 / 0,512 ≈ 1,95 katına çıkar! Yani yükteki sadece %20'lik bir iyileşme rulman ömrünü neredeyse <strong>%100 (%95 artış)</strong> uzatır!</div></details>
<details><summary>Konveyör tahrik rulmanı örneğinde hesaplanan L<sub>10h</sub> ömrü 7455 saat çıktı; fakat fabrikanın hedefi 24.000 saattir. Şase deliklerini değiştirmeden ömrü hedefe ulaştırmak için ne yapılabilir?</summary>
<div>SKF 6208 yerine aynı mil çapına (Ø40 mm) sahip fakat daha yüksek C kapasiteli <strong>6308 serisi</strong> rulmana geçilebilir (C = 42,5 kN). Ya da radyal ve eksenel yükü çok daha yüksek dinamik kapasiteyle karşılayan konik makaralı veya eğik bilyalı yataklamaya dönüştürülebilir.</div></details>
<details><summary>Ağır yük altında çalışan bir makaralı rulmanda (p = 3,33) eşdeğer yük P iki katına çıkarsa rulman ömrü kaç kat düşer?</summary>
<div>Makaralı rulmanlarda ömür L = (C/P)<sup>10/3</sup> bağıntısına dayanır. Yük 2 katına çıktığında ömür 2<sup>3,33</sup> ≈ <strong>10,08 kat düşer</strong>. Yani yükün iki katına çıkması ömrün %90'dan fazlasını yok eder.</div></details>
</div>
`);

KITAP.bolum('m4', '4-10', `
<p class="giris">Talaşlı imalatla rulman yuvası açmanın çok maliyetli olduğu büyük şaselerde hazır <strong>yataklı rulman üniteleri (pillow blocks)</strong>; devrin çok düşük, yükün darbeli veya alanın dar olduğu yerlerde ise <strong>kaymalı yataklar (burçlar)</strong> tercih edilir. Bu bölümde endüstriyel gövde standartlarını ve yağlamasız burçların PV çalışma limitlerini inceliyoruz.</p>

<h2>Yataklı Rulman Gövde Standartları (JIS / DIN Standartları)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Gövde Tipi</th>
    <th>Standart Gövde Kodu</th>
    <th>Rulman Eki (Insert)</th>
    <th>Gövde Malzemesi Alternatifleri</th>
    <th>Montaj Yüzeyi ve Yönü</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Ayaklı Yastık Blok (Pillow Block)</strong></td>
    <td><strong>UCP 2xx / 3xx</strong></td>
    <td>UC 2xx (Geniş iç bilezik, setskurlu)</td>
    <td>Dökme Demir (GG20), Sfero (GGG40), Paslanmaz Çelik döküm</td>
    <td>Yatay şase düzlemi üzerine üstten 2 cıvata</td>
    <td>Konveyör tambur milleri, fanlar, kırma elekleri, aktarma şaftları.</td>
  </tr>
  <tr>
    <td><strong>Kare Dört Delikli Flanş</strong></td>
    <td><strong>UCF 2xx / 3xx</strong></td>
    <td>UC 2xx</td>
    <td>Dökme Demir, Termoplastik (Gıda için beyaz)</td>
    <td>Dikey sac paneller veya makine yan duvarları</td>
    <td>Helezon konveyör çıkışları, mikser yan kapakları.</td>
  </tr>
  <tr>
    <td><strong>Oval İki Delikli Flanş</strong></td>
    <td><strong>UCFL 2xx</strong></td>
    <td>UC 2xx</td>
    <td>Dökme Demir, Paslanmaz, Termoplastik</td>
    <td>Dikey sac (Dar montaj genişliği)</td>
    <td>Paketleme makineleri, etiketleme istasyonları, hafif konveyörler.</td>
  </tr>
  <tr>
    <td><strong>Kızaklı Gerdirme Yatağı</strong></td>
    <td><strong>UCT 2xx</strong></td>
    <td>UC 2xx</td>
    <td>Dökme Demir</td>
    <td>Özel U kanallı kılavuz braket içinde eksenel kayar</td>
    <td><strong>Bantlı ve zincirli konveyörlerde gergi tamburu yataklaması.</strong> Trapez vidayla gerdirilir.</td>
  </tr>
  <tr>
    <td><strong>Kartuş (Silindirik) Flanş</strong></td>
    <td><strong>UCFC 2xx</strong></td>
    <td>UC 2xx</td>
    <td>Dökme Demir</td>
    <td>Dairesel delik merkezleme faturası ile montaj</td>
    <td>Döner tablalar, tambur iç flanşları.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Rulman vs. Kaymalı Burç: Mühendislik Seçim Kriterleri</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kriter / Parametre</th>
    <th>Yuvarlanmalı Rulmanlar (Bilyalı/Makaralı)</th>
    <th>Kaymalı Burçlar (Kompozit / Plastik / Bronz)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Açısal Salınım Hareketi (İleri-Geri 30°–60°)</strong></td>
    <td><strong>Kötü:</strong> Bilyalar aynı noktaya vurarak çukur açar (fretting).</td>
    <td><strong>Mükemmel:</strong> Sürekli kayma hareketi olduğu için aşınma homojen dağılır.</td>
  </tr>
  <tr>
    <td><strong>Darbe ve Şok Yükleri</strong></td>
    <td>Noktasal/çizgisel temas nedeniyle bilyalar ezilebilir.</td>
    <td>Geniş temas yüzeyi darbe enerjisini emer; deforme olmaz.</td>
  </tr>
  <tr>
    <td><strong>Radyal Montaj Hacmi (Et Kalınlığı)</strong></td>
    <td>Kalın (Ör. Ø20 mil için rulman dış çapı Ø47 mm, et = 13,5 mm).</td>
    <td><strong>Çok İnce:</strong> (Ör. Ø20 mil için burç dış çapı Ø23 mm, et = 1,5 mm!).</td>
  </tr>
  <tr>
    <td><strong>Çalışma Hızı (Devir)</strong></td>
    <td><strong>Çok Yüksek:</strong> Sürtünme katsayısı μ ≈ 0,001 – 0,003.</td>
    <td>Düşük – Orta: Sürtünme katsayısı μ ≈ 0,05 – 0,20 (Isınır).</td>
  </tr>
  <tr>
    <td><strong>Bakım ve Yağlama</strong></td>
    <td>Periyodik gresleme veya sızdırmaz keçe şarttır.</td>
    <td>Yağlamasız (kuru) çalışan modeller (igus, DU) bakım istemez.</td>
  </tr>
  <tr>
    <td><strong>Su, Çamur, Kimyasal Ortam</strong></td>
    <td>Paslanır, keçesi bozulursa kilitlenir.</td>
    <td>Plastik/bronz burçlar kimyasaldan etkilenmez.</td>
  </tr>
  <tr>
    <td><strong>Maliyet Faktörü</strong></td>
    <td>1,0× (Referans)</td>
    <td><strong>0,2× – 0,4× (Çok Ucuz)</strong></td>
  </tr>
</tbody>
</table>
</div>

<h2>Kaymalı Yatak Boyutlandırması: PV Değeri Limiti</h2>
<p>Kaymalı yatakların ömrünü belirleyen ana kriter, birim alana düşen basınç (P) ile kayma hızının (V) çarpımı olan <strong>PV Değeridir</strong>. Bu değer birim zamanda üretilen sürtünme ısısını temsil eder:</p>
<div class="formul">
P = F<sub>r</sub> / ( d · L ) &nbsp;&nbsp;[MPa]&nbsp;&nbsp;|&nbsp;&nbsp; V = ( π · d · n ) / ( 60 · 1000 ) &nbsp;&nbsp;[m/s] <br><br>
P · V ≤ ( P · V )<sub>izin</sub> &nbsp;&nbsp; [MPa · m/s]
<small>F<sub>r</sub>: Radyal Yük [N], d: Mil çapı [mm], L: Burç boyu [mm], n: Devir hızı [d/dak]</small>
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
    <td><strong>P · V Değeri [MPa · m/s]</strong></td>
    <td>Özgül Sürtünme Gücü. Kaymalı yatakta birim alana uygulanan radyal basınç (P) ile kayma yüzeyi çizgisel hızının (V) çarpımıdır; üretilen ısıl yükü ve aşınma sınırını temsil eder.</td>
  </tr>
  <tr>
    <td><strong>UCP Serisi (Pillow Block)</strong></td>
    <td>Döküm gövde tabanında iki cıvata deliği bulunan, içindeki küresel dış bilezikli rulman sayesinde şase montaj açısal sapmalarını tolere eden ayaklı yatak ünitesidir.</td>
  </tr>
  <tr>
    <td><strong>False Brinelling (Yalancı Brinell)</strong></td>
    <td>Rulman dönmeksizin küçük titreşimler veya salınımlar altındayken, bilyaların yağ filmini sıyırarak yuvarlanma kanalında mikro fretting aşınması ve çukurlar açması hasarıdır.</td>
  </tr>
  <tr>
    <td><strong>Kendinden Yağlamalı Kompozit (DU)</strong></td>
    <td>Çelik sırt, gözenekli bronz ara tabaka ve PTFE/kurşun kayma yüzeyinden oluşan, harici yağlama gerektirmeyen kuru kaymalı yatak malzemesidir.</td>
  </tr>
  <tr>
    <td><strong>Setskur Kilitleme (Grub Screw)</strong></td>
    <td>Yataklı rulman iç bileziğinin 120° açıyla yerleştirilmiş iki adet sivri uçlu setskur vidası ile doğrudan transmisyon miline radyal bastırılarak kilitlenmesi yöntemidir.</td>
  </tr>
  <tr>
    <td><strong>Sinter Bronz Burç</strong></td>
    <td>Toz metalürjisiyle preslenip pişirilen, gözenekli yapısına vakum altında %20-25 hacimce mineral yağ emdirilmiş kendi kendini yağlayan metal burçtur.</td>
  </tr>
  <tr>
    <td><strong>UCT Gergi Yatağı</strong></td>
    <td>Konveyör gövdelerinde bant veya zincir gerginliğini ayarlamak için iki yanındaki kızak kanallarıyla eksenel hareket edebilen yatak ünitesidir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Konveyör şaselerinde delik işleme maliyetini sıfırlamak için hazır <strong>UCP / UCF yataklı rulmanlar</strong> kullanılır.</li>
  <li>Tam tur dönmeyen salınım hareketlerinde ve dar alanlarda rulman yerine <strong>kaymalı burç</strong> seçilmelidir.</li>
  <li>Kaymalı burç seçiminde P · V sınır değeri kontrol edilmelidir; aşılırsa sürtünme ısısı burcu eritir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Pnömatik bir silindirle tahrik edilen bir mafsal kolu sürekli ±45° ileri-geri salınım yapıyor. Neden bilyalı rulman yerine kompozit DU burç seçilmelidir?</summary>
<div>Bilyalı rulman küçük bir açıda salınım yaptığında bilyalar sürekli aynı mikro yuvarlanma alanına basar ve yağı o bölgeden dışarı iter. Kuru temas sonucu bilya kanalda çukurlar açar (false brinelling). Burç ise geniş yüzeyiyle yağa ihtiyaç duymadan salınımı sorunsuz karşılar.</div></details>
<details><summary>Ø30 mm mil üzerinde 1500 d/dak hızla dönen bir aktarma milinde yağlamasız plastik burç kullanılırsa ne olur?</summary>
<div>Mil yüzey çizgisel hızı V = (π · 30 · 1500) / 60000 = 2,35 m/s'dir. Plastik burçların izin verilen P·V değeri genelde 0,3–0,8 MPa·m/s arasındadır. Yüksek hızda sürtünmeden dolayı açığa çıkan ısı plastik malzemenin termal yumuşama noktasını aşar; burç eriyerek mile sarar. Yüksek devirlerde bilyalı rulman zorunludur.</div></details>
<details><summary>Bir konveyör tambur milini şaseye bağlamak için UCP 208 ayaklı yatak takıldı. İki ayak cıvatası sıkılırken şase yüzeyi 2 mm çarpık (çarpraz eğri) ise rulman kasılır mı?</summary>
<div>Hayır, UCP rulman eklerinin (UC 208) dış bileziği ve dökme gövdenin iç yuvası küreseldir. Gövde şasedeki çarpıklığa göre açılı otursa bile rulman eki yuva içinde ±2°'ye kadar serbestçe dönerek mil eksenine kendiliğinden hizalanır. Bu sayede kasıntı oluşmaz.</div></details>
</div>
`);
