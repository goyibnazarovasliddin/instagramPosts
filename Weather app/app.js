const api_key = "7a4947cddc391a03850308bdf9d36baa";

const fetchData = function(URL, callback) {
    fetch(`${URL}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => callback(data));
}

const URL = {
    currentWeather(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`
    },
    forecast(lat, lon) {
        return `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric`
    },
    airPollution(lat, lon) {
        return `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}`
    },
    reverseGeo(lat, lon) {
        return `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5`
    },
    geo(query) {
        return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
    }
}

const weekDayNames = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
];

const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const getDate = function (dateUnix, timeZone) {
    const date = new Date((dateUnix + timeZone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

const getTime = function(timeUnix, timezone) {
    const date = new Date((timeUnix + timezone) * 1000);
    let hours = date.getUTCHours();
    const ampm = hours >= 12 ? "PM" : "AM";
    if (hours > 12) {
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = '0' + hours;
    }
    const minutes = date.getUTCMinutes();

    return `${hours}:${minutes + "0"} ${ampm}`;
}

const places = [
    {
        name: "Tashkent",
        lat: 41.264,
        lon: 69.216
    },
    {
        name: "Fergana",
        lat: 40.3842,
        lon: 71.7843
    },
    {
        name: "Andijon",
        lat: 40.7821,
        lon: 72.3442
    },
    {
        name: "Namangan",
        lat: 40.9983,
        lon: 71.6726
    },
    {
        name: "Sirdaryo",
        lat: 40.8436,
        lon: 68.6617
    },
    {
        name: "Surxondaryo",
        lat: 37.94090050,
        lon: 67.57085360
    },
    {
        name: "Qashqadaryo",
        lat: 38.5833,
        lon: 66
    },
    {
        name: "Xorazm(Xiva)",
        lat: 41.2711546,
        lon:  59.8831563
    },
    {
        name: "Navoiy",
        lat: 40.115379,
        lon: 65.354843
    },
    {
        name: "Buxoro",
        lat: 39.7747,
        lon: 64.4286
    },
    {
        name: "Qoraqalpogiston",
        lat: 43.804133,
        lon: 59.445799
    }
]

let hourlyDay = document.querySelector(".hours-weather");
let weekDay = document.querySelectorAll(".week-weather");
let lat = 41.264;  
let lon = 69.216; 

for(let i = 0; i < 5; i++) {
    fetchData(URL.forecast(lat, lon), function (forecast) {
        const {
            list: forecastList,
            city: { timezone }
        } = forecast;

        for(const [index, data] of forecastList.entries()) {
            if (index > 7) break;

            const {
                dt: dateTimeUnix,
                main: { temp },
                weather,
            } = data;

            const [{ icon, description }] = weather;

            hourlyDay.innerHTML += `
                <div class="hourly">
                    <span class="hour">${getTime(dateTimeUnix, timezone)}</span>
                    <span class="hourly-weth">${temp}&deg;C</span>
                    <img src="data/weather_icons/${icon}.png" alt="${description}" class="hourly-img">
                </div>
            `
        }
    })
}

weekDay.forEach((el) => {
    fetchData(URL.currentWeather(lat, lon), function (currentWeather) {
        const {
            name
        } = currentWeather

        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${api_key}`)
            .then(response => response.json())
            .then(data => {
                for (let i = 0; i < 7; i++) {
                    el.innerHTML += `
                    <div class="weekly">
                        <span class="day">${weekDayNames[i]}</span>
                        <hr>
                        <img src="http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}.png" alt="${data.list[i].weather.description}" class="weekly-img">
                        <span class="weekly-weth">${Number(data.list[i].main.temp - 273.15).toFixed(1)}&deg;C</span>
                    </div>
                `
                }
            })
    })  
})

let dis = document.querySelectorAll(".districts");
let notSet = true;
let indexing;

dis.forEach(function(elm, index) {
    const latTemp = places[index].lat;
    const lonTemp = places[index].lon;

    fetchData(URL.currentWeather(latTemp, lonTemp), function (currentWeather) {
        const {
            weather,
            main: { temp },
            name
        } = currentWeather
        const [{ description, icon }] = weather;

        const el = `
            <div class="district-left">
                <span class="place-name">${places[index].name}</span>
                <span class="place-weather">${description}</span>
            </div>
            <div class="district-right">
                <img src="data/weather_icons/${icon}.png" alt="${description}" class="place-weth-img">
                <span class="weth-val">${temp}&deg;</span>
            </div>
        `    
        elm.innerHTML = el;     
    })  
    
    elm.addEventListener("click", () => {
        if(notSet) {
            dis.forEach(function(rem) {
                rem.classList.remove("active");
            })
            elm.classList.add("active");
            notSet = false;
            if(elm.classList.contains("active")) {
                lat = places[index].lat;
                lon = places[index].lon;
                updateWeather(lat, lon);
            }
        } else {
            notSet = true;
        }
    })


})

let changer = document.querySelectorAll(".districts");

const updateWeather = function (lat, lon) {
    const currentWeatherSection = document.querySelector(".current-weather");
    const hourlySection = document.querySelector(".hours-weather");
    const foreCastSection = document.querySelector(".wek");

    fetchData(URL.currentWeather(lat, lon), function (currentWeather) {
        const {
            weather,
            dt: dateUNix,
            main: { temp, feels_like, pressure, humidity },
            visibility,
            timezone,
            name
        } = currentWeather
        const [{ description, icon }] = weather;
    
        const card = document.querySelector(".current-weather");
    
        card.innerHTML = `
            <div class="current-left">
                <span class="current-loc">Toshkent shahri</span>
                <span class="current-date">${getDate(dateUNix, timezone)}</span>
            </div>
            <span class="current-weth">${temp}&deg;C</span>
            <div class="current-right">
                <img src="data/weather_icons/${icon}.png" alt="${description}" class="current-weth-image">
            </div>
        `
        card.querySelector(".current-loc").innerHTML = `${name}`;
    })
}

updateWeather(lat, lon);

