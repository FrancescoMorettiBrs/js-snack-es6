const squadre = [
  { nome: "Juventus", punti: 0, falliSubiti: 0 },
  { nome: "Milan", punti: 0, falliSubiti: 0 },
  { nome: "Inter", punti: 0, falliSubiti: 0 },
  { nome: "Roma", punti: 0, falliSubiti: 0 },
  { nome: "Napoli", punti: 0, falliSubiti: 0 },
  { nome: "Lazio", punti: 0, falliSubiti: 0 },
  { nome: "Fiorentina", punti: 0, falliSubiti: 0 },
  { nome: "Atalanta", punti: 0, falliSubiti: 0 },
  { nome: "Torino", punti: 0, falliSubiti: 0 },
  { nome: "Bologna", punti: 0, falliSubiti: 0 },
];

function randomNumber() {
    return Math.floor(Math.random() * 101);

}
for (let i = 0; i < squadre.length; i++) {
  squadre[i].punti = randomNumber()
  squadre[i].falliSubiti = randomNumber()
}

console.log(squadre);

nomiEFalli = []

for (let i = 0; i < squadre.length; i++) {
    const {nome, falliSubiti} = squadre[i];
    nomiEFalli.push({nome, falliSubiti})
}

console.log(nomiEFalli);
