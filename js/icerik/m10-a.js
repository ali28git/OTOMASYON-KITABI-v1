/* ========================================================================
   MODÜL 10: MAKİNE EMNİYETİ VE STANDARTLAR (m10-a.js)
   Bölüm 10.1: CE ve (EU) 2023/1230 Makine Yönetmeliği
   Bölüm 10.2: Risk Değerlendirmesi (ISO 12100)
   Bölüm 10.3: Güvenlik Mesafeleri (ISO 13857 ve ISO 13855)
   ======================================================================== */

// BÖLÜM 10.1: CE VE (EU) 2023/1230 MAKİNE YÖNETMELİĞİ
kitap.bolumEkle({
  id: "10-1",
  baslik: "CE ve (EU) 2023/1230 Makine Yönetmeliği",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Avrupa Birliği ve Türkiye pazarında makinelerin yasal olarak piyasaya arz edilmesini ve işletmeye alınmasını düzenleyen yeni <strong>(EU) 2023/1230 Makine Yönetmeliği</strong>'nin (Machinery Regulation) getirdiği bağlayıcı yasal yükümlülükleri, 2006/42/AT direktifinden farklarını, siber güvenlik ve yapay zeka zorunluluklarını, Teknik Dosya (Technical File) hazırlama sürecini ve CE Uygunluk Beyanı protokollerini öğretmektir.</p>
</div>

<h2>1. Direktiften Yönetmeliğe Geçiş: Hukuki Dönüşüm</h2>
<p>Eski 2006/42/AT "Makine Emniyeti Direktifi (Directive)", üye ülkelerin ulusal yasalarına aktarılmasını gerektiren ve ülkeden ülkeye yorum farkı yaratabilen bir yapıdaydı. 29 Haziran 2023'te yayımlanan ve <strong>20 Ocak 2027</strong> tarihinde tamamen zorunlu hale gelecek olan <strong>(EU) 2023/1230</strong> ise bir <strong>"Yönetmelik (Regulation)"</strong>tir.</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Karşılaştırma Kriteri</th>
      <th>Eski 2006/42/AT Makine Direktifi</th>
      <th>Yeni (EU) 2023/1230 Makine Yönetmeliği</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Hukuki Bağlayıcılık</strong></td>
      <td>Üye devletlerin kendi iç hukukuna aktarılması gerekiyordu.</td>
      <td><strong>Tüm AB ülkelerinde ve Türkiye'de doğrudan kanun hükmünde yürürlüğe girer;</strong> hiçbir yerel revizyona izin vermez.</td>
    </tr>
    <tr>
      <td><strong>Siber Güvenlik (Cybersecurity)</strong></td>
      <td>Makinelerin dijital saldırılara karşı güvenliği tanımlanmamıştı.</td>
      <td><strong>Zorunlu Hukuki Şart (Annex III - Bölüm 1.1.9):</strong> Yazılım manipülasyonu, dış ağdan hacklenme veya donanım müdahalesi makinenin güvenlik fonksiyonlarını bozamaz. Güvenlik yazılımları siber saldırıya karşı kilitli olmalıdır.</td>
    </tr>
    <tr>
      <td><strong>Yapay Zeka ve Otonom Davranış</strong></td>
      <td>Kapsam dışıydı; geleneksel mantık esas alınıyordu.</td>
      <td>Kendi kendine öğrenen (self-evolving / machine learning) algoritmalar barındıran makineler yüksek riskli (Yüksek Riskli Makine Kategorisi - Annex I) kabul edilir ve <strong>Onaylanmış Kuruluş (Notified Body)</strong> denetimi zorunludur.</td>
    </tr>
    <tr>
      <td><strong>Kullanım Kılavuzu Formatı</strong></td>
      <td>Basılı (kağıt) kılavuz şarttı.</td>
      <td>Dijital kılavuzlara ve QR kodlu dokümantasyona yasal onay verilmiştir (müşteri talep ederse basılı verilmelidir).</td>
    </tr>
    <tr>
      <td><strong>Önemli Değişiklik (Substantial Modification)</strong></td>
      <td>Muallaktı; fabrika içi revizyonlar gri alandaydı.</td>
      <td><strong>Açıkça Tanımlandı:</strong> Makinenin orijinal risk değerlendirmesinde öngörülmeyen yeni bir tehlike yaratan veya riski artıran herhangi bir modifikasyon (hız artırma, robot hücresi ekleme vb.) yapan kişi, <strong>yasal olarak yeni imalatçı</strong> sayılır ve sıfırdan CE süreci yürütmek zorundadır!</td>
    </tr>
  </tbody>
</table>

<h2>2. Makine ve Kısmen Tamamlanmış Makine (PCM) Ayrımı</h2>
<p>Otomasyon sektöründe sıkça yapılan hatalardan biri, tek başına bir fonksiyon icra edemeyen alt sistemlerin durumudur:</p>
<ul>
  <li><strong>Tam Makine (Machinery):</strong> Kendi tahrik sistemine sahip, belirlenmiş bir işi yerine getirebilen ve tüm güvenlik donanımları takılmış eksiksiz sistemdir (Örn: Komple paketleme makinesi, montaj hücresi). <strong>CE Etiketi vurulur ve "AB Uygunluk Beyanı (Declaration of Conformity - DoC)"</strong> düzenlenir.</li>
  <li><strong>Kısmen Tamamlanmış Makine (Partly Completed Machinery - PCM):</strong> Başka bir makineye veya hatta entegre edilmek üzere tasarlanmış, ancak tek başına bağımsız bir uygulamayı gerçekleştiremeyen mekanizmalardır (Örn: Çıplak 6 eksenli robot kolu, konveyör gövdesi, kartezyen modül). 
    <br><strong>Kural:</strong> <em>PCM'lere asla CE işareti vurulamaz!</em> Bunlar için <strong>"Kuruluş Beyanı (Declaration of Incorporation - DoI)"</strong> ve Montaj Talimatı düzenlenir. Entegratör tüm hattı birleştirdiğinde hattın tamamına tek bir CE plakası çakar.</li>
</ul>

<h2>3. CE Belgelendirme Sürecinin 6 Temel Adımı</h2>
<ol>
  <li><strong>Direktif ve Uyumlaştırılmış Standartların Belirlenmesi:</strong> Makinenin tabi olduğu yönetmelikler ((EU) 2023/1230, 2014/30/EU EMC vb.) ve ilgili Tip-A, Tip-B, Tip-C standartları listelenir.</li>
  <li><strong>Risk Değerlendirmesi Yapılması (ISO 12100):</strong> Tüm tehlikeler puanlanır ve risk azaltıcı önlemler uygulanır.</li>
  <li><strong>Temel Sağlık ve Güvenlik Gereksinimlerine (EHSR) Uygunluk:</strong> Yönetmeliğin Ek-III şartlarının sağlandığı doğrulanır.</li>
  <li><strong>Teknik Dosyanın (Technical File) Hazırlanması:</strong> Genel montaj resimleri, elektrik/pnömatik şemalar, mukavemet/sehim hesapları, test raporları, güvenlik yazılımı kodları ve kullanım kılavuzu bir araya getirilir (Yasal olarak 10 yıl saklanması zorunludur).</li>
  <li><strong>AB Uygunluk Beyanının (DoC) İmzalanması:</strong> Şirketin yasal yetkilisi tarafından tek taraflı hukuki taahhütname imzalanır.</li>
  <li><strong>CE İşaretinin İliştirilmesi:</strong> Makine şasesine silinmez metal etiket perçinlenir.</li>
</ol>

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
        <td><strong>(EU) 2023/1230</strong></td>
        <td>Avrupa Birliği ve Türkiye'de makine emniyetini düzenleyen, siber güvenlik ve yapay zekayı kapsayan en güncel Makine Yönetmeliği.</td>
      </tr>
      <tr>
        <td><strong>CE Uygunluk Beyanı (DoC)</strong></td>
        <td>İmalatçının, makinesinin ilgili tüm AB güvenlik yönetmeliklerine %100 uyduğunu yasal ve cezai sorumlulukla beyan ettiği resmi belge.</td>
      </tr>
      <tr>
        <td><strong>Teknik Dosya (Technical File)</strong></td>
        <td>Makinenin tasarım hesaplarını, şemalarını, risk analizini ve test sonuçlarını içeren, denetimlerde sunulmak üzere 10 yıl saklanan dosya.</td>
      </tr>
      <tr>
        <td><strong>Substantial Modification</strong></td>
        <td>Makinede yeni tehlikeler doğuran veya emniyet sistemini geçersiz kılan ve sıfırdan CE belgelendirmesi gerektiren önemli değişiklik.</td>
      </tr>
      <tr>
        <td><strong>Partly Completed Machinery (PCM)</strong></td>
        <td>Tek başına çalışamayan alt montaj elemanı; CE etiketi alamaz, Kuruluş Beyanı (DoI) ile sevk edilir.</td>
      </tr>
      <tr>
        <td><strong>Notified Body (Onaylanmış Kuruluş)</strong></td>
        <td>Yüksek riskli makinelerin (Ek-I) tip incelemesini ve emniyet onayını yapmaya yetkili bağımsız akredite denetim kurumu.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Yeni (EU) 2023/1230 Yönetmeliği, tüm üye ülkelerde doğrudan kanun niteliğindedir ve siber güvenlik ile yapay zeka entegrasyonlarını zorunlu kılmıştır.</li>
    <li>Mevcut makinede risk profilini artıran modifikasyonlar yapanlar yasal olarak yeni imalatçı kabul edilir (Substantial Modification).</li>
    <li>Robot kolu gibi tek başına çalışamayan sistemler Kısmen Tamamlanmış Makinedir (PCM); bunlara CE vurulmaz, Kuruluş Beyanı düzenlenir.</li>
    <li>İmalatçı, Teknik Dosyayı hazırlayıp Uygunluk Beyanını imzalamadan makineye CE etiketi vuramaz; bu dosya 10 yıl yasal olarak saklanmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Yasal Sorumluluk ve Önemli Değişiklik):</strong> Bir otomotiv yan sanayi fabrikası, 2018 yılında satın aldığı CE belgeli standart bir pres hattına kendi bünyesinde bir 6 eksenli besleme robotu entegre etmiş ve hattın çevrim hızını %40 artırmıştır. Yapılan bu revizyondan 3 ay sonra bir operatör robot hücresinde sıkışarak yaralanmıştır. İş müfettişleri ve mahkeme heyeti (EU) 2023/1230 kapsamında fabrikayı nasıl değerlendirir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Fabrika sadece presi satın aldığı orijinal imalatçıyı suçlayabilir.
      <div class="test-cevap">YANLIŞ. Orijinal imalatçının izni ve tasarımı dışına çıkılmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Fabrika mevcut makineye robot ekleyerek ve hızı artırarak "Önemli Değişiklik (Substantial Modification)" yapmıştır. Bu durum fabrikayı yasal olarak hattın yeni imalatçısı konumuna sokmuştur. Fabrika sıfırdan risk analizi yapmadığı ve yeni CE belgelendirmesi yürütmediği için doğrudan birinci derecede kusurlu ve cezai olarak sorumludur!
      <div class="test-cevap">DOĞRU. Makineye yeni bir robot veya risk kaynağı eklendiğinde eski CE belgesi hükümsüz kalır. Revizyonu yapan kuruluş tüm hattın yeni imalatçısı sayılır ve yasal sorumluluk tamamen ona aittir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Robot eklemek küçük bir ayardır, CE sürecini etkilemez.
      <div class="test-cevap">YANLIŞ. Robot eklemek yeni ezilme ve çarpışma tehlikeleri doğurur; en tipik Substantial Modification örneğidir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (CE İşaretleme Kuralı):</strong> Bir makine imalatçısı, bir müşterisine sadece çıplak şase üzerinde çalışan 3 eksenli kartezyen bir alma-bırakma manipülatörü satmaktadır. Ürünün kendi kontrol panosu veya koruyucu emniyet çitleri yoktur; müşteri bu manipülatörü kendi hattına vidalayacaktır. İmalatçı bu kartezyen mekanizmaya doğrudan CE etiketi basıp "AB Uygunluk Beyanı" verebilir mi?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Evet, her satılan endüstriyel ürüne CE basılmalıdır.
      <div class="test-cevap">YANLIŞ. Yasal olarak suç teşkil eder.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Hayır! Tek başına bir proses icra edemeyen ve güvenlik donanımları tamamlanmamış bu ürün "Kısmen Tamamlanmış Makinedir (Partly Completed Machinery - PCM)". Ürüne CE etiketi VURULAMAZ. İmalatçı sadece montaj talimatı ve "Kuruluş Beyanı (Declaration of Incorporation - DoI)" düzenleyebilir. CE etiketi hattın tamamı kurulup güvenlik çitleri kapatıldığında vurulacaktır.
      <div class="test-cevap">DOĞRU. Yönetmelik gereği tek başına çalışamayan alt sistemlere CE vurulması yasaktır. Bu sistemler Kuruluş Beyanı ile sevk edilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) CE yerine ISO 9001 logosu vurulmalıdır.
      <div class="test-cevap">YANLIŞ. ISO 9001 kalite yönetim sistemidir, makine emniyeti işareti değildir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Yeni Yönetmelik - Siber Güvenlik Zorunluluğu):</strong> (EU) 2023/1230 Makine Yönetmeliği Annex III Madde 1.1.9 kapsamında makinelerin güvenlik kontrol sistemleri için getirilen yeni zorunluluk nedir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Makinelerin ethernet kablolarının kırmızı renkte olması.
      <div class="test-cevap">YANLIŞ. Kablo rengiyle ilgili bir zorunluluk yoktur.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Makinenin emniyet yazılımı ve fonksiyonel devrelerinin dış ağlardan gelebilecek yetkisiz erişim, hacklenme ve manipülasyonlara karşı donanımsal ve yazılımsal olarak korunması; güvenlik parametrelerine yapılan her türlü müdahalenin kayıt altına alınması (izlenebilirlik) zorunluluğudur.
      <div class="test-cevap">DOĞRU. Dijitalleşen ve buluta bağlanan makinelerde siber saldırıyla güvenlik sensörlerinin devre dışı bırakılmasını önlemek yeni yönetmeliğin en kritik zorunluluklarından biridir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Makinede internet bağlantısının tamamen yasaklanması.
      <div class="test-cevap">YANLIŞ. İnternet yasaklanmamış, güvenli hale getirilmesi şart koşulmuştur.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 10.2: RİSK DEĞERLENDİRMESİ (ISO 12100)
