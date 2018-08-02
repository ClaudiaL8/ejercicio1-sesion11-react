import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    data: []
  }
  this.aleatoryPersons();
  this.aleatoryPersons = this.aleatoryPersons.bind(this);
}

  aleatoryPersons() {
    fetch(
      'https://randomuser.me/api/?results=50'
    )
    .then(function (response) {
      return response.json();
    })
    .then((json) => {
      const persons = json.results;
      console.log(persons)
      this.setState({
        data: persons
      })
    })
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.data.map(function (item){
            return(
              <li>
                <h3>{item.name.first}</h3>
                <img src={item.picture.medium} alt=""/>
                <h6>{item.location.city}</h6>
                <h6>{item.dob.age}</h6>
              </li>
            )
          })}
        </ul>
      </div>
    );
  }
}

export default App;
