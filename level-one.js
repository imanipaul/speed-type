const words = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward', 'end' ]

const textBox = document.querySelector('.text')

textBox.addEventListener('keydown', function(evt){
    console.log(evt.keyCode)
    if (evt.keyCode === 13){
        evt.preventDefault()
        console.log('entered')
    }
    
})

const generateWord = function(wordsArray){
    let randomWord = Math.floor(Math.random() * wordsArray.length)
    // console.log(randomWord)
    // console.log(wordsArray[randomWord])
    return wordsArray[randomWord]
}
// generateWord(words)

const randomPosition = function(){
    game = document.querySelector('.game')
    header = document.querySelector('.scores')
    position = (Math.random() * game.clientHeight) + header.clientHeight
    return position.toString()
}



const moveWord = function(word){
    let game = document.querySelector('.game')
    let leftPosition = word.style.left
    let leftPositionInt = parseInt(leftPosition)

    
    if (leftPositionInt < game.clientWidth){
        // console.log(leftPosition)
        // console.log(game.clientWidth)
        leftPositionInt = parseInt(leftPosition)
        newLeftPosition = ((leftPositionInt + 70).toString()) + 'px'
        word.style.left = newLeftPosition
    }
    else{
        word.remove()
    }
      

}


const createWord = function(words){
    newWord = generateWord(words); 
    
    let wordDiv = document.createElement('div')
    wordDiv.setAttribute('class', 'word')
    wordDiv.textContent = newWord

    wordDiv.style.setProperty('left', '10px')
    wordDiv.style.setProperty('top', randomPosition() + 'px')
    

    let movingWord = setInterval(function(){
        moveWord(wordDiv)
    }, 1000)



    document.querySelector('.game').appendChild(wordDiv)
}

// createWord(words)

const startGame = function(){
    let multipleWords = setInterval(function(){
    createWord(words)
},1000)
}

// startGame()

//get current words on screen:

// currentWords = document.querySelectorAll('.word')

//add event listener to text box

// const enteredWord = function(){
//     // evt.preventDefault()
//     console.log('submit')
//     console.log(evt)
// }








