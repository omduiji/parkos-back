const express = require('express');
const app = express();
const cors = require('cors');
const axios = require('axios');
const port = 8080;

//using cors
app.use(cors());

//create endpoint
app.get('/', cors(), (req, res) => {
  const location = req.query['location'];
  const arrival = req.query['arrival'];
  const arrivalTime = req.query['arrivalTime'];
  const departure = req.query['departure'];
  const departureTime = req.query['departureTime'];
  const sort_f = req.query['sort_f'];
  const sort_w = req.query['sort_w'];
  const url = `https://parkos.nl/ajax/locationSearchJSON/?location=${location}&arrival=${arrival}&arrivalTime=${arrivalTime}&departure=${departure}&departureTime=${departureTime}&sort_f=${sort_f}&sort_w=${sort_w}`;

  let url2 = `https://parkos.nl/ajax/locationSearchJSON/?location=parkeren-schiphol&arrival=2021-07-02&arrivalTime=12%3A00&departure=2021-07-10&departureTime=12%3A00&sort_f=price&sort_w=asc`;
  axios.get(url2).then((response) => {
    console.log(response);
    res.send(response.data);
  });
});

//listening to server
app.listen(port, () => console.log(`port ${port}`));
