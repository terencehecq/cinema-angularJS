const mdb = require('moviedb')('5192eb6331a3db50b6b388ae8941edc6');
const app = require('express')();

app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/popular', (req, res) => {
    let page = (req.query["page"]) ? req.query["page"] : 1;
    page = (req.query["page"] > 1000) ? 1000 : req.query["page"];
    mdb.miscPopularMovies({page: page}, (err, data) => {
        data.total_pages = 1000;
        res.send(data)
    });
});

app.get('/search',  (req, res) => {
    let query = req.query["q"];
    let page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.searchMovie({query: query, page: page}, (err, data) => {
        res.send(data)
    });
})

app.get("/similar/:id", (req, res) => {
   let id = req.params.id;
   let page = (req.query["page"]) ? req.query["page"] : 1;
    mdb.movieSimilar({id: id, page: page}, (err, data) => {
        res.send(data);
    });
});

app.get('/info/:id',  (req, res) => {
    let id = req.params.id;
    mdb.movieInfo({id: id}, (err, data) => {
        res.send(data);
    });
});

app.listen(3000, () => {
    console.log("Listening 3000")
});