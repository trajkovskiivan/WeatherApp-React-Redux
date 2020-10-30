import {combineReducers} from 'redux';
import {selectCity} from '../actions';


const fetchData = async (city) => {
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
  const result = await data.json();
  return data
};


const cityReducer = async () => {
  // return fetchData('Skopje')
  const data = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=Skopje&units=metric&APPID=a2b4e52032d2ff195e2ec1133387d853`);
  const result = await data.json();
  return result

}

const selectedCityReducer = (selectedCity = 'Skopje', action) => {
  if (action.type === 'CITY_SELECTED') {
    return action.payload
  }

  return selectedCity;
}


export default combineReducers({
  data: cityReducer,
  // selectedCity: selectedCityReducer
})