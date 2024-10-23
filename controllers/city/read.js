import City from "../../models/City.js";

let allCities = async (req, res, next) => {
    try {
        let { name } = req.query;
        let query = {};
        if (name) {
            query.Name = { $regex: new RegExp(`^${name}`, "i") };
        }
        let all = await City.find(query);
        return res.status(200).json({
            response: all
        });
        
    } catch (error) {
        console.log(error.message);
        next(error);
        
        
    }
};

let detailCity = async (req, res, next) => {
    try {
        let { _id } = req.params;
        console.log(_id);
        
        let city = await City.findById(_id);
        if (!city) {
            return res.status(404).json({ message: "City not found" });
        }

        return res.status(200).json({
            response: city
        });
        
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};

export { allCities, detailCity };