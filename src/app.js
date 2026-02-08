import express from "express";
import routes from "./routes/index.js";
import manipuladorDeErros from "./middlewares/manipuladorDeErros.js";

const app = express();
routes(app);

app.use(manipuladorDeErros)

export default app;