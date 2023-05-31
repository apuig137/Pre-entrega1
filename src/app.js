import express from "express";
import cartRouter from "./routes/cart.router.js";
import productsRouter from "./routes/products.router.js";

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended:true }))


app.get("/api/products/",productsRouter)

app.get("/api/carts/", cartRouter)

app.listen(8080, () => console.log("Servidor arriba en el puerto 8080"))