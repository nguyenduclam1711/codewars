let string1 = '',
    string2 = ''

const comp = (array1, array2) => {
    if (array1 === null || array2 === null) return false
    if (array1.length === 0 && array2.length === 0) return true
  
    let sortedArray1 = array1.sort((a,b) => a - b),
        sortedArray2 = array2.sort((a,b) => a - b).map(x => Math.sqrt(x))
      
     return sortedArray1.join(" ") === sortedArray2.join(" ") ? true : false
}

const inputToArray = (string) => {
    return string.replace(/\s+/g, '').split(',')
}

const onChangeHandler1 = () => {
    string1 = document.getElementById('inputText1').value
}

const onChangeHandler2 = () => {
    string2 = document.getElementById('inputText2').value
}

const showResult = () => {
    document.getElementById('showResult').innerHTML = comp(inputToArray(string1), inputToArray(string2))
}

