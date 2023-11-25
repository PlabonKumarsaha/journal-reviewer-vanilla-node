// dependecies

const http = require('http')
const url = require('url')
// the server should respond to all the request with a string .
const server = http.createServer(function(req,res){

//  get the url and parse it

const parseUrl = url.parse(req.url,true)

// get the path of the url

const path = parseUrl.pathname;
const trimedPath = path.replace(/^\/+|\/+$/g,'');

// get the HTTP method

const httpMethod = req.method;

//send the response
res.end('hello world!')
// log the request path
console.log('Requested recieved untrimed path ==> ',path)
console.log('Requested recieved trimed path ==> ',trimedPath)
console.log('Requested recieved Method ==> ',httpMethod)

});

// start the server and run it on 3000 port


server.listen(3000,function(){
    console.log('Server listening to 3000 port!')
})

