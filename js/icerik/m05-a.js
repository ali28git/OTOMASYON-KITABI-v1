// MODÜL 5 — Lineer Hareket Sistemleri (Bölüm 5.1 – 5.3: Kılavuzlama Prensipleri, Profil Raylar, Mil-Burç Sistemleri)
// Modül 8 Altın Standartlarında: Ayrıntılı Bilimsel Anlatım, Formüller (Saf HTML/Unicode), Standartlar, Karar Tabloları, Sözlük, Özet ve Kendini Test Et

KITAP.bolum('m5', '5-1', `
<p class="giris">Endüstriyel otomasyonda dönel hareketi doğrusal harekete çevirmek kadar, hareket eden kütleyi uzayda sapma yapmadan taşımak ve kılavuzlamak da hayati önem taşır. Kılavuzlama sistemi yetersiz veya yanlış seçilmiş bir eksen; ya ters yüklerde kasarak servo motoru aşırı akımdan durdurur ya da mikronluk esnemelerle ürün kalitesini bozar. Bu bölümde endüstride kullanılan 9 farklı lineer kılavuzlama teknolojisini tüm artıları, eksileri ve moment kapasiteleriyle karşılaştırıyoruz.</p>

<h2>Lineer Kılavuzlamada 6 Serbestlik Derecesi ve Momentler</h2>
<p>Doğrusal bir eksende arabanın sadece <strong>X ekseni boyunca (öteleme)</strong> hareket etmesi istenir. Kılavuzlama mekanizması kalan 5 serbestliği (2 öteleme, 3 dönme) rijit bir şekilde kilitlemelidir:</p>
<div class="iki-sutun">
  <div>
    <h4>Öteleme Serbestlikleri</h4>
    <ul>
      <li><strong>X Ekseninde Öteleme:</strong> İstenen ana çalışma hareketi (Strok).</li>
      <li><strong>Y Ekseninde Öteleme:</strong> Radyal sapma (Kılavuz tarafından kilitlenir).</li>
      <li><strong>Z Ekseninde Öteleme:</strong> Düşey kalkma/çökme (Kılavuz tarafından kilitlenir).</li>
    </ul>
  </div>
  <div>
    <h4>Açısal Dönme Momentleri</h4>
    <ul>
      <li><strong>M<sub>x</sub> (Roll - Yuvarlanma):</strong> Hareket ekseni etrafında dönme momenti (Viraj momenti).</li>
      <li><strong>M<sub>y</sub> (Pitch - Yunuslama):</strong> İlerleme yönünde öne/arkaya devrilme momenti (İvmelenme momenti).</li>
      <li><strong>M<sub>z</sub> (Yaw - Sapma):</strong> Sağa/sola fırdöndü momenti (Yan yük momenti).</li>
    </ul>
  </div>
</div>

<h2>Endüstride Kullanılan 9 Temel Lineer Kılavuz Teknolojisi</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Kılavuz Teknolojisi</th>
    <th>Temas Mekanizması</th>
    <th>Sürtünme Katsayısı (µ)</th>
    <th>Rijitlik ve Yük Kapasitesi</th>
    <th>Hız Sınırı</th>
    <th>Ortam Direnci (Toz/Sıvı)</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>1. Bilyalı Profil Ray Kılavuz</strong></td>
    <td>Yuvarlanma (Noktasal temas - 4 sıra bilya)</td>
    <td>0,002 – 0,003</td>
    <td>Yüksek</td>
    <td>maks. 3–5 m/s</td>
    <td>Orta (Sıyırıcı keçe şart)</td>
    <td>Genel otomasyon, kartezyen robotlar, montaj istasyonları, pick & place.</td>
  </tr>
  <tr>
    <td><strong>2. Makaralı Profil Ray (Roller Guide)</strong></td>
    <td>Yuvarlanma (Çizgisel temas - Silindirik makara)</td>
    <td>0,001 – 0,002</td>
    <td><strong>AŞIRI YÜKSEK (Bilyalının 2–3 katı rijitlik)</strong></td>
    <td>maks. 2–3 m/s</td>
    <td>Orta (Ağır keçeler)</td>
    <td>CNC işleme merkezleri, ağır pres transferleri, ağır yük gantry robotlar.</td>
  </tr>
  <tr>
    <td><strong>3. İndüksiyonlu Mil + Bilyalı Burç</strong></td>
    <td>Yuvarlanma (Bilyalı burç mil üzerinde kayar)</td>
    <td>0,002 – 0,005</td>
    <td>Düşük – Orta</td>
    <td>maks. 2–3 m/s</td>
    <td>Orta</td>
    <td>Düşük bütçeli otomasyon, 3D yazıcılar, hafif itme mekanizmaları.</td>
  </tr>
  <tr>
    <td><strong>4. V-Yivli Makaralı Ray (Hepco / Nadella)</strong></td>
    <td>Tekerlek Yuvarlanması (V-rulman rayı kavrar)</td>
    <td>0,005 – 0,010</td>
    <td>Orta</td>
    <td><strong>Çok Yüksek (&gt; 10 m/s)</strong></td>
    <td><strong>MÜKEMMEL (Aşırı kir, toz, talaş, kaynak çapağı)</strong></td>
    <td>Lazer ve plazma kesim tablaları, ahşap işleme makineleri, kirli ortam konveyörleri.</td>
  </tr>
  <tr>
    <td><strong>5. Kutu Kızak (Box Way / Turcite)</strong></td>
    <td>Katı Sürtünme (Gövde metale yağ filmiyle basar)</td>
    <td>0,05 – 0,15</td>
    <td><strong>EN YÜKSEK DİNAMİK SÖNÜMLEME</strong></td>
    <td>Düşük (maks. 0,5 m/s)</td>
    <td>İyi</td>
    <td>Ağır talaş kaldıran döküm CNC torna ve frezeler (Titreşimi en iyi yutan kılavuz).</td>
  </tr>
  <tr>
    <td><strong>6. Kırlangıç Kuyruğu (Dovetail)</strong></td>
    <td>Açılı Sürtünme (Kamalı bronz ayarlı pleyt)</td>
    <td>0,08 – 0,15</td>
    <td>Yüksek (Kompakt yapıda)</td>
    <td>Çok Düşük (Manuel / yavaş)</td>
    <td>İyi</td>
    <td>Manuel takım tezgahları, mengene kızakları, mikroskop tabla ayarları.</td>
  </tr>
  <tr>
    <td><strong>7. Katı Polimer Burç (Igus DryLin)</strong></td>
    <td>Kuru Kayma (Kendinden yağlamalı tribo-polimer)</td>
    <td>0,10 – 0,25</td>
    <td>Düşük – Orta</td>
    <td>maks. 1–2 m/s</td>
    <td><strong>Aşırı Dirençli (Korozyon, kimyasal, su altı)</strong></td>
    <td>Gıda makineleri, medikal cihazlar, paketleme, sıfır yağ istenen temiz odalar.</td>
  </tr>
  <tr>
    <td><strong>8. Ağır Hizmet Teleskopik Raylar</strong></td>
    <td>Kafesli Bilyalar (Çok kademeli profil açılımı)</td>
    <td>0,005</td>
    <td>Orta (Açıldıkça sehim artar)</td>
    <td>Düşük (0,5 m/s)</td>
    <td>Düşük</td>
    <td>Akü çekmeceleri, AGV batarya değişim rayları, makine koruma kapıları.</td>
  </tr>
  <tr>
    <td><strong>9. Hava Yatakları (Air Bearings)</strong></td>
    <td>Basınçlı Hava Filmi (5 µm hava boşluğunda uçma)</td>
    <td><strong>0,00001 (SIFIR SÜRTÜNME)</strong></td>
    <td>Düşük (Darbe kaldırmaz)</td>
    <td>Çok Yüksek (&gt; 15 m/s)</td>
    <td>Hassas (Sıfır toz olmalı)</td>
    <td>Koordinat Ölçüm Cihazları (CMM), yarı iletken (wafer) üretim hatları, optik tarayıcılar.</td>
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
    <td><strong>6 Serbestlik Derecesi (6-DOF)</strong></td>
    <td>Uzayda bir rijit cismin sahip olduğu bağımsız 3 öteleme (X, Y, Z) ve 3 dönme (Mx, My, Mz) eksen hareketlerinin bütünüdür.</td>
  </tr>
  <tr>
    <td><strong>M<sub>x</sub> (Roll / Yuvarlanma)</strong></td>
    <td>Doğrusal hareket ekseni (X) etrafındaki burulma ve devrilme momentidir; tek raylı kılavuzlarda en kritik zorlanma eksenidir.</td>
  </tr>
  <tr>
    <td><strong>M<sub>y</sub> (Pitch / Yunuslama)</strong></td>
    <td>İlerleme yönüne dik yatay eksen etrafında öne ve arkaya doğru devrilme momentidir; ani ivmelenme ve frenlemede pik yapar.</td>
  </tr>
  <tr>
    <td><strong>M<sub>z</sub> (Yaw / Sapma)</strong></td>
    <td>Düşey eksen etrafında sağa ve sola fırdöndü dönme momentidir; eksantrik çekme kuvvetlerinden kaynaklanır.</td>
  </tr>
  <tr>
    <td><strong>Makaralı Profil Ray (Roller Guideway)</strong></td>
    <td>Yuvarlanma elemanı olarak silindirik makaraların kullanıldığı, hat teması sayesinde bilyalı raylara göre 2-3 kat daha yüksek rijitlik sunan kılavuzdur.</td>
  </tr>
  <tr>
    <td><strong>V-Yivli Ray (Hepco / Nadella)</strong></td>
    <td>90° açılı V profilli ray üzerinde dönen çift sıralı açılı makaraların çalıştığı, kir ve talaşı merkezkaçla savuran ağır saha kılavuzudur.</td>
  </tr>
  <tr>
    <td><strong>Hava Yatağı (Air Bearing)</strong></td>
    <td>Mikron mertebesindeki gözeneklerden basılan yüksek basınçlı hava filmi üzerinde mekanik temas olmaksızın sıfır sürtünmeyle yüzen kılavuz sistemidir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Lineer sistemde araba 1 serbestlikte hareket ederken diğer 5 serbestliği (Y, Z ve Mx, My, Mz momentleri) kilitler.</li>
  <li>Genel endüstriyel otomasyonun ana standardı <strong>Bilyalı Profil Raylardır</strong>.</li>
  <li>Aşırı titreşim, darbe ve ağır kesme kuvvetleri varsa <strong>Makaralı (Roller) Profil Ray</strong> kullanılır.</li>
  <li>Kaynak çapağı, ahşap tozu ve kirli açık ortamlarda bilyalı ray kilitlenir; <strong>V-yivli makaralı sistemler (Hepco)</strong> temizleme kanatlarıyla rakipsizdir.</li>
  <li>Yağlamanın yasak olduğu gıda, kimya ve temiz oda sistemlerinde <strong>kuru çalışan polimer kılavuzlar (DryLin)</strong> tercih edilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Tozlu bir ahşap zımparalama makinesinde standart bilyalı profil ray kullandın. 2 ay sonra arabaların içindeki bilyalar dönmemeye başladı ve ray çizildi. Sebep nedir ve doğru çözüm ne olmalıdır?</summary>
<div>Standart profil rayların ön plastik keçeleri çok ince ahşap tozunu durduramaz. Toz araba içine girerek gres yağıyla birleşir, çamurlaşır ve bilyaların sirkülasyon kanallarını tıkar. Bilyalar dönemeyip sürüklenince rayı çizer. Çözüm: Rayı <strong>V-kanallı dıştan rulmanlı makara sistemi (Hepco/Nadella tipi)</strong> ile değiştirmektir; çünkü makara dönerken tozları dışarı fırlatır ve sıyırıcı pabuçları tozu mekanik olarak kovar.</div></details>
<details><summary>Ağır bir CNC freze tablasında neden bilyalı profil ray yerine makaralı profil ray (roller guideway) tercih edilir?</summary>
<div>Bilya küresel olduğu için rayla <strong>noktasal temas</strong> yapar; aşırı kesme kuvvetinde Hertz gerilmesi yükselir ve mikro esneme olur. Silindirik makara ise rayla <strong>çizgisel temas</strong> kurar. Bu temas geometrisi temas alanını katlayarak rijitliği 2 ila 3 kat artırır ve titreşim sönümlemeyi mükemmelleştirir. Böylece takım ömrü ve yüzey işleme kalitesi yükselir.</div></details>
<details><summary>Bir eksende araba tek başına duruyor ve arabanın üzerine 200 mm uzunluğunda bir kol takılmış. Kolun ucuna aşağı doğru 500 N yük biniyor. Bu araba en çok hangi momente maruz kalır?</summary>
<div>Eğer kol hareket yönüne dik (yana doğru) uzanıyorsa bu yük arabayı kendi ekseni etrafında burkmaya çalışır; yani <strong>Mx (Roll) momentine</strong> maruz kalır: <code>Mx = 500 N × 0,2 m = 100 Nm</code>. Tek araba tek ray üzerinde Mx momentini taşımakta çok zayıftır. Çözüm: Yan yana iki paralel ray kullanmak veya araba sayısını ikiye çıkarmaktır.</div></details>
</div>
`);

