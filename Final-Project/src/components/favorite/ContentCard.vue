<template>
    <div class="row">
        <div class="general-header">
            <span><RouterLink to="/">Home</RouterLink> / Card</span>
            <br><br>
            <h1>Card</h1>
        </div>
        
            <button @click="increaseNumber()">Click here</button>
            <span>{{ number }}</span>
            
        
    </div>
</template>

<script>
    export default{
        data(){
            return{
                number:0,
            };
        },
        methods: {
            increaseNumber() {
                this.number++;
            },
        },
    };
</script>