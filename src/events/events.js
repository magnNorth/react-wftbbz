import React from "react";
import Event from "./event.js";
export default function Events(list) {
  return (
    <div id="search-results-content" className="row">
      <div className="section__col section__col--left--lg section__col--nopadd section__col--left--border-right">
        <div className="boxes-event">
          <div className="boxes-event__wrapper">
            <div className="boxes-event__header">
              <div className="boxes-event__title-outer">
                <div className="boxes-event__title">What's On</div>
              </div>
              <div className="boxes-event__link">
                <a href="https://www.wollongong.nsw.gov.au/whats-on/events">
                  See more events
                </a>
              </div>
            </div>
            <Event results={list.results} />
          </div>
        </div>
      </div>
    </div>
  );
}
