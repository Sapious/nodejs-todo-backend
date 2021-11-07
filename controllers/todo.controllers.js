const Todo = require("../models/todo.models");

const getTodos = async (req, res) => {
	try {
		const todos = await Todo.find();
		res.status(200).json(todos);
	} catch (err) {
		res.status(500).json(err);
	}
};
const getTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findById(id);
		res.status(200).json(todo);
	} catch (err) {
		res.status(500).json(err);
	}
};
const deleteTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findByIdAndDelete(id);
		res.status(204).json(todo);
	} catch (err) {
		res.status(500).json(err);
	}
};
const updateTodo = async (req, res) => {
	const id = req.params.id;
	try {
		const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
		res.status(200).json(todo);
	} catch (err) {
		res.status(500).json(err);
	}
};
const createTodo = async (req, res) => {
	const newTodo = new Todo({
		title: req.body.title,
		description: req.body.description,
	});
	try {
		const savedTodo = await newTodo.save();
		res.status(200).json(savedTodo);
	} catch (err) {
		res.status(500).json(err);
	}
};
module.exports.createTodo = createTodo;
module.exports.getTodos = getTodos;
module.exports.getTodo = getTodo;
module.exports.deleteTodo = deleteTodo;
module.exports.updateTodo = updateTodo;
