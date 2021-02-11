import React from "react";
import PropTypes from "prop-types";

function Item(props) {
  return (
    <>
      <div onClick = {() => props.whenItemClicked(props.id)}>  {/*arrow notation means function is not being involked on page load, waits for event */}
        <img src={props.imgUrl} width="180px" alt="Merch Item"/>
        <h3>{props.name}</h3>
        {/* <p>{props.description}</p>
        <p>Quantity: {props.quantity}</p> */}
      </div>
    </>
  );
}

Item.propTypes = {
  name: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string, //nonlinear id generated from v4() --> 24-character id
  whenItemClicked: PropTypes.func
};

export default Item;