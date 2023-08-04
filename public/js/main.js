const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const span = document.getElementById('span');
const temp_status = document.getElementById('temp_status');
const dataHide = document.querySelector('.middle_layer');
const day = document.getElementById('day');
const date = document.getElementById('today_date');


var d = new Date();
days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
months = new Array('Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec');
day.innerHTML = days[d.getDay()];
date.innerHTML = `${d.getDate()} ${months[d.getMonth()]}`;


const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;

    if(cityVal == ""){
        city_name.innerHTML = `Please ! write the name of city before Search`;
        city_name.style.color = "orange"
        city_name.style.fontWeight = "bold"
        dataHide.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=89b0ec410fffbc4db6d5b74081fbb470`
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerHTML = `${arrData[0].name}, ${arrData[0].sys.country}`;
            span.innerHTML = (arrData[0].main.temp-273.15).toFixed(2);
            const tempMood = arrData[0].weather[0].main
            console.log(tempMood);


            if(tempMood == "Clear"){
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            }
            else if(tempMood == "Clouds"){
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #1f2f6;'></i>";
            }
            else if(tempMood == "Rain"){
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            }
            else{
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #eccc68;'></i>";
            }

            dataHide.classList.remove('data_hide');
        }
        catch{
            city_name.innerHTML = `Please ! enter the city name properly`;
            city_name.style.color = "yellow"
            city_name.style.fontWeight = "bold"
            dataHide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);