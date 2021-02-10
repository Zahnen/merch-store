import React from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      createNewItem: false,
      masterItemList: []
    };
  }

  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  showFormOnClick = () => {
    this.setState(prevState => ({
      formVisibleOnPage: !prevState.formVisibleOnPage
    }));
  }

  render(){
    let buttonText = null;
    let currentlyVisibleState = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
    } else {
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} />;
      buttonText = "Add New Item";
    }
    return (
      <>
      {currentlyVisibleState}
      <button style={{}}onClick={this.showFormOnClick}>{buttonText}</button>
      </>
    );
  }

}

export default ItemControl;

//POST LUNCH:
// CONTINUE IN ITEMCONTROLL USING LESSON 29
// IDENTIFY CUSTOM METHODS/FUNCTIONS
// IDENTIFY WHAT FROM ITEMLIST NEEDS TO STAY COMPARED TO MONDAY'S HELPQUEUE VERSION?
// IMPLEMENT CSS OBJECTS


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

// tshirt: 6
// tshirt2: 10