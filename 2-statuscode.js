#!/usr/bin/node

import request from 'request';
const url = process.argv;

request(url, (error, response) => {
  if (error) {
    console.log(error)
  } else {
    console.log(`code: ${response.statusCode}`)
  }
})
