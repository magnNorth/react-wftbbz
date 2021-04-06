import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
let components = document.getElementsByTagName("fb-component");
for (var i = 0; i < components.length; i++) {
  ReactDOM.render(
    <App key={i} options={components[i].dataset} />,
    components[i]
  );
}
