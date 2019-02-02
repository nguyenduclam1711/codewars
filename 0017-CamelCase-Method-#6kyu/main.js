String.prototype.camelCase = function(){
    return this.trim().length != 0 ? this.trim().replace(/\s+/g, ' ').split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join('') : ''
}

const   str = '   ',
        str1 = ' omega    lul    '
        
console.log(str1.camelCase())