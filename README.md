# Express.js auth with JWT

> I want to create personal notes using GitHub and utilize different branches to record various stages or new features. Additionally, I'd like to practice version control operations with Git simultaneously.

## 🚀 How to start
### Init dependencies
``` 
npm init
```
### Run server
``` 
nodemon app.js
```
### Trigger the API
use [postman](https://web.postman.co/workspace/My-Workspace~86b01eb1-7792-41e9-889c-4bec5a737661/request/25131724-4980e75d-5617-4017-a516-a7d7371bb142)

(post)
http://localhost:3000/submit
``` JavaScript
// req.body - raw - json
{
    "username": "admin",
    "password": "admin"
}
```

(post)
http://localhost:3000/login
``` JavaScript
// req.body - raw - json
{
    "username": "admin",
    "password": "admin"
}
```

---
@20230925, Agwurn Lu