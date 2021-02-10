import React from "react";
import Item from "./item";
import ItemList from "./itemList";
import NewItemForm from "./newItemForm";

class ItemControl extend React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterItemList: []
    };
  }

  onClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    //
    return (
      //
    );
  }

}

export default ItemControl;

//READ
//onclick to toggle form

//CREATE
//onclick to create an item from form && update inventory based on quantity added (inventory)

//READ- Details
//onclick toggle details

//UPDATE
//onclick for incrementing (inventory)
//onclick for decrementing (inventory)
//stretch - "cart" - inventory #s updating

//DELETE
//onclick to delete an item && reduce quantity of item (inventory)

tshirt: 6
tshirt2: 10
