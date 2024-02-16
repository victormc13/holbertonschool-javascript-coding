#!/usr/bin/node

import fs from 'fs';
const argv = process.argv;

const filePath = argv[2];
const content = argv[3];

fs.writeFile(filePath, content, (err) => {
  if (err) {
    console.log(err);
  }
});