kitap.bolumEkle({
  id: "10-2",
  baslik: "Risk Değerlendirmesi (ISO 12100)",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Makine emniyeti standartlar hiyerarşisinin temel taşı (Tip A Standardı) olan <strong>ISO 12100</strong> uyarınca; tasarım aşamasından başlayarak makine sınırlarının belirlenmesini, mekanik/elektriksel tehlikelerin sistematik tanımlanmasını, risk tahmini ve skorlamasını ve altın kural olan <strong>3 Adımlı Risk Azaltma Metodolojisini</strong> uygulamalı olarak öğretmektir.</p>
</div>

<h2>1. Güvenlik Standartları Hiyerarşisi (Tip A, B ve C)</h2>
<p>Avrupa ve uluslararası emniyet normları üç katmanlı bir piramit yapısına sahiptir:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Standart Tipi</th>
      <th>Kapsamı ve Niteliği</th>
      <th>Temel Standart Örnekleri</th>
      <th>Uygulama Önceliği</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Tip A Standartları (Temel Güvenlik)</strong></td>
      <td>Tüm makineler için geçerli olan temel kavramları, tasarım ilkelerini ve genel metodolojiyi belirler.</td>
      <td><strong>ISO 12100:</strong> Tasarım için genel prensipler, risk değerlendirmesi ve risk azaltımı.</td>
      <td>Tüm tasarımların başlangıç çatısıdır.</td>
    </tr>
    <tr>
      <td><strong>Tip B Standartları (Grup Güvenlik)</strong></td>
      <td>Geniş bir makine yelpazesinde kullanılabilecek belirli bir güvenlik yönünü veya güvenlik donanımını düzenler.</td>
      <td>• <strong>Tip B1 (Güvenlik Yönleri):</strong> ISO 13849-1 (Fonksiyonel Güvenlik), ISO 13857 (Güvenlik Mesafeleri).<br>• <strong>Tip B2 (Güvenlik Cihazları):</strong> ISO 13850 (Acil Duruş), ISO 14119 (Kilitleme Cihazları), ISO 14120 (Koruyucu Kapaklar).</td>
      <td>Tip C standardı yoksa veya Tip C'de atıf yapıldığında bağlayıcıdır.</td>
    </tr>
    <tr>
      <td><strong>Tip C Standartları (Makineye Özel)</strong></td>
      <td>Spesifik bir makine veya makine grubu için ayrıntılı güvenlik gereksinimlerini tanımlar.</td>
      <td>• <strong>ISO 10218-1 / 2:</strong> Endüstriyel Robotlar ve Hücreler.<br>• <strong>EN 692 / 693:</strong> Mekanik ve Hidrolik Presler.<br>• <strong>EN 415 Serisi:</strong> Ambalaj ve Paketleme Makineleri.</td>
      <td><strong>EN YÜKSEK ÖNCELİK!</strong> Tip C standardındaki bir madde, Tip A veya B standardındaki genel kuralı geçersiz kılar veya özelleştirir.</td>
    </tr>
  </tbody>
</table>

<h2>2. ISO 12100 Risk Değerlendirmesi İteratif Süreci</h2>
<p>Risk değerlendirmesi tek seferlik bir evrak doldurma işi değil, tasarım nihayete erene kadar tekrarlanan (iteratif) bir mühendislik döngüsüdür:</p>

<div class="muhendislik-kutu">
  <h4>Sistematik Döngünün 5 Adımı:</h4>
  <ol>
    <li><strong>Makine Sınırlarının Belirlenmesi:</strong>
      <ul>
        <li><em>Kullanım Sınırları:</em> Doğru kullanım amacı ve mantıklı olarak öngörülebilen kötü kullanım (foreseeable misuse - örn: operatörün kapağı açıkken içeride parça araması).</li>
        <li><em>Alan Sınırları:</em> Makinenin hareket alanı, bakım boşlukları, operatör erişim bölgeleri.</li>
        <li><em>Zaman Sınırları:</em> Aşınan parçaların ömrü, periyodik bakım aralıkları.</li>
      </ul>
    </li>
    <li><strong>Tehlikelerin Tanımlanması (Hazard Identification):</strong> Mekanik tehlikeler (ezilme, kesme, dolanma, delinme, fırlama), elektriksel şok, termal sıcak yüzeyler, gürültü, lazer ışını.</li>
    <li><strong>Risk Tahmini (Risk Estimation):</strong> Her tehlike için üç parametre değerlendirilir:
      <div class="formul-kutu">
        Risk = Hasarın Şiddeti (Se) × [ Maruz Kalma Sıklığı (Fr) + Tehlikeli Olay Olasılığı (Pr) + Kaçınma İhtimali (Av) ]
      </div>
    </li>
    <li><strong>Risk Değerlendirmesi (Risk Evaluation):</strong> Mevcut risk kabul edilebilir seviyede mi? Cevap "HAYIR" ise risk azaltma adımlarına geçilir.</li>
    <li><strong>Artık Riskin Değerlendirilmesi:</strong> Alınan önlemlerden sonra kalan risk kabul edilebilir mi? Önlemler yeni bir tehlike doğurdu mu?</li>
  </ol>
</div>

<h2>3. 3 Adımlı Hiyerarşik Risk Azaltma Metodolojisi (Altın Kural)</h2>
<p>ISO 12100 standardında risklerin azaltılması rastgele yapılamaz; <strong>aşağıdaki sıra kesinlikle takip edilmelidir</strong>:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Öncelik Sırası</th>
      <th>Risk Azaltma Adımı</th>
      <th>Açıklama ve Mühendislik Uygulamaları</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1. ADIM (EN ÖNCELİKLİ)</strong></td>
      <td><strong>İçsel Olarak Güvenli Tasarım (Inherently Safe Design)</strong></td>
      <td>Tehlikeyi koruyucu kapağa dahi gerek kalmadan, fiziksel tasarımın kendisiyle yok etmektir. 
        <br><em>Örnekler:</em> Sıkışma noktalarındaki boşlukları parmak giremeyecek kadar küçültmek (<4 mm) veya kolun sıkışmayacağı kadar açmak (>120 mm); keskin köşeleri yuvarlatmak; silindir kuvvetini insanı ezemeyecek basınca (F < 150 N) sınırlamak; karşı ağırlıklar kullanarak yerçekimi düşmelerini engellemek.</td>
    </tr>
    <tr>
      <td><strong>2. ADIM (İKİNCİL)</strong></td>
      <td><strong>Teknik Koruyucu Önlemler (Guards & Protective Devices)</strong></td>
      <td>Tasarım gereği yok edilemeyen tehlikelerin çevresini fiziksel veya optik olarak kapatmaktır.
        <br><em>Örnekler:</em> Sabit tel çitler (ISO 14120), güvenlik kilitli açılır kapılar (ISO 14119), emniyet ışık perdeleri (ESPE - ISO 13855), lazer alan tarayıcılar (scanner), iki el kumandaları.</td>
    </tr>
    <tr>
      <td><strong>3. ADIM (EN SON ÇARE)</strong></td>
      <td><strong>Kullanım Bilgileri ve Uyarılar (Information for Use)</strong></td>
      <td>İlk iki adımdan sonra hala kalan artık riskler (residual risks) hakkında kullanıcıyı bilgilendirmektir.
        <br><em>Örnekler:</em> Makine üzerine sarı-siyah ikaz piktogramları yapıştırmak, sesli-ışıklı ikaz kuleleri, kullanım kılavuzunda kişisel koruyucu donanım (KKD - çelik burunlu ayakkabı, gözlük) zorunluluğu belirtmek.
        <br><strong>Kural:</strong> <em>Bir tehlike sarı etiket yapıştırılarak güvenli hale GETİRİLEMEZ!</em> 1. ve 2. adımlar tükenmeden 3. adıma geçilemez.</td>
    </tr>
  </tbody>
</table>

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
        <td><strong>ISO 12100</strong></td>
        <td>Tüm makinelerde risk değerlendirmesi ve risk azaltımı için temel ilke ve metodolojiyi belirleyen Tip A güvenlik standardı.</td>
      </tr>
      <tr>
        <td><strong>Inherently Safe Design</strong></td>
        <td>Tehlikenin mekanik boyutlandırma, düşük kuvvet veya geometri yoluyla doğuştan yok edildiği en üstün güvenlik yaklaşımı.</td>
      </tr>
      <tr>
        <td><strong>Tip C Standardı</strong></td>
        <td>Spesifik bir makine türü için (örn: presler veya robotlar) doğrudan geçerli olan ve en yüksek önceliğe sahip güvenlik normu.</td>
      </tr>
      <tr>
        <td><strong>Residual Risk (Artık Risk)</strong></td>
        <td>Tüm teknik ve yapısal güvenlik önlemleri uygulandıktan sonra hala kalan ve kılavuzda belirtilmesi gereken kaçınılmaz risk payı.</td>
      </tr>
      <tr>
        <td><strong>Foreseeable Misuse</strong></td>
        <td>Operatörün kötü niyetli olmasa dahi dikkatsizlik, acele veya yorgunluk sebebiyle yapabileceği mantıksal olarak öngörülebilir hatalı kullanım.</td>
      </tr>
      <tr>
        <td><strong>Harm (Hasar / Zarar)</strong></td>
        <td>Makinenin insanda yaratabileceği fiziksel yaralanma veya sağlık bozulması derecesi.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Standartlar hiyerarşisinde Tip C (makineye özel) standartlar, Tip A (ISO 12100) ve Tip B normlarına göre daima önceliklidir.</li>
    <li>Risk değerlendirmesinde sadece normal çalışma değil; kalıp ayarı, bakım, temizlik ve mantıklı kötü kullanımlar da hesaba katılmalıdır.</li>
    <li>3 adımlı risk azaltma kuralı kesindir: Önce İçsel Tasarım → Sonra Koruyucu Kapak/Sensör → En son Uyarı İkazları.</li>
    <li>Mühendis, bir tehlikeyi sarı ikaz levhası veya kılavuza not yazarak geçiştiremez; fiziksel olarak kapatmak veya yok etmek zorundadır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Risk Azaltma Hiyerarşisi):</strong> Bir montaj hücresinde 200 mm stroklu bir pnömatik itici silindir çalışmaktadır. Silindirin uç plakası ile sabit gövde arasında parçanın boşaltılması sırasında 45 mm'lik bir parmak ezilme aralığı kalmaktadır. Tasarımcı bu bölgeye sadece sarı zemin üzerine siyah "DİKKAT: EL EZİLME TEHLİKESİ" etiketi yapıştırmıştır. ISO 12100 denetiminde bu önlem neden doğrudan REDDEDİLİR?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Etiketin boyutu yeterince büyük değildir.
      <div class="test-cevap">YANLIŞ. Etiket ne kadar büyük olursa olsun reddedilir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) ISO 12100'ün 3 Adımlı Hiyerarşisine aykırıdır. Uyarı etiketleri (3. Adım), yalnızca 1. Adım (İçsel Güvenli Tasarım) ve 2. Adım (Teknik Koruyucular) uygulanamadığında kalan artık riskler için geçerlidir. Burada silindir mesafesi ya parmak giremeyecek şekilde <4 mm yapılmalı (1. Adım) ya da sabit şeffaf polikarbonat muhafaza ile kapatılmalıdır (2. Adım). Uyarı etiketi tek başına güvenlik önlemi sayılamaz!
      <div class="test-cevap">DOĞRU. Standart uyarınca fiziksel olarak korunabilecek bir tehlike asla sadece ikaz etiketiyle bırakılamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Sarı renk yerine mavi renk kullanılmalıdır.
      <div class="test-cevap">YANLIŞ. Mavi zorunluluk bildirir, tehlike sarıdır. Sorun etiketleme yönteminin kendisidir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Standart Hiyerarşisi Önceliği):</strong> Bir otomasyon mühendisi 6 eksenli bir endüstriyel robot hücresinin emniyet tasarımını yapmaktadır. Genel güvenlik mesafesi standardı olan ISO 13857 (Tip B) ile endüstriyel robot güvenlik standardı olan ISO 10218-2 (Tip C) arasında bazı çit yükseklikleri konusunda farklılık görmektedir. Hangi standardın gereksinimleri esas alınmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) ISO 12100 en temel standart olduğu için sadece ona bakılır.
      <div class="test-cevap">YANLIŞ. ISO 12100 genel ilkeleri verir, spesifik boyutları vermez.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Tip C standardı olan ISO 10218-2 esas alınmalıdır. Çünkü Tip C standartları spesifik makine grubuna özel olarak yazılmıştır ve genel Tip A ve Tip B standartlarına göre mutlak önceliğe sahiptir.
      <div class="test-cevap">DOĞRU. Standartlar piramidinde Tip C daima Tip B ve Tip A'yı ezer veya özelleştirir. Robot hücresinde ISO 10218 serisi esastır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Mühendis hangisi ucuzsa onu seçebilir.
      <div class="test-cevap">YANLIŞ. Standart seçimi maliyete göre yapılamaz, hukuki hiyerarşi kuraldır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (İçsel Tasarım Örneği):</strong> Bir karton kutu katlama mekanizmasında pnömatik silindir kapağı kapatırken insan elinin araya girme riski vardır. Bu riski "1. Adım: İçsel Olarak Güvenli Tasarım (Inherently Safe Design)" ile çözmek isteyen bir makine mühendisi ne yapmalıdır?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Hatta optik ışık perdesi ve emniyet rölesi eklemek.
      <div class="test-cevap">YANLIŞ. Bu 2. Adım (Teknik Koruyucu) önlemdir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Silindirin basıncını ve piston çapını kartonu katlayacak ancak insan eline çarptığında morarma dahi yapmayacak maksimum 150 N temas kuvveti (ISO 13849 ve kobot biyomekanik sınırı) üretecek seviyede küçültmek.
      <div class="test-cevap">DOĞRU. Kuvveti veya enerjiyi zarar veremeyecek fiziksel eşiğin altında sınırlandırmak en mükemmel İçsel Güvenli Tasarım (1. Adım) örneğidir; kapak veya sensör arızalansa bile insan yaralanamaz.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Operatöre baret taktırmak.
      <div class="test-cevap">YANLIŞ. El ezilmesine baretin faydası yoktur.</div>
    </div>
  </div>
