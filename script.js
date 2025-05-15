const moods = [
    {
        name: "Mutlu",
        hadiths: [
            "Gerçek zenginlik, mal çokluğu değil; gönül tokluğudur.(Buhârî, Rikak 15; Müslim, Zekât 120) ",
            "Müminin hâli ne hoştur! Çünkü onun her işi hayırdır.Bu durum sadece mümine mahsustur: Başına bir sevinç gelirse şükreder, bu onun için hayır olur.Başına bir sıkıntı gelirse sabreder, bu da onun için hayır olur.( Müslim, Zühd 64)",
            "Allah bir kula hayır murat ettiğinde, onu dinde anlayışlı kılar.(Buhârî, İlim 10; Müslim, İmân 103) "
        ],
        proverbs: [
            "Mutluluk, Allah'ın sana verdiği her şeyin kıymetini bilmektir(İMAMI GAZALİ)",
            "GERÇEK MUTLULUK DIŞARIDAN DEĞİL, İÇERİDEN GELİR, KALBİN HUZURU, RABBİNE YAKIN OLDUĞUN ZAMAN BAŞLAR(MEVLANA.)",
            "KUL, ALLAHA OLAN SEVGİSİ VE O NA İTAATİ ÖLÇÜSÜNDE GERÇEK MUTLULUĞU TADAR(İBN RECEB EL - HANBELİ.)"
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
            "DÜNYANIN KEDERLERİ KALBİNİ SARDIĞINDA, BİLKİ RABBİN SENİ KENDİNE ÇAĞIRMAKTADIR(HASAN-I BASRİ.)",
            " KALBİN HÜZÜNLÜYSE, BİL Kİ ALLAH ONU HATIRLAMANI İSTEMİŞTİR(İMAMI ŞAFİİ.)",
            "HÜZÜN GELDİĞİNDE SABRET; ÇÜNKÜ HER HÜZÜN, ALLAHIN RAHMETİNE AÇILAN BİR KAPIDIR(ABDULKADİR GEYLANI HZ.)"
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
            "ÖFKE, AKLIN ZİNCİRİDİR.ÖFKELENDİĞİNDE DİLİNİ TUT VE KALBİNİ SOĞUT(HZ. ALİ)",
            "KİŞİ DİLİNİN ALTINDA GİZLİDİR(HZ. ALİ)",
            "BİR GÖNÜL YIKMAK, KABEYİ YIKMAKTAN BETERDİR(SÜLEYMAN HİLMİ TUNAHAN.)"
        
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
            "BELA VAKTİNDE SIZLANMAK, FERYAD ETMEK, MİHNETİ (SIKINTIYI) ARTTIRIR(HZ. ALİ)",
            "KORKU, YALNIZCA ALLAHTAN OLMALIDIR; ÇÜNKÜ ALLAHIN İRADESİNE BOYUN EĞMEK, HER TÜRLÜ KORKUYU ORTADAN KALDIRIR(İBN TEYMİYYE)",
            "ALLAHA OLAN GÜVEN, KALPTEN KORKUYU SİLER. ALLAHA TEVEKKÜL EDEN, HER TÜRLÜ KORKUDAN KURTULUR(İMAM GAZALİ)"
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
            "CİMRİYİ,MALININ BİR FELAKET İLE YOK OLABİLECEĞİ VEYA VARİSE KALABİLECEĞİ İLE KORKUT(HZ.ALİ)",
            "NİMETLERİN ELDN KAÇMASINDAN KORKUNUZ, MALLARINIZI İSRAF ETMEYİNİZ(HZ. ALİ)",
            "CÖMERTLİK, GÖNLÜN ZENGİNLİĞİDİR. MALIN ARTMASI, CÖMERTLİKLE OLUR(HZ. ALİ)"
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
            "ADALET,YÖNETİCİNİN SÜSÜ; ZULÜM İSE ÇÖKÜŞÜN BAŞLANGICIDIR. ADALETLE HÜKMEDEN, HALKIN DUASINI ALIR, RABBİN RIZASINI KAZANIR(ÖMER BİN ABDUL AZİZ)",
            "ADALET, KALBİN TERAZİSİDİR. NEFSİNE KARŞI ADİL OLMAYAN, BAŞKASINA ADALETİ NASIL SAĞLAYABİLİR?(İMAM ŞAFİ)",
             "ADALET, İNSANLIĞIN DİREĞİDİR. O YIKILIRSA, TOPLUM ÇÖKER; ÇÜNKÜ ADLET OLMADAN DÜZEN, DÜZEN OLMADAN HUZUR OLMAZ.(İBN HAZM),"

        ]
    },
    {
        name: "Sabırlı",
        hadiths: [
            "Sabır, musibetin başına geldiği ilk andadır.(Buhârî, Cenâiz 32; Müslim, Cenâiz 14) ",
            "Sabır üçtür: Musibet anında sabır, ibadette sabır, günaha karşı sabır.(Beyhakî, Şuabü’l - Îmân, 7 / 125) ",
            "Hiçbir kula, sabırdan daha hayırlı ve daha geniş kapsamlı bir nimet verilmemiştir.(Buhârî, Merdâ 9; Müslim, Zekât 76)"

        ],
        proverbs: [
            "SABIR,GÖNLÜN ALLAHA TAM TESLİMİYETİDİR(SÜLEYMAN HİLMİ TUNAHAN.)",
            "EĞER SABIR VE KANAATİ ÖĞRENMEK İSTİYORSAN HACE MUHAMMED ZAHİDİN SOHBEDİNE VE HİZMETİNE SARIL(HACE DERVİŞ MEHMED KS.)",
            "SABIR, İMANIN YARISIDIR.SABREDEN KİŞİ, ALLAHIN YARDIMINA EN YAKIN OLANDIR(AHMED BİN HAMBEL) "

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
            "DÜNYADA BİRAZ YORUL; ÇÜNKÜ EDEBİ İSTİRAHAT, AHİRETTEDİR(İMAM AHMED BİN HAMBEL)",
            "KUL, RABBİNİN RIZASI İÇİN YORULDUĞUNDA, BU YORGUNLUK RAHMETE DÖNÜŞÜR(İMAM GAZALİ)",
            "MÜMİN, AKŞAM OLDUĞUNDA YORGUNDUR; ÇÜNKÜ YA BİR HAYIR PEŞİNDE KOŞMUŞTUR YADA BİR GÜNAHA KARŞI DİRENMİŞTİR(HASAN-I BASRİ)"

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