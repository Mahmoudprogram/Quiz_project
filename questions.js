// creating an array 

  let ques=[ {
    opt:[
        'Ihre Tochter heißt Helen und sie ist sieben jahre alt',
        "Gegen sieben uhr klingele ich an der Tür",
        'Gegen 7 uhr kannst du kommen',
        'Meine beste Freundin ruft mich an',
        'Ich habe viel sport gemacht',
        'Verheiratet mit',
        'Ich muss mal ins Bad',
        'Ehefrau',
        'Schwiegersohn',
        "Also was meinst du rot oder blau",
        'Geschichten erzählen',
        'Fußballbilder sammeln',
        'Sachen auf dem Flohmarkt verkaufen',
        'Ich war auch zu Hause ich hatte Besuch',
        'Er muss hier raus',
        'Ich hatte gestern Fieber',
        'Ich wohne neben an',
        'Ehemann',
        'Wer bist du denn?',
        'Das geht wirklich nicht',
        'Comics lesen',
        'Ich habe viel Essen und wenig Sport gemacht',
        'Mit Puppen spielen',
        'Ich stehe gegenüber vom Hause',
        'nicht so',
        'Ich bin ein Fuchs',
        'Ich war zu Hause',
        'Ich hatte online uterricht',
        'Ich habe Essen gemacht',
        'Mein opa auch schon Bäcker',
        'Gib mir die post louis',
        'Ich bin kein Vogel',
        'Ich gehe nachts spazieren',
        'Enkel/Enkelin',
        'Sam komm wir ziegin dir die wohnung',
        'was hast du im Lockdown gemacht',
        'witze erzählen',
        'zeichnen',
        'Süßigkeiten essen',
        'Auf keinen Fall',
        'Ich kann im dunkeln sehen',
        'Ich war im park',
        'Ich war beim Arzt',
        'Ich habe sport gemacht',
        'Helen und Samuel werden dann schlafen',
        'Ich hatte Besuch',
        'Möchtest du was triken Nic',
        'Blau ich finde besser',
        'Alles in ordnung',
        'Draußen übernachten',
        'kann er bei dir wohnen Nic',
        'auf Bäume klettern',
        'was hast du gestern gemacht',
        'Ich habe einen covid test gemacht',
        'Ich war oft im park',
        'Du hast ja meine Handynummer',
        'Wann soll ich kommen ? frage ich',
        'Ich bin heute mit meinem Ehemann verbredet',
        'Ich nehme den anruf an',
        'Ich suche einen Babysitter',
        'getrennt',
        'gemeinsam',
        'Hallo,kann ich dir eine frage stellen',
        'über den beruf sprechen',
        'ja das kannst du ,sage ich',
        'Meine beste Freundin und ihr mann haben nicht oft ein Date',
        'Ich mag ihre kinder',
        'wenn ich auf Helen und Samuel aufpasse',
        'wir haben ein Date und wir wollen ins kino gehen',
        'Daher helfe ich ihnen gerne',
        'Die Möbel',
        'Ich habe noch nie ein Baby auf dem Arm gehabt',
        'Du kannst fernsehen',
        'Ich bin Journalistin',
        'Sie sind sehr brav und um diese uhrzeit sind sie schon im Bett',
        'Die kinder liegen im Bett',
        'dass du heute Abend Babysitter bist',
        'Als Babysitter werde ich auf Helen und Samuel aufpassen',
        'Mechatroniker',
        'Hättest du zeit?',
        'Der Fernsehen ist an und es stehen snacks und Getränke auf dem Tisch',
        'Ich überlege kurz,ja ich habe zeit',
        'Was ist sie von Beruf?',
        'Bist du sicher? frage ich',
        'Ich war nie Babysitter',
        'Meine beste freundin öffnet',
        'Die Ziele',
        'geschieden',
        'wir werden um 12 uhr nachts zurük sein',
        'Nach dem befenden fragen',
        'sie hat einen sohn und eine Tochter',
        'Ich arbeite bei',
        'Praktikum',
        'Begrußung',
        'über den Familienstand sprechen',
        'Das Gespräch',
        'Ihr son heißt Samuel und er ist sieben jahre alt',
        'Architekt',
        'Raten sie mal',
        'Ich habe keine Ahnung von Babys',
        'Ich arbeite als',
        'Ich wünsche dir einen schönen Abend',
        'Ich stelle dir ein paar snacks und Getränke auf den Tisch',
        'Abschid',
        'Was machst du beruflich',
        'Meine beste freundin hat zwei kinder',
        'schwiegertochter',
        'wörter buchtabieren',
        'sich und andere vorstellen',
        'wenn ein problem du sein soltte dann rufe mich an',
        'und so weiter'
  
    ]
}
]