</div>
`
});

// BÖLÜM 10.3: GÜVENLİK MESAFELERİ (ISO 13857 VE ISO 13855)
kitap.bolumEkle({
  id: "10-3",
  baslik: "Güvenlik Mesafeleri (ISO 13857)",
  icerik: `
<div class="kavram-kutu">
  <h4>Bölümün Mühendislik Amacı</h4>
  <p>Operatörlerin el, kol ve parmak gibi uzuvlarının tehlikeli mekanik bölgelere ulaşmasını fiziksel olarak engelleyen koruyucu bariyer mesafelerini (<strong>ISO 13857</strong>) ve optoelektronik koruyucuların (Işık Perdeleri, Lazer Tarayıcılar - <strong>ISO 13855</strong>) makinenin toplam duruş süresine (T) bağlı olarak yerleşim mesafesi hesaplama formüllerini öğretmektir.</p>
</div>

<h2>1. Mekanik Koruyuculardan Uzanma Mesafeleri (ISO 13857)</h2>
<p>ISO 13857 standardı, tehlikeli bölgenin yüksekliğine, koruyucu çitin yüksekliğine ve çit üzerindeki açıklıkların (delik, tel örgü, yarık) geometrisine göre insan uzuvlarının erişim sınırlarını belirler.</p>

