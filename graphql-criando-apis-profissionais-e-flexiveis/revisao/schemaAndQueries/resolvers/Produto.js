module.exports = {
  precoComDesconto(produto) {
    return produto.desconto ? produto.preco * (1 - produto.desconto) : produto.preco;
  }
};