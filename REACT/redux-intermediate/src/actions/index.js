const URL_ROOT = "http://localhost:3005";
export function getCars(keywords) {
  //   console.log(`made a request with the ${keywords} key`);
  console.log(`${URL_ROOT}/carsIndex?q=${keywords}`);

  const request = fetch(`${URL_ROOT}/carsIndex?q=${keywords}`, {
    method: "GET"
  }).then(res => {
    return res.json();
  });
  return {
    type: "SEARCH_CARS",
    payload: request
  };
}

export function carDetail(id) {
  const request = fetch(`${URL_ROOT}/carsIndex?id=${id}`, {
    method: "GET"
  }).then(res => {
    return res.json();
  });
  console.log(request);

  return {
    type: "CAR_DETAIL",
    payload: request
  };
}

export function clearDetail() {
  return {
    type: "CLEAR_DETAIL",
    payload: []
  };
}
