// document.addEventListener('DOMContentLoaded', () => {
const form = document.getElementById('calculate-price');
const userInput = {};
console.log(form);

form.addEventListener('submit', (event) => {
  console.log('11111');
  userInput.typeOfProduct = form[0].value;
  userInput.widthOfProduct = form[1].value;
  userInput.heightOfProduct = form[2].value;
  userInput.firstName = form[3].value;
  userInput.phoneNumber = form[4].value;
  console.log(userInput);
  form.reset();


  event.preventDefault();
});


// });
