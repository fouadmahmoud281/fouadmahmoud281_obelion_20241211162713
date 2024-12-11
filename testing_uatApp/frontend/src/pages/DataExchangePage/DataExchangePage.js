import React from 'react';
import './DataExchangePage.css';

function DataExchangePage() {
  return (
    <div className="data-exchange-page">
      <header className="header">
        <a href="/" className="logo-link">
          <img src="URL_TO_LOGO" alt="Logo" className="logo" />
        </a>
        <nav className="navigation">
          <ul>
            <li>Overview</li>
            <li>Details</li>
            <li>Settings</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <h1>Initiate Order Book Data Exchange</h1>
        <form className="exchange-form">
          <div className="form-group">
            <label htmlFor="frequency">Data Exchange Frequency:</label>
            <input type="text" id="frequency" name="frequency" />
          </div>
          <div className="form-group">
            <label htmlFor="scope">Data Exchange Scope:</label>
            <input type="text" id="scope" name="scope" />
          </div>
          <button type="submit" className="initiate-button">Initiate</button>
        </form>
        <div className="additional-links">
          <a href="#resources">Resources</a>
          <a href="#guidance">Guidance</a>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DataExchangePage;
