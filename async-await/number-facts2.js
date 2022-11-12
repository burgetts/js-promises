const BASE_URL = 'http://numbersapi.com'
const NUM_FACTS = 4;

// Make a request to numbers API to get a fact
async function getFact() {
    let resp =  await axios.get(`${BASE_URL}/5?json`)
    let fact = resp.data.text
    $('body').append(`<div> ${fact} </div>`)
}

// Make request to numbers API to get multiple facts
async function getMultipleFacts() {
    let resp =  await axios.get(`${BASE_URL}/5,6,7?json`)
    let facts = Object.values(resp.data)
    for (let fact of facts) {
        $('body').append(`<div> ${fact} </div>`)
    }
}

async function getFourFacts() {
    let baseURL = `${BASE_URL}/5?json`
    let p1 = await $.getJSON(`${baseURL}`);
    let p2 = await $.getJSON(`${baseURL}`);
    let p3 = await $.getJSON(`${baseURL}`);
    let p4 = await $.getJSON(`${baseURL}`);

    console.log(p1)
    $('body').append(`<div> ${p1.text} </div>`)
    $('body').append(`<div> ${p2.text} </div>`)
    $('body').append(`<div> ${p3.text} </div>`)
    $('body').append(`<div> ${p4.text} </div>`)
}

getFourFacts()
