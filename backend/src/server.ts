import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { setupPuppeteer } from './puppeteer';

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// ヘルスチェックエンドポイント
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// DAMのスクレイピングエンドポイント
app.get('/api/dam/scores', async (req, res) => {
  try {
    const browser = await setupPuppeteer();
    // TODO: スクレイピングロジックの実装
    res.json({ message: 'Not implemented yet' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
}); 