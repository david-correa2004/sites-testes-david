
function getUserPosition() {
    let url = ''
    navigator.geolocation.getCurrentPosition((pos) => {
        let lat = pos.coords.latitude
        let long = pos.coords.longitude
        url = 'https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&'
        fetchApi(url)
        console.log(url)
    })
}

function fetchApi(url) {
    let city = document.querySelector('#cidade')
    let temperature = document.querySelector('#tempo')
    let humidity = document.querySelector('#umidade')

    fetch(url)
    .then((data) => {
        return data.json()
    })
    .then((data) => {
        let tempInCalsius = ((5/9) * (data.main.temp-32)).toFixed(1);

        city.textContent = data.name
        temperature.innerHTML = tempInCalsius
        humidity.innerHTML = data.main.humidity
    })
    .catch((err) => {
        city.innerHTML = `Impossivel acessar.<br> Verifique a sua conecção`;
        temperature.innerHTML = `-`
    })
}

getUserPosition();

