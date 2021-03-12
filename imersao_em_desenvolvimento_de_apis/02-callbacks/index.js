/*
  0 Obter um usuário
  1 Obter o número de telefone de um usuário a partir de seu Id
  2 Obter o endereço de um usuário pelo Id
*/

function obterUsuario(callback) {
  setTimeout(function() {
    return callback(null, {
      id: 1,
      nome: 'Aladin',
      dataNascimento: new Date()
    });
  }, 1000);
}

function obterTelefone(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      telefone: '1199002',
      ddd: 11
    });
  }, 2000);
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Dos Bobos',
      numero: 0
    });
  }, 2000);
}

obterUsuario(function resolverUsuario(erro, usuario) {
  if (erro) {
    console.error('DEU RUIM em USUARIO', erro);
    return;
  }

  obterTelefone(usuario.id, function resolverTelefone(erro1, telefone) {
    if (erro1) {
      console.error('DEU RUIM em TELEFONE');
      return;
    }

    obterEndereco(usuario.id, function resolverEndereco(erro2, endereco) {
      if (erro2) {
        console.log('DEU RUIM em ENDERECO');
        return;
      }
      
      console.log(`
        Nome: ${usuario.nome},
        Endereço: ${endereco.rua}, ${endereco.numero},
        Telefone: (${telefone.ddd}) ${telefone.numero}
      `);
    });
  });
});
