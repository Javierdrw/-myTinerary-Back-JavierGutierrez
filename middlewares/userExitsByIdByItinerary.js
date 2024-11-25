import User from "../models/User.js";

export const userExistByIdByItinerary = async (req, res, next) => {
    try {
        const { id } = req.params;
        const itinerary = await User.find({ itineraries: id });
        if (!itinerary || itinerary.length === 0) {
            return res
              .status(400)
              .json({ message: "No itineraries found for this city." });
          }
        return next();
    } catch (error) {
        next(error);
    }
};