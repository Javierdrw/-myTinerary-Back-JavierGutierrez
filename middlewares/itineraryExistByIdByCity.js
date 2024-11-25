import Itinerary from "../models/Itinerary.js";

export const itineraryExistByIdByCity = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.find({ city: id });
    console.log(itinerary);
    

    if (!itinerary || itinerary.length === 0) {
      return res
        .status(400)
        .json({ message: "No itineraries found for this city." });
    }

    next();
  } catch (error) {
    next(error);
  }
};
