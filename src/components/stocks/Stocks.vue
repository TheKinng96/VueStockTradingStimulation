<template>
  <div>
    <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
  </div>
</template>

<script>
import Stock from './Stock.vue'

export default {
  data() {
    return {
      stocks: [
        {id: 1, name: 'BMW', price: 110},
        {id: 2, name: 'Google', price: 300},
        {id: 3, name: 'Facebook', price: 250},
        {id: 4, name: 'Twitter', price: 80},
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>