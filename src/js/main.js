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
    slidesPerView: 'auto',
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

  const faq = document.querySelector('.faq');
  if (faq) {
    const faqItem = faq.querySelectorAll('.faq-item');
    faqItem.forEach((item) => {
      const title = item.querySelector('.faq-item__title');
      title.addEventListener('click', function () {
        item.classList.toggle('open');
      });
    });
  }

  document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.services-section');

    sections.forEach((section) => {
      const topPosition = section.getBoundingClientRect().top;
      if (topPosition <= 0) {
        section.classList.add('show');
      } else {
        section.classList.remove('show');
      }
    });
  });

  const burger = document.querySelector('.header-burger');
  const nav = document.querySelector('.header-nav');
  burger.addEventListener('click', function () {
    header.classList.toggle('show');
    nav.classList.toggle('show');
    burger.classList.toggle('show');
  });

  const cc = initCookieConsent();
  cc.run({
    gui_options: {
      consent_modal: { layout: 'box', position: 'bottom right', transition: 'slide', swap_buttons: !0 },
      settings_modal: { layout: 'box', position: 'left', transition: 'slide' },
    },
    current_lang: 'en',
    autoclear_cookies: !0,
    page_scripts: !0,
    onFirstAction: function (e, t) {},
    onAccept: function (e) {},
    onChange: function (e, t) {},
    languages: {
      en: {
        consent_modal: {
          title: 'We use cookies!',
          description:
            'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <button type="button" data-cc="c-settings" class="cc-link">Let me choose</button>',
          primary_btn: { text: 'Accept all', role: 'accept_all' },
          secondary_btn: { text: 'Reject all', role: 'accept_necessary' },
        },
        settings_modal: {
          title: 'Cookie preferences',
          save_settings_btn: 'Save settings',
          accept_all_btn: 'Accept all',
          reject_all_btn: 'Reject all',
          close_btn_label: 'Close',
          cookie_table_headers: [{ col1: 'Name' }, { col2: 'Domain' }, { col3: 'Expiration' }, { col4: 'Description' }],
          blocks: [
            {
              title: 'Cookie usage рџ“ў',
              description:
                'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="/privacy.html" class="cc-link">privacy policy</a>.',
            },
            {
              title: 'Performance and Analytics cookies',
              description: 'These cookies allow the website to remember the choices you have made in the past',
              toggle: { value: 'analytics', enabled: !0, readonly: !1 },
              cookie_table: [
                { col1: '^_ga', col2: 'google.com', col3: '2 years', col4: 'Google analytics ...', is_regex: !0 },
                { col1: '_gid', col2: 'google.com', col3: '1 day', col4: 'Google analytics ...' },
              ],
            },
            {
              title: 'More information',
              description:
                'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="/contact.html">contact us</a>.',
            },
          ],
        },
      },
    },
  });
});
