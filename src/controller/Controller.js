import service from"../service/Service.js"

const verificarEmail=async(req,res)=>{
   try {
    const email=req.body.email
    const dados=req.body
    await service.validarEmail(email,dados)
    res.status(201).json({ msg: "Usuário criado" })

  } catch (error) {
    res.status(400).json({ erro: error.message })
  
}
}

const DeletarUser=async(req,res)=>{
   try{
    const id=parseInt(req.params.id)
    const result=await service.delUser(id)
   res.status(200).json({message:"User Deletado"})
   }catch(error){
     res.status(200).json({erro: error.message})
   }
}
const ExibirUsers=async(req,res)=>{
   const result=await service.ExibirUser()
   res.status(200).json(result)

}
const alterar=(req,res)=>{
    const id=parseInt(req.params.id)
    const dados=req.body
    const result=service.atualizarUser(id,dados)
    res.status(200).json({message:"User Alterado"})
}

export default {DeletarUser,ExibirUsers,alterar,verificarEmail}