<script setup>
    import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="dash-container">
        <div class="dash-left">
            <img src="/src/assets/img/Logo.svg" alt="Image">
            <h2>+ User</h2>
            <RouterLink to="/admin/listuser"><i class="fa-solid fa-user"></i> List User</RouterLink>
            <RouterLink to="/admin/Adduser"><i class="fa-solid fa-user-plus"></i> Create User</RouterLink>
            <RouterLink to="/admin/update/user"><i class="fa-solid fa-user"></i><sup><i class="fa-solid fa-gears"></i></sup> Update User</RouterLink>
            <RouterLink to="/admin/delete/user"><i class="fa-solid fa-user-minus"></i> Delete User</RouterLink>
            <br>
            <br>
            <h2>+ Product</h2>
            <RouterLink to="/admin/product"><i class="fa-brands fa-product-hunt"></i> List Product</RouterLink>
            <RouterLink to="/admin/upload"><i class="fa-brands fa-product-hunt"><sup><i class="fa-solid fa-plus"></i></sup></i>Upload Product</RouterLink>
            <RouterLink to="/admin/create/product"><i class="fa-brands fa-product-hunt"></i><sup><i class="fa-solid fa-circle-plus"></i></sup> Create Product</RouterLink>
            <RouterLink to="/admin/update/product"><i class="fa-brands fa-product-hunt"><sup><i class="fa-solid fa-gears"></i></sup></i> Update Product</RouterLink>
            <RouterLink to="/admin/delete/product"><i class="fa-brands fa-product-hunt"></i><sup><i class="fa-solid fa-minus"></i></sup> Delete Product</RouterLink>
            <h2>Hello, Norak</h2>
            <button class="logout" @click="logoutHandler">Log Out</button>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        logoutHandler() {
            localStorage.removeItem('isLogin')
            this.$router.push('/admin/login')
        }
    }
}
</script>

<style>
.dash-left img{
    width: 50%;
    padding: 20px 8px 6px 16px;
}
.dash-left {
    height: 100vh;
    width: 20%;
    position: fixed;
    top: 0;
    left: 0;
    background-color:#aae509;
    padding-top: 20px ;
}

.dash-left a{
    padding: 20px 8px 6px 16px;
    text-decoration: none;
    font-size: 20px;
    color: black;
    display: block;
}
.dash-left h2{
    padding: 20px 8px 6px 16px;
}

.dash-left a:hover {
    color: #f1f1f1;
}
.logout{
    border: none;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;
    background-color: red;
    color: white;
    margin: 10px;
}
</style>