// import of http module
const http = require('http')
// const httpServer = http.createServer()
// const httpServer.listen(3600)
const requestHandler = (request, response) => {
    if (request.method === 'GET') {
        if(request.url==='/users'){
            response.end("This is response from get.users")
        }else{
            response.statusCode=400
            response.write("This is th first program for GET Method")
            response.end()
        }
        

    }
    if (request.method === 'POST') {
        response.write("This is th first program for Post Method")
        response.end()

    }
    if (request.method === 'PUT') {
        response.write("This is th first program for Put Method")
        response.end()

    }
    if (request.method === 'DELETE') {
        response.write("This is th first program for Delete Method")
        response.end()

    }
}
// creating an http server object.
const httpServer = http.createServer(requestHandler)
// assigning a port number to it.
httpServer.listen(3600,()=>console.log("Server is connected with port 3600..."))


// This is inefficient way of creayating api because for one request it need to check
// for all the if conditions and then it need to be execuited so it is inefficient so we use Express api for creation