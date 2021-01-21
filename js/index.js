// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector(".price span"); 
  const quantity = product.querySelector(".quantity input"); 
  const subtotal = product.querySelector(".subtotal span"); 

  const priceNum = price.innerHTML; 
  const quantityNum = quantity.value; 

  const subtotalNum = priceNum * quantityNum; 
  subtotal.innerHTML = subtotalNum; 
  return subtotalNum;
  
}

function calculateAll() {

  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  let totalSum = 0;

   const singleProduct = document.querySelector('.product');
   updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  const products = document.querySelectorAll(".product");

  products.forEach((singleProduct) => {
    subtotal = updateSubtotal(singleProduct); 
    totalSum += subtotal 
    
  });

  // ITERATION 3
  //... your code goes here
  const total = document.querySelector("#total-value span"); 
  total.innerHTML = totalSum; 
}
//const singleProduct = document.querySelector('.product');
   //updateSubtotal(singleProduct);
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
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

  //... your code goes here
});
