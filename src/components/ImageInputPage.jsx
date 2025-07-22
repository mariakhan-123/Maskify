import React, { useState } from 'react';
import UploadImage from './UploadImage';
import WebcamScanner from './WebcamScanner';
import './ImageInputPage.css';
import { FaCamera, FaUpload } from 'react-icons/fa';

export default function ImageInputPage() {
  const [activeTab, setActiveTab] = useState(null);

  return (
    <div className="image-input-page">
      <div className="icon-bar">
        <button
          className={`tab-button ${activeTab === 'upload' ? 'active' : ''}`}
          onClick={() => setActiveTab('upload')}
        >
          <FaUpload size={24} />
          <span>Upload</span>
        </button>
        <button
          className={`tab-button ${activeTab === 'webcam' ? 'active' : ''}`}
          onClick={() => setActiveTab('webcam')}
        >
          <FaCamera size={24} />
          <span>Webcam</span>
        </button>
      </div>

     <div className="content-area">
  <div className="input-box">
    {activeTab === 'upload' && <UploadImage />}
    {activeTab === 'webcam' && <WebcamScanner />}
    {!activeTab && <p className="placeholder-text">Select an option to begin</p>}
  </div>
</div>

    </div>
  );
}
