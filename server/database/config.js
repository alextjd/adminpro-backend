import mongoose from 'mongoose';

export const databaseConnection = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      serverSelectionTimeoutMS: 3000,
    });
    // eslint-disable-next-line no-console
    console.info('Database connection successful.');
  } catch (error) {
    throw new Error('Could not connect to the database.');
  }
};

export const su = 'su';
