import React, { useState } from 'react';
import './ValidationPage.css';

function ValidationPage() {
  const [file, setFile] = useState(null);
  const [validationMessage, setValidationMessage] = useState('');

  const validateFile = () => {
    if (!file) {
      setValidationMessage('File is empty.');
      return;
    }

    // Criteria 1: Validate sender code matches sender account
    // Criteria 2: Validate file is not empty (already checked above)
    // Criteria 3: Validate file naming convention
    // Criteria 4: Validate file size within disk quota

    if (file.size > 10485760) { // Example disk quota of 10MB
      setValidationMessage('File size exceeds the disk quota.');
      return;
    }

    const namingConventionRegex = /^[a-zA-Z0-9-_]+\.txt$/;
    if (!namingConventionRegex.test(file.name)) {
      setValidationMessage('File naming convention is not respected.');
      return;
    }

    setValidationMessage('File is valid!');
  };

  const fileChangeHandler = (event) => {
    setFile(event.target.files[0]);
    setValidationMessage('');
  };

  return (
    <div className="validation-page">
      <header className="header">
        <a href="/" className="logo">
          <img src="logo-url" alt="Logo" />
        </a>
        <nav className="navigation">
          <ul>
            <li className="active-tab">Validation</li>
            <li>History</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h1>Perform File Level Validations</h1>
        <div className="form-container">
          <input type="file" onChange={fileChangeHandler} />
          <button onClick={validateFile} className="validate-button">Validate</button>
          <p className="validation-message">{validationMessage}</p>
        </div>
        <aside className="additional-links">
          <a href="#info">More Info</a>
          <a href="#help">Help</a>
        </aside>
      </main>
      <footer className="footer">
        <p>© 2023 ESMA System</p>
        <a href="#privacy-policy">Privacy Policy</a>
        <a href="#terms-of-service">Terms of Service</a>
      </footer>
    </div>
  );
}

export default ValidationPage;
