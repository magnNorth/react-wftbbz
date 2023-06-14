import React from 'react';
import { UnixToDayCalc, UnixToMonthCalc } from './../common.js';

function imageStyle(im) {
  let img = im.listMetadata.image;
  if (im.listMetadata.image === undefined || im.listMetadata.image === null) {
    return null;
  }
  if (Array.isArray(img)) {
    img = img[0];
  }
  return <img className="card-img-top" src={img} />;
}

export default function EventTileItem(re) {
  var d = re.result;
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className={'card'}>
        {imageStyle(d)}
        <div className="card-body">
          <h5 className="card-title"> {d.title}</h5>
          <p className="card-text">
            <span className="boxes-event__day">{UnixToDayCalc(d.date)} </span>
            <span className="boxes-event__month">
              {UnixToMonthCalc(d.date)}
            </span>
          </p>
          <a href={d.clickTrackingUrl} className="card-link">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}
