const error500_handler = (error, req, res, next) => {
    console.log(`Error: ${error.message}`);
    console.log(`Method: ${req.method}`); // Aquí obtienes el método de la petición
    console.log(`URL: ${req.url}`);
    
    return res.status(500).json({
        status: false,
        response: error,
        message: "Error in the request",
        error: error.message,
        method: req.method,
        route: req.url,
    })
}

export default error500_handler