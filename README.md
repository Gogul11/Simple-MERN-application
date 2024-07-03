#SIMPLE MERN APPLICATION FOR MONITERING DATABASE

This is an simple MERN stack application that gets the data from the backend server and displays it 
and it also adds the data to the server.

**FRONTEND :**
  
  -The default "/" route displays two links that routes for viewing and adding data.
  
  -These links are handled by "react-router-dom". The react-router-dom is used to maintain the web page as SPA.
  
  -Axios is used for handling responses from the backend server.
  

**BACKEND :**

  -The default route is "/" and the response is a simple message
  
  -The "/data" route returns response of JSON data that contains the user data from the database
  
  -The "/data/add" route is POST method that gets the data from the frontend form and adds it to the database
  
  -The database model contains two fields namely 'name' and 'email'

Here, I used Mongodb atlas for managing data.
