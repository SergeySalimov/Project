const buttonUp = document.getElementById('button-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    buttonUp.style.opacity = '0.7'
  } else {
    buttonUp.style.opacity = '0'
  }
});

buttonUp.addEventListener('click', () => {
  let currentScrollY = window.scrollY;
  // seconds of scrolling
  let timeOfScrolling = 1.5;
  // 60 frames per second
  let stepOfJump = Math.round(currentScrollY / (60 * timeOfScrolling));
  intervalId = setInterval( ()=> {
    window.scrollTo(0,currentScrollY);
    currentScrollY -= stepOfJump;
    if (currentScrollY < stepOfJump) {
      window.scrollTo(0, 0);
      clearInterval(intervalId)
    }
  }, 1000 / 60)
});