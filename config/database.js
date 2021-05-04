const mongoose = require('mongoose')

const connectDB = async function(next){
    try{
        mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex : true,
            useFindAndModify : false
        })

        console.log("connected mongodb...")
    }
    catch(err){
        next(err)
    }
}

module.exports = connectDB