const array_diff = (a, b) => {
    let result = []

    a.forEach(x => b.includes(x) ? result = result : result.push(x))

    return result
}

console.log(array_diff([1,2,2,2,3],[2]))