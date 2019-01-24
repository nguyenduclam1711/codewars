const rot13 = (message) => {
    return message.split("")
                  .map(function (x) {
                        let charCode = x.charCodeAt(0)
                        if((charCode >= 65 && charCode <= 77) || (charCode >= 97 && charCode <= 109)) return String.fromCharCode(charCode + 13)
                        else if((charCode >= 78 && charCode <= 90) || (charCode >= 110 && charCode <= 122)) return String.fromCharCode(charCode - 13)
                        else return String.fromCharCode(charCode)
                  })
                  .join("")
}

const showResult = () => {
    document.getElementById('showResult').innerHTML = rot13(document.getElementById('inputText').value)
}
