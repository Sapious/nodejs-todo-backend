// import packages
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//DB connection
mongoose.connect(
	"mongodb+srv://raed:fgzRLTq7rD4ffKFL@cluster0.lfyij.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);
mongoose.connection.on("connected", () => {
	console.log("DB connected");
});
// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// routes
app.use("/todos", require("./routes/todo.routes"));
// server listen
const port = 8000;
app.listen(port, () => {
	console.log("server yemchi jawou fesfes " + port);
});
