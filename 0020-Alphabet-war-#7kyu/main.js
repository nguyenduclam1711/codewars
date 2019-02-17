const alphabetWar = (fight) => {
    const left = [{"w": 4}, {"p": 3}, {"b": 2}, {"s": 1}],
          right = [{"m": 4}, {"q": 3}, {"d": 2}, {"z": 1}]
    let leftPow = 0,
        rightPow = 0

    fight.split("").forEach(letter => {
        left.forEach((element) => element[letter] ?  leftPow += element[letter] : leftPow )
        right.forEach((element) => element[letter] ? rightPow += element[letter] : rightPow)
    })

    if (leftPow > rightPow) return "Left side wins!"
    if (rightPow > leftPow) return "Right side wins!"
    return "Let's fight again!"
} 

console.log(alphabetWar("wm"))
console.log(alphabetWar("zzzzs"))
console.log(alphabetWar("wwwwwwz"))