const form = document.getElementsByClassName('product-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementsByClassName('.product-name').value;
  const quantity = document.getElementsByClassName('.product-quantity').value;
  const type = document.getElementsByClassName('.product-type').value;
  const IDtype = document.getElementsByClassName('.product-id-type').value;

  const OLDprice = document.getElementsByClassName('.product-price-old').value;
  const Newprice = document.getElementsByClassName('.product-price-new').value;

  const description = document.getElementsByClassName('.product-description').value;
  const image = document.getElementsByClassName('.product-image').files[0];

});




