let http = require('http');
let fs = require('fs');

let server = http.createServer(function(req,res){
        if(req.url == '/'){
            fs.readFile('public/home.html',function(error,data){
                if(error){
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write("Somethings is wrong...");
                    res.end();
                }else{
                    res.writeHead(200,{'Content-Type':'text/html'});
                    res.write(data);
                    res.end();
                }
            });
        }else if (req.url == '/contact') {
            fs.readFile('public/contact.html', function(error, data) {
                if(error) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write('404 Not Found');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                }
                res.end();
            });
        }else if (req.url == '/about') {
            fs.readFile('public/about.html', function(error, data) {
                if(error) {
                    res.writeHead(404, {'Content-Type': 'text/html'});
                    res.write('404 Not Found');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/html'});
                    res.write(data);
                }
                res.end();
            });
        }else if (req.url == '/css/style.css') {
            fs.readFile('public/css/style.css', function(error, data) {
                if(error) {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.write('404 Not Found');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/css'});
                    res.write(data);
                }
                res.end();
            });
        }else if (req.url == '/js/script.js') {
            fs.readFile('public/js/script.js', function(error, data) {
                if(error) {
                    res.writeHead(404, {'Content-Type': 'text/plain'});
                    res.write('404 Not Found');
                } else {
                    res.writeHead(200, {'Content-Type': 'text/javascript'});
                    res.write(data);
                }
                res.end();
            });
        } else {
            fs.readFile('public/404.html',function(error,data){
                if(error){
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.write("Somethings is wrong...");
                    res.end();
                }else{
                    res.writeHead(404,{'Content-Type':'text/html'});
                    res.write(data);
                    res.end();
                }
            });
        }
});

server.listen(3000);
console.log("listening on port 3000");