tour = 0


while (tour < 20) {
    while (tour < 10) {
        if (Math.random() < 0.8) {
            console.log("win")
            break
        }
        console.log("boucle 2")
        tour += 1
    }
    tour += 1
    console.log("boucle 1")
}

console.log("out")