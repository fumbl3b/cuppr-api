# CuppR API

![img](https://i.imgur.com/da1ub8X.png)

This is the backend for handling data for the [CuppR app](https://github.com/fumbl3b/cuppr-client).  Try the live app [here](https://cuppr-client.vercel.app/)

## Summary

A server backend to communicate with a PostgreSQL DB for storing and posting coffee reviews.  Easy to configure, and powerful.  Enjoy!

## Endpoint Descriptions

There are two endpoints in use here.

1. 'GET /reviews' - which returns the full array of coffee reviews from the table "coffee_review"
2. 'POST /reviews' - takes a review from the client and adds it to the "coffee_review" table.  The review must be formatted JSON correctly as follows: 
{ display_name, coffee_name, coffee_origin, process_method, roaster_name, body }

## Technology

This API utilizes Node.js, Express.js, knex, and handles testing endpoints with Mocha and Chai.
