# back-end

Login/Register
---
| Methods        | Endpoint           | Returns  |  Parameters
| ------------- |:-------------:| -----:|  -----:|
| POST      | /register  | 201 w/ success message |  username, password |
| POST      | /login   | 200 w/ welcome message |  username, password |


Life-Hack Guides
---
-User must be logged in to reach these endpoints (auth token in header)
-User can get, delete and update guides.
---

| Methods        | Endpoint           | Returns  |  Parameters
| ------------- |:-------------:| -----:|  -----:|
| GET      | /guides | 200 returns all guides |  none |
| GET      | /guides/:id | 200 returns specific guide |  none |
| GET      | /user/:id/guides | 200 returns all guides for a specified user |  none |
| POST      | /guides | 200 returns newly created guide |  description, userID |
| DELETE      | /guides/:id | 200 , returns nothing |  none  |
| PUT      | /guides/:id | 200 , returns nothing |  description  |