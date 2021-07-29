const express = require('express');
const app = express();


app.use('/', (req, res)=>{
    res.end('<h1>Hola Mundo 2</h1>')
})

app.listen(3000, ()=>{
    console.log('Server corriendo en puerto 3000')
})