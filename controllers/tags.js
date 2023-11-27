const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient;


async function index(req, res){
  const tag = await prisma.tag.findMany();
  res.json(tag);
}

async function store(req, res) {
  const dataIngresso = req.body
  // Creo un nuovo post utilizzando i dati dalla richiesta
  const newTag = await prisma.tag.create({
    data: {
      name: dataIngresso.name
    }
  });

  
    // Ritorno il nuovo post come risposta JSON
    res.json(newTag);
  }

  
module.exports={
    index,
    store,
}