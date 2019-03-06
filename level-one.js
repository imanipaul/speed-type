const words = ['splurge', 'sea', 'conscious', 'favor', 'medieval', 'clerk', 'pastel', 'variety', 'barrier', 'set', 'sentiment', 'computer', 'virus', 'particular', 'disposition', 'park', 'compliance', 'guerrilla', 'perfume', 'suite', 'cast', 'alarm', 'acquisition', 'appreciate', 'battlefield', 'raise', 'aisle', 'favour', 'patience', 'question', 'rational', 'regret', 'mathematics', 'chest', 'trap', 'control', 'violation', 'undertake', 'custody', 'language', 'list', 'swallow', 'trial', 'pour', 'trivial', 'wander', 'tax', 'promote', 'stitch', 'legend']

const textBox = document.querySelector('.textBox')
const winMessage = document.querySelector('.win')
const playButton = document.querySelector('.startButton')
const stopButton = document.querySelector('.stopButton')


 

const generateWord = function(wordsArray){
    let randomWord = Math.floor(Math.random() * wordsArray.length)
    return wordsArray[randomWord]
}

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


const updateScore = function(){
    let scoreValue = document.querySelector('.score-value').innerHTML
    scoreValueInt = parseInt(scoreValue)
    scoreValueInt += 10;
    document.querySelector('.score-value').innerHTML = scoreValueInt.toString()
}

const resetBox = function(){
    textBox.value = "";
}

const winLevel = function(){
    currentScore = document.querySelector('.score-value').innerHTML
    currentScoreInt = parseInt(currentScore)
    if (currentScoreInt > 20){
        winMessage.style.display = 'block'
    }
}



textBox.addEventListener('keydown', function(evt){
    if (evt.keyCode === 13){
        evt.preventDefault()

        let currentWords = document.querySelectorAll('.word')
        for (let i = 0; i < currentWords.length; i ++){
            if (textBox.value === currentWords[i].innerHTML){
                console.log('matched')
                currentWords[i].remove()
                resetBox()
                updateScore()
            }
        }
    }
})

const startGame = function(){
    let multipleWords = setInterval(function(){
    createWord(words)
    winLevel()
},1000)
}

playButton.addEventListener('click', startGame)

// startGame()










