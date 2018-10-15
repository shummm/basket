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
  style="display:none"
    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

    <symbol id="logo" viewBox="0 0 217 57">
  <metadata>
<x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01        ">
   <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
      <rdf:Description rdf:about=""/>
   </rdf:RDF>
</x:xmpmeta>
</metadata>
<image id="Samsung_Electronics_logo__english_.svg" data-name="Samsung_Electronics_logo_(english).svg" width="217" height="57" xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAA5CAMAAACMJH7GAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC+lBMVEUXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoAAACzkNdJAAAA/HRSTlMAEyMxP1NmfI6errzG0tri6O7x8vDs4NjQ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"/>
    </symbol>

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

    <symbol id="arrow-down" viewBox="0 0 9 5">
    <title>
        arrow-down
        </title>
        <image x="0px" y="0px" width="9px" height="5px"
       xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAQAAAA9Wg7gAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCQoWHSFeWzG8AAAAXklEQVQI1y3IoQ3CQBQA0FdEgyWgO0L3+CcwzNEGxwwsUNlUVqGaGwGFJDgShsBfBTz5qhjd8gKkncG08XZJ+1/pNZ6KuMYS2yLOcY9DURWkyddD55Q//lWbtY75BSuLmBjnijcVJAAAAABJRU5ErkJggg=="/>
    </symbol>

</svg>
    <header class="header">
        <div class="wrapper">
            <the-header />
        </div>
    </header>
    <section>
        <div class="wrapper">
            <breadcrumbs />
        </div>
    </section>
    <section>
        <div class="wrapper">
            <nuxt />
        </div>
    </section>
</div>
</template>

<style>
body {
    height: 100%;
    background-color: #ffffff;
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 19px;
    font-weight: 400;
    font-family: "PT Sans", sans-serif;
    color: #000;
    font-style: normal;
    overflow: hidden;
}

.wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 1110px;
    margin: 0 auto;
}

.header {
    height: 210px;
}
/* .title {
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
}*/
</style>
