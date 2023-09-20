/* import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from '../src/components/App';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
); */

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../src/components/App';

const root = createRoot(document.getElementById('root'));

root.render(<App />);
