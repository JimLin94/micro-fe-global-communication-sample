import React, { useEffect, useState } from 'react'; // Must be imported for webpack to work
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function Content({ globalEventDistributor }) {
  const homeCount = useSelector((state) => state.homeNotificationReducer.count);
  const [footerCount, setFooterCount] = useState(0);
  const dispatch = useDispatch();
  const handleDispatchHeaderAction = async (actionType) => {
    const result = await globalEventDistributor.dispatch(
      'header',
      actionType,
      (state) => state.headerNotificationReducer.count,
    );

    console.log('result', result);
  };
  const handleDispatchFooterAction = async (actionType) => {
    const result = await globalEventDistributor.dispatch(
      'footer',
      actionType,
      (state) => state.footerNotificationReducer.count,
    );

    console.log('result', result);
  };

  useEffect(() => {
    const handler = (event) => {
      console.log('footer state changed', event.detail);
      setFooterCount(event.detail.state);
    };

    const { remove } = globalEventDistributor.stateChangeListener(
      'footer',
      handler,
    );

    return () => {
      remove();
    };
  }, []);

  return (
    <div className="container">
      Demo home page: {homeCount}
      <br />
      Demo footer page: {footerCount}
      <button onClick={() => dispatch({ type: 'HOME_INCREMENT' })}>
        Home Increment
      </button>
      <button onClick={() => dispatch({ type: 'HOME_CLEAR' })}>
        Home Clear
      </button>
      <p>
        <button onClick={() => handleDispatchHeaderAction('HEADER_INCREMENT')}>
          Header Increment
        </button>
        <button onClick={() => handleDispatchHeaderAction('HEADER_CLEAR')}>
          Header Clear
        </button>
      </p>
      <p>
        <button onClick={() => handleDispatchFooterAction('FOOTER_INCREMENT')}>
          Footer Increment
        </button>
        <button onClick={() => handleDispatchFooterAction('FOOTER_CLEAR')}>
          Footer Clear
        </button>
      </p>
    </div>
  );
}

export default Content;