KITAP.bolum('m5', '5-2', `
<p class="giris">Profil raylı kılavuzlar (Linear Guideway), modern fabrika otomasyonunun omurgasıdır. Bilyaların araba gövdesi içinde sonsuz bir döngüyle devirdaim yapması mantığına dayanır. Ancak sahada en sık yapılan hata, katalogdan sadece dinamik yükü (C) okuyup arabayı rastgele cıvatalamaktır. Rayın montaj faturası, araba flanş tipi, ön yük sınıfı ve paralel ray eşleme toleransları doğru yönetilmezse sistem 6 ayda dağılır.</p>

<h2>Pazar Liderleri ve Standart Kodlama</h2>
<p>Endüstride en çok karşılaşacağınız üreticiler: <strong>THK (Japonya - mucidi), Bosch Rexroth (Almanya), Hiwin (Tayvan - en yaygın F/P), NSK, Schneeberger ve IKO</strong>. Boyutlar genel olarak DIN 645 standardına göre birbirine uyumludur (Örn: 25'lik bir Hiwin araba çoğunlukla 25'lik THK veya Rexroth ray üzerine temel montaj delikleri açısından oturabilir; ancak bilya yatak geometrisi farklı olduğu için ray-araba asla çapraz markalanıp karıştırılmamalıdır!).</p>

<h2>Araba Geometrisi Tipleri: Flanşlı vs. Blok (Dar)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Araba Tipi</th>
    <th>Görünüm ve Geometri</th>
    <th>Montaj Yöntemi</th>
    <th>Avantajı</th>
    <th>Tipik Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Flanşlı Tip<br>(Flanged - HGW / FNI)</strong></td>
    <td>Geniş kanatlı (kulaklı) gövde</td>
    <td><strong>Hem Üstten Hem Alttan:</strong> Delikler hem dişlidir hem de üstten havşalı cıvata geçirilebilir.</td>
    <td>Geniş montaj tabanı sayesinde devasa <strong>M<sub>x</sub> (Roll) devrilme momenti direnci</strong>.</td>
    <td>Geniş tablalar, kartezyen robotların ana X ve Y arabaları, fikstür altlıkları.</td>
  </tr>
  <tr>
    <td><strong>Dar / Blok Tip<br>(Slim / Block - HGH / SNH)</strong></td>
    <td>Kompakt, ray genişliğine yakın dar gövde</td>
    <td><strong>Sadece Üstten:</strong> Gövde üzerinde kör kılavuz çekilmiş dişli delikler vardır; cıvata üst tabladan aşağı vidalanır.</td>
    <td>Dar alanlara sığar; yan yana birden fazla rayı birbirine çok yakın koyma imkânı.</td>
    <td>Kompakt lineer modüller, Z ekseni dikey kafaları, dar alanlı takım değiştiriciler.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Ön Yük Sınıfları (Preload) ve Titreşim Karakteristiği</h2>
<p>Ön yük, araba içine nominal bilya çapından birkaç mikron daha büyük bilyalar basılarak iç boşluğun sıfırlanması ve elastik gerilme yaratılmasıdır:</p>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Ön Yük Sınıfı</th>
    <th>Ön Yük Miktarı (% C)</th>
    <th>İç Boşluk Durumu</th>
    <th>Sürtünme Direnci</th>
    <th>Hangi Durumda Seçilir?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>Z0 (Hafif Boşluklu / Sıfır)</strong></td>
    <td>0 … 0,02 C</td>
    <td>Boşluksuz (±2 µm)</td>
    <td>Çok Düşük (Elle rahat akar)</td>
    <td>Düşük torklu step motorlu eksenler, manuel itmeli kapılar, hafif ölçüm cihazları.</td>
  </tr>
  <tr>
    <td><strong>ZA / Z1 (Hafif Ön Yük - Standart)</strong></td>
    <td><strong>0,02 C … 0,04 C</strong></td>
    <td><strong>SIFIR BOŞLUK (Zero-Backlash)</strong></td>
    <td>Orta</td>
    <td><strong>Genel otomasyonun %80'i:</strong> Kartezyen robotlar, vidalı milli servo eksenler, pick & place.</td>
  </tr>
  <tr>
    <td><strong>ZB / Z2 (Orta - Ağır Ön Yük)</strong></td>
    <td>0,05 C … 0,08 C</td>
    <td>Aşırı Rijit Negatif Boşluk</td>
    <td>Yüksek (Dirençli)</td>
    <td>CNC frezeler, ağır darbeli kesme eksenleri. Montaj yüzeyi taşlanmış olmalıdır!</td>
  </tr>
</tbody>
</table>
</div>

<div class="kutu tehlike"><span class="kb">Eğri Şaseye Ağır Ön Yüklü Araba Takma Tuzağı</span>
Eğer alüminyum profilden veya işlenmemiş kaynaklı bir şaseden gövde yaptıysanız (düzlemsellik hatası &gt; 0,05 mm ise) ve gidip <strong>ZB (ağır ön yüklü)</strong> araba takarsanız; araba eğrilikleri esneyerek tolere edemez. Bilyalar rayın kenarına kilitlenir; motor ekseni itemez, araba rayı oyarak birkaç haftada bilya kırar! <strong>Kural: İşlenmemiş profillerde daima Z0 veya ZA hafif ön yük seçilir.</strong></div>

<h2>Çift Ray Montajında Master - Slave (Lider - Takipçi) Prensibi</h2>
<p>Bir eksende paralel iki ray kullanıldığında, iki rayı da rastgele cıvatalayamazsınız. Birbirine paralel sıkılmayan raylar araba arabaya kilitlenir:</p>
<ol>
  <li><strong>Master (Lider) Ray:</strong> Gövdede işlenmiş hassas bir referans faturasına (omza) yandan baskı pleyti veya cıvatalarla sıfırlanarak tork anahtarıyla sıkılır. Bu ray eksenin kusursuz mastarıdır.</li>
  <li><strong>Slave (Takipçi) Ray:</strong> İkinci rayın vidaları önce gevşek bırakılır. Üst araba tablası her iki rayın arabalarına cıvatalanır. Tabla baştan sona yavaşça yürütülürken araba takipçi rayı kendi hizasına çeker; arkasından vidalar sırayla torklanır.</li>
</ol>

<h2>Ray ve Araba Yağlama / Koruma Seçenekleri</h2>
<ul>
  <li><strong>Yağlama Blokları (THK QZ / Hiwin E2 / Rexroth Lube):</strong> Arabanın kafasına takılan yüksek yoğunluklu yağ emdirilmiş keçe tankıdır. Yağlama periyodunu 100 km'den <strong>10.000 km'ye (veya 3-5 yıla)</strong> çıkarır; bakım gerektirmeyen eksenler sağlar.</li>
  <li><strong>Metal Sıyırıcılar (Scrapers):</strong> Sıcak kaynak çapağı, talaş veya sert kirlerin plastik keçeleri eritip içeri girmesini önleyen paslanmaz çelik zırhtır.</li>
  <li><strong>Pirinç / Çelik Ray Tapa Kapakları:</strong> Ray montaj cıvatalarının delik yuvalarını doldurur. Dolmayan deliklere talaş birikir ve araba her geçtiğinde keçeleri parçalar.</li>
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
    <td><strong>DIN 645</strong></td>
    <td>Profil raylı kılavuzların ve arabaların ray genişliklerini, montaj delik aralıklarını ve yükseklik standartlarını belirleyen uluslararası normdur.</td>
  </tr>
  <tr>
    <td><strong>HGW Flanşlı Araba</strong></td>
    <td>Gövdesinde iki yana doğru uzanan montaj kanatları bulunan, hem üstten hem alttan cıvatalanabilen ve yüksek Mx devrilme momenti taşıyan geniş araba tipidir.</td>
  </tr>
  <tr>
    <td><strong>HGH Blok (Dar) Araba</strong></td>
    <td>Ray genişliğine yakın dar gövdesiyle yerden tasarruf sağlayan ve sadece üstten dişli deliklerle bağlanan kompakt kılavuz arabasıdır.</td>
  </tr>
  <tr>
    <td><strong>Ön Yük (Preload ZA/ZB)</strong></td>
    <td>Araba içine nominal yuvarlanma kanalından daha büyük çaplı bilyalar dizilerek iç boşluğun sıfırlandığı ve rijitliğin artırıldığı elastik sıkılık durumudur.</td>
  </tr>
  <tr>
    <td><strong>Master-Slave Montajı</strong></td>
    <td>Birinci rayın şase referans faturasına dayanılarak kilitlendiği, ikinci rayın ise araba tablası üzerinden kendini hizalayarak bağlandığı kasıntısız montaj metodudur.</td>
  </tr>
  <tr>
    <td><strong>QZ / E2 Yağlama Kiti</strong></td>
    <td>Arabanın alın yüzeyine monte edilen, yüksek yoğunluklu yağ emdirilmiş keçe tankıyla bilyalara binlerce kilometre boyunca sürekli mikro yağ filmi besleyen ünitedir.</td>
  </tr>
  <tr>
    <td><strong>Ray Kör Tapa Kapağı</strong></td>
    <td>Ray montaj cıvatalarının havşa yuvalarını kapatarak talaş ve kir birikmesini önleyen, araba ön keçelerinin parçalanmasını engelleyen pirinç veya plastik tıkama elemanıdır.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Geniş montaj yüzeyi ve yüksek Mx moment direnci için <strong>Flanşlı (HGW)</strong>; dar kompakt alanlar için <strong>Blok (HGH)</strong> araba seçilir.</li>
  <li>Standart otomasyonda hafif ön yük <strong>ZA / Z1</strong> kullanılır; taşlanmamış şaselerde asla ZB (ağır ön yük) kullanılmaz.</li>
  <li>Paralel iki ray montajında daima <strong>Master-Slave (Lider-Takipçi)</strong> yöntemi uygulanır.</li>
  <li>Ray montaj delikleri mutlaka plastik veya pirinç <strong>tapa kapaklarıyla</strong> kapatılmalıdır; aksi halde talaş keçeleri parçalar.</li>
  <li>Bakımsız uzun ömür için arabaların kafasına <strong>entegre rezervuarlı yağlama kitleri (QZ/E2)</strong> eklenmelidir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>İki paralel ray monte ettiğin bir eksende üst tablayı bağladın. Tabla elinle iterken ortalarda kaymak gibi kayıyor ama rayın iki ucuna gittiğinde aşırı sıkışıyor ve motor adım kaçırıyor. Hata nerededir?</summary>
<div>İki ray arasındaki <strong>paralellik hatası</strong> vardır. Raylar ortada birbirinden doğru mesafededir ancak iki uca doğru eksenler birbirine yaklaşmakta (veya uzaklaşmaktadır). Raylar arasındaki mesafe toleransı katalog sınırını (örneğin 25'lik ray için 15 µm) aştığı için araba bilyaları kasıntı yapar. Çözüm: Takipçi (Slave) rayın cıvatalarını gevşetip, tablayı ileri-geri sürerek komparatörle master raya göre paralelliğini sıfırlayıp torklamaktır.</div></details>
<details><summary>Bir ray montajında cıvataları sıkarken neden tork anahtarı kullanmak zorundasın? "Elimle kuvvetlice sıktım" demek neden tehlikelidir?</summary>
<div>Profil raylar yüksek alaşımlı sertleştirilmiş çeliktir ancak kesiti incedir. Bir cıvatayı aşırı sıkarsan rayın tabanında yerel mikronluk çökme/şişme dalgalanması yaratırsın. Bilyalar bu dalganın üzerinden her geçtiğinde darbeli yuvarlanma yaşar ve araba vuruntu yapar. Yetersiz sıkarsan dinamik titreşimle cıvata gevşer. Her vida çapı için katalogda verilen tork (örn. M6 için 13–14 Nm) tork anahtarıyla uygulanmalıdır.</div></details>
<details><summary>Ray montaj faturası yüksekliği (omuz yüksekliği) neden araba veya ray yüksekliğinden daha küçük tasarlanmalıdır?</summary>
<div>Eğer gövdedeki işlenmiş dayama omzunun yüksekliği çok büyük olursa, arabanın içindeki plastik keçe veya yan sızdırmazlık contası bu omuza sürterek parçalanır. Ayrıca montaj faturasının köşe radyusu (r<sub>maks</sub>), rayın alt köşesindeki pahtan (örneğin 0,5 mm) küçük olmalıdır; aksi halde ray fatura dibine tam oturmaz ve açılı (eğik) basar.</div></details>
</div>
`);

