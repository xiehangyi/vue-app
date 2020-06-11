<template>
  <div>{{name}}</div>
</template>
<script>
import { getName } from './gen.js'
export default {
  data () {
    return {
      name: ''
    }
  },
  created () {
    this.name = getName({ firstName: 'Mike', lastName: 'Jackson' })
  }
}
</script>
<style lang="less" scoped>

</style>
