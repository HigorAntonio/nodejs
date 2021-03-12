module.exports = {
  ola() {
    return "Ola Graphql"
  },

  horaAtual() { 
    return new Date;
  },

  usuarioLogado() {
    return {
      id: 1,
      nome: 'Ana da Web',
      email: 'anadaweb@email.com',
      idade: 23,
      salario_real: 1234.56,
      vip: true
    }
  },

  produtoEmDestaque() {
    return {
      nome: 'Notebook Gamer',
      preco: 4890.89,
      desconto: 0.15
    }
  },

  numerosMegaSena() {
    const crescente = (a, b) => a - b
    return Array(6).fill(0).map(() => parseInt(Math.random()*60+1)).sort(crescente);
  }
};