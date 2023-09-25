const express = require("express");
const authRouter = require("./router/authRouter");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// 將 auth 系列路由移到 authRouter.js
app.use('/auth', authRouter);

app.listen(3000, () => {
  console.log(`[Server] running on http://localhost:3000.`);
});
