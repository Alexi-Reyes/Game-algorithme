class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        return Math.random() < this.luck
    }
}

function attackPokemon() {
    return listPokemon[pokemonAttaquant].attack - listPokemon[pokemonDefendant].defense
}


let pikachu = new Pokemon("Pikachu", 13, 7, 25, 0.7)
let evee = new Pokemon("Evee", 12, 5, 30, 0.6)
let tour = 1
const listPokemon = [pikachu, evee]
let pokemonAttaquant = 0
let pokemonDefendant = 1


while (listPokemon[pokemonAttaquant].hp > 0 && listPokemon[pokemonDefendant].hp > 0) {
    console.log("Tour " + tour)
    console.log(listPokemon[pokemonAttaquant].name + " attaque")

    if (listPokemon[pokemonAttaquant].isLucky()) {
        listPokemon[pokemonDefendant].hp -= attackPokemon()
    } else {
        console.log("L'attaque rate")
    }

    if (listPokemon[pokemonDefendant].hp < 0) {
        console.log("hp de " + listPokemon[pokemonDefendant].name + ": 0")
    } else {
        console.log("hp de " + listPokemon[pokemonDefendant].name + ": " + listPokemon[pokemonDefendant].hp)
    }


    tour += 1
    console.log("")
    if (pokemonAttaquant == 0) {
        pokemonAttaquant = 1
        pokemonDefendant = 0
    } else {
        pokemonAttaquant = 0
        pokemonDefendant = 1
    }
    
}

if (listPokemon[pokemonDefendant].hp > 0) {
    pokemonGagnant = listPokemon[pokemonDefendant].name
} else {
    pokemonGagnant = listPokemon[pokemonAttaquant].name
}

console.log("Fin. " + String(pokemonGagnant) + " gagne.")