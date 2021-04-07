import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
let components = document.getElementsByTagName("fb-component");
let uniqueTestID = [];
let required = ["type", "server", "collection"];

//not required
let options = ["returnnumber", "linkto", "sort", "profile", "query", "title"];
let defaults = {
  returnnumber: "3",
  linkto: "",
  sort: "date",
  profile: "",
  query: "!padnull",
  title: "none"
};

function testRequried(d) {
  for (let el of required) {
    if (el in d === false) {
      console.error("You are missing a requried Data attribute " + el);
      return false;
    }
  }
  return true;
}

function setDefaults(d) {
  for (let el of options) {
    if (el in d === false) {
      d[el] = defaults[el];
    }
  }
  return d;
}

for (var i = 0; i < components.length; i++) {
  if (uniqueTestID.includes(components[i].id)) {
    console.error(
      "ID: " +
        components[i].id +
        " already exists on this page, please use unique IDs."
    );
  }
  uniqueTestID.push(components[i].id);
  if (!testRequried(components[i].dataset)) {
    return false;
  }
  ReactDOM.render(
    <App
      key={i}
      options={setDefaults(components[i].dataset)}
      id={components[i].id}
    />,
    components[i]
  );
}
