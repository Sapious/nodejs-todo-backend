const router = require("express").Router();
const todoControllers = require("../controllers/todo.controllers");
router.post("/", todoControllers.createTodo);
router.get("/", todoControllers.getTodos);
router.get("/:id", todoControllers.getTodo);
router.delete("/:id", todoControllers.deleteTodo);
router.put("/:id", todoControllers.updateTodo);
// router.post("/", (req, res) => {
// 	const newTodo = new Todo({
// 		title: "test",
// 		description: "des",
// 	});
// 	try {
// 		const savedTodo = newTodo.save();
// 		res.status(200).json(savedTodo);
// 	} catch (err) {
// 		res.status(500).json(err);
// 	}
// });
module.exports = router;
