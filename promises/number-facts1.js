// Make a request to the Numbers API (http://numbersapi.com/) to get a fact about your favorite number. (Make sure you get back JSON by including the json query key, specific to this API. Details.
const NUM_FACTS = 4;
const FAV_NUMBER = 5;
const BASE_URL = 'http://numbersapi.com'

/* Display request for just one fact */ 
function displayFact(data){
    let fact = data.data.text 
    $('body').append(`<div> ${fact} </div>`)
}

/* Display requests for multiple facts */
function displayMultipleFacts(data) {
    for (let fact of Object.values(data.data)){
        let $fact = `<div> ${fact} </div>`
        $('body').append(`<div> ${fact} </div>`)
    }
}

/* Put 4 facts about FAV_NUMBER on page */
function getFact() {
    resp = axios.get(`${BASE_URL}/${FAV_NUMBER}?json`)
    resp
    .then((data) => {
        displayFact(data)
        return axios.get(`${BASE_URL}/${FAV_NUMBER}?json`)
    })
    .then((data) => {
        displayFact(data)
        return axios.get(`${BASE_URL}/${FAV_NUMBER}?json`)
    })
    .then((data) => {
        displayFact(data)
        return axios.get(`${BASE_URL}/${FAV_NUMBER}?json`)
    })
    .then((data => {
        displayFact(data)
    }))
    .catch(err => console.log(err))
}

getFact()