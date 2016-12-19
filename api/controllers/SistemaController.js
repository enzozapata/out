/**
 * SistemaController
 *
 * @description :: Server-side logic for managing Sistemas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		var host=req.param('link');
		var url=req.param('url');
		var urlredir;
		if(host=='YWRmbHk'){
			urlredir='https://adf.ly/'+url;
		} else if(host=='bGlua2J1Y2tz'){
			urlredir='http://linkbucks.com/'+url;
		}
    return res.view('index.pug', {url:urlredir});
  }
};
