 const mongoose= require("mongoose");

const mongoURL='mongodb://0.0.0.0:27017/hotels'
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

const db=mongoose.connection;
db.on('connected',()=>{
    console.log('connected to MongoDb server');
})

db.on('error',(err)=>{
    console.log('Mongodb connected error',err);
})
db.on('disconnected',()=>{
    console.log(' MongoDb servervdisconnected');
})
module.exports=db;