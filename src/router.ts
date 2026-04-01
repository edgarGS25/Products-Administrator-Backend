import { Router } from "express"
import { createProduct, deleteProduct, getProductByID, getProducts, updateAvailability, updateProduct } from "./handlers/product"
import { body, param} from "express-validator"
import { handleInputErrors } from "./middleware"

const router = Router()
/**
 * @swagger 
 * components:
 *      schemas: 
 *          Product:
 *              type: object
 *              properties: 
 *                  id: 
 *                      type: integer
 *                      description: The Product ID
 *                      example: 1
 *                  name: 
 *                      type: string
 *                      description: The Product name
 *                      example: Monitor 32 pulgadas
 *                  price:
 *                      type: number
 *                      description: The Product price
 *                      example: 300
 *                  availability:
 *                      type: boolean
 *                      description: The Product availability
 *                      example: true
 */

/**
 * @swagger
 * /api/products:
 *      get:
 *          summary: Get a list of products
 *          tags: 
 *               - Products 
 *          description: Return a list of products
 *          responses: 
 *                200:    
 *                   description: Succesfull response   
 *                   content: 
 *                      application/json:
 *                          schema:   
 *                                type: array
 *                                items:
 *                                      $ref: "#/components/schemas/Product"
 */
router.get("/", getProducts)

/**
 * @swagger
 * /api/products/{id}:
 *      get:
 *          summary: Get a product by ID
 *          tags:
 *              - Products
 *          description: Return a product based on its unique ID
 *          parameters:
 *            - in: path
 *              name: id
 *              description: The ID of product to retrieve
 *              required: true
 *              schema:
 *                  type: integer
 *          responses: 
 *              200:
 *                  description: Succesful response
 *                  content: 
 *                      application/json:
 *                          schema: 
 *                              $ref: "#/components/schemas/Product"
 *              400:
 *                  description: Bad request - Invalid ID
 *              404:
 *                  description: Not found product
 */

router.get("/:id", 
    param("id").isInt().withMessage("ID no válido"),
    handleInputErrors,
    getProductByID
)

/**
 * @swagger
 * /api/products:
 *      post: 
 *          summary: Creates a new product
 *          tags:
 *              - Products
 *          description: Returns a new record in the database
 *          requestBody: 
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name: 
 *                                  type: string
 *                                  example: "Teclado Gamer"
 *                              price: 
 *                                  type: number
 *                                  example: 200
 *          responses: 
 *                  201:
 *                      description: Succesfull response
 *                      content: 
 *                          application/json:
 *                              schema: 
 *                                  $ref: "#/components/schemas/Product"
 *                  400:
 *                      description: Bad request - Invalid input data                      
 */

router.post("/", 
    body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
    body("price")
        .isNumeric().withMessage("Valor no válido")
        .notEmpty().withMessage("El precio es obligatorio")
        .custom(value => value > 0).withMessage("Precio no válido"),
    handleInputErrors,
    createProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *      put:
 *          summary: Updates a product with user input
 *          tags:
 *              - Products
 *          description: Returns the updated product
 *          parameters: 
 *              - in: path
 *                name: id
 *                description: The ID of product to retrieve
 *                required: true
 *                schema:
 *                  type: integer
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              name: 
 *                                  type: string
 *                                  example: "Teclado Gamer"
 *                              price: 
 *                                  type: number
 *                                  example: 200
 *                              availability: 
 *                                  type: boolean
 *                                  example: true
 *          responses:
 *                  200:
 *                      description: Succesfull response
 *                      content: 
 *                          application/json:
 *                              schema: 
 *                                  $ref: "#/components/schemas/Product"
 *                  400:
 *                     description: Bad request - Invalid ID or Invalid input data
 *                  404:
 *                     description: Product not found
 */

router.put("/:id", 
    param("id").isInt().withMessage("ID no válido"),
    body("name").notEmpty().withMessage("El nombre del producto es obligatorio"),
    body("price")
        .isNumeric().withMessage("Valor no válido")
        .notEmpty().withMessage("El precio es obligatorio")
        .custom(value => value > 0).withMessage("Precio no válido"),
    body("availability").isBoolean().withMessage("Valor incorrecto"),
    handleInputErrors,
    updateProduct
)

/**
 * @swagger
 * /api/products/{id}:
 *      patch:
 *          summary: Update product availability
 *          tags: 
 *              - Products
 *          description: Returns the updated availability
 *          parameters: 
 *              - in: path
 *                name: id
 *                description: The ID of product to retrieve
 *                required: true
 *                schema:
 *                  type: integer
 *          responses:
 *                  200:
 *                      description: Succesfull response
 *                      content: 
 *                          application/json:
 *                              schema: 
 *                                  $ref: "#/components/schemas/Product"
 *                  400:
 *                     description: Bad request - Invalid ID 
 *                  404:
 *                     description: Product not found
 */

router.patch("/:id", 
    param("id").isInt().withMessage("ID no válido"),
    handleInputErrors,
    updateAvailability
)

/**
 * @swagger
 * /api/products/{id}:
 *      delete:
 *          summary: Delete a product by ID
 *          tags:
 *              - Products
 *          description: Returns a message that confirms a product has ben deleted
 *          parameters: 
 *              - in: path
 *                name: id
 *                description: The ID of product to delete
 *                required: true
 *                schema:
 *                  type: integer
 *          responses:
 *                  200:
 *                      description: Succesfull response
 *                      content: 
 *                          application/json:
 *                              schema: 
 *                                  type: object
 *                                  properties:
 *                                      data: 
 *                                          type: string
 *                                          example: Producto eliminado
 *                  400:
 *                     description: Bad request - Invalid ID 
 *                  404:
 *                     description: Product not found
 *          
 */

router.delete("/:id", 
    param("id").isInt().withMessage("ID no válido"),
    handleInputErrors,
    deleteProduct
)

export default router
