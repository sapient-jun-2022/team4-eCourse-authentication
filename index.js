import express from "express";
import bodyParser from "body-parser";
import routes from "./src/routes/auth-route";
import mongoose from "mongoose";

const app = express();
const PORT = 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sap_db', {useNewUrlParser: true})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/json' }));

routes(app);

app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);
})