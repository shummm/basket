export default {
  methods: {
    formatPrice(str) {
      let regExp = new RegExp('(\\d)(?=(\\d\\d\\d)+([^\\d]|$))')
      return str.toString().replace(regExp, '$1 ')
    }
  }
}
