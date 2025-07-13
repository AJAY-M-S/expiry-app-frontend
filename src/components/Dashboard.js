import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Dashboard() {
  const [products, setProducts] = useState([]);

  const loadProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  const deleteProduct = async (id) => {
    await axios.delete(`http://localhost:5000/api/products/${id}`);
    loadProducts();
  };

  const clearAll = async () => {
    await axios.delete(`http://localhost:5000/api/products`);
    loadProducts();
  };

  useEffect(() => {
    loadProducts();
  }, []);

const getExpiryStatus = (exp_date) => {
  const today = new Date();
  const exp = new Date(exp_date);
  const diff = (exp - today) / (1000 * 60 * 60 * 24);

  if (diff < 0) return "❌ Expired";
  else if (diff <= 1) return "⚠ Expiring Soon";
  else return "✅ Within Shelf Life";
};

  return (
    <div className="dashboard">
      <h2>Product Dashboard</h2>
      <button onClick={clearAll}>Clear All</button>
      <table>
        <thead>
          <tr>
            <th>Name</th><th>ID</th><th>MFG Date</th><th>EXP Date</th><th>Alert</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td>{p.product_name}</td>
              <td>{p.product_id}</td>
              <td>{p.mfg_date}</td>
              <td>{p.exp_date}</td>
              <td className="alert">{getExpiryStatus(p.exp_date)}</td>
              <td><button onClick={() => deleteProduct(p._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
