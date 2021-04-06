import React from "react";

export default function EventList(list) {
  let results = list.results;
  return (
    <ul className="list-event__items-outer">
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
          <li key={i} className={"list-event__item"}>
            <div className="list-event__details">
              <div className="list-event__date">
                <span className="list-event__day">{date}</span>
                <span className="list-event__month">{month}</span>
              </div>
              <div className="list-event__item-title">
                <a href={d.clickTrackingUrl}>{d.title}</a>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
