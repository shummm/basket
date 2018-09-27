<script>
import formatPrice from "~/mixins/formatPrice";
import BasketModalEdit from "~/components/Basket/BasketModalEdit";

export default {
  name: "BasketItem",
  components: {
    BasketModalEdit
  },
  mixins: [formatPrice],
  data() {
    return {
      checked: [],
      activeEditForm: null
    };
  },
  methods: {
    clickCheckBox(id) {
      this.$refs.inputCustom[id].click();
      this.$refs.check_svg[id].classList.toggle("show");
    },
    checkItem() {
      this.$store.commit("basket/setCheckItem", this.checked);
    },
    close() {
      this.activeEditForm = null;
    },
    showEditForm(item) {
      this.activeEditForm = item.id;
      this.$store.commit('basket/setProduct', item)
      this.$store.commit('basket/setQuantity', item.quantity)
    }
  },
  computed: {
    getItems() {
      return this.$store.getters["basket/getItems"];
    }
  }
};
</script>

<template>
<div>
    <div v-for="(item, i) in getItems" :key="item.id" class="basket__inner basket__inner--row">
        <div class="basket__item basket__item--col1 border--dotted-y">
            <input
            style="display: none"
            :value="item.id"
            ref="inputCustom"
            v-model="checked"
            @change="checkItem"
            type="checkbox"
            class="basket__item--checkbox"/>
            <span
            @click.prevent.stop="clickCheckBox(i)"
            class="input__custom">
            <svg
              class="input__custom--svg hidden"
              ref="check_svg"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="15px" height="14px">
<path fill-rule="evenodd"  fill="rgb(0, 98, 150)"
      d="M5.827,8.274 C5.827,8.274 8.786,3.156 14.043,0.950 C10.855,5.876 9.145,8.121 5.873,13.256 C3.557,10.395 2.081,7.233 0.174,6.552 L5.827,8.274 Z"/>
</svg>
          </span>
            <div class="basket__item--text">{{i+1}}</div>
        </div>
        <div class="basket__item basket__item--col2 border--dotted-y">
            <img :src="item.images[0].src">
        </div>
            <div class="basket__item basket__item--col3 border--dotted-y">
                <div class="basket__item--text p--l28">{{formatPrice(item.description)}}</div>
            </div>
            <div class="basket__item basket__item--col4">
                <div class="basket__item--text">{{formatPrice(item.price)}}<span class="m--l5">&#8381;</span></div>
                <span class="basket__item--text">x</span>
                <input
            :value="item.quantity"
            @click.prevent.stop="showEditForm(item)"
            type="text"
            class="basket__item--input"/>

                <basket-modal-edit v-if="item.id === activeEditForm" @close="close" />

                <span class="basket__item--text">=</span>
                <div class="basket__item--text">{{formatPrice(item.price * item.quantity)}} <span class="m--l5">&#8381;</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.title {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 30px;
}

.input__custom {
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  box-shadow: 0 0 5px rgba(9, 12, 18, 0.16) inset;
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

.text--title {
  font-weight: normal;
  color: #0a7eb5;
  font-size: 24px;
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
  box-shadow: 0 0 5px rgba(9, 12, 18, 0.16) inset;
  text-align: center;
}

.basket__inner--row:nth-child(even) {
  background: #f1f1f1;
  box-shadow: 0 0 1px rgba(9, 12, 18, 0.05) inset;
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
  width: 150px;
  text-align: right;
  padding-right: 16px;
}

.box__text-bl24 {
  color: #0a7eb5;
  font-size: 24px;
}

.border--dotted-y {
  background-image: linear-gradient(
    to bottom,
    black 15%,
    rgba(255, 255, 255, 0) 0%
  );
  background-position: right;
  background-size: 1px 5px;
  background-repeat: repeat-y;
}

.border--dotted-x {
  background-image: linear-gradient(
    to right,
    black 23%,
    rgba(255, 255, 255, 0) 0%
  );
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
