<template>
    <swiper :slides-per-view="3" :space-between="30">
      <swiper-slide v-for="(product, index) in sortedProducts" :key="index">
        <div class="product-item">
          <img :src="product.image1" alt="Product Image">
          <h1>{{ product.name }}</h1>
          <p><span>$</span>{{ product.price }}</p>
          <p>{{ description }}</p>
          <i class="fa-regular fa-eye" @click="openQuickView(product)"></i>
        </div>
      </swiper-slide>
    </swiper>

<div class="quick-view-modal" v-if="isModalOpen">
    <div class="modal-content">
            <span class="close-btn" @click="closeQuickView">&times;</span>
            <div class="pro-img">
            <img :src="selectedProduct.image1" alt="Product Image" style="width: 100%;">
    </div>
    <div class="select-qty">
        <h1 class="product-title">{{ selectedProduct.name }}</h1>
        <br>
        <p class="product-description">{{ selectedProduct.description }}</p>
        <p class="product-price"><span>$</span> {{ selectedProduct.price }}</p>
        <div class="quantity-counter">
            <button class="decrease" @click="decreaseQuantity">-</button>
            <input type="text" v-model.number="quantity" style="text-align: center;">
            <button class="increase" @click="increaseQuantity">+</button>
        </div>
        <p>Total: $ <span id="total-price"> {{ formattedTotalPrice }}</span></p>
        <button class="btn-select-option">ADD TO CART</button>
        </div>
    </div>
</div>

<div v-for="(product, index) in sortedProducts" :key="index">
    <div  class="product-item">
        <img :src="product.image1" alt="Product Image">
        <h1>{{ product.name }}</h1>
        <p><span>$</span>{{ product.price }}</p>
        <p>{{ description }}</p>
        <i class="fa-regular fa-eye" @click="openQuickView(product)"></i>
    </div>
</div>
</template>

<script>

