# Beespoke_Backend_task

## Description

This is a `Nodejs ` project that provides APIs for data logging , product search and i used MongoDB to store data.

## Working Features

-  User profile create 
- Product search

## Installation

1. Clone the repo
2. `cd Beespoke_Backend_task`
3. `npm install`
4. Create a `.env` file in the root directory and add the following environment variables
```
//SERVER_PORT

PORT = 3000
MONGO_URL = mongodb+srv://<username>:<password>@cluster0.drr5i1i.mongodb.net/?retryWrites=true&w=majority
```
5. `npm run dev` to start the server in development mode

## API Endpoints

### Method :

1) POST

2) GET

### Endpoint :

1) `/api/user-profile`

2) `/product/product-search?keyword=LOUIS MONARCH`


### Description:
1) User profile created

2) Product search with keywords

### Payload :

1) `customerName,username,password,gender,preferredCategory`

2)  `keyword, price_min, price_max`

### Response :

1) `"message": "User profile created successfully"` || `"error": "Username already exists"`

2) `After the key word search, price range filter is applied and then top 10 products will be returned based on rank`