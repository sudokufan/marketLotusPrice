function fetchData() {
    fetch('https://api.scryfall.com/cards/named?exact=black+lotus&set=2ed')
        .then(function(data){
            data = data.json()
            return data
        }) .then(function(data) {
            document.querySelector('.lotusCardScan').src = data.image_uris.normal
            document.querySelector('.lotusPrice').textContent = data.prices.usd
        })
}

fetchData()
