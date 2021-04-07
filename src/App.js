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
import DisplayFacets from "./facets/displayFacets.js";

export default function App(dataattr) {
  const [dataAcq, setDataAcq] = useState({
    request: false,
    data: null,
    checkedLocal: false,
    dataOptions: null,
    userPref: null
  });

  useEffect(() => {
    //load up local storage prefs
    if (!dataAcq.checkedLocal) {
      initLocalData(dataattr.options, dataattr.id);
      setDataAcq({
        request: dataAcq.request,
        data: dataAcq.data,
        checkedLocal: true,
        dataOptions: dataattr.options,
        userPref: getLocalData()
      });
    }

    if (!dataAcq.request && dataAcq.checkedLocal) {
      //fetch Funnelback
      getData(dataAcq).then(d => {
        setDataAcq({
          request: true,
          data: d,
          checkedLocal: dataAcq.storage,
          dataOptions: dataAcq.dataOptions,
          userPref: dataAcq.userPref
        });
      });

      console.log(dataAcq);
    }
  });

  function clearlocal() {
    clearLocalData();
  }

  function setlocal(e) {
    setDataAcq({
      request: false,
      data: dataAcq.data,
      checkedLocal: dataAcq.checkedLocal,
      dataOptions: dataAcq.dataOptions,
      userPref: e
    });
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

      <DisplayFacets dataAcq={dataAcq} setlocal={setlocal} />
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
