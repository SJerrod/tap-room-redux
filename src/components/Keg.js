import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <>
      <div className='card' onClick= {() => props.whenKegClicked(props.id)}>
        <div className='card-header bg-info text-white'><strong>{props.name}</strong></div>
        <div className='card-body bg-warning'>${props.price}.00 per pint <br/> {props.pints} Serving/s remaining</div>
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