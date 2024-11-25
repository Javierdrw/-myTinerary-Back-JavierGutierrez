import User from "../../models/User.js";

export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.status(200).json({
      response: updateUser,
      message: "User updated successfully",
    });
  } catch (error) {
    next(error);
  }
};


// export const addLastNameToUsers = async (req, res, next) => {
//   try {
  
//     // Actualiza todos los documentos para agregar el campo LastName si no existe
//     const updatedUsers = await User.updateMany(
//       { online: { $exists: false } }, // Condición: si no tiene LastName
//       { $set: { online: false} } // Agrega LastName con el valor predeterminado
//     );

//     return res.status(200).json({
//       message: "online added to users successfully",
//       modifiedCount: updatedUsers.modifiedCount, // Muestra cuántos documentos fueron modificados
//     });
//   } catch (error) {
//     next(error);
//   }
// };
