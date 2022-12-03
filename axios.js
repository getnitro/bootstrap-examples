// please keep in mind to install axios first: npm install axios

import axios from "axios";

const options = {
  method: 'POST',
  url: 'INSERT-YOUR-YOUR-NITRO-ENDPOINT-HERE',
  headers: {'Content-Type': 'application/json', Authorization: 'Bearer INSERT-YOUR-BEARER-TOKEN-HERE'},
  data: {email: 'john@doeinc.com'}
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});