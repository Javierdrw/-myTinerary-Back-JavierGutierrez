import User from "../../models/User.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    let newUser = new User(req.body);
    let savedUser = await newUser.save();
    const email = req.body.Email || req.user.Email;

    const token = jwt.sign(
      {
        Email: email,
      },
      process.env.SECRET,
      {
        expiresIn: 60 * 60 * 99,
      }
    );
    req.token = token;
    return res.status(201).json({
      response: savedUser,
      token: req.token,
      message: "User added successfully",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
