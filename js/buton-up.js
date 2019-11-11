const buttonUp = document.getElementById('button-up');

window.addEventListener('scroll', () => {
  if (window.scrollY > 800) {
    buttonUp.style.opacity = '0.7'
  } else {
    buttonUp.style.opacity = '0'
  }
});

buttonUp.addEventListener('click', () => {
  let topScroll = window.scrollY;
  let iteration = Math.round(topScroll / 60);
  intervalId = setInterval(() => {
    window.scrollTo(0, topScroll);
    topScroll -= iteration;
    if (topScroll < iteration) {
      window.scrollTo(0, 0);
      clearInterval(intervalId);
    }
  }, 1000 / 60)
});