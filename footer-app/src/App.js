import React from 'react'; // Must be imported for webpack to work
import './App.css';
import { Provider } from 'react-redux';
import nativeStore from './store';
import Content from './Content';

function App({ store, globalEventDistributor }) {
  if (globalEventDistributor) {
    console.log('Microfrontend footerApp is using globalEventDistributor');

    return (
      <Provider store={store}>
        <div className="footerApp">
          <Content />
        </div>
      </Provider>
    );
  }

  return (
    <Provider store={nativeStore}>
      <div className="footerApp">
        <Content globalEventDistributor={globalEventDistributor} />
      </div>
    </Provider>
  );
}

export default App;
