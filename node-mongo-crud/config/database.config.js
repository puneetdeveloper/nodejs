const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect("mongodb://localhost:27017/demodatabase")
.then(() => {
    console.log("Connection successfully established");    
}).catch(err => {
    console.log('Could not connect to the database.');
    process.exit();
});