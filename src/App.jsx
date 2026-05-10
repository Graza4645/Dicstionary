import React, { useState } from 'react';
import dictionaryData from './dictionaryData';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredWords = dictionaryData.filter((item) =>
    item.word.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <header className="header">
        <h1>📖 My Dictionary</h1>
        <p className="subtitle">English Words with Hindi Sentences</p>
      </header>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search a word..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          aria-label="Search words"
        />
      </div>

      <div className="word-count">
        Total Words: <strong>{dictionaryData.length}</strong>
      </div>

      <div className="dictionary-list">
        {filteredWords.length === 0 ? (
          <div className="no-results">No words found matching "{searchTerm}"</div>
        ) : (
          filteredWords.map((item) => (
            <div key={item.id} className="word-card">
              <div className="word-header">
                <span className="word-number">{item.id}.</span>
                <span className="word-title">{item.word}</span>
              </div>
              {item.synonyms && item.synonyms.length > 0 && (
                <div className="synonyms">
                  <span className="synonyms-label">Similar words:</span>
                  {item.synonyms.map((syn, i) => (
                    <span key={i} className="synonym-tag">{syn}</span>
                  ))}
                </div>
              )}
              <div className="sentences">
                {item.meanings.map((meaning, index) => (
                  <div key={index} className="sentence-pair">
                    <div className="english-sentence">
                      <span className="label">EN</span>
                      {meaning.english}
                    </div>
                    <div className="hindi-sentence">
                      <span className="label hindi-label">HI</span>
                      {meaning.hindi}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
