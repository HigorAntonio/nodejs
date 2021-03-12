const EventEmitter = require('events');
class MeuEmissor extends EventEmitter {

}
const meuEmissor = new MeuEmissor();
const nomeEvento = 'usuario:click';
meuEmissor.on(nomeEvento, function(click) {
  console.log('um usuario clicou', click);
})

// meuEmissor.emit(nomeEvento, 'na barra de rolagem');
// meuEmissor.emit(nomeEvento, 'no ok');

const stdin = process.openStdin();
stdin.addListener('data', function(value) {
  console.log(`Voce digitou: ${value.toString().trim()}`);
})