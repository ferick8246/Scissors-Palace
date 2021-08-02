// imports
const mongoose = require('mongoose')


// connects to mongodb
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/scissors-palace', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})


// exports
module.exports = mongoose.connection