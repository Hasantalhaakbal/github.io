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
            "Mazlumun (haksızlığa uğramış) duasından sakının, çünkü onunla Allah arasında perde yoktur(Buhârî, Mezâlim 9)",
            "Kıyamet günü haklar ödeninceye kadar insanlar arasında hüküm verilir.(Sahîh-i Müslim, Birr 15; Tirmizî, Kıyâmet 2)",
            "Haksızlık edenin sevapları alınır, mazluma verilir.(Sahîh-i Buhârî, Mezâlim 10; Riyâzu’s-Sâlihîn)"
        ]
    },
    {
        name: "Anlaşılmamış",
        hadiths: [
            "Şüphesiz Allah sizin dış görünüşlerinize ve mallarınıza değil, kalplerinize ve amellerinize bakar.(Müslim, Birr 33)⟶İnsanlar seni yanlış anlayabilir; ama Allah senin kalbindekini eksiksiz bilir.",
                "İslam garip olarak başladı, yine garipliğe dönecektir. O hâlde gariplere(anlaşılmamışlara)müjde olsun!(Müslim, Îmân 232)",
            "Müminin niyeti amelinden hayırlıdır. Münâfığın ameli ise niyetinden şerlidir. Herkes niyetine göre amel eder.(Beyhakî, Şuabü’l-İmân, c. 5, s. 342; Taberânî, el-Mu’cemü’l-Evsat, 6/156)"

        ],
        proverbs: [
            "Allah sizin suretlerinize ve mallarınıza bakmaz; kalplerinize ve amellerinize bakar.(Müslim, Birr 33; İbn Mâce, Zühd 9)",
            "Kim Allah’tan başkası için hayır yaparsa, o hayır Allah katında makbul değildir.(Nesaî, Cihâd 24; Ahmed b. Hanbel, Müsned, 6/8)",
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
        name: "Yorgun",
        hadiths: [
           "Allah kulunun yorgunluğunu, hastalığını, üzüntüsünü… hepsini günahlarına kefaret kılar.(Sahîh-i Buhârî, Marda 1; Sahîh-i Müslim, Birr 49)",
            "İki nimet vardır, insanların çoğu bunlar konusunda aldanmıştır: sağlık ve boş vakit.(Buhârî, Rikâk 1)",
            "Hiçbir kimse, kendi elinin emeğinden daha hayırlı bir rızık yememiştir.(Sahîh-i Buhârî, Büyû‘ 15; Ahmed b. Hanbel, Müsned 6/166)"
        ],
        proverbs: [
           "Kalbin yorulduğu zaman, onu dinlendirecek şeylerle meşgul ol. Çünkü kalp yorulursa kör olur.(İhyâ-u Ulûmiddîn)",
            "Hiçbir kimse, kendi elinin emeğinden daha hayırlı bir rızık yememiştir.(Buhârî, Büyû‘ 15)",
            "Müslüman bir kimseye isabet eden yorgunluk, hastalık, keder, üzüntü ve hatta bir diken bile günahlarına kefaret olur.(Buhârî, Marda 1; Müslim, Birr 49)"
        ]
    },
    {
        name: "Yalnız Hisseden",
        hadiths: [
           "Ben kuluma, beni nasıl zannederse öyleyim. Beni andığında onunlayım. O, beni içinden anarsa, ben de onu içimden anarım; o, beni bir topluluk içinde anarsa, ben de onu onlardan daha hayırlı bir topluluk içinde anarım.",
                "Kim Allah’a bir karış yaklaşırsa, Allah ona bir arşın yaklaşır. Kim Allah’a bir arşın yaklaşırsa, Allah ona bir kulaç yaklaşır. Kim Allah’a yürüyerek gelirse, Allah ona koşarak gelir.(Buhârî, Tevhid 50; Müslim, Zikr 2)",
                "Sen Allah’tan başkasına bel bağlama. Yardım isteyeceksen yalnız O’ndan iste... Bil ki bütün ümmet sana bir zarar vermek için toplansa, Allah’ın senin hakkında yazmadığı bir şeyi sana zarar olarak veremezler.(Tirmizî, Sıfatü’l-Kıyâme 59)"

        ],
        proverbs: [
            "Salih bir kimseyle olmak, yalnızlıktan daha iyidir; yalnızlık ise, kötü biriyle arkadaşlıktan daha iyidir.(İmam Gazâlî (rh.a.))",
            "Yalnızlık, adam olmayanın vereceği sevgiden, saygıdan yeğdir.(Mevlânâ Celâleddîn-i Rûmî (k.s.))",
             "İnsanlardan uzak kalmam seni üzmesin. Zira senin Rabb’in, kalplerde gizlenenleri bilir. O sana yeter."
        ]
    },
    {
        name: "Baskı Altında",
        hadiths: [
            "Kim sabrederse, Allah ona sabır verir. Hiçbir kimseye sabırdan daha hayırlı ve daha geniş bir nimet verilmemiştir.(Sahih Müslim, Zekât, 103)",
            "İnsanlarla bir arada yaşayan ve onların eziyetlerine sabreden mümin, insanlarla bir arada yaşamayan ve onların eziyetlerine sabretmeyen müminden daha büyük ecre nail olur.(İslam ve İhsan, Sabırla İlgili Kısa Hadisler)",
            "Gerçek sabır, musibetin geldiği ilk anda gösterilendir.(Sahih Buhari, Cenâiz 32; Müslim, Cenâiz 14)"
        ],
        proverbs: [
            "Sıkıntının kalbinde bir rahmet gizlidir; bilen sabreder, gören teslim olur.(İmam Rabbânî (k.s.))",
            "Sabır, sıkıntıyı yok etmez; fakat ruhu güçlendirir ve sonucu güzelleştirir.( İbn Atâullah el-İskenderî (k.s.))",
            "Sıkıntılar geçicidir, gönül onlara sabredince ebedî rahatlığa kavuşur.(Abdülkâdir Geylânî (k.s.))"
        ]
    },
    {
        name: "Kıyaslanmış",
        hadiths: [
            "Allah sizin suretlerinize ve mallarınıza bakmaz; ancak kalplerinize ve amellerinize bakar.(Sahih-i Müslim, Birr 33; Müsned-i Ahmed, 2/285)",
            "Allah katında en sevimli kul, takvaca en üstün olandır.(Tirmizî, Tefsir 49/3270)",
            "Her kul, Allah’ın yaratılışında ve takdirinde bir özellik taşır. Kimse, bir başkasıyla aynı ölçüde değerlendirilmez."
        ],
        proverbs: [
            "İnsan, başkasına benzeyerek değil, kendine ait olarak kıymetlidir.(İmam Şâfiî (rh.a))",
            "Kendini başkalarıyla değil, düne göre kıyasla. Çünkü Allah senin gayretine bakar.(İmam Rabbânî (k.s.))",
            "Her insan bir dünyadır; kimseyi kendinle kıyaslama. Kendi derinliğini ve güzelliğini başkalarının aynasında arama."
        ]
    },
    {
        name: "Öz Güvensiz",
        hadiths: [
            "Kendinizi küçük görmeyin. Sizden biriniz, hakkı bilip onu söylemekten çekinmesin.(İbn Mâce, Fiten, 20; Hâkim, el-Müstedrek, 4/512)",
            "Allah sizin şeklinize ve mallarınıza bakmaz; fakat kalplerinize ve amellerinize bakar.(Müslim, Birr, 33)",
            "Mümin, güçlü olanıdır. Allah, güçlü mümini zayıf müminden daha çok sever. Her birinde hayır vardır. Sana faydalı olanı iste, Allah’tan yardım dile, acizlik gösterme.(Müslim, Kader, 34; İbn Mâce, Mukaddime, 10)"
        ],
        proverbs: [
            "Sen kendini küçük sansan da, sende büyük bir âlem gizlidir.(HZ Ali (r.a.), Nehcü'l-Belâğa, Hikmetler, No: 431)",
            "İnsanı yücelten ne makamdır, ne maldır. Asıl yücelik, tevazu ve güzel ahlaktadır.(İmam Gazâlî, İhyâ-u Ulûmi’d-Dîn, Cilt 3)",
            "Kendini küçük gören kişi, başkalarının büyüklüğünü abartır.(Abdülkadir Geylânî, Fütûhü’l-Gayb, 42. Mektup)"
        ]
    },
    {
        name: "Dışlanmış",
        hadiths: [
            "Müslüman, Müslümanın kardeşidir; ona zulmetmez, onu (yalnız) bırakmaz, onu küçük görmez.(Müslim, Birr, 32)",
            "Kim bir müminin dünya sıkıntılarından birini giderirse, Allah da onun kıyamet günündeki sıkıntılarından birini giderir.(Buhârî, Mezâlim, 3; Müslim, Birr, 58)",
             "Mümin, müminin aynasıdır; kim onun kusurunu örterse Allah da onun kusurunu örter. Kim de müminin bir ihtiyacını giderirse, Allah da onun ihtiyaçlarını giderir.(Müslim, Birr 60)"
        ],
        proverbs: [
            "Gerçek dostluk, sıkıntılı zamanlarda belli olur; bazen yalnızlık, insanı Rabbine yaklaştıran bir nimettir.(İmam Gazâlî, İhyâ-u Ulûmi’d-Dîn, Cilt 4)",
            "Kalbin bir köşesinde Allah’ın rızası varsa, dünya nefreti sana zarar veremez.(İbn Atâillâh el-İskenderî, Hikem, No: 78)",
            "İnsanın değeri, başkalarının ona verdiği kıymetle değil, Allah’ın ona verdiği değerledir.(Mevlânâ Celâleddîn Rûmî, Mesnevî, Cilt 1)"
        ]
    },
    {
        name: "Suçlanmış",
        hadiths: [
            "Kim kendisine yapılan bir zulmü sabırla karşılarsa, Allah onun ayıplarını örter ve derecesini yükseltir.(Tirmizî, Birr, 25)",
            "Mümin, müminin kardeşidir; ona zulmetmez, onu yalnız bırakmaz ve onu küçük düşürmez.(Müslim, Birr, 32)",
            "Kişi, kendi aleyhine konuşulan sözlere karşı sabrederse, Allah ona cennette bir köşk hazırlar.(Ahmed, Müsned, 1/420)"
        ],
        proverbs: [
            "Kötü sözler gelip geçicidir; asıl olan, insanın kendi nefsini hesaba çekmesi ve iç huzurunu korumasıdır.( İmam Gazâlî, İhyâ-u Ulûmi’d-Dîn)",
            "Dünya insanların sınandığı yerdir; hakaret ve iftiralar sabırla karşılanmalı, çünkü sabır en yüce makamdır.(İbn Atâillâh el-İskenderî, Hikem)",
            "İnsanın değeri, başkalarının ona yüklediği sıfatlarla değil, Allah’ın onu yaratışındaki yücelikle ölçülür.(Mevlânâ Celâleddîn Rûmî, Mesnevî)"
        ]
    },
    {
        name: "Güvensiz",
        hadiths: [
            "Kim Allah’a güvenip dayanırsa, O, ona yeter.(İbn Hibbân, Sahih, Hadis No: 524)",
            "Allah’a tevekkül eden kimse, en sağlam kulpa yapışmıştır.( Tirmizî, Tefsir 3/2863)",
            "Eğer siz Allah’a hakkıyla tevekkül etseydiniz, sabah aç çıkıp akşam tok dönen kuşları rızıklandırdığı gibi sizi de rızıklandırırdı.(Tirmizî, Zühd 33; İbn Mâce, Zühd 14)"

        ],
        proverbs: [
            "Gönlünü Allah’a bağla. O’na güvenen, asla yalnız kalmaz.(İmam Şâfiî (rh.a))",
            "İnsanlardan beklentiyi kes, Allah’a yönel. O seni kimseye muhtaç bırakmaz.(İmam Ahmed bin Hanbel)",
             "Kalbini insanlara açma; çünkü senin sıkıntını onlar taşıyamaz. Kalbini Allah’a aç, çünkü O Rahman’dır, Rahîm’dir.(İmam Rabbânî (k.s.))"
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
