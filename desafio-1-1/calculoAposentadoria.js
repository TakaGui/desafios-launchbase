const nome = 'Taka';
const sexo = 'M';
const idade = 50;
const contribuicao = 25;

if (sexo === 'M') {
  if ((contribuicao >= 35) && ((idade + contribuicao) >= 95)) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
} else if (sexo === 'F') {
  if ((contribuicao >= 30) && ((idade + contribuicao) >= 85)) {
    console.log(`${nome}, você pode se aposentar!`);
  } else {
    console.log(`${nome}, você ainda não pode se aposentar!`);
  }
}