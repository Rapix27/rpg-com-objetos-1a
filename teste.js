   class Personagem {
       constructor (nome, vida, ataque){
        this.nome = nome,
        this.vida = vida,
        this.ataque = ataque
       }

       causaDano(personagem){
        personagem.recebeDano(this.ataque)
       }
       recebeDano(quantidade){
        this.vida = this.vida - quantidade 

        if(this.vida <= 0){
            this.vida = "eliminado"
        }
       }

   estaVivo(){
    return this.vida > 0
    }
   }


   const druida = new Personagem ("Kode", 80, 25)
const guerreiro = new Personagem("Thorin", 60, 20)
const mago = new Personagem("Gandalfe", 60, 35)
const arqueiro = new Personagem("Legolas", 80, 25)   
const protagonista = new Personagem("Rapix", 100, 50) 
const barbaro = new Personagem("Varr", 90, 25) 
const feiticeira = new Personagem("Morgana", 70, 30) 
const ninja = new Personagem("Kaito", 80, 35)  
const vampiro = new Personagem("Dracula", 120, 15) 



protagonista.causaDano(barbaro) 
barbaro.causaDano(feiticeira) 
feiticeira.causaDano(ninja) 
ninja.causaDano(vampiro) 
vampiro.causaDano(protagonista) 
protagonista.causaDano(feiticeira) 
barbaro.causaDano(vampiro) 
ninja.causaDano(barbaro) 

console.log(protagonista.vida) 
console.log(barbaro.vida) 
console.log(feiticeira.vida) 
console.log(ninja.vida) 
console.log(vampiro.vida)

console.log("Morgana foi derrotada pelo Rapix")
   
druida.causaDano(mago)
mago.curar(15)
mago.curar(20)

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









guerreiro.golpePesado(mago)
mago.bolaDeFogo(guerreiro)
arqueiro.tiroPreciso(barbaro)
protagonista.corteInvisivel(antagonista)
mago.mostrarStatus()
guerreiro.mostrarStatus()
barbaro.mostrarStatus()
antagonista.mostrarStatus()