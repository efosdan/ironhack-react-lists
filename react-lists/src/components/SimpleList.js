import React from "react";

function SimpleList() {
  const numberLists = [
    <li>New york</li>,
    <li>Chicago</li>,
    <li>Los Angelos</li>,
    <li>Atlanta</li>,
    <li>Dallas</li>,
  ];
  return (
    <div>
      <h2>Listed Cities:</h2>
      {numberLists}
    </div>
  );
}

export default SimpleList;
