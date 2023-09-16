// creating mini-express(A route)
const exp=require("express")
const Userapp=exp.Router()

let users = []
Userapp.get('/get-user', (request, response) => {
    response.send({ message: "all users", payload: users })
})
// body parser
Userapp.get('/get-user/:id', (request, response) => {
    let userid = (+request.params.id)
    let result = users.find((element) => element.id === userid)
    response.send({ message: "users found", payload: result })
})

Userapp.use(exp.json())
// creating of new user
Userapp.post('/create-user', (request, response) => {
    // it need to get data from the client so it need to get data from the body
    // console.log(request.body)
    let newUser = request.body
    users.push(newUser)
    console.log(users)
    response.send({ message: "New user added" })
});
// updating of the user


Userapp.put('/update-user', (request, response) => {
    let modifiedUser = request.body
    let indexofExistingUser = users.findIndex((element) => element.id === modifiedUser.id)
    if (indexofExistingUser === -1) {
        response.send({ message: "user is not found" })
    } else {
        users.splice(indexofExistingUser, 1, modifiedUser)
        response.send({ message: "user updated", payload: users })
    }

})

// Deleting of the user
Userapp.delete('/delete-user/:id',(request,response)=>{
    let userid = (+request.params.id)
    let indexofDeleteduser= users.find((element) => element.id === userid) 
    users.pop(indexofDeleteduser)
    console.log(indexofDeleteduser)
    response.send({message:"user deleted",payload:users})
})

module.exports=Userapp;