const cards = document.querySelectorAll('.card')
let isFlippedCard = false
let firstCard; 
let secondCard; 
let lookBoard;
let counter = 0
let countCard = 12

cards.forEach(card => card.addEventListener('click', flipCard))

function randomPosition(){
    cards.forEach(card => {
        let randomPosition = Math.floor(Math.random()*12)
        card.style.order = randomPosition
    })
    
}

function flipCard(event){
    let item = event.target.parentElement
    if(lookBoard)return lookBoard;
    if(event.target.parentElement === firstCard)return firstCard

    item.classList.add('flip')
    if(!isFlippedCard){
        isFlippedCard = true;
        firstCard = event.target.parentElement
        return
    }
    secondCard = event.target.parentElement
    if(firstCard.dataset.education === secondCard.dataset.education){
        disableCards()
    }
    else{
        unflippCards()
    }
    
    cards.forEach(card => {
        if(card.classList.contains('flip')){
            counter++
            console.log(counter)
        }
    })
    if(counter == countCard){
        resetGame()
    }
    counter = 0
}

function disableCards(){
    firstCard.removeEventListener('click', flipCard)
    secondCard.removeEventListener('click', flipCard)
    resetBoard()
}

function unflippCards(){
    lookBoard = true
    setTimeout(()=>{
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        resetBoard()
    }, 1000)
}

function resetBoard(){
    isFlippedCard = false
    firstCard = null
    secondCard = null
    lookBoard = null
}

function resetGame(){
    cards.forEach(card => {
        card.classList.remove('flip')
    })
    randomPosition()
    resetBoard()
    cards.forEach(card => card.addEventListener('click', flipCard))

}
randomPosition()