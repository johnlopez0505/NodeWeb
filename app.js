
const express = require('express')
const app = express()
const port = 8000
app.set('view engine','pug')

app.get('/', (req, res) => {
  res.render('index')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/hola",(req,res) =>{
    res.render("hola",{titulo:"Mi primera web",mensaje: "este es un mensaje json"});
});


app.get("/saluda",(req,res)=>{
    res.render("formulario");
})

app.post("/saluda",(req,res) => {
    const saludo = req.params.saludo;
    res.render("saluda",{nombre: saludo}); 
})