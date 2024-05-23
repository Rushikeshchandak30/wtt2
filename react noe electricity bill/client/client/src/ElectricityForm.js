import React, { useState } from 'react';
import axios from 'axios';

const ElectricityForm = () => {
  const [units, setUnits] = useState('');
  const [rate, setRate] = useState('');
  const [total, setTotal] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/calculate', {
        units,
        rate,
      });
      setTotal(response.data.total);
    } catch (error) {
      console.error('Error calculating electricity bill', error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Electricity Bill Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Units (kWh): </label>
          <input
            type="number"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Rate ($/kWh): </label>
          <input
            type="number"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            required
          />
        </div>
        <button type="submit">Calculate</button>
      </form>
      {total !== null && (
        <div>
          <h3>Total Bill: ${total}</h3>
        </div>
      )}
    </div>
  );
};

export default ElectricityForm;
