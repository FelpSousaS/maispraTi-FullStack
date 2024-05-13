const prompt = require('prompt-sync')({ sigint: true });

//funcao para calcular os percentuais
function percentuais(v, totalEleitores) {
  let calculo = (v / totalEleitores) * 100;
  return Math.round(calculo);
}

let totalEleitores = parseInt(prompt('Infome o total de eleitores: '));
let votosBrancos = parseInt(prompt('Infome o total de votos brancos: '));
let votosNulos = parseInt(prompt('Infome o total de votos nulos: '));
let votosValidos = parseInt(prompt('Infome o total de votos validos: '));

console.log('------------ PERCENTUAIS ------------');
console.log('Votos brancos: ' + percentuais(votosBrancos, totalEleitores));
console.log('Votos nulos: ' + percentuais(votosNulos, totalEleitores));
console.log('Votos validos: ' + percentuais(votosValidos, totalEleitores));
