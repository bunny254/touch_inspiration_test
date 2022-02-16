import React, { Component } from "react";
import "./App.css";
import Form from "./components/Form";
import Persons from "./components/Persons";

class App extends Component {
  state = {
    persons: [],
  };
  //declaring the API call
  getPerson = async (e) => {
    const personName = e.target.elements.personName.value;
    e.preventDefault();
    const api_call = await fetch(`https://ti-react-test.herokuapp.com/users/`);

    const data = await api_call.json();
    this.setState({ persons: data });
    console.log(this.state.persons);
  };
  componentDidMount = () => {
    const json = localStorage.getItem("persons");
    const persons = JSON.parse(json);
    this.setState({ persons: persons });
  };
  componentDidUpdate = () => {
    const persons = JSON.stringify(this.state.persons);
    localStorage.setItem("persons", persons);
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Fakebook Search</h1>
        </header>
        <Form getPerson={this.getPerson} />
        <Persons persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
