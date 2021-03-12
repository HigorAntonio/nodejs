const { ApolloServer, gql } = require('apollo-server');

const usuarios = [{
  id: 1,
  nome: 'Usuario1',
  email: 'usuario1@mail.com',
  senha: '123'
}, {
  id: 2,
  nome: 'Usuario2',
  email: 'usuario2@mail.com',
  senha: '456'
}]

const typeDefs = gql`
  type Usuario {
    id: Int
    nome: String!
    email: String!
    senha: String!
  }

  type Query {
    usuarios: [Usuario],
    usuario(id: Int): Usuario
  }

  type Mutation {
    novoUsuario(id: Int!
      nome: String!
      email: String!
      senha: String!): Usuario!
  }
`;

const resolvers = {
  Query: {
    usuarios: () => usuarios,
    usuario: (_, { id }) => {
      for (var i=0; i<usuarios.length; i++) {
        if(usuarios[i].id === id) return usuarios[i];
      }
    }
  },
  Mutation: {
    novoUsuario(_, { id, nome, email, senha }) {
      console.log(id, nome, email, senha);
      const usuarioExiste = usuarios.some(u => u.email === email);

      if (usuarioExiste) {
        throw new Error('E-mail cadastrado');
      }

      const novo = {
        id, nome, email, senha
      }

      usuarios.push(novo);

      return novo;
    }
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Executando em ${url}`);
});