const words = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward', 'end' ]


// console.log(words)

const generateWord = function(wordsArray){
    let randomWord = Math.floor(Math.random() * wordsArray.length)
    // console.log(randomWord)
    console.log(wordsArray[randomWord])
    return wordsArray[randomWord]
}
// generateWord(words)

const randomPosition = function(){
    position = (Math.random() * window.innerHeight).toString()
    // console.log(typeof(position))
    return position
}

const moveWord = function(word){
    leftPosition = word.style.left
    console.log(leftPosition)
    leftPositionInt = parseInt(leftPosition)
    newLeftPosition = ((leftPositionInt + 30).toString()) + 'px'
    word.style.left = newLeftPosition
    console.log(leftPosition)

}


const createWord = function(words){
    newWord = generateWord(words);
    // console.log(newWord)
    let wordDiv = document.createElement('div')
    wordDiv.setAttribute('class', 'word')
    wordDiv.textContent = newWord

    wordDiv.style.setProperty('left', '10px')
    wordDiv.style.setProperty('top', randomPosition() + 'px')
    

    // let movingWord = setInterval(function(){
    //     moveWord(wordDiv)
    // }, 1000)

    // movingWord

    document.querySelector('.game').appendChild(wordDiv)
}

createWord(words)


