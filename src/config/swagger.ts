import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: "3.1.0",
        tags:[
            {
                name: "Products",
                description: "API operations related to producs"
            }
        ],
        info: {
            title: "REST API Node.js / Express / TypeScript",
            version: "1.0.0",
            description: "API Docs for products"
        }
    },
    apis: ["./src/router.ts"]
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUIOptions : SwaggerUiOptions = {
    customCss: `
        .topbar-wrapper .link {
            content: url("https://www.svgrepo.com/show/354119/nodejs-icon.svg");
            height: 80px;
            width: auto;
        }
    `,
    customSiteTitle: "Documentation REST API"
}
export default swaggerSpec
export {swaggerUIOptions}