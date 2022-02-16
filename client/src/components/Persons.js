import React from "react";
import { Link } from "react-router-dom";

const Persons = (props) => (
  <div className="container">
    <div className="row">
      {props.persons.map((person) => {
        return (
          <div
            key={person.id}
            className="col-md-4"
            style={{ marginBottom: "2rem" }}
          >
            <div className="person__box">
              <div className="person__text">
                <h5 className="person__title">
                  {person.name.length < 20
                    ? `${person.name}`
                    : `${person.name.substring(0, 25)}...`}
                </h5>
                <p className="person__subtitle">
                  Occupation:<span>{person.occupation} </span>{" "}
                </p>
                <p>
                  {person.bio.length < 30
                    ? `${person.bio}`
                    : `${person.bio.substring(0, 35)}...`}
                </p>
              </div>
              <button className="person__button">
                <Link
                  to={{
                    pathname: `/users/${person.id}`,
                    state: { person: person.name },
                  }}
                >
                  View Person
                </Link>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  </div>
);

export default Persons;
