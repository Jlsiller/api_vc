const express= require('express');
const app = express();
const morgan = require('morgan');

//settings
app.set('port',process.env.PORT || 3000);

//middlewares para soportar los datos que vamos a recibir
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.get('/',(req,res) =>{
    res.send('hello world');
});

//starting the server
app.listen(app.get('port'),() => {
    console.log(`server on port ${app.get('port')}`);

});
