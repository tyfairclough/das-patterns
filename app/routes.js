module.exports = {
 bind: function (app, assetPath) {

   app.get('/', function(req, res){
		 res.render('patterns/index');
		});
		
		app.get('/:id*', function(req, res){
			
			var defaultView = '/index';
			
			if (req.param(0) !== '') {
				defaultView = req.param(0) + "/index";
			}
			
		 res.render("patterns/" + req.param('id') + defaultView);
		});
		
 }
}