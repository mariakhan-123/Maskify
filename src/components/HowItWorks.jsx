import React from 'react';
import './HowItWorks.css';

export default function HowItWorks() {
  return (
    <div className="how-it-works-box">
      <h3>How It Works</h3>
      <ol>
        <li>Select an image or use webcam.</li>
        <li>AI model analyzes the input.</li>
        <li>See the result with confidence score.</li>
      </ol>
    </div>
  );
}
