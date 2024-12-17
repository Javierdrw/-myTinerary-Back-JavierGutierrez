import User from "../../models/User.js";

export const signInGoogle = async (req, res, next) => {
  try {
    await User.findOneAndUpdate({ Email: req.user.email }, { online: true });

   return res.redirect("https://fron-end-my-tinerary.firebaseapp.com/?token=" + req.token);
  } catch (error) {
    console.error("Error in signIn function:", error);
    next(error);
  }
};