let questios = [
  

    [{
        numb:1,
        answer: "Was hast du gestern gemacht?",    
        question:'ماذا فعلت أمس؟',
        options:[
            "Was hast du gestern gemacht?",
            ques[0].opt[Math.floor(Math.random() * 100)],
            "Was hast du gestern nicht gemacht?",
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
        
    },
    {
        numb:2,
        answer:"Blau ich finde besser.",
        question:"الأزراق أجده أفضل",
        options:[
            "Blau ich finde besser.",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            
        ]
    },
    {
        numb:3,
        answer:"Was hast du im lockdown gemacht?",
        question:  "ماذا فعلت خلال فترة الحظر ",
        options:[
            "Was hast du im lockdown gemacht?",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:4,
        answer:"Alles in ordnung",
        question:"هل كل شيء على ما يرام  ",
        options:[
            "Alles in ordnung",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:5,
        answer:"Ich hatte Besuch",
        question:"كان عندي زائر ",
        options:[
            "Ich hatte Besuch",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    

    },
    {
        numb:6,
        answer:"Möchtest du was trinken Nic?",
        question: "هل تريد أن تشرب شيئا ما نيك",
        options:[
            "Möchtest du was trinken Nic?",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
          
        ]
    },
    {
        numb:7,
        answer:"Ich hatte gestern Fieber",
        question:"كنت أعاني من حمى",
        options:[
            "Ich hatte gestern Fieber",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:8,
        answer:"Ich habe einen covid Test gemacht",
        question:"عملت فحص كورونا",
        options:[
            "Ich habe einen covid Test gemacht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:9,
        answer:"Ich hatte Fieber",
        question: "كنت أعاني من حمى ",
        options:[
            "Ich hatte Fieber",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:10,
        answer:"Ich war oft im park",
        question:  "غالبا ما كنت في الحديقة",
        options:[
            "Ich war oft im park",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:11,
        answer:"Ich war im park",
        question:"كنت في المتنزه ",
        options:[
            "Ich war im park",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:12,
        answer:"Auf bäume klettern",
        question:"يتسلق الشجرة",
        options:[
            "Auf bäume klettern",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:13,
        answer:"Ich war beim Arzt",
        question:"كنت عند الطبيب ",
        options:[
            "Ich war beim Arzt",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:14,
        answer:"Ich kann im dunkeln sehen",
        question:"استطيع الرؤية في الظلام",
        options:[
            "Ich kann im dunkeln sehen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:15,
        answer:"Kann er bei dir wohnen Nic ? ",
        question:"هل يمكنه ان يعيش معك يا نيك",
        options:[
            "Kann er bei dir wohnen Nic ? ",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:16,
        answer:"Also was meinst du Rot oder Blau",
        question:"ما رأيك أحمر ولا أزرق ",
        options:[
            "Also was meinst du Rot oder Blau",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:17,
        answer:"Ich habe sport gemacht",
        question:"مارست الرياضة",
        options:[
            "Ich habe sport gemacht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:18,
        answer:"Draußen übernachten",
        question:"المبيت بلخارج",
        options:[
            "Draußen übernachten",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:19,
        answer:"Süßigkeiten essen",
        question:"أكل الحلويات",
        options:[
            "Süßigkeiten essen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:20,
        answer:"Er muss hier raus",
        question:"يجب أن يخرج من هنا ",
        options:[
            "Er muss hier raus",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:21,
        answer:"Er muss hier raus",
        question:"يجب أن يخرج من هنا",
        options:[
            "Er muss hier raus",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:22,
        answer:"Enkel /Enkelin",
        question:"حفيد وحفيدة",
        options:[
            "Enkel /Enkelin",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:23,
        answer:"Ich gehe nachts spazieren",
        question:"أتنزه في الليل",
        options:[  
            "Ich gehe nachts spazieren",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:24,
        answer:"Ich bin kein vogel",
        question:"أنا لست طائر",
        options:[
            "Ich bin kein vogel",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:25,
        answer:"Ich war auch zu hause ich hatte Besuch",
        question:"كنت في البيت أيضا كان عندي زائر",
        options:[
            "Ich war auch zu hause ich hatte Besuch",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:26,
        answer:"Gib mir die post louis",
        question:"اعطيني البريد لويس",
        options:[
            "Gib mir die post louis",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:27,
        answer:"Mein opa war auch schon Bäcker",
        question:"جدي كان خباز",
        options:[
            "Mein opa war auch schon Bäcker",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:28,
        answer:"Sam komm wir zeigen dir die wohnung",
        question:"سام تعال نريك الشقة",
        options:[
            "Sam komm wir zeigen dir die wohnung",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:29,
        answer:"Ich habe Essen gemacht",
        question:"أعددت الطعام",
        options:[
            "Ich habe Essen gemacht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:30,
        answer:"Ich hatte online uterricht",
        question:"كان لدي درس على الأنترنت",
        options:[
            "Ich hatte online uterricht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:31,
        answer:"Ich bin ein Fuchs",
        question:"أنا ثعلب",
        options:[
            "Ich bin ein Fuchs",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:32,
        answer:"nicht so",
        question:"ليس هكذا",
        options:[
            "nicht so",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:33,
        answer:"Mit puppen spielen",
        question:"اللعب بلدمى",
        options:[
            "Mit puppen spielen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }, {
        numb:34,
        answer:"Wer bist du denn",
        question:"من أنت إذن",
        options:[  
            "Wer bist du denn",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }, {
        numb:35,
        answer:"Das geht wirklich nicht",
        question:"هذا لن يحدث حقا",
        options:[
            "Das geht wirklich nicht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }, {
        numb:36,
        answer:"Ich habe viel Essen und wenig sport gemacht",
        question:"عملت الكثير من الطعام ولم أمارس الرياضة",
        options:[
            "Ich habe viel Essen und wenig sport gemacht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }, {
        numb:37,
        answer:"Verheiratet mit",
        question:"متزوج من",
        options:[
            "Verheiratet mit",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }, 
     {
        numb:38,
        answer:"Ich stehe gegenüber vom Haus",
        question:"أنا أقف مقابل المنزل",
        options:[
            "Ich stehe gegenüber vom Haus",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }, {
        numb:39,
        answer:"Sachen auf dem Flohmarkt verkaufen",
        question:"بيع أشياء في السوق الحرة",
        options:[
            "Sachen auf dem Flohmarkt verkaufen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }, {
        numb:40,
        answer:"Geschichten erzählen",
        question:"حكاية قصص",
        options:[
            "Geschichten erzählen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:41,
        answer:"Ich habe viel sport gemacht",
        question:"مارست الكثير من الرياضة",
        options:[
            "Ich habe viel sport gemacht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:42,
        answer:"Fußballbilder sammeln",
        question:"يجمع صور لاعبين",
        options:[
            "Fußballbilder sammeln",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:43,
        answer:"Comics lesen",
        question:"قصص مصورة",
        options:[
            "Comics lesen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:44,
        answer:"Ich wohne neben an",
        question:"أنا أعيش بجانبك",
        options:[
            "Ich wohne neben an",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:45,
        answer:"Witze erzählen",
        question:"حكي نكات",
        options:[  
            "Witze erzählen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:46,
        answer:"Ich war zu Hause",
        question:"كنت في البيت",
        options:[
            "Ich war zu Hause" ,
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:47,
        answer:"Auf keinen fall",
        question:"لا يمكن بأي شكل من الأشكال",
        options:[
            "Auf keinen fall",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:48,
        answer:"Zeichnen",
        question:"يرسم",
        options:[
            "Zeichnen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:49,
        answer:"Ihr son heißt Samuel und er ist sieben Jahre alt.",
        question:"ولدها اسمه صامويل وعمره سبع سنوات",
        options:[
            "Ihr son heißt Samuel und er ist sieben Jahre alt.-+",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:50,
        answer:"Die kinder liegen im Bett",
        question:"الأطفال في السرير",
        options:[
            "Die kinder liegen im Bett",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:51,
        answer:"Ich arbeite bei",
        question:"أنا أعمل عند",
        options:[
            "Ich arbeite bei",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:52,
        answer:"Mechatroniker",
        question:"ميكانيكي",
        options:[
            "Mechatroniker",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:53,
        answer:"Ich mag ihre Kinder",
        question:"أنا أحب أطفالها",
        options:[
            "Ich mag ihre Kinder",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:54,
        answer:"Du kannst Fernsehen",
        question:"يمكنك مشاهدة التلفاز",
        options:[
            "Du kannst Fernsehen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:55,
        answer:"Daher helfe ich ihnen gerne",
        question:"لذلك أنا سعيد بمساعدتك",
        options:[
            "Daher helfe ich ihnen gerne",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:56,
        answer:"Ich suche einen Babysitter",
        question:"أبحث عن مربية أطفال",
        options:[
            "Ich suche einen Babysitter",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:57,
        answer:"Ich bin heute mit meinem Ehemann verabredet",
        question:"لدي موعد مع زوجي اليوم",
        options:[
            "Ich bin heute mit meinem Ehemann verabredet",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:58,
        answer:"Architekt",
        question:"مهندس معماري",
        options:[
            "Architekt",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:59,
        answer:"Meine beste Ferundin ruft mich an",
        question:"أعز صديق يتصل بي",
        options:[
            "Meine beste Ferundin ruft mich an",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:60,
        answer:"Was machst du beruflich?",
        question:"ماهي مهنتك أو وظيفتك؟",
        options:[
            "Was machst du beruflich?",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:61,
        answer:"dass du heute Abend Babysitter bist",
        question:"أنت الليلة مربي أطفال",
        options:[
            "dass du heute Abend Babysitter bist",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:62,
        answer:"Ich bin journalistin",
        question:"أنا صحفية",
        options:[
            "Ich bin journalistin",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:63,
        answer:"ja das kannst du,sage ich",
        question:"نعم تستطيعين ذلك قلت أنا",
        options:[
            "ja das kannst du,sage ich",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:64,
        answer:"Der Fernsehen ist an, und es stehen Snacks und Getränke auf dem Tisch",
        question:"التلفزيون يعمل وهناك وجبات خفيفة ومشروبات على الطاولة",
        options:[
            "Der Fernsehen ist an, und es stehen Snacks und Getränke auf dem Tisch",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:65,
        answer:"Wenn ich auf Helen und Samuel aufpasse",
        question:"عندما أعتني بهيلين وصامويل",
        options:[
            "Wenn ich auf Helen und Samuel aufpasse",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:66,
        answer:"Meine beste Freundin öffnet",
        question:"صديقتي فتحت",
        options:[
            "Meine beste Freundin öffnet",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:67,
        answer:"Ich arbeite als",
        question:"أعمل ك",
        options:[
            "Ich arbeite als",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:68,
        answer:"Hättest du zeit?",
        question:"هل لديك وقت؟",
        options:[
            "Hättest du zeit?",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    }],

    [{
        numb:69,
        answer:"Was machst du denn heir",
        question:"ماذا تفعل هنا",
        options:[
            "Was machst du denn heir",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:70,
        answer:"Ihr kennt euch",
        question:"هل تعرفان بعضكما",
        options:[
            "Ihr kennt euch",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:71,
        answer:"ja ich helfe manchmel im Resturant",
        question:"نعم فاحيانا أساعده في المطعم",
        options:[
            "ja ich helfe manchmel im Resturant",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:72,
        answer:"Und du sprichst Deutsch",
        question:"وتتحدث الألمانية",
        options:[
            "Und du sprichst Deutsch",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:73,
        answer:"Ein bisschen ich mache einen Audiokurs",
        question:"قليلا أقوم بدورة لغة صوتية",
        options:[
            "Ein bisschen ich mache einen Audiokurs",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:74,
        answer:"Wie lange bist du denn schon in Deutschland",
        question:"منذ متى وأنت في ألمانيا",
        options:[
            "Wie lange bist du denn schon in Deutschland",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:75,
        answer:"Ich bin vor ein paar wochen nach Deutschland gekommen",
        question:"أتيت الى ألمانيا قبل بضعة أسابيع",
        options:[
            "Ich bin vor ein paar wochen nach Deutschland gekommen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:76,
        answer:"Aber warum ich meine was machst du hier",
        question:"لكن لماذا أقصد ماذا تفعل هنا",
        options:[
            "Aber warum ich meine was machst du hier",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:77,
        answer:"Nico hat dich gesucht",
        question:"نيكو كان يبحث عنك",
        options:[
            "Nico hat dich gesucht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:78,
        answer:"Aber du warst in der Schweiz",
        question:"ولكنك كنت في سويسرا",
        options:[
            "Aber du warst in der Schweiz",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:79,
        answer:"Woher weißt du dass",
        question:"من أين غرفت ذلك",
        options:[
            "Woher weißt du dass",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:80,
        answer:"Das ist eine lange Geschichte",
        question:"هذه قصة طويلة",
        options:[
            "Das ist eine lange Geschichte",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:81,
        answer:"Okay,und ich möchte die ganz geschichte von Anfang an hörn",
        question:" جيد وأنا أريد أن أستمع للقصة من بدايتها",
        options:[
            "Okay,und ich möchte die ganz geschichte von Anfang an hörn",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:82,
        answer:"pass auf, wir gehen alle ins Resturant ich koche etwas",
        question:"ما رأيك أن نذهب جميعا الى المطعم وأنا ساطبخ طعاما",
        options:[
            "pass auf, wir gehen alle ins Resturant ich koche etwas",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:83,
        answer:"Und nach dem Essen erzählen wir dir alles",
        question:"وبعد الأكل سنخبرك بكل شئ",
        options:[
            "Und nach dem Essen erzählen wir dir alles",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:84,
        answer:"Danke Tarek sehr sehr lecker",
        question:"شكرا طارق لقد كان الأكل لذيذ جدا",
        options:[
            "Danke Tarek sehr sehr lecker",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:85,
        answer:"Freut mich dass es euch geschmect hat",
        question:" سعيد بسماع ذلك",
        options:[
            "Freut mich dass es euch geschmect hat",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:86,
        answer:"Es ist schön wieder hier zu sein",
        question:"جميل أنني عدت الى هنا",
        options:[
            "Es ist schön wieder hier zu sein",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:87,
        answer:"Ich hatte fast ein bisschen Heimweh",
        question:"كاد ان ينتابني شعور بلحنين الى الوطن",
        options:[
            "Ich hatte fast ein bisschen Heimweh",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:88,
        answer:"Hemweh,Du hast Spanien vermisst",
        question:"حنين الى الوطن هل افتقدت اسبانيا",
        options:[
            "Hemweh,Du hast Spanien vermisst",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:89,
        answer:"Nein,Spanien ist mein Heimtland",
        question:"كلا اسبانيا وطني الأم ",
        options:[
            "Nein,Spanien ist mein Heimtland",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:90,
        answer:"Ich komme aus Spanien,aber mein zuhause ist Deutschland",
        question:"انا من اسبانيا ولكن ألمانيا هي موطني",
        options:[
            "Ich komme aus Spanien,aber mein zuhause ist Deutschland",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:91,
        answer:"Und Deutschland hab ich vermisst",
        question:"وأنا افتقدت ألمانيا",
        options:[
            "Und Deutschland hab ich vermisst",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:92,
        answer:"Ja das verstehe ich Deutschland ist auch mein zu hause",
        question:"نعم أتفهم ذلك ألمانيا هي موطني أيضا",
        options:[
            "Ja das verstehe ich Deutschland ist auch mein zu hause",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:93,
        answer:"Ich komme zwar aus der Türkei",
        question:"صحيح أنني من تركيا",
        options:[
            "Ich komme zwar aus der Türkei",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:94,
        answer:"aber ich wohne schon sehr lange hier",
        question:"ولكن أعيش هنا منذ فترة طويلة",
        options:[
            "aber ich wohne schon sehr lange hier",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:95,
        answer:"Wie lange lebst du schon in Deutschland",
        question:"منذ متى وانت تعيش في المانيا",
        options:[
            "Wie lange lebst du schon in Deutschland",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:96,
        answer:"Ich bin vor 30 jahren mit meinen Eltern hier her gekommen",
        question:"اتيت قبل ثلاثين سنة مع والدي الى المانيا",
        options:[
            "Ich bin vor 30 jahren mit meinen Eltern hier her gekommen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:97,
        answer:"Ich bin vor 15 jahren als Mädchen nach Deutschland gekommen",
        question:"انا اتيت قبل 15 سنة الى المانيا",
        options:[
            "Ich bin vor 15 jahren als Mädchen nach Deutschland gekommen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:98,
        answer:"Das land war Fremd die sprache auch ich meine ich war froh",
        question:"لقد كان البلد غريبا واللغة ايضا لقد كنت سعيدة",
        options:[
            "Das land war Fremd die sprache auch ich meine ich war froh",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:99,
        answer:"Ich wollte Spanien verlassen und in Deutschland studieren",
        question:"اردت مغادرة اسبانيا وان ادرس في المانيا",
        options:[
            "Ich wollte Spanien verlassen und in Deutschland studieren",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:100,
        answer:"Aber es war nicht immer leicht alles war neu",
        question:"ولكن لم يكن الامر سهلا كل شيء كان جديد",
        options:[
            "Aber es war nicht immer leicht alles war neu",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:101,
        answer:"Ich hatte Glück Ich hatte Helfe",
        question:"كنت محظوظة وحصلت على مساعدة",
        options:[
            "Ich hatte Glück Ich hatte Helfe",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:102,
        answer:"Es ist wichtig dass man Hilfe hat in so einer Sitaution",
        question:"من المهم ان يحصل المرء على مساعدة في مثل هذه المواقف",
        options:[
            "Es ist wichtig dass man Hilfe hat in so einer Sitaution",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:103,
        answer:"Ich hatte meine Freundin",
        question:"كانت لدي صديقة",
        options:[
            "Ich hatte meine Freundin",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:104,
        answer:"Du meinst Sarah ? Wer ist Sarha ?",
        question:"اتقصدين سارة ومن هي سارة",
        options:[
            "Du meinst Sarah ? Wer ist Sarha ?",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:105,
        answer:"Meine beste Freundin",
        question:"صديقتي المقربة",
        options:[
            "Meine beste Freundin",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:106,
        answer:"Vor fünf jahren ist sie in die schweiz zurük gegangen",
        question:"قبل خمس سنوات عادت الى سويسرا",
        options:[
            "Vor fünf jahren ist sie in die schweiz zurük gegangen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:107,
        answer:"Vor ein paar Wochen habe ich einen Anruf von Sarah gekommen",
        question:"وقبل اسبوعين تلقيت مكالمة من سارة",
        options:[
            "Vor ein paar Wochen habe ich einen Anruf von Sarah gekommen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:107,
        answer:"Ihr vater ist gestorben",
        question:"والدها توفي",
        options:[
            "Ihr vater ist gestorben",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:108,
        answer:"Sie hat meine Helfe gebraucht",
        question:"كانت محتاجة مساعدتي",
        options:[
            "Sie hat meine Helfe gebraucht",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:109,
        answer:"Ich hab meine Sachen gepackt",
        question:"حزمت امتعتي ",
        options:[
            "Ich hab meine Sachen gepackt",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:110,
        answer:"und bin nach Zürich geflogen",
        question:"وسافرت الى زيورخ",
        options:[
            "und bin nach Zürich geflogen",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:111,
        answer:"Warum hast du denn nichts gesagt?",
        question:"ولماذا لم تخبريني بشيء",
        options:[
            "Warum hast du denn nichts gesagt?",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:106,
        answer:"",
        question:"",
        options:[
            "",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:106,
        answer:"",
        question:"",
        options:[
            "",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
    {
        numb:106,
        answer:"",
        question:"",
        options:[
            "",
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
            ques[0].opt[Math.floor(Math.random() * 100)],
        ]
    },
] 

];










