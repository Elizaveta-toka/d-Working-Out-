import React, { Component } from 'react';

import './App.css';
const PLACES = [
    { name: "Palo Alto", zip: "94303" },
    { name: "San Jose", zip: "94088" },
    { name: "Santa Cruz", zip: "95062" },
    { name: "Honolulu", zip: "96803" }
];
class WeatherDisplay extends Component{
    render(){
        return (
            <h1> Hello, {this.props.zip} </h1>
        );
    }
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <WeatherDisplay zip ={12345} />
                {PLACES.map((place, index) => (
                    <button
                        key={index}
                        onClick={() => {
                            console.log('Clicked index '+index);
                        }}
                    >
                        {place.name}
                    </button>
                ))}
            </div>
        );
    }
}

const INTERVAL = 100;

class Timer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
    }

    render() {
        const value = this.state.value
        return (<div>
            <p>Таймер:</p>
            <p>
                <span>{Math.round(value/INTERVAL/60/60)} : </span>
                <span>{Math.round(value/INTERVAL/60)} : </span>
                <span>{Math.round(value/INTERVAL)} . </span>
                <span>{value % INTERVAL}</span>
            </p>
        </div>);
    }
}
ReactDOM.render(<Timer/>, document.getElementById('root'));
export default App;
