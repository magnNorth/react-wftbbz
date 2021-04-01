import React, { useState, useEffect } from "react";
import "./style.css";
import { getData } from "./data/dataRequest.js";
import { getLocalData } from "./storage/localStorage.js";
let type = document.querySelector("#root").getAttribute("data-type");

export default function App() {
  const [dataAcq, setDataAcq] = useState(false);

  console.log(getLocalData(type));
  useEffect(() => {
    getData().then(d => {
      setDataAcq(d);
    });
  });

  function createMarkup() {
    return { __html: dataAcq };
  }

  return setDataAcq !== false ? (
    <div>
      <h1>Funnelback Component</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  ) : (
    <div>noData</div>
  );
}
