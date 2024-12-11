import React from 'react';
import './DataExchangeInitiate.css';

function DataExchangeInitiate() {
  return (
    <div className="data-exchange-initiate">
      <header className="header">
        <a href="/" className="logo">
          <img src="logo-url" alt="Logo" />
        </a>
        <nav className="navigation">
          <ul>
            <li>Overview</li>
            <li>Details</li>
            <li>Settings</li>
            <li>Help</li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <form className="data-exchange-form">
          <div className="form-group">
            <label htmlFor="frequency">Data Exchange Frequency</label>
            <input type="text" id="frequency" name="frequency" />
          </div>
          <div className="form-group">
            <label htmlFor="scope">Data Exchange Scope</label>
            <input type="text" id="scope" name="scope" />
          </div>
          <button type="submit" className="initiate-button">Initiate</button>
        </form>
        <div className="additional-links">
          <a href="/resource1">Resource Link 1</a>
          <a href="/resource2">Resource Link 2</a>
        </div>
      </main>
      <footer className="footer">
        <p>© 2023 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default DataExchangeInitiate;
