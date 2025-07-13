import React, { useRef } from 'react';
import jsQR from 'jsqr';
import axios from 'axios';

function QRUploader({ onScanSuccess }) {
  const fileInputRef = useRef();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (event) => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = image.width;
        canvas.height = image.height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const qrCode = jsQR(imageData.data, canvas.width, canvas.height);

        if (qrCode) {
          try {
            const jsonData = JSON.parse(qrCode.data);
            axios.post('http://localhost:5000/api/products/add', jsonData).then(() => {
              alert('✅ Product added successfully!');
              onScanSuccess();
            });
          } catch (err) {
            alert('❌ Invalid JSON in QR code.');
          }
        } else {
          alert('❌ No QR code detected in image.');
        }
      };
      image.src = event.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="dashboard">
      <h2>Upload QR Code Image</h2>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        style={{
          marginTop: '10px',
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '6px',
          cursor: 'pointer',
          backgroundColor: '#fff',
        }}
      />
    </div>
  );
}

export default QRUploader;
