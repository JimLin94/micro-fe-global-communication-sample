import React from 'react'; // Must be imported for webpack to work
import './App.css';
import { Provider } from 'react-redux';
import nativeStore from './store';
import Content from './Content';

function App({ store, globalEventDistributor }) {
  if (globalEventDistributor) {
    return (
      <Provider store={store}>
        <div className="headerApp">
          <Content globalEventDistributor={globalEventDistributor} />
        </div>
      </Provider>
    );
  }

  return (
    <Provider store={nativeStore}>
      <div className="headerApp">
        <Content />
      </div>
    </Provider>
  );
}

export default App;
