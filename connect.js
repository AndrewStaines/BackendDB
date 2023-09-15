const mongoose = require('mongoose')

module.exports.connectdb = () => {
    return mongoose.connect('mongodb://0.0.0.0:27017/Ayush');
};