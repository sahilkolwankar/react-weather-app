import React from 'react';
import Switch from 'react-switch';
import ShowWeather from './showWeather.js';
import { geolocated } from "react-geolocated";

class WeatherApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {value: '', valueLat: 0, valueLon: 0, data: {}, checked: false, checkedLL: false};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitLL = this.handleSubmitLL.bind(this);
        this.handleChangeLat = this.handleChangeLat.bind(this);
        this.handleChangeLon = this.handleChangeLon.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
        this.handleSwitchChangeLL = this.handleSwitchChangeLL.bind(this);
        this.useCurrentLocation = this.useCurrentLocation.bind(this);
    }

    handleSwitchChange(checked) {
        this.setState({ checked });
    }

    handleSwitchChangeLL(checkedLL) {
        this.setState({ checkedLL });
    }

    handleSubmit = (event) => {
        const apiKey = '2a0e0c2d4164acaaf5b66fb3ce033df0';
        const proxyURL = 'https://cors-anywhere.herokuapp.com/';
        const location = this.state.value;
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => this.setState({data}));
        event.preventDefault();
    }

    handleSubmitLL = (event) => {
        const apiKey = '2a0e0c2d4164acaaf5b66fb3ce033df0';
        const latitude = this.state.valueLat;
        const longitude = this.state.valueLon;
        fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => this.setState({ data }));
        event.preventDefault();
    }

    handleChange = (event) => {
        const value = event.target.value;
        this.setState({value});
    }

    handleChangeLat = (event) => {
        const valueLat = event.target.value;
        this.setState({ valueLat });
    }

    handleChangeLon = (event) => {
        const valueLon = event.target.value;
        this.setState({ valueLon });
    }

    useCurrentLocation = () => {
        console.log(this.props.isGeolocationAvailable);
        console.log(this.props.isGeolocationEnabled);
        console.log(this.props.coords);
        if(this.props.isGeolocationAvailable && this.props.isGeolocationEnabled && this.props.coords) {
            this.setState({
                valueLat: this.props.coords.latitude,
                valueLon: this.props.coords.longitude
            });
            const apiKey = '2a0e0c2d4164acaaf5b66fb3ce033df0';
            const latitude = this.state.valueLat;
            const longitude = this.state.valueLon;
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
                .then(response => response.json())
                .then(data => this.setState({ data }));
        }
    }

    render() {
        return (
            <div>                
                <label htmlFor="material-switch">
                    <span className="tempMetric">&#176;C</span>
                    <Switch
                        checked={this.state.checked}
                        onChange={this.handleSwitchChange}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                    />
                    <span className="tempMetric">&#176;F</span>
                </label>
                <br/><br />
                <label htmlFor="material-switch">
                    <span className="tempMetric">Search by name or zip</span>
                    <Switch
                        checked={this.state.checkedLL}
                        onChange={this.handleSwitchChangeLL}
                        onColor="#86d3ff"
                        onHandleColor="#2693e6"
                        handleDiameter={30}
                        uncheckedIcon={false}
                        checkedIcon={false}
                        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                        height={20}
                        width={48}
                        className="react-switch"
                        id="material-switch"
                    />
                    <span className="tempMetric">Search by coordinates</span>
                </label>
                <button onClick={this.useCurrentLocation}>Show weather for my current location</button>
                {!this.state.checkedLL ? <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        value={this.state.value}
                        placeholder="Enter city"
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form> :
                <form onSubmit={this.handleSubmitLL}>
                    <input
                        type="number"
                        onChange={this.handleChangeLat}
                        value={this.state.valueLat}
                        placeholder="Latitude"
                    />
                    <input
                        type="number"
                        onChange={this.handleChangeLon}
                        value={this.state.valueLon}
                        placeholder="Longitude"
                    />
                    <input
                        type="submit"
                        value="Submit"
                    />
                </form>}
                <ShowWeather data={this.state.data} checked={this.state.checked}/>
            </div>
        );
    }
}

// export default WeatherApp;

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(WeatherApp);