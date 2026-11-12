
"use strict";

/* ==========================================
 PHYSICS LAB — 2.4.2
 БЕТТІК КЕРІЛУ, КАПИЛЛЯР, КРИСТАЛДАР
 By Darkhan
========================================== */

const $ = id => document.getElementById(id);

const esc = value => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;");

const fraction = (top, bottom) =>
  `<span class="frac"><span>${top}</span>` +
  `<span>${bottom}</span></span>`;

/* Формулалардағы бөлшек, индекс және дәреже
   HTML элементтерімен көрсетіледі. */

const FORMULA = {
  tension: `&sigma; = ${fraction("F", "l")}`,
  force: `F = &sigma;l`,
  energy: `&Delta;W = &sigma;&Delta;A`,
  capillary:
    `h = ${fraction(
      "2&sigma;cos&theta;",
      "&rho;gr"
    )}`,
  angle: `cos&theta; = ${fraction(
    "&rho;grh",
    "2&sigma;"
  )}`,
  filmForce: `F = 2&sigma;l`,
  filmWork: `W = 2&sigma;&Delta;A`,
  density: `&rho; = ${fraction("m", "V")}`
};

/* ==========================================
  САБАҚ ТҮСІНДІРМЕЛЕРІ
========================================== */

const lesson = {
  code: "2.4.2",

  title:
    "Сұйықтың беттік қабатының қасиеттері. " +
    "Жұғу және капиллярлық құбылыстар. " +
    "Кристалл және аморфты денелер",

  goal:
    "Беттік керілу күшін түсіну, " +
    "жұғу және жұқпау құбылыстарын ажырату, " +
    "капиллярлық көтерілу биіктігін есептеу, " +
    "кристалл және аморфты денелерді салыстыру.",

  theory: [
    {
      title: "Сұйықтың беттік қабаты",
      definition:
        "Сұйықтың беттік қабаты — сұйықтың " +
        "басқа ортамен шекаралас орналасқан жұқа қабаты.",

      detail:
        "Сұйық ішіндегі молекулаға айналасындағы " +
        "молекулалар әртүрлі бағытта әсер етеді. " +
        "Орташа алғанда бұл әсерлер теңгеріледі. " +
        "Ал сұйық бетіндегі молекулалардың " +
        "айналасы бірдей емес, себебі бір жағында " +
        "сұйық, ал екінші жағында газ немесе " +
        "басқа орта болады. Сондықтан сұйық бетінің " +
        "энергетикалық қасиеттері ішкі бөліктен " +
        "өзгеше. Сұйық беті белгілі жағдайларда " +
        "өзінің ауданын азайтуға ұмтылады. " +
        "Осы құбылысты түсіндіруде беттік " +
        "керілу маңызды рөл атқарады.",

      formula: "&sigma; — беттік керілу коэффициенті",
      example:
        "Кішкентай су тамшысының домалақ " +
        "болуына беттік керілу әсер етеді.",
      warning:
        "Сұйық бетінде нақты қатты қабық жоқ.",
      visual: "drop"
    },
    {
      title: "Беттік керілу күші",
      definition:
        "Беттік керілу күші — сұйық бетінің " +
        "шекарасы бойымен, бетке жанама бағытта " +
        "әсер ететін күш.",

      detail:
        "Беттік керілу күші сұйық бетінің " +
        "энергиясын азайтуға бағытталған. " +
        "Оның модулі сұйықтың түріне, " +
        "температурасына және беттік шекара " +
        "ұзындығына байланысты болады. " +
        "Қарапайым жағдайда күш F=σl " +
        "формуласы арқылы анықталады. " +
        "Мұнда σ — беттік керілу коэффициенті, " +
        "l — күш әсер ететін шекараның ұзындығы. " +
        "Мысалы, сұйық беті жіңішке " +
        "қозғалмалы сымды тартуы мүмкін.",

      formula: FORMULA.force,
      example:
        "σ=0,072 Н/м және l=0,10 м болса, " +
        "F=0,0072 Н.",
      warning:
        "Сабын қабықшасында екі бет болғандықтан " +
        "күшті есептеу формуласы өзгереді.",
      visual: "force"
    },
    {
      title: "Беттік керілу коэффициенті",
      definition:
        "Беттік керілу коэффициенті сұйық бетінің " +
        "бірлік ұзындығына келетін күшті сипаттайды.",

      detail:
        "Беттік керілу коэффициенті грек " +
        "әрпі сигма арқылы белгіленеді. " +
        "Өлшем бірлігі Н/м немесе Дж/м². " +
        "Коэффициент сұйықтың табиғатына " +
        "және температурасына тәуелді. " +
        "Таза судың 20°C температурадағы " +
        "беттік керілу коэффициенті шамамен " +
        "0,0728 Н/м. Оқу есептерінде " +
        "көбіне 0,072 Н/м жуық мәні алынады. " +
        "Сұйық қыздырылғанда оның " +
        "беттік керілуі әдетте азаяды.",

      formula: FORMULA.tension,
      example:
        "F=0,012 Н, l=0,20 м болса, " +
        "σ=0,06 Н/м.",
      warning:
        "Барлық ұзындықтарды метрге айналдырыңдар.",
      visual: "drop"
    },
    {
      title: "Беттік энергия",
      definition:
        "Беттік энергия — сұйық бетінің " +
        "болуына байланысты артық энергия.",

      detail:
        "Сұйық бетінің ауданын арттыру үшін " +
        "әдетте жұмыс істеу қажет. " +
        "Температура тұрақты кезде беттік " +
        "керілу коэффициенті өзгермесе, " +
        "беттік энергия өзгерісі σΔA " +
        "формуласы арқылы есептеледі. " +
        "Мұндағы ΔA — беттік ауданның өзгерісі. " +
        "Жаңа сұйық бетін жасау үшін " +
        "энергия жұмсалады. Сабын " +
        "қабықшасының екі беті бар, сондықтан " +
        "оның екі бетінің ауданы да " +
        "есепке алынуы тиіс.",

      formula: FORMULA.energy,
      example:
        "σ=0,05 Н/м, ΔA=0,02 м² болса, " +
        "ΔW=0,001 Дж.",
      warning:
        "Сабын қабықшасының екі бетінің " +
        "ауданын шатастырмаңдар.",
      visual: "film"
    },
    {
      title: "Жұғу құбылысы",
      definition:
        "Жұғу — сұйықтың қатты дене " +
        "бетіне жайылып таралуға бейімділігі.",

      detail:
        "Сұйық пен қатты дене молекулалары " +
        "арасындағы тартылыс және сұйық " +
        "молекулаларының өзара тартылысы " +
        "жұғу құбылысына әсер етеді. " +
        "Мысалы, таза шыны бетіне су " +
        "жақсы жұғады. Бұл жағдайда " +
        "жанасу бұрышы 90 градустан кіші " +
        "болады. Сұйықтың жұғуы " +
        "беттің тазалығына, материалына " +
        "және сұйық құрамына тәуелді. " +
        "Жұғу құбылысы бояу, жуу, " +
        "баспа және зертханалық " +
        "процестерде маңызды.",

      formula: "&theta; &lt; 90&deg; — жұғу",
      example:
        "Таза шыны бетіндегі су көбіне " +
        "жайыла түседі.",
      warning:
        "Бір сұйық барлық материалға " +
        "бірдей жұға бермейді.",
      visual: "wetting"
    },
    {
      title: "Жұқпау және жанасу бұрышы",
      definition:
        "Жұқпау — сұйықтың қатты дене " +
        "бетіне кең жайылмай, тамшы " +
        "түрінде сақталуға бейімділігі.",

      detail:
        "Гидрофобты беттерде су " +
        "тамшылары домалаққа жақын пішін алады. " +
        "Мұндай жағдайда жанасу бұрышы " +
        "көбіне 90 градустан үлкен болады. " +
        "Жанасу бұрышы сұйық, қатты " +
        "дене және қоршаған орта " +
        "арасындағы тепе-теңдікке байланысты. " +
        "Жапырақтың балауызды бетінде " +
        "су тамшыларының домалақтанып " +
        "тұруы жұқпаудың таныс мысалы.",

      formula: "&theta; &gt; 90&deg; — жұқпау",
      example:
        "Кейбір өсімдік жапырақтарында " +
        "су тамшылары домалақ болып тұрады.",
      warning:
        "Су тамшысының пішініне ауырлық " +
        "күші де әсер етуі мүмкін.",
      visual: "drop"
    },
    {
      title: "Капиллярлық құбылыс",
      definition:
        "Капиллярлық құбылыс — сұйықтың " +
        "өте жіңішке түтік ішінде " +
        "көтерілуі немесе төмендеуі.",

      detail:
        "Капилляр деп өте жіңішке " +
        "түтікті атаймыз. Сұйық түтік " +
        "қабырғасына жұғатын болса, " +
        "беттік керілу әсерінен " +
        "сұйық жоғары көтерілуі мүмкін. " +
        "Егер сұйық қабырғаға жұқпаса, " +
        "капилляр ішіндегі деңгей " +
        "төмендеуі мүмкін. Капилляр " +
        "радиусы неғұрлым кіші болса, " +
        "көтерілу биіктігінің модулі " +
        "соғұрлым үлкен болады. " +
        "Бұл құбылыс топырақта, " +
        "қағазда және өсімдіктердің " +
        "су тасымалдауына қатысты " +
        "кейбір процестерде байқалады.",

      formula: FORMULA.capillary,
      example:
        "Жіңішке шыны түтікте " +
        "су деңгейі сыртқы су " +
        "деңгейінен жоғары болуы мүмкін.",
      warning:
        "Капиллярлық көтерілу өсімдіктегі " +
        "судың қозғалуын түсіндіретін " +
        "бір ғана механизм.",
      visual: "capillary"
    },
    {
      title: "Капиллярлық көтерілу биіктігі",
      definition:
        "Капиллярлық биіктік беттік керілуге, " +
        "жанасу бұрышына, тығыздыққа " +
        "және түтік радиусына тәуелді.",

      detail:
        "Цилиндрлік өте жіңішке түтік " +
        "үшін капиллярлық биіктік " +
        "h=2σcosθ/(ρgr) формуласымен " +
        "анықталады. Мұнда σ — беттік " +
        "керілу коэффициенті, θ — " +
        "жанасу бұрышы, ρ — сұйық " +
        "тығыздығы, g — еркін түсу " +
        "үдеуі, r — капилляр радиусы. " +
        "Егер су шыныға толық жұғады " +
        "деп есептелсе, cosθ≈1. " +
        "Радиусты екі есе азайтқанда " +
        "биіктік екі есе артады.",

      formula: FORMULA.capillary,
      example:
        "σ=0,072 Н/м, r=0,5 мм, " +
        "ρ=1000 кг/м³, g=10 м/с², " +
        "cosθ=1 болса, h=2,88 см.",
      warning:
        "Радиус пен диаметрді " +
        "шатастырмаңдар: r=d/2.",
      visual: "capillary"
    },
    {
      title: "Кристалл денелер",
      definition:
        "Кристалл дене — бөлшектері " +
        "кеңістікте белгілі бір " +
        "периодтық тәртіппен орналасқан дене.",

      detail:
        "Кристалдарда атомдар, " +
        "иондар немесе молекулалар " +
        "кристалдық тор түзеді. " +
        "Мысалы, ас тұзы, кварц және " +
        "көптеген металдар кристалл " +
        "заттарға жатады. Кристалдық " +
        "денелердің қасиеттері " +
        "бағытқа тәуелді болуы мүмкін. " +
        "Бұл қасиет анизотропия " +
        "деп аталады. Таза " +
        "кристалл заттар берілген " +
        "қысымда белгілі бір " +
        "балқу температурасына ие.",

      formula: "Кристалл торы — реттелген құрылым",
      example:
        "Ас тұзының кристалдары " +
        "жиі текше пішінді болады.",
      warning:
        "Барлық кристалдардың сыртқы " +
        "пішіні міндетті түрде текше емес.",
      visual: "crystal"
    },
    {
      title: "Аморфты денелер",
      definition:
        "Аморфты дене — атомдарының " +
        "ұзақ қашықтықтағы периодтық " +
        "кристалдық реті жоқ қатты дене.",

      detail:
        "Аморфты заттарда бөлшектердің " +
        "жақын орналасу тәртібі болуы " +
        "мүмкін, бірақ ұзақ қашықтықта " +
        "кристалл сияқты қайталанатын " +
        "периодтық құрылым болмайды. " +
        "Шыны, көптеген пластиктер " +
        "және кейбір шайырлар " +
        "аморфты заттарға мысал бола алады. " +
        "Аморфты денелердің " +
        "қасиеттері көбіне изотропты " +
        "болады. Олар кристалдар " +
        "сияқты бір ғана анық " +
        "балқу температурасында " +
        "емес, температура аралығында " +
        "жұмсаруы мүмкін.",

      formula: "Аморфты құрылым — ұзақ реттілік жоқ",
      example:
        "Терезе шынысы — аморфты " +
        "қатты дененің мысалы.",
      warning:
        "Қарапайым температурада шыныны " +
        "ағып жатқан сұйық деп " +
        "сипаттау дұрыс емес.",
      visual: "amorphous"
    }
  ],

/* ==========================================
  ДӘПТЕРГЕ ЖАЗАТЫН КОНСПЕКТ
========================================== */

  notes: [
    [
      "Сұйықтың беттік қабаты",
      "Сұйық пен басқа ортаның шекарасында орналасқан " +
      "және ішкі бөлікке қарағанда энергетикалық " +
      "ерекшелігі бар қабат.",
      "Беттік керілу коэффициенті — σ.",
      "Бет ауданын ұлғайту үшін жұмыс қажет."
    ],
    [
      "Беттік керілу күші",
      "Сұйық бетінің шекарасы бойымен әсер ететін күш.",
      "F=σl.",
      "Өлшем бірлігі — ньютон."
    ],
    [
      "Беттік керілу коэффициенті",
      "Беттік керілу күшінің шекара ұзындығына қатынасы.",
      "σ=F/l; Н/м.",
      "Температураға және сұйық түріне тәуелді."
    ],
    [
      "Беттік энергия",
      "Сұйық бетін ұлғайтуға жұмсалатын энергия.",
      "ΔW=σΔA.",
      "Сабын қабықшасының екі беті ескеріледі."
    ],
    [
      "Жұғу құбылысы",
      "Сұйықтың қатты бетке жайылып таралуы.",
      "θ<90° — жұғу.",
      "Беттің тазалығы мен материалы әсер етеді."
    ],
    [
      "Жұқпау құбылысы",
      "Сұйықтың тамшы түрінде сақталуға бейімділігі.",
      "θ>90° — жұқпау.",
      "Гидрофобты беттерде байқалады."
    ],
    [
      "Капиллярлық құбылыс",
      "Өте жіңішке түтік ішіндегі сұйық деңгейінің өзгеруі.",
      "h=2σcosθ/(ρgr).",
      "Түтік радиусы азайса, көтерілу биіктігі артады."
    ],
    [
      "Капиллярдағы мениск",
      "Сұйықтың қабырғамен жанасқандағы иілген еркін беті.",
      "Жұғатын сұйықта — ойыс мениск.",
      "Жұқпайтын сұйықта — дөңес мениск."
    ],
    [
      "Кристалл денелер",
      "Бөлшектері периодтық кеңістіктік құрылым түзетін денелер.",
      "Кристалдық тор, анизотропия.",
      "Ас тұзы, кварц, көптеген металдар."
    ],
    [
      "Аморфты денелер",
      "Ұзақ қашықтықтағы периодтық кристалдық реті жоқ денелер.",
      "Изотропия, жұмсару аралығы.",
      "Шыны, көптеген пластиктер."
    ]
  ],

/* ==========================================
  12 СЫНЫП ЕСЕБІ
========================================== */

  problems: [
    [
      [
        "Беттік керілу коэффициенті 0,072 Н/м. " +
        "Шекара ұзындығы 10 см. Күшті табыңдар.",
        "σ=0,072 Н/м; l=0,10 м",
        "F",
        "F=σl=0,072·0,10=0,0072 Н."
      ],
      [
        "Сұйық бетінің ауданы 0,02 м²-ге артты. " +
        "σ=0,072 Н/м. Беттік энергия өзгерісін табыңдар.",
        "σ=0,072 Н/м; ΔA=0,02 м²",
        "ΔW",
        "ΔW=σΔA=0,072·0,02=0,00144 Дж."
      ],
      [
        "Толық жұғу жағдайында капилляр радиусы " +
        "0,5 мм. Судың көтерілу биіктігін табыңдар. " +
        "σ=0,072 Н/м; ρ=1000 кг/м³; g=10 м/с².",
        "r=0,0005 м; cosθ=1",
        "h",
        "h=2σ/(ρgr)=0,144/(1000·10·0,0005)" +
        "=0,0288 м=2,88 см."
      ],
      [
        "Сұйық бетіндегі ұзындығы 20 см " +
        "шекараға 0,006 Н күш әсер етеді. " +
        "Беттік керілу коэффициентін есептеңдер.",
        "F=0,006 Н; l=0,20 м",
        "σ",
        "σ=F/l=0,006/0,20=0,03 Н/м."
      ]
    ],
    [
      [
        "Жұғатын су радиусы 0,3 мм капиллярға " +
        "көтеріледі. σ=0,072 Н/м, " +
        "ρ=1000 кг/м³, g=9,81 м/с². " +
        "Биіктікті табыңдар.",
        "r=0,0003 м; cosθ=1",
        "h",
        "h=0,144/(1000·9,81·0,0003)" +
        "≈0,0489 м=4,89 см."
      ],
      [
        "Сабын қабықшасының қозғалмалы сымының " +
        "ұзындығы 12 см. σ=0,03 Н/м. " +
        "Екі беттен түсетін толық күшті табыңдар.",
        "l=0,12 м; σ=0,03 Н/м",
        "F",
        "F=2σl=2·0,03·0,12=0,0072 Н."
      ],
      [
        "Сабын қабықшасының бір бетінің ауданы " +
        "0,016 м²-ге артты. σ=0,03 Н/м. " +
        "Жұмсалған жұмысты табыңдар.",
        "ΔA=0,016 м²; σ=0,03 Н/м",
        "W",
        "W=2σΔA=2·0,03·0,016=0,00096 Дж."
      ],
      [
        "Су шыны капиллярда 3,67 см көтерілді. " +
        "σ=0,072 Н/м, ρ=1000 кг/м³, " +
        "g=9,81 м/с² және cosθ=1. " +
        "Капилляр радиусын табыңдар.",
        "h=0,0367 м; σ=0,072 Н/м",
        "r",
        "r=2σ/(ρgh)=0,144/(1000·9,81·0,0367)" +
        "≈0,000400 м=0,400 мм."
      ]
    ],
    [
      [
        "Су капиллярға 60° жанасу бұрышымен " +
        "көтеріледі. Радиусы 0,25 мм. " +
        "σ=0,072 Н/м, ρ=1000 кг/м³, " +
        "g=9,81 м/с². Биіктігін табыңдар.",
        "θ=60°; cosθ=0,5; r=0,00025 м",
        "h",
        "h=2·0,072·0,5/(1000·9,81·0,00025)" +
        "≈0,0294 м=2,94 см."
      ],
      [
        "Бірінші капилляр радиусы 0,36 мм, " +
        "судың көтерілу биіктігі 4 см. " +
        "Екінші капилляр радиусы 0,60 мм. " +
        "Қалған шарттар бірдей. Екінші биіктікті табыңдар.",
        "r1=0,36 мм; h1=4 см; r2=0,60 мм",
        "h2",
        "h2=h1·r1/r2=4·0,36/0,60=2,4 см."
      ],
      [
        "Су радиусы 0,50 мм капиллярға көтерілді. " +
        "σ=0,072 Н/м, cosθ=1, g=9,81 м/с². " +
        "Капиллярдағы көтерілген су бағанының " +
        "массасын анықтаңдар.",
        "r=0,0005 м; σ=0,072 Н/м",
        "m",
        "m=ρπr²h=2πrσ/g.\n" +
        "m≈2·3,1416·0,0005·0,072/9,81" +
        "≈0,0000231 кг=0,0231 г."
      ],
      [
        "Сабын қабықшасының қозғалмалы сымының " +
        "ұзындығы 8 см. Ол 5 см жылжыды. " +
        "σ=0,027 Н/м. Тарту күшін және " +
        "жұмсалған жұмысты табыңдар.",
        "l=0,08 м; x=0,05 м; σ=0,027 Н/м",
        "F және W",
        "F=2σl=2·0,027·0,08=0,00432 Н.\n" +
        "W=Fx=0,00432·0,05=0,000216 Дж."
      ]
    ]
  ],

/* ==========================================
  18 КОМАНДАЛЫҚ СҰРАҚ
========================================== */

  quiz: [
    [
      "Жылдам тест",
      "Беттік керілу коэффициентінің SI бірлігі?",
      ["Н","Н/м","Па","кг/м³"],1
    ],
    [
      "Құбылысты тап",
      "Судың жапырақта домалақ тамшы болып тұруына не әсер етеді?",
      ["Тек ауырлық күші","Тек қысым","Беттік керілу және жұқпау","Электр тогы"],2
    ],
    [
      "Формула сайысы",
      "Бір беттік шекарадағы күш формуласы?",
      ["F=σl","F=σ/l","F=ρgh","F=mg"],0
    ],
    [
      "Есеп батлы",
      "σ=0,05 Н/м, l=0,2 м. Күш қанша?",
      ["0,25 Н","0,01 Н","4 Н","0,1 Н"],1
    ],
    [
      "Физикалық логика",
      "Жұғу құбылысында жанасу бұрышы көбіне қандай?",
      ["90°-тан кіші","90°-тан үлкен","Әрқашан 180°","Кез келген жағдайда 90°"],0
    ],
    [
      "Кім жылдам?",
      "Жұқпайтын сұйық үшін қай мениск тән?",
      ["Ойыс","Жазық","Дөңес","Міндетті жоқ"],2
    ],
    [
      "Капилляр батлы",
      "Капилляр радиусы екі есе азайса, көтерілу биіктігі?",
      ["Екі есе азаяды","Өзгермейді","Төрт есе артады","Екі есе артады"],3
    ],
    [
      "Формуланы тап",
      "Капиллярлық биіктіктің формуласы?",
      ["h=ρgr/2σ","h=2σcosθ/(ρgr)","h=σρr","h=mg"],1
    ],
    [
      "Қатені анықта",
      "Капилляр формуласында r қандай шама?",
      ["Диаметр","Көлем","Радиус","Тығыздық"],2
    ],
    [
      "Калькулятор батлы",
      "Сабын қабықшасының екі беті үшін күш формуласы?",
      ["F=2σl","F=σl/2","F=σ/l","F=ρV"],0
    ],
    [
      "Беттік энергия",
      "Беттік энергия өзгерісі қай формула?",
      ["ΔW=σ/ΔA","ΔW=ρgh","ΔW=F/m","ΔW=σΔA"],3
    ],
    [
      "Есеп сайысы",
      "σ=0,04 Н/м, ΔA=0,5 м². Бір беттің энергия өзгерісі?",
      ["0,002 Дж","0,02 Дж","0,2 Дж","2 Дж"],1
    ],
    [
      "Кристалл батлы",
      "Қай дене кристалдық затқа мысал?",
      ["Ас тұзы","Терезе шынысы","Кейбір шайыр","Балауыз қоспасы"],0
    ],
    [
      "Материалды ажырат",
      "Қайсысы аморфты қатты дене?",
      ["Ас тұзы","Кварц","Кәдімгі терезе шынысы","Мұз"],2
    ],
    [
      "Физикалық қасиет",
      "Анизотропия нені білдіреді?",
      ["Массаның жоқтығын","Қасиеттердің бағытқа тәуелділігін","Температураның нөл болуын","Сұйықтың булануын"],1
    ],
    [
      "Өмірден мысал",
      "Қағаз сүлгінің суды сіңіруіне қандай құбылыстар қатысады?",
      ["Капиллярлық және жұғу","Магнит өрісі ғана","Тек сәулелену","Ядролық реакция"],0
    ],
    [
      "Күрделі тапсырма",
      "θ=60° болса, cosθ қанша?",
      ["1","0","0,5","−1"],2
    ],
    [
      "Финал",
      "Аморфты қатты денелерге қай сипаттама тән?",
      ["Міндетті текше торы бар","Барлық бағытта өткізгіш","Міндетті бір температурада балқиды","Ұзақ қашықтықтағы периодтық реті жоқ"],3
    ]
  ],

/* ==========================================
  ЖАҢА ҮЙ ТАПСЫРМАСЫ
========================================== */

  homework: {
    calculations: [
      "1. Күрделі есеп. Су шыны капиллярға " +
      "30° жанасу бұрышымен көтеріледі. " +
      "Түтіктің ішкі радиусы 0,35 мм, " +
      "судың беттік керілу коэффициенті " +
      "0,072 Н/м, тығыздығы 997 кг/м³, " +
      "g=9,81 м/с². " +
      "а) Көтерілу биіктігін анықтаңдар. " +
      "ә) Радиус екі есе азайса, " +
      "биіктік қалай өзгереді? " +
      "б) Екі жағдайда көтерілген " +
      "су бағандарының массаларын " +
      "салыстырыңдар.",

      "2. Күрделі есеп. Сабын қабықшасының " +
      "қозғалмалы сымының ұзындығы 6 см. " +
      "Сымды қабықша жазықтығында " +
      "4,5 см жылжытқанда беттік " +
      "аудан ұлғаяды. Беттік керілу " +
      "коэффициенті 0,030 Н/м. " +
      "а) Сымға әсер ететін күшті; " +
      "ә) қабықшаның екі бетінің " +
      "жалпы аудан өзгерісін; " +
      "б) атқарылған жұмысты " +
      "есептеңдер."
    ],

    observation: [
      "1. Бақылау жұмысы. Қарапайым таза " +
      "тәрелкеге және су жұқпайтын " +
      "материалдың бетіне бір-бір тамшы " +
      "су тамызып, тамшылардың " +
      "пішінін салыстырыңдар. " +
      "Қай бетте су жақсы жұғатынын " +
      "дәптерге түсіндіріңдер.",

      "2. Зерттеу. Күнделікті өмірден " +
      "капиллярлық құбылыстың үш " +
      "қолданылуын табыңдар. " +
      "Әрқайсысының жұмыс істеу " +
      "принципін 3–4 сөйлеммен жазыңдар.",

      "3. Жіктеу. Ас тұзы, кварц, " +
      "терезе шынысы, мұз және " +
      "полистирол материалдарын " +
      "кристалл немесе аморфты " +
      "денелер деп екі топқа " +
      "ажыратыңдар. Әр жауапқа " +
      "қысқаша ғылыми түсіндірме беріңдер."
    ],

    speaking:
      "Келесі сабақта мына сұраққа " +
      "1–2 минут ауызша жауап беріңдер: " +
      "«Неліктен су тамшысы домалақтанады, " +
      "ал жіңішке түтікте жоғары көтеріле алады?»"
  }
};

