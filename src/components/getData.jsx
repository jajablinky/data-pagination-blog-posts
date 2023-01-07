const getData = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        resolve(myJson);
      })
      .catch((err) => reject(err));
  });
};

export default getData;
