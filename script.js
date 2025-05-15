const moods = [
    {
        name: "Mutlu",
        hadiths: [
            "Gerçek zenginlik, mal çokluğu değil; gönül tokluğudur.(Buhârî, Rikak 15; Müslim, Zekât 120)",
            "Müminin hâli ne hoştur! Çünkü onun her işi hayırdır. Bu durum sadece mümine mahsustur: Başına bir sevinç gelirse şükreder, bu onun için hayır olur. Başına bir sıkıntı gelirse sabreder, bu da onun için hayır olur.( Müslim, Zühd 64)",
            "Allah bir kula hayır murat ettiğinde, onu dinde anlayışlı kılar.( Buhârî, İlim 10; Müslim, İmân 103)"

        ],
        proverbs: [
            "GERÇEK MUTLULU, NEFSİN ARZULADIKLARINDA DEĞİL, KALBİN ALLAHA YAKINLAŞMASINDADIR(İMAM GAZALİ)",
           " GERÇEK MUTLULUK DIŞARIDAN DEĞİL, İÇERİDEN GELİR, KALBİN HUZURU, RABBİNE YAKIN OLDUĞUN ZAMAN BAŞLAR(MEVLANA.)",
            "KUL, ALLAHA OLAN SEVGİSİ VE O NA İTAATİ ÖLÇÜSÜNDE GERÇEK MUTLULUĞU TADAR(İBN RECEB EL-HANBELİ.)"

        ]
    },
    {
        name: "Üzgün",
        hadiths: [
           "Müminin başına gelen yorgunluk, hastalık, endişe, üzüntü, keder ve hatta ayağına batan bir diken bile; Allah, bunların hepsiyle onun günahlarını bağışlar.(Buhârî, Merdâ 1; Müslim, Birr 49)",
            "Allah'ım! Senden üzüntü ve kederden sana sığınırım...(Ebû Dâvûd, Salât 367; Nesâî, İstiâze 12)"
            "Allah Teâlâ şöyle buyurur: 'Ben, kulumun kulum hakkımdaki zannı üzereyim. O, Beni andığında onunla beraberim.( Buhârî, Tevhîd 15; Müslim, Zikir 2)"
        ],
        proverbs: [
            "DÜNYANIN KEDERLERİ KALBİNİ SARDIĞINDA, BİLKİ RABBİN SENİ KENDİNE ÇAĞIRMAKTADIR(HASAN-I BASRİ.)",
             "KALBİN HÜZÜNLÜYSE, BİL Kİ ALLAH ONU HATIRLAMANI İSTEMİŞTİR(İMAMI ŞAFİİ.)",
            "HÜZÜN GELDİĞİNDE SABRET; ÇÜNKÜ HER HÜZÜN, ALLAHIN RAHMETİNE AÇILAN BİR KAPIDIR(ABDULKADİR GEYLANI HZ.)"
        ]
    },
    {
        name: "Nankör",
        hadiths: [
            "Güçlü kimse, öfkelendiğinde kendini tutabilen kimsedir.",
            "nankör",
            "nankör2"
            
        ],
        
        proverbs: [
            "SİZE NİMETLER GELDİĞİ ZAMAN ŞÜKRÜ AZ YAPARAK UZAKTAKİNİ DE KAÇIRMAYIN(HZ. ALİ)",
            "NİMETE ŞÜKRETMEYEN, ONU KAYBETMEYE EN YAKIN OLANDIR. NANKÖRLÜK, KALBİ KARARTAN BİR PERDEDİR(İBN KAYYİM EL-CEVZİYYE)",
            "NANKÖRLÜK, NİMETİN BAŞLANGICINDA BAŞLAR, KAYBI İSE SONUNDA GELİR(HZ. ALİ)"
        ]
    },
    {
        name: "Öfkeli",
        hadiths: [
            "Güçlü kimse, güreşte başkalarını yenen değil; öfkelendiği zaman nefsine hâkim olandır.(Sahih Buhârî, Edeb 76; Sahih Müslim, Birr 106)",
            "Sizden biri ayakta iken öfkelenirse, hemen otursun. Öfkesi geçmezse, uzansın. (Yer değiştirerek sakinleşmeye çalışsın.) ( Ebû Dâvûd, Edeb 3; Ahmed bin Hanbel, Müsned 5/152)",
            " Öfke şeytandandır. Şeytan ise ateşten yaratılmıştır. Ateş ancak su ile söndürülür. Sizden biri öfkelendiğinde hemen abdest alsın.(Ebû Dâvûd, Edeb 3; Ahmed bin Hanbel, Müsned 4/226)"
        ],
        proverbs: [
            "ÖFKE, AKLIN ZİNCİRİDİR.ÖFKELENDİĞİNDE DİLİNİ TUT VE KALBİNİ SOĞUT(HZ. ALİ)",
            "BİR GÖNÜL YIKMAK, KABEYİ YIKMAKTAN BETERDİR(SÜLEYMAN HİLMİ TUNAHAN.)",
            "KİŞİ DİLİNİN ALTINDA GİZLİDİR(HZ. ALİ)"
        
        ]
    },
    {
        name: "Korkulu",
        hadiths: [
            "Allah'tan başkasından korkmayın.",
            "hadis2",
            "hadis3"
        ],
        proverbs: [
            "BELA VAKTİNDE SIZLANMAK, FERYAD ETMEK, MİHNETİ (SIKINTIYI) ARTTIRIR(HZ. ALİ)",
            "yazı2",
            "yazı3"
        ]

    },
    {
        name: "Cömert",
        hadiths: [
            "Cömert, Allah'a yakındır.",
            "hadis2",
            "hadis3"
        ],
        proverbs: [
            "CİMRİYİ,MALININ BİR FELAKET İLE YOK OLABİLECEĞİ VEYA VARİSE KALABİLECEĞİ İLE KORKUT(HZ.ALİ)",
             
            "yazı2",
            "yazı3"
        ]
    },
    {
        name: "Adil",
        hadiths: [
            "Cömert, Allah'a yakındır.",
            "hadis2",
            "hadis3"

        ],
        proverbs: [
            "ADALET,YÖNETİCİNİN SÜSÜ; ZULÜM İSE ÇÖKÜŞÜN BAŞLANGICIDIR. ADALETLE HÜKMEDEN, HALKIN DUASINI ALIR, RABBİN RIZASINI KAZANIR(ÖMER BİN ABDUL AZİZ)",
            "yazı2",
             "yazı3"

        ]
    },
    {
        name: "Sabırlı",
        hadiths: [
            "Sabır, imanın yarısıdır.",
            "hadis2",
            "hadis3"

        ],
        proverbs: [
            "SABIR,GÖNLÜN ALLAHA TAM TESLİMİYETİDİR(SÜLEYMAN HİLMİ TUNAHAN.)",
            "yazı2",
            "yazı3"

        ]
    },
    {
        name: "Gaflet",
        hadiths: [
            "Merhamet edenlere Allah da merhamet eder.",
            "hadis2",
            "hadis3"

        ],
        proverbs: [
            "İNSANLAR UYKUDADIRLAR ANCAK ÖLDÜKLERİNDE UYANIRLAR(HZ. ALİ).",
            "yazı2",
             "yazı3"

        ]
    },
    {
        name: "Yorgun",
        hadiths: [
            "Fedakarlık, imanın bir parçasıdır.",
            "hadis2",
             "hadis3"

        ],
        proverbs: [
            "DÜNYADA BİRAZ YORUL; ÇÜNKÜ EDEBİ İSTİRAHAT, AHİRETTEDİR(İMAM AHMED BİN HAMBEL)",
            "yazı2",
            "yazı3"

        ]
    },
    {
        name: "Cimri",
        hadiths: [
            "Fedakarlık, imanın bir parçasıdır.",
            "hadis2",
            "hadis3"

        ],
        proverbs: [
            "CİMRİLİK, AYIPLARIN BÜTÜN KÖTÜLÜKLERİNİ KENDİSİNDE TOPLAR(HZ. ALİ)",
            "yazı2",
            "yazı3"

        ]
    },
    {
        name: "Merhametli",
        hadiths: [
            "Merhamet edenlere Allah da merhamet eder.",
            "hadis2",
            "hadis3"

        ],
        proverbs: [
            " DÜŞMANINI MAĞLUP ETTİĞN VAKİT, ZAFERİNE ŞÜKÜR OLARAK ONU AFFET(HZ. ALİ)",
            "yazı2",
            "yazı3"

        ]
    }

];

// Ruh hallerini grid'e ekle
const moodGrid = document.getElementById('moodGrid');
moods.forEach(mood => {
    const moodItem = document.createElement('div');
    moodItem.className = 'mood-item';
    moodItem.textContent = mood.name;
    moodItem.addEventListener('click', () => showMoodDetails(mood));
    moodGrid.appendChild(moodItem);
});

// Seçilen ruh halinin detaylarını göster
function showMoodDetails(mood) {
    const resultContainer = document.getElementById('resultContainer');
    const selectedMood = document.getElementById('selectedMood');
    const hadith = document.getElementById('hadith');
    const proverb = document.getElementById('proverb');

    // Rastgele bir hadis ve atasözü seç
    const randomhadith = mood.hadiths[Math.floor(Math.random() * mood.hadiths.length)];
    const randomProverb = mood.proverbs[Math.floor(Math.random() * mood.proverbs.length)];

    selectedMood.textContent = mood.name;
    hadith.textContent = randomhadith;
    proverb.textContent = randomProverb;

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
} 