/* ==========================================
  СУРЕТТЕР ЖӘНЕ SVG СХЕМАЛАР
========================================== */

const PHOTOS = {
  drop:
    "https://upload.wikimedia.org/wikipedia/commons/4/4c/Water_drop_on_leaf_-_Flickr_-_angrylambie1.jpg",
  capillary:
    "https://commons.wikimedia.org/wiki/Special:FilePath/Capillaryaction.jpg"
};

function diagram(type) {
  if (type === "drop" || type === "wetting") {
    return `<svg viewBox="0 0 420 235">
      <line x1="35" y1="188" x2="385" y2="188"
       stroke="#3d9a6c" stroke-width="8"/>
      <path d="M95 181 Q105 75 210 65
       Q315 75 325 181 Z"
       fill="#94d2fa" stroke="#1886d1" stroke-width="4"/>
      <text x="210" y="220" text-anchor="middle"
       font-size="22">Су тамшысы және жанасу бұрышы</text>
    </svg>`;
  }

  if (type === "force" || type === "film") {
    return `<svg viewBox="0 0 420 235">
      <rect x="80" y="40" width="260" height="145"
       fill="#cceeff" stroke="#1684ca" stroke-width="4"/>
      <line x1="80" y1="42" x2="340" y2="42"
       stroke="#e16a7b" stroke-width="12"/>
      <line x1="80" y1="187" x2="340" y2="187"
       stroke="#e16a7b" stroke-width="12"/>
      <line x1="135" y1="58" x2="135" y2="111"
       stroke="#d34d5c" stroke-width="5"/>
      <polygon points="125,108 135,124 145,108"
       fill="#d34d5c"/>
      <text x="151" y="100" font-size="23">F</text>
      <text x="210" y="218" text-anchor="middle"
       font-size="22">Сұйық қабықшасының беті</text>
    </svg>`;
  }

  if (type === "capillary") {
    return `<svg viewBox="0 0 420 255">
      <rect x="42" y="154" width="336" height="69"
       fill="#9bd7fa" stroke="#61a7d5" stroke-width="3"/>
      ${[125,260].map((x,i) => `
       <rect x="${x}" y="30" width="${i===0?32:65}"
        height="193" fill="#e4f5ff"
        stroke="#448abf" stroke-width="4"/>
       <rect x="${x+4}" y="${i===0?63:117}"
        width="${i===0?24:57}"
        height="${i===0?156:102}"
        fill="#80c6f4"/>
      `).join("")}
      <text x="210" y="246" text-anchor="middle"
       font-size="21">Жіңішке түтікте су жоғарырақ</text>
    </svg>`;
  }

  if (type === "crystal") {
    const points = [];
    for(let row=0;row<4;row++) {
      for(let col=0;col<5;col++) {
        points.push(
          `<circle cx="${75+col*66}"
           cy="${35+row*55}"
           r="14" fill="${(row+col)%2?"#e8697a":"#1788ce"}"/>`
        );
      }
    }
    return `<svg viewBox="0 0 420 260">
      ${points.join("")}
      <text x="210" y="253" text-anchor="middle"
       font-size="22">Периодтық реттелген құрылым</text>
    </svg>`;
  }

  if (type === "amorphous") {
    const pts = [
      [70,45],[130,52],[191,33],[266,55],[345,41],
      [98,109],[158,134],[239,106],[313,143],
      [62,184],[146,211],[221,187],[294,214],[364,187]
    ];
    return `<svg viewBox="0 0 420 260">
      ${pts.map(([x,y],i)=>`
       <circle cx="${x}" cy="${y}" r="14"
       fill="${i%2?"#e8697a":"#1686cd"}"/>`).join("")}
      <text x="210" y="254" text-anchor="middle"
       font-size="21">Ұзақ периодтық реті жоқ құрылым</text>
    </svg>`;
  }

  return `<svg viewBox="0 0 420 240">
    <text x="210" y="75" text-anchor="middle"
     font-size="26" fill="#087dcc">Беттік керілу</text>
    <text x="210" y="140" text-anchor="middle"
     font-size="26" fill="#14844e">Жұғу</text>
    <text x="210" y="205" text-anchor="middle"
     font-size="26" fill="#d03750">Капилляр</text>
  </svg>`;
}

function visual(type) {
  if (PHOTOS[type]) {
    return `<div class="visual">
      <img src="${PHOTOS[type]}"
       alt="Физикалық құбылыстың фотосуреті"
       onerror="this.style.display='none'">
      ${diagram(type)}
      <p class="caption">
       Фото және құбылыстың түсіндірме схемасы
      </p>
    </div>`;
  }
  return `<div class="visual">${diagram(type)}</div>`;
}

/* ==========================================
  ОҚУШЫЛАР МЕН КОМАНДАЛАР
========================================== */

const defaultNames = [
  "Рамазан","Тұрғанжан","Нұрай","Әлқуат",
  "Шырай","Гүлсезім","Маржан","Мариям",
  "Жансая","Азиза","Ақсезім","Нұрболсын",
  "Ақнұр","Іңкәр","Асхат","Аяжан",
  "Мирас","Санжар","Ерасыл","Нұрасыл",
  "Расул","Айнұр","Дархан","Айкерім"
];

const STORE = "physics242_surface_v1_";

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(STORE + key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

let students = load(
  "students",
  defaultNames.map((name,i) => ({
    id:i+1,name,present:true
  }))
);

let teams = load("teams",[[],[],[]]);
let scores = [0,0,0];
let answered = {};
let speakerHistory = [[],[],[]];

let currentSpeaker = "";
let currentPage = 0;
let pages = [];
let nextTimer = null;
let zCounter = 100;

const startedAt = Date.now();

function save() {
  localStorage.setItem(
    STORE+"students",JSON.stringify(students)
  );
  localStorage.setItem(
    STORE+"teams",JSON.stringify(teams)
  );
}

function openPanel(id) {
  const panel = $(id);
  panel.classList.remove("hidden");
  panel.style.zIndex = ++zCounter;
}

function closePanel(id) {
  $(id).classList.add("hidden");
}

function openAttendance() {
  renderAttendance();
  openPanel("attendancePanel");
}

function renderAttendance() {
  $("attendanceList").innerHTML =
    students.map(s => `
      <div class="student-row">
        <input type="checkbox"
         ${s.present ? "checked" : ""}
         onchange="setPresent(${s.id},this.checked)">
        <span>${esc(s.name)}</span>
        <button onclick="removeStudent(${s.id})">
          Өшіру
        </button>
      </div>
    `).join("");

  const count = students.filter(s=>s.present).length;

  $("attendanceCount").textContent =
    `Барлығы: ${students.length} • ` +
    `Бар: ${count} • ` +
    `Жоқ: ${students.length-count}`;
}

function stopNext() {
  if(nextTimer !== null) {
    clearTimeout(nextTimer);
    nextTimer = null;
  }
}

function clearGameAndTeams() {
  stopNext();
  teams = [[],[],[]];
  scores = [0,0,0];
  answered = {};
  speakerHistory = [[],[],[]];
  currentSpeaker = "";

  save();
  renderTeams();
  renderPage();
}

function setPresent(id,value) {
  const s = students.find(x=>x.id===id);
  if(s) s.present = value;

  clearGameAndTeams();
  renderAttendance();
}

function markAll(value) {
  students.forEach(s=>s.present=value);
  clearGameAndTeams();
  renderAttendance();
}

function addStudent() {
  const input = $("newStudent");
  const name = input.value.trim();

  if(!name) return;

  if(students.some(s =>
    s.name.toLocaleLowerCase("kk") ===
    name.toLocaleLowerCase("kk")
  )) {
    alert("Бұл оқушы тізімде бар.");
    return;
  }

  const id = students.length
    ? Math.max(...students.map(s=>s.id))+1
    : 1;

  students.push({id,name,present:true});
  input.value = "";

  clearGameAndTeams();
  renderAttendance();
}

function removeStudent(id) {
  students = students.filter(s=>s.id!==id);
  clearGameAndTeams();
  renderAttendance();
}

function presentStudents() {
  return students.filter(s=>s.present);
}

function shuffleTeams(show=false) {
  const list = [...presentStudents()];

  if(!list.length) {
    alert("Алдымен қатысатын оқушыларды белгілеңіз.");
    return;
  }

  for(let i=list.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [list[i],list[j]]=[list[j],list[i]];
  }

  teams=[[],[],[]];

  list.forEach((student,i)=>{
    teams[i%3].push(student.id);
  });

  stopNext();
  scores=[0,0,0];
  answered={};
  speakerHistory=[[],[],[]];

  currentSpeaker="";

  save();

  if(isQuizPage()) {
    currentSpeaker=pickSpeaker(
      teamForQuestion(quizIndex())
    );
  }

  renderTeams();
  renderPage();

  if(show) {
    closePanel("attendancePanel");
    openPanel("teamsPanel");
  }
}

function teamNames(team) {
  return (teams[team]||[])
    .map(id=>students.find(s=>s.id===id))
    .filter(s=>s&&s.present)
    .map(s=>s.name);
}

function renderTeams() {
  $("teamLists").innerHTML =
    [0,1,2].map(i=>`
      <div class="team-card">
        <h3>${i+1}-команда</h3>
        <p>
          ${teamNames(i).map(esc).join(", ") ||
            "Қатысушы жоқ"}
        </p>
        <div class="score">${scores[i]} ұпай</div>
      </div>
    `).join("");
}

function openTeams() {
  renderTeams();
  openPanel("teamsPanel");
}

function teamForQuestion(index) {
  return index%3;
}

function pickSpeaker(team) {
  const names=teamNames(team);

  if(!names.length) return "Қатысушы жоқ";

  let available=names.filter(name=>
    !speakerHistory[team].includes(name)
  );

  if(!available.length) {
    speakerHistory[team]=[];
    available=names;
  }

  const name=available[
    Math.floor(Math.random()*available.length)
  ];

  speakerHistory[team].push(name);
  return name;
}

/* ==========================================
  БЕТТЕРДІ ҚҰРАСТЫРУ
========================================== */

function introPage() {
  return `<section class="slide">
    <span class="eyebrow">ФИЗИКА • 2.4.2</span>
    <div class="card">
      <h1>${esc(lesson.title)}</h1>

      <div class="definition">
        <p class="green">${esc(lesson.goal)}</p>
      </div>

      <div class="formula">
        ${FORMULA.tension}
        &nbsp; | &nbsp;
        ${FORMULA.capillary}
      </div>

      <div class="grid2">
        <div class="example">
          <p>📘 Түсіндірме, конспект, 12 есеп</p>
        </div>
        <div class="definition">
          <p>🏆 3 команда, 18 сұрақ</p>
        </div>
      </div>

      <p class="blue">80 минут • By Darkhan</p>
    </div>
  </section>`;
}

function theoryPage(t,i) {
  return `<section class="slide">
    <span class="eyebrow">
      ТҮСІНДІРМЕ ${i+1}/${lesson.theory.length}
    </span>

    <h2>${esc(t.title)}</h2>

    <div class="card">
      <div class="definition">
        <p class="green">${esc(t.definition)}</p>
      </div>

      <div class="photo-layout">
        ${visual(t.visual)}
        <div><p>${esc(t.detail)}</p></div>
      </div>

      <div class="formula">${t.formula}</div>

      <div class="example">
        <p class="gold">
          Мысал: ${esc(t.example)}
        </p>
      </div>

      <div class="warning">
        <p class="red">
          Маңызды: ${esc(t.warning)}
        </p>
      </div>
    </div>
  </section>`;
}

function notebookPage(part) {
  const start=part*2;

  return `<section class="slide">
    <span class="eyebrow">ДӘПТЕРГЕ ЖАЗЫП АЛ</span>
    <h2>📘 Конспект — ${part+1}-бөлім</h2>

    ${lesson.notes.slice(start,start+2)
      .map((n,i)=>`
        <div class="notebook-item">
          <div class="notebook-number">
            ${start+i+1}. ${esc(n[0])}
          </div>
          <p class="green">${esc(n[1])}</p>
          <p class="blue">${esc(n[2])}</p>
          <p class="red">${esc(n[3])}</p>
        </div>
      `).join("")}
  </section>`;
}

function problemPage(level,part) {
  const labels=[
    "🟢 1-деңгей — Оңай",
    "🟡 2-деңгей — Орташа",
    "🔴 3-деңгей — Күрделі"
  ];

  const start=part*2;

  return `<section class="slide">
    <span class="level ${["easy","medium","hard"][level]}">
      ${labels[level]}
    </span>

    <h2>✍️ Дәптер есептері</h2>

    ${level===2?`
      <div class="example">
        <p class="gold">
          Калькуляторды қолдануға болады.
          Шешуді дәптерге толық жазыңдар.
        </p>
      </div>
    `:""}

    ${lesson.problems[level]
      .slice(start,start+2)
      .map((p,i)=>`
        <div class="problem">
          <p class="problem-title">
            ${start+i+1}-есеп. ${esc(p[0])}
          </p>

          <div class="data-line">
            <span class="blue">Берілгені:</span>
            ${esc(p[1])}
          </div>

          <div class="data-line">
            <span class="green">Табу:</span>
            ${esc(p[2])}
          </div>

          <p>
            Берілгені → SI → Формула →
            Шешуі → Жауабы
          </p>

          <button onclick="toggleAnswer('ans_${level}_${part}_${i}')">
            Жауапты көрсету
          </button>

          <div id="ans_${level}_${part}_${i}"
            class="answer hidden">
            ${esc(p[3])}
          </div>
        </div>
      `).join("")}
  </section>`;
}

function toggleAnswer(id) {
  $(id).classList.toggle("hidden");
}

function quizStart() {
  const noteCount=Math.ceil(lesson.notes.length/2);
  const problemCount=lesson.problems.reduce(
    (sum,group)=>sum+Math.ceil(group.length/2),
    0
  );

  return 1+lesson.theory.length+noteCount+problemCount;
}

function quizIndex() {
  return currentPage-quizStart();
}

function isQuizPage() {
  const i=quizIndex();
  return i>=0&&i<lesson.quiz.length;
}

function quizPage(item,index) {
  const [type,question,choices,correct]=item;
  const team=teamForQuestion(index);
  const result=answered[index];

  const speaker=isQuizPage()&&quizIndex()===index
    ?currentSpeaker:"";

  return `<section class="slide">
    <span class="eyebrow">
      КОМАНДАЛЫҚ ОЙЫН ${index+1}/${lesson.quiz.length}
    </span>

    <h2>🏆 ${esc(type)}</h2>

    <div class="team-turn">
      ${[0,1,2].map(t=>`
        <span class="turn-pill ${t===team?"active":""}">
          ${t+1}-команда • ${scores[t]} ұпай
        </span>
      `).join("")}
    </div>

    <div class="player-banner">
      <strong>${team+1}-команданың кезегі</strong>
      <p>
        🎲 Жауап беретін оқушы:
        <b>${esc(speaker||"Таңдалуда...")}</b>
      </p>
    </div>

    <div class="card">
      <p class="quiz-question">${esc(question)}</p>

      <div class="choices">
        ${choices.map((option,i)=>`
          <button
            class="choice
              ${result&&i===correct?"correct":""}
              ${result&&i===result.choice&&i!==correct?"wrong":""}"
            onclick="submitAnswer(${index},${i})"
            ${result?"disabled":""}>
            ${"ABCD"[i]}. ${esc(option)}
          </button>
        `).join("")}
      </div>

      ${result?`
        <div class="answer">
          ${result.choice===correct
            ?"✅ Дұрыс! +10 ұпай"
            :"❌ Қате жауап"}

          Дұрыс жауап: ${esc(choices[correct])}
        </div>

        <p class="blue">
          Келесі команда автоматты түрде ашылады...
        </p>
      `:""}
    </div>
  </section>`;
}

function resultsPage() {
  const best=Math.max(...scores);

  return `<section class="slide">
    <span class="eyebrow">САБАҚ ҚОРЫТЫНДЫСЫ</span>
    <h2>🏆 Командалардың нәтижелері</h2>

    <div class="grid3">
      ${scores.map((score,i)=>`
        <div class="team-card">
          <h3>${i+1}-команда</h3>
          <div class="score">${score} ұпай</div>
          <p>
            ${score===best&&score>0
              ?"🏅 Ең жоғары ұпай"
              :"Жарайсыңдар!"}
          </p>
        </div>
      `).join("")}
    </div>

    <div class="card">
      <h3>Қорытынды сұрақтар</h3>

      <p>Беттік керілу қандай құбылыс?</p>
      <p>Капиллярлық көтерілу неге тәуелді?</p>
      <p>Кристалл мен аморфты дененің айырмашылығы қандай?</p>

      <button onclick="restartQuiz()">
        🔄 Ойынды қайта бастау
      </button>
    </div>
  </section>`;
}

function homeworkPage() {
  return `<section class="slide">
    <span class="eyebrow">ҮЙ ТАПСЫРМАСЫ</span>
    <h2>🏠 Жаңа үй тапсырмасы</h2>

    <div class="card">
      <h3 class="red">1. Екі күрделі есеп</h3>
      <ol>
        ${lesson.homework.calculations.map(q=>
          `<li>${esc(q)}</li>`
        ).join("")}
      </ol>

      <div class="warning">
        <p class="red">
          Есептерді SI жүйесіне келтіріп,
          формула және толық шешу жолымен орындаңдар.
        </p>
      </div>

      <h3 class="green">2. Бақылау және зерттеу</h3>
      <ol>
        ${lesson.homework.observation.map(q=>
          `<li>${esc(q)}</li>`
        ).join("")}
      </ol>

      <h3 class="blue">3. Ауызша қорғау</h3>
      <p>${esc(lesson.homework.speaking)}</p>
    </div>

    <p class="blue">Сау болыңыздар! By Darkhan</p>
  </section>`;
}

function buildPages() {
  pages=[
    introPage(),
    ...lesson.theory.map(theoryPage),

    ...Array.from(
      {length:Math.ceil(lesson.notes.length/2)},
      (_,i)=>notebookPage(i)
    ),

    ...lesson.problems.flatMap((group,level)=>
      Array.from(
        {length:Math.ceil(group.length/2)},
        (_,part)=>problemPage(level,part)
      )
    ),

    ...lesson.quiz.map(quizPage),
    resultsPage(),
    homeworkPage()
  ];
}

function renderPage() {
  buildPages();

  currentPage=Math.max(
    0,Math.min(currentPage,pages.length-1)
  );

  $("screen").innerHTML=pages[currentPage];

  $("pageNumber").textContent=
    `${currentPage+1} / ${pages.length}`;

  $("progressFill").style.width=
    `${100*(currentPage+1)/pages.length}%`;
}

function changePage(step) {
  stopNext();

  const old=currentPage;

  currentPage=Math.max(
    0,Math.min(currentPage+step,pages.length-1)
  );

  if(currentPage!==old&&isQuizPage()) {
    currentSpeaker=pickSpeaker(
      teamForQuestion(quizIndex())
    );
  }

  renderPage();
}

function submitAnswer(index,choice) {
  if(answered[index]) return;

  const team=teamForQuestion(index);

  if(!teamNames(team).length) {
    alert("Алдымен оқушыларды 3 командаға бөліңіз.");
    openAttendance();
    return;
  }

  const correct=lesson.quiz[index][3];

  answered[index]={team,choice};

  if(choice===correct) {
    scores[team]+=10;
  }

  renderPage();
  renderTeams();

  nextTimer=setTimeout(()=>{
    nextTimer=null;

    if(currentPage!==quizStart()+index) return;

    currentPage=Math.min(
      currentPage+1,pages.length-1
    );

    if(isQuizPage()) {
      currentSpeaker=pickSpeaker(
        teamForQuestion(quizIndex())
      );
    }

    renderPage();
  },2500);
}

function restartQuiz() {
  stopNext();

  scores=[0,0,0];
  answered={};
  speakerHistory=[[],[],[]];

  if(isQuizPage()) {
    currentSpeaker=pickSpeaker(
      teamForQuestion(quizIndex())
    );
  }

  renderPage();
  renderTeams();
}

/* ==========================================
  ҚОЗҒАЛАТЫН КАЛЬКУЛЯТОРЛАР
========================================== */

document.querySelectorAll(".floating").forEach(panel=>{
  let dragging=false;
  let dx=0,dy=0;

  panel.addEventListener("pointerdown",e=>{
    if(e.target.closest(
      "button,input,select,textarea,label,a"
    )) return;

    if(e.target.closest(
      "#attendanceList,#teamLists"
    )) return;

    const rect=panel.getBoundingClientRect();

    dx=e.clientX-rect.left;
    dy=e.clientY-rect.top;
    dragging=true;

    panel.style.zIndex=++zCounter;
    panel.setPointerCapture(e.pointerId);
    e.preventDefault();
  });

  panel.addEventListener("pointermove",e=>{
    if(!dragging) return;

    const left=Math.max(0,Math.min(
      innerWidth-panel.offsetWidth,e.clientX-dx
    ));

    const top=Math.max(0,Math.min(
      innerHeight-panel.offsetHeight,e.clientY-dy
    ));

    panel.style.left=left+"px";
    panel.style.top=top+"px";
    panel.style.right="auto";
  });

  panel.addEventListener("pointerup",()=>dragging=false);
  panel.addEventListener("pointercancel",()=>dragging=false);
});

/* ==========================================
  МАТЕМАТИКАЛЫҚ КАЛЬКУЛЯТОР
========================================== */

let mathExpression="";

const mathButtons=[
  "7","8","9","÷",
  "4","5","6","×",
  "1","2","3","−",
  "0",".","(",")",
  "+","^","√","π",
  "sin","cos","tan","log",
  "ln","C","⌫","="
];

$("mathKeys").innerHTML=mathButtons.map(key=>
  `<button onclick="mathPress('${key}')">
    ${key}
  </button>`
).join("");

function mathPress(key) {
  if(key==="C") {
    mathExpression="";
    $("mathResult").textContent="Тазаланды.";
  } else if(key==="⌫") {
    mathExpression=mathExpression.slice(0,-1);
  } else if(key==="=") {
    try {
      const answer=evaluateMath(mathExpression);
      $("mathResult").textContent=
        "Жауабы: "+Number(answer.toPrecision(12));
    } catch {
      $("mathResult").textContent="Өрнекті тексеріңіз.";
    }
    return;
  } else if(
    ["√","sin","cos","tan","log","ln"].includes(key)
  ) {
    mathExpression+=key+"(";
  } else {
    mathExpression+=key;
  }

  $("mathDisplay").value=mathExpression;
}

function evaluateMath(input) {
  const source=input
    .replaceAll("×","*")
    .replaceAll("÷","/")
    .replaceAll("−","-")
    .replaceAll("π",String(Math.PI))
    .replace(/\s+/g,"");

  const tokens=source.match(
    /(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|√|sin|cos|tan|log|ln|[()+\-*/^]/gi
  );

  if(!tokens||tokens.join("")!==source) {
    throw Error("Қате таңба");
  }

  let pos=0;

  function atom() {
    const token=tokens[pos++];

    if(token==="(") {
      const x=sum();
      if(tokens[pos++]!==")")throw Error("Жақша");
      return x;
    }

    if(
      token!==undefined &&
      !Number.isNaN(Number(token))
    ) {
      return Number(token);
    }

    if(["√","sin","cos","tan","log","ln"].includes(token)) {
      if(tokens[pos++]!=="(")throw Error("Функция");

      const x=sum();

      if(tokens[pos++]!==")")throw Error("Жақша");

      if(token==="√")return Math.sqrt(x);
      if(token==="sin")return Math.sin(x*Math.PI/180);
      if(token==="cos")return Math.cos(x*Math.PI/180);
      if(token==="tan")return Math.tan(x*Math.PI/180);
      if(token==="log")return Math.log10(x);
      if(token==="ln")return Math.log(x);
    }

    throw Error("Мән");
  }

  function power() {
    let value=atom();

    if(tokens[pos]==="^") {
      pos++;
      value=Math.pow(value,unary());
    }

    return value;
  }

  function unary() {
    if(tokens[pos]==="-") {
      pos++;
      return -unary();
    }

    if(tokens[pos]==="+") {
      pos++;
      return unary();
    }

    return power();
  }

  function product() {
    let value=unary();

    while(["*","/"].includes(tokens[pos])) {
      const operator=tokens[pos++];
      const right=unary();

      value=operator==="*"
        ?value*right:value/right;
    }

    return value;
  }

  function sum() {
    let value=product();

    while(["+","-"].includes(tokens[pos])) {
      const operator=tokens[pos++];
      const right=product();

      value=operator==="+"
        ?value+right:value-right;
    }

    return value;
  }

  const result=sum();

  if(pos!==tokens.length||!Number.isFinite(result)) {
    throw Error("Нәтиже анықталмады");
  }

  return result;
}

/* ==========================================
  ФИЗИКАЛЫҚ КАЛЬКУЛЯТОР
========================================== */

const formulas=[
  {
    name:"Беттік керілу F=σl",
    vars:["F","sigma","l"],
    units:["Н","Н/м","м"],
    solve:(v,x)=>
      x==="F"?v.sigma*v.l:
      x==="sigma"?v.F/v.l:
      v.F/v.sigma
  },
  {
    name:"Беттік энергия W=σA",
    vars:["W","sigma","A"],
    units:["Дж","Н/м","м²"],
    solve:(v,x)=>
      x==="W"?v.sigma*v.A:
      x==="sigma"?v.W/v.A:
      v.W/v.sigma
  },
  {
    name:"Сабын қабықшасы F=2σl",
    vars:["F","sigma","l"],
    units:["Н","Н/м","м"],
    solve:(v,x)=>
      x==="F"?2*v.sigma*v.l:
      x==="sigma"?v.F/(2*v.l):
      v.F/(2*v.sigma)
  },
  {
    name:"Сабын қабықшасы W=2σA",
    vars:["W","sigma","A"],
    units:["Дж","Н/м","м² (бір бет)"],
    solve:(v,x)=>
      x==="W"?2*v.sigma*v.A:
      x==="sigma"?v.W/(2*v.A):
      v.W/(2*v.sigma)
  },
  {
    name:"Капилляр h=2σcosθ/(ρgr)",
    vars:["h","sigma","theta","rho","r"],
    units:["м","Н/м","градус","кг/м³","м"],
    solve:(v,x)=>{
      const g=9.81;
      const cos=Math.cos(v.theta*Math.PI/180);

      if(x==="h")
        return 2*v.sigma*cos/(v.rho*g*v.r);
      if(x==="sigma")
        return v.h*v.rho*g*v.r/(2*cos);
      if(x==="rho")
        return 2*v.sigma*cos/(v.h*g*v.r);
      if(x==="r")
        return 2*v.sigma*cos/(v.h*v.rho*g);

      const value=v.h*v.rho*g*v.r/(2*v.sigma);
      if(value < -1 || value > 1) throw Error();
      return Math.acos(value)*180/Math.PI;
    }
  },
  {
    name:"Тығыздық ρ=m/V",
    vars:["rho","m","V"],
    units:["кг/м³","кг","м³"],
    solve:(v,x)=>
      x==="rho"?v.m/v.V:
      x==="m"?v.rho*v.V:
      v.m/v.rho
  }
];

function selectFormula() {
  const f=formulas[
    Number($("formulaSelect").value)
  ];

  $("unknownSelect").innerHTML=f.vars.map(v=>
    `<option value="${v}">${v}</option>`
  ).join("");

  drawPhysicsFields();
}

function drawPhysicsFields() {
  const f=formulas[
    Number($("formulaSelect").value)
  ];

  const target=$("unknownSelect").value;

  $("physicsFields").innerHTML=f.vars
    .filter(v=>v!==target)
    .map(v=>{
      const unit=f.units[f.vars.indexOf(v)];

      return `<label>${v} (${esc(unit)})</label>
        <input type="number" step="any"
         id="phys_${v}"
         placeholder="${v} мәнін енгізіңіз">`;
    }).join("");

  $("physicsResult").textContent=
    "Белгілі шамаларды SI жүйесінде енгізіңіз.";
}

function calculatePhysics() {
  const f=formulas[
    Number($("formulaSelect").value)
  ];

  const target=$("unknownSelect").value;
  const values={};

  for(const name of f.vars) {
    if(name===target)continue;

    const raw=$("phys_"+name).value.trim();

    if(raw==="") {
      $("physicsResult").textContent=
        "Барлық мәнді енгізіңіз.";
      return;
    }

    values[name]=Number(raw);
  }

  try {
    const result=f.solve(values,target);

    if(!Number.isFinite(result))throw Error();

    const unit=f.units[f.vars.indexOf(target)];

    $("physicsResult").textContent=
      `Формула: ${f.name}\n\n`+
      "Берілгені:\n"+
      Object.entries(values).map(([name,value])=>
        `${name} = ${value}`
      ).join("\n")+
      `\n\nТабу керек: ${target}\n`+
      `Жауабы: ${target} = `+
      `${Number(result.toPrecision(10))} ${unit}`;
  } catch {
    $("physicsResult").textContent=
      "Есептеу мүмкін емес. Мәндерді тексеріңіз.";
  }
}

/* ==========================================
  ІСКЕ ҚОСУ ЖӘНЕ УАҚЫТ
========================================== */

$("formulaSelect").innerHTML=formulas.map((f,i)=>
  `<option value="${i}">${esc(f.name)}</option>`
).join("");

selectFormula();
renderAttendance();

const presentIds=presentStudents().map(s=>s.id);
const assignedIds=teams.flat();

const teamsValid=
  assignedIds.length===presentIds.length&&
  new Set(assignedIds).size===assignedIds.length&&
  presentIds.every(id=>assignedIds.includes(id));

if(!teamsValid&&presentIds.length) {
  shuffleTeams(false);
}

renderTeams();
renderPage();

function updateLessonTimer() {
  const elapsed=Math.floor(
    (Date.now()-startedAt)/1000
  );

  const hours=Math.floor(elapsed/3600);
  const minutes=Math.floor((elapsed%3600)/60);
  const seconds=elapsed%60;

  $("timer").textContent=
    (hours?String(hours).padStart(2,"0")+":":"")+
    String(minutes).padStart(2,"0")+":"+
    String(seconds).padStart(2,"0");
}

function updateCurrentTime() {
  $("currentTime").textContent=
    new Intl.DateTimeFormat("en-GB",{
      timeZone:"Asia/Almaty",
      hour:"2-digit",
      minute:"2-digit",
      second:"2-digit",
      hourCycle:"h23"
    }).format(new Date());
}

updateLessonTimer();
updateCurrentTime();

setInterval(()=>{
  updateLessonTimer();
  updateCurrentTime();
},1000);
