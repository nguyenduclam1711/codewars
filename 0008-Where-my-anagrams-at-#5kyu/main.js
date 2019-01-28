function anagrams(word, words) {
    let result = []
    word = word.split('').sort().join('')
    words.map(x => x.slice(0).split('').sort().join('') == word ? result.push(x) : x)
    return result
}

console.log(anagrams('cdab',[]))