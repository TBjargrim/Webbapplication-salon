import facial from '../Images/facial.jpg'
import Dermapen from '../Images/dermapen.jpg'
import Icepeel from '../Images/icepeel.jpg'
import Freezepen1 from '../Images/freezepen1.jpg'
import EMSlim from '../Images/EMSlim.jpg'
import Wax from '../Images/Wax.jpg'
import Massage from '../Images/Massage.jpg'
import Lashlift from '../Images/Lashlift.jpg'
import NBE from '../Images/NBE.jpg'
import PRX from '../Images/PRX.jpg'
import PRXMicro from '../Images/PRXMicro.jpg'

export const DataTreatments = [
    {
        name: 'Ansiktsbehandling',
        desciption: 'Vi erbjuder olika lyxiga ansiktsbehandlingar som vi kan skräddarsy för just dina behov. Från klassiska till det nyaste på marknaden.',
        image: facial,
        id: 1,
        detailedDescription: [
            {
                name: 'Klassisk Ansiktsbehandling',
                describe: 'En behandling som passar perfekt till alla hudtyper. Ansiktsbehandling inkl frans&bryn färg + plockning.  Inkluderar rengöring, hudanalys, AHA-peeling, ånga, porrengöring, och en härlig hårbottenmassage ,ansiktsmask. Avslutas med ögoncreme, serum och dagcreme.',
            }, {
                name: 'Ansiktsbehandling Lyx',
                describe: 'Komplett klassisk ansiktsbehandling anpassad efter hudtyp. Vi använder Exuviance-produkter. Rekommenderas som förstagångsbehandling eller regelbundet varannan månad. Syrepensling, lätt brynplock, ånga, portömning, massage, ansiktsmask, serum, dag/nattkräm. Max 90 min.',
            },
            {
                name: 'AHA-Behandling/Kemisk Peeling',
                describe: 'AHA-behandlingar med fruktsyror från Exuviance lämpar sig för alla hudtyper, även de allra känsligaste – både dam och herr. AHA-behandlingarna föryngrar huden genom att öka fuktigheten. De reducerar även rynkor, sluter samman porer och reducerar talgproduktionen i huden. Behandlingen förnyar i viss mån hudcellerna. Du kan välja en behandling på 45 minuter, den innehåller avtvätt, AHA-syrebehandling,  serum, ansiktsmask samt dagkräm/nattkräm. Behandlingen lämpar sig som kur varannan vecka 10-15 gånger. Du kan även välja vår 90 minuter långa behandling. Då ingår avtvätt, AHA-syrebehandling, eventuellt ånga, kort brynplock, antingen lång portömning eller lång massage, serum, ansiktsmask samt dagkräm/nattkräm.'
            }

        ]
    },
    {
        name: 'Fransar och Bryn / Lashlift',
        desciption: 'Få dina fransar vackert böjda på ett skonsamt sätt, färgade eller dina bryn formade och färgade.',
        image: Lashlift,
        id: 2,
        detailedDescription: [
{name:'Fransar och bryn',
describe: 'Vi erbjuder klassiska frans och brynfärgnigar. Vi utför även formning av bryn med pincett och vid behov vax.',
},
{name:'Lash Lift med keratinbehandling',
describe: 'Behandlingen är en av de hetaste och nyaste behandlingarna på marknaden. Nu kan du äntligen få vackert böjda fransar med ett av det skonsammaste Lash Lift märket på marknaden "By Bexter" Märket By Bexter är ett Svenskt märke och framtaget av Elisabeth Bexter Auktoriserad Hudterapeut. Fördelarna med Lash lift med keratinbehandling: •Böjer dina fransar i en snygg naturlig böj •Hållbart upp till 12 veckor. •Stärker och vårdar fransarna med vitaminer och mineraler • Keratinet vårdar och stärker fransen med upp till 40% och gör fransen 2-3% längre',
},


]
    },
    {
        name: 'Massage',
        desciption: 'Koppla av när du avnjuter en klassisk ryggmassage, ansiktsmassage eller scalpmassage',
        image: Massage,
        id: 3,
        detailedDescription: [
            {
                // name:'Massage',
                describe:'Massagens viktigaste uppgift är att lösa upp spänningar i musklerna. Sådana spänningar kan uppstå av för lite rörlighet, felaktig arbetsställning eller ansträngning av något slag. Spänningarna kan också ha känslomässiga orsaker. Oro, ilska, och stress kan ge smärtförnimmelse i tex. rygg, axlar, nacke, höfter, och knän. Massage är ett av det säkraste sättet att frisätta Oxytocin som är ”kroppens lugn och ro hormon." Massage stimulerar blodcirkulationen, blodtrycket och stresshormonerna sjunker. Massage ger dessutom en skön stunds avkoppling.'
            }
        ]
    },
    {
        name: 'NBE 500',
        desciption: 'Njut av en effektiv behandling för hudföryngring. Ger enastående effekter utan nålar eller smärta.',
        image: NBE,
        id: 4,
        detailedDescription: [
            {
                name:'Revolutionerande behandlingar för hudföryngring - utan nålar eller smärta.',
                describe:'Med NBE apparaturen utförs njutningsfulla behandlingar utan kirurgiska ingrepp, laserljus eller andra metoder som kan skada huden. Kombinationen av NBE apparaturen tillsammans med behandlingskrämerna ger enastående effekter.   En specialutvecklad kräm för respektive behandlingsområde masseras ljuvligt in i huden. Med hjälp av ljummen applikator som sänder ut radiofrekventa vågor kan krämerna komma ned på djupet  där de aktiva ingredienserna kan verka. Behandlingarna startar igång kroppens egna naturliga system och ger en ökning av kollagen och elastin. Synliga resultat uppkommer direkt och bestående resultat redan efter några få behandlingar.'
            }
        ]
    },
    {
        name: 'Vaxning',
        desciption: 'Vi erbjuder vaxning av ansikte, ben samt arm.',
        image: Wax,
        id: 5,
        detailedDescription: [
            {
                name:'Gör huden mjuk och hårfri.',
                describe:' Vid upprepade behandlingar blir hårväxten många gånger tunnare och glesare. Detta är dock individuellt från person till person. Oftast behöver man vaxa igen efter ungefär fyra – fem veckor. Vid vaxning av kroppen kan huden med fördel torrborstas någon dag innan. Undvik också i möjligaste mån att smörja huden samma dag som du kommer till salongen så blir vaxningen effektivare. Om du har riktigt långt kroppshår (några centimeter) så är det bra om du trimmar ner håren till ungefär en centimeter innan du kommer. Hårstråna måste vara lite utväxta så att vaxet har en chans att fastna och gripa tag. Minst en halv centimeter krävs för att vaxningen ska fungera riktig bra.'
            }
]
    },
    {
        name: 'ICE Peel',
        desciption: 'ICE PEEL är en avancerad behandling som ger omedelbar effekt, den exfolierar och ger en fantastisk lyster.',
        image: Icepeel,
        id: 6,
        detailedDescription: [
            {
                name:'ICE PEEL är en avancerad behandling med omedelbar effekt.',
                describe:'Behandlingen är en ”Quick Fix” som kombinerar potenta styrkor av kemisk peeling med cryoterapi i samma behandling. Kemisk Peeling utförs med Mandelsyra (40%, pH 2,02) som exfolierar döda hudceller för omedelbar lyster. Talg löses för djuprengörande effekt. Behandlingen stimulerar fasthetsfibrer för fasthet och den naturliga fukten (Natural Moisturizing Factor) för ökad fukt. Huden får utjämnad struktur och uppstramad lifting effekt. Cryoterapi utförs med Liquid Ice, IceMask, som stärker kollagen och ger omedelbar uppstramande effekt. Huden mjukgörs och återfuktas med upp till 500%. Rynkor och linjer reduceras, mörka ringar och rodnader motverkas.'
            }
        ]

    },
    {
        name: 'Dermapen 4 / Microneedling',
        desciption: 'En avancerad behandlingsteknik för hudföryngring.',
        image: Dermapen,
        id: 7,
        detailedDescription: [
            {
            name:'Vad är Dermapen och hur går det till? ',
            describe:'Dermapen 4 är en avancerad behandlingsteknik och det senaste genombrottet inom hudföryngring. En Dermapen-behandling går till så att 12 sterila engångsnålar skapar upp till 1300 microkanaler i sekunden ned i huden. Beroende på vilka indikationer som behandlas går nålarna olika djupt ned i huden. Microkanalerna gör det dels möjligt att slussa ned aktiva ämnen ned på djupet i huden, dels har de en i sig stimulerande effekt på bildandet av kollagen i huden. Dermapen™ rekommenderas till bland annat: Huduppstramning- och föryngring Fina linjer och rynkor Stora porer Oren hud, acne Milier, keratosis pilares Pigmenteringar Ärr - inclusive acne ärr, kirurgiska ärr och brännskadorv Hudbristningar.'},
        ]
    },
    {
        name: 'Freezepen Cryobehandling',
        desciption: 'En naturlig behandling för att effektivt eliminera olika hudfäckar.',
        image: Freezepen1,
        id: 8,
        detailedDescription: [
{
    // name:'Freezepen Cryobehandling',
    describe:'Cryobehandling är en effektiv och naturlig behandling som effektivt eliminerar olika hudfläckar som t.e.x. vårtor på bara några sekunder med hjälp av kyla.Cryobehandling en noggrann behandling som arbetar med dikväveoxid (lustgas) för att frysa pigment och hudfläckar på 1-20 mm. Med Freezpen är risken för bieffekter minimal och endast 1-3 behandlingar brukar krävas för önskat resultat. Freezpen används bla för att behandla följande indikationer:',
    list:[
        'Vårtor,', '  Fibrom,', '   Pigmentfläckar,', '   Åldersfläckar,', '   Skintags,', '   Angiom (cherryspoots).'
    ],
    extra:'Innan besöket är det VIKTIGT att du kollar upp fläckarna att dem är godartade. Vårtor kan krävas fler behandlingar.',

}

        ]
    },
    {
        name: 'EM Slim Sculpt',
        desciption: 'EM Slim Sculpt är en maskin som utnyttjar elektromagnetiska impulser för att förbränna fett och bygga muskler medan du vilar.',
        image: EMSlim,
        id: 9,
        detailedDescription: [
            {
                name:'EM Slim Sculpt',
                describe:'EmSlim Sculpt levererar elektromagnetiska våg (HI-EMT) som expanderar och drar samman musklerna som med träning där man omformar inre strukturen av muskeln som sedan ökar tillväxten och därefter producerar nya kedjor av muskelfibrer. Är bra för, Huduppstramning, Fettreducering, Muskeluppbyggnad och även Rehabträning. Tidseffektiv 30 000 kontraktioner på 30 min. Vilka muskler kan tränas och tonas?',
                list: [
                    'Mage, ', 'Lår, ', 'Vader, ', 'Rumpa, ', '& Biceps/ Triceps'
                ],
                extra: 'Just nu kan du boka en gratis konsultation.'
            }
        ]


    },
    {
        name: 'PRX-T33',
        desciption: 'PRX är en ny och revolutionerande behandling som arbetar för hudföryngring och anti-aging.',
        image: PRX,
        id: 10,
        detailedDescription: [
            {
                name:'PRX',
                describe:'PRX är en ny och revolutionerande behandling inom biorevitalisering som arbetar hudföryngrande och anti-aging. Den är nålfri och skapar minimalt med synlig negativ påverkar på huden vilket gör att du slipper det som kallas ”down-time” direkt efter din behandling. Den ger en djupgående effekt som både ger omedelbara samt långsiktiga resultat. PRX T33 är en Medicintekniskt klassad produkt (CE-märkt klass I) med internationellt patent. Behandlingen kan utföras året om på alla hudtyper/hudtoner och kan även kombineras med andra behandlingar för att optimera effekten. Detta i kombination med dom fantastiska långsiktiga resultaten gör att denna behandling snabbt ökar i popularitet. PRX-T33 gör följande:',
                list: [
                    'Reducerar rynkor och fina linjer, ', 'Stimulerar hudens egen kollagenbildning, ', 'Skapar djup återfuktning och glow, ', 'Återskapar hudens fyllighet, ', 'Reducerar ärrbildning, ', 'Reducerar pigmentfläckar, ', 'Jämnar ut hudtonen', 'Ökar cellförnyelsen', 
                ],
                extra: 'Behandlingsområden: Ansitke, Hals, Dekolletage och händer.'
            }
        ]
    },
    {
        name: 'Kombinations-behandlingar',
        desciption: 'PRX- T33 kan användas i direkt anslutning till Microneedling vilket leder till ökad kollagenstimulering och biorevitalisering.',
        image: PRXMicro,
        id: 11,
        detailedDescription: [
            {
                name:'PRX och Microneedling',
                describe:'PRX- T33 används i direkt anslutning till Microneedling vilket leder till ökad kollagenstimulering och biorevitalisering.',
                list: [
                    'Reducerar rynkor och fina linjer, ', 'Stimulerar hudens egen kollagenbildning, ', 'Skapar djup återfuktning och glow, ', 'Återskapar hudens fyllighet, ', 'Reducerar ärrbildning, ', 'Reducerar pigmentfläckar, ', 'Jämnar ut hudtonen', 'Ökar cellförnyelsen', 
                ],
                extra: 'Behandlingsområden: Ansikte, Hals, Dekolletage och händer.'
            }
        ]
    },
]