const removeExclamationMarks = (string) => {
    return string.replace(/!+/g, '')
}

const showResult = () => {
    document.getElementById('showResult').innerHTML = removeExclamationMarks(document.getElementById('inputText').value)
}
