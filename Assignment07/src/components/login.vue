<template>
    <div class="container-login">
        <form @submit.prevent="addItem" class="login-from">
            <h1>login</h1>
            <div class="input">
                <label for="name">Name</label>
                <br>
                <input v-model="listName" type="text" placeholder="Name" required>
            </div>
            <div class="password">
                <label for="pass">Password</label>
                <br>
                <input v-model="listPass" type="password" placeholder="Password" required>
            </div>
            <button>login</button>
        </form>
    </div>
    <br><br>
    <ul>
        <li v-for="(login,index) in loginlist"::key="index">
            <p>Name:{{ login.name }}</p>     <p>Password:{{ login.password }}</p>
        </li>
    </ul>
</template>
<script>
    import axios from 'axios';
    export default{
        data(){
            return{
                listName:null,
                listPass:null,
                loginlist:[]
            }
        },
        methods:{
            addItem(){
                let user={
                    name:this.listName,
                    password:this.listPass,
                }
                this.loginlist.push(user)
                this.listName=null
                this.listPassword=null
            }
        }
    }
</script>