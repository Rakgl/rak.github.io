<script setup>
    import Quickview from '../shop/Quickview.vue';
</script>
<template>
    <div class="row">
        <div class="general-header">
            <span><RouterLink to="/">Home</RouterLink> / Shop</span>
            <br><br>
            <h1>Shop</h1>
            <div class="sort-product">
                <select class="choose-option" v-model="sortCriteria" @change="sortProducts">
                <option value="name">Sort by Name</option>
                <option value="price_low_high">Sort by Price: Low to High</option>
                <option value="price_high_low">Sort by Price: High to Low</option>
                </select>
                <div class="container-shop">
                    <div class="new-slide" v-for="(product, index) in sortedProducts" :key="index">
                        <div class="product-images">
                            <div class="product-image">
                            <img :src="product.image1" alt="">
                            <img class="primary-image" :src="product.image2" alt="">
                            <i class="fa-regular fa-heart"></i>
                            <i class="fa-solid fa-layer-group"></i>
                            <i class="fa-regular fa-eye" @click="openQuickView"></i>
                            <Quickview/>
                            </div>
                        </div>
                        <div class="product-details">
                            <a :href="product.link">{{ product.name }}</a>
                            <br>
                            <div class="rating-stars">
                                <i class="fa-solid fa-star" v-for="n in 5" :key="n"></i>
                            </div>
                            <p class="product-price">{{ product.price }}</p>
                            <button  class="btn-select-option">ADD TO CART</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        number:0,
        sortCriteria: 'name',
        increaseNumber() {
            this.number++;
        },
            products: [
            {
            name: "R-Cat Mid Indoor Court Shoes",
            image1: "/src/assets/new-pro/a1-10-600x600.jpg",
            image2: "/src/assets/new-pro/a2-16-600x600.jpg",
            link: "#",
            price: "$23.90",
            description: "Description for R-Cat Mid Indoor Court Shoes"
            },
            {
            name: "Bandit Reflect Running Shoes",
            image1: "/src/assets/new-pro/a1-9-600x600.jpg",
            image2: "/src/assets/new-pro/a2-15-600x600.jpg",
            link: "#",
            price: "$24.70",
            description: "Description for Bandit Reflect Running Shoes"
            },
            {
            name: "Preato Gpx Natural Gray Shoes",
            image1: "/src/assets/new-pro/a1-2-600x600 (1).jpg",
            image2: "/src/assets/new-pro/a2-14-600x600.jpg",
            link: "#",
            price: "$22.50",
            description: "Description for Preato Gpx Natural Gray Shoes"
            },
            {
            name: "Jogger X81 Sportstyle Shoes",
            image1: "/src/assets/new-pro/a1-8-600x600 (1).jpg",
            image2: "/src/assets/new-pro/a2-13-600x600.jpg",
            link: "#",
            price: "$23.20",
            description: "Description for Jogger X81 Sportstyle Shoes"
            },
            {
            name: "Rider Bulbasaur Sneaker Shoes",
            image1: "/src/assets/new-pro/a1-7-600x600.jpg",
            image2: "/src/assets/new-pro/a2-12-600x600.jpg",
            link: "#",
            price: "$23.50",
            description: "Description for Rider Bulbasaur Sneaker Shoes"
            },
            {
            name: "Shoes Sport Athletic Casual Shoes",
            image1: "/src/assets/new-pro/a1-6-600x600.jpg",
            image2: "/src/assets/new-pro/a2-11-600x600.jpg",
            link: "#",
            price: "$50.70",
            description: "Description for Shoes Sport Athletic Casual Shoes"
            },
            {
            name: "Sports Comfortable Running Shoes",
            image1: "/src/assets/new-pro/a1-4-600x600.jpg",
            image2: "/src/assets/new-pro/a2-10-600x600.jpg",
            link: "#",
            price: "$16.50",
            description: "Description for Sports Comfortable Running Shoes"
            },
            {
            name: "Upper Running Sport Shoes",
            image1: "/src/assets/new-pro/a1-5-600x600.jpg",
            image2: "/src/assets/new-pro/a2-7-600x600.jpg",
            link: "#",
            price: "$19.75",
            description: "Description for Upper Running Sport Shoes"
            },
            {
            name: "Nike Air Max Sport Excee Shoes",
            image1: "/src/assets/new-pro/a1-1-600x600.jpg",
            image2: "/src/assets/new-pro/a2-6-600x600.jpg",
            link: "#",
            price: "$21.90",
            description: "Description for Nike Air Max Sport Excee Shoes"
            },
            {
            name: "Trainers Michael Trainers Shoes",
            image1: "/src/assets/feature-pro/a1-8-600x600.jpg",
            image2: "/src/assets/new-pro/a2-24-600x600.jpg",
            link: "#",
            price: "$28.70",
            description: "Description for Trainers Michael Trainers Shoes"
            },
            {
            name: "Nike Max Alpha Trainer Shoes",
            image1: "/src/assets/feature-pro/a1-6-325x325.jpg",
            image2: "/src/assets/feature-pro/a2-26-325x325.jpg",
            link: "#",
            price: "$28.70",
            description: "Description for Nike Max Alpha Trainer Shoes"
            },
            {
            name: "Men’s Casual Michael Shoes",
            image1: "/src/assets/feature-pro/a1-3-600x600.jpg",
            image2: "/src/assets/feature-pro/a2-27-600x600.jpg",
            link: "#",
            price: "$22.90",
            description: "Description for Men’s Casual Michael Shoes"
            },
            {
            name: "Panelled Low-Top Lace-Up Shoes",
            image1: "/src/assets/feature-pro/a1-15-325x325.jpg",
            image2: "/src/assets/feature-pro/a2-17-325x325.jpg",
            link: "#",
            price: "$34.80",
            description: "Description for Panelled Low-Top Lace-Up Shoes"
            },
            {
            name: "Black Men’s Sneakers Shoes",
            image1: "/src/assets/feature-pro/a1-13-600x600.jpg",
            image2: "/src/assets/feature-pro/a2-19-600x600.jpg",
            link: "#",
            price: "$41.70",
            description: "Description for Black Men’s Sneakers Shoes"
            },
            {
            name: "Trainers Michael Metcon Shoes",
            image1: "/src/assets/feature-pro/a1-2-600x600.jpg",
            image2: "/src/assets/feature-pro/a2-20-600x600.jpg",
            link: "#",
            price: "$40.00",
            description: "Description for Trainers Michael Metcon Shoes"
            },
            {
            name: "Trekking Shoes For Men",
            image1: "/src/assets/feature-pro/a1-11-600x600.jpg",
            image2: "/src/assets/feature-pro/a2-21-600x600.jpg",
            link: "#",
            price: "$38.00",
            description: "Description for Trekking Shoes For Men"
            }
        ],
        };
    },
    computed: {
        sortedProducts() {
            return this.products.slice().sort((a, b) => {
                switch (this.sortCriteria) {
                case 'price_low_high':
                    return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
                case 'price_high_low':
                    return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
                case 'name':
                default:
                    return a.name.localeCompare(b.name);
                }
            });
        }
    },
    methods: {
        sortProducts() {
            this.$forceUpdate();
        },
        showQuickView(product) {
            this.selectedProduct = product;
            this.$refs.quickView.openQuickView();
        },
    },
};
</script>