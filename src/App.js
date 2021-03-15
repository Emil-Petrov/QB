import React from 'react';
import './App.css';
import 'react-notifications/src/notifications.scss';

import FormContextProvider from './contexts/FormContext';

import FormBuilder from './components/FormBuilder';
import FormViewer from './components/FormViewer';

import { NotificationContainer } from 'react-notifications';
import MultiSelect from './components/FieldBuilder/MultiSelect';
import Modal from './components/Modal';
// import Loader from './components/Loader';
function App() {
  return (
    <div className="App">
      <FormContextProvider>
        <FormBuilder />
        <FormViewer />
      </FormContextProvider>
      <NotificationContainer />
      {/* <Modal>
        <MultiSelect id="Some Id" />
      </Modal>
       */}
    </div>
  );
}

export default App;
