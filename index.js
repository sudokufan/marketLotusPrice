function fetchData() {
    fetch('https://api.scryfall.com/cards/named?exact=black+lotus')
        .then(function(data){
            data = data.json()
            return data
        }) .then(function(data) {
            console.log(data)
        })
}

fetchData()