export default {
    data() {
        return {
            isModalOpen: false,
            quantity: 1,
            selectedProduct: null,
            products: [
                {
                name: "R-Cat Mid Indoor Court Shoes",
                image1: "/src/assets/new-pro/a1-10-600x600.jpg",
                image2: "/src/assets/new-pro/a2-16-600x600.jpg",
                link: "#",
                price: 23.90,
                description: "Description for R-Cat Mid Indoor Court Shoes"
                },
                {
                name: "Bandit Reflect Running Shoes",
                image1: "/src/assets/new-pro/a1-9-600x600.jpg",
                image2: "/src/assets/new-pro/a2-15-600x600.jpg",
                link: "#",
                price: 24.70,
                description: "Description for Bandit Reflect Running Shoes"
                },
                {
                name: "Preato Gpx Natural Gray Shoes",
                image1: "/src/assets/new-pro/a1-2-600x600 (1).jpg",
                image2: "/src/assets/new-pro/a2-14-600x600.jpg",
                link: "#",
                price: 22.50,
                description: "Description for Preato Gpx Natural Gray Shoes"
                },
                {
                name: "Jogger X81 Sportstyle Shoes",
                image1: "/src/assets/new-pro/a1-8-600x600 (1).jpg",
                image2: "/src/assets/new-pro/a2-13-600x600.jpg",
                link: "#",
                price: 23.20,
                description: "Description for Jogger X81 Sportstyle Shoes"
                },
                {
                name: "Rider Bulbasaur Sneaker Shoes",
                image1: "/src/assets/new-pro/a1-7-600x600.jpg",
                image2: "/src/assets/new-pro/a2-12-600x600.jpg",
                link: "#",
                price: 23.50,
                description: "Description for Rider Bulbasaur Sneaker Shoes"
                },
                {
                name: "Shoes Sport Athletic Casual Shoes",
                image1: "/src/assets/new-pro/a1-6-600x600.jpg",
                image2: "/src/assets/new-pro/a2-11-600x600.jpg",
                link: "#",
                price: 50.70,
                description: "Description for Shoes Sport Athletic Casual Shoes"
                },
                {
                name: "Sports Comfortable Running Shoes",
                image1: "/src/assets/new-pro/a1-4-600x600.jpg",
                image2: "/src/assets/new-pro/a2-10-600x600.jpg",
                link: "#",
                price: 16.50,
                description: "Description for Sports Comfortable Running Shoes"
                },
                {
                name: "Upper Running Sport Shoes",
                image1: "/src/assets/new-pro/a1-5-600x600.jpg",
                image2: "/src/assets/new-pro/a2-7-600x600.jpg",
                link: "#",
                price: 19.75,
                description: "Complete any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home."
                },
                {
                name: "Nike Air Max Sport Excee Shoes",
                image1: "/src/assets/new-pro/a1-1-600x600.jpg",
                image2: "/src/assets/new-pro/a2-6-600x600.jpg",
                link: "#",
                price: 21.90,
                description: "Description for Nike Air Max Sport Excee Shoes"
                },
                {
                name: "Trainers Michael Trainers Shoes",
                image1: "/src/assets/feature-pro/a1-8-600x600.jpg",
                image2: "/src/assets/new-pro/a2-24-600x600.jpg",
                link: "#",
                price: 28.70,
                description: "Description for Trainers Michael Trainers Shoes"
                },
                {
                name: "Nike Max Alpha Trainer Shoes",
                image1: "/src/assets/feature-pro/a1-6-325x325.jpg",
                image2: "/src/assets/feature-pro/a2-26-325x325.jpg",
                link: "#",
                price: 28.70,
                description: "Description for Nike Max Alpha Trainer Shoes"
                },
                {
                name: "Men’s Casual Michael Shoes",
                image1: "/src/assets/feature-pro/a1-3-600x600.jpg",
                image2: "/src/assets/feature-pro/a2-27-600x600.jpg",
                link: "#",
                price: 22.90,
                description: "Description for Men’s Casual Michael Shoes"
                },
                {
                name: "Panelled Low-Top Lace-Up Shoes",
                image1: "/src/assets/feature-pro/a1-15-325x325.jpg",
                image2: "/src/assets/feature-pro/a2-17-325x325.jpg",
                link: "#",
                price: 34.80,
                description: "Description for Panelled Low-Top Lace-Up Shoes"
                },
                {
                name: "Black Men’s Sneakers Shoes",
                image1: "/src/assets/feature-pro/a1-13-600x600.jpg",
                image2: "/src/assets/feature-pro/a2-19-600x600.jpg",
                link: "#",
                price: 41.70,
                description: "Description for Black Men’s Sneakers Shoes"
                },
                {
                name: "Trainers Michael Metcon Shoes",
                image1: "/src/assets/feature-pro/a1-2-600x600.jpg",
                image2: "/src/assets/feature-pro/a2-20-600x600.jpg",
                link: "#",
                price: 40.00,
                description: "Description for Trainers Michael Metcon Shoes"
                },
                {
                name: "Trekking Shoes For Men",
                image1: "/src/assets/feature-pro/a1-11-600x600.jpg",
                image2: "/src/assets/feature-pro/a2-21-600x600.jpg",
                link: "#",
                price: 38.00,
                description: "Complete any room with Alexa. Our most popular smart speaker has a sleek, compact design that fits perfectly into small spaces. It delivers crisp vocals and balanced bass for full sound you can enjoy anywhere in your home."
                }
            ]
        };
    },
    computed: {
        totalPrice() {
            return this.quantity * this.selectedProduct.price;
        },
        formattedTotalPrice() {
            return this.totalPrice.toFixed(2);
        },
        sortedProducts() {
            return this.products.slice().sort((a, b) => {
                switch (this.sortCriteria) {
                case 'price_low_high':
                    return parseFloat(a.price.slice(1)) + parseFloat(b.price.slice(1));
                case 'price_high_low':
                    return parseFloat(b.price.slice(1)) + parseFloat(a.price.slice(1));
                case 'name':
                default:
                    return a.name.localeCompare(b.name);
                }
            });
        }
    },
    methods: {
        openQuickView(product) {
            this.selectedProduct = product;
            this.quantity = 1;
            this.isModalOpen = true;
            document.body.style.overflow = 'hidden';
        },
        closeQuickView() {
            this.isModalOpen = false;
            document.body.style.overflow = 'auto';
        },
        decreaseQuantity() {
            if (this.quantity > 1) {
            this.quantity--;
            }
        },
        increaseQuantity() {
            this.quantity++;
        },
        sortProducts() {
            this.$forceUpdate();
        },
        showQuickView(product) {
            this.selectedProduct = product;
            this.$refs.quickView.openQuickView();
        },
    }
};
</script>

