const User = require("../models/users.models");

exports.getAllUser = (req, res) => {
    return User.find()
        .then((user) => res.json(user))
        .catch((err) =>
            res
            .status(404)
            .json({ message: "User not found", error: err.message })
            
        );
};

exports.postCreateUser = (req, res) => {
    return User.create(req.body)
        .then((data) => res.json({ message: "User added successfully", data }))
        .catch((err) =>
            res
            .status(400)
            .json({ message: "Failed to add user", error: err.message })
        );
};

exports.putUpdateUser = (req, res) => {
    return User.findByIdAndUpdate(req.params.id, req.body)
        .then((data) => res.json({ message: "updated successfully", data }))
        .catch((err) =>
            res
            .status(400)
            .json({ message: "Failed to update user", error: err.message })
        );
};

exports.deleteUser = (req, res) => {
    return User.findByIdAndRemove(req.params.id, req.body)
      .then((data) => res.json({ message: "user deleted successfully", data }))
      .catch((err) =>
        res.status(404).json({ message: "user not found", error: err.message })
      );
  };
  