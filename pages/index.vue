<script>
import Slider from "~/components/Common/SliderPromo.vue";
export default {
    components: {
        Slider
    },
    async fetch({store}) {
        await store.dispatch('slider/setItems')
    }
};
</script>

<template>
<div class="page">
    <header class="title">
        <h3 class="text text--title">Главная страница</h3>
    </header>
    <div class="content">
        <slider/>
    </div>
</div>
</template>

<style scoped>
.title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 30px;
}

.text--title {
    font-weight: normal;
    color: #0a7eb5;
    font-size: 24px;
}
</style>
