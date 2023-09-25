const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const users = require("./utils/users");

const app = express();

const JWT_SECRET_KEY = "yourSecretKey";

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (users.find((user) => user.username === username)) {
    return res.status(400).json({ message: "用戶已存在" });
  }

  // TODO: 將密碼加密
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ error: "伺服器在密碼加密時發生錯誤" });
    }

    const newUser = {
      userId: users.length + 1,
      username,
      password: hash,
    };
    users.push(newUser);

    console.log(`[新使用者註冊] ${username} ${password}`);
    console.log(users);
    res.status(201).json({ message: "註冊成功" });
  });
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return res.status(401).json({ message: "帳戶不存在或密碼錯誤" });
  }

  // TODO: 比對密碼
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ error: "密碼不正確" });
    }

    const token = jwt.sign(
      { userId: user.id, username: user.username },
      JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );

    console.log(`[使用者登入] ${username}`);
    res.json({ message: "登入成功", token });
  });
});

app.listen(3000, () => {
  console.log(`[Server] running on http://localhost:3000.`);
});
