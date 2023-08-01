document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]

   cardArray.sort(() =>0.5 - Math.random())

   const grid = document.querySelector('.grid')
   const resultDisplay = document.querySelector('#result')
   var cardchosen = []
   var cardchosenId = []
   var cardsWon = []
   //create board
   function createboard(){
    for(let i=0;i<cardArray.length;i++){
        var card = document.createElement('img')
        card.setAttribute('src','images/blank.png')
        card.setAttribute('data-id',i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
   }
   //checkformatch
   function checkForMatch(){
    var cards = document.querySelectorAll('img')
    const optionOneID = cardchosenId[0]
    const optionTwoID = cardchosenId[1]
    if(cardchosenId[0]==cardchosenId[1]){
        alert("you found a match")
        cards[optionOneID].setAttribute('src','images/white.png')
        cards[optionTwoID].setAttribute('src','images/white.png')
        cardsWon.push(cardchosen)
    }else{
        cards[optionOneID].setAttribute('src','images/blank.png')
        cards[optionTwoID].setAttribute('src','images/blank.png')
        alert("sorry try again")
    }
    cardchosen = []
    cardchosenId = []
    resultDisplay.textContent = cardsWon.length;
    if(cardsWon.length === cardArray.length/2){
        resultDisplay.textContent = "congratulation you found them all"
    }
   }
   //function flipcard
   function flipcard(){
    var cardId = this.getAttribute('data-id')
    cardchosen.push(cardArray[cardId].name)
    cardchosenId.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardchosen.length===2){
        setTimeout(checkForMatch,500)
    }
   }
   createboard()
  })

