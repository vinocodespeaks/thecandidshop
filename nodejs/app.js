const express = require("express")
const app=express();
const mongoose = require("mongoose")
const exphbs = require('express-handlebars')
const port =3000

//set engine
app.engine('handlebars',exphbs({
    defaultLayout : 'main'
}))
app.set('view engine','handlebars')
//middleware 
/*app.use(function (req, res, next) {
    console.log('Time:', Date.now())
    next()
  })*/

//database

mongoose.connect('mongodb://localhost/notes',{
//dont put mongo client if you are using mongoose 5.x++ version    
//useMongoClient:true 

}).then(()=>{
    console.log("database connected to your app")
}).catch((error)=>{
console.log("oouch ! somthing wrong with your database error is "+error)
})

//after creating schema import all model
require('./models/note');
const note = mongoose.model('notes');
app.get('/', (req, res) => {
    const title = 'Welcome';
    res.render('index', {
      title: title
    });
  });
  app.get('/about', (req, res) => {
    res.render('about');
  });
  


app.listen(port,()=>{
    console.log(`app is running on port ${port} just check it out`)
})


