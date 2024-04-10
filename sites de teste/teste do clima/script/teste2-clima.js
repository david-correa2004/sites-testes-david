document.addEventListener('DOMContentLoaded', function () {
    const apiKey = '8b38765dae5f58b612750ef1c0bb84b4'; // Substitua pelo sua chave da API
    const city = 'Perdões MG'; // Substitua pela cidade desejada

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherContainer = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;

            weatherContainer.innerHTML = `<p>Temperatura: ${temperature} °C</p><p>Descrição: ${description}</p>`;
        })
        .catch(error => console.error('Erro ao buscar dados de clima:', error));
});
