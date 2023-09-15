const weatherAPIURL = "https://api.openweathermap.org"
const weatherAPIkey = "db429ddea4a4a6848d93ba927020212b"


let searchInput = $("#search-input");
let searchForm = $("#search-form");

function fetchCoord(){
    let queryURL = `${weatherAPIURL}/geo1.0/direct?q=${search}&limit=5appid=${weatherAPIkey}`
}

function submitSearchForm(event){

    event.preventdefault();
    let search = searchInput.val().trim()

    fetchCoord(search);

}

searchForm.on("submit", submitSearchForm);