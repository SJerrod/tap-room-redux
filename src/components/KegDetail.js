import React from 'react';
import PropTypes from 'prop-types';

function KegDetail(props) {
  const { keg, onClickingDelete, onClickingBuy, onClickingRestock } = props;
  let { stockMessage } = props;
  let numberInput = React.createRef();
  if(keg.pints === 0){
    stockMessage = "Currently Out of Stock.";
  } else if (keg.pints <= 10){
    stockMessage = keg.pints + " Serving remaining. Almost empty, get ready to change the keg."
  } else {
    stockMessage = keg.pints + " Servings remaining."
  }

  return(
    <>
      <div className='card'>
        <div className='card-header bg-info text-white'><strong>{keg.name}</strong></div>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card-body bg-warning'>Brand : {keg.brand}</div>
            <div className='card-body bg-warning'><em>{keg.alcoholContent}%</em> alc/vol</div>
            <div className='card-body bg-warning'>Description : {keg.description}</div>
            <div className='card-body bg-warning'>{stockMessage}</div>
          </div>
          <div className='col-md-6'>
            <hr/>
            <button className='btn-dark' hidden={keg.pints === 0} onClick={() => onClickingBuy(keg.id)}>Buy</button>
            <hr/>
            <button className='btn-dark' onClick={() => onClickingRestock(keg.id, numberInput.current.value)}>Restock</button>
            <input ref={numberInput} type='number' min='0' name='restock' placeholder='# of pints restocked' />
            <hr/>
            <button className='btn-dark' onClick={() => onClickingDelete(keg.id)}>Delete Keg</button>
          </div>
        </div>
        <div className='card-footer bg-info text-white'>${keg.price}.00 per serving</div>
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