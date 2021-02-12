import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <>
      <div className='card' onClick= {() => props.whenKegClicked(props.id)}>
        <div className='card-header'>{props.name}</div>
        <div className='card-body'>${props.price}</div>
        <div className='card-footer'>{props.pints} serving/s in stock</div>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  description: PropTypes.string,
  price: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;