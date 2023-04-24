const mongoose = require("mongoose")

const TodoSchema = new mongoose.Schema({
    title: {
        type: "String",
        require: true
    },
    description: {
        type: "String",
        require: true

    }
})

const Todo = mongoose.model("todo", TodoSchema)

module.exports = Todo