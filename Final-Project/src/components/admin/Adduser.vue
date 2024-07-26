<script setup>
    import axios from 'axios';
    import Board from '../admin/Board.vue';
</script>

<template>
    <div class="main">
        <Board/>
        <div class="right">
            <div class="add-new-user">
                <div class="admin-container">
                <main class="admin-content">
                    <h1>Add User</h1>
                    <form @submit.prevent="addUserHandler">
                    <table>
                        <tr>
                            <td>First Name :</td>
                            <td><input type="text" required v-model="firstName" /></td>
                        </tr>
                        <tr>
                            <td>Last Name :</td>
                            <td><input type="text" required v-model="lastName" /></td>
                        </tr>
                        <tr>
                            <td>Email :</td>
                            <td><input type="text" required v-model="email" /></td>
                        </tr>
                        <tr>
                            <td>Username :</td>
                            <td><input type="text" required v-model="username" /></td>
                        </tr>
                        <tr>
                            <td>Password :</td>
                            <td><input type="password" required v-model="password" /></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><button>Submit</button></td>
                        </tr>
                    </table>
                    {{ errorMessage }}
                    </form>
                </main>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
    .main{
        display: flex;
        justify-content: end;
    }
    .right{
        flex: 1;
        width: 80%;
        position: absolute;
        z-index: 2;
    }
    .admin-content h1{
        background-color: bisque;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
    form{
        margin-left: 20px;
        line-height: 40px;
    }
    input{
        width: 500px;
        height: 30px;
    }
    button{
        background-color: #aae509;
        padding: 10px 20px;
        border: none;
        border-radius: 10px;
        font-size: 15px;
    }
</style>

<script>
export default {
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            username: '',
            password: ''
        }
    },
    methods: {
        addUserHandler() {
        var req = {
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password,
            errorMessage: ''
        }
        axios
            .post('http://localhost:5258/api/users/create', req)
            .then((res) => {
            if (res.status == 200) {
                this.errorMessage = 'Success create user.'

                //clear
                this.firstName = ''
                this.lastName = ''
                this.email = ''
                this.username = ''
                this.password = ''
                this.$router.push('/admin/listuser')
            } else {
                this.errorMessage = 'Error create user'
            }
            })
            .catch((err) => {
                this.errorMessage = 'Error create user'+err;
            })
        }
    }
}
</script>
