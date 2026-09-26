// v-reveal: adds "is-visible" class once the element scrolls into view.
// Pairs with the .reveal / .reveal.is-visible rules in style.css.
export const reveal = {
  mounted(el) {
    el.classList.add('reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
  }
}
