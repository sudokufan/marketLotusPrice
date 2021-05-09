function fetchData() {
    fetch('https://api.scryfall.com/cards/named?exact=black+lotus&set=2ed')
        .then(function(data){
            data = data.json()
            return data
        }) .then(function(data) {
            console.log(data.image_uris.normal)
            console.log(data.prices.usd)
        })
}

fetchData()
