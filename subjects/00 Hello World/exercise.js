////////////////////////////////////////////////////////////////////////////////
// Exercise:
//
// - change the contents of the render function and save the file
// - see the updates automatically in your browser without refreshing!
////////////////////////////////////////////////////////////////////////////////
import React from "react";
import ReactDOM from "react-dom";


const node = document.getElementById("app");


const people = [
  { firstName: "Michael", lastName: "Jackson" },
  { firstName: "Bruce", lastName: "Lee" }
];

// function PeopleList(props) {
//   const people = props.people;

//   return (
//     <ul className={props.className}>
//       {people.map((person, index) =>(
//         ))}
//     </ul>
//   );
// }

// const element = React.createElement(PeopleList, {
//   className: "hot",
//   people: people
// });


// ReactDOM.render(element, node);
