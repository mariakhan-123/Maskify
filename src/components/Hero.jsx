// Hero.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Hero.css';

export default function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/input-image');
  };

  return (
    <section className="hero">
      <h1>
        <span className="bold">Mask</span><br />
        <span className="bold">Detection AI</span>
      </h1>
      <p>
        Maskify uses advanced AI detection to instantly identify if a person is wearing a mask,
        ensuring real-time safety, compliance, and peace of mind in any public or private space.
      </p>
      <button className="get-started" onClick={handleGetStarted}>Get Started</button>
    </section>
  );
}
