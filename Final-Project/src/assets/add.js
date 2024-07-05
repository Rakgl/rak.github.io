/* eslint-disable no-unused-vars */  
//---------------swiper
document.addEventListener('DOMContentLoaded', () => {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const slides = document.querySelectorAll('.swiper-slide');
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    const slideInterval = 6000;

    let currentIndex = parseInt(localStorage.getItem('currentIndex')) || 0;
    const updateSlidePosition = () => {
        swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    const showNextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlidePosition();
    };

    const showPrevSlide = () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateSlidePosition();
    };

    prevButton.addEventListener('clcik', () => {
        clearInterval(autoSlide);
        showPrevSlide();
        autoSlide = setInterval(showNextSlide, slideInterval);
    });

    nextButton.addEventListener('click', () => {
        clearInterval(autoSlide);
        showNextSlide();
        autoSlide = setInterval(showNextSlide, slideInterval);
    });
    let autoSlide = setInterval(showNextSlide, slideInterval);
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue +=1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue){
        clearInterval(counter);
        }
    },duration);
});
//------------------end-swiper

//-------------------card-swiper
document.addEventListener('DOMContentLoaded', () => {
    const cardWrapper = document.querySelector('.card-wrapper');
    const slides = document.querySelectorAll('.feature-slide');
    const prevBtn = document.querySelector('.card-prev');
    const nextBtn = document.querySelector('.card-next');
    let index = 0;

    const updateSlidePosition = () => {
        cardWrapper.style.transform = `translateX(${-index * 352}px)`;
    };

    prevBtn.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 4;
        }
        updateSlidePosition();
    });

    nextBtn.addEventListener('click', () => {
        if (index < slides.length - 4) {
            index++;
        } else {
            index = 0;
        }
        updateSlidePosition();
    });
});
//-------------------end-card-swiper

//---------------------slide-auto
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let items = document.querySelectorAll('.carousel-item');

    items.forEach(item => {
        const text = item.textContent;
        item.innerHTML = '';
        for (let char of text) {
            const span = document.createElement('span');
            span.className = 'carousel-item';
            span.textContent = char;
            item.appendChild(span);
        }
    });

    let currentIndex = 0;
    let intervalId;

    function moveToNextLetter() {
        currentIndex++;
        const totalLetters = document.querySelectorAll('.carousel-item').length;
        const itemWidth = 8; // Adjust as per your design
    
        carousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    
        if (currentIndex >= totalLetters) {
            setTimeout(() => {
                carousel.style.transition = 'none';
                currentIndex = 0;
                carousel.style.transform = `translateX(0)`;
                setTimeout(() => carousel.style.transition = 'transform 0.1s ease-out', 100);
            }, 100);
        }
    }
    
    function startCarousel() {
        intervalId = setInterval(moveToNextLetter, 80);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    carousel.addEventListener('mouseover', stopCarousel);
    carousel.addEventListener('mouseout', startCarousel);

    startCarousel();
});
//-------------------end-slide-auto

//-------------------new-card-swiper
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');
    const slides = document.querySelectorAll('.new-slide');
    const prevBtnNew = document.querySelector('.card-prev-new');
    const nextBtnNew = document.querySelector('.card-next-new');
    let index = 0;

    const updateSlidePosition = () => {
        cardContainer.style.transition = 'transform 0.5s ease';
        cardContainer.style.transform = `translateX(${-index * 352}px)`;
    };

    prevBtnNew.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = slides.length - 4;
        }
        updateSlidePosition();
    });

    nextBtnNew.addEventListener('click', () => {
        if (index < slides.length - 4) {
            index++;
        } else {
            index = 0;
        }
        updateSlidePosition();
    });
});
//--------------------end-new-card-swiper

//----------------------time-countdown
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.swiper-button-prev-dea');
    const nextButton = document.querySelector('.swiper-button-next-dea');
    const cardContainer = document.querySelector('.container-card-dea');
    const cards = document.querySelectorAll('.card-dea');

    let currentIndex = 0;

    const updateSlidePositionDea = () => {
        cardContainer.style.transition = 'transform 0.5s ease';
        cardContainer.style.transform = `translateX(${-currentIndex * 460}px)`;
    };

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = cards.length - 3;
        }
        updateSlidePositionDea();
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < cards.length - 3) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateSlidePositionDea();
    });

    const updateSlidePositioncount = () => {
        const newTransformValue = -currentIndex * 100 + '%';
        cards.style.transform = `translateX(${newTransformValue})`;
    };

    const countdownElements = document.querySelectorAll('.countdown');

    countdownElements.forEach(countdown => {
        const endDate = new Date(new Date().getTime() + 720 * 60 * 60 * 1000); // 24 hours from now

        const updateCountdown = () => {
            const now = new Date();
            const timeDiff = endDate - now;

            if (timeDiff <= 0) {
                clearInterval(interval);
                countdown.querySelector('#day').textContent = '00';
                countdown.querySelector('#hour').textContent = '00';
                countdown.querySelector('#minute').textContent = '00';
                countdown.querySelector('#second').textContent = '00';
                return;
            }

            const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

            countdown.querySelector('#day').textContent = String(days).padStart(2, '0');
            countdown.querySelector('#hour').textContent = String(hours).padStart(2, '0');
            countdown.querySelector('#minute').textContent = String(minutes).padStart(2, '0');
            countdown.querySelector('#second').textContent = String(seconds).padStart(2, '0');
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
    });
});
//---------------------end-time-countdown

//---------------------------best-sell-product
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.best-card-container');
    const bestSell = document.querySelectorAll('.bestsell-slide');
    const prevBtnBestSell = document.querySelector('.card-prev-bestsell');
    const nextBtnBestSell = document.querySelector('.card-next-bestsell');
    let index = 0;

    const updateSlidePositionBest = () => {
        cardContainer.style.transition = 'transform 0.5s ease';
        cardContainer.style.transform = `translateX(${-index * 352}px)`;
    };

    prevBtnBestSell.addEventListener('click', () => {
        if (index > 0) {
            index--;
        } else {
            index = bestSell.length - 4;
        }
        updateSlidePositionBest();
    });

    nextBtnBestSell.addEventListener('click', () => {
        if (index < bestSell.length - 4) {
            index++;
        } else {
            index = 0;
        }
        updateSlidePositionBest();
    });
});
//--------------------------end-best-sell-product

// -----------------collapsible----------------
document.addEventListener('DOMContentLoaded', function () {
    const collapsibles = document.querySelectorAll('.collapsible');
  
    collapsibles.forEach(collapsible => {
        collapsible.addEventListener('click', function () {
        // Close all open content sections
        collapsibles.forEach(item => {
            if(item !== this && item.classList.contains('active')){
                item.classList.remove('active');
                item.nextElementSibling.style.maxHeight = null;
                item.querySelector('.icon').classList.replace('fa-solid fa-plus', 'fa-chevron-down');
            }
        });
  
        // Toggle the clicked collapsible section
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        const icon = this.querySelector('.icon');
        if(content.style.maxHeight){
            content.style.maxHeight = null;
            icon.classList.replace('fa-chevron-up', 'fa-chevron-down');
        } 
        else{
            content.style.maxHeight = content.scrollHeight + 'px';
            icon.classList.replace('fa-chevron-down', 'fa-solid fa-plus"');
        }
        });
    });
});
// --------------end-collapsible---------------