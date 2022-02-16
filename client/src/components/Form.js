import React from "react";

//stateless
const Form = (props) => (
  <form onSubmit={props.getPerson} style={{ marginBottom: "2rem" }}>
    <input className="form__input" type="text" name="personName" />
    <button className="form__button">Search</button>
  </form>
);

export default Form;
