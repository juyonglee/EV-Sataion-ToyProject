var express = require('express');
var router = express.Router();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/testset', function(req, res, next) {
  const search = fs.readdirSync('./public/testSet');
  search.forEach((value, index)=>{
    const samples = fs.readFileSync(`./public/testSet/${value}`);
    const sampleJSON = JSON.parse(samples);
    res.write(`File ${index+1}: ${value}\n`);
    res.write(`${sampleJSON['Description']}\n`);
    res.write(`Count: ${sampleJSON['chargerList'].length}\n`);
    res.write('==============================\n');
  });
  res.end();
});

module.exports = router;
