startButton = document.querySelector('#start')
stopButton = document.querySelector('#stop')
body = document.querySelector('body')

let color;

function changeColor(){
    const colorChoice = "0123456789ABCDEF"         
    
    color = "#"
    for (let i = 0; i < 6; i++) {
        color += colorChoice[Math.ceil(Math.random() * 16)]
    }
    body.style.backgroundColor = color
}

let coloring,isColoring;

startButton.addEventListener('click',() => {
    if(!isColoring){
        coloring = setInterval(changeColor,500)
        isColoring = true
    }
})

stopButton.addEventListener('click',() => {
    if(isColoring){
        clearInterval(coloring)
        isColoring = false
    }
})
