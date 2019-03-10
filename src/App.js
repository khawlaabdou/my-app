import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import cloud from './cloud.jpg';
import rainny from './rainny.png';
import vent from './vent.jpg';
import partlycloudy from './partlycloudy.png';
import degree from './degree.png';




class App extends Component {
  constructor(){
    super();
    this.state={
      city:"",
      result:{},
      test:"",
      clicked: false
        }
        
  }

  changeValue = (event) => {
  const city  = event.target.value;
  this.setState({city})}

seeWeather = () =>{

axios.get('http://api.apixu.com/v1/forecast.json?key=7573e5ad967c48eb884125727190903&q='+this.state.city)

.then(res=>{
console.log(res.data);
this.setState({ result: res.data, clicked : true})} //objet json dans une date
);
}
render(){
return(
  <center>
        <h2>Weather</h2>
        <div>
          <input  className="input" type="text"  name ="city" onChange={this.changeValue}></input>
          <button onClick = {this.seeWeather}>Show</button>

          <br/><br/><br/>

          {this.state.clicked && <div className="container"><div className="row">       
          <div class="col-sm">
            <h7><b>local time</b></h7>
           <p>{this.state.result.location.localtime}</p>
           </div>

           <div class="col-sm">
          <img src={partlycloudy} alt="partlycloudy"></img> 
           <p><b>condition :</b> {this.state.result.current.condition.text}</p>
           </div>

           <div class="col-sm">
          <img src={cloud} alt="cloud"></img> 
           <p><b>cloud :</b> {this.state.result.current.cloud}</p>
           </div>
           </div>
           <br/><br/>

           <div className="row"> 

           <div class="col-sm">

          <img src={rainny} alt="rainny"></img> 
           <p><b>humidity:</b>{this.state.result.current.humidity}</p>
           </div>

           <div class="col-sm">
          <img src={vent} alt="vent"></img> 
           <p><b>wind_mph:</b> {this.state.result.current.wind_mph}</p>
           <p><b>wind_kph:</b> {this.state.result.current.wind_kph}</p>

           </div>

           <div class="col-sm">
          <img src={degree} alt="degree"></img> 
           <p><b>degree:</b> {this.state.result.current.wind_degree}</p>

           </div>
           </div>
           </div>
          }
      </div> 
    </center> 
)
}
}

export default App;
//