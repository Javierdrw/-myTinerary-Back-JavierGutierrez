import jwt from "jsonwebtoken";

const generateToken = (req, res, next) =>{

    const email = req.body.Email || req.user.Email;

    const token = jwt.sign(
      {
        Email: email,
      },
      process.env.SECRET,
      {
        expiresIn: 60*60,
      }
    );
    req.token = token;
    return next();

  }
export default generateToken;