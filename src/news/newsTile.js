import React from 'react';
import EventTileItem from './newsTileItem.js';

import { ReturnLink, DisplayBoxesTitle } from './../common.js';

export default function NewsTile({ results, options }) {
  return (
    <div className="bd-example">
      <div className="container-fluid">
        <div className={'row'}>
          {options.title ? DisplayBoxesTitle(options.title) : null}
          {ReturnLink(options.linkto)}
        </div>
        <div className={'row'}>
          {results.map(function (d, i) {
            return <EventTileItem key={i} result={d} options={options} />;
          })}
        </div>
      </div>
    </div>
  );
}
