

let searchInput = $("#search-input");
let searchForm = $("#search-form");

function submitSearchForm(event){

    event.preventdefault();
    let search = searchInput.val().trim()

}

searchForm.on("submit", submitSearchForm);