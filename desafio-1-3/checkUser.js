function checaSeUsuarioUsaCSS(usuario, quantidadeTecnologias) {
  for (let j = 0; j < quantidadeTecnologias; j++) {
    if (usuario.tecnologias[j] === 'CSS') {
      return true;
    }
  }

  return false;
}

const usuarios = [
  {
    nome: 'Carlos',
    tecnologias: ['HTML', 'CSS'],
  },
  {
    nome: 'Jasmine',
    tecnologias: ['Javascript', 'CSS'],
  },
  {
    nome: 'Tuane',
    tecnologias: ['HTML', 'Node.js'],
  },
];

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i], usuarios[i].tecnologias.length);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}