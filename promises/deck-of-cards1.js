const SHUFFLED_DECK = 'https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1'
let deck_id
// On page load
let resp = axios.get(SHUFFLED_DECK)
.then((data) => {
    // Get deck id
    deck_id = data.data.deck_id
})

// On form submit
$('#get-card').submit(function(evt) {
    evt.preventDefault()
    // Get card
    let resp = axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`)
    .then((data) => {
        // append image to page
        img_src = (data.data.cards[0].image)
        $(`<div class="stacked-cards__card">
              <img src="${img_src}">
           </div>`).appendTo('.stacked-cards')
       // $(`<div> <img src="${img_src}"> </div>`).appendTo('body')
    })
    .catch((err) => {
        // remove button
        $('#get-card').remove()
    })
})