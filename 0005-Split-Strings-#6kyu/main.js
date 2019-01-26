function solution(str){
    let result = [],
        i = 0
    
    if (str.length % 2 != 0) str = str.concat("_")
    
    while (i < str.length) {
     result.push(str.slice(i, i + 2))
     i +=2
    }
    
    return result
}

console.log(solution('asdcxv'))
console.log(solution('asf'))