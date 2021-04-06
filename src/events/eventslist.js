import React from "react";
import EventList from "./eventlist.js";

import ReturnLink from "./eventcommon.js";

export default function EventsList(list) {
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
            <ul>
              <EventList results={list.results} />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
