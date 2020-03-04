import React from 'react';
import { FaCog, FaHome, FaSync, FaSatelliteDish } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Loader {
  displayLoader: boolean;
  children: JSX.Element;
  retry: () => void;
  invalid?: boolean;
}

const Loader = ({ displayLoader, children, retry, invalid }: Loader) => {
  if (invalid) {
    return (
      <div className='loader__type-error'>
        <p>These questions are currently unavailable.</p>
        <p>Please choose a different category or difficulty.</p>
        <br />
        <Link to='/settings' className='loader__cta'>
          <FaCog size='2.5em' /> <span>Settings</span>
        </Link>
      </div>
    );
  } else if (displayLoader) {
    return (
      <div>
        <div className='loader' />
        <div className='loader__network-error'>
          <FaSatelliteDish size='4em' className='loader__connection-icon' />
          <p>Network Connection Error</p>
          <br />
          <Link to='/' className='loader__cta'>
            <FaHome size='3em' /> <span>Home</span>
          </Link>
          <button onClick={retry} className='loader__cta'>
            <FaSync size='2.5em' /> <span>Try Again</span>
          </button>
        </div>
      </div>
    );
  } else {
    return <div className='animate-bottom'>{children}</div>;
  }
};

export default Loader;
