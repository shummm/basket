<script>
import Basket from '~/components/Basket/Basket'

export default {
    name: 'basketPage',
    components: {
        Basket
    },
    async asyncData({store}) {
       await store.dispatch('basket/getItemsFake')
    }
}
</script>

<template>
    <div >
        <basket />
    </div>
</template>

