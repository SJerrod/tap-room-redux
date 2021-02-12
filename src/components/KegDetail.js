import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let { stockMessage } = props;
  let numberInput = React.createRef();
  if(keg.pints === 0){
    stockMessage = "Currently Out of Stock.";
  } else if (keg.pints === 1){
    stockMessage = keg.pints + " Pint remaining. Get ready to change the keg."
  } else {
    stockMessage = keg.pints + " Pints remaining."
  }

  return(
    <>
      <div className='card'>
        <div className='card-header'>{keg.name}</div>
        <div className='card-body'>{keg.brand}</div>
        <div className='card-body'>{keg.alcoholContent}</div>
        <div className='card-body'>{keg.description}</div>
        <div className='card-body'>{stockMessage}</div>
        <div className='card-footer'>${keg.price}</div>
      </div>
      <button hidden={keg.pints === 0} onClick={() => onClickingBuy(keg.id)}>Buy</button>
      <input ref={numberInput} type='number' name='restock' placeholder='Pints per keg' />
      <button onClick={() => onClickingRestock(keg.id, numberInput.current.value)}>Restock</button>
      <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingBuy: PropTypes.func,
  onClickingRestock: PropTypes.func,
  onClickingDelete: PropTypes.func
};

export default KegDetail;