import React, { useState, useEffect } from "react";
import "./style.css";
import { getData } from "./data/dataRequest.js";
import {
  initLocalData,
  clearLocalData,
  getLocalData,
  setLocalData
} from "./storage/localStorage.js";

import Events from "./events/events.js";

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

  function clearlocal() {
    clearLocalData();
  }

  function setlocal(e) {
    dataAcq.store.userPref = [e];
    setLocalData(dataAcq.store);
  }

  return dataAcq.data !== null ? (
    <div className="container">

              <Events results={dataAcq.data.resultPacket.results} />
              <custom-panel>
                <button
                onClick={e => {
                  setlocal("an option");
                }}
                value={"data"}
              >
                setlocal
              </button>
              <button onClick={clearlocal}>Clear</button>
              </custom-panel>
    </div>
  ) : (
    <div>noData</div>
  );
}
