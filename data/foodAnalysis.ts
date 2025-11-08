
import { FoodAnalysisData } from '../types';

export const foodAnalysisData: FoodAnalysisData = {
  categories: [
    {
      id: 'xocolates',
      name: 'Xocolates',
      emoji: '🍫',
      description: 'Anàlisi de diferents tipus de xocolata, des de la blanca fins a la més pura. Quin té més sucre?',
      image: 'https://images.unsplash.com/photo-1575338233372-785317f25969?q=80&w=1200&auto=format&fit=crop',
      products: [
        { name: 'Nestle Milkybar', image: 'https://i.ibb.co/L5hY54c/milkybar.png', sugarComparison: 58.1 },
        { name: 'Nestle Extrafino', image: 'https://i.ibb.co/VMyTjSj/extrafino.png', sugarComparison: 57.2 },
        { name: 'Lindt Excellence 70%', image: 'https://i.ibb.co/jGGdZ52/lindt70.png', sugarComparison: 29 },
        { name: 'Lindt Excellence 85%', image: 'https://i.ibb.co/dDq05Bx/lindt85.png', sugarComparison: 11 },
        { name: 'Lindt Excellence 99%', image: 'https://i.ibb.co/d5m0f6p/lindt99.png', sugarComparison: 1 },
      ],
      analysis: [
        {
          title: 'Conclusions Xocolates 🤔',
          content: [
            { type: 'p', text: 'Hem vist que hi ha una gran diferència entre les xocolates, sobretot pel que fa al sucre.' },
            {
              type: 'ul',
              items: [
                'La xocolata blanca i la xocolata amb llet tenen el sucre com a ingredient principal.',
                'A mesura que augmenta el percentatge de cacau, la quantitat de sucre disminueix dràsticament.',
                'La xocolata del 99% pràcticament no té sucre, sent el cacau el seu component gairebé exclusiu.',
                'Mirar l\'ordre dels ingredients ens dóna una pista molt clara de la qualitat del producte.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'iogurts',
      name: 'Iogurts',
      emoji: '🍦',
      description: 'No tots els iogurts són iguals. Comparem iogurts naturals amb iogurts de sabors i per a nens.',
      image: 'https://images.unsplash.com/photo-1559598467-f8b76c8155d0?q=80&w=1200&auto=format&fit=crop',
      products: [
        { name: 'Danonino Fresa Plàtan', image: 'https://i.ibb.co/KXsC6Y7/danonino.png', sugarComparison: 10.3 },
        { name: 'Carrefour Sabor Fresa', image: 'https://i.ibb.co/2K210L6/carrefour-fresa.png', sugarComparison: 10 },
        { name: 'Danone Natural', image: 'https://i.ibb.co/bFzV6j3/danone-natural.png', sugarComparison: 4 },
        { name: 'Carrefour Bifidus Natural', image: 'https://i.ibb.co/R2tvc8c/carrefour-bifidus-natural.png', sugarComparison: 4.2 },
      ],
      analysis: [
        {
          title: 'Conclusions Iogurts 🤔',
          content: [
            { type: 'p', text: 'La diferència principal entre els iogurts de sabors i els naturals és la quantitat de sucre afegit.' },
            {
              type: 'ul',
              items: [
                'Els iogurts destinats a nens (tipus "Danonino") i els de sabors tenen més del doble de sucre que un iogurt natural.',
                'El sucre afegit apareix com un dels primers ingredients en els iogurts de sabors.',
                'Un iogurt natural només conté el sucre naturalment present a la llet (lactosa), que ronda els 4g per 100g.',
                'L\'opció més saludable és sempre un iogurt natural, al qual podem afegir fruita fresca si volem donar-li sabor.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'sucs',
      name: 'Sucs i Nèctars',
      emoji: '🧃',
      description: 'Zumo, nèctar, beguda a base de fruita... Què bevem realment? Anàlisi de les begudes de fruita.',
      image: 'https://images.unsplash.com/photo-1600271886742-f049cd452bba?q=80&w=1200&auto=format&fit=crop',
      products: [
        { name: 'Carrefour Nèctar Taronja', image: 'https://i.ibb.co/z5pD0pG/carrefour-nectar.png', sugarComparison: 9.3 },
        { name: 'Carrefour Zumo Exprimido', image: 'https://i.ibb.co/Y0p0vjw/carrefour-zumo.png', sugarComparison: 8.5 },
        { name: 'Sunny Delight', image: 'https://i.ibb.co/YcHfJ2D/sunny.png', sugarComparison: 1.9 },
      ],
      analysis: [
        {
          title: 'Conclusions Sucs 🤔',
          content: [
            { type: 'p', text: 'La clau està en la denominació del producte: no és el mateix un "suc exprimit" que un "nèctar" o una "beguda a base de suc".' },
            {
              type: 'ul',
              items: [
                'Un "suc exprimit 100%" només conté fruita. El seu sucre és el que està naturalment present a la fruita.',
                'Un "nèctar" conté una part de suc (normalment al voltant del 50%) i la resta és aigua i, molt important, sucres afegits.',
                'Les "begudes a base de suc" (com Sunny Delight) tenen un percentatge molt baix de fruita i solen portar edulcorants en lloc de sucre, a més de molts altres additius.',
                'L\'opció més saludable és sempre menjar la peça de fruita sencera, ja que conté fibra.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'begudes-energetiques',
      name: 'Begudes Energètiques',
      emoji: '⚡',
      description: 'Què contenen realment aquestes begudes? Anàlisi de Monster, Red Bull i Prime.',
      image: 'https://images.unsplash.com/photo-1587884936745-ac448a3c5c8e?q=80&w=1200&auto=format&fit=crop',
      products: [
        { name: 'Monster Energy', image: 'https://i.ibb.co/2Z5XyG8/monster.png', sugarComparison: 0 },
        { name: 'Red Bull', image: 'https://i.ibb.co/4Z5fL6d/redbull.png', sugarComparison: 11 },
        { name: 'Prime Hydration', image: 'https://i.ibb.co/dGk90Hc/prime.png', sugarComparison: 1.2 },
      ],
      analysis: [
        {
          title: 'Conclusions Begudes Energètiques 🤔',
          content: [
            { type: 'p', text: 'Aquestes begudes basen el seu efecte en estimulants com la cafeïna i contenen grans quantitats de sucre o edulcorants.' },
            {
              type: 'ul',
              items: [
                'Una sola llauna de Red Bull (250ml) conté 27.5g de sucre, que és més de la quantitat diària màxima recomanada per l\'OMS.',
                'Altres com Monster utilitzen edulcorants per eliminar el sucre, però contenen una llarga llista d\'additius.',
                'No són begudes recomanables, especialment per a adolescents, a causa del seu alt contingut en cafeïna i sucres/edulcorants.',
                'L\'aigua és sempre la millor opció per hidratar-se.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'salses',
      name: 'Salses de Tomàquet',
      emoji: '🍅',
      description: 'Tomàquet fregit, quètxup, salsa de tomàquet... Són tots iguals? Descobrim les diferències.',
      image: 'https://images.unsplash.com/photo-1563242636-735c36305a96?q=80&w=1200&auto=format&fit=crop',
      products: [
        { name: 'Carrefour Tomàquet Fregit', image: 'https://i.ibb.co/k2h0t8B/carrefour-tomate-frito.png', sugarComparison: 5.5 },
        { name: 'Prima Ketchup', image: 'https://i.ibb.co/K79hHtr/prima-ketchup.png', sugarComparison: 12 },
        { name: 'Pedro Luis Tomate Frito', image: 'https://i.ibb.co/Yc5q2Hk/pedro-luis.png', sugarComparison: 5.8 },
      ],
      analysis: [
        {
          title: 'Conclusions Salses de Tomàquet 🤔',
          content: [
            { type: 'p', text: 'El principal problema d\'aquestes salses industrials és el sucre afegit que contenen per corregir l\'acidesa del tomàquet.' },
            {
              type: 'ul',
              items: [
                'El quètxup és, amb diferència, la salsa amb més sucre, arribant a ser el seu segon ingredient principal.',
                'Els tomàquets fregits de millor qualitat (com el de Pedro Luis) utilitzen ingredients naturals com oli d\'oliva verge extra i no abusen del sucre.',
                'Molts tomàquets fregits industrials utilitzen olis vegetals de menor qualitat (gira-sol) i porten més sucre.',
                'Revisar la llista d\'ingredients és clau: com menys ingredients i més naturals, millor serà el producte.',
              ],
            },
          ],
        },
      ],
    },
  ],
  generalConclusions: [
    {
      title: 'Conclusions Generals 🧐',
      content: [
        { type: 'p', text: 'Després d\'analitzar aquests grups d\'aliments, podem extreure algunes idees molt importants:' },
        {
          type: 'ul',
          items: [
            'Llegir les etiquetes és fonamental. No et deixis enganyar per la part davantera de l\'envàs.',
            'L\'ordre dels ingredients importa! El primer ingredient és el més abundant.',
            'Compte amb el sucre ocult. Es troba en molts productes on no esperaríem trobar-lo, com les salses de tomàquet.',
            'Productes "per a nens" no sempre són la millor opció. Sovint porten més sucre que les versions per a adults.',
            'La versió més natural d\'un aliment sol ser la més saludable (iogurt natural vs. de sabors, fruita sencera vs. suc).',
          ],
        },
      ],
    },
    {
      title: 'Què podem fer nosaltres? 💪',
      content: [
        { type: 'p', text: 'Tenim el poder de decidir què mengem. Aquí teniu alguns consells pràctics:' },
        {
          type: 'ul',
          items: [
            'Basa la teva alimentació en productes frescos i poc processats: fruites, verdures, llegums, carn, peix, ous.',
            'Tria aigua com a beguda principal.',
            'A l\'hora de comprar, dedica un minut a comparar etiquetes de productes similars.',
            'Cuina a casa sempre que puguis. Així controles tu els ingredients.',
          ],
        },
        { type: 'p', text: 'Menjar sa no és avorrit, és una inversió en la teva salut present i futura! 🍏' },
      ],
    },
  ],
};
