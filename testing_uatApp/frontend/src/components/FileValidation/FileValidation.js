import React, { useState } from 'react';
import './FileValidation.css';

function FileValidation() {
  const [file, setFile] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');

  const validateFile = () => {
    if (!file) {
      setValidationMessage('Please upload a file.');
      return;
    }

    const senderCode = 'SENDER_CODE'; // Example sender code
    const fileName = file.name;
    const fileSize = file.size;
    const maxFileSize = 10485760; // 10MB

    if (!fileName.includes(senderCode)) {
      setValidationMessage('Sender code does not match.');
      return;
    }

    if (fileSize === 0) {
      setValidationMessage('File is empty.');
      return;
    }

    const validNamingConvention = /^[a-zA-Z0-9_\-]+\.[a-zA-Z0-9]+$/;
    if (!validNamingConvention.test(fileName)) {
      setValidationMessage('File naming convention is not respected.');
      return;
    }

    if (fileSize > maxFileSize) {
      setValidationMessage('File size exceeds the allowed limit.');
      return;
    }

    setValidationMessage('File is valid.');
  };

  return (
    <div className="file-validation-page">
      <header className="header">
        <a href="/">
          <img src="logo-url" alt="Logo" className="logo" />
        </a>
      </header>
      <nav className="nav-tabs">
        <a href="/home" className="tab">Home</a>
        <a href="/validate" className="tab active">Validate</a>
        <a href="/about" className="tab">About</a>
      </nav>
      <main className="content">
        <form className="file-validation-form">
          <label className="file-label" style={{ color: '#993366', fontFamily: 'Dancing Script' }}>
            Upload your file:
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            style={{ borderColor: '#339966' }}
          />
          <button
            type="button"
            onClick={validateFile}
            style={{ backgroundColor: '#336699', color: '#FFCC00' }}
          >
            Validate
          </button>
        </form>
        <p className="validation-message" style={{ color: '#993366' }}>{validationMessage}</p>
      </main>
      <aside className="additional-links">
        <a href="/help" style={{ color: '#FFCC00' }}>Help</a>
        <a href="/contact" style={{ color: '#FFCC00' }}>Contact Us</a>
      </aside>
      <footer className="footer">
        <p style={{ color: '#FFCC00' }}>© 2023 ESMA System</p>
      </footer>
    </div>
  );
}

export default FileValidation;
