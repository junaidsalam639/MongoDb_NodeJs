const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const corsConfig = {
    origin : "*",
    credentials : true,
    methods : ["GET", "POST", "PUT", "DELETE"],
}
// const User = require("./Routes/UserRoutes");
const Users = require("./Schema/UserSchema");
const Port = 9000;

app.options("*", cors(corsConfig));
app.use(cors(corsConfig));
app.use(express.json());
// app.use("/users", User);


mongoose.connect("mongodb+srv://junaidsalam639:5qkb1exmZCJFIO0P@cluster0.g91jxfi.mongodb.net/").then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err);
});


// app.get("/", (req, res) => {
//     res.send({
//         status : "OK",
//         message : "Hello World"
//     });
// })

app.get("/", async (req, res) => {
    const user = await Users.find();
    res.send({
        status : "OK",
        message : "User Get Success",
        data : user,
    });
})

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});


