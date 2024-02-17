#!/usr/bin/node

import fs from 'fs';
const request = require('request');
const url = process.argv[2];
const filePath = process.argv[3]

request(url, (error, response, body) => {
  if (error) {
    console.log(error);
  } else {
    const result = JSON.parse(body);
    fs.writeFile(filePath, result, (error) => {
      console.log(error)
    })
  }
});
