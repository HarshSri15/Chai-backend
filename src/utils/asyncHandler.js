const asyncHandler =(requestHandler)=>{
    (req, res, next)=>{
        Promise.resolve(requestHandler(requestHandler, res, next)).
        catch((err)=> next(err))
    }
}
export{asyncHandler}