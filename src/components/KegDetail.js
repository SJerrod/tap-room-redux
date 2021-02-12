import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let { stockMessage } = props;
  let numberInput = React.createRef();
  if(keg.pints === 0){
    stockMessage = "Currently Out of Stock.";
  } else if (keg.pints === 1){
    stockMessage = keg.pints + " Serving remaining. Get ready to change the keg."
  } else {
    stockMessage = keg.pints + " Servings remaining."
  }

  return(
    <>
      <div className='card'>
        <div className='card-header'><strong>{keg.name}</strong></div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card-body'>Brand : {keg.brand}</div>
            <div className='card-body'><em>{keg.alcoholContent}%</em> alc/vol</div>
            <div className='card-body'>Description : {keg.description}</div>
            <div className='card-body'>{stockMessage}</div>
          </div>
          <div className='col-md-6'>
            <hr/>
            <button hidden={keg.pints === 0} onClick={() => onClickingBuy(keg.id)}>Buy</button>
            <hr/>
            <button onClick={() => onClickingRestock(keg.id, numberInput.current.value)}>Restock</button>
            <input ref={numberInput} type='number' min='0' name='restock' placeholder='# of pints restocked' />
            <hr/>
            <button onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
          </div>
        </div>
        <div className='card-footer'>${keg.price}.00 per serving</div>
      </div>
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