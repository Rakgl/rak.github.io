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
    <div class="hold-body">
        <BodyLeft/>
        <BodyRight/>
    </div>
    <div class="footer">
        <Under/>
    </div>
</template>


