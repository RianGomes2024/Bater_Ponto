import index from"./Index.js"
import conexao from "./database/Conexao.js"


const porta=3001


index.listen(porta,async()=>{
    const [result]=await conexao.execute("SELECT 1")
    if(result){
            console.log("MYSQL connection OK")
    }

    console.log(`Server rodando na porta ${porta}`)
})