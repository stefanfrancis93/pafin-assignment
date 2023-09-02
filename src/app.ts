import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from './routes/user.routes';
import { PrismaClient } from '@prisma/client';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();

const app = express();
const port = process.env.SERVER_PORT ?? 3000;

app.use(bodyParser.json());

// User routes
app.use('/users', userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(jwt.sign({ userId: 1 }, "your_secret_key", { expiresIn: '1h' }));
});

// Close the Prisma Client when the application is done
const shutdown = async () => {
  await prisma.$disconnect();
  process.exit();
};

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
