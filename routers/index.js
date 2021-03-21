const bookRouter = require("./bookRouter");
const categoryRouter = require("./categoryRouter");
const authRouter = require("./authRouter");
const errorHandle = require('../middlewares/errorHandle');
const adminMiddleware = require('../middlewares/adminMiddleware');
const uploadRouter = require('./uploadRouter')

module.exports = (app) => {
  app.use("/api/books", bookRouter);
  app.use("/api/category", adminMiddleware.adminMiddleware ,categoryRouter);
  app.use("/api/auth", authRouter)
  app.use("api/upload", uploadRouter)
  //handle err response
  app.use(errorHandle)
};
