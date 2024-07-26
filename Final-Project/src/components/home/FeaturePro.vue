<template>
    <div class="row">
        <div class="container-feature">
            <h1 class="header-feature">Featured Products</h1>
            <p class="sub-header-feature">Check out our collection of the top Featured Products that encourage conversion.</p>
            <div class="container-fea-pro">
                <div ref="cardWrapper" class="card-wrapper">
                    <div class="feature-slide" v-for="(product, index) in products" :key="index">
                        <div class="images">
                            <div class="image">
                            <img :src="product.img1" alt="">
                            <img class="first" :src="product.img2" alt="">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-layer-group"></i>
                            <i class="fa-regular fa-eye"></i>
                        </div>
                    </div>
                    <div class="line-heigh">
                        <a href="">{{ product.title }}</a>
                        <br>
                        <div class="all-star">
                        <i class="fa-solid fa-star" v-for="star in 5"></i>
                        </div>
                        <p class="price-pro">{{ product.price }}</p>
                        <button class="btn-option">Select Option</button>
                    </div>
                </div>
            </div>
            <div @click="slidePrev" class="card-prev"><i class="fa-solid fa-chevron-left"></i></div>
            <div @click="slideNext" class="card-next"><i class="fa-solid fa-angle-right"></i></div>
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
                img1: '/src/assets/feature-pro/a1-8-600x600.jpg',
                img2: '/src/assets/feature-pro/a2-24-600x600.jpg',
                title: 'Trainers Michael Trainers Shoes',
                price: '$21.90'
                },
                {
                img1: '/src/assets/feature-pro/a1-6-325x325.jpg',
                img2: '/src/assets/feature-pro/a2-26-325x325.jpg',
                title: 'Nike Max Alpha Trainer Shoes',
                price: '$28.70'
                },
                {
                img1: '/src/assets/feature-pro/a1-3-600x600.jpg',
                img2: '/src/assets/feature-pro/a2-27-600x600.jpg',
                title: 'Men’s Casual Michael Shoes',
                price: '$22.90'
                },
                {
                img1: '/src/assets/feature-pro/a1-15-325x325.jpg',
                img2: '/src/assets/feature-pro/a2-17-325x325.jpg',
                title: 'Panelled Low-Top Lace-Up Shoes',
                price: '$34.80'
                },
                {
                img1: '/src/assets/feature-pro/a1-13-600x600.jpg',
                img2: '/src/assets/feature-pro/a2-19-600x600.jpg',
                title: 'Black Men’s Sneakers Shoes',
                price: '$41.70'
                },
                {
                img1: '/src/assets/feature-pro/a1-2-600x600.jpg',
                img2: '/src/assets/feature-pro/a2-20-600x600.jpg',
                title: 'Trainers Michael Metcon Shoes',
                price: '$40.00'
                },
                {
                img1: '/src/assets/feature-pro/a1-11-600x600.jpg',
                img2: '/src/assets/feature-pro/a2-21-600x600.jpg',
                title: 'Trekking Shoes For Men',
                price: '$38.00'
                }
            ],
        index: 0
        };
    },
    methods: {
        updateSlidePosition() {
        this.$refs.cardWrapper.style.transform = `translateX(${-this.index * 352}px)`;
        },
        slidePrev() {
        if (this.index > 0) {
            this.index--;
        } else {
            this.index = this.products.length - 4;
        }
        this.updateSlidePosition();
        },
        slideNext() {
        if (this.index < this.products.length - 4) {
            this.index++;
        } else {
            this.index = 0;
        }
        this.updateSlidePosition();
        }
    }
    };
</script>