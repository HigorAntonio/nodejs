const { perfis, proximoIdPerfil } = require('../../data/db');

function indicePerfil(filtro) {
  if(!filtro) return -1;
  const { id, nome } = filtro;
  if(id) {
    return perfis.findIndex(p => p.id === id);
  } else if(nome) {
    return perfis.findIndex(p => p.nome === nome);
  }
  return -1;
}

module.exports = {
  novoPerfil(_, { dados }) {
    const perfilExistente = perfis.some(p => p.nome === dados.nome);

    if(perfilExistente) {
      throw new Error('Perfil ja cadastrado');
    }

    const perfil = {
      id: proximoIdPerfil(),
      ...dados
    }

    perfis.push(perfil);
    return perfil;
  },

  excluirPerfil(_, { filtro }) {
    const i = indicePerfil(filtro);
    if(i < 0) return null;
    const excluidos = perfis.splice(i, 1);
    return excluidos ? excluidos[0] : null;
  },

  alterarPerfil(_, { filtro, dados }) {
    const i = indicePerfil(filtro);
    if(i < 0) return null;

    perfis[i] = {
      ...perfis[i],
      ...dados
    }
    return perfis[i];
  },
}