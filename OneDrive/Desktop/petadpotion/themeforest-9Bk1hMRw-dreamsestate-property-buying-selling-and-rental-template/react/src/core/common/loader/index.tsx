import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ImageWithBasePath from '../../img';

const Loader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // Hide loader after 30 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 30 seconds in milliseconds

    return () => clearTimeout(timer);
  }, []);

  // Show loader when location changes
  useEffect(() => {
    setIsLoading(true);
  }, [location]);

  return isLoading ? (
    <div className="page-loader">
      <div className="page-loader-inner">
        <ImageWithBasePath src="assets/img/icons/loader.svg" alt="Loader" />
        <label>
          <i className="fa-solid fa-circle" />
        </label>
        <label>
          <i className="fa-solid fa-circle" />
        </label>
        <label>
          <i className="fa-solid fa-circle" />
        </label>
      </div>
    </div>
  ) : null;
};

export default Loader;
