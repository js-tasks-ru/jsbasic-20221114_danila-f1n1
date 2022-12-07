function initCarousel() {
  const arrowLeft = document.querySelector('.carousel__arrow_left');
  const arrowRight = document.querySelector('.carousel__arrow_right');
  const slider = document.querySelector('.carousel__inner');
  const sliderPicWidth = slider.offsetWidth;
  let count = 0;
  const eventChecker = () => {
    slider.style.transform = `translateX(${-sliderPicWidth * count + 'px'})`;
    if (count === 0) {
      arrowLeft.style.display = 'none';
    }
    if (count > 0 && count < 3) {
      arrowLeft.style.display = '';
      arrowRight.style.display = '';
    }
    if (count === 3) {
      arrowRight.style.display = 'none';
    }
  };
  arrowLeft.style.display = 'none';
  arrowRight.addEventListener('click', () => {
    count += 1;
    eventChecker();
  });
  arrowLeft.addEventListener('click', () => {
    count -= 1;
    eventChecker();
  });
}
