import React, { useState, useEffect } from "react";
import "./style.css";
import { getData } from "./data/dataRequest.js";
import {
  initLocalData,
  setLocalData,
  clearLocalData
} from "./storage/localStorage.js";

export default function App(dataattr) {
  const [dataAcq, setDataAcq] = useState({
    request: false,
    data: null
  });

  //initLocalData(dataattr.type);

  useEffect(() => {
    console.log("effect");
    if (!dataAcq.request) {
      getData().then(d => {
        setDataAcq({ request: true, data: d });
      });
    }
  });

  //setLocalData("words")

  function createMarkup() {
    return { __html: dataAcq.data };
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
