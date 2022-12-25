const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))

const newItemsArr = ["Item1", "Item2", "Item3"];
const workItems = ["Item1", "Item2", "Item3"];
//tells the app to use ejs as the view engine
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    let day = date.getDate();
    res.render("list", { listTitle: day, newListItem: newItemsArr});
});

app.get("/work", function(req, res){
    res.render("list", {listTitle: "Work List", newListItem: workItems});
})

app.post("/", function (req, res) {
    const nextItem = req.body.item;
    if(req.body.inputItem === "Work")
    {
        workItems.push(nextItem);
        res.redirect("/work");
    }
    else
    {
        newItemsArr.push(nextItem);
        res.redirect("/");
    }
});



app.listen("3000", function () {
    console.log("Server started on port 3000");
});

