
# CRUD with Prisma ORM

### Install dependencies
Install the dependencies project with the command:

```bash
npm i
```

### Set environment variables

copy the `.env.sample` file to `.env`

### Database migration
migrate the SQL file `database.sql` with the command :
```bash
npm run migrate
```

### Running

You can start the project with the command:

```bash
npm run dev
```

# Prisma setup

1. Install prisma dependency
```bash
npm i prisma
```

2. Setup prisma configuration for your database provider
```bash
npx prisma init --datasource-provider mysql
```
This creates a new prisma directory with your Prisma schema file and configures MySQL as your database.

3. Set the DATABASE_URL in the .env file to point to your existing database.
```env
DATABASE_URL="mysql://user:password@localhost:3306/dbname"
```

4. Pull your database for generate prisma schema corresponding to you db
```bash
npx prisma db pull
```

5. Install and generate prisma client
```bash
npm i @prisma/client
npx prisma generate
```
Important : You need to re-run the prisma generate command after every change that's made to your Prisma schema to update the generated Prisma Client code.

6. Setup prisma connection in your `config/database.js` file :
```js
const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient();

module.exports = prisma;
```

7. Etablish a connection with prisma in your entry point `app.js` : 
```js
require("dotenv").config();
const app = require("./config/server");
const db = require("./config/database");

db.$connect().then(() => {
    console.log("database successfully connected");
    app.listen(process.env.APP_PORT, () => {
        console.log(`server started at http://localhost:${process.env.APP_PORT}`);
    });
});
```

# Prisma CRUD

1. Create a `model.js` file for each modules (tracks, albums)

2. import your prisma connection from `config/database` into your models
```js
const db = require("../../config/database");
```

3. Define CRUD function in your models and exports them all
```js
const findAll = () => {}
const findOne = (filter) => {}
// filter params should be a object with the col we use for filter exemple : {id: 1}
const insertOne = (data) => {}
const updateOne = (filter) => {}
const deleteOne = (id) => {}

module.exports = {findAll, findOne, insertOne, updateOne, deleteOne}
```

4. Use your imported db setup for interact with your database
  - You can retrieve each table from db like following : 
  ```js
  db.tracks
  db.albums
  ```
  - And interact with your database using the predefined method from prisma :
  ```js
  db.tracks.create()
  db.tracks.findMany()
  db.tracks.findUnique()
  db.tracks.update()
  db.tracks.delete()
  ```
  documentation : https://www.prisma.io/docs/concepts/components/prisma-client/crud
