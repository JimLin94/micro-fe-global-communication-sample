import React from 'react'; // Must be imported for webpack to work
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function Content({ globalEventDistributor }) {
  const headerCount = useSelector(
    (state) => state.headerNotificationReducer.count,
  );
  const handleDispatchFooterAction = async () => {
    const result = await globalEventDistributor.dispatch(
      'footer',
      'FOOTER_INCREMENT',
      (state) => state.footerNotificationReducer.count,
    );

    console.log('update Footer count', result);
  };

  return (
    <div>
      Header: {headerCount}
      <button onClick={handleDispatchFooterAction}>
        Increment Footer count
      </button>
    </div>
  );
}

export default Content;
