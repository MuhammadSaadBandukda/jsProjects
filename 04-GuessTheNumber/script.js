const guessField = document.querySelector('#guessField') 
const submit = document.querySelector('#subt')
const guesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
let prevGuesses = []

const p = document.createElement('p')

const div = document.querySelector('.resultParas')

div.append(p)

let randomNumber = parseInt(Math.random()*100 + 1)

// console.log(Number(remaining.innerHTML));


submit.addEventListener('click',(e) => {
    e.preventDefault()
    getNum()   
    
    
})

 

function getNum(){
    input = guessField.value
    checkInput(input)
}

function checkInput(num){
    if(num < 1 || num>100 ){
        lowOrHi.textContent = "invalid Input"
    }
    else if(!num)
        lowOrHi.textContent = "invalid Input";        
    else if(randomNumber > num){
        
        lowOrHi.textContent = `Your Number is too Low`;
        updateArray(num)
        updateRemaining()
    }
    else if(randomNumber < num){
        lowOrHi.textContent = `Your Number is too High`
        updateArray(num)
        updateRemaining()

    }
    else {
        lowOrHi.textContent = `You won the number was ${randomNumber}`
        p.innerHTML = `<button id = "newGame">Start Again</button>`        
        endGame()
    }

}

function updateArray(num){
    prevGuesses.push(num)
    guesses.innerHTML += `${num} | `    
    console.log(prevGuesses);
}




updateRemaining = () =>{
    remaining.innerHTML = 10 - prevGuesses.length 
    if(remaining.innerHTML == 0){
        p.innerHTML = `you lose it the random number was <span class = "guesses">${randomNumber}</span> </br> <button id = "newGame">Start Again</button>`
        endGame() 
    }
}



endGame = () =>{
    guessField.setAttribute('disabled' , '')
        newGameButton = document.querySelector('#newGame') 
    newGameButton.addEventListener('click' , (e) =>{
        newGame()
    })
}


function newGame(){
    guesses.innerHTML = ``
    prevGuesses = []
    p.innerHTML = ``
    remaining.innerHTML = 10 - prevGuesses.length
    guessField.removeAttribute('disabled')
    lowOrHi.textContent = ''
    guessField.value = ''
    randomNumber = parseInt(Math.random()*100 + 1)

}