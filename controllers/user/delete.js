import User from "../../models/User.js";

export const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    return res.status(200).json({
      response: user,
      message: "User deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
