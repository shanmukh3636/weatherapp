const express = require('express')
const app = express()
const PORT = process.env.PORT || 1234
const path = require('path')

app.use(express.static(path.join(__dirname,'client','build')))

app.get('/', (req, res) => {
    res.statusCode = 200;
    res.sendFile(path.join(__dirname,'client','build','index.html'));
})

app.listen(PORT, ()=>{
    console.log(`started listening on ${PORT}`);
})