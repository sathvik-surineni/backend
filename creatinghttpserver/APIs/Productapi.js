// creating mini-express (a route)
const exp=require("express")
const Productapp=exp.Router()
// body parser
Productapp.get('/get-product/:id', (request, response) => {
    response.send({message:"found product by id"})
})

Productapp.use(exp.json())
// creating of new user
Productapp.post('/create-product', (request, response) => {
    // it need to get data from the client so it need to get data from the body
    // console.log(request.body)
    response.send({ message: "New user added" })
});
// updating of the user


Productapp.put('/update-product', (request, response) => {
    
    response.send({message:"updated a product"})
})

// Deleting of the user
Productapp.delete('/delete-product/:id',(request,response)=>{
   response.send({message:"deleted a product"})
})
module.exports=Productapp;