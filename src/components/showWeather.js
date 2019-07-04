import React from 'react';
import ViewTemperatures from './viewTemperatures.js';

class ShowWeather extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const location = this.props.data.name;
        const temperature = this.props.data.main ? (this.props.checked ? (this.props.data.main.temp - 270) * 1.8 + 32 : this.props.data.main.temp - 270) : '';
        const temperatureMin = this.props.data.main ? (this.props.checked ? (this.props.data.main.temp_min - 270) * 1.8 + 32 : this.props.data.main.temp_min - 270) : '';
        const temperatureMax = this.props.data.main ? (this.props.checked ? (this.props.data.main.temp_max - 270) * 1.8 + 32 : this.props.data.main.temp_max - 270) : '';
        const humidity = this.props.data.main ? this.props.data.main.humidity : '';
        const pressure = this.props.data.main ? this.props.data.main.pressure : '';
        const tempMetric = this.props.checked ? 'Fahrenheit' : 'Celsius';
        console.log(this.props.data);
        return (
            <div>
                {location &&
                    <div>
                        <p>{location} weather:</p>
                        <p>Temperature: {temperature} {tempMetric}</p>
                        <p>Humidity: {humidity}%</p>
                        <p>Pressue: {pressure}hPa</p>
                        <ViewTemperatures
                            current={temperature}
                            max={temperatureMax}
                            min={temperatureMin}
                        />
                    </div>
                }
            </div>
        );
    }
}

// const ShowWeather = (props) => {
//     const location = props.data.name;
//     const temperature = props.data.main ? (props.checked ? (props.data.main.temp - 270)*1.8 + 32 : props.data.main.temp - 270) : '';
//     const temperatureMin = props.data.main ? (props.checked ? (props.data.main.temp_min - 270) * 1.8 + 32 : props.data.main.temp_min - 270) : '';
//     const temperatureMax = props.data.main ? (props.checked ? (props.data.main.temp_max - 270) * 1.8 + 32 : props.data.main.temp_max - 270) : '';
//     const humidity = props.data.main ? props.data.main.humidity : '';
//     const pressure = props.data.main ? props.data.main.pressure : '';
//     const tempMetric = props.checked ? 'Fahrenheit' : 'Celsius';
//     console.log(props.data);
//     return (
//         <div>
//         {location &&
//             <div>
//                 <p>{location} weather:</p>
//                 <p>Temperature: {temperature} {tempMetric}</p>
//                 <p>Humidity: {humidity}%</p>
//                 <p>Pressue: {pressure}hPa</p>
//                 <ViewTemperatures 
//                     current={temperature}
//                     max={temperatureMax}
//                     min={temperatureMin}
//                 />
//             </div>
//         }
//         </div>
//     );
// }

export default ShowWeather;