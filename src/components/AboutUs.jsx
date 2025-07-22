import React from 'react';
import './AboutUs.css';

const sections = [
  {
    
    title: 'Stay Safe with Smart AI',
    content: `In a world where health and safety matter most, Maskify uses cutting-edge AI to ensure real-time mask compliance.`
  },
  {
   
    title: 'AI Changing the Game',
    content: `Manual monitoring is outdated. Maskify brings fast, smart, automated detection to your fingertips.`
  },
  {
    
    title: 'Why Choose Maskify?',
    content: `Maskify delivers instant alerts, accurate tracking, and seamless integration across environments.`
  },
  {
   
    title: 'Top Benefits',
    content: (
      <ul>
        <li>Real-Time Alerts</li>
        <li>Accurate Detection</li>
        <li>Easy Integration</li>
        <li>Non-intrusive Monitoring</li>
      </ul>
    )
  },
  {
   
    title: 'Industries Benefiting',
    content: (
      <ul>
        <li>Hospitals & Clinics</li>
        <li>Schools & Universities</li>
        <li>Retail Chains</li>
        <li>Airports & Stations</li>
        <li>Public Buildings</li>
      </ul>
    )
  },
  {
    
    title: 'Is Maskify Secure?',
    content: `Absolutely. Maskify is compliant with top data privacy standards. No video storage — only detection data.`
  },
  {
    
    title: 'Maskify’s Thought',
    content: `Let AI do the monitoring while you focus on what matters. Smart, simple, and safe — that’s Maskify.`
  }
];

const AboutUs = () => {
  return (
   <div class="about-container">
  <h1>About Our Mask Detection AI</h1>

  <div class="about-section">
    <div class="icon">🧠</div>
    <div class="about-text">
      <h2>What It Does</h2>
      <p>
        Our AI-based system uses image recognition to detect whether a person is wearing a mask or not. It leverages a trained Teachable Machine model to predict mask status with high accuracy.
      </p>
    </div>
  </div>

  <div class="about-section">
    <div class="icon">⚙️</div>
    <div class="about-text">
      <h2>How It Works</h2>
      <p>
        The system uses Teachable Machine's pre-trained model. Once you upload an image, the model analyzes it and returns a prediction on whether the person is wearing a mask or not, displaying the result with a percentage confidence.
      </p>
    </div>
  </div>

  <div class="about-section combined-benefits">
    <div class="benefit-block">
      <h2>Industry Benefit</h2>
      <p>
        Our AI-powered model helps organizations monitor mask usage in real time, ensuring compliance and safety within industrial environments.
      </p>
    </div>

    <div class="benefit-block">
      <h2>Top Benefit</h2>
      <p>
        Highly accurate detection and easy deployment make our solution ideal for businesses aiming to maintain a secure environment effortlessly.
      </p>
    </div>
  </div>
</div>

  );
};

export default AboutUs;
