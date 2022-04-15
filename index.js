const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.get("/empty", (req, res) => {
    res.render("empty");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});