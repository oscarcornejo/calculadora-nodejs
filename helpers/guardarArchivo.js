const fs = require('fs');

const archivo = './db/data.json';
const guardarDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};

module.exports = {
  guardarDB,
};
