/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable camelcase */

// *Elements
//set up grid
const grid = document.querySelector('.grid')
const cells = []
// current-level
const currentLevel = document.getElementById('level-stage')
// lives-amount
const livesAmount = document.getElementById('lives-amount')
// current-score
const currentScore = document.getElementById('current-score')
// current-highest-score
const currentHeighestScore = document.getElementById('current-highest-score')
// start-button (for start the game)
const startButton = document.getElementById('startbutton')
// mute-button (for mute the music in the game)
const muteButton = document.querySelector('.mute-btn')
// gamemusic 
const audio = document.querySelector('audio')



// *Variables

//start position and current position for each enemy
const baoStartPosition = 45
let baoCurrentPosition = baoStartPosition
const forkStartPosition_row1 = 35
let forkCurrentPosition_row1 = forkStartPosition_row1
const forkStartPosition_row1_2 = 36
let forkCurrentPosition_row1_2 = forkStartPosition_row1_2

const forkStartPosition_row2 = 34
let forkCurrentPosition_row2 = forkStartPosition_row2
const forkStartPosition_row2_2 = 33
let forkCurrentPosition_row2_2 = forkStartPosition_row2_2

const steamerStartPosition_row3 = 14
let steamerCurrentPosition_row3 = steamerStartPosition_row3
const steamerStartPosition_row3_2 = 15
let steamerCurrentPosition_row3_2 = steamerStartPosition_row3_2
const steamerStartPosition_row3_3 = 16
let steamerCurrentPosition_row3_3 = steamerStartPosition_row3_3
const steamerStartPosition_row4 = 13
let steamerCurrentPosition_row4 = steamerStartPosition_row4
const steamerStartPosition_row4_2 = 12
let steamerCurrentPosition_row4_2 = steamerStartPosition_row4_2

//the edge of each row
let row1Start = 35
let row2Start = 34
let row3Start = 14
let row4Start = 13
//currentScore (will increse when the Bao cross each row)
let current_Score = 0
//livesAmount (will decrease when the Bao be hit)
let current_lives = 3
//currentLevel (update when the level up)
let current_level = 0
//setInterval for different times
let timer10
let timer15
let timer8
let timer5
let timer11
let timer7

//for set up grid
const width = 7
const cellCount = width * width
let totalCell = width * width

//array for different enemies 
const enemyName = ['fork', 'fork2', 'forkflip', 'forkflip2', 'steamer', 'steamer2', 'steamer3']
const dishPos = ['22', '23', '26']
let levelOne = []



//*Excutions


//start the game level zero
// The function that executes when a start button is clicked
function startGame() {
  baoCurrentPosition = baoStartPosition
  addBao(baoCurrentPosition)
  placedishs()
  redLine()

  timer15 = setInterval(() => {
    forkCurrentPosition_row1 = moveEnemyRight(forkCurrentPosition_row1, row1Start, 'forkflip')
    forkCurrentPosition_row1_2 = moveEnemyRight(forkCurrentPosition_row1_2, row1Start, 'forkflip2')

    forkCurrentPosition_row2 = moveEnemyLeft(forkCurrentPosition_row2, row2Start, 'fork')
    forkCurrentPosition_row2_2 = moveEnemyLeft(forkCurrentPosition_row2_2, row2Start, 'fork2')

    steamerCurrentPosition_row3 = moveEnemyRight(steamerCurrentPosition_row3, row3Start, 'steamer')
    steamerCurrentPosition_row3_2 = moveEnemyRight(steamerCurrentPosition_row3_2, row3Start, 'steamer2')
  }, 1500)

  timer10 = setInterval(() => {
    steamerCurrentPosition_row4 = moveEnemyLeft(steamerCurrentPosition_row4, row4Start, 'steamer2')
    steamerCurrentPosition_row4_2 = moveEnemyLeft(steamerCurrentPosition_row4_2, row4Start, 'steamer3')
  }, 1000)

  timer8 = setInterval(() => {
    steamerCurrentPosition_row3 = moveEnemyRight(steamerCurrentPosition_row3, row3Start, 'steamer')
    steamerCurrentPosition_row3_2 = moveEnemyRight(steamerCurrentPosition_row3_2, row3Start, 'steamer2')
    steamerCurrentPosition_row3_3 = moveEnemyRight(steamerCurrentPosition_row3_3, row3Start, 'steamer3')
  }, 800)
  playAudio()
  startButton.disabled = true
}

