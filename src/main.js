import e from "express"
import cliente_router from "./routers/cliente_router.js"
import veiculo_router from "./routers/veiculo_router.js"
import "dotenv/config"
import "./db.js"

const app = e()

app.use(e.json())

app.use("/cliente", cliente_router)
app.use("/veiculo", veiculo_router)

app.listen(process.env.API_PORT, () => {
    console.log("Servidor rodando!")
})