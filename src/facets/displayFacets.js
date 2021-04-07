import React, { useState, useEffect } from "react";

export default function DisplayFacets(data) {
  let localStoreName = data.dataAcq.userPref.name;

  const [optionsOpen, setOptionsOpen] = useState({
    open: "false",
    text: "See Options"
  });

  function checkState() {
    if (optionsOpen.open == "true") {
      setOptionsOpen({ open: "false", text: "See Options" });
    } else {
      setOptionsOpen({ open: "true", text: "Hide Options" });
    }
  }

  useEffect(() => {});

  if (!data.dataAcq.data.facets[0]) {
    return null;
  }
  let list = data.dataAcq.data.facets[0].allValues;

  return (
    <div id={localStoreName}>
      <button className={"showoptions "} onClick={() => checkState()}>
        {optionsOpen.text}
      </button>
      <ul className={"facet-list " + optionsOpen.open}>
        {list.map((d, i) => {
          return (
            <li key={i}>
              <input
                type="checkbox"
                id={localStoreName + d.queryStringParam}
                onChange={e => {
                  setOptionsOpen({
                    open: "true",
                    text: "Hide Options"
                  });
                  data.setlocal(d.queryStringParam);
                }}
                checked={
                  data.dataAcq.userPref.facets === d.queryStringParam
                    ? true
                    : false
                }
              />
              <label htmlFor={localStoreName + d.queryStringParam}>
                {" "}
                {d.label.replace(/_/g, " ")}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
