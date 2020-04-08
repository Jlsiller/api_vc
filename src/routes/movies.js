const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');
console.log(movies);

router.get('/',(req,res) =>{
    res.json(movies);
});

router.post('/',(req,res) =>{
   console.log(req.body);
   res.send('received');
});

/*
router.get('/',(req,res) =>{
    res.send('estas en  / en routes/movies');
})
*/

router.get('/movies',(req,res) =>{
    res.send('carpeta /movies en routes/movies');
});



module.exports =router;

