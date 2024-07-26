<!-- eslint-disable vue/multi-word-component-names -->
// eslint-disable-next-line vue/multi-word-component-names
eslint-disable vue/multi-word-component-names
// eslint-disable-next-line vue/multi-word-component-names
<template>
    <div class="all-center">
        <div class="container-from">
            <div class="center-from">
                <h2>Welcome back</h2> <br>
                <h2>Please login to your admin account</h2>
                <form @submit.prevent="loginHandler" id="login-form">
                    <label for="username">Username</label><br>
                    <input v-model="username" type="text" id="username" name="username" placeholder="Username"><br>
                    <label for="pwd">Password</label><br>
                    <input v-model="passsword"  type="password" id="pwd" name="pwd" placeholder="Password"><br><br>
                    <div class="login">
                        <button @click="loginHandler()" class="btn" id="btn" >Login</button>
                    </div>
                    <div class="sign-up">
                        <p>Don't have an account yet?</p>
                        <a href="#">Sign up</a>
                        <i class="fa-solid fa-face-smile"></i>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<style scoped>
.all-center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: url(/src/assets/img/background.webp);
}
.container-from {
    width: 500px;
    padding: 20px;
    box-shadow: 10px 10px   rgba(0, 0, 0, 0.5);
    border: 1px solid gray;
    border-radius: 8px;
    backdrop-filter: blur(10px);
}
.center-from {
    width: 100%;
    line-height: 30px;
}
form label{
    text-align: center;
}

input[type="text"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.btn {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.text{
    text-align: center;
}
.icon{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.btn-icon{
    margin: 5px;
    padding: 20px;
    background-color: #ddd;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.btn-icon:hover{
    background-color: #4CAF50;
}

.btn-icon i {
    font-size: 1.5em;
}


.login {
    margin-top: 20px;
}

.text {
    margin: 20px 0;
}

.sign-up {
    margin-top: 20px;
    text-align: center;
    line-height: 30px;
}
</style>

<script>
import axios from 'axios';
    export default{
        data(){
            return{
                username:"",
                passsword:"",
                errorMessages: "",
            }
        },
        methods:{
            loginHandler(){
                var req = {
                    "username": this.username,
                    "password": this.passsword
                };
                axios.post("http://localhost:5258/api/login",req)
                .then((res) => {
                if(res.status == 200) {
                    var data = res.data;
                    localStorage.setItem("isLogin", "OK");
                    localStorage.setItem("username", data.username);
                    this.$router.push("/admin/listuser");
                }
                    else{
                        this.errorMessage = "Wrong username and password";
                    }
                })
                .catch((error)=>{
                    this.errorMessage = "Wrong username and password" + error;
                });
            },
        }
    }
    
</script>

