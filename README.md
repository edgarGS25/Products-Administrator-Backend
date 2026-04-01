# REST API Node Server

A RESTful API built with Express.js and TypeScript for managing products. This server provides CRUD operations for product management with PostgreSQL database integration, input validation, and comprehensive API documentation.

## Features

- **CRUD Operations**: Create, Read, Update, Delete products
- **Input Validation**: Using express-validator for robust data validation
- **Database Integration**: PostgreSQL with Sequelize ORM
- **API Documentation**: Swagger/OpenAPI documentation at `/docs`
- **CORS Support**: Configured for frontend integration
- **Logging**: Morgan middleware for request logging
- **Testing**: Jest test suite with coverage reports
- **TypeScript**: Full TypeScript support for type safety

## Tech Stack

- **Backend**: Node.js, Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Sequelize
- **Validation**: express-validator
- **Documentation**: Swagger/OpenAPI
- **Testing**: Jest, Supertest
- **Development**: Nodemon, ts-node

## Prerequisites

- Node.js (v16 or higher)
- PostgreSQL database
- npm or yarn

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following variables:
   ```
   DATABASE_URL
   FRONTEND_URL
   PORT
   ```

4. Ensure your PostgreSQL database is running and accessible.

## Usage

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The server will start on `http://localhost:4000` (or the port specified in your `.env` file).

### Production

1. Build the TypeScript code:
   ```bash
   npm run build
   ```

## API Endpoints

The API provides the following endpoints for product management:

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a product by ID
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `PATCH /api/products/:id` - Update product availability
- `DELETE /api/products/:id` - Delete a product

<!-- ### API Documentation

Access the interactive API documentation at:
```
(https://products-administrator-backend.onrender.com/docs/)
``` -->

## Testing

Run the test suite:
```bash
npm test
```

Run tests with coverage:
```bash
npm run test:coverage
```

## Project Structure

```
src/
├── config/
│   ├── db.ts          # Database configuration
│   └── swagger.ts     # Swagger documentation setup
├── data/
│   └── index.ts       # Data initialization/clearing
├── handlers/
│   ├── product.ts     # Product route handlers
│   └── __test__/
│       └── product.test.ts
├── middleware/
│   └── index.ts       # Custom middleware (input validation)
├── models/
│   └── Product.model.ts # Sequelize product model
├── __tests__/
│   └── server.test.ts # Server integration tests
├── index.ts           # Application entry point
├── router.ts          # API routes configuration
└── server.ts          # Express server setup
```

## Environment Variables

- `DATABASE_URL`: PostgreSQL connection string
- `FRONTEND_URL`: Frontend application URL for CORS
- `PORT`: Server port (default: 4000)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [package.json](package.json) file for details.

## Author

Edgar Garcia