# E-COMMERCE

A Front-End JavaScript application built with [React.js] , [Node.js] and [MongoDB] . 
eCommerce that allows you to send payment via Stripe.

## Features

- **User authentication** (JWT based)
- **RESTful API** with CRUD operations
- **Responsive design** with mobile-first approach
- **Database integration** with MongoDB/Mongoose
- **Payments integration** with Stripe

## Tech Stack

### Frontend
- React.js 18+
- React Router v6
- Axios for HTTP requests
- Styled Components (CSS-in-JS)
- Redux Toolkit (state management)
- Vite (build tool)

### Backend
- Node.js 16+
- Express.js
- MongoDB (with Mongoose ODM)
- JWT for authentication
- Bcrypt for password hashing
- DotEnv for loading environment variables from a .env file into process.env

## Prerequisites

Before running the project, ensure you have installed:
- Node.js (v16 or higher)
- npm (v8 or higher) or yarn
- MongoDB (local or Atlas connection string)

## Installation

1. Clone the repository:

bash   

git clone https://github.com/coccigabry/eCommerce.git   cd eCommerce
 
2. Install dependencies for both frontend and backend:

bash

Install backend dependencies from project root directory 

   cd server   npm install

Install frontend dependencies from project root directory 

   cd client   npm install   

3. Set up environment variables:

   Create `.env` files in both `server` and `client` directories based on the provided `.env.example` files.

4. Start the development servers:

bash

Start backend from project root directory 

   npm start

Start frontend from project root directory 

   npm run dev  

This will concurrently start both frontend and backend.

## Environment Variables

### Server (.env)
START_MONGODB=`url begin`

MONGODB_USERNAME=`username`

MONGODB_PASSWORD=`psw`

END_MONGODB=`querystrings`

JWT_SECRET=`secret key`

### Client (.env)
VITE_STRIPE_KEY=`secret key`

## Contributing

Pull requests are welcome! Please follow these steps:
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Gabriele Cocilovo - coccigab@gmail.com  
