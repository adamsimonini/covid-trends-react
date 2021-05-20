# **COVIDTrends**

## User Story

<span style="color:green">AS A USER</span> of COVIDTrends

<span style="color:green">I WANT TO</span> see relevant and up-to-date COVID 19 statistics

<span style="color:green">SO THAT</span> I can be more informed when making decisions

<span style="color:green">SO THAT</span> I can change my behaviour around risk

## Running this app

1. Clone the app from github.

2. Seed database

- execute the SQL within the database folder, starting with the schemes and then seeding the db.
- start with the province seed, and then the health region seed
- you'll need to perform a bulk import command within MySQL Workbench for the FSA data set (see database folder > datasets)

3. Install dependancies
   Run "npm i" from the root directory
   Run "npm start" from the root directory

4. The app should automatically start at http://localhost:3000/

5. Visit http://localhost:3000/data and open the console to see the API returning data from the database

## **Tracking Success**

Based on the previous user story example, we could track our success by answering the following questions:

1. how many times the same user visits the page, and how frequently

2. how many of our users scroll through the entire card section of the app - a proxy for how relevant our data is to them

3. how many users stay on the page for > 5 seconds

4. did the user click our call to action (CTA)

## **Technology**

COVIDTrends currently uses a JavaScript library called D3 to pull data from CSV files and show it to the user. It also connects with MapBox to generate maps.

## **Path forward**

We are currently looking into webpack to make the code modular, increase readability, and introduce unit testing. We'll also investigate if webpack can handle i18n so that there is only a single HTML file for both languages.

### **COVIDTrends V3**
