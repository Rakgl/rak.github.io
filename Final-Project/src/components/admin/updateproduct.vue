<script setup>
    import axios from 'axios';
    import Board from '../admin/Board.vue';
</script>


<template>
    <div class="main">
        <Board/>
        <div class="right">
            <header class="header-user">
                <h1>Update Product</h1>
            </header>
            <form @submit.prevent="updateProductHandler">
                <table>
                    <tr>
                        <td>ID:</td>
                        <td><input type="number" id="id" v-model="id" required min="1"></td>
                    </tr>
                    <tr>
                        <td>Title:</td>
                        <td><input type="text" id="firstName" v-model="title" required /></td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td><input type="text" v-model="description" required /></td>
                    </tr>
                    <tr>
                        <td>Price:</td>
                        <td><input type="text" v-model="price" required /></td>
                    </tr>
                    <tr>
                        <td>Image:</td>
                        <td><input type="text"  v-model="image" required /></td>
                    </tr>
                    <tr>
                        <td>Cat_id:</td>
                        <td><input type="number" v-model="cat_id" required min="1"/></td>
                    </tr>
                </table>
                <button type="submit" value="Updatae User">Update User</button>
            </form>
            <p v-if="errorMessage">{{ errorMessage }}</p>
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
        updateProductHandler() {
        var req = {
            id: this.id,
            title: this.title,
            description: this.description,
            price: this.price,
            image: this.image,
            cat_id: this.cat_id,
        }
        axios
            .put('http://localhost:5258/api/products/update', req)
            .then((res) => {
            if (res.status == 200) {
                this.errorMessage = 'Success update user.'

                //clear
                this.title = ''
                this.description = ''
                this.price = ''
                this.image = ''
                this.cat_id = ''
                this.$router.push('/admin/product')
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