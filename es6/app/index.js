import React, {Component} from 'react';
import ReactDOM from 'react-dom';
const api_key = 'df7da59fe499521a4bb7a9d7bcb90b50';

class App extends Component{
  constructor(props){
    super(props);
    this.state={
      city:'minnesota',
      descritption:""
    }
  }
  componentDidMount(){
    this.grabWeather(this.state.city);
  }

  grabWeather(city){
    fetch(`http://api.openweathermap.org/data/2.5/weather?APPID=${api_key}&q=${city}`)
    .then(response => {
      return response.json();
    }).then(json =>{
      this.setState({
        description:json.weather[0].description
      })
    })
  }
  render(){
    return(
      <div>
      <h2>weather report for {this.state.city}</h2>
      <h2>{this.state.description}</h2>
      </div>
    )
  }
}
ReactDOM.render(<App/>,document.getElementById('root') );
