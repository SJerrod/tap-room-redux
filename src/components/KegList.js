import React from 'react';
import Keg from './Keg';
import PropTypes from 'prop-types';

function KegList(props) {
  return (
    <>
      {Object.values(props.kegList).map((keg) =>
        <div className='container' key={keg.id}>
          <Keg
            whenKegClicked={props.onKegSelection}
            name={keg.name}
            brand={keg.brand}
            price={keg.price}
            alcoholContent={keg.alcoholContent}
            pints={keg.pints}
            id={keg.id}
          />
          <br/>
        </div>
      )}
    </>
  );
}

KegList.propTypes = {
  kegList: PropTypes.object,
  onKegSelected: PropTypes.func
};

export default KegList;