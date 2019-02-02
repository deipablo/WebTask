var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

var Car = require('./Car');

//Busqueda por id
router.get('/:id', function (req, res) {
    Car.find({ id: req.params.id }, function (err, car) {
        if (err) return res.status(500).send("There was a problem finding the car");
        if (!car) return res.status(404).send("Car not found");
        res.status(200).send(car);
    });
});

module.exports = router;