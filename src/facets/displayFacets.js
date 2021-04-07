import React, { useState, useEffect } from "react";

export default function DisplayFacets(data) {
  if (data.dataAcq.data.facets[0]) {
    let list = data.dataAcq.data.facets[0].allValues;
    return (
      <div>
        facets
        <ul>
          {list.map(d => {
            console.log(d);

            return (
              <li>
                <a
                  onClick={e => {
                    data.setlocal(d.queryStringParam);
                  }}
                >
                  {d.label.replace(/_/g, " ")}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
