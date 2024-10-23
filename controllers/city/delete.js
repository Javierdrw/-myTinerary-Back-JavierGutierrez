import City from "../../models/City.js";
export const deleteCity = async (req, res, next) => {
    try {
        let { _id } = req.params;

        let deletedCity = await City.findByIdAndDelete(_id);
        if (!deletedCity) {
            return res.status(404).json({ message: "City not found" });
        }

        return res.status(200).json({
            response: deletedCity,
            message: "City deleted successfully"
        });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};
