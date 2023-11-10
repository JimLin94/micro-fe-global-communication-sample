import React, { lazy, Suspense } from 'react'; // Must be imported for webpack to work
import './App.css';
import store from './store';
import { Provider } from 'react-redux';
import { GlobalEventDistributor } from './globalEventDistributor';
import Content from './Content';

import headerStore from 'HeaderApp/headerStore';
import footerStore from 'FooterApp/footerStore';

const Header = lazy(() => import('HeaderApp/Header'));
const Footer = lazy(() => import('FooterApp/Footer'));

const globalEventDistributor = new GlobalEventDistributor();

globalEventDistributor.registerStore('home', store);
globalEventDistributor.registerStore('header', headerStore);
globalEventDistributor.registerStore('footer', footerStore);

function App() {
  return (
    <Provider store={globalEventDistributor.stores['home']}>
      <div className="App">
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header
            store={globalEventDistributor.stores['header']}
            globalEventDistributor={globalEventDistributor}
          />
        </Suspense>
        <Content globalEventDistributor={globalEventDistributor} />
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer
            store={globalEventDistributor.stores['footer']}
            globalEventDistributor={globalEventDistributor}
          />
        </Suspense>
      </div>
    </Provider>
  );
}

export default App;
