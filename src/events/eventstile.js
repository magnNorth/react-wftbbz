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
    <div id="search-results-content" className="row">
      <div className="section__col section__col--left--lg section__col--nopadd section__col--left--border-right">
        <div className="boxes-event">
          <div className="boxes-event__wrapper">
            <div className="boxes-event__header">
              {list.options.title
                ? displayBoxesTitle(list.options.title)
                : null}
              {ReturnLink(list.options.linkto)}
            </div>
            <div className="boxes-event__items-outer">
              {list.results.map(function(d, i) {
                return <EventTileItem key={i} result={d} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
