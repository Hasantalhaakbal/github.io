const moods = [
    {
        name: "Mutlu",
        hadiths: [
            "Mümin, bal arısına benzer. İyi ve temiz olandan yer, iyi ve temiz olan üretir, iyi ve temiz olan yere konar. Hiçbir şeyi kırıp dökmez.",
            "Müminin yüzünde tebessüm, sadakadır.",
            "Güzel söz sadakadır."
        ],
        proverbs: [
            "Gülü seven dikenine katlanır.",
            "Neşe, sağlığın anahtarıdır.",
            "Gülü seven gül kokar."
        ]
    },
    {
        name: "Üzgün",
        hadiths: [
            "Allah'ım! Üzüntüden ve kederden sana sığınırım. Acizlikten ve tembellikten sana sığınırım. Korkaklıktan ve cimrilikten sana sığınırım.",
            "Her zorlukla beraber bir kolaylık vardır.",
            "Allah'ın rahmetinden ümit kesmeyin."
        ],
        proverbs: [
            "Güneş girmeyen eve doktor girer.",
            "Her şeyin bir vakti var.",
            "Gam dağına çıkmayan, sevincin tadını bilmez."
        ]
    },
    {
        name: "Endişeli",
        hadith: "Allah'ım! Korku ve endişeden sana sığınırım. Güçsüzlükten ve tembellikten sana sığınırım. Cimrilikten ve korkaklıktan sana sığınırım.",
        proverb: "Korkunun ecele faydası yoktur."
    },
    {
        name: "Huzurlu",
        hadith: "Allah'ım! Senden huzur ve sükunet istiyorum. Kalbimi huzurla doldur.",
        proverb: "Huzur içinde yaşamak, dünyanın en büyük zenginliğidir."
    },
    {
        name: "Öfkeli",
        hadith: "Güçlü kimse, öfkelendiğinde kendini tutabilen kimsedir.",
        proverb: "Öfke ile kalkan zararla oturur."
    },
    {
        name: "Yorgun",
        hadith: "Allah'ım! Tembellikten ve güçsüzlükten sana sığınırım.",
        proverb: "İşleyen demir pas tutmaz."
    },
    {
        name: "Heyecanlı",
        hadith: "Allah'ım! Kalbimi heyecanla doldur ve beni doğru yola ilet.",
        proverb: "Heyecan, başarının anahtarıdır."
    },
    {
        name: "Kızgın",
        hadith: "Öfkenizi yutun, affedin ve bağışlayın.",
        proverb: "Kızgınlık geçici bir deliliktir."
    },
    {
        name: "Şükredici",
        hadith: "Şükreden kul, nimeti artırır.",
        proverb: "Şükür, nimetin artmasına sebeptir."
    },
    {
        name: "Sabırsız",
        hadith: "Sabır, imanın yarısıdır.",
        proverb: "Sabır acıdır, meyvesi tatlıdır."
    },
    {
        name: "Umutlu",
        hadith: "Allah'ın rahmetinden ümit kesmeyin.",
        proverb: "Umut, hayatın tuzudur."
    },
    {
        name: "Korkulu",
        hadith: "Allah'tan başkasından korkmayın.",
        proverb: "Korku, akıllı adamın düşmanıdır."
    },
    {
        name: "Minettar",
        hadith: "İnsanlara teşekkür etmeyen, Allah'a da şükretmez.",
        proverb: "Minnet, altın bir kafestir."
    },
    {
        name: "Merhametli",
        hadith: "Merhamet edenlere Allah da merhamet eder.",
        proverb: "Merhamet, en yüce erdemdir."
    },
    {
        name: "Şefkatli",
        hadith: "Şefkat, imanın bir parçasıdır.",
        proverb: "Şefkat, kalbin dilidir."
    },
    {
        name: "Cesur",
        hadith: "Allah'ım! Korkaklıktan sana sığınırım.",
        proverb: "Cesaret, başarının anahtarıdır."
    },
    {
        name: "Kararlı",
        hadith: "Kararlı olan, başarıya ulaşır.",
        proverb: "Kararlılık, zaferin yarısıdır."
    },
    {
        name: "Vefalı",
        hadith: "Vefa, imanın bir parçasıdır.",
        proverb: "Vefa, dostluğun temelidir."
    },
    {
        name: "Cömert",
        hadith: "Cömert, Allah'a yakındır.",
        proverb: "Cömertlik, yoksulluğun ilacıdır."
    },
    {
        name: "Alçakgönüllü",
        hadith: "Alçakgönüllülük, imanın bir parçasıdır.",
        proverb: "Alçakgönüllülük, yüceliğin başlangıcıdır."
    },
    {
        name: "Affedici",
        hadith: "Affetmek, en büyük erdemdir.",
        proverb: "Affetmek, güçlünün işidir."
    },
    {
        name: "Sabırlı",
        hadith: "Sabır, imanın yarısıdır.",
        proverb: "Sabır, acıdır ama meyvesi tatlıdır."
    },
    {
        name: "Şükranlı",
        hadith: "Şükreden kul, nimeti artırır.",
        proverb: "Şükran, nimetin artmasına sebeptir."
    },
    {
        name: "Müteşekkir",
        hadith: "İnsanlara teşekkür etmeyen, Allah'a da şükretmez.",
        proverb: "Teşekkür, minnetin ifadesidir."
    },
    {
        name: "Fedakar",
        hadith: "Fedakarlık, imanın bir parçasıdır.",
        proverb: "Fedakarlık, sevginin en yüksek ifadesidir."
    },
    {
        name: "Dürüst",
        hadith: "Dürüstlük, imanın bir parçasıdır.",
        proverb: "Dürüstlük, en iyi politikadır."
    },
    {
        name: "Adil",
        hadith: "Adalet, mülkün temelidir.",
        proverb: "Adalet, her şeyin temelidir."
    },
    {
        name: "Hoşgörülü",
        hadith: "Hoşgörü, imanın bir parçasıdır.",
        proverb: "Hoşgörü, erdemlerin en yücesidir."
    },
    {
        name: "Vefakar",
        hadith: "Vefa, imanın bir parçasıdır.",
        proverb: "Vefa, dostluğun temelidir."
    },
    {
        name: "Merhametli",
        hadith: "Merhamet edenlere Allah da merhamet eder.",
        proverb: "Merhamet, en yüce erdemdir."
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

// Random sayı üreten yardımcı fonksiyon
function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

// Seçilen ruh halinin detaylarını göster
function showMoodDetails(mood) {
    const resultContainer = document.getElementById('resultContainer');
    const selectedMood = document.getElementById('selectedMood');
    const hadith = document.getElementById('hadith');
    const proverb = document.getElementById('proverb');

    selectedMood.textContent = mood.name;
    
    // Random hadis ve atasözü seç
    const randomHadithIndex = getRandomIndex(mood.hadiths);
    const randomProverbIndex = getRandomIndex(mood.proverbs);
    
    hadith.textContent = mood.hadiths[randomHadithIndex];
    proverb.textContent = mood.proverbs[randomProverbIndex];

    resultContainer.style.display = 'block';
    resultContainer.scrollIntoView({ behavior: 'smooth' });
} 