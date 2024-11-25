import User from "../../models/User.js";

export const signIn = async (req, res, next) => {
  try {
    await User.findOneAndUpdate({ email: req.user.email }, { online: true });

    return res.status(200).json({
      success: true,
      message: "Signed in successfully",
      user: {
        Name: req.user.Name,
        Email: req.user.Email,
        Photo: req.user.Photo,
      },
      token: req.token,
    });
  } catch (error) {
    console.error("Error in signIn function:", error);
    next(error);
  }
};
