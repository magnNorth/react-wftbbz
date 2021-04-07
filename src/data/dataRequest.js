//let fetchURL ="https://search-demo-au.funnelback.com/s/search.json?sort=date&num_ranks=3&collection=lg-events-web&query=!padrenull&profile=resident";

function buildURL(req) {
  console.log("req", req);
  let r = req.store.store[0].request[0];
  let f = ''//req.store.store[0].userPref;
  //console.log("r", r);
  //console.log("f", f);
  return (
    "https://search-demo-au.funnelback.com/s/search.json?sort=" +
    r.sort +
    "&num_ranks=" +
    r.returnnumber +
    "&collection=" +
    r.collection +
    "&query=" +
    r.query +
    "&profile=" +
    r.profile +
    f
  );
}

export const getData = request =>
  fetch(buildURL(request))
    .then(response => response.json())
    .then(data => {
      return data.response;
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
