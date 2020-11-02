import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})



// const openWeatherMap = axios.create({
//     baseURL: 'https://api.openweathermap.org/data/2.5'
// })

// export default openWeatherMap
// "https://api.openweathermap.org/data/2.5/forecast?q=Skopje&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853"


