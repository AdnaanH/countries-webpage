const fs = require('fs');

const data = require('./data.json'); 

const formattedData = {
  countries: data,
};

fs.writeFileSync('formattedData.json', JSON.stringify(formattedData, null, 2));
