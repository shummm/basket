<script>
export default {
    name: "SliderPromo"
};
</script>

<template>
<div class="slider">

    <ul class="items slider-promo__items">
        <li class="item slider-promo__item">
            <img 
            src="~/assets/img/main1-940x446.png"
            alt="" class="slider-promo__item--img">
            <!-- <div class="slider-promo__item--desc">
                <span class="slider-promo__item--desc-time"> 31.10 - 31.11</span>
                <p class="slider-promo__item--desc-text">
                    <span class="">акция</span>
                    Рассрочка на все ноутбуки 0-0-24
                </p>
                <a href="" class="slider-promo__item--link">Выбрать</a>
            </div> -->
        </li>
    </ul>

    <div class="slider-pagination">
        <ul class="items slider-pagination__items">
            <li class="item slider-pagination__item">
                     <svg class="slider-pagination__item--svg"><use xlink:href="#dot"></use></svg>
            </li>
        </ul>
    </div>

    <a class="slider__button slider__button--prev">
             <svg class="slider__button--prev-svg"><use xlink:href="#arrow-left"></use></svg>
            </a>

    <a class="slider__button slider__button--next">
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
    border: 1px solid paleturquoise;
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
    position: absolute;
    padding: 20px;
    left: 70%;
    z-index: 10;
}

.slider-pagination__item {
    display: flex;
    width: 100%;
    padding: 0;
    /* height: 300px; */
    /* min-height: 300px; */
    /* max-height: 350px; */
}

.slider-pagination__item--svg {
    width: 20px;
    height: 20px;
    fill: #ccc;
    transition: 0.2s ease;
}

.slider-pagination__item--svg:hover {
    fill: #17709a;
    
}

.slider-promo__item--img {
    width: 100%;
    height: 100%;
}

.slider__button {
    height: 60px;
    width: 60px;
    padding: 0;
}

.slider__button--prev {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(-50%, -50%);
}

.slider__button--prev-svg, .slider__button--next-svg{
    width: 60px;
    height: 60px;
    fill: #ccc;
    transition: 0.2s ease;
}

.slider__button--prev-svg:hover, .slider__button--next-svg:hover{
    fill: rgb(189, 184, 184)
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
</style>
