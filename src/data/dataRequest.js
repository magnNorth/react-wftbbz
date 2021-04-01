let fetchURL =
  "https://search-demo-au.funnelback.com/s/search.json?sort=date&num_ranks=3&collection=lg-events-web&query=!padrenull&profile=resident";

export const getData = () =>
  fetch(fetchURL)
    .then(response => {
      return response.text();
    })
    .catch(function(err) {
      //  console.log("Fetch Error :-S", err);
    });
