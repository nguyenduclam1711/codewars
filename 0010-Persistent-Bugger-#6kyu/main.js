function persistence(num) {
    let count = 0,
        arr = num.toString()
        
    while (arr.length > 1) {
      count++
      arr = arr.split('').map(Number).reduce((a, b) => a * b).toString()
    }
    
    return count
}

console.log(persistence(9999))
