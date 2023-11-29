const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const { matchedData } = require("express-validator");
const bcrypt = require ("bcrypt");
const jsonwebtoken = require("jsonwebtoken");

async function register(req,res){
    // matchedData estrae dal body solo quello che mi serve
     
    const sanitizedData = matchedData(req);

    // devo criptare la psw prima di salvarla nel db
    // salt = 10 -> n.volte che la psw viene cryptata
    // salt = string una chiave che va salvata nell .env
    sanitizedData.password = await bcrypt.hash(sanitizedData.password,10)
    
    // creo lo user con i dati validi scartando quelli non previsti
    const user = await prisma.user.create({
        data:{
            ...sanitizedData
        },
        select:{
            id:true,
            name: true,
            email: true,
            role: true
        }
        
    });

    // generto il token jwt
    // sign firma i dati con il jwtsecret dell'.env
   const token = jsonwebtoken.sign(user, process.env.JWT_SECRET, {
    expiresIn: "1h",
    });

res.send({user,token})
} 


async function login(req,res){
res.send('utente loggato')
}


module.exports={
    register,
    login

}