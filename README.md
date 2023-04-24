## Bank of Flatiron
Welcome to the Bank of Flatiron, where you can trust us with all your financial data! Use the below gif as an example of how the app should function.

## demo

To view in VSCode, right click on the README.md file and select "Open Preview".

#React Bank Transactions Application
Welcome to the React Bank Transactions Application project! In this project, you will be building a React application that displays a list of your recent bank transactions, along with several other features. The purpose of this project is to test your ability to follow instructions and implement the required features.

## Getting Started
To get started with this project, please follow these instructions:

Clone this repository to your local machine using the git clone command.
Navigate to the root directory of the project in your terminal.
Install the necessary dependencies by running the command npm install.
Start the development server by running the command npm start.
Open your web browser and navigate to http://localhost:3000/ to view the application.
## To open backend server 
json-server -p 8001  db.json

Features
The following features are required for this project:

Display a list of recent bank transactions.
Allow users to filter transactions by date range.
Show a summary of the total income, total expense, and balance.
Allow users to add a new transaction.
You are free to implement these features however you see fit, but be sure to carefully read the instructions for each feature.

## Guidelines
Here are some guidelines to keep in mind as you work on this project:

Write clean, well-organized code.
Use best practices for React development.
Make the user interface (UI) easy to use and visually appealing.
Be sure to thoroughly test your code.
Additional Resources
If you need additional resources or help with React, you can refer to the official React documentation.
## Core Deliverables
As a user, I should be able to:

See a table of the transactions.
Fill out and submit the form to add a new transaction. This should add the new transaction to the table as well as post the new transaction to the backend API for persistence.
Filter transactions by typing into the search bar. Only transactions with a description matching the search term should be shown in the transactions table.
Endpoints for Core Deliverables
GET /transactions
Example Response:

[
  {
    "id": 1,
    "date": "2019-12-01",
    "description": "Paycheck from Bob's Burgers",
    "category": "Income",
    "amount": 1000
  },
  {
    "id": 2,
    "date": "2019-12-01",
    "description": "South by Southwest Quinoa Bowl at Fresh & Co",
    "category": "Food",
    "amount": -10.55
  }
]
POST /transactions
Required Headers:

{
  "Content-Type": "application/json"
}
Request Object:

{
  "date": "string",
  "description": "string",
  "category": "string",
  "amount": number
}
Example Response:

{
  "id": 1,
  "date": "2019-12-01",
  "description": "Paycheck from Bob's Burgers",
  "category": "Income",
  "amount": 1000
}
## Advanced Deliverables
These deliverables are not required to pass the code challenge, but if you have the extra time, or even after the code challenge, they are a great way to stretch your skills.

Note: If you are going to attempt these advanced deliverables, please be sure to have a working commit with all the Core Deliverables first!

As a user, I should be able to:

Sort transactions alphabetically by category or description.
Delete a transaction which will remove it from the table and delete it from the backend.
Endpoints for Advanced Deliverables
DELETE /transactions/:id
Example Response:

## Technologies Used
React
JavaScript
HTML
CSS
## Author
Kelvin Nyoike

Github: https://github.com/kelvinnyoike901
LinkedIn: https://www.linkedin.com/in/kelvin-nyoike-983b741a6/
