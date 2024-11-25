import User from "../models/User.js";

export const userExistById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }
        return next();
    } catch (error) {
        next(error);
    }
};