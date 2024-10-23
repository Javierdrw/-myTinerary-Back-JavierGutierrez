import City from "../../models/City.js";

export const updateCity = async (req, res, next) => {
    try {
        let { _id } = req.params; 
        let updatedData = req.body; 

        let updatedCity = await City.findByIdAndUpdate(_id, updatedData, { new: true }); 
        if (!updatedCity) {
            return res.status(404).json({ message: "City not found" });
        }
        
        return res.status(200).json({
            response: updatedCity,
            message: "City updated successfully"
        });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};
