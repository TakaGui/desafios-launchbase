const programmer = [
  {
    nome: 'Taka',
    idade: 23,
    tecnologias: [
      {
        nome: 'Javascipt', 
        especialidade: 'Web/Mobile',
      },
      {
        nome: 'typescript',
        especialidade: 'Web/Mobile',
      },
    ],
  },
  {
    nome: 'Fulano',
    idade: 25,
    tecnologias: [
      {
        nome: 'C++',
        especialidade: 'Desktop',
      },
      {
        nome: 'Javascript',
        especialidade: 'Web/Mobile',
      },
    ],
  },
];

console.log(`O usuáro ${programmer[0].nome} tem ${programmer[0].idade} anos e usa a tecnologia ${programmer[0].tecnologias[0].nome} com especialidade em ${programmer[0].tecnologias[0].especialidade}`);