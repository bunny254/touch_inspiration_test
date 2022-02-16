import React from "react";

class Person extends React.Component {
  state = {
    activePerson: [],
  };
  componentDidMount = async () => {
    const name = this.props.location.state.person;
    const req = await fetch(
      `https://cors-anywhere.herokuapp.com/https://ti-react-test.herokuapp.com/users/query?q=${name}`
    );

    const res = await req.json();
    this.setState({ activePerson: res.person[0] });
    console.log(this.state.activePerson);
  };
  render() {
    const person = this.state.activePerson;
    return (
      <div className="container">
        <div className="active-person">
          <h3 className="active-person__title">{person.name} </h3>
          <h4 className="active-person__publisher">
            Occupation:<span>{person.occupation} </span>
          </h4>
          <p className="active-person__email">
            Email:
            <span>
              <a href={person.email}>{person.email}</a>
            </span>
          </p>
          <button className="active-person__button">Home</button>
        </div>
      </div>
    );
  }
}

export default Person;
