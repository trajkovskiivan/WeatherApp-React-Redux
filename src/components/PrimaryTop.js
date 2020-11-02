import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

import today from '../functions/date';




class PrimaryTop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: ""
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    clearInput = () => {
        setTimeout(() => {
            document.getElementById('city-input').value = "";
        }, 500);

    }

    render() {
        console.log(this.props)
        console.log(this.state)
        // console.log(this.props.city)
        // console.log(this.state.city)
        return (<React.Fragment>
            <div className="primary-top-input">
                <input type="text" name="city" id="city-input" onChange={(value) => this.onChange(value)} placeholder={this.props && this.props.city ? `${this.props.city.name}, ${this.props.city.country}` : ""}></input>
                <button onClick={() => {
                    this.props.fetchData(this.state.city);
                    this.clearInput()
                }} >Search City</button>
            </div>
            <div className="primary-top-date">
                <p>{today}</p>
            </div>
        </React.Fragment>);
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        weatherData: state.weatherData
    }
}

export default connect(mapStateToProps, {fetchData})(PrimaryTop);


// const PrimaryTop = (props) => {
//     console.log(props)
//     return (
//         <React.Fragment>
//             <div className="primary-top-input">
//                 <input type="text" placeholder={props && props.city ? `${props.city.name}, ${props.city.country}` : ""}></input>
//                 <button>Search City</button>
//             </div>
//             <div className="primary-top-date">
//                 <p>{today}</p>
//             </div>
//         </React.Fragment>
//     );
// }



// export default connect(null, {fetchData})(PrimaryTop);



