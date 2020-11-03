// const {render} = require("node-sass");

const renderImage = (data) => {
    let path = "";
    switch (data) {
        case 'sky':
            path = 'http://openweathermap.org/img/wn/01d@2x.png'
            break;
        case 'rain':
            path = 'http://openweathermap.org/img/wn/09d@2x.png'
            break;
        case 'clouds':
            path = 'http://openweathermap.org/img/wn/03d@2x.png'
            break;
        case 'thunderstorm':
            path = 'http://openweathermap.org/img/wn/11d@2x.png'
            break;
        case 'snow':
            path = 'http://openweathermap.org/img/wn/13d@2x.png'
            break;
        case 'mist':
            path = 'http://openweathermap.org/img/wn/50d@2x.png'
            break;
        default:
            path = '';
            break
    }
    // console.log(path)
    return path
}

const renderIcon = (data) => {
    let dataIcon = "";
    switch (data) {
        case 'sky':
            dataIcon = 'wi-day-sunny'
            break;
        case 'rain':
            dataIcon = 'wi-day-rain'
            break;
        case 'clouds':
            dataIcon = 'wi-day-cloudy'
            break;
        case 'thunderstorm':
            dataIcon = 'wi-day-lightning'
            break;
        case 'snow':
            dataIcon = 'wi-day-sleet'
            break;
        case 'mist':
            dataIcon = 'wi-day-fog'
            break;
        default:
            dataIcon = '';
            break
    }
    // console.log(dataIcon)
    return dataIcon
}

const renderIconFromSingle = (data) => {
    let path = "";
    if (data.includes("sky")) {
        path = 'wi-day-sunny';
    }
    if (data.includes("rain")) {
        path = 'wi-day-rain';
    }
    if (data.includes("clouds")) {
        path = 'wi-day-cloudy';
    }
    if (data.includes("thunderstorm")) {
        path = 'wi-day-thunderstorm';
    }
    if (data.includes("snow")) {
        path = 'wi-day-snow-wind';
    }
    if (data.includes("mist")) {
        path = 'wi-day-fog';
    }
    return path
}


const renderImageFromSingle = (data) => {
    let path = "";
    if (data.includes("sky")) {
        path = 'http://openweathermap.org/img/wn/01d@2x.png';
    }
    if (data.includes("rain")) {
        path = 'http://openweathermap.org/img/wn/09d@2x.png';
    }
    if (data.includes("clouds")) {
        path = 'http://openweathermap.org/img/wn/03d@2x.png';
    }
    if (data.includes("thunderstorm")) {
        path = 'http://openweathermap.org/img/wn/01d@2x.png';
    }
    if (data.includes("snow")) {
        path = 'http://openweathermap.org/img/wn/01d@2x.png';
    }
    if (data.includes("mist")) {
        path = 'http://openweathermap.org/img/wn/01d@2x.png';
    }
    return path
}




const setSituations = (arr, situation) => {
    arr.forEach(el => {
        if (el.includes('sky') === true) {
            situation.sky++;
        }
        if (el.includes('rain') === true) {
            situation.rain++;
        }
        if (el.includes('clouds') === true) {
            situation.clouds++;
        }
        if (el.includes('thunderstorm') === true) {
            situation.thunderstorm++;
        }
        if (el.includes('snow') === true) {
            situation.snow++;
        }
        if (el.includes('mist') === true) {
            situation.mist++;
        }
    })
}

const setIcon = (situation) => {
    let icon = "";
    switch (Object.keys(situation).reduce((a, b) => situation[a] > situation[b] ? a : b)) {
        case 'sky':
            icon = 'sky'
            break;
        case 'rain':
            icon = 'rain'
            break;
        case 'clouds':
            icon = 'clouds'
            break;
        case 'thunderstorm':
            icon = 'thunderstorm'
            break;
        case 'snow':
            icon = 'snow'
            break;
        case 'mist':
            icon = 'mist'
            break;
        default:
            icon = 'no data';
            break
    }
    return icon
}


module.exports = {renderImage, setSituations, setIcon, renderImageFromSingle, renderIcon, renderIconFromSingle};