<script>
  export default {
    name: 'BreadCrumbs',
    data() {
      return {
        activeLink: 'Корзина',
        links: [
          {href: '/', title: 'Главная', delimiter: '/'},
          {href: '/basket', title: 'Корзина'}
        ]
      }
    },
    methods: {
      currentLink() {

      }
    }
  }
</script>

<template>
  <div class="breadcrumbs">
    <div
      v-for="(link, i) in links"
      :key="i"
      class="breadcrumbs__inner">
      <nuxt-link
        href=""
        @click.prevent="activeLink = link.title"
        class="breadcrumbs__link"
        :class="{'active': $router.app._route.path === link.href}"
        :to="link.href">
        {{link.title}}
      </nuxt-link>
      <span class="breadcrumbs__link-delimiter">{{link.delimiter}}</span>
    </div>
  </div>
</template>

<style scoped>
  .breadcrumbs {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 20px;
  }

  .breadcrumbs__inner {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }

  .breadcrumbs__link {
    color: #333333;
    font-size: 14px;
  }

  .breadcrumbs__link-delimiter {
    margin: auto 5px;
  }

  .active {
    text-decoration: none;
  }
</style>

