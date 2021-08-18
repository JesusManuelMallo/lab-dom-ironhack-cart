// ITERATION 1

function updateSubtotal(product) {
  let unitPrice = product.querySelector('.price span');
  let quantity = product.querySelector('.quantity input');
  let subtotal = Number(unitPrice.innerHTML) * Number(quantity.value);
  let elementSubtotal = product.querySelector('.subtotal span');
  elementSubtotal.innerHTML = subtotal;
  console.log('Calculating subtotal, yey!');
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let totalPrice = 0;
  let AllProducts = document.querySelectorAll('.product');
  for (let singleProduct of AllProducts) {
    let subtotal = updateSubtotal(singleProduct);
    totalPrice = totalPrice + subtotal;
  }

  // end of test

  // ITERATION 3
  let elementTotalValue = document.querySelector('#total-value  span');
  elemenTotalValue.textContent = totalPrice;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
let thisRow = target.parentNode.parentNode
thisRow.remove()
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  const removeProductsButtons = document.querySelectorAll('.btn-remove');
  removeProductsButtons.forEach(button => {
    button.addEventListener('click', removeProduct);
  }


  //... your code goes here
});
