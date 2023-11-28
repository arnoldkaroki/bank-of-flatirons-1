**Bank of Flatiron App**
Welcome to the Bank of Flatiron App! It provides a user-friendly interface for managing your recent bank transactions.
You can view a table of your transactions, add new transactions, and perform search, sort, and delete operations on the data.
Getting Started
## Prerequisites ##
Make sure you have Node.js and npm installed on your machine.

## Installation ##
Clone the repository:

git clone https://github.com/your-username/bank-of-flatiron.git
cd bank-of-flatiron

Install dependencies:

npm install

Start the JSON Server for the local database:

npm install -g json-server
json-server --watch db.json --port 8001

Start the React application:

npm start

Open your browser and visit http://localhost:3000 to use the Bank of Flatiron App.
## Features ##

## 1. View Transactions: ##
The home page displays a table with all your recent bank transactions.
Each transaction includes details such as date, description, category, and amount.
## 2. Add a New Transaction:
Use the "Add a New Transaction" section to fill out a form and submit a new transaction.
The new transaction will be added to the table immediately, and it does not have to be persisted to the backend.
## 3. Filter Transactions:
Utilize the search bar to filter transactions by typing a search term.
Only transactions with descriptions matching the search term will be shown in the table.
## Bonus Features ##

## 1. Sort Transactions:
Click on the table headers to sort transactions alphabetically by date, description, category, or amount.
## 2. Delete Transactions:
Each transaction row includes a "Delete" button.
Clicking the "Delete" button will remove the transaction from the table.
## Technologies Used:
React
Axios
JSON Server

## Author:
Arnold Karoki
[Your Name]
