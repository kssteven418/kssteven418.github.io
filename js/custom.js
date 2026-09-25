document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(
    ".section-layout, .selected-section, .site-footer"
  );

  if (
    !items.length ||
    !window.IntersectionObserver ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    return;
  }

  items.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 }
  );

  items.forEach((item) => observer.observe(item));
});
