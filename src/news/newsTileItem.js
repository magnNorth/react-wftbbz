import React from 'react';
import { UnixToDayCalc, UnixToMonthCalc } from './../common.js';

function imageStyle(im, options) {
  var imageKeyName = 'image';
  if (options.imagename) {
    imageKeyName = options.imagename;
  }

  let img = im.listMetadata[imageKeyName];
  if (
    im.listMetadata[imageKeyName] === undefined ||
    im.listMetadata[imageKeyName] === null
  ) {
    return null;
  }
  if (Array.isArray(img)) {
    img = img[0];
  }
  return <img className="card-img-top" src={img} />;
}

export default function NewsTileItem({ result, options }) {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className={'card'}>
        {imageStyle(result, options)}
        <div className="card-body">
          <h5 className="card-title"> {result.title}</h5>
          <p className="card-text">
            {result.date ? (
              <div>
                <span className="boxes-event__day">
                  {UnixToDayCalc(result.date)}{' '}
                </span>
                <span className="boxes-event__month">
                  {UnixToMonthCalc(result.date)}
                </span>
              </div>
            ) : null}
            {result.summary && options.summary == 'true' ? (
              <div>{result.summary.substring(0, 80)}</div>
            ) : null}
          </p>
          <a href={result.clickTrackingUrl} className="card-link">
            read more
          </a>
        </div>
      </div>
    </div>
  );
}
