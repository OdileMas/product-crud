# Product CRUD App

This repository contains a full-stack product CRUD application with:

- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React

## Features

- User authentication
- Full CRUD operations for products
- Responsive React UI

## Installation

1. Clone the repo: `git clone https://github.com/OdileMas/product-crud.git`
2. Install backend dependencies: `cd product-backend && npm install`
3. Install frontend dependencies: `cd ../ && npm install`
4. Start backend: `npm run dev` (in backend folder)
5. Start frontend: `npm start` (in frontend folder)
Save and close Notepad.

Step 4: Stage and commit frontend + README
powershell
Copy code
git add .
git commit -m "Add frontend React app and README"
Step 5: Pull remote changes first (if any)
powershell
Copy code
git pull origin master --rebase

Step 6: Push to GitHub

git push -u origin master

# Product CRUD Application

## Project Overview

This repository contains a full-stack web application for managing products.  
The application allows users to "create, read, update, and delete (CRUD)" products using a React frontend and a Node.js/Express backend connected to MongoDB. 
For the users to edi or delete will be given a token to do so in order to avoid the unauthorised users to do so. using postman to test all those crud operation
we use get to read only, post to create the new user or product as we have 2 database tables which are users and products, the put is used to update the existing user or product and the delete is to delete either users or product.


## Features

- User-friendly React frontend with responsive design(
login and signup form, dashboard with create product button, product creation form and the product boxes in the product list page)
- Backend API with Node.js and Express(register,signup)
- MongoDB database integration for persistent storage
- Full CRUD functionality for product management
- Form validation and error handling
- Project structured with best practices for scalability


## Technologies Used

- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Version Control**: Git & GitHub

---

## Installation

1. **Clone the repository:**

git clone https://github.com/OdileMas/product-crud-app.git
cd product-crud-app
Install backend dependencies:


cd product-backend
npm install
Install frontend dependencies:


cd ../product-frontend/sample
npm install
Running the Application
Start the backend server:


cd product-backend
npm run dev
Start the frontend server:
cd ../product-frontend/sample
npm start

Project Structure

sample/
├─ product-backend/       # Backend code (Express API, MongoDB connection)
├─ product-frontend/      # React frontend application
│  └─ sample/             # Frontend source files (src, public)
├─ README.md              # Project documentation

Contact
For any questions, contact: MASENGESHO Odile – masengeshoodile@gmail.com
