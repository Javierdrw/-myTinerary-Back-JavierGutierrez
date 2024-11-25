import bcryptjs from "bcryptjs";

const isValidadPassword = (req, res, next) => {
  let passwordBody = req.body.Password;
  let passwordDB = req.user.Password;
console.log(passwordBody, " vs ", passwordDB);
console.log(req.user.Name);


  let compare = bcryptjs.compareSync(passwordBody, passwordDB);
  console.log(compare);
  
  if (compare) {
    delete req.body.Password;
    
    console.log("pase por aqui");

    return next();
  }
  return res
    .status(400)
    .json({ success: false, message: "Invalid Credencials" });
};

export default isValidadPassword;
