import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <>
    <form class="form-group" style={{width: '36rem'}} onSubmit={props.formSubmissionHandler}>
        <input class="form-control"
          type='text'
          name='name'
          placeholder='Item Name' />
        <input class="form-control"
          type='text'
          name='imgUrl'
          placeholder='Image URL (ends in .png, .jpg, etc)' />
        <input class="form-control"
          type='text'
          name='description'
          placeholder='Item Description' />
        <input class="form-control"
          type='number'
          min='0'
          name='quantity'
          placeholder='Quantity Available' />
        <button type='submit' class="btn btn-info">{props.buttonText}</button>
      </form>
    </>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;