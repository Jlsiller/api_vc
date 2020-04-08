const { Router } = require('express');
const router = Router();

const movies = require('../sample.json');
console.log(movies);

router.get('/',(req,res) =>{
    res.json(movies);
});

router.post('/',(req,res) =>{
   const {title,director,year,rating}=req.body;
   if (title &&director&&year&&rating){
       const id = movies.length + 1;
       const newMovie ={id,...req.body};
       movies.push(newMovie);
      console.log(newMovie);
       res.json(movies);
   }
   else {
       //res.send('falta un dato error en envio');
        res.status(500).json({error: 'hubo un error'});
        
   };
  
  

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

