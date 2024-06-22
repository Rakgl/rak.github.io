<script setup>
	import top from './components/Header-left.vue';
	import HeaderLeft from './components/Header-left.vue';
	import HeaderRight from './components/Header-right.vue';
	import Banner from './components/Banner.vue';
	import Content from './components/Content.vue';
	import Under from './components/Under.vue';
</script>

<template>
	<div class="top">
		<HeaderLeft/>
		<HeaderRight/>
	</div>
	<div class="body">
		<Banner/>
	</div>
	<div class="content">
		<Content/>
	</div>
	<div class="footer">
		<Under/>
	</div>
</template>


