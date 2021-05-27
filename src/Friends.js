import React from "react";

export default function Friends() {
  const friends = ["Vinod", "Shyam", "Satya"];
  return (
    <div>
      <ul>
        {friends.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
    </div>
  );
}
