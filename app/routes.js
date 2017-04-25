module.exports = {
 bind: function (app, assetPath) {
   app.get('/', function (req, res) {
      res.render('patterns/index')
    })
    app.get('/:p1', function (req, res) {
      res.render('patterns', req.params.page)
    })
    app.get('/:p1/:p2', function (req, res) {
      res.render("patterns/" + req.params.p1 + "/" + req.params.p2)
    })
    app.get('/:p1/:p2/:p3', function (req, res) {
      res.render("patterns/" + req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3)
    })
    app.get('/:p1/:p2/:p3/:p4', function (req, res) {
      res.render("patterns/" + req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3 + "/" + req.params.p4)
    })
    app.get('/:p1/:p2/:p3/:p4/:p5', function (req, res) {
      res.render("patterns/" + req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3 + "/" + req.params.p4 + "/" + req.params.p5)
    })
    app.get('/:p1/:p2/:p3/:p4/:p5/:p6', function (req, res) {
      res.render("patterns/" + req.params.p1 + "/" + req.params.p2 + "/" + req.params.p3 + "/" + req.params.p4 + "/" + req.params.p5 + "/" + req.params.p6)
    })
 }
}