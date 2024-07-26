<script setup>
    import axios from 'axios';
    import Board from '../admin/Board.vue';
</script>

<template>
    <div class="main">
        <Board/>
        <div class="right">
            <header class="header-user">
                <h1>Create Product User</h1>
            </header>
                <div class="add-new-user">
                <div class="admin-container">
                <main class="admin-content">
                    <form @submit.prevent="addProductHandler">
                    <table>
                        <tr>
                            <td>Title :</td>
                            <td><input type="text" required v-model="title" /></td>
                        </tr>
                        <tr>
                            <td>Description :</td>
                            <td><input type="text" required v-model="description" /></td>
                        </tr>
                        <tr>
                            <td>Price :</td>
                            <td><input type="text" required v-model="price" /></td>
                        </tr>
                        <tr>
                            <td>Image :</td>
                            <td><input type="text" required v-model="image" /></td>
                        </tr>
                        <tr>
                            <td>Cat_Id :</td>
                            <td><input type="number" required v-model="cat_id" /></td>
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

<script>
export default {
    data() {
        return {
            title: '',
            description: '',
            price: '',
            image: '',
            cat_id:''
        }
    },
    methods: {
        addProductHandler() {
        var req = {
            title: this.title,
            description: this.description,
            price: this.price,
            image: this.image,
            cat_id: this.cat_id,
        }
        axios
            .post('http://localhost:5258/api/products/create', req)
            .then((res) => {
            if (res.status == 200) {
                this.errorMessage = 'Success create product.'

                //clear
                this.title = ''
                this.description = '';
                this.price = '';
                this.image = '';
                this.cat_id = '';
                this.$router.push('/admin/product')
            } else {
                this.errorMessage = 'Error create product'
            }
            })
            .catch((err) => {
                this.errorMessage = 'Error create user' +err;
            })
        }
    }
}
</script>