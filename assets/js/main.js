/**
 * Conference Website Core Scripts
 * Features: Countdown Timer, Track Filtering, Currency Toggle, Mobile Nav, Smooth Scroll
 */

document.addEventListener('DOMContentLoaded', function () {
  // 1. Mobile Navigation Toggle
  const toggleBtn = document.querySelector('.navbar-toggle');
  const navMenu = document.querySelector('.nav-menu');

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      const expanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !expanded);
    });
  }

  // Close mobile nav on clicking outside
  document.addEventListener('click', function (e) {
    if (navMenu && navMenu.classList.contains('active') && !navMenu.contains(e.target) && !toggleBtn.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });

  // 2. Countdown Timer
  // Set submission deadline: e.g. Oct 31, 2026 or dynamic target
  const targetDate = new Date("October 31, 2026 23:59:59 GMT+05:30").getTime();

  function updateTimer() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');

    if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

    if (distance > 0) {
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      daysEl.innerText = String(days).padStart(2, '0');
      hoursEl.innerText = String(hours).padStart(2, '0');
      minutesEl.innerText = String(minutes).padStart(2, '0');
      secondsEl.innerText = String(seconds).padStart(2, '0');
    } else {
      daysEl.innerText = "00";
      hoursEl.innerText = "00";
      minutesEl.innerText = "00";
      secondsEl.innerText = "00";
      const timerInfo = document.querySelector('.countdown-info h4');
      if (timerInfo) timerInfo.innerText = "Submission Closed (Camera Ready in Progress)";
    }
  }

  setInterval(updateTimer, 1000);
  updateTimer();

  // 3. Track Filtering
  const filterBtns = document.querySelectorAll('.track-filter-btn');
  const trackCards = document.querySelectorAll('.track-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');

      const filterCategory = this.getAttribute('data-filter');

      trackCards.forEach(card => {
        if (filterCategory === 'all' || card.getAttribute('data-category') === filterCategory) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Currency Switcher for Registration Table
  const inrBtn = document.getElementById('currencyInr');
  const usdBtn = document.getElementById('currencyUsd');
  const inrPrices = document.querySelectorAll('.price-inr');
  const usdPrices = document.querySelectorAll('.price-usd');

  if (inrBtn && usdBtn) {
    inrBtn.addEventListener('click', function () {
      inrBtn.classList.add('active');
      usdBtn.classList.remove('active');
      inrPrices.forEach(p => p.style.display = 'inline');
      usdPrices.forEach(p => p.style.display = 'none');
    });

    usdBtn.addEventListener('click', function () {
      usdBtn.classList.add('active');
      inrBtn.classList.remove('active');
      inrPrices.forEach(p => p.style.display = 'none');
      usdPrices.forEach(p => p.style.display = 'inline');
    });
  }

  // 5. Committee Tab Filter
  const committeeTabs = document.querySelectorAll('.committee-tab-btn');
  const committeeGroups = document.querySelectorAll('.committee-group-card');

  committeeTabs.forEach(tab => {
    tab.addEventListener('click', function () {
      committeeTabs.forEach(t => t.classList.remove('active'));
      this.classList.add('active');

      const targetGroup = this.getAttribute('data-target');

      committeeGroups.forEach(group => {
        if (targetGroup === 'all' || group.getAttribute('data-group') === targetGroup) {
          group.style.display = 'block';
        } else {
          group.style.display = 'none';
        }
      });
    });
  });

  // 6. Back to Top Button
  const backToTopBtn = document.getElementById('backToTop');
  if (backToTopBtn) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 350) {
        backToTopBtn.classList.add('show');
      } else {
        backToTopBtn.classList.remove('show');
      }
    });

    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 7. Contact Form Submission Feedback
  const contactForm = document.getElementById('conferenceContactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const feedback = document.getElementById('formFeedback');
      if (feedback) {
        feedback.innerHTML = `
          <div style="background: #dcfce7; border: 1px solid #86efac; color: #166534; padding: 12px 18px; border-radius: 8px; margin-top: 15px;">
            <strong>Thank you!</strong> Your message has been received. The conference secretariat will get back to you within 24 hours.
          </div>
        `;
        contactForm.reset();
      }
    });
  }
});
