const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

//environment variables in .env file.
require('dotenv').config();

//create the express server
const app = express();
const port = process.env.PORT || 5000;

//cors's middleware
app.use(cors());
//allow parsing json
app.use(express.json());

//database URI
//const uri = process.env.ATLAS_URI;
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
// );
const uri = 'mongodb://localhost/testdb'
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

// const exercisesRouter = require('./routes/exercises');
// const usersRouter = require('./routes/users');
//
// app.use('/exercises', exercisesRouter);
// app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
