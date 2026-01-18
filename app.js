var search = document.querySelector('.search')
var city = document.querySelector('.city')
var country = document.querySelector('.country')
var value = document.querySelector('.value')
var shortDesc = document.querySelector('.short-desc')
var visibility = document.querySelector('.visibility span')
var wind = document.querySelector('.wind span')
var sun = document.querySelector('.sun span')
var time = document.querySelector('.time')
var content = document.querySelector('.content')
var body = document.querySelector('body')

async function changeWeatherUI(citySearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=e6f6d01387de93d5ecb75185a2fb35cf`;

    let data = await fetch(apiURL).then(res => res.json());
    if(data.cod == 200){
        content.classList.remove('hide')
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + 'm';
        wind.innerText = data.wind.speed + 'm/s';
        sun.innerText = data.main.humidity + '%';
        let temp = (data.main.temp - 273.15).toFixed(0);
        value.innerText = temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : '';

        let timezoneOffset = data.timezone;
        let currentTime = data.dt;
        let additionalTime = 4 * 60 * 60; // 4 hours in seconds
        let localTime = new Date((currentTime + timezoneOffset+ additionalTime) * 1000);
        time.innerText = localTime.toLocaleString();

        
        body.setAttribute('class','hot')
        if(temp <= 25) {
            body.setAttribute('class','cool')
        }

        if(temp <= 20) {
            body.setAttribute('class','warm')
        }

        if(temp <= 15) {
            body.setAttribute('class','cold')
        }

    }else{
        content.classList.add('hide')
    }
    console.log(data);
}

search.addEventListener('keypress',function(e){
    if(e.code === 'Enter'){
        let citySearch = search.value.trim();
        changeWeatherUI(citySearch);
    }
})

changeWeatherUI('ha noi');
