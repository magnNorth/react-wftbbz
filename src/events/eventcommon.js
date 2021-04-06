import React from "react";

export default function ReturnLink(link) {
  if (link) {
    return (
      <div className="boxes-event__link">
        <a href={link}>See more events</a>
      </div>
    );
  }
}
