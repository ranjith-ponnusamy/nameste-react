import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("div", { id: "child1", key: "c1" }, [
      React.createElement("h1", { key: "h1-1" }, "I am h1 tag inside child1"),
      React.createElement("h2", { key: "h1-2" }, "i am ranjith I am h2 tag inside child1"),
    ]),
    React.createElement("div", { id: "child2", key: "c2" }, [
      React.createElement("h1", { key: "h2-1" }, "I am h1 tag inside child2"),
      React.createElement("h2", { key: "h2-2" }, "I am h2 tag inside child2"),
    ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