//start the game level one
function startGame1() {
  baoCurrentPosition = baoStartPosition
  addBao(baoCurrentPosition)
  placedishs()
  redLine()

  timer11 = setInterval(() => {
    forkCurrentPosition_row1 = moveEnemyRight(forkCurrentPosition_row1, row1Start, 'forkflip')
    forkCurrentPosition_row1_2 = moveEnemyRight(forkCurrentPosition_row1_2, row1Start, 'forkflip2')

    forkCurrentPosition_row2 = moveEnemyLeft(forkCurrentPosition_row2, row2Start, 'fork')
    forkCurrentPosition_row2_2 = moveEnemyLeft(forkCurrentPosition_row2_2, row2Start, 'fork2')

    steamerCurrentPosition_row3 = moveEnemyRight(steamerCurrentPosition_row3, row3Start, 'steamer')
    steamerCurrentPosition_row3_2 = moveEnemyRight(steamerCurrentPosition_row3_2, row3Start, 'steamer2')
  }, 1100)

  timer7 = setInterval(() => {
    steamerCurrentPosition_row4 = moveEnemyLeft(steamerCurrentPosition_row4, row4Start, 'steamer2')
    steamerCurrentPosition_row4_2 = moveEnemyLeft(steamerCurrentPosition_row4_2, row4Start, 'steamer3')
  }, 700)

  timer5 = setInterval(() => {
    steamerCurrentPosition_row3 = moveEnemyRight(steamerCurrentPosition_row3, row3Start, 'steamer')
    steamerCurrentPosition_row3_2 = moveEnemyRight(steamerCurrentPosition_row3_2, row3Start, 'steamer2')
    steamerCurrentPosition_row3_3 = moveEnemyRight(steamerCurrentPosition_row3_3, row3Start, 'steamer3')
  }, 500)

  startButton.disabled = true
}


//countrol the enemy moving from left to right
function moveEnemyRight(currentPosition, rowStart, className) {
  checkCollision(currentPosition)
  if (currentPosition < rowStart + width) {
    removeClass(currentPosition - 1, className)
    addClass(currentPosition, className)
    currentPosition = currentPosition + 1
  } else {
    removeClass(currentPosition - 1, className)
    currentPosition = rowStart
  }
  return currentPosition
}


//countrol the enemy moving from right to left
function moveEnemyLeft(currentPosition, rowStart, className) {
  checkCollision(currentPosition)
  if (currentPosition > rowStart - width) {
    removeClass(currentPosition + 1, className)
    addClass(currentPosition, className)
    currentPosition = currentPosition - 1
  } else {
    removeClass(currentPosition + 1, className)
    currentPosition = rowStart
  }
  return currentPosition
}


//check the collision between bao and all the enemies
function checkCollision(enemyPos) {
  if (enemyPos === baoCurrentPosition) {
    removeBao(baoCurrentPosition)
    baoCurrentPosition = baoStartPosition
    addBao(baoStartPosition)
    current_lives--
    livesAmount.innerText = current_lives
  }
}

function checkBaoHitDish() {
  dishPos.forEach(function (pos) {
    console.log(`${pos} ${baoCurrentPosition}`)
    if (pos == baoCurrentPosition) {
      removeBao(baoCurrentPosition)
      baoCurrentPosition = baoStartPosition
      addBao(baoStartPosition)
      current_lives--
      livesAmount.innerText = current_lives
    }
  })
}

function checkBaoHitEnemy(baoCurrentPosition) {
  enemyName.forEach(function (name) {
    let enemyPostion = cells[baoCurrentPosition].classList.contains(name)
    if (enemyPostion == true) {
      removeBao(baoCurrentPosition)
      baoCurrentPosition = baoStartPosition
      addBao(baoStartPosition)
      current_lives--
      livesAmount.innerText = current_lives
    }
  })
}

