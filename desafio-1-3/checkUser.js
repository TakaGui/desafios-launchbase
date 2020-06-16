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

function checaSeUsuarioUsaCSS(usuario) {
  for (let i = 0; i < usuario.length; i++) {
    if (usuario[i] === 'CSS') {
      return true;
    }
  }

  return false;
}

for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i].tecnologias);

  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}