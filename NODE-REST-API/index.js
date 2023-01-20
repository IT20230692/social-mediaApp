const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');

dotenv.config();

const PORT = 8800;

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB Connected successfully...');
  })
  .catch((err) => console.log('DB connection error...', err));

//middleware
app.use(express.json()); // use for body parser
app.use(helmet());
app.use(morgan('common'));

app.use('/api/users', userRoute);
app.use('/api/auth', authRoute);

app.listen(PORT, () => {
  console.log(`Backend sever is running... port ${PORT}`);
});
