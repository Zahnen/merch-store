(this["webpackJsonpmerch-store"]=this["webpackJsonpmerch-store"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(4),r=n.n(l);n(15);var c=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"jumbotron"},i.a.createElement("h1",{style:{textAlign:"center",letterSpacing:"5px"}},"Fake Band Merch Site")))},m=n(5),s=n(6),u=n(9),o=n(8);var d=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{onClick:function(){return e.whenItemClicked(e.id)}},"  ",i.a.createElement("img",{src:e.imgUrl,width:"180px",alt:"Merch Item"}),i.a.createElement("h3",null,e.name)))};var g=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),e.itemList.map((function(t){return i.a.createElement(d,{whenItemClicked:e.onItemSelection,name:t.name,imgUrl:t.imgUrl,description:t.description,quantity:t.quantity,id:t.id,key:t.id})})))},I=n(7);var f=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("form",{class:"form-group",style:{width:"36rem"},onSubmit:e.formSubmissionHandler},i.a.createElement("input",{class:"form-control",type:"text",name:"name",placeholder:"Item Name"}),i.a.createElement("input",{class:"form-control",type:"text",name:"imgUrl",placeholder:"Image URL (ends in .png, .jpg, etc)"}),i.a.createElement("input",{class:"form-control",type:"text",name:"description",placeholder:"Item Description"}),i.a.createElement("input",{class:"form-control",type:"number",min:"0",name:"quantity",placeholder:"Quantity Available"}),i.a.createElement("button",{type:"submit",class:"btn btn-info"},e.buttonText)))};var h=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{formSubmissionHandler:function(t){t.preventDefault(),e.onNewItemCreation({name:t.target.name.value,imgUrl:t.target.imgUrl.value,description:t.target.description.value,quantity:parseInt(t.target.quantity.value),id:Object(I.v4)()})},buttonText:"Submit"}))};var E=function(e){var t=e.item,n=e.onClickingDelete;return e.onClickingBuy,i.a.createElement(i.a.Fragment,null,i.a.createElement("h1",null,"Item Detail:"),i.a.createElement("h2",null,t.name),i.a.createElement("img",{src:t.imgUrl,width:"180px",alt:"Merch Item"}),i.a.createElement("h3",null,i.a.createElement("em",null,t.description)),0===t.quantity?i.a.createElement("h3",null,"Out of stock! Better luck next time."):i.a.createElement("h3",null,"Quantity: ",t.quantity),t.quantity>0?i.a.createElement("button",{onClick:e.onClickingBuy,class:"btn btn-success"}," Buy!"):null,i.a.createElement("button",{onClick:e.onClickingRestock,class:"btn btn-success"},"Restock!"),i.a.createElement("button",{onClick:e.onClickingEdit,class:"btn btn-info"},"Update Item"),i.a.createElement("button",{onClick:function(){return n(t.id)},class:"btn btn-danger"},"Delete Item"),i.a.createElement("hr",null))};var b=function(e){var t=e.item;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{formSubmissionHandler:function(n){n.preventDefault(),e.onEditItem({name:n.target.name.value,imgUrl:n.target.imgUrl.value,description:n.target.description.value,quantity:parseInt(n.target.quantity.value),id:t.id})},buttonText:"Update Item"}))},p=function(e){Object(u.a)(n,e);var t=Object(o.a)(n);function n(e){var a;return Object(m.a)(this,n),(a=t.call(this,e)).handleAddingNewItemToList=function(e){var t=a.state.masterItemList.concat(e);a.setState({masterItemList:t,formVisibleOnPage:!1})},a.handleChangingSelectedItem=function(e){var t=a.state.masterItemList.filter((function(t){return t.id===e}))[0];a.setState({selectedItem:t})},a.showFormOnClick=function(){null!=a.state.selectedItem?a.setState({formVisibleOnPage:!1,selectedItem:null,editing:!1}):a.setState((function(e){return{formVisibleOnPage:!e.formVisibleOnPage}}))},a.handleEditClick=function(){a.setState({editing:!0})},a.handleEditingItemInList=function(e){var t=a.state.masterItemList.filter((function(e){return e.id!==a.state.selectedItem.id})).concat(e);a.setState({masterItemList:t,editing:!1,selectedItem:e})},a.handleBuyClick=function(){var e=a.state.selectedItem,t=Object.assign({},e,{quantity:e.quantity-1}),n=a.state.masterItemList.filter((function(e){return e.id!==a.state.selectedItem.id})).concat(t);a.setState({masterItemList:n,selectedItem:t})},a.handleRestockClick=function(){var e=a.state.selectedItem,t=Object.assign({},e,{quantity:e.quantity+1}),n=a.state.masterItemList.filter((function(e){return e.id!==a.state.selectedItem.id})).concat(t);a.setState({masterItemList:n,selectedItem:t})},a.handleDeletingItem=function(e){var t=a.state.masterItemList.filter((function(t){return t.id!==e}));a.setState({masterItemList:t,selectedItem:null})},a.state={formVisibleOnPage:!1,createNewItem:!1,masterItemList:[],selectedItem:null,editing:!1},a}return Object(s.a)(n,[{key:"render",value:function(){var e=null,t=null;return this.state.editing?(t=i.a.createElement(b,{item:this.state.selectedItem,onEditItem:this.handleEditingItemInList}),e="Return to Item List"):null!=this.state.selectedItem?(t=i.a.createElement(E,{item:this.state.selectedItem,onClickingDelete:this.handleDeletingItem,onClickingBuy:this.handleBuyClick,onClickingRestock:this.handleRestockClick,onClickingEdit:this.handleEditClick}),e="Return to Item List"):this.state.formVisibleOnPage?(t=i.a.createElement(h,{onNewItemCreation:this.handleAddingNewItemToList}),e="Return to Item List"):(t=i.a.createElement(g,{itemList:this.state.masterItemList,onItemSelection:this.handleChangingSelectedItem}),e="Add New Item"),i.a.createElement(i.a.Fragment,null,t,i.a.createElement("button",{class:"btn btn-info",onClick:this.showFormOnClick},e))}}]),n}(i.a.Component);var k=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{class:"container"},i.a.createElement(c,null),i.a.createElement(p,null)))},v=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,l=t.getLCP,r=t.getTTFB;n(e),a(e),i(e),l(e),r(e)}))};n(18);r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(k,null)),document.getElementById("root")),v()}},[[10,1,2]]]);
//# sourceMappingURL=main.441e265e.chunk.js.map