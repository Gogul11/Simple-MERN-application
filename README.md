# SIMPLE MERN APPLICATION FOR MONITERING DATABASE

This is an simple MERN stack application that *gets* the data from the backend server and *displays* it 
and it also *adds* the data to the server.

 ## **FRONTEND :**
  
  - The default "/" route displays two links that routes for viewing and adding data.
  
  - These links are handled by "react-router-dom". The react-router-dom is used to maintain the web page as SPA.
  
  - Axios is used for handling responses from the backend server.

       1. **App.jsx** is the main file that serves as the default homepage.
   
       2. **data.jsx** file is used to view the databases.
   
       3. **add.jsx** file is a form used to send data to backend.
  

## **BACKEND :**

  - The default route is "/" and the response is a simple message
  
  - The "/data" route returns response of JSON data that contains the user data from the database
  
  - The "/data/add" route is POST method that gets the data from the frontend form and adds it to the database
  
  - The database model contains two fields namely 'name' and 'email'

          
      1. **server.js** is the main file where requests are handled.
      
      2. **model.js** file contains the information about the database shema and model.
      
      3. **value.js** file contains the PORT number and connection string.

Here, I used [Mongodb atlas](https://www.mongodb.com/products/platform/atlas-database) for managing data.
