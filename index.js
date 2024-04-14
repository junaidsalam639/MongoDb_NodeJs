const express = require("express");
const app = express();

const Port = 9000;

app.use('/' , (req , res) => {
    res.json({message: "Hello World"});
})

app.listen(Port, () => {
  console.log(`Server is running on port ${Port}`);
});


