   class Personagem {
       constructor (nome, vida, ataque, defesa){
        this.nome = nome,
        this.vida = vida,
        this.vidaMaxima = vida,
        this.ataque = ataque,
        this.defesa = defesa
       }
       
       curar(quantidade){
        this.vida = this.vida + quantidade

        if (this.vida > this.vidaMaxima){
            this.vida = this.vidaMaxima
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


const druida = new Personagem ("Kode", 70, 30, 8)
const guerreiro = new Personagem("Thorin", 60, 20, 15)
const mago = new Personagem("Gandalfe", 60, 35, 5)
const arqueiro = new Personagem("Legolas", 80, 25, 12)   
const protagonista = new Personagem("Rapix", 100, 50, 50) 
const barbaro = new Personagem("Varr", 90, 25, 6) 
const feiticeira = new Personagem("Morgana", 70, 30, 8) 
const ninja = new Personagem("Kaito", 80, 35, 5)  
const vampiro = new Personagem("Dracula", 120, 15, 5) 

druida.causaDano(mago)
console.log(mago.estaVivo())
console.log(mago.mostrarStatus())

