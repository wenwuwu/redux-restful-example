
const express = require('express')
const compression = require('compression')
const path = require('path')
const port = process.env.PORT || 3000
const app = express()
const nodeEnv = process.env.NODE_ENV || 'development'
const isPro = nodeEnv === 'production'

if (!isPro) {
    require('./webpackdev.server')(app)
}

app.use(compression({filter: shouldCompress}))

function shouldCompress(req, res) {
    if (   req.headers['x-no-compression']
        || (/\.(png|jpg|gif|pdf)$/.test(req.path)) ) {
        return false;
    }
    return compression.filter(req, res);
};
function serveIndexPage (res) {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'))    // Make sure don't cache it.
};


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
