<script>
  export default {
    name: 'TheHeader',
    data() {
      return {
        links: [
          {title: 'Каталог продукции', href: '/'},
          {title: 'Все бренды', href: '/'},
          {title: 'подарки на 14 февраля', href: '/'},
          {title: 'подарки на 23 февраля', href: '/'},
          {title: 'подарки на 8 марта', href: '/'}
        ]
      }
    }
  };
</script>

<template>
  <header class="header column column--jc-c">
    <div class="row row--jc-sb m--b40">
      <div class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="217" height="57"
             viewBox="0 0 217 57">
          <metadata>
            <x:xmpmeta xmlns:x="adobe:ns:meta/" x:xmptk="Adobe XMP Core 5.6-c138 79.159824, 2016/09/14-01:09:01">
              <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
                <rdf:Description rdf:about=""/>
              </rdf:RDF>
            </x:xmpmeta>
          </metadata>
          <image id="Samsung_Electronics_logo__english_.svg" data-name="Samsung_Electronics_logo_(english).svg"
                 width="217" height="57"
                 xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAANkAAAA5CAMAAACMJH7GAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAC+lBMVEUXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoXcJoAAACzkNdJAAAA/HRSTlMAEyMxP1NmfI6errzG0tri6O7x8vDs4NjQ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"/>
        </svg>
      </div>
      <div class="row row--ai-c">
        <form class="search-form row">
          <img src="~/assets/img/search.png" class="search-form__input__img" alt="">
          <input class="search-form__input m--r7">
          <button class="search-form__button text text--white16">Поиск</button>
        </form>
      </div>
    </div>
    <nav class="">
      <div class="nav">
        <ul class="list row row--jc-sb m0">
          <li class="nav__items"
              v-for="(link, i) in links"
              :key="i">
            <nuxt-link class="nav__link text text--uppercase text--grayMediumDark16" :to="link.href">
              {{link.title}}
              <span class="arrow--down">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  xmlns:xlink="http://www.w3.org/1999/xlink"
                                  width="9px" height="5px">
<image x="0px" y="0px" width="9px" height="5px"
       xlink:href="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAFCAQAAAA9Wg7gAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfiCQoWHSFeWzG8AAAAXklEQVQI1y3IoQ3CQBQA0FdEgyWgO0L3+CcwzNEGxwwsUNlUVqGaGwGFJDgShsBfBTz5qhjd8gKkncG08XZJ+1/pNZ6KuMYS2yLOcY9DURWkyddD55Q//lWbtY75BSuLmBjnijcVJAAAAABJRU5ErkJggg=="/>
</svg>
</span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    min-height: 210px;
  }

  .m--r7 {
    margin-right: 7px;
  }

  .nav {
  background: #92c8e1;
  }

  .nav__items {
    position: relative;
    padding: 10px;
    padding-right: 22px;
    cursor: pointer;
    -webkit-transition: 0.2s ease;
    transition: 0.2s ease;
    background: linear-gradient(90deg, #92c8e1, #b0d9ec);
    border-radius: 5px 5px 0 0;
  }

  .search-form {
    height: 30px;
  }

  .search-form__input {
    width: 312px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #d5d5d5;
    box-shadow: 0 0 5px rgba(9, 12, 18, .16) inset;
  }

  .search-form__input__img {
    position: relative;
    top: 7px;
    left: 26px;
    width: 15px;
    height: 16px;
  }

  .search-form__button {
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
</style>


