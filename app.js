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


    mostrarStatus(){
        console.log(this.nome +" | Vida: " + this.vida)
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

druida.causaDano(mago)
console.log(mago.estaVivo())
console.log(mago.mostrarStatus())

