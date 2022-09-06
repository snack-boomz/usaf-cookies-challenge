import http from 'node:http';

import express from 'express';
import cookieParser from 'cookie-parser';

const app = express();
app.use(express.json())
app.use(cookieParser());

app.get('/', (request, response) => {
    console.log("hello!");
    console.log("cookies: ", request.cookies);
    response.end("hello");
})

app.get('/authors', (request, response) => {
    response.end("My name is Trey and my friend is Justin");
})

app.get('/galvanize', (request, response) => {
    let HOST = "localhost";
    let PORT = "3000"; 
    response.end(`${HOST}:${PORT}`);
})

app.get('/login', (request, response) => {
    console.log("hello!");
    console.log("cookies: ", request.cookies);
    response.cookie('name', 'Trey');
    response.end("Logged in!");
})

app.get('/hello', (request, response) => {
    if (request.cookies.name === 'trey') {
        response.end(`Welcome ${request.cookies.name}!`);
    } else {
        response.end("Name cookie has not been set. Sorry!");
    }
    
})



app.listen(3000);

const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    let HOST = "localhost";
    let PORT = "3000"; 
    if (url[1] === 'authors') {
        if (request.method === 'GET') {
            response.end("My name is Trey and my partner is Justin");
        }
    } else if (url[1] === 'galvanize') {
        if (request.method === 'GET') {
            response.end(`${HOST}:${PORT}`);
        }
    } else if (url[1] === 'login') {
        if (request.method === 'GET') {
            // set name cookie
            console.log(request.cookies);
            response.end("Logging in...")
        }
    } else if (url[1] === 'hello') {
        if (request.method === 'GET') {
            // if name cookie is set, print out welcome {name}
            if (true) {
                console.log("hello");
            }
        }
    }
    response.statusCode = 404;
    response.end();
  });
