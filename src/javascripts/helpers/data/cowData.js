import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json`)
    .then((response) => {
      const themCows = response.data;
      const cows = [];
      if (themCows) {
        Object.keys(themCows).forEach((cowId) => {
          cows.push(themCows[cowId]);
        });
      }
      resolve(cows);
    })
    .catch((error) => reject(error));
});

const getSingleCow = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows/${firebaseKey}.json`).then((response) => {
    const thisCow = response.data;
    resolve(thisCow);
  }).catch((error) => reject(error));
});

const getFarmerCows = (farmerUid) => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json?orderBy="farmerUid"&equalTo="${farmerUid}"`)
    .then((response) => {
      const farmerCows = response.data;
      const cows = [];
      if (farmerCows) {
        Object.keys(farmerCows).forEach((cowId) => {
          cows.push(farmerCows[cowId]);
        });
      }
      resolve(cows);
    }).catch((error) => reject(error));
});

const deleteCow = (firebaseKey) => {
  axios.delete(`${baseUrl}/cows/${firebaseKey}.json`);
};

const addCow = (data) => axios.post(`${baseUrl}/cows.json`, data)
  .then((response) => {
    const update = { firebaseKey: response.data.name };
    axios.patch(`${baseUrl}/cows/${response.data.name}.json`, update);
  }).catch((error) => console.warn(error));

const updateCow = (firebaseKey, cowObject) => axios.patch(`${baseUrl}/cows/${firebaseKey}.json`, cowObject);

export default {
  getCows, deleteCow, addCow, getFarmerCows, getSingleCow, updateCow
};
