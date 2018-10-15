<script>
export default {
    name: 'TheHeader',
    data() {
        return {
            links: [{
                    title: 'Каталог продукции',
                    href: '/'
                },
                {
                    title: 'Все бренды',
                    href: '/'
                },
                {
                    title: 'подарки на 14 февраля',
                    href: '/'
                },
                {
                    title: 'подарки на 23 февраля',
                    href: '/'
                },
                {
                    title: 'подарки на 8 марта',
                    href: '/'
                }
            ]
        }
    }
};
</script>

<template>
<div class="heading">
    <div class="head">
        <svg class="logo">
            <use xlink:href="#logo"></use>
        </svg>
        <form class="search">
            <img src="~/assets/img/search.png" class="search__icon input-icon" alt="">
            <input class="search__input input">
            <button class="button search__button">Поиск</button>
        </form>
    </div>

    <nav class="main-nav">
        <ul class="main-nav__list list">
            <li class="list__item list__item--active" v-for="(link, i) in links" :key="i">
                <nuxt-link class="list__item-link link" :to="link.href">
                    {{link.title}}
                    <svg class="list__item-icon arrow-down">
            <use xlink:href="#arrow-down"></use>
          </svg>
                </nuxt-link>
            </li>
        </ul>
    </nav>
</div>
</template>

<style scoped>
.heading{
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}

.head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: block;
    width: 217px;
    height: 57px;
    float: left;
}

.search {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 410px;
}

.search__input {
    width: 312px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    box-shadow: 0 0 5px rgba(9, 12, 18, .16) inset;
}

.input-icon {
    position: relative;
    top: 0;
    left: 30px;
}

.input {
  box-sizing: border-box;
  padding: 7px;
  margin: 0;
}
.input:focus {
  outline: none;
}

.search__img {
    width: 16px;
    height: 16px;
}

.search__button {
    margin: 0;
    padding: 0;
    background-color: #17709a;
    border: none;
    outline: none;
    box-sizing: border-box;
    display: block;
    width: 70px;
    height: 30px;
    text-align: center;
    border-radius: 5px;
    cursor: pointer;
}

.main-nav {
    background: #92c8e1;
    border-radius: 0 5px 0 0;
}

.list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.list__item {
    padding: 10px;
    padding-right: 22px;
    cursor: pointer;
    -webkit-transition: 0.2s ease;
    transition: 0.2s ease;
    background: linear-gradient(90deg, #92c8e1, #b0d9ec);
    border-radius: 5px 5px 0 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
/* .list__item--active {
  border: 1px solid #c0c0c0;
} */

.link {
  text-decoration: none;
}

.main-nav__list {
  display: flex;
}

.arrow-down {
  width: 5px;
  height: 5px;
}

.list__item-icon {
    position: relative;
    left: 15px;
    bottom: 3px;
}
</style>
