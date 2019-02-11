String.prototype.camelCase = function(){
    return this.split(/\s/)
                .filter(word => word !== "")
                .reduce((acc, word) => acc + word[0].toUpperCase() + word.slice(1), '')
}
const   str = '   ',
        str1 = ' omega    lul    '
        
console.log(str1.camelCase())