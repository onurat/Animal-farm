const express = require('express');
const { Pool } = require('pg');

const app = express();
const port = process.env.PORT || 5000;


const pool = new Pool({
  connectionString: 'postgres://fvjsfzhl:TmP6jGcrNCVgN5Nh6hhJOjYvWt87RItO@peanut.db.elephantsql.com/fvjsfzhl',
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.post('/api/bookings', async (req, res) => {
    const { name, phone, email, selectedDate } = req.body;
  
    try {
      const client = await pool.connect();
      await client.query('INSERT INTO bookings (name, phone, email, selected_date) VALUES ($1, $2, $3, $4)', [
        name,
        phone,
        email,
        selectedDate,
      ]);
      client.release();
  
      res.status(201).json({ message: 'Booking created successfully' });
    } catch (error) {
      console.error('Error creating booking:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });