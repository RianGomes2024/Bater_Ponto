

const CamposVazios=(req,res,next)=>{
        console.log("chegou")
    const campos={"nome":"","sobrenome":"","email":"","senha":"","cidade":"","Estado":""}
    for(let campo in campos){
        if(!req.body[campo]){
            return res.status(400).json({message:`O campo ${campo}, não está preenchido`})
        }
    }
     next()
}

const validarAlter = (req, res, next) => {
   const dados=req.body
   if(Object.keys(dados).length===0){
    return res.status(400).json({message:"Você deve alterar algum campo"})
   }
   const camposVal=Object.values(dados).some((valor)=>valor==="" || valor===null)
   if(camposVal){
    
    return res.status(400).json({message:"Todos os campos devem ser preenchidos"})
    
   }
  
next()
}
const validarEmail=(req,res,next)=>{
   const email=req.body.email
   if(email==="" || email===undefined){
      return res.status(400).json({message:"O email deve ser informado"})
   }
   next()
}

const Formatos=(req,res,next)=>{
    console.log("chegou")
     let camposString={"nome":"","sobrenome":"","cidade":"","Estado":""}
     const email=req.body.email
     console.log(typeof email)
     const senha=req.body.senha

     for(let entradaString in camposString){
        if(typeof req.body[entradaString]!=="string"){
          return  res.status(400).json({message:`O campo ${entradaString} precisa ser preenchida por letras`})
        }
     }
    
     if(!email.endsWith("@gmail.com")){
        return  res.status(400).json({message:`O campo E-mail precisa terminar com o domínio (@gmail.com)`})
          
     }
     if(senha.length<8){
        return  res.status(400).json({message:`O campo SENHA deve conter no mínimo 8 caractéres`})
     }
         next()
}

export default {validarEmail,CamposVazios,Formatos,validarAlter}