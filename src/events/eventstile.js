import React from "react";
import EventTileItem from "./eventTileItem.js";

import { ReturnLink } from "./../common.js";

function displayBoxesTitle(title) {
  return (
    <div className="boxes-event__title-outer">
      <div className="boxes-event__title">{title}</div>
    </div>
  );
}

export default function EventsTile(list) {
  return (
    <div className="col">
      <div className="container">
        <div className={"row"}>
          {list.options.title ? displayBoxesTitle(list.options.title) : null}
          {ReturnLink(list.options.linkto)}
        </div>
        <div className={"row"}>
          {list.results.map(function(d, i) {
            return <EventTileItem key={i} result={d} />;
          })}
        </div>
      </div>
    </div>
  );
}
