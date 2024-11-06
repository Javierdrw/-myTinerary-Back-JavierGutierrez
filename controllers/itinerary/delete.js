import Itinerary from "../../models/Itinerary.js";

export const deleteItinerary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const itinerary = await Itinerary.findByIdAndDelete(id);
    if (!itinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    return res.status(200).json({ message: "Itinerary deleted successfully" });
  } catch (error) {
    next(error);
  }
};
