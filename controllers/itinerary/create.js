import Itinerary from "../../models/Itinerary.js";
import User from "../../models/User.js";

const createItinerary = async (req, res, next) => {
  try {
    const {
      photo,
      price,
      name,
      duration,
      likes,
      hashtags,
      city,
      comment,
      userId,
    } = req.body;

    const newItinerary = await Itinerary.create({
      photo,
      price,
      name,
      duration,
      likes,
      hashtags,
      city,
      comment,
      user: userId,
    });

    await User.findByIdAndUpdate(userId, {
      $push: { itineraries: newItinerary._id },
    });

    res.status(201).json({
      message: "Itinerario creado con éxito",
      itinerary: newItinerary,
    });
  } catch (error) {
    next(error);
  }
};

export { createItinerary };
