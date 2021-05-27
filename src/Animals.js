import React from "react";
import data from "./data";
import { Route, Link } from "react-router-dom";
import Animal from "./Animal";

export default function Animals() {
  return (
    <div>
      <h1>Animals information</h1>
      <hr />
      {data.map((animal) => (
        <Link
          className="btn btn-link"
          key={animal.id}
          to={`/animals/${animal.id}?animal_id=${animal.id}`}
        >
          {animal.name}
        </Link>
      ))}

      <Route path="/animals/:id" component={Animal} />
      {/* <Route path="/animals/:id" children={<Animal />} /> */}
    </div>
  );
}