<h3>1.1. Koruyucu Çitin Üzerinden Uzanma (Reaching Over Protective Structures)</h3>
<p>Eğer tehlikeli bölge yüksekliği <em>h</em> [mm] ve koruyucu yapının üst kenar yüksekliği <em>b</em> [mm] ise, tehlike ile çit arasındaki yatay güvenlik mesafesi <em>c</em> tablolardan seçilir:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Tehlikeli Bölge Yüksekliği (h)</th>
      <th>Çit Yüksekliği b = 1800 mm</th>
      <th>Çit Yüksekliği b = 2000 mm</th>
      <th>Çit Yüksekliği b = 2200 mm</th>
      <th>Çit Yüksekliği b = 2500 mm</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>2400 mm</strong></td>
      <td>100 mm</td>
      <td>100 mm</td>
      <td>100 mm</td>
      <td>0 (Erişilemez)</td>
    </tr>
    <tr>
      <td><strong>2000 mm</strong></td>
      <td>600 mm</td>
      <td>500 mm</td>
      <td>300 mm</td>
      <td>0</td>
    </tr>
    <tr>
      <td><strong>1600 mm</strong></td>
      <td>900 mm</td>
      <td>700 mm</td>
      <td>500 mm</td>
      <td>0</td>
    </tr>
    <tr>
      <td><strong>1200 mm</strong></td>
      <td>1100 mm</td>
      <td>900 mm</td>
      <td>500 mm</td>
      <td>0</td>
    </tr>
    <tr>
      <td><strong>800 mm</strong></td>
      <td>1100 mm</td>
      <td>1000 mm</td>
      <td>600 mm</td>
      <td>0</td>
    </tr>
  </tbody>
