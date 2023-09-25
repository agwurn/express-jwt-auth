const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("./utils/users");

const app = express();

const JWT_SECRET_KEY = "yourSecretKey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (users.find((user) => user.username === username)) {
    res.status(400).json({ message: "用戶已存在" });
    return;
  }

  const newUser = {
    userId: users.length + 1,
    username,
    password,
  };

  users.push(newUser);

  console.log(`[新使用者註冊] ${username} ${password}`);
  console.log(users);
  res.status(201).json({ message: "註冊成功" });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user || user.password !== password) {
    res.status(401).json({ message: "帳戶不存在或密碼錯誤" });
    return;
  }

  const token = jwt.sign(
    { userId: user.id, username: user.username },
    JWT_SECRET_KEY,
    { expiresIn: "1h" }
  );

  console.log(`[使用者登入] ${username}`)
  res.json({message: "登入成功", token});
});

app.listen(3000, () => {
  console.log(`[Server] running on http://localhost:3000.`);
});
