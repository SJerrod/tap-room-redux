import React from 'react';
import PropTypes from 'prop-types';

function ReusableForm(props) {
  return(
    <>
      <div className='container'>
        <form onSubmit={props.formSubmissionHandler}>
          <input type='text' name='name' placeholder='Beer Name'/>
          <br/>
          <input type='text' name='brand' placeholder='Brand'/>
          <br/>
          <textarea name='description' placeholder='Beer Description'/>
          <br/>
          <input type='number' name='price' placeholder='Price per pint'/>
          <br/>
          <input type='number' name='alcoholContent' placeholder='Alcohol Content by %'/>
          <br/>
          <input type='number' name='pints' placeholder='Pints per Keg'/>
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