import React from "react";
import { UnixToDayCalc, UnixToMonthCalc } from "./../common.js";

export default function EventList(list) {
  let d = list.result;
  return (
    <a
      href={d.clickTrackingUrl}
      className={"list-group-item list-group-item-action flex-column align-items-start"}
    >
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">{d.title}</h5>
        <small>
          {UnixToDayCalc(d.date)} / {UnixToMonthCalc(d.date)}
        </small>
      </div>
    </a>
  );
}
