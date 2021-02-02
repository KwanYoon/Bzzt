// Basic imports
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

// route imports
import postRoutes from './routes/postsRoutes.js';

// Initializing app
const app = express();

// parses incoming request bodies in a middleware before your handlers
//   available under req.body property
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

// allows requesting of data from other domains
app.use(cors());

// routes (suffix, route)
app.use("/posts", postRoutes);

// URL for the connection to the database on MongoDB
const CONNECTION_URL = 'mongodb+srv://KwanYoon:yoon8800@cluster0.hrvfa.mongodb.net/<dbname>?retryWrites=true&w=majority';

// Port to heroku (temporarily port 5000)
const PORT = process.env.PORT || 5000;

// Connect to database / port
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error));

// removes warnings
mongoose.set('useFindAndModify', false);