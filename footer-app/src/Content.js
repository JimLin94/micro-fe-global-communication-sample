import React from 'react'; // Must be imported for webpack to work
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function Content({ globalEventDistributor }) {
  const footerCount = useSelector(
    (state) => state.footerNotificationReducer.count,
  );

  return <div>Footer: {footerCount}</div>;
}

export default Content;
