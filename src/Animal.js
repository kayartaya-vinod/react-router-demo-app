import React, { useState, useEffect } from "react";
import qs from "query-string";

import { useParams, useHistory } from "react-router-dom";
import data from "./data";

export default function Animal(props) {
  const [name, setName] = useState("");
  const [picture, setPicture] = useState("");
  const params = useParams();
  const history = useHistory();

  console.log("params", params);
  console.log("props", props);
  console.log("query params", qs.parse(props.location.search));

  useEffect(() => {
    console.log("Animal component rendered");
  }, []);

  useEffect(() => {
    const searched = data.find((animal) => animal.id === parseInt(params.id));

    setName(searched.name);
    setPicture(searched.picture);
  }, [params]);

  const toFriendsPage = () => {
    history.push("/friends", { x: 10, y: 20 });
  };
  return (
    <div>
      <h2>This is {name}</h2>
      <p>
        View developer info here:{" "}
        <button onClick={toFriendsPage} className="btn btn-primary">
          Vinod
        </button>
      </p>
      <hr />
      <img
        style={{ maxWidth: "25vw" }}
        className="img-thumbnail"
        src={picture}
        alt={name}
      />
    </div>
  );
}
