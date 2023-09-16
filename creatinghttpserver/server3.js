const exp = require("express")
const app = exp();
app.listen(3700, () => console.log("Server is connected to port 3700"))

// create user API
let users = []
app.get('/get-user', (request, response) => {
    response.send({ message: "all users", payload: users })
})
// body parser
app.get('/get-user/:id', (request, response) => {
    let userid = (+request.params.id)
    let result = users.find((element) => element.id === userid)
    response.send({ message: "users found", payload: result })
})

app.use(exp.json())
// creating of new user
app.post('/create-user', (request, response) => {
    // it need to get data from the client so it need to get data from the body
    // console.log(request.body)
    let newUser = request.body
    users.push(newUser)
    console.log(users)
    response.send({ message: "New user added" })
});
// updating of the user


app.put('/update-user', (request, response) => {
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
app.delete('/delete-user/:id',(request,response)=>{
    let userid = (+request.params.id)
    let indexofDeleteduser= users.find((element) => element.id === userid) 
    users.pop(indexofDeleteduser)
    console.log(indexofDeleteduser)
    response.send({message:"user deleted",payload:users})
})