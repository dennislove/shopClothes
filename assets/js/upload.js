const form = document.getElementById('product-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('product-name').value;
  const quantity = document.getElementById('product-quantity').value;
  const type = document.getElementById('product-type').value;
  const IDtype = document.getElementById('product-id-type').value;

  const OLDprice = document.getElementById('product-price-old').value;
  const Newprice = document.getElementById('product-price-new').value;
  
  const description = document.getElementById('product-description').value;
  const image = document.getElementById('product-image').files[0];

});

function addTag(tag) {
  var input = document.getElementById("tags-input");
  var value = input.value;
  if (value.length > 0) {
    value += ", ";
  }
  value += tag;
  input.value = value;
}


