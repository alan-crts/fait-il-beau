    navigator.geolocation.getCurrentPosition(position => {
        fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + position.coords.latitude + '&lon=' + position.coords.longitude + '&appid=0e661d4c37d7f46f9393bc8bcabb0b7c')
            .then(response => {
                return response.json()
            }).then(data => {
                console.log(data)
                let temp = Math.round((data.main.temp - 273.5) * 10) / 10
                if (temp < 15) {
                    SetText("message", "NON")
                } else {
                    SetText("message")
                }
                SetText("ville", data.name)
                SetText("temperature", temp + '°C')
            })
    })

    function SetText(element, text) {
        return document.getElementById(element).innerText = text
    }