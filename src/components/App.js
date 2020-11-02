// import React from 'react';
import React, {Component} from 'react';
import './App.scss';

import {fetchData} from '../actions';

import PrimaryTop from './PrimaryTop';
import PrimaryData from './PrimaryData';
import ForecastCard from './ForecastCard';
import {connect} from 'react-redux';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }

  componentDidMount() {
    // console.log(this.props)
    this.props.fetchData()
  }



  render() {
    // console.log(this.props.weatherData.data)
    // console.log(this.props)
    return (
      <div className="wrapper">
        <div className='primary'>
          <div className="primary-top">
            <PrimaryTop city={this.props.weatherData.city} />

          </div>
          <div className="primary-data">
            <PrimaryData data={this.props.weatherData} />
          </div>
        </div>
        <div className='card-collection'>
          <ForecastCard data={this.props.weatherData} calcDay={1} />
          <ForecastCard data={this.props.weatherData} calcDay={2} />
          <ForecastCard data={this.props.weatherData} calcDay={3} />
          <ForecastCard data={this.props.weatherData} calcDay={4} />
          <ForecastCard data={this.props.weatherData} calcDay={5} />
        </div>
        <div className="footer">Coded by</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    weatherData: state.weatherData
  }
}

export default connect(mapStateToProps, {fetchData})(App);


































// const App = () => {
//   return (
//     <div className="wrapper">
//       <div className='primary'>
//         <div className="primary-top">
//           <PrimaryTop />
//         </div>
//         <div className="primary-data">
//           <PrimaryData />
//         </div>
//       </div>
//       <div className='card-collection'>
//         <ForecastCard />
//         <ForecastCard />
//         <ForecastCard />
//         <ForecastCard />
//         <ForecastCard />
//       </div>
//       <div className="footer">Coded by</div>
//     </div>
//   );
// }

// export default App;