KITAP.bolum('m5', '5-3', `
<p class="giris">İndüksiyonla sertleştirilmiş silindirik miller ve bilyalı burçlar (Round Shaft & Bushing); profil rayların maliyetli veya gereksiz olduğu hafif yüklerde, 3D yazıcılarda, laboratuvar cihazlarında ve açık hatlarda onlarca yıldır kullanılan ekonomik kılavuzlama çözümüdür. Bu bölümde serbest mil sehim sınırlarını, destekli milleri ve yağsız çalışan mühendislik polimer burçlarını inceliyoruz.</p>

<h2>Mil Özellikleri ve Malzeme Standartları</h2>
<p>Lineer hareket milleri rastgele bir transmisyon mili değildir:</p>
<ul>
  <li><strong>Malzeme:</strong> <strong>Cf53 (1.1213)</strong> karbon çeliği veya korozyon ortamı için <strong>X90CrMoV18 (1.4112)</strong> paslanmaz çelik.</li>
  <li><strong>Isıl İşlem:</strong> <strong>İndüksiyonla Yüzey Sertleştirme:</strong> Yüzey <strong>60 – 64 HRC</strong> sertliğe ulaştırılırken milin çekirdeği darbelere karşı tok ve yumuşak bırakılır (Sertlik derinliği: 1,0 – 2,5 mm).</li>
  <li><strong>Taşlama Toleransı:</strong> Hassas taşlanmış <strong>h6 veya h7</strong> çap toleransı. Yüzey pürüzlülüğü <code>Ra ≤ 0,2 µm</code>.</li>
  <li><strong>İçi Boş (Hollow) Miller:</strong> Ağırlığı %40–60 azaltır, içinden kablo veya hava hortumu geçirilmesine izin verir; eğilme rijitliği dolu mile çok yakındır.</li>
</ul>

<h2>Serbest Askılı Mil vs. Destekli Mil (SBR / TBR)</h2>
<div class="iki-sutun">
  <div>
    <h4>Serbest Askılı Mil (End-Supported)</h4>
    <p>Mil sadece iki uçtaki alüminyum yatak takozlarından (SK / SHF) tutturulur; gövde havada asılıdır.</p>
    <ul>
      <li><strong>Hayati Tehlike: Sehim (Bending)!</strong> Mil boyu uzadıkça yerçekimi ve araba ağırlığıyla ortadan bir yay gibi aşağı sarkar.</li>
      <li><strong>Mühendislik Sınırı:</strong> Mil çapı ne olursa olsun, serbest asılı miller <strong>800 – 1000 mm boyun üzerinde KESİNLİKLE KULLANILAMAZ!</strong> Bilyalı burç eğrilikten dolayı kilitlenir.</li>
    </ul>
  </div>
  <div>
    <h4>Sürekli Destekli Mil (Fully Supported - SBR)</h4>
    <p>Milin altı boyunca boyuna uzanan alüminyum bir destek kaidesi vardır ve alt şaseye cıvatalanır.</p>
    <ul>
      <li><strong>Avantajı:</strong> Sehim tamamen sıfırlanır; 3–4 metre boylara kadar sınırsız uzatılabilir.</li>
      <li><strong>Burç Tipi:</strong> Alttan açık tip <strong>LM-OP (Open type)</strong> burç kullanılır (Burcun altı 60° yarıktır, destek sacına çarpmaz).</li>
    </ul>
  </div>
</div>

<h2>Bilyalı Burç Tipleri (ISO 10285)</h2>
<div class="tablo-kap">
<table>
<thead>
  <tr>
    <th>Burç Tipi</th>
    <th>Gövde Yapısı</th>
    <th>Montaj Yöntemi</th>
    <th>Kullanım Alanı</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><strong>LM / LME Standart</strong></td>
    <td>Düz silindirik dış kovan</td>
    <td>Delik içine presle veya iki uçtan segmanla (DIN 471) sabitlenir.</td>
    <td>Kendi gövdesini işleyen özel bloklar, kompakt fikstürler.</td>
  </tr>
  <tr>
    <td><strong>LMF / LMK (Flanşlı)</strong></td>
    <td>Kafasında yuvarlak (F) veya kare (K) montaj flanşı</td>
    <td>Plakaya doğrudan 4 cıvatayla dik vidalanır.</td>
    <td>Dikey Z eksenleri, kalıp kılavuz plakaları, pratik montaj.</td>
  </tr>
  <tr>
    <td><strong>SMA / SC Takozlu</strong></td>
    <td>Alüminyum yatak bloğu içine hazır preslenmiş burç</td>
    <td>Tablaya üstten doğrudan 4 cıvatayla bağlanır.</td>
    <td>Modüler prototip otomasyon makineleri, pratik montaj.</td>
  </tr>
  <tr>
    <td><strong>Super Smart (Thomson)</strong></td>
    <td>Esnek bilyalı yatak plakaları</td>
    <td>Mil ile burç arasındaki açısal kaçıklıkları (±0,5°) kendi içinde tolere eder.</td>
    <td>Yükü bilyalara eşit dağıtır; standart burca göre <strong>3 kat yük, 27 kat ömür</strong> sağlar.</td>
  </tr>
</tbody>
</table>
</div>

<h2>Yağsız Kuru Çalışan Polimer Burçlar (Igus DryLin)</h2>
<p>Her ortamda bilya kullanılamaz. Tozlu, çamurlu, kimyasallı veya gıdaya uygun ortamlarda bilyalı burcun yerini kendinden yağlamalı <strong>tribo-polimer burçlar</strong> alır:</p>
<ul>
  <li><strong>Sıfır Yağlama:</strong> Polimer malzeme içinde mikroskobik katı yağlayıcı partiküller (PTFE, grafit) barındırır; asla sıvı yağ veya gres istemez.</li>
  <li><strong>Toz Tıkanmaz:</strong> Toz ve kir bilyaları kilitlerken polimer burç kiri yan kanallarından dışarı atar.</li>
  <li><strong>Sessiz Çalışma:</strong> Metal bilyaların şakırtısı yoktur, fısıltı kadar sessizdir (&lt; 20 dB).</li>
  <li><strong>Miller:</strong> Sert krom çelik yerine hafif <strong>sert eloksallı alüminyum miller</strong> üzerinde mükemmel çalışır.</li>
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
    <td><strong>Cf53 (1.1213) Çeliği</strong></td>
    <td>İndüksiyonla yüzey sertleştirmeye mükemmel yanıt veren, çekirdeği tok kalırken yüzeyi 60-64 HRC sertliğe ulaşan yüksek kaliteli lineer mil çeliğidir.</td>
  </tr>
  <tr>
    <td><strong>Bilyalı Burç (Linear Bushing)</strong></td>
    <td>Silindirik mil üzerinde sonsuz döngülü bilya sıralarıyla eksenel doğrusal yuvarlanma hareketi sağlayan rulman standardıdır (ISO 10285).</td>
  </tr>
  <tr>
    <td><strong>SBR Destekli Mil</strong></td>
    <td>Boylu boyunca alüminyum bir alt taşıyıcı kaideye cıvatalanarak şaseye bağlanan ve serbest eğilme sehimini tamamen ortadan kaldıran mil sistemidir.</td>
  </tr>
  <tr>
    <td><strong>LM-OP Açık Tip Burç</strong></td>
    <td>Destekli millerde alt alüminyum kaideye çarpmamak için dış kovanının alt tarafı 60° açıyla yarık bırakılmış bilyalı burç tipidir.</td>
  </tr>
  <tr>
    <td><strong>Tribo-Polimer (Igus DryLin)</strong></td>
    <td>İçerisinde homojen dağılmış katı PTFE ve katı yağlayıcı partiküller içeren, dışarıdan yağlama istemeyen aşınma dirençli teknik plastik burç malzemesidir.</td>
  </tr>
  <tr>
    <td><strong>Mil Eğilme Sehimi</strong></td>
    <td>İki uçtan asılı millerde açıklık uzadıkça yerçekimi ve araba ağırlığıyla mil merkezinde oluşan düşey yaylanma ve sarkma deformasyonudur.</td>
  </tr>
  <tr>
    <td><strong>Ball Spline (Bilyalı Kamalı Mil)</strong></td>
    <td>Mil gövdesinde boyuna açılmış bilya kanalları sayesinde doğrusal hareketi sağlarken aynı zamanda yüksek dönme torklarını boşluksuz ileten özel mildir.</td>
  </tr>
</tbody>
</table>
</div>
</div>

<div class="ozet-kutu"><h3>Özet</h3>
<ul>
  <li>Lineer miller indüksiyonla <strong>60–64 HRC</strong> sertleştirilmiş <strong>Cf53</strong> çeliğinden h6/h7 taşlanarak üretilir.</li>
  <li>Serbest asılı miller sehim (sarkma) nedeniyle <strong>maksimum 800–1000 mm</strong> ile sınırlıdır; daha uzun stroklarda alttan destekli <strong>SBR açık burç</strong> kullanılır.</li>
  <li>Mil burç sistemleri <strong>Mx (Roll) dönme momentini kesinlikle taşıyamaz</strong>; mil etrafında döner! Bu yüzden daima çift paralel mil kullanılmalıdır.</li>
  <li>Yağsız, sessiz, temiz oda ve tozlu ortamlarda bilyalı burç yerine <strong>katı polimer burçlar (Igus DryLin)</strong> tercih edilir.</li>
</ul></div>

<div class="test"><h3>Kendini Test Et</h3>
<details><summary>Tek bir indüksiyonlu mil ve üzerine takılı tek bir bilyalı burç ile bir taşıyıcı araba yapabilir misin? Neden?</summary>
<div>HAYIR, YAPILAMAZ! Silindirik mil geometrisi gereği burç milin etrafında 360° serbestçe dönebilir (Mx moment direnci SIFIRDIR). Arabanın üzerine yük bindiği an araba ters döner ve düşer. Bu mekanizmanın çalışabilmesi için birbirine paralel en az <strong>2 adet mil</strong> kullanılmalı veya dönmeyi kilitleyen kılavuz kamalı özel mil (ball spline) seçilmelidir.</div></details>
<details><summary>1,5 metre boyunda serbest asılı (iki ucundan takozla tutturulmuş) Ø20 mm bir mil üzerine 10 kg yük bindiğinde ne olur?</summary>
<div>1,5 metre boy Ø20 mil için devasa bir açıklıktır. Mil kendi ağırlığı ve 10 kg yük altında ortada 1–2 mm sehim (yay gibi eğrilik) yapar. Araba ortaya geldiğinde mil eğildiği için bilyalı burcun içindeki bilyalar rayın uçlarına kasar ve araba ortada sıkışarak kilitlenir! 1,5 metrede ya mil alttan sürekli destekli (SBR20) olmalı ya da profil raya geçilmelidir.</div></details>
<details><summary>Gıda paketleme fabrikasında çalışan bir lineer eksende bilyalı burçların içine sıvı gres bastın. Kalite denetçisi bu sistemi neden derhal durdurur?</summary>
<div>Gıda üretim hatlarında gres veya sıvı yağ damlaması ya da sızıntısı gıda ürününü kirletme riski taşır (FDA regülasyonları). Keçelerden sızan en ufak bir yağ partikülü partiyi çöpe attırır. Bu alanlarda yağlama gerektirmeyen, kuru çalışan, FDA onaylı beyaz veya mavi tribo-polimer <strong>Igus DryLin kaymalı burçlar</strong> ve korozyona dayanıklı paslanmaz / eloksallı miller kullanılmalıdır.</div></details>
</div>
`);
