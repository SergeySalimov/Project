document.addEventListener('DOMContentLoaded', () => {
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
  addSuccessMsg();
  event.preventDefault();
});

function addSuccessMsg() {
  let el = document.createElement('div');
  el.className = 'col-12 alert alert-success text-left';
  el.style.fontSize = '12px';
  el.style.fontWeight = '300';
  el.innerHTML = 'Спасибо! Ваши данные были приняты на обработку. Мы с вами свяжемся в ближайшее время';

  form.append(el);
  removeElement(el, 4000);

}

function removeElement(elem, timeout = 3000) {
  setTimeout(() => {
    elem.remove();
      }, timeout)
}
});
