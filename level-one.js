const words = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward', 'end' ]


console.log(words)

const generateWord = function(wordsArray){
    randomWord = Math.floor(Math.random() * wordsArray.length)
    // console.log(randomWord)
    console.log(wordsArray[randomWord])
    return wordsArray[randomWord]
}
// generateWord(words)

const createWord = function(words){
    newWord = generateWord(words);
    console.log(newWord)
    wordDiv = document.createElement('div')
    wordDiv.setAttribute('class', 'word')
    wordDiv.textContent = newWord;
    document.querySelector('.game').appendChild(wordDiv)
}

createWord(words)
