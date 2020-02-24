import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ApiKeyForm from './views/ApiKeyForm';
import ApiKeySetConfirmation from './views/ApiKeySetConfirmation';
import RSSFeeds from './views/RSSFeeds';

function App() {
  const [apiKey, setApiKey] = useState("");
  const [apiKeyLoaded, setApiKeyLoaded] = useState("");
  return (
    <div>
      <div>
        <header>
          <ApiKeyForm 
            apiKey={apiKey}
            setApiKey={setApiKey}
            apiKeyLoaded={apiKeyLoaded}
            setApiKeyLoaded={setApiKeyLoaded}
          />
        </header>
        <body>
          <ApiKeySetConfirmation apiKeyLoaded={apiKeyLoaded} RSSFeeds={RSSFeeds} />
        </body>
      </div>
    </div>
  );
}

export default App;
