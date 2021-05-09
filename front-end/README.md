# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8000](http://localhost:3000) to view it in the browser.

Front End -> Port 8000
1. React JS
   
2. Add button 
   
   a. To add the card - Disable until the cardnumber is verified as per luhn algorithm.
   
   b. Balance will appear as £0 for every new Card.
   
3. Grid - This will show all the available cards in the database, and as soon as any new card is added it will be visible in the grid.
   
   a. If limit / Balance is less than 0, then it will appear in red color.

Back End -> POrt 8080

1. Java 11

2. SpringBoot

3. Controller - 
   
   a. Two Endpoints - http://localhost:8080/getAll and http://localhost:8080/addCard

4. Domain object - Card

5. H2 database - in memory

6. Schema file - contains the metadata for h2 Database.

7. Post Payload (Add Card)

   Post -> http://localhost:8080/addCard
   {
   "name": "prachi",
   "cardNumber": "1111 2222 3333 4444",
   "balance": 50,
   "limit": 10
   }
   
Get -> http://localhost:8080/getAll