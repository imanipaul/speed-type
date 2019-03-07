const words = ['splurge', 'sea', 'conscious', 'favor', 'medieval', 'clerk', 'pastel', 'variety', 'barrier', 'set', 'sentiment', 'computer', 'virus', 'particular', 'disposition', 'park', 'compliance', 'guerrilla', 'perfume', 'suite', 'cast', 'alarm', 'acquisition', 'appreciate', 'battlefield', 'raise', 'aisle', 'favour', 'patience', 'question', 'rational', 'regret', 'mathematics', 'chest', 'trap', 'control', 'violation', 'undertake', 'custody', 'language', 'list', 'swallow', 'trial', 'pour', 'trivial', 'wander', 'tax', 'promote', 'stitch', 'legend']

const textBox = document.querySelector('.textBox')
const winMessage = document.querySelector('.win')
const loseMessage = document.querySelector('.lose')
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
const missedWordsValue = document.querySelector('.misses-value')
let multipleWords;
let interval = 2000;
let missedWordsCount = 0;



const setDisplay = function(location, target){
    location.style.display = target
}

homeButton.addEventListener('click', function(){
    clearInterval(multipleWords)
    removeCurrentWords()
    resetScore()
    resetMisses()
    setDisplay(landingPage, 'flex')
    setDisplay(gameContainer, 'none')
    setDisplay(winMessage, 'none')
    setDisplay(loseMessage, 'none')
    
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
    
})

levelTwoButton.addEventListener('click', function(){
    setDisplay(landingPage, 'none')
    setDisplay(levelPage, 'none')
    setDisplay(gameContainer, 'flex')
    setDisplay(playOne, 'none')
    setDisplay(playTwo, 'inline-block')
})

changeLevelButton.addEventListener('click', function(){
    setDisplay(landingPage, 'none')
    setDisplay(gameContainer, 'none')
    setDisplay(levelPage, 'flex')
    clearInterval(multipleWords)
    resetMisses()
    resetScore()
    removeCurrentWords()
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
}

const updateMissedWords = function(){
    missedWordsValue.innerHTML = missedWordsCount.toString()
}

const removeWord = function(word){
    currentWords = getCurrentWords()
    let game = document.querySelector('.game')

    for (let i = 0; i < currentWords.length; i ++){
        leftPositionInt = parseInt(currentWords[i].style.left)
        if (leftPositionInt >= game.clientWidth){
            currentWords[i].remove()
            console.log('removed')
            missedWordsCount += 1;
            updateMissedWords()
        }
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

const resetScore = function(){
    document.querySelector('.score-value').innerText = '0';
}

const resetMisses = function(){
    missedWordsValue.innerHTML = '0'
    missedWordsCount = 0;
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
    if (getCurrentScore() > 100) {
        clearInterval(multipleWords)
        setDisplay(winMessage, 'block')
        removeCurrentWords() 
    }
}

const loseLevel = function() {
    if (missedWordsCount === 5){
        clearInterval(multipleWords)
        setDisplay(loseMessage, 'block')
        removeCurrentWords()
        resetMisses()
        console.log('lose')
        
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


const startGame = function(speed) {
    multipleWords = setInterval(function () {
        createWord(words, speed)
        removeWord()
        winLevel()
        loseLevel()
    }, interval)
}

const levelOne = function(){
    setDisplay(winMessage, 'none')
    setDisplay(loseMessage, 'none')
    resetMisses()
    resetScore()
    clearInterval(multipleWords)
    removeCurrentWords()
    interval = 2000;
    startGame(20)
    console.log('playing 1')
}

const levelTwo = function(){
    setDisplay(winMessage, 'none')
    setDisplay(loseMessage, 'none')
    resetMisses()
    resetScore()
    clearInterval(multipleWords)
    removeCurrentWords()
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



