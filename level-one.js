const words = ['splurge', 'sea', 'conscious', 'favor', 'medieval', 'clerk', 'pastel', 'variety', 'barrier', 'set', 'sentiment', 'computer', 'virus', 'particular', 'disposition', 'park', 'compliance', 'guerrilla', 'perfume', 'suite', 'cast', 'alarm', 'acquisition', 'appreciate', 'battlefield', 'raise', 'aisle', 'favour', 'patience', 'question', 'rational', 'regret', 'mathematics', 'chest', 'trap', 'control', 'violation', 'undertake', 'custody', 'language', 'list', 'swallow', 'trial', 'pour', 'trivial', 'wander', 'tax', 'promote', 'stitch', 'legend']

const textBox = document.querySelector('.textBox')
const winMessage = document.querySelector('.win')
const playOne = document.querySelector('.play-level-one')
const changeLevelButton = document.querySelector('.change-level')
const gameContainer = document.querySelector('.game-container')
const landingPage = document.querySelector('.landing-screen')
const beginButton = document.querySelector('.begin-button')
const homeButton = document.querySelector('img')
const levelPage = document.querySelector('.level-screen')
const levelOneButton = document.querySelector('.level1')
const levelTwoButton = document.querySelector('.level2')
const playTwo = document.querySelector('.play-level-two')
const levelOneTag = document.querySelector('.level-one-tag')
const levelTwoTag = document.querySelector('.level-two-tag')


homeButton.addEventListener('click', function(){
    landingPage.style.display = 'flex'
    gameContainer.style.display = 'none'
})

beginButton.addEventListener('click', function () {
    landingPage.style.display = 'none'
    gameContainer.style.display = 'none'
    levelPage.style.display = 'flex'

})

levelOneButton.addEventListener('click', function(){
    landingPage.style.display = 'none'
    levelPage.style.display = 'none'
    gameContainer.style.display = 'flex'
    playOne.style.display = 'inline-block'
    levelOneTag.style.display = 'block'
    levelTwoTag.style.display = 'none'
})

levelTwoButton.addEventListener('click', function(){
    landingPage.style.display = 'none'
    levelPage.style.display = 'none'
    gameContainer.style.display = 'flex'
    playTwo.style.display = 'inline-block'
    playOne.style.display = 'none'
    levelOneTag.style.display = 'none'
    levelTwoTag.style.display = 'block'

})

changeLevelButton.addEventListener('click', function(){
    landingPage.style.display = 'none'
    gameContainer.style.display = 'none'
    levelPage.style.display = 'flex'
})



const generateWord = function (wordsArray) {
    let randomWord = Math.floor(Math.random() * wordsArray.length)
    return wordsArray[randomWord]
}

const randomPosition = function () {
    game = document.querySelector('.game')
    header = document.querySelector('.scores')
    position = Math.floor((Math.random() * game.clientHeight)) + header.clientHeight
    return position.toString()
}



const moveWord = function (word) {
    let game = document.querySelector('.game')
    let leftPosition = word.style.left
    let leftPositionInt = parseInt(leftPosition)


    if (leftPositionInt < game.clientWidth) {
        leftPositionInt = parseInt(leftPosition)
        newLeftPosition = ((leftPositionInt + 1).toString()) + 'px'
        word.style.left = newLeftPosition
    }
    else {
        word.remove()
    }
}



const createWord = function (words, speed) {
    newWord = generateWord(words);

    let wordDiv = document.createElement('div')
    wordDiv.setAttribute('class', 'word')
    wordDiv.textContent = newWord

    wordDiv.style.setProperty('left', '10px')
    wordDiv.style.setProperty('top', randomPosition() + 'px')


    let movingWord = setInterval(function () {
        moveWord(wordDiv)
    }, speed)
    document.querySelector('.game').appendChild(wordDiv)
}


const updateScore = function () {
    let scoreValue = document.querySelector('.score-value').innerHTML
    scoreValueInt = parseInt(scoreValue)
    scoreValueInt += 10;
    document.querySelector('.score-value').innerHTML = scoreValueInt.toString()
}

const resetBox = function () {
    textBox.value = "";
}

const winLevel = function () {
    currentScore = document.querySelector('.score-value').innerHTML
    currentScoreInt = parseInt(currentScore)
    if (currentScoreInt > 30) {
        winMessage.style.display = 'block'
        let currentWords = document.querySelectorAll('.word')
        for (let i = 0; i < currentWords.length; i++) {
            currentWords[i].remove()
        }
    }
    // clearInterval(multipleWords)
}



textBox.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 13) {
        evt.preventDefault()

        let currentWords = document.querySelectorAll('.word')
        for (let i = 0; i < currentWords.length; i++) {
            if (textBox.value === currentWords[i].innerHTML) {
                console.log('matched')
                currentWords[i].remove()
                resetBox()
                updateScore()
            }
        }
    }
})


const startGame = function(speed, interval) {
    let multipleWords = setInterval(function () {
        createWord(words, speed)
        winLevel()
    }, interval)
}

const levelOne = function(){
    startGame(20, 2000)
}

const levelTwo = function(){
    startGame(10, 1000)
}


playOne.addEventListener('click', function() {
    textBox.select()
    levelOne()

})

playTwo.addEventListener('click', function(){
    textBox.select()
    levelTwo()
})



