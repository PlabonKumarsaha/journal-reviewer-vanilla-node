// dependecies

const http = require('http');
const { StringDecoder } = require('string_decoder');
const url = require('url')
const stringDecoder = require('string_decoder').StringDecoder

// the server should respond to all the request with a string .
const server = http.createServer(function(req,res){

//  get the url and parse it

const parseUrl = url.parse(req.url,true)

// get the path of the url

const path = parseUrl.pathname;
const trimedPath = path.replace(/^\/+|\/+$/g,'');

//Get the query string as an objecy
const queryString = parseUrl.query

// get the HTTP method

const httpMethod = req.method;

//get the headers
const headers = req.headers

//Get payload
const decoder = new StringDecoder('utf-8')
let buffer ='';
req.on('data',function(data){
    buffer+=decoder.write(data);
})

//gets called everytime
req.on('end',function(){

//send the response
res.end('Hello world!')
// log the request path
console.log('Requested recieved untrimed path ==> ',path)
console.log('Trimed path ==> ',trimedPath)
console.log('Method ==> ',httpMethod)
console.log('QueryString ==> ',queryString)
console.log('headers ==> ',headers)

console.log('payload ==> ',buffer)

})




});

// start the server and run it on 3000 port


server.listen(3000,function(){
    console.log('Server listening to 3000 port!')
})

