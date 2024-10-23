const not_found_handler = ( req, res, next) => {
    console.log(error.value);
    
    
    return res.status(404).json({
        status: false, 
        message: `The request with the route ${req.url} and method ${req.method} does not exist`,
    })
}

export default not_found_handler