import User from "../models/User.js";

const accountNoExist = async (req, res, next) => {
 
  
  try {
    let user = await User.findOne({ Email: req.body.Email });
    console.log(user);
    
    if (user) {
      req.user = {
        Name: user.Name,
        Email: user.Email,
        Photo: user.Photo,
        Password: user.Password,
      };
      return next();
    }
    return res.status(400).json({ message: "User not found" });
  } catch (error) {
    next(error);
  }
};

export default accountNoExist;
