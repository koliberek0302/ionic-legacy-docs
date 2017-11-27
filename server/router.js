const express  = require('express');
const ab       = require('express-ab');
const bp       = require('body-parser');
const markdown = require('./markdown');

const trustedPartnersCtrl = require('./pages/trusted-partners/trustedPartnersCtrl');
const contactCtrl = require('./controllers/contactCtrl');
const newsletterCtrl    = require('./controllers/newsletterCtrl');
const viewCtrl    = require('./controllers/viewCtrl');

module.exports = function router(app) {

  var abTestTest = ab.test('pricing-test', {id: 'MRClmJX_QEakg3kJs2jH9g'});

  return new express.Router()
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(req, res) {
  //   res.sendFile('/css/styles.min.css', {root: './_site'});
  // })
  // .get('/css/styles.min.css', abTestTest(null, 0.50), function(req, res) {
  //   res.sendFile('/css/styles.test.min.css', {root: './_site'});
  // });

  // normal pages
  .get('/', (req, res) => { res.render('framework'); })
  .get('/home', (req, res) => { res.render('index'); })
  .get('/about', (req, res) => { res.render('about'); })
  .get('/books/hybrid-vs-native', (req, res) => { res.render('books/hybrid-vs-native'); })
  .get('/contact', (req, res) => { res.render('contact'); })
  .get('/demo', (req, res) => { res.render('demo'); })
  .get('/developers', (req, res) => { res.render('developers'); })
  .get('/enterprise', (req, res) => { res.render('enterprise/index'); })
  .get('/enterprise/support', (req, res) => { res.render('enterprise/support'); })
  .get('/framework', (req, res) => { res.render('framework'); })
  .get('/getting-started', (req, res) => { res.render('getting-started'); })
  .get('/jobs', (req, res) => { res.render('jobs'); })
  .get('/press', (req, res) => { res.render('press'); })
  .get('/pricing', (req, res) => { res.render('pricing/index'); })
  // .get('/pricing/trial', (req, res) => { res.render('pricing/trial'); })
  .get('/privacy', (req, res) => { markdown(res, 'privacy-policy'); })
  .get('/products', (req, res) => { res.render('products/index'); })
  .get('/products/contact', (req, res) => { res.render('products/contact'); })
  .get('/products/creator', (req, res) => { res.render('products/creator/index'); })
  .get('/products/creator/pricing', (req, res) => { res.render('products/creator/pricing.html'); })
  .get('/products/creator/support', (req, res) => { res.render('products/creator/support.html'); })
  .get('/products/deploy', (req, res) => { res.render('products/deploy'); })
  .get('/products/monitor', (req, res) => { res.render('products/monitor'); })
  .get('/products/package', (req, res) => { res.render('products/package'); })
  .get('/products/view', (req, res) => { res.render('products/view'); })
  .get('/resources', (req, res) => { res.render('resources'); })
  .get('/sales', (req, res) => { res.render('sales'); })
  .get('/strategysession', (req, res) => { res.render('strategysession'); })
  .get('/support', (req, res) => { res.render('support'); })
  .get('/survey/2017', (req, res) => { res.render('survey/2017'); })
  .get('/team', (req, res) => { res.render('team'); })
  .get('/tos', (req, res) => { markdown(res, 'tos'); })
  .get('/values', (req, res) => { res.render('values'); })

  // pages w/ POST handlers
  .get('/trusted-partners', (req, res) => {
    res.render('trusted-partners/index');
  })
  .post('/trusted-partners', bp.urlencoded({extended: true}),
    trustedPartnersCtrl)

  // JSON endpoints
  .post('/contact', bp.json(), contactCtrl)
  .post('/api/v1/newsletter', bp.json(), newsletterCtrl)
  .post('/api/v1/view/link', bp.json(), viewCtrl)
};
