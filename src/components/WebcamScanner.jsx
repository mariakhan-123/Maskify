import React, { useRef, useState } from 'react';
import * as tmImage from '@teachablemachine/image';
import './WebcamScanner.css';

const MODEL_URL = '/my_model/';

export default function WebcamScanner() {
  const webcamRef = useRef(null);
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [topPrediction, setTopPrediction] = useState(null);
  const [stream, setStream] = useState(null);

  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      console.error('Error accessing webcam:', err);
    }
  };

  const stopWebcam = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      setStream(null);
    }
  };

  const captureImage = async () => {
    const video = videoRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0);
    const imageDataUrl = canvas.toDataURL('image/png');
    setCapturedImage(imageDataUrl);
    stopWebcam();

    // Predict using Teachable Machine model
    const model = await tmImage.load(MODEL_URL + 'model.json', MODEL_URL + 'metadata.json');
    const prediction = await model.predict(canvas);
    const best = prediction.reduce((max, curr) =>
      curr.probability > max.probability ? curr : max
    );
    setTopPrediction({
      label: best.className,
      probability: (best.probability * 100).toFixed(2),
    });
  };

  return (
    <div className="upload-container">
      <div className="image-box">
        {!capturedImage && (
          <video ref={videoRef} autoPlay playsInline className="video-preview" />
        )}
        {capturedImage && (
          <img src={capturedImage} alt="Captured" className="preview-image" />
        )}
      </div>

      <div className="button-group">
        {!stream && !capturedImage && (
          <button className="action-button" onClick={startWebcam}>Start Webcam</button>
        )}
        {stream && (
          <button className="action-button" onClick={captureImage}>Capture</button>
        )}
        {capturedImage && (
          <button className="action-button" onClick={() => {
            setCapturedImage(null);
            setTopPrediction(null);
          }}>Retake</button>
        )}
      </div>

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
