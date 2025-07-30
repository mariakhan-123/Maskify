import React from 'react';
import './HowItWorks.css';


export default function HowItWorks() {
  const steps = [
    {
      title: 'Step 1: Choose Input',
      description:
        'Select an image from your device or turn on your webcam to capture a real-time photo.',
    },
    {
      title: 'Step 2: AI Model Analyzes',
      description:
        'Our AI model processes the image using deep learning to detect whether a mask is worn or not.',
    },
    {
      title: 'Step 3: View Results',
      description:
        'The result appears instantly, showing the prediction along with a confidence score.',
    },
  ];

  return (
    <div className="how-it-works-wrapper">
      <h2 className="how-it-works-title">How It Works</h2>
      <div className="how-it-works-grid">
        {steps.map((step, index) => (
          <div key={index} className="how-it-works-card">
            <h3 className="card-title">{step.title}</h3>
            <p className="card-description">{step.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
