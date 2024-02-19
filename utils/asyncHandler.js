const asyncHandler = (requestHandler) => async(req, res, next) => {
    try{
        await requestHandler(req, res, next);
    } catch(error){
        res.status(errorcode || 500).json({
            success: false,
            message: error.message
        });
    }
} 
export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}

// alternative approach for above function

// const asyncHandler = (requestHandler) => {
//     return (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
//     }
// }