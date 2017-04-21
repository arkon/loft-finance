const request = require('request-promise-native');

const API_ENDPOINT = "http://finance.google.com/finance/info?client=ig&q="

const parseRes = function (resString) {
  return JSON.parse(resString.substring(3));
};

const getSymbol = function (sym) {
  return new Promise((resolve, reject) => {
    request(`${API_ENDPOINT}${sym}`)
      .then((res) => {
        const jsonRes = parseRes(res);
        resolve(jsonRes);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

module.exports = getSymbol;
