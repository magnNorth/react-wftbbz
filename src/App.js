import React, { useState, useEffect } from "react";
import "./style.css";
import { getData } from "./data/dataRequest.js";
import {
  initLocalData,
  clearLocalData,
  getLocalData,
  setLocalData
} from "./storage/localStorage.js";

export default function App(dataattr) {
  const [dataAcq, setDataAcq] = useState({
    request: false,
    data: null,
    storeage: false,
    store: null
  });

  useEffect(() => {
    //load up local storage prefs
    if (!dataAcq.storeage) {
      initLocalData(dataattr.options);
      setDataAcq({
        request: dataAcq.request,
        data: dataAcq.data,
        storeage: true,
        store: getLocalData()
      });
    }

    if (!dataAcq.request && dataAcq.storeage) {
      //fetch Funnelback
      getData(dataAcq.store).then(d => {
        setDataAcq({
          request: true,
          data: d,
          storeage: dataAcq.storage,
          store: dataAcq.store
        });
      });
    }
    //console.log("load", dataAcq.store);
  });

  function createBody() {
    console.log(dataAcq.data.resultPacket.results);
    let result = dataAcq.data.resultPacket.results;

    return (
      <ul>
        {result.map(function(d, i) {
          return (
            <li key={i}>
              <a href={d.liveUrl}>
                <img src={d.listMetadata.image} width={200} />
                <h2>{d.title}</h2>
                <span>{d.listMetadata.category}</span>
              </a>
            </li>
          );
        })}
      </ul>
    );
  }

  function clearlocal() {
    clearLocalData();
  }

  function setlocal(e) {
    dataAcq.store.userPref = [e];
    setLocalData(dataAcq.store);
  }

  return dataAcq.data !== null ? (
    <div>
      <h1>Funnelback react component</h1>
      <button
        onClick={e => {
          setlocal("an option");
        }}
        value={"data"}
      >
        setlocal
      </button>
      <button onClick={clearlocal}>Clear</button>
      {createBody()}
    </div>
  ) : (
    <div>noData</div>
  );
}
