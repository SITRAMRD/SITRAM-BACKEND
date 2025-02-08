const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "SITRAMRD API",
            version: "0.0.1",
            description: "API para la aplicación de SITRAMRD.",
            contact: {
                name: "Daviel Sanchez",
            },
        },
        servers: [{
                url: "http://localhost:3001",
                description: "Local host"
            },
            {
                url: "https://xerothermic-marnie-davieldev-03f05cd9.koyeb.app",
                description: "API desplegada"
            }
        ]
    },
    apis: ["./routes/*.js", "./index.js"]
};

const specs = swaggerJsdoc(options);
module.exports = specs;