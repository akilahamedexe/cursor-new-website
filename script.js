const menuToggle = document.getElementById("menu-toggle");
const siteNav = document.getElementById("site-nav");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const revealItems = document.querySelectorAll("[data-reveal]");
const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealItems.forEach((item) => revealObserver.observe(item));

const counterElements = document.querySelectorAll(".stat-number");
const counterObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      animateCounter(entry.target);
      observer.unobserve(entry.target);
    });
  },
  { threshold: 0.6 }
);

counterElements.forEach((counter) => counterObserver.observe(counter));

function animateCounter(counterEl) {
  const target = Number(counterEl.dataset.counter || "0");
  const isDecimal = String(counterEl.dataset.counter).includes(".");
  const duration = 1300;
  const startTime = performance.now();

  function frame(now) {
    const progress = Math.min((now - startTime) / duration, 1);
    const value = target * progress;
    counterEl.textContent = isDecimal ? value.toFixed(1) : Math.floor(value).toString();

    if (progress < 1) {
      requestAnimationFrame(frame);
    } else if (!isDecimal) {
      counterEl.textContent = Math.round(target).toString();
    } else {
      counterEl.textContent = target.toFixed(1);
    }
  }

  requestAnimationFrame(frame);
}

const testimonials = Array.from(document.querySelectorAll(".testimonial"));
const nextButton = document.getElementById("next-testimonial");
const prevButton = document.getElementById("prev-testimonial");
let activeIndex = 0;
let testimonialTimer;

function showTestimonial(index) {
  testimonials.forEach((item, idx) => {
    item.classList.toggle("active", idx === index);
  });
}

function moveTestimonial(step) {
  if (!testimonials.length) {
    return;
  }
  activeIndex = (activeIndex + step + testimonials.length) % testimonials.length;
  showTestimonial(activeIndex);
}

if (nextButton && prevButton && testimonials.length) {
  nextButton.addEventListener("click", () => {
    moveTestimonial(1);
    resetTestimonialTimer();
  });

  prevButton.addEventListener("click", () => {
    moveTestimonial(-1);
    resetTestimonialTimer();
  });

  showTestimonial(activeIndex);
  resetTestimonialTimer();
}

function resetTestimonialTimer() {
  window.clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => {
    moveTestimonial(1);
  }, 5000);
}

const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "there").trim();
    formNote.textContent = `Thanks ${name}. SWYM will get back to you within 1 business day.`;
    contactForm.reset();
  });
}
