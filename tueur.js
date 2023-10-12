let tueur = {
    name: "Jason",
    hp: 100
}

class Survivants {
    constructor (nickname, prenom, pbMourir, pbDegats, pbMourirDegats) {
        this.nickname = nickname
        this.prenom = prenom
        this.pbMourir = pbMourir
        this.pbDegats = pbDegats
        this.pbMourirDegats = pbMourirDegats
    }
}

const nicknames = ["nickname1", "nickname2", "nickname3", "nickname4", "nickname5", "nickname6", "nickname7", "nickname8", "nickname9", "nickname10"]
const prenoms = ["prenom1", "prenom2", "prenom3", "prenom4", "prenom5", "prenom6", "prenom7", "prenom8", "prenom9", "prenom10"]
let survivants = []
let morts = []

for (let i = 0;i < 5; i++) {
    let randomNickname = Math.floor(Math.random() * nicknames.length)
    let randomPrenoms = Math.floor(Math.random() * prenoms.length)

    let survivant = new Survivants(nicknames[randomNickname], prenoms[randomPrenoms], 0.3, 0.5, 0.2)
    survivants.push(survivant)
    nicknames.splice(randomNickname, 1)
    prenoms.splice(randomPrenoms, 1)
}


while (tueur.hp > 0 && survivants.length != 0) {
    let randomSurvivant = Math.floor(Math.random() * survivants.length)

    if (Math.random() < survivants[randomSurvivant].pbMourir) {
        console.log("Jason a tué " + survivants[randomSurvivant].prenom + " " + survivants[randomSurvivant].nickname)    
        morts.push(survivants[randomSurvivant])
        survivants.splice(randomSurvivant, 1)   
    } else if (Math.random() < survivants[randomSurvivant].pbDegats) {
        console.log(survivants[randomSurvivant].prenom + " " + survivants[randomSurvivant].nickname + " a esquivé et a infligé " + tueur.name + " 10 dmg")
    tueur.hp -= 10
    } else if (Math.random() < survivants[randomSurvivant].pbMourirDegats) {
        console.log(survivants[randomSurvivant].prenom + " " + survivants[randomSurvivant].nickname + " charge sur " + tueur.name + " et lui inflige 15 dmg mais meurt")
        tueur.hp -= 15
        morts.push(survivants[randomSurvivant])
        survivants.splice(randomSurvivant, 1)   
    } else {
        console.log("rien")  //En suivant l'exercice il y a une chance que rien ne se passe (ou j'ai mal compris l'énoncé)
    }
    console.log("")
}


if (tueur.hp > 0) {
    console.log("Il ne reste plus que " + tueur.name)
    for (let j = 0;j < morts.length; j++) {
        console.log("RIP " + morts[j].prenom + " " + morts[j].nickname)
    }
} else {
    for (let j = 0;j < morts.length; j++) {
        console.log("Les survivants ont gagné mais RIP à " + morts[j].prenom + " " + morts[j].nickname)
    }
}