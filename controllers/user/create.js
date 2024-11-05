import User from "../../models/User.js";

export const createUser = async (req, res, next) => {
  try {
    let newUser = new User(req.body);
    let savedUser = await newUser.save();
    return res.status(201).json({
      response: savedUser,
      message: "User added successfully",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
