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
if ("IntersectionObserver" in window) {
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
} else {
  revealItems.forEach((item) => item.classList.add("show"));
}

const parallaxItems = document.querySelectorAll("[data-parallax]");
let parallaxFrame = null;

function updateParallax() {
  const viewport = window.innerHeight || 1;
  parallaxItems.forEach((item) => {
    const factor = Number(item.dataset.parallax || "0");
    const rect = item.getBoundingClientRect();
    const centeredOffset = rect.top + rect.height / 2 - viewport / 2;
    const y = Math.max(-28, Math.min(28, centeredOffset * factor * -0.18));
    item.style.setProperty("--parallax-y", `${y.toFixed(2)}px`);
  });
  parallaxFrame = null;
}

function requestParallaxUpdate() {
  if (parallaxFrame === null) {
    parallaxFrame = window.requestAnimationFrame(updateParallax);
  }
}

window.addEventListener("scroll", requestParallaxUpdate, { passive: true });
window.addEventListener("resize", requestParallaxUpdate);
window.addEventListener("load", requestParallaxUpdate);
requestParallaxUpdate();

const counterElements = document.querySelectorAll(".stat-number");
if ("IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.6 }
  );
  counterElements.forEach((counter) => counterObserver.observe(counter));
} else {
  counterElements.forEach((counter) => animateCounter(counter));
}

function animateCounter(counterEl) {
  const target = Number(counterEl.dataset.counter || "0");
  const isDecimal = String(counterEl.dataset.counter || "").includes(".");
  const duration = 1200;
  const start = performance.now();

  function frame(now) {
    const progress = Math.min((now - start) / duration, 1);
    const value = target * progress;
    counterEl.textContent = isDecimal ? value.toFixed(1) : Math.floor(value).toString();
    if (progress < 1) {
      requestAnimationFrame(frame);
    } else {
      counterEl.textContent = isDecimal ? target.toFixed(1) : Math.round(target).toString();
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

function resetTestimonialTimer() {
  window.clearInterval(testimonialTimer);
  testimonialTimer = window.setInterval(() => {
    moveTestimonial(1);
  }, 5000);
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

const contactForm = document.getElementById("contact-form");
const formNote = document.getElementById("form-note");
const formSubmit = document.getElementById("form-submit");

if (contactForm && formNote) {
  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    formNote.classList.remove("success", "error");

    const defaultLabel = formSubmit ? formSubmit.textContent : "Send request";
    if (formSubmit) {
      formSubmit.disabled = true;
      formSubmit.textContent = "Sending...";
    }

    try {
      const formData = new FormData(contactForm);
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      let data = {};
      try {
        data = await response.json();
      } catch (parseError) {
        data = {};
      }

      if (response.ok && data.success) {
        const name = String(formData.get("name") || "there").trim();
        const apiMessage =
          typeof data.message === "string" && data.message.trim().length
            ? data.message.trim()
            : "Form submitted successfully!";
        formNote.textContent = `${apiMessage} Thanks ${name}. SWYM will get back to you within 1 business day.`;
        formNote.classList.add("success");
        contactForm.reset();
      } else {
        const apiError =
          typeof data.message === "string" && data.message.trim().length
            ? data.message.trim()
            : "Submission failed.";
        formNote.textContent = `${apiError} Please try WhatsApp at +971 52 901 4052 if needed.`;
        formNote.classList.add("error");
      }
    } catch (error) {
      formNote.textContent = "Network issue. Please try again or contact us on WhatsApp.";
      formNote.classList.add("error");
    } finally {
      if (formSubmit) {
        formSubmit.disabled = false;
        formSubmit.textContent = defaultLabel;
      }
    }
  });
}
