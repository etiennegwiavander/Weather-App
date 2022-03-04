// DOM input section 

const inputVal = document.querySelector(".inputValue");
const btn = document.forms['input-container'];

// DOM output section

const failed = document.getElementById("err");
const cityName = document.querySelector('.cityName')
const dayHour = document.querySelector('.dayHour')
const temp = document.querySelector('.temp')
const comment = document.querySelector('.comment')
const humidity = document.querySelector('.humidity')
const wind = document.querySelector('.wind')
const icon = document.querySelector('.icon')
const precip = document.querySelector('.precip')
const reloadPage = document.querySelector('.reloadPage')
const loader = document.querySelector('.loader');
const container = document.querySelector(".current");
const outputContainer = document.querySelector(".outputContainer");
const nextDays = document.getElementById("next-days");
const forcastContainer = document.querySelector(".forcast-container");
const wrapper = document.querySelector(".wrapper");


btn.addEventListener("submit", (e) => {
   
    e.preventDefault();

    function displayLoader() {
        loader.style.display = 'block';
        outputContainer.style.display = "none"
        forcastContainer.style.display = "none"

    }

    const getWeatherByLocation = async () => {
        displayLoader()
        const response = await fetch('https://weatherdbi.herokuapp.com/data/weather/' + inputVal.value + '');

        //note1: the cors policy was bypassed by using a chrome extention called, "Allow CORS: Access-Control-Allow-Origin"
        //note2: must learn how to do cors policy bypass before the next project.

        if (response.status !== 200) {
            throw new Error("failed to fetch the data");
        }
        const data = await response.json();
        console.log(data);
        return data;
    };

    getWeatherByLocation()
        .then(data => {
            // getting values from the API

            let cityValue = data['region'];
            let dayHourValue = data['currentConditions']['dayhour'];
            let tempValue = data['currentConditions']['temp']['c'];
            let commentValue = data['currentConditions']['comment'];
            let iconValue = data['currentConditions']['iconURL'];
            let humidityValue = data['currentConditions']['humidity'];
            let precipValue = data['currentConditions']['precip'];
            let windValue = data['currentConditions']['wind']['km'];

            inputVal.value = cityValue;

            // outputing values from API

            tempConditions = () => {

                if (tempValue <= 10) {
                    return '<svg stroke="currentColor" fill="blue" stroke-width="0" viewBox="0 0 512 512" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V304c0-8.8-7.2-16-16-16s-16 7.2-16 16v18.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z"></path></svg>'
                } else if (tempValue >= 11, tempValue <= 25) {

                    console.log("else if was clicked");
                    return '<svg stroke="currentColor" fill="orange" stroke-width="0" viewBox="0 0 512 512" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z"></path></svg>'

                } else {
                    return '<svg stroke="currentColor" fill="red" stroke-width="0" viewBox="0 0 512 512" height=".5em" width=".5em" xmlns="http://www.w3.org/2000/svg"><path d="M416 0c-52.9 0-96 43.1-96 96s43.1 96 96 96 96-43.1 96-96-43.1-96-96-96zm0 128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm-160-16C256 50.1 205.9 0 144 0S32 50.1 32 112v166.5C12.3 303.2 0 334 0 368c0 79.5 64.5 144 144 144s144-64.5 144-144c0-34-12.3-64.9-32-89.5V112zM144 448c-44.1 0-80-35.9-80-80 0-25.5 12.2-48.9 32-63.8V112c0-26.5 21.5-48 48-48s48 21.5 48 48v192.2c19.8 14.8 32 38.3 32 63.8 0 44.1-35.9 80-80 80zm16-125.1V112c0-8.8-7.2-16-16-16s-16 7.2-16 16v210.9c-18.6 6.6-32 24.2-32 45.1 0 26.5 21.5 48 48 48s48-21.5 48-48c0-20.9-13.4-38.5-32-45.1z"></path></svg>'
                };
            }


            cityName.innerHTML = cityValue + '<svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 0c-2.761 0-5 2.239-5 5 0 5 5 11 5 11s5-6 5-11c0-2.761-2.239-5-5-5zM8 8.063c-1.691 0-3.063-1.371-3.063-3.063s1.371-3.063 3.063-3.063 3.063 1.371 3.063 3.063-1.371 3.063-3.063 3.063zM6.063 5c0-1.070 0.867-1.938 1.938-1.938s1.938 0.867 1.938 1.938c0 1.070-0.867 1.938-1.938 1.938s-1.938-0.867-1.938-1.938z"></path></svg>';
            temp.innerHTML = tempConditions() + '  ' + tempValue + '°c'
            dayHour.innerHTML = "Last Update:" + " " + dayHourValue;
            comment.innerHTML = commentValue;
            icon.src = iconValue;
            humidity.innerHTML = 'Humidity:' + " " + humidityValue;
            precip.innerHTML = 'Precipitation:' + " " + precipValue;
            wind.innerHTML = 'Wind speed:' + " " + windValue + 'km/hr';

            // background changer
            wrapper.style.backgroundColor = "#f3f3f3"
            wrapper.style.backgroundImage = bg()
            function bg(){
                
                if(commentValue.toLowerCase().includes("sunny")){
                 return "url('./weather_pics/sunny.jpg')"   
                }else if(commentValue.toLowerCase().includes("cloudy")){
                    return "url('./weather_pics/cloudy.jpg')"
                }else if(commentValue.toLowerCase().includes("clear"||"mostly sunny")){
                    return "url('./weather_pics/mostly_sunny.jpg')"
                }else if(commentValue.toLowerCase().includes( "partly cloudy"|| "clear with periodic clouds"  )){
                    return "url('./weather_pics/partly_cloudy.jpg')"  
                }else if(commentValue.toLowerCase().includes("scattered thunderstoms")){
                    return "url('./weather_pics/Scattered_thunderstoms.jpg')"  
                }else if(commentValue.toLowerCase().includes("rainny")){
                    return "url('./weather_pics/rain.jpg')"  
                }else if(commentValue.toLowerCase().includes("rain"||"showers")){
                    return "url('./weather_pics/Showers.jpg')"  
                }else if(commentValue.toLowerCase().includes("snow")){
                    return "url('./weather_pics/snowy.jpg')"  
                }else if(commentValue.toLowerCase().includes("haze"||"Patches of fog" || "smoke")){
                    return "url('./weather_pics/Haze.jpg')"  
                }else if(commentValue.toLowerCase().includes("thunderstorms")){
                    return "url('./weather_pics/Thunderstorm.jpg')"  
                }else{
                    return `url${("https://images.unsplash.com/photo-1584267385494-9fdd9a71ad75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")}` 
                }
                
            }

            // forcast section

            let nextDaysValue = data['next_days'];
            console.log(nextDaysValue);
            nextDays.innerHTML = " ";
            forcastCall(nextDaysValue);

            function forcastCall() {

                // for (var i = 0; i < info.length; i++) { }
                nextDaysValue.forEach(info => {
                    let details =
                    `<tr>
                    <td>${info.day}</td>
                    <td>${info.comment}</td>
                    <td> <img src="${info.iconURL}"></td>
                    <td> max ${info.max_temp.c}°c <br> min ${info.min_temp.c}°c</td>
                    
                </tr>`
    
                nextDays.innerHTML += details
                });

            }

            // loader
            function hideLoader() {

                loader.style.display = 'none';
                outputContainer.style.display = "block"
                icon.style.display = "block"
                reloadPage.style.display = "block"
                forcastContainer.style.display = "block"

            }
            hideLoader();

        })
        .catch(err => {
            failed.innerHTML = ('rejected:', err.message);
            loader.style.display = 'none';
        });

});

// reloader

reloadPage.addEventListener('click', () => {
    location.reload(true)
    console.log('refreshed!')
});

window.addEventListener('load', () => {
    loader.style.display = 'none'
    outputContainer.style.display = 'block'
    forcastContainer.style.display = "none"
})