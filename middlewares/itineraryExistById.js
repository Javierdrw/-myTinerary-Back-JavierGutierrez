import Itinerary from "../models/Itinerary.js";

export const itineraryExistById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const itinerary = await Itinerary.findById(id);
        if (!itinerary) {
            return res.status(404).json({ message: "Itinerary not found" });
        }
        next();
    } catch (error) {
        next(error);
    }
};