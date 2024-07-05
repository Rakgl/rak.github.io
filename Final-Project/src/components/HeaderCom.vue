<!-- <script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script> -->

<template>
    <header>
        <div class="store-note">
            <p>Sale season 50% off on latest items, with FREE shipping worldwide</p>
        </div>
        <div class="row">
            <div class="site-container">
                <div class="site-right">
                    Get Up To 50% OFF New Season Styles, Limited Time Only.
                </div>
                <div class="site-left">
                    <div class="site-icon">
                        <i class="fa-solid fa-mobile-button"></i>
                        Call Us : (+01) 589 559 555
                    </div>
                    <div class="site-icon">
                        <i class="fa-solid fa-envelope"></i>
                        example@gmail.com
                    </div>
                    <div class="site-icon">
                        <i class="fa-solid fa-user"></i>
                        Login
                    </div>
                </div>        
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="header-inline">
                <div class="header-logo">
                    <RouterLink to="/">
                        <img src="../assets/img/Logo.svg" alt="Image">
                    </RouterLink>
                </div>
                <nav>
                    <li><RouterLink to="/" >Home</RouterLink></li>
                    <li><RouterLink to="/shop" >Shop</RouterLink></li>
                    <li><RouterLink to="/blog" >Blog</RouterLink></li>
                    <li><RouterLink to="/about/us" >About Us</RouterLink></li>
                    <li><RouterLink to="/contact/us" >Contact Us</RouterLink></li>
                </nav>
                <div class="order-pro">
                    <RouterLink to="/list/menu"><i class="fa-regular fa-heart"></i></RouterLink>
                    <RouterLink to="/add/to/card"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
                </div>
            </div>
        </div>
    </header>
</template>