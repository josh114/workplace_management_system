const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const app = require('./app');

const db = process.env.DATABASE;

mongoose
  .connect(db)
  .then(() => console.log('DB connected successfully'))
  .catch((err) => {
    throw err?.message;
  });
mongoose.set('strictQuery', false);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
