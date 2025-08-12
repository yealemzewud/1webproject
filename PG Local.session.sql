-- Create the database (you can do this in pgAdmin)
CREATE DATABASE habesha_store;

-- Switch to the database
\c habesha_store

-- Create table for products
CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price NUMERIC(10, 2),
  image_url TEXT,
  description TEXT
);

-- Create table for cart (optional for persistent user carts)
CREATE TABLE cart_items (
  id SERIAL PRIMARY KEY,
  product_id INTEGER REFERENCES products(id),
  quantity INTEGER,
  session_id TEXT -- to track users without login
);
