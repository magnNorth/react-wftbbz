import React, { useState, useEffect } from "react";
import "./style.css";
import { getData } from "./data/dataRequest.js";
import {
  initLocalData,
  setLocalData,
  clearLocalData
} from "./storage/localStorage.js";

export default function App(dataattr) {
  const [dataAcq, setDataAcq] = useState(false);

  initLocalData(dataattr.type);

  useEffect(() => {
    console.log("effect");
    getData().then(d => {
      // setDataAcq(d);
    });
  });

  //setLocalData("words")

  function createMarkup() {
    return { __html: dataAcq };
  }

  function clearlocal(e) {
    //  console.log("clear");
    clearLocalData();
  }

  return setDataAcq !== false ? (
    <div>
      <h1>Funnelback react component</h1>
      <button onClick={clearlocal}>Clear</button>

      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  ) : (
    <div>noData</div>
  );
}
