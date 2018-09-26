export default {
  methods: {
    formatPrice(str) {
      if(!!str) {
        let regExp = new RegExp('(\\d)(?=(\\d\\d\\d)+([^\\d]|$))')
        return str.toString().replace(regExp, '$1 ')
      }
    }
  }
}
