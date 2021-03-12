/*
  0 Obter um usuário
  1 Obter o número de telefone de um usuário a partir de seu Id
  2 Obter o endereço de um usuário pelo Id
*/

const util = require('util');
const obterEnderecoAsync = util.promisify(obterEndereco);

function obterUsuario() {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(function() {
      return resolve({
        id: 1,
        nome: 'Aladin',
        dataNascimento: new Date()
      });
    }, 1000);
  });
}

function obterTelefone(idUsuario) {
  return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
      return resolve({
        telefone: '1199002',
        ddd: 11
      });
    }, 2000);
  });
}

function obterEndereco(idUsuario, callback) {
  setTimeout(() => {
    return callback(null, {
      rua: 'Dos Bobos',
      numero: 0
    });
  }, 2000);
}

const usuarioPromise = obterUsuario();

usuarioPromise
  .then(function(usuario) {
    return obterTelefone(usuario.id)
      .then(function(telefone) {
        return {
          usuario,
          telefone,
        };
      });
  })
  .then(function(resultado) {
    const endereco = obterEnderecoAsync(resultado.usuario.id);
    return endereco
      .then(function(endereco) {
        return {
          ...resultado,
          endereco
        };
      })
  })
  .then(function(resultado) {
    const { usuario, telefone, endereco } = resultado;
    console.log(`
      Nome: ${usuario.nome}
      Endereco: ${endereco.rua}, ${endereco.numero}
      Telefone: (${telefone.ddd}) ${telefone.telefone}
    `);
  })
  .catch(function(erro) {
    console.error('DEU RUIM', erro);
  });
