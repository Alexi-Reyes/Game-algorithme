let manche = 1
let duel = 1
let manchesGagneesAttack = 0
let manchesGagneesDefense = 0
let pbkillAttack = 0.5


while (manchesGagneesAttack != 13 && manchesGagneesDefense != 13) {
    console.log("Manche " + manche)
    let teamAttack = ["Omen1", "Phoenix1", "Jett1", "Fade1", "Chamber1"]
    let teamDefense = ["Omen2", "Phoenix2", "Jett2", "Fade2", "Chamber2"]
    while (teamAttack.length != 0 && teamDefense.length != 0) {
        if (Math.random() < pbkillAttack) {
            // Team Attack
            let joueur = Math.floor(Math.random() * teamAttack.length)
            let joueurMort = Math.floor(Math.random() * teamDefense.length)
            console.log(teamAttack[joueur] + " tue " + teamDefense[joueurMort])
            teamDefense.splice(joueurMort, 1)
            
            if (Math.random() < 0.6 && duel == 1) {
                console.log("Spike amorcé")
                pbkillAttack = 0.7
            } else {
                pbkillAttack = 0.5
            }
    
        } else {
            // Team Defense
            let joueur = Math.floor(Math.random() * teamDefense.length)
            let joueurMort = Math.floor(Math.random() * teamAttack.length)
            console.log(teamDefense[joueur] + " tue " + teamAttack[joueurMort])
            teamAttack.splice(joueurMort, 1)  
    
            if (Math.random() < 0.4 && duel == 1) {
                console.log("Spike amorcé")
                pbkillAttack = 0.7
            } else {
                pbkillAttack = 0.5
            }
        }
        duel += 1
    }

    duel = 1
    manche += 1
    console.log("")

    if (teamAttack.length == 0) {
        manchesGagneesAttack += 1
    } else if (teamDefense.length == 0) {
        manchesGagneesDefense += 1
    }

}

console.log("Team Attack gangne " + manchesGagneesAttack + " manches")
console.log("Team Defense gangne " + manchesGagneesDefense + " manches")