import React from 'react';
import PropTypes from 'prop-types';

const HeaderFavourites = ({ title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        {title} - Click on a result above to add to favourites
      </h1>
    </nav>
  );
};

HeaderFavourites.defaultProps = {
  title: 'iTunes Favourites',
};

HeaderFavourites.propTypes = {
  title: PropTypes.string.isRequired,
};

export default HeaderFavourites;