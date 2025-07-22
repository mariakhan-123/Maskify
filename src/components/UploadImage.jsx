import React, { useState, useRef } from 'react';
import * as tmImage from '@teachablemachine/image';
import './UploadImage.css';

const MODEL_URL = '/my_model/';

export default function UploadImage() {
  const [preview, setPreview] = useState(null);
  const [topPrediction, setTopPrediction] = useState(null);
  const imageRef = useRef(null);
  const [model, setModel] = useState(null);

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setPreview(imgURL);
      setTopPrediction(null);

      if (!model) {
        const loadedModel = await tmImage.load(
          MODEL_URL + 'model.json',
          MODEL_URL + 'metadata.json'
        );
        setModel(loadedModel);
        predictImage(imgURL, loadedModel);
      } else {
        predictImage(imgURL, model);
      }
    }
  };

  const predictImage = async (imgURL, loadedModel) => {
    const img = new Image();
    img.src = imgURL;
    img.crossOrigin = 'anonymous';

    img.onload = async () => {
      const predictions = await loadedModel.predict(img);
      const top = predictions.reduce((prev, curr) =>
        curr.probability > prev.probability ? curr : prev
      );

      setTopPrediction({
        label: top.className,
        probability: Math.round(top.probability * 100)
      });
    };
  };

  return (
    <div className="upload-container">
      {/* Image Preview First */}
      <div className="preview-area">
        {preview && (
          <div className="preview-wrapper">
            <img
              src={preview}
              alt="preview"
              ref={imageRef}
              className="preview-image"
            />
          </div>
        )}
      </div>

      {/* File Input After Preview */}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="file-input"
      />

      {/* Prediction Output */}
      {topPrediction && (
        <div className="prediction-output">
          <h4>
            {topPrediction.label === 'WithMask'
              ? 'Wearing Mask'
              : 'Not Wearing Mask'}
          </h4>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${topPrediction.probability}%` }}
            >
              {topPrediction.probability}%
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
