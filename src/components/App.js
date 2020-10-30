import React from 'react';
import {connect} from 'react-redux'


import WeatherData from './WeatherData';

const App = () => {
  return (
    <div>
      <h1>App.js</h1>
      <WeatherData />
    </div>

  );
}


const mapStateToProps = async (state) => {
  // const data = await state
  console.log(state)
  // return {
  //   data: data.data
  // }
  return new Promise
}

export default connect(mapStateToProps)(App);