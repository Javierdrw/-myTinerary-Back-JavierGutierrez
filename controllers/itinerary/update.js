import Itinerary from "../../models/Itinerary.js";

export const updateItinerary = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedItinerary = await Itinerary.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedItinerary) {
      return res.status(404).json({ message: "Itinerary not found" });
    }
    return res.status(200).json({
      response: updatedItinerary,
      message: "Itinerary updated successfully",
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};
