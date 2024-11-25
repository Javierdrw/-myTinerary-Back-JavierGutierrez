import bcrypjs from "bcryptjs";

const createHash = async (req, res, next) => {
   
    req.body.Password = bcrypjs.hashSync(req.body.Password, 10);
   
    return next();
}

export default createHash