<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/valid-template-root -->
// eslint-disable-next-line vue/valid-template-root, vue/valid-template-root
<template>
    <div class="row">
        <div class="container-deal">
            <h1 class="title-dea">Deals of the Week</h1>
            <p class="sub-dea">Check out our collection of the top New Products that encourage conversion.</p>
            <div class="include-pro-dea">
            <div class="container-card-dea-pro">
                <div class="container-card-dea" ref="cardContainer">
                    <div class="card-dea" v-for="(card, index) in cards" :key="index">
                        <div class="card-dea-left">
                            <span class="percent-dis">{{ card.discount }}</span>
                            <img :src="card.image" alt="">
                        </div>
                        <div class="card-dea-right">
                            <a :href="card.link">{{ card.name }}</a>
                            <div class="all-star-dea">
                            <i v-for="star in 5" :key="star" class="fa-solid fa-star"></i>
                        </div>
                        <p class="price-dea">
                            <span class="dis-price">{{ card.originalPrice }}</span> {{ card.salePrice }}
                        </p>
                        <div class="countdown">
                            <div class="countdown-item" id="day">{{ card.countdown.day }}</div>
                            <div class="countdown-item" id="hour">{{ card.countdown.hour }}</div>
                            <div class="countdown-item" id="minute">{{ card.countdown.minute }}</div>
                            <div class="countdown-item" id="second">{{ card.countdown.second }}</div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div class="swiper-button-prev-dea" @click="slidePrev"><i class="fa-solid fa-chevron-left"></i></div>
            <div class="swiper-button-next-dea" @click="slideNext"><i class="fa-solid fa-chevron-right"></i></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        currentIndex: 0,
        cards: [
            {
            image: "/src/assets/feature-pro/a1-14.jpg",
            name: "Nike Metcon Rapper DSX Shoes",
            discount: "-13%",
            originalPrice: "$45.70",
            salePrice: "$34.90",
            countdown: { day: "00", hour: "00", minute: "00", second: "00" },
            link: "#"
            },
            {
            image: "/src/assets/new-pro/a1-2-600x600 (1).jpg",
            name: "Presto Gpx Natural Gray For Woemn Shoes",
            discount: "-12%",
            originalPrice: "$22.50",
            salePrice: "$19.90",
            countdown: { day: "00", hour: "00", minute: "00", second: "00" },
            link: "#"
            },
            {
            image: "/src/assets/new-pro/a1-4-600x600.jpg",
            name: "Sport Comfortable Running Shoes",
            discount: "-13%",
            originalPrice: "$19.00",
            salePrice: "$16.50",
            countdown: { day: "00", hour: "00", minute: "00", second: "00" },
            link: "#"
            },
            {
            image: "/src/assets/feature-pro/a1-9.jpg",
            name: "Blue Running Shoes For Men Shoes",
            discount: "-10%",
            originalPrice: "$21.90",
            salePrice: "$17.70",
            countdown: { day: "00", hour: "00", minute: "00", second: "00" },
            link: "#"
            }
        ]
        };
    },
    methods: {
        updateSlidePosition() {
        this.$refs.cardContainer.style.transition = 'transform 0.5s ease';
        this.$refs.cardContainer.style.transform = `translateX(${-this.currentIndex * 470}px)`;
        },
        slidePrev() {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.cards.length - 3;
        }
        this.updateSlidePosition();
        },
        slideNext() {
        if (this.currentIndex < this.cards.length - 3) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
        this.updateSlidePosition();
        },
        updateCountdown(card) {
        const endDate = new Date(new Date().getTime() + 720 * 60 * 60 * 1000); // 24 hours from now
        const update = () => {
            const now = new Date();
            const timeDiff = endDate - now;

            if (timeDiff <= 0) {
            clearInterval(interval);
            card.countdown = { day: '00', hour: '00', minute: '00', second: '00' };
            return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            card.countdown = {
            day: String(days).padStart(2, '0'),
            hour: String(hours).padStart(2, '0'),
            minute: String(minutes).padStart(2, '0'),
            second: String(seconds).padStart(2, '0')
            };
        };

        update();
        const interval = setInterval(update, 1000);
        }
    },
    mounted() {
        this.cards.forEach(card => {
        this.updateCountdown(card);
        });
    }
};
</script>