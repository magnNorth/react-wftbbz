import React from "react";
import { UnixToDayCalc, UnixToMonthCalc } from "./../common.js";

function imageStyle(im) {
  if (im.listMetadata.image) {
    return (
      <div
        className="boxes-event__img"
        style={{ backgroundImage: "url(" + im.listMetadata.image + ")" }}
      >
        <a href={im.clickTrackingUrl}>
          <span className="sr-only">{im.title}</span>
        </a>
      </div>
    );
  }
}

export default function EventTileItem(re) {
  var d = re.result;
  return (
    <div className={"boxes-event__item"}>
      {imageStyle(d)}
      <div className="boxes-event__details">
        <div className="boxes-event__date">
          <span className="boxes-event__day">{UnixToDayCalc(d.date)}</span>
          <span className="boxes-event__month">{UnixToMonthCalc(d.date)}</span>
        </div>
        <div className="boxes-event__item-title">
          <a href={d.clickTrackingUrl}>{d.title}</a>
        </div>
      </div>
    </div>
  );
}
