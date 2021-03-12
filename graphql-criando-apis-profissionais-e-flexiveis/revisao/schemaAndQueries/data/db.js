let id = 1;
function proximoId() {
  return id++;
}

let idPerfil = 1;
function proximoIdPerfil() {
  return  idPerfil++;
}

const usuarios = [{
  id: proximoId(),
  nome: 'João Silva',
  email: 'jsilva@zmail.com',
  idade: 29,
  perfil_id: 1,
  status: 'ATIVO',
}, {
  id: proximoId(),
  nome: 'Rafael Junior',
  email: 'rafajunior@wmail.com',
  idade: 31,
  perfil_id: 2,
  status: 'INATIVO',
}, {
  id: proximoId(),
  nome: 'Daniela Smith',
  email: 'danismith@umail.com',
  idade: 24,
  perfil_id: 1,
  status: 'BLOQUEADO',
}];

const perfis = [{
  id: proximoIdPerfil(),
  nome: 'Comum'
}, {
  id: proximoIdPerfil(),
  nome: 'Administrador'
}];

module.exports = { usuarios,
  perfis,
  proximoId,
  proximoIdPerfil
};