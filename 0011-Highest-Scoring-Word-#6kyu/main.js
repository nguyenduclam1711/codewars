function high(x){
    let result = '',
        sumResult = sumString(result)
        
    x.split(' ').map(function (a) {
      let sum = sumString(a)
      if (sum > sumResult) {
        result = a
        sumResult = sum
      }
    })
    
    return result
}
  
const sumString = (str) => {
    return str.split('').reduce((a, b) => a + b.charCodeAt(0) - 96, 0)
}