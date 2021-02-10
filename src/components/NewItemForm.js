import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, imgUrl: event.target.imgUrl.value, description: event.target.description.value, quantity: event.target.quantity.value, id: v4()});
  };

  return(
    <>
    <h3 style={{textAlign: 'center', letterSpacing: '1px'}}>Add a New Merch Item</h3>
      <form class="form-group" style={{width: '36rem;'}} onSubmit={handleNewItemFormSubmission}>
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
          name='quantity'
          placeholder='Quantity Available' />
        <button type='submit' class="btn btn-outline-info">Submit Item</button>
      </form>
    </>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;