import React from "react";

function StudentList() {
  const students = ["Marc", "Lucy", "Ana", "Efosa", "Daniel"];

  return (
    <div>
      <h2>Student List</h2>
      {students.map((name) => {
        return <p>{name}</p>;
      })}
    </div>
  );
}

export default StudentList;
