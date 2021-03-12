const { usuarios } = require('../../data/db');

module.exports = {
  usuarios() {
    return usuarios;
  }, 

  usuario(_, args) {
    const sels = usuarios.filter(u => u.id === args.id);
    return sels ? sels[0] : null;
  }
};