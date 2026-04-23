# Login Page Microservice

A simple login microservice built with Node.js and Express.

## Features

- Static login page served from `/`
- Login API at `/api/login`
- Health endpoint at `/health`
- Demo credentials: `admin` / `password123`

## Setup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the service:

   ```bash
   npm start
   ```

3. Open the login page in a browser:

   ```
   http://localhost:3000
   ```

## Notes

This service uses in-memory demo credentials and is intended for development or prototyping only.
For production use, add a real user store, secure password hashing, and proper session or token management.
