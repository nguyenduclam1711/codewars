function spinWords(str){
    return str.split(' ')
      .map(word => word.length >= 5 ? word.split('').reverse().join('') : word)
      .join(' ');
}

console.log(spinWords("hey let me out of here you fucking peace of shit"))