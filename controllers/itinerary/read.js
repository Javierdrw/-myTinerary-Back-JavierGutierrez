import Itinerary from "../../models/Itinerary.js";

const readItineraryAll = async (req, res, next) => {
  try {
    let { name } = req.query;
    let query = {};
    if (name) {
      query.Name = { $regex: new RegExp(`^${name}`, "i") };
    }
    let all = await Itinerary.find(query)
      .populate({
        path: "city",
        select: "Name",
      })
      .populate({
        path: "user",
        select: "Name Email Photo",
      });
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const readItineraryId = async (req, res, next) => {
  try {
    let { id } = req.params;

    let city = await Itinerary.findById(id);
 
    return res.status(200).json({
      response: city,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const readItinerariesCity = async (req, res, next) => {
  const cityId = req.params.id;

  try {
    const itineraries = await Itinerary.find({ city: cityId })
      .populate("city")
      .populate({
        path: "user",
        select: "Name Email Photo",
      });

    if (!itineraries || itineraries.length === 0) {
      return res
        .status(404)
        .json({ message: "No itineraries found for this city." });
    }

    res.status(200).json({ response: itineraries });
  } catch (error) {
    next(error);
  }
};

export { readItineraryAll, readItineraryId, readItinerariesCity };
