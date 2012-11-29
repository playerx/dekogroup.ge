
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Deko Group' });
};

exports.work = function(req, res){
  res.render('work', { title: 'Deko Group - Work' });
};

exports.team = function(req, res){
  res.render('team', { title: 'Deko Group - Team' });
};

exports.partners = function(req, res){
  res.render('partners', { title: 'Deko Group - Partners' });
};

exports.links = function(req, res){
  res.render('links', { title: 'Deko Group - Links' });
};

exports.contact = function(req, res){
  res.render('contact', { title: 'Deko Group - Contact' });
};