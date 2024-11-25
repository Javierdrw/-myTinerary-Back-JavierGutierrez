import City from "../models/City.js";

export const CityExistById = async (req, res, next) => {
    try {
        const { _id } = req.params;
        const city = await City.findById(_id);
        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }
        next();
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};