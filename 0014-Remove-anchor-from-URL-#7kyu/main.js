function removeUrlAnchor(url){
    return url.replace(/#.+/g, '')
}

const url = 'www.codewars.com#about'

console.log(removeUrlAnchor(url))