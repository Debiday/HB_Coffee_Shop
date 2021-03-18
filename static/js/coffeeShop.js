"use strict";

const addItemToCart = (itemName) => {
// Adding itemName argument as a <td> html element to a table id =cart-items
  $('#cart-items').append(`
    <tr>
      <td>${itemName}</td>
    </tr>
  `);
};

const resetCart = () => {
  //Resetting the cart-total to 0 and removing all items from cart-items
  $('#cart-total').html('0.00'); //.html() changes the contents in the element (ex: js .innerhtml())
  $('#cart-items').empty();
};

const incrementCartTotal = (price) => {
  // 
  const cartTotal = $('#cart-total'); //declaring cartTotal object 

  let total = Number(cartTotal.html()); //changing the value pulled from using .html() into a number data type
  total += price;

  cartTotal.html(total.toFixed(2)); // returns total as':.2f' == toFixed(2) into cartTotal html element
};

const incrementCoffeeSold = (amountSold) => {
  // get coffe-sold-counter from html and turn it into a number and assign to variable coffee sold
  let coffeeSold = Number($('#coffee-sold-counter').html());
  // 
  coffeeSold += amountSold;

  $('#coffee-sold-counter').html(coffeeSold);
};

const setProgressAndStatus = (progressVal, statusMsg) => {
  // Pulling 'value' key from order_progress and setting it to progressVal
  $('#order-progress').attr('value', progressVal);
  // Write something inside later on to order-status-message html element
  $('#order-status-message').html(statusMsg);
};

//
$('.add-to-order').on('click', () => {
  addItemToCart('Coffee');
  incrementCartTotal(1.5);
  incrementCoffeeSold(1);

$('#place-order').on('click', () => {
  resetCart();
});

  // This is the body of your callback function -- add more
  // code here!
  //
  // (You'll want to call the functions we've already defined
  // to manipulate the DOM)
});
// Add your event handlers below.
//

