
import { EscapeRoomData, Activity } from '../types';

export const escapeRoomData: EscapeRoomData = {
  title: 'Escape Room: Consciència Alimentària',
  finalCode: '545533',
  challenges: [
    // Repte 1: Hidrats de Carboni
    {
      id: 'hidrats-de-carboni',
      nutrientId: 'hidrats-de-carboni',
      title: 'Repte 1: Hidrats de Carboni',
      objectives: [
        'Saber explicar què són els hidrats de carboni',
        'Diferenciar entre hidrats de carboni simples i complexos',
        'Identificar aliments rics en hidrats de carboni, no rics, i si són simples o complexos',
        'Comprendre per què els aliments amb sucres simples es digereixen diferent dels amb sucres complexos',
      ],
      activities: [
        {
          type: 'fill-in-blanks',
          title: 'Pregunta 1 – Simples vs Complexos',
          instructions: 'Completa les frases següents:',
          data: {
            text: [
              "Els hidrats de carboni són una font d'energia per al cos. Es poden dividir en dues categories: ",
              ' i ',
              '. Els ',
              " (com la mel, la fruita o el sucre) es digereixen més ",
              ' i fan pujar ràpidament el ',
              ' en sang. Els ',
              " (com la pasta, els llegums o l'arròs) es digereixen més ",
              ' i proporcionen energia més ',
              '.'
            ],
            solutions: ['simples', 'complexos', 'simples', 'ràpid', 'sucre', 'complexos', 'lent', 'sostinguda']
          },
        },
        {
          type: 'classification',
          title: 'Pregunta 2 - Classificació amb icones',
          instructions: 'Classifica les següents imatges en la categoria correcta.',
          data: {
            categories: ['Pobres en Hidrats de Carboni', 'Rics en Sucres Simples', 'Rics en Sucres Complexos'],
            items: [
              { name: 'Aigua', solution: 0, image: '💧' },
              { name: 'Anacards', solution: 2, image: '🌰' },
              { name: 'Oli', solution: 0, image: '🫒' },
              { name: 'Arròs', solution: 2, image: '🍚' },
              { name: 'Pasta', solution: 2, image: '🍝' },
              { name: 'Mel', solution: 1, image: '🍯' },
              { name: 'Refresc', solution: 1, image: '🥤' },
              { name: 'Formatge', solution: 0, image: '🧀' },
              { name: 'Patata', solution: 2, image: '🥔' },
            ],
          },
        },
         {
          type: 'creative-writing',
          title: 'Pregunta 3 - Creativitat aplicada',
          instructions: 'Escriu una petita historieta (5-6 línies) on un aliment que no és dolç, però que conté hidrats de carboni, explica la seva història. Comença amb: "Hola! Soc una patata i tothom pensa que no tenc sucre, però en realitat..."',
          data: {
            placeholder: 'Explica on vius, quins beneficis tens i com ajudes a donar energia!'
          }
        },
        {
            type: 'timeline',
            title: 'Pregunta 4 - Digestió i temps d\'absorció',
            instructions: 'Col·loca els aliments en la línia de temps segons la seva velocitat de digestió. Ràpida a l\'esquerra, lenta a la dreta.',
            data: {
                labelStart: 'Ràpid (- temps)',
                labelEnd: 'Lent (+ temps)',
                items: ['Sucre', 'Mel', 'Refresc', 'Fruita', 'Pasta', 'Arròs', 'Llegums', 'Carn', 'Oli']
            }
        }
      ],
      clue: {
        question: 'Quants dels següents aliments són rics en hidrats de carboni? Arròs, carn, pasta, ou, aigua, patata, sucre, oli, mel',
        getCorrectAnswer: () => 5,
      },
    },
    // Repte 2: Lípids
    {
      id: 'lipids',
      nutrientId: 'lipids',
      title: 'Repte 2: Lípids',
      objectives: [
        'Comprendre què són els lípids i les seves propietats bàsiques.',
        'Reconèixer la seva importància com a reserva energètica i altres funcions vitals.',
        'Diferenciar entre lípids d\'origen animal i vegetal, i valorar quins són més saludables.',
        'Identificar els greixos perjudicials i entendre els seus riscos.'
      ],
      activities: [
        {
          type: 'riddle',
          title: 'Endevinalla inicial: “El rebel de l\'aigua"',
          instructions: "Llegeix l'endevinalla i escriu la resposta:",
          data: {
            text: "No m'agrada l'aigua, em quedo flotant. Sóc energia amagada, protegeixo i aïllo. Sóc part de tu i de les teves cèl·lules. Qui som?",
            solution: "lípids"
          }
        },
        {
            type: 'classification',
            title: 'Classificació d\'aliments',
            instructions: 'Classifica els aliments en la columna correcta (Origen animal/vegetal) i marca si són saludables o no.',
            data: {
                categories: ['Origen animal', 'Origen vegetal'],
                healthCategories: ['Saludable', 'No Saludable'],
                items: [
                    { name: 'Mantega', solution: [0,1], image: '🧈'},
                    { name: 'Ou', solution: [0,0], image: '🥚'},
                    { name: 'Oli d\'alvocat', solution: [1,0], image: '🥑'},
                    { name: 'Bacon', solution: [0,1], image: '🥓'},
                    { name: 'Formatge', solution: [0,1], image: '🧀'},
                    { name: 'Alvocat', solution: [1,0], image: '🥑'},
                    { name: 'Coco', solution: [1,0], image: '🥥'},
                    { name: 'Salmó', solution: [0,0], image: '🐟'},
                    { name: 'Ametlles', solution: [1,0], image: '🌰'},
                ]
            }
        }
      ],
      clue: {
        question: "La xifra d'aquest repte la tindràs sumant les lletres de la resposta de l'endevinalla inicial (“Qui som?”).",
        getCorrectAnswer: (activities) => {
            const riddleActivity = activities.find(a => a.type === 'riddle');
            if(riddleActivity && riddleActivity.userInputs && riddleActivity.isCorrect?.[0]) {
                return (riddleActivity.userInputs[0] as string).length;
            }
            return '?';
        }
      }
    },
    // Repte 3: Proteïnes
     {
      id: 'proteines',
      nutrientId: 'proteines',
      title: 'Repte 3: Les Proteïnes',
      objectives: [
        'Comprendre que les proteïnes estan formades per aminoàcids.',
        'Diferenciar entre aminoàcids essencials i no essencials.',
        'Identificar i classificar aliments rics i no rics en proteïnes.',
        'Entendre la diferència entre proteïnes d\'origen animal i vegetal.'
      ],
      activities: [
        {
          type: 'classification',
          title: 'Classificació d\'aliments',
          instructions: 'Classifica els següents aliments en "Pobres en Proteïnes", "Rics - Origen Animal" o "Rics - Origen Vegetal".',
          data: {
            categories: ['Pobres en Proteïnes', 'Rics - Origen Animal', 'Rics - Origen Vegetal'],
            items: [
              { name: 'Salmó', solution: 1, image: '🐟' },
              { name: 'Tofu', solution: 2, image: '⬜' },
              { name: 'Espinacs', solution: 0, image: '🥬' },
              { name: 'Poma', solution: 0, image: '🍎' },
              { name: 'Ou', solution: 1, image: '🥚' },
              { name: 'Cuixa de pollastre', solution: 1, image: '🍗' },
              { name: 'Llet', solution: 1, image: '🥛' },
              { name: 'Llenties', solution: 2, image: '🫘' },
              { name: 'Arròs', solution: 0, image: '🍚' },
              { name: 'Oli', solution: 0, image: '🫒' },
            ]
          }
        },
        {
          type: 'fill-in-blanks',
          title: 'Completa les frases',
          instructions: 'Ompliu els buits amb les paraules adequades.',
          data: {
             text: [
                "1. Les proteïnes estan formades per petites peces anomenades ",
                ".\n2. Hi ha aminoàcids essencials i no essencials; els essencials els hem d'obtenir de la ",
                ".\n3. Una funció important de les proteïnes és reparar els ",
                " del cos.\n4. Les llegums són una font de proteïna ",
                " i molt saludable.\n5. Un mite és pensar que només la ",
                " té proteïna de qualitat."
             ],
             solutions: ["aminoàcids", "dieta", "teixits", "vegetal", "carn"]
          }
        }
      ],
      clue: {
        question: "Quants aliments de la llista inicial (Activitat 1) eren rics en proteïnes d'origen animal?",
        getCorrectAnswer: () => 4
      }
    },
    // Repte 4: Vitamines
     {
      id: 'vitamines',
      nutrientId: 'vitamines',
      title: 'Repte 4: Les Vitamines',
      objectives: [
        'Comprendre que les vitamines són imprescindibles.',
        'Diferenciar entre vitamines hidrosolubles i liposolubles.',
        'Entendre els conceptes de hipovitaminosi i hipervitaminosi.'
      ],
      activities: [
         {
          type: 'fill-in-blanks',
          title: 'Completa el text',
          instructions: 'Llegeix aquest text i completa amb les paraules que falten: petites, imprescindibles, sistema, pell, energia.',
          data: {
            text: [
                "“Les vitamines són nutrients que, tot i necessitar-se en ",
                " quantitats, són ",
                " per a la vida. Algunes de les seves funcions principals són: reforçar el ",
                " immunitari, mantenir la ",
                " i la visió, i ajudar a l'alliberament d'",
                ".”"
            ],
            solutions: ["petites", "imprescindibles", "sistema", "pell", "energia"]
          }
        },
        {
            type: 'question-answer',
            title: 'Preguntes tipus test',
            instructions: 'Contesta les següents preguntes.',
            data: {
                questions: [
                    {
                        question: 'Les vitamines hidrosolubles es poden emmagatzemar al cos i, per això, no cal consumir-les cada dia.',
                        options: ['Vertader', 'Fals'],
                        correct: 1
                    },
                    {
                        question: 'Les vitamines liposolubles es dissolen en greixos i el cos les pot guardar.',
                        options: ['Vertader', 'Fals'],
                        correct: 0
                    },
                    {
                        question: 'Quines d\'aquestes són vitamines hidrosolubles?',
                        options: ['Vitamina C', 'Vitamina A', 'Vitamina B12', 'Vitamina D'],
                        correct: [0, 2],
                        isMulti: true,
                    },
                ]
            }
        }
      ],
      clue: {
        question: 'Quantes respostes havies de seleccionar en total a les 3 preguntes multiresposta del test?',
        getCorrectAnswer: () => 5,
      }
    },
    // Repte 5: Sals Minerals
     {
      id: 'sals-minerals',
      nutrientId: 'minerals',
      title: 'Repte 5: Les Sals Minerals',
      objectives: [
        'Conèixer les funcions i les fonts de diferents sals minerals.',
      ],
      activities: [
        {
          type: 'conversation',
          title: 'Conversa al gimnàs',
          instructions: 'Completa els 20 espais en blanc de la conversa entre en Pau i na Amina.',
          data: {
            // A simplified version for the web format.
            // The full text is too long. We'll extract key fill-in-the-blanks.
            text: [
                "Amina: Tens raó, Pau. Les sals minerals són nutrients ", // inorgànics
                ", que no donen energia... però tenen funcions vitals.\n",
                "Pau: O sigui, que tot i que no donen ", // energia
                ", són necessàries.\n",
                "Amina: Exacte! Per exemple, el ", // calci
                " és fonamental per tenir ossos i dents forts, i també per la contracció ", // muscular
                ".\n",
                "Pau: I què passa amb el ferro?\n",
                "Amina: Sí, perquè el ferro ajuda a transportar ", // oxigen
                " en la sang. Si en falta, pot aparèixer una malaltia anomenada ", // anèmia
                ".\n",
                "Pau: I el magnesi?\n",
                "Amina: És clau per la contracció muscular i també per la funció del sistema ", // nerviós
                ".\n",
                "Pau: Quina seria la millor conclusió?\n",
                "Amina: Que encara que només en necessitem petites quantitats, són imprescindibles per estar ", // sans
                "."
            ],
            solutions: ['inorgànics', 'energia', 'calci', 'muscular', 'oxigen', 'anèmia', 'nerviós', 'sans']
          }
        }
      ],
      clue: {
        question: 'Suma les fonts principals del magnesi (3) amb les funcions de l\'iode (2) per obtenir la xifra d\'aquest repte.',
        getCorrectAnswer: () => 5,
      }
    },
    // Repte 6: Aigua
     {
      id: 'aigua',
      nutrientId: 'aigua',
      title: 'Repte 6: L\'Aigua',
      objectives: [
        'Comprendre la importància de l\'aigua en el cos humà i les seves funcions vitals.',
        'Identificar la quantitat d\'aigua necessària i distingir entre begudes que hidraten i les que deshidraten.',
        'Adquirir hàbits saludables d\'hidratació.'
      ],
      activities: [
        {
            type: 'match-functions',
            title: 'Relaciona les frases',
            instructions: 'Relaciona cada inici de frase amb el seu final correcte.',
            data: {
                starts: [
                    'L\'aigua no aporta...',
                    'Quan tenim set...',
                    'Les fruites i verdures...',
                    'Les begudes ensucrades...',
                    'Una de les funcions de l\'aigua és...',
                    'Els experts recomanen...'
                ],
                ends: [
                    '...però representa un alt percentatge del nostre cos.',
                    '...significa que ja estam començant a deshidratar-nos.',
                    '...aporten una quantitat important d\'aigua al nostre cos.',
                    '...no hidraten, sinó que deshidraten.',
                    '...regular la temperatura corporal.',
                    '...beure entre 1,5 i 2,5 litres d\'aigua al dia.'
                ],
                solutions: [0,1,2,3,4,5]
            }
        },
        {
            type: 'classification',
            title: 'Bona hidratació vs. Mala hidratació',
            instructions: 'Classifica les següents paraules dins la columna correcta.',
            data: {
                categories: ['Bona hidratació', 'Mala hidratació'],
                items: [
                    { name: 'Fruita', solution: 0 },
                    { name: 'Begudes refrescants', solution: 1 },
                    { name: 'Alcohol', solution: 1 },
                    { name: 'Aigua Suficient', solution: 0 },
                    { name: 'Set', solution: 1 },
                    { name: 'Verdura', solution: 0 },
                ]
            }
        }
      ],
      clue: {
        question: 'Suma el nombre de dies que podem viure sense beure (3) segons la regla del 3 amb el nombre de setmanes que podem viure sense menjar (0, ja que són 3 setmanes). Aquesta suma és la vostra xifra.',
        getCorrectAnswer: () => 3,
      }
    },
  ],
};