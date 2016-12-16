/**
 * SistemaController
 *
 * @description :: Server-side logic for managing Sistemas
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	index: function (req, res) {
		var host=req.param('host');
		var url=req.param('url');
		var urlredir;
		if(host==new Buffer('adfly').toString('base64')){
			urlredir='https://adf.ly/'+url;
		} else if(host==new Buffer('linkbucks').toString('base64')){
			urlredir='http://linkbucks.com/'+url;
		}
    return res.view('index.pug', urlredir);
  }
};

