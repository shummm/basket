<script>
import Basket from '~/components/Basket/Basket'

export default {
    name: 'basketPage',
    components: {
        Basket
    },
    async asyncData({
        store
    }) {
        await store.dispatch('basket/getItemsFake')
    }
}
</script>

<template>
<div class="page">
    <header class="title">
        <h2 class="text text--title">Корзина</h2>
    </header>
    <basket />
</div>
</template>

<style scoped>
</style>

