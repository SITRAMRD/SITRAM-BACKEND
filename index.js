const express = require("express");
const dotenv = require('dotenv')
const app = express();
const PORT = 3001

app.use(express.json());


app.get("/", (req, res) => {
    res.json({ mensaje: "¡Bienvenido a la API de SITRAMRD!" });
});


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
})