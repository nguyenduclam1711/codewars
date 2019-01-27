const gimme = (inputArray) => {
    return inputArray.indexOf(inputArray.slice().sort((a ,b) => a - b)[1])
};

console.log(gimme([123,45,92]))