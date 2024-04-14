const express = require("express");
const router = express.Router();
const User = require("../Schema/UserSchema");

router.get("/", async (req, res) => {
    const user = await User.find();
    res.send({
        status : "OK",
        message : "User Get Success",
        data : user,
    });
})


module.exports = router

