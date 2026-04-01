import express from "express"
import colors from "colors"
import morgan from "morgan"
import cors, {CorsOptions} from "cors"
import swaggerUi from "swagger-ui-express"
import swaggerSpec, {swaggerUIOptions} from "./config/swagger"
import router from "./router"
import db from "./config/db"

// Connect to database
export async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        // console.log(colors.bgGreen.bold.white("The connection to db has been successful"))
    } catch (error) {
        // console.log(error)
        console.log(colors.bgRed.bold("There is an error to connect to the db"))
    }
}

connectDB()

// Instancia de express
const server = express()

//Allow connections
const corsOptions : CorsOptions= {
    origin: function(origin, callback){
        if(origin === process.env.FRONTEND_URL){
            callback(null, true)
        } else {
            callback(new Error("CORS Error"))
        }
    }
}
server.use(cors(corsOptions))

// Leer datos de formularios
server.use(express.json())

server.use(morgan("dev"))

server.use("/api/products", router)

// Docs
server.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUIOptions))

export default server

