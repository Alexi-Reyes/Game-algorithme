let personne = {
    name: "John",
    hp: 10
}

let trajet = {
    radio: ["Anissa - Wejdene", "Musique1", "Musique2", "Musique3", "Musique4"],
    feux: 30,
    changement: 0
}

tour = 0

console.log(personne.name + " rentre en taxi.")
while (trajet.feux != 0) {
    let musicPlayed = trajet.radio[Math.floor(Math.random() * 5)]
    console.log("Il reste " + trajet.feux + " feux.")
    console.log(musicPlayed + " joue dans le taxi")
    if (musicPlayed == "Anissa - Wejdene") {
        personne.hp -= 1
        console.log(personne.name + " prend des dégats. -1 HP")
        console.log("Point de vie restant: " + personne.hp)
        trajet.feux += 1
    }

    trajet.feux -= 1
    console.log("")

    if (personne.hp == 0) {
        console.log(personne.name + " explose.")
        break
    }

}
if (personne.hp != 0) {
    console.log(personne.name + " arrive chez lui.")
}
