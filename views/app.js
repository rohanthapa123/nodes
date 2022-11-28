const express = require('express')
const app = express();


app.set('views',__dirname + '')
app.set('view engine','ejs');
//listen for request
app.listen(3000);

app.get('/home',(req,res)=>{
    //res.send('<p>Homepage</p>')
    // res.sendFile('./htmls/index.html',{root: __dirname}) //using express
    res.render('index')
})
app.get('/',(req,res)=>{
    res.redirect('/home')
})
app.get('/about',(req,res)=>{
    // res.send('<p>Homepage</p>')
    // res.sendFile('./htmls/about.html',{root: __dirname})
    res.render('about')
})
app.get('/about-us',(req,res)=>{
    res.redirect('/about')
})
app.get('/contact',(req,res)=>{
    res.send('<p>Homepage</p>')
})

app.use((req,res)=>{
    // res.status(404).sendFile('./htmls/404.html',{root: __dirname})
    res.status(404).render('404')
})
