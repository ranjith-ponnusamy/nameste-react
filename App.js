import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement();
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const Title = () => <h1>Hello from Title Component</h1>;

const Heading = () => 
<div className="parent">
  <Title />
  <h1 id="title" key="h1" className="heading" tabIndex={1}>Hello World from React</h1>
</div >;

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<Title />);
