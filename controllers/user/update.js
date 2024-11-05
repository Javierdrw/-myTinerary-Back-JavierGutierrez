import User from "../../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      response: updateUser,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};
