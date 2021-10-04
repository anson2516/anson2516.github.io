const temperature = document.querySelector('#temperature')
const weatherIcon = document.querySelector('#weatherIcon')
const now = document.querySelector('#now')

//fetch weather & date
const getResult = async() => {
    const res = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=rhrread&lang=tc')
    const data = await res.json()
    now.innerHTML = data.updateTime.slice(0,10)
    return data
}

getResult()
.then((data)=>{
    temperature.innerHTML = `${data.temperature.data[1].value}。C`
    weatherIcon.src = `./img/weatherIcon/${data.icon[0]}.png`  
    
})
.catch(err => console.log(err))