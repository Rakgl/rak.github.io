<script setup>
    import axios from 'axios';
    import Board from '../admin/Board.vue';
</script>

<template>
    <div class="main">
        <Board/>
        <div class="right">
            <header class="header-user">
                <h1>User Management</h1>
            </header>
            <div class="user-list">
                <div class="admin-container">
                <div style="width: 100%; padding: 20px 10px; text-align: center;">
                    <RouterLink class="add-user" to="/admin/Adduser">Add new</RouterLink>
                    <table border="1" style="border-collapse: collapse; width: 100%;margin-top: 30px;">
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>email</th>
                        <th>Username</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(el, indx) in userList" :key="indx">
                        <td>{{ el.id }}</td>
                        <td>{{ el.first_name }}</td>
                        <td>{{ el.last_name }}</td>
                        <td>{{ el.email }}</td>
                        <td>{{ el.username }}</td>
                        <td><RouterLink to="/admin/update/user">Edit</RouterLink> | <RouterLink to="/admin/delete/user">Delete</RouterLink></td>
                    </tr>
                    </table>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                userList:[],
                message:"",
            }
        },
        mounted(){
            axios
            .get('http://localhost:5258/api/users')
            .then((res) => {
                var data = res.data
                for (var item in data) {
                this.userList.push(data[item])
                }
            })
            .catch((error) => {
                this.message ="Fail to show user list" +error;
            })
        }
    }
</script>

<style scoped>
    th,td{
        padding: 10px;
    }
    .main{
        display: flex;
        justify-content: end;
    }
    .header-user{
        background-color: bisque;
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .right{
        flex: 1;
        width: 80%;
        position: absolute;
        z-index: 2;
    }
    .add-user{
        background-color: cadetblue;
        text-decoration: none;
        padding: 10px 20px;
        color: white;
        border-radius: 10px;
    }
</style>

