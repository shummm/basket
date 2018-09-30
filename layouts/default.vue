<script>
import TheHeader from "~/components/Common/TheHeader.vue";
import Breadcrumbs from "~/components/Common/Breadcrumbs.vue";

export default {
  components: {
    TheHeader,
    Breadcrumbs
  }
};
</script>

<template>
<div>
  <svg version="1.1" 
  style="border: 0 !important; clip: rect(0 0 0 0) !important; height: 1px !important; margin: -1px !important; overflow: hidden !important; padding: 0 !important; position: absolute !important; width: 1px !important;"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

    <symbol id="arrow-left" viewBox="4 4 120 120">
        <title>
            arrow-left
        </title>
        <path d="m64.5,122.6c32,0 58.1-26 58.1-58.1s-26-58-58.1-58-58,26-58,58 26,58.1 58,58.1zm0-108c27.5,5.32907e-15 49.9,22.4 49.9,49.9s-22.4,49.9-49.9,49.9-49.9-22.4-49.9-49.9 22.4-49.9 49.9-49.9z"/>
        <path d="m70,93.5c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2 1.6-1.6 1.6-4.2 0-5.8l-23.5-23.5 23.5-23.5c1.6-1.6 1.6-4.2 0-5.8s-4.2-1.6-5.8,0l-26.4,26.4c-0.8,0.8-1.2,1.8-1.2,2.9s0.4,2.1 1.2,2.9l26.4,26.4z"/>
    </symbol>

    <symbol id="arrow-right" viewBox="4 4 120 120">
        <title>
            arrow-right
        </title>
        <path d="M64.5,122.6c32,0,58.1-26,58.1-58.1S96.5,6.4,64.5,6.4S6.4,32.5,6.4,64.5S32.5,122.6,64.5,122.6z M64.5,14.6    c27.5,0,49.9,22.4,49.9,49.9S92,114.4,64.5,114.4S14.6,92,14.6,64.5S37,14.6,64.5,14.6z"/>
        <path d="m51.1,93.5c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l26.4-26.4c0.8-0.8 1.2-1.8 1.2-2.9 0-1.1-0.4-2.1-1.2-2.9l-26.4-26.4c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l23.5,23.5-23.5,23.5c-1.6,1.6-1.6,4.2 0,5.8z"/>
    </symbol>

    <symbol id="dot" viewBox="0 0 500 550">
        <title>
            dot
        </title>
        <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z"/>
    </symbol>

</svg>

<div class="wrapper">
    <div class="container">
        <the-header />
        <breadcrumbs />
        <nuxt />
    </div>
</div>
</div>
</template>

<style>
body {
  font-size: 16px;
  line-height: 19px;
  font-weight: 400;
  font-family: "PT Sans", sans-serif;
  color: #000;
  font-style: normal;
}

html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html,
body {
  height: 100%;
  background-color: #ffffff;
}

a {
  background-color: transparent;
}

a:active,
a:hover {
  outline: 0;
}

.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
}

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

