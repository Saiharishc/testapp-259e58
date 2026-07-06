import React, { useState, useEffect } from 'react';

function App() {
  const [apiMessage, setApiMessage] = useState('');
  const [echoMessage, setEchoMessage] = useState('');
  const [inputMessage, setInputMessage] = useState('');

  useEffect(() => {
    fetch('/test')
      .then(response => response.json())
      .then(data => setApiMessage(data.message))
      .catch(error => console.error('Error fetching API message:', error));
  }, []);

  const handleEchoClick = () => {
    fetch(`/test/${inputMessage}`)
      .then(response => response.json())
      .then(data => setEchoMessage(data.message))
      .catch(error => console.error('Error echoing message:', error));
  };

  return (
    <div className="App">
      <h1>TestApp</h1>
      <p>API Status: {apiMessage}</p>

      <div>
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Enter a message"
        />
        <button onClick={handleEchoClick}>Echo Message</button>
      </div>
      {echoMessage && <p>Echoed Message: {echoMessage}</p>}
    </div>
  );
}

export default App;
