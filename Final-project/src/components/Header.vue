<template>
    <header>
        <h1 class="brand-name"><a href="./home.html">RLASHOE</a></h1>
        <nav class="nav-left">
            <li><a href="./men.html">MEN</a></li>
            <li><a href="./women.html">WOMEN</a></li>
            <li><a href="./collection.html">COLLECTION</a></li>
            <li><a href="./look.html">LOOKBOOK</a></li>
            <li><a href="./sale.html">SALE</a></li>
        </nav>
        <nav class="nav-right">
            <li><a href="./story.html">OUR STORY</a></li>
            <li><a href="./contact.html">CONTACT</a></li>
            <div id="mySidepanel" class="sidepanel">
                <div class="header-panel">
                    <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
                    <h1 class="card-panel">Shopping Card</h1>
                </div>
                <hr>
                <p>No products in the cart.</p>
                <button id="goto" onclick="goto()">continue</button>
            </div>          
            <a href="#"><i id="openbtn" onclick="openNav()" class="fa-solid fa-bag-shopping"></i></a>
            <a href="./login.html"><i class="fa-solid fa-user"></i></a>
        </nav>
    </header>
</template>

<style>
    
</style>