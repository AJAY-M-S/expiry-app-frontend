import React, { useState } from 'react';
import './styles.css';
import QRUploader from './components/QRUploader';
import Dashboard from './components/Dashboard';

function App() {
  const [refresh, setRefresh] = useState(false);
  const handleScanSuccess = () => setRefresh(!refresh);

  return (
    <div>
      <div className="header">
        <img src="/walmart-logo.png" alt="Walmart" height="40" />
        <h1>Walmart Inventory Manager</h1>
      </div>
       <QRUploader onScanSuccess={handleScanSuccess} />
      <Dashboard key={refresh} />
    </div>
  );
}

export default App;
