//@ts-check
const Credential = require("../model/credential");
const express = require("express");
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const credential = await new Credential(req.body).save();
        res.send(credential);
    } catch (error) {
        res.send(error);
    }
});

router.get("/", async (req, res) => {
    try {
        const credentials = await Credential.find();
        // res.send('Hello World');
        res.send(credentials);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const credential = await Credential.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(credential);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const credential = await Credential.findByIdAndDelete(req.params.id);
        res.send(credential);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;