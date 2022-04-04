const port=3000;
express = require('express');
load = express();
rout = require(__dirname+'/express.js');
load.use('/', rout);
load.listen(port, ()=> {
    console.log(`Server is running on port ${port}`);
});