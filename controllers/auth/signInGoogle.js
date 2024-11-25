import User from "../../models/User.js";

export const signInGoogle = async (req, res, next) => {
  try {
    await User.findOneAndUpdate({ Email: req.user.email }, { online: true });

   return res.redirect("http://localhost:5173/?token=" + req.token);
  } catch (error) {
    console.error("Error in signIn function:", error);
    next(error);
  }
};
