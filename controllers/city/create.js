import City from "../../models/City.js";

export const createCity = async (req, res, next) => {
  try {
    let newCity = new City(req.body);
    let savedCity = await newCity.save();
    return res.status(201).json({
      response: savedCity,
      message: "City added successfully",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
