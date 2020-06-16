const nome = 'Taka';
const peso = 60.5;
const altura = 1.8;
const sexo = 'H';

const imc = peso / (altura * altura);

if (imc >= 30) {
  console.log(`${nome} você está acima do peso.`);
} else {
  console.log(`${nome} você não está acima do peso.`);
}