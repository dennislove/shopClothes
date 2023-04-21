const form = document.getElementById('product-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('product-name').value;
  const quantity = document.getElementById('product-quantity').value;
  const type = document.getElementById('product-type').value;
  const price = document.getElementById('product-price').value;
  const description = document.getElementById('product-description').value;
  const image = document.getElementById('product-image').files[0];

});
