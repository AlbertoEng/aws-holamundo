const express = require('express');
const app = express();
const path = require('path');


app.use(express.static(path.resolve(__dirname, 'public')))

app.use('/', (req, res)=>{
    res.sendFile('index.html', ( error )=>{
        console.log(error)
    });
})

app.listen(80, ()=>{
    console.log('Server corriendo en puerto 80')
})