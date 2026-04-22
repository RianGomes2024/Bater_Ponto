import routes from"./routes/Rotas.js"
import express from"express"

const index=express()
index.use(express.json())


index.use(routes)

export default index