

const deck = {

    async getDeck() {
        let new_deck = await axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
        this.id = new_deck.data.deck_id
    },

    displayCard(img_src) {
        $(`<div class="stacked-cards__card">
        <img src="${img_src}">
     </div>`).appendTo('.stacked-cards')
    },

    async drawCard() {
        let new_card = await axios.get(`https://deckofcardsapi.com/api/deck/${this.id}/draw/?count=1`)
        let img_src = new_card.data.cards[0].image
        deck.displayCard(img_src)
    }
}

let deck_id = deck.getDeck()
$('#get-card').submit((evt) => {
    evt.preventDefault()
    deck.drawCard()
})


