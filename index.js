function fetchData() {
    fetch('https://api.scryfall.com/cards/named?exact=black+lotus')
        .then(function(data){
            data = data.json()
            return data
        }) .then(function(data) {
            console.log(data)
            console.log(data.image_URIs)
            console.log(data.prices)
        })
}

fetchData()
