   class Personagem {
       constructor (nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.vidaMax = vida,
        this.ataque = ataque,
        this.defesa = defesa
       }
       
       curar(quantidade){
        this.vida = this.vida + quantidade

        if (this.vida > this.vidaMax){
            this.vida = this.vidaMax
        } 
       }

       causaDano(personagem){
        personagem.recebeDano(this.ataque)
       }

       recebeDano(quantidade){
        let dano = quantidade - this.defesa

        if(quantidade < this.defesa){
            dano = 0
        }

        this.vida = this.vida - dano

        if(this.vida <= 0){
            this.vida = "eliminado"
        }
       }

   estaVivo(){
    return this.vida > 0
    }

    mostrarStatus(){
        console.log(this.nome +" | Vida: " + this.vida)
    }
   }

   class Guerreiro extends Personagem {
    golpePesado(personagem){
        personagem.recebeDano(this.ataque * 2)
    }
   }
   class Mago extends Personagem {
bolaDeFogo(personagem){
personagem.recebeDano(this.ataque + 15)
    }
  }
class Arqueiro extends Personagem {
tiroPreciso(personagem){
personagem.recebeDano(this.ataque + 10)
   }
 }
class Protagonista extends Personagem {
    corteInvisivel(personagem){
          personagem.recebeDano(this.ataque + 50)
    }
}

class Teste extends Personagem {
     constructor(nome){
        super(nome, 80, 35, 15)
     }
} 

const Rafael = new Teste("Rafael")
const druida = new Personagem ("Kode", 70, 30, 8)
const guerreiro = new Guerreiro("Thorin", 60, 20, 15)
const mago = new Mago("Gandalfe", 60, 35, 5)
const arqueiro = new Arqueiro("Legolas", 80, 25, 12)   
const protagonista = new Protagonista("Rapix", 200, 100, 50) 
const barbaro = new Personagem("Varr", 90, 25, 6) 
const feiticeira = new Personagem("Morgana", 70, 30, 8) 
const ninja = new Personagem("Kaito", 80, 35, 5)  
const vampiro = new Personagem("Dracula", 120, 15, 5) 
const antagonista = new Personagem ("Tenebris", 150, 50, 25)

const personagens = [
     Rafael,
     druida,
     guerreiro,
     mago,
     arqueiro,
     protagonista,
     barbaro,
     feiticeira,
     ninja,
     vampiro,
     antagonista
]

personagens.forEach(function(personagem){
personagem.mostrarStatus()
})

let turno = 1
let jogadorAtual = 0

function proximoTurno(){
    
turno = turno + 1
jogadorAtual = jogadorAtual === 0 ? 1 : 0
}

proximoTurno()
proximoTurno()

console.log(turno)
console.log(jogadorAtual)