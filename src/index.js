import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
let components = document.getElementsByTagName("fb-component");
let uniqueTest = [];

for (var i = 0; i < components.length; i++) {
  if (uniqueTest.includes(components[i].id)) {
    console.error(
      "ID: " +
        components[i].id +
        " already exists on this page, please use unique IDs."
    );
  }
  uniqueTest.push(components[i].id);

  ReactDOM.render(
    <App key={i} options={components[i].dataset} id={components[i].id} />,
    components[i]
  );
}
