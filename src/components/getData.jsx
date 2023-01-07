const getData = (url) => {
  fetch(url)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (myJson) {
      console.log(myJson);
    })
    .catch((err) => console.log(err));
};

export default getData;
