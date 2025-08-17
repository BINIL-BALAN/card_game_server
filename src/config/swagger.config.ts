// src/config/swagger.ts
import swaggerJSDoc from "swagger-jsdoc";
import {HOST, PORT} from '@config/index';
const swaggerOptions: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0", // OpenAPI version
    info: {
      title: "Card Game",
      version: "1.0.0",
      description: "Card game server API documentation",
    },
    servers: [
      {
        url: `http://${HOST}:${PORT}/app`, // Server URL
        description: "Development server",
      },
    ],
  },
  // Paths to files with documentation
  apis: ["../routes/*.js","../controllers/*.js"], 
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
export default swaggerSpec;
