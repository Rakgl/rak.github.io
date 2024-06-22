<script setup>
    import Top from './components/Top.vue';
    import BodyLeft from './components/Body-left.vue';
    import BodyRight from './components/Body-right.vue';
    import Under from './components/Under.vue';
</script>

<template>
    <div class="top">
        <Top/>
    </div>
    <div class="inline-body">
        <div class="body-left">
            <BodyLeft/>
        </div>
        <div class="body-right">
            <BodyRight/>
        </div>
    </div>
    <div class="footer">
        <Under/>
    </div>
</template>


