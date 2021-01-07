// Starting point of server application

// Basic imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// importing router
import blogRoute from './routes/blogRoute.js';

// initializing the webapp
const app = express();

// routes reached by going to localhost:5000/
app.use('/', homeRoute);
app.use('/blog', blogRoute);

// general setup to bodyparser so that requests can be properly sent
// Setting limit due to image uploading
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// enable cross origin requests
app.use(cors());

// MongoDB Database connection constant
const CONNECTION_URL = 'mongodb+srv://KwanYoon:KwanYoon123@cluster0.0qocx.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Heroku port constant
const PORT = process.env.PORT || 5000;

// Connecting to MongoDB Database (useNewUrlParser and useUnifiedTopology are not required, but will remove warnings)
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`server running on port ${PORT}`)))
    .catch((error) => console.log(error));

// Removes warnings
mongoose.set('useFindAndModify', false);