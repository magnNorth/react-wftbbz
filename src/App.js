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
    firstRun: true,
    data: null,
    dataOptions: dataattr.options,
    userPref: null
  });

  useEffect(() => {
    //load up local storage prefs
    let local = initLocalData(dataattr.options, dataattr.id);

    if (dataAcq.firstRun) {
      setDataAcq({
        request: true,
        data: dataAcq.data,
        dataOptions: dataAcq.dataOptions,
        userPref: local
      });
    }

    //fetch from data source
    if (dataAcq.request) {
      getData(dataAcq).then(d => {
        setDataAcq({
          data: d,
          dataOptions: dataAcq.dataOptions,
          userPref: dataAcq.userPref
        });
      });

      if (dataAcq.updateLocal) {
        setDataAcq({
          data: dataAcq.data,
          dataOptions: dataattr.options,
          userPref: dataattr.userPref
        });
      }
    }
  });

  function clearlocal() {
    clearLocalData();
  }

  function setlocal(e) {
    let prev = getLocalData();
    prev.facets = e;
    setLocalData(prev);

    setDataAcq({
      request: true,
      data: dataAcq.data,
      checkedLocal: dataAcq.checkedLocal,
      dataOptions: dataAcq.dataOptions,
      userPref: prev
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
    <div className="container" id={dataAcq.userPref.name}>
      {dataattr.options.type ? switchType(dataattr.options.type) : null}
      <DisplayFacets
        dataAcq={dataAcq}
        setlocal={setlocal}
        nameid={dataAcq.userPref.name}
      />
    </div>
  ) : (
    <div>loading</div>
  );
}
