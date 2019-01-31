function sortGiftCode(code){
    return code.split('').sort().join('')
}

const str = 'mnciwaaxzcv'

console.log(sortGiftCode(str))