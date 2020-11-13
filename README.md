# back-end

Login/Register
---
| Methods        | Endpoint           | Returns  |  Parameters
| ------------- |------------|-----|  -----|
| POST      | /register  | 201 w/ success message |  username, password |
| POST      | /login   | 200 w/ welcome message |  username, password |


Guides
---
User must be logged in to reach these endpoints (auth token in header)

User can get, delete and update guides.


---

| Methods        | Endpoint           | Returns  |  Parameters
| ------------- |-------------| -----|  -----|
| GET      | /guides | 200 returns all guides |  none |
| GET      | /guides/:id | 200 returns specific guide |  none |
| GET      | /user/:id/guides | 200 returns all guides for a specified user |  none |
| POST      | /guides | 200 returns newly created guide |  description, userID |
| DELETE      | /guides/:id | 200 , returns nothing |  none  |
| PUT      | /guides/:id | 200 , returns nothing |  description  |


## Register

Make a POST request to `https://how-to-backend-lambda.herokuapp.com/register` with a JSON request containing a username and password:

```
{
	"username": "Test",
	"password": "1234"
}
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/fwg2iqv95ohd21vodmz4.jpg)

## Login

Make a POST request to `https://how-to-backend-lambda.herokuapp.com/login` with a JSON request containing a username and password:

```
{
	"username": "Test",
	"password": "1234"
}
```

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/9yhhilzhvoesxln80wpu.jpg)

## See Guides

Make a GET request to `https://how-to-backend-lambda.herokuapp.com/guides`

![Alt Text](https://dev-to-uploads.s3.amazonaws.com/i/5zc9bral3pa04xt8g4dq.jpg)
