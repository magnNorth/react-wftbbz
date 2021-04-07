import React from "react";
import { UnixToDayCalc, UnixToMonthCalc } from "./../common.js";

function imageStyle(im) {
  if (im.listMetadata.image) {
    return <img className="card-img-top" src={im.listMetadata.image} />;
  }
}

export default function EventTileItem(re) {
  var d = re.result;
  return (
    
      <div className={"card"} style={{ width: "18rem" }}>
        {imageStyle(d)}
        <div className="card-body">
          <h5 className="card-title"> {d.title}</h5>
          <p className="card-text">
            <span className="boxes-event__day">{UnixToDayCalc(d.date)}</span>
            <span className="boxes-event__month">
              {UnixToMonthCalc(d.date)}
            </span>
          </p>
          <a href={d.clickTrackingUrl} className="card-link">
            read more
          </a>
        </div>
      </div>

  );
}
