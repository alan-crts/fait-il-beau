    navigator.geolocation.getCurrentPosition(position => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=0e661d4c37d7f46f9393bc8bcabb0b7c')
            .then(response => {
                return response.json()
            }).then(data => {
                let container = document.getElementById("app")
                let temp = Math.round((data.main.temp - 273.5) * 10) / 10

                let ville = document.createElement("h2")
                ville.innerText = data.name
                container.appendChild(ville)

                let temperature = document.createElement("h3")
                temperature.innerText = temp + '°C'
                container.appendChild(temperature)

                if (temp < 15) {
                    SetText("message", "NON")
                } else {
                    SetText("message", "OUI")
                }
            })
    })

    function SetText(element, text) {
        return document.getElementById(element).innerText = text
    }