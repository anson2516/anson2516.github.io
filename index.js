const temperature = document.querySelector('#temperature')
const weatherIcon = document.querySelector('#weatherIcon')


const getResult = async() => {
    const res = await fetch('https://data.weather.gov.hk/weatherAPI/opendata/weather.php?dataType=flw&lang=tc')
    const data = await res.json()
    console.log(data)
    return data
}

getResult()
.then((data)=>{
    const searchTerm = '度'
    const indexOfFirst = data.forecastDesc.indexOf(searchTerm);
    const indexofSecond = data.forecastDesc.indexOf(searchTerm, (indexOfFirst + 1));
    const MinTemperature = data.forecastDesc[indexOfFirst-2]+data.forecastDesc[indexOfFirst-1]
    const MaxTemperature = data.forecastDesc[indexofSecond-2]+data.forecastDesc[indexofSecond-1]
    temperature.innerHTML = `${MinTemperature}  ~ ${MaxTemperature}。`
    if(data.forecastDesc.includes("部分時間有陽光")){
        weatherIcon.src = "./img/53.png" 
    }
    else if(data.forecastDesc.includes("大致天晴")){
        weatherIcon.src = "./img/50.png"
    }
    else if(data.forecastDesc.includes("大致多雲")){
        weatherIcon.src = "./img/60.png"
    }else{
        weatherIcon.src = "./img/51.png"
    }
    
})
.catch(err => console.log(err))