require("dotenv").config();
const app = require("./config/server");
const db = require("./config/database");

db.$connect().then(() => {
    app.listen(process.env.APP_PORT, () => {
        console.log(`server started at http://localhost:${process.env.APP_PORT}`);
    });
}).catch((err) => console.error(error));