</table>

<div class="uyari-kutu">
  <h4>Kritik Standart Kuralı: b = 2500 mm Sınırı</h4>
  <p>ISO 13857'ye göre koruyucu bir çitin veya kabinin yüksekliği <strong>b ≥ 2500 mm</strong> ise, normal boydaki bir insanın parmak uçlarıyla üzerinden aşarak tehlikeli bölgeye ulaşması imkansız kabul edilir (yatay güvenlik mesafesi c = 0 alınabilir). Otomasyon hatlarında standart çit yüksekliklerinin genellikle 2000 mm veya 2200 mm seçilmesinin sebebi budur.</p>
</div>

<h3>1.2. Açıklıklardan (Delik ve Yarıklardan) Uzanma Mesafeleri</h3>
<p>Tel çit örgüsü veya şeffaf pleksi havalandırma yarıklarının boyutuna göre tehlikeye olan minimum mesafe:</p>

<table class="standart-tablo">
  <thead>
    <tr>
      <th>Uzanılan Uzuv</th>
      <th>Açıklık Şekli</th>
      <th>Açıklık Boyutu e [mm]</th>
      <th>Minimum Güvenlik Mesafesi s<sub>r</sub> [mm]</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Parmak Ucu</strong></td>
      <td>Yarık / Kare / Daire</td>
      <td>e ≤ 4 mm</td>
      <td>≥ 0 mm (Parmak giremez)</td>
    </tr>
    <tr>
      <td><strong>Parmak (1. Boğuma kadar)</strong></td>
      <td>Yarık / Yuvarlak</td>
      <td>4 < e ≤ 6 mm</td>
      <td>≥ 10 mm</td>
    </tr>
    <tr>
      <td><strong>Parmak (Tüm parmak)</strong></td>
      <td>Yarık (Slot)<br>Kare Delik<br>Dairesel Delik</td>
      <td>6 < e ≤ 12 mm<br>6 < e ≤ 12 mm<br>6 < e ≤ 12 mm</td>
      <td><strong>≥ 120 mm</strong><br>≥ 80 mm<br>≥ 60 mm</td>
    </tr>
    <tr>
      <td><strong>El (Bileğe kadar)</strong></td>
      <td>Yarık (Slot)<br>Kare / Dairesel</td>
      <td>12 < e ≤ 20 mm<br>12 < e ≤ 20 mm</td>
      <td><strong>≥ 850 mm</strong><br>≥ 120 mm</td>
    </tr>
    <tr>
      <td><strong>Kol (Omuza kadar)</strong></td>
      <td>Kare veya Daire</td>
      <td>30 < e ≤ 40 mm</td>
      <td>≥ 850 mm</td>
    </tr>
  </tbody>
