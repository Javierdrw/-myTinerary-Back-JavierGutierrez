import User from "../../models/User.js";

const readUserAll = async (req, res, next) => {
  try {
    let { name } = req.query;
    let query = {};
    if (name) {
      query.Name = { $regex: new RegExp(`^${name}`, "i") };
    }
    let all = await User.find(query);
    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const readUserId = async (req, res, next) => {
  try {
    let { id } = req.params;

    let user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      response: user,
    });
  } catch (error) {
    console.log(error.message);
    next(error);
  }
};

const readUserItinerary = async (req, res, next) => {
  const itineraryId = req.params.id;

  try {
    const itineraries = await User.find({ itineraries: itineraryId }).populate(
      "itineraries"
    );


    res.status(200).json({ response: itineraries });
  } catch (error) {
    next(error);
  }
};

export { readUserId, readUserAll, readUserItinerary };
