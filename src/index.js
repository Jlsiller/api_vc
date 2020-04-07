const express= require('express');
const app = express();

const morgan = require('morgan');
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.listen(3000,() => {
    console.log('server on port ${3000} ');

});
