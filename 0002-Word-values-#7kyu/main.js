let input = ["a", "sk"]

const wordValue = (a) => {
    return a.map((x,i) => x.replace(/\s+/g,"")
                           .split("")
                           .reduce((a,b) => a + b.charCodeAt(0) - 96, 0) * (i + 1) )
}

const showResult = () => {
    document.getElementById('showResult').innerHTML = wordValue(input)
}
