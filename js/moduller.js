// Modül ve bölüm planı. İçeriği yazılmamış bölümler arayüzde "Yakında" olarak görünür.
KITAP.moduller = [
  {
    id: 'm1', no: 1, baslik: 'Malzeme Bilgisi',
    ozet: 'Çelikler, dökme demirler, alüminyum, plastikler, ısıl işlemler, kaplamalar ve korozyon. Bir parçaya "hangi malzeme?" sorusunu gerekçesiyle cevaplayabilmek.',
    hedefler: [
      'Malzeme kodlarını (S235JR, 42CrMo4, X5CrNi18-10, 1.2379…) okuyup yorumlayabilmek',
      'Mukavemet ile rijitlik arasındaki farkı kavrayıp doğru kararı verebilmek',
      'Hangi parçada hangi çelik, alüminyum veya plastiğin seçileceğini bilmek',
      'Isıl işlem ve yüzey işlemini teknik resimde doğru belirtebilmek',
      'Galvanik korozyon gibi sahada sık görülen hatalardan kaçınmak'
    ],
    bolumler: [
      { id: '1-1', baslik: 'Mekanik Özellikler: Malzemeyi Tanımanın Dili' },
      { id: '1-2', baslik: 'Çelik İsimlendirme Sistemi (EN 10027)' },
      { id: '1-3', baslik: 'Yapı ve İmalat Çelikleri' },
      { id: '1-4', baslik: 'Takım Çelikleri' },
      { id: '1-5', baslik: 'Paslanmaz Çelikler' },
      { id: '1-6', baslik: 'Dökme Demirler' },
      { id: '1-7', baslik: 'Alüminyum Alaşımları' },
      { id: '1-8', baslik: 'Bakır Alaşımları ve Diğer Metaller' },
      { id: '1-9', baslik: 'Mühendislik Plastikleri' },
      { id: '1-10', baslik: 'Isıl İşlemler' },
      { id: '1-11', baslik: 'Yüzey İşlemleri ve Kaplamalar' },
      { id: '1-12', baslik: 'Korozyon ve Galvanik Uyumsuzluk' },
      { id: '1-13', baslik: 'Malzeme Seçim Rehberi ve Sık Yapılan Hatalar' }
    ]
  },
  {
    id: 'm2', no: 2, baslik: 'İmalat Yöntemleri ve DFM',
    ozet: 'Çizdiğin parçanın atölyede nasıl üretileceğini bilmek: talaşlı imalat, sac, kaynak, döküm, erozyon, 3D baskı ve maliyet odaklı tasarım.',
    hedefler: [
      'Parçanın hangi tezgahta, nasıl bağlanarak işleneceğini öngörebilmek',
      'Maliyeti gereksiz artıran detaylardan kaçınmak',
      'Sac ve kaynaklı parçaları üretilebilir şekilde tasarlamak'
    ],
    bolumler: [
      { id: '2-1', baslik: 'Talaşlı İmalata Giriş: Torna ve Freze' },
      { id: '2-2', baslik: 'CNC İşlemeye Uygun Tasarım' },
      { id: '2-3', baslik: 'Taşlama, Honlama ve Hassas İşlemler' },
      { id: '2-4', baslik: 'Tel ve Dalma Erozyon' },
      { id: '2-5', baslik: 'Sac Metal: Lazer Kesim ve Büküm' },
      { id: '2-6', baslik: 'Kaynaklı İmalat ve Kaynak Tasarımı' },
      { id: '2-7', baslik: 'Döküm ve Dövme' },
      { id: '2-8', baslik: 'Eklemeli İmalat (3D Baskı)' },
      { id: '2-9', baslik: 'Ham Malzeme Formları ve Stok Ölçüleri' },
      { id: '2-10', baslik: 'Maliyet Odaklı Tasarım' }
    ]
  },
  {
    id: 'm3', no: 3, baslik: 'Teknik Resim ve Toleranslar',
    ozet: 'Genel toleranslar, geçmeler, GD&T, yüzey pürüzlülüğü, tolerans zinciri ve montaj resimleri.',
    hedefler: [
      'Doğru geçmeyi (H7/g6, H7/k6, H7/p6…) seçebilmek',
      'GD&T sembollerini doğru ve gerektiği kadar kullanmak',
      'Tolerans zinciri analizi ile montaj problemlerini önceden görmek'
    ],
    bolumler: [
      { id: '3-1', baslik: 'Teknik Resim Kuralları ve Görünüşler' },
      { id: '3-2', baslik: 'Genel Toleranslar (ISO 2768)' },
      { id: '3-3', baslik: 'ISO Tolerans Sistemi ve Geçmeler' },
      { id: '3-4', baslik: 'Rulman, Pim ve Burç Geçmeleri' },
      { id: '3-5', baslik: 'Geometrik Toleranslar (GD&T): Temeller' },
      { id: '3-6', baslik: 'Datum Mantığı ve Konum Toleransı' },
      { id: '3-7', baslik: 'Yüzey Pürüzlülüğü' },
      { id: '3-8', baslik: 'Tolerans Zinciri Analizi' },
      { id: '3-9', baslik: 'Kaynak Sembolleri' },
      { id: '3-10', baslik: 'Montaj Resmi ve Malzeme Listesi (BOM)' }
    ]
  },
  {
    id: 'm4', no: 4, baslik: 'Makine Elemanları',
    ozet: 'Cıvatalar, pimler, miller, rulmanlar, dişliler, kayış-kasnak, zincir, kaplinler, redüktörler ve yaylar: hangisi, ne zaman, neden?',
    hedefler: [
      'Doğru rulman tipini ve yataklama düzenini seçebilmek',
      'Dişli, kayış ve zincir arasında gerekçeli karar verebilmek',
      'Bağlantı elemanlarını doğru boyutlandırıp gevşemeyi önleyebilmek'
    ],
    bolumler: [
      { id: '4-1', baslik: 'Cıvata ve Somunlar: Sınıflar ve Standartlar' },
      { id: '4-2', baslik: 'Sıkma Torku ve Ön Gerilme' },
      { id: '4-3', baslik: 'Gevşeme Önleme Yöntemleri' },
      { id: '4-4', baslik: 'Pimler, Segmanlar ve Kamalar' },
      { id: '4-5', baslik: 'Mil-Göbek Bağlantıları' },
      { id: '4-6', baslik: 'Miller ve Mil Tasarımı' },
      { id: '4-7', baslik: 'Rulman Tipleri' },
      { id: '4-8', baslik: 'Rulman Yataklama Düzenleri' },
      { id: '4-9', baslik: 'Rulman Ömrü ve Seçimi' },
      { id: '4-10', baslik: 'Yataklı Üniteler ve Kaymalı Yataklar' },
      { id: '4-11', baslik: 'Dişliler' },
      { id: '4-12', baslik: 'Kayış-Kasnak Sistemleri' },
      { id: '4-13', baslik: 'Zincir Sistemleri' },
      { id: '4-14', baslik: 'Dişli mi, Kayış mı, Zincir mi?' },
      { id: '4-15', baslik: 'Kaplinler' },
      { id: '4-16', baslik: 'Redüktörler' },
      { id: '4-17', baslik: 'Yaylar' },
      { id: '4-18', baslik: 'Fren, Kavrama ve Tork Limitörleri' }
    ]
  },
  {
    id: 'm5', no: 5, baslik: 'Lineer Hareket Sistemleri',
    ozet: 'Profil raylar, mil-burç, bilyalı ve trapez vidalar, kayışlı eksenler, kremayer-pinyon ve hazır lineer modüller.',
    hedefler: [
      'Uygulamaya göre doğru lineer kılavuz ve tahrik tipini seçmek',
      'Katalogdan yük, moment ve ömür kontrolü yapabilmek'
    ],
    bolumler: [
      { id: '5-1', baslik: 'Lineer Kılavuzlama Prensipleri' },
      { id: '5-2', baslik: 'Profil Raylı Lineer Kılavuzlar' },
      { id: '5-3', baslik: 'Mil-Burç Sistemleri' },
      { id: '5-4', baslik: 'Bilyalı Vidalı Miller' },
      { id: '5-5', baslik: 'Trapez Vidalı Miller' },
      { id: '5-6', baslik: 'Kayışlı Lineer Eksenler' },
      { id: '5-7', baslik: 'Kremayer-Pinyon' },
      { id: '5-8', baslik: 'Hazır Lineer Modüller' },
      { id: '5-9', baslik: 'Lineer Sistem Seçim Rehberi' }
    ]
  },
  {
    id: 'm6', no: 6, baslik: 'Tahrik: Motorlar, Pnömatik, Vakum',
    ozet: 'Hareket profili, atalet ve tork hesabı, motor ve redüktör seçimi; pnömatik silindir ve valfler, vakum tutucular.',
    hedefler: [
      'Servo veya step motoru hesapla boyutlandırabilmek',
      'Pnömatik silindir ve vakum sistemini seçebilmek',
      'Elektrikli ve pnömatik çözüm arasında karar verebilmek'
    ],
    bolumler: [
      { id: '6-1', baslik: 'Hareket Profili ve Kinematik' },
      { id: '6-2', baslik: 'Yük, Atalet ve Tork Hesabı' },
      { id: '6-3', baslik: 'AC Asenkron Motor ve Sürücüler' },
      { id: '6-4', baslik: 'Step Motorlar' },
      { id: '6-5', baslik: 'Servo Motorlar' },
      { id: '6-6', baslik: 'Motor ve Redüktör Boyutlandırma Örneği' },
      { id: '6-7', baslik: 'Pnömatiğe Giriş ve Hava Hazırlama' },
      { id: '6-8', baslik: 'Pnömatik Silindirler' },
      { id: '6-9', baslik: 'Pnömatik Valfler ve Devreler' },
      { id: '6-10', baslik: 'Vakum Teknolojisi' },
      { id: '6-11', baslik: 'Hidroliğin Temelleri' },
      { id: '6-12', baslik: 'Elektrikli mi, Pnömatik mi?' }
    ]
  },
  {
    id: 'm7', no: 7, baslik: 'Otomasyon Mekanizmaları',
    ozet: 'Konveyörler, tutucular, fikstürler, kamlar, indeksleme tablaları, parça besleyiciler ve pick & place sistemleri.',
    hedefler: [
      '3-2-1 prensibiyle fikstür tasarlayabilmek',
      'Uygulamaya uygun konveyör ve besleme sistemini seçmek',
      'Çevrim süresi (cycle time) analizi yapabilmek'
    ],
    bolumler: [
      { id: '7-1', baslik: 'Konveyör Sistemleri' },
      { id: '7-2', baslik: 'Gripper ve Tutucular' },
      { id: '7-3', baslik: 'Robot Uç İşlemcisi (EOAT)' },
      { id: '7-4', baslik: 'Fikstür Tasarımı ve 3-2-1 Prensibi' },
      { id: '7-5', baslik: 'Poka-Yoke' },
      { id: '7-6', baslik: 'Kam Mekanizmaları' },
      { id: '7-7', baslik: 'İndeksleme Sistemleri' },
      { id: '7-8', baslik: 'Parça Besleme Sistemleri' },
      { id: '7-9', baslik: 'Pick & Place ve Kartezyen Sistemler' },
      { id: '7-10', baslik: 'Çevrim Süresi Analizi' }
    ]
  },
  {
    id: 'm8', no: 8, baslik: 'Şase ve Konstrüksiyon',
    ozet: 'Sigma profil sistemleri, kaynaklı şaseler, rijitlik, titreşim, ayarlanabilir tasarım ve koruyucu muhafazalar.',
    hedefler: [
      'Profil mi kaynaklı şase mi kararını verebilmek',
      'Montajda ayar ve hizalama imkanı bırakan tasarım yapabilmek'
    ],
    bolumler: [
      { id: '8-1', baslik: 'Alüminyum Sigma Profil Sistemleri' },
      { id: '8-2', baslik: 'Kaynaklı Çelik Şaseler' },
      { id: '8-3', baslik: 'Rijitlik ve Titreşim' },
      { id: '8-4', baslik: 'Ayarlanabilir Tasarım ve Hizalama' },
      { id: '8-5', baslik: 'Makine Ayakları, Taşıma ve Yerleşim' },
      { id: '8-6', baslik: 'Koruyucu Muhafazalar' }
    ]
  },
  {
    id: 'm9', no: 9, baslik: 'Mühendislik Hesapları',
    ozet: 'Statik, gerilme, sehim, yorulma, cıvata, mil, kayış ve dişli hesapları; FEA ne zaman güvenilir?',
    hedefler: [
      'Kritik parçaları el hesabıyla kontrol edebilmek',
      'FEA sonuçlarını sorgulayabilmek'
    ],
    bolumler: [
      { id: '9-1', baslik: 'Statik ve Serbest Cisim Diyagramı' },
      { id: '9-2', baslik: 'Gerilme Türleri ve Emniyet Katsayısı' },
      { id: '9-3', baslik: 'Sehim Hesabı' },
      { id: '9-4', baslik: 'Yorulma' },
      { id: '9-5', baslik: 'Cıvata Hesabı' },
      { id: '9-6', baslik: 'Mil Hesabı' },
      { id: '9-7', baslik: 'Kayış ve Dişli Hesabı' },
      { id: '9-8', baslik: 'Sonlu Elemanlar Analizi (FEA) Temelleri' }
    ]
  },
  {
    id: 'm10', no: 10, baslik: 'Makine Emniyeti ve Standartlar',
    ozet: 'CE, (EU) 2023/1230 Makine Yönetmeliği, risk değerlendirmesi, güvenlik mesafeleri, koruyucular, ISO 13849 ve robot güvenliği.',
    hedefler: [
      'Tasarımı emniyet standartlarına uygun yapabilmek',
      'Risk değerlendirmesi sürecine katkı verebilmek'
    ],
    bolumler: [
      { id: '10-1', baslik: 'CE ve (EU) 2023/1230 Makine Yönetmeliği' },
      { id: '10-2', baslik: 'Risk Değerlendirmesi (ISO 12100)' },
      { id: '10-3', baslik: 'Güvenlik Mesafeleri (ISO 13857)' },
      { id: '10-4', baslik: 'Koruyucular ve Kilitleme (ISO 14120, ISO 14119)' },
      { id: '10-5', baslik: 'Fonksiyonel Güvenlik (ISO 13849)' },
      { id: '10-6', baslik: 'Robot ve Kobot Güvenliği' }
    ]
  },
  {
    id: 'm11', no: 11, baslik: 'CATIA ve Tasarım Metodolojisi',
    ozet: 'Top-down montaj, parametrik tasarım, Knowledgeware, standart parça kütüphaneleri, DMU Kinematics, BOM ve PDM/PLM.',
    hedefler: [
      'Büyük montajları düzenli ve değişime dayanıklı kurabilmek',
      'Tekrarlayan işleri parametrik yapılarla hızlandırmak'
    ],
    bolumler: [
      { id: '11-1', baslik: 'Part Design: İleri Teknikler' },
      { id: '11-2', baslik: 'Montaj Yapısı ve Top-Down Tasarım' },
      { id: '11-3', baslik: 'Parametrik Tasarım ve Knowledgeware' },
      { id: '11-4', baslik: 'Standart Parça Kütüphaneleri' },
      { id: '11-5', baslik: 'DMU Kinematics ve Çakışma Analizi' },
      { id: '11-6', baslik: 'Teknik Resim (Drafting) Verimliliği' },
      { id: '11-7', baslik: 'BOM, Revizyon ve PDM/PLM' }
    ]
  },
  {
    id: 'm12', no: 12, baslik: 'Proje Süreci ve Endüstri Pratiği',
    ozet: 'Şartnameden konsepte, DFMEA, katalog okuma, montaj dostu tasarım, sensör yerleşimi, kablo yönetimi, maliyet ve devreye alma.',
    hedefler: [
      'Bir otomasyon projesini baştan sona yönetebilmek',
      'Elektrik ve yazılım ekibiyle sorunsuz çalışmak'
    ],
    bolumler: [
      { id: '12-1', baslik: 'Şartnameden Konsepte' },
      { id: '12-2', baslik: 'Konsept Değerlendirme' },
      { id: '12-3', baslik: 'DFMEA' },
      { id: '12-4', baslik: 'Katalog Okuma ve Tedarikçi Seçimi' },
      { id: '12-5', baslik: 'Montaj ve Bakım Dostu Tasarım' },
      { id: '12-6', baslik: 'Sensör Yerleşimi ve Mekatronik Arayüz' },
      { id: '12-7', baslik: 'Kablo Yönetimi ve Enerji Zincirleri' },
      { id: '12-8', baslik: 'Maliyet Tahmini' },
      { id: '12-9', baslik: 'Devreye Alma ve Geri Bildirim' }
    ]
  }
];
