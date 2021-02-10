import React from 'react';
import { v4 } from 'uuid';

function NewItemForm(){
  return(
    <>
      <form onSubmit={handleNewItemFormSubmission}>
        <input
          type='text'
          name='name'
          placeholder='Item Name' />
        <input
          type='text'
          name='imgUrl'
          placeholder='Image URL (ends in .png, .jpg, etc)' />
        <input
          type='text'
          name='description'
          placeholder='Item Description' />
        <input
          type='number'
          name='quantity'
          placeholder='Quantity Available' />
        <button type='submit'>Submit Item</button>
      </form>
    </>
  );
}

export default NewItemForm;