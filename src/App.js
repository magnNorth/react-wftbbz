import React, { useState, useEffect } from "react";
import "./style.css";
import { getData } from "./data/dataRequest.js";
import {
  initLocalData,
  clearLocalData,
  getLocalData,
  setLocalData
} from "./storage/localStorage.js";

import EventsTile from "./events/eventstile.js";
import EventsList from "./events/eventslist.js";

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
  });

  function clearlocal() {
    clearLocalData();
  }

  function setlocal(e) {
    dataAcq.store.userPref = [e];
    setLocalData(dataAcq.store);
  }

  function switchType(type) {
    //console.log(type);
    switch (type) {
      case "eventtile":
        return (
          <EventsTile
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
        break;

      case "eventlist":
        return (
          <EventsList
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
        break;

      case "newstile":
        return (
          <EventsTile
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
        break;

      case "newslist":
        return (
          <EventsList
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
        break;

      default:
        return (
          <EventsTile
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
    }
  }

  return dataAcq.data !== null ? (
    <div className="container">
      {dataattr.options.type ? switchType(dataattr.options.type) : null}

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
