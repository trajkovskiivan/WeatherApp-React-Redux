import React from 'react';
import calculateStatistics from '../functions/calculateSatistics';
import {day} from '../functions/dateCalculations';
import {renderImage, setSituations, setIcon} from '../functions/renderImage';


const ForecastCard = (props) => {
    // console.log(props)
    let filteredList = [];
    let s;
    const {calcDay} = props;
    let futureDay = new Date().getUTCDate() + calcDay
    let data = props.data.list;


    let situations = {
        sky: 1,
        rain: 1,
        clouds: 1,
        thunderstorm: 1,
        snow: 1,
        mist: 1,
    }
    let icon;

    if (data && data[0]) {
        // console.log(data[0])
        filteredList = data.filter((el) => el.dt_txt && new Date(el.dt_txt).getUTCDate() === (new Date().getUTCDate() + calcDay) ? {...el} : "");
        // console.log(filteredList)
    }
    if (filteredList.length > 0) {
        s = calculateStatistics(filteredList);
        setSituations(s.arrOfIcons, situations)
    }
    icon = setIcon(situations);

    // console.log(filteredList);
    // console.log(s && s.warmestTime)
    return (
        <React.Fragment>
            <div className="forecast-card">
                <div> <h5>{day(futureDay)}</h5></div>
                <div > <p className="future-status">{icon === 'sky' ? `clear sky` : icon}</p> </div>
                <div><img className="forecast-icon" alt={icon} src={renderImage(icon)} /> </div>
                <div> <h5> <span className='cold'>{s && Math.round(s.temperature.min)}°</span>  <span className='hot'>{s && Math.round(s.temperature.max)}°</span> </h5></div>
            </div>
            <hr className="hr-title hr-title-primary" />
        </React.Fragment>
    );
}

export default ForecastCard;