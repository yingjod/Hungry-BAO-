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


// *Variables
//currentLevel (update when the level up)
//livesAmount (will decrease when the Bao be hit)
//currentScore (will increse when the Bao cross each row)
//current-highest-score (will update when the player hit the current highest score)
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

let row1Start = 35
let row2Start = 34
let row3Start = 14
let row4Start = 13
let current_Score = 0
let current_lives = 3
let current_level = 0
let timer10
let timer15
let timer8
let timer5
let timer11
let timer7
const width = 7
const cellCount = width * width
let totalCell = width * width

const enemyName = ['fork', 'fork2', 'forkflip', 'forkflip2', 'steamer', 'steamer2', 'steamer3']
const dishPos = ['22', '23', '26']
let levelOne = []
//*Excutions

function moveEnemyRight(currentPosition, rowStart, className) {

  checkCollision(currentPosition)

  if (currentPosition < rowStart + width) {
    removeClass(currentPosition - 1, className)
    addClass(currentPosition, className)
    currentPosition = currentPosition + 1

  } else {
    removeClass(currentPosition - 1, className)
    currentPosition = rowStart
    // addClass(currentPosition,className)
  }
  return currentPosition

}

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


//*start the game
// The function that executes when a start button is clicked
function startGame() {
  // the items moveing in the rows every 1.5 seconds
  baoCurrentPosition = baoStartPosition
  addBao(baoCurrentPosition)
  placedishs()

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


function startGame1() {
  // the items moveing in the rows every 1.5 seconds
  baoCurrentPosition = baoStartPosition
  addBao(baoCurrentPosition)
  placedishs()

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


//* decrease the lives-amount 
//check for collision
//collision = true  will lose a life and game restart




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


function reset() {
  currentLevel.innerText = 0
  current_lives = 3
  livesAmount.innerText = current_lives
  currentScore.innerText = 0
  console.log('game number reset')
}


//add the bao in the game
function addBao(position) {
  cells[position].classList.add('bao');
}

//remove the bao in the game
function removeBao(position) {
  cells[position].classList.remove('bao');
}


//add the fork in the game
function addClass(position, className) {
  cells[position].classList.add(className);
  // console.log(`add ${position}`)
}

//remove the fork in the game
function removeClass(position, className) {
  cells[position].classList.remove(className);
  // console.log(`remove ${position}`)
}

function placedishs() {
  cells[22].classList.add('soydish')
  cells[23].classList.add('soydish')
  cells[26].classList.add('soydish')
}


// function collision(event){
//   if(baoCurrentPosition = event.target.classList.contains['forkflip']){
//     removeBao(baoCurrentPosition)
//     addBao(baoCurrentPosition)
//     console.log('collision')

//   }
// }

//make the bao could move
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

//* end the game
//when the lives-amount equel to 0, game finish.
//all the items dispear on the grid
//alarm on the page, showing final score
//game music stop playing


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

  //* player win 

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
    if( baoCurrentPosition < width){
    baoWin()
  }
  }

  // function levelOneFinish(width) {
  //   for(i = 0 ; width-1 < i ; i ++ ) {
  //     cells[i].classList.add('finish')
  //     console.log(cell.classList.contains('finish'))
  //   }
  // }
  


function clearEnemy() {
  for (let i = 0; i < totalCell; i++) {
    cells[i].classList.remove('fork', 'fork2', 'forkflip', 'forkflip2', 'steamer', 'steamer2', 'steamer3')
  }
}





//*Update the current-highest-score
// check the current-score is over the current-highest-score
// if it is , update the current-highest-score

//*Increase the current-level
//when the Bao reach to the steamer update the currentLevel
//the items start to move in the rows every 1.5 seconds




//*Event Listeners
//click event triggering on start-button
//Keypress event 
startButton.addEventListener('click', startGame)
document.addEventListener('keyup', KeyPress)

//Making a grid in JS


function createGrid() {
  for (let i = 0; i < cellCount; i++) {
    const cell = document.createElement('div')
    //cell.innerText = i
    cell.id = i
    cell.style.width = `${100 / width}%`
    cell.style.height = `${100 / width}%`
    grid.append(cell)
    cells.push(cell)
  }
}

createGrid()

function playAudio() {
  const audio = document.createElement("audio");
  audio.src = "Hungry.mp3";
  audio.play();
  }
