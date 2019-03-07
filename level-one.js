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
let multipleWords;


const setDisplay = function(location, target){
    location.style.display = target
}

homeButton.addEventListener('click', function(){
    setDisplay(landingPage, 'flex')
    setDisplay(gameContainer, 'none')
    
})

beginButton.addEventListener('click', function () {
    setDisplay(landingPage, 'none')
    setDisplay(gameContainer, 'none')
    setDisplay(levelPage, 'flex')

})

levelOneButton.addEventListener('click', function(){
    setDisplay(landingPage, 'none')
    setDisplay(levelPage, 'none')
    setDisplay(gameContainer, 'flex')
    setDisplay(playOne, 'inline-block')
    setDisplay(playTwo, 'none')
    setDisplay(levelOneTag, 'block')
    setDisplay(levelTwoTag, 'none')
    
})

levelTwoButton.addEventListener('click', function(){
    setDisplay(landingPage, 'none')
    setDisplay(levelPage, 'none')
    setDisplay(gameContainer, 'flex')
    setDisplay(playOne, 'none')
    setDisplay(playTwo, 'inline-block')
    setDisplay(levelOneTag, 'none')
    setDisplay(levelTwoTag, 'block')
})

changeLevelButton.addEventListener('click', function(){
    setDisplay(landingPage, 'none')
    setDisplay(gameContainer, 'none')
    setDisplay(levelPage, 'flex')
    clearInterval(multipleWords)
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

const getCurrentScore = function(){
    currentScore = document.querySelector('.score-value').innerHTML
    return currentScoreInt = parseInt(currentScore)
}


const updateScore = function () {
    scoreValueInt = getCurrentScore()
    scoreValueInt += 10;
    document.querySelector('.score-value').innerHTML = scoreValueInt.toString()
}

const resetBox = function () {
    textBox.value = "";
}

const getCurrentWords = function(){
    let currentWords = document.querySelectorAll('.word')
    return currentWords;
}

const removeCurrentWords = function(){
    currentWords = getCurrentWords()
    for (let i = 0; i < currentWords.length; i++) {
            currentWords[i].remove()
        }
}




const winLevel = function () {
    if (getCurrentScore() > 10) {
        clearInterval(multipleWords)
        setDisplay(winMessage, 'block')
        removeCurrentWords() 
    }
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

let interval = 2000;



const startGame = function(speed) {
    multipleWords = setInterval(function () {
        createWord(words, speed)
        winLevel()
    }, interval)
}

const levelOne = function(){
    interval = 2000;
    startGame(20)
}

const levelTwo = function(){
    interval = 1000;
    startGame(10)
}


playOne.addEventListener('click', function() {
    textBox.select()
    levelOne()

})

playTwo.addEventListener('click', function(){
    textBox.select()
    levelTwo()
})