</table>

<div class="muhendislik-kutu">
  <h4>Yarık (Slot) vs. Tel Örgü Tuzağı</h4>
  <p>Tablodan görüleceği üzere 20 mm genişliğindeki <strong>boyuna bir yarıkta (slot)</strong> güvenlik mesafesi tam <strong>850 mm</strong> iken, 20 mm'lik <strong>kare tel örgülü çitte</strong> güvenlik mesafesi sadece <strong>120 mm</strong>'dir! Çünkü yarık boyunca insan eli yan çevrilerek dirseğe kadar içeri sokulabilir. Bu nedenle saclardaki havalandırma yarıkları daima parçalı veya panjurlu (louvered) yapılmalıdır.</p>
</div>

<h2>2. Optoelektronik Koruyucularda (Işık Perdesi) Güvenlik Mesafesi (ISO 13855)</h2>
<p>Bir operatör ışık perdesini (ESPE) kestiğinde, makinenin tehlikeli hareketi durdurması anlık değildir. Operatörün eli tehlike noktasına ulaşmadan önce makinenin durabilmesi için ışık perdesi belirli bir <strong>Minimum Güvenlik Mesafesine (S)</strong> yerleştirilmelidir.</p>

<div class="muhendislik-kutu">
  <h4>ISO 13855 Temel Formülasyonu</h4>
  <div class="formul-kutu">
    S = (K · T) + C
  </div>
  <p>Burada:</p>
  <ul>
    <li><strong>S:</strong> Işık perdesi algılama düzlemi ile tehlike noktası arasındaki minimum mesafe [mm].</li>
    <li><strong>K:</strong> İnsan elinin veya vücudunun yaklaşma hızı parametresi:
      <ul>
        <li>Genel yaklaşma hızı: <strong>K = 2000 mm/s</strong> (Hesaplanan S ≤ 500 mm ise bu değer kullanılır).</li>
        <li>Eğer hesaplanan S > 500 mm çıkarsa, formül <strong>K = 1600 mm/s</strong> alınarak yeniden hesaplanabilir (ancak S asla 500 mm'den küçük olamaz).</li>
      </ul>
    </li>
    <li><strong>T:</strong> Toplam sistem duruş süresi (Overall Stopping Time) [saniye]:
      <div class="formul-kutu">
        T = t<sub>1</sub> (Işık perdesi tepki süresi) + t<sub>2</sub> (Emniyet rölesi/PLC süresi) + t<sub>3</sub> (Pnömatik valf/fren süresi) + t<sub>4</sub> (Mekanik duruş süresi)
      </div>
    </li>
    <li><strong>C:</strong> Işık perdesinin optik çözünürlüğüne (d) bağlı ilave yaklaşma payı [mm]:
      <ul>
        <li>Parmak koruma (d ≤ 14 mm): <strong>C = 0 mm</strong></li>
        <li>El koruma (14 mm < d ≤ 40 mm): <strong>C = 8 · (d − 14) mm</strong> (Örn: d = 30 mm için C = 8 · 16 = 128 mm).</li>
        <li>Gövde koruma (d > 40 mm): <strong>C = 850 mm</strong> (Tekil ışınlı veya çok huzmeli gövde bariyerleri).</li>
      </ul>
    </li>
  </ul>
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
        <td><strong>ISO 13857</strong></td>
        <td>Üst ve alt uzuvların mekanik tehlikeli bölgelere ulaşmasını önleyen güvenlik mesafelerini düzenleyen B1 standardı.</td>
      </tr>
      <tr>
        <td><strong>ISO 13855</strong></td>
        <td>İnsan vücut yaklaşma hızlarını baz alarak ışık perdeleri ve emniyet paspaslarının yerleşim mesafesini hesaplayan norm.</td>
      </tr>
      <tr>
        <td><strong>ESPE</strong></td>
        <td>Elektro-Hassas Koruyucu Donanım (Işık perdesi, lazer alan tarayıcı vb. optoelektronik sensörler).</td>
      </tr>
      <tr>
        <td><strong>Çözünürlük (Resolution - d)</strong></td>
        <td>Işık perdesinin optik ışınları arasındaki mesafe artı ışın demeti çapı; parmak (14 mm) veya el (30 mm) algılama hassasiyeti.</td>
      </tr>
      <tr>
        <td><strong>Toplam Duruş Süresi (T)</strong></td>
        <td>Sensörün kesilmesinden mekanizmanın fiziksel olarak tamamen hareketsiz kalmasına kadar geçen toplam süre.</td>
      </tr>
      <tr>
        <td><strong>İlave Mesafe (C)</strong></td>
        <td>Işık demetleri arasından algılanmadan önce elin içeri girebileceği derinliği telafi eden formül çarpanı.</td>
      </tr>
    </tbody>
  </table>
</div>

<div class="ozet-kutu">
  <h4>Bölüm Özeti</h4>
  <ul>
    <li>Koruyucu bariyer yüksekliği 2500 mm olduğunda üzerinden uzanma riski sıfır kabul edilir. Daha alçak çitlerde tehlikeye olan yatay mesafe tablodan denetlenmelidir.</li>
    <li>Boyuna açık yarıklar (slot) elin içeri girmesine izin verdiği için kare deliklere kıyasla çok daha büyük (850 mm'ye kadar) güvenlik mesafesi gerektirir.</li>
    <li>Işık perdelerinde mesafe <em>S = (K·T) + C</em> formülüyle hesaplanır; insan yaklaşma hızı K = 2000 mm/s alınır.</li>
    <li>Mekanik fren aşınması veya pnömatik valf gecikmesi duruş süresini (T) uzatır; bu durum ışık perdesini tehlikeye çok yaklaştırarak emniyetsiz hale getirebilir. Periyodik duruş süresi testi yapılmalıdır.</li>
  </ul>
</div>

<div class="test">
  <h4>Kendini Test Et: Uygulama ve Tasarım Soruları</h4>

  <div class="test-soru">
    <p><strong>Soru 1 (Analitik Işık Perdesi Mesafesi Hesabı):</strong> Bir hidrolik pres hücresinde el koruma amacıyla çözünürlüğü d = 30 mm olan bir ışık perdesi (ESPE) kullanılacaktır. Sistemin toplam duruş süresi yapılan ölçümde T = 150 milisaniye (0,15 saniye) olarak belirlenmiştir. ISO 13855 standardına göre ışık perdesi pres basma noktasından minimum kaç mm uzağa yerleştirilmelidir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) S = 428 mm
      <div class="test-cevap">DOĞRU. <br>
      K = 2000 mm/s alınır. <br>
      C = 8 · (d − 14) = 8 · (30 − 14) = 8 · 16 = 128 mm. <br>
      S = (K · T) + C = (2000 · 0,15) + 128 = 300 + 128 = 428 mm. <br>
      Işık perdesi en az 428 mm mesafeye kurulmalıdır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) S = 300 mm
      <div class="test-cevap">YANLIŞ. İlave mesafe C (128 mm) unutulmuş, sadece K·T alınmıştır.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) S = 150 mm
      <div class="test-cevap">YANLIŞ. Duruş süresi doğrudan mesafe sanılmıştır.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 2 (Saha Hatası ve Güvenlik Boşluğu):</strong> Bir makinede ışık perdesi formüle göre 450 mm mesafeye konulmuştur. Ancak pres gövdesi ile ışık perdesi arasında 350 mm'lik geniş bir boşluk kalmıştır. Operatör sabah işe başladığında ışık perdesinin arkasına (ışık perdesi ile tehlike arasına) girip ayakta durarak çalışabilmektedir. Bu durum hangi ölümcül güvenlik açığını doğurur ve nasıl engellenir?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Hiçbir sorun olmaz, operatör içerideyken ışık perdesi çalışmaz.
      <div class="test-cevap">YANLIŞ. Işık perdesi sadece geçiş anını görür, arkasında duran kişiyi göremez!</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Bu durum "Arkada Kalma / Kör Nokta (Standing Behind)" tehlikesidir. Başka bir operatör ışık perdesinin önünü boş görüp start butonuna basarsa içerideki kişi preste ezilerek hayatını kaybedebilir. Çözüm: Araya yatay emniyet ışınları (L-tipi perde), emniyet matı (paspass) veya lazer alan tarayıcı konulmalı ya da manuel reset butonu sadece içeriyi tam gören dış bir noktaya konulmalıdır.
      <div class="test-cevap">DOĞRU. Işık perdesi ile tehlike arasında insan sığacak boşluk varsa mutlaka kör nokta koruması (Presence Sensing Device) eklenmelidir.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Operatöre düdük verilmelidir.
      <div class="test-cevap">YANLIŞ. Emniyet standartlarında düdük bir koruma yöntemi değildir.</div>
    </div>
  </div>

  <div class="test-soru">
    <p><strong>Soru 3 (Çit Açıklığı ve Mesafe Kuralı):</strong> Bir makine muhafazasında motorun soğuması için saçta 15 mm genişliğinde dikey havalandırma yarıkları (slot) açılmıştır. Tehlikeli dönen kayış kasnak bu yarıkların 150 mm gerisindedir. ISO 13857 standardına göre bu tasarım uygun mudur?</p>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      A) Evet, 150 mm parmak girmesi için yeterince uzaktır.
      <div class="test-cevap">YANLIŞ. 15 mm'lik yarıkta el bileğe kadar girer.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      B) Kesinlikle UYGUN DEĞİLDİR! ISO 13857'ye göre açıklığı 12 mm ile 20 mm arasında olan boyuna yarıklarda (slot) insan eli yan çevrilerek uzanabildiği için gerekli minimum güvenlik mesafesi s<sub>r</sub> ≥ 850 mm olmalıdır! 150 mm mesafe ölümcül derecede yetersizdir. Çözüm: Yarıklar yerine delik çapı e ≤ 6 mm olan delikli sac kullanılmalı veya mesafe 850 mm'ye çekilmelidir.
      <div class="test-cevap">DOĞRU. Yarıklar elin derinlemesine girmesine izin verir. 15 mm yarık için standart 850 mm mesafe şart koşar.</div>
    </div>
    <div class="test-secenek" onclick="this.classList.toggle('acik')">
      C) Yarıkların kenarına conta takılırsa uygundur.
      <div class="test-cevap">YANLIŞ. Conta elin girmesini engellemez.</div>
    </div>
  </div>
</div>
`
});