.container {
  width: 1110px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.row {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.row--reverse {
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  -ms-flex-direction: row-reverse;
  flex-direction: row-reverse;
}

.row--jc-fs {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.row--jc-fe {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.row--jc-c {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.row--jc-sa {
  -ms-flex-pack: distribute;
  justify-content: space-around;
}

.row--jc-sb {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.row--ai-c {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.row--ai-fe {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.row--wrap {
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
}

.grow {
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
}

@media (max-width: 1070px) {
  .row--media1070-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .row--media1070-jc-c {
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
  }

  .row--media1070-jc-fe {
    -webkit-box-pack: end;
    -ms-flex-pack: end;
    justify-content: flex-end;
  }
}

@media (max-width: 1024px) {
  .row--media1024-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
}

@media (max-width: 768px) {
  .row--media768-column {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .row--media768-jc-sb {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;
  }
}

@media (max-width: 590px) {
  .grow--media590-grow {
    -webkit-box-flex: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
  }
}

.column {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

.column--reverse {
  -webkit-box-orient: vertical;
  -webkit-box-direction: reverse;
  -ms-flex-direction: column-reverse;
  flex-direction: column-reverse;
}

.column--jc-fs {
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}

.column--jc-fe {
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
}

.column--jc-c {
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}

.column--jc-sa {
  justify-content: space-around;
}

.column--jc-sb {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.column--ai-c {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.column--ai-fe {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: flex-end;
}

.list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list--items-mr55 {
  margin-right: 55px;
}

.list--items-pr90:first-child {
  padding-right: 90px;
}

.list--items-pr15 {
  padding-right: 15px;
}

.list--items-mr55:last-child {
  margin-right: 0;
}

.list--items-mr50 {
  margin-right: 50px;
}

.list--items-mr50:last-child {
  margin-right: 0;
}

.list--items-mr40 {
  margin-right: 40px;
}

.list--items-mr40:last-child {
  margin-right: 0;
}

.list--items-mr30 {
  margin-right: 30px;
}

.list--items-mr30:last-child {
  margin-right: 0;
}

.list--items-mr25 {
  margin-right: 25px;
}

.list--items-mr25:last-child {
  margin-right: 0;
}

.list--items-mr20 {
  margin-right: 20px;
}

.list--items-mr20:last-child {
  margin-right: 0;
}

.list--items-mr15 {
  margin-right: 15px;
}

.list--items-mr15:last-child {
  margin-right: 0;
}

.list--items-mr12 {
  margin-right: 12px;
}

.list--items-mr12:last-child {
  margin-right: 0;
}

.list--items-mr10 {
  margin-right: 10px;
}

.list--items-mr10:last-child {
  margin-right: 0;
}

.list--items-mr7 {
  margin-right: 7px;
}

.list--items-mr7:last-child {
  margin-right: 0;
}

.list--items-mr5 {
  margin-right: 5px;
}

.list--items-mr5:last-child {
  margin-right: 0;
}

.list--items-mr4 {
  margin-right: 4px;
}

.list--items-mr4:last-child {
  margin-right: 0;
}

.list--items-mr3 {
  margin-right: 3px;
}

.list--items-mr3:last-child {
  margin-right: 0;
}

.list--items-mb40 {
  margin-bottom: 40px;
}

.list--items-mb40:last-child {
  margin-bottom: 0;
}

.list--items-mb35 {
  margin-bottom: 35px;
}

.list--items-mb35:last-child {
  margin-bottom: 0;
}

.list--items-mb30 {
  margin-bottom: 30px;
}

.list--items-mb30:last-child {
  margin-bottom: 0;
}

.list--items-mb25 {
  margin-bottom: 25px;
}

.list--items-mb25:last-child {
  margin-bottom: 0;
}

.list--items-mb20 {
  margin-bottom: 20px;
}

.list--items-mb20:last-child {
  margin-bottom: 0;
}

.list--items-mb15 {
  margin-bottom: 15px;
}

.list--items-mb15:last-child {
  margin-bottom: 0;
}

.list--items-mb10 {
  margin-bottom: 10px;
}

.list--items-mb10:last-child {
  margin-bottom: 0;
}

.list--items-mb5 {
  margin-bottom: 5px;
}

.list--items-mb5:last-child {
  margin-bottom: 0;
}

.list--items-pb25 {
  padding-bottom: 25px;
}

.list--items-pb25:last-child {
  padding-bottom: 0;
}

.list--items-br1 {
  border-right: 1px solid #f6f6f6;
}

.list--items-br1:last-child {
  border-right: none;
}

.m--t-a {
  margin-top: auto;
}

.m--t60 {
  margin-top: 60px;
}

.m--t30 {
  margin-top: 30px;
}

.m--t40 {
  margin-top: 40px;
}

.m--t15 {
  margin-top: 15px;
}

.m--t10 {
  margin-top: 10px;
}

.m--t8 {
  margin-top: 8px;
}

.m--t5 {
  margin-top: 5px;
}

.m--t2 {
  margin-top: 2px;
}

.m--l-a {
  margin-left: auto;
}

.m--l35 {
  margin-left: 35px;
}

.m--l30 {
  margin-left: 30px;
}

.m--l25 {
  margin-left: 25px;
}

.m--l20 {
  margin-left: 20px;
}

.m--l15 {
  margin-left: 15px;
}

.m--l10 {
  margin-left: 10px;
}

.m--l8 {
  margin-left: 8px;
}

.m--l5 {
  margin-left: 5px;
}

.m--r8 {
  margin-right: 8px;
}

.m--l8 {
  margin-left: 8px;
}

.m--l4 {
  margin-left: 4px;
}

.m--l120 {
  margin-left: 120px;
}

.m--r-a {
  margin-right: auto;
}

.m--r95 {
  margin-right: 95px;
}

.m--r75 {
  margin-right: 75px;
}

.m--r70 {
  margin-right: 70px;
}

.m--r60 {
  margin-right: 60px;
}

.m--r50 {
  margin-right: 50px;
}

.m--r45 {
  margin-right: 45px;
}

.m--r40 {
  margin-right: 40px;
}

.m--r30 {
  margin-right: 30px;
}

.m--r25 {
  margin-right: 25px;
}

.m--r20 {
  margin-right: 20px;
}

.m--r15 {
  margin-right: 15px;
}

.m--r10 {
  margin-right: 10px;
}

.m--r8 {
  margin-right: 8px;
}

.m--r5 {
  margin-right: 5px;
}

.m--r4 {
  margin-right: 4px;
}

.m--b-a {
  margin-bottom: auto;
}

.m--b240 {
  margin-bottom: 240px;
}

.m--b85 {
  margin-bottom: 85px;
}

.m--b80 {
  margin-bottom: 80px;
}

.m--b70 {
  margin-bottom: 70px;
}

.m--b60 {
  margin-bottom: 60px;
}

.m--b55 {
  margin-bottom: 55px;
}

.m--b50 {
  margin-bottom: 50px;
}

.m--b45 {
  margin-bottom: 45px;
}

.m--b40 {
  margin-bottom: 40px;
}

.m--b35 {
  margin-bottom: 35px;
}

.m--b30 {
  margin-bottom: 30px;
}

.m--b25 {
  margin-bottom: 25px;
}

.m--b20 {
  margin-bottom: 20px;
}

.m--b15 {
  margin-bottom: 15px;
}

.m--b10 {
  margin-bottom: 10px;
}

.m--b8 {
  margin-bottom: 8px;
}

.m--b5 {
  margin-bottom: 5px;
}

@media (max-width: 1070px) {
  .m--media1070-r0 {
    margin-right: 0;
  }

  .m--media1070-b25 {
    margin-bottom: 25px;
  }
}

@media (max-width: 1024px) {
  .m--media1024-t0 {
    margin-top: 0;
  }

  .m--media1024-b30 {
    margin-bottom: 30px;
  }

  .m--media1024-b20 {
    margin-bottom: 20px;
  }
}

@media (max-width: 768px) {
  .m--media768-b30 {
    margin-bottom: 30px;
  }
}

.p--t40 {
  padding-top: 40px;
}

.p--t10 {
  padding-top: 10px;
}

.p--l50 {
  padding-left: 50px;
}

.p--l40 {
  padding-left: 40px;
}

.p--l35 {
  padding-left: 35px;
}

.p--l30 {
  padding-left: 30px;
}

.p--l20 {
  padding-left: 20px;
}

.p--l15 {
  padding-left: 15px;
}

.p--r40 {
  padding-right: 40px;
}

.p--r30 {
  padding-right: 30px;
}

.p--r20 {
  padding-right: 20px;
}

.p--b40 {
  padding-bottom: 40px;
}

.p--b20 {
  padding-bottom: 20px;
}

.p--b10 {
  padding-bottom: 10px;
}

.text--uppercase {
  text-transform: uppercase;
}

.text {
  margin: 0;
  padding: 0;
  font-size: 16px;
  line-height: 19px;
  color: #454545;
  font-weight: 400;
  text-decoration: none;
}

.input {
  margin: 0;
  padding: 0;
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 8px 15px;
  border-radius: 5px;
}

.button {
  margin: 0;
  padding: 0;
  background-color: transparent;
  border: none;
  outline: none;
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
}

.text--white24 {
  font-size: 24px;
  line-height: 27px;
  color: #fff;
}

.text--white20 {
  font-size: 20px;
  line-height: 23px;
  color: #fff;
}

.text--white18 {
  font-size: 18px;
  line-height: 21px;
  color: #fff;
}

.text--white16 {
  font-size: 16px;
  line-height: 19px;
  color: #fff;
}

.text--white15 {
  font-size: 15px;
  line-height: 18px;
  color: #fff;
}

.text--white14 {
  font-size: 14px;
  line-height: 17px;
  color: #fff;
}

.text--white12 {
  font-size: 12px;
  line-height: 15px;
  color: #fff;
}

.text--black30 {
  font-size: 30px;
  line-height: 33px;
  color: #454545;
}

.text--black24 {
  font-size: 24px;
  line-height: 27px;
  color: #454545;
}

.text--black22 {
  font-size: 22px;
  line-height: 24px;
  color: #454545;
}

.text--black20 {
  font-size: 20px;
  line-height: 23px;
  color: #454545;
}

.text--black18 {
  font-size: 18px;
  line-height: 21px;
  color: #454545;
}

.text--black15 {
  font-size: 15px;
  line-height: 18px;
  color: #454545;
}

.text--black14 {
  font-size: 14px;
  line-height: 17px;
  color: #454545;
}

.text--black12 {
  font-size: 12px;
  line-height: 15px;
  color: #454545;
}

.text--grayMediumDark16 {
  font-size: 16px;
  line-height: 19px;
  color: #4b4b4b;
}

.text--lightBlue30 {
  font-size: 30px;
  line-height: 19px;
  color: #0a7eb5;
}

.text--center {
  text-align: center;
}

.text--right {
  text-align: right;
}

.text--uppercase {
  text-transform: uppercase;
}

.text--lowercase {
  text-transform: lowercase;
}

.text--td-underline {
  text-decoration: underline;
}

.text--td-none {
  text-decoration: none;
}

.text--va-top {
  vertical-align: top;
}

.text--bordered {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.table {
  border-collapse: separate;
}

.arrow--down {
  position: relative;
  left: 15px;
  bottom: 3px;
}
</style>
