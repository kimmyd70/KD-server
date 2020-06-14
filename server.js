'use strict';

//bring in express library

const express = require('express');

//create instance of exp
const app = express();

//tell app to use stuff in public
app.use(express.static('./public'));

//start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server really running on port $(PORT)`));

