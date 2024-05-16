
// EXPRESS

const express = require("express");
// morgan
const morgan = require("morgan");
// mongoDB
const mongoose = require("mongoose");
const { result } = require("lodash");
const blogRoutes = require("./routes/blogRoutes")
// express app
const app = express();
//  connect to mongoDB
const dbURI ="mongodb+srv://prince:prince9005@netninja.kiqtstf.mongodb.net/?retryWrites=true&w=majority&appName=NetNinja";
mongoose.connect(dbURI)
    .then((result) => app.listen(3000, () => {
        console.log("listening for requests on port 3000")}))
    .catch((error)=>console.log("Error connecting to MongoDB:", error));

// register view engine  
app.set("view engine", "ejs");

// middware and static files
app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(morgan("dev"));


// app.use((req, res, next) => {
//     console.log("new request made:");
//     console.log("host:", req.hostname);
//     console.log("path:", req.path);
//     console.log("method:", req.method);
//     next();
// });
// app.use((req, res, next) => {
//     console.log("in the next middleware:");
//     next();
// });

app.get("/", (req, res) => {
    res.redirect("/blogs")
});
app.get("/about", (req, res) => {
    // res.send("<p>about, dracuzi</p>");
    // res.sendFile("./views/about.html" , {root: __dirname});
    res.render("about",  {title: "about"});
});
// blog routes == ./blogsRoutes 
app.use( blogRoutes);

// redirects
app.get("/about-us", (req, res) => {
    res.redirect("/about");
});

// 404 page
app.use((req, res) => {
    // res.status(404).sendFile("./views/404.html" , {root: __dirname});
    res.status(404).render("404",  {title: "404"});
});