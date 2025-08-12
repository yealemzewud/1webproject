const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 3000;

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'habesha_store',
  password: 'your_password',
  port: 5432,
});

app.use(express.json());
app.use(express.static('public')); // for your HTML/CSS/JS files

// Get products
app.get('/api/products', async (req, res) => {
  const result = await pool.query('SELECT * FROM products');
  res.json(result.rows);
});

// Add to cart
app.post('/api/cart', async (req, res) => {
  const { product_id, quantity, session_id } = req.body;
  await pool.query(
    'INSERT INTO cart_items (product_id, quantity, session_id) VALUES ($1, $2, $3)',
    [product_id, quantity, session_id]
  );
  res.json({ message: 'Item added to cart' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
