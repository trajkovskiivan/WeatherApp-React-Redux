import React from 'react';
import {renderIconFromSingle} from '../functions/renderImage';


const PrimaryData = (props) => {
    // console.log(props.data.list)
    const {data} = props
    let icon;

    if (data && data.list) {
        // console.log(props.data.list[0].weather[0].description)
        icon = props.data.list[0].weather[0].description;
    }
    // console.log(icon)
    return (
        <React.Fragment>
            <div className="onoffswitch">
                {/* <button>Click to switch</button> */}
            </div>
            <div className="current-status">
                {/* <div className='current-status-icon'> <img alt={icon} src={data.list && icon ? renderImageFromSingle(icon) : ""} />  </div> */}
                <div className='current-status-icon'> <span className="iconify" data-icon={data.list && icon ? renderIconFromSingle(icon) : ""} data-inline="false"></span>  </div>
                <div className='current-status-temperature'><p>{data.list && Math.round(data.list[0].main.temp)}<span>°</span> </p></div>
            </div>
            <div className="text-satus">
                <p>{data.list && icon ? icon : ""}</p>
                <p>{data.list && data.list[0].main.humidity} <span className="iconify" data-icon="wi-humidity" data-inline="false"></span> humidity</p>
            </div>
        </React.Fragment>
    );
}

export default PrimaryData;