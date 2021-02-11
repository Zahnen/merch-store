# Merch Site

## Fundamentals of React practice project in Epicodus Wk 16

### By Zahnen Garner & Danielle Thompson

### Project began 2.10.21. Last updated 2.11.21.

---

## Get in Touch

[Zahnen Garner](zahnen@gmail.com)
[Danielle Thompson](danithompson74@gmail.com)

## Known Bugs

No known bugs at this time.

[Report bugs here.](https://github.com/Zahnen/merch-store/issues) | [Request features here.](https://github.com/Zahnen/merch-store/issues)

___

## Description
Merch Store is a practice in implementing CRUD functionality within a React application. Users can create, read, update, and delete items in a webstore for a fictional band. The webstore will keep track of inventory based on "purchases" and "restocks".

### Objectives
READ
onclick to toggle form {_done_}

CREATE
onclick to create an item from form {_done_}

READ- Details
onclick toggle details {_done_}

UPDATE
update whole item {_done_}
onclick for incrementing/decrementing quantity(inventory){_done_}

DELETE
onclick to delete an item && reduce quantity of item (inventory) {_done_}

## User Stories

- A user should be able to Create, Read, Update and Delete items in the store. Items should have fields for name, description, and quantity (along with any other fields you wish to add).
- Increase or decrease the quantity of an item in the store. For instance, if a user clicks "Buy", the quantity will decrease by one. If a user clicks "Restock", it will increment by a specified number.
- When the quantity of an item is reduced to 0, the item should say "Out of Stock". A user should not be able to reduce the quantity of an item below 0.

### Stretch Goals

- Implement more CSS/CSS objects
- Create a shopping "cart" with inventory number auto-updating upon purchase

## Technologies Used

- VS Code
- Git & GitHub
- JavaScript ES6
- JSX
- React Framework v17.0
- `create-react-app`
- `npm install --save-exact react-scripts@3.2.0`
- webpack
- Babel
- ESLint
- node.js v15.8.0
- Bootstrap v5.0.0

## Project Planning Prototype

!["Application prototype"](https://i.imgur.com/oBXkGsi.png)

---

### Setup/Installation Requirements

#### Live Page

* To access the live page, visit [this site]().

#### If you would like to run the webpage locally

* _Open your git-capable command line program (I recommend Terminal on Mac or Git Bash on PC)_
* _Ensure you are within the directory you'd like the file to be created in._
* _Enter the command `git clone https://github.com/Zahnen/merch-store` in your command line_
* _Once cloned, use the `cd ` command to navigate to the directory created in the previous step._
* _You must have node.js installed in order to run the webpage successfully. If you do not have node.js installed, find more information and download it [here](https://nodejs.org/en/download/)_
* _Once in the newly cloned directory, run `npm install` in your command line to install the necessary packages and dependencies._

##### Available Scripts

Once in the project directory, you can run:

###### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

###### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

###### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

###### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

---

#### Legal, or License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/).

Copyright (c) 2021 *_Zahnen Garner & Danielle Thompson_**