import React from 'react';
import { v4 } from 'uuid';
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewItemForm(props){

  function handleNewItemFormSubmission(event) {
    event.preventDefault();
    props.onNewItemCreation({name: event.target.name.value, imgUrl: event.target.imgUrl.value, description: event.target.description.value, quantity: parseInt(event.target.quantity.value), id: v4()});
  };

  return(
    <>
      <ReusableForm
        formSubmissionHandler={handleNewItemFormSubmission}
        buttonText="Submit" />
    </>
  );
}

NewItemForm.propTypes = {
  onNewItemCreation: PropTypes.func
};

export default NewItemForm;