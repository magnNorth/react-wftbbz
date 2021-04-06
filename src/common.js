import React from "react";

export function ReturnLink(link) {
  if (link) {
    return (
      <div className="boxes-event__link">
        <a href={link}>See more events</a>
      </div>
    );
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
