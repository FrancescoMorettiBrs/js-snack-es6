const biciclette = [
    { nome: "Bianchi Sprint", peso: 7.2 },
    { nome: "Cannondale SuperSix", peso: 6.8 },
    { nome: "Trek Emonda", peso: 7.0 },
    { nome: "Specialized Tarmac", peso: 6.9 },
    { nome: "Scott Addict", peso: 7.1 },
    { nome: "Cervélo R5", peso: 6.7 },
    { nome: "Giant TCR", peso: 7.3 },
    { nome: "Pinarello Dogma", peso: 6.9 },
    { nome: "Wilier Zero", peso: 6.6 },
    { nome: "Colnago V3RS", peso: 7.0 }
  ];
  
  let biciMenoPesante = biciclette[0]

  for (let i = 0; i < biciclette.length; i++) {
    if (biciclette[i].peso < biciMenoPesante.peso) {
        biciMenoPesante = biciclette[i]
    }
  }

  console.log(biciclette);
  