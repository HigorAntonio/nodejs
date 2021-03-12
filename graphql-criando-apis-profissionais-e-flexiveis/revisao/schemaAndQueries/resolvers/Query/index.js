const teste = require('./teste');
const usuario = require('./usuario');
const perfil = require('./perfil');

module.exports = {
  ...teste,
  ...usuario,
  ...perfil
};