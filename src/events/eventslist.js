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
            <ul className="list-event__items-outer">
              {list.results.map(function(d, i) {
                return <EventListItem key={i} result={d} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
