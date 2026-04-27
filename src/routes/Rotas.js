import express from"express"
import midd from "../middlewares/middlewares.js"
import auth from "../middlewares/auth.js"
import controller from"../controller/Controller.js"
const routes=express.Router()

routes.post("/Users",midd.CamposVazios,midd.Formatos,controller.verificarEmail)
routes.post("/token/ponto/entrada",auth.idToken,controller.pontoEntrada)
routes.post("/token/ponto/saida",auth.idToken,controller.pontoSaida)
routes.post("/Users/login",controller.inserirLogin)
routes.delete("/Users/:id",controller.DeletarUser)
routes.put("/Users/:id",midd.validarAlter,controller.alterar)
routes.get("/Users",controller.ExibirUsers)
routes.get("/Users/buscar",midd.validarEmail,controller.buscarUser)
routes.get("/logins",controller.exibirLogin)
routes.get("/login/buscar",controller.buscarLogin)
routes.get("/buscar/ponto",controller.registroPonto)

export default routes