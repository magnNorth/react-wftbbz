import React from "react";
import EventListItem from "./eventListItem.js";

import { ReturnLink } from "./../common.js";

export default function EventsList(list) {
  console.log(list);
  return (
    <div id="search-results-content" className="row">
      <div className="section__col section__col--left--lg section__col--nopadd section__col--left--border-right">
        <div className="boxes-event">
          <div className="boxes-event__wrapper">
            <div className="boxes-event__header">
              <div className="boxes-event__title-outer">
                <div className="boxes-event__title">What's On</div>
              </div>
              {ReturnLink(list.options.linkto)}
            </div>
            <ul className="list-event__items-outer">
              {list.results.map(function(d, i) {
                <EventListItem key={i} result={d} />;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
