let fetchURL =
  "https://search-demo-au.funnelback.com/s/search.json?sort=date&num_ranks=3&collection=lg-events-web&query=!padrenull&profile=resident";

function buildURL(req) {
  console.log("req", req.store[0].request[0]);
  let r = req.store[0].request[0];
  return (
    "https://search-demo-au.funnelback.com/s/search.json?sort=" +
    r.sort +
    "&num_ranks=3&collection=" +
    r.collection +
    "&query=" +
    r.query +
    "&profile=" +
    r.profile
  );
}

export const getData = request =>
  fetch(buildURL(request))
    .then(response => {
      return response.text();
    })
    .catch(function(err) {
      console.log("Fetch Error :-S", err);
    });
