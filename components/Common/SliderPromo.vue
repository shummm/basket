<script>
export default {
    name: "SliderPromo",
    data() {
        return {
            activeItem: 0,
            timer: null,
            slideMove: 'slide-move-right'
        };
    },
    mounted() {
       this.restartInterval()
    },
    beforeDestroy() {
      clearInterval(this.timer)
    },
    methods: {
        restartInterval() {
          clearInterval(this.timer)
            this.timer = setInterval(() => {
                this.$refs.next.click();
            }, 3500);
        },
        nextItem() {
            this.getItems.length - 2 >= this.activeItem ?
                this.activeItem++
                :
                (this.activeItem = 0);
            this.slideMove = 'slide-move-right'
            this.restartInterval()
        },
        prevItem() {
            this.activeItem > 0 ?
                this.activeItem--
                :
                (this.activeItem = this.getItems.length - 1);
            this.slideMove = 'slide-move-left'
            this.restartInterval()
        },
        pickItem(i) {
            this.activeItem > i ?
                this.slideMove = 'slide-move-left' :
                this.slideMove = 'slide-move-right'
            this.activeItem = i
            this.restartInterval()
        }
    },
    computed: {
        getItems() {
            return this.$store.getters["slider/getItems"];
        },
        getImage() {
            return this.getItems[this.activeItem].images.src;
        }
    }
};
</script>

<template>
<div class="slider">
    <transition-group :name='slideMove'>
        <img
    :key="activeItem"
        :src="getImage"
        alt=""
        class="slider-promo__item--img">        
        </transition-group>

        <ul class="items slider-promo__items">
           <transition-group name='slide-move-text'>
                <li 
                :key="activeItem" 
                class="item slider-promo__item">
                    <div class="slider-promo__item--desc">
                        <span class="slider-promo__item--desc-time">{{getItems[activeItem].time.start}} - {{getItems[activeItem].time.end}}</span>
                        <p class="slider-promo__item--title">
                            {{getItems[activeItem].title}}
                        </p>
                        <p class="slider-promo__item--subtitle ">
                            {{getItems[activeItem].subTitle}}
                        </p>
                        <a href="" class="slider-promo__item--link">{{getItems[activeItem].text}}</a>
                    </div>
                </li>
                 </transition-group>
        </ul>

        <div class="slider-pagination">
            <ul class="items slider-pagination__items">
                <li v-for="(dot, i) in getItems.length" :key="i" @click="pickItem(i)" class="item slider-pagination__item">
                    <svg
                     :class="{'slider-pagination__item--svg-active': activeItem === i}"
                     class="slider-pagination__item--svg"><use xlink:href="#dot"></use></svg>
                </li>
            </ul>
        </div>

        <a
    @click.prevent="prevItem"
     class="slider__button slider__button--prev">
             <svg class="slider__button--prev-svg"><use xlink:href="#arrow-left"></use></svg>
            </a>

        <a
    ref="next"
    @click.prevent="nextItem"
    class="slider__button slider__button--next ">
    <svg class="slider__button--next-svg"><use xlink:href="#arrow-right"></use></svg>
        </a>
</div>
</template>

<style scoped>
.item {
    list-style: none;
    margin: 0;
    padding: 0;
}

.slider {
    display: flex;
    width: 100%;
    min-height: 300px;
    max-height: 350px;
    position: relative;
}

.slider-promo__items {
    display: flex;
    width: 100%;
    padding: 0;
}

.slider-promo__item {
    display: flex;
    width: 100%;
    padding: 0;
}

.slider-promo__item--desc {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    padding: 20px;
    left: 70%;
    z-index: 10;
}

.slider-pagination__item {
    display: flex;
    width: 100%;
    padding: 0;
}

.slider-pagination__item--svg {
    width: 20px;
    height: 20px;
    fill: #ccc;
    transition: 0.2s ease;
}

.slider-pagination__item--svg-active {
    fill: rgb(131, 127, 127);
}

.slider-pagination__item--svg:hover {
    fill: #17709a;
}

.slider-promo__item--img {
    position: absolute;
    width: 100%;
    height: 100%;
}

.slider-promo__item--link {
  padding: 8px 15px;
  border: 1px solid #2a68ee;
  border-radius: 5px;
  color: #2a68ee
}

.slider-promo__item--desc-time {
  color: #a8e95d;
  margin: 30px 0 10px;
}

.slider-promo__item--title {
  color: #2332b6c5;
  margin: 10px;
  font-size: 20px;
  font-weight: 700;
}

.slider-promo__item--subtitle {
  color: #2230aae1;
  margin: 10px;
  font-size: 16px;
  font-weight: 500;
}

.slider__button {
    height: 60px;
    width: 60px;
    padding: 0;
    z-index: 99;
}

.slider__button--prev {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
}

.slider__button--prev-svg,
.slider__button--next-svg {
    width: 60px;
    height: 60px;
    fill: #ccc;
    transition: 0.2s ease;
}

.slider__button--prev-svg:hover,
.slider__button--next-svg:hover {
    fill: rgb(189, 184, 184);
}

.slider__button--next {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(50%, -50%);
}

.slider-pagination {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 9;
}

.slider-pagination__items {
    display: flex;
}

.slider-pagination__item {
    margin: 0 5px;
}

.slide-move-right-enter {
    transform: translateX(75%);
    opacity: 0;
}

.slide-move-right-enter-to {
    transform: translateX(0%);
    transition-duration: .8s;
    transition-timing-function: ease;
    opacity: 1;
}

.slide-move-right-leave {
    transform: translateX(0%);
    opacity: 1;
}

.slide-move-right-leave-to {
    transform: translateX(-75%);
    transition-duration: .8s;
    opacity: 0;
}

.slide-move-left-enter {
    transform: translateX(-75%);
    opacity: 0;
}

.slide-move-left-enter-to {
    transform: translateX(0%);
    transition-duration: .8s;
    transition-timing-function: ease;
    opacity: 1;
}

.slide-move-left-leave {
    transform: translateX(0%);
    opacity: 1;
}

.slide-move-left-leave-to {
    transform: translateX(75%);
    transition-duration: .8s;
    opacity: 0;
}

.slide-move-text-enter-active {
  opacity: 1;
   transition-duration: 1s;
}

.slide-move-text-leave-active {
  opacity: 0;
   transition-duration: .5s;
}
</style>
