// //const { callbackify } = require('util');
const request = require('request');

const {
  fetchMyIP,
  fetchCoordsByIP,
  fetchISSFlyOverTimes,
nextISSTimesForMyLocation} = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned ip: ', ip);
// });

// fetchCoordsByIP('99.224.209.64',(error, coordinates) => {
//   if (error) {
//     console.log("There is an error!", error);
//     return;
//   }
//   console.log("It worked! Returned coordinates: ", coordinates);
// });

//const returnedCoords = { latitude: '45.5016889', longitude: '-73.567256' };

// fetchISSFlyOverTimes(returnedCoords, (error, passTimes) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }
//   console.log('It worked! Returned flyover times:', passTimes);
// });

// const { nextISSTimesForMyLocation } = require('./iss');

const printPassTimes = function (passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});

