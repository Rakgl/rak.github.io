<script setup>
    import axios from 'axios';
    import Board from '../admin/Board.vue';
</script>

<template>
    <div class="main">
        <Board/>
        <div class="right">
            <header class="header-user">
                <h1>Product list</h1>
            </header>
            
            <div style="width: 100%; padding: 20px 10px; text-align: center;">
                    <RouterLink class="add-user" to="/admin/create/product">Add new</RouterLink>
                    <table border="1" style="border-collapse: collapse; width: 100%;margin-top: 30px;">
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Cat_Id</th>
                        <th>Action</th>
                    </tr>
                    <tr v-for="(el, indx) in productList" :key="indx">
                        <td>{{ el.id }}</td>
                        <td>{{ el.title }}</td>
                        <td>{{ el.description }}</td>
                        <td>{{ el.price }}</td>
                        <td>{{ el.image }}</td>
                        <td>{{ el.cat_id }}</td>
                        <td><RouterLink to="/admin/update/product">Edit</RouterLink> | <RouterLink to="/admin/delete/product">Delete</RouterLink></td>
                    </tr>
                    </table>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                productList:[],
                message:"",
            }
        },
        mounted(){
            axios
            .get('http://localhost:5258/api/products')
            .then((res) => {
                var data = res.data
                for (var item in data) {
                this.productList.push(data[item])
                }
            })
            .catch((error) => {
                this.message ="Fail to show product list" +error;
            })
        }
    }
</script>

<style scoped>
    .main{
        display: flex;
        justify-content: end;
    }
    .left{
        flex: 1;
        
    }
    .right{
        flex: 1;
        width: 80%;
        position: absolute;
        z-index: 2;
    }
</style>