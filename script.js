const moods = [
    {
        name: "Mutlu",
        hadiths: [
            "Müminin durumu şaşırtıcıdır. Çünkü her hali onun için hayırlıdır. Eğer bir iyilik yaparsa şükreder, bu ona hayır olur. Eğer bir sıkıntıya düşerse sabreder, bu da ona hayır olur.",
            "Mümin, bal arısına benzer. İyi ve temiz olandan yer, iyi ve temiz üretir, iyi ve temiz yere konar.",
            "Mümin, yaprağı düşmeyen bir ağaç gibidir."
        ],
        proverbs: [
            "Mutluluk, Allah'ın sana verdiği her şeyin kıymetini bilmektir(İMAMI GAZALİ)",
            "Mutluluk, kalbin Allah ile olan bağlantısıdır.",
            "Gerçek mutluluk, Allah'ın rızasını kazanmaktır."
        ]
    },
    {
        name: "Üzgün",
        hadiths: [
            "Allah'ım! Üzüntüden ve kederden sana sığınırım. Acizlikten ve tembellikten sana sığınırım. Korkaklıktan ve cimrilikten sana sığınırım.",
            "Üzüntü ve keder, imanın zayıflığındandır.",
            "Allah, üzüntüyü de sevinci de bir imtihan olarak yaratmıştır."
        ],
        proverbs: [
            "DÜNYANIN KEDERLERİ KALBİNİ SARDIĞINDA, BİLKİ RABBİN SENİ KENDİNE ÇAĞIRMAKTADIR(HASAN-I BASRİ.)",
            "Üzüntü, Allah'ın rahmetinin bir işaretidir.",
            "Keder, kalbin Allah'a olan özleminin bir göstergesidir."
        ]
    },
    {
        name: "Nankör",
        hadiths: [
            "Güçlü kimse, öfkelendiğinde kendini tutabilen kimsedir.",
            "nankör","nankör2","nankör3"
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
            "Güçlü kimse, öfkelendiğinde kendini tutabilen kimsedir.",
            "hadis2",
            "hadis3"
        ],
        proverbs: [
            "ÖFKE, AKLIN ZİNCİRİDİR.ÖFKELENDİĞİNDE DİLİNİ TUT VE KALBİNİ SOĞUT(HZ. ALİ)",
            "yazı2",
            "yazı3"
        
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
    const hadiths = document.getElementById('hadiths');
    const proverb = document.getElementById('proverb');

    // Rastgele bir hadis ve atasözü seç
    const randomhadiths = mood.hadiths[Math.floor(Math.random() * mood.hadiths.length)];
    const randomProverb = mood.proverbs[Math.floor(Math.random() * mood.proverbs.length)];

    selectedMood.textContent = mood.name;
    hadiths.textContent = randomhadiths;
    proverb.textContent = randomProverb;

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
} 