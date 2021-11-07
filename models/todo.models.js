const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
	title: { type: String },
	description: { type: String },
}, {timestamps: true});

module.exports = mongoose.model("Todo", TodoSchema);
