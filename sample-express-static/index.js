const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.post('/api/login', (req, res) => {
    console.log("req body send ==>", req.body);

    if(req.body.userName === "admin" && req.body.password === "admin") {
        res.send('log in succses');
    }else {
        res.status(401);
        res.send('log in fail');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})