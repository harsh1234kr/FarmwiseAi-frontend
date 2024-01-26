// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

import AddFields from './components/AddFields';
import DisplayFields from './components/DisplayFields';

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className="App">
          <AddFields />
          <DisplayFields />
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
