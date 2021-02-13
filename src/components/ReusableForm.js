import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <>
      <div className='container'>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' placeholder='Beer Name' required/>
          <br/>
          <input type='text' name='brand' placeholder='Brand' required/>
          <br/>
          <textarea name='description' placeholder='Beer Description'/>
          <br/>
          <input type='number' step='.01' min='0' name='price' placeholder='Price per pint' required/>
          <br/>
          <input type='number' step='.01' min='0' name='alcoholContent' placeholder='Alcohol Content by %' required/>
          <br/>
          <input type='number' min='0' name='pints' placeholder='Pints per Keg' required/>
          <br/>
          <button type='submit'>{props.buttonText}</button>
        </form>
      </div>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;