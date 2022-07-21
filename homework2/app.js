const express = require('express');
const path = require('path');


const app = express();



app.listen(5200, () => {
    console.log('Server has started on PORT 5200');
})