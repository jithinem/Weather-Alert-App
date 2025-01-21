# Weather App

## Overview
This application leverages **MongoDB** to manage city data, alerts, and weather information. It seeds certain city names into the database upon startup to ensure smooth functionality. 

### Collections:
- **`city`**: Stores city details.
- **`alert`**: Stores weather alerts.
- **`weather`**: Stores weather information.

### Setup
1. Clone the repository.
2. Install dependencies:
   npm install
   npm start
   The app is initialized from server.js
   The cron job is set to run every 10 minutes



## api list
-----------
### To create a city
-----------------
POST - http://localhost:3000/api/cities
body - {
    "city":"kozhikode"
}

### To delete a city
---------------
DELETE - http://localhost:3000/api/cities/{mongodb id of the city}

### To fetch weather details saved in database
-----------------------------------------
GET - http://localhost:3000/api/weather?page=1&limit=10

### To fetch weather details saved in database
------------------------------------------
GET - http://localhost:3000/api/alerts?page=1&limit=10

### To fetch live weather details
-----------------------------
http://localhost:3000/api/weather/kozhikode