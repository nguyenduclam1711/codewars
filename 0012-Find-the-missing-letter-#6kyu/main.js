function findMissingLetter(array) {
    let result = ''
    for(i = 0; i < array.length-1; i++) {
      if(array[i+1].charCodeAt(0) - array[i].charCodeAt(0) == 2)
        return String.fromCharCode(array[i].charCodeAt(0) + 1)
    }
    throw new console.error("Invalid Input");
}

console.log(findMissingLetter(['a','b','c','e']))