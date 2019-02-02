var mongoose = require('mongoose');
var CarSchema = new mongoose.Schema({
    id: Number,
    item_number: String,
    vin: String,
    model: String,
    year: Number,
    price_range_low: Number,
    price_range_high: Number,
    mileage: Number,
    views: Number,
    saves: Number,
    shares: Number,
    configurations: [{
        name: String,
        cylinders: String,
        cityMPG: Number,
        highwayMPG: Number,
        motor: Number
    }],
    images: []
});
mongoose.model('Car', CarSchema);
module.exports = mongoose.model('Car');