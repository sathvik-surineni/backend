const exp=require("express")
const app=exp()
app.listen(3900,()=>console.log("Server Started from 3900..."))
// creating instance of userapi
const Userapp=require("./APIs/usersApi")
app.use('/user-api',Userapp)
// creating instance of productapi
const ProductApp=require("./APIs/Productapi")
app.use("/product-api",ProductApp)