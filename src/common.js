import React from "react";

export function ReturnLink(link) {
  if (link) {
    return (
      <div className="moreLink">
        <a href={link}>See All</a>
      </div>
    );
  }
}

export function DisplayBoxesTitle(title) {
  if (title) {
    return <h4 className="boxes-event__title">{title}</h4>;
  }
}

export function UnixToDayCalc(unixToProcess) {
  var a = new Date(unixToProcess * 1000);
  return a.getDate();
}

export function UnixToMonthCalc(unixToProcess) {
  var a = new Date(unixToProcess * 1000);
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
  return months[a.getMonth()];
}
