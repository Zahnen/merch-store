import React from 'react';
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete } = props; //object destructuring to derive `ticket` obj from props

  return (
    <>
      <h1>Item Detail:</h1>
      <h2>{item.name}</h2>
      <img src={item.imgUrl} width="180px" alt="Merch Item"/>
      <h3><em>{item.description}</em></h3>
      <h3>Quantity: {item.quantity}</h3>
      <button onClick={ props.onClickingEdit } class="btn btn-info">Update Ticket</button>
      <button onClick = {() => onClickingDelete(item.id)} class="btn btn-danger">Delete Item</button>
      <hr/>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default ItemDetail;