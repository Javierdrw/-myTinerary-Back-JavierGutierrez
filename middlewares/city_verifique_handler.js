import City from "../models/City.js";

export const city_verifique_handler = async (req, res, next) => {
  const { Name, Description } = req.body;

  try {
    const cityExisting = await City.findOne({
      $or: [{ Name }, { Description }],
    });

    if (cityExisting) {
      return res.status(400).json({
        success: false,
        message: "city already exists with the same name or address.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Existing city verification failed",
      error: error.message,
    });
  }
};
