import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <div>
      <Link className="btn btn-link" to="/">
        Home
      </Link>{" "}
      <Link className="btn btn-link" to="/friends">
        Friends
      </Link>
      <Link className="btn btn-link" to="/about">
        About
      </Link>
      <Link className="btn btn-link" to="/animals">
        Animals
      </Link>
    </div>
  );
}
