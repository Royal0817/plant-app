
const express = require("express");

const PORT = process.env.PORT || 3000;

const app = express();

const https = require('https');

https.get('https://trefle.io/api/v1/plants?token=NVe_HyLUGTiTCTp3mFjDBY57_z2uR1eqkUUTmSrfe2g&q', (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    console.log(JSON.parse(data));
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
          

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});