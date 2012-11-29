
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'index' });
};

exports.work = function(req, res){
  res.render('work', { title: 'work' });
};

exports.team = function(req, res){
  res.render('team', { title: 'team' });
};

exports.partners = function(req, res){
  res.render('partners', { title: 'partners' });
};

exports.links = function(req, res){
  res.render('links', { title: 'links' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'contact' });
};