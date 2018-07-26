const express =require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res)=>{
    res.send('Test')
})

app.listen(PORT, ()=>{
    console.log(`App started at port ${PORT}`)
})