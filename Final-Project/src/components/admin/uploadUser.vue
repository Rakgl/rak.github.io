<script setup>
    import axios from 'axios';
    import Board from '../admin/Board.vue';
</script>

<template>
    <div class="main">
        <Board/>
        <div class="right">
            <div class="upload-file">
                <h1>Upload File</h1>
                <div class="add-file">
                    <input type="file" @change="onchangeSelectedFile"/>
                    <button @click="uploadFileHandle">Upload</button>
                    <p v-if="message">{{ message }}</p>
                </div>
            </div>
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
    .add-file {
        margin: 10px;
    }
    .upload-file h1 {
        background-color: bisque;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
    }
    button {
        cursor: pointer;
    }
</style>

<script>
    export default {
        data() {
            return {
                SelectedFile: null,
                message: '',
            };
        },
        methods: {
            onchangeSelectedFile(event) {
                this.SelectedFile = event.target.files[0];
            },
            uploadFileHandle() {
                if (this.SelectedFile == null) {
                    this.message = "Please select a file";
                    return;
                }
                var formData = new FormData();
                formData.append("file", this.SelectedFile);
                var header = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
                axios
                .post("http://localhost:5258/products/upload", formData, header)
                .then((res) => {
                    this.message = 'Successfully uploaded';
                })
                .catch((error) => {
                    this.message = "Can't process: " + error;
                });
            }
        }
    };
</script>
