const { Router } = require('express');
const router = Router();
const _ = require('underscore');

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

  router.delete('/:id',(req,res) => {
      const {id} =req.params;

   console.log(req.params);
   _.each(movies,(movie,i) => {
       if (movie.id == id) {
           movies.splice(i,1);
       }
   })
   res.send('movies');
   
  });

router.put('/:id',(req,res) =>{
    const {id}= req.params;
    const {title,director,year,rating}=req.body;
    if (title &&director&&year&&rating){
        _.each(movies,(movie,i) => {
            if (movie.id== id){
                movie.title=title,
                movie.director=director;
                movie.year=year;
                movie.rating=rating;
            }
        });
        res.json(movies);
    }
    else {
        res.status(500).json({error: 'hubo un error en el put'});
    }
    }
);


/*
router.get('/',(req,res) =>{
    res.send('estas en  / en routes/movies');
})
*/

router.get('/movies',(req,res) =>{
    res.send('carpeta /movies en routes/movies');
});



module.exports =router;

