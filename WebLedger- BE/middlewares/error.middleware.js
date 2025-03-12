const error_middleware = (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "ERROR BACKEND"
    const extraDetails = err.extraDetails || "ERROR BACKEND"

    return res.status(status).json({ message, extraDetails });
    
    
}


module.exports = error_middleware;