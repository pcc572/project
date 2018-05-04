var express = require('express');
var router = express.Router();

var mysql = require('mysql');

var con = mysql.createConnection({
  host: "ilab.engr.utk.edu",
  user: "pcc572",
  password: "pcc572@421"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    //res.send('MySQL::Connected!');
  });

/* GET users listing. */
router.get('/purchase_orders', function(req, res, next) {
  con.query("SELECT * FROM pcc572.purchase_orders", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post student data. */
router.post('/purchase_orders', function(req, res, next) {
  var sql = con.query("INSERT INTO pcc572.purchase_orders set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    // res.send(result);
    res.json({"status": "OK"}); // your own
  });
});

/* GET users listing. */
router.get('/reviews', function(req, res, next) {
  con.query("SELECT * FROM pcc572.reviews", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

/* Post student data. */
router.post('/reviews', function(req, res, next) {
  var sql = con.query("INSERT INTO pcc572.reviews set ? ", req.body, function (err, result, fields) {
    if (err) throw err;
    
    console.log(sql);
    // res.send(result);
    res.json({"status": "OK"}); // your own
  });
});

/*GET customers*/
router.get('/purchase_orders', function(req, res, next) {
  con.query("SELECT * FROM pcc572.purchase_orders", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    res.send(result);
    //res.send('MySQL::Got Data!');
  });
});

module.exports = router;
