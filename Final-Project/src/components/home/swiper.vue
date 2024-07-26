<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="swiper-slide" v-for="(slide, index) in slides" :key="index">
                <img :src="slide.imgSrc" :alt="slide.altText">
                <div class="overlay-text">
                <p>{{ slide.overlayText1 }}</p>
                <h1 v-html="slide.overlayText2"></h1>
                <p>{{ slide.overlayText3 }}</p>
                <br>
                <a href="#" @click.prevent="clickme(slide)" class="btn-shop-now">Shop Now</a>
                </div>
            </div>
        </div>
        <div @click="showPrevSlide" class="swiper-button-prev"><i class="fa-solid fa-chevron-left"></i></div>
        <div @click="showNextSlide" class="swiper-button-next"><i class="fa-solid fa-angle-right"></i></div>
    </div>
</template>
<script>
export default {
data() {
    return {
    slides: [
        {
        imgSrc: '/src/assets/img/main-banner-1-1.jpg',
        altText: 'Image 1',
        overlayText1: 'Hurry Limited Time Offer Only!',
        overlayText2: 'Shop Shoes <br> Online For Men',
        overlayText3: 'Get All Latest Information On Events, Sales Offers'
        },
        {
        imgSrc: '/src/assets/img/main-banner-2-1.jpg',
        altText: 'Image 2',
        overlayText1: 'Hurry Limited Time Offer Only!',
        overlayText2: 'Buy Best <br> Branded Shoes',
        overlayText3: 'Explore Online Branded Shoes For Men At An Affordable Price'
        },
        {
        imgSrc: '/src/assets/img/main-banner-3-1.jpg',
        altText: 'Image 3',
        overlayText1: 'Hurry Limited Time Offer Only!',
        overlayText2: 'Stylish Men\'s <br> Footwear Collection',
        overlayText3: 'Explore Online Branded Shoes For Men At An Affordable Price'
        }
    ],
    currentIndex: parseInt(localStorage.getItem('currentIndex')) || 0,
    slideInterval: 6000,
    autoSlide: null
    };
},
mounted() {
    this.autoSlide = setInterval(this.showNextSlide, this.slideInterval);
},

methods: {
    updateSlidePosition() {
    // Ensure currentIndex is within the valid range
    if (this.currentIndex < 0) {
        this.currentIndex = this.slides.length - 1;
    } else if (this.currentIndex >= this.slides.length) {
        this.currentIndex = 0;
    }
    localStorage.setItem('currentIndex', this.currentIndex);
    },
    showNextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
    this.updateSlidePosition();
    },
    showPrevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
    this.updateSlidePosition();
    },
    clickme(slide) {
    console.log('Shop Now clicked for:', slide);
    
    }
}
};
</script>
