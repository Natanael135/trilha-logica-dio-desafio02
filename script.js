class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    if (this.tipo === 'mago') {
      ataque = 'magia';
    } else if (this.tipo === 'guerreiro') {
      ataque = 'espada';
    } else if (this.tipo === 'monge') {
      ataque = 'artes marciais';
    } else if (this.tipo === 'ninja') {
      ataque = 'shuriken';
    } else {
      ataque = 'ataque desconhecido';
    }

    console.log(`O ${this.tipo} atacou usando ${ataque}`);
  }
}

const mago = new Heroi('Gandalf', 150, 'mago');
const guerreiro = new Heroi('Thorin', 50, 'guerreiro');
const monge = new Heroi('Shifu', 40, 'monge');
const ninja = new Heroi('Ryu', 30, 'ninja');

mago.atacar();
guerreiro.atacar();
monge.atacar();
ninja.atacar();
