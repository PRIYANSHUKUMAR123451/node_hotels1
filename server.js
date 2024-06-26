const express=require('express')
const app=express();
const db=require('./db');

const bodyParser=require('body-parser');
app.use(bodyParser.json());




app.get('/',function(req,res){
    res.send('Welcome to my hotel')

})






// Get method to get the person


//for Post MenuItems


//app.get('/chicken',(req,res)=>{
    //res.send('Sure sir I would love chicken')

//})

//app.get('/idli',(req,res)=>{
  // var customized_idli={
   // name:'rava idli',
   // size:'10 cm diameter',
    //is_sambhar:true,
    //is_chutney:false
   //}
   //res.send(customized_idli)

//})
const personRoutes=require('./routes/personRoutes');
const menuItemRoutes=require('./routes/menuItemRoutes');
app.use('/person',personRoutes);
app.use('/menu',menuItemRoutes);


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})