const giftExchange = require("./routes/gift-exchange");
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.json());
morgan("tiny");

app.get("/", (req, res) => {
    res.send({ ping: "pong" });
    res.sendStatus(200);
});

app.use((err, req, res, next) => {
    console.log(err.stack);
    res.status(err.status).send(err.message);
});

app.use("/gift-exchange", giftExchange);

module.exports = app;