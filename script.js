const moods = [
    {
        name: "Mutlu",
        hadiths: [
            "Gerçek zenginlik, mal çokluğu değil; gönül tokluğudur.(Buhârî, Rikak 15; Müslim, Zekât 120) ",
            "Müminin hâli ne hoştur! Çünkü onun her işi hayırdır.Bu durum sadece mümine mahsustur: Başına bir sevinç gelirse şükreder, bu onun için hayır olur.Başına bir sıkıntı gelirse sabreder, bu da onun için hayır olur.( Müslim, Zühd 64)",
            "ALLAH bir kula hayır murat ettiğinde, onu dinde anlayışlı kılar (Buhari, ilim 10; Müslim, İman 103)"
        ],
        proverbs: [
            "Mutluluk, Allah'ın sana verdiği her şeyin kıymetini bilmektir(İMAMI GAZALİ)",
            "Gerçek mutluluk dışarıdan değil, içeriden gelir, kalbin huzuru, rabbine yakın olduğu zaman başlar (MEVLANA.)",
            "Kul, Allaha olan sevgisi ve ona itaati ölçüsünde gerçek mutluluğu tadar (İBN RECEB EL- HANBELİ.)"
        ]
    },
    {
        name: "Üzgün",
        hadiths: [
            "Müminin başına gelen yorgunluk, hastalık, endişe, üzüntü, keder ve hatta ayağına batan bir diken bile; Allah, bunların hepsiyle onun günahlarını bağışlar.(Buhârî, Merdâ 1; Müslim, Birr 49) ",
            "Allah'ım! Senden üzüntü ve kederden sana sığınırım...(Ebû Dâvûd, Salât 367; Nesâî, İstiâze 12)",
            "Allah Teâlâ şöyle buyurur: 'Ben, kulumun kulum hakkımdaki zannı üzereyim. O, Beni andığında onunla beraberim.( Buhârî, Tevhîd 15; Müslim, Zikir 2)"
        ],
        proverbs: [
            "Dünyanın kederleri kalbini sardığında, bilki rabbin seni kendine  çağırmaktadır (Hasan-ı Basri.)",
            "Kalbin hüzünlüyse, bil ki ALLAH onu hatırlamanı istemiştir (İmamı şafii)",
            "Hüzün geldiğinde sabret; Çünkü her hüzün, Allahın rahmetine açılan bir kapıdır (Abdulkadir Geylani HZ.)"
        ]
    },
    {
        name: "Öfkeli",
        hadiths: [
            " Güçlü kimse, güreşte başkalarını yenen değil; öfkelendiği zaman nefsine hâkim olandır.(Sahih Buhârî, Edeb 76; Sahih Müslim, Birr 106)",
            "Sizden biri ayakta iken öfkelenirse, hemen otursun. Öfkesi geçmezse, uzansın. (Yer değiştirerek sakinleşmeye çalışsın.) ( Ebû Dâvûd, Edeb 3; Ahmed bin Hanbel, Müsned 5/152)",
            "Öfke şeytandandır. Şeytan ise ateşten yaratılmıştır. Ateş ancak su ile söndürülür. Sizden biri öfkelendiğinde hemen abdest alsın.(Ebû Dâvûd, Edeb 3; Ahmed bin Hanbel, Müsned 4/226)"

        ],
        proverbs: [
            "Öfke aklın zinciridir. Öfkelendiğinde dilini tut ve kalbini soğut (HZ:ALİ)",
            "Kişi dilinin altında gizlidir (HZ: ALİ)",
            "Bir gönül yıkmak, kabeyi yıkmaktan beterdir (SÜLEYMAN HİLMİ TUNAHAN HZ.)
        
        ]
    },
    {
        name: "Korkulu",
        hadiths: [
            "Kim bir şeyden korkarsa,hemen yola çıkar(tedbirini alır).Kim de yola çıkarsa, menziline ulaşır. Dikkat edin! Allah’ın malı kıymetlidir.Allah’ın malı cennettir.( Tirmizî Kıyâmet 60)",
            "Ümmetimden bir topluluk kıyamete kadar hak üzere olacaktır. Onlara karşı çıkanlar, onlara zarar veremeyecektir. Nihayet Allah’ın emri (kıyamet) gelinceye kadar onlar bu hâl üzere kalacaktır.(Buhârî, Fiten 27; Müslim, İmâre 175)",
            "Allah’tan hakkıyla korkun! Eğer bir dağın tepesinde bile olsanız, Allah rızası için doğruyu söyleyin. (İbn Mâce, Fiten 14)"
        ],
        proverbs: [
            "Bela vaktinde sızlanmak, feryad etmek, mihneti (sıkıntıyı) arttırır (HZ ALİ.)",
            "Korku, yalnızca allahtan olmalıdır; Çünkü Allahın iradesine boyun eğmek, Her türlü korkuyu ortadan kaldırır (İBN TEYMİYYE)",
            "Allaha olan güven, Kalpten korkuyu siler. Allaha tevekkül eden, her türlü korkudan kurtulur (İmam Gazali)"
        ]

    },
    {
        name: "Cömert",
        hadiths: [
           "Cömertlik, Allah’a yakınlıktır.Cimrilik ise, kişiyi Allah’tan uzaklaştıran bir durumdur.(Tirmizî, Zühd 25) ",
            "Allah, cömert olan kuluna rahmet eder. Eğer cömert olursa, Allah onu affeder ve ona genişlik verir.(Buhârî, Zekât 1)",
            "Her bir insanın cebinde iki şey vardır: Biri sadakadır, diğeri şükürdür. Allah, sadaka verenin karşılığını kat kat verir.(Tirmizî, Zekât 19)"
        ],
        proverbs: [
            "Cimriyi, Malının bir felaket ile yok olabileceğini veya varise kalabileceği ile korkurt (HZ .ALİ)",
            "Nimetlerin elden kaçmasından korkunuz, mallarınız israf etmeyiniz (HZ .ALİ),
            "Cömert, Gönlün zenginliğidir. Malın artması, Cömert olur (HZ. ALİ)
        ]
    },
    {
        name: "Adil",
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
        name: "Sabırlı",
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
        name: "Yorgun",
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
