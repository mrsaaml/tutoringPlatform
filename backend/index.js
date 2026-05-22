import 'dotenv/config';
import express from 'express';
import cors from 'cors';   
import questionsRouter from './routes/questions.js';
import lmsRouter from './routes/lms.js';
import authRouter from './routes/auth.js';

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());

app.use('/api/questions', questionsRouter);
app.use('/api/lms',       lmsRouter);
app.use('/api/auth', authRouter);

app.get('/health', (_, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
