import express, {Application, Router} from 'express'
import routerUsuario from '../routes/usuario'
import cors from 'cors'
import db from '../db/connection'
export class Server{
    private app: Application
    private port: string 
    private apiPaths={
        usuarios:'/api/usuarios'
    }
    constructor(){
        this.app=express()
        this.port=process.env.PORT || '8080'
        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    async dbConnection(){
        try {
            await db.authenticate()
            console.log("La base de datos esta online")
        } catch (error) {
            throw new Error(String(error))
        }
    }
    middlewares(){
        //Cors 
        this.app.use(cors())

        //Lectura de JSON 
        this.app.use(express.json())

        //Carpeta Publica
        this.app.use(express.static('public'))
    }



    routes(){
        this.app.use(this.apiPaths.usuarios,routerUsuario)
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log("Servidor corriendo en puerto" + this.port)
        })
    }
}