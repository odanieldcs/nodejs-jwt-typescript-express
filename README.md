# API NodeJS (Auth)

The API NodeJS with mock user for authentication using TypeScript, JWT, Express and Middlewares for validation.

# Installation

Just clone this repository, run `npm install` and after run `npm run dev`

# Routes:

## **Authentication**

`POST /login`

Return a JWT token after username and password valid.

**REQUEST**

```json
{
  "username": "admin",
  "password": "admin"
}
```

## **Customers**

`GET /customers`

Return a list of fake customers. Require Token JWT in Authorization:

## **Hello**

`GET /hello`

Return a message Hello World. :)
