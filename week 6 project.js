class Card {
    constructor(rank, suit) {
        this.rank = rank;
        this.suit = suit;
    }
}

class Deck {
    constructor() {
        
        this.cards = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    shuffle() {
        
    }

    deal(numCards) {
       
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.hand = [];
        this.score = 0;
    }

    playCard() {
        
        return this.hand.pop();
    }
}


class Game {
    constructor(player1Name, player2Name) {
        this.deck = new Deck();
        this.player1 = new Player(player1Name);
        this.player2 = new Player(player2Name);
    }

    playRound() {
        const card1 = this.player1.playCard();
        const card2 = this.player2.playCard();

       
        this.player1.hand.unshift(card1, card2);
    }

    play() {
        
        this.deck.shuffle();
        this.player1.hand = this.deck.deal(26);
        this.player2.hand = this.deck.deal(26);

        
        while (this.player1.hand.length > 0) {
            this.playRound();
        }

       
    }
}


const game = new Game("Player 1", "Player 2");
game.play();

const assert = require('chai').assert;
const Deck = require('./deck'); 

describe('Deck', function () {
    it('should initialize with 52 cards', function () {
        const deck = new Deck();
        assert.equal(deck.cards.length, 52);
    });

    it('should shuffle the cards', function () {
        const deck = new Deck();
        const initialOrder = [...deck.cards];
        deck.shuffle();
        const shuffledOrder = deck.cards;
        assert.notDeepEqual(initialOrder, shuffledOrder);
    });

    
});