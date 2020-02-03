const cards = [
	{
		rank: "Queen",
		suit: "Hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "Queen",
		suit: "Diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "King",
		suit: "Hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "King",
		suit: "Diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];
const cardsInPlay = [];

function checkForMatch ()
{	
if (cardsInPlay.length === 2) 
	{
		this.setAttribute(cards[cardId].cardImage);
		if (cardsInPlay[0] === cardsInPlay[1])
		{
			console.log ("You found a match!");
		} 
		else
		{
			console.log ("Sorry, try again!");
		}
	}
}

function flipCard (cardElement) 
{
	this.getAttribute('cardID');
	console.log ("user flipped " + cards[cardID].rank) //identifies card user clicks
	cardsInPlay.push (cards[cardID].rank)
	console.log (cards[cardID].suit) //log the suit of the card to console
	console.log (cards[cardID].cardImage) //log the image of the card to console
	checkForMatch ()
}

function createBoard () // creates the game board
{
	for (let i = 0; i < cards; i++) //loops through cards array
	{
		let cardElement = document.createElement('img');
		cardElement.setAttribute("images/back.png"); //this creates the card on the board
		cardElement.setAttribute(i); //track the cards
		cardElement.addEventListener('click', flipCard); //flips card on click
		game-board.appendChild(cardElement);
	}
}

createBoard

