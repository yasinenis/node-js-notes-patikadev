const http = require('http');

const server = http.createServer((req, res)=>{

    const url = req.url;
    
    if(url === '/' ) {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('<h1> Index Page </h1>');

    } else if (url === '/about') {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('ABout Page');
    }
    else if (url === '/contact') {
        res.writeHead(200,{'Content-Type': 'text/html'})
        res.write('Contact Page');
    }
    else {
        res.writeHead(404,{'Content-Type': 'text/html'})
        res.write('<h1>404 Page Not Found</h1>')
    }

    res.end();
});

const port = 3000;

server.listen(port, ()=> {
    console.log(`Server port started at ${port} succesfully.`);
});