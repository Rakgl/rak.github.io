<script setup>
    import axios from 'axios';
    import Board from '../admin/Board.vue';
</script>

<template>
    <div class="main">
        <Board/>
        <div class="right">
            <header class="header-user">
                <h1>Update User</h1>
            </header>
            <form @submit.prevent="updateUserHandler">
                <table>
                    <tr>
                        <td>ID:</td>
                        <td><input type="number" id="id" v-model="id" required min="1"></td>
                    </tr>
                    <tr>
                        <td>First Name:</td>
                        <td><input type="text" id="firstName" v-model="firstName" required /></td>
                    </tr>
                    <tr>
                        <td>Last Name:</td>
                        <td><input type="text" id="lastName" v-model="lastName" required /></td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td><input type="email" id="email" v-model="email" required /></td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td><input type="text" id="username" v-model="username" required /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" id="password" v-model="password" required /></td>
                    </tr>
                </table>
                <button type="submit" value="Updatae User">Update User</button>
            </form>
            <p v-if="errorMessage">{{ errorMessage }}</p>
        </div>
    </div>
</template>

<style>
    .main {
        display: flex;
        justify-content: end;
    }
    .right {
        flex: 1;
        width: 80%;
        position: absolute;
        z-index: 2;
    }
    .header-user{
        background-color: bisque;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>

<script>


export default {
    data() {
        return {
        title: '',
        lastName: '',
        email: '',
        username: '',
        password: ''
        }
    },
    methods: {
        updateUserHandler() {
        var req = {
            id: this.id,
            first_name: this.firstName,
            last_name: this.lastName,
            email: this.email,
            username: this.username,
            password: this.password,
            errorMessage: ''
        }
        axios
            .put('http://localhost:5258/api/users/update', req)
            .then((res) => {
            if (res.status == 200) {
                this.errorMessage = 'Success update user.'

                //clear
                this.firstName = ''
                this.lastName = ''
                this.email = ''
                this.username = ''
                this.password = ''
                this.$router.push('/admin/listuser')
            } else {
                this.errorMessage = 'Error update user'
            }
            })
            .catch((err) => {
                this.errorMessage = 'Error update user' + err
            })
        }
    }
}
</script>