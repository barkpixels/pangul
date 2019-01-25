const fs = require('fs');

const request = require('request');

const CONF_FILE = "./conf.json";

fs.readFile(CONF_FILE, (err, data)=>{
  if(err)
    console.error(data);
  let conf = JSON.parse(data.toString());
  console.log("Finished parsing config");
  run_check(conf);
});

function run_check(conf){
  conf.sites.map(health_check);
}

function health_check(url){
  request(url, (err, resp, body)=>{
    if(err){
      console.error(url + ": fail");
      return;
    }
    console.log(url + ": ok");
  });
}
