function digital_root(n) {
  let number = n.toString().split('')
  
  while (number.length > 1) {
    number = number.map(Number).reduce((total, num) => total + num, 0).toString().split('')
  }
  
  return number.map(Number)[0]
}

console.log(digital_root(98093284))