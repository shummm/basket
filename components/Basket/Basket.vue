<script>
import BasketItem from './BasketItem'
import formatPrice from '~/mixins/formatPrice'
import asyncDataStatus from "@/mixins/asyncDataStatus";
import AppSpinner from "@/components/Common/AppSpinner";

export default {
    name: "Basket",
    components: {
        BasketItem,
        AppSpinner
    },
    mixins: [formatPrice, asyncDataStatus],
    data() {
        return {
            items: 0,
            totalOrder: 0
        }
    },

    created() {
    this.$store
      .dispatch("basket/setItems")
      .then(() => this.asyncDataStatus_fetched());
  },

    methods: {
        removeItem() {
            this.$store.commit('basket/removeItems', this.getCheckedItem)
        },

    },
    computed: {
        getItems() {
            return this.$store.getters['basket/getItems']
        },
        getTotal() {
            return this.$store.getters['basket/getTotalOrder']
        },
        getTax() {
            return this.$store.getters['basket/getTax']
        },
        getFinalPrice() {
            return this.$store.getters['basket/getFinalPrice']
        },
        getCheckedItem() {
            return this.$store.state.basket.checked
        }
    }
};
</script>

<template>
<div>
    <div class="basket" v-if="asyncDataStatus_ready">
        <div class="basket__inner basket__inner--headline">
            <div class="basket__item">
                <div class="basket__item--text">
                    Выделелно
                    <span class="basket__item--text-b">
                        {{getCheckedItem.length}}
                        </span>
                </div>
                <div class="basket__item--text">
                    <span class="basket__item--img" @click="removeItem">
              <img src="~/assets/img/Close _ Delete.png">
              </span>
                    Удалить отмеченные
                </div>
            </div>
        </div>
        <basket-item />
        <div class="b--b1gray"></div>
        <div class="footer__basket">
            <div class="footer__basket-text">
                <p class="box__text-gr14">Промежуточный итог по корзине:</p>
                <span class="box__text text--gr18-b">{{formatPrice(getTotal)}} &#8381;</span>
            </div>
            <div class="footer__basket-text">
                <p class="box__text-gr14">В том числе НДС: </p>
                <span class="box__text text--gr18-b">{{formatPrice(getTax)}} &#8381;</span>
            </div>
            <div class="border--dotted-x "></div>
            <div class="footer__basket-text">
                <p class="box__text-bl14">ИТОГО:</p>
                <span class="box__text box__text-bl24">{{formatPrice(getFinalPrice)}} &#8381;</span>
            </div>
        </div>
    </div>
    <div v-else>
        <app-spinner />
    </div>
</div>
</template>

<style scoped>
.input__custom {
    width: 20px;
    height: 20px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    box-shadow: 0 0 5px rgba(9, 12, 18, .16) inset;
    text-align: center;
}

.hidden {
    display: none;
}

.show {
    display: block;
}

.input__custom--svg {
    position: relative;
    top: 2px;
    left: 2px;
}

.basket__item--text {
    font-weight: normal;
    color: #252525;
    font-size: 14px;
}

.basket__item--text-b {
    font-weight: bold;
    color: #333333;
    font-size: 18px;
    margin-left: 8px;
}

.basket {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
}

.basket__inner {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 74px;
    box-sizing: border-box;
}

.basket__inner--headline {
    background: #d9e8ef;
    max-height: 43px;
    padding: 0 16px 0 16px;
}

.basket__item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
}

.basket__item--img {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 8px 0 8px;
}

.basket__item--text {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.basket__item--col1 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 70px;
    height: 100%;
}

.basket__item--col2 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    max-width: 94px;
    height: 100%;
}

.basket__item--col3 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    max-width: 626px;
    height: 100%;
}

.basket__item--col4 {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    max-width: 300px;
    height: 100%;
    position: relative;
}

.basket__item--input {
    width: 49px;
    height: 21px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    box-shadow: 0 0 5px rgba(9, 12, 18, .16) inset;
    text-align: center;
}

.basket__inner--row:nth-child(odd) {
    background: #f1f1f1;
    box-shadow: 0 0 1px rgba(9, 12, 18, .05) inset;
}

.footer__basket {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
    height: 130px;
}

.footer__basket-text {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.box__text-gr14 {
    color: #333333;
    font-size: 14px;
}

.text--gr18-b {
    color: #333333;
    font-size: 18px;
    font-weight: bold;
}

.box__text-bl14 {
    color: #0a7eb5;
    font-size: 14px;
}

.box__text {
    display: flex;
    width: 150px;
    padding-right: 16px;
    justify-content: flex-end;
    align-items: center;
}

.box__text-bl24 {
    color: #0a7eb5;
    font-size: 24px;
}

.border--dotted-y {
    background-image: linear-gradient(to bottom, black 15%, rgba(255, 255, 255, 0) 0%);
    background-position: right;
    background-size: 1px 5px;
    background-repeat: repeat-y;
}

.border--dotted-x {
    background-image: linear-gradient(to right, black 23%, rgba(255, 255, 255, 0) 0%);
    background-position: right;
    background-size: 5px 1px;
    background-repeat: repeat-x;
    width: 95%;
    min-height: 1px;
    position: relative;
    left: -5%;
}

.b--b1gray {
    border-bottom: 1px solid #e5e5e5;
    margin-top: 10px;
    margin-bottom: 10px;
}

.p--l28 {
    padding-left: 28px;
}

.m--l5 {
    margin-left: 5px;
}
</style>
