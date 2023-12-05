const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Routes
const userRoutes = require('./routes/user.routes'); 

const app = express();
const PORT = process.env.PORT || 7777;
const URL = '';

app.use(bodyParser.json());
app.use(cors());

// Connect to DB
mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then((res) => console.log('Connected to MongoDb'))
.catch((err) => console.log(`DB connection error: ${err}`));

// Connect routes
app.use('/api/users', userRoutes); 

// Start server 
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});