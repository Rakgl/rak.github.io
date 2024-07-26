<script setup>
import axios from 'axios';
import { ref, onMounted } from 'vue';
import Board from '../admin/Board.vue';

const userList = ref([]);
const message = ref("");

onMounted(() => {
    axios
        .get('http://localhost:5258/api/users/delete')
        .then((res) => {
            userList.value = res.data;
        })
        .catch((error) => {
            message.value = "Failed to show user list: " + error;
        });
});
</script>

<template>
    <div class="main">
        <Board/>
        <div class="right">
            <header class="header-user">
                <h1>Delete User</h1>
            </header>
            <div v-if="message" class="message">
                {{ message }}
            </div>
            <ul>
                <li v-for="user in userList" :key="user.id">{{ user.name }}</li>
            </ul>
        </div>
    </div>
</template>

<style>
.main {
    display: flex;
    justify-content: flex-end;
}
.right {
    flex: 1;
    width: 80%;
    position: absolute;
    z-index: 2;
}
.header-user {
    background-color: bisque;
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.message {
    color: red;
    text-align: center;
    margin-top: 10px;
}
</style>
