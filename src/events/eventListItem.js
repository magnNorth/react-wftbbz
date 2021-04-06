import React from "react";
import { UnixToDayCalc, UnixToMonthCalc } from "./../common.js";

export default function EventList(list) {
  console.log(list);
  return (
    <li className={"list-event__item"}>
      <div className="list-event__details">
        <div className="list-event__item-title">
          <a href={d.clickTrackingUrl}>{d.title}</a>
        </div>
        <div className="list-event__date">
          <span className="list-event__day">{UnixToDayCalc(d.date)} </span>
          <span className="list-event__month">{UnixToMonthCalc(d.date)}</span>
        </div>
      </div>
    </li>
  );
}
