/* eslint-disable operator-linebreak */
/* eslint-disable no-inner-declarations */

const viewportFix = (width) => {
  const meta = document.querySelector('meta[name="viewport"]');
  meta.setAttribute('content', `user-scalable=no, width=${screen.width <= width ? width : 'device-width'}`);
};

viewportFix(420);

document.addEventListener('DOMContentLoaded', function () {
  const maskOptions = {
    mask: '+7 (000) 000-00-00',
    onFocus: function () {
      if (this.value === '') this.value = '+7 ';
    },
    onBlur: function () {
      if (this.value === '+7 ') this.value = '';
    },
  };

  const maskPhone = () => {
    const maskedElements = document.querySelectorAll('.masked');
    maskedElements.forEach((item) => new IMask(item, maskOptions));
  };

  maskPhone();

  const teamSlider = new Swiper('.team-slider', {
    spaceBetween: 12,
    slidesPerView: 3,
  });

  const header = document.querySelector('.header');

  function checkScroll() {
    if (window.scrollY > 10) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  }

  window.addEventListener('scroll', checkScroll);
});
