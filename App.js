// to use react from node_modules, we need to import it
import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement(
//   "h1",
//   {
// id: "heading",
//   },
//   "Hello World from React!"
// );

/* <div id="parent">
  <div id ="child">
    <h1>I'm a h1 tag</h1>
  </div>
</div> */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
// "div",
// { id: "child" },
// React.createElement("h1", {}, "I'm a h1 tag")
//   )
// );

/* <div id="parent">
  <div id ="child1">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
  <div id ="child2">
    <h1>I'm a h1 tag</h1>
    <h2>I'm a h2 tag</h2>
  </div>
</div> */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("h2", {}, "I'm a h2 tag"),
  ]),
]);

// console.log(heading); // this gives a React element which is a js object
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root); // gives a ReactDOM object.
// root.render(heading); // takes the object and create the h1 tag and place it in render
root.render(parent);
