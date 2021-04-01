import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
let componentRoot = document.getElementsByTagName("fb-component")[0];
ReactDOM.render(<App type={componentRoot.dataset.type} />, componentRoot);
