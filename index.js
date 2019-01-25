const fs = require('fs');
const CONF_FILE = "./conf.json";

fs.readFile(CONF_FILE, (err, data)=>{
  if(err)
    console.error(data);
  let conf = JSON.parse(data.toString());
  console.log(conf)
});