const db = require('../config/db');

async function salvarUsuario(nome, email, senha) {
  //cria usuario com o email informado caso nao exista ou altera os dados do usuario caso ja exista
  var usuario = await db('usuarios')
    .where({ email })
    .first();
  
  if (usuario) {
    usuario = await db('usuarios')
      .where({ email })
      .update({ nome, email, senha });
  } else {
    usuario = await db('usuarios')
      .insert({ nome, email, senha });
  }
  
  return usuario;
}

async function salvarPerfil(nome, rotulo) {
  //cria perfil caso nao exista um perfil com o nome informado ou atualiza perfil existente
  var perfil = await db('perfis')
    .where({ nome })
    .first();

  if (perfil) {
    perfil = await db('perfis')
      .where({ nome })
      .update({ nome, rotulo });
  } else {
    perfil = await db('perfis')
      .insert({ nome, rotulo });
  }

  return perfil;
}

async function adicionarPerfis(usuario, ...perfis) {
  //for (perfil of perfis)
  // const u = await db('usuarios')
  //   .where({ email: usuario.email })
  //   .first();
  // for (perfil of perfis) {
  //   const p = await db('perfis')
  //     .where({ nome: perfil.nome })
  //     .first();
  //   const usuarioPerfil = await db('usuarios_perfis')
  //     .where({ usuario_id: u.id, perfil_id: p.id })
  //     .first();
    
  //     if (!usuarioPerfil && p) {
  //       await db('usuarios_perfis')
  //         .insert({ usuario_id: usuario.id, perfil_id: p.id });
  //     }
  // }
  console.log(usuario)
}

async function executar() {
  const usuario = await salvarUsuario('Ana',
    'ana@empresa.com.br', '123456');
  const perfilA = await salvarPerfil('rh', 'Pessoal');
  const perfilB = await salvarPerfil('fin', 'Financeiro');

  console.log(usuario);
  console.log(perfilA);
  console.log(perfilB);

  await adicionarPerfis(usuario, perfilA, perfilB);
}

executar()
  .catch(err => console.log(err))
  .finally(() => db.destroy());