const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;
const slugify = require('slugify');
const {validationResult}= require('express-validator');

async function index(req, res){
const category = await prisma.category.findMany();
res.json(category)

}

async function store(req, res) {
       // Genero uno slug utilizzando la libreria slugify
       const slug = slugify(req.body.name, { lower: true, replacement: '-' });
  
       // Creo un nuovo post utilizzando i dati dalla richiesta
       const newCategory = await prisma.category.create({
         data: {
           name: req.body.name,
           slug: slug,
       
         },
        
       });
    // Ritorno il nuovo post come risposta JSON
    res.json(newCategory);
  }

module.exports={
    index,
    store,
}