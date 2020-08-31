var GroceryList = (props) => {

  var onFirstListItemClicked = (event) => {
    console.log('Clicked on Item');
  };

  return (
    <ul>
      <li onClick={onFirstListItemClicked}>{props.groceryItems[0]}</li>
      <li>{props.groceryItems[1]}</li>
      <li>{props.groceryItems[2]}</li>
    </ul>
  );
}


var GroceryListItem = () => (
  <GroceryList groceryItems={['Apples', 'Peanut Butter', 'Cheese']}/>
);

ReactDOM.render(<GroceryListItem />, document.getElementById('app'));