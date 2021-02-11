import React from "react";
import Item from "./Item";
import ItemList from "./ItemList";
import NewItemForm from "./NewItemForm";
import ItemDetail from "./ItemDetail";

class ItemControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false, //boolean to show if form is visible or not
      createNewItem: false,
      masterItemList: [], // master list of all item objects to display and render
      selectedItem: null // holds an Item object to display details of a specific item
    };
  }

  //Create
  handleAddingNewItemToList = (newItem) => {
    const newMasterItemList = this.state.masterItemList.concat(newItem);
    this.setState({
      masterItemList: newMasterItemList,
      formVisibleOnPage: false
    });
  }

  //Read - Details
  handleChangingSelectedItem = (id) => {
    const selectedItem = this.state.masterItemList.filter(item => item.id === id)[0];
    this.setState({selectedItem: selectedItem});
  }

  //Toggle btw list and form
  showFormOnClick = () => { //change name
    if (this.state.selectedItem != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedItem: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  //Delete item
  handleDeletingItem = (id) => {
    const newMasterItemList = this.state.masterItemList.filter(item => item.id !== id);
    this.setState({
      masterItemList: newMasterItemList,
      selectedItem: null
    });
  }

  render(){
    let buttonText = null;
    let currentlyVisibleState = null;

    if  (this.state.selectedItem != null) {
      currentlyVisibleState = <ItemDetail item = {this.state.selectedItem} onClickingDelete = {this.handleDeletingItem} />;
      buttonText = "Return to Item List";
    } else if (this.state.formVisibleOnPage) { // if on new form, show form and link to list
      currentlyVisibleState = <NewItemForm onNewItemCreation={this.handleAddingNewItemToList} />;
      buttonText = "Return to Item List";
    } else { // if on master list, show link to "add new" form
      currentlyVisibleState = <ItemList itemList={this.state.masterItemList} onItemSelection={this.handleChangingSelectedItem} />;
      buttonText = "Add New Item";
    }
    return (
      <>
      {currentlyVisibleState}
      <button class="btn btn-info" onClick={this.showFormOnClick}>{buttonText}</button>
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
//onclick to toggle form {_done_}

//CREATE
//onclick to create an item from form {_done_} && update inventory based on quantity added (inventory)

//READ- Details
//onclick toggle details {_done_}

//UPDATE
//onclick for incrementing (inventory)
//onclick for decrementing (inventory)
//stretch - "cart" - inventory #s updating

//DELETE
//onclick to delete an item && reduce quantity of item (inventory)

// tshirt: 6
// tshirt2: 10