
const express = require('express')
const compression = require('compression')
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const app = express()
const nodeEnv = process.env.NODE_ENV || 'development'
const isPro = nodeEnv === 'production'

/*
if (!isPro) {
    require('./webpackdev.server')(app)
}
*/

app.use(compression({filter: shouldCompress}))

function shouldCompress (req, res) {
    if (   req.headers['x-no-compression']
        || (/\.(png|jpg|gif|pdf)$/.test(req.path)) ) {
        return false;
    }
    return compression.filter(req, res);
};

function buildInitialState () {
    const state = fs.readFileSync('./data/cards.json', 'utf8');
    if (!isPro) {
        console.log('Reading file cards.json: ' + state);
    }
    const code = 'window.initialState = ' + state;
    fs.writeFile('./build/initial-state.js', code, 'utf8');
};
function serveIndexPage (res) {
    buildInitialState()
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))    // Make sure don't cache it.
};

// const jsonParser = bodyParser.json(); // for parsing application/json
app.use(bodyParser.json()); // for parsing application/json

app.post('/cards/state', function (req, res) {
    fs.writeFile('./data/cards.json', JSON.stringify(req.body), 'utf8');
    res.json({status: 200, statusText: 'success'});
})

app.get('/cards', function (req, res) {
    serveIndexPage(res);
})

const cacheOpt = {maxAge: '1d'};

if (isPro)  {
    app.use(express.static(__dirname + '/build', cacheOpt));
}
else {
    app.use(express.static(__dirname + '/build'));
}

app.get('*', function (req, res){
    serveIndexPage(res);
})

app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('error', { error: err });
});
console.log(`Server is running in ${nodeEnv} mode on port ${port}`);

app.listen(port)
