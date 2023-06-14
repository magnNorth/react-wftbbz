import React, { useState, useEffect } from 'react';
import './style.css';
import { getData } from './data/dataRequest.js';
import {
  initLocalData,
  clearLocalData,
  getLocalData,
  setLocalData,
} from './storage/localStorage.js';

import EventsTile from './events/eventstile.js';
import EventsList from './events/eventslist.js';
import DisplayFacets from './facets/displayFacets.js';

import NewsTile from './news/newsTile.js';

export default function App(dataattr) {
  const [dataAcq, setDataAcq] = useState({
    firstRun: true,
    data: null,
    dataOptions: dataattr.options,
    userPref: null,
  });

  useEffect(() => {
    //load up local storage prefs

    if (dataAcq.firstRun) {
      let local = initLocalData(dataattr.options, dataattr.id);

      setDataAcq({
        request: true,
        data: dataAcq.data,
        dataOptions: dataAcq.dataOptions,
        userPref: local,
      });
    }

    //fetch from data source
    if (dataAcq.request) {
      getData(dataAcq).then((d) => {
        setDataAcq({
          data: d,
          dataOptions: dataAcq.dataOptions,
          userPref: dataAcq.userPref,
        });
      });

      if (dataAcq.updateLocal) {
        setDataAcq({
          data: dataAcq.data,
          dataOptions: dataattr.options,
          userPref: dataattr.userPref,
        });
      }
    }
  });

  function clearlocal() {
    clearLocalData();
  }

  function setlocal(name, e) {
    let prev = getLocalData(name);
    prev.facets = e;
    setLocalData(name, prev);

    setDataAcq({
      request: true,
      data: dataAcq.data,
      checkedLocal: dataAcq.checkedLocal,
      dataOptions: dataAcq.dataOptions,
      userPref: prev,
    });
  }

  function switchType(type) {
    //console.log(type);
    switch (type) {
      case 'eventtile':
        return (
          <EventsTile
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
        break;

      case 'eventlist':
        return (
          <EventsList
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
        break;

      case 'newstile':
        return (
          <NewsTile
            results={dataAcq.data.resultPacket.results}
            options={dataattr.options}
          />
        );
        break;

      case 'newslist':
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
    <div className={'container-fluid'} id={dataAcq.userPref.name}>
      <main className="col-12 col-md-9 col-xl-8 py-md-3 pl-md-5 bd-content">
        {dataattr.options.type ? switchType(dataattr.options.type) : null}
        {dataAcq.data.facets ? (
          <DisplayFacets
            dataAcq={dataAcq}
            setlocal={setlocal}
            nameid={dataAcq.userPref.name}
          />
        ) : null}
      </main>
    </div>
  ) : (
    <div>loading</div>
  );
}
