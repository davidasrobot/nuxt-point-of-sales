export default (context, inject) => {
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  }
  inject('formatCurrencies', numberWithCommas)
  context.$formatCurrencies = numberWithCommas
}
