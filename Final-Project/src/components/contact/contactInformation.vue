<template>
    <div class="row">
        <div class="general-header">
            <span><RouterLink to="/">Home</RouterLink> / Contact Us</span>
            <br><br>
            <h1>Contact Us</h1>
        </div>
        <div class="container-contact">
            <div class="contact-left">
                <h2>Contact Information</h2>
                <div class="contact-txt">
                    <i class="fa-solid fa-location-dot"></i>
                    <div class="contact-txt-inline">
                        <h3>Our Location</h3><br>
                        <p>3308 Bassell Avenue, Los Angeles <br>
                        Califronia, United State</p>
                    </div>
                </div>
                <div class="contact-txt">
                    <i class="fa-solid fa-phone"></i>
                    <div class="contact-txt-inline">
                        <h3>Phone Number</h3><br>
                        <p>+001 123 4567 <br>
                        +001 456 7890</p>
                    </div>
                </div>
                <div class="contact-txt">
                    <i class="fa-solid fa-envelope"></i>
                    <div class="contact-txt-inline">
                        <h3>Email Address</h3><br>
                        <p>rakkosal7@gmail.com</p>
                    </div>
                </div>
                <img src="/src/assets/img/conect-us-img-01.jpg" alt="">
            </div>
            <div class="container-right">
                <div class="contact-from">
                    <h2>Contact us for any questions</h2>
                    <div class="contact-from-include">
                        <label for="name">Your Name</label>
                        <br>
                        <input type="text" v-bind:required="true">
                        <br><br>
                        <label for="email">Your email</label>
                        <br>
                        <input type="email" v-bind:required="true">
                        <br><br>
                        <label for="subject">Subject</label>
                        <br>
                        <input type="text" v-bind:required="true">
                        <br><br>
                        <label for="message">Your message (optional)</label>
                        <br>
                        <textarea name="txt" id="txt" class="txt-area"></textarea>
                    </div>
                    <br>
                    <a class="btn-contact" href="#">SUBMIT</a>
                </div>
            </div>
        </div>
    </div>
</template>