function narcissistic(value) {
    let sum = 0,
        length = value.toString().length
    value.toString().split('').map(Number).map(x => sum += Math.pow(x, length))
    return sum == value ? true : false 
}