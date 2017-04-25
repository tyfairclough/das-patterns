module.exports = {
 bind: function (app, assetPath) {
   app.get('/', function (req, res) {
      res.send('root')
    })
    app.get('/:p1', function (req, res) {
      res.render(req.params.page)
    })
    app.get('/:p1/:p2', function (req, res) {
      res.render(req.params.p1 + "/" + req.params.p2, {'sprint' : req.params.p2})
    })
    app.get('/:p1/:p2/:p3', function (req, res) {
      res.render(req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3, {'sprint' : req.params.p2})
    })
    app.get('/:p1/:p2/:p3/:p4', function (req, res) {
      res.render(req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3 + "/" + req.params.p4, {'sprint' : req.params.p2})
    })
    app.get('/:p1/:p2/:p3/:p4/:p5', function (req, res) {
      res.render(req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3 + "/" + req.params.p4 + "/" + req.params.p5, {'sprint' : req.params.p2})
    })
    app.get('/:p1/:p2/:p3/:p4/:p5/:p6', function (req, res) {
      res.render(req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3 + "/" + req.params.p4 + "/" + req.params.p5 + "/" + req.params.p6, {'sprint' : req.params.p2})
    })
    app.get('/admin', function (req, res) {
            res.send('admin')
//res.render(req.params.page)
    })
 }
}