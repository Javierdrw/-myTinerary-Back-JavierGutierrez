import User from "../../models/User.js";

export default async (req, res) => {
    try {
        await User.findOneAndUpdate(
            {Email: req.body.Email},
            {online: false}
        )
        console.log(req);

        return res.status(200).json({
            success: true,
            message: "Disconnected successfully"
        });
        
    } catch (error) {
        next(error)
    }
}