import React from "react";
import Item from "./Item";
import PropTypes from "prop-types";

function ItemList(props) {
  return (
    <>
    <hr />
    {props.itemList.map((item) =>
      <Item
      whenItemClicked = {props.onItemSelection} // a prop from TicketControl component, it is one of TicketList's props, hence the `props` not `item`
      name={item.name}
      imgUrl={item.imgUrl}
      description={item.description}
      quantity={item.quantity}
      id={item.id} //for details, update, delete (?) b/c different parents
      key={item.id} /> //for read all (?) b/c different parents
    )}
    </>
  );
}

ItemList.propTypes = {
  itemList: PropTypes.array,
  onItemSelection: PropTypes.func
};

export default ItemList;