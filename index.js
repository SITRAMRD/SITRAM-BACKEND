const express = require("express");
const dotenv = require('dotenv')
const app = express();

dotenv.config();
app.use(express.json());


app.get("/", (req, res) => {
    res.json({ mensaje: "¡Bienvenido a la API de SITRAMRD!" });
});


app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${process.env.PORT}`);
})