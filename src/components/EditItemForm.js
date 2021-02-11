import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from "prop-types";

function EditItemForm (props) {
  const { item } = props;

  function handleEditItemFormSubmission(event) {
    event.preventDefault();
    props.onEditItem({
      name: event.target.name.value,
      imgUrl: event.target.imgUrl.value,
      description: event.target.description.value,
      quantity: parseInt(event.target.quantity.value),
      id: item.id});
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler={handleEditItemFormSubmission}
        buttonText="Update Item" />
    </>
  );
}

EditItemForm.propTypes = {
  item: PropTypes.object,
  onEditItem: PropTypes.func
};

export default EditItemForm;