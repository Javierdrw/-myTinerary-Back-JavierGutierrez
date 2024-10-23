import City from "../../models/City.js";

export const createCity = async (req, res, next) => {
    try {
        let newCity = new City(req.body); // Crea una nueva instancia del modelo City con los datos recibidos en el cuerpo

        let savedCity = await newCity.save(); // Guarda la nueva ciudad en la base de datos

        return res.status(201).json({
            response: savedCity,
            message: "City added successfully"
        });
    } catch (error) {
        console.log(error.message);
        next(error);
    }
};
