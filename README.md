# PublicisSapient


Steps to run :
1. Start the backend server
   
   a. Go to Project Target folder, Run below cmd:
   java -jar creditCardProcessing-0.0.1-SNAPSHOT.jar
   
   b. This will start the backend server and create H2 DB table.
   
   H2 URL - http://localhost:8080/h2
   NOTE:  spring.datasource.url=jdbc:h2:file:c:/persistentData/data1
   
2. Start the front end by npm start.
   a. Go to front-end folder
   b. Run : npm start
   (This will start the React UI)


URL: [http://localhost:8000] to view it in the browser.


Tech Details:

Back End -> Port 8080

1. Java 8 and above

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



Front End -> Port 8000   (http://localhost:8000)
1. React JS

2. Add button

   a. To add the card - Disable until the cardnumber is verified as per luhn algorithm.

   b. Balance will appear as £0 for every new Card.

3. Grid - This will show all the available cards in the database, and as soon as any new card is added it will be visible in the grid.

   a. If limit / Balance is less than 0, then it will appear in red color.

