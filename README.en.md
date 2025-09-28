# 🛍️ Fake Store API CLI

This is a Node.js command-line interface (CLI) that allows you to perform CRUD operations on products using the [Fake Store API](https://fakestoreapi.com/).

## 📦 Requirements

- Node.js >= 18.x (to support `fetch`)
- Internet connection

## 🚀 Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```
2. Run the script with:

```bash
npm run start <METHOD> <ENDPOINT> [...args]
```
Or directly with Node.js:

```bash
node index.js <METHOD> <ENDPOINT> [...args]
```

## 📌 Available Commands
### 🔍 GET
Fetches all products or a single product by ID.

Syntax:
```bash
npm run start GET products
```
```bash
npm run start GET products/<productId>
```
Examples:
```bash
npm run start GET products
npm run start GET products/2
```
### ➕ POST
Creates a new product.

Syntax:
```bash
npm run start POST products <title> <price> <category>
```
Example:
```bash
npm run start POST products "Leather Shoes" 59.99 "fashion"
```
### 📝 PUT
Updates an existing product's title and price.

Syntax:
```bash
npm run start PUT products/<productId> <title> <price>
```
Example:
```bash
npm run start PUT products/2 "Updated Shoes" 69.99
```
### ❌ DELETE
Deletes a product by ID.

Syntax:
```bash
npm run start DELETE products/<productId>
```
Example:
```bash
npm run start DELETE products/2
```

## 📂 Project Structure
index.js — Main script that handles CLI input and communicates with the Fake Store API using fetch.

## ⚙️ Internal Logic
GET → Fetches product data.

POST → Adds a new product with a title, price, and category.

PUT → Updates a product’s title and price.

DELETE → Removes a product by its ID.

## ❗ Common Errors
Unrecognized command → Make sure to use GET, POST, PUT, or DELETE.

Invalid endpoint → Follow the exact formats shown in the examples.

Missing arguments → Ensure all required arguments are provided for POST and PUT.

## 📑 License
This project is licensed under the MIT License.

## 🙋 Author
Mónica Andrea Brito
