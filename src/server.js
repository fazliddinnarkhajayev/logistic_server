const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

const { host, PORT } = require('./config')
const modules = require('./modules')



// app.use( cookie() )
app.use( express.json() )
app.use( express.static( path.join( __dirname, 'public') ))
app.use( express.urlencoded({ extended: true }) )
app.use( cors() )

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origion', 'https://logisticreact.netlify.app');
    res.header('Access-Control-Allow-Headers', 'Origin , X-Requested-With, Content-Type, Accept , Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    next();
});

app.use( modules )

app.listen(PORT, () => console.log('Server is running on http://' + host + ':' + PORT))