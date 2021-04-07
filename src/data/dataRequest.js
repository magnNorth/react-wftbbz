function buildURL(req) {
  let r = req.dataOptions;
  let f = req.userPref.facets;

  return (
    "https://" +
    r.server +
    "/s/search.json?" +
    "sort=" +
    r.sort +
    "&num_ranks=" +
    r.returnnumber +
    "&collection=" +
    r.collection +
    "&query=" +
    r.query +
    "&profile=" +
    r.profile +
    "&" +
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
