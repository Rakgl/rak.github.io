<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="container-banner">
        <div class="row">
            <div class="banner-txt">
                <p>Huge Collection Of Men Shoes</p>
                <h1>Men Comfortable
                <br>Style Shoes</h1>
                <h3>A small shop which sells expensive design.</h3>
                <a href="" class="btn-shop-now">SHOP NOW</a>
            </div>
        </div>
    </div>
    <div class="carousel-back">
    <div class="carousel" ref="carousel">
      <div class="carousel-item" v-for="(text, index) in carouselItems" :key="index">
        <span v-for="(char, charIndex) in text" :key="charIndex" class="carousel-char">{{ char }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        "Add discount code on a Checkout page!",
        "Get super discount on first order : FLAT50",
        "Add discount code on a Checkout page!",
        "Get super discount on first order : FLAT50",
        "Add discount code on a Checkout page!",
        "Get super discount on first order : FLAT50",
        "Add discount code on a Checkout page!",
        "Get super discount on first order : FLAT50",
        "Add discount code on a Checkout page!",
        "Get super discount on first order : FLAT50",
        "Add discount code on a Checkout page!",
        "Get super discount on first order : FLAT50"
      ],
      currentIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.animateCarousel();
  },
  methods: {
    animateCarousel() {
      const carousel = this.$refs.carousel;
      const items = carousel.querySelectorAll('.carousel-item');

      items.forEach(item => {
        const text = item.textContent;
        item.innerHTML = '';
        for (let char of text) {
          const span = document.createElement('span');
          span.className = 'carousel-char';
          span.textContent = char;
          item.appendChild(span);
        }
      });

      this.intervalId = setInterval(() => {
        this.moveToNextLetter();
      }, 80);

      carousel.addEventListener('mouseover', this.stopCarousel);
      carousel.addEventListener('mouseout', this.startCarousel);
    },
    moveToNextLetter() {
      this.currentIndex++;
      const totalLetters = this.$refs.carousel.querySelectorAll('.carousel-char').length;
      const itemWidth = 8; // Adjust as per your design

      this.$refs.carousel.style.transform = `translateX(-${this.currentIndex * itemWidth}px)`;

      if (this.currentIndex >= totalLetters) {
        setTimeout(() => {
          this.$refs.carousel.style.transition = 'none';
          this.currentIndex = 0;
          this.$refs.carousel.style.transform = `translateX(0)`;
          setTimeout(() => this.$refs.carousel.style.transition = 'transform 0.1s ease-out', 100);
        }, 100);
      }
    },
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.moveToNextLetter();
      }, 80);
    },
    stopCarousel() {
      clearInterval(this.intervalId);
    }
  },
//   beforeDestroy() {
//     clearInterval(this.intervalId);
//   }
};
</script>