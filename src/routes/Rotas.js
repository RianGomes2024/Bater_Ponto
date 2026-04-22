import express from"express"
import midd from "../middlewares/middlewares.js"
import controller from"../controller/Controller.js"
const routes=express.Router()

routes.post("/Users",midd.CamposVazios,midd.Formatos,controller.verificarEmail)
routes.delete("/Users/:id",controller.DeletarUser)
routes.get("/Users",controller.ExibirUsers)
routes.put("/Users/:id",midd.validarAlter,controller.alterar)
export default routes