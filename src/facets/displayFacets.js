import React, { useState, useEffect } from "react";

export default function DisplayFacets(data) {
  console.log(data.dataAcq.userPref.facets);
  if (data.dataAcq.data.facets[0]) {
    let list = data.dataAcq.data.facets[0].allValues;
    return (
      <div>
        facets
        <ul className="facet-list">
          {list.map((d, i) => {
            if (data.dataAcq.userPref.facets == d.queryStringParam) {
              return (
                <li 
                    key={i}
                    onClick={e => {
                      data.setlocal(d.queryStringParam);
                    }} 
                >
                <input type="checkbox" id={d.queryStringParam} defaultChecked={true} />
                    <label htmlFor={d.queryStringParam}> {d.label.replace(/_/g, " ")}</label>
                </li>
              );
            } else {
              return (
                <li 
                    key={i}
                    onClick={e => {
                      data.setlocal(d.queryStringParam);
                    }} >
                <input type="checkbox" id={d.queryStringParam} />
                    <label htmlFor={d.queryStringParam}> {d.label.replace(/_/g, " ")}</label>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
