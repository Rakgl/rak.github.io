<template>
    <div class="row">
        <div class="container-new">
            <h1 class="header-new">New Products</h1>
            <p class="sub-header-new">Check out our collection of the top New Products that encourage conversion.</p>
            <div class="container-new-products">
                <div class="card-container" ref="cardContainer">
                    <div class="new-slide" v-for="(product, index) in products" :key="index">
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
                            <i class="fa-solid fa-star" v-for="n in 5" :key="n"></i>
                            </div>
                            <p class="product-price">{{ product.price }}</p>
                            <button class="btn-select-option">ADD TO CART</button>
                        </div>
                    </div>
                </div>
                <div class="card-prev-new" @click="moveToPrevSlide"><i class="fa-solid fa-chevron-left"></i></div>
                <div class="card-next-new" @click="moveToNextSlide"><i class="fa-solid fa-angle-right"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        products: [
            {
            name: "R-Cat Mid Indoor Court Shoes",
            image1: "/src/assets/new-pro/a1-10-600x600.jpg",
            image2: "/src/assets/new-pro/a2-16-600x600.jpg",
            link: "#",
            price: "$23.90"
            },
            {
            name: "Bandit Reflect Running Shoes",
            image1: "/src/assets/new-pro/a1-9-600x600.jpg",
            image2: "/src/assets/new-pro/a2-15-600x600.jpg",
            link: "#",
            price: "$24.70"
            },
            {
            name: "Preato Gpx Natural Gray Shoes",
            image1: "/src/assets/new-pro/a1-2-600x600 (1).jpg",
            image2: "/src/assets/new-pro/a2-14-600x600.jpg",
            link: "#",
            price: "$22.50"
            },
            {
            name: "Jogger X81 Sportstyle Shoes",
            image1: "/src/assets/new-pro/a1-8-600x600 (1).jpg",
            image2: "/src/assets/new-pro/a2-13-600x600.jpg",
            link: "#",
            price: "$23.20"
            },
            {
            name: "Rider Bulbasaur Sneaker Shoes",
            image1: "/src/assets/new-pro/a1-7-600x600.jpg",
            image2: "/src/assets/new-pro/a2-12-600x600.jpg",
            link: "#",
            price: "$23.50"
            },
            {
            name: "Shoes Sport Athletic Casual Shoes",
            image1: "/src/assets/new-pro/a1-6-600x600.jpg",
            image2: "/src/assets/new-pro/a2-11-600x600.jpg",
            link: "#",
            price: "$50.70"
            },
            {
            name: "Sports Comfortable Running Shoes",
            image1: "/src/assets/new-pro/a1-4-600x600.jpg",
            image2: "/src/assets/new-pro/a2-10-600x600.jpg",
            link: "#",
            price: "$16.50"
            },
            {
            name: "Upper Running Sport Shoes",
            image1: "/src/assets/new-pro/a1-5-600x600.jpg",
            image2: "/src/assets/new-pro/a2-7-600x600.jpg",
            link: "#",
            price: "$19.75"
            },
            {
            name: "Nike Air Max Sport Excee Shoes",
            image1: "/src/assets/new-pro/a1-1-600x600.jpg",
            image2: "/src/assets/new-pro/a2-6-600x600.jpg",
            link: "#",
            price: "$21.90"
            },
            {
            name: "Trainers Michael Trainers Shoes",
            image1: "/src/assets/feature-pro/a1-8-600x600.jpg",
            image2: "/src/assets/new-pro/a2-24-600x600.jpg",
            link: "#",
            price: "$28.70"
            }
        ],
        currentIndex: 0,
        slideWidth: 353  // Adjust this based on your design
        };
    },
    methods: {
        moveToPrevSlide() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            } else {
                this.currentIndex = this.products.length - 4;
            }
            this.updateSlidePosition();
            },
            moveToNextSlide() {
            if (this.currentIndex < this.products.length - 4) {
                this.currentIndex++;
            } else {
                this.currentIndex = 0;
            }
            this.updateSlidePosition();
        },
        updateSlidePosition() {
            this.$refs.cardContainer.style.transition = 'transform 0.5s ease';
            this.$refs.cardContainer.style.transform = `translateX(${-this.currentIndex * this.slideWidth}px)`;
        }
    }
};
</script>