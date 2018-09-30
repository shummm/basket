<script>
import formatPrice from "~/mixins/formatPrice";

export default {
  name: "BasketModalEdit",
  mixins: [formatPrice],
  mounted() {
    document.addEventListener("click", this.clickOut);
  },
  beforeDestroy() {
    document.removeEventListener("click", this.clickOut);
  },
  methods: {
    clickOut(e) {
      if (e.currentTarget.className !== "modal modal-active") {
        this.$emit('close')
      }
    },
    close() {
      this.totalOrder = this.$store.getters["basket/getTotalOrder"];
      this.$emit('close')
    },
    quantityLow() {
      this.$store.commit("basket/quantityDown");
    },
    quantityUp() {
      this.$store.commit("basket/quantityUp");
    },
    saveOrder() {
      this.$store.commit("basket/saveQuantity", this.getProduct);
      this.$emit('close')
    }
  },
  computed: {
    getProduct() {
      return this.$store.getters["basket/getProduct"];
    },
    getQuantity() {
      return this.$store.getters["basket/getQuantity"];
    }
  }
};
</script>

<template>
  <div 
  class="modal" 
  @click.stop="clickOut">
    <div class="modal__content">
      <div class="modal__header">
        <p class="modal__header-title">Изменить количество</p>
      </div>
      <div class="modal__body">
        <div class="box-price__text">{{formatPrice(getProduct.price)}}</div>
        <span>x</span>
        <div class="box-price__input">
          <span
            @click.stop="quantityLow"
            class="input--price-low">-</span>
          <input class="input--price" :value="getQuantity">
          <span
            @click.stop="quantityUp"
            class="input--price-hi">+</span>
        </div>
        <span>=</span>
        <div class="box-price__text">{{formatPrice(getProduct.price * getQuantity)}}</div>
        <span>&#8381;</span>
      </div>
      <div class="modal__footer">
        <a
          @click.prevent.stop="saveOrder"
          href=""
          class="modal__footer-btn btn--success text--uppercase">Сохранить</a>
        <a
          @click.prevent.stop="close"
          href=""
          class="modal__footer-btn btn--cancel text--uppercase">Отменить</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal {
  position: absolute;
  width: 320px;
  height: 134px;
  top: 50px;
  left: 10px;
  background: white;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
  padding: 20px 26px;
  z-index: 22;
}

.modal__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.modal__body {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.modal__header-title {
  color: #05689b;
  font-size: 15px;
}

.box-price__input {
  display: flex;
  flex-direction: row;
}

.input--price-low,
.input--price-hi {
  height: 20px;
  width: 20px;
  margin: auto 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f7f8fb;
  background: #559abc;
  cursor: pointer;
}

.box-price__text {
  color: #333333;
  font-size: 14px;
}

.input--price {
  width: 58px;
  height: 28px;
  border-radius: 5px;
  border: 1px solid #d5d5d5;
  text-align: center;
  box-shadow: 0 0 5px rgba(9, 12, 18, 0.16) inset;
}

.text--uppercase {
  text-transform: uppercase;
}

.input--price {
  width: 50px;
  height: 27px;
}

.modal__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 61%;
}

.btn--success {
  color: #05689b;
  font-size: 12px;
}

.btn--cancel {
  color: #333333;
  font-size: 12px;
}
</style>

