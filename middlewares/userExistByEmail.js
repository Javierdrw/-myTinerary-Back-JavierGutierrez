import User from "../models/User.js";

export const userExistByEmail = async (req, res, next) => {
    try {
        const { Email } = req.body;
        console.log(Email);
        
        const user = await User.findOne({Email: Email });
        console.log(user);
        
        if (user) {
            return res.status(400).json({ message: "Email already exists" });
        }
     return next();
    } catch (error) {
        next(error);
    }
};