const http = require('http');
const fs = require('fs')
const _ = require('lodash');


const server = http.createServer((req, res) => {
    console.log(req.url, req.method);
    //set header content type
    res.setHeader('Content-Type', 'text/html'); //text/plain sends plain text and text/html sends html
    // res.write('<head><link rel="stylesheet" href="#"></head>')
    // res.write('hello, Rohan! What\'s up');
    // res.write('<p>hello, Hari! What\'s up</p>');
    // res.write('hello, Rohan! What are You doing');
    // res.write('hello, Rohan! ');
    // res.write('hello, Rohan! ');
    // res.write('hello, Rohan! What\'s up');
    // res.end()

    console.log(_.random(0,20))
    const greet = _.once(()=>{
        console.log('hello')
    }) 

    greet()

    let path = './htmls/'
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-me':

            res.statusCode = 301;
            res.setHeader('Location', '/about')
            res.end();
            break;
        default:
            path += '404.html';
            res.statusCode = 404;
    }
    //sends an html file
    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err)
            res.end()
        } else {
            // res.write(data)
            // res.end()


            //if we have single data to send then we can also do
            res.end(data);
        }
    })


});

server.listen(3000, 'localhost', () => {
    console.log('listening for request on port 3000');
})