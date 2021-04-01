import React, { useState, useEffect } from "react";
import "./style.css";
import { getData } from "./data/dataRequest.js";

export default function App() {
  const [dataAcq, setDataAcq] = useState(false);

  useEffect(() => {
    getData().then(d => {
      setDataAcq(d);
    });
  });

  function createMarkup() {
    return { __html: dataAcq };
  }

  return setDataAcq !== false ? (
    <div>
      <h1>Funnelback Component</h1>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </div>
  ) : (
    <div>noData</div>
  );
}
