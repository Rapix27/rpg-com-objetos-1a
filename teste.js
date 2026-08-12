   
   const guerreiro = {
    nome: "Thorin",
    vida: 60,
    ataque: 20,

    causaDano: function(personagem){
    personagem.recebeDano(this.ataque)
    },
    recebeDano: function(quantidade){
    this.vida = this.vida - quantidade

    if(this.vida <= 0){
        this.vida = "eliminado"
    }
}
  
}
    const mago = {
    nome: "Gandalfe",
    vida: 60,
    ataque: 35,

    recebeDano: function(quantidade){
    this.vida = this.vida - quantidade

    if(this.vida <= 0){
        this.vida = "eliminado"
    }
    },
causaDano: function(personagem){
    personagem.recebeDano(this.ataque)
    }
}
    const arqueiro = {
    nome: "Legolas",
    vida: 80,
    ataque: 25,

    recebeDano: function(quantidade){
    this.vida = this.vida - quantidade

    if(this.vida <= 0){
        this.vida = "eliminado"
    }
    },

    causaDano: function(personagem){
    personagem.recebeDano(this.ataque)
    }
}
guerreiro.causaDano(mago)
arqueiro.causaDano(mago)
guerreiro.causaDano(mago)
console.log(mago.vida)
