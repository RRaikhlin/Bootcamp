// console.log(document)

const moveRight = function(){
    
    let left = parseInt(ball.style.left) || 0
    left += 150
    ball.style.left = left + "px"
}

const moveLeft = function(){
    
    let left = parseInt(ball.style.left) || 0
    left -= 150
    ball.style.left = left + "px"
}

const moveUp = function(){
    
    let up = parseInt(ball.style.top) || 0
    up -= 150
    ball.style.top = up + "px"
}

const moveDown = function(){
    
    let down = parseInt(ball.style.top) || 0
    down += 150
    ball.style.top = down + "px"
}

const right = document.getElementById("right")
right.onclick = moveRight
const left = document.getElementById("left")
left.onclick = moveLeft
const up = document.getElementById("up")
up.onclick = moveUp
const down = document.getElementById("down")
down.onclick = moveDown










