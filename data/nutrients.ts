import { Nutrient } from '../types';

export const nutrientsData: Nutrient[] = [
  {
    id: 'hidrats-de-carboni',
    title: 'Hidrats de Carboni',
    image: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195507_204179_30.jpeg',
    bannerImage: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195232_162002_30.jpeg',
    videoId: 'nttRQvu-qPs',
    color: 'border-accent',
    conceptMap: {
      title: 'Mapa Conceptual: Hidrats de Carboni',
      mainPoints: [
        {
          point: 'Què són? ⚛️',
          subpoints: [
            'Biomolècules orgàniques (C, H, O). També anomenats glúcids.',
            'Funció principal: Font d\'energia primària (4 kcal/g).',
            'Combustible essencial per al cervell 🧠 i els músculs 💪.'
          ]
        },
        {
          point: 'Classificació Química 🧪',
          subpoints: [
            'Simples (absorció ràpida):',
            '  - Monosacàrids: Glucosa, Fructosa (fruita 🍌).',
            '  - Disacàrids: Sacarosa (sucre de taula 🍚), Lactosa (llet 🥛).',
            'Complexos (absorció lenta):',
            '  - Polisacàrids: Midó (patates 🥔, cereals 🌾), Glicogen (reserva animal), Fibra (no digerible, regula el trànsit intestinal).'
          ]
        },
        {
          point: 'Índex Glucèmic (IG) 📊',
          subpoints: [
            'Mesura la rapidesa amb què un aliment puja el sucre (glucosa) en sang.',
            'IG Alt (simples): Pujada ràpida i curta d\'energia. Ex: pa blanc, refrescos.',
            'IG Baix (complexos): Alliberament lent i sostingut d\'energia. Ex: civada, llenties.'
          ]
        },
        {
          point: 'Fonts Alimentàries 🍽️',
          subpoints: [
            'Rics en complexos: Cereals integrals, llegums, tubercles.',
            'Rics en simples: Fruites, mel, sucre, productes processats.',
            'Recomanació: Prioritzar complexos i integrals per la seva energia sostinguda i contingut en fibra.'
          ]
        }
      ]
    },
    content: {
      sections: [
        {
          title: "Què són els hidrats de carboni? 🍞",
          text: "També anomenats carbohidrats o glúcids, són nutrients essencials que proporcionen la principal font d'energia ⚡ al cos. Són especialment importants per al cervell 🧠 i els músculs 💪."
        },
        {
          title: "Hidrats de carboni simples 🍬",
          text: "Són sucres simples formats per molècules petites. Es digereixen ràpidament, proporcionant energia immediata però de curta durada. Això provoca una pujada ràpida de sucre en sang.",
          points: ["Exemples: sucre 🍬, mel 🍯, refrescos 🥤, plàtans 🍌, raïm 🍇."]
        },
        {
          title: "Hidrats de carboni complexos 🌾",
          text: "Estan formats per cadenes llargues de molècules de sucre. La seva digestió és més lenta, el que proporciona una alliberació d'energia més sostinguda i equilibrada. Ajuden a mantenir la sacietat per més temps.",
          points: ["Exemples: arròs 🍚, pasta 🍝, patata 🥔, llegums."]
        },
        {
          title: "Com es digereixen? 🤔",
          text: "Pensa en els hidrats simples com una espelma petita que crema molt ràpid i dóna una llum intensa però breu 🔥. Els complexos serien com una espelma gran, que crema lentament i dóna llum durant molt més temps 🕯️."
        },
        {
          title: "Aliments sense (o gairebé sense) hidrats de carboni 🚫",
          points: ["Carn 🥩", "Pollastre 🍗", "Ous 🥚", "Formatge 🧀", "Olis 🫒", "Aigua 💧"]
        },
        {
          title: "Conclusió Final ✅",
          text: "És clau prioritzar el consum d'hidrats de carboni complexos (arròs, pasta, llegums) per obtenir energia estable durant el dia, i limitar el consum de simples (refrescos, llaminadures) per evitar pics de sucre i mantenir una bona salut."
        }
      ]
    }
  },
  {
    id: 'lipids',
    title: 'Lípids (Greixos)',
    image: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195510_791461_30.jpeg',
    bannerImage: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195234_728619_30.jpeg',
    videoId: '4I6QtebiSkc',
    color: 'border-yellow-500',
    conceptMap: {
      title: 'Mapa Conceptual: Lípids (Greixos)',
      mainPoints: [
        {
          point: 'Què són? 🧬',
          subpoints: [
            'Biomolècules orgàniques insolubles en aigua (hidrofòbiques).',
            'Formats principalment per àcids grassos i glicerol.',
            'Font d\'energia més concentrada (9 kcal/g) 🔋.'
          ]
        },
        {
          point: 'Funcions Clau ⚙️',
          subpoints: [
            'Reserva energètica a llarg termini.',
            'Estructural: Component clau de les membranes cel·lulars (fosfolípids).',
            'Aïllant tèrmic i protector d\'òrgans vitals.',
            'Transport de vitamines liposolubles (A, D, E, K).',
            'Síntesi d\'hormones (esteroides) i altres molècules.'
          ]
        },
        {
          point: 'Classificació d\'Àcids Grassos 🔬',
          subpoints: [
            'Saturats: Enllaços simples. Sòlids a Tª ambient. Augmenten colesterol LDL ("dolent"). Ex: mantega 🧈, carn vermella 🥩.',
            'Insaturats (Cardiosaludables ❤️):',
            '  - Monoinsaturats (ω-9): Oli d\'oliva 🫒, alvocat 🥑.',
            '  - Poliinsaturats (ω-3, ω-6): Peix blau 🐟, nous 🌰, llavors.',
            'Trans: Greixos hidrogenats artificialment. Els més perjudicials. Augmenten LDL i redueixen HDL ("bo"). Ex: brioixeria industrial 🍩, ultraprocessats.'
          ]
        },
        {
          point: 'Recomanacions Dietètiques ✅',
          subpoints: [
            'Prioritzar greixos insaturats (oli d\'oliva verge extra, fruits secs, peix blau).',
            'Moderar el consum de saturats d\'origen animal.',
            'Eliminar els greixos trans de la dieta.'
          ]
        }
      ]
    },
    content: {
      sections: [
        {
          title: "Què són els lípids? 🥑",
          text: "Són molècules orgàniques que no es dissolen en aigua. Són essencials per a una dieta saludable i formen part de les nostres cèl·lules. També els coneixem com a greixos."
        },
        {
          title: "Funcions bàsiques 🛠️",
          points: [
            "Reserva energètica 🔋: Són la nostra principal reserva d'energia. ¡Un magatzem de potència!",
            "Protecció d'òrgans ❤️: Envolten òrgans vitals com el cor o els ronyons, protegint-los de cops.",
            "Aïllament tèrmic 🌡️: Ens ajuden a mantenir la temperatura corporal, com un abric intern.",
            "Estructura cel·lular 🔬: Formen part de les membranes de totes les cèl·lules.",
            "Missatgers químics ✉️: Algunes hormones (com les sexuals) són lípids."
          ]
        },
        {
          title: "Energia Pura 🔥",
          text: "Els greixos aporten 9 kcal per gram, ¡el doble que els hidrats de carboni i les proteïnes (4 kcal/g)! Són super potents."
        },
        {
          title: "Taula comparativa de greixos 👍 vs 👎",
          table: {
            headers: ["Tipus de Greix", "Característiques", "Fonts"],
            rows: [
              ["Greixos Bons (Insaturats)", "✅ Cardiosaludables, ajuden a reduir el colesterol dolent (LDL).", "Oli d'oliva verge extra, alvocat 🥑, fruits secs 🥜, peix blau (salmó, sardines 🐟)."],
              ["Greixos Dolents (Saturats i Trans)", "❌ Augmenten el colesterol dolent, risc de malalties cardiovasculars. Els 'trans' són els pitjors!", "Mantega, brioixeria industrial 🍩, aliments ultraprocessats, oli de palma, carn vermella grassa 🥩."]
            ]
          }
        },
        {
          title: "Consells Saludables 💡",
          points: [
            "Tria l'oli d'oliva verge extra com el teu oli principal.",
            "Menja un grapat de fruits secs crus o torrats al dia.",
            "Inclou peix blau a la teva dieta un parell de cops per setmana.",
            "Llegeix les etiquetes i evita productes amb 'greixos hidrogenats' o 'parcialment hidrogenats' (greixos trans)."
          ]
        }
      ]
    }
  },
    {
    id: 'proteines',
    title: 'Proteïnes',
    image: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195514_081079_30.jpeg',
    bannerImage: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195237_797543_30.jpeg',
    videoId: '8kq7hwXRfTU',
    color: 'border-red-500',
    conceptMap: {
      title: 'Mapa Conceptual: Proteïnes',
      mainPoints: [
        {
          point: 'Què són? 🏗️',
          subpoints: [
            'Biomolècules formades per cadenes d\'aminoàcids units per enllaços peptídics.',
            'Són els "maons" constructors del cos.',
            'Aporten energia (4 kcal/g) però la seva funció principal és estructural i funcional.'
          ]
        },
        {
          point: 'Aminoàcids (AA): Les Peces del Trencaclosques 🧩',
          subpoints: [
            'AA Essencials (9): El cos no els pot sintetitzar. S\'han d\'obtenir de la dieta 🍽️.',
            'AA No Essencials: El cos els pot produir.',
            'Una proteïna és "completa" o d\'"alt valor biològic" si conté tots els AA essencials.'
          ]
        },
        {
          point: 'Funcions Vitāls Múltiples 🛠️',
          subpoints: [
            'Estructural: Músculs 💪, ossos, pell, cabell (col·lagen, queratina).',
            'Enzimàtica: Catalitzen (acceleren) reaccions químiques.',
            'Defensa: Anticossos del sistema immunitari 🛡️.',
            'Transport: Hemoglobina (transporta O₂ a la sang) 🩸.',
            'Reguladora: Hormones com la insulina.'
          ]
        },
        {
          point: 'Fonts i Qualitat 🍗🌱',
          subpoints: [
            'Origen Animal: Completes / Alt valor biològic. Carn 🥩, peix 🐟, ous 🥚, lactis 🥛.',
            'Origen Vegetal: Generalment incompletes (els falta algun AA essencial).',
            '  - Complementarietat Proteica: Combinar llegums (ex: llenties) + cereals (ex: arròs) per obtenir una proteïna completa ✅.'
          ]
        }
      ]
    },
    content: {
      sections: [
        {
          title: "Què són les proteïnes? 🧱",
          text: "Són com els 'maons' que construeixen i reparen el nostre cos. Són biomolècules gegants i complexes, essencials per a la vida, formades per unitats més petites anomenades aminoàcids."
        },
        {
          title: "Aminoàcids: Essencials i No Essencials",
          points: [
            "Aminoàcids no essencials ✅: El nostre cos és una fàbrica increïble i els pot produir per si mateix.",
            "Aminoàcids essencials 🍽️: Aquests no els podem fabricar. És obligatori obtenir-los a través dels aliments que mengem."
          ]
        },
        {
          title: "Funcions principals 🛠️",
          points: [
            "Construcció i reparació 💪: Músculs, ossos, pell, cabells... tot està fet de proteïnes.",
            "Defensa 🛡️: Formen els anticossos, els soldats del nostre sistema immunitari que lluiten contra infeccions.",
            "Transport 🚚: L'hemoglobina, que transporta oxigen a la sang, és una proteïna.",
            "Regulació ⚙️: Moltes hormones (com la insulina) i tots els enzims (que acceleren les reaccions químiques) són proteïnes."
          ]
        },
        {
          title: "Origen de les proteïnes 🍗 vs 🌱",
          points: [
            "Origen animal 🥩: Carn, peix, ous, llet i derivats. Es consideren proteïnes d'alta qualitat o 'completes' perquè contenen tots els aminoàcids essencials en les proporcions adequades.",
            "Origen vegetal 🥦: Llegums, cereals, fruits secs, llavors. Són fantàstiques, però sovint són 'incompletes' (els falta algun aminoàcid essencial). La solució? Combinar! Ex: llenties + arròs = proteïna completa! 🥳"
          ]
        },
        {
          title: "Mites desmuntats 🧐",
          points: [
            "\"Com més proteïna, més múscul\" - ❌ Fals. El múscul es construeix amb un entrenament adequat i una dieta equilibrada, no només amb un excés de proteïnes.",
            "\"Només la carn té proteïna de qualitat\" - ❌ Fals. Com hem vist, la combinació de llegums i cereals (com fan moltes cultures tradicionalment) ofereix proteïna de la mateixa qualitat que la carn."
          ]
        }
      ]
    }
  },
  {
    id: 'vitamines',
    title: 'Vitamines',
    image: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195517_328990_30.jpeg',
    bannerImage: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195240_805030_30.jpeg',
    videoId: 'SSeuqM3fmoU',
    color: 'border-secondary',
    conceptMap: {
      title: 'Mapa Conceptual: Vitamines',
      mainPoints: [
        {
          point: 'Què són? 🔬',
          subpoints: [
            'Micronutrients orgànics essencials per a la vida.',
            'El cos no els pot sintetitzar (o en quantitat insuficient).',
            'No aporten energia, però actuen com a cofactors en reaccions metabòliques.'
          ]
        },
        {
          point: 'Classificació Segons Solubilitat 💧🥑',
          subpoints: [
            'Hidrosolubles: Es dissolen en aigua. No s\'emmagatzemen (excés s\'elimina per l\'orina). Consum diari necessari. Ex: Vitamina C i Complex B.',
            'Liposolubles: Es dissolen en greix. S\'emmagatzemen al fetge i teixit adipós. Ex: Vitamines A, D, E, K.'
          ]
        },
        {
          point: 'Exemples i Funcions Clau ✨',
          subpoints: [
            'Vit C (Àcid ascòrbic): Antioxidant, sistema immunitari, formació de col·lagen. 🍊',
            'Complex B (B1, B2, B3, B6, B9, B12...): Metabolisme energètic, funció nerviosa.',
            'Vit A (Retinol): Visió 👀, salut de la pell.',
            'Vit D (Calciferol): Absorció de calci, salut òssia 🦴. S\'activa amb el sol ☀️.',
            'Vit E (Tocoferol): Potent antioxidant.',
            'Vit K: Coagulació de la sang 🩸.'
          ]
        },
        {
          point: 'L\'Equilibri és Vital ⚖️',
          subpoints: [
            'Avitaminosi (dèficit): Pot causar malalties (ex: escorbut per manca de Vit C).',
            'Hipervitaminosi (excés): Pot ser tòxic, especialment amb les liposolubles.',
            'Una dieta variada 🍎🥦🥕 és la millor garantia. Suplements només sota control mèdic.'
          ]
        }
      ]
    },
    content: {
      sections: [
        {
          title: "Què són les vitamines? 🌈",
          text: "El seu nom ve de 'vita' (vida). Són compostos orgànics imprescindibles que el nostre cos necessita en quantitats molt petites. No aporten energia, però actuen com a 'claus mestres' que posen en marxa milers de reaccions metabòliques."
        },
        {
          title: "Vitamines hidrosolubles (Team Aigua) 💧",
          text: "Es dissolen en aigua. Com que el nostre cos és principalment aigua, no les pot emmagatzemar fàcilment. L'excés que no utilitzem s'elimina per l'orina. Per això, hem de consumir-les gairebé cada dia.",
          points: ["Vitamina C 🍊 (antioxidant, sistema immunitari) i tot el grup B (metabolisme energètic).", "Les trobem en fruites, verdures, llegums, cereals integrals."]
        },
        {
          title: "Vitamines liposolubles (Team Greix) 🧈",
          text: "Es dissolen en greixos. Aquestes sí que les podem emmagatzemar al fetge i al teixit gras, creant una reserva per quan les necessitem. Per això, no cal consumir-les cada dia.",
          points: ["Vitamina A (visió) 🥕, D (ossos, s'activa amb el sol ☀️), E (antioxidant) i K (coagulació) 🩸.", "Les trobem en lactis grassos, olis, fruits secs, peix blau."]
        },
        {
          title: "L'equilibri és clau ⚖️",
          points: [
            "Hipovitaminosi: És el dèficit de vitamines. Pot causar malalties greus (com l'escorbut per falta de Vitamina C).",
            "Hipervitaminosi: És l'excés de vitamines. Pot ser tòxic, especialment perillós amb les liposolubles, ja que s'acumulen al cos."
          ]
        },
        {
          title: "Molt Important! ⚠️",
          text: "Els suplements vitamínics NO s'han de prendre a la lleugera. Un excés pot ser més perillós que un dèficit. Només s'han de prendre amb una analítica prèvia i sota consell mèdic 👨‍⚕️. La millor font de vitamines és una dieta variada i acolorida!"
        }
      ]
    }
  },
    {
    id: 'minerals',
    title: 'Minerals',
    image: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195520_428131_30.jpeg',
    bannerImage: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195243_997637_30.jpeg',
    videoId: 'SSeuqM3fmoU',
    color: 'border-purple-500',
    conceptMap: {
      title: 'Mapa Conceptual: Minerals',
      mainPoints: [
        {
          point: 'Què són? 🌍',
          subpoints: [
            'Micronutrients inorgànics essencials (elements químics).',
            'El cos no els pot produir, s\'obtenen de la dieta i l\'aigua.',
            'No aporten energia, però són crucials per a l\'estructura i la regulació corporal.'
          ]
        },
        {
          point: 'Classificació Segons Quantitat ⚖️',
          subpoints: [
            'Macrominerals: Es necessiten en >100 mg/dia. Ex: Calci (Ca), Fòsfor (P), Potassi (K), Sodi (Na), Magnesi (Mg).',
            'Oligoelements (o elements traça): Es necessiten en quantitats molt petites. Ex: Ferro (Fe), Zinc (Zn), Iode (I), Seleni (Se).'
          ]
        },
        {
          point: 'Funcions Destacades ⚙️',
          subpoints: [
            'Estructural: Calci (Ca) i Fòsfor (P) formen la matriu dels ossos i les dents 🦴.',
            'Transport: Ferro (Fe) és essencial a l\'hemoglobina per transportar oxigen 🩸.',
            'Regulació Hídrica i Nerviosa (Electròlits): Sodi (Na) i Potassi (K) regulen l\'equilibri de líquids i l\'impuls nerviós ⚡.',
            'Metabòlica: Iode (I) per a les hormones tiroïdals; Zinc (Zn) per a funcions enzimàtiques.'
          ]
        },
        {
          point: 'Fonts Alimentàries Clau 🍽️',
          subpoints: [
            'Calci (Ca): Lactis 🥛, verdures de fulla verda, fruits secs.',
            'Ferro (Fe): Carn vermella, llegums, musclos.',
            'Potassi (K): Plàtans 🍌, patates, espinacs.',
            'Iode (I): Peix, marisc, sal iodada.'
          ]
        }
      ]
    },
    content: {
      sections: [
        {
          title: "Què són els minerals? 💎",
          text: "Són nutrients inorgànics (no provenen de sers vius) que el cos necessita en petites quantitats. No aporten energia com els greixos o els hidrats, però són absolutament fonamentals per a la vida."
        },
        {
          title: "Funcions principals 🏗️",
          points: [
            "Funció estructural: Formen part d'estructures dures com els ossos i les dents 🦷 (Calci, Fòsfor).",
            "Funció reguladora: Són clau per a la transmissió dels impulsos nerviosos 🧠, la contracció muscular 💪 i l'equilibri de líquids 💧 (Sodi, Potassi, Magnesi).",
            "Funció de transport: Alguns són essencials per transportar substàncies, com el Ferro, que és el component clau de l'hemoglobina per transportar oxigen 🩸."
          ]
        },
        {
          title: "Taula de minerals principals 📊",
          table: {
            headers: ["Mineral", "Funció Principal", "Fonts Alimentàries"],
            rows: [
              ["Calci (Ca)", "Forma ossos i dents 🦴, contracció muscular.", "Lactis 🥛, ametlles, bròquil, sardines."],
              ["Ferro (Fe)", "Transport d'oxigen (hemoglobina) 🩸, evita l'anèmia.", "Carn vermella 🥩, espinacs, llenties, musclos."],
              ["Potassi (K)", "Equilibri de líquids, funció muscular i cardíaca ❤️.", "Plàtan 🍌, verdures, patates."],
              ["Magnesi (Mg)", "Contracció muscular, funció nerviosa.", "Fruits secs 🥜, llegums, xocolata negra."],
              ["Iode (I)", "Producció d'hormones tiroïdals (regula el metabolisme).", "Peix 🐟, marisc, sal iodada."],
            ]
          }
        },
        {
          title: "Conclusió Final ✨",
          text: "Encara que els necessitem en quantitats molt petites (mil·ligrams o micrograms), els minerals són uns autèntics herois silenciosos de la nostra salut. Una dieta variada i equilibrada és la millor manera de garantir que no ens en falti cap."
        }
      ]
    }
  },
  {
    id: 'aigua',
    title: 'Aigua',
    image: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195523_469850_30.jpeg',
    bannerImage: 'https://cdn1.genspark.ai/user-upload-image/6_generated/g_0_20240729_195246_953372_30.jpeg',
    videoId: 'QGmM7jyUtmw',
    color: 'border-blue-400',
    conceptMap: {
      title: 'Mapa Conceptual: Aigua (H₂O)',
      mainPoints: [
        {
          point: 'La Molècula de la Vida ⚛️',
          subpoints: [
            'Nutrient inorgànic més abundant i essencial.',
            'Constitueix ~60-70% del pes corporal.',
            'És el solvent universal on ocorren les reaccions vitals.'
          ]
        },
        {
          point: 'Funcions Fisiològiques Clau 🔄',
          subpoints: [
            'Transport: de nutrients, oxigen, hormones i cèl·lules sanguínies.',
            'Termoregulació: Manté la temperatura corporal estable mitjançant la suor 🌡️.',
            'Reaccions Metabòliques: Participa en la majoria de processos químics (ex: hidròlisi).',
            'Eliminació de residus: A través de l\'orina i la femta 🚽.',
            'Lubricació i Amortiment: Protegeix articulacions i òrgans.'
          ]
        },
        {
          point: 'Balanç Hídric: Entrades vs. Sortides ⚖️',
          subpoints: [
            'Entrades: Begudes (aigua, llet...), aliments (fruita 🍉, verdura 🥒) i aigua metabòlica.',
            'Sortides: Orina, suor, respiració, femta.',
            'Deshidratació: Ocorre quan les sortides superen les entrades. La set és un símptoma tardà 🥵.'
          ]
        },
        {
          point: 'Recomanacions d\'Hidratació ✅',
          subpoints: [
            'Beure aigua regularment durant el dia, sense esperar a tenir set.',
            'Quantitat diària: ~1.5 - 2.5 litres (varia segons edat, activitat, clima).',
            'L\'aigua ha de ser la beguda principal. Evitar begudes ensucrades.'
          ]
        }
      ]
    },
    content: {
      sections: [
        {
          title: "L'element essencial per a la vida 💧",
          text: "L'aigua és, sense cap mena de dubte, el nutrient més important. Representa entre el 60% i el 70% del nostre pes corporal. No aporta calories, però absolutament cap reacció química del nostre cos podria passar sense ella."
        },
        {
          title: "Funcions principals 🌐",
          points: [
            "És el 'transportista' del cos 🚚: Transporta nutrients, oxigen i hormones a totes les cèl·lules.",
            "És el 'servei de neteja' 🧹: Ajuda a eliminar residus i toxines a través de l'orina i la suor.",
            "És el nostre 'termòstat' 🌡️: Regula la temperatura corporal mitjançant la transpiració.",
            "És un 'amortidor' 🛡️: Protegeix òrgans vitals com el cervell i lubrica les nostres articulacions."
          ]
        },
        {
          title: "Quanta aigua necessitem? 🤔",
          text: "Generalment es recomanen entre 1,5 i 2,5 litres al dia (uns 8 gots). Aquesta quantitat pot augmentar si fem esport o fa molta calor. Aquesta aigua no només ve de beure, sinó també dels aliments.",
          points: ["Fruites riques en aigua: síndria 🍉, taronja 🍊, maduixa 🍓.", "Verdures riques en aigua: cogombre 🥒, enciam 🥬, tomàquet 🍅."]
        },
        {
          title: "No esperis a tenir set! 🥵",
          text: "La set és un mecanisme d'alarma que ens avisa que el nostre cos JA està començant a deshidratar-se. L'ideal és beure aigua de manera regular durant tot el dia, sense esperar a tenir aquesta sensació."
        },
        {
          title: "Consell Final ✨",
          text: "L'aigua és la beguda més saludable, barata i accessible. És la millor manera de mantenir el teu cos hidratat i funcionant al 100%. Prioritza-la sempre per sobre de refrescos o begudes ensucrades! 🥤❌"
        }
      ]
    }
  }
];
