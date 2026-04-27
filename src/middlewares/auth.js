import jwt from"jsonwebtoken"
const idToken=(req,res,next)=>{
   const token= req.headers.authorization?.split(" ")[1]
   if(!token){
      return res.status(401).json({message:"Token não Enviado"})
   }
   try{
      const decodifica=jwt.verify(token,process.env.jwt_secret)
      console.log(decodifica)
      req.id=decodifica.id
      next()
   }catch(error){
      return res.status(400).json({message:"Token invalido"})
   }
}
export default {idToken}