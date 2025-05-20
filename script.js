const moods = [
    {
        name: "İsteksiz",
        hadiths: [
            "Hiçbiriniz,arzu ettiği bir şey için tembellik etmesin.Allah'an istemeye devam etsin(Tirmizi,Zühd 60;Ahmed b.Hanbel,Müsned,3/28)",
            "Allahım Acizlikten,tembellikten,korkaklıktan,cimrilkten, ve ihtyarlığın kötülükleriden sana sığınırım(Buhârî, Daavât 38; Müslim, Zikir 50)",
            "Mümin güçlüdür; zayıf müminden daha hayırlı ve Allah’a daha sevimlidir. Ancak her ikisinde de hayır vardır. Sana faydalı olan şeye yönel, Allah’tan yardım dile ve acizlik gösterme.(Müslim, Kader 34)"
        ],
        proverbs: [
            "Öğrenmeye çalışan câhil, âlim gibidir. Kendini geliştirmeyen, düzenli bir çalışması olmayan tembel âlim de câhil gibidir.(Hz. Ali  r.a.)",
            "Dünya tasası kalbe zulmet getirir, âhiret tasası ise kalbi nurlandırır.(Hz. Osman  r.a.)",
            "Tembellik kalbi öldürür, çalışmak ise diriltir.(İmam Gazâlî (Rh.a.)"
        ]
    },
    {
        name: "Haksızlığa uğramış",
        hadiths: [
            "Kimin üzerine bir haksızlık (kul hakkı) varsa; dinar ve dirhemin bulunmayacağı (ahiret) günü gelmeden önce, onunla helalleşsin. Aksi takdirde, salih amelleri varsa, yaptığı haksızlık kadar alınır ve haksızlık yaptığı kişiye verilir. Eğer sevapları yoksa, mazlumun günahları alınır ve ona yüklenir.(Buhârî, Mezâlim, 10)",
            "Müminin başına gelen her sıkıntı, hatta ayağına batan bir diken bile, Allah onun günahlarını bağışlamaya vesile kılar.(Buhârî, Merdâ, 1; Müslim, Birr, 49)",
            "Bir kimse, haksız yere bir Müslümanın şerefini ayaklar altına alır ve ona iftira ederse; Allah da o kişiyi, cehennem köprülerinden geçerken rezil eder.(Ebû Dâvûd, Edeb 35; Ahmed b. Hanbel, Müsned, c. 2, s. 165)"
        ],
        proverbs: [
            "Mazlumun duasından sakının, çünkü onunla Allah arasında perde yoktur(Buhârî, Mezâlim 9)",
            "Kıyamet günü haklar ödeninceye kadar insanlar arasında hüküm verilir.(Sahîh-i Müslim, Birr 15; Tirmizî, Kıyâmet 2)",
            "Haksızlık edenin sevapları alınır, mazluma verilir.(Sahîh-i Buhârî, Mezâlim 10; Riyâzu’s-Sâlihîn)"
        ]
    },
    {
        name: "Anlaşılmamış",
        hadiths: [
            "Allah’tan başkasının rızasını gözeterek bir iş yapan kişi, Allah’ın gazabına uğrar. Allah için bir iş yapan kişiyse, insanlar kızsa da Allah onu korur.(İbn Hibbân, Sahîh, 276)",
            "Ameller niyetlere göredir. Herkesin niyeti neyse eline geçecek olan odur.(Sahîh-i Buhârî, Bed’ü’l-Vahy 1; Sahîh-i Müslim, İmâre 155)",
            "Müminin niyeti amelinden hayırlıdır. Münâfığın ameli ise niyetinden şerlidir. Herkes niyetine göre amel eder.(Beyhakî, Şuabü’l-İmân, c. 5, s. 342; Taberânî, el-Mu’cemü’l-Evsat, 6/156)"

        ],
        proverbs: [
            "Allah sizin suretlerinize ve mallarınıza bakmaz; kalplerinize ve amellerinize bakar.(Müslim, Birr 33; İbn Mâce, Zühd 9)",
            "Kim Allah’tan başkası için yaparsa, o kişi Allah katında makbul değildir.(Nesaî, Cihâd 24; Ahmed b. Hanbel, Müsned, 6/8)",
            "Kim insanların takdirini beklerse, Allah’ın rahmetinden mahrum kalır.(Hz. Ali (r.a) — Nehcü’l-Belâğa, Hikmetler Bölümü)"
        
        ]
    },
    {
        name: "Vazgeçmiş",
        hadiths: [
            "Kim Allah’a tevekkül etmekten vazgeçerse, kaybeder.(Tirmizî, Zühd 33; İbn Mâce, Zühd 14)",
            "Kim bir hayra niyet eder de vazgeçerse, ona bir sevap yazılır.(Sahîh-i Buhârî, Rikâk 31; Sahîh-i Müslim, İmân 207)",
            "Hiçbiriniz, ‘Artık dua ettim de kabul olunmadı’ diyerek dua etmekten vazgeçmesin.(Sahîh-i Buhârî, Daavât 22; Sahîh-i Müslim, Zikir 92)"
        ],
        proverbs: [
            "Kim bir şeyi Allah için terk ederse, Allah ona ondan daha hayırlısını verir.(Ahmed b. Hanbel, Müsned, 5/363; Beyhakî, Şuabü’l-İmân, 5/344)",
            "Allah için terk edilen her şey, yerini daha hayırlısıyla doldurur.(İmam İbn Kayyım el-Cevziyye, el-Fevâid, s. 166)",
            "Sen Allah’a yönel, dünya sana meyleder.(İmam Şafiî'ye nispet edilir – Mekârimu’l-Ahlâk ve Dîvânu’ş-Şâfiî)"
        ]

    },
    {
        name: "Yorulmuş",
        hadiths: [
           "Cömertlik, Allah’a yakınlıktır.Cimrilik ise, kişiyi Allah’tan uzaklaştıran bir durumdur.(Tirmizî, Zühd 25) ",
            "Allah, cömert olan kuluna rahmet eder. Eğer cömert olursa, Allah onu affeder ve ona genişlik verir.(Buhârî, Zekât 1)",
            "Her bir insanın cebinde iki şey vardır: Biri sadakadır, diğeri şükürdür. Allah, sadaka verenin karşılığını kat kat verir.(Tirmizî, Zekât 19)"
        ],
        proverbs: [
            "Cimriyi, Malının bir felaket ile yok olabileceğini veya varise kalabileceği ile korkurt (HZ .ALİ)",
            "Nimetlerin elden kaçmasından korkunuz, mallarınız israf etmeyiniz (HZ .ALİ)",
            "Cömert, Gönlün zenginliğidir. Malın artması, Cömert olur (HZ. ALİ)"
        ]
    },
    {
        name: "Yalnız Hisseden",
        hadiths: [
            " Adil olanlar, Allah katında nurdan minberler üzerinde olacaklardır. Bunlar; hem aileleri hem idare ettikleri insanlar hem de sorumlu oldukları konularda adaletle davrananlardır.(Müslim, İmâret 18)",
            " Üç kişi vardır ki, kıyamet günü Allah onları gölgesi altına alır: Adil yönetici, Rabbine ibadetle yetişen genç, yalnız kaldığında Allah’ı zikreden ve gözyaşı döken kimse.(Buhârî, Ezân 36; Müslim, Zekât 91)",
            "Kim bir Müslümanın hakkını almak için adaleti uygular ve taraf tutmadan hükmederse, Allah onu Cennet'in en yüksek derecesine çıkarır.(Taberânî, el - Mu’cemü’l - Kebîr 6 / 140)"

        ],
        proverbs: [
            "Adalet, yöneticinin süsü; Zulmün ise çöküşünün başlangıcıdır. Adalete hükeden, halkın duasını alır, Rabbin rızasını kazanır (Ömer Bin Abdul Aziz)",
            "Adalet, kalbin terazsisidir. Nefsine karşı adil olmayam, başkasına adaleti nasıl sağlayabilir (İmam Şafi)",
             "Adalet, insanlığın direğidir. O yıkılırsa, toplum çöker; Çünkü adalet olmadan düzen, Düzen olmadan huzur olmaz. (İbn Hazm)"
        ]
    },
    {
        name: "Baskı Altında",
        hadiths: [
            "Sabır, Musibetin başına geldiği ilk andadır. (Buhari, cenaiz32; Müslim, Cenaiz14)",
            "Sabır üçtür: Musibet anında sabır, ibadette sabır, günaha karşı sabır. (Beyhakî, Şuabü’l - Îmân, 7 / 125)",
            "Hiçbir kula, sabırdan daha hayırlı ve daha geniş kapsamlı bir nimet verilmemiştie. (Buhârî, Merdâ 9; Müslim, Zekât 76)"
        ],
        proverbs: [
            "Sabır, Gönlün Allaha tam Teslimiyetidir (SÜLEYMAN HİLMİ TUNAHAN.)",
            "Eğer sabır ve kanaati öğrenmek istiyorsan Hace Muhammed Zahidin sohbetine ve hizmetine sarıl (HACE DERVİŞ MEHMED KS.)",
            "Sabır, İmanın yarısıdır. Sabreden kişi, Allahın yardımına en yakın olandır (Ahmed Bİn Hambel)"
        ]
    },
    {
        name: "Kıyaslanmış",
        hadiths: [
            "Sabır, Musibetin başına geldiği ilk andadır. (Buhari, cenaiz32; Müslim, Cenaiz14)",
            "Sabır üçtür: Musibet anında sabır, ibadette sabır, günaha karşı sabır. (Beyhakî, Şuabü’l - Îmân, 7 / 125)",
            "Hiçbir kula, sabırdan daha hayırlı ve daha geniş kapsamlı bir nimet verilmemiştie. (Buhârî, Merdâ 9; Müslim, Zekât 76)"
        ],
        proverbs: [
            "Sabır, Gönlün Allaha tam Teslimiyetidir (SÜLEYMAN HİLMİ TUNAHAN.)",
            "Eğer sabır ve kanaati öğrenmek istiyorsan Hace Muhammed Zahidin sohbetine ve hizmetine sarıl (HACE DERVİŞ MEHMED KS.)",
            "Sabır, İmanın yarısıdır. Sabreden kişi, Allahın yardımına en yakın olandır (Ahmed Bİn Hambel)"
        ]
    },
    {
        name: "Öz Güvensiz",
        hadiths: [
            "Sabır, Musibetin başına geldiği ilk andadır. (Buhari, cenaiz32; Müslim, Cenaiz14)",
            "Sabır üçtür: Musibet anında sabır, ibadette sabır, günaha karşı sabır. (Beyhakî, Şuabü’l - Îmân, 7 / 125)",
            "Hiçbir kula, sabırdan daha hayırlı ve daha geniş kapsamlı bir nimet verilmemiştie. (Buhârî, Merdâ 9; Müslim, Zekât 76)"
        ],
        proverbs: [
            "Sabır, Gönlün Allaha tam Teslimiyetidir (SÜLEYMAN HİLMİ TUNAHAN.)",
            "Eğer sabır ve kanaati öğrenmek istiyorsan Hace Muhammed Zahidin sohbetine ve hizmetine sarıl (HACE DERVİŞ MEHMED KS.)",
            "Sabır, İmanın yarısıdır. Sabreden kişi, Allahın yardımına en yakın olandır (Ahmed Bİn Hambel)"
        ]
    },
    {
        name: "Dışlanmış",
        hadiths: [
            "Sabır, Musibetin başına geldiği ilk andadır. (Buhari, cenaiz32; Müslim, Cenaiz14)",
            "Sabır üçtür: Musibet anında sabır, ibadette sabır, günaha karşı sabır. (Beyhakî, Şuabü’l - Îmân, 7 / 125)",
            "Hiçbir kula, sabırdan daha hayırlı ve daha geniş kapsamlı bir nimet verilmemiştie. (Buhârî, Merdâ 9; Müslim, Zekât 76)"
        ],
        proverbs: [
            "Sabır, Gönlün Allaha tam Teslimiyetidir (SÜLEYMAN HİLMİ TUNAHAN.)",
            "Eğer sabır ve kanaati öğrenmek istiyorsan Hace Muhammed Zahidin sohbetine ve hizmetine sarıl (HACE DERVİŞ MEHMED KS.)",
            "Sabır, İmanın yarısıdır. Sabreden kişi, Allahın yardımına en yakın olandır (Ahmed Bİn Hambel)"
        ]
    },
    {
        name: "Umursamaz",
        hadiths: [
            "Sabır, Musibetin başına geldiği ilk andadır. (Buhari, cenaiz32; Müslim, Cenaiz14)",
            "Sabır üçtür: Musibet anında sabır, ibadette sabır, günaha karşı sabır. (Beyhakî, Şuabü’l - Îmân, 7 / 125)",
            "Hiçbir kula, sabırdan daha hayırlı ve daha geniş kapsamlı bir nimet verilmemiştie. (Buhârî, Merdâ 9; Müslim, Zekât 76)"
        ],
        proverbs: [
            "Sabır, Gönlün Allaha tam Teslimiyetidir (SÜLEYMAN HİLMİ TUNAHAN.)",
            "Eğer sabır ve kanaati öğrenmek istiyorsan Hace Muhammed Zahidin sohbetine ve hizmetine sarıl (HACE DERVİŞ MEHMED KS.)",
            "Sabır, İmanın yarısıdır. Sabreden kişi, Allahın yardımına en yakın olandır (Ahmed Bİn Hambel)"
        ]
    },
    {
        name: "Suçlanmış",
        hadiths: [
            "Sabır, Musibetin başına geldiği ilk andadır. (Buhari, cenaiz32; Müslim, Cenaiz14)",
            "Sabır üçtür: Musibet anında sabır, ibadette sabır, günaha karşı sabır. (Beyhakî, Şuabü’l - Îmân, 7 / 125)",
            "Hiçbir kula, sabırdan daha hayırlı ve daha geniş kapsamlı bir nimet verilmemiştie. (Buhârî, Merdâ 9; Müslim, Zekât 76)"
        ],
        proverbs: [
            "Sabır, Gönlün Allaha tam Teslimiyetidir (SÜLEYMAN HİLMİ TUNAHAN.)",
            "Eğer sabır ve kanaati öğrenmek istiyorsan Hace Muhammed Zahidin sohbetine ve hizmetine sarıl (HACE DERVİŞ MEHMED KS.)",
            "Sabır, İmanın yarısıdır. Sabreden kişi, Allahın yardımına en yakın olandır (Ahmed Bİn Hambel)"
        ]
    },
    {
        name: "Güvensiz",
        hadiths: [
            "Müminin başına gelen her yorgunluk, hastalık, tasa, üzüntü, eziyet ve keder — hatta ayağına batan bir diken bile — Allah tarafından onun günahlarına kefaret kılınır. (Buhârî, Merdâ 1; Müslim, Birr 49) ",
           "Hiçbir amel, bir mümine cehennemden daha uzak bir derece kazandırmaz ki; onunla yorgunluk, sıkıntı, meşakkat veya gam çekmiş olmasın.(Ahmed b. Hanbel, Müsned 5/24)",
            "İnsanlar sabahleyin kalkar ve nefislerini pazara sürerler: Kimi onu satar ve azat eder (kurtarır), kimi ise helâk eder.(Müslim, Müsâkat 107) "

        ],
        proverbs: [
            "Dünyada biraz yorul; Çünkü edebi istirahat, Ahirettedir (İMAM AHMED BİN HAMBEL)",
            "Kul, Rabbinin rızası için yorulduğunda, Bu yorgunluk rahmete dönüşür (İmam Gazali)",
             "Mümin, Akşam olduğunda yorgundur; Çünk ya bir hayır peşinde koşmuştur yada bir günaha karşı direnmiştir (Hasan-I Basri)"
        ]
    },

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
