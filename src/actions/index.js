import openWeatherMapJson from '../apis/openWeatherMapJson';



export const fetchData = (city = 'Skopje') => async dispatch => {
    const response = await openWeatherMapJson.get(`/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
    dispatch({type: 'FETCH_DATA', payload: response.data})
}


