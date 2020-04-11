const {Router}=require ('express');
const router = Router(); 

//routes

router.get('/',(req,res) =>{
    res.json({"Title": "Estas en /  en routes/index/"});
});

router.get('/test',(req,res) =>{
    const data={
        "name": "luis",
        "website": "luis.com"
    };
    res.json(data);
});
module.exports =router;

