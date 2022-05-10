const express = require('express');
const axios = require('axios');
const app = express();

const PORT = process.env.port || 3000;
const website = 'https://www.wildflowers.co.il/english/plant.asp?ID=831';

try {
  axios(website).then((response) => {
    const html = response.data;
    console.log(html);
  });
} catch (error) {
  console.log(error, error.message);
}

app.listen(PORT, () => {
  console.log(`server is running on port:${PORT}`);
});
