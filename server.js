import http from 'node:http';

import express from 'express';
import cookieParser from 'cookie-parser';


const server = http.createServer((request, response) => {
    let url = request.url.split('/');
    let HOST = "localhost";
    let PORT = "3000"; 
    if (url[1] === '') {
        if (request.method === 'GET') {
            response.end("Hello World");
        }
    } else if (url[1] === 'authors') {
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

  server.listen(3000, "localhost", () => {
    console.log(`Server running at http://localhost:3000/`);
  });