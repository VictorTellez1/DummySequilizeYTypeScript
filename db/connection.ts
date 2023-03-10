import { Sequelize } from "sequelize";


const db=new Sequelize('node','root','12345',{
    host:'localhost',
    dialect:'mysql',
    // logging:false Es para no ver los comando sql en consola, pero como si quiero verlos lo dejo
})

export default db;