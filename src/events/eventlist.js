import React from "react";
import { UnixToDayCalc, UnixToMonthCalc } from "./../common.js";

export default function EventList(list) {
  let results = list.results;
  return (
    <ul className="list-event__items-outer">
      {results.map(function(d, i) {
        return (
          <li key={i} className={"list-event__item"}>
            <div className="list-event__details">
              <div className="list-event__item-title">
                <a href={d.clickTrackingUrl}>{d.title}</a>
              </div>
              <div className="list-event__date">
                <span className="list-event__day">
                  {UnixToDayCalc(d.date)}{" "}
                </span>
                <span className="list-event__month">
                  {UnixToMonthCalc(d.date)}
                </span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
