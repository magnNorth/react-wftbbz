import React from "react";
import EventListItem from "./eventListItem.js";

import { ReturnLink } from "./../common.js";

function displayBoxesTitle(title) {
  return (
    <div className="boxes-event__title-outer">
      <div className="boxes-event__title">{title}</div>
    </div>
  );
}

export default function EventsList(list) {
  return (
    <div className="container">
      <div className={"row"}>
        {list.options.title ? displayBoxesTitle(list.options.title) : null}
        {ReturnLink(list.options.linkto)}
      </div>
      <div className={"row bd-example"}>
        <div className="list-group">
          {list.results.map(function(d, i) {
            return <EventListItem key={i} result={d} />;
          })}
        </div>
      </div>
    </div>
  );
}
