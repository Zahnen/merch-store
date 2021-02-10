import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <>
      <img src="{props.imgUrl}" alt="Merch Item"/>
      <h3>{props.name}</h3>
      <p>{props.description}</p>
      <p>Quantity: {props.quantity}</p>
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired
};

export default Item;