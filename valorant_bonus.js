let manche = 1
let round = 1
let manchesGagneesAttack = 0
let manchesGagneesDefense = 0
let pbkillAttack = 0.5


while (manchesGagneesAttack != 13 && manchesGagneesDefense != 13) {
    console.log("Manche " + manche)
    let teamAttack = ["Omen1", "Phoenix1", "Jett1", "Fade1", "Chamber1"]
    let teamDefense = ["Omen2", "Phoenix2", "Jett2", "Fade2", "Chamber2"]
    let morts = []
    while (teamAttack.length != 0 && teamDefense.length != 0) {
        // Special Jett
        if (round % 3 == 0 && Math.random() < 0.8 && morts.indexOf("Jett1") == -1) {
            let joueurMort = Math.floor(Math.random() * teamDefense.length)
            console.log("[SPECIAL] Jett1 tue " + teamDefense[joueurMort])
            teamDefense.splice(joueurMort, 1)
        }

        if (teamDefense.length != 0) {
            if (round == 1) {
                pbSpike = Math.random()
            } else if (round == 2) {
                // rien pour prendre le changement de proba des special
            } else {
                pbkillAttack = 0.5
            }

            if (Math.random() < pbkillAttack) {
                // Team Attack
                let joueur = Math.floor(Math.random() * teamAttack.length)
                let joueurMort = Math.floor(Math.random() * teamDefense.length)
                console.log(teamAttack[joueur] + " tue " + teamDefense[joueurMort])
                teamDefense.splice(joueurMort, 1)
 
                if (round == 1 && pbSpike < 0.6) {
                    console.log("Spike amorcé")
                    pbkillAttack = 0.7
                } else if (round == 1 && pbSpike > 0.6 && Math.random() < 0.5 && morts.indexOf("Omen1") == -1) {
                    console.log("[SPECIAL] Omen1 plante une smoke")
                    pbkillAttack = 0.6
                } else if (round == 1 && pbSpike > 0.6 && Math.random() < 0.5 && morts.indexOf("Phoenix") == -1) {
                    if (Math.random() < 0.8) {
                        console.log("[SPECIAL] Phoenix1 lance une flash sur ses ennemis")
                        pbkillAttack = 0.6
                    } else {
                        console.log("[SPECIAL] Phoenix1 lance une flash sur ses alliés")
                        pbkillAttack = 0.3
                    }
                }
        
            } else {
                // Team Defense
                let joueur = Math.floor(Math.random() * teamDefense.length)
                let joueurMort = Math.floor(Math.random() * teamAttack.length)
                console.log(teamDefense[joueur] + " tue " + teamAttack[joueurMort])
                teamAttack.splice(joueurMort, 1)  
        
                if (round == 1 && pbSpike < 0.4) {
                    console.log("Spike amorcé")
                    pbkillAttack = 0.7
                }  else if (round == 1 && pbSpike > 0.4 && Math.random() < 0.5 && morts.indexOf("Omen1") == -1) {
                    console.log("[SPECIAL] Omen1 plante une smoke")
                    pbkillAttack = 0.6
                }
            }
            round += 1
        }
    }

    round = 1
    manche += 1
    console.log("")

    if (teamAttack.length == 0) {
        manchesGagneesDefense += 1
    } else if (teamDefense.length == 0) {
        manchesGagneesAttack += 1
    }

}

console.log("Team Attack gagne " + manchesGagneesAttack + " manches")
console.log("Team Defense gagne " + manchesGagneesDefense + " manches")