//reset the game 
function reset() {
  currentLevel.innerText = 0
  current_lives = 3
  livesAmount.innerText = current_lives
  currentScore.innerText = 0
}

//add the bao in the game
function addBao(position) {
  cells[position].classList.add('bao');
}

//remove the bao in the game
function removeBao(position) {
  cells[position].classList.remove('bao');
}

//add the enemy in the game
function addClass(position, className) {
  cells[position].classList.add(className);
}

//remove the enemy in the game
function removeClass(position, className) {
  cells[position].classList.remove(className);
}

//add the soydish enemy 
function placedishs() {
  cells[22].classList.add('soydish')
  cells[23].classList.add('soydish')
  cells[26].classList.add('soydish')
}

//make the bao could move by keyboard
function KeyPress(evt) {
  if (current_lives > 0) {
    const key = evt.code
    if (key === 'ArrowUp' && baoCurrentPosition >= width) {
      removeBao(baoCurrentPosition)
      baoCurrentPosition -= width
      current_Score += 10
      currentScore.innerText = `${current_Score}`
      addBao(baoCurrentPosition)
    } else if (key === 'ArrowDown' && baoCurrentPosition + width < cells.length) {
      removeBao(baoCurrentPosition)
      baoCurrentPosition += width
      current_Score -= 10
      currentScore.innerText = `${current_Score}`
      addBao(baoCurrentPosition)
    } else if (key === 'ArrowRight' && (baoCurrentPosition + 1) % width !== 0) {
      removeBao(baoCurrentPosition)
      baoCurrentPosition++
      addBao(baoCurrentPosition)
    } else if (key === 'ArrowLeft' && (baoCurrentPosition - 1) % width !== width - 1 && baoCurrentPosition > 0) {
      removeBao(baoCurrentPosition)
      baoCurrentPosition--
      addBao(baoCurrentPosition)
    } else {
      console.log('Invalid Key')
    }

    addBao(baoCurrentPosition)
    checkBaoHitDish()
    levelUp(baoCurrentPosition)
  } else if (current_lives === 0) {
    gameoverState()
    startButton.disabled = false
    alert(`Game Over, your final score is ${current_Score}`)
  }
}

// game over state
function gameoverState() {
  clearEnemy()
  clearInterval(timer8)
  clearInterval(timer10)
  clearInterval(timer15)
  clearInterval(timer5)
  clearInterval(timer7)
  clearInterval(timer11)
  removeBao(baoCurrentPosition)
  reset()
}

// Bao win the game and move to next level
function baoWin() {
  current_Score += 100
  currentScore.innerText = `${current_Score}`
  current_level += 1
  currentLevel.innerText = `${current_level}`
  removeBao(baoCurrentPosition)
  baoCurrentPosition = baoStartPosition
  addBao(baoCurrentPosition)
  clearEnemy()
  clearInterval(timer8)
  clearInterval(timer10)
  clearInterval(timer15)
  addBao(baoCurrentPosition)
  startGame1()
}

function levelUp(baoCurrentPosition) {
  if (baoCurrentPosition < width) {
    baoWin()
  }
}

//claer all the enemies
function clearEnemy() {
  for (let i = 0; i < totalCell; i++) {
    cells[i].classList.remove('fork', 'fork2', 'forkflip', 'forkflip2', 'steamer', 'steamer2', 'steamer3')
  }
}


//*Event Listeners

//click event triggering on start-button
startButton.addEventListener('click', startGame)
//Keypress event 
document.addEventListener('keyup', KeyPress)
//click event to mute the music
muteButton.addEventListener('click', muteAudio)

//Making a grid in JS
function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    cell.id = i
    cell.style.width = `${100 / width}%`
    cell.style.height = `${100 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
}
createGrid()

//display the red line on first row of the grid
function redLine() {
  for (i = 0; i < width; i++) {
    cells[i].classList.add('redline')
  }
}


function playAudio() {
  audio.play()
}

//mute game music function
function muteAudio() {
  console.log('press mute')
  if (audio.muted === true) {
    audio.muted = false
    muteButton.innerHTML = '&#x1f50a'
  } else {
    audio.muted = true
    muteButton.innerHTML = '&#x1f507'
  }
}

