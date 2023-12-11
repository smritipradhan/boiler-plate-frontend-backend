import app from "./app.js";
import { config } from "dotenv";

config({ path: "./config.env" });

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening at Port ${PORT}`);
});
