import jwt from "jsonwebtoken"

const generateTokenAndSetCookie=(userId,res)=>{
    const token=jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:"10d"
    })
    if(!token){
        return res.status(400).json({message:"Token not generated"})
    }
    res.cookie("jwt",token,{
        maxAge:15*24*60*60*60,
        httpOnly:true,
        sameSite:"strict",
    })

    return token
}

export default generateTokenAndSetCookie