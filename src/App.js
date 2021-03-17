import React from 'react';
import './App.css';
import 'react-notifications/src/notifications.scss';

import { NotificationContainer } from 'react-notifications';

import { MultiSelect } from './components/FieldBuilder';

function App() {
  return (
    <div className="App">
      <div className="field-container">
        <MultiSelect id={32523} />
      </div>
      <NotificationContainer />
    </div>
  );
}

export default App;
