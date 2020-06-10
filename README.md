## Description

## The Task

The task was simple, All I had to do was show the list in a csv file and add data to the csv file

## How I did it

Firstly what i did was create a csv file with all the required data using `;` as a separator

Then I imported a package 

```bash
$ npm install nest-csv-parser
```

Which helped me alot to achieve the goal, since it made parsing of the csv file much easier.
Also the rule - "Use of any extra open-source library or package is allowed only via npm." made it guilt free process to do so.

Parsing the data was done using the library which gave the data as a json array which was then used to populate the table.

The use of async function and promise output was used to retrieve the data

Now for the inserting data; I chose the fastest route possible which is with the help of file system's append file. 

I created a simple form page with post method in the add controller, submitted the data to the post method of the same controller. I used jquery and jquery-validate scripts to validate the form data. I listed the post data to a string with `;` to separate the data in their respective order. All the string was then passed to the function to append to the csv file. A new function 

```bash
getalias(name:string):Promise<string>
```
was formed to create a unique identifier to the new set of data.This alias would be helpful to aid in future upgrades including update, delete and any other features. A simple datetime stamp could have been used as an identifier, however I thought a identifier which would be seo friendly if future need arises so was considered and the function was thus made.

All the tasks related to csv file was done on AppService class app.parser.ts

## Hosting

This project is also hosted on the Heroku[https://soragh-intro.herokuapp.com/] which is simple as only few lines of command was required and simple change to the port i.e. from 3000 to process.env.PORT ; and a Procfile was necessary to get it started 

```bash
heroku login
```
 was used to login to heroku app and the codes below were used to deploy to the heroku server

```bash
$ git add .
$ git commit -am "make it better"
$ git push heroku master
```

## Issues I faced

I was new to nestjs and its workflows, however as it is an extension of nodejs it was relatively easy to get started with. 


