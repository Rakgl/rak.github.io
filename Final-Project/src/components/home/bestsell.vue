<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="row">
        <div class="container-bestsell">
    <h1 class="header-bestsell">BestSell Products</h1>
    <p class="sub-header-bestsell">Check out our collection of the top BestSell Products that encourage conversion.</p>
    <div class="container-bestsell-products">
      <div class="best-card-container" ref="cardContainer">
        <div class="bestsell-slide" v-for="(product, idx) in bestSellProducts" :key="idx">
          <div class="product-images">
            <div class="product-image">
              <img :src="product.image1" alt="">
              <img class="primary-image" :src="product.image2" alt="">
              <i class="fa-regular fa-heart"></i>
              <i class="fa-solid fa-layer-group"></i>
              <i class="fa-regular fa-eye"></i>
            </div>
          </div>
          <div class="product-details">
            <a :href="product.link">{{ product.name }}</a>
            <br>
            <div class="rating-stars">
              <i v-for="n in 5" :key="n" class="fa-solid fa-star"></i>
            </div>
            <p class="product-price">{{ product.price }}</p>
            <button class="btn-select-option">ADD TO CARD</button>
          </div>
        </div>
      </div>
      <div class="card-prev-bestsell" @click="prevSlide"><i class="fa-solid fa-chevron-left"></i></div>
      <div class="card-next-bestsell" @click="nextSlide"><i class="fa-solid fa-angle-right"></i></div>
    </div>
  </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            bestSellProducts: [
            {
                name: "Bandit Reflect Running Shoes",
                image1: "/src/assets/new-pro/a1-9-600x600.jpg",
                image2: "/src/assets/new-pro/a2-15-600x600.jpg",
                price: "$24.70",
                link: "#"
            },
            {
                name: "R-Cat Mid Indoor Court Shoes",
                image1: "/src/assets/new-pro/a1-10-600x600.jpg",
                image2: "/src/assets/new-pro/a2-16-600x600.jpg",
                price: "$23.90",
                link: "#"
            },
            {
                name: "Jogger X81 Sportstyle Shoes",
                image1: "/src/assets/new-pro/a1-8-600x600 (1).jpg",
                image2: "/src/assets/new-pro/a2-13-600x600.jpg",
                price: "$23.20",
                link: "#"
            },
            {
                name: "Preato Gpx Natural Gray Shoes",
                image1: "/src/assets/new-pro/a1-2-600x600 (1).jpg",
                image2: "/src/assets/new-pro/a2-14-600x600.jpg",
                price: "$22.50",
                link: "#"
            },
            {
            name: "Rider Bulbasaur Sneaker Shoes",
            image1: "/src/assets/new-pro/a1-7-600x600.jpg",
            image2: "/src/assets/new-pro/a2-12-600x600.jpg",
            price: "$23.50",
            link: "#"
            },
            {
            name: "Shoes Sport Athletic Casual Shoes",
            image1: "/src/assets/new-pro/a1-6-600x600.jpg",
            image2: "/src/assets/new-pro/a2-11-600x600.jpg",
            price: "$50.70",
            link: "#"
            },
            {
            name: "Upper Running Sport Shoes",
            image1: "/src/assets/new-pro/a1-5-600x600.jpg",
            image2: "/src/assets/new-pro/a2-7-600x600.jpg",
            price: "$19.75",
            link: "#"
            },
            {
            name: "Sports Comfortable Running Shoes",
            image1: "/src/assets/new-pro/a1-4-600x600.jpg",
            image2: "/src/assets/new-pro/a2-10-600x600.jpg",
            price: "$16.50",
            link: "#"
            },
            {
            name: "Trainers Michael Trainers Shoes",
            image1: "/src/assets/feature-pro/a1-8-600x600.jpg",
            image2: "/src/assets/new-pro/a2-24-600x600.jpg",
            price: "$28.70",
            link: "#"
            },
            {
            name: "Nike Air Max Sport Excee Shoes",
            image1: "/src/assets/new-pro/a1-1-600x600.jpg",
            image2: "/src/assets/new-pro/a2-6-600x600.jpg",
            price: "$21.90",
            link: "#"
            },
        ],
        currentIndex: 0
        };
    },
    methods: {
        updateSlidePosition() {
        const cardContainer = this.$refs.cardContainer;
        cardContainer.style.transition = 'transform 0.5s ease';
        cardContainer.style.transform = `translateX(${-this.currentIndex * 352}px)`;
        },
        prevSlide() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.bestSellProducts.length - 4;
        }
        this.updateSlidePosition();
        },
        nextSlide() {
        if (this.currentIndex < this.bestSellProducts.length - 4) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.updateSlidePosition();
        }
    },
    mounted() {
        // Optionally, you can add any initializations or API calls here
    }
};
</script>