const input = ["a", "sk"]

const wordValue = (word) => {
    return word.map((word,i) => word.replace(/\s+/g,"")
                                    .split("")
                                    .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0) * (i + 1))
}

const showResult = () => {
    document.getElementById('showResult').innerHTML = wordValue(input)
}
