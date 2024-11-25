

const validateToken = async (req, res, next) => {
  try {
    const userResponse = { ...req.user.toObject() };
    delete userResponse.Password;

    return res.status(200).json({
      success: true,
      message: "Token is valid",
      user: userResponse,
    });
  } catch (error) {
    return res.status(500).json({ message: "Error al validar el token" });
  }
};

export default validateToken;