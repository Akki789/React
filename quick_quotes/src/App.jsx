import { useState } from "react";
import "./styles.css";

export default function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState("");
  const [error, setError] = useState("");

  // Add Quote
  function addQuote() {
    if (quote.trim() === "") {
      setError("Quote cannot be empty.");
      return;
    }

    setQuotes([...quotes, quote]);
    setQuote("");
    setError("");
  }

  // Delete Quote
  function deleteQuote(index) {
    const updated = quotes.filter((_, i) => i !== index);
    setQuotes(updated);
  }

  return (
    <div id="app-container">
      <h1 id="title">MiniQuotes</h1>

      {/* Input Section */}
      <div id="input-section">
        <input
          id="quote-input"
          type="text"
          placeholder="Write a quote..."
          value={quote}
          onChange={(e) => setQuote(e.target.value)}
        />
        <button id="add-btn" onClick={addQuote}>
          Add
        </button>
      </div>

      {/* Error Message */}
      <p id="error-msg">{error && error}</p>

      {/* Quotes List */}
      <div id="quotes-list">
        {quotes.length === 0 ? (
          <p id="empty-text">No quotes added yet</p>
        ) : (
          quotes.map((q, index) => (
            <div key={index} className="quote-card">
              <p className="quote-text">{q}</p>
              <button
                className="delete-btn"
                onClick={() => deleteQuote(index)}
              >
                Delete
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
