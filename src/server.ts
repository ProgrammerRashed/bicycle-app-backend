import mongoose from 'mongoose';
import app from './app';
import config from './app/config';

async function server() {
  try {
    // mongoose connection
    await mongoose.connect(config.database_url as string);

    // application starting
    app.listen(config.port, () => {
      console.log(`Server is up and running on ${config.port}`);
    });
  } catch (err) {
    console.error(err);
  }
}

server();
