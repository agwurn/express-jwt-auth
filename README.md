# Express.js auth with JWT

v3-authRouter
> better code & folder structure.

## Tech stack now:
- express.js 
    - Router 🆕
- jsonwebtoken
- bcrypt 


## 🚀 How to start
### Init dependencies
``` 
npm install
```
### Run server
``` 
nodemon app.js
```
### Trigger the API
use [postman](https://web.postman.co/workspace/My-Workspace~86b01eb1-7792-41e9-889c-4bec5a737661/request/25131724-4980e75d-5617-4017-a516-a7d7371bb142)

(post)
http://localhost:3000/auth/submit 🆕
``` JavaScript
// req.body - raw - json
{
    "username": "admin",
    "password": "admin"
}
```

(post)
http://localhost:3000/auth/login 🆕
``` JavaScript
// req.body - raw - json
{
    "username": "admin",
    "password": "admin"
}
```

---
@20230925, Agwurn Lu
