import React from 'react';
import PropTypes from "prop-types";

function ItemDetail(props){
  const { item, onClickingDelete, onClickingBuy } = props; //object destructuring to derive `ticket` obj from props
  return (
    <>
      <h1>Item Detail:</h1>
      <h2>{item.name}</h2>
      <img src={item.imgUrl} width="180px" alt="Merch Item"/>
      <h3><em>{item.description}</em></h3>
      {item.quantity === 0 ?
        <h3>Out of stock! Better luck next time.</h3>
        : <h3>Quantity: {item.quantity}</h3>
      }
      {item.quantity > 0 ? <button onClick={ props.onClickingBuy } class="btn btn-success"> Buy!</button> : null }
      <button onClick={ props.onClickingRestock } class="btn btn-success">Restock!</button>
      <button onClick={ props.onClickingEdit } class="btn btn-info">Update Item</button>
      <button onClick = {() => onClickingDelete(item.id)} class="btn btn-danger">Delete Item</button>
      <hr/>
    </>
  );
}

ItemDetail.propTypes = {
  item: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func
}

export default ItemDetail;


// ternary instructions ...
// // {condition ? true : false}
// // {condition ? true : (condition ? (condition ? true : false) : false)}

// 2nd ternary option ...
// {item.quantity === 0 &&
//   <h3>
//     Out of stock! Better luck next time.
//   </h3>
// }
// {item.quantity > 0 &&
//   <h3>
//     Quantity: {item.quantity}
//   </h3>
// }