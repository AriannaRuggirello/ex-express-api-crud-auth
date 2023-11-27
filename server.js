const express = require('express');
const dotenv = require('dotenv').config();
const app=express();
const port=3000;
const postsRouter = require("./routers/posts");
const categoriesRouter = require("./routers/categories");
const tagsRouter = require("./routers/tags");



app.use(express.json());


// registro le rotte per le pizze
app.use("/posts", postsRouter);
app.use("/categories", categoriesRouter);
app.use("/tags", tagsRouter);




app.listen(port,()=>{
    console.log(`app attiva su http://localhost:${port}`);
});
