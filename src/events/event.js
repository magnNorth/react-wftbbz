import React from "react";

export default function Event(list) {
  let results = list.results;
  return (
    <div className="boxes-event__items-outer">
      {results.map(function(d, i) {
        var a = new Date(d.date * 1000);
        var months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec"
        ];
        var month = months[a.getMonth()];
        var date = a.getDate();

        return (
          <div key={i} className={"boxes-event__item"}>
            <div
              className="boxes-event__img"
              style={{ backgroundImage: "url(" + d.listMetadata.image + ")" }}
            >
              <a href={d.clickTrackingUrl}>
                <span className="sr-only">{d.title}</span>
              </a>
            </div>
            <div className="boxes-event__details">
              <div className="boxes-event__date">
                <span className="boxes-event__day">{date}</span>
                <span className="boxes-event__month">{month}</span>
              </div>
              <div className="boxes-event__item-title">
                <a href={d.clickTrackingUrl}>{d.title}</a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
