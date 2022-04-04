const path=require('path');
const express=require('express');
const load=express();
load.use(express.static(__dirname+'/public'));
load.get('/home',function(req,res) {
  res.sendFile(path.join(__dirname+'/views/home.html'));
});
module.exports = load;
