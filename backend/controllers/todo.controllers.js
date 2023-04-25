const Todo = require("../models/todo.models");

exports.getAllTodo = (req, res) => {
    return  Todo.find()
        .then((todo) => res.json(todo))
        .catch((err) =>
            res
            .status(404)
            .json({ message: "Todo not found", error: err.message })
        );
};

exports.postCreateTodo = (req, res) => {
    return  Todo.create(req.body)
        .then((data) => res.json({ message: "Todo added successfully", data }))
        .catch((err) =>
            res
            .status(400)
            .json({ message: "Failed to add todo", error: err.message })
        );
};

exports.putUpdateTodo = (req, res) => {
    return Todo.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
            .status(400)
            .json({ message: "Failed to update todo", error: err.message })
        );
};

exports.deleteTodo = (req, res) => {
    return Todo.findByIdAndRemove(req.params.id, req.body)
        .then((data) =>
            res.json({ message: "todo deleted successfully", data })
        )
        .catch((err) =>
            res
            .status(404)
            .json({ message: "book not found", error: err.message })
        );
};