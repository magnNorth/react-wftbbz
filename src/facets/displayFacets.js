import React, { useState, useEffect } from "react";

export default function DisplayFacets(data) {
  const [optionsOpen, setOptionsOpen] = useState({ open: "false" , text:"See Options"});

  function checkState() {
    console.log(optionsOpen);
    if (optionsOpen.open == "true") {
      setOptionsOpen({ open: "false"  , text:"See Options"});
    } else {
      setOptionsOpen({ open: "true"  , text:"Hide Options"});
    }
  }

  useEffect(() => {});

  console.log("render", data);
  if (!data.dataAcq.data.facets[0]) {
    return null;
  }
  let list = data.dataAcq.data.facets[0].allValues;

  return (
    <div>
      <button className={"showoptions "} onClick={() => checkState()}>
        {optionsOpen.text}
      </button>
      <ul className={"facet-list " + optionsOpen.open}>
        {list.map((d, i) => {
          return (
            <li
              key={i}
              onClick={e => {
                data.setlocal(d.queryStringParam);
              }}
            >
              <input
                type="checkbox"
                id={d.queryStringParam}
                readOnly={true}
                checked={
                  data.dataAcq.userPref.facets === d.queryStringParam
                    ? true
                    : false
                }
              />
              <label htmlFor={d.queryStringParam}>
